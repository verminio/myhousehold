import { pb } from "./pocketbase"

const col: string = 'users';

export const listUsers = async (page: number, perPage: number) => {
    return pb.collection(col).getList<User>(page, perPage)
}

class User {
    id: string;
    name: string;
    verified: boolean;
    created: Date;

    constructor(id: string, name: string, verified: boolean, created: Date) {
        this.id = id;
        this.name = name;
        this.verified = verified;
        this.created = created;
    }
}