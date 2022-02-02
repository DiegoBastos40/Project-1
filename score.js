 export function ScoreBoardGameControl (){
	let score = 0;
	let POINT_GAME = 10;
	let TEXT_SCORE = "Score : "

	let TOTAL_CORRECT = 10;
	let corrects = 0;
    let scoreDiv = document.getElementById("score");
		scoreDiv.innerHTML =  TEXT_SCORE + score;


	this.incrementScore =  function (){
		corrects++;
		score+= POINT_GAME;
		if (corrects ==  TOTAL_CORRECT){
			alert("Fim de Jogo! Seu Score foi " + score);
		}
	}

	this.decrementScore =  function (){
		score-= POINT_GAME;
	}
}