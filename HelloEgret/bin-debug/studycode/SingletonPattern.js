/**
 *
 * @Author: liangzhaowei
 * @Date: 2018/3/22 星期四 17:03
 * @meaning: 单例模式
 *
 **/
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
// class SingletonPattern extends eui.Component{
// }
var SingletonPattern = (function () {
    function SingletonPattern() {
    }
    SingletonPattern.GetInstance = function () {
        if (SingletonPattern._instance == null) {
            SingletonPattern._instance = new SingletonPattern();
        }
        return SingletonPattern._instance;
    };
    SingletonPattern._instance = null;
    return SingletonPattern;
}());
__reflect(SingletonPattern.prototype, "SingletonPattern");
// private static instance:TickMgr;
// /**
//  * 获取实例的静态方法实例
//  * @return
//  *
//  */
// public static getInstance():TickMgr
// {
//     if(!this.instance)
//     {
//         this.instance = new TickMgr();
//     }
//     return this.instance;
// } 
//# sourceMappingURL=SingletonPattern.js.map