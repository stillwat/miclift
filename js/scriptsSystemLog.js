var intervalFour;
var intervalSM;
var intervalMM;


    $('.lineTxt').on('click', function(){
        $('.lineTxt').removeClass('activeHold');
        $(this).addClass('activeHold');
    })

    $('.upBut').hover(
    function() {
        $('.joist').addClass('activeUp')
    },
    function() {
        $('.joist').removeClass('activeUp')
        $('.joist').removeClass('clickUp')
    })

    $('.leftBut').hover(
    function() {
        $('.joist').addClass('activeLeft')
    },
    function() {
        $('.joist').removeClass('activeLeft')
        $('.joist').removeClass('clickLeft')
    })    

     $('.downBut').hover(
    function() {
        $('.joist').addClass('activeDown')
    },
    function() {
        $('.joist').removeClass('activeDown')
        $('.joist').removeClass('clickDown')
    })    
 
    $('.rightBut').hover(
    function() {
        $('.joist').addClass('activeRight')
    },
    function() {
        $('.joist').removeClass('activeRight')
        $('.joist').removeClass('clickRight')
    })       

    $('.centerBut').hover(
    function() {
        $('.joist').addClass('activeCenter')
    },
    function() {
        $('.joist').removeClass('activeCenter')
        $('.joist').removeClass('activeCenter')
    })  

    $('.rightBut').mousedown(
    function() {
        $('.joist').addClass('clickRight')
        joistClick(this);
    })
    $('.rightBut').mouseup(
    function() {
        $('.joist').removeClass('clickRight')
    })

    $('.leftBut').mousedown(
    function() {
        $('.joist').addClass('clickLeft')
        joistClick(this);
    })
    $('.leftBut').mouseup(
    function() {
        $('.joist').removeClass('clickLeft')
    })

    $('.upBut').mousedown(
    function() {
        $('.joist').addClass('clickUp')
        joistClick(this);
    })
    $('.upBut').mouseup(
    function() {
        $('.joist').removeClass('clickUp')
    })

    $('.downBut').mousedown(
    function() {
        $('.joist').addClass('clickDown')
        joistClick(this);
    })
    $('.downBut').mouseup(
    function() {
        $('.joist').removeClass('clickDown')
    })

    $('.centerBut').mousedown(
    function() {
        $('.joist').addClass('clickCenter')
        joistClick(this);
    })
    $('.centerBut').mouseup(
    function() {
        $('.joist').removeClass('clickCenter')
    })

$('.lineTxt:first-child').addClass('activeHold');

function joistClick(a){

    x = 0
    if($(a).attr('id') == 'up'){
        x = 'up';
    }
    if($(a).attr('id') == 'down'){
        x = 'down';
    }
    if($(a).attr('id') == 'left'){
        x = 'left';
    }
    if($(a).attr('id') == 'right'){
        x = 'right';
    }
    if($(a).attr('id') == 'center' || $(a).attr('id') == 'centerButSecond'){
        x = 'center';
    }

    target = $('.activeHold').data('num');

    if(x == 'right'){

    }

    if(x == 'left'){
       

    }

    if(x == 'center'){


    }




    if(x == 'down'){
       

        
    }
    
    if(x == 'up'){

    }
};




$('#downPanelRight').click(function(){


});

$('#downPanelLeft').click(function(){


});

$('#mmBut').click(function(){


});



$('div[data-ran]').each(function() {
    $( this ).text($(this).attr('data-ran'));
  });

$('.freezeButton').on('click', function(){

})

//±

$('.saveButton').on('click',function(){

    $('.wrapTextErr').remove();
    $('.inWrapErr').append('<div style="height:300px;" class="row wrapTextErr"><div class="txtErr col-4 col-xs-4 col-sm-4 col-lg-4"></div><div class="txtErr col-4 col-xs-4 col-sm-4 col-lg-4"></div><div class="txtErr col-4 col-xs-4 col-sm-4 col-lg-4"></div></div>')
})

$('.escBut').on('click',function(){

    document.location.href = '/menu.php';

})


function itemChoiseIntervalFour(){

    if(!$('.num1').hasClass('itemActiveNumberNow')){
        $('.num1').addClass('itemActiveNumberNow');
    }else{
        $('.num1').removeClass('itemActiveNumberNow');
    }

}

function itemChoiseIntervalSM(){

    if(!$('.num3').hasClass('itemActiveNumberNow')){
        $('.num3').addClass('itemActiveNumberNow');
    }else{
        $('.num3').removeClass('itemActiveNumberNow');
    }

}

function itemChoiseIntervalMM(){

    if(!$('.fnMM').hasClass('itemActiveNumberNow')){
        $('.fnMM').addClass('itemActiveNumberNow');
    }else{
        $('.fnMM').removeClass('itemActiveNumberNow');
    }
}

$('#greyBut1').on('click',function(){
    $('#downPanelLeft').click();
})
$('#greyBut2').on('click',function(){
    $('#downPanelRight').click();
})
$('#greyBut3').on('click',function(){
    $('#mmBut').click();
})
$('#greyBut4').on('click',function(){
    $('.freezeButton').click();
})
$('#greyBut5').on('click',function(){
    $('.saveButton').click();
})
$('#greyBut5').hover(function(){
    $('.saveButton').addClass('actBut');
    },
    function(){
    $('.saveButton').removeClass('actBut');
})

$('#greyBut6').hover(function(){
    $('.escBut').addClass('actBut');
    },
    function(){
    $('.escBut').removeClass('actBut');
})

$('#greyBut6').on('click',function(){
    $('.escBut').click();
})

$('.entButtonBig').on('click',function(){
    joistClick(this);
})
$('.escButtonBig').on('click',function(){
    $('.escBut').click();
})

function setMem(){

    x = $('.activeHold').attr('data-mem-rand');
    $('.memoryItem').removeClass('memoryActiv');
    $('div[data-id='+x+']').addClass('memoryActiv');

}





$(document).ready ( function(){
    
    $(".loadScr").animate({ opacity:0 }, 3000);
    
    setInterval(opacityOrNot,3100)


});

function opacityOrNot(){
    if($(".loadScr").css('opacity')==0){
        $(".loadScr").hide();
    }
}





function rotateJoist(a){


    rot = $('.mainJRot').attr('data-rotate');
    rot = Number.parseInt(rot)

    if($(a).attr('data-rotateAr') == 'left'){
        rot = rot - 40;
    }else{
        rot = rot + 40;
    }

    $('.mainJRot').attr('data-rotate',rot);
    

    rotate(rot);
    
    //$('.mainJRot').style.transform = 'rotate(180deg)';
    //$('.mainJRot').animate({ transform: 'rotate(320deg)' }, { duration: 1000 });

}


function rotate(a){

    $(".mainJRot").css({transform: "rotate("+a+"deg)", transition: ".6s transform"});
    
}




$('.mainJRot').mousedown(
function() {
    $('.mainJRot').addClass('activeMainJ')
    joistClick(this);
})

$('.mainJRot').mouseup(
function() {
    $('.mainJRot').removeClass('activeMainJ')
})
