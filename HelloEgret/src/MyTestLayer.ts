/**
 *
 * @Author: liangzhaowei
 * @Date: 2018/3/20 星期二 18:22
 * @meaning: listView测试类
 * 
 **/

class MyTestLayer extends eui.Component{
    // private Beginbtn: eui.Button;


	listView: eui.List;

	private dataSource:Array<any> = [];

    public constructor() {
        super();
        this.skinName = "resource/eui_skins/TestLayer.exml";
		this.listView.itemRenderer = TestButtonSkin;//view类 


		for (var i:number = 1; i < 50; i++) {
           this.dataSource.push({name: "name"+i,phone:"a"+i,qq:"b"+i});
        }

		this.listView.dataProvider = new eui.ArrayCollection(this.dataSource);

        //this.Beginbtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.OnClick,this);
        // this.Beginbtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.OnClick_begin,this);
    }
    private OnClick_begin(){
        console.log("OnClick");
        // var sceneLevel = new SceneLevel();
        // this.parent.addChild(sceneLevel);
        // this.parent.removeChild(this);
    }
}