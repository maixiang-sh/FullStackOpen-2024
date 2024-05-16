import axios from "axios";

// 创建 axios 实例，并配置基础 URL 和 API 密钥
// 将 api 保存在环境变量中，读取环境变量
const API_KEY = import.meta.env.OPENWEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

const client = axios.create({
  baseURL: BASE_URL,
  params: {
    appid: API_KEY,
    units: "metric", // 使用公制单位，影响返回数据的单位
  },
});

/**
 * 从 OpenWeatherMap API 获取当前天气数据。
 * 此函数通过传入的经纬度参数查询特定位置的当前天气状况。
 * @param {Object} coords - 包含纬度和经度的对象。
 * @param {number} coords.lat - 纬度。
 * @param {number} coords.lon - 经度。
 * @returns {Promise<Object>} 返回一个 promise 对象，解析后包含当前天气数据。
 */
const getCurrentWeather = ({ lat, lon }) => {
  const request = client.get("/weather", { params: { lat, lon } });
  return request.then((response) => response.data);
};

/**
 * 从响应的天气数据中获取温度数据，单位：摄氏温度。
 * @param {Object} responseData - 包含天气数据的对象。
 * @returns {number} 返回摄氏温度。
 */
const getTemp = (responseData) => {
  return responseData.main.temp;
};

/**
 * 从响应的天气数据中获取风速数据，单位：m/s。
 * @param {Object} responseData - 包含天气数据的对象。
 * @returns {number} 返回风速。
 */
const getWindSpeed = (responseData) => {
  return responseData.wind.speed;
};

/**
 * 从响应的天气数据中获取天气描述。
 * @param {Object} responseData - 包含天气数据的对象。
 * @returns {String} 返回天气描述。
 */
const getWeatherDescription = (responseData) => {
  return responseData.weather[0].description;
};

/**
 * 从响应的天气数据中获取天气图标代码。
 * @param {Object} responseData - 包含天气数据的对象。
 * @returns {String} 返回天气图标代码。
 */
const getWeatherIconCode = (responseData) => {
  return responseData.weather[0].icon;
};

/**
 * 使用 天气 icon Code 获取 天气的图标 URL
 * @param {String} iconCode
 * @returns {String} 返回天气图标的url，png格式。
 */
const getWeatherIconURL = (iconCode) => {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
};

const getWeatherIconURLFromData = (responseData) => {
  return getWeatherIconURL(getWeatherIconCode(responseData));
};

export default {
  getCurrentWeather,
  getTemp,
  getWindSpeed,
  getWeatherDescription,
  getWeatherIconCode,
  getWeatherIconURL,
  getWeatherIconURLFromData,
};
// WeatherServices;
