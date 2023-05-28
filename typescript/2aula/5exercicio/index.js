var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Produto = /** @class */ (function () {
    function Produto(nome, categoria, preco, status) {
        this.codigo = Math.floor(Math.random() * Number.MAX_VALUE);
        this.nome = nome;
        this.categoria = categoria;
        this.preco = preco;
        this.status = status;
    }
    Object.defineProperty(Produto.prototype, "getCodigo", {
        get: function () {
            return this.codigo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "getNome", {
        get: function () {
            return this.nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "setNome", {
        set: function (nome) {
            this.nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "getCategoria", {
        get: function () {
            return this.categoria;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "setCategoria", {
        set: function (categoria) {
            this.categoria = categoria;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "getPreco", {
        get: function () {
            return this.preco;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "setPreco", {
        set: function (preco) {
            this.preco = preco;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "getStatus", {
        get: function () {
            return this.status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "setStatus", {
        set: function (status) {
            this.status = status;
        },
        enumerable: false,
        configurable: true
    });
    return Produto;
}());
var ProdutoInfantil = /** @class */ (function (_super) {
    __extends(ProdutoInfantil, _super);
    function ProdutoInfantil(nome, categoria, preco, status, faixa_etaria) {
        var _this = _super.call(this, nome, categoria, preco, status) || this;
        if (typeof faixa_etaria === "number") {
            if (_this.validaFaixaEtaria(faixa_etaria)) {
                _this._faixa_etaria = faixa_etaria;
            }
            else {
                console.log("Faixa etária inválida");
            }
        }
        else {
            console.log("Faixa etária inválida");
        }
        return _this;
    }
    Object.defineProperty(ProdutoInfantil.prototype, "getFaixaEtaria", {
        get: function () {
            return this._faixa_etaria;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProdutoInfantil.prototype, "setFaixaEtaria", {
        set: function (faixaEtaria) {
            this._faixa_etaria = faixaEtaria;
        },
        enumerable: false,
        configurable: true
    });
    ProdutoInfantil.prototype.validaFaixaEtaria = function (faixaEtaria) {
        var flag = true;
        if (faixaEtaria > 12) {
            flag = false;
        }
        return flag;
    };
    return ProdutoInfantil;
}(Produto));
var novoProdutoInfantil = new ProdutoInfantil("Shampoo", "CuidadosPessoais", 30, "ESGOTADO", 13);
var novoProduto = new Produto("Shampoo", "Cuidados Pessoais", 30, "ESGOTADO");
console.log(novoProdutoInfantil.nome);
