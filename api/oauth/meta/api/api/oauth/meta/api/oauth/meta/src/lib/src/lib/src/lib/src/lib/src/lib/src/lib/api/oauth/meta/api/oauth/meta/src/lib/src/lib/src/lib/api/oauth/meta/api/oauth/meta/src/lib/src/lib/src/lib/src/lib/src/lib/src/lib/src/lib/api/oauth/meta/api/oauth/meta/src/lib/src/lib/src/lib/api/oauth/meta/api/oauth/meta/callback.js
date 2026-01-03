const { jsonOk, jsonError } = require("../../../src/lib/respond");

module.exports = (req, res) => {
  try {
    const code = req.query?.code || null;
    jsonOk(res, { ok: true, code });
  } catch (e) {
    jsonError(res, 500, e.message || "Callback error");
  }
};
