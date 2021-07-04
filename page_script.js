var all_data;
$(document).ready(function(){
	//get api call
	$.get("https://rickandmortyapi.com/api/character",

	  function(data, status){
		all_data=data;
		var color;
		//change color depending on status
		for ( i=0;i< data["results"].length;i++) {
			if(data["results"][i]["status"]=="Alive")
				color="green";
			else if(data["results"][i]["status"]=="Dead")
				color="red";
			else
				color="grey";
				
		
			string='<td>'+
					'<div  class=" character " onclick="modal('+i+');">'+
						'<img class="img" src='+ data["results"][i]["image"] +' />'+
						'<span class="char_name"><b>'+data["results"][i]["name"]+'</b></span>'+
						'<span class="dot" style="background-color:'+ color+'" ><span class="char_status">'+data["results"][i]["status"]+'-'+ data["results"][i]["species"]+'</span></span>'+
						//'<span class="char_status">asdasd</span>'+
					'</div>'+
					'</td>';

		$("#list_of_chars").append(string);

		}
	
	});
});

function modal(i){
	
	//change color depending on status
	if(all_data["results"][i]["status"]=="Alive")
			color="green";
		else if(all_data["results"][i]["status"]=="Dead")
			color="red";
		else
			color="grey";
	
	//change icon depending on gender
	var gender="fa fa-mars";
	if(all_data["results"][i]["gender"]=="Female")
		gender="fa fa-venus";
	
		
		modal2='<div id="myModal" class="modal">'+
					'<div class="modal_image">'+
						'<span class="close" onclick="close_modal();">&times;</span>'+
						'<img class="img_modal" src='+all_data["results"][i]["image"]+'  />'+
						'<div style="text-align: center;">'+
							'<span class="char_name_modal"><b>'+all_data["results"][i]["name"]+'</b></span>'+

							'<span class="dot_modal"style="background-color:'+ color+'"><span class="char_status_modal">'+all_data["results"][i]["status"]+'-'+ all_data["results"][i]["species"]+'</span></span>'+
						'</div>'+

					'</div>'+
					'<div class="modal-content">'+
						'<div >'+
							'<p style="display: inline-block" >Gender :        <i class="'+ gender+'" ></i> '+all_data["results"][i]["gender"] + ' </p>'+
						'</div>'+

						'<p>Last seen location :'+ all_data["results"][i]["origin"]["name"]+ '</p>'+
						'<p>Number of episodes appeared:'+all_data["results"][i]["episode"].length + '</p>'+
					'</div>'+

				'</div>';
	$('#modal_place').append(modal2);

}
function close_modal(){
	$('#modal_place').html("");
}
