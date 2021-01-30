function Click() {
    // Making Li in Ol element
    let ElementP = document.querySelector("ol");
    let To_do = document.createElement("li");
    To_do.textContent = document.querySelector("input").value;
    ElementP.appendChild(To_do);
    let Img = document.createElement("IMG");
    To_do.appendChild(Img);
    Img.src = "images/excluir.svg";
    // Deleting items
    Img.addEventListener('click', function Delete() {
        var pop = prompt("Você deseja excluir este item?");
        ElementP.removeChild(To_do);

    })

}
