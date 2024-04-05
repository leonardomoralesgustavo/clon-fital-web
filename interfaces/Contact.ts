import axios, { AxiosError } from "axios";

export type AddContactBody = {
  name: string;
  last_name: string;
  email: string;
  phone: number;
};

export type BaseResponseTypes<T = any> = {
  success: boolean;
  errors?: string[];
  data?: T;
};

export const addContactService = async (data: AddContactBody) => {
  try {
    const response = await axios.post<BaseResponseTypes>(
      `${process.env.BASE_URL}api/contact/save`,
      data
    );
    return response.data;
  } catch (error) {
    const err = error as AxiosError<BaseResponseTypes>;
    return err.response!.data;
  }
};
