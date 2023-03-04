class HashTable {
  constructor(size) {
    if (!size || size < 0) {
        throw new Error('Размер должен быть положительным числом');
    }

    this.size = size;
    this.memory = new Array();
  }
	
	// Добавляет пару [key, value] в хеш-таблицу.
	// Если ключ существует, перезаписывает значение.
  set(key, value) {
		...
  }
	
	// Возвращает значение в хеш-таблице по ключу.
	// Если ключа нет, возвращает undefined.
  get(key) {
		...
  }
	
	// Удаляет значение из хеш-таблице по ключу.
  remove(key) {
     ...
  }
}

// Хеширующая функция.
function hash(key, size) {
  const MAX_LENGTH = 200;

  const start = key.length > MAX_LENGTH ? 
		Math.floor((key.length % MAX_LENGTH) / 2) : 0;
  const end = Math.min(key.length, MAX_LENGTH);

  let total = 0;

  for (let i = 0; i < end; i++) {
      const charCode = key.charCodeAt(start + i);
      total = (total + charCode * (i + 1)) % size;
  }

  return total;
}