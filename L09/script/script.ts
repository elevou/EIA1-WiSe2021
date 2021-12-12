window.addEventListener("load", function(): void {
    // Variable für die Aufzählung der ToDos
    let counter: number = 0;
    //
    let iTask: HTMLInputElement = document.querySelector("#eingabeText");


   // Hinzufügen einer neuen ToDo nach drücken der Enter-Taste
    document.querySelector("#einagbeText").addEventListener("keydown", function(event:  KeyboardEvent): void {
        if (event.key == "Enter") { 
        newTask();
        }
    });

   

    function newTask(): void {
        // Counter für Anzahl von ToDos
        counter ++;
        document.querySelector("#amount").innerHTML = counter + "in total";

        const task: HTMLDivElement = document.querySelector("#addTask");
        const pTask: HTMLParagraphElement = document.createElement("p");
        const circle: HTMLElement = document.createElement("i");
        const trash: HTMLElement = document.createElement("i");
        const check: HTMLElement = document.createElement("i");
        
        // define icons: circle + trash
        circle.setAttribute("class", "far fa-circle");
        trash.setAttribute("class", "far fa-trash-alt");

        pTask.innerHTML = iTask.value;

        task.appendChild(trash);
        task.appendChild(circle);
        task.appendChild(pTask);

        iTask.value = "";

        trash.addEventListener("click", function(): void {
            counter --;
            document.querySelector("#count").innerHTML = counter + "in total";
            pTask. remove(); this.remove();
            trash. remove(); this.remove();
            circle. remove(); this.remove();
        });

        circle.addEventListener("click", function(): void {
            this.appendChild(check);
            if (check.getAttribute("class") == "fas fa-check") {check.setAttribute("class", ""); }
                else {check.setAttribute("class", "fas fa-check"); }
        });
    

    }


});