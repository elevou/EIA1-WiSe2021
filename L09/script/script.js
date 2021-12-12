var L09;
(function (L09) {
    // Variable für die Aufzählung der ToDos
    let counter = 0;
    let iTask = document.querySelector("#textfeld");
    let addTask = document.getElementById("taskbox");
    // Eventlistener für das Hinzufügen einer neuen ToDo
    document.querySelector("#btn").addEventListener("click", newTask);
    function newTask() {
        // Counter für Anzahl von ToDos
        counter++;
        document.querySelector("#amount").innerHTML = String(counter + " in total");
        // Input-Feld wird geleert
        iTask.value = "";
        // 
        let task = document.createElement("h7");
        let trash = document.createElement("div");
        let check = document.createElement("div");
        let neuesDiv = document.createElement("div");
        task.innerHTML = iTask.value;
        //
        task.id = "text";
        neuesDiv.id = "neuesDivBox";
        check.className = "far fa-circle";
        trash.className = "fas fa-trash";
        //
        addTask.appendChild(neuesDiv);
        neuesDiv?.appendChild(check);
        neuesDiv.appendChild(task);
        neuesDiv?.appendChild(trash);
        addTask?.appendChild(neuesDiv);
        check.addEventListener("click", checkboxClick);
        // Bei Klick auf Kreis wird ein Haken hinzugefügt; erneuter Klick wird der Haken entfernt
        function checkboxClick() {
            if (check.getAttribute("class") == "far fa-check-circle") {
                check.setAttribute("class", "far fa-circle");
            }
            else {
                check.setAttribute("class", "far fa-check-circle");
            }
        }
        // Eventlsitener für Trash-Btn
        trash.addEventListener("click", deleteToDo);
        // Delete-Funktion
        function deleteToDo() {
            neuesDiv.parentElement.removeChild(neuesDiv);
            counter--;
            document.querySelector("#amount").innerHTML = String(counter + " in total");
        }
    }
    document.addEventListener("keydown", function (event) {
        if (event.key == "Enter") {
            newTask();
        }
    });
})(L09 || (L09 = {}));
//# sourceMappingURL=script.js.map