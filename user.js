//加载连接池
const pool=require('./pool');
module.exports={
	register:(req,res)=>{
        //从请求消息里面读取uname和upwd
        var uname=req.body.uname;
        var upwd=req.body.upwd;
        //从连接池中获取连接，执行数据库INSERT post请求读取数据的方法
        pool.getConnection((err,conn)=>{
            if(err){
                console.log(err);
            }else{
                conn.query("INSERT INTO tuniu_user VALUES(null,?,?)",[uname,upwd],(err,result)=>{
                    if(result.affectedRows===1){
                        var data={code:200,msg:'register success'};
                    }else{
                        var data={code:200,msg:'sql err'}
                    }
                    res.json(data);
                    conn.release();
                })
            }
        })
    },
    login:(req,res)=>{
        //接收客户端提交的uname和upwd
        var uname=req.body.uname;
        var upwd=req.body.upwd;
        //链接到数据库
        pool.getConnection((err,conn)=>{
            conn.query("SELECT * FROM tuniu_user WHERE uname=? AND upwd=?",[uname,upwd],(err,result)=>{
                if(err){
                    var data={code:500,msg:'sql err'};
                }else if(result.length===0){
                    var data={code:400,msg:'uname or upwd err'};
                }else{
                    var data={code:200,msg:'login success',uid:result[0].uid};
                }
                res.json(data);
                conn.release();
            })
        })

    }
	
};