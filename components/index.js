import KButton from "./kun-button"
import KTitle from "./kun-title"
import { KGrid,KGridItem,KBadge } from "./kun-grid";
import Vue from 'vue'
import "./index.scss"
const components = [
	KButton,
	KTitle,
	KGrid,
	KGridItem,
	KBadge
]
//vue。use使用时，必须要有install方法。参数就是vue。
const install  = (Vue)=>{
	console.log('install')
	for(var key in components){
		Vue.component(components[key].name,components[key])
		console.log(components[key].name)
	}
}


export default {
	install,	
	KButton,
	KTitle,
	KGrid,
	KGridItem,
	KBadge
}