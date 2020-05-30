"use strict";

// Example
// get(user, ['loc', 'lat'])     // 50
// get(user, ['foo', 'bar'])     // undefined
// get(user, 'loc.lat')          // 50
// Source: https://stackoverflow.com/questions/23808928/javascript-elegant-way-to-check-nested-object-properties-for-null-undefined
export const get = function(obj, key) {
	if (!key) return obj;
	let returnValue;
	// Passing in an array is much faster and efficient than passing in a string
	// But passing in a string can sometimes be easier so it's included as an option too
	if (Array.isArray(key)) {
		returnValue = key.reduce(function(o, x) {
			return typeof o == "undefined" || o === null ? o : o[x];
		}, obj);
	} else if (typeof key === "string") {
		// each time the function is called, it returns the value of obj.key
		// if it hits undefined or null at any point, it will just keep returning undefined/null
		returnValue = key.split(".").reduce(function(o, x) {
			return typeof o == "undefined" || o === null ? o : o[x];
		}, obj);
	} else {
		throw new Error(
			`get(obj, key): parameter 'key' must be of type Array or string but instead was of type ${typeof key}`
		);
	}
	return returnValue;
};

// Example
// getOrDefault(user, )
export const getWithFormat = function(obj, key, formatFunc) {
	return formatFunc(get(obj, key));
};

export const getOrDefault = function(obj, key, defaultValue) {
	const result = get(obj, key);
	if (!result && result !== 0) {
		return defaultValue;
	}
	return result;
};
