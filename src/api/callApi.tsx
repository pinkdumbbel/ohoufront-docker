import axios, { AxiosResponse, Method, ResponseType } from 'axios';

// // const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_URL = '/';

interface callApiPramsType {
  url: string;
  method: Method;
  params?: unknown;
  data: unknown;
  responseType: ResponseType;
}

/**
 * Returns a Axios Request Promise
 * method: get, post, put, patch, delete
 */

export default function callApi({
  url,
  method = 'get',
  params,
  data,
  responseType,
}: callApiPramsType): Promise<AxiosResponse> {
  const api_url = BASE_URL + 'api' + url;
  const headers = {
    'Content-Type': 'applicaiton/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
  };
  console.log('api_url === ', api_url);
  return axios({
    method,
    url: api_url,
    params,
    data,
    responseType,
    headers,
    withCredentials: true,
  })
    .then((response) => {
      console.log('response:', response);
      response.isSuccess = true;
      return response;
    })
    .catch((error) => error);
}

export const ResultCode = {
  Success: 0,
};
