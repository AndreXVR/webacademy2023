import express from "express";
import {clientesRouter} from "./routes/Clientes.routes";
import {produtosRouter} from "./routes/Produtos.routes";
import {categoriasRouter} from "./routes/Categorias.routes";
import {vendasRouter} from "./routes/Vendas.routes";
import { VersaoDB } from "./models/VersaoDB";
import { Clientes } from "./models/Clientes";
import { Produtos } from "./models/Produtos";
import { Categorias } from "./models/Categorias";
import { Vendas } from "./models/Vendas";
import { api } from "./api.info";
import connection from "./db/config"
import {migracoes, MigracaoDB} from "./db/migracoes"


const routes = [
    clientesRouter,
    produtosRouter,
    categoriasRouter,
    vendasRouter
]

const models = [
    VersaoDB,
    Clientes,
    Produtos,
    Categorias,
    Vendas
]

export class Api {
    public server: express.Application;
    constructor() {
        this.server = express();
        //this.middleware();
        //this.router();
    }
    /*
    private middleware() {
        this.server.use(express.json());
    }
    private router() {
        this.server.use(routes);
    }*/

    async bootstrap():
        Promise<Api> {
        try {
            await this.middleware();
            await this.router();
            await this.initModels();
            await this.migrations();
        } catch (err) {
            console.error(err);
        }
        return this;
    }

    private async middleware() {
        this.server.use(express.json());
    }
    private async router() {
        this.server.use(routes);
        try {
            await
                this.server.listen(api.defaultPort);
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    private async initModels() {
        await connection.authenticate()
            .then(async () => {
                console.info('MySQL DB Conectado!');
                await connection.addModels(models);
                await connection.sync();
            })
            .then(() => {
                console.info('DB sync!');
            })
            .catch((err) => {
                console.error(err);
                throw err;
            });
    }

    private async migrations() {
        let versaoAtualBanco = await VersaoDB.findByPk(api.db.id);
        let numeroVersaoAtualBanco = versaoAtualBanco == null ? 0 :
            versaoAtualBanco.numeroVersao;
        console.info('VERSAO DO BANCO API-EMPRESA: ' + numeroVersaoAtualBanco);
        if (numeroVersaoAtualBanco < api.db.dbVersion) {
            console.info(migracoes);
            let models: string[] = [];
            for (let i = numeroVersaoAtualBanco; i < api.db.dbVersion; i++) {
                const migracao: MigracaoDB | undefined = migracoes.get(i + 1);
                if (migracao && migracao.consultas) {
                    if (migracao.consultas !== null) {
                        for (const consulta of migracao.consultas) {
                            console.info('executando: ' + consulta.query);
                            if (models.indexOf(consulta.model) < 0) {
                                await connection.query(consulta.query);
                                console.info(' executed!');
                            } else {
                                console.info(' not executed: new model.');
                            }
                        }
                    }
                }
            }
            if (versaoAtualBanco == null) {
                await VersaoDB.create({ id: api.db.id, numeroVersao: api.db.dbVersion });
            } else {
                versaoAtualBanco.numeroVersao = api.db.dbVersion;
                await versaoAtualBanco.save();
            }
        }
        await connection.sync()
            .then(() => {
                console.info('Models sync!');
            })
            .catch((error) => {
                console.error(error);
            });
    }
}


