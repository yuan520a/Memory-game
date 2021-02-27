var imgpath = new Array;
var match = new Array;
var num_array = new Array;
var num_ = new Array;
var group=0;
function addnum(numm) {
    var i = 0;
    loop: for (; i < numm; i++) {
        var num = parseInt(Math.random() * numm);
        if (num_array.length == 0) {
            num_array.push(num);
        }
        if (num_array.includes(num)) {
            if (i == numm - 1) {
                break;
            }
            i--;
            continue loop;

        }
        //console.log(num_array[i])
        num_array.push(num);
    }
}
addnum(16)




imgpath = ["./pics/card1.png", "./pics/card2.png", "./pics/card3.png",
    "./pics/card4.png", "./pics/card5.png", "./pics/card6.png", "./pics/card7.png",
    "./pics/card8.png", "./pics/card9.png", "./pics/card10.png", "./pics/card11.png",
    "./pics/card12.png", "./pics/card13.png", "./pics/card14.png", "./pics/card15.png", "./pics/card16.png"]
function addbox(num) {
    var box = document.getElementById("spielbereich");
    var creatable = document.createElement("table");
    addClass(creatable, "tabclass")
    for (var i = 0; i < num; i++) {
        if (i % 4 == 0 || i == 0) {
            //console.log(1)
            if (i != 0) {
                creatable.appendChild(tr);
            }
            var tr = document.createElement("tr");
            addClass(tr, "trclass");
        }
        //console.log(2);
        var td = document.createElement("td");
        //var tdnode=document.createTextNode();
        var timg1 = document.createElement("img");
        var timg2 = document.createElement("img");
        var timg3 = document.createElement("img");
        //console.log(num_array[i]);
        timg1.setAttribute('src', './pics/memoryBg.png');
        timg2.setAttribute('src', imgpath[num_array[i]]);
        timg3.setAttribute("src", "./pics/memoryBgI.png")
        addClass(timg1, "timg1");
        addClass(timg2, "timg2");
        addClass(timg3, "timg3");

        addClass(td, "tdclass");
        td.appendChild(timg1);
        td.appendChild(timg2);
        td.appendChild(timg3);
        tr.appendChild(td);
    }
    creatable.appendChild(tr);
    box.appendChild(creatable);
}
//addnum(16)
addbox(16)


function addClass(element, new_name) {
    if (!element || !new_name) return false;
    if (element.className) {
        var old_class_name = element.className;
        element.className = old_class_name + " " + new_name;
    } else {
        element.className = new_name;
    }
    return true;
}



var times = 0;
var first_src;
var Position_first;
var click = document.getElementsByClassName("tdclass");
var lock = 1;





//console.log(click);
function changeimg(num) {
    /*if(group==8){
        alert("恭喜通关");
    }*/
    for (let i = 0; i < num; i++) {
        click[i].onclick = function () {
            var isblock = click[i].childNodes[2].style.display;
            if (isblock != "block") {

                //翻页函数
                times++;

                if (times == 1) {
                    first_src = click[i].childNodes[1].src;
                    first_src = first_src.substring(first_src.lastIndexOf("/") + 1, first_src.length);
                    first_src = first_src.replace(/[^0-9]/ig, "");
                    Position_first = i;
                }
                if (times > 2) {
                    
                    lock = 0;

                } else {
                    changepage_open_fun(i);
                }
                if (times == 2 && lock == 1) {
                    var sencod_src = click[i].childNodes[1].src;
                    sencod_src = sencod_src.substring(sencod_src.lastIndexOf("/") + 1, sencod_src.length);
                    sencod_src = sencod_src.replace(/[^0-9]/ig, "");
                    Position_second = i;
                    var remove_or_change = clear_img_fun(first_src, sencod_src, Position_first, Position_second);
                    if (remove_or_change == 17) {
                        console.log("走到这里了");
                        var goup=clear_img_img(Position_first, Position_second);
                        if(goup==8){
                            alert("恭喜通关");
                            location.reload();
                        }else{
                            var score=document.getElementsByClassName("labels");
                            score=score[3];
                            score.innerHTML=goup;
                            //alert("成功完后"+goup+"组");
                        }

                    } else {
                        console.log("走到我这里了");
                        //changepage_close_fun(Position_first,Position_second);
                        self.setTimeout(changepage_close_fun, 1000, Position_first, Position_second);

                    }
                }
                lock = 1;
            }

        }
    }
}



changeimg(16)
function changepage_open_fun(i) {
    click[i].childNodes[0].style.display = "none";
    click[i].childNodes[1].style.display = "block";
}
function changepage_close_fun(Position_first, Position_second) {
    click[Position_first].childNodes[0].style.display = "block";
    click[Position_first].childNodes[1].style.display = "none";
    click[Position_second].childNodes[0].style.display = "block";
    click[Position_second].childNodes[1].style.display = "none";
    times = 0;
}
function clear_img_fun(first_src, second_src, Position_first, Position_second) {
    first_src = first_src.substring(first_src.lastIndexOf("/") + 1, first_src.length);
    second_src = second_src.substring(second_src.lastIndexOf("/") + 1, second_src.length);
    first_src = first_src.replace(/[^0-9]/ig, "") - 0;
    second_src = second_src.replace(/[^0-9]/ig, "") - 0;
    var all_num = first_src + second_src;
    return all_num;
}

function clear_img_img(Position_first, Position_second) {
    click[Position_first].childNodes[2].style.display = "block";
    click[Position_first].childNodes[1].style.display = "none";
    click[Position_first].childNodes[0].style.display = "none";
    click[Position_second].childNodes[0].style.display = "none";
    click[Position_second].childNodes[1].style.display = "none";
    click[Position_second].childNodes[2].style.display = "block";
    group++;
    times = 0;
    return group;
    
}