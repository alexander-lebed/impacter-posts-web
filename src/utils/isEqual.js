const getObjectOrderedByKeys = (obj) => {
    const ordered = {};
    Object.keys(obj).sort().forEach(function(key) {
        ordered[key] = obj[key];
    });
    return ordered;
};

const isEqual = (a, b) => {
    const orderedA = getObjectOrderedByKeys(a);
    const orderedB = getObjectOrderedByKeys(b);
    return JSON.stringify(orderedA) === JSON.stringify(orderedB);
};

export default isEqual;