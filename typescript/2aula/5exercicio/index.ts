type Status = "EM_ESTOQUE" |
    "ESGOTADO";
class Produto {
    codigo: number;
    nome: string;
    categoria: string;
    preco: number;
    status: Status;

    constructor(nome: string, categoria: string, preco: number, status: Status) {
        this.codigo = Math.floor(Math.random() * Number.MAX_VALUE);
        this.nome = nome;
        this.categoria = categoria;
        this.preco = preco;
        this.status = status;
    }
    protected get getCodigo(): number {
        return this.codigo;
    }
    protected get getNome(): string {
        return this.nome;
    }
    protected set setNome(nome: string) {
        this.nome = nome;
    }
    protected get getCategoria() {
        return this.categoria;
    }
    protected set setCategoria(categoria: string) {
        this.categoria = categoria;
    }
    protected get getPreco() {
        return this.preco;
    }
    protected set setPreco(preco: number) {
        this.preco = preco;
    }
    protected get getStatus() {
        return this.status;
    }
    protected set setStatus(status: Status) {
        this.status = status;
    }
}

class ProdutoInfantil extends Produto {
    private _faixa_etaria: number;
    constructor(nome: string, categoria: string, preco: number, status: Status, faixa_etaria: number) {
        super(nome, categoria, preco, status);
        if(typeof faixa_etaria === "number"){
            if(this.validaFaixaEtaria(faixa_etaria)){
                this._faixa_etaria = faixa_etaria;
            }else{
                console.log("Faixa etária inválida");
            }
        }else{
            console.log("Faixa etária inválida");
        }
    }
    get getFaixaEtaria() {
        return this._faixa_etaria;
    }
    set setFaixaEtaria(faixaEtaria: number) {
        this._faixa_etaria = faixaEtaria;
    }
    validaFaixaEtaria(faixaEtaria: number): boolean{
        let flag:boolean = true;
        if(faixaEtaria > 12){
            flag = false;
        }   
        return flag;
    }
}
const novoProdutoInfantil = new ProdutoInfantil("Shampoo", "CuidadosPessoais", 30, "ESGOTADO", 12);
const novoProduto = new Produto("Shampoo", "Cuidados Pessoais", 30, "ESGOTADO");
console.log(novoProdutoInfantil.nome);
