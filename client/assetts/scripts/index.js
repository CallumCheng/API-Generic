function displayRestuarantDetails(data) {

    //Get a reference to the heading
    const heading = document.getElementById("restuarant-name");
    heading.textContent = data["name"];

    const year = document.getElementById("established-year");
    year.textContent = data["established"];

    document.getElementById("restuarant-status").textContent = data["status"];

}

function loadRestuarantDetails() {

    const url = "http://localhost:3000";

    fetch(url)
        .then(res => res.json())
        .then(data => displayRestuarantDetails(data))
        .catch(err => {
            console.log(err);
        })
}

loadRestuarantDetails();
