import {AxiosInstance, default as axios} from "axios";

export function makeAxiosClientHeaderless(original: AxiosInstance): AxiosInstance {
    return axios.create({
        timeout: original.defaults.timeout,
        baseURL: original.defaults.baseURL
    });
}