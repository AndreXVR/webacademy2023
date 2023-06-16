import {
    Table, Model, Column, DataType, IsUUID, PrimaryKey,
    AllowNull, IsEmail, Unique, HasMany, ForeignKey
} from "sequelize-typescript";
import { Dependentes } from "./Dependentes";
import { Departamentos } from "./Departamentos";
@Table({
    timestamps: true,
    paranoid: true
})
export class Funcionarios extends Model {
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
    name!: string;

    @AllowNull(false)
    @Column({
        type: DataType.STRING,
    })
    fone!: string;
    @AllowNull(false)
    @Unique
    @IsEmail
    @Column({
        type: DataType.STRING,
    })
    email!: string;
    @AllowNull(false)
    @Column({
        type: DataType.INTEGER,
    })
    idade!: number;
    @HasMany(() => Dependentes)
    dependente!: Dependentes;
    @ForeignKey(() => Departamentos)
    @AllowNull(true)
    @Column({
        type: DataType.UUID,
    })
    departamentoId!: string;
}