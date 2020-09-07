var intervalFour;
var intervalSM;
var intervalMM;
var interval00;

var massStandartItem;

var massGroup1 = '';
var massGroup2 = '';
var massGroup3 = '';
var massGroup4 = '';
var massGroup5 = '';
var massGroup6 = '';
var massGroup7 = '';
var massGroup8 = '';
var massGroup9 = '';
var massGroup10 = '';

var massStandartItem = $('.listStandartItem').html();
itemGroup = '';
itemFromDivGroup = '';
var pack;



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
    if($(a).attr('id') == 'center' || $(a).attr('id') == 'centerButSecond' || $(a).hasClass('selectBut') || $(a).attr('id') == 'centerJRotate' || $(a).attr('data-selectBut') == 1){
        x = 'center';
    }

    target = $('.activeHold').data('num');


    if(x == 'right'){


        $(".listDiv").animate({ scrollTop:0 }, 100);

        $('.activeHold').removeClass('renameClass');
        $('.escBut').text('Esc');

        clearInterval(intervalSM);
        clearInterval(intervalMM);
        clearInterval(intervalFour);
        clearInterval(interval00);

        $('.num3').removeClass('itemActiveNumberNow');
        $('.num1').removeClass('itemActiveNumberNow');
        $('.num1G').removeClass('itemActiveNum');
        $('.num3G').removeClass('itemActiveNum');
        $('.fnMMG').removeClass('itemActiveNum');

        //cчитаем сколько групп
        countRightGroupDiv();


        y = $('.groupDivRightPanel').length;

        if($('.activeHold').hasClass('lineTxt') && y != 0){
            $('.lineTxt').removeClass('activeHold');
            $('.groupDivRightPanel').first().addClass('activeHold');
        }else if($('.activeHold').hasClass('lineTxt') && y == 0){
            $('.lineTxt').removeClass('activeHold');
            $('#rightPanelBT1').addClass('activeHold');
        }else if($('.activeHold').hasClass('groupDivRightPanel')){
            $('.groupDivRightPanel').removeClass('activeHold');
            $('#rightPanelBT1').addClass('activeHold');
        }else if($('.activeHold').hasClass('centerItemButRightSide')){
            $('#rightPanelBT1').removeClass('activeHold');
            $('#rightPanelBT2').addClass('activeHold');
        }else if($('#rightPanelBT2').hasClass('rightItemButRightSide')){
            $('#rightPanelBT2').removeClass('activeHold');
            $('.lineTxt').first().addClass('activeHold');
        };
    
        if($('.activeHold').hasClass('groupDivRightPanel')){
            $('.saveButton').text('Ungroup');
        }else{
            $('.saveButton').text('Group');
        };

        freezeUnfreezeButton();
    }


    if(x == 'left'){


        $(".listDiv").animate({ scrollTop:0 }, 100);

        $('.activeHold').removeClass('renameClass');
        $('.escBut').text('Esc');
        clearInterval(intervalSM);
        clearInterval(intervalMM);
        clearInterval(intervalFour);
        clearInterval(interval00);

        $('.num3').removeClass('itemActiveNumberNow');
        $('.num1').removeClass('itemActiveNumberNow');
        $('.num1G').removeClass('itemActiveNum');
        $('.num3G').removeClass('itemActiveNum');
        $('.fnMMG').removeClass('itemActiveNum');

        //cчитаем сколько групп
        countRightGroupDiv();

        y = $('.groupDivRightPanel').length;

        if($('.activeHold').hasClass('lineTxt')){
            $('.lineTxt').removeClass('activeHold');
            $('#rightPanelBT2').addClass('activeHold');
        }else if($('.activeHold').hasClass('rightItemButRightSide')){
            $('#rightPanelBT2').removeClass('activeHold');
            $('#rightPanelBT1').addClass('activeHold');
        }else if($('.activeHold').hasClass('centerItemButRightSide') && y != 0){
            $('#rightPanelBT1').removeClass('activeHold');
            $('.groupDivRightPanel').first().addClass('activeHold');
        }else if($('.activeHold').hasClass('centerItemButRightSide') && y == 0){
            $('#rightPanelBT1').removeClass('activeHold');
            $('.lineTxt').first().addClass('activeHold');
        }else if($('.activeHold').hasClass('groupDivRightPanel')){
            $('.groupDivRightPanel').removeClass('activeHold');
            $('.lineTxt').first().addClass('activeHold');
        } 
        
        if($('.activeHold').hasClass('groupDivRightPanel')){
            $('.saveButton').text('Ungroup');
        }else{
            $('.saveButton').text('Group');
        }

        freezeUnfreezeButton();
    }



    if(x == 'center'){

        


        $('.activeHold').removeClass('renameClass');
        $('.escBut').text('Esc');
        clearInterval(intervalSM);
        clearInterval(intervalMM);
        clearInterval(intervalFour);
        clearInterval(interval00);

        $('.num3').removeClass('itemActiveNumberNow');
        $('.num1').removeClass('itemActiveNumberNow');
        $('.num1G').removeClass('itemActiveNum');
        $('.num3G').removeClass('itemActiveNum');
        $('.fnMMG').removeClass('itemActiveNum');



        if(!$('.activeHold').hasClass('butRightSide')){

        //cчитаем сколько групп
        countRightGroupDiv();


        if($('.activeHold').hasClass('groupDivRightPanel') && !$('.activeHold').hasClass('activeGroupDiv')){
            
            $('.groupDivRightPanel').removeClass('activeGroupDiv').removeClass('choiseGroup');
            
            massNumber = $('.activeHold').attr('data-group');
            $('.activeHold').addClass('activeGroupDiv').addClass('choiseGroup');


            if(massNumber == 1){
                $('.listStandartItem').html(massGroup1);
            }else if(massNumber == 2){
                $('.listStandartItem').html(massGroup2);
            }else if(massNumber == 3){
                $('.listStandartItem').html(massGroup3);
            }else if(massNumber == 4){
                $('.listStandartItem').html(massGroup4);
            }else if(massNumber == 5){
                $('.listStandartItem').html(massGroup5);
            }else if(massNumber == 6){
                $('.listStandartItem').html(massGroup6);
            }else if(massNumber == 7){
                $('.listStandartItem').html(massGroup7);
            }else if(massNumber == 8){
                $('.listStandartItem').html(massGroup8);
            }else if(massNumber == 9){
                $('.listStandartItem').html(massGroup9);
            }else if(massNumber == 10){
                $('.listStandartItem').html(massGroup10);
            };
         
        
           /* if($('.choiseGroup').hasClass('freezeItems')){
    
                $('.lineTxt').each(function(){
                    $(this).children().children('.freezeMark').show();
                });

            }*/


            $('.lineTxt').removeClass('activeItemGroup');
            //$('.groupDiv').removeClass('activeHold').removeClass('activeGroupDiv');
            //$('.lineTxt').first().addClass('activeHold');
            //alert('1')
        }else if($('.activeHold').hasClass('groupDivRightPanel') && $('.activeHold').hasClass('activeGroupDiv')){
            //alert('2')
            
            $('.activeHold').removeClass('activeGroupDiv');
            

            standartScreenNoTarget();


            $('.lineTxt').removeClass('activeItemGroup');
            $('.groupDivRightPanel').removeClass('choiseGroup');//.removeClass('activeHold')

        }else{

            if(!$('.activeHold').hasClass('choiseGroup') && !$('.activeHold').hasClass('butRightSide')){


                if(!$('.activeHold').hasClass('activeItemGroup') && !$('.activeHold').hasClass('withoutMark') && $('.choiseGroup').length == 0){
                    $('.activeHold').addClass('activeItemGroup');
                }else{
                    $('.activeHold').removeClass('activeItemGroup');
                };

            };

        };

        countItem();

        //$('.groupDivRightPanel').removeClass('activeHold');

        if($('.activeHold').hasClass('groupDivRightPanel')){
            $('.saveButton').text('Ungroup');
        }else{
            $('.saveButton').text('Group');
        }



        if($('.activeHold').hasClass('activeGroupDiv')){
            if($('.lineTxt').length > 0){
                $('.lineTxt').each(function(){
                    $(this).attr('data-howmuch-groups',0);
                });
                
            };
        };

        groupSet();


        
        if($('.choiseGroup').length > 0 && !$('.activeHold').hasClass('lineTxt')){
            //если группа активна
            $('.arrowDiv').css('opacity','1');
            $('.butCssDown').css('opacity','1');
            $('.fRow').css('opacity','1');
            $('.sRow').css('opacity','1');

            //меняем кнопки
            $('#downPanelLeft').attr('data-panel-set',2);
            $('#downPanelLeft').html('<u class="wSetNum">0</u>0.00');

            $('#downPanelRight').attr('data-panel-set',2);
            $('#downPanelRight').html('00.<u class="wSetNum">0</u>0');

            $('#mmBut').attr('data-panel-set',2);
            $('#mmBut').html('00.0<u class="wSetNum">0</u>');

            /*
            $('#downPanelLeft').attr('data-panel-set',2);
            $('#downPanelLeft').text('00.00');
            $('#downPanelLeft').removeClass('selectBut');

            $('#downPanelRight').attr('data-panel-set',2);
            $('#downPanelRight').text('± SM');

            $('#mmBut').attr('data-panel-set',2);
            $('#mmBut').text('± MM');
*/
            //$('.freezeButton').attr('data-panel-set',2);
            //$('.freezeButton').text('Freeze');

            //$('.escBut').attr('data-panel-set',2);
            //$('.escBut').text('Save');



        }else{
            //если группа не активна

            $('.arrowDiv').css('opacity','0');
            $('.butCssDown').css('opacity','0');
            $('.fRow').css('opacity','0');
            $('.sRow').css('opacity','0');

            //меняем кнопки назад
            $('#downPanelLeft').attr('data-panel-set',1);
            $('#downPanelLeft').text('Select');
            $('#downPanelLeft').addClass('selectBut');

            $('#downPanelRight').attr('data-panel-set',1);
            $('#downPanelRight').text('Rename');

            $('#mmBut').attr('data-panel-set',1);
            $('#mmBut').text('Preset');

            //$('.freezeButton').attr('data-panel-set',1);
            //$('.freezeButton').text('Delete');

            $('.escBut').attr('data-panel-set',1);
            $('.escBut').text('Esc');

        }

        }else{
            //если выделена кнопка 3D или шестеренка

            if($('.activeHold').hasClass('centerItemButRightSide')){
                // если выбрана кнопка 3D
                document.location.href="/3dGroup.php"

            }else{
                // если выбрана Шестеренка
                document.location.href="/menu.php"
            }


        }



        freezeMemSet();
        freezeUnfreezeButton();
    }




    if(x == 'down'){


        $('.activeHold').removeClass('renameClass');
        $('.escBut').text('Esc');
        clearInterval(intervalSM);
        clearInterval(intervalMM);
        clearInterval(intervalFour);
        clearInterval(interval00);

        $('.num3').removeClass('itemActiveNumberNow');
        $('.num1').removeClass('itemActiveNumberNow');
        $('.num1G').removeClass('itemActiveNum');
        $('.num3G').removeClass('itemActiveNum');
        $('.fnMMG').removeClass('itemActiveNum');

        //cчитаем сколько групп
        countRightGroupDiv();
        countItem();
        if($('.activeHold').hasClass('lineTxt')){

            num = $('.activeHold').attr('data-num');
            $('.lineTxt').removeClass('activeHold');
            
            leng = $('.lineTxt').length;
            if(num == leng){
                num = 1
                $('div[data-num='+num+']').addClass('activeHold');
            }else{
                num++;
                $('div[data-num='+num+']').addClass('activeHold');
            }

        }else if($('.activeHold').hasClass('groupDivRightPanel')){

            num = $('.activeHold').attr('data-num-groupdiv');
            leng = $('.groupDivRightPanel').length;
            $('.groupDivRightPanel').removeClass('activeHold');


            if(num == leng){
                num = 1
                $('div[data-num-groupdiv='+num+']').addClass('activeHold');
            }else{
                num++;
                $('div[data-num-groupdiv='+num+']').addClass('activeHold');
            }

        }

         targ2 = $(".activeHold").attr('data-num');

        switch(targ2) {
            case '1':
                $(".listDiv").animate({ scrollTop:0 }, 10);
                break;
            /*case '2':
                $(".listDiv").animate({ scrollTop:23 }, 100);
                break;
            case '3':
                $(".listDiv").animate({ scrollTop:46 }, 100);
                break;
            case '4':
                $(".listDiv").animate({ scrollTop:69 }, 100);
                break;
            case '5':
                $(".listDiv").animate({ scrollTop:92 }, 100);
                break;*/
            case '6':
                $(".listDiv").animate({ scrollTop:15 }, 100);
                break;
            case '7':
                $(".listDiv").animate({ scrollTop:40 }, 100);
                break;
            case '8':
                $(".listDiv").animate({ scrollTop:75 }, 100);
                break;
            case '9':
                $(".listDiv").animate({ scrollTop:110 }, 100);
                break;
            case '10':
                $(".listDiv").animate({ scrollTop:145 }, 100);
                break;
            case '11':
                $(".listDiv").animate({ scrollTop:170 }, 100);
                break;
            case '12':
                $(".listDiv").animate({ scrollTop:205 }, 100);
                break;
            case '13':
                $(".listDiv").animate({ scrollTop:240 }, 100);
                break;
            case '14':
                $(".listDiv").animate({ scrollTop:299 }, 100);
                break;
            case '15':
                $(".listDiv").animate({ scrollTop:322 }, 100);
                break;
            case '16':
                $(".listDiv").animate({ scrollTop:345 }, 100);
                break;
            case '17':
                $(".listDiv").animate({ scrollTop:368 }, 100);
                    break;
            case '18':
                $(".listDiv").animate({ scrollTop:391 }, 100);
                break;
            case '19':
                $(".listDiv").animate({ scrollTop:412 }, 100);
                break;
            case '20':
                $(".listDiv").animate({ scrollTop:435 }, 100);
                break;
            case '21':
                $(".listDiv").animate({ scrollTop:458 }, 100);
                break;
            case '22':
                $(".listDiv").animate({ scrollTop:481 }, 100);
                break;
            case '23':
                $(".listDiv").animate({ scrollTop:504 }, 100);
                break;
            case '24':
                $(".listDiv").animate({ scrollTop:527 }, 100);
                break;
            case '25':
                $(".listDiv").animate({ scrollTop:555 }, 100);
                break;
            case '30':
                $(".listDiv").animate({ scrollTop:600 }, 100);
                break;   

            default:

        }



        if($('.activeHold').hasClass('groupDivRightPanel')){
            $('.saveButton').text('Ungroup');
        }else{
            $('.saveButton').text('Group');
        }

        freezeUnfreezeButton();
    }
    
    if(x == 'up'){



        $('.activeHold').removeClass('renameClass');
        $('.escBut').text('Esc');
        clearInterval(intervalSM);
        clearInterval(intervalMM);
        clearInterval(intervalFour);
        clearInterval(interval00);

        $('.num3').removeClass('itemActiveNumberNow');
        $('.num1').removeClass('itemActiveNumberNow');
        $('.num1G').removeClass('itemActiveNum');
        $('.num3G').removeClass('itemActiveNum');
        $('.fnMMG').removeClass('itemActiveNum');

        //cчитаем сколько групп
        countRightGroupDiv();

        if($('.activeHold').hasClass('lineTxt')){
            num = $('.activeHold').attr('data-num');
            countItem();
            leng = $('.lineTxt').length;
            if(num == 1){
                $('.lineTxt').removeClass('activeHold');
                num = leng
                $('div[data-num='+num+']').addClass('activeHold');
            }else{
                $('.lineTxt').removeClass('activeHold');
                num--;
                $('div[data-num='+num+']').addClass('activeHold');
            }

        }else if($('.activeHold').hasClass('groupDivRightPanel')){
            num = $('.activeHold').attr('data-num-groupdiv')
            leng = $('.groupDivRightPanel').length;

            if(num == 1){
                $('.groupDivRightPanel').removeClass('activeHold');
                num = leng
                $('div[data-num-groupdiv='+num+']').addClass('activeHold');
            }else{
                $('.groupDivRightPanel').removeClass('activeHold');
                num--;
                $('div[data-num-groupdiv='+num+']').addClass('activeHold');
            }
        }

        targ2 = $(".activeHold").attr('data-num');

        switch(targ2) {
            case '1':
                $(".listDiv").animate({ scrollTop:0 }, 10);
                break;
            case '2':
                $(".listDiv").animate({ scrollTop:0 }, 100);
                break;
            case '3':
                $(".listDiv").animate({ scrollTop:0 }, 100);
                break;
            case '4':
                $(".listDiv").animate({ scrollTop:0 }, 100);
                break;
            case '5':
                $(".listDiv").animate({ scrollTop:0 }, 100);
                break;
            case '6':
                $(".listDiv").animate({ scrollTop:0 }, 100);
                break;
            case '7':
                $(".listDiv").animate({ scrollTop:30 }, 100);
                break;
            case '8':
                $(".listDiv").animate({ scrollTop:70 }, 100);
                break;
            case '9':
                $(".listDiv").animate({ scrollTop:100 }, 100);
                break;
            case '10':
                $(".listDiv").animate({ scrollTop:130 }, 100);
                break;
            case '11':
                $(".listDiv").animate({ scrollTop:160 }, 100);
                break;
            case '12':
                $(".listDiv").animate({ scrollTop:200 }, 100);
                break;
            case '13':
                $(".listDiv").animate({ scrollTop:230 }, 100);
                break;
            case '14':
                $(".listDiv").animate({ scrollTop:250 }, 100);
                break;
            case '15':
                $(".listDiv").animate({ scrollTop:270 }, 100);
                break;
            case '16':
                $(".listDiv").animate({ scrollTop:290 }, 100);
                break;
            case '17':
                $(".listDiv").animate({ scrollTop:310 }, 100);
                break;
            case '18':
                $(".listDiv").animate({ scrollTop:330 }, 100);
                break;
            case '19':
                $(".listDiv").animate({ scrollTop:350 }, 100);
                break;
            case '20':
                $(".listDiv").animate({ scrollTop:370 }, 100);
                break;
            case '21':
                $(".listDiv").animate({ scrollTop:400 }, 100);
                break;
            case '22':
                $(".listDiv").animate({ scrollTop:430 }, 100);
                break;
            case '23':
                $(".listDiv").animate({ scrollTop:450 }, 100);
                break;
            case '24':
                $(".listDiv").animate({ scrollTop:470 }, 100);
                break;
            /*case '25':
                $(".listDiv").animate({ scrollTop:470 }, 100);
                break;
            case '26':
                $(".listDiv").animate({ scrollTop:490 }, 100);
                break;
            case '27':
                $(".listDiv").animate({ scrollTop:510 }, 100);
                break;
            case '28':
                $(".listDiv").animate({ scrollTop:530 }, 100);
                break;
            case '29':
                $(".listDiv").animate({ scrollTop:590 }, 100);
                break;*/
            case '30':
                $(".listDiv").animate({ scrollTop:600 }, 100);
                break;                

            default:
        }
        freezeUnfreezeButton();
    }

    
    if($('.activeHold').hasClass('groupDivRightPanel')){
        $('.saveButton').text('Ungroup');
    }else{
        $('.saveButton').text('Group');
    }

};




$('#downPanelRight').click(function(){

    clearInterval(intervalSM);
    clearInterval(intervalMM);
    clearInterval(intervalFour);
    clearInterval(interval00);

    $('.num3').removeClass('itemActiveNumberNow');
    $('.num1').removeClass('itemActiveNumberNow');
    $('.num1G').removeClass('itemActiveNum');
    $('.num3G').removeClass('itemActiveNum');
    $('.fnMMG').removeClass('itemActiveNum');

    if($('#downPanelRight').attr('data-panel-set') != 2){
        //если группа не выделена и кнопка не поменялась на SM

        $('.activeHold').removeClass('renameClass');
        $('.escBut').text('Esc');

        intervalFour = setInterval(itemChoiseIntervalFour,1000);

        $('.activeHold').addClass('renameClass');
        if($('.activeHold').hasClass('renameClass')){
            //$('.escBut').text('Save');
        }

    }else{
        //если группа выделена и кнопка поменялась на SM

        intervalSM = setInterval(itemChoiseIntervalSM,1000);
        


    }




});

$('#downPanelLeft').click(function(){


    clearInterval(intervalSM);
    clearInterval(intervalMM);
    clearInterval(intervalFour);
    clearInterval(interval00);

    $('.num3').removeClass('itemActiveNumberNow');
    $('.num1').removeClass('itemActiveNumberNow');
    $('.num1G').removeClass('itemActiveNum');
    $('.num3G').removeClass('itemActiveNum');
    $('.fnMMG').removeClass('itemActiveNum');


    if($(this).attr('data-panel-set') == 1){
    //если группа не активна
        
        $('.activeHold').removeClass('renameClass');

        joistClick(this);

        //alert('1');
        //$('.escBut').text('Esc');

        /*
        if($(this).attr('data-panel-set') == 1){

            x = $('.activePanel').attr('data-id');
            $('#panel'+x).removeClass('activePanel');
            
            if(x == 1){
                x = 5;
            }else{
                x--;
            }
            $('#panel'+x).addClass('activePanel');
            if(x == 1){
                $(".wrapFourIn").animate({ scrollLeft:0 }, 200);
                $('.leftItemButRightSide').css('backgroundImage', 'url(/img/rightArr.png)');
            }  
            if(x == 2){
                $(".wrapFourIn").animate({ scrollLeft:135 }, 200);
            }  
            if(x == 3){
                $(".wrapFourIn").animate({ scrollLeft:270 }, 200);
            }  
            if(x == 4){
                $(".wrapFourIn").animate({ scrollLeft:270 }, 200);
            }
            if(x == 5){
                $(".wrapFourIn").animate({ scrollLeft:545 }, 500);
                $('.leftItemButRightSide').css('backgroundImage', 'url(/img/leftArr.png)');
            }



        }else{
        

            intervalFour = setInterval(itemChoiseIntervalFour,1000);

            $('.allNum').removeClass('activeMM');
            $('.mmNum').hide();

            $('.downNumbersRightPanel').removeClass('activeMMNum');
            $('.numSep').removeClass('activeMMSep');

        }

    */


    }else{
        //если группа активна и кнопка изменена на 00.00
        clearInterval(intervalSM);
        clearInterval(intervalMM);
        clearInterval(intervalFour);
        clearInterval(interval00);
    
        $('.num3').removeClass('itemActiveNumberNow');
        $('.num1').removeClass('itemActiveNumberNow');
        $('.num1G').removeClass('itemActiveNum');
        $('.num3G').removeClass('itemActiveNum');
        $('.fnMMG').removeClass('itemActiveNum');

        interval00 = setInterval(itemChoiseInterval00,1000);

        //alert('2');

    }









});

$('#mmBut').click(function(){



    clearInterval(intervalSM);
    clearInterval(intervalMM);
    clearInterval(intervalFour);
    clearInterval(interval00)

    $('.num3').removeClass('itemActiveNumberNow');
    $('.num1').removeClass('itemActiveNumberNow');
    $('.num1G').removeClass('itemActiveNum');
    $('.num3G').removeClass('itemActiveNum');
    $('.fnMMG').removeClass('itemActiveNum');


    if($(this).attr('data-panel-set') == 2){
        //если группа выделена и кнопка поменялась на ММ

        intervalSM = setInterval(itemChoiseIntervalMM,1000);

        $('.allNum').addClass('activeMM');
        $('.mmNum').show();

        $('.downNumbersRightPanel').addClass('activeMMNum');
        $('.numSep').addClass('activeMMSep');

    }else{
        //если группа не выделена и кнопка не поменялась

        $('.activeHold').removeClass('renameClass');
        $('.escBut').text('Esc');

        document.location.href = '/3dpresets.php';

    }

});


$('div[data-ran]').each(function() {
    $( this ).text($(this).attr('data-ran'));
  });

$('.freezeButton').on('click', function(){

/*
    if($('.activeHold').hasClass('lineTxt')){

        if(!$('.activeHold').hasClass('freezeItems')){

            $('.activeHold').addClass('freezeItems');
            $('.activeHold').children().children('.freezeMark').show();


        }else{

            $('.activeHold').removeClass('freezeItems');
            $('.activeHold').children().children('.freezeMark').hide();

        }
        
        //

    }
*/

    freezeMem();
    freezeUnfreezeButton();
/*
    if($('.choiseGroup').hasClass('freezeItems')){
        $('.choiseGroup').removeClass('freezeItems');

        $('.lineTxt').each(function(){
            $(this).children().children('.freezeMark').hide();
        });
    }else{
        $('.choiseGroup').addClass('freezeItems');

        $('.lineTxt').each(function(){
            $(this).children().children('.freezeMark').show();
        });         
    }
*/



    if($(this).attr('data-panel-set') != 2){
        //если группа не выделена
/*
        if($('.activeHold').hasClass('lineTxt')){

            $('.activeHold').removeClass('renameClass');

                clearInterval(intervalSM);
                clearInterval(intervalMM);
                clearInterval(intervalFour);
                clearInterval(interval00)

                $('.num3').removeClass('itemActiveNumberNow');
                $('.num1').removeClass('itemActiveNumberNow');
                $('.num1G').removeClass('itemActiveNum');
                $('.num3G').removeClass('itemActiveNum');
                $('.fnMMG').removeClass('itemActiveNum');



            hm = $('.choiseGroup').length

            //удаление лебедки

            if($('.activeHold').hasClass('lineTxt') && hm == 1){

                x = $('.activeHold').attr('data-name');

                $('.deleteWrap').show();
                $('.nameDeleteObject').text(x);
                $('.titleDelete').text('DELETE');

            }

        }

*/


    }else{
        //если группа выделена и кнпока поменялась на Freeze


    }




})

//±

$('.saveButton').on('click',function(){

    clearInterval(intervalSM);
    clearInterval(intervalMM);
    clearInterval(intervalFour);
    clearInterval(interval00);

    $('.num3').removeClass('itemActiveNumberNow');
    $('.num1').removeClass('itemActiveNumberNow');
    $('.num1G').removeClass('itemActiveNum');
    $('.num3G').removeClass('itemActiveNum');
    $('.fnMMG').removeClass('itemActiveNum');

    $('.activeHold').removeClass('renameClass');
    $('.escBut').text('Esc');



    
    if($('.saveButton').text() == 'Ungroup'){



        if($('.groupDivRightPanel').hasClass('choiseGroup') && !$('.activeHold').hasClass('choiseGroup')){

            $('.activeHold').remove();
            $('.groupDivRightPanel').first().addClass('activeHold');
            $('.saveButton').text('Ungroup');

            groupSet();

        }else{

            $('.lineTxt').removeClass('activeHold');
            //разгрупировка группы
/*
            if($('.activeHold').hasClass('lineTxt') && hm == 1){
                x = $('.activeHold').attr('data-name');

                $('.deleteWrap').show();
                $('.nameDeleteObject').text(x);
                $('.titleDelete').text('UNGROUP');
            }
*/


            nu = $('.activeHold').attr('data-group');
            $('.activeHold').remove();
/*            if(nu == 1){
                massGroup1 = '';
            }else if(nu == 2){
                massGroup2 = '';
            }else if(nu == 3){
                massGroup3 = '';
            }else if(nu == 4){
                massGroup4 = '';
            }else if(nu == 5){
                massGroup5 = '';
            }else if(nu == 6){
                massGroup6 = '';
            }else if(nu == 7){
                massGroup7 = '';
            }else if(nu == 8){
                massGroup8 = '';
            }else if(nu== 9){
                massGroup9 = '';
            }else if(nu == 10){
                massGroup10 = '';
            }
*/

            lenOfGroup = $('.groupDivRightPanel').length;

            if(lenOfGroup > 0){
                standartScreenNoTarget();
            }else{
                standartScreen();
            }

            f = lenOfGroup;
            if(f > 0){
                $('.groupDivRightPanel').first().addClass('activeHold');
            }else{
                $('.lineTxt').first().addClass('activeHold');
            }

            if($('.activeHold').hasClass('groupDivRightPanel')){
                $('.saveButton').text('Ungroup');
            }else{
                $('.saveButton').text('Group');
            }
            


        }




    }else{

    if($('.lineTxt').hasClass('activeItemGroup')){
        $('.lineTxt').removeClass('activeHold');
        pack = '';
        x = $('.groupDivRightPanel').length
        c = '';


        if($('.lineTxt').hasClass("activeItemGroup")){
            $('.activeItemGroup').removeClass('activeHold');    

            $('.activeItemGroup').each(function(){
                pack += $(this)[0].outerHTML;
            })

            if(massGroup1 == ''){
                massGroup1 = pack;
                c = 1;
            }else if(massGroup2 == ''){
                massGroup2 = pack;
                c = 2;
            }else if(massGroup3 == ''){
                massGroup3 = pack;
                c = 3;
            }else if(massGroup4 == ''){
                massGroup4 = pack;
                c = 4;
            }else if(massGroup5 == ''){
                massGroup5 = pack;
                c = 5;
            }else if(massGroup6 == ''){
                massGroup6 = pack;
                c = 6;
            }else if(massGroup7 == ''){
                massGroup7 = pack;
                c = 7;
            }else if(massGroup8 == ''){
                massGroup8 = pack;
                c = 8;
            }else if(massGroup9== ''){
                massGroup9 = pack;
                c = 9;
            }else if(massGroup10 == ''){
                massGroup10 = pack;
                c = 10;
            }
    
    
        if(c != 11){
    
        $('.activeItemGroup').each(function(){
            n = $(this).attr('data-num');
            itemGroup += n+',';
        });

        divIn = '<div data-group="'+c+'" data-item-in="'+itemGroup+'" class="row groupDivRightPanel" data-name="Group '+c+'"><div data-group="'+c+'" class="groupDiv col-12 col-sm-12 col-xs-12 col-lg-12"> <span class="num1">G</span>roup '+c+'</div></div>'

        itemGroup = '';

        if(x == 0){
            $('.groupWarpItem').html(divIn);
        }else if(x > 0){
            $('.groupWarpItem').append(divIn);
        }

        $('.lineTxt').removeClass('activeItemGroup');

        }

        groupSet();


        }



        countRightGroupDiv();

        $('div[data-num-groupdiv='+(c-1)+']').addClass('activeHold');

        $('.activeHold').removeClass('renameClass');
        //$('.escBut').text('Save')
        intervalFour = setInterval(itemChoiseIntervalFour,1000);


        if($('.activeHold').hasClass('groupDivRightPanel')){
            $('.saveButton').text('Ungroup');
        }else{
            $('.saveButton').text('Group');
        }



        }

    

    }


        groupColor();
        // groupSet();

})



$('.escBut').on('click',function(){



    if($(this).attr('data-panel-set') != 2){
        //если не выделена группа


    if($('.escBut').text()=='Save'){
        $('.activeHold').removeClass('renameClass');

        clearInterval(intervalSM);
        clearInterval(intervalMM);
        clearInterval(intervalFour);
        clearInterval(interval00);

        $('.num3').removeClass('itemActiveNumberNow');
        $('.num1').removeClass('itemActiveNumberNow');
        $('.num1G').removeClass('itemActiveNum');
        $('.num3G').removeClass('itemActiveNum');
        $('.fnMMG').removeClass('itemActiveNum');

        $('.escBut').text('Esc')

    }else{



        if($('.activeHold').hasClass('renameClass')){
           // $('.escBut').text('Save');
        }

        if($('.numSep').is(':visible')){

            clearInterval(intervalSM);
            clearInterval(intervalMM);
            clearInterval(intervalFour);
            clearInterval(interval00)

            $('.num3').removeClass('itemActiveNumberNow');
            $('.num1').removeClass('itemActiveNumberNow');
            $('.num1G').removeClass('itemActiveNum');
            $('.num3G').removeClass('itemActiveNum');
            $('.fnMMG').removeClass('itemActiveNum');

            intervalSM = setInterval(itemChoiseIntervalSM,1000);

            $('.allNum').removeClass('activeMM');
            $('.mmNum').hide();

            $('.downNumbersRightPanel').removeClass('activeMMNum');
            $('.numSep').removeClass('activeMMSep');


            $('.lineTxt').each(function(){
                $(this).removeClass('holdOff');
                $(this).removeClass('holded');
            });
            $('.leftBut').removeClass('stopClick');
            $('.rightBut').removeClass('stopClick');
        
            $('.someNumbers').text('');
            $('.nameItemRightPanel').text('');
            $('.upNumbersRightPanel').text('');
        
            $('.num1').text('');
            $('.num2').text('');
            $('.num3').text('');
            $('.num4').text('');
            $('.numSep').hide();
        
            clearInterval(intervalSM);
            clearInterval(intervalMM);
            clearInterval(intervalFour);
            clearInterval(interval00);

            $('.num3').removeClass('itemActiveNumberNow');
            $('.num1').removeClass('itemActiveNumberNow');
            $('.num1G').removeClass('itemActiveNum');
            $('.num3G').removeClass('itemActiveNum');
            $('.fnMMG').removeClass('itemActiveNum');
        
        
        
            $('#downPanelLeft').attr('data-panel-set',1);
            $('#downPanelLeft').text('Left');
        
            $('#downPanelRight').attr('data-panel-set',1);
            $('#downPanelRight').text('Right');
        
            $('#mmBut').attr('data-panel-set',1);
            $('#mmBut').text('');
        
        }else{
            

            if($('.groupDivRightPanel').hasClass('choiseGroup')){

                $('.groupDivRightPanel').removeClass('choiseGroup').removeClass('activeGroupDiv').removeClass('activeHold');
                $('.saveButton').text('Group');


                standartScreen();

            }else{
                if($('.escBut').hasClass('menuBack')){
                    document.location.href = '/menu.php';
                }else{
                    document.location.href = '/index.php?L=N';
                }
            }
        }
    }


    }else{
        //если выделена группа
        clearInterval(intervalSM);
        clearInterval(intervalMM);
        clearInterval(intervalFour);
        clearInterval(interval00);

        $('.num3').removeClass('itemActiveNumberNow');
        $('.num1').removeClass('itemActiveNumberNow');
        $('.num1G').removeClass('itemActiveNum');
        $('.num3G').removeClass('itemActiveNum');
        $('.fnMMG').removeClass('itemActiveNum');
        
    }

})


function itemChoiseIntervalFour(){

    if(!$('.activeHold').children().children('.num1').hasClass('itemActiveNumberNow')){
        $('.activeHold').children().children('.num1').addClass('itemActiveNumberNow');
    }else{
        $('.activeHold').children().children('.num1').removeClass('itemActiveNumberNow');
    }

}





function itemChoiseInterval00(){

    if(!$('.num1G').hasClass('itemActiveNum')){
        $('.num1G').addClass('itemActiveNum');
    }else{
        $('.num1G').removeClass('itemActiveNum');
    }

}


function itemChoiseIntervalSM(){

    if(!$('.num3G').hasClass('itemActiveNum')){
        $('.num3G').addClass('itemActiveNum');
    }else{
        $('.num3G').removeClass('itemActiveNum');
    }

}

function itemChoiseIntervalMM(){

    if(!$('.fnMMG').hasClass('itemActiveNum')){
        $('.fnMMG').addClass('itemActiveNum');
    }else{
        $('.fnMMG').removeClass('itemActiveNum');
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
    
})
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
    $('.escBut').click();
})





$('#greyBut1').hover(function(){

    if($('#downPanelLeft').attr('data-panel-set') == 2){
        $('#downPanelLeft').addClass('butActive');
    };

},
function(){

    if($('#downPanelLeft').attr('data-panel-set') == 2){
        $('#downPanelLeft').removeClass('butActive');
    };

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
    if($('#mmBut').text() != ''){
        $('#mmBut').addClass('butActive');
    }
},
function(){
    $('#mmBut').removeClass('butActive');
})

$('#greyBut4').hover(function(){
$('.freezeButton').addClass('butActive');
},
function(){
$('.freezeButton').removeClass('butActive');
})

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
})

$('#greyBut6').hover(function(){
    $('.escBut').addClass('butActive');
},
function(){
    $('.escBut').removeClass('butActive');
}
)



function standartScreen(){

    $('.lineTxt').removeClass('activeItemGroup');
    $('.listStandartItem').html(massStandartItem);
    
    $('.lineTxt').each(function(){
        $(this).removeClass('withoutMark');
        n1 = String(getRandomInt(1, 9));
        n2 = String(getRandomInt(1, 9));
        n3 = String(getRandomInt(1, 9));
        n4 = String(getRandomInt(1, 9));
        numbers = String(n1+n2+'.'+n3+n4);

        $(this).children('.firstNum').attr('data-ran',numbers);
        $(this).children('.firstNum').text(numbers);
        $(this).children('.secondNum').text(numbers);
    })

    $('.lineTxt').first().addClass('activeHold');
    $(".listDiv").animate({ scrollTop:0 }, 100);
    groupSet();




    $('.arrowDiv').css('opacity','0');
    $('.butCssDown').css('opacity','0');
    $('.fRow').css('opacity','0');
    $('.sRow').css('opacity','0');

    //меняем кнопки назад
    $('#downPanelLeft').attr('data-panel-set',1);
    $('#downPanelLeft').text('Select');
    $('#downPanelLeft').removeClass('selectBut');

    $('#downPanelRight').attr('data-panel-set',1);
    $('#downPanelRight').text('Rename');

    $('#mmBut').attr('data-panel-set',1);
    $('#mmBut').text('Preset');

    //$('.freezeButton').attr('data-panel-set',1);
    //$('.freezeButton').text('Delete');

    $('.escBut').attr('data-panel-set',1);
    $('.escBut').text('Esc');

    freezeMemSet();
    freezeUnfreezeButton();
};




function standartScreenNoTarget(){

    $('.lineTxt').removeClass('activeItemGroup');
    $('.listStandartItem').html(massStandartItem);
    
    $('.lineTxt').each(function(){
        $(this).removeClass('withoutMark');
        n1 = String(getRandomInt(1, 9));
        n2 = String(getRandomInt(1, 9));
        n3 = String(getRandomInt(1, 9));
        n4 = String(getRandomInt(1, 9));
        numbers = String(n1+n2+'.'+n3+n4);

        $(this).children('.firstNum').attr('data-ran',numbers);
        $(this).children('.firstNum').text(numbers);
        $(this).children('.secondNum').text(numbers);
    })

    //$('.lineTxt').first().addClass('activeHold');
    $(".listDiv").animate({ scrollTop:0 }, 100);
    groupSet();




    $('.arrowDiv').css('opacity','0');
    $('.butCssDown').css('opacity','0');
    $('.fRow').css('opacity','0');
    $('.sRow').css('opacity','0');

    //меняем кнопки назад
    $('#downPanelLeft').attr('data-panel-set',1);
    $('#downPanelLeft').text('Select');
    $('#downPanelLeft').addClass('selectBut');

    $('#downPanelRight').attr('data-panel-set',1);
    $('#downPanelRight').text('Rename');

    $('#mmBut').attr('data-panel-set',1);
    $('#mmBut').text('Preset');

    //$('.freezeButton').attr('data-panel-set',1);
    //$('.freezeButton').text('Delete');

    $('.escBut').attr('data-panel-set',1);
    $('.escBut').text('Esc');



    freezeMemSet();
    freezeUnfreezeButton();
};



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

function countItem(){
    c = 1;
    $('.lineTxt').each(function(){

        $(this).attr('data-num',c);
        c++;

    });
}

function countRightGroupDiv(){

    c = 1;
    $('.groupDivRightPanel').each(function(){

        $(this).attr('data-num-groupDiv',c);
        c++;

    });
    
}

$('.butCancelThis').on('click',function(){
    $('.deleteWrap').hide();
    $('.butDel').removeClass('butActive');
});




$('.butDeleteThis').on('click',function(){


    nu = $('.activeHold').attr('data-group');
    x = $('.choiseGroup').length
    y = $('.lineTxt').length;
    

    y =y-1;

    if(y > 0){
  
        $('.activeHold').remove();

        $('.lineTxt').first().addClass('activeHold');

        $('.deleteWrap').hide();
        $('.butDel').removeClass('butActive');

        pack = '';
        itemGroup = '';

        reWrite = $('.choiseGroup').attr('data-num-groupdiv');

        $('.lineTxt').each(function(){
            pack += $(this)[0].outerHTML;
            n = $(this).attr('data-num');
            itemGroup += n+',';
        })

        $('.choiseGroup').attr('data-item-in',itemGroup);



        if(reWrite == 1){
            massGroup1 = '';

            if(pack != ''){
                massGroup1 = pack;
            }  

        }else if(reWrite == 2){
            massGroup2 = '';

            if(pack != ''){
                massGroup2 = pack;
            }  
        }else if(reWrite == 3){
            massGroup3 = '';

            if(pack != ''){
                massGroup3 = pack;
            }  
        }else if(reWrite == 4){
            massGroup4 = '';

            if(pack != ''){
                massGroup4 = pack;
            }  
        }else if(reWrite == 5){
            massGroup5 = '';

            if(pack != ''){
                massGroup5 = pack;
            }  
        }else if(reWrite == 6){
            massGroup6 = '';

            if(pack != ''){
                massGroup6 = pack;
            }  
        }else if(reWrite == 7){
            massGroup7 = '';

            if(pack != ''){
                massGroup7 = pack;
            }  
        }else if(reWrite == 8){
            massGroup8 = '';

            if(pack != ''){
                massGroup8 = pack;
            }  

        }else if(reWrite == 9){
            massGroup9 = '';

            if(pack != ''){
                massGroup9 = pack;
            };

        }else if(reWrite == 10){
            massGroup10 = '';

            if(pack != ''){
                massGroup10 = pack;
            };

        };




    }else{


        $('.activeHold').remove();
        $('.choiseGroup').remove();


        $('.deleteWrap').hide();
        $('.butDel').removeClass('butActive');


        if($('.groupDivRightPanel').length > 0){

            $('.groupDivRightPanel').first().addClass('activeHold');
            $('.groupDivRightPanel').first().addClass('choiseGroup');
            list = $('.activeHold').attr('data-group');

            if(list == 1){
                $('.listStandartItem').html(massGroup1);
            }else if(list == 2){
                $('.listStandartItem').html(massGroup2);
            }else if(list == 3){
                $('.listStandartItem').html(massGroup3);
            }else if(list == 4){
                $('.listStandartItem').html(massGroup4);
            }else if(list == 5){
                $('.listStandartItem').html(massGroup5);
            }else if(list == 6){
                $('.listStandartItem').html(massGroup6);
            }else if(list == 7){
                $('.listStandartItem').html(massGroup7);
            }else if(list == 8){
                $('.listStandartItem').html(massGroup8);
            }else if(list == 9){
                $('.listStandartItem').html(massGroup9);
            }else if(list == 10){
                $('.listStandartItem').html(massGroup10);
            };

            $('.lineTxt').removeClass('activeItemGroup');

            groupSet();

            if($('.choiseGroup').hasClass('freezeItems')){
                $('.lineTxt').each(function(){
                    //$(this).children().children('.freezeMark').show();
                });
            }
            




        }else{
            standartScreen();
        };


    

    }
    


    

/*
        if($('.activeHold').hasClass('groupDivRightPanel') && x > 1){
            $('.activeHold').remove();
            $('.groupDivRightPanel').first().addClass('activeHold');
            $('.saveButton').text('Group');
        }else if($('.activeHold').hasClass('groupDivRightPanel') && x > 1){
            $('.activeHold').remove();
            $('.groupDivRightPanel').first().addClass('activeHold');
            $('.saveButton').text('Group');
        }else if($('.activeHold').hasClass('groupDivRightPanel') && x == 0 && y != 0){
            $('.activeHold').remove();
            $('.lineTxt').first().addClass('activeHold');
            $('.saveButton').text('Group');
        }else if($('.activeHold').hasClass('groupDivRightPanel') && x == 0 && y == 0){
            $('.activeHold').remove();
            $('#rightPanelBT2').addClass('activeHold');
            $('.saveButton').text('Group');
        }else if($('.activeHold').hasClass('lineTxt') && y != 0){
            $('.activeHold').remove();
            $('.lineTxt').first().addClass('activeHold');
        }else if($('.activeHold').hasClass('lineTxt') && y == 0 && x!= 0){
            $('.activeHold').remove();
            $('.groupDivRightPanel').first().addClass('activeHold');
        }else if($('.activeHold').hasClass('lineTxt') && y == 0 && x== 0){
            $('.activeHold').remove();
            $('#rightPanelBT2').addClass('activeHold');
        }



        $('.deleteWrap').hide();

        if(nu == 1){
            massGroup1 = '';
        }else if(nu == 2){
            massGroup2 = '';
        }else if(nu == 3){
            massGroup3 = '';
        }else if(nu == 4){
            massGroup4 = '';
        }else if(nu == 5){
            massGroup5 = '';
        }else if(nu == 6){
            massGroup6 = '';
        }else if(nu == 7){
            massGroup7 = '';
        }else if(nu == 8){
            massGroup8 = '';
        }else if(nu == 9){
            massGroup9 = '';
        }else if(nu == 10){
            massGroup10 = '';
        }
        
*/
    

})


function groupSet(){

    
    if($('.groupDivRightPanel').length > 0){

        $('.groupDivRightPanel').each(function(){
            itemFromDivGroup += $(this).attr('data-item-in');
        });

        itemFromDivGroup = itemFromDivGroup.substring(0, itemFromDivGroup.length - 1);

        itemFromDivGroup = itemFromDivGroup.split(',')
        x = itemFromDivGroup.length;
        
    }

    //console.log(x);


    $('.lineTxt').each(function(){
        $(this).attr('data-howmuch-groups',0);
        /*$(this).children('.itemList').children('.groupMark').hide();
        $(this).children('.itemList').children('.groupMark2').hide();
        $(this).children('.itemList').children('.groupMark3').hide();
        $(this).children('.itemList').children('.groupMark4').hide();
        $(this).children('.itemList').children('.groupMark5').hide();*/
    });

    


    for(i=0;i<x;i++){

        if($('#linkAct'+itemFromDivGroup[i]).attr('data-howmuch-groups') == 0){
            $('#linkAct'+itemFromDivGroup[i]).attr('data-howmuch-groups',1);
        }else if($('#linkAct'+itemFromDivGroup[i]).attr('data-howmuch-groups') == 1){
            $('#linkAct'+itemFromDivGroup[i]).attr('data-howmuch-groups',2);
        }else if($('#linkAct'+itemFromDivGroup[i]).attr('data-howmuch-groups') == 2){
            $('#linkAct'+itemFromDivGroup[i]).attr('data-howmuch-groups',3);
        }else if($('#linkAct'+itemFromDivGroup[i]).attr('data-howmuch-groups') == 3){
            $('#linkAct'+itemFromDivGroup[i]).attr('data-howmuch-groups',4);
        }else if($('#linkAct'+itemFromDivGroup[i]).attr('data-howmuch-groups') == 4){
            $('#linkAct'+itemFromDivGroup[i]).attr('data-howmuch-groups',5);
        }
    }




    $('.lineTxt').each(function(){
        h = $(this).attr('data-howmuch-groups');
        if(h == 1){
            $(this).children('.itemList').children('.groupMark').show();
            $(this).children('.itemList').children('.groupMark').text('G1');
            $(this).children('.itemList').children('.groupMark2').hide();
            $(this).children('.itemList').children('.groupMark3').hide();
            $(this).children('.itemList').children('.groupMark4').hide();
            $(this).children('.itemList').children('.groupMark5').hide();
        }else if(h == 2){
            $(this).children('.itemList').children('.groupMark').show();
            $(this).children('.itemList').children('.groupMark').text('G1');
            $(this).children('.itemList').children('.groupMark2').show();
            $(this).children('.itemList').children('.groupMark2').text('G2');
            $(this).children('.itemList').children('.groupMark3').hide();
            $(this).children('.itemList').children('.groupMark4').hide();
            $(this).children('.itemList').children('.groupMark5').hide();
        }else if(h == 3){
            $(this).children('.itemList').children('.groupMark').show();
            $(this).children('.itemList').children('.groupMark').text('G1');
            $(this).children('.itemList').children('.groupMark2').show();
            $(this).children('.itemList').children('.groupMark2').text('G2');
            $(this).children('.itemList').children('.groupMark3').show();
            $(this).children('.itemList').children('.groupMark3').text('G3');
            $(this).children('.itemList').children('.groupMark4').hide();
            $(this).children('.itemList').children('.groupMark5').hide();
        }else if(h == 4){
            $(this).children('.itemList').children('.groupMark').show();
            $(this).children('.itemList').children('.groupMark').text('G1');
            $(this).children('.itemList').children('.groupMark2').show();
            $(this).children('.itemList').children('.groupMark2').text('G2');
            $(this).children('.itemList').children('.groupMark3').show();
            $(this).children('.itemList').children('.groupMark3').text('G3');
            $(this).children('.itemList').children('.groupMark4').show();
            $(this).children('.itemList').children('.groupMark4').text('G4');
            $(this).children('.itemList').children('.groupMark5').hide();
        }else if(h == 5){
            $(this).children('.itemList').children('.groupMark').show();
            $(this).children('.itemList').children('.groupMark').text('G1');
            $(this).children('.itemList').children('.groupMark2').show();
            $(this).children('.itemList').children('.groupMark2').text('G2');
            $(this).children('.itemList').children('.groupMark3').show();
            $(this).children('.itemList').children('.groupMark3').text('G3');
            $(this).children('.itemList').children('.groupMark4').show();
            $(this).children('.itemList').children('.groupMark4').text('G4');
            $(this).children('.itemList').children('.groupMark5').show();
            $(this).children('.itemList').children('.groupMark5').text('G5');
        }else if(h == 0){
            $(this).children('.itemList').children('.groupMark').hide();
            $(this).children('.itemList').children('.groupMark2').hide();
            $(this).children('.itemList').children('.groupMark3').hide();
            $(this).children('.itemList').children('.groupMark4').hide();
            $(this).children('.itemList').children('.groupMark5').hide();
        }
    })


    itemFromDivGroup = '';


}



function deleteQuest(){

}

function groupFreeze(){
    //choiseGroup
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


function groupColor(){
   /* 
    $('.groupMark').each(function(){

        if($(this).text() == 'G2'){
            $(this).css('background-color','#be5800');
        }else if($(this).text() == 'G3'){
            $(this).css('background-color','#75be00');
        }else if($(this).text() == 'G4'){
            $(this).css('background-color','#00beac');
        }else if($(this).text() == 'G5'){
            $(this).css('background-color','#5538f1');
        }

    })
*/
}

function freezeMem(){
    

    if($('.lineTxt').hasClass('activeItemGroup') && $('.activeHold').hasClass('activeItemGroup')){

            countEl = 0;

            numE = $('.activeItemGroup').length;

            $('.activeItemGroup').each(function(){
                if($(this).hasClass('freezeItems')){
                    countEl++;
                   //console.log('есть класс');
                }
            })

            if(countEl == numE){

                $('.activeItemGroup').each(function(){
                    $(this).removeClass('freezeItems');
                    $(this).children().children('.freezeMark').hide();
                    //убираем из памяти зафризенные лебедки
                    xNum = $(this).attr('data-freeze');
                    dataFreeze = $('#freezeItemsSet').val();
                    
                    trFreeze = dataFreeze.includes(xNum+',');
                    
                    if(trFreeze){
                        dataFreeze = dataFreeze.replace(xNum+',','');
                    }
                    $('#freezeItemsSet').val(dataFreeze);
                    
                })
                //console.log($('#freezeItemsSet').val());
            }else{
                $('.activeItemGroup').each(function(){

                    $(this).addClass('freezeItems');
                    $(this).children().children('.freezeMark').show();
                    // добавляем в память зафризенные лебедки
                    xNum = $(this).attr('data-freeze');
                    dataFreeze = $('#freezeItemsSet').val();
                    //console.log(xNum);
                    trFreeze = dataFreeze.includes(xNum+',');

                    if(!trFreeze){
                        dataFreeze = dataFreeze + xNum + ',';
                    }
                    $('#freezeItemsSet').val(dataFreeze);
                    
                })
                //console.log($('#freezeItemsSet').val());
            }
        
    }else if($('.activeHold').hasClass('groupDivRightPanel')){

        countEl = 0;
        //numE = $('.lineTxt').length;
        dataFreeze = $('.activeHold').attr('data-item-in');
        dataSetFreeze = dataFreeze.split(',');
        dataSetFreeze = dataSetFreeze.filter(n => n)
        numE = dataSetFreeze.length;

        for(i=0;i<numE;i++){
            if($('div[data-freeze='+dataSetFreeze[i]+']').hasClass('freezeItems')){
                countEl++;
            }
        }


        //console.log(countEl,numE);

        if(countEl == numE){

            for(i=0;i<numE;i++){

                $('div[data-freeze='+dataSetFreeze[i]+']').removeClass('freezeItems');
                $('div[data-freeze='+dataSetFreeze[i]+']').children().children('.freezeMark').hide();
                //убираем из памяти зафризенные лебедки
                xNum = dataSetFreeze[i];
                dataFreeze = $('#freezeItemsSet').val();
                
                trFreeze = dataFreeze.includes(xNum+',');
                
                if(trFreeze){
                    dataFreeze = dataFreeze.replace(xNum+',','');
                }
                $('#freezeItemsSet').val(dataFreeze);

            }



            /*
            $('.lineTxt').each(function(){
                $(this).removeClass('freezeItems');
                $(this).children().children('.freezeMark').hide();
                //убираем из памяти зафризенные лебедки
                xNum = $(this).attr('data-freeze');
                dataFreeze = $('#freezeItemsSet').val();
                
                trFreeze = dataFreeze.includes(xNum+',');
                
                if(trFreeze){
                    dataFreeze = dataFreeze.replace(xNum+',','');
                }
                $('#freezeItemsSet').val(dataFreeze);
                
            })*/
            //console.log($('#freezeItemsSet').val());
        }else{


            for(i=0;i<numE;i++){

                $('div[data-freeze='+dataSetFreeze[i]+']').addClass('freezeItems');
                $('div[data-freeze='+dataSetFreeze[i]+']').children().children('.freezeMark').show();
                //убираем из памяти зафризенные лебедки
                xNum = dataSetFreeze[i];
                dataFreeze = $('#freezeItemsSet').val();
                
                trFreeze = dataFreeze.includes(xNum+',');
                
                if(!trFreeze){
                    dataFreeze = dataFreeze + xNum + ',';
                }
                $('#freezeItemsSet').val(dataFreeze);

            }


            /*
            $('.lineTxt').each(function(){

                $(this).addClass('freezeItems');
                $(this).children().children('.freezeMark').show();
                // добавляем в память зафризенные лебедки
                xNum = $(this).attr('data-freeze');
                dataFreeze = $('#freezeItemsSet').val();
                //console.log(xNum);
                trFreeze = dataFreeze.includes(xNum+',');

                if(!trFreeze){
                    dataFreeze = dataFreeze + xNum + ',';
                }
                $('#freezeItemsSet').val(dataFreeze);
                
            })
            console.log($('#freezeItemsSet').val());*/

        }




    }else{

        if($('.activeHold').hasClass('lineTxt')){

            xNum = $('.activehold').attr('data-freeze');
            dataFreeze = $('#freezeItemsSet').val();
            trFreeze = dataFreeze.includes(xNum+',');

            if(!$('.activeHold').hasClass('freezeItems')){
                
                $('.activeHold').addClass('freezeItems');
                $('.activeHold').children().children('.freezeMark').show();
                dataFreeze = dataFreeze + xNum + ',';
                $('#freezeItemsSet').val(dataFreeze);
            }else{
                

                $('.activeHold').removeClass('freezeItems');
                $('.activeHold').children().children('.freezeMark').hide();
                dataFreeze = dataFreeze.replace(xNum+',','');
                $('#freezeItemsSet').val(dataFreeze);
            }
        }

/*
        xNum = $('.activehold').attr('data-num');
        dataFreeze = $('#freezeItemsSet').val();
        trFreeze = dataFreeze.includes(xNum+',');

        if(trFreeze){
            dataFreeze = dataFreeze.replace(xNum+',','');
        }else{
            dataFreeze = dataFreeze + xNum + ',';
        }
        $('#freezeItemsSet').val(dataFreeze);*/
    }

    //console.log($('#freezeItemsSet').val());
    

freezeUnfreezeButton();

}

function freezeMemSet(){

    dataFreeze = $('#freezeItemsSet').val();
    dataSetFreeze = dataFreeze.split(',');
    dataSetFreeze = dataSetFreeze.filter(n => n)

    $('.lineTxt').each(function(){
        $(this).removeClass('freezeItems');
        $(this).children().children('.freezeMark').hide();
    })


    for(i=0;i<dataSetFreeze.length;i++){
        $('div[data-freeze="'+dataSetFreeze[i]+'"]').addClass('freezeItems');
        $('div[data-freeze="'+dataSetFreeze[i]+'"]').children().children('.freezeMark').show();
    }

    
}


function freezeUnfreezeButton(){

    if($('.activeHold').hasClass('freezeItems')){
        $('.freezeButton').text('Unfreeze');
    }else{
        $('.freezeButton').text('Freeze');
    }


    if($('.activeHold').hasClass('groupDivRightPanel')){
        
        countFreezeInGroup = 0;
        xNum = $('.activeHold').attr('data-item-in');
        xNumFreeze = xNum.split(',');
        xNumFreeze = xNumFreeze.filter(n => n)

        freezeItems = xNumFreeze.length;

        //console.log(freezeItems,countFreezeInGroup);

        for(i=0;i<dataSetFreeze.length;i++){
            if($('div[data-freeze='+xNumFreeze[i]+']').hasClass('freezeItems')){
                countFreezeInGroup++;
            }
        }

        //console.log(freezeItems,countFreezeInGroup);

        if(countFreezeInGroup > 0){
            $('.freezeButton').text('Unfreeze');
        }else{
            $('.freezeButton').text('Freeze');
        }
    }
}

function setGroupOnDelete(){

}