// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        labelMaxScore:cc.Label,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //拿到碰撞管理器
        let manager = cc.director.getCollisionManager()
        //enabled the colider manager 开启碰撞系统
        manager.enabled = true

        // //显示碰撞的边缘
        // manager.enabledDebugDraw = true;

        // manager.enabledDrawBoundingBox = true;

        window.score = 0
        window.maxScore = cc.sys.localStorage.getItem('maxScore') //把最高分存在本地
        if (window.maxScore === null) {
            window.maxScore = 0
            cc.sys.localStorage.setItem('maxScore',0)
        }else {
            this.labelMaxScore.string = 'MAX SCORE: ' + window.maxScore
        }
    },

    start () {

    },

    // update (dt) {},

});
