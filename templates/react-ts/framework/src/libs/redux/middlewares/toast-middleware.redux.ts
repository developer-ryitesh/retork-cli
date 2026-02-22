import type { Middleware } from "@reduxjs/toolkit";

//=store=>(next)
export const ToastMiddlewareRedux: Middleware = (_) => (next) => (action: any) => {
   if (action?.type.endsWith("/fulfilled") && !action?.type?.includes("!")) {
      alert(action?.payload?.message);
   }
   if (action?.type.endsWith("/rejected") && !action?.type?.includes("!")) {
      const error = action?.payload;
      alert(error.response?.data?.error?.message || error?.message);
   }
   return next(action);
};
