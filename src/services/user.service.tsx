import axios from 'axios';
export default class UserService {
  async sendPostRequest(endPoint : string, data : any){
    return new Promise<string>((resolve, reject) => {
      const url = 'http://localhost:8080/api/';
      axios
        .post(
          `${url}/${endPoint}`, data)
        .then(res => {
          if (res && res.status === 200) {
            resolve(res.data);
          } else {
            reject(`Error`);
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}