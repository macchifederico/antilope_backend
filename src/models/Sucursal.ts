import {DataTypes} from 'sequelize';
import sequilize from '../database';

export const Sucursal = sequilize.define('sucursal', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre:{
        type: DataTypes.STRING
    },
    direccion:{
        type: DataTypes.STRING
    },
    localidad:{
        type: DataTypes.STRING
    },
    cod_postal:{
        type: DataTypes.STRING
    },
    provincia:{
        type: DataTypes.STRING
    }
},{
    timestamps: false
})