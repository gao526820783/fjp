var today=new Date();
function initArray(){
  this.length=initArray.arguments.length
  for(var i=0;i<this.length;i++)
  this[i+1]=initArray.arguments[i] }
  var xq=new initArray(
   "星期日",
   "星期一",
   "星期二",
   "星期三",
   "星期四",
   "星期五",
   "星期六");
var m = today.getMonth()+1;
var d = today.getDate();
if(m<10) {
m='0'+m
}
if(d<10) {
d='0'+d
}

var calendar = new Date();
var month = calendar.getMonth();
var date = calendar.getDate();
if ((month == 0) && (date == 1)) document.write("元旦");
if ((month == 2) && (date == 12)) document.write("植树节");
if ((month == 3) && (date == 5)) document.write("清明节");
if ((month == 4) && (date == 1)) document.write("国际劳动节");
if ((month == 4) && (date == 4)) document.write("青年节");
if ((month == 5) && (date == 1)) document.write("国际儿童节");
if ((month == 7) && (date == 1)) document.write("建军节");
if ((month == 9) && (date == 1)) document.write("国庆节/国际音乐节/国际老人节");
if ((month == 11) && (date == 24)) document.write("平安夜");
if ((month == 11) && (date == 25)) document.write("圣诞节");
var D=new Date();
var yy=D.getFullYear();
function showCal(){
document.write(yy,"年<br/><span class='fs-29'>");
document.write(m,"月",d,"日","</span>");

}
showCal();