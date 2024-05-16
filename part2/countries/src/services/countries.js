import axios from "axios";

/**
 * 配置 Axios 客户端实例，用于访问 Rest Countries API。
 * 更多 API 详情参见 {@link https://studies.cs.helsinki.fi/restcountries/}。
 * @type {axios.Instance}
 */
const client = axios.create({
  baseURL: "https://studies.cs.helsinki.fi/restcountries/api",
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * 从 Rest Countries API 获取所有国家的数据。
 * @returns {Promise<Array>} 返回一个 promise 对象，解析后为国家数组。
 */
const getAll = () => {
  const request = client.get("/all");
  return request.then((response) => response.data);
};

/**
 * 通过国家名称从 Rest Countries API 获取特定国家的数据。
 * @param {string} name - 要检索数据的国家名称（全名）。
 * @returns {Promise<Object>} 返回一个 promise 对象，解析后为指定国家的数据。
 */
const getCountry = (name) => {
  const request = client.get(`/name/${name}`);
  return request.then((response) => response.data);
};

export default { getAll, getCountry };
