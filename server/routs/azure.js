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
  const { user, arrayUsers } = req.body;
  console.log(user, arrayUsers);

  if (arrayUsers.length) {
    res.json({ err: 'There is no similar heros' })
    return
  }

  // Getting all id's of imgs from azure face

  const IDs = arrayUsers.map(img => {
    const detectionFaceOptions = setOptionsForDetectionRequest(img);

    return requestDetectionFace(detectionFaceOptions);
  })

  Promise.all(IDs)
    .then(imgIds => {
      // Getting id of img which we need to compare
      const imgToCompareOptions = setOptionsForDetectionRequest(user);
      const imgToCompare = requestDetectionFace(imgToCompareOptions);

      imgToCompare.then(imgId => {
        const options = setOptionsForSimilarRequest(imgId, imgIds);

        requestFindSimilar(options)
          .then(data => {
            const { err } = data;

            if (err) {
              // console.error(err)
              res.json(err)
            } else {
              // console.log(data)
              res.json(data)
            }

          })
      });
    });

});

module.exports = router;
