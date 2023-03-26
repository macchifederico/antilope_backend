import {DataTypes, DataType} from 'sequelize';
import sequilize from '../database';

//relacionado con
import {Categoria} from './Categoria';

export const Producto = sequilize.define('productos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    sku:{
        type: DataTypes.STRING
    },
    descripcion:{
        type: DataTypes.STRING
    },
    marca:{
        type: DataTypes.STRING
    },
    precio:{
        type: DataTypes.INTEGER
    },
    img:{
        type: DataTypes.STRING
    },
    stock:{
        type: DataTypes.INTEGER
    }
},{
    timestamps: false
});

