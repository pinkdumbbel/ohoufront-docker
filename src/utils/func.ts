import { LocalStorageItemKeys } from '@/types/common';

export const hidefindDOMNodeError = (): void => {
  const consoleError = console.error.bind(console);
  console.error = (errObj, ...args) => {
    if (args.includes('findDOMNode')) {
      return;
    }
    consoleError(errObj, ...args);
  };
};

export const getStorageItem = (key: LocalStorageItemKeys): string | null => {
  return localStorage.getItem(key);
};
