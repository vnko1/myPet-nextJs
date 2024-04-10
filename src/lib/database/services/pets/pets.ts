import DBConstructor from "../dbConstructor/dbConstructor";
import { PetsTypes } from "@/types";
import { Pet } from "../../models";

class Pets extends DBConstructor {
  constructor() {
    super();
  }

  async addPet(newPet: Omit<PetsTypes, "_id">) {
    return Pet.create(newPet);
  }

  async findPet(id: Pick<PetsTypes, "_id">) {
    return Pet.findById(id);
  }
  async deletePet(id: Pick<PetsTypes, "_id">) {
    return Pet.findByIdAndDelete(id);
  }
}

export default Pets;
