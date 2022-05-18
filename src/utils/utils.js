import {transform} from 'lodash';

export function arrayToDictionaryByKey(array, key) {
    return transform(array, (result, item) => {
        result[item[key]] = item;
    }, {});
}
