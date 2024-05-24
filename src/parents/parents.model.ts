import {Column, DataType, Model, Table} from "sequelize-typescript";

interface ParentCreationAttrs {
    surname: string;
    name: string;
    surname2: string;
    data: string;
    series: string;
    numb: string;
    phone: string;
}

@Table({tableName: 'parents'})
export class Parent extends Model<Parent, ParentCreationAttrs> {
    @Column({type: DataType.INTEGER, unique:true, primaryKey: true, autoIncrement: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    surname: string;

    @Column({type: DataType.STRING, allowNull: false})
    name: string;

    @Column({type: DataType.STRING, allowNull: false})
    surname2: string;

    @Column({type: DataType.STRING, allowNull: false})
    data: string;

    @Column({type: DataType.STRING, allowNull: false})
    series: string;

    @Column({type: DataType.STRING, allowNull: false})
    numb: string;

    @Column({type: DataType.STRING, allowNull: false})
    phone: string;

}