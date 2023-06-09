import axios from "axios"

export const getAllUser = async (authtoken) => {
    return await axios.get("http://localhost:4000/user/get-all-user",
      {
        headers: {
          authtoken,
        },
      }
    );
  }