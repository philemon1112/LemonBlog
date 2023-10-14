// lib/utils.ts
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// created by chatgpt
export function isBase64Image(imageData) {
    const base64Regex = /^data:image\/(png|jpe?g|gif|webp);base64,/;
    return base64Regex.test(imageData);
  }
  
  // created by chatgpt
  export function formatDateString(dateString) {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
  
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString(undefined, options);
  
    const time = date.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    });
  
    return `${time} - ${formattedDate}`;
  }
  
//   // created by chatgpt
//   export function formatThreadCount(count) {
//     if (count === 0) {
//       return "No Threads";
//     } else {
//       const threadCount = count.toString().padStart(2, "0");
//       const threadWord = count === 1 ? "Thread" : "Threads";
//       return `${threadCount} ${threadWord}`;
//     }
//   }