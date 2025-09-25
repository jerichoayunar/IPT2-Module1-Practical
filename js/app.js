// ================== Developer 1: Add Student ==================
document.addEventListener("DOMContentLoaded", function() {
    const addStudentBtn = document.getElementById("addStudentButton");
    const studentForm = document.getElementById("studentForm");
    const studentTable = document.getElementById("table-content");

    if (addStudentBtn && studentForm && studentTable) {
        addStudentBtn.addEventListener("click", function() {
            const idNumber = document.getElementById("idNumber").value.trim();
            const firstName = document.getElementById("firstName").value.trim();
            const middleName = document.getElementById("middleName").value.trim();
            const lastName = document.getElementById("lastName").value.trim();

            if (!idNumber || !firstName || !lastName) {
                alert("Please fill in all required fields (ID, Firstname, Lastname).");
                return;
            }

            const newRow = document.createElement("tr");
            newRow.innerHTML = `
                <td>${idNumber}</td>
                <td>${firstName}</td>
                <td>${middleName}</td>
                <td>${lastName}</td>
            `;
            studentTable.appendChild(newRow);

            studentForm.reset();
        });
    }
});