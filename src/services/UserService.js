import httpClient from "./httpClient";

const END_POINT = "/api/usuarios/";

const getUserByEmail = (email) => httpClient.get(`${END_POINT}email/${email}`);
// const getUserById = (id) => httpClient.get(`${END_POINT}id/${id}`);
const createUser = (new_user) => httpClient.post(END_POINT, new_user);

export {
    getUserByEmail,
    createUser,
}