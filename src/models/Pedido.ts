import {DataTypes} from 'sequelize';
import sequilize from '../database';

export const Pedido = sequilize.define('pedidos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_carrito:{
        type: DataTypes.INTEGER
    },
    id_cliente: {
        type: DataTypes.INTEGER
    },
    nombre_cliente: {
        type: DataTypes.STRING
    },
    apellido_cliente: {
        type: DataTypes.STRING
    },
    telefono_cliente: {
        type: DataTypes.STRING
    },
    direccion_envio: {
        type: DataTypes.STRING
    },
    sucursal_entrega: {
        type: DataTypes.STRING
    },
    estado_pedido: {
        type: DataTypes.STRING
    },
    fecha_pedido: {
        type: DataTypes.DATE
    },
    fecha_estimada_entrega: {
        type: DataTypes.DATE
    }
},{
    timestamps: false
})