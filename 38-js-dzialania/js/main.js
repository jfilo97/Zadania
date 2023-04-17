function calculate(num1, num2) {
    const addResult = num1 + num2;
    const subtractResult = num1 - num2;
    const multiplyResult = num1 * num2;
  
    if (addResult < 0 || subtractResult < 0 || multiplyResult < 0) {
      console.log("Wynik jest nieprawidłowy");
      return;
    }
  
    console.log(`Wynik dodawania wynosi ${addResult}`);
    console.log(`Wynik odejmowania wynosi ${subtractResult}`);
    console.log(`Wynik mnożenia wynosi ${multiplyResult}`);
  }

  calculate(2, 3);