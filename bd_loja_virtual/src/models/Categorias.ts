import {
    Table, Model, Column,
    DataType, IsUUID, PrimaryKey,
    AllowNull, IsEmail, Unique,
    ForeignKey, BelongsTo, HasOne, HasMany
} from "sequelize-typescript";
import {Produtos} from "./Produtos"
@Table({
    timestamps: true,
})
export class Categorias extends
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
    desc!: string;
    @HasMany(() => Produtos)
    produto!: Produtos;
}