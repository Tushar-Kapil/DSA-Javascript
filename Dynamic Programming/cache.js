function addTo80() {
  let cache = {};
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log("nice");
      cache[n] = n + 80;
      return cache[n];
    }
  };
}

const output = addTo80()(5);
console.log(output);
console.log(output);
