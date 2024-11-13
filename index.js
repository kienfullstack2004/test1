const express =  require("express");
const app = express();
const route = require('./routes/client/index.route');
const routeAdmin = require('./routes/admin/index.route');
require("dotenv").config();
const database = require("./config/database");
const systemConfig = require("./config/system");
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

app.set('views','./views');
app.set('view engine','pug');
//app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('_method'));

// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));
app.use(express.json());


// App locals Variales
app.locals.prefixAdmin = systemConfig.prefixAdmin;

app.use(express.static("public"));

database.connect();


routeAdmin(app);
route(app);

app.listen(process.env.PORT,()=>{
    console.log('App is running. You please run app on website !!!');
})