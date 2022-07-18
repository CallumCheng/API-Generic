function displayMenu(data){
    const menu = document.getElementById("menu");

    const starters = document.createElement("h2");
    starters.textContent = "Starters";

    menu.appendChild(starters);

    data["starters"].forEach (s => {

        const item = document.createElement("p");
        item.textContent = s;
        menu.appendChild(item);

    })


}

async function loadMenu(){

    const url = "http://localhost:3000/menu";

    try {
        const res = await fetch(url);
        const data = await res.json();

        displayMenu(data);

    } catch (err) {
        alert("There was a problem communicating with the server.")
    }

} 

loadMenu();
