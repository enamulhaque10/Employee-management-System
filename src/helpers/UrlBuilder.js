const AUTH_API_BASE_URL = process.env.REACT_APP_AUTH_API_BASE_URL;
const COMMON_API_BASE_URL = process.env.REACT_APP_COMMON_API_BASE_URL;
const FOREIGN_API_BASE_URL = process.env.REACT_APP_FOREIGN_API_BASE_URL;
const FILE_SERVICE_API_BASE_URL =
  process.env.REACT_APP_FILE_SERVICE_API_BASE_URL;

class UrlBuilderHelper {
  api(path) {
    return path;
  }

  

 

  

  employeeApi(path) {
    //return `http://103.4.145.250:8024/api/v1/${path}`;
    return `https://dummy.restapiexample.com/api/v1/${path}`;
  }
  

}

export const UrlBuilder = new UrlBuilderHelper();
