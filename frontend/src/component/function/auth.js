import axios from "axios"

export const register = async (value) =>
  await axios.post('http://localhost:4000/user/register', value);

export const login = async (value) =>
  await axios.post('http://localhost:4000/user/login', value);

export const currentUser = async (authtoken) => {
  return await axios.post("http://localhost:4000/user/current-user",
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
}

export const currentAdmin = async (authtoken) => {
  return await axios.post("http://localhost:4000/user/current-admin",
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
}