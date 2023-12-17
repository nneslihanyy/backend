//veritabanı ayar dosyası olacakmış
//dosyayı uygulamaya tanıtma işlemini app jsde yapıyoruz
//bu kütüphaneyi mongoose değişkeniyle kullanabiliyorum
var mongoose = require("mongoose");
var dbURI = "mongodb://localhost/mekanbul";
mongoose.connect(dbURI);
//bağlandıysa ekrana basılacak ifade
mongoose.connection.on("connected", function () {
  console.log(dbURI + " adresine bağlandı");
});
//bağlantıda sorun varsa
mongoose.connection.off("error", function () {
  console.log(" bağlantıda hata oldu");
  n;
});
//bağlantı kesildiğinde
mongoose.connection.on("disconnected", function () {
  console.log("bağlantı kesildi");
});
//ctrl+c donanımsal kesme gibi bişey "SIGINT"
process.on("SIGINT", function () {
  mongoose.connection.close();
  console.log("Uygulama kapatıldı");
  process.exit(0);
});
require("./venue");
