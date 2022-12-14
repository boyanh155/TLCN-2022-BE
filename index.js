// initial
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
// const swaggerAutogen = require('swagger-autogen')()
// const endpointsFiles = ['./routers/personRouter.js']
require("dotenv").config();
const app = express();
<<<<<<< HEAD
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
=======
const passport = require("passport");

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
>>>>>>> 6337568794d7834696c2540cde94aa8e7fda51d6
);

app.use(bodyParser.json());
//options swagger

const options = {
<<<<<<< HEAD
  definition: {
    info: {
      title: "TLCN K19 API",
      version: "1.0.0",
      description: "TLCN K19  Ecommerce API",
    },
    servers: ["http://localhost:5000"],
  },
  apis: ["./routes/*.js"],
=======
    definition: {
        info: {
            title: "TLCN K19 API",
            version: "1.0.0",
            description: "TLCN K19  Ecommerce API",
        },
        servers: ["http://localhost:5000"],
    },
    apis: ["./routes/*.js"],
>>>>>>> 6337568794d7834696c2540cde94aa8e7fda51d6
};
const specs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

const expressSession = require("express-session");
app.use(
<<<<<<< HEAD
  expressSession({
    secret: process.env.EXPRESS_SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);

var passport = require("passport");
app.use(passport.initialize());
app.use(passport.session());

//cors
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
=======
    expressSession({
        secret: process.env.EXPRESS_SESSION_SECRET,
        resave: true,
        saveUninitialized: true,
    })
);
app.use(passport.initialize());
app.use(passport.session());


//cors
const cors = require("cors");
const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
>>>>>>> 6337568794d7834696c2540cde94aa8e7fda51d6
};
app.use(cors(corsOptions));

// middle ware for dev log
const morgan = require("morgan");

if (process.env.NODE_ENV == "develop") {
    app.use(morgan("dev"));
}
//
app.use(cookieParser());
//
app.use(express.json());
//routes
const route = require("./src/routes");
<<<<<<< HEAD

//routes
=======
>>>>>>> 6337568794d7834696c2540cde94aa8e7fda51d6

route(app);

// Error
const errorHandler = require("./src/middleware/error");
app.use(errorHandler);
<<<<<<< HEAD

// Handle Unhandled Promise rejections
process.on("unhandledRejection", (err) => {
  console.log(`ERROR: ${err.stack}`);
  console.log("Shutting down the server due to Unhandled Promise rejection");
  server.close(() => {
    process.exit(1);
  });
});
// Handle Uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`ERROR: ${err.stack}`);
  console.log("Shutting down due to uncaught exception");
  process.exit(1);
});
=======


>>>>>>> 6337568794d7834696c2540cde94aa8e7fda51d6
// db
const db = require("./src/config/db");

db.connect();

//context
const PORT = process.env.PORT;
//
const server = app.listen(PORT || 5000, () => console.log("Server start on port " + PORT));
// Handle Unhandled Promise rejections
process.on("unhandledRejection", (err) => {
    console.log(`ERROR: ${err.stack}`);
    console.log("Shutting down the server due to Unhandled Promise rejection");
    server.close(() => {
        process.exit(1);
    });
});
// Handle Uncaught exceptions
process.on("uncaughtException", (err) => {
    console.log(`ERROR: ${err.stack}`);
    console.log("Shutting down due to uncaught exception");
    process.exit(1);
});