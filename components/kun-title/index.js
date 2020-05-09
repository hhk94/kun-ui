import Title from "./kun-title.vue";

Title.install = (Vue)=>{
Vue.component(Title.name,Title)
}

export default Title;