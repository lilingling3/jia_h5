<template>
    <div id="station"   class="map" style="height: 400px;">q1232121243444444444444444
    </div>
</template>
<script>
    import mapLoader  from '../../assets/js/aMap.js'
    export default{
        name:"map",
        created:function(){
            console.log("testReady");
            this.ready();
        },
        methods: {
            ready() {
                var self = this;
                console.log("qqqqqqqqqqqqqq+++",self.$el);
                mapLoader('bfe31f4e0fb231d29e1d3ce951e2c780').then(AMap => {
                    self.map = new AMap.Map(self.$el, {
                    resizeEnable: true,
                    zoom: 12,
                })

                self.map.on('click', function (e) {
                    console.log("qqqqqqqqqqqq");
                    self.$dispatch('map-click', e)

                    if (!self.marker) {
                        self.marker = new AMap.Marker({ map: self.map })
                    }

                    self.marker.setPosition([e.lnglat.getLng(), e.lnglat.getLat()])
                })

                self.$nextTick(function () {
                    self.$dispatch('ready', self.map)
                })
            })
            }
        }
    }

</script>
<style rel="stylesheet/less" lang="less">
</style>