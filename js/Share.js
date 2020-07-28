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

    /**
     * 创建头像
     * @param {object} data 
     */
    function createFace(data) {
        if (!(data instanceof Object)) {
            throw new Error('data 类型错误')
            return false
        }
        let html = `<td>
                    <div class="face">
                        <span class="gender icon-${data.gender}"></span>
                        <img src="${data.img}" alt="">
                    </div>
                </td>`
        return html
    }
    window.Share.createFace = createFace

    /**
     * 创建姓名
     * @param {object} data 
     */
    function createName(data) {
        if (!(data instanceof Object)) {
            throw new Error('data 类型错误')
            return false
        }
        let html = `<td>
                        <div class="people-name">
                            <h4 class="name">${data.trueName}</h4>
                            <span class="nickname option-05 fs-12">昵称：${data.nickname}</span>
                        </div>
                    </td>`
        return html
    }
    window.Share.createName = createName

    /**
     * 创建性别
     * @param {string} data 
     */
    function createGender(data) {
        if (typeof data !== 'string') {
            throw new Error('data 类型错误')
            return false
        }
        let html = `<td>
                    <div class="gender-wrap">
                        <span class="gender icon-girl ${data === 'girl'? '': 'option-05'}"></span>
                        <span class="gender icon-boy ${data === 'boy'? '': 'option-05'}"></span>
                    </div>
                </td>`
        return html
    }
    window.Share.createGender = createGender

    /**
     * 创建年龄
     * @param {object} data 
     */
    function createAge(data) {
        if (!(data instanceof Object)) {
            throw new Error('data 类型错误')
            return false
        }
        let html = `<td>
                        <div class="age text-center">
                            <p>${data.number}</p>
                            <span class="option-05 fs-12">（单身狗）</span>
                        </div>
                    </td>`
        return html
    }
    window.Share.createAge = createAge

    /**
     * 创建电话
     * @param {Object} data 
     */
    function createTel(data) {
        if (!(data instanceof Object)) {
            throw new Error('data 类型错误')
            return false
        }
        let html = `<td>
                        <div class="phone">
                            ${data.code}<span class="option-05">（中国）</span><br /> ${data.number}
                        </div>
                    </td>`
        return html
    }
    window.Share.createTel = createTel

    /**
     * 创建国籍
     * @param {Object} data 
     */
    function createCountry(data) {
        if (!(data instanceof Object)) {
            throw new Error('data 类型错误')
            return false
        }
        let html = `<td>
                        <div>
                            <img src="${data.National_flag}" alt="${data.name}">
                            <p class="country-name" style="color: red;">${data.name}</p>
                        </div>
                    </td>`
        return html
    }
    window.Share.createCountry = createCountry

    /**
     * 创建爱好
     * @param {Array} data 
     */
    function createLike(data) {
        if (!(data instanceof Array)) {
            throw new Error('data 类型错误')
            return false
        }
        let node = ''
        data.forEach(item => {
            node += `<span style="background-color: ${item.color};">${item.tag}</span>`
        })
        let html = `<td>
                        <div class="likes">
                        ${node}
                        </div>
                    </td>`
        return html
    }
    window.Share.createLike = createLike

    /**
     * 创建头衔
     * @param {Object} data 
     */
    function createRank(data) {
        if (!(data instanceof Object)) {
            throw new Error('data 类型错误')
            return false
        }
        let html = `<td>
                        <div class="grade">
                            <span class="role-name">${data.name}</span>
                            <div class="grade-wrap icon-grade">
                                <div class="grade-high icon-grade" style="width: 33.33332%;"></div>
                            </div>
                        </div>
                    </td>`
        return html
    }
    window.Share.createRank = createRank

    /**
     * 创建操作
     */
    function createOption() {
        return `<td>
                    <div class="operation">
                        <a href="javascript: void(0);" class="operation-btn">设置</a>
                        <ul class="links">
                            <a href="javascript: void(0);">编辑</a>
                            <a href="javascript: void(0);">删除</a>
                            <a href="javascript: void(0);">锁定</a>
                            <a href="javascript: void(0);">收起</a>
                        </ul>
                    </div>
                </td>`
    }
    window.Share.createOption = createOption

})()

// window：全局

// 自动执行函数：防止变量和方法污染全局，防止与第三方库冲突