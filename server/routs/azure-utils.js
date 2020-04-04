// Utils for detecting faces

const detectionParams = {
  'returnFaceId': 'true',
  'returnFaceLandmarks': 'false',
  'returnFaceAttributes': 'age,gender'
};

function setOptionsForDetectionRequest(img) {
  return {
    uri: uriBase,
    qs: detectionParams,
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

// Utils to find the same person by photos

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

module.exports = {
  setOptionsForDetectionRequest,
  requestDetectionFace,
  detectionParams,
  setOptionsForSimilarRequest,
  requestFindSimilar
}
