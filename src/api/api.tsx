import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://reqres.in/api/'
})

export const api = {
    getEmployees(){
        return instance.get<ResponseType<Array<UserType>>>(`users?per_page=12`)
    }
}

export type ResponseType<D = Array<Record<string, unknown>>> = {
    data: D;
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
};

export type UserType = {
    id: number
    email?: string
    first_name: string
    last_name?: string
    avatar?: string
}

