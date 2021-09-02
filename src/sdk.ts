import Users from "./services/users/users";
export class eHelplySDK {
    users: Users;
    constructor() {
        this.users = new Users()
    }

}
console.log("hi")
// export function test(a: number, b: number){
//     return a - b
// }
// let ehelplyClient: eHelplySDK = new eHelplySDK()
// console.log(ehelplyClient.users.add(1,2))
// // ehelplyClient.users.logIn("wilson.nie13@gmail.com", "Mdrad9qfwA46JkD9zMR0")
