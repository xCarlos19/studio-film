/// <reference path="../.astro/types.d.ts" />
declare module "astro:env/client" {
    export const RESEND_API_KEY: string;
    export const EMAIL_DEST: string;
    export const EMAIL_FROM: string;
  }