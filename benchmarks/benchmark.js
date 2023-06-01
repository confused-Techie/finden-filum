const { performance } = require("node:perf_hooks");
let ff;

const possibleExts = [ "hello.txt", "file.h", "my.file.adb", "tester.scpt" ];
const loops = 4000;

/**
 * Results:
 * Last run:
 *  - max: 0.4398000240325928
 *  - min: 0.00019979476928710938
 *  - avg: 0.0007481237649917602
 */

function main() {
  // The basic idea is we can call our test over and over and over, eventually
  // averaging the values we receive.

  ff = require("../src/main.js");
  let times = [];

  for (let i = 0; i < loops; i++) {
    let tmpExt = possibleExts[Math.floor(Math.random()*possibleExts.length)];

    let tmpEndTime = callLib(tmpExt);

    times.push(tmpEndTime);
  }

  let parsed = maxMinAvg(times);

  console.log(`BENCHMARKS COMPLETE: ${loops} total runs. (In Milliseconds)`);
  console.log(parsed);
}

function callLib(input) {
  // callLib should be passed our file extension input to avoid compute time
  // adding to benchmark

  let start = performance.now();

  let category = ff(input);

  let end = performance.now() - start;

  return end;
}

function maxMinAvg(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let max = arr[0];
  let min = arr[0];
  let sum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum = sum + arr[i];
  }
  return {
    maximum_time_taken: max,
    minimum_time_taken: min,
    average_time_taken: sum/arr.length
  };
}

main();
