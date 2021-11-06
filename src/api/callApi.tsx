import axios, { AxiosResponse, Method, ResponseType } from 'axios';

// // const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_URL = 'http://ec2-54-91-208-116.compute-1.amazonaws.com:8080';

interface callApiPramsType {
  url: string;
  method: Method;
  params?: unknown;
  data: unknown;
  // responseType?: string;
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
}: // responseType,
callApiPramsType): Promise<AxiosResponse> {
  const api_url = BASE_URL + '/api' + url;
  const headers = {
    'Content-Type': 'application/json',
    //Authorization: `Bearer ${localStorage.getItem('token')}`,
  };
  console.log('토큰 유효성 검증', new Date());
  return axios({
    method,
    url: api_url,
    data,
    params,
    headers,
  })
    .then((response) => {
      console.log('response:', response);
      return response;
    })
    .catch((error) => error);
}

export const ResultCode = {
  Success: 0,
};
