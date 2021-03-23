import Express from "express";
import bodyParser from "body-parser";

const app = Express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => console.log(`app running on port ${port}`));
