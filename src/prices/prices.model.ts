import {Column, DataType, Model, Table} from "sequelize-typescript";

interface PriceCreationAttrs {
    price: string;
    data: string;
    information: string;
}

@Table({tableName: 'Prices'})
export class Price extends Model<Price, PriceCreationAttrs> {
    @Column({type: DataType.INTEGER, unique:true, primaryKey: true, autoIncrement: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    price: string;

    @Column({type: DataType.STRING, allowNull: false})
    data: string;

    @Column({type: DataType.STRING, allowNull: false})
    information: string;


}
