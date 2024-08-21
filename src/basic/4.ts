// Виконуйте це завдання у файлі src/basic/4.ts.

// У вас є такі функції JavaScript:

// function showMessage(message) {
//   console.log(message);
// }

// function calc(num1, num2) {
//   return num1 + num2;
// }

// function customError() {
//   throw new Error('Error');
// }

// Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?

function showMessage(message: string): void {
  console.log(message);
}
type CallbackType = (num1: number, num2: number) => number;
function calc(param1: number, param2: number, callback: CallbackType): void {
  console.log("Result:", callback(param1, param2));
}

function customError(message: string): never {
  throw new Error("Error");
}
