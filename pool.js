/**
 * Created by bjwsl-001 on 2017/6/1.
 */
//���𴴽����ݿ����ӳ�
const mysql=require('mysql');
var pool=mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'tuniu',
    poot:3306,
    connectionLimit:5
});
module.exports=pool;