window.addEventListener("resize",addname());
function addname(){
    var Nikename=prompt("请输入昵称")
    try{
        var errmessg;
        if (Nikename == "") throw "请输入昵称";
        if(Nikename.length>10) throw "请输入小于10个字符的名字"
        if(Nikename.length<3) throw "请输入大于3个字符的数字"
    }
    catch(err){
        var errmssg="错误："+err+"，请修改"
        alert(errmssg);
        location.reload();
    }
    var name=document.getElementById("spieler").innerHTML+=Nikename;
}