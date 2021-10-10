import httpClient from "./httpClient";

const END_POINT = "/api/solicitudes/";

const getSolicitudById = (id) => httpClient.get(`${END_POINT}id/${id}`);
const createSolicitud = (new_solicitud) => httpClient.post(END_POINT, new_solicitud);
const editSolicitud = (id, new_data) => httpClient.put(`${END_POINT}id/${id}`, new_data);

export {
    
    getSolicitudById,
    createSolicitud,
    editSolicitud
}