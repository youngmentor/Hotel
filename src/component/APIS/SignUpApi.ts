import { useMutation } from "react-query";
import axios, {AxiosResponse} from "axios";
export interface SignUpForm {
    name: string;
    email: string;
    password: string;
    confirmpassword: string;
    phonenumber: string;
}
export interface SignUpResponse {
    status: number;
    data: {
        message: string;
        id: string;
    };
    message: string;
}

export interface UserSignUpForm {
    name: string;
    email: string;
    password: string;
    confirmpassword: string;
    phonenumber: string;
}

export interface UserSignUpResponse{
    status: number;
    data: {
        message: string;
        id: string;
    };
    message: string;
}

export const signUpMutation = useMutation<AxiosResponse<UserSignUpResponse>, Error, UserSignUpForm>(
    (formData) =>
     axios.post<UserSignUpResponse>('https://hotel-api-7wlm.onrender.com/api/v1//user/register', formData)
 
);