import global from "./global.js";

const request = (
  type = "GET",
  url = "",
  data = {},
  header = {
    "content-type": "application/x-www-form-urlencoded",
  }
) => {
  return new Promise((resolve, reject) => {
    uni
      .request({
        method: type,
        url: global.BASE_URL + url,
        data: data,
        header: header,
        dataType: "json",
      })
      .then((response) => {
        let {data} = response;
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
export default request;
