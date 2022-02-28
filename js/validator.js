const containsParenthes = /\(|\)/;
const closingParenthes = /\((?:[^)(]+|\((?:[^)(]+|\([^)(]*\))*\))*\)/;
const endingWithOperator = /[-+*/]$/;
const notIncludedCharacter = /[^(0-9)(\-\+\*\/)(cos|sin|tan)(\(|\))(\s)]/g;
const cannotStartWith = /^[\/\*]/;
const endingWithSpace = /\s$/

const validateMathemathicalExpression = (input) => {
  let isValid = true;

  if (endingWithSpace.test(input)) {
    input = input.replace(/\s+$/, '');
  }

  if (containsParenthes.test(input)) {
    if (closingParenthes.test(input) === false) {
      isValid = false;
    }
  }

  if (endingWithOperator.test(input) === true) {
    isValid = false;
  }

  if (notIncludedCharacter.test(input) === true) {
    isValid = false;
  }

  if (cannotStartWith.test(input) === true) {
    isValid = false;
  }

  return isValid;

};
