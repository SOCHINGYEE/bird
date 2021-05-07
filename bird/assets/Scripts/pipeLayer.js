// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        pipePrefab:cc.Prefab, //把属性公布出去
        speed:0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //定时器schedule，时间单位为秒
        this.schedule(this.createPipe,3) //3秒创建一对柱子
        //scheduleOnce 一段时间后执行某个函数，只调用一次
    },

    start () {

    },

    createPipe() {
        //prefabs 可供克隆，是模板
        //执行预制体
        let pipeNode = cc.instantiate(this.pipePrefab) //返回一个节点
        this.node.addChild(pipeNode) //添加子节点到挂载脚本所在的节点下
        //pipeNode.parent = this.node 效果一样
        pipeNode.x = cc.winSize.width + 100 //winSize.width是屏幕大小的宽度 保证从屏幕外部往屏幕内移动
    },
     update (dt) {
        let children = this.node.children
        for(let pipe of children) {
            pipe.x += this.speed*dt
            //起始坐标就在屏幕外，加了一个负数，往左移动
        }

        for(let pipe of children) {
            if (pipe.x < 0) { //父亲节点的位置是x=0 大的layer左边对齐
                pipe.destroy()
            }
        }
     },
});
