import {usersList} from "./data";

export default class StoreService {
  getResource(link, body = "", variant = "") {
    return new Promise((resolve, reject) => {
      switch (variant) {
        case "getUsers":
          setTimeout(() => {
            resolve(usersList); // имитация загрузки
          }, 1500)
          break;
      }
    });
  }
}