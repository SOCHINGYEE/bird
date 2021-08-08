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
        // labelScoreNode:cc.Node //属性在面板公布出来
        labelScore:cc.Label,
        labelMaxScore:cc.Label
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

        this.animation = this.getComponent(cc.Animation)
        this.state = 'none' //记录旋转角度的状态
        
        // this.labelScore = this.labelScoreNode.getComponent(cc.Label)
      
    },
   
    start () {

    },
    //切换状态
    switchState(state) {
        if(this.state === state) {
            //如果当前的状态等于要切换的状态
            return
        }
        this.state = state //切换状态
        this.node.stopAllActions() //停止动作
        this.animation.stop() //停止动画
        //需要切换成上升状态成功，播放相应的动画
        if (this.state === 'up') {
            this.animation.play('wings') 
            //播放旋转动作
            let rotateTo = cc.rotateTo(0.3,-60)
            this.node.runAction(rotateTo)
        }else if (this.state === 'drop') {
            let rotateTo = cc.rotateTo(0.3,60)
            this.node.runAction(rotateTo)
        }
    },


    up() {
        this.switchState('up')
        this.speed = 400 //给一个正数，相当于给一个向上的速度，速度减为0的时候才会做向下自由落体运动
    },
    update (dt) {
        //自由落体运动
        //速度随时间变化的规律 v=gt
        //this指向的是脚本非节点
        this.speed += this.accel*dt
        // //位移随时间变化的规律 h=1/2gt^2=1/2*accel*dt*dt =this.speed*dt
        this.node.y += this.speed *dt
        
        if (this.speed <= 0 ) {
            //速度降落到0，开始下落
            this.switchState('drop')
        }
    },


    //碰撞一开始的瞬间
    // self是小鸟自己，other是跟它碰撞的物体
    onCollisionEnter(other, self) {
        // if(other.tag === 2) {
        //     cc.director.loadScene('over')
        // }
        // else if (other.tag === 3) {
        //     console.log('跟pass层碰撞了')
        // }
       if(other.node.group == 'pass') {
            window.score ++ 
            if(window.maxScore < window.score) {
                window.maxScore = window.score //更新最高分
                this.labelMaxScore.string = "max score: " + window.maxScore 
                cc.sys.localStorage.setItem('maxScore',window.score)
            }
            this.labelScore.string =  "score:" + window.score
       }else if (other.node.group == 'pipe') {
           if(window.maxScore == window.score) {
               //突破历史最高分
               cc.director.loadScene('best')
           }
            else cc.director.loadScene('over')
       }else if (other.node.group == 'groundLeft' || other.node.group == 'groundRight'){
        if(window.maxScore == window.score) {
            //突破历史最高分
            cc.director.loadScene('best')
        }
         else cc.director.loadScene('over')
       }
    }
});
