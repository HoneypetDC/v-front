import httpClient from "./httpClient";

const END_POINT = "/api/mascotas/";

const getAllMascotas = () => httpClient.get(`${END_POINT}all`);
const getMascotaById = (id) => httpClient.get(END_POINT+id);
const filterMascotas = (type, loc) => httpClient.get(`${END_POINT}${type}/${loc}`);
const createMascota = (new_mascota) => httpClient.post(END_POINT, new_mascota);
const editMascota = (id, new_data) => httpClient.put(END_POINT+id, new_data);
const deleteMascotaById = (id) => httpClient.delete(END_POINT+id);

export {
    getAllMascotas,
    getMascotaById,
    filterMascotas,
    createMascota,
    editMascota,
    deleteMascotaById
}