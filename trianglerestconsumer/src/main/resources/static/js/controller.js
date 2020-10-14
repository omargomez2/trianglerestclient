$(document).ready(function() {                              
	$('#add_btn').click(function(a){
		event.preventDefault();
		var formdata = $('#form').serializeArray();
		var dd = {};
        $(formdata).each(function(index, obj){
        	dd[obj.name] = obj.value;
        });
        if ( (dd['sidea'] != '') && (dd['sideb'] != '') && (dd['sidec'] != '') ){
        	$.ajax({
        		cache: false,
        		url:'http://localhost:8080/triangle/set',
        		type: "POST",
        		data: JSON.stringify(dd),
        		contentType:'application/json; charset=utf-8',
        		success: function(data){
        			console.log(data);
        			$('.type').text(data.type);
        			$('.perimeter').text(data.perimeter);
        		},
        		error: function(xhr, resp, text){
        			console.log(xhr, resp, text);
           		}
        	})  
        }
	})               
});