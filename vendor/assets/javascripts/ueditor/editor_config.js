/**
 *  ueditor完整配置项
 *  可以在这里配置整个编辑器的特性
 */
/**************************提示********************************
 * 所有被注释的配置项均为UEditor默认值。
 * 修改默认配置请首先确保已经完全明确该参数的真实用途。
 * 主要有两种修改方案，一种是取消此处注释，然后修改成对应参数；另一种是在实例化编辑器时传入对应参数。
 * 当升级编辑器时，可直接使用旧版配置文件替换新版配置文件,不用担心旧版配置文件中因缺少新功能所需的参数而导致脚本报错。
 **************************提示********************************/


(function () {
    /**
     * 编辑器资源文件根路径。它所表示的含义是：以编辑器实例化页面为当前路径，指向编辑器资源文件（即dialog等文件夹）的路径。
     * 鉴于很多同学在使用编辑器的时候出现的种种路径问题，此处强烈建议大家使用"相对于网站根目录的相对路径"进行配置。
     * "相对于网站根目录的相对路径"也就是以斜杠开头的形如"/myProject/ueditor/"这样的路径。
     * 如果站点中有多个不在同一层级的页面需要实例化编辑器，且引用了同一UEditor的时候，此处的URL可能不适用于每个页面的编辑器。
     * 因此，UEditor提供了针对不同页面的编辑器可单独配置的根路径，具体来说，在需要实例化编辑器的页面最顶部写上如下代码即可。当然，需要令此处的URL等于对应的配置。
     * window.UEDITOR_HOME_URL = "/xxxx/xxxx/";
     */
    var URL;

    /**
     * 此处配置写法适用于UEditor小组成员开发使用，外部部署用户请按照上述说明方式配置即可，建议保留下面两行，以兼容可在具体每个页面配置window.UEDITOR_HOME_URL的功能。
     */
    var tmp = location.protocol.indexOf("file")==-1 ? location.pathname : location.href;
    URL = "/ueditor/";   //window.UEDITOR_HOME_URL||tmp.substr(0,tmp.lastIndexOf("\/")+1).replace("_examples/","").replace("website/","");//这里你可以配置成ueditor目录在您网站的相对路径或者绝对路径（指以http开头的绝对路径）

    /**
     * 配置项主体。注意，此处所有涉及到路径的配置别遗漏URL变量。
     */
    window.UEDITOR_CONFIG = {

        //为编辑器实例添加一个路径，这个不能被注释
        UEDITOR_HOME_URL : URL
        //图片上传配置区
        ,imageUrl:URL+"php/imageUp.php"             //图片上传提交地址
        ,imagePath:URL + "php/"                     //图片修正地址，引用了fixedImagePath,如有特殊需求，可自行配置
       //,imageFieldName:"upfile"                   //图片数据的key,若此处修改，需要在后台对应文件修改对应参数
        //,compressSide:0                            //等比压缩的基准，确定maxImageSideLength参数的参照对象。0为按照最长边，1为按照宽度，2为按照高度
        //,maxImageSideLength:900                    //上传图片最大允许的边长，超过会自动等比缩放,不缩放就设置一个比较大的值，更多设置在image.html中

        //涂鸦图片配置区
        ,scrawlUrl:URL+"php/scrawlUp.php"           //涂鸦上传地址
        ,scrawlPath:URL+"php/"                            //图片修正地址，同imagePath

        //附件上传配置区
        ,fileUrl:URL+"php/fileUp.php"               //附件上传提交地址
        ,filePath:URL + "php/"                   //附件修正地址，同imagePath
        //,fileFieldName:"upfile"                    //附件提交的表单名，若此处修改，需要在后台对应文件修改对应参数
         //远程抓取配置区
        //,catchRemoteImageEnable:true               //是否开启远程图片抓取,默认开启
        ,catcherUrl:URL +"php/getRemoteImage.php"   //处理远程图片抓取的地址
        ,catcherPath:URL + "php/"                  //图片修正地址，同imagePath
        //,catchFieldName:"upfile"                   //提交到后台远程图片uri合集，若此处修改，需要在后台对应文件修改对应参数
        //,separater:'ue_separate_ue'               //提交至后台的远程图片地址字符串分隔符
        //,localDomain:[]                            //本地顶级域名，当开启远程图片抓取时，除此之外的所有其它域名下的图片都将被抓取到本地,默认不抓取127.0.0.1和localhost

        //图片在线管理配置区
        ,imageManagerUrl:URL + "php/imageManager.php"       //图片在线管理的处理地址
        ,imageManagerPath:URL + "php/"                                    //图片修正地址，同imagePath

        //屏幕截图配置区
        ,snapscreenHost: '127.0.0.1'                                  //屏幕截图的server端文件所在的网站地址或者ip，请不要加http://
        ,snapscreenServerUrl: URL +"php/imageUp.php" //屏幕截图的server端保存程序，UEditor的范例代码为“URL +"server/upload/php/snapImgUp.php"”
        ,snapscreenPath: URL + "php/"
        //,snapscreenServerPort: 80                                    //屏幕截图的server端端口
        //,snapscreenImgAlign: 'center'                                //截图的图片默认的排版方式

        //word转存配置区
        ,wordImageUrl:URL + "php/imageUp.php"             //word转存提交地址
        ,wordImagePath:URL + "php/"                       //
        //,wordImageFieldName:"upfile"                     //word转存表单名若此处修改，需要在后台对应文件修改对应参数

        //获取视频数据的地址
        ,getMovieUrl:URL+"php/getMovie.php"                   //视频数据获取地址

        //工具栏上的所有的功能按钮和下拉框，可以在new编辑器的实例时选择自己需要的从新定义
        ,toolbars:[["fontfamily","fontsize","undo","redo","insertorderedlist","insertimage","emotion","insertvideo","preview"]]
        //当鼠标放在工具栏上时显示的tooltip提示,留空支持自动多语言配置，否则以配置值为准
        ,labelMap:{
            'anchor':'', 'undo':''
        }
        //webAppKey
        //百度应用的APIkey，每个站长必须首先去百度官网注册一个key后方能正常使用app功能
        ,webAppKey:""


        //语言配置项,默认是zh-cn。有需要的话也可以使用如下这样的方式来自动多语言切换，当然，前提条件是lang文件夹下存在对应的语言文件：
        //lang值也可以通过自动获取 (navigator.language||navigator.browserLanguage ||navigator.userLanguage).toLowerCase()
    ,lang:'en'

        //,langPath:URL +"lang/"

        //主题配置项,默认是default。有需要的话也可以使用如下这样的方式来自动多主题切换，当然，前提条件是themes文件夹下存在对应的主题文件：
        //现有如下皮肤:default,modern,gorgeous
        //,theme:'default'
        //,themePath:URL +"themes/"

        //若实例化编辑器的页面手动修改的domain，此处需要设置为true
        //,customDomain:false

        //针对getAllHtml方法，会在对应的head标签中增加该编码设置。
        //,charset:"utf-8"

        //常用配置项目
        //,isShow : true    //默认显示编辑器

        //,initialContent:'欢迎使用ueditor!'    //初始化编辑器的内容,也可以通过textarea/script给值，看官网例子

        //,initialFrameWidth:1000  //初始化编辑器宽度,默认1000
        //,initialFrameHeight:320  //初始化编辑器高度,默认320

        //,autoClearinitialContent:true //是否自动清除编辑器初始内容，注意：如果focus属性设置为true,这个也为真，那么编辑器一上来就会触发导致初始化的内容看不到了

        //,iframeCssUrl: URL + '/themes/iframe.css' //给编辑器内部引入一个css文件
        //,textarea:'editorValue' // 提交表单时，服务器获取编辑器提交内容的所用的参数，多实例时可以给容器name属性，会将name给定的值最为每个实例的键值，不用每次实例化的时候都设置这个值
        //,focus:true //初始化时，是否让编辑器获得焦点true或false

        //,autoClearEmptyNode : true //getContent时，是否删除空的inlineElement节点（包括嵌套的情况）

        //,fullscreen : false //是否开启初始化时即全屏，默认关闭

        //,readonly : false /编辑器初始化结束后,编辑区域是否是只读的，默认是false

        //,zIndex : 900     //编辑器层级的基数,默认是900

        //,imagePopup:true      //图片操作的浮层开关，默认打开

        //,initialStyle:'body{font-size:18px}'   //编辑器内部样式,可以用来改变字体等

        //,emotionLocalization:false //是否开启表情本地化，默认关闭。若要开启请确保emotion文件夹下包含官网提供的images表情文件夹

        //,pasteplain:false  //是否纯文本粘贴。false为不使用纯文本粘贴，true为使用纯文本粘贴

        //,allHtmlEnabled:false //提交到后台的数据是否包含整个html字符串
        //iframeUrlMap
        //dialog内容的路径 ～会被替换成URL,垓属性一旦打开，将覆盖所有的dialog的默认路径
        //,iframeUrlMap:{
        // 'anchor':'~/dialogs/anchor/anchor.html',
        // }
        //insertorderedlist
        //有序列表的下拉配置,值留空时支持多语言自动识别，若配置值，则以此值为准
//        ,'insertorderedlist':{
//             'decimal' : '' ,         //'1,2,3...'
//             'lower-alpha' : '' ,    // 'a,b,c...'
//             'lower-roman' : '' ,    //'i,ii,iii...'
//             'upper-alpha' : '' , lang   //'A,B,C'
//             'upper-roman' : ''      //'I,II,III...'
//        }
        //fontfamily
        //字体设置 label留空支持多语言自动切换，若配置，则以配置值为准
//        ,'fontfamily':[
//            { label:'',name:'songti',val:'宋体,SimSun'},
//            { label:'',name:'kaiti',val:'楷体,楷体_GB2312, SimKai'},
//            { label:'',name:'yahei',val:'微软雅黑,Microsoft YaHei'},
//            { label:'',name:'heiti',val:'黑体, SimHei'},
//            { label:'',name:'lishu',val:'隶书, SimLi'},
//            { label:'',name:'andaleMono',val:'andale mono'},
//            { label:'',name:'arial',val:'arial, helvetica,sans-serif'},
//            { label:'',name:'arialBlack',val:'arial black,avant garde'},
//            { label:'',name:'comicSansMs',val:'comic sans ms'},
//            { label:'',name:'impact',val:'impact,chicago'},
//            { label:'',name:'timesNewRoman',val:'times new roman'}
//          ]
        //fontsize
        //字号
        //,'fontsize':[10, 11, 12, 14, 16, 18, 20, 24, 36]
        //右键菜单的内容，可以参考plugins/contextmenu.js里边的默认菜单的例子，label留空支持国际化，否则以此配置为准
//        ,contextMenu:[
//            {
//                label:'',       //显示的名称
//                cmdName:'selectall',//执行的command命令，当点击这个右键菜单时
//                //exec可选，有了exec就会在点击时执行这个function，优先级高于cmdName
//                exec:function () {
//                    //this是当前编辑器的实例
//                    //this.ui._dialogs['inserttableDialog'].open();
//                }
//            }
//           ]
        //wordCount
        //,wordCount:1          //是否开启字数统计
        //,maximumWords:10000       //允许的最大字符数
    //字数统计提示，{#count}代表当前字数，{#leave}代表还可以输入多少字符数,留空支持多语言自动切换，否则按此配置显示
        //,wordCountMsg:''   //当前已输入 {#count} 个字符，您还可以输入{#leave} 个字符
        //超出字数限制提示  留空支持多语言自动切换，否则按此配置显示
        //,wordOverFlowMsg:''    //<span style="color:red;">你输入的字符个数已经超出最大允许值，服务器可能会拒绝保存！</span>

        //elementPathEnabled
        //是否启用元素路径，默认是显示
        //,elementPathEnabled : true
        //undo
        //可以最多回退的次数,默认20
        //,maxUndoCount:20
        //当输入的字符数超过该值时，保存一次现场
        //,maxInputCount:1
        //autoHeightEnabled
        // 是否自动长高,默认true
        //,autoHeightEnabled:true
        //,minFrameWidth:800    //编辑器拖动时最小宽度,默认800
        //,minFrameHeight:220  //编辑器拖动时最小高度,默认220
        //autoFloatEnabled
        //是否保持toolbar的位置不动,默认true
        //,autoFloatEnabled:true
        //浮动时工具栏距离浏览器顶部的高度，用于某些具有固定头部的页面
        //,topOffset:30
    };
})();
