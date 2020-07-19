import { handleResponse, handleError } from "./apiUtils";
//const baseUrl = process.env.REACT_APP_API_URL + "/authors/";
const baseUrl = "http://127.0.0.1:5000/service/api/v1";

export function getEmployee() {
    return fetch(baseUrl + "/employees")
        .then(handleResponse)
        .catch(handleError);
}
export function getEmployeeById(id) {
    return fetch(baseUrl + "/employees" + id)
        .then(handleResponse)
        .catch(handleError);
}
export function saveEmployee(employee) {
    return fetch(baseUrl + "/create", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(employee),
    })
        .then(handleResponse)
        .catch(handleError);
}

export function deleteEmployee(id) {
    return fetch(baseUrl + "/delete/" + id, { method: "DELETE" })
        .then(handleResponse)
        .catch(handleError);
}
