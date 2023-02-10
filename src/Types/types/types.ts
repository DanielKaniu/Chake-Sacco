//
//The structure of the user.
export type User = {
    ok: boolean;
    data: User_details[]
}
//
//The details of a user.
export type User_details = {
    first_name: string;
    second_name: string;
    email: string;
    occupation: string;
    gender: string;
    phone: string;
    location: string;
    contribution: string;
    image: string;
}