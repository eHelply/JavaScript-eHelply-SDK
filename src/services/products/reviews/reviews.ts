import * as config from "../../../secret.json";

import axios from "axios";

export default class ReviewServices {
  createRewview() {
  //   axios.post(`${config.baseURL}/users/auth/login`, data).then((res: any) => {
  //     console.log(res)
  //   })
    console.log("create review", config.baseURL)
  }
}
