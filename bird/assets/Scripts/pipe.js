// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        minY:0,  //下方钢管的Y轴位置（只是下方钢管的y轴位置）
        maxY:0,
        minDist:0, //钢管间距
        maxDist:0,
        pipe_bottom:cc.Node,
        pipe_top:cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    
    onLoad () {
        //随机下方钢管的Y轴坐标
        this.pipe_bottom.y = Math.random() * (this.maxY - this.minY) + this.minY
        // 0 + minY 取不到1 最大值算1 this.maxY - this.minY + this.minY
        let dist = Math.random() * (this.maxDist - this.minDist) + this.minDist
        //修改了上方钢管锚点的前提下 y的坐标是下方Y+dist
        this.pipe_top.y= this.pipe_bottom.y + dist
    },

    start () {

    },

    // update (dt) {},
});
