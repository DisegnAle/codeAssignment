const _evaluator = evaluator();

function digitingExpression(inputValue) {
  document.getElementById('helper').style.display = 'none';
  const isValid = validateMathemathicalExpression(inputValue);
  if(!isValid){
    setTimeout(()=>{
      document.getElementById('helper').style.display = 'block';
    },2000)
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
  const oldestEvaluationItem = lastEvaluationsItems[0];
  lastEvaluationsGroup.removeChild(oldestEvaluationItem);
}

function onAddBtnClick() {
  const lastEvaluationsGroup = document.getElementById('lastEvaluations');
  const inputValue = getInputValue();
  const evaluation = _evaluator.mathEvaluator(inputValue);
  addExpressionToDom(lastEvaluationsGroup, inputValue, evaluation);
  emptyInput();
  if (lastEvaluationsGroup.childNodes.length === 6) {
    removeOldestEvaluation(lastEvaluationsGroup);
  }
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
