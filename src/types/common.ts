export interface LocationState {
  from: {
    pathname: string;
  };
}

export interface FieldData {
  name: string | number | (string | number)[];
  value?: any;
  touched?: boolean;
  validating?: boolean;
  errors?: string[];
}

export type SetFieldsStateAction<T> = (value: React.SetStateAction<T>) => void;

const localStorageItems = {
  CERTIFYYN: 'certifyYn',
  TOKEN: 'token',
} as const;

export type LocalStorageItemKeys = typeof localStorageItems[keyof typeof localStorageItems];
