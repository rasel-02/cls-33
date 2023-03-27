$(function (){
    $(".products_slider").slick({
        slidesToShow:4,
        nextArrow:'<i class="fa-solid js_icon fa-chevron-left"></i>',
        prevArrow:'<i class="fa-solid js_icon fa-chevron-right"></i>'
    });

    $(".Fairness").slick({
        slidesToShow:2,
        nextArrow:'<i class="fa-solid fa-arrow-right"></i>',
        prevArrow:'<i class="fa-solid fa-arrow-left"></i>'
    });

    $(".Latest_silder").slick({
        slidesToShow:4,
        nextArrow:'<i class="fa-solid fa-chevron-left  Latest_icon"></i>',
        prevArrow:'<i class="fa-solid fa-chevron-right Latest_icon "></i>'
    });



    $('#cloc_Deals').countdown('2024/12/30', function(event) {
            var $this = $(this).html(event.strftime(''
          +" <div class'Deals_dowon'><h4>%D</h4><p>Days</p></div>"
          +" <span>:</span>"
          + "<div class'Deals_dowon'><h4>%M</h4><p>Hour</p></div>"
          + "<span>:</span>"
          + "<div class'Deals_dowon' > <h4>%M</h4><p>Minute</p></div>"
          +" <span>:</span>"
          + "<div class'Deals_dowon'><h4>%S</h4><p>Sec</p></div>"));
      });
      
})




const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))