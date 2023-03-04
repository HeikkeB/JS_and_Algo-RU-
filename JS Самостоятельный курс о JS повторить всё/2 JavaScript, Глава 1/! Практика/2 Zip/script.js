function zip() {
  // Ваш код
}

// Пример работы
const objects = [
  { foo: 5, bar: 6 },
  { foo: 13, baz: -1 } // foo - повторяющийся ключ
];

zip(...objects); // { foo: 5, bar: 6, baz: -1 }