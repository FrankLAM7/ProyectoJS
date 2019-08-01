$(document).ready(function(){
	
	//Posts
	if(window.location.href.indexOf('index')>-1){
		var posts=[
			{
				title: 'Prueba de titulo 1',
				date: 'Publicado en: ' + moment().format('MMMM Do YYYY'),
				content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry´s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
			},
			{
				title: 'Prueba de titulo 2',
				date: 'Publicado en: ' + moment().format('MMMM Do YYYY'),
				content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry´s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
			},
			{
				title: 'Prueba de titulo 3',
				date: 'Publicado en: ' + moment().format('MMMM Do YYYY'),
				content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry´s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
			},
			{
				title: 'Prueba de titulo 4',
				date: 'Publicado en: ' + moment().format('MMMM Do YYYY'),
				content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry´s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
			}
		]

		posts.forEach((item, index) =>{
			var post= `
					<article class="post">
						<h2>${item.title}</h2>
						<span class="date">${item.date}</span>
						<p>
							${item.content}
						</p>
						<a href="#" class="button-more">Leer Más</a>
					</article>
			`;
			$("#posts").append(post);
		});
	}
	//selector de tema
	var theme = $("#theme");
	$("#to-green").click(function(){
		theme.attr("href","css/green.css")
	});
	$("#to-red").click(function(){
		theme.attr("href","css/red.css")
	});
	$("#to-blue").click(function(){
		theme.attr("href","css/blue.css")
	});

	if(window.location.href.indexOf('index')>-1){
	//slider
		$('.bxslider').bxSlider({
		    mode: 'fade',
		    captions: true,
		    slideWidth: 1200
	  	});
	}

	//scroll arriba de la web

	$(".subir").click(function(e){
		e.preventDefault();

		$("html, body").animate({
			scrollTop: 0,
		},1500);

		return false;
	});

	//formulario

	$("#login form").submit(function(){
		var form_name = $("#form_name").val();
		localStorage.setItem("form_name", form_name);
	});

		
	var form_name = localStorage.getItem("form_name");
	if(form_name != null && form_name != "undefined"){
		var about_parrafo=$("#about p");
		about_parrafo.html("<br><strong>Bienvenido, "+ form_name+"</strong>");
		about_parrafo.append("<a href='#' id='logout'>Cerrar Sesión</a>");
		
		$("#login").hide();

		$("#logout").click(function(){
			localStorage.clear();
			location.reload();
		});
	}
	//acordeon
	if(window.location.href.indexOf('about')>-1){
		$("#acordeon").accordion();
	}

	//reloj
	if(window.location.href.indexOf('reloj')>-1){
		setInterval(function(){
			var reloj= moment().format("hh:mm:ss");
			$("#reloj").html(reloj);
		},1000);
	}
if(window.location.href.indexOf('contact')>-1){
	
	$("form input[name='date']").datepicker({
		dateFormat: 'dd-mm-yy'
	});

	$.validate({
    lang: 'es'
  });
}
});