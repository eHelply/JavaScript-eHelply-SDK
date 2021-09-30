export default class UserSdk {
  axiosClient: any
  constructor(axiosClient: any) {
    this.axiosClient = axiosClient
  }
    logIn(email: string, password: string) {
         let data = {
            "user_login_data": {
                "username": email,
                "password": password
            }
        }
        this.axiosClient.post(`/users/auth/login`, data).then((res: any) => {
            console.log(res)
        })
    }
}
