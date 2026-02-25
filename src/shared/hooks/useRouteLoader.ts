import { store } from "@/app/store/store";

export async function rootLoader() {
  const token = store.getState().auth.accessToken;
  console.log("token from store:", token);
  return { isAuthenticated: !!token };
}
