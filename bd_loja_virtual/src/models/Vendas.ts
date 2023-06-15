import {
    Table, Model, Column, DataType, IsUUID, PrimaryKey,
    AllowNull, IsEmail, Unique, ForeignKey, HasOne
} from "sequelize-typescript";
import { Clientes } from "./Clientes";
import { Produtos } from "./Produtos";
@Table({
    timestamps: true,
})
export class Vendas extends Model {
    @IsUUID('all')
    @PrimaryKey
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV1,
    })
    id!: string;
    @AllowNull(false)
    @Column({
        type: DataType.STRING,
    })
    @ForeignKey(() => Produtos)
    @AllowNull(true)
    @Column({
        type: DataType.UUID,
    })
    produtoId!: string;
    @ForeignKey(() => Clientes)
    @AllowNull(true)
    @Column({
        type: DataType.UUID,
    })
    clienteId!: string;
}