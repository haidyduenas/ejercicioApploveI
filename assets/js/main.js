/*
 * Archivo principal de funcionalidad de JS
 */
var escucharEventos = document.getElementsByClassName('col-4');
var pictures = ["assets/imgages/img-1.jpg",
				"assets/imgages/img-2.jpg",
				"assets/imgages/img-3.jpg",
				"assets/imgages/img-4.jpg",
				"assets/imgages/img-5.jpg",
				"assets/imgages/img-6.jpg",
				"assets/imgages/img-7.jpg",
				"assets/imgages/img-8.jpg",
				"assets/imgages/img-9.jpg",
				];
var idImagenes =["img-1",
				"img-2",
				"img-3",
				"img-4",
				"img-5",
				"img-6",
				"img-7",
				"img-8",
				"img-9"]



 for (var i = 0; i < idImagenes.length; i++) {
 		var unicornio = document.getElementById(idImagenes[i]);

 			unicornio.addEventListener('click',crearImagenes);
 }
console.log(idImagenes[i]);
 function crearImagenes(){
 	alert("ya funciona");
	var lol = document.querySelector('body');
 }