class Queue {
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }
		
		// Ставит элемент в очередь.
		// Возвращает новый размер очереди.
    enqueue(value) {
        const node = { value, next: null, prev: null };
				...
    }
		
		// Убирает элемент из очереди.
		// Если очередь пустая, кидает ошибку.
		// Возвращает удалённый элемент.
    dequeue() {
				...
    }
		
		// Возвращает элемент в начале очереди.
    peek() {
				...
    }
		
		// Если очередь пустая, возвращает true. В противном случае –– false.
    isEmpty() {
				...
    }
}