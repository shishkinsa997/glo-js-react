const getData = (link) => {
  return fetch(link)
    .then((response) => response.json())
    .then((data) => {
      console.log("getData: ", data);
      return data;
    })
    .catch((error) => console.error("Error: ", error));
};

const sendData = ({
  link,
  data,
  method = "POST",
  type = "application/json; charset=UTF-8",
}) => {
  return fetch(link, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      "Content-type": type,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("sendData: ", data);
      return data;
    })
    .catch((error) => console.error("Error: ", error));
};

getData("db.json").then((response) => {
  console.log("db.json: ", response);
  return sendData({
    link: "https://jsonplaceholder.typicode.com/posts",
    data: response,
  });
});
