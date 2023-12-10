import * as fs from "node:fs/promises";

interface Dictionary<T> {
  [Key: string]: T;
}

type Fields = Dictionary<string>;

const mapToPassportFields = (passport: string[]): Fields => {
  const fields: Fields = {};
  passport.forEach((f) => {
    const key = f.split(":")[0];
    const value = f.split(":")[1];
    fields[key] = value;
  });

  return fields;
};

const hasRequiredPassportFields = (fields: Fields) => {
  return ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"].every(
    (field) => field in fields
  );
};

const withinMinMaxValue = (value: number, min: number, max: number) =>
  value >= min && value <= max;

const hasValidBirthDate = (value: number) =>
  withinMinMaxValue(value, 1920, 2002);

const hasValidIssueYear = (value: number) =>
  withinMinMaxValue(value, 2010, 2020);

const hasValidExpirationYear = (value: number) =>
  withinMinMaxValue(value, 2020, 2030);

const hasValidHeight = (value: string) => {
  if (value.endsWith("cm")) {
    value = value.replace("cm", "");
    return withinMinMaxValue(+value, 150, 193);
  }
  if (value.endsWith("in")) {
    value = value.replace("in", "");
    return withinMinMaxValue(+value, 59, 76);
  }
  return false;
};

const hasValidHairColor = (value: string) => RegExp(/#[0-9a-f]{6}/).test(value);

const hasValidEyeColor = (value: string) =>
  ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(value);

const hasValidPassportId = (value: string) => value.length === 9;

async function main() {
  const validPassports = (await fs.readFile("./input.txt", "utf-8"))
    .split("\n\n")
    .filter((passport) => {
      const passportDetails = passport.split(/ |\n/);
      const passportFields = mapToPassportFields(passportDetails);

      return (
        hasRequiredPassportFields(passportFields) &&
        hasValidBirthDate(+passportFields["byr"]) &&
        hasValidIssueYear(+passportFields["iyr"]) &&
        hasValidExpirationYear(+passportFields["eyr"]) &&
        hasValidHeight(passportFields["hgt"]) &&
        hasValidHairColor(passportFields["hcl"]) &&
        hasValidEyeColor(passportFields["ecl"]) &&
        hasValidPassportId(passportFields["pid"])
      );
    });

  console.log(validPassports.length);
}
await main();