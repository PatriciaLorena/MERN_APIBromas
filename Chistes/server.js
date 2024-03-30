const express = require("express");
const app = express();
const port = 80;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

require("./config/mongose.config");

const ChisteRouter = require("./routes/chiste.routes");
app.use("/api/chistes", ChisteRouter);


app.listen( port, () => console.log(`Listening on port: ${port} (http://localhost:${port}/)`)); 