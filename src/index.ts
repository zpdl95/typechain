/* 일반 js에서 type을 사용하고 싶으면 클래스를 사용해서 type지정하면됨 */
class Human {
  public name: string; /* public = 클래스 외부에서 접근가능 */
  public age: number;
  public gender: string;
  /* constructor = 생성자 method. 클래스가 실행할 때마다 호출 */
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const lynn = new Human("Lynn", 25, "female");

const sayHi = (person: Human): string /* ← 함수의 return값에 type을 설정 */ => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

console.log(sayHi(lynn));
export {};
