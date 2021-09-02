import User from "../src/services/users/users"
test("user", () =>{
    let userClient = new User();
    expect(userClient.add(1,2)).toBe(3);
})