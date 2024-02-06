const crypto = require("crypto");

class SecurityKey {
  static generateKey() {
    return crypto.randomBytes(32).toString("hex");
  }

  static calculateHmac(key, message) {
    const hmac = crypto.createHmac("sha3-256", Buffer.from(key, "hex"));
    hmac.update(message);
    return hmac.digest("hex");
  }
}

module.exports = SecurityKey;
