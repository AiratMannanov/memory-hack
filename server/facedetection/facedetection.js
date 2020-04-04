'use strict';

const request = require('request');

// Later set key from process env
const subscriptionKey = '8a70d402e3cd425abef4d8981bf4d338';

// Face detection
const uriBase = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect';

const imgToCompare = 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=702&q=80';
const imageUrl = "https://images.unsplash.com/photo-1542080681-b52d382432af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80";
const anotherImgUrl = "https://images.unsplash.com/photo-1568967729548-e3dbad3d37e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80";
const imgToCompare2 = 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=702&q=80'

// Find similar

const uriSimilar = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/findsimilars';

// Request parametrs for detecting faces

const params = {
  'returnFaceId': 'true',
  'returnFaceLandmarks': 'false',
  'returnFaceAttributes': 'age,gender'
};

function setOptionsForDetectionRequest(img) {
  return {
    uri: uriBase,
    qs: params,
    body: `{"url": "${img}"}`,
    headers: {
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': subscriptionKey
    }
  };
}

function requestDetectionFace(options) {
  return new Promise((resolve, reject) => {
    try {

      request.post(options, (error, response, body) => {
        if (error) {
          throw new Error(error)
        }

        let jsonResponse = JSON.parse(body);
        resolve(jsonResponse[0].faceId)
      });

    } catch (err) {

      reject(err)
    }
  })
}

// Get all id's of imgs
const IDs = [imageUrl, anotherImgUrl, imgToCompare2].map(img => {

  const options = setOptionsForDetectionRequest(img);

  return requestDetectionFace(options);
})

Promise.all(IDs)
  .then((imgIds) => {
    const options = setOptionsForDetectionRequest(imgToCompare);
    const toCompare = requestDetectionFace(options);

    toCompare.then(imgToCompare => {
      const options = setOptionsForSimilarRequest(imgToCompare, imgIds);

      requestFindSimilar(options)
        .then(data => {
          const { err } = data;

          if (err) {
            return err
          } else {
            return data
          }

        })
    });
  });

// Find similar

function setOptionsForSimilarRequest(faceId, faceIds) {
  return {
    uri: uriSimilar,
    body: {
      "faceId": faceId,
      "faceIds": faceIds,
      "maxNumOfCandidatesReturned": 1,
      "mode": "matchPerson"
    },
    json: true,
    headers: {
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': subscriptionKey
    }
  };
}


function requestFindSimilar(options) {
  return new Promise((resolve, reject) => {
    try {

      request.post(options, (error, response, body) => {
        if (error) {
          throw new Error(error)
        }
        if (body.length) {
          resolve(body)
        } else {
          resolve({ err: 'There is no similar people' })
        }

      });

    } catch (err) {

      reject(err)
    }
  })
}
