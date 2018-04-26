function getNumber1() {
  return $('#num1').val()
}

function getNumber2() {
  return $('#num2').val()
}

function isInputEmpty() {
  return getNumber1() === '' || getNumber2() === ''
}

function onClick() {
  if (isInputEmpty()) {
    setResult('Error: both numbers can not be empty!')
    return
  }

  getSum()
}

function setResult(text) {
  $('.result').text(text)
}

function getSum() {
  var num1 = getNumber1()
  var num2 = getNumber2()

  var sum = num1 + num2
  setResult(`${num1} + ${num2} = ${sum}`)
}

$('#trigger').on('click', onClick)