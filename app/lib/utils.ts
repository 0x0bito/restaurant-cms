import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCurrentTime() {
  const now = new Date();

  let hours: string | number = now.getHours();
  let minutes: string | number = now.getMinutes();
  let seconds: string | number = now.getSeconds();

  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  return `${month}-${day}-${year} ${hours}:${minutes}:${seconds}`;
}
