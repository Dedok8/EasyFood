import { store } from "@/app/store/store";
import { setCredentials } from "@/features/auth";
import { BASE_URL } from "@/shared/api/baseApi";

let sessionRestored = false;

export const rootLoader = async () => {
  // Запускаємо тільки один раз при старті
  if (sessionRestored) return null;
  sessionRestored = true;

  try {
    const res = await fetch(`${BASE_URL}/auth/refresh`, {
      method: "POST",
      credentials: "include", // бере refresh token з cookie
    });

    if (res.ok) {
      const data = await res.json();
      store.dispatch(setCredentials(data)); // токен тепер в Redux
    }
  } catch {
    // refresh не вдався — юзер не авторизований, нічого не робимо
  }

  return null;
};
