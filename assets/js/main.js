/*
 * Archivo principal de funcionalidad de JS
 */
var escucharEventos = document.getElementsByClassName('col-4');
var pictures = ["assets/images/img-1.jpg",
				"assets/images/img-2.jpg",
				"assets/images/img-3.jpg",
				"assets/images/img-4.jpg",
				"assets/images/img-5.jpg",
				"assets/images/img-6.jpg",
				"assets/images/img-7.jpg",
				"assets/images/img-8.jpg",
				"assets/images/img-9.jpg",
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
 		var eventoClick = document.getElementById(idImagenes[i]);

 			eventoClick.addEventListener('click',crearImagenes);
 		}
 var lol = document.querySelector('body');
  function crearImagenes(){
  	alert("si funciono");
				for (var i = 0; i < pictures.length; i++) {
				 	var divEmergente = document.createElement('div');
						divEmergente.setAttribute('id','divEmergente');
				 	var myImg = document.createElement('img');
				 		myImg.src = pictures[i];
				 		myImg.setAttribute ('class','editar-pandas')
				 	var myBtn = document.createElement('button');
				 		myBtn.setAttribute ('class','btn');
				 		myBtn.setAttribute('onclick', 'eliminar(this)')
					var b = document.createTextNode('X');
				 		myBtn.appendChild(b);
					 	divEmergente.appendChild(myBtn);
					 	divEmergente.appendChild(myImg);
					 	lol.appendChild(divEmergente);
			 }
 }

 function eliminar(event) {
 	event.parentNode.style.display = "none";
 }

 /*codigo funcional*/
 var div = document.getElementById('divProducto');
 var imagen = document.getElementById('imagenDiv');
 var btnDiv = document.getElementById('btnEliminar');
 btnDiv.addEventListener('click',crearDiv);

 function crearDiv(){
 	div.style.display = "block";
 }