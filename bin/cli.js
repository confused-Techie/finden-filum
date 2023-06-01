#!/usr/bin/env node

const ff = require("../src/main.js");

async function main(params) {
  let opts = {};
  let arg;

  for (const param of params) {
    if (param.startsWith("--extension")) {
      opts.extension = true;
    } else if (param.startsWith("--full")) {
      opts.full = true;
    } else if (param.startsWith("--map")) {
      opts.map = true;
    } else {
      // Last position, collect the non-prefixed value, which should be the arg
      arg = param;
    }
  }

  let res = ff(arg, opts);

  if (opts.map) {
    // Since we know the below will fail to parse a map properly we will display
    // and exit here
    console.log(res);
    process.exit(0);
  }

  if (typeof res === "undefined") {
    console.log(`Unable to locate: ${arg}`);
    process.exit(0);
  }

  for (const [key, value] of Object.entries(res)) {
    console.log(`- ${(key.charAt(0).toUpperCase()) + (key.slice(1))}: ${value}`);
  }
  process.exit(0);
}

main(process.argv.slice(2));
