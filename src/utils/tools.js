/**
 * 工具函数
 * @author liqingsong<957698457@qq.com>
 * @weburl http://www.liqingsong.cc 
 *         http://www.wyxgn.com
 */

 /**
 * @param {Array} arr
 * @param {Function} fn
 * @description 数组遍历
 */
export const forEach = (arr, fn) => {
    if (!arr.length || !fn) return;
    let i = -1;
    let len = arr.length;
    while (++i < len) {
        let item = arr[i];
        fn(item, i, arr);
    }
};

/**
 * @param {Array} target 目标数组
 * @param {Array} arr 需要查询的数组
 * @description 判断要查询的数组是否至少有一个元素包含在目标数组中
 */
export const hasOneOf = (targetarr, arr) => {
    return targetarr.some(_ => arr.indexOf(_) > -1);
  };