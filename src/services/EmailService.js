import httpClient from "./httpClient";

const END_POINT = "/api/email/";

const sendEmail = (new_email) => httpClient.post(END_POINT,new_email);

export {
    sendEmail
}