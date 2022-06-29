/**
 * 防抖
 * @param {function} callback - 需要防抖的函数
 * @param {number} delay - 期限值 ms
 * @return {function}
 */
export function debounce(callback, delay) {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(_ => {
      callback.apply(this, arguments);
    }, delay);
  }
}
