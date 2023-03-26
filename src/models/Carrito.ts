import {DataTypes} from 'sequelize';
import sequilize from '../database';

export const Carrito = sequilize.define('carritos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_cliente: {
        type: DataTypes.INTEGER
    },
    cantidad:{
        type: DataTypes.INTEGER
    },
    precio_unitario:{
        type: DataTypes.INTEGER
    },
    marca:{
        type: DataTypes.STRING
    },
    img:{
        type: DataTypes.STRING
    },
    categoria:{
        type: DataTypes.STRING
    },
    descripcion:{
        type: DataTypes.STRING
    },
    finalizado:{
        type: DataTypes.BOOLEAN
    }

})