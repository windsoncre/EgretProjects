//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class Main extends eui.UILayer {
    /**
     * 加载进度界面
     * loading process interface
     */


    private times:number; //

    // private 


    private loadingView: LoadingUI;
    protected createChildren(): void {
        super.createChildren();

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        //inject the custom material parser
        //注入自定义的素材解析器
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        //Config loading process interface
        //设置加载进度界面
        this.loadingView = new LoadingUI();
        this.stage.addChild(this.loadingView);
        // initialize the Resource loading library
        //初始化Resource资源加载库
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    }
    /**
     * 配置文件加载完成,开始预加载皮肤主题资源和preload资源组。
     * Loading of configuration file is complete, start to pre-load the theme configuration file and the preload resource group
     */
    private onConfigComplete(event: RES.ResourceEvent): void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        // load skin theme configuration file, you can manually modify the file. And replace the default skin.
        //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
        let theme = new eui.Theme("resource/default.thm.json", this.stage);
        theme.addEventListener(eui.UIEvent.COMPLETE, this.onThemeLoadComplete, this);

        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("preload");
    }
    private isThemeLoadEnd: boolean = false;
    /**
     * 主题文件加载完成,开始预加载
     * Loading of theme configuration file is complete, start to pre-load the 
     */
    private onThemeLoadComplete(): void {
        this.isThemeLoadEnd = true;
        this.createScene();
    }
    private isResourceLoadEnd: boolean = false;
    /**
     * preload资源组加载完成
     * preload resource group is loaded
     */
    private onResourceLoadComplete(event: RES.ResourceEvent): void {
        if (event.groupName == "preload") {
            this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.isResourceLoadEnd = true;
            this.createScene();
        }
    }
    private createScene() {
        if (this.isThemeLoadEnd && this.isResourceLoadEnd) {
            this.startCreateScene();
        }
    }
    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    private onItemLoadError(event: RES.ResourceEvent): void {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    }
    /**
     * 资源组加载出错
     * Resource group loading failed
     */
    private onResourceLoadError(event: RES.ResourceEvent): void {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //ignore loading failed projects
        this.onResourceLoadComplete(event);
    }
    /**
     * preload资源组加载进度
     * loading process of preload resource
     */
    private onResourceProgress(event: RES.ResourceEvent): void {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    }
    private textfield: egret.TextField;
    /**
     * 创建场景界面
     * Create scene interface
     */
    protected startCreateScene(): void {





        // let iconL = this.createBitmapByName("egret_icon_png");
        // iconL.x = 200;
        // iconL.y = 300;
        // this.addChild(iconL);



        // let iconR = this.createBitmapByName("egret_icon_png");
        // iconR.x = 400;
        // iconR.y = 300;
        // this.addChild(iconR);




        // this.times = -1;
        // var self = this;
        // this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){

        //     switch(++self.times % 3){
        //         case 0: egret.Tween.get( iconL ).to( { x:100 }, 300, egret.Ease.circIn );  break;
        //         case 1:egret.Tween.get( iconL ).to( { x:200 }, 300, egret.Ease.circIn );break;
        //         case 2:egret.Tween.get( iconL ).to( { x:300 }, 300, egret.Ease.circIn ); break;
        //     }
        //     console.log("time",self.times);


        //     //发送消息
        //     this.webSocket.writeUTF("time" + self.times);
            

        // },this);


        //调用soket
        //this.createGameSence();

    

    //时间函数
     //创建一个计时器对象
        // var timer:egret.Timer = new egret.Timer(500,5);
        // //注册事件侦听器
        // timer.addEventListener(egret.TimerEvent.TIMER,this.timerFunc,this);
        // timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.timerComFunc,this);
        // //开始计时
        // timer.start();



        let sky = this.createBitmapByName("bg_jpg");
        this.addChild(sky);
        let stageW = this.stage.stageWidth;
        let stageH = this.stage.stageHeight;
        sky.width = stageW;
        sky.height = stageH;

        // let topMask = new egret.Shape();
        // topMask.graphics.beginFill(0x000000, 0.5);
        // topMask.graphics.drawRect(0, 0, stageW, 172);
        // topMask.graphics.endFill();
        // topMask.y = 33;
        // this.addChild(topMask);

        // let icon: egret.Bitmap = this.createBitmapByName("egret_icon_png");
        // this.addChild(icon);
        // icon.x = 26;
        // icon.y = 33;

        // let line = new egret.Shape();
        // line.graphics.lineStyle(2, 0xffffff);
        // line.graphics.moveTo(0, 0);
        // line.graphics.lineTo(0, 117);
        // line.graphics.endFill();
        // line.x = 172;
        // line.y = 61;
        // this.addChild(line);


        // let colorLabel = new egret.TextField();
        // colorLabel.textColor = 0xffffff;
        // colorLabel.width = stageW - 172;
        // colorLabel.textAlign = "center";
        // colorLabel.text = "Hello Egret";
        // colorLabel.size = 24;
        // colorLabel.x = 172;
        // colorLabel.y = 80;
        // this.addChild(colorLabel);

        // let textfield = new egret.TextField();
        // this.addChild(textfield);
        // textfield.alpha = 0;
        // textfield.width = stageW - 172;
        // textfield.textAlign = egret.HorizontalAlign.CENTER;
        // textfield.size = 24;
        // textfield.textColor = 0xffffff;
        // textfield.x = 172;
        // textfield.y = 135;
        // this.textfield = textfield;

        // //根据name关键字，异步获取一个json配置文件，name属性请参考resources/resource.json配置文件的内容。
        // // Get asynchronously a json configuration file according to name keyword. As for the property of name please refer to the configuration file of resources/resource.json.
        // RES.getResAsync("description_json", this.startAnimation, this);


        var buttonList:Array<any> = [];
        var nameList=new Array("TestLayer","Label","TestListView")
        for(var i= 0;i<nameList.length;i++)
        {
            var button = new eui.Button();
            button.label = nameList[i];
            button.width = 150
            button.horizontalCenter = 0;
            // button.horizontalCenter = 0;
            // button.verticalCenter = 0;
            button.y = 0+i*70;
            this.addChild(button);
            button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
        }

    }



    //时间函数
     private timerFunc()
    {
        console.log("计时");
    }
    private timerComFunc()
    {
        console.log("计时结束");
    }

    public constructor()
    {
        super();
        //创建一个男朋友
        var boy:Boy = new Boy();
        boy.name = "男朋友";
        //创建一个女朋友
        var girl:Girl = new Girl();
        girl.name = "女朋友";
        //注册侦听器
        boy.addEventListener(DateEvent.DATE,girl.getDate,girl);
        //男朋友发送要求
        boy.order();
        //约会邀请完成后，移除侦听器
        boy.removeEventListener(DateEvent.DATE,girl.getDate,girl);
    }



    //网络部分
    private webSocket:egret.WebSocket;
    private createGameSence():void{

        console.log("creat soket...........");
        this.webSocket = new egret.WebSocket();
        this.webSocket.addEventListener(egret.ProgressEvent.SOCKET_DATA,this.onReceieveMessage,this);
        this.webSocket.addEventListener(egret.Event.CONNECT,this.onSocketOpen,this);
        this.webSocket.connect("echo.websocket.org",80);
    }

    private onReceieveMessage(e:egret.Event):void{
        var msg = this.webSocket.readUTF();
        console.log("receive data: " + msg);
    }

    private onSocketOpen():void{
        var cmd = "hello soket";
        console.log("connect successful :" + cmd);
        this.webSocket.writeUTF(cmd);
    }


    /* 
      回调函数
    */

    private imgLoadHandler(evt:egret.Event):void{

        var bmd:egret.BitmapData  = evt.$currentTarget.data;

        var bird:egret.Bitmap = new egret.Bitmap(bmd);
        bird.x = 100;
        bird.y = 100;
        this.addChild(bird);

    }


    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    private createBitmapByName(name: string): egret.Bitmap {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
    /**
     * 描述文件加载成功，开始播放动画
     * Description file loading is successful, start to play the animation
     */
    private startAnimation(result: Array<any>): void {
        let parser = new egret.HtmlTextParser();

        let textflowArr = result.map(text => parser.parse(text));
        let textfield = this.textfield;
        let count = -1;
        let change = () => {
            count++;
            if (count >= textflowArr.length) {
                count = 0;
            }
            let textFlow = textflowArr[count];

            // 切换描述内容
            // Switch to described content
            textfield.textFlow = textFlow;
            let tw = egret.Tween.get(textfield);
            tw.to({ "alpha": 1 }, 200);
            tw.wait(2000);
            tw.to({ "alpha": 0 }, 200);
            tw.call(change, this);
        };

        change();
    }

    /**
     * 点击按钮
     * Click the button
     */
    private onButtonClick(e: egret.TouchEvent) {
        // let panel = new eui.Panel();
        // panel.title = "Title";
        // panel.horizontalCenter = 0;
        // panel.verticalCenter = 0;
        // this.addChild(panel);



        if(e.target && e.target.label)
        {
            switch(e.target.label)
            {
                case "TestLayer" : this.createTestLayer(); break;//创建场景
                case "TestLabel" : this.createTestLabel(); break;//创建listView
                case "TestListView" : this.createTestListView(); break;//创建listView
            }
        }

        console.log(e.target);
        


    }


    public createTestLayer()
    {
        var pTestImg:TestMyLayer = new TestMyLayer();       /**测试图片对象 */  
        this.addChild(pTestImg);                    /**将test显示对象添加到舞台 */  
    }


    public createTestLabel()
    {
        // var pTestImg:TestImg = new TestImg();       /**测试图片对象 */  
        // this.addChild(pTestImg);                    /**将test显示对象添加到舞台 */  
    }

    public createTestListView()
    {
        //listview
        var testListView:TestListView = new TestListView();       /**实例化皮肤对象 */  
        this.addChild(testListView);          /**将test显示对象添加到舞台 */  
    }


}
