function createcontcalc(tagname,attrname,attrvalue){
    var ele=document.createElement(tagname)
    ele.setAttribute(attrname,attrvalue)
    return ele;
}
function createinput(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2){
    var ele=document.createElement(tagname)
    ele.setAttribute(attrname,attrvalue)
    ele.setAttribute(attrname1,attrvalue1)
    ele.setAttribute(attrname2,attrvalue2)
    return ele;
}
function createbutton(tagname,attrname,attrvalue,content){
    var ele=document.createElement(tagname)
    ele.setAttribute(attrname,attrvalue)
    ele.innerHTML=content
    return ele;
}
function createbutttone(tagname,attrname,attrvalue,attrname1,attrvalue1,content){
    var ele=document.createElement(tagname)
    ele.setAttribute(attrname,attrvalue)
    ele.setAttribute(attrname1,attrvalue1)
    ele.innerHTML=content
    return ele;
}


var cont=createcontcalc("div","class","container-fluid");
var calc=createcontcalc("div","class","calculator");

var inp=createinput("input","type","text","placeholder","0","id","output-screen");

var clear=createbutton("button","onclick","Clear()","Cl");
var butdel=createbutton("button","onclick","del()","DEL");
var butmod=createbutton("button","onclick","display('%')","%");
var butdiv=createbutton("button","onclick","display('/')","/");
var but7=createbutton("button","onclick","display(7)","7");
var but8=createbutton("button","onclick","display(8)","8");
var but9=createbutton("button","onclick","display(9)","9");
var butmul=createbutton("button","onclick","display('*')","*");
var but4=createbutton("button","onclick","display(4)","4");
var but5=createbutton("button","onclick","display(5)","5");
var but6=createbutton("button","onclick","display(6)","6");
var butmin=createbutton("button","onclick","display('-')","-");
var but1=createbutton("button","onclick","display(1)","1");
var but2=createbutton("button","onclick","display(2)","2");
var but3=createbutton("button","onclick","display(3)","3");
var butplus=createbutton("button","onclick","display('+')","+");
var butdot=createbutton("button","onclick","display('.')",".");
var but0=createbutton("button","onclick","display(0)","0");
var buteq=createbutttone("button","onclick","Calculate('=')","class","equal","=");

calc.append(inp,clear,butdel,butmod,butdiv,but7,but8,but9,butmul,but4,but5,but6,butmin,but1,but2,but3,butplus,butdot,but0);
calc.append(buteq);
cont.append(calc);
document.body.append(cont);


let outputScreen=document.getElementById("output-screen");
function display(num){
    outputScreen.value += num;
}
function Calculate(){
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err)
    {
        alert("invalid key press")
    }
}
function Clear(){
    outputScreen.value = "";
}
function del(){
    outputScreen.value = outputScreen.value.slice(0,-1);
}