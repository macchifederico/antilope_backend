import mysql from 'promise-mysql2';
import keys from './keys';

const pool= mysql.createPool(keys.database);

pool.getConnection()
    .then(conn => {
        pool.releaseConnection(conn);
        console.log('DB connected');
    })

export default pool;
