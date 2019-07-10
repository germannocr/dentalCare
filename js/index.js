function showImages(el) {
	var windowHeight = jQuery( window ).height() - (jQuery( window ).height() / 1.3);
	$(el).each(function(){
		var thisPos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
	/*	if (topOfWindow + windowHeight - 200 > thisPos ) {
			$(this).addClass("fadeIn");
		}*/
		if (topOfWindow > thisPos - windowHeight) {
				
			// caso seja verdadeiro, ele vai adicionar a classe que está em animationClass ao elemento
			$(this).addClass("fadeIn");
		}
	});
}
// Adiciona a classe .js ao elemento HTML. Assim eu garanto que os elementos só serão escondidos caso o JavaScript esteja habilitado
var root = document.documentElement;
root.className += ' js';

// Cria a função boxTop responsável por definir a distância entre o topo do elemento e a página
function boxTop(idBox) {
	var boxOffset = $(idBox).offset().top;
	return boxOffset;
}

// Verifica se o documento está pronto
$( document ).ready(function() {
	showImages('.time-foto');
	
			// target define os elementos que serão animados. Neste caso todos os que possuirem a classe .anime	
	var $animeLeft = $('.anime'),
			
			// animationClass define a classe que será injetada no elemento durante o scroll. É nessa classe que	definimos como a animação irá ocorrer
			animationClass = 'anime-init',
			
			// windowHeight pega a altura total da janela do browser
			windowHeight = $(window).height(),
			
			// offset é definido a partir da altura da janela, menos um quarto dessa altura. Isso vai garantir que o browser não fique com um espaço grande em branco
			offset = windowHeight - (windowHeight / 1.4); 

	// animeScroll é a função responsável por adicionar a classe animationClass ao elemento da página.
	function animeScroll() {
		
		// documentTop vai definir a distância entre o topo da página e o scroll. O valor é atualizado sempre a função animeScroll é ativada.
		var documentTop = $(document).scrollTop(); 
		
		// target.each serve para adicionarmos a função a cada elemento que tiver a classe do target. Assim garantimos que elementos com distâncias diferentes do topo da página, animem no momento correto
		$animeLeft.each(function() {
			
			
			// o if verifica se a distância entre o topo da página e o scroll é maior que a distância do elemento - o valor fo offset
			if (documentTop > boxTop(this) - offset) {
				
				// caso seja verdadeiro, ele vai adicionar a classe que está em animationClass ao elemento
				$(this).addClass(animationClass);
			}
		});
	}
	
	// dispara a função animeScroll, nesse primeiro momento ele dispara para verificar se já não existe nenhum elemento na página que esteja no campo de visão do usuário
	animeScroll();
	
	// com o document.scroll vamos verificar sempre que um evento de scroll ocorrer na página
	$(document).scroll(function() {
		showImages('.time-foto');
		
		// quando o evento de scroll ocorre disparamos novamente a função animeScroll. Com um setTimeout para evitar que ela seja disparada diversas vezes
		setTimeout(function() {
			animeScroll()
		}, 150);
	});
});



