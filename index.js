(function () {
    "use strict";

    let detailsForm = document.querySelector("#Todo_form");

    let addtaskbtn = document.getElementById("submitBtn");

    addtaskbtn.addEventListener("click", addTask)

    function addTask(e) {
        e.preventDefault();

        // Get the values from the input fields
        const taskName = detailsForm.elements["NAME"].value;

        // Append the task to where it should be showing
        let taskList = document.getElementById("taskList");

        // Show title of My Task List When Task is added
        let todoHeader = document.getElementById("todoHeader")
        if(todoHeader.children.length === 0){
            document.getElementById("title").innerText = "To-do List"
        }
        todoHeader.appendChild(title);
        
        // Create a new list item
        let listItem = document.createElement('li');
        listItem.textContent = taskName;

        // Append the list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        detailsForm.elements["NAME"].value = "";

        console.log(listItem);


        listItem.addEventListener("click", function (e){
            e.preventDefault();
            listItem.classList.toggle("completed")

        })
       
        
    }

    // writing a function that will operate the remove button

    let removetaskbtn = document.getElementById("removeBtn");

    removetaskbtn.addEventListener("click", removeTask)
    

    function removeTask(e) {
        e.preventDefault();

        if(confirm("Are you sure")){
             // Get the ID holding the list
        let taskList = document.getElementById("taskList");

        // Get the listitem by tag because its in the ID title
        let listItem = taskList.getElementsByTagName("li");

        // loop over the listItem in reverse form and remove the items 
        if(listItem.length > 0){
            for(var i = listItem.length -1; i >= 0; i--){
                listItem[i].remove(i);
    
            } 

        }
       
    } else{
        alert("No More Task")
    }

    

    
}
    
// Writing a function that will Mark each task completed 
// Assuming this code is inside the function block or another appropriate scope




})();



