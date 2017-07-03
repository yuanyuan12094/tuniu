//加载所需要的模块
const http=require('http');
const express=require('express');
const user=require('./user');
const qs=require('querystring');
//创建服务器
var app=express();
http.createServer(app).listen(8080);
//中间件引入静态资源
app.use(express.static('public'));

app.get('/',(req,res)=>{
	//请求重定向到另一个url
	res.redirect('/register.html');
});
//动态资源 中间件
app.use((req,res,next)=>{
	if(req.method==='POST'){
		req.on('data',(buf)=>{
			req.body=qs.parse(buf.toString());
			next();
		})
	}else{
		next();	
	}
});
app.post('/user/register',user.register);
app.post('/user/login',user.login);