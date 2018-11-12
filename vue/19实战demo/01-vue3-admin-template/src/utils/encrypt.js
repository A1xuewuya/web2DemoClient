export function RSA_encrypt(encrypt, encrypt_data, public_key) {
  // RSA非对称加密
  encrypt.setPublicKey(public_key);
  var encrypted_data = new Object();
  for (let key in encrypt_data) {
    encrypted_data[key] = encrypt.encrypt(encrypt_data[key]);
  }
  return encrypted_data;
}
