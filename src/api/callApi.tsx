import axios, { AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse, Method, ResponseType } from 'axios';
import { StringMappingType } from 'typescript';

// // const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_URL = '/';

/**
 * Returns a Axios Request Promise
 * method: get, post, put, patch, delete
 */
/* export default function callApi(
  {
    url = '',
    method = 'get',
    params = '',
    data = '',
    responseType = 'json',
    isLoding = true,
    goErrorPageWhenFailed = false,
  },
  config:AxiosRequestConfig = {},
) {
  const api_url = BASE_URL + 'api' + url;
  console.log('api_url === ', api_url);
  return axios({
    method: method,
    url: api_url,
    params,
    data,
    isLoding,
    goErrorPageWhenFailed,
    responseType,
    headers: {
      'Content-Type': 'applicaiton/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
    },
    withCredentials: true,
    {...config},
  })
    .then((response) => {
      console.log('response :', response);
      const { payload, resultCode, message } = response.data;

      return {
        isSuccess: true,
        data: payload,
        resultCode,
        message,
        response,
      };
    })
    .catch((error) => {
      if (error.response === undefined) {
        console.log('서버와의 연결에 실패했습니다.');
      } else if (error.response.status === 401) {
        console.log('세션이 만료되었습니다. 다시 로그인 해주세요.');
      } else {
        console.log('서버에서 알 수 없는 오류가 발생하여 응답을 얻지 못했습니다.');
      }

      return {
        isSuccess: false,
        data: undefined,
        resultCode: -999,
        message: '',
        response: error,
      };
    });
} */

interface CallApiParamType<T = any> {
  url: string;
  method: Method;
  params?: unknown;
  data?: T;
  responseType?: ResponseType;
  headers: {
    'Content-Type': 'applicaiton/json;charset=UTF-8';
    'Access-Control-Allow-Origin': '*';
  };
  withCredentials: boolean;
  isLoading?: boolean;
  goErrorPageWhenFailed?: boolean;
}

export default function callApi(callApiDefaultParam: CallApiParamType) {
  const { url, method, params, data, responseType, headers, withCredentials } = callApiDefaultParam;

  const api_url = BASE_URL + 'api' + url;
  console.log('api_url === ', api_url);

  return axios({
    method,
    url,
    params,
    data,
    responseType,
    headers,
    withCredentials,
  })
    .then((response) => {
      console.log('response :', response);
      const { data } = response;

      return {
        isSuccess: true,
        data,
      };
    })
    .catch((error) => {
      if (error.response === undefined) {
        console.log('서버와의 연결에 실패했습니다.');
      } else if (error.response.status === 401) {
        console.log('세션이 만료되었습니다. 다시 로그인 해주세요.');
      } else {
        console.log('서버에서 알 수 없는 오류가 발생하여 응답을 얻지 못했습니다.');
      }

      return {
        isSuccess: false,
        data: undefined,
        resultCode: -999,
        message: '',
        response: error,
      };
    });
}

export const ResultCode = {
  Success: 0,
};
