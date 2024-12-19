<template>
  <div class="Structure">
    <OrgChart :chartData="chartData" />
  </div>
</template>

<script>
import mockData from '@/mockData';
import OrgChart from '@/components/FunctionalMenu/OrgChart';

export default {
  name: 'Structure',
  components: {
    OrgChart
  },
  data() {
    return {
      chartData: []
    }
  },
  mounted() {
    this.chartData = mockData.getAll('treeChartData').map(d=> {
        const width = Math.round(Math.random()*50+300);
        const height = Math.round(Math.random()*20+130);
        const cornerShape = ['ORIGINAL','ROUNDED','CIRCLE'][Math.round(Math.random()*2)];
        const nodeImageWidth = 100;
        const nodeImageHeight = 100;
        const centerTopDistance = 0;
        const centerLeftDistance = 0;
        const expanded = true;
        return {
          nodeId: d.id,
          parentNodeId: d.parentId,
          width: width,
          height: height,
          borderWidth: 1,
          borderRadius: 10, 
          borderColor:{
              red: 0,
              green: 0,
              blue: 0,
              alpha: 1,
          },
          backgroundColor:{
            red: 49,
            green: 87,
            blue: 163,
            alpha: 1,
          },
          nodeImage:{
            url: d.imageUrl,
            width: nodeImageWidth,
            height: nodeImageHeight,
            centerTopDistance: centerTopDistance,
            centerLeftDistance: centerLeftDistance,
            cornerShape: cornerShape,
            shadow: false,
            borderWidth: 0,
            borderColor:{
              red: 19,
              green: 123,
              blue: 128,
              alpha: 1,
            },
          },    
          template:`<div>           
                        <div style="margin-top:10px;
                                    font-size:40px;
                                    font-weight:bold;
                               ">${d.name} </div>
                    </div>`,
          connectorLineColor:{
            red: 0,
            green: 0,
            blue: 0,
            alpha: 1
          },
          connectorLineWidth: 5,
          dashArray: '',
          expanded: expanded
        } 
    });
  }
}
</script>

<style lang="scss" scoped>


</style>