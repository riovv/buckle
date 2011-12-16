/** @module collections */

_.mixin({
    /**
    * Counts the value frequency in a list.
    *
    * @example _.frequency([1, 1, 2, 1, 3]);
    *  => {'1': 3, '2': 1, '3': 1}
    *
    *  _.frequency({foo: 'bar', 'baz': null, ice: 'bar'});
    *  => {'bar': 2, 'null': 1}
    *
    * @param {Array/Object} list The list to work on.
    *
    * @returns {Object} An object containing the string representation of value as key and their frequency as value.
    */
    frequency: function (list) {
        var vstr,
            values = {};

        _.each(list, function (value, index) {
            if (_.isString(value) || _.isNumber(value) || _.isBoolean(value) || _.isNull(value)) {
                vstr = '' + value;
                if(!values.hasOwnProperty(vstr)) {
                    values[vstr] = 0;
                }
                values[vstr]++;
            }
        });

        return values;
    }
});
