const sayHi = (
  name: string /* ← 함수의 인자 값에 type을 설정 */,
  age: number,
  gender: string
): string /* ← 함수의 return값에 type을 설정 */ => {
  return `Hello ${name}, you are ${age}, you are a ${gender}`;
};

console.log(sayHi("Jaewon", 24, "male"));
export {};
