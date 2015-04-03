moverArriba = function(){
	gameManager.inputManager.emit("move", 0);
}
moverDerecha = function(){
	gameManager.inputManager.emit("move", 1);
}
moverAbajo = function(){
	gameManager.inputManager.emit("move", 2);
}
moverIzquierda = function(){
	gameManager.inputManager.emit("move", 3);
}

$("#autoplay").click(function(){
	setInterval(function(){
		moverIzquierda();
		moverAbajo();
	},1);
	
	setInterval(function(){
		moverDerecha();
	},100);
	
});
