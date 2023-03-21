const axios = require("axios");

export default async function fetchData(req, res) {
  const options = {
    method: "GET",
    url: "https://realtor.p.rapidapi.com/locations/v2/auto-complete",
    params: { input: req.query.term, limit: "10" },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      "X-RapidAPI-Host": "realtor.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      res.status(200).json(response.data);
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}
