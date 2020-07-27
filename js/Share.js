(function() {
    "use strict";
    // 命名空间，当前使用的是es5的写法，之后尝试使用es6，es6包含import，export
    if (!window.Share) {
        window.Share = {}
    }

    /**
     * 根据id 获取DOM
     * @param {string} id 
     */
    function $(id) {
        if (typeof id !== 'string') {
            throw new Error('id类型错误')
            return false
        }
        let dom = document.getElementById(id);
        if (!dom) {
            throw new Error('DOM节点未找到')
            return false
        }
        return dom;
        // 这里不包含闭包概念
    };
    window.Share.$ = $

    /**
     * 创建DOM元素
     * @param {string} node 
     */
    function createEl(node) {
        if (typeof node !== 'string') {
            throw new Error('node 类型错误')
            return false
        }
        let dom = document.createElement(node)
        if (!dom) {
            throw new Error('DOM节点未找到')
            return false
        }
        return dom;
    }
    window.Share.createEl = createEl

    /**
     * 设置属性
     * @param {Object} node 
     * @param {object} styles 
     */
    function setAtt(node, styles) {
        if (!(node instanceof Object)) {
            throw new Error('node 类型错误')
            return false
        }
        if (!(styles instanceof Object)) {
            throw new Error('styles 类型错误')
            return false
        }
        for (let key in styles) {
            node.setAttribute(key, styles[key])
        }
    }
    window.Share.setAtt = setAtt

    /**
     * 获取属性
     * @param {object} node 
     * @param {string} style 
     */
    function getAtt(node, style) {
        if (!(node instanceof Object)) {
            throw new Error('node 类型错误')
            return false
        }
        if (typeof style !== 'string') {
            throw new Error('style 类型错误')
            return false
        }
        return node.getAttribute(style)
    }
    window.Share.getAtt = getAtt

    /**
     * 创建子节点
     * @param {object} node1 
     * @param {object} node2 
     */
    function appendCh(node1, node2) {
        if (!(node1 instanceof Object)) {
            throw new Error('node1 类型错误')
            return false
        }
        if (!(node2 instanceof Object)) {
            throw new Error('node2 类型错误')
            return false
        }
        return node1.appendChild(node2)
    }
    window.Share.appendCh = appendCh
})()

// window：全局

// 自动执行函数：防止变量和方法污染全局，防止与第三方库冲突