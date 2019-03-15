$(document).ready(function(){
	$('#send').on('click',function(){
		for (var i = 0; i < $('.form__input').length; i++) {
				if($.trim($('.form__input').eq(i).val()).length===0){
					$('.form__input').eq(i).parent().addClass('form__required');
					$('.form__input').eq(i).addClass('form__input-required');
				}
				else {
					$('.form__input').eq(i).parent().removeClass('form__required');
					$('.form__input').eq(i).removeClass('form__input-required');	
				}
		}
	})
	$('.form__input').eq(0).on('keydown',function (e){

				if(e.keyCode==13) {
					if($.trim($(this).val()).length===0){
						$(this).parent().addClass('form__required');
						$(this).addClass('form__input-required');
					}
					$('.form__input').eq(1).focus();
				}
	});
		$('.form__input').eq(1).on('keydown',function (e){
			if(e.keyCode==13) {
				if($.trim($(this).val()).length===0){
					$(this).parent().addClass('form__required');
					$(this).addClass('form__input-required');
				}
				$('.form__input').eq(2).focus();
			}
		});
			$('.form__input').eq(2).on('keydown',function (e){

		if(e.keyCode==13) {
			if($.trim($(this).val()).length===0){
				$(this).parent().addClass('form__required');
				$(this).addClass('form__input-required');
			}
			$('.form__input').eq(3).focus();
		}
	});
					$('.form__input').eq(3).on('keydown',function (e){

		if(e.keyCode==13) {
					if($.trim($(this).val()).length===0){
			$(this).parent().addClass('form__required');
			$(this).addClass('form__input-required');
		}
		}
	});		

});

ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map('map', {
        center: [55.753994, 37.622093],
        zoom: 9
    });
    $('#send').on('click',function(){
    	if($.trim($('.form__input').eq(0).val()).length>0 && $.trim($('.form__input').eq(1).val()).length>0 && $.trim($('.form__input').eq(2).val()).length>0 && $.trim($('.form__input').eq(3).val()).length>0){


    var m=$('.form__input').eq(0).val()+','+$('.form__input').eq(1).val()+','+$('.form__input').eq(2).val();
    ymaps.geocode(m, {
        results: 1
    }).then(function (res) {
            var firstGeoObject = res.geoObjects.get(0),
                coords = firstGeoObject.geometry.getCoordinates();
$.ajax({
    url: 'https://geocode-maps.yandex.ru/1.x/?apikey=971036b8-a41e-406a-88b3-92bd9cb252fd&format=json&geocode='+coords[1]+','+coords[0]+'',             // указываем URL и
    dataType : "json",                    
    success: function (data, textStatus) {
            $.each(data, function(i, val) { 
	            var area1 = val.GeoObjectCollection.featureMember[2].GeoObject.name;
	            var area2 = val.GeoObjectCollection.featureMember[3].GeoObject.name;
	            var result = area2+', '+area1;
	        $('#result').text(result);
        });
    } 
});


        });
    }
})
}
