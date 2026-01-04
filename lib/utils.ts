import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const prefixPath = (path: string) => {
  const isProd = process.env.NODE_ENV === 'production';
  const basePath = isProd ? '/Portfolio' : '';
  
  return path.startsWith('/') ? `${basePath}${path}` : path;
};