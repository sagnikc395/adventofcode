function main() {
  const input = "ugkcyxxp";

  let password = Array(8).fill("_");
  let index = 0;

  while (password.includes("_")) {
    const hash = new Bun.CryptoHasher("md5")
      .update(input + index)
      .digest("hex");

    if (hash.startsWith("00000")) {
      const position = parseInt(hash[5], 10);
      if (position >= 0 && position < 8 && password[position] === "_") {
        password[position] = hash[6];
      }
    }
    index += 1;
  }
  console.log(password.join(""));
}

main();