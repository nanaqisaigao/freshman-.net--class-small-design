function getEndTime(myYear){
  //把最终时间设置为当前年份的高考时间
    var myEndTime = new Date(''+myYear+'/06/07 00:00:00');
    // Date() 返回当日的日期和时间
    return myEndTime;
}

function countDown(){
    var mydate = new Date();
    //设置一个新的时间
    var year = '2021';
    var EndTime = getEndTime(year);
    //更改当前时间的year为2021 EndTime为最终时间
    var NowTime = new Date();
    //设置一个新的时间
    // xxx.getTime(); 获取当前时间
    if( (EndTime.getTime() - NowTime.getTime() ) < 0){
        year = mydate.getFullYear() + 1;
        //xxx.getFullYear 获得完整年份 
        EndTime = getEndTime(year);
          //如果当前时间比最终时间大，最终时间年份+1
    }
    var t = EndTime.getTime() - NowTime.getTime();//t为差值的年月日之和

    // Math.floor()：根据“floor”的字面意思“地板”
    // Math.ceil()：根据“ceil”的字面意思“天花板”
    // Math.round()：根据“round”的字面意思“附近、周围”

    var d=Math.floor(t/1000/60/60/24);
    var h=Math.floor(t/1000/60/60%24);
    var m=Math.floor(t/1000/60%60);
    var s=Math.floor(t/1000%60);
    //取年月日秒的整数

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;
    //把html中年月日的内容更改成 运算后的年月日
} 
setInterval(countDown,1000);//每一秒获得一个新的值  无限循环

// var myDate = new Date();

// myDate.getYear(); //获取当前年份(2位)

// myDate.getFullYear(); //获取完整的年份(4位,1970-????)

// myDate.getMonth(); //获取当前月份(0-11,0代表1月) // 所以获取当前月份是myDate.getMonth()+1;

// myDate.getDate(); //获取当前日(1-31)

// myDate.getDay(); //获取当前星期X(0-6,0代表星期天)

// myDate.getTime(); //获取当前时间(从1970.1.1开始的毫秒数)

// myDate.getHours(); //获取当前小时数(0-23)

// myDate.getMinutes(); //获取当前分钟数(0-59)

// myDate.getSeconds(); //获取当前秒数(0-59)

// myDate.getMilliseconds(); //获取当前毫秒数(0-999)

// myDate.toLocaleDateString(); //获取当前日期

// var mytime=myDate.toLocaleTimeString(); //获取当前时间

// myDate.toLocaleString( ); //获取日期与时间