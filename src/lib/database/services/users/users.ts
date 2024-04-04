import { UserTypes } from "@/types";
import DBConstructor from "../dbConstructor/dbConstructor";
import { User } from "../../models";

type QueryType = { [key: string]: string };

interface IUsers {
  createUser(newUser: UserTypes): Promise<UserTypes>;
  findUser(query: QueryType): Promise<UserTypes>;
  findUserById(
    id: string | number,
    projection?: string | null
  ): Promise<UserTypes>;
}

class Users extends DBConstructor implements IUsers {
  constructor() {
    super();
  }

  createUser(newUser: UserTypes) {
    return User.create(newUser);
  }

  findUser(query: QueryType) {
    return User.findOne(query);
  }

  findUserById(id: string | number, projection = null) {
    return User.findById(id, projection);
  }
}

export default Users;
