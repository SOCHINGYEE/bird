// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        bird: cc.Node //在面板关联属性
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        //获取节点上的组件：精灵组件，脚本组件
        //node.getComponent(组件名/组件类型)

        this.isMove = false
        //触摸事件注册 第一个参数是事件类型，第二个参数是回调函数,不传则为window
        //回调函数加了括号代表执行函数，获取到的是返回值，现在赋值给引擎，引擎去执行函数
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegin, this)
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this)
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this)
    },
    onTouchBegin(event) {
        let worldPos = event.getLocation()
        //    let birdJs = this.bird.getComponent('bird') //取小鸟节点的脚本对象
        //    birdJs.up()//小鸟节点挂载的脚本中的函数
        //包围盒
        
        let rect = this.bird.getBoundingBox() //得到包围盒
        // console.log(rect) rect包含x,y坐标还有宽度高度，是个矩形

        if (rect.contains(worldPos)){
            //包围盒的矩形框是否包含这个点，选中小鸟才能移动小鸟
            this.isMove = true
            
        }else this.isMove = false
    },

    onTouchMove(event) {
        if (this.isMove) { //选中小鸟才跟手移动
            let worldPos = event.getLocation() //获取当前鼠标的坐标（世界坐标）,相对于屏幕的左下角
            this.bird.x = worldPos.x //bird是公布出来的属性，如果有偏移需要转换成相对canvas的坐标系
            //（this.bird）.parent.convertToNodeSpaceAR() //this.bird.parent就是canvas 它的根父节点，层级关系（面板中）
            this.bird.y = worldPos.y
        }

    },

    onTouchEnd(event) {
        this.isMove = false 
    },
    start() {

    },

    // update (dt) {},
});