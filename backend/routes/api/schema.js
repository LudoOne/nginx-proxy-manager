const express     = require('express');
const swaggerJSON = require('../../doc/api.swagger.json');
const PACKAGE     = require('../../package.json');

let router = express.Router({
    caseSensitive: true,
    strict:        true,
    mergeParams:   true
});

router
    .route('/')
    .options((req, res) => {
        res.sendStatus(204);
    })

    /**
     * GET /schema
     */
    .get((req, res, next) => {
        swaggerJSON.info.version = PACKAGE.version;
        res.status(200).send(swaggerJSON);
    });

module.exports = router;
