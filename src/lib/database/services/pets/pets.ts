import DBConstructor from "../dbConstructor/dbConstructor";
import { PetsTypes } from "@/types";
import { Pet } from "../../models";

class Pets extends DBConstructor {
  constructor() {
    super();
  }

  async addPet(newPet: Partial<PetsTypes>) {
    return Pet.create(newPet);
  }
  async findPets(userId: string) {
    return Pet.find({ owner: userId });
  }

  async findPet(id: Partial<PetsTypes>) {
    return Pet.findById(id);
  }
  async deletePet(id: Partial<PetsTypes>) {
    return Pet.findByIdAndDelete(id);
  }
}

export default Pets;
