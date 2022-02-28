const url = 'https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new';

function fetchRand(url) {
  fetch(url)
    .then(response => response.json())
    .then(number => {
      const rand = Math.floor(Math.random() * number);
      printRandOperant(rand);
    });
}

function printRandOperant(rand) {
  let el = document.createElement('p');
  const sectionRand = document.getElementsByClassName('randOperand');
  el.innerHTML = `The random number is <b>${rand}</b>`;
  sectionRand[0].appendChild(el);
}

fetchRand(url);
