import axios from "axios";

export default async function PostDataHandler(url, data) {
  try {
    const res = await axios({
      method: "post",
      url: url,
      headers: {
        token: localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      data: data,
    });

    if (res.data) {
    }

    return res.data;
  } catch (error) {
    if (error.response) {
      console.error("Error response:", error.response);
      return error.response.data;
    } else {
      console.error("Error:", error.message);
      return { error: error.message };
    }
  }
}
