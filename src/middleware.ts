import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  console.log(`有人訪問了：${context.url.pathname}`);

  if (context.url.pathname.startsWith('/admin')) {
    // 如果沒有登入（這裡模擬邏輯），就跳轉回首頁
    return context.redirect('/');
  }

  // 繼續執行後續的請求
  const response = await next();
  return response;
});