// let Array = [];
function addData() {
    let inputname = document.getElementById("name").value;
    let inputage = document.getElementById("age").value;
    let inputcountry = document.getElementById("country").value;
  
    if (inputname && inputage && inputcountry) {

        // Array.push({ name: inputname, age: inputage, country: inputcountry });

        let tableBody = document.getElementById("dataTable").getElementsByTagName('tbody')[0];


        let row = tableBody.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);

        cell1.textContent = inputname;
        cell2.textContent = inputage;
        cell3.textContent = inputcountry;

        let delete_btn = document.createElement("button");
        delete_btn.textContent = "Delete";
        delete_btn.classList.add("delete-btn-class");

        delete_btn.onclick = function(){
            tableBody.deleteRow(row.rowIndex - 1);
            // Array.splice(row.rowIndex - 1, 1)
        }

        cell4.appendChild(delete_btn);

        document.getElementById("inputform").reset();
    }
    else {

        alert("Please Fill the Input field")
    }
}
