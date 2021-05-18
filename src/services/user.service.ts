import { ILogin } from '../interfaces/login.interface'
import Service from './service'

class UserService extends Service {

  public static async login<T>(user: string, pass: string): Promise<T> {
    const body: ILogin = { user, pass }
    const res: T = await this.post('login', body)
    return res
  }
  
}

export default UserService