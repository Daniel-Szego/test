<script>
    import {mixins, Pie} from 'vue-chartjs';

    export default {
        extends: Pie,
        mixins: [mixins.reactiveProp],
        props: {
            options: {
                type: Object,
                default: null
            }
        },
        mounted() {
            this.renderChart(this.chartData, this.options);
        },

        watch: {
            chartData() {
                console.log('chart update by watcher');
                this.$data._chart.update();
            }
        }
    }
</script>
