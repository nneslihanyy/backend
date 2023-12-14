var express = require("express");
var router = express.Router();
//get post gibi isteklerin oluşturulması gibi ayarlar için kullanımda kullanıcaz
//render metodu ilgili içeriği ilgili arayüze bağlar index.htmle bağlıyo burda
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
