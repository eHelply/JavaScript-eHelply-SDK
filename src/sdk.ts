import {Users} from "./services/users/users";
export class eHelply {
    users: Users;
    constructor() {
        this.users = new Users()
    }
}

let ehelplyClient: eHelply = new eHelply()
ehelplyClient.users.logIn("wilson.nie13@gmail.com", "Mdrad9qfwA46JkD9zMR0")
