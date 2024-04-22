// /app/routes/createOrder.ts
import axios from "axios";
import { getAuthToken } from "~/utils/auth-ninjavan";

const API_BASE_URL = "https://api-sandbox.ninjavan.co/sg"; // Use sandbox for testing

export async function createOrder(accessToken: string, orderDetails: any) {
  try {
    const response = await axios.post(`${API_BASE_URL}/orders`, orderDetails, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating order:", error);
  }
}
