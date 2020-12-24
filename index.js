module.exports = function isArrayEmpty(array) {
    return Array.isArray(array) && !array.length;
};