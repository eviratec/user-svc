"use strict";

module.exports = function (api, db) {

  api.get("/user/:userId", function (req, res) {
    if (null === req.user) {
      return res.send(404);
    }
    res.send(200, req.user);
  });

};