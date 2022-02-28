const _evaluator = evaluator();

function digitingExpression(inputValue) {
  document.getElementById('helper').style.display = 'none';
  const isValid = validateMathemathicalExpression(inputValue);
  if(!isValid){
      document.getElementById('helper').style.display = 'block';
  }

  enableAddButton(inputValue, isValid);
}

function enableAddButton(inputValue, expressionValid) {
  const inputIsNotEmpty = inputValue.trim().length > 0;
  if (inputIsNotEmpty && expressionValid === true) {
    document.getElementById('addExpressionButton').disabled = false;
  } else {
    document.getElementById('addExpressionButton').disabled = true;
  }
}

function getInputValue() {
  return document.getElementById('expressionInput').value;
}

function emptyInput() {
  document.getElementById('expressionInput').value = '';
}

function removeOldestEvaluation(lastEvaluationsGroup) {
  const lastEvaluationsItems = lastEvaluationsGroup.getElementsByTagName('li');
  const groupLength = lastEvaluationsGroup.childNodes.length;
  const oldestEvaluationItem = lastEvaluationsItems[groupLength-1];
  lastEvaluationsGroup.removeChild(oldestEvaluationItem);
}

function onAddBtnClick() {
  const lastEvaluationsGroup = document.getElementById('lastEvaluations');
  const inputValue = getInputValue();
  const evaluation = _evaluator.mathEvaluator(inputValue);
  emptyInput();

  if (lastEvaluationsGroup.childNodes.length === 5) {
    removeOldestEvaluation(lastEvaluationsGroup);
  }
  addExpressionToDom(lastEvaluationsGroup, inputValue, evaluation);
}

function addExpressionToDom(lastEvaluationsGroup, inputValue, evaluation){
  const newEvaluation = document.createElement('li');
  const groupLength = lastEvaluationsGroup.childNodes.length;
  const newIndex = groupLength > 0 ? groupLength-1 : 0;
  const newID = 'evaluationID-'+newIndex;
  newEvaluation.id = newID;
  newEvaluation.innerHTML = `<b>${inputValue}</b> = <b>${evaluation}</b>`;
  if(groupLength > 0){
    const lastSecondEvaluation = lastEvaluationsGroup.firstChild;
    lastEvaluationsGroup.insertBefore(newEvaluation,lastSecondEvaluation);
  }else{
    lastEvaluationsGroup.appendChild(newEvaluation);
  }
}
