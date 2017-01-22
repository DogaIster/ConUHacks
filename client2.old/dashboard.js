$(window).ready(function() {
  $.getJSON("http://172.31.192.36:3000/getData", function(response) {
    for(var i = 0 ; i < response.length ; i++) {

      $("#dashboard-table").append(
        "<tr><td>"+response[i].alias+"</td><td>"+response[i].ip+"</td><td>"+response[i].status+"</td><td>"+response[i].last_restart+"</td><td>"+response[i].last_restart+"</td><td>"+response[i].last_restart+"</td></tr>"
      );

	var data = {};
	var up = [];
	response.forEach(function(e) {
	    up.push(e.uptime);
	    data[e.uptime] = e.number;
	})

	var chart = c3.generate({
		size:{
			height: 400,
			width: 800
		},
		bindto: '#dashboard-charts',
	    data: {
	        columns:[
	            ['data1', 1, 2, 3, 4, 2, 10, 1],
	            ['data2', 5,783,43678,4572432,1, 12, 4]
	        ],
	        keys: {
	            value: up
	        },
	        type:'bar',

	    },
	    grid:{
	    	x: {
	    		show: true
	    	},
	    	y: {
	    		show: true
	    	},
	    	focus: {
	    		show: true
	    	},
	    	color: {
	    		pattern: ['#4285F4', '#7CBB00']
	    	},
	    },
	    axis:{
	    	x: {
	    		show: true,
	    		label: {
	    			text: 'uptime',
	    			position: 'outer-right'
	    		}
	    	},
	    	y: {
	    		show: true,
	    		label: {
	    			text: 'last restart',
	    			position: 'outer-top'
	    		}
	    	}
	    },
	    zoom: {
	    	enabled: true
	    },
	    legend: {
	    	show: true
	    }
	});
    }
  });
});


