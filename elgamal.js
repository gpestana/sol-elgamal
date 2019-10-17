'use strict';

function NewContext(p, g, y) {
  return { p, g, y };
}

function GenKey(ctx) {}
function Encrypt(ctx, rand, m) {}
function Decrypt(ctx, c) {}

module.exports = {
  NewContext, GenKey, Encrypt, Decrypt
}
