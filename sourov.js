let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
let lastWasEqual = false; // নতুন ফ্ল্যাগ

arr.forEach(button => {
  button.addEventListener('click', (e) => {
    const value = e.target.innerHTML;
    const operators = ['+', '-', '*', '/', '%', '.'];

    if (value === '=') {
      if (!operators.includes(string.slice(-1))) {
        try {
          string = eval(string).toString();
          input.value = string;
          lastWasEqual = true; // এখন বুঝবো "=" চাপা হয়েছে
        } catch {
          input.value = "Error";
        }
      }

    } else if (value === 'AC') {
      string = "";
      input.value = string;
      lastWasEqual = false;

    } else if (value === 'DEL') {
      string = string.substring(0, string.length - 1);
      input.value = string;
      lastWasEqual = false;

    } else {
      // যদি "=" এর পর সংখ্যা দিই, তাহলে নতুন হিসাব শুরু
      if (lastWasEqual && !operators.includes(value)) {
        string = "";
      }
      lastWasEqual = false;

      // একটার পর একটা operator ইনপুট বন্ধ
      if (operators.includes(value) && operators.includes(string.slice(-1))) {
        return;
      }

      string += value;
      input.value = string;
    }
  });
});
