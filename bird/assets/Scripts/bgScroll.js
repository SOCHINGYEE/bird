// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        speed: -150, //在属性面板中可以看见，公布属性，可以直接调整负数才是向左滚动
        bg1:cc.Node,
        bg2:cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {},

    start() {

    },

    update(dt) {
		//背景移动
		this.bg1.x += this.speed*dt;
		this.bg2.x += this.speed*dt;
		
		//坐标是负数，要负负得正
		if (this.bg1.x <= -this.bg1.width) {
			//第一张滚动超过屏幕，x坐标轴紧挨着第二张背景图
			this.bg1.x = this.bg2.x + this.bg2.width
		}
		//滚动超过自己的宽度
		if(this.bg2.x <= -this.bg2.width) {
			this.bg2.x = this.bg1.x + this.bg1.width
		}
	},
});