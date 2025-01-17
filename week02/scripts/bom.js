//Handling Events in DOM
//Declare three(3) variables that that hold references to the input, button, and list elements.
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// //Create a click event listener for the Add Chapter button using an addEventListner
button.addEventListener('click', function() {
         //Check if the input field is blank
        if (input.value.trim() !== '') { 
            // If the input is blank, focus on the input field and do nothing else
            input.focus();
    
            //Create an li element and store it in a variable  called li for reference.
            const li = document.createElement('li');
            //Create a delete button and store it in a variable called deleteButton for reference.
            const deleteButton = document.createElement('button');
            //Append the li element to the ul element in your HTML
            list.append(li);
            //Populate the li element with a text from the input feild and covert the text starting with uppercase letter.
            li.textContent = input.value.charAt(0).toUpperCase() + input.value.slice(1).toLowerCase();
            //Append the deleteButton element to the li element
            li.append(deleteButton);
            //Populate the deleteButton with an emoticon '❌'.
            deleteButton.textContent = '❌';
            //Add an event listner to the deleteButton element that will remeove the child element li from the list.
            deleteButton.addEventListener('click', function () {
                    list.removeChild(li);
                    input.focus();  
                });
        }
});
