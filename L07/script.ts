window.addEventListener("load", function(){

/* */
document.querySelector(".btn1").addEventListener("click", function(){playSound(samples[0])});
document.querySelector(".btn2").addEventListener("click", function(){playSound(samples[1])});
document.querySelector(".btn3").addEventListener("click", function(){playSound(samples[2])});
document.querySelector(".btn4").addEventListener("click", function(){playSound(samples[3])});
document.querySelector(".btn5").addEventListener("click", function(){playSound(samples[4])});
document.querySelector(".btn6").addEventListener("click", function(){playSound(samples[5])});
document.querySelector(".btn7").addEventListener("click", function(){playSound(samples[6])});
document.querySelector(".btn8").addEventListener("click", function(){playSound(samples[7])});
document.querySelector(".btn9").addEventListener("click", function(){playSound(samples[8])});
    
document.querySelector(".playbutton").addEventListener("click", playBeat);


/* */
var samples: string [] = ['assets/A.mp3', 'assets/C.mp3', 'assets/F.mp3', 'assets/G.mp3', 'assets/hihat.mp3', 'assets/kick.mp3', 'assets/laugh-1.mp3', 'assets/laugh-2.mp3', 'assets/snare.mp3'];


/* */
function playSound (tlink:string){
    var sound: HTMLAudioElement = new Audio(tlink)
    sound.play()
}


/* */
function playBeat( ){
    var beat = ['assets/hihat.mp3', 'assets/kick.mp3', 'assets/snare.mp3'];
    var mix = setInterval(mixbeat, 500);
    var index:number = 0;

    function mixbeat (){
        var order : HTMLAudioElement = new Audio (beat [index]);
        order.play();

        index += 1;
        if (index>beat.length) 
        index=0;
    }



    
}


});