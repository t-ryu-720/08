class GenericsValue<T> {
    value: T;

    constructor(arg: T) {
        this.value = arg;
    }

    getValue(): T {
        return this.value;
    }
}

// GenericsValue クラスのインスタンスを作成
let genericsValueNumber = new GenericsValue<number>(123);
let genericsValueString = new GenericsValue<string>("Hello, Generics!");

// メソッドを呼び出して値を表示
console.log(genericsValueNumber.getValue()); // 123が表示されるはず
console.log(genericsValueString.getValue()); // "Hello, Generics!"が表示されるはず