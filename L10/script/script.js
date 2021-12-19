window.addEventListener("load", function () {
    // Variable für die Aufzählung der ToDos
    let counter = 0;
    // Variable für erledigte ToDos
    let counterDone = 0;
    // Variable für offene ToDos
    let counterOpen = 0;
    // Variable für den Input
    let input = document.querySelector("#textfield");
    // Eventlistener für das Hinzufügen einer neuen ToDo
    document.querySelector("#btn").addEventListener("click", newTask);
    function newTask() {
        // Counter erhöht sich beim hinzufügen einer neuen ToDo
        counter++;
        document.querySelector("#todoAmount").innerHTML = String(counter + " in total");
        counterOpen++;
        document.querySelector("#todoOpen").innerHTML = String(counterOpen + " open ");
        let eingabefeld = document.createElement("p");
        eingabefeld.innerHTML = input.value;
        // Input leeren
        input.value = "";
        //
        let task = document.getElementById("task");
        let check = document.createElement("div");
        let trash = document.createElement("div");
        /* Neues div für task*/
        let wrapper = document.createElement("div");
        wrapper.textContent = "";
        // Append Elemente 
        task.appendChild(wrapper);
        wrapper.appendChild(eingabefeld);
        wrapper?.appendChild(check);
        wrapper?.appendChild(trash);
        task?.appendChild(wrapper);
        // Id bzw. Klassen zuweisung
        eingabefeld.id = "eingabe";
        wrapper.id = "neuesDiv";
        check.className = "far fa-circle";
        trash.className = "fas fa-trash";
        //
        /*Eventlistener für die Check(erlefigt)-Box*/
        check.addEventListener("click", erledigteToDos);
        /* Fkt die ToDo als erledigt markiert - counter wird um 1 erhöht wenn ToDo hinzukommt*/
        function erledigteToDos() {
            if (check.getAttribute("class") == "far fa-check-circle") {
                check.setAttribute("class", "far fa-circle");
                counterOpen++;
                document.querySelector("#todoOpen").innerHTML = String(counterOpen + " open ");
                counterDone--;
                document.querySelector("#todoDone").innerHTML = String(counterDone + " done");
            }
            else {
                check.setAttribute("class", "far fa-check-circle");
                counterOpen--;
                document.querySelector("#todoOpen").innerHTML = String(counterOpen + " open ");
                counterDone++;
                document.querySelector("#todoDone").innerHTML = String(counterDone + " done");
            }
        }
        // 
        /* Eventlistener für den Mülleimer*/
        trash.addEventListener("click", deleteToDo);
        /*Fkt die ToDo löscht nach klick auf Mülleimer - counter wird um 1 verringert wenn ToDo gelöscht wird*/
        function deleteToDo() {
            wrapper.parentElement.removeChild(wrapper);
            counter--;
            document.querySelector("#todoAmount").innerHTML = String(counter + " in total");
            /* Counter für offene oder geschlossene ToDo verringert sich beim Löschen */
            if (check.getAttribute("class") == "far fa-check-circle") {
                counterDone--;
                document.querySelector("#todoDone").innerHTML = String(counterDone + " done ");
            }
            else {
                counterOpen--;
                document.querySelector("#todoOpen").innerHTML = String(counterOpen + " open");
            }
        }
    }
    // Neue ToDo wird hinzugefügt nach drücken der Entertaste
    document.addEventListener("keydown", function (event) {
        if (event.key == "Enter") {
            newTask();
        }
    });
    //Spracheingabe mit Artyom
    // Variable für Mic und artyom
    let artyom = new Artyom();
    let mic = false;
    artyom.addCommands({
        // 
        indexes: ["erstelle Aufgabe *"],
        smart: true,
        // Alles was nach "erstelle Aufgabe" gesagt wird, wird als ToDo Inhalt empfangen
        action: function (i, spracheingabe) {
            input.value = spracheingabe;
            // Nach aufnehmen der Aufgabe wird das gesagte sprachlich wiedergegeben
            artyom.say("Neue Aufgabe" + spracheingabe + "wird erstellt");
            // newTask Fkt ausführen um neues Element mit neuer ToDo zu generieren
            newTask();
        }
    });
    // Fkt die Aufnehmen startet
    function voiceRecording() {
        artyom.fatality();
        setTimeout(function () {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            });
        }, 250);
    }
    // Eventlistener für das Mikro 
    document.querySelector(".fa-microphone").addEventListener("click", function () {
        if (!mic) {
            voiceRecording();
            mic = true;
        }
        else {
            artyom.fatality();
            mic = false;
        }
    });
});
//# sourceMappingURL=script.js.map