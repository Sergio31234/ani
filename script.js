//alert("this is a work in progress");
//painting process to wall hanging.
var shadow = "";
for(var i = 1; i < 250; i++){
	shadow = shadow + "0 " + i + "px #281400,"
}
window.shadow = shadow.slice(0,shadow.length - 1);
window.onload = function(){ 
var id_floorBG = document.getElementById("floorBG");
id_floorBG.style.height = (window.innerHeight - 486) + "px";	document.getElementById("tStand").style.boxShadow = window.shadow;
	var tag_div = document.getElementsByTagName("div");
	for(var i = 0; i < tag_div.length; i++){
		window.wi = i;
		tag_div[i].onclick = function(){
			var class_paint = document.getElementsByClassName("paint");
			for(var i = 0; i < class_paint.length; i++){
				class_paint[i].style.opacity = 1;
			}
			for(var i = 0; i < tag_div.length; i++){
				tag_div[i].onclick = function(){null};
			}
			document.body.style.cursor = "default";
			setTimeout(function(){
				hanP();
			},1000);
		}
	}
}
function hanP(){
	document.getElementById("cWrap").style.display = "none";
	document.getElementById("pWrap").className = "hangWrap";
	document.getElementById("decWrap").style.display = "initial";
	id_ovrWrap = document.getElementById("ovrWrap");
	
		window.id_ovrWrap.style.marginLeft = "-250px";
	
	oi bom se voce esta lendo isso aqui voce provavelmente esta aprendendo programaçao tudo ate hoje tem algum motivo porem nao sabemos o porque de hoje existir
nem se vai ter um amanha porem o hoje existe e podemos provar dele ate o dia da morte entao bom eu meio que prometi varias coisas desde aquele dia porem
eu pecibi que talves eu acabe nao comprindo com oque eu prometi bom eu acho que eu cometi varios erros ao fazer aquilo sabe desde entao a unica coisa que eu vi
na minha frente o foi arrependimento porque pelo meu proprio egoismo eu acabei afastando voce de mim bom eu sei que deve ter sido ruim sabe que alguem que voce consi
derava apenas um amigo falou que gostava de voce bom eu nao sei nem mais o porque que eu to escrevendo isso talvez porque eu saiba que voce nunca vai ler mais 
ta bom esse é meu ultimo ato sobre esse assunto adeus...

}
