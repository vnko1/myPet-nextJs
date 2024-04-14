import { UserTypes, ID, Options } from "@/types";
import DBConstructor from "../dbConstructor/dbConstructor";
import { User } from "../../models";

type QueryType = { [key: string]: string };

type UserOptions = {
  fieldName: keyof UserTypes | null;
} & Options;

interface IUsers {
  createUser(newUser: UserTypes): Promise<UserTypes>;
  findUser(query: QueryType): Promise<UserTypes>;
  findUserById(_id: ID, options?: Partial<UserOptions>): Promise<UserTypes>;
  updateUser(
    _id: ID,
    userData: Partial<UserTypes> & { [name: string]: string },
    options?: Partial<UserOptions>
  ): Promise<UserTypes>;
}

class Users extends DBConstructor implements IUsers {
  constructor() {
    super();
  }

  createUser(newUser: Omit<UserTypes, "_id" | "avatarUrl">) {
    return User.create(newUser);
  }

  findUser(query: QueryType, { projection = "" }: Partial<UserOptions> = {}) {
    return User.findOne(query, projection);
  }

  findUserById(id: ID, { projection = "" }: Partial<UserOptions> = {}) {
    return User.findById(id, projection);
  }
  updateUser(
    _id: ID,
    userData: Partial<UserTypes | { [name: string]: string }>,
    {
      fieldName = null,
      projection = "",
      newDoc = true,
    }: Partial<UserOptions> = {}
  ) {
    if (fieldName) {
      const [key] = Object.keys(userData);
      return User.findByIdAndUpdate(
        _id,
        {
          [key]: { fieldName: userData[key as keyof UserTypes] },
        },
        { new: newDoc, projection }
      );
    }

    return User.findByIdAndUpdate(_id, userData, {
      new: newDoc,
      projection,
    });
  }
}

export default Users;
