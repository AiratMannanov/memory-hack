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
  res.send('Server Working')
});


// Request to azure
router.post('/', (req, res) => {
  const { urlToCompare, urls } = req.body;


  // Get all id's of imgs

  const IDs = urls.map(img => {
    const detectionFaceOptions = setOptionsForDetectionRequest(img);

    return requestDetectionFace(detectionFaceOptions);
  })

  Promise.all(IDs)
    .then(imgIds => {
      const imgToCompareOptions = setOptionsForDetectionRequest(urlToCompare);
      const imgToCompare = requestDetectionFace(imgToCompareOptions);

      imgToCompare.then(imgId => {
        const options = setOptionsForSimilarRequest(imgId, imgIds);

        requestFindSimilar(options)
          .then(data => {
            const { err } = data;

            if (err) {
              res.json(err)
            } else {
              res.json(data)
            }

          })
      });
    });

});

module.exports = router
