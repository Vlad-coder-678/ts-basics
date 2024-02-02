// Требуется написать функцию, которрая принимает на вход аругмент name
// и возвращающую сообщение "One for {name}, one for me."
// Однако, если name отсутствует, функция должна вернуть строку: "One for you, one for me."
function getMessage(name: string = "you") {
  return `One for ${name}, one for me.`;
};

console.log(getMessage("Alice")) // One for Alice, one for me.
console.log(getMessage("Bob")) // One for Bob, one for me.
console.log(getMessage()) // One for you, one for me.
console.log(getMessage("Zaphod")) // One for Zaphod, one for me.
