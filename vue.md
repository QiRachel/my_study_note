vue 作为mvvm模式的实现库的2种技术
a.模板解析
b.数据绑定
创建了2个对象，observer,compile
observer监视/劫持data中所有层次的属性
    -还为所有属性创建dep对象
compile编译模板

state
view
action

mutation
actions
state
getters


######vue
mvvm
--model 模型，数据对象
--view  视图，模板页面
--viewmodel 视图模型（views实例）


v-model=""
v-text=""
v-html=""

强制绑定
v-bind:src=""
:src=""

绑定监听
v-on:click="add"
@click="add"

#####计算属性
初始化时执行
相关属性变化时执行
computed：{
    value1(){
        return
    }
}
计算属性存在缓存，多次执行只调用一次getter计算

#####计算属性之get set
computed：{
    value1:{
        get(){},
        set(value){}
    }
}

#####监视属性
watch:{
    value1(val){
        return
    }
}

#####class绑定
:class=
字符串 :class="a"
对象 :class="{cClass:true,bClass:true}"
数组 :class="['cClass']"


#####style绑定
:style=
:style="{color:actColor,fontSize:fontSize}"


#####条件渲染
v-if=""
v-else

v-show 展示和隐藏，dom存在

#####列表渲染
v-for="item in items"
v-for="(item, index) in items"

#####数组更新检测(列表渲染-数组更新检测)
data:{
    persons:[
            {},
            {},
            {},
            ]
}
vue本身监视了persons的改变。没有监视数据内部的改变.
persons[1] = 'x' // 不是响应性的
可以使用变异方法 (mutation method)
persons.splice(indexOfItem, 1, newValue)
push()
pop()
shift()
unshift()
splice()
sort()
reverse()

#####事件
绑定事件
@click="fun1()" 方法里面可以直接使用event
传参
@click="fun1(val,$event)"

@click.stop="fun1()" 停止事件冒泡
@click.prevent="fun1()" 阻止事件默认行为

@keyup.enter="fun1()"   enter键
@keyup.space="fun1()"

#####表单  v-model数据双向绑定
v-model=""


#####生命周期
常用的 created mounted
beforeDestroy   做收尾工作，清楚定时器等

create  内存
mount   页面

#####   vue 动画 6 个 class 切换
<transition name="fade">
    <p v-if="show">hello</p>
</transition>

##### 过滤器
{{ message | capitalize }}
<div v-bind:id="rawId | formatId"></div>

创建 Vue 实例之前全局定义过滤器
Vue.filter(capitalize,function(value){})

##### ref
为某个元素注册一个唯一标识，vue对象通过$els属性访问这个元素对象
<p ref="cont">aaa</p>

this.$refs.cont.textContent

##### v-cloak 防止闪现
[v-cloak]{display:none}
<p v-cloak>{{msg}}</p>

#####注册自定义指令
<input v-my-directive>
全局
Vue.directive('my-directive',function(el,value){})
局部
'my-directive':function(){}


#####vuex
多组件共享状态进行集中式管理
