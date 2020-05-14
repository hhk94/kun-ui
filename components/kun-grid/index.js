import KGrid from "./kun-grid/kun-grid.vue";
import KGridItem from "./kun-grid-item/kun-grid-item.vue";
import KBadge from "./kun-badge/kun-badge.vue";

KGrid.install = (Vue)=>{
Vue.component(KGrid.name,KGrid)
}
KGridItem.install = (Vue)=>{
Vue.component(KGridItem.name,KGridItem)
}
KBadge.install = (Vue)=>{
Vue.component(KBadge.name,KBadge)
}

export {
	KGrid,
	KGridItem,
	KBadge
};