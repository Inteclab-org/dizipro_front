import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

export const fadeIn = {
  hidden: {
    y: 20,
    opacity: 0
  },
  visible: (delay: number) => {
    return {
      y: 0,
      opacity: 1,
      transition: {
        delay: delay * 0.1,
        duration: 0.4,
        ease: [0.42, 0, 0.58, 1]
      },
    }
  },
};

export const range = (start: number, end: number) => {
  let output = [];
  if (typeof end === "undefined") {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += 1) {
    output.push(i);
  }
  return output;
};

// Helper type to get all of the keys in a nested type.
export type ObjectKeys<
  // T = passed type, extend to be a an object with unknown value types.
  T extends Record<string, unknown>,
  // Key = keys of passed type.
  Key = keyof T,
> =
  // Check if key is a string.
  Key extends string
    ? // Continue to check if key has nested objects.
      T[Key] extends Record<string, unknown>
      ? // If nested object is found, recursively run the ObjectKeys on it.
        `${Key}.${ObjectKeys<T[Key]>}`
      : // If nested object is not found, return the key.
        `${Key}`
    : // Return nothing.
      never;
