window.addEventListener("load", function () {
    // Variablen Deklaration
    var sound = ["assets/hihat.mp3", "assets/kick.mp3", "assets/snare.mp3", "assets/A.mp3", "assets/C.mp3", "assets/F.mp3", "assets/G.mp3", "assets/laugh-1.mp3", "assets/laugh-2.mp3"];
    var beat = [sound[0], sound[1], sound[2]];
    var mix;
    var index = 0;
    // Funktion um Audio abzuspielen
    function playSound(sound) {
        var audio = new Audio(sound);
        audio.play();
    }
    // Fkt spielt vorgefertigten Beat
    function playBeat() {
        if (document.getElementById("play").getAttribute("class") == ("fas fa-play-circle")) {
            document.getElementById("play").setAttribute("class", "fas fa-stop-circle");
            mix = setInterval(mixbeat, 500);
        }
        else {
            document.getElementById("play").setAttribute("class", "fas fa-stop-circle");
            document.getElementById("play").setAttribute("class", "fas fa-play-circle");
            clearInterval(mix);
        }
        function mixbeat() {
            playSound(sound[index]);
            index++;
            if (index > beat.length)
                index = 0;
        }
    }
    // Fkt Remix-Button generiert neuen zufälligen Beat und verwirft bestehenden Beat
    function playRemix() {
        if (document.getElementById("random").getAttribute("class") == ("fas fa-random")) {
            document.getElementById("play").setAttribute("class", "fas fa-play-circle");
            clearInterval(mix);
        }
        mix = setInterval(remixbeat, 300);
        function remixbeat() {
            playSound(sound[index]);
            index = Math.floor(Math.random() * 7);
        }
    }
    // Fkt die aktuellen Beat löscht
    function deleteBeat() {
        clearInterval(mix);
        if (document.getElementById("play").getAttribute("class") == "fas fa-stop-circle") {
            document.getElementById("play").setAttribute("class", "fas fa-play-circle");
        }
    }
    // Button - Sound zuweisen
    document.querySelector(".btn1").addEventListener("click", function () { playSound(sound[0]); });
    document.querySelector(".btn2").addEventListener("click", function () { playSound(sound[1]); });
    document.querySelector(".btn3").addEventListener("click", function () { playSound(sound[2]); });
    document.querySelector(".btn4").addEventListener("click", function () { playSound(sound[3]); });
    document.querySelector(".btn5").addEventListener("click", function () { playSound(sound[4]); });
    document.querySelector(".btn6").addEventListener("click", function () { playSound(sound[5]); });
    document.querySelector(".btn7").addEventListener("click", function () { playSound(sound[6]); });
    document.querySelector(".btn8").addEventListener("click", function () { playSound(sound[7]); });
    document.querySelector(".btn9").addEventListener("click", function () { playSound(sound[8]); });
    // Fkt - Leiste Sound zuweisen
    document.querySelector("#play").addEventListener("click", function () { playBeat(); });
    document.querySelector("#random").addEventListener("click", function () { playRemix(); });
    document.querySelector("#delete").addEventListener("click", function () { deleteBeat(); });
});
//# sourceMappingURL=script.js.map