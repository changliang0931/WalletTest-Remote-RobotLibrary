"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bip32_1 = __importDefault(require("bip32"));
const bip39 = __importStar(require("bip39"));
const ecc = __importStar(require("tiny-secp256k1"));
const bitcoin = __importStar(require("bitcoinjs-lib"));
bitcoin.initEccLib(ecc);
const bip32 = (0, bip32_1.default)(ecc);
const lib = module.exports;
lib.deriveFromMnemonicAndPath = async function (mnemonic, path) {
    const seed = await bip39.mnemonicToSeed(mnemonic);
    const rootKey = bip32.fromSeed(seed);
    const childNode = rootKey.derivePath(path);
    const internalPubkey = childNode.publicKey.slice(1);
    const { address, pubkey } = bitcoin.payments.p2tr({
        internalPubkey,
    });
    return { privateKey: childNode.privateKey?.toString("hex"), internalPubkey: internalPubkey?.toString("hex"), publicKey: pubkey?.toString("hex"), address: address };
};
lib.deriveFromMnemonicAndPath.doc = 'BIP86 Derive Account By `path` and `mnemonic`.';
//# sourceMappingURL=BIP86libary.js.map