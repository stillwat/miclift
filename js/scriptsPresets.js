var intervalFour;
var intervalSM;
var intervalMM;

var MPreset1 = '';
var MPreset2 = '';
var MPreset3 = '';
var MPreset4 = '';
var MPreset5 = '';



function noToPls(){

    if($('.activeFreeze').hasClass('mainPresetDiv') || $('.activeFreeze').hasClass('setDiv') || $('.activeFreeze').hasClass('itemRight')){
        $('#downPanelLeft').addClass('noText');
        $('#downPanelLeft').text('');
    }



/*
    if($('.activeFreeze').hasClass('mainPresetDiv') || $('.activeFreeze').hasClass('noTouch')|| $('.activeFreeze').hasClass('setDiv') || $('.activeFreeze').hasClass('itemRight')){
        $('#downPanelLeft').addClass('noText');
        $('#downPanelLeft').text('');
    }
*/

}


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

    clearInterval(intervalFour);
    $('.num1').removeClass('itemActiveNumberNow');

    x = 0
    if($(a).attr('id') == 'up' || $(a).attr('id') == 'upJ'){
        x = 'up';
    }
    if($(a).attr('id') == 'down' || $(a).attr('id') == 'downJ'){
        x = 'down';
    }
    if($(a).attr('id') == 'left'){
        x = 'left';
    }
    if($(a).attr('id') == 'right'){
        x = 'right';
    }
    if($(a).attr('id') == 'center' || $(a).attr('id') == 'centerButSecond' || $(a).attr('id') == 'centerJRotate'){
        x = 'center';
    }

    target = $('.activeHold').data('num');




    if(x == 'right'){
        


        if($('.activeFreeze').hasClass('mainPresetDiv')){

            $('.mainPresetDiv').removeClass('activeFreeze');
            $('.itemLeft').first().addClass('activeFreeze');


            /*if($('.activeFreeze').hasClass('mainPresetDiv') ||  $('.activeFreeze').hasClass('setDiv') || $('.activeFreeze').hasClass('itemRight')){
                alert('')
                $('#downPanelLeft').addClass('noText');
                $('#downPanelLeft').text('');
            }else{
                $('#downPanelLeft').removeClass('noText');
                $('#downPanelLeft').text('To Pls');
            }*/





        }else{
            $('#downPanelLeft').removeClass('noText');
            $('#downPanelLeft').text('To Pls');
        

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

            }else if($('.activeFreeze').hasClass('setDiv')){
                $('.setDiv').removeClass('activeFreeze').removeClass('setDivA');
                $('.mainPresetDiv').first().addClass('activeFreeze');
            };
        

        }

        if($('.activeFreeze').hasClass('itemLeft')){
            $('#downPanelLeft').removeClass('noText');
            $('#downPanelLeft').text('To Pls');
        }else{
            $('#downPanelLeft').addClass('noText');
            $('#downPanelLeft').text('');
        }
        
        
    }

    if(x == 'left'){

        if(!$('.activeFreeze').hasClass('mainPresetDiv')){

        
            clearInterval(intervalFour);
            $('.num1').removeClass('itemActiveNumberNow');

            x = $('.itemRight');
            y = $('.itemLeft');

            if($('.activeFreeze').attr('data-panel')=='left'){
                $('.mainPresetDiv').first().addClass('activeFreeze');
                $('.itemLeft').removeClass('activeFreeze');

            }else if($('.mainPresetDiv').hasClass('activeFreeze')){
                $('.mainPresetDiv').removeClass('activeFreeze');
                $('.setDiv').addClass('activeFreeze').addClass('setDivA');
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

            
            
        }else{

            $('.mainPresetDiv').removeClass('activeFreeze');
            $('.setDiv').addClass('activeFreeze').addClass('setDivA');

            
        }


        if($('.activeFreeze').hasClass('itemLeft')){
            $('#downPanelLeft').removeClass('noText');
            $('#downPanelLeft').text('To Pls');
        }else{
            $('#downPanelLeft').addClass('noText');
            $('#downPanelLeft').text('');
        }



    }




    if(x == 'center'){

        if($('.activeFreeze').hasClass('mainPresetDiv')){
          /*  $('#downPanelLeft').addClass('noText');
            $('#downPanelLeft').text('');*/

            //noToPls();

            if(!$('.activeFreeze').hasClass('choiseGroup')){

                $('.mainPresetDiv').removeClass('choiseGroup');
                $('.activeFreeze').addClass('choiseGroup');

            }

            /*
            var MPreset1 = '';
            var MPreset2 = '';
            var MPreset3 = '';
            var MPreset4 = '';
            var MPreset5 = '';
            */

            /*
            m = $('.activeFreeze').attr('data-m-preset');

            if(m == 1){
                $('#playlist').html(MPreset1);
            }else if(m == 2){
                $('#playlist').html(MPreset2);
            }else if(m == 3){
                $('#playlist').html(MPreset3);
            }else if(m == 4){
                $('#playlist').html(MPreset4);
            }else if(m == 5){
                $('#playlist').html(MPreset5);
            };
            */

        }else{

            /*
            $('#downPanelLeft').removeClass('noText');
            $('#downPanelLeft').text('To Pls');
            */

        }


        clearInterval(intervalFour);
        $('.num1').removeClass('itemActiveNumberNow');

        if($('.activeFreeze').hasClass('setDiv')){
            document.location.href = '/menu.php';
        }

        //noToPls();
        if(!$('.activeFreeze').hasClass('itemRight')){
            showPlaylist();
        }
        



        if($('.activeFreeze').hasClass('itemLeft')){
            $('#downPanelLeft').removeClass('noText');
            $('#downPanelLeft').text('To Pls');
        }else{
            $('#downPanelLeft').addClass('noText');
            $('#downPanelLeft').text('');
        }

    }


    if(x == 'down'){


        if($('.activeFreeze').hasClass('mainPresetDiv')){
         /*   $('#downPanelLeft').addClass('noText');
            $('#downPanelLeft').text('');*/

            xN = $('.activeFreeze').attr('data-m-preset');

            if(xN == 5){
                xN = 1;
            }else{
                xN++;
            }

            //console.log(xN);
            $('.mainPresetDiv').removeClass('activeFreeze');
            
            $('#mPreset'+xN).addClass('activeFreeze');


            //noToPls();

        }else{
           /* $('#downPanelLeft').removeClass('noText');
            $('#downPanelLeft').text('To Pls');*/
       


        clearInterval(intervalFour);
        $('.num1').removeClass('itemActiveNumberNow');
        if(!$('.activeFreeze').hasClass('rightPanelItem')){

            x = $('.activeFreeze').attr('data-item');
            if(x == 12){
                x = -1;
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

        //noToPls();
        }


        if($('.activeFreeze').hasClass('itemLeft')){
            $('#downPanelLeft').removeClass('noText');
            $('#downPanelLeft').text('To Pls');
        }else{
            $('#downPanelLeft').addClass('noText');
            $('#downPanelLeft').text('');
        }




    }
    
    if(x == 'up'){


        if($('.activeFreeze').hasClass('mainPresetDiv')){

           /* $('#downPanelLeft').addClass('noText');
            $('#downPanelLeft').text('');*/

            xN = $('.activeFreeze').attr('data-m-preset');


            if(xN == 1){
                xN = 5;
            }else{
                xN--;
            }

            //console.log(xN);
            $('.mainPresetDiv').removeClass('activeFreeze');
            
            $('#mPreset'+xN).addClass('activeFreeze');

            //noToPls();

        }else{


/*
            $('#downPanelLeft').removeClass('noText');
            $('#downPanelLeft').text('To Pls');
        
*/

            clearInterval(intervalFour);
            $('.num1').removeClass('itemActiveNumberNow');
            if(!$('.activeFreeze').hasClass('rightPanelItem')){
            
                x = $('.activeFreeze').attr('data-item');
                //console.log(x);
                if(x == -1){
                    x = 12;
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

            //noToPls();
        }


        if($('.activeFreeze').hasClass('itemLeft')){
            $('#downPanelLeft').removeClass('noText');
            $('#downPanelLeft').text('To Pls');
        }else{
            $('#downPanelLeft').addClass('noText');
            $('#downPanelLeft').text('');
        }


    }




    checkRightPanel();

};




$('#downPanelRight').click(function(){
    
    clearInterval(intervalFour);
    $('.num1').removeClass('itemActiveNumberNow');
    intervalFour = setInterval(itemChoiseIntervalFour,1000);

});



$('#mmBut').click(function(){


    if(!$('.activeFreeze').hasClass('noTouch')){

        y=1;
        clearInterval(intervalFour);
        $('.num1').removeClass('itemActiveNumberNow');


    if($('.activeFreeze').attr('data-panel')=='right'){

        span = $('.activeFreeze').html();
        item = $('.activeFreeze').attr('data-item-right');
        preset = $('.activeFreeze').attr('data-preset');


        items = $('.choiseGroup').attr('data-items');
        items = preset + ',' + items;
        $('.choiseGroup').attr('data-items',items);


        //$('#playlist').append('<div data-preset="'+preset+'" data-item-right="'+item+'" data-panel="right" class="itemRight rightPanelItem">'+span+'</div>')

        showPlaylist();

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
        $('.noTouch').remove();

        itemPls = '<div data-panel="left" data-item="2" data-preset="1" class="itemLeft noTouch">● <span class="num1">P</span>arking</div><div data-panel="left" style="border-bottom:2px solid #696969;" data-item="3" data-preset="2" class="itemLeft noTouch">● <span class="num1">D</span>own all</div>';
        $('#toPlaylist').prepend(itemPls);


        $('.itemLeft').each(function(){
            $(this).attr('data-item',y);
            y++;
        })

        $('.itemLeft').removeClass('activeFreeze');
        $(".itemLeft:nth-child(3)").addClass('activeFreeze');
 

        clearInterval(intervalFour);
        $('.num1').removeClass('itemActiveNumberNow');
        intervalFour = setInterval(itemChoiseIntervalFour,1000);


    }

    $('.itemRight').each(function(){


        presetNum = $(this).attr('data-preset');
        if(presetNum == -1){
            $(this).html('<span class="num1">P</span>arking');
        }else if(presetNum == 0){
            $(this).html('<span class="num1">D</span>own all');
        }else{
            $(this).html('<span class="num1">P</span>reset '+presetNum);
        }
        


    });

    }




});



$('div[data-ran]').each(function() {
    $( this ).text($(this).attr('data-ran'));
  });

$('.freezeButton').on('click', function(){

    if($('.activeFreeze').hasClass('noTouch') || $('.activeFreeze').hasClass('setDiv') || $('.activeFreeze').hasClass('mainPresetDiv')){

    }else{
        x = $('.activeFreeze').attr('data-preset');

        $('.deleteWrap').show();
        if(x == -1){
            $('.nameDeleteObject').text('Parking');
        }else if(x == 0){
            $('.nameDeleteObject').text('Down all');
        }else{
            $('.nameDeleteObject').text('Preset '+x);
        }
        

    }

})

$('.butDeleteThis').on('click',function(){

    clearInterval(intervalFour);
    $('.num1').removeClass('itemActiveNumberNow');

    if($('.activeFreeze').attr('data-panel')=='right'){

        items = '';

        item = $('.activeFreeze').attr('data-item-right');
        preset = $('.activeFreeze').attr('data-preset');

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

        // перезаписываем данные в главный пресет
        items = $('.choiseGroup').attr('data-items');
        itemsReady = items.replace(preset+',','');
        $('.choiseGroup').attr('data-items',itemsReady);
        



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

        //console.log(m,s);
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

    document.location.href='/circles.php?L=preset';

})


$('#downPanelLeft').click(function(){



    if(!$(this).hasClass('noText')){

    clearInterval(intervalFour);
    $('.num1').removeClass('itemActiveNumberNow');


    if($('.activeFreeze').attr('data-panel')=='left'){

        y = 1;
        data = $('.activeFreeze').attr('data-item');
        text = $('.activeFreeze').text();
        preset = $('.activeFreeze').attr('data-preset');

        m = $('.choiseGroup').attr('data-m-preset');

        a = '';

        items = $('#mPreset'+m).attr('data-items');
        items += preset+',';

        $('#mPreset'+m).attr('data-items',items);

        showPlaylist();


        /*
        if(m == 1){
            MPreset1 += '<div data-preset="'+preset+'" data-item-right="'+data+'" data-panel="right" class="itemRight rightPanelItem"><span class="num1">P</span>reset '+data+'</div>';
            $('#playlist').html(MPreset1);
        }else if(m == 2){
            MPreset2 += '<div data-preset="'+preset+'" data-item-right="'+data+'" data-panel="right" class="itemRight rightPanelItem"><span class="num1">P</span>reset '+data+'</div>';
            $('#playlist').html(MPreset2);
        }else if(m == 3){
            MPreset3 += '<div data-preset="'+preset+'" data-item-right="'+data+'" data-panel="right" class="itemRight rightPanelItem"><span class="num1">P</span>reset '+data+'</div>';
            $('#playlist').html(MPreset3);
        }else if(m == 4){
            MPreset4 += '<div data-preset="'+preset+'" data-item-right="'+data+'" data-panel="right" class="itemRight rightPanelItem"><span class="num1">P</span>reset '+data+'</div>';
            $('#playlist').html(MPreset4);
        }else if(m == 5){
            MPreset5 += '<div data-preset="'+preset+'" data-item-right="'+data+'" data-panel="right" class="itemRight rightPanelItem"><span class="num1">P</span>reset '+data+'</div>';
            $('#playlist').html(MPreset5);
        };
        */


        //$('#playlist').append('<div data-preset="'+preset+'" data-item-right="'+data+'" data-panel="right" class="itemRight rightPanelItem"><span class="num1">P</span>reset '+data+'</div>');



        $('.rightPanelItem').removeClass('activeFreeze');

        $('.rightPanelItem').each(function(){
        $(this).attr('data-item-right',y);
        y++;
        })

    }


    $('.itemRight').each(function(){
    
        presetNum = $(this).attr('data-preset');
        if(presetNum == -1){
            $(this).html('<span class="num1">P</span>arking');
        }else if(presetNum == 0){
            $(this).html('<span class="num1">D</span>own all');
        }else{
            $(this).html('<span class="num1">P</span>reset '+presetNum);
        }
        


    });


}

    checkRightPanel();

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
    if($(this).hasClass('menuBack')){
        document.location.href = 'menu.php';
    }else{
        document.location.href = 'index.php?L=N';
    }
    

})


$('#greyBut1').hover(function(){
        if(!$('#downPanelLeft').hasClass('noText')){
            $('#downPanelLeft').addClass('butActive');
        }
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



function showPlaylist(){



    massItems = [];
    str = $('.choiseGroup').attr('data-items');


    if(str != ''){
        str = str.substring(0, str.length - 1);

        var arr = str.split(',');

        x = arr.length;

        for(i=0;i<x;i++){

            if(arr[i] == '-1'){
                massItems[i] = '<div data-preset="'+arr[i]+'" data-item-right="'+arr[i]+'" data-panel="right" class="itemRight rightPanelItem"><span class="num1">P</span>arking</div>';
            }else if(arr[i] == '0'){
                massItems[i] = '<div data-preset="'+arr[i]+'" data-item-right="'+arr[i]+'" data-panel="right" class="itemRight rightPanelItem"><span class="num1">D</span>own all</div>';
            }else{
                massItems[i] = '<div data-preset="'+arr[i]+'" data-item-right="'+arr[i]+'" data-panel="right" class="itemRight rightPanelItem"><span class="num1">P</span>reset '+arr[i]+'</div>';
            }
            



        }

        //console.log(massItems);
            $('#playlist').html(massItems);
    }else{
            $('#playlist').html('');
    }

    checkRightPanel();

}

function checkRightPanel(){

    y=1
    if($('.rightPanelItem').length != 0){
  
        $('.rightPanelItem').each(function(){


            $(this).attr('data-item-right',y);
            y++;


        })


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


$('.leftArRot').on('click',function(){
    joistClick(this)
})

$('.rightArRot').on('click',function(){
    joistClick(this)
})





