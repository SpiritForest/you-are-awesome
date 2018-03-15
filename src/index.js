// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => {
	this.name = propertyName;
	return this.name;
};
const createNotEnumerableProperty = (propertyName) => {
	this.property = propertyName;
	return Symbol(this.property);
};
const createProtoMagicObject = () => {};
const incrementor = () => {
	
};
const asyncIncrementor = () => {};
const createIncrementer = {}

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {};
const getDeepPropertiesCount = () => {};
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