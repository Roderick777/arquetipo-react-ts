import axios, { AxiosInstance, AxiosResponse } from 'axios'

const baseURL: string = 'http://localhost:3000/'
const axiosInstance: AxiosInstance = axios.create({ baseURL })

class Service {
  
  public static async get<T>(url: string): Promise<T> {
    const api: AxiosResponse = await axiosInstance.get(url)
    const data: T = api.data
    return data
  }

  public static async post<T, T2>(url: string, body: T2): Promise<T> {
    const api: AxiosResponse = await axiosInstance.post(url, body)
    const data: T = api.data
    return data
  }
}

export default Service