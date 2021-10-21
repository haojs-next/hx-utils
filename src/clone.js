import { isType } from "./util";

function find(list, f) {
    return list.filter(f)[0];
}
/**
 * 拷贝
 * @param {*} obj
 * @param {*} cache
 */
export function deepCopy(obj, cache = []) {
    if (obj && isType(obj, "File")) return obj;
    if (obj === null || typeof obj !== "object") return obj;

    const hit = find(cache, f => f.original === obj);
    if (hit) {
        return hit.copy;
    }
    const copy = Array.isArray(obj) ? [] : {};
    cache.push({
        original: obj,
        copy
    });
    Object.keys(obj).forEach(key => {
        copy[key] = deepCopy(obj[key], cache);
    });
    return copy;
}

