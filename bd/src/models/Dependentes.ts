import {
    Table, Model, Column,
    DataType, IsUUID, PrimaryKey,
    AllowNull, IsEmail, Unique,
    ForeignKey, BelongsTo, HasOne, HasMany
} from "sequelize-typescript";
import { Funcionarios } from "./Funcionarios";
@Table({
    timestamps: true,
    paranoid: true
})
export class Dependentes extends
    Model {
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
    nome!: string;
    @AllowNull(false)
    @Column({
        type: DataType.INTEGER,
    })
    idade!: number;
    @ForeignKey(() => Funcionarios)
    @AllowNull(true)
    @Column({
        type: DataType.UUID,
    })
    funcionarioId!: string;
}