import axios from "axios";


export default async function handler(req, res) {
    const url = 'https://yummly2.p.rapidapi.com/feeds/list'

    const options = {
        method: 'GET',
        url: url,
        params: {limit: '10', start: '0'},
        headers: {
          'X-RapidAPI-Key': '78f6ffb417msh04eaab07581034bp171f55jsn9f51c99fc121',
          'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
        }
      };

  try {
    axios.request(options).then(function (response) {
        res.status(200).json(response.data.feed);
        }).catch(function (error) {
        console.error(error);
    });
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' })
  }
 }