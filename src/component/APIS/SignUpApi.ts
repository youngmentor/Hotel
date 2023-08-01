
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
    fullname: string;
    email: string;
    password: string;
    confirmPassword: string;
    phoneNumber: string;
}

export interface UserSignUpResponse{
    status: number;
    data: {
        message: string;
        id: string;
    };
    message: string;
    error: {
        message: string;
    }
}

