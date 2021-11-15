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
