function Click() {
    // Making Li in Ol element
    let ElementP = document.querySelector("ol");
    let To_do = document.createElement("li");
    To_do.textContent = document.querySelector("input").value;
    ElementP.appendChild(To_do);
    // Deleting items 
    To_do.addEventListener('dblclick', function Delete() {
        ElementP.removeChild(To_do)
    })
}
