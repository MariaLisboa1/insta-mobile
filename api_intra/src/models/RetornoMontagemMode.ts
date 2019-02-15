import * as Sequelize from 'sequelize';
import { BaseModelInterface } from '../interfaces/BaseModelInterface';

export interface RetornoMontAttributes {
    id?: number;
    cpf?: string;
    nome?: string;
    dt_nasc?: string;
    obs?: string;
    email?: string;
    fone?: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface MontadorInstance extends Sequelize.Instance<RetornoMontAttributes>, RetornoMontAttributes{}

export interface MontadorModel extends BaseModelInterface, Sequelize.Model<MontadorInstance, RetornoMontAttributes> {}

export default (Sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): MontadorModel => {
    const Montador: MontadorModel = Sequelize.define('Montador', {
        FILIAL: {
            type: DataTypes.STRING,
            allowNull: false, //se aceita nulo
            autoIncrement: false
        },
        NUMOS: {
            type: DataTypes.STRING,
            allowNull: false, //se aceita nulo
            autoIncrement: false
        },
        OCORRENCIA: {
            type: DataTypes.STRING,
            allowNull: false, //se aceita nulo
            autoIncrement: false
        },
        OBS_RETORNO:{
            type: DataTypes.STRING,
            allowNull: false, //se aceita nulo
            autoIncrement: false
        },
        OBS_NOVA_OS: {
            type: DataTypes.STRING,
            allowNull: false, //se aceita nulo
            autoIncrement: false
        },
        D_E_L_E_T:{
            type: DataTypes.STRING,
            allowNull: false, //se aceita nulo
            autoIncrement: false
        },
        DATA_RETORNO: {
            type: DataTypes.STRING,
            allowNull: false, //se aceita nulo
            autoIncrement: false
        },
        HORA_RETORNO: {
            type: DataTypes.STRING,
            allowNull: false, //se aceita nulo
            autoIncrement: false
        },
        R_E_C_N_O_: {
            type: DataTypes.STRING,
            allowNull: false, //se aceita nulo
            autoIncrement: false
        },
        COD_PRODUTO: {
            type: DataTypes.STRING,
            allowNull: false, //se aceita nulo
            autoIncrement: false
        },
        COD_TEC: {
            type: DataTypes.STRING,
            allowNull: false, //se aceita nulo
            autoIncrement: false
        },
        ITEM:{
            type: DataTypes.STRING,
            allowNull: false, //se aceita nulo
            autoIncrement: false
        }
    }, {
        tableName: 'RetornoMontagemRestify'
    })

    return Montador;
}