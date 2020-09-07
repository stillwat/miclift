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

        if($('.settingsDiv').hasClass('activeFreeze')){
            $('.settingsDiv').removeClass('activeFreeze').removeClass('settingBack');
        }else{
            $('.settingsDiv').addClass('activeFreeze').addClass('settingBack');
        }

    }

    if(x == 'left'){
        if($('.settingsDiv').hasClass('activeFreeze')){
            $('.settingsDiv').removeClass('activeFreeze').removeClass('settingBack');
        }else{
            $('.settingsDiv').addClass('activeFreeze').addClass('settingBack');
        }

    }

    if(x == 'center'){

        if($('.activeFreeze').hasClass('settingsDiv')){
            document.location.href = "/index.php?L=N"
        }


    }




    if(x == 'down'){

        if($('.settingsDiv').hasClass('activeFreeze')){
            $('.settingsDiv').removeClass('activeFreeze').removeClass('settingBack');
        }else{
            $('.settingsDiv').addClass('activeFreeze').addClass('settingBack');
        }

        
    }
    
    if(x == 'up'){

        if($('.settingsDiv').hasClass('activeFreeze')){
            $('.settingsDiv').removeClass('activeFreeze').removeClass('settingBack');
        }else{
            $('.settingsDiv').addClass('activeFreeze').addClass('settingBack');
        }

    }


};




$('#downPanelRight').click(function(){



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

    m = $('.memoryActiv').attr('data-id');
    if($('.lineTxt').hasClass('holded')){
        //переключаем ячейку памяти
        $('.memoryItem').removeClass('memoryActiv');
        if(m == 9){
            m = 1;
        }else{
            m++;
        }
        $('#memActiv'+m).addClass('memoryActiv');
    }

})

$('.escBut').on('click',function(){

    if($('.escBut').attr('data-slide')==0){
        $(".lessCircles").animate({ scrollLeft:125 }, 200);
        $('.escBut').attr('data-slide',1);
        $('#leftArr').removeClass('leftArNA');
        $('#leftArr').addClass('leftArA');
    }else if($('.escBut').attr('data-slide')==1){
        $(".lessCircles").animate({ scrollLeft:250 }, 200);
        $('.escBut').attr('data-slide',2);
        $('#rightArr').removeClass('rightArA');
        $('#rightArr').addClass('rightArNA');
    }



})


$('#downPanelLeft').click(function(){

    if($('.escBut').attr('data-slide')==1){
        $(".lessCircles").animate({ scrollLeft:0 }, 200);
        $('.escBut').attr('data-slide',0);
        $('#leftArr').removeClass('leftArA');
        $('#leftArr').addClass('leftArNA');
    }else if($('.escBut').attr('data-slide')==2){
        $(".lessCircles").animate({ scrollLeft:125 }, 200);
        $('.escBut').attr('data-slide',1);
        $('#rightArr').removeClass('rightArNA');
        $('#rightArr').addClass('rightArA');
    }

});

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
$('#greyBut6').on('click',function(){
    $('.escBut').click();
})

$('.entButtonBig').on('click',function(){
    joistClick(this);
})
$('.escButtonBig').on('click',function(){
    document.location.href = "/index.php?L=N";
})


$('#greyBut1').hover(function(){
        $('#downPanelLeft').addClass('butActive');
    },
    function(){
        $('#downPanelLeft').removeClass('butActive');
    }
)

$('#greyBut6').hover(function(){
        $('.escBut').addClass('butActive');
    },
    function(){
        $('.escBut').removeClass('butActive');
    }
)

$('#greyBut2').hover(function(){
    $('#downPanelRight').addClass('butActive');
},
function(){
    $('#downPanelRight').removeClass('butActive');
}
)

$('#greyBut3').hover(function(){
    $('#mmBut').addClass('butActive');
},
function(){
    $('#mmBut').removeClass('butActive');
}
)

$('#greyBut4').hover(function(){
    $('.freezeButton').addClass('butActive');
},
function(){
    $('.freezeButton').removeClass('butActive');
}
)

$('#greyBut5').hover(function(){
    $('.saveButton').addClass('butActive');
},
function(){
    $('.saveButton').removeClass('butActive');
}
)

