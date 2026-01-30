// import type { AppDispatch } from "@/app/store/store";
// import { logout } from "@/features/auth";
// import { useRefreshMutation } from "@/features/auth/api/authApi";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";

// function AppInit() {
//   const [refresh] = useRefreshMutation();
//   const dispatch = useDispatch<AppDispatch>();

//   useEffect(() => {
//     const init = async () => {
//       const hasRefreshToken = document.cookie.includes("refreshToken=");
//       if (!hasRefreshToken) return;

//       try {
//         await refresh(undefined).unwrap();
//         console.log("✅ Token refreshed successfully");
//       } catch (error) {
//         console.log("⚠️ No valid refresh token, user needs to login", error);
//         dispatch(logout());
//       }
//     };
//     init();
//   }, [dispatch, refresh]);

//   return null;
// }

// export default AppInit;

import type { AppDispatch } from "@/app/store/store";
import { logout } from "@/features/auth";
import { useRefreshMutation } from "@/features/auth/api/authApi";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

function AppInit() {
  const [refresh] = useRefreshMutation();
  const dispatch = useDispatch<AppDispatch>();
  const initRef = useRef(false); // Флаг инициализации

  useEffect(() => {
    // Предотвращаем повторную инициализацию
    if (initRef.current) return;

    const init = async () => {
      const hasRefreshToken = document.cookie.includes("refreshToken=");
      if (!hasRefreshToken) {
        console.log("ℹ️ No refresh token found");
        return;
      }

      try {
        await refresh(undefined).unwrap();
        console.log("✅ Token refreshed successfully");
      } catch (error) {
        console.log("⚠️ Refresh failed, clearing auth state", error);
        dispatch(logout());
        // НЕ делаем редирект здесь - пусть роутинг сам обработает
      }
    };

    initRef.current = true;
    init();
  }, []); // Пустой массив зависимостей

  return null;
}

export default AppInit;
