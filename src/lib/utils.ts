import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function validateMobile(value: string): string {
  const wrg_num = [
    '9999999999',
    '9090909090',
    '8989898989',
    '9898989898',
    '7878787878',
    '6767676767',
    '8888888888',
    '9876543210',
    '6868688668',
    '9999999998',
    '9999999988',
    '9999998888',
    '7777777777',
    '6666666666',
    '9090909998',
    '6868686868',
    '6666677777',
    '9696966999',
  ];

  const cleanedValue = value.replace(/\D/g, '');

  if (cleanedValue.length === 0) {
    return 'Please enter your 10-digit phone number';
  }
  if (cleanedValue.length === 10 && wrg_num.includes(cleanedValue)) {
    return 'Please enter a valid phone number';
  }
  if (cleanedValue.length === 10 && parseInt(cleanedValue) < 6000000000) {
    return 'Please enter a valid phone number';
  }
  if (cleanedValue.length < 10) {
    return 'Please enter a valid phone number';
  }
  return '';
}
