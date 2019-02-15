"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (Sequelize, DataTypes) => {
    const Montador = Sequelize.define('Montador', {
        FILIAL: {
            type: DataTypes.STRING,
            allowNull: false,
            autoIncrement: false
        },
        NUMOS: {
            type: DataTypes.STRING,
            allowNull: false,
            autoIncrement: false
        },
        OCORRENCIA: {
            type: DataTypes.STRING,
            allowNull: false,
            autoIncrement: false
        },
        OBS_RETORNO: {
            type: DataTypes.STRING,
            allowNull: false,
            autoIncrement: false
        },
        OBS_NOVA_OS: {
            type: DataTypes.STRING,
            allowNull: false,
            autoIncrement: false
        },
        D_E_L_E_T: {
            type: DataTypes.STRING,
            allowNull: false,
            autoIncrement: false
        },
        DATA_RETORNO: {
            type: DataTypes.STRING,
            allowNull: false,
            autoIncrement: false
        },
        HORA_RETORNO: {
            type: DataTypes.STRING,
            allowNull: false,
            autoIncrement: false
        },
        R_E_C_N_O_: {
            type: DataTypes.STRING,
            allowNull: false,
            autoIncrement: false
        },
        COD_PRODUTO: {
            type: DataTypes.STRING,
            allowNull: false,
            autoIncrement: false
        },
        COD_TEC: {
            type: DataTypes.STRING,
            allowNull: false,
            autoIncrement: false
        },
        ITEM: {
            type: DataTypes.STRING,
            allowNull: false,
            autoIncrement: false
        }
    }, {
        tableName: 'RetornoMontagemRestify'
    });
    return Montador;
};
