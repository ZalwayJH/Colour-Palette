import axios from "axios";
import { set } from "react-native-reanimated";

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

export function getSchemes(colours, setting) {
  return api
    .get(`https://www.thecolorapi.com/scheme?hex=${colours}${setting}&count=4`)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
}
