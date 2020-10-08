const router = require('express').Router();
const WOD = require('../models/wod');

router.get('/api/workouts/range', function (req, res) {
    WOD.find().then(wodDb => {
        res.json(wodDb);
    }).catch(err => {
        res.json(err);
    })
});

router.get('/api/workouts', (req, res) => {
    WOD.find().then(wodDb => {
        res.json(wodDb);
    }).catch(err => {
        res.json(err);
    })
});

router.put('/api/workouts/:id', ({body, params}, res) => {
    WOD.findByIdAndUpdate(
        params.id,
        {$push: {exercises: body}},
        {new: true, runValidators: true}
    ).then(wodDb => {
        res.json(wodDb);
    }).catch(err => {
        res.json.apply(err);
    })
});

router.post('/api/workouts', (req, res) => {
    WOD.create(req.body).then(wodDb => {
        res.json(wodDb);
    }).catch(err => {
        res.json(err);
    })
});

router.post('/api/workouts/range', function (req, res) {
    WOD.find().then(wodDb => {
        res.json(wodDb)
    }).catch(err => {
        res.json(err)
    })
});

module.exports = router;