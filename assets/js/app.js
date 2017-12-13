$(document).ready(function(){
	var Imgitems = $('.slider li').length;//numero de items
	var imgPos = 1;//variable para encontrar la posisicion de la imagen
	//console.log(Imgitems);

	for(i = 1; i <= Imgitems; i++){//para recorrer los items y agregar iconos segun li existan
		$('.pagination').append('<li><span class="fa fa-circle"></span></li>')//para que muestre los iconos segun slide existan
	}

	$('.slider li').hide();//ocultamos todos los slides
	$('.slider li:first').show();//mostramos el primer slide
	$('.pagination li:first').css({'color': '#CD6E2E'});//damos color al primer circulo


	$('.pagination li').click(pagination);
	$('.right span').click(nextSlider);
	$('.left span').click(prevSlider);

setInterval(function(){
		nextSlider();
	}, 4000);

//Funciones============================================================================

	function pagination(){// funcion con los iconos de circle para cambiar slides
		var paginationPos = $(this).index() + 1;// para seleccionar el slide segun la posicion

		$('.slider li').hide();//ocultamos todos los slides
		$('.slider li:nth-child('+ paginationPos +')').fadeIn();// se muestra el Slide seleccionado

		$('.pagination li').css({'color': '#858585'});// se cambia de color el icono cuando esta seleccionado
		$(this).css({'color': '#CD6E2E'});// se coloca los demas en el color original
   
       imgPos = paginationPos;

	}

function nextSlider(){// funcion de cambiar slides con las flechas
	if (imgPos >= Imgitems){imgPos = 1;}
	else{imgPos++;}
		

		$('.pagination li').css({'color': '#858585'});// para tambien cambiar el color en el circle cuando cambie con la flecha
		$('.pagination li:nth-child('+ imgPos +')').css({'color': '#CD6E2E'});

        $('.slider li').hide();//ocultamos todos los slides
	    $('.slider li:nth-child('+ imgPos +')').fadeIn();

	
}

function prevSlider(){// funcion de cambiar slides con las flechas
	if (imgPos <= 1){imgPos = Imgitems;}
	else{imgPos--;}
		

		$('.pagination li').css({'color': '#858585'});// para tambien cambiar el color en el circle cuando cambie con la flecha
		$('.pagination li:nth-child('+ imgPos +')').css({'color': '#CD6E2E'});

        $('.slider li').hide();//ocultamos todos los slides
	    $('.slider li:nth-child('+ imgPos +')').fadeIn();

	
}

});
