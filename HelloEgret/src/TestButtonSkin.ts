/**
 *
 * @Author: liangzhaowei
 * @Date: 2018/3/20 星期二 18:22
 * @meaning: 按钮view
 * 
 **/
class TestButtonSkin extends eui.ItemRenderer{
	    
    public labelDisplay:eui.Label;
    // public lphone:egret.gui.Label;
    // public lqq:egret.gui.Label;
    
    public constructor() {
        super();
        // 皮肤名称
        this.skinName = "resource/eui_skins/ButtonSkin.exml";
        // this.touchChildren = true;

        //点击响应
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this)

    }
    
    public dataChanged():void{
        // 将数据对应到组件上
        // this.lname.text = this.data.name;
        // this.lphone.text = this.data.phone;
        // this.lqq.text = this.data.qq;
        if(this.data.name)
        {
            this.labelDisplay.text = this.data.name;
        }

        console.log("name:  "+ this.data.name);
        console.log("lphone:  "+ this.data.phone);
        console.log("lqq:  "+ this.data.qq);
        
    }

    public OnClick(e: egret.TouchEvent)
    {
         console.log("name:  "+ this.data.name);
    }
    
}