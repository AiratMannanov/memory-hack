'use strict';

const request = require('request');

// Later set key from process env
const subscriptionKey = '8a70d402e3cd425abef4d8981bf4d338';

// You must use the same location in your REST call as you used to get your
// subscription keys. For example, if you got your subscription keys from
// westus, replace "westcentralus" in the URL below with "westus".
const uriBase = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect';

const imageUrl =
  'https://upload.wikimedia.org/wikipedia/commons/3/37/Dagestani_man_and_woman.jpg';


const params = {
  'returnFaceId': 'true',
  'returnFaceLandmarks': 'false',
  'returnFaceAttributes': 'age,gender'
};

const options = {
  uri: uriBase,
  qs: params,
  body: '{"url": ' + '"' + imageUrl + '"}',
  headers: {
    'Content-Type': 'application/json',
    'Ocp-Apim-Subscription-Key': subscriptionKey
  }
};

request.post(options, (error, response, body) => {
  if (error) {
    console.log('Error: ', error);
    return;
  }
  let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
  console.log('JSON Response\n');
  console.log(jsonResponse);
});

const faceId1 = "8f434219-4a3d-4aa3-bc91-6d069e4fcd43";
const faceId2 = "08b61913-109b-4fc2-84c5-36fdf356c469";

const urlSimilar = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/findsimilars';


const optionsForSimilar = {
  uri: urlSimilar,
  body: {
    "faceId": "c5c24a82-6845-4031-9d5d-978df9175426",
    "largeFaceListId": "sample_list",
    "maxNumOfCandidatesReturned": 1,
    "mode": "matchPerson"
  },
  headers: {
    'Content-Type': 'application/json',
    'Ocp-Apim-Subscription-Key': subscriptionKey
  }
};

request.post()
