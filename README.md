# kun-ui

#### 介绍
基于uniapp，开发通用移动端ui框架

#### 软件架构
软件架构说明


#### 使用说明

##### 1.web使用

+ 1.全局调用，在main.js中
	
```javascript
import KunUI from "./components"
Vue.use(KunUI);
```

##### 2.uniapp开发小程序使用
+ 1.具体调用页面
```javascript
import kButton from '../../components/kun-button/kun-button.vue'
import KTitle from '../../components/kun-title/kun-title.vue'
export default {
	components:{
		kButton,
		KTitle
	}
}
```
+ 2.main.js引用样式
```javascript
// #ifdef MP
import './components/index.scss'
// #endif

```
#### 参与贡献

1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request


