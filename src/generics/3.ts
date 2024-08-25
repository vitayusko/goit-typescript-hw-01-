// У вас є функція merge, яка поєднує два об'єкти. Використовуйте generics, щоб вказати,
// що ці об'єкти можуть бути будь-якого типу.

type Person = {
  name: string;
};

type AdditionFields = {
  age: number;
};

function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const merged = merge<Person, AdditionFields>({ name: "Alisa" }, { age: 28 });

merged.name;

export {};
