import axios, { AxiosResponse } from 'axios';

// default
axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;
axios.defaults.withCredentials = true;
// content type
axios.defaults.headers.post['Content-Type'] = 'application/json';
interface body {
    [key: string]: any;
}

class APIClient {
    get = (url: string, params?: body): Promise<AxiosResponse<any, any>> => {
        let response;

        let paramKeys: body = [];

        if (params) {
            Object.keys(params).map((key) => {
                paramKeys.push(key + '=' + params[key]);
                return paramKeys;
            });

            const queryString =
                paramKeys && paramKeys.length ? paramKeys.join('&') : '';
            response = axios.get(`${url}?${queryString}`, params);
        } else {
            response = axios.get(`${url}`, params);
        }

        return response;
    };
    create = (url: string, data?: body, headers?: any) => {
        if (headers) {
            axios.defaults.headers.post['Content-Type'] = headers['Content-Type'];

            return axios.post(url, data, { withCredentials: true, headers: headers });
        } else {

            return axios.post(url, data, { withCredentials: true });
        }
    };
    update = (url: string, data?: body) => {
        return axios.patch(url, data, { withCredentials: true });
    };

    put = (url: string, data?: body) => {
        return axios.put(url, data, { withCredentials: true });
    };
    delete = (url: string, config?: body) => {
        return axios.delete(url, { ...config });
    };
}

export { APIClient };
