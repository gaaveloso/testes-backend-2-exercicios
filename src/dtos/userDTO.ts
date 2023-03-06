import { UserModel } from "../types"

export interface SignupInputDTO {
    name: unknown,
    email: unknown,
    password: unknown
}

export interface SignupOutputDTO {
    token: string
}

export interface LoginInputDTO {
    email: unknown,
    password: unknown
}

export interface LoginOutputDTO {
    token: string
}

export interface DeleteUserInput {
    idToDelete: string,
    token: string | undefined,
}

export interface GetUserById {
    id: string,
    token: string | undefined
}

export interface DeleteUserOutput {
    message: string,
}
export type GetAllOutputDTO = UserModel[]