import httpClient from "./httpClient";

const END_POINT = "/api/mascotas/";

const getAllMascotas = () => httpClient.get(`${END_POINT}all`);
const getLastMascotas = () => httpClient.get(`${END_POINT}last`);
const getMascotaById = (id) => httpClient.get(`${END_POINT}id/${id}`);
const getMascotasByType = (type) => httpClient.get(`${END_POINT}type/${type}`);
const getMascotasByLocation = (loc) => httpClient.get(`${END_POINT}loc/${loc}`);
const filterMascotas = (type, loc) => httpClient.get(`${END_POINT}${type}/${loc}`);
const editMascota = (id, new_data) => httpClient.put(`${END_POINT}id/${id}`, new_data);
const deleteMascotaById = (idPet, idPublisher) => httpClient.delete((`${END_POINT}${idPet}/${idPublisher}`));
const createMascota = (new_mascota) => httpClient.post(END_POINT, new_mascota, {
    headers: {
        "Content-Type": "multipart/form-data"
    }
});

export {
    getAllMascotas,
    getLastMascotas,
    getMascotaById,
    getMascotasByType,
    getMascotasByLocation,
    filterMascotas,
    createMascota,
    editMascota,
    deleteMascotaById
}