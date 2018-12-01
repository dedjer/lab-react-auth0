import axios from "axios";
import auth0Client from "./Auth";

export async function getResponse() {
  const response = await axios.get("http://localhost:8080/api/private", {
    headers: { Authorization: `Bearer ${auth0Client.getAccessToken()}` }
  });
  return await response;
}
