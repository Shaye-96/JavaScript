"use strict";

/**
 * 根据id 获取DOM
 * @param {string} id 
 */
function $(id) {
    return document.getElementById(id);
    // 这里不包含闭包概念
};
/**
 * 创建DOM元素
 * @param {string} node 
 */
function createEl(node) {
    return document.createElement(node)
}
/**
 * 设置属性
 * @param {string} node 
 * @param {object} styles 
 */
function setArr(node, styles) {
    for (let key in styles) {
        node.setAttribute(key, styles[key])
    }
}
/**
 * 获取属性
 * @param {string} node 
 * @param {string} style 
 */
function getArr(node, style) {
    return node.getAttribute(style)
}

// 获取DOM元素
const divDom = $('table-data-wrap')
    // 创建DOM元素
const tableDom = createEl('table');
const theadDom = createEl('thead');
const tbodyDom = createEl('tbody');
// 设置DOM元素的属性
setArr(tableDom, {
    width: '100%',
    cellpadding: '0',
    cellspacing: '0',
    border: '0',
    id: 'table-data-wrap'
})

// tableDom.getAttribute('text-align') // 获取属性

theadDom.innerHTML = `
                    <tr>
                        <th>头像</th>
                        <th>姓名</th>
                        <th>性别</th>
                        <th>年龄</th>
                        <th>手机号</th>
                        <th>国籍</th>
                        <th width="200">爱好</th>
                        <th>头衔</th>
                        <th>操作</th>
                    </tr>`

divDom.appendChild(tableDom);
tableDom.appendChild(theadDom);
tableDom.appendChild(tbodyDom);

console.log(divDom);