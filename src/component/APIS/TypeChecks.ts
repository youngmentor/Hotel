
export interface SignUpForm {
    name: string;
    email: string;
    password: string;
    confirmpassword?: string;
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
export interface RegisterHotel{
    hotelName: string;
    address: string;
    website: string;
    description: string;
    email: string;
    city: string;
    state: string;
    imageId: string | any;
}
export interface RegisterRoom{
     roomNumber: string ;
     roomDescription: string;
     price: string ;
    image:  any;
}
