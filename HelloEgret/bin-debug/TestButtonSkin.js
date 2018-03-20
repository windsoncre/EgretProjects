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
/**
 *
 * @Author: liangzhaowei
 * @Date: 2018/3/20 星期二 18:22
 * @meaning: 按钮view
 *
 **/
var TestButtonSkin = (function (_super) {
    __extends(TestButtonSkin, _super);
    // public lphone:egret.gui.Label;
    // public lqq:egret.gui.Label;
    function TestButtonSkin() {
        var _this = _super.call(this) || this;
        // 皮肤名称
        _this.skinName = "resource/eui_skins/ButtonSkin.exml";
        // this.touchChildren = true;
        //点击响应
        _this.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.OnClick, _this);
        return _this;
    }
    TestButtonSkin.prototype.dataChanged = function () {
        // 将数据对应到组件上
        // this.lname.text = this.data.name;
        // this.lphone.text = this.data.phone;
        // this.lqq.text = this.data.qq;
        if (this.data.name) {
            this.labelDisplay.text = this.data.name;
        }
        console.log("name:  " + this.data.name);
        console.log("lphone:  " + this.data.phone);
        console.log("lqq:  " + this.data.qq);
    };
    TestButtonSkin.prototype.OnClick = function (e) {
        console.log("name:  " + this.data.name);
    };
    return TestButtonSkin;
}(eui.ItemRenderer));
__reflect(TestButtonSkin.prototype, "TestButtonSkin");
//# sourceMappingURL=TestButtonSkin.js.map