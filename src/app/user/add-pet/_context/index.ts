import { createContext, useContext } from "react";

type AddPetContextType = { optionIsChecked: boolean };

export const AddPetContext = createContext<AddPetContextType | null>(null);

export const useAddPetContext = () => {
  const addPetContext = useContext(AddPetContext);

  if (!addPetContext)
    throw new Error(
      "useAddPetContext has to be used within <AddPetContext.Provider>"
    );
  return addPetContext;
};
