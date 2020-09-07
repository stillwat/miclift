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
        
        clearInterval(intervalFour);
        $('.num1').removeClass('itemActiveNumberNow');

        x = $('.itemRight');
        y = $('.itemLeft');

        if($('.activeFreeze').attr('data-panel')=='left' && x.length > 0){
            
            $('.setDiv').removeClass('activeFreeze').removeClass('setDivA');
            $('.itemLeft').removeClass('activeFreeze');
            $('.itemRight').first().addClass('activeFreeze');

        }else if($('.activeFreeze').attr('data-panel')=='left' && x.length == 0){
            
            $('.itemLeft').removeClass('activeFreeze');
            $('.setDiv').addClass('activeFreeze').addClass('setDivA');

        }else if($('.activeFreeze').attr('data-panel')=='right'){

            $('.itemRight').removeClass('activeFreeze');
            $('.itemLeft').removeClass('activeFreeze');
            $('.setDiv').addClass('activeFreeze').addClass('setDivA');

        }else if($('.activeFreeze').hasClass('setDiv') && y.length > 0){
            
            $('.setDiv').removeClass('activeFreeze').removeClass('setDivA');
            $('.itemLeft').first().addClass('activeFreeze');
        }else if($('.activeFreeze').hasClass('setDiv') && y.length == 0 && x.length > 0){

            $('.setDiv').removeClass('activeFreeze').removeClass('setDivA');
            $('.itemRight').first().addClass('activeFreeze');
        }
    }

    if(x == 'left'){

        clearInterval(intervalFour);
        $('.num1').removeClass('itemActiveNumberNow');

        x = $('.itemRight');
        y = $('.itemLeft');

        if($('.activeFreeze').attr('data-panel')=='left'){

            $('.setDiv').addClass('activeFreeze').addClass('setDivA');
            $('.itemLeft').removeClass('activeFreeze');

        }else if($('.activeFreeze').hasClass('setDiv') && x.length > 0){

            $('.setDiv').removeClass('activeFreeze').removeClass('setDivA');
            $('.itemRight').first().addClass('activeFreeze');

        }else if($('.activeFreeze').hasClass('setDiv') && y.length > 0){

            $('.setDiv').removeClass('activeFreeze').removeClass('setDivA');
            $('.itemLeft').first().addClass('activeFreeze');

        }else if($('.activeFreeze').attr('data-panel')=='right' && y.length > 0){

            $('.itemRight').removeClass('activeFreeze');
            $('.itemLeft').first().addClass('activeFreeze');

        }else if($('.activeFreeze').attr('data-panel')=='right' && y.length == 0){

            $('.setDiv').addClass('activeFreeze').addClass('setDivA');
            $('.itemRight').removeClass('activeFreeze');

        }

    }

    if(x == 'center'){

        clearInterval(intervalFour);
        $('.num1').removeClass('itemActiveNumberNow');

        if($('.activeFreeze').hasClass('setDiv')){
            document.location.href = '/index.php?L=N';
        }

    }


    if(x == 'down'){


        clearInterval(intervalFour);
        $('.num1').removeClass('itemActiveNumberNow');
        if(!$('.activeFreeze').hasClass('rightPanelItem')){

            x = $('.activeFreeze').attr('data-item');
            if(x == 14){
                x = 1;
            }else{
                x++;
            }

            $('.itemLeft').removeClass('activeFreeze');
            $('div[data-item='+x+']').addClass('activeFreeze');

        }else{

            x = $('.activeFreeze').attr('data-item-right');
            c = $('.itemRight');

            if(x == c.length){
                x = 1;
            }else{
                x++;
            }

            $('.itemRight').removeClass('activeFreeze');
            $('div[data-item-right='+x+']').addClass('activeFreeze');
        }

    }
    
    if(x == 'up'){


        clearInterval(intervalFour);
        $('.num1').removeClass('itemActiveNumberNow');
        if(!$('.activeFreeze').hasClass('rightPanelItem')){
        
            x = $('.activeFreeze').attr('data-item');
            if(x == 1){
                x = 14;
            }else{
                x--;
            }

            $('.itemLeft').removeClass('activeFreeze');
            $('div[data-item='+x+']').addClass('activeFreeze');

        }else{

            x = $('.activeFreeze').attr('data-item-right');
            c = $('.itemRight');

            if(x == 1){
                x = c.length;
            }else{
                x--;
            }

            $('.itemRight').removeClass('activeFreeze');
            $('div[data-item-right='+x+']').addClass('activeFreeze');
        }
    }


};




$('#downPanelRight').click(function(){
    
    clearInterval(intervalFour);
    $('.num1').removeClass('itemActiveNumberNow');
    intervalFour = setInterval(itemChoiseIntervalFour,1000);

});



$('#mmBut').click(function(){

    y=1;
    clearInterval(intervalFour);
    $('.num1').removeClass('itemActiveNumberNow');


    if($('.activeFreeze').attr('data-panel')=='right'){
        span = $('.activeFreeze').html();
        item = $('.activeFreeze').attr('data-item-right');
        preset = $('.activeFreeze').attr('data-preset');

        $('#playlist').append('<div data-preset="'+preset+'" data-item-right="'+item+'" data-panel="right" class="itemRight rightPanelItem">'+span+'</div>')


        $('.rightPanelItem').each(function(){
            $(this).attr('data-item-right',y);
            y++;
        })

        $('.itemRight').removeClass('activeFreeze');
        $('.itemRight').first().addClass('activeFreeze');

        clearInterval(intervalFour);
        $('.num1').removeClass('itemActiveNumberNow');
        intervalFour = setInterval(itemChoiseIntervalFour,1000);


    }else if($('.activeFreeze').attr('data-panel')=='left'){

        span = $('.activeFreeze').html();
        item = $('.activeFreeze').attr('data-item');
        preset = $('.activeFreeze').attr('data-preset');

        $('#toPlaylist').prepend('<div data-panel="left" data-preset="'+preset+'" data-item="'+item+'" class="itemLeft">'+span+'</div>')
        
        $('.itemLeft').each(function(){
            $(this).attr('data-item',y);
            y++;
        })

        $('.itemLeft').removeClass('activeFreeze');
        $('.itemLeft').first().addClass('activeFreeze');

        clearInterval(intervalFour);
        $('.num1').removeClass('itemActiveNumberNow');
        intervalFour = setInterval(itemChoiseIntervalFour,1000);


    }

    $('.itemRight').each(function(){

        presetNum = $(this).attr('data-preset');
        $(this).html('<span class="num1">P</span>reset '+presetNum);

    });

});



$('div[data-ran]').each(function() {
    $( this ).text($(this).attr('data-ran'));
  });

$('.freezeButton').on('click', function(){



    x = $('.activeFreeze').attr('data-preset');

    $('.deleteWrap').show();
    $('.nameDeleteObject').text('Preset '+x);



})

$('.butDeleteThis').on('click',function(){





    clearInterval(intervalFour);
    $('.num1').removeClass('itemActiveNumberNow');

    if($('.activeFreeze').attr('data-panel')=='right'){

        item = $('.activeFreeze').attr('data-item-right');
        
        $('.activeFreeze').remove();
        
        y=1
        $('.itemRight').each(function(){
            $(this).attr('data-item-right',y);
            y++;
        });
        s = $('.itemRight').length;
        m = $('.itemLeft').length;

        if(m == 0 && s == 0){
            $('.setDiv').addClass('activeFreeze').addClass('setDivA');
        }else if(s != 0 && item < s){
            $('div[data-item-right='+item+']').addClass('activeFreeze');
        }else if(s == 0){
            $('.itemLeft').first().addClass('activeFreeze');
        }else if(item >= s){
            $('.itemRight').first().addClass('activeFreeze');
        }else if(m != 0){
            $('.itemLeft').first().addClass('activeFreeze');
        }


    }else if($('.activeFreeze').attr('data-panel')=='left'){

        item = Number.parseInt($('.activeFreeze').attr('data-item'));
        $('.activeFreeze').remove();

        y=1
        $('.itemLeft').each(function(){
            $(this).attr('data-item',y);
            y++;
        });
        s = $('.itemLeft').length;
        m = $('.itemRight').length;

        console.log(m,s);
        if(m == 0 && s == 0){
            $('.setDiv').addClass('activeFreeze').addClass('setDivA');
        }else if(s != 0 && item < s){
            $('div[data-item='+item+']').addClass('activeFreeze');
        }else if(s == 0){
            $('.itemRight').first().addClass('activeFreeze');
        }else if(item >= s){
            $('.itemLeft').first().addClass('activeFreeze');
        }else if(m != 0){
            $('.itemRight').first().addClass('activeFreeze');
        }
    }





    $('.deleteWrap').hide();
    $('.butDel').removeClass('butActive');





})


$('.butCancelThis').on('click',function(){
    $('.deleteWrap').hide();
    $('.butDel').removeClass('butActive');
});


//±

$('.saveButton').on('click',function(){
    clearInterval(intervalFour);
    $('.num1').removeClass('itemActiveNumberNow');
})

$('.escBut').on('click',function(){

    clearInterval(intervalFour);
    $('.num1').removeClass('itemActiveNumberNow');

    document.location.href='/index.php?L=N'

})


$('#downPanelLeft').click(function(){



    clearInterval(intervalFour);
    $('.num1').removeClass('itemActiveNumberNow');

    if($('.activeFreeze').attr('data-panel')=='left'){

        y = 1;
        data = $('.activeFreeze').attr('data-item');
        text = $('.activeFreeze').text();
        preset = $('.activeFreeze').attr('data-preset');

        $('#playlist').append('<div data-preset="'+preset+'" data-item-right="'+data+'" data-panel="right" class="itemRight rightPanelItem"><span class="num1">P</span>reset '+data+'</div>');

        $('.rightPanelItem').removeClass('activeFreeze');

        $('.rightPanelItem').each(function(){
        $(this).attr('data-item-right',y);
        y++;
        })

    }


///

$('.itemRight').each(function(){

    presetNum = $(this).attr('data-preset');
    $(this).html('<span class="num1">P</span>reset '+presetNum);

});





});

function itemChoiseIntervalFour(){

    if(!$('.activeFreeze .num1').hasClass('itemActiveNumberNow')){
        $('.activeFreeze .num1').addClass('itemActiveNumberNow');
    }else{
        $('.activeFreeze .num1').removeClass('itemActiveNumberNow');
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

    if($('.deleteWrap').is(':visible')){
        $('.butCancelThis').click();
    }else{
        $('#downPanelRight').click();
    }
    
});

$('#greyBut3').on('click',function(){
    $('#mmBut').click();
})
$('#greyBut4').on('click',function(){
    $('.freezeButton').click();
})
$('#greyBut5').on('click',function(){

    if($('.deleteWrap').is(':visible')){
        $('.butDeleteThis').click();
    }else{
        $('.saveButton').click();
    }
    
})
$('#greyBut6').on('click',function(){
    $('.escBut').click();
})

$('.entButtonBig').on('click',function(){
    joistClick(this);
})
$('.escButtonBig').on('click',function(){
    document.location.href = 'index.php?L=N';
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
    if($('.deleteWrap').is(':visible')){
        $('.butCancelThis').addClass('butActive');
    }else{
        $('#downPanelRight').addClass('butActive');
    }
},
function(){
    if($('.deleteWrap').is(':visible')){
        $('.butCancelThis').removeClass('butActive');
    }else{
        $('#downPanelRight').removeClass('butActive');
    }
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
    if($('.deleteWrap').is(':visible')){
        $('.butDeleteThis').addClass('butActive');
    }else{
        $('.saveButton').addClass('butActive');
    }
},
function(){
    if($('.deleteWrap').is(':visible')){
        $('.butDeleteThis').removeClass('butActive');
    }else{
        $('.saveButton').removeClass('butActive');
    }
});


function scrollToDiv(element,navheight){
    var offset = element.offset();
    var offsetTop = offset.top;
    
    var totalScroll = offsetTop-navheight;
    //console.log(totalScroll);
    return totalScroll;
}