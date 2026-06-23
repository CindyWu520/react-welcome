import axios, { type AxiosInstance } from "axios";
import type { User } from "../../types/user";

const axiosInstance : AxiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 2000
});

export const getUsers = async () : Promise<User[]> => {
  let data: User[] = [] // = [] : initiate when it's run into catch block
  try {
    const response = await axiosInstance.get<User[]>("/users");
    data = response.data;
  } catch (error) {
    console.error(error)
  }
  return data;
}