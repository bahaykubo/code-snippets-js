const optionalChaining = () => {
  let input = { description: null };
  return ((input?.description) ? true : false);
};

console.log(`optional chaining -> ${optionalChaining()}`);
