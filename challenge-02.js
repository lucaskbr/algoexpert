function isValidSubsequence(array, sequence) {
  let counter = 0;
  let matchingNumber = sequence[0];

  array.forEach((e) => {
    if (e === matchingNumber) {
      counter++;
      matchingNumber = sequence[counter];
    }
  });

  return counter === sequence.length;
}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;
