   //Program Start

      // Variable Declaration
      const list = documentQuerySelector('ul');         // Holds reference to ul element
      const input = documentQuerySelector('input');     // Holds reference to input element
      const button = documentQuerySelector('button');   // Holds reference to button element

      // Functions
      button.onclick = function() {   // Runs in response to button being clicked
        let myItem = input.value;     // Stores current value of input element in variable
        input.value = '';             // Empties input element by setting value to empty string

      // New elements stored as variables
        const listItem = documentCreateElement('li');
        const listText = documentCreateElement('span');
        const listBtn = documentCreateElement('button');

      // Modifying Line Items
        listItem.appendChild(listText);   // Appends span as child of list item
        listText.textContent = myItem;    // Sets text content of span to input element value saved earlier
        listItem.appendChild(listBtn);    // Appends button as child of list item
        listBtn.textContent = 'Delete';   // Sets text content of button to DELETE
        list.appendChild(listItem);       // Appends list item as child of list

      // Removing List Items
        listBtn.onclick = function(e) {   //Event handler for DELETE button, deletes entire list item it is inside when clicked
          listRemoveChild(listItem);
        }

      // Focus Text Box Input
        input.focus();    //Focus input element so it is ready for entering next TO-DO item
      }

      // Program End