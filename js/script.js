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

// 表头
let theadHtml = '<thead><tr>'
tableTheadData.forEach((item, index, arr) => {
    let width = item.width ? ` width=${item.width}` : ''
    theadHtml += `<th${width}>${item.label}</th>`
})
theadHtml += '</tr></thead>'


console.log(tableTbodyData);

// 列表内容
let tbodyHtml = `<tbody><tr>`
tableTbodyData.forEach(item => {
    tbodyHtml += window.Share.createFace(item.face) +
        window.Share.createName(item.name) +
        window.Share.createGender(item.face.gender) +
        window.Share.createAge(item.age) +
        window.Share.createTel(item.phone) +
        window.Share.createCountry(item.country) +
        window.Share.createLike(item.like) +
        window.Share.createRank(item.rank) +
        window.Share.createOption()
})
tbodyHtml += `</tr></tbody>`

// 生成表格
tableDom.innerHTML = theadHtml + tbodyHtml

window.Share.appendCh(divDom, tableDom)