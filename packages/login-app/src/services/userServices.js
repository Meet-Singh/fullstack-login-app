import axios from "axios";

import { user } from "./urls";

class UserService {
  constructor() {
    this.url = user;
  }

  register(data) {
    return axios.post(`${this.url}/register`, data);
  }

  login(username, password) {
    return axios.get(
      `${this.url}/login/?username=${username}&password=${password}`
    );
  }
}

export default new UserService();
