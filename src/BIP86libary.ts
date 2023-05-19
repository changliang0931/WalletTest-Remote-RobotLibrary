
import BIP32Factory from 'bip32';
import * as bip39 from 'bip39';
import * as ecc from 'tiny-secp256k1';
import * as bitcoin from 'bitcoinjs-lib';
bitcoin.initEccLib(ecc);
const bip32 = BIP32Factory(ecc);
const lib = module.exports;
lib.deriveFromMnemonicAndPath = async function (mnemonic: string, path: string) {
    const seed = await bip39.mnemonicToSeed(mnemonic);
    const rootKey = bip32.fromSeed(seed);
    const childNode = rootKey.derivePath(path);
    const internalPubkey = childNode.publicKey.slice(1);
    const { address, pubkey } = bitcoin.payments.p2tr({
        internalPubkey,
    });
    return { privateKey: childNode.privateKey?.toString("hex"), internalPubkey: internalPubkey?.toString("hex"), publicKey: pubkey?.toString("hex"), address: address }
};
lib.deriveFromMnemonicAndPath.doc = 'BIP86 Derive Account By `path` and `mnemonic`.';