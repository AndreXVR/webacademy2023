export enum Turno{
    manha = "manhã",
    tarde = "tarde",
    noite = "noite"
}

export interface Curso{
    nome: string,
    area: "humanas"|"exatas"|"biologicas";
}


export class Turma{
    readonly _id: number;
    private _descricao: string;
    private _turno: Turno;
    private _curso: Curso;

    constructor(id: number, descricao: string, turno: Turno, curso: Curso){
        this._id = id,
        this._descricao = descricao,
        this._turno = turno,
        this._curso = curso
    }

    get id(): number{
        return this._id;
    }
    set id(id: number){
        this._id = id;
    }
}