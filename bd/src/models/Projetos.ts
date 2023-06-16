import {
    Table, Model, Column,
    DataType, IsUUID, PrimaryKey,
    AllowNull, IsEmail, Unique,
    ForeignKey, BelongsTo, HasOne, HasMany
} from "sequelize-typescript";
import {Departamentos} from "./Departamentos"
@Table({
    timestamps: true,
    paranoid: true
})
export class Projetos extends
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
        type: DataType.DATE,
    })
    dataFinalizacao!: string;
    @ForeignKey(() => Departamentos)
    @AllowNull(true)
    @Column({
        type: DataType.UUID,
    })
    departamentoId!: string;
}