const containsParenthes = /\(|\)/;
const closingParenthes = /\((?:[^)(]+|\((?:[^)(]+|\([^)(]*\))*\))*\)/;
const endingWithOperator = /[-+*/]$/;
const notIncludedCharacter = /[^(0-9)(\-\+\*\/)(cos|sin|tan)(\(|\))(\s)]/g;
const cannotStartWith = /^[\/\*]/;
const endingWithSpace = /\s$/

