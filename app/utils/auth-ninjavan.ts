// /app/utils/ninjaVanApi.ts
import axios from "axios";
import { NINJA_VAN_CONFIG } from "~/constants/ninjavan-api-config";

export async function getAuthToken() {
  const params = new URLSearchParams();
  params.append("client_id", NINJA_VAN_CONFIG.CLIENT_ID);
  params.append("client_secret", NINJA_VAN_CONFIG.CLIENT_SECRET);
  params.append("grant_type", "client_credentials");

  try {
    const response = await axios.post(
      `${NINJA_VAN_CONFIG.API_URL}/oauth/access_token`,
      params
    );
    return response.data.access_token;
  } catch (error) {
    console.error("Failed to retrieve Ninja Van auth token:", error);
    return null;
  }
}
