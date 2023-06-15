import {
    Table, Model, Column,
    DataType, IsUUID, PrimaryKey,
    AllowNull, IsEmail, Unique,
    ForeignKey, BelongsTo, HasOne, HasMany
} from "sequelize-typescript";
import {Vendas} from "./Vendas"
@Table({
    timestamps: true,
})
export class Clientes extends

    Model {
    @IsUUID('all')
    @PrimaryKey
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV1,
    })
    id!: string;
    @AllowNull(false)
    @Unique
    @Column({
        type: DataType.STRING,
    })
    nome!: string;
    @AllowNull(false)
    @Column({
        type: DataType.STRING,
    })
    email!: string;
    @AllowNull(false)
    @Column({
        type: DataType.STRING,
    })
    endereco!: string;
    @HasMany(() => Vendas)
    venda!: Vendas;
}