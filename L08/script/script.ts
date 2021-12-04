window.addEventListener("load", function(): void {

    // Variablen Deklaration
    var sound: string [] = ["assets/hihat.mp3", "assets/kick.mp3", "assets/snare.mp3", "assets/A.mp3", "assets/C.mp3", "assets/F.mp3", "assets/G.mp3", "assets/laugh-1.mp3", "assets/laugh-2.mp3"];
    var beat: string [] = [sound[0], sound[1], sound[2]];
    var mix: number;
    var index: number = 0;

    // Funktion um Audio abzuspielen
    function playSound (sound: string): void {
        var audio: HTMLAudioElement = new Audio (sound);
        audio.play();
    }

    // Fkt spielt vorgefertigten Beat
    function playBeat (): void {
        if (document.getElementById("play").getAttribute("class") == ("fas fa-play-circle")) {
            document.getElementById("play").setAttribute("class", "fas fa-stop-circle");
            mix = setInterval (mixbeat, 500);
        } else {
            document.getElementById("play").setAttribute("class", "fas fa-stop-circle");
            document.getElementById("play").setAttribute("class", "fas fa-play-circle");
            clearInterval(mix);
        }

        function mixbeat(): void {
            playSound(sound[index]);
            index ++;
            if (index > beat.length) 
            index = 0;
        }
    
    }

    // Fkt Remix-Button generiert neuen zufälligen Beat und verwirft bestehenden Beat
    function playRemix (): void {
        if (document.getElementById("random").getAttribute("class") == ("fas fa-random")) {
            document.getElementById("play").setAttribute("class", "fas fa-play-circle");
            clearInterval(mix);
        }

        mix = setInterval  (remixbeat, 300);
        function remixbeat(): void {
            playSound(sound[index]);
            index = Math.floor(Math.random() * 7);
        }
    }

    // Fkt die aktuellen Beat löscht
    function deleteBeat (): void {
        clearInterval(mix);
        if (document.getElementById("play").getAttribute("class") == "fas fa-stop-circle") {
            document.getElementById("play").setAttribute("class", "fas fa-play-circle");
        }
    }

    // Button - Sound zuweisen
    document.querySelector(".btn1").addEventListener("click", function(): void {playSound(sound[0]); });
    document.querySelector(".btn2").addEventListener("click", function(): void {playSound(sound[1]); });
    document.querySelector(".btn3").addEventListener("click", function(): void {playSound(sound[2]); });
    document.querySelector(".btn4").addEventListener("click", function(): void {playSound(sound[3]); });
    document.querySelector(".btn5").addEventListener("click", function(): void {playSound(sound[4]); });
    document.querySelector(".btn6").addEventListener("click", function(): void {playSound(sound[5]); });
    document.querySelector(".btn7").addEventListener("click", function(): void {playSound(sound[6]); });
    document.querySelector(".btn8").addEventListener("click", function(): void {playSound(sound[7]); });
    document.querySelector(".btn9").addEventListener("click", function(): void {playSound(sound[8]); });

    // Fkt - Leiste Sound zuweisen
    document.querySelector("#play").addEventListener("click", function(): void {playBeat(); });
    document.querySelector("#random").addEventListener("click", function(): void {playRemix(); });
    document.querySelector("#delete").addEventListener("click", function(): void {deleteBeat(); });

});