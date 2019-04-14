audioPlayer();

function audioPlayer(){
	$("#audioPlayer")[0].src = $(".card-body h5 a")[0];
	$("#audioPlayer")[0].play();
	$(".card-body h5 a").click(function(e){
		e.preventDefault();
		$("#audioPlayer")[0].src = this;
		$("#audioPlayer")[0].play();
	});
}