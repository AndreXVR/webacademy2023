import {
    Table, Model, Column,
    DataType, IsUUID, PrimaryKey,
    AllowNull, IsEmail, Unique,
    ForeignKey, BelongsTo, HasOne, HasMany
} from "sequelize-typescript";
import { Categorias } from "./Categorias";
import {Vendas} from "./Vendas"
@Table({
    timestamps: true,
})
export class Produtos extends
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
    desc!: string;
    @AllowNull(false)
    @Column({
        type: DataType.DOUBLE,
    })
    preco!: string;
    @AllowNull(false)
    @Column({
        type: DataType.INTEGER,
    })
    qtde!: string;
    @ForeignKey(() => Categorias)
    @AllowNull(true)
    @Column({
        type: DataType.UUID,
    })
    categoriaId!: string;
    @HasMany(() => Vendas,
        'id')
    venda!: Vendas;
}