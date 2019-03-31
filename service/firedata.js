// 輸入 database 網址
var admin = require("firebase-admin");

var serviceAccount = require("kuanglung-64ede-firebase-adminsdk-umf83-efc8098071");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://kuanglung-64ede.firebaseio.com"
});
