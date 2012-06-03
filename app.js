var url = 'http://a.tiles.mapbox.com/v3/occupy.map-ju047r1d.jsonp';
var mm = com.modestmaps;

wax.tilejson(url, function(tilejson) {
    var map = new mm.Map('interact', new wax.mm.connector(tilejson));
    map.setCenterZoom({ lat:40.7002, lon:-73.9047}, 13);
    map.parent.style.background = 'rgb(123,81,217)';
    var legend = wax.mm.legend(map, tilejson).appendTo(map.parent);
    $(".wrapper").css("background","rgb(123,81,217)");
    $(".wax-legend.my-legend").css("background","rgb(123,81,217)");
    wax.mm.interaction()
    .map(map)
    .tilejson(tilejson)
    .on(wax.tooltip()
        .animate(true)
        .parent(map.parent)
        .events()
    );
});


var url2 = 'http://a.tiles.mapbox.com/v3/occupy.map-yn11enuh.jsonp';
var mm = com.modestmaps;

wax.tilejson(url2, function(tilejson) {
    var map2 = new mm.Map('interact2', new wax.mm.connector(tilejson));
    map2.setCenterZoom({ lat:40.7002, lon:-73.9047}, 13);
    map2.parent.style.background = 'rgb(123,81,217)';
    var legend = wax.mm.legend(map2, tilejson).appendTo(map2.parent);
    $(".wrapper").css("background","rgb(123,81,217)");
    $(".wax-legend.my-legend").css("background","rgb(123,81,217)");
    wax.mm.interaction()
    .map(map2)
    .tilejson(tilejson)
    .on(wax.tooltip()
        .animate(true)
        .parent(map2.parent)
        .events()
    );
});

