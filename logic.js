function ControllerLogicGame(){
	let firstSelected ; 
	let secondSelected;
	let block = false;
	let TIME_SLEEP_BETWEEN_INTERVAL = 1000;
	let eventController = this;

	this.addEventListener =  function (eventName, callback){
		eventController[eventName] = callback;
	};

	this.doLogicGame =  function (card,callback){
		if (!card.block && !block) {
			if (firstSelected == null){
				firstSelected = card;
				card.visible = true;
			}else if (secondSelected == null && firstSelected != card){
				secondSelected = card;
				card.visible = true;
			}

			if (firstSelected != null && secondSelected != null){
				block = true;
				var timer = setInterval(function(){
					if (secondSelected.equals(firstSelected)){
						firstSelected.block = true;
						secondSelected.block = true;
						eventController["correct"](); 
					}else{
						firstSelected.visible  = false;
						secondSelected.visible  = false;
						eventController["wrong"]();
					}        				  		
					firstSelected = null;
					secondSelected = null;
					clearInterval(timer);
					block = false;
					eventController["show"]();
				},1000);
			} 
			eventController["show"]();
		};
	};

}
