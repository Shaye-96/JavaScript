"use strict";

// 获取DOM元素
const divDom = window.Share.$('table-data-wrap')

// 创建DOM元素
const tableDom = window.Share.createEl('table');
const theadDom = window.Share.createEl('thead');
const tbodyDom = window.Share.createEl('tbody');

// 设置DOM元素的属性
window.Share.setAtt(tableDom, {
    width: '100%',
    cellpadding: '0',
    cellspacing: '0',
    border: '0',
    id: 'table-data-wrap'
})

// 获取DOM
// console.log(window.Share.getAtt(tableDom, 'width'));
let theadHtml = '<thead><tr>'
const tableTheadData = [
    { label: '头像' },
    { label: '姓名' },
    { label: '性别' },
    { label: '年龄' },
    { label: '手机号' },
    { label: '国籍' },
    { label: '爱好', width: '200' },
    { label: '头衔' },
    { label: '操作' }
]

tableTheadData.forEach((item, index, arr) => {
    let width = item.width ? ` width=${item.width}` : ''
    theadHtml += `<th${width}>${item.label}</th>`
})

theadHtml += '</tr></thead>'

theadDom.innerHTML = theadHtml

window.Share.appendCh(divDom, tableDom)
window.Share.appendCh(tableDom, theadDom)
window.Share.appendCh(tableDom, tbodyDom)