const express = require('express');
const router = express.Router();

// Azure utils 
const {
  setOptionsForDetectionRequest,
  requestDetectionFace,
  setOptionsForSimilarRequest,
  requestFindSimilar
} = require('./azure-utils');


// Basic router
router.get('/', (req, res) => {
  res.send('Server working!');
});


// Request to azure
router.post('/', (req, res) => {
  const { userUrl, arrayUrl } = req.body;
  console.log(userUrl, arrayUrl)

  // Getting all id's of imgs from azure face

  const IDs = arrayUrl.map(img => {
    const detectionFaceOptions = setOptionsForDetectionRequest(img);

    return requestDetectionFace(detectionFaceOptions);
  })

  Promise.all(IDs)
    .then(imgIds => {
      // Getting id of img which we need to compare
      const imgToCompareOptions = setOptionsForDetectionRequest(userUrl);
      const imgToCompare = requestDetectionFace(imgToCompareOptions);

      imgToCompare.then(imgId => {
        const options = setOptionsForSimilarRequest(imgId, imgIds);

        requestFindSimilar(options)
          .then(data => {
            const { err } = data;

            if (err) {
              res.json(err)
            } else {
              console.log(data)
              res.json(data)
            }

          })
      });
    });

});

module.exports = router;
