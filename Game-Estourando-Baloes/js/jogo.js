function iniciaJogo(){

	//alert('Jogo Iniciado'); - Alerta ao carregar a página do jogo
	var url = window.location.search;
	//alert(url); - retorno da url apos ? pois foi utilizado o search

	//alterando o valor da variavel
	var nivel_jogo = url.replace("?", "");
	//alert(nivel_jogo); - testando a substituição

	//variavel do tempo

	var tempo_segundos = 0;

	if(nivel_jogo == 1){//1 fácil -> 120 seg
		tempo_segundos = 120;
	}

	if(nivel_jogo == 2){//2 normal -> 60 seg
		tempo_segundos = 60;
	}
	if(nivel_jogo == 3){//3 difícil -> 30 seg
		tempo_segundos = 30;
	}

	//inserindo segundos no span
	document.getElementById('cronometro').innerHTML = tempo_segundos;

	//quqntidade balões
	var qtde_baloes = 10;

	cria_baloes(qtde_baloes);

	//imprimir qtde baloes inteiros
}

function cria_baloes(qtde_baloes){

	for(var i = 1; i <= qtde_baloes; i++){
		var balao = document.createElement("img");
		balao.src = 'imagens/balao_azul_pequeno.png';
		balao.style.margin = '10px';

		document.getElementById('cenario').appendChild(balao);
	}

}