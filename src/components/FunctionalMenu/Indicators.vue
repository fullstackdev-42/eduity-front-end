<template>
<div class="Indicators">
  <div class="d-flex flex-wrap justify-content-center align-items-center">
      <div class="col-md-6">
        <card>
          <template slot="header">
            <h4 class="card-title">Test Chart 1</h4>
            <p class="category">Bar Chart</p>
          </template>
          <bar-chart :labels="viewsChart.labels"
                    :height="250"
                    :datasets="viewsChart.datasets">
          </bar-chart>
        </card>
      </div>
      <div class="col-6">
        <card>
          <template slot="header">
            <h4 class="card-title">Test Chart 2</h4>
            <p class="category">Line Chart</p>
          </template>
          <line-chart :labels="activeUsersChart.labels"
                      :height="250"
                      :color="activeUsersChart.color"
                      :extra-options="activeUsersChart.options"
                      :data="activeUsersChart.data">
          </line-chart>
        </card>
      </div>
      <div class="col-md-6">
        <card>
          <template slot="header">
            <h4 class="card-title">Test Chart 3</h4>
            <p class="category">Multiple Bars Chart</p>
          </template>
          <bar-chart :labels="activityChart.labels"
                    :height="250"
                    :extra-options="activityChart.options"
                    :datasets="activityChart.datasets">
          </bar-chart>
        </card>
      </div>
  </div>
</div>
</template>

<script>
  const tooltipOptions = {
    tooltipFillColor: "rgba(0,0,0,0.5)",
    tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
    tooltipFontSize: 14,
    tooltipFontStyle: "normal",
    tooltipFontColor: "#fff",
    tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
    tooltipTitleFontSize: 14,
    tooltipTitleFontStyle: "bold",
    tooltipTitleFontColor: "#fff",
    tooltipYPadding: 6,
    tooltipXPadding: 6,
    tooltipCaretSize: 8,
    tooltipCornerRadius: 6,
    tooltipXOffset: 10,
  };
export default {
    name: 'Indicators',
    data() {
      return {
        activeUsersChart: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
          data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610],
          color: '#6bd098',
          options: {
            tooltips: tooltipOptions,
          }
        },
        viewsChart: {
          labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
          datasets: [
            {
              label: "Data",
              borderColor: '#fcc468',
              fill: true,
              backgroundColor: '#fcc468',
              hoverBorderColor: '#fcc468',
              borderWidth: 5,
              data: [100, 120, 80, 100, 90, 130, 110, 100, 80, 110, 130, 140, 130, 120, 130, 80, 100, 90, 120, 130],
            }
          ]
        },
        activityChart: {
          labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
          datasets: [
            {
              label: "Data",
              borderColor: '#fcc468',
              fill: true,
              backgroundColor: '#fcc468',
              hoverBorderColor: '#fcc468',
              borderWidth: 8,
              data: [100, 120, 80, 100, 90, 130, 110, 100, 80, 110, 130, 140, 130, 120, 130, 80, 100, 90, 120, 130],
            },
            {
              label: "Data",
              borderColor: '#4cbdd7',
              fill: true,
              backgroundColor: '#4cbdd7',
              hoverBorderColor: '#4cbdd7',
              borderWidth: 8,
              data: [80, 140, 50, 120, 50, 150, 60, 130, 50, 130, 150, 100, 110, 80, 140, 50, 140, 50, 110, 150],
            }
          ],
          options: {
            tooltips: tooltipOptions
          }
        },
      }
    }
}
</script>

<style>

</style>