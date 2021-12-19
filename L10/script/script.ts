declare var Artyom: any;
window.addEventListener("load", function(): void {

    // Variable für die Aufzählung der ToDos
    let counter: number = 0;

    // Variable für erledigte ToDos
    let counterDone: number = 0;

    // Variable für offene ToDos
    let counterOpen: number = 0;


    // Variable für den Input
    let input: HTMLInputElement = document.querySelector("#textfield");


    // Eventlistener für das Hinzufügen einer neuen ToDo
    document.querySelector("#btn").addEventListener("click", newTask);


    function newTask (): void {

        // Counter erhöht sich beim hinzufügen einer neuen ToDo
        counter++; 
        document.querySelector("#todoAmount").innerHTML = String( counter + " in total");
        counterOpen++;
        document.querySelector("#todoOpen").innerHTML = String( counterOpen + " open ");

        let eingabefeld: HTMLElement = document.createElement("p");
        eingabefeld.innerHTML = input.value;

        // Input leeren
        input.value = "";

        //
        let task: HTMLElement = document.getElementById("task");
        let check: HTMLDivElement = document.createElement("div");
        let trash: HTMLDivElement = document.createElement("div");
            /* Neues div für task*/ 
        let wrapper: HTMLDivElement = document.createElement("div");

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
        function erledigteToDos (): void {
            if (check.getAttribute("class") == "far fa-check-circle") {
                check.setAttribute("class", "far fa-circle");
        
                counterOpen++;
                document.querySelector("#todoOpen").innerHTML = String( counterOpen + " open ");

                counterDone--;
                document.querySelector("#todoDone").innerHTML = String( counterDone + " done");
            }
            else {
                check.setAttribute("class", "far fa-check-circle"); 

                counterOpen--;
                document.querySelector("#todoOpen").innerHTML = String( counterOpen + " open ");

                counterDone++;
                document.querySelector("#todoDone").innerHTML = String( counterDone + " done");

            }    
        }

        // 
        /* Eventlistener für den Mülleimer*/
        trash.addEventListener("click", deleteToDo);
        /*Fkt die ToDo löscht nach klick auf Mülleimer - counter wird um 1 verringert wenn ToDo gelöscht wird*/
        function deleteToDo (): void {
            wrapper.parentElement.removeChild(wrapper); 
            counter--;
            document.querySelector("#todoAmount").innerHTML = String( counter + " in total");
            /* Counter für offene oder geschlossene ToDo verringert sich beim Löschen */
            if (check.getAttribute("class") == "far fa-check-circle") {
                counterDone--;
                document.querySelector("#todoDone").innerHTML = String( counterDone + " done ");
            } else {
                counterOpen--;
                document.querySelector("#todoOpen").innerHTML = String( counterOpen + " open");

            }
        }

    }

    // Neue ToDo wird hinzugefügt nach drücken der Entertaste
    document.addEventListener("keydown", function (event: KeyboardEvent): void { 
        if (event.key == "Enter") {
        newTask();
        }
    });

    //Spracheingabe mit Artyom

    // Variable für Mic und artyom
    let artyom: any = new Artyom();
    let mic: boolean = false;
    
    artyom.addCommands({
        // 
        indexes: ["erstelle Aufgabe *"],
        smart: true,
        // Alles was nach "erstelle Aufgabe" gesagt wird, wird als ToDo Inhalt empfangen
        action: function(i: any, spracheingabe: string): void {
            input.value = spracheingabe;
            // Nach aufnehmen der Aufgabe wird das gesagte sprachlich wiedergegeben
            artyom.say("Neue Aufgabe" + spracheingabe + "wird erstellt");
            // newTask Fkt ausführen um neues Element mit neuer ToDo zu generieren
            newTask();
        }
    });

    // Fkt die Aufnehmen startet
    function voiceRecording(): void {
        artyom.fatality ();
        setTimeout(
            function(): void {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                });
            },
            250);
    }

    // Eventlistener für das Mikro 
    document.querySelector(".fa-microphone").addEventListener("click", function(): void {
        if (!mic) {
            voiceRecording();
            mic = true; 
        } else {
            artyom.fatality();
            mic = false;
        }
    });



});