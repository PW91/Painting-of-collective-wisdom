const express = require("express");
const router = express.Router();

const Item = require("../../models/Item");

router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

router.post("/", (req, res) => {
  const newItem = new Item({
    color: req.body.color,
    deg: req.body.deg,
    font: req.body.font,
    size: req.body.size,
    word: req.body.word,
    x: req.body.x,
    y: req.body.y
  });

  newItem.save().then(item => res.json(item));
});

router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then(item =>
      item.remove().then(() => res.json({ success: true, id: req.params.id }))
    )
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
