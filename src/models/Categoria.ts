import {DataTypes} from 'sequelize';
import sequilize from '../database';

import { Producto } from './Producto';

export const Categoria = sequilize.define('categorias', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre:{
        type: DataTypes.STRING
    }    
},{
    timestamps:false
});

Categoria.hasOne(Producto);

Producto.belongsTo(Categoria,{
    foreignKey: {
        name: 'id'
    }
});