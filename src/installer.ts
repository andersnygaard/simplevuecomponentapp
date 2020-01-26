import PageCard from "./components/PageCard.vue";

// declare install function executed by Vue.use()
export function install(Vue:any):void {
	Vue.component("PageCard", PageCard);
}

// create module definition for Vue.use()
const plugin: any = {
	install,
};

// to allow use as module (npm/webpack/etc.) export component
export default component;