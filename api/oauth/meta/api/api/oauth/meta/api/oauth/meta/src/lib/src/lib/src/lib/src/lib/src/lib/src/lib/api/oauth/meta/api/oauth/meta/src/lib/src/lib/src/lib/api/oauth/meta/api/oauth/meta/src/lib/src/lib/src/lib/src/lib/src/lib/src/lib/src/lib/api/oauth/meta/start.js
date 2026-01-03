const { getMetaAuthUrl } = require("../../../src/lib/metaAuth");
const { jsonError } = require("../../../src/lib/respond");

module.exports = (req, res) => {
  try {
    const url = getMetaAuthUrl();
    res.statusCode = 302;
    res.setHeader("Location", url);
    res.end();
  } catch (e) {
    jsonError(res, 500, e.message || "Failed to build Meta auth url");
  }
};
