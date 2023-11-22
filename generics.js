var GenericsValue = /** @class */ (function () {
    function GenericsValue(arg) {
        this.value = arg;
    }
    GenericsValue.prototype.getValue = function () {
        return this.value;
    };
    return GenericsValue;
}());
// GenericsValue クラスのインスタンスを作成
var genericsValueNumber = new GenericsValue(123);
var genericsValueString = new GenericsValue("Hello, Generics!");
// メソッドを呼び出して値を表示
console.log(genericsValueNumber.getValue()); // 123が表示されるはず
console.log(genericsValueString.getValue()); // "Hello, Generics!"が表示されるはず
