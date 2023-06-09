import axios from "axios";


export async function createPlant(value) {
  const res =
    await axios.post("http://localhost:4000/plant/upload-plant", value
    );
  console.log("User created:", res.data);
  return true;
}

export const getAllPlant = async (authtoken) => {
  return await axios.get("http://localhost:4000/plant/get-all-plants",
    {
      headers: {
        authtoken,
      },
    }
  );
}