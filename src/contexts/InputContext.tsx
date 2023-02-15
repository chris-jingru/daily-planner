import React, { createContext, useRef } from "react";

// interface InputContextType {
//   input: string;
//   setInput: React.Dispatch<React.SetStateAction<string>>;
// }

// export const InputContext = createContext<InputContextType>({
//   input: "",
//   setInput: () => {},
// });

interface InputContextValue {
  inputRef: HTMLInputElement | null;
}

export const InputContext = createContext<InputContextValue>({
  inputRef: null,
});

interface InputProviderProps {
  children: React.ReactNode;
}

export function InputProvider({ children }: InputProviderProps) {
  // const [input, setInput] = useState("");

  //const inputRef = useRef<HTMLInputElement | null>(null);

  // const contextValue: InputContextType = {
  //   input,
  //   setInput,
  // };

  const contextValue: InputContextValue = { inputRef: null };

  return (
    <InputContext.Provider value={contextValue}>
      {children}
    </InputContext.Provider>
  );
}

export default InputProvider;
