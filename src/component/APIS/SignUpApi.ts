
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
  message:string;
}