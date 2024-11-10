// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

export const GET = handleAuth({
  async login(req, res) {
    try {
      return await handleLogin(req, res, {
        authorizationParams: { connection: "Username-Password-Authentication" },
      });
    } catch (error) {
      console.log(error);
    }
  },
});
