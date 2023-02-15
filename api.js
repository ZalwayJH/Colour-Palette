import axios from "axios";

const api = axios.create({
  baseURL: "https://www.thecolorapi.com/",
});

export function getColours(colour) {
  return api
    .get(`https://www.thecolorapi.com/id?hex=${colour}`)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getSchemes(colours) {
  return api
    .get(
      `https://www.thecolorapi.com/scheme?hex=${colours}&mode=analogic&count=4`
    )
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
}
