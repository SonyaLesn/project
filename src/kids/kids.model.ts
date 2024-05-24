import {Column, DataType, Model, Table} from "sequelize-typescript";

interface KidCreationAttrs {
    surname: string;
    name: string;
    data: string;
    information: string;
}

@Table({tableName: 'kids'})
export class Kid extends Model<Kid, KidCreationAttrs> {
    @Column({type: DataType.INTEGER, unique:true, primaryKey: true, autoIncrement: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    surname: string;

    @Column({type: DataType.STRING, allowNull: false})
    name: string;

    @Column({type: DataType.STRING, allowNull: false})
    data: string;

    @Column({type: DataType.STRING, allowNull: false})
    information: string;


}