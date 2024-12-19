<template>
<div class="OrgChart">
    <fg-input
        class="col-3 mx-auto"
        type="range"
        min="0.1"
        max="2"
        step="0.1"
        :value="zoomLevel"
        v-model="zoomLevel"
        label="Zoom Level"
        @input="updateZoom"
    ></fg-input>
    <div ref="chartContainer"></div>
</div>
</template>

<script>
import TreeChart from 'd3-org-chart';

export default {
    name: 'OrgChart',
    props: {
        chartData: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {
            chartReference: null,
            zoomLevel: '0.5'
        }
    },
    watch: {
        chartData(value) {
            this.renderChart(value)
        }
    },
    methods: {
        renderChart(chartData) {
            // Overriding the mouse scroll/zoom functionaity in the original class object.
            TreeChart.prototype.zoomed = () => {};
            if (!this.chartReference) {
                this.chartReference = new TreeChart();
                this.chartReference
                    .container(this.$refs.chartContainer)
                    .data(chartData)
                    .svgWidth(5000)
                    .initialZoom(parseFloat(this.zoomLevel))
                    .onNodeClick(d => console.log(this.chartData.find(x => x.nodeId === d)))
                    .render();
            }
            this.chartReference.container().firstChild.removeAttribute('cursor');
        },
        updateZoom() {
            this.chartReference.setZoomFactor(parseFloat(this.zoomLevel));
        }
    }
}
</script>

<style lang="scss" scoped>
.OrgChart {
    display: block;
}
</style>