import {DataTypes} from 'sequelize';
import sequilize from '../database';

export const Cliente = sequilize.define('clientes', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre:{
        type: DataTypes.STRING
    },
    apellido:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    direccion:{
        type: DataTypes.STRING
    },
    codigoPostal: {
        type: DataTypes.INTEGER
    }
},{
    timestamps: false
});