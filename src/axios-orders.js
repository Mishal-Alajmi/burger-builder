import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-create-burger-4a3be.firebaseio.com/"
});

export default instance;
