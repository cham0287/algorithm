/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let calls = 0;
    let value = 0;
    return function(...args){
        calls++;
        value = fn(...args);
        if(calls===1) return value
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
