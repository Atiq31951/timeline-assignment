import axios from "../utils/axios";

export const getContents = async ({ page = 1 }) => {
  const url = "contents?page=" + page;
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log("Error in getContents api", error);
    return [];
  }
};
