"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const secp256k1_1 = require("@noble/curves/secp256k1");
//https://github.com/paulmillr/noble-curves
const lib = module.exports;
lib.SchnoorVerify = function (publicKey, message, signature) {
    try {
        return secp256k1_1.schnorr.verify(Buffer.from(signature, "hex"), Buffer.from(message, "hex"), Buffer.from(publicKey, "hex"));
    }
    catch (e) {
        return false;
    }
};
lib.SchnoorVerify.doc = 'Schnoor Verify  By `publicKey` and `message` and `signature`.';
lib.SchnoorSign = function (privateKey, message) {
    return secp256k1_1.schnorr.sign(Buffer.from(message, "hex"), Buffer.from(privateKey, "hex"));
};
lib.SchnoorSign.doc = 'Schnoor Sign By `privateKey` and `message`.';
//# sourceMappingURL=Schnorrlibary.js.map