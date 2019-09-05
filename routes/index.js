const express = require("express");
const router = express.Router();

const messages = [
  {
    user: "Timmy",
    text: "Woah, hello world!",
    added: new Date()
  },
  {
    user: "Matt",
    text: "Surfs up, dude!",
    added: new Date()
  },
  {
    user: "Andrew",
    text: "Cool story, bro!",
    added: new Date()
  }
];

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

router.get("/new", (req, res) => {
  res.render("form", { title: "New Message" });
});

router.post("/new", (req, res) => {
  messages.push({
    user: req.body.name,
    text: req.body.message,
    added: new Date()
  });
  res.redirect("/");
});

module.exports = router;
