##############元素之间的关系
父元素：直接包含子元素的元素
子元素：直接被父元素包含的元素
祖先元素：直接或间接包含后代元素的元素,父元素也是祖先元素
后代元素: 直接或间接被祖先元素包含的元素，子元素也是后代元素
兄弟元素： 拥有相同父元素的元素叫做兄弟元素
    
   
##############后代元素选择器
祖先 后代{}

div span{
    color: aqua;
}

##############子类元素选择器  /*ie6以及以下的不兼容子类选择器*/
父类 > 子类{}

div > span{
    color: red;
}

<div>
    <span>我是div的span元素</span>
    <p>
        <span>我是p的span元素</span>
    </p>
</div>

<span>我是body的span元素</span>

##############伪元素选择器
:first-line 伪元素
:first-letter 伪元素
:before 伪元素
     p:before{
        content : '我会出现在段落最前面'
     }
:after 伪元素
    h1:after
      {
        content:url(beep.wav);
      }
      
      
##############属性选择器
根据元素中的属性或属性值来选取指定元素
*[属性名]
*[属性名1][属性名2]
*[属性名=value]
*[属性名^=value]
*[属性名$=value]
*[属性名*=value]
*[属性名~=value]


##############其他子元素选择器
:first-child 选择器用于选取属于其父元素的首个子元素的指定选择器
:last-child
:nth-child(env)
:nth-child(old)
<p>I am a <i>strong</i> man. I am a <i>strong</i> man.</p>
<p>I am a <i>strong</i> man. I am a <i>strong</i> man.</p>
<div><p>我也是div里面的第一个p元素</p></div>

p:first-child
{
    background-color:yellow;
}

p:first-child i
{
    background:yellow;
}
        
下面这些很类似，child是所有子元素排列，而type是当前类型的子元素中排列
:first-child    p:first-child 所有子元素排列排在第一个元素且是p标签
:last-child
:nth-child()
:first-of-type  p:first-of-type 所有子元素p排列排在第一个p
:last-of-type
:nth-of-type(n)


##############兄弟元素选择器
span + p “后一个”“紧挨”着的指定兄弟元素 p
span ~ p 后面所有的兄弟元素 p


##############否定伪类
可以从已选择的元素中剔除出某些元素
p:not(.hello){}
    
    
##############子类继承父类
并不是所有的子类都能继承父类，背景相关，边框，定位的都不会继承

    
##############选择器的优先级
不同的选择器，选择同一个元素，优先级更好的先显示
优先级规则
内联样式 ，优先级1000
id选择器 100
类和伪类选择器 10
元素选择器 优先级1
通配 * ，优先级0
继承的样式，没有优先级

当选择器包含多种选择器时候，需要将多种选择器的优先级相加再去比较
    #p1{}
    p#p1{} 优先级更高
    
但是选择器优先级不会超过他的最大的数量级    
如果选择器的优先级一样，则使用靠后的样式
并集选择器的优先级式单独计算
            
##############!important  样式后边添加的话，优先级最高甚至高于内联样式，尽量避免使用


##############a的伪类
    a:link {color: #FF0000}		/* 未访问的链接 */
    a:visited {color: #00FF00}	/* 已访问的链接 */
    a:hover {color: #FF00FF}	/* 鼠标移动到链接上 */
    a:active {color: #0000FF}	/* 选定的链接 */
   
   设置移动到btn上，出现小手
   cursor:pointer
##############strong,em,small,cite,q
h5中规定，对不需要着重的内容，只是单纯加粗或者斜体，可以使用b和i
有语义，用em和strong,em表示语气，strong着重内容
small标签的内容会比父元素中的文字要小一点
cite标签网页中所有加书名号的都可以使用cite标签，表示参考的内容<cite>《论语》</cite>
q标签，表示一个短引用（行内引用） <q>学而时习之，不亦说乎</q>,ie7不兼容，不要用，
blockquote标签，表示一个长引用（块引用）
sup标签,上标
sub标签,下标
del标签，表示一个删除的内容，多个划掉的线
insert标签，表示一个插入的内容，多个下划线
pre标签，预格式标签，会将代码中的格式保留下来
code标签，格式不会保留，可以pre,code一起使用<pre><code></code></pre>


##############px，%，em
em和百分比类似，相对于当前元素的字体大小来计算的
1em = 1 font-size
使用em时，当字体大小发生改变时候，em也会改变，当设置字体相关的样式时，经常会使用em
我们创建自适应页面时，经常使用百分比作为单位


颜色，rgb(red ,green ,blue) 0-255

##############字体
color
font-size
font-family： 字体1，字体2，...，下面字体分类中的一个
font-style: normal | italic(斜体)
font-weight: normal | bold
font-variant： small-caps 小写字母大写但是比较小

line-height(行高,类似单线本一行行): 大小，百分比，数值（1，字体大小已被大小）
对于单行文本，将行高设置和父元素的高度一致，可以使单行文本在父元素中垂直居中

字体分为5大类,一般会将字体的分类放在字体样式最后
衬线字体 serif
非衬线字体 sans-serif
等宽字体 monospace
草书字体 cursive
虚幻字体 fantasy

font（5个）: small-caps bold italic 60px "微软雅黑"
字体必须是最后一个，大小倒数第二个，2个必须有，其他三个顺序随便可有可无
使用行高的话，在字体大小加/行高    font: 30px/50px "微软雅黑"

text-indent(首行缩进): 2em(2个字)|32px(正值向右，负数值向左)
text-align（对齐方式）:  left(默认)，right,center,justify(2边对齐)
text-transform: 设置文本大小写
text-decoration: 设置文本删除线
letter-spacing: 字符之间的间距
word-spacing: 单词之间的间距

##############盒子模型
宽高其实设置的是内容区宽高
width:
height:

##############边框
border-width
border-color:
border-style:none|solid|dotted|dashed|double


##############边距
内边距，外边距  padding margin
margin可以设置正数或者负数
margin: auto  水平方向的maigin
margin-left|right: auto  会将外边距设置为最大值
margin: 0 auto  居中

“垂直”“相邻”的“外边距”会发生重叠，
所谓重叠指“兄弟元素”之间的相邻外边距其实是取最大值而不是求和
如果是父子元素充值边距相邻了，子元素的外边距会设置给父元素
可以用padding,border解决
##############默认样式
取消有的标签默认样式
*{margin:0,padding:0}

##############内联元素
内联元素不能支持 宽高
支持设置 水平方向 内边距
支持设置 垂直方向 内边距，但是不会影响页面布局
支持设置 边框，但是垂直方向不会影响布局，水平方向会影响布局
支持 水平方向 外边距，水平方向的相邻内边距不会重叠而是求和
不支持设置外边距

##############内联元素变成块元素,块元素变成内联元素
display:block
display:inline 
display:inline-block  行内块，一个元素既有块元素特点也有行内元素特点
display:none  隐藏元素，并且元素不会在页面继续占有位置

visibility:visible
visibility:hidden 隐藏元素，但是元素在页面继续占有位置

##############块元素，子元素大小超过父元素
如果子元素大小超过父元素内容区，则超过的大小会在父元素以外的位置显示，移除内容
父元素是默认将溢出内容，在父元素外面显示的
overflow:
--visible   默认值，不会对内容作处理
--hidden  溢出内容会被隐藏
--scroll   出现滚动条,无论内容是否溢出都会加双向滚动条
--auto  根据需要自动添加滚动条

##############文档流
文档流处在网页的最底层，表示的是一个页面中的位置
块元素
    1.块元素在文档流中会独占一行，元素自上而下排列
    2.块元素在文档流中的默认宽度是父元素的100%
    3.块元素在文档流中的默认高度被内容撑开
内联元素
    1.内联元素在文档流中只在自身的大小，默认自左向右，如果一行中容纳不了，则换行
    2.宽高都是被内容撑开

当元素宽度为auto值时，指定内边距不会影响可见框的大小，会自动修改宽度，以适应内边距



##############浮动（脱离文档流）
float:none 默认
--left 元素脱离文档流，向左侧浮动
--right 元素脱离文档流，向右侧浮动

1.当一个元素浮动后，元素立即脱离文档流，下面的元素立即向上移动
2.元素浮动以后，会尽力向左上或者向右上漂浮，直到父元素边框或者其他浮动元素
3.如果浮动元素上边是一个没有浮动的块元素，则浮动不会超过块元素
4.浮动的元素不会超过他上边的兄弟元素，最多最多一边齐
5.浮动的元素不会盖住文字，文字会自动环绕在浮动元素周围
6.宽高为auto,块元素脱离文档流以后，高度和宽度都被内容撑开
7.内联元素开启浮动后，也脱离文档流会变成块元素

##############脱离文档流 带来高度塌陷的问题
父元素高度默认是被子元素撑开的
当子元素浮动以后，子元素会完全脱离文档流，此时会导致子元素无法撑起父元素
由于父元素的高度塌陷，则父元素下面的所有元素都上移，影响了布局

解决
页面中元素都有一个隐含的属性叫做 block formatting context简称BFC，默认关闭
开启后，右如下特性
1.父元素的垂直外边距不会和子元素重叠
2.开启bfc元素不会被浮动元素所覆盖、
3.开启bfc元素可以包含浮动的子元素

如何开启（父元素）
1.设置元素浮动
    -- 虽然这种方式开启可以撑开父元素，会导致父元素宽度丢失，而且也会导致下边的元素上移
2.设置元素绝对定位
3.设置元素为inline-block
 -- 虽然这种方式开启可以撑开父元素，会导致父元素宽度丢失，不会导致下边的元素上移
4.将元素的overflow设置一个非visible值*******推荐*******
overflow:auto;zoom:1(兼容ie6)
overflow:hidden;zoom:1(兼容ie6)
    /**ie6下不支持BFC**/
    *ie6下没有BFC,但是有换个类似的隐藏属性hasLayout
    zoom:1  (ie8以下都有)
    /*zoom表示放大的意思，后面跟着一个数值，写几就将元素放大几倍
    zoom:1  表示不放大元素，但是可以开启hasLayout
    */
5.可以直接在高度塌陷的父元素最后，
    加一个空白div,这个div（对其清除浮动）没有浮动可以撑开父元素高
    但是会添加多余的结构
6.  .clearfix:after{content:"",display:block,clear:both}*******最推荐*******
    .clearfix{zoom:1}兼容ie6


############## 清除浮动
clear
加入box1受到浮动影响，box2整体上移了，
我们有时候要清除掉其他元素浮动对当前元素产生的影响，这时使用clear
clear可以清除其他浮动元素对当前元素的影响
clear: none 默认
       left 清楚左侧浮动对他的影响
       right 清楚右侧浮动对他的影响
       both 清楚两侧浮动对他的影响，清楚对他影响最大的
       
box2{clear:both} box2会回到其他元素浮动之前的位置

############## 定位
position:static 默认值，没有定位
    --absolute  绝对定位
    --relative  相对定位
    --fixed     固定定位
/*left,right,top,bottom四个属性来设置元素的偏移量*/   
--relative，
1.设置相对定位后，需要设置偏移量才会移动
2.相对于元素原来的位置定位（自身）
3.相对定位不会脱离文档流（元素原来位置还空着）
4.定位元素会提升一个层级
5.相对元素不会改变元素性质，块还是块，内联还是内联

--absolute
1.开启绝对定位，会使元素脱离文档流（下面的元素会上来）
2.如果不设置偏移量，元素的位置不会发生变化
3.绝对定位是相对于离他最近的开启定位的祖先元素进行定位的（一般情况，开启子元素绝对定位都会开启父元素相对定位），如果都没有，则相对于浏览器窗口进行定位
4.绝对定位会使元素提升一个层级
5.绝对定位会改变元素性值，内联元素变成块元素，块元素的宽度和高度默认都被内容撑开

--fixed（ie6不支持）
1.开启固定定位，会使元素脱离文档流（下面的元素会上来）
2.固定定位也是一种绝对定位，大部分特点和觉得定位一样
不同的是，固定定位永远都是相对于浏览器窗口进行定位的，不会随滚动条滚动而滚动

如果定位元素层级是一样，则下边的元素会盖住上边的
############## z-index
如果定位元素层级是一样，则下边的元素会盖住上边的
没有开启定位的元素不能使用z-index
父元素层级再高，也不会盖住子元素

############## opacity设置透明度 （ie8以下不支持）
opacity: 0 - 1  
filter:alpha(opacity=50) 0-100 (ie8以下,ie6也是支持的，ieTest测不出来)

############## background
background-image:url(相对路径) 
    1.如果图片大于容器，默认显示左上角的图片
    2.如果背景图片小于容器，图片会重复平铺
    3.可以同时设置背景颜色和背景图片，颜色会作为背景图片的底色，一般情况下设置背景图片会设置一个背景颜色
    
background-repeat:
    repeat 默认的，双向平铺
    no-repeat 背景图片不会重叠
    repeat-x: 背景图片沿水平方向
    repeat-y: 背景图片沿垂直方向
    
background-position:
   可能的值 top right left bottom center 选择2个，如果只有一个，第二个默认是center
    也可以指定两个偏移量，一个是水平偏移量 另一个是垂直偏移量

background-attachment:设置背景图片是否随页面滚动
    scroll 默认值，背景图片随着窗口滚动
    fixed 背景图片会固定，不随着滚动而滚动
 当background-attachment设置为fixed时，背景图片的定位永远相对于浏览器的窗口  ，不随窗口滚动，一般设置给body,不设置给其他元素

.btn:link{
display: block;
width:
height:
background-image:url(相对路径)
 background-repeat:}
 
 .btn:hover{
background-image:url(相对路径)}

 .btn:active{
background-image:url(相对路径)}

做完功能后发现，第一次切换图片时，会发现图片有一个非常快的闪烁，这会造成一次不佳的用户体验
产生的原因，背景图片以外部资源的形式加载进网页的。浏览器每加载一个外部资源，就需要单独发送一次请求
解决的方法，精灵图

 .btn:hover{
background-position:-xpx 0px}

 .btn:active{
background-image:-xpx 0px}

简写：background： 没有数量要求，没有顺序要求


############## 表格
thead tbody tfoot th tr td
thead 永远会显示在表格的头部
tfoot 永远会显示在表格的底部

使用子类选择器 table>tr  找不到tr
原因 如果表格中没有写tbody,浏览器会自动将内容添加tbody,把内容放进tbody中，所以tr不是table的子元素，需要用tbody>tr

############## 表格 结局父子相邻垂直外边距
子元素和父元素相邻的垂直外边距会发生重叠，子元素的外边距会传递给父元素
空的div不能隔离，空的table可以隔开

clearfix:before{content:"",display:table}

############## .clearfix 解决父子元素外边距重叠，解决父元素高度塌陷
.clearfix:before{content:"";display:table;}
.clearfix:after{content:"";display:block;clear:both}
合二为一
.clearfix:before,:after{content:"";display:table;clear:both}
.clearfix{zoom:1}

############## 表单
optgroup对select进行分组
<select>
    <optgroup label="女明星">
        <option />
        <option />
    </optgroup>
    <optgroup label="男明星">
        <option />
        <option />
    </optgroup>
</select>

fieldset可以用legend指定组名
<fieldset>
    <legend></legend>
</fieldset>

############## 框架集和内联框架
框架集可以同时引入多个页面，但是内联框架只能引入一个
h5标准中，推荐使用框架集，而不使用内联框架
使用frameset来创建一个框架集，frameset不能和body出现在同一个页面中

frameset和iframe一样，它里面的内容不会被搜索引擎所检索，如果搜索引擎检索到一个框架页的话，是不会判断里面的内容的
使用框架集不能有自己的内容，只能引入其他的页面
加载几个页面就要请求几次

frameset和iframe一样都不推荐，一定要用建议frameset

rows,一行一行的排列
cols,一列一列的排列
<frameset rows=""50%,50%>
    <frame src="1.html"></frame>
    <frame src="2.html"></frame>
</frameset>
<frameset rows=""30%,*,30%>

############## ie6 png的修复 
ie6中png24支持度不高，背景会有个灰色
解决方案，
1.可以使用png8代替png24,但是清晰度有下降
2.使用js来解决问题，需要向页面引入的一个js,DD_belatedPNG_0.0.8a-min.js
DD_belatedPNG.fix("div,img")
<!--[if IE 6]>
	<script src="js/DD_belatedPNG_0.0.8a-min.js"></script>
	<script type="text/javascript">DD_belatedPNG.fix('img');</script>
<![endif]-->
############## 条件 hack
<!--[if IE]>            (IE10以上已经不支持了)
<![endif]-->

<!--[if IE 6]>
<![endif]-->

<!--[if lt IE 9]>
<![endif]-->
<!--[if lte IE 9]>
<![endif]-->

<!--[if gt IE 8]>
<![endif]-->

<!--[if IE !6]>
<![endif]-->

############## 属性hack
_,*
.main{
_background_color:yellow    该样式只有ie6及以下的浏览器才可以识别
*background_color:yellow    该样式只有ie7及以下的浏览器才可以识别
background_color:yellow\0   该样式只有ie8及以上的浏览器才可以识别
}

############## 选择器hack
在选择器前面添加& html 只有ie6识别
* html body{background_color:yellow}

############## ie6 表单里面内容多了，表单跑了
解决 _background-attachment:fixed

############## ie6，ie7 text-indent设置文字首行缩进，但是却影响了按钮缩进（多个按钮，影响了最后一个）
解决 _margin-left:1rem

############## ie6 双倍边距bug
ie6中，一个元素向左浮动的元素设置左外边距
或者一个向右的元素设置向右外边距时
这个外边距会是设置的值的2倍
解决
添加一个样式来解决，display:inline(对于块元素设置这个没有任何意义，但是可以解决ie6双倍边距问题)

############## 圣杯布局
浮动，搭建完整的布局框架
margin 为赋值：调整旁边两列的位置（使得三列布局到一行）
使用padding,空出边上两列的宽度
使用相对定位调整旁边两列的位置（使得两列位置调整到两头）

############## 圣杯布局