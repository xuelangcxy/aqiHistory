$(document).ready(function() {
    var clickMenu = $('#name_aqi');
    $('.name1').hover(
            function() {
                $(this).css({
                    'color': 'rgb(255,255,255)'
                });
                clickMenu.css({
                    'color': 'rgb(0,255,0)',
                    'font-weight': 'bold'
                })
            },
            function() {
                $(this).css({
                    'color': 'rgb(150,150,150)'
                });
                clickMenu.css({
                    'color': 'rgb(0,255,0)',
                    'font-weight': 'bold'
                })
            })
        /*$('#name_aqi').click(function() {
        	$('#name_aqi').html("<AQI>");
        	$('#name_pm10').html("PM10");
        	$('#name_pm25').html("PM2.5");
        	$('#name_no2').html("NO2");
        	$('#name_o3').html("O3");
        	$('#name_so2').html("SO2");
        	$('#name_co').html("CO");
        })
        $('#name_pm10').click(function() {
        	$('#name_aqi').html("AQI");
        	$('#name_pm10').html("< PM10 >");
        	$('#name_pm25').html("PM2.5");
        	$('#name_no2').html("NO2");
        	$('#name_o3').html("O3");
        	$('#name_so2').html("SO2");
        	$('#name_co').html("CO");
        })
        $('#name_pm25').click(function() {
        	$('#name_aqi').html("AQI");
        	$('#name_pm10').html("PM10");
        	$('#name_pm25').html("< PM2.5 >");
        	$('#name_no2').html("NO2");
        	$('#name_o3').html("O3");
        	$('#name_so2').html("SO2");
        	$('#name_co').html("CO");
        })
        $('#name_no2').click(function() {
        	$('#name_aqi').html("AQI");
        	$('#name_pm10').html("PM10");
        	$('#name_pm25').html("PM2.5");
        	$('#name_no2').html("< NO2 >");
        	$('#name_o3').html("O3");
        	$('#name_so2').html("SO2");
        	$('#name_co').html("CO");
        })
        $('#name_o3').click(function() {
        	$('#name_aqi').html("AQI");
        	$('#name_pm10').html("PM10");
        	$('#name_pm25').html("PM2.5");
        	$('#name_no2').html("NO2");
        	$('#name_o3').html("< O3 >");
        	$('#name_so2').html("SO2");
        	$('#name_co').html("CO");
        })
        $('#name_so2').click(function() {
        	$('#name_aqi').html("AQI");
        	$('#name_pm10').html("PM10");
        	$('#name_pm25').html("PM2.5");
        	$('#name_no2').html("NO2");
        	$('#name_o3').html("O3");
        	$('#name_so2').html("< SO2 >");
        	$('#name_co').html("CO");
        })
        $('#name_co').click(function() {
        	$('#name_aqi').html("AQI");
        	$('#name_pm10').html("PM10");
        	$('#name_pm25').html("PM2.5");
        	$('#name_no2').html("NO2");
        	$('#name_o3').html("O3");
        	$('#name_so2').html("SO2");
        	$('#name_co').html("< CO >");
        })*/

    $('#name_aqi').css({
        'color': 'rgb(0,255,0)',
        'font-weight': 'bold'
    });
    $('#name_aqi').click(function(event) {
        clickMenu = $('#name_aqi');
        $('.name1').css({
            'color': 'rgb(150,150,150)'
        });
        clickMenu.css({
            'color': 'rgb(0,255,0)',
            'font-weight': 'bold'
        })
    });
    $('#name_pm10').click(function(event) {
        clickMenu = $('#name_pm10');
        $('.name1').css({
            'color': 'rgb(150,150,150)'
        });
        clickMenu.css({
            'color': 'rgb(0,255,0)',
            'font-weight': 'bold'
        })
    });
    $('#name_pm25').click(function(event) {
        clickMenu = $('#name_pm25');
        $('.name1').css({
            'color': 'rgb(150,150,150)'
        });
        clickMenu.css({
            'color': 'rgb(0,255,0)',
            'font-weight': 'bold'
        })
    });
    $('#name_no2').click(function(event) {
        clickMenu = $('#name_no2');
        $('.name1').css({
            'color': 'rgb(150,150,150)'
        });
        clickMenu.css({
            'color': 'rgb(0,255,0)',
            'font-weight': 'bold'
        })
    });
    $('#name_o3').click(function(event) {
        clickMenu = $('#name_o3');
        $('.name1').css({
            'color': 'rgb(150,150,150)'
        });
        clickMenu.css({
            'color': 'rgb(0,255,0)',
            'font-weight': 'bold'
        })
    });
    $('#name_so2').click(function(event) {
        clickMenu = $('#name_so2');
        $('.name1').css({
            'color': 'rgb(150,150,150)'
        });
        clickMenu.css({
            'color': 'rgb(0,255,0)',
            'font-weight': 'bold'
        })
    });
    $('#name_co').click(function(event) {
        clickMenu = $('#name_co');
        $('.name1').css({
            'color': 'rgb(150,150,150)'
        });
        clickMenu.css({
            'color': 'rgb(0,255,0)',
            'font-weight': 'bold'
        })
    });

    function datespace() {
        var date1 = "";
        var date2 = "";
        $.getJSON('../tmp/aqiHistory.json', function(data) {
            var re = /-[0-9]+-[0-9]+/;
            var re1 = /[0-9]+-[0-9]+/;
            var day1 = re1.exec(re.exec(data[data.length - 1].time_point));
            var k = "";
            date1 = day1[0].replace(/-/, "月");
            for (var i = 0; i < 24; i++) {
                var day = new Array();
                day[24 - i] = re1.exec(re.exec(data[data.length - 1 - i].time_point));
                var date = new Array();
                date[24 - i] = day[24 - i][0];
                if (date[24 - i] != day1[0]) {
                    k = i;
                    break;
                };
            };
            var day2 = re1.exec(re.exec(data[data.length - 1 - k].time_point));
            date2 = day2[0].replace(/-/, "月");
            $('#date1').html(date1 + "日");
            $('#date2').html(date2 + "日");
            var m = "";
            if (k <= 2) {
                m = 2
            } else if (k >= 22) {
                m = 22;
            } else {
                m = k;
            };
            /*var left = (21 - m) * 17;*/
            var left = (22 - m) * 46 + 20;
            $('.divider6').css({
                'margin-left': left + 'px'
            })
        })
    }
    datespace();
    setInterval(function() {
        datespace();
    }, 600 * 1000);

    /*$.getJSON('../tmp/aqiHistory.json', function(json, textStatus) {
    		console.log(JSON.stringify(json));
    });*/
    $.ajax({
        url: 'http://localhost:27017/nodejs-login/accounts/',
        type: 'get',
        dataType: 'json',
        jsonp: 'jsonp', // mongod is expecting the parameter name to be called "jsonp"
        success: function(data) {
            console.log('success', data);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            console.log('error', errorThrown);
        }
    })
/*$.ajax({
	url: '../tmp/aqiHistory.json',
	type: 'GET',
	dataType: 'json',
	async: true,
	success: function(data) {
		console.log('success', JSON.stringify(data[0]));
	},
	error: function(XMLHttpRequest, textStatus, errorThrown) {
		console.log('error', errorThrown);
	},
})
.done(function() {
	console.log("success");
})
.fail(function() {
	console.log("error");
})
.always(function() {
	console.log("complete");
});*/


})