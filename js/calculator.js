function onAddBtnClick() {
  const lastEvaluationsGroup = document.getElementById('lastEvaluations');
  const inputValue = getInputValue();
  const evaluation = _evaluator.mathEvaluator(inputValue);
  addExpressionToDom(lastEvaluationsGroup, inputValue, evaluation);
}


