import express from 'express';
import bodyParser from 'body-parser';
const app=express();
app.use(bodyParser.json());
class Course{
    constructor(public id:number,public courseName:string,public images:string,public task:number,public person:number){}
}
const courses=[
    new Course(1,'混合应用',"http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130",10,90),
    new Course(2,'信息素养实践',"http://usercontent.edu2act.cn/media/team/18-09-06/UTjLGPA9oHaKeHMLi9Ko4c.jpg?imageView2/1/w/230/h/130",3,80),
    new Course(3,'计算机导论',"http://usercontent.edu2act.cn/media/team/18-09-11/Ypf253J7ydMQ2CckxWf6zJ.jpg?imageView2/1/w/230/h/130",2,79),
    new Course(4,'测试方向——Web',"http://usercontent.edu2act.cn/media/team/18-09-11/AbbCZfnQVQHxyU2GBbQ5SB.jpg?imageView2/1/w/230/h/130",8,99),
    new Course(5,'H5与CSS3前端',"http://usercontent.edu2act.cn/media/team/18-09-11/B32yP44hiothFxyegigXe7.jpg?imageView2/1/w/230/h/130",8,99),
    new Course(6,'软件测试基础',"http://usercontent.edu2act.cn/media/team/18-09-09/jHw7UZ9hmNxJtTgCDuf9c3.jpg?imageView2/1/w/230/h/130",8,99),
    new Course(7,'暑假训练营',"http://usercontent.edu2act.cn/media/team/18-07-09/J3LxZ5cMMP9JFjGuDbSsh8.png?imageView2/1/w/230/h/130",8,99),
    new Course(8,'计算机导论',"http://usercontent.edu2act.cn/media/team/18-09-06/HUcdGNR48SfNpHPRjGQqXb.jpg?imageView2/1/w/230/h/130",8,99)
]

app.get('/api',(req,res)=>{
    res.end('hello world');
});

app.get('/api/course',(req,res)=>{
    // res.end(JSON.stringify(courses));
    res.json(courses);
});
app.get('/api/course/:id',(req,res)=>{
    req.params;
    res.json(courses.find((ele)=>ele.id==req.params.id));
});
app.post('/api',(req,res)=>{
    console.log(req.body);
    res.json(courses);
});
app.listen(8080);