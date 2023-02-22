import { createContext, useState } from "react";

interface InputContextType {
  formInput: string;
  setFormInput: React.Dispatch<React.SetStateAction<string>>;
  formSelect: string;
  setFormSelect: React.Dispatch<React.SetStateAction<string>>;
}

const InputContext = createContext<InputContextType>({
  formInput: "",
  setFormInput: () => {},
  formSelect: "",
  setFormSelect: () => {},
});

interface InputProviderProps {
  children: React.ReactNode;
}

export function InputProvider({ children }: InputProviderProps) {
  const [formInput, setFormInput] = useState("");
  const [formSelect, setFormSelect] = useState("Top Priorities");

  const contextValue: InputContextType = {
    formInput,
    setFormInput,
    formSelect,
    setFormSelect,
  };

  return (
    <InputContext.Provider value={contextValue}>
      {children}
    </InputContext.Provider>
  );
}

export default InputContext;

//! Deprecated codes
// interface InputContextValue {
//   inputRef: HTMLInputElement | null;
// }

// export const InputContext = createContext<InputContextValue>({
//   inputRef: null,
// });

//const contextValue: InputContextValue = { inputRef: null };
