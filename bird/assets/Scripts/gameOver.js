// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        let scoreNode = this.node.getChildByName('score') //创建的节点被命名成score
    
        let labelScore = scoreNode.getComponent(cc.Label)
 
        labelScore.string =  window.score
    
    },

    // update (dt) {},
});
