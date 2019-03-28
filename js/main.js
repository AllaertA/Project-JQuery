$(document).ready(function(){


var panel = $('#pa01');
var btn = $("#btOnPanel");
var hPanel = panel.height()+50;
var onOff = false;

panel.css({"top":hPanel*-1,"opacity":0})

function animatePanel(){
    var top = 0;
    var op = 1;
    if(onOff){
        top = hPanel*-1;
        op = 0;
    }
    panel.animate({
        "top":top,
        "opacity":op
    },700);
    onOff =!onOff;
}

    


btn.on('click',animatePanel)



})