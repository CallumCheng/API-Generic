const express = require("express");
const cors = require("cors");

const app = express();

//Tell the app to allow cross-origin requests;
app.use(cors())

const menu = {
    starters: ["garlic bread", "chocolate fudge cake", "fries"],
    main: ["burger and chips", "steak and mash potatoes", "chicken katsu curry"],
    desserts: ["pancakes and syrup", "ice cream", "creme brulee"],
    specials: {
        "monday": "dover sole",
        "tuesday": "porterhouse steak",

    }
}

app.get("/", (req, res) => {
    res.json({
        "name": "Lucky Oriental",
        "established": 1975,
        "status-rating": 10,
        "hygiene-rating": 10
    })
})

app.get("/menu", (req, res) => {
    res.json(menu)
})

// /specials/monday... tuesday... etc.
app.get("/specials/:day", (req,res) => {
    const day = req.params.day;
    const special = menu["specials"][day];

    if (special) {
        res.json({
            "special": special
        });
    } else {
        res.status(404).json({       //setting page not found if not correct terms put into addresss
            "special": null,
            "success": false
        })
    }
})

module.exports = app;
