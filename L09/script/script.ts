namespace L09 {

    // Variable für die Aufzählung der ToDos
    let counter: number = 0;

    let iTask: HTMLInputElement = document.querySelector("#textfeld");
    let addTask: HTMLElement = document.getElementById("taskbox");
   
    // Eventlistener für das Hinzufügen einer neuen ToDo
    document.querySelector("#btn").addEventListener("click", newTask);


    function newTask (): void {

        // Counter für Anzahl von ToDos
        counter++; 
        document.querySelector("#amount").innerHTML = String( counter + " in total");

        // Input-Feld wird geleert
        iTask.value = "";

        // 
        let task: HTMLElement = document.createElement("h7");
        let trash: HTMLElement = document.createElement("div");
        let check: HTMLElement = document.createElement("div");
        let neuesDiv: HTMLElement = document.createElement("div");
    
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
        function checkboxClick (): void {
            
            if (check.getAttribute("class") == "far fa-check-circle") {
                check.setAttribute("class", "far fa-circle"); }
            else {
                check.setAttribute("class", "far fa-check-circle"); 
            }    
        }
        
        // Eventlsitener für Trash-Btn
        trash.addEventListener("click", deleteToDo);

        // Delete-Funktion
        function deleteToDo (): void {
            neuesDiv.parentElement.removeChild(neuesDiv);   
            counter--;
            document.querySelector("#amount").innerHTML = String( counter + " in total");
        }
    }

    document.addEventListener("keydown", function (event: KeyboardEvent): void { 
        if (event.key == "Enter") {
        newTask();
        }
    });
}