function getPercent() {
  const name1 = document.getElementById('yourName').value
  const lName = document.getElementById('trueLove').value
  var conditions1 = ['Tom', 'tom', 'Karren', "karren"]
  var conditions2 = ['Jessy', 'jessy', 'Terry', "terry"]

  if (
    conditions1.some((el) => name1.includes(el)) &&
    conditions1.some((el) => lName.includes(el))
  ) {
    document.getElementById('percent').innerHTML =
      'You and ' + lName + ' are ' + '100% compatable!'
  } 
  
  else if (
    conditions2.some((el) => name1.includes(el)) &&
    conditions2.some((el) => lName.includes(el))
  ) {
    document.getElementById('percent').innerHTML =
      'You and ' + lName + ' are ' + '0% compatable!'
  } 
  
  
  else {
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
