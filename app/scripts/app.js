import $ from 'jquery';
import slick from "slick-carousel";
import WOW from "wowjs";

$(() => {
  const wow = new WOW.WOW({
		live: false,
		boxClass: "wow",
	});

	wow.init();

    $('.slider__slider').slick({
        infinite: true, 
        slidesToShow: 1, 
        slidesToScroll: 1,
        prevArrow: $('.slider__wrap__button-prev'),
        nextArrow: $('.slider__wrap__button-next'),
    });
    
    let dataIndex = 0;

    $.getJSON('https://podruzhka.woman.ru/get_users/',function(data){
        $(".slider__user__name").html(data[dataIndex].user_name);
        $(".slider__user__quest").html(data[dataIndex].user_quest);
        $(".slider__user__photo").html(`<img src="${data[dataIndex].user_photo}" />`);
        $(".slider__expert__name").html(data[dataIndex].expert_name);
        $(".slider__expert__title").html(data[dataIndex].expert_title);
        $(".slider__expert__answer").html(data[dataIndex].expert_answer);
    });

    $(".slider__wrap__button-prev").on("click", function () {
        dataIndex = dataIndex-1;
        if (dataIndex < 0){
            dataIndex = 16;
        }
        $.getJSON('https://podruzhka.woman.ru/get_users/',function(data){
            $(".slider__user__name").html(data[dataIndex].user_name);
            $(".slider__user__quest").html(data[dataIndex].user_quest);
            $(".slider__user__photo").html(`<img src="${data[dataIndex].user_photo}" />`);
            $(".slider__expert__name").html(data[dataIndex].expert_name);
            $(".slider__expert__title").html(data[dataIndex].expert_title);
            $(".slider__expert__answer").html(data[dataIndex].expert_answer);
        });
    });

    $( ".slider__wrap__button-next" ).on( "click", function() {
        dataIndex++;
        $.getJSON('https://podruzhka.woman.ru/get_users/',function(data){
            $(".slider__user__name").html(data[dataIndex].user_name);
            $(".slider__user__quest").html(data[dataIndex].user_quest);
            $(".slider__user__photo").html(`<img src="${data[dataIndex].user_photo}" />`);
            $(".slider__expert__name").html(data[dataIndex].expert_name);
            $(".slider__expert__title").html(data[dataIndex].expert_header);
            $(".slider__expert__answer").html(data[dataIndex].expert_answer);
        });
    });

    if (dataIndex < 0){
        dataIndex = 16;
    }

});
