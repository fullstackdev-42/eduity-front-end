import {Radio, Checkbox, FgInput, Button, Dropdown, Card, TimeLine, TimeLineItem, Badge, Collapse, CollapseItem, Tabs, Modal, StatsCard} from 'src/components/UIComponents';
import LineChart from '../src/components/UIComponents/Charts/LineChart.js';
import BarChart from '../src/components/UIComponents/Charts/BarChart.js';
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
import { ValidationProvider } from "vee-validate";
import { ValidationObserver } from "vee-validate";
/**
 * You can register global components here and use them as a plugin in your main Vue instance
 * Ideally, only small components that are re-used many times across your application should be registered here.
 * For plugins and bigger components local registration is preferable because it will allow you to do code splitting easier :)
 */

const GlobalComponents = {
  install (Vue) {
    Vue.component(FgInput.name, FgInput)
    Vue.component(Dropdown.name, Dropdown)
    Vue.component(Checkbox.name, Checkbox)
    Vue.component(Radio.name, Radio)
    Vue.component(Button.name, Button)
    Vue.component(Card.name, Card)
    Vue.component(StatsCard.name, StatsCard)
    Vue.component(LineChart.name, LineChart)
    Vue.component(BarChart.name, BarChart)
    Vue.component(TimeLine.name, TimeLine)
    Vue.component(Badge.name, Badge)
    Vue.component(TimeLineItem.name, TimeLineItem)
    Vue.component(CollapseTransition.name, CollapseTransition)
    Vue.component(Collapse.name, Collapse)
    Vue.component(CollapseItem.name, CollapseItem)
    Vue.component(Tabs.name, Tabs)
    Vue.component(Modal.name, Modal)
    Vue.component("ValidationProvider", ValidationProvider);
    Vue.component("ValidationObserver", ValidationObserver);
  }
}

export default GlobalComponents
