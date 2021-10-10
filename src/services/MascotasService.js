import httpClient from "./httpClient";

const END_POINT = "/api/mascotas/";

const getAllMascotas = () => httpClient.get(`${END_POINT}all`);
const getMascotaById = (id) => httpClient.get(`${END_POINT}id/${id}`);
const filterMascotas = (type, loc) => httpClient.get(`${END_POINT}${type}/${loc}`);
const createMascota = (new_mascota) => httpClient.post(END_POINT, new_mascota);
const editMascota = (id, new_data) => httpClient.put(`${END_POINT}id/${id}`, new_data);
const deleteMascotaById = (idPet, idPublisher) => httpClient.delete((`${END_POINT}${idPet}/${idPublisher}`));

export {
    getAllMascotas,
    getMascotaById,
    filterMascotas,
    createMascota,
    editMascota,
    deleteMascotaById
}