import express from "express";
import nunjucks from "nunjucks";

import { objectArray } from "./fakeDataBase";

const app = express();

app.use(express.static("public"));

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app.set("view engine", "njk");

app.get("/", (request, response) => {
  response.render("home", { objectArray });
});

app.get("/game/:gameName", (request, response) => {
  const routeParameters = request.params;

  const findRoute = objectArray.find((route) => route.link === routeParameters.gameName);

  if (findRoute) {
    response.render("details", { name: routeParameters.gameName, objectArray, findRoute });
  } else {
    response.status(404).render("not-found", { error: "Game not found" });
  }
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
