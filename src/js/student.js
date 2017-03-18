//9.3 使用jquery
//var $=require('jquery');

//1定义模块
var Student={
    name:'马云测试',
    speak:function(){
        return this.name;
    },
    //9.0 定义函数获取数据
    getData:function(){
        //9.2 使用fetch 发送Ajax
        var url='/api/theaters_data';
        fetch(url).then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data);
        }).catch(function(e) {
            console.log("Oops, error");
        });

        //9.31 使用JQ
        //$.ajax({
        //    //url:'http://localhost:9000/theaters_data',
        //    url:'/api/theaters_data',
        //    success:function(res){
        //        console.log(res);
        //    }
        //})
    }
};
//2 暴露接口
module.exports=Student;