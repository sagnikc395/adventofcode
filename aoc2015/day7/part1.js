const fs = require("fs").promises;

function evalExpr(lhs, rhs) {
  let variables = [];
  if (
    !lhs.includes("AND") ||
    !lhs.includes("OR") ||
    !lhs.includes("LSHIFT") ||
    !lhs.includes("RSHIFT") ||
    !lhs.includes("NOT")
  ) {
    variables.push({ rhs: lhs });
  } else {
    if (lhs.includes("AND")) {
      //do the and operation
      const [sym1, sym2] = lhs.split("AND");
      //check if sym1 and sym2 are present in the array
      let sym1res;
      let sym2res;
      sym1res = variables.filter((item) => {
        if (item.hashOwnProperty(sym1)) {
          return item[sym1];
        }
      });
      sym2res = variables.filter((item) => {
        if (item.hashOwnProperty(sym1)) {
          return item[sym2];
        }
      });

      if (sym1res !== undefined && sym2res !== undefined) {
        variables.push({ rhs: sym1res & sym2res });
      }
    } else if (lhs.includes("OR")) {
      //do the and operation
      const [sym1, sym2] = lhs.split("AND");
      //check if sym1 and sym2 are present in the array
      let sym1res;
      let sym2res;
      sym1res = variables.filter((item) => {
        if (item.hashOwnProperty(sym1)) {
          return item[sym1];
        }
      });
      sym2res = variables.filter((item) => {
        if (item.hashOwnProperty(sym1)) {
          return item[sym2];
        }
      });

      if (sym1res !== undefined && sym2res !== undefined) {
        variables.push({ rhs: sym1res | sym2res });
      }
    } else if (lhs.includes("LSHIFT")) {
      //do the and operation
      const [sym1, sym2] = lhs.split("LSHIFT");
      //check if sym1 and sym2 are present in the array
      let sym1res;
      let sym2res;
      sym1res = variables.filter((item) => {
        if (item.hashOwnProperty(sym1)) {
          return item[sym1];
        }
      });
      sym2res = variables.filter((item) => {
        if (item.hashOwnProperty(sym1)) {
          return item[sym2];
        }
      });

      if (sym1res !== undefined && sym2res !== undefined) {
        variables.push({ rhs: sym1res << sym2res });
      }
    } else if (lhs.includes("RSHIFT")) {
      //do the and operation
      const [sym1, sym2] = lhs.split("RSHIFT");
      //check if sym1 and sym2 are present in the array
      let sym1res;
      let sym2res;
      sym1res = variables.filter((item) => {
        if (item.hashOwnProperty(sym1)) {
          return item[sym1];
        }
      });
      sym2res = variables.filter((item) => {
        if (item.hashOwnProperty(sym1)) {
          return item[sym2];
        }
      });

      if (sym1res !== undefined && sym2res !== undefined) {
        variables.push({ rhs: sym1res >>> sym2res });
      }
    } else if (lhs.includes("NOT")) {
      const sym = lhs[-1];
      let symres;
      symres = variables.filter((item) => {
        if (item.hashOwnProperty(sym)) {
          return item[sym];
        }
      });
      if (symres !== undefined) {
        variables.push({ rhs: ~sym });
      }
    }
  }
  return variables;
}

async function main() {
  const file = await fs.readFile("./input.txt", "utf8");
  const insts = file.trim().split("\n");

  let a_count = 0;
  insts.forEach((inst) => {
    const [lhs, rhs] = inst.split("->");
    const arr = evalExpr(lhs, rhs);
    
  });
}

try {
  main();
} catch (err) {
  console.error(err);
}
