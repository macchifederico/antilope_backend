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
    dni:{
        type: DataTypes.STRING
    },
    telefono:{
        type: DataTypes.STRING
    },
    esCelular:{
        type: DataTypes.BOOLEAN
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
        type: DataTypes.STRING
    }
},{
    timestamps: false
});