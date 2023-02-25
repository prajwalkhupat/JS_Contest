let tableData = [];

const addRowBtn = document.getElementById("add-row-btn");
const saveBtn = document.getElementById("save-btn");

addRowBtn.addEventListener("click", function() {
  const tableBody = document.querySelector("#editable-table tbody");
  const newRow = document.createElement("tr");
  const idCell = document.createElement("td");
  const id = tableData.length + 1;
  idCell.textContent = id;
  newRow.appendChild(idCell);

  const nameCell = document.createElement("td");
  const nameInput = document.createElement("input");
  nameCell.appendChild(nameInput);
  newRow.appendChild(nameCell);

  
  const srollCell = document.createElement("td");
  const srollInput = document.createElement("input");
  srollInput.type = "number";
  srollCell.appendChild(srollInput);
  newRow.appendChild(srollCell);

  const subCell = document.createElement("td");
  const subInput = document.createElement("input");
  subCell.appendChild(subInput);
  newRow.appendChild(subCell);

  const marksCell = document.createElement("td");
  const marksInput = document.createElement("input");
  marksInput.type = "number";
  marksCell.appendChild(marksInput);
  newRow.appendChild(marksCell);

  const markedByCell = document.createElement("td");
  const markedByInput = document.createElement("input");
  markedByInput.type = "email";
  markedByCell.appendChild(markedByInput);
  newRow.appendChild(markedByCell);

  const actionsCell = document.createElement("td");
  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Save";

  saveBtn.addEventListener("click", function() {
    const rows = document.querySelectorAll("#editable-table tbody tr");
    let error = false;
    rows.forEach(function(row, index) {
      const nameInput = row.querySelector("td:nth-child(2) input");
      const srollInput = row.querySelector("td:nth-child(3) input");
      const subInput = row.querySelector("td:nth-child(4) input");
      const marksInput = row.querySelector("td:nth-child(5) input");
      const markedByInput = row.querySelector("td:nth-child(6) input");
      const rowData = tableData[index];
              if (nameInput.value === "" || srollInput.value === "" || subInput.value === "" || marksInput.value === "" || markedByInput.value === "") {
              error = true;
              [nameInput, srollInput, subInput, marksInput, markedByInput].forEach(function(input) {
                  if (input.value === "") {
                  input.classList.add("error");
                  } else {
                  input.classList.remove("error");
                  };
              });
          };
      });
  });
  
  actionsCell.appendChild(saveBtn);
  newRow.appendChild(actionsCell);
  tableBody.appendChild(newRow);
  tableData.push({
    id: id,
    name: "",
    sroll:"",
    sub: "",
    marks: "",
    markedBy: ""
  });
});

