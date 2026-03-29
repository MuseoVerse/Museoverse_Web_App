/// <reference types="vite/client" />

declare module "*.avif";
declare module "*.bmp";
declare module "*.gif";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.png";
declare module "*.svg" {
  const src: string;
  export default src;
}
declare module "*.webp";
declare module "*.woff";
declare module "*.woff2";
declare module "*.eot";
declare module "*.ttf";
declare module "*.otf";
