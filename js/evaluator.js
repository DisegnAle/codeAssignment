const evaluator = function () {
  function adaptTrigonometricExpression(str) {
    if (str.includes('sin')) {
      str = str.replace(/sin/ig, "Math.sin");
    }

    if (str.includes('cos')) {
      str = str.replace(/cos/ig, "Math.cos");
    }

    if (str.includes('tan')) {
      str = str.replace(/tan/ig, "Math.tan");
    }

    return str;
  };

  function adjustMathExpression(expression) {
    const isTrigonometric = /sin|cos|tan/.test(expression);
    if (isTrigonometric) {
      expression = adaptTrigonometricExpression(expression);
    }
    return expression;
  }

  function stringToMathExpressionConverter(stringExpression) {
    return new Function("return " + stringExpression)();
  };

  function roundUpDecimal(value) {
    return value.toFixed(10);
  }

  function mathEvaluator(formula) {
    let rawExpression = formula.trim();
    let expression = adjustMathExpression(rawExpression);
    let result = stringToMathExpressionConverter(expression);
    const isInteger = Number.isInteger(result);

    if (!isInteger) {
      result = roundUpDecimal(result);
    }

    return result;
  }

  return {
    mathEvaluator
  }
};
