import axios, { AxiosResponse } from 'axios';

const getUsersUrl = 'https://random-data-api.com/api/v2/users';

const getUsers = async <T>(size: number): Promise<AxiosResponse<T>> => {
  const result = await axios.get(`${getUsersUrl}?size=${size}`);
  return result;
};

export default getUsers;
