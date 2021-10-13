import httpClient from "./httpClient";

const END_POINT = "/api/usuarios/";

const getUserByEmail = (email) => httpClient.get(`${END_POINT}email/${email}`);
const getUserById = (id) => httpClient.get(`${END_POINT}id/${id}`);
const createUser = (newuser) => httpClient.post(END_POINT, newuser);

export {
    getUserByEmail,
    createUser,
    getUserById
}