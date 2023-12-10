import * as fs from "node:fs/promises";

interface Bag {
  name: string;
  count: number;
}

interface OuterBag extends Bag {
  holds: Bag[];
}

const mapInnerBag = (innerBags: string[]) => {
  return innerBags.map((bag): Bag => {
    const match = /(\d)(.*)/.exec(bag) as RegExpExecArray;

    return {
      count: +match[1],
      name: match[2]
        .replace(".", "")
        .replace("bags", "")
        .replace("bag", "")
        .trim(),
    };
  });
};

async function main() {
  const data = (await fs.readFile("./input.txt", "utf-8")).trim().split("\n");
  const bags = data.map((line): OuterBag => {
    const [outerBag] = /(.+?(?=bags))/.exec(line) as RegExpExecArray;

    const innerBags = /(\d).*/.exec(line);
    if (!innerBags) return { name: outerBag.trim(), count: 1, holds: [] };

    let bags: Bag[] = [];
    if (!innerBags[0].includes(",")) bags = mapInnerBag([innerBags[0]]);
    else bags = mapInnerBag(innerBags[0].split(","));

    return { name: outerBag.trim(), count: 1, holds: bags };
  });

  const containsBag = (
    allBags: OuterBag[],
    searchingFor: string,
    bagSet: Set<string>
  ): Set<string> => {
    const bag = allBags.filter((bag) =>
      bag.holds.some((innerbag) => innerbag.name === searchingFor)
    );
    bag.forEach((bag) => {
      bagSet.add(bag.name);
      return containsBag(allBags, bag.name, bagSet);
    });

    return bagSet;
  };

  console.log(containsBag(bags, "shiny gold", new Set()).size);
}

await main();
