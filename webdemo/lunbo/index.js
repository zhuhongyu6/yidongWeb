var buttom=document.getElementsByClassName("buttom")[0];
var img= buttom.getElementsByTagName('a');
var i=0;
var pre=document.getElementById("pre");
var next=document.getElementById("next");
function Tag(){
	img[i%9].style.display='none';
	i++;
	img[i%9].style.display="block";
}
var timer=setInterval(Tag,1000);
buttom.onmouseover=function(){
	clearInterval(timer);
}
buttom.onmouseout=function(){
	timer=setInterval(Tag,1000);
}
pre.onclick=function(){
	img[i%9].style.display='none';
	i--;
	if(i<0){
		i=8;
	}
	img[i%9].style.display="block";
}
next.onclick=function(){
	Tag();
}