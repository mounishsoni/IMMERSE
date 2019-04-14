audioPlayer();
audioPlayer2();

function audioPlayer(){
	
	var weekly = $(".card-body h5 a")[0];
	$("#audioPlayer")[0].src = weekly;
	$("#audioPlayer")[0].play();
	$(".card-body h5 a").click(function(e){
		e.preventDefault();
		$("#audioPlayer")[0].src = this;
		$("#audioPlayer")[0].play();
	});
}
