import Express from "express";

const app = Express();
const port = process.env.PORT || 8000;

app.get("/", (res, req) => {
  res.send("hello world");
});

app.listen(port, () => console.log("working"));
