const cards = document.querySelectorAll('.memory-card');

var hasFlippedCard = false;
var lockBoard = true;
var firstCard, secondCard;
var k = 0;
var time = 0;
var running = 0;
    // function start() {
    //         document.getElementById("blinkertwo").style.animationPlayState = "running";
    //         document.getElementById("text1").style.animationPlayState = "running";
    //         document.getElementById("animtwo").style.pointerEvents = "none";
          
    //         var x = setTimeout(affect, 1300);
    //             function affect() {
    //                            document.getElementById("containertwo").style.zIndex = "0";
    //                             }
    //                         }
function flipCard(){
	if(lockBoard) return;
	if(this === firstCard) return;
    this.classList.toggle('flip');
    if(!hasFlippedCard){
    	// first click
    	hasFlippedCard = true;
    	firstCard = this;

    
    }else{
    	// second click
        hasFlippedCard = false;
    	secondCard = this;

    	checkForMatch();
    
}
}


function checkForMatch(){
// do cards match?
    	if(firstCard.dataset.framework === secondCard.dataset.framework){
    		disableCards();
            k=k+1;
            if (k == 8) {
    running = 0;
    document.getElementById("start").innerHTML = "You won";  
    document.getElementById("btn_bg").style.backgroundColor = "#4B0082"; 
    document.getElementById("stopwatch").classList.add("stopwatch1");
    document.getElementById("output").classList.add("output1");
    document.getElementById("congrats").style.opacity = "1";
    document.getElementById("con").style.opacity = "1";
    document.getElementById("StartPause").onclick = function() {animation()};
    lockBoard = true
}
    	}
    	else{
    		unflipCards();
    	}
}
function disableCards(){
	//it.s a match
    		firstCard.removeEventListener('click',flipCard);
    		secondCard.removeEventListener('click',flipCard);
          

resetBoard();
}

function unflipCards(){
	lockBoard= true
	// not match
	setTimeout(() => {
	firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
	}, 800);
}
function resetBoard(){
	[hasFlippedCard, lockBoard] = [false,false];
	[firstCard, secondCard] = [null,null]
}

(function shuffle(){
cards.forEach(card => {
	var randomPos = Math.floor(Math.random() *16);
	card.style.order = randomPos;
});
})();


function startPause(){
    if(running == 0){
        running = 1;
        lockBoard = false;
        tooluur();
    document.getElementById("start").innerHTML = "Pause";
    document.getElementById("btn_bg").style.backgroundColor = "red";    
    }
    else{
        running = 0;
        lockBoard = true
    document.getElementById("start").innerHTML = "Resume";  
    document.getElementById("btn_bg").style.backgroundColor = "#2ABB9B";  
    }
}
function animation(){
    document.getElementById("cup1").classList.add("cup1animation");
    document.getElementById("cup2").classList.add("cup2animation");
    document.getElementById("congrats").classList.add("congrats");
    setTimeout(() => {
    document.getElementById("firework1").style.opacity = "1";
    document.getElementById("firework2").style.opacity = "1";
}, 4500);
}
function reset(){
    location.reload();

}
function tooluur(){
    if(running == 1){
        setTimeout(function(){
            time++;
            var mins = Math.floor(time/10/60);
            var secs = Math.floor(time/10 % 60);
            var hours = Math.floor(time/10/60/60); 
            var tenths = time % 10;
            if(mins < 10){
                mins = "0" + mins;
            } 
            if(secs < 10){
                secs = "0" + secs;
            }
            document.getElementById("output").innerHTML = mins + ":" + secs + ":" + tenths + "0";
            tooluur();
        },100)
    }
}

cards.forEach(card => card.addEventListener('click',flipCard));