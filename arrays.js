/**
 * @module arrays 
 */

_.mixin({
    /**
    * Chunks an array into size large chunks. The last chunk may contain less than size elements.
    *
    * @example _.chunks([1, 2, 3, 4, 5], 2);
    *  => [[1,2], [3,4], [5]]
    *
    * @param {Array} array The array to work on.
    * @param {Number} size The size of each chunk.
    *
    * @returns {Array} A multidimensional array, with each dimension containing size elements.
    */
    chunks: function (array, size) {
        if (!size) return [];

        var chunks = [],
            i = 0;

        while (i < array.length) {
            chunks.push(Array.prototype.slice.call(array, i, i += size));
        }

        return chunks;
    }
});
