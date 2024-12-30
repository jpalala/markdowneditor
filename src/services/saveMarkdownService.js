import axios from "axios";

const API_BASE_URL = "https://example.com/api"; //replace with your api endpoint

export const saveMarkdown = async (content) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/save-post`, { content });
    return response.data;
  } catch (error) {
    console.error("Error saving:", error);
    throw error;
  }
};
