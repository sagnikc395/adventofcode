function main() {
  const data = "ugkcyxxp";
  let password = "";
  let index = 0;

  while (password.length < 8) {
    const hash = new Bun.CryptoHasher("md5").update(data + index).digest("hex");

    if (hash.startsWith("00000")) {
      password += hash[5];
    }
    index += 1;
  }

  console.log(password);
}

main();
