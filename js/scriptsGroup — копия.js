var intervalFour;
var intervalSM;
var intervalMM;

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


        $(".listDiv").animate({ scrollTop:0 }, 100);

        $('.activeHold').removeClass('renameClass');
        $('.escBut').text('Esc');
        clearInterval(intervalSM);
        clearInterval(intervalMM);
        clearInterval(intervalFour);
        $('.num3').removeClass('itemActiveNumberNow');
        $('.num1').removeClass('itemActiveNumberNow');

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


    }


    if(x == 'left'){


        $(".listDiv").animate({ scrollTop:0 }, 100);

        $('.activeHold').removeClass('renameClass');
        $('.escBut').text('Esc');
        clearInterval(intervalSM);
        clearInterval(intervalMM);
        clearInterval(intervalFour);
        $('.num3').removeClass('itemActiveNumberNow');
        $('.num1').removeClass('itemActiveNumberNow');

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

    }



    if(x == 'center'){


        $('.activeHold').removeClass('renameClass');
        $('.escBut').text('Esc');
        clearInterval(intervalSM);
        clearInterval(intervalMM);
        clearInterval(intervalFour);
        $('.num3').removeClass('itemActiveNumberNow');
        $('.num1').removeClass('itemActiveNumberNow');

        //cчитаем сколько групп
        countRightGroupDiv();

        if($('.activeHold').hasClass('groupDivRightPanel') && !$('.activeHold').hasClass('activeGroupDiv')){
            
            $('.groupDivRightPanel').removeClass('activeGroupDiv');//.removeClass('choiseGroup')
            
            massNumber = $('.activeHold').attr('data-group');
            $('.activeHold').addClass('activeGroupDiv')//.addClass('choiseGroup');


            $.ajax({
                url: '/ajax/getGroup.php',
                method: 'post',
                dataType: 'html',
                data: {massNumber:massNumber},
                success: function(data){

                    var data = JSON.parse(data);



                    //massNumber;
                    console.log(data.name[0]);




                }
            });

/*
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
         */   


            $('.lineTxt').removeClass('activeItemGroup');
            //$('.groupDiv').removeClass('activeHold').removeClass('activeGroupDiv');
            //$('.lineTxt').first().addClass('activeHold');
            //alert('1')
        }else if($('.activeHold').hasClass('groupDivRightPanel') && $('.activeHold').hasClass('activeGroupDiv')){
            //alert('2')
            
            $('.activeHold').removeClass('activeGroupDiv');
            

            standartScreenNoTarget();


            $('.lineTxt').removeClass('activeItemGroup');
            //$('.groupDivRightPanel').removeClass('activeHold')//.removeClass('choiseGroup');

        }else{

            if(!$('.groupDivRightPanel').hasClass('choiseGroup') && !$('.activeHold').hasClass('butRightSide')){

                if(!$('.activeHold').hasClass('activeItemGroup') && !$('.activeHold').hasClass('withoutMark')){
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
                groupSet();
            };
        };

    }




    if(x == 'down'){


        $('.activeHold').removeClass('renameClass');
        $('.escBut').text('Esc');
        clearInterval(intervalSM);
        clearInterval(intervalMM);
        clearInterval(intervalFour);
        $('.num3').removeClass('itemActiveNumberNow');
        $('.num1').removeClass('itemActiveNumberNow');

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
            case '2':
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
                break;
            case '6':
                $(".listDiv").animate({ scrollTop:115 }, 100);
                break;
            case '7':
                $(".listDiv").animate({ scrollTop:138 }, 100);
                break;
            case '8':
                $(".listDiv").animate({ scrollTop:161 }, 100);
                break;
            case '9':
                $(".listDiv").animate({ scrollTop:184 }, 100);
                break;
            case '10':
                $(".listDiv").animate({ scrollTop:207 }, 100);
                break;
            case '11':
                $(".listDiv").animate({ scrollTop:230 }, 100);
                break;
            case '12':
                $(".listDiv").animate({ scrollTop:253 }, 100);
                break;
            case '13':
                $(".listDiv").animate({ scrollTop:276 }, 100);
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

        
    }
    
    if(x == 'up'){



        $('.activeHold').removeClass('renameClass');
        $('.escBut').text('Esc');
        clearInterval(intervalSM);
        clearInterval(intervalMM);
        clearInterval(intervalFour);
        $('.num3').removeClass('itemActiveNumberNow');
        $('.num1').removeClass('itemActiveNumberNow');

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
                $(".listDiv").animate({ scrollTop:390 }, 100);
                break;
            case '22':
                $(".listDiv").animate({ scrollTop:410 }, 100);
                break;
            case '23':
                $(".listDiv").animate({ scrollTop:430 }, 100);
                break;
            case '24':
                $(".listDiv").animate({ scrollTop:450 }, 100);
                break;
            case '25':
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
                break;
            case '30':
                $(".listDiv").animate({ scrollTop:600 }, 100);
                break;                

            default:
        }
    }

    
    if($('.activeHold').hasClass('groupDivRightPanel')){
        $('.saveButton').text('Ungroup');
    }else{
        $('.saveButton').text('Group');
    }

};




$('#downPanelRight').click(function(){

        $('.activeHold').removeClass('renameClass');
        $('.escBut').text('Esc');
        clearInterval(intervalMM);
        clearInterval(intervalSM);
        clearInterval(intervalFour);
        $('.num3').removeClass('itemActiveNumberNow');
        $('.num1').removeClass('itemActiveNumberNow');
        intervalFour = setInterval(itemChoiseIntervalFour,1000);
        $('.activeHold').addClass('renameClass');
        if($('.activeHold').hasClass('renameClass')){
            $('.escBut').text('Save');
        }

});

$('#downPanelLeft').click(function(){

    $('.activeHold').removeClass('renameClass');
    $('.escBut').text('Esc');
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

        clearInterval(intervalMM);
        clearInterval(intervalSM);
        clearInterval(intervalFour);
        $('.num3').removeClass('itemActiveNumberNow');
        $('.num1').removeClass('itemActiveNumberNow');


    }else{

        clearInterval(intervalMM);
        clearInterval(intervalSM);
        clearInterval(intervalFour);
        $('.num3').removeClass('itemActiveNumberNow');
        $('.num1').removeClass('itemActiveNumberNow');
        intervalFour = setInterval(itemChoiseIntervalFour,1000);

        $('.allNum').removeClass('activeMM');
        $('.mmNum').hide();

        $('.downNumbersRightPanel').removeClass('activeMMNum');
        $('.numSep').removeClass('activeMMSep');

    }

});

$('#mmBut').click(function(){
    $('.activeHold').removeClass('renameClass');
    $('.escBut').text('Esc');
    if($(this).attr('data-panel-set') == 2){


        clearInterval(intervalMM);
        clearInterval(intervalSM);
        clearInterval(intervalFour);
        $('.num3').removeClass('itemActiveNumberNow');
        $('.num1').removeClass('itemActiveNumberNow');
        intervalSM = setInterval(itemChoiseIntervalMM,1000);

        $('.allNum').addClass('activeMM');
        $('.mmNum').show();

        $('.downNumbersRightPanel').addClass('activeMMNum');
        $('.numSep').addClass('activeMMSep');
    }

});


$('div[data-ran]').each(function() {
    $( this ).text($(this).attr('data-ran'));
  });

$('.freezeButton').on('click', function(){

    $('.activeHold').removeClass('renameClass');
    clearInterval(intervalMM);
    clearInterval(intervalSM);
    clearInterval(intervalFour);
    $('.num3').removeClass('itemActiveNumberNow');
    $('.num1').removeClass('itemActiveNumberNow');

    if($('.activeHold').hasClass('lineTxt') || $('.activeHold').hasClass('groupDivRightPanel')){
        x = $('.activeHold').attr('data-name');

        $('.deleteWrap').show();
        $('.nameDeleteObject').text(x);
    }



})

//±

$('.saveButton').on('click',function(){

    $('.activeHold').removeClass('renameClass');
    $('.escBut').text('Esc');
    $('.lineTxt').removeClass('activeHold');








    
    
    

    if($('.saveButton').text() == 'Ungroup'){

        nu = $('.activeHold').attr('data-num-groupdiv');
        $('.activeHold').remove();

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
        }else if(nu== 9){
            massGroup9 = '';
        }else if(nu == 10){
            massGroup10 = '';
        }

        lenOfGroup = $('.groupDivRightPanel').length;

        if(lenOfGroup > 0){
            standartScreenNoTarget();
        }else{
            standartScreen();
        }


    }


    pack = '';
    x = $('.groupDivRightPanel').length
    c = '';

    clearInterval(intervalMM);
    clearInterval(intervalSM);
    clearInterval(intervalFour);
    $('.num3').removeClass('itemActiveNumberNow');
    $('.num1').removeClass('itemActiveNumberNow');


    if($('.lineTxt').hasClass("activeItemGroup")){
        $('.activeItemGroup').removeClass('activeHold');

        $('.activeItemGroup').each(function(){

            //$(this).addClass('withoutMark');

        });

        

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

    divIn = '<div data-group="'+c+'"  class="row groupDivRightPanel" data-name="Group '+c+'"><div data-group="'+c+'" class="groupDiv col-12 col-sm-12 col-xs-12 col-lg-12"> <span class="num1">G</span>roup '+c+'</div></div>'

    itemGroup = '';

    if(x == 0){
        $('.groupWarpItem').html(divIn);
    }else if(x > 0){
        $('.groupWarpItem').append(divIn);
    }

    //отправляем данные в БД
    $('.activeItemGroup').each(function(){

        name = $(this).attr('data-name');
        numb1 = $(this).children('.firstNum').text();
        numb2 = $(this).children('.secondNum').text();
        group = c;
        
        
        $.ajax({
            url: '/ajax/group.php',
            method: 'post',
            dataType: 'html',
            data: {name:name,numb1:numb1,numb2:numb2,group:group},
            success: function(data){


                //console.log(data[name]);
            }
        });



    })


    $('.lineTxt').removeClass('activeItemGroup');




    }





    }

    countRightGroupDiv();

    $('div[data-num-groupdiv='+(c-1)+']').addClass('activeHold');

    $('.activeHold').removeClass('renameClass');
    clearInterval(intervalMM);
    clearInterval(intervalSM);
    clearInterval(intervalFour);
    $('.num3').removeClass('itemActiveNumberNow');
    $('.num1').removeClass('itemActiveNumberNow');
    $('.escBut').text('Save')
    intervalFour = setInterval(itemChoiseIntervalFour,1000);


    if($('.activeHold').hasClass('groupDivRightPanel')){
        $('.saveButton').text('Ungroup');
    }else{
        $('.saveButton').text('Group');
    }





   // groupSet();

})

$('.escBut').on('click',function(){


    if($('.escBut').text()=='Save'){
        $('.activeHold').removeClass('renameClass');
        clearInterval(intervalMM);
        clearInterval(intervalSM);
        clearInterval(intervalFour);
        $('.num3').removeClass('itemActiveNumberNow');
        $('.num1').removeClass('itemActiveNumberNow');
        $('.escBut').text('Esc')

    }else{

        if($('.activeHold').hasClass('renameClass')){
            $('.escBut').text('Save');
        }

        if($('.numSep').is(':visible')){
        clearInterval(intervalMM);
        clearInterval(intervalSM);
        clearInterval(intervalFour);
        $('.num3').removeClass('itemActiveNumberNow');
        $('.num1').removeClass('itemActiveNumberNow');
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
        $('.num3').removeClass('itemActiveNumberNow');
        $('.num1').removeClass('itemActiveNumberNow');
        
        
        
        $('#downPanelLeft').attr('data-panel-set',1);
        $('#downPanelLeft').text('Left');
        
        $('#downPanelRight').attr('data-panel-set',1);
        $('#downPanelRight').text('Right');
        
        $('#mmBut').attr('data-panel-set',1);
        $('#mmBut').text('');
        
        }else{
            document.location.href = '/index.php?L=N';
        }
    }

})


function itemChoiseIntervalFour(){

    if(!$('.activeHold').children().children('.num1').hasClass('itemActiveNumberNow')){
        $('.activeHold').children().children('.num1').addClass('itemActiveNumberNow');
    }else{
        $('.activeHold').children().children('.num1').removeClass('itemActiveNumberNow');
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
    $('#downPanelLeft').addClass('butActive');
},
function(){
    $('#downPanelLeft').removeClass('butActive');
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
    
    x = $('.groupDivRightPanel').length;
    y = $('.lineTxt').length;

    if($('.activeHold').hasClass('groupDivRightPanel') && x > 1){
        $('.activeHold').remove();
        alert('1')
        $('.groupDivRightPanel').first().addClass('activeHold');
        $('.saveButton').text('Group');
    }else if($('.activeHold').hasClass('groupDivRightPanel') && x > 1){
        $('.activeHold').remove();
        alert('1')
        $('.groupDivRightPanel').first().addClass('activeHold');
        $('.saveButton').text('Group');
    }else if($('.activeHold').hasClass('groupDivRightPanel') && x == 0 && y != 0){
        $('.activeHold').remove();
        alert('2')
        $('.lineTxt').first().addClass('activeHold');
        $('.saveButton').text('Group');
    }else if($('.activeHold').hasClass('groupDivRightPanel') && x == 0 && y == 0){
        $('.activeHold').remove();
        alert('3')
        $('#rightPanelBT2').addClass('activeHold');
        $('.saveButton').text('Group');
    }else if($('.activeHold').hasClass('lineTxt') && y != 0){
        $('.activeHold').remove();
        alert('4')
        $('.lineTxt').first().addClass('activeHold');
    }else if($('.activeHold').hasClass('lineTxt') && y == 0 && x!= 0){
        $('.activeHold').remove();
        alert('5')
        $('.groupDivRightPanel').first().addClass('activeHold');
    }else if($('.activeHold').hasClass('lineTxt') && y == 0 && x== 0){
        $('.activeHold').remove();
        alert('6')
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
})


function groupSet(){

/*
    if($('.groupDivRightPanel').length > 0){

        $('.groupDivRightPanel').each(function(){
            itemFromDivGroup += $(this).attr('data-item-in');
        });

        itemFromDivGroup = itemFromDivGroup.substring(0, itemFromDivGroup.length - 1);
        itemFromDivGroup = itemFromDivGroup.split(',')
        x = itemFromDivGroup.length;
        
    }else{

        $('.lineTxt').each(function(){
            $(this).attr('data-howmuch-groups',0);
            $(this).children('.itemList').children('.groupMark').hide();
        });

    };


    //console.log(x);
    for(i=0;i<x;i++){
        //console.log(itemFromDivGroup[i]);
        if($('div[data-num='+itemFromDivGroup[i]+']').attr('data-howmuch-groups') == 0){
            $('div[data-num='+itemFromDivGroup[i]+']').attr('data-howmuch-groups',1);
        }
    }





    $('.lineTxt').each(function(){
        h = $(this).attr('data-howmuch-groups');
        if(h == 1){
            $(this).children('.itemList').children('.groupMark').show();

        }else if(h == 2){
            $(this).children('.itemList').children('.groupMark').show();
            $(this).children('.itemList').children('.groupMark').text('G+');
        }else if(h == 0){
            $(this).children('.itemList').children('.groupMark').hide();
        }
    })


    itemFromDivGroup = '';

    //itemFromDivGroup



    /*
    $('.lineTxt').each(function(){
        if($(this).attr('data-howmuch-groups') == 1){
            $(this).children('.itemList').children('.groupMark').show();
        }else if($(this).attr('data-howmuch-groups') == 2){
            $(this).children('.itemList').children('.groupMark').show();
            $(this).children('.itemList').children('.groupMark').text('G+');
        }else if($(this).attr('data-howmuch-groups') == 0){
            $(this).children('.itemList').children('.groupMark').hide();
        }
    })
    */



}