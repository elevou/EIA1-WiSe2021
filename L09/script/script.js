window.addEventListener("load", function () {
    // Variable für die Aufzählung der ToDos
    let counter = 0;
    //
    let iTask = document.querySelector("#eingabeText");
    // Hinzufügen einer neuen ToDo nach drücken der Enter-Taste
    document.querySelector("#einagbeText").addEventListener("keydown", function (event) {
        if (event.keyCode == 13) {
            newTask();
        }
    });
    function newTask() {
        // Counter für Anzahl von ToDos
        counter++;
        document.querySelector("#amount").innerHTML = counter + "in total";
        const task = document.querySelector("#addTask");
        const pTask = document.createElement("p");
        const circle = document.createElement("i");
        const trash = document.createElement("i");
        const check = document.createElement("i");
        // define icons: circle + trash
        circle.setAttribute("class", "far fa-circle");
        trash.setAttribute("class", "far fa-trash-alt");
        pTask.innerHTML = iTask.value;
        task.appendChild(trash);
        task.appendChild(circle);
        task.appendChild(pTask);
        iTask.value = "";
        trash.addEventListener("click", function () {
            counter--;
            document.querySelector("#count").innerHTML = counter + "in total";
            pTask.remove();
            this.remove();
            trash.remove();
            this.remove();
            circle.remove();
            this.remove();
        });
        circle.addEventListener("click", function () {
            this.appendChild(check);
            if (check.getAttribute("class") == "fas fa-check") {
                check.setAttribute("class", "");
            }
            else {
                check.setAttribute("class", "fas fa-check");
            }
        });
    }
});
//# sourceMappingURL=script.js.map