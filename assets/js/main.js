
$(".col-4").click(function(p){
	var img = p.target.src;
	var modal = '<div class="modal" id ="modal"><img src="'+ img +'" class="modal_img"><div class="modal_boton" id="modal_boton">X</div></div>'
	$("body").append(modal);
	$("#modal_boton").click(function(){
		$("#modal").remove();
	})
});