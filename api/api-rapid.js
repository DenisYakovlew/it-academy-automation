const axios = require('axios');

async function getFlightStatus(withAircraftImage, withLocation) {
  const options = {
    method: 'GET',
    url: 'https://aerodatabox.p.rapidapi.com/flights/number/DL47',
    params: {withAircraftImage: withAircraftImage, withLocation: withLocation},
    headers: {
      'X-RapidAPI-Key': '4d7353aef9msh5c40f1b6a4c7adbp1dca2ejsn509f6035f53e',
      'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com'
    }
  }
  try {
    const response = await axios.request(options);
    return response;
  } catch (error) {
    console.error(error);
  }
}

async function sendWebHooks(url) {
  const options = {
    method: 'POST',
    url: 'https://aerodatabox.p.rapidapi.com/subscriptions/webhook/FlightByNumber/KL1395',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '4d7353aef9msh5c40f1b6a4c7adbp1dca2ejsn509f6035f53e',
      'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com'
    },
    data: {"url":`${url}`}
  };

  try {
    const response = await axios.request(options);
    return response;
  } catch (error) {
    console.error(error);
  }
}

async function getWebhooksSubscribe() {

  const options = {
    method: 'GET',
    url: 'https://aerodatabox.p.rapidapi.com/subscriptions/webhook',
    headers: {
      'X-RapidAPI-Key': '4d7353aef9msh5c40f1b6a4c7adbp1dca2ejsn509f6035f53e',
      'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return response;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getFlightStatus,
  sendWebHooks,
  getWebhooksSubscribe
}