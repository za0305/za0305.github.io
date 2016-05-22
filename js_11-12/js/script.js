

$(function(){

	var html = $('#item_tmpl').html();
	
	var  dataObject = {
    members:[
  	{
  		name:"Иванов Иван Иванович",
  		photo:"img/member.png", 
  		profession:"Студент заборостроительного университета",
  		reason:"Хочу учить фронтенд, потому,что:",
		cause1:"Заборы строить не интересно",
		cause2:"Платят мало",
		cause3:"Приходиться работать по ночам",
		contact:"Мой контактный телефон",
		phone:"+380222222222",
		vk:"Мой профиль в контакте",
		link:"Vk.com",
		action:"Мой фидбек:",
		feedback:"Если нужно, могу построить вам забор"

  	}]
  	
  	};


  var results = document.getElementById("results");

	results.innerHTML = tmpl("item_tmpl", dataObject);
     

});


$(function(){
$('.button_show').on('click', function() {

	$('#results').animate({
		opacity: '1',
	}, 1000);
});
});