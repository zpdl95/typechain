/* ts에서만 동작하는 인터페이스, 오브젝트의 타입을 명명한다, 자동완성기능도 추가해줌 */
interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "Jaewon",
  age: 24,
  gender: "male",
};

const sayHi = (person: Human): string /* ← 함수의 return값에 type을 설정 */ => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

console.log(sayHi(person));
export {};
