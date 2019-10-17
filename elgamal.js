'use strict';
const BigInt = require('jsbn').BigInteger;

function GenKey(g, p, x) {
  const y = g.modPowInt(x, p);
  const pk = { g, p, y };
  console.log("PUBLIC KEY: " + y);

  return { pk, x };
}

function Encrypt(pk, rand, m) {
  // check if message is too long for encryption?
  let c = {
    c1: new BigInt('0'),
    c2: new BigInt('0'),
  };

  return c;
}

function Decrypt(sk, c) {
  let m;
  return m;
}

module.exports = {
  GenKey, Encrypt, Decrypt
}
