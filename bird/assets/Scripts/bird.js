// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        accel:0, //加速度
        speed:0,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    up() {
        this.speed = 500 //给一个正数，相当于给一个向上的速度，速度减为0的时候才会做向下自由落体运动
    },
    update (dt) {
        //自由落体运动
        //速度随时间变化的规律 v=gt
        //this指向的是脚本非节点
        // this.speed += this.accel*dt
        // //位移随时间变化的规律 h=1/2gt^2=1/2*accel*dt*dt =this.speed*dt
        // this.node.y += this.speed *dt
    },
});
