import axios from "axios";
const API_URL = "http://localhost:8000";
// if (process.env.REACT_APP_SERVER_ENVIORNMENT === 'dev') {
//     url = 'http://localhost:' + process.env.REACT_APP_SERVER_PORT + url
//   } else {
//     url = 'https://api.esummit.in/' + url
//   }
export default class CallAPi {
//   constructor() {}
  createProfile(user) {
    const url = `${API_URL}/users/new/`;
    return axios
      .post(url, user, {
        headers: {
          "content-type": "multipart/form-data"
        }
      })
      .catch(err => console.log(err));
  }
}
