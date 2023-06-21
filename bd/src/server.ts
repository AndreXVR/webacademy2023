import express from "express";
import { funcionariosRouter } from "./routes/Funcionarios.routes";
import { departamentosRouter } from "./routes/Departamentos.routes";
import { projetosRouter } from "./routes/Projetos.routes";
import { dependentesRouter } from "./routes/Dependentes.routes";
import { Funcionarios } from "./models/Funcionarios";
import { Departamentos } from "./models/Departamentos";
import { Projetos } from "./models/Projetos";
import { Dependentes } from "./models/Dependentes";
import { VersaoDB } from "./models/VersaoDB";
import { api } from "./api.info";
import connection from "./db/config"
import {migracoes, MigracaoDB} from "./db/migracoes"

const routes = [
    departamentosRouter,
    projetosRouter,
    funcionariosRouter,
    dependentesRouter,
]
const models = [
    VersaoDB,
    Funcionarios,
    Departamentos,
    Projetos,
    Dependentes,
];

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


