// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        bird:cc.Node //在面板关联属性
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //获取节点上的组件：精灵组件，脚本组件
        //node.getComponent(组件名/组件类型)


        //触摸事件注册 第一个参数是事件类型，第二个参数是回调函数
        //回调函数加了括号代表执行函数，获取到的是返回值，现在赋值给引擎，引擎去执行函数
        this.node.on(cc.Node.EventType.TOUCH_START,this.onTouchBegin,this)
    },
    onTouchBegin(event) {
       let birdJs = this.bird.getComponent('bird') //取小鸟节点的脚本对象
       birdJs.up()//小鸟节点挂载的脚本中的函数
    },
    start () {

    },

    // update (dt) {},
});
