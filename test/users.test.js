// const  eHelplySDK = require("../dist/bundle.common.cjs").eHelplySDK
import {eHelplySDK} from "../dist/bundle";
test("user", () =>{
    let eHelplyClient = new eHelplySDK()
    expect(eHelplyClient.users.add(1,2)).toBe(3);

})