

import { schnorr } from '@noble/curves/secp256k1';
//https://github.com/paulmillr/noble-curves
const lib = module.exports;

lib.SchnoorVerify = function (publicKey: string, message: string, signature: string) {
    try {
        return schnorr.verify(Buffer.from(signature, "hex"), Buffer.from(message, "hex"), Buffer.from(publicKey, "hex"));
    } catch (e) {
        return false;
    }
};
lib.SchnoorVerify.doc = 'Schnoor Verify  By `publicKey` and `message` and `signature`.';

lib.SchnoorSign = function (privateKey: string, message: string) {
    return schnorr.sign(Buffer.from(message, "hex"), Buffer.from(privateKey, "hex"));
};
lib.SchnoorSign.doc = 'Schnoor Sign By `privateKey` and `message`.';
