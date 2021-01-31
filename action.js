function getPercent() {
  const name1 = document.getElementById('yourName').value
  const lName = document.getElementById('trueLove').value
  var conditions = ['Tom', 'tom', 'Karren', "karren"]

  if (
    conditions.some((el) => name1.includes(el)) &&
    conditions.some((el) => lName.includes(el))
  ) {
    document.getElementById('percent').innerHTML =
      'You and ' + lName + ' are ' + '100% compatable!'
  } else {
    document.getElementById('percent').innerHTML =
      'You and ' +
      lName +
      ' are ' +
      Math.floor(Math.random() * 100 + 1) +
      '% compatable!'
  }
}


function buttonChange() {
  document.getElementById('submit').value = 'Try again?'
}

function reset() {
  document.getElementsByClass('input').reset()
}
