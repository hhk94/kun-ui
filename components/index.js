import KButton from "./kun-button"
import KTitle from "./kun-title"
import "./index.scss"
const components = [
	KButton,
	KTitle
	
]
//vue。use使用时，必须要有install方法。参数就是vue。
const install  = (Vue)=>{
  for(var key in components){
	  Vue.component(components[key].name,components[key])
  }
}


export default {
	install,
	KButton,
	KTitle
}