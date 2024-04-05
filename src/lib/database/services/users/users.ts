import { UserTypes } from "@/types";
import DBConstructor from "../dbConstructor/dbConstructor";
import { User } from "../../models";

type ID = string | number;
type QueryType = { [key: string]: string };
type Options = {
  fieldName: keyof UserTypes | null;
  projection: string;
  newDoc: boolean;
};

interface IUsers {
  createUser(newUser: UserTypes): Promise<UserTypes>;
  findUser(query: QueryType): Promise<UserTypes>;
  findUserById(id: ID, options?: Partial<Options>): Promise<UserTypes>;
  updateUser(
    id: string | number,
    user: UserTypes,
    options?: Partial<Options>
  ): Promise<UserTypes>;
}

class Users extends DBConstructor implements IUsers {
  constructor() {
    super();
  }

  createUser(newUser: Omit<UserTypes, "id">) {
    return User.create(newUser);
  }

  findUser(query: QueryType, { projection = "" }: Partial<Options> = {}) {
    return User.findOne(query, projection);
  }

  findUserById(id: ID, { projection = "" }: Partial<Options> = {}) {
    return User.findById(id, projection);
  }
  updateUser(
    id: ID,
    user: Partial<UserTypes>,
    { fieldName = null, projection = "", newDoc = true }: Partial<Options> = {}
  ) {
    if (fieldName) {
      const [key] = Object.keys(user);
      return User.findByIdAndUpdate(
        id,
        {
          [key]: { fieldName: user[key as keyof UserTypes] },
        },
        { new: newDoc, projection }
      );
    }

    return User.findByIdAndUpdate(id, user, {
      new: newDoc,
      projection,
    });
  }
}

export default Users;
