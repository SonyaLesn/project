import {Column, DataType, Model, Table} from "sequelize-typescript";

interface AgreementCreationAttrs {
    numb: string;
    data: string;
    time: string;
    information: string;
}

@Table({tableName: 'agreements'})
export class Agreement extends Model<Agreement, AgreementCreationAttrs> {
    @Column({type: DataType.INTEGER, unique:true, primaryKey: true, autoIncrement: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    numb: string;

    @Column({type: DataType.STRING, allowNull: false})
    data: string;

    @Column({type: DataType.STRING, allowNull: false})
    time: string;

    @Column({type: DataType.STRING, allowNull: false})
    information: string;


}
