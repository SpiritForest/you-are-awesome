// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => {
	this.name = propertyName;
	return this.name;
};

const createNotEnumerableProperty = (propertyName) => {
	this.property = propertyName;
	return Symbol(this.property);
};

const createProtoMagicObject = () => {
};

var counter = 0;
const incrementor = () => {
		counter++;
	return incrementor;
};
incrementor.toString = () => {
	return counter;
	}

var asyncCount = 0;
const asyncIncrementor = async () => {
		 asyncCount++;
	return asyncCount;
};


const createIncrementer = () => {
return function* () {
let value = 0;
for (;;) {
value++;
yield value;
}
}();

}

// return same argument not earlier than in one second, and not later, than in two
var item = 1;
const returnBackInSecond = (param) => {
return new Promise((resolve, reject) => {
	setTimeout(()=>resolve(param), 1000);
});
};

const getDeepPropertiesCount = () => {
return (setTimeout())
};
const createSerializedObject = () => {};
const toBuffer = () => {};
const sortByProto = (arr) => {
	arr.sort(function(a,b){return b-a;})
	return arr;
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
