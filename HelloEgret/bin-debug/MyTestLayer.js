/**
 *
 * @Author: liangzhaowei
 * @Date: 2018/3/20 星期二 18:22
 * @meaning: listView测试类
 *
 **/
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MyTestLayer = (function (_super) {
    __extends(MyTestLayer, _super);
    function MyTestLayer() {
        var _this = _super.call(this) || this;
        _this.dataSource = [];
        _this.skinName = "resource/eui_skins/TestLayer.exml";
        _this.listView.itemRenderer = TestButtonSkin; //view类 
        for (var i = 1; i < 50; i++) {
            _this.dataSource.push({ name: "name" + i, phone: "a" + i, qq: "b" + i });
        }
        _this.listView.dataProvider = new eui.ArrayCollection(_this.dataSource);
        return _this;
        //this.Beginbtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.OnClick,this);
        // this.Beginbtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.OnClick_begin,this);
    }
    MyTestLayer.prototype.OnClick_begin = function () {
        console.log("OnClick");
        // var sceneLevel = new SceneLevel();
        // this.parent.addChild(sceneLevel);
        // this.parent.removeChild(this);
    };
    return MyTestLayer;
}(eui.Component));
__reflect(MyTestLayer.prototype, "MyTestLayer");
//# sourceMappingURL=MyTestLayer.js.map