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

    $('#downPanelLeft').hover(
        function() {
            $('#downPanelLeft').addClass('butActive')
        },
        function() {
            $('#downPanelLeft').removeClass('butActive')
    })    

    $('#downPanelRight').hover(
        function() {
            $('#downPanelRight').addClass('butActive')
        },
        function() {
            $('#downPanelRight').removeClass('butActive')
    })        

    $('#mmBut').hover(
        function() {
            $('#mmBut').addClass('butActive')
        },
        function() {
            $('#mmBut').removeClass('butActive')
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
    if($(a).attr('id') == 'center' || $(a).attr('id') == 'centerButSecond' || $(a).attr('id') == 'centerJRotate'){
        x = 'center';
    }

    target = $('.activeHold').data('num');


    
    if(x == 'right'){

        t = $('.activeHold').attr('data-target');
        if(t == 'leftPanel'){
            $('.lineTxt').each(function(){
                $(this).removeClass('activeHold');
                $(this).removeClass('holdOff');
                $(this).removeClass('holded');
            })
            $('#rightPanelBT1').addClass('activeHold');
        }else{
            b = $('.activeHold').attr('data-numb-bt');
            if(b == 1){
                $('#rightPanelBT1').removeClass('activeHold');
                $('#rightPanelBT2').addClass('activeHold');
            }else{
                $('#rightPanelBT2').removeClass('activeHold');
                $('#linkAct1').addClass('activeHold');
                $(".listDiv").scrollTop($(".activeHold").position(0).top);
            }
        }
        setNumbersDownPanel();
    }


    if(x == 'left'){
       
        t = $('.activeHold').attr('data-target');
        if(t == 'leftPanel'){
            $('.lineTxt').each(function(){
                $(this).removeClass('activeHold');
                $(this).removeClass('holdOff');
                $(this).removeClass('holded');
            })
            $('#rightPanelBT2').addClass('activeHold');
        }else{
            b = $('.activeHold').attr('data-numb-bt');
            if(b == 2){
                $('#rightPanelBT2').removeClass('activeHold');
                $('#rightPanelBT1').addClass('activeHold');
            }else{
                $('#rightPanelBT1').removeClass('activeHold');
                $('#linkAct1').addClass('activeHold');
                $(".listDiv").scrollTop($(".activeHold").position(0).top);
            }
        }
        setNumbersDownPanel();
    }



    if(x == 'center'){



        if($('.activeHold').attr('id')=='rightPanelBT2'){
            document.location.href = "/menu.php";
        }

        if($('.activeHold').attr('id')=='rightPanelBT1'){
            document.location.href = "/3dGroup.php";
        }     


        clearInterval(intervalMM);
        clearInterval(intervalSM);
        clearInterval(intervalFour);
        $('.num3').removeClass('itemActiveNumberNow');
        $('.num1').removeClass('itemActiveNumberNow');
        $('.fnMM').removeClass('itemActiveNumberNow');

        $('.allNum').removeClass('activeMM');
        $('.mmNum').hide();



        //$('.downNumbersRightPanel').removeClass('activeMMNum');
        //$('.numSep').removeClass('activeMMSep');

/*
        if(!$('.activeHold').hasClass('butRightSide')){

            $('div[data-target=leftPanel]').each(function(){
                if($(this).hasClass('holdOff')){
                    $(this).removeClass('holdOff');
                    $(this).removeClass('holded');

                }else{
                    if($(this).hasClass('holded')){
                        $('.activeHold').removeClass('holded');
                    }else{
                        $(this).addClass('holdOff');
                        $('.activeHold').removeClass('holdOff');
                        $('.activeHold').addClass('holded');
                    }
                }
            })

            $('div[data-target=leftPanel]').each(function(){
                if(!$(this).hasClass('activeHold')){
                    $('.activeHold').removeClass('holdOff');
                    $(this).removeClass('holded');
                }
            })
*/


        // первое нажатие ставит классы, второе убирает
        if(!$('.activeHold').hasClass('butRightSide')){

            if($('.activeHold').hasClass('holded')){
                clearInterval(intervalMM);
                clearInterval(intervalSM);
                clearInterval(intervalFour);
                $('.num3').removeClass('itemActiveNumberNow');
                $('.num1').removeClass('itemActiveNumberNow');
                $('.fnMM').removeClass('itemActiveNumberNow');
            }else{
                intervalSM = setInterval(itemChoiseIntervalFour,1000);
            }

            $('div[data-target=leftPanel]').each(function(){
                if($(this).hasClass('holdOff')){




                /*    $(this).removeClass('holdOff');
                    $(this).removeClass('holded');
                */
                }else{
                    if($(this).hasClass('holded')){
                    /*    $('.activeHold').removeClass('holded');*/
                    }else{
                       $(this).addClass('holdOff');
                        $('.activeHold').removeClass('holdOff');
                        $('.activeHold').addClass('holded');
                    }
                }
            })

            $('div[data-target=leftPanel]').each(function(){
                if(!$(this).hasClass('activeHold')){
                    $('.activeHold').removeClass('holdOff');
                    $(this).removeClass('holded');
                }
            })


            if($('.lineTxt').hasClass('holded')){
                $('.leftBut').addClass('stopClick');
                $('.rightBut').addClass('stopClick');
                $('.upBut').addClass('stopClick');
                $('.downBut').addClass('stopClick');


                //заполняем данные о выбранной ячейке
              /*  $('.someNumbers').text('040/000');
                n = $('.holded').children('.nameItem').text();
                n1 = $('.holded').children('.firstNum').text();
                n2 = $('.holded').children('.secondNum').text();

                $('.nameItemRightPanel').text(n);
                $('.upNumbersRightPanel').text(n1);
                //$('.downNumbersRightPanel').text(n2);
                $('.num1').text(n2[0]);
                $('.num2').text(n2[1]);
                $('.num3').text(n2[3]);
                $('.num4').text(n2[4]);
                $('.numSep').show();*/

                

                $('#downPanelLeft').attr('data-panel-set',2);
                $('#downPanelLeft').html('<u class="wSetNum">0</u>0.00');

                $('#downPanelRight').attr('data-panel-set',2);
                $('#downPanelRight').html('00.<u class="wSetNum">0</u>0');

                $('#mmBut').attr('data-panel-set',2);
                $('#mmBut').html('00.0<u class="wSetNum">0</u>');


                $('#mmBut').removeClass('emptyBut');
                $('#mmBut').addClass('downButs');

                //$('.saveButton').attr('data-panel-set',2);
                //$('.saveButton').text('Save');

                $('.freezeButton').attr('data-panel-set',2);
                $('.freezeButton').text('Freeze');

                $('.escBut').attr('data-panel-set',2);
                $('.escBut').text('Esc');
                 


            }else{

                clearInterval(intervalSM);
                clearInterval(intervalMM);
                clearInterval(intervalFour);
                $('.num3').removeClass('itemActiveNumberNow');
                $('.num1').removeClass('itemActiveNumberNow');
                $('.fnMM').removeClass('itemActiveNumberNow');

                /*
                $('.leftBut').removeClass('stopClick');
                $('.rightBut').removeClass('stopClick');
                $('.upBut').removeClass('stopClick');
                $('.downBut').removeClass('stopClick');

               /* $('.someNumbers').text('');
                $('.nameItemRightPanel').text('');
                $('.upNumbersRightPanel').text('');*/
/*
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
                $('#downPanelLeft').text('◄');

                $('#downPanelRight').attr('data-panel-set',1);
                $('#downPanelRight').text('►');

                $('#mmBut').attr('data-panel-set',1);
                $('#mmBut').text('');


                $('.freezeButton').attr('data-panel-set',2);
                $('.freezeButton').addClass('emptyBut');
                 
                $('.saveButton').attr('data-panel-set',2);
                $('.saveButton').text('Preset');

                $('.escBut').attr('data-panel-set',2);
                $('.escBut').text('View');

                */

            }
        }
        
        
        FreezeOrNot();
        setNameButtonGroup();
        setNumbersDownPanel();
    }




    if(x == 'down'){
        setMem();
        
        $('.lineTxt').removeClass('activeHold');
        if(target>29){
            target = 30;
        }else{
            target++;
        }

        $('#linkAct'+target).addClass('activeHold')
        /*$(".listDiv").scrollTop($(".activeHold").position().top);*/
        targ2 = $(".activeHold").attr('id');

        switch(targ2) {
            /*case 'linkAct1':
                $(".listDiv").animate({ scrollTop:0 }, 10);
                break;
            case 'linkAct2':
                $(".listDiv").animate({ scrollTop:23 }, 100);
                break;
            case 'linkAct3':
                $(".listDiv").animate({ scrollTop:46 }, 100);
                break;
            case 'linkAct4':
                $(".listDiv").animate({ scrollTop:69 }, 100);
                break;
            case 'linkAct5':
                $(".listDiv").animate({ scrollTop:92 }, 100);
                break;*/
            case 'linkAct6':
                $(".listDiv").animate({ scrollTop:35 }, 100);
                break;
            case 'linkAct7':
                $(".listDiv").animate({ scrollTop:60 }, 100);
                break;
            case 'linkAct8':
                $(".listDiv").animate({ scrollTop:85 }, 100);
                break;
            case 'linkAct9':
                $(".listDiv").animate({ scrollTop:110 }, 100);
                break;
            case 'linkAct10':
                $(".listDiv").animate({ scrollTop:135 }, 100);
                break;
            case 'linkAct11':
                $(".listDiv").animate({ scrollTop:160 }, 100);
                break;
            case 'linkAct12':
                $(".listDiv").animate({ scrollTop:185 }, 100);
                break;
            case 'linkAct13':
                $(".listDiv").animate({ scrollTop:210 }, 100);
                break;
            case 'linkAct14':
                $(".listDiv").animate({ scrollTop:235 }, 100);
                break;
            case 'linkAct15':
                $(".listDiv").animate({ scrollTop:260 }, 100);
                break;
            case 'linkAct16':
                $(".listDiv").animate({ scrollTop:285 }, 100);
                break;
            case 'linkAct17':
                $(".listDiv").animate({ scrollTop:310 }, 100);
                    break;
            case 'linkAct18':
                $(".listDiv").animate({ scrollTop:335 }, 100);
                break;
            case 'linkAct19':
                $(".listDiv").animate({ scrollTop:360 }, 100);
                break;
            case 'linkAct20':
                $(".listDiv").animate({ scrollTop:385 }, 100);
                break;
            case 'linkAct21':
                $(".listDiv").animate({ scrollTop:410 }, 100);
                break;
            case 'linkAct22':
                $(".listDiv").animate({ scrollTop:435 }, 100);
                break;
            case 'linkAct23':
                $(".listDiv").animate({ scrollTop:460 }, 100);
                break;   
            case 'linkAct24':
                $(".listDiv").animate({ scrollTop:485 }, 100);
                break;  
            case 'linkAct25':
                $(".listDiv").animate({ scrollTop:510 }, 100);
                break;  
            case 'linkAct26':
                $(".listDiv").animate({ scrollTop:535 }, 100);
                break;  
            case 'linkAct26':
                $(".listDiv").animate({ scrollTop:560 }, 100);
                break;  
            default:

        }

        setNameButtonGroup();
        setNumbersDownPanel();
    }
    
    if(x == 'up'){

        setMem()

        $('.lineTxt').removeClass('activeHold')
        
        if(target == 1){
            target = 1;
        }else{
            target--;
        }

        $('#linkAct'+target).addClass('activeHold');

        targ2 = $(".activeHold").attr('id');

        switch(targ2) {
           /* case 'linkAct1':
                $(".listDiv").animate({ scrollTop:0 }, 10);
                break;
            case 'linkAct2':
                $(".listDiv").animate({ scrollTop:23 }, 100);
                break;
            case 'linkAct3':
                $(".listDiv").animate({ scrollTop:46 }, 100);
                break;
            case 'linkAct4':
                $(".listDiv").animate({ scrollTop:69 }, 100);
                break;
            case 'linkAct5':
                $(".listDiv").animate({ scrollTop:92 }, 100);
                break;
            case 'linkAct6':
                $(".listDiv").animate({ scrollTop:115 }, 100);
                break;*/
                case 'linkAct4':
                    $(".listDiv").animate({ scrollTop:0 }, 100);
                    break;
                case 'linkAct5':
                    $(".listDiv").animate({ scrollTop:10 }, 100);
                    break;
                case 'linkAct6':
                    $(".listDiv").animate({ scrollTop:35 }, 100);
                    break;
                case 'linkAct7':
                    $(".listDiv").animate({ scrollTop:60 }, 100);
                    break;
                case 'linkAct8':
                    $(".listDiv").animate({ scrollTop:85 }, 100);
                    break;
                case 'linkAct9':
                    $(".listDiv").animate({ scrollTop:110 }, 100);
                    break;
                case 'linkAct10':
                    $(".listDiv").animate({ scrollTop:135 }, 100);
                    break;
                case 'linkAct11':
                    $(".listDiv").animate({ scrollTop:160 }, 100);
                    break;
                case 'linkAct12':
                    $(".listDiv").animate({ scrollTop:185 }, 100);
                    break;
                case 'linkAct13':
                    $(".listDiv").animate({ scrollTop:210 }, 100);
                    break;
                case 'linkAct14':
                    $(".listDiv").animate({ scrollTop:235 }, 100);
                    break;
                case 'linkAct15':
                    $(".listDiv").animate({ scrollTop:260 }, 100);
                    break;
                case 'linkAct16':
                    $(".listDiv").animate({ scrollTop:285 }, 100);
                    break;
                case 'linkAct17':
                    $(".listDiv").animate({ scrollTop:310 }, 100);
                        break;
                case 'linkAct18':
                    $(".listDiv").animate({ scrollTop:335 }, 100);
                    break;
                case 'linkAct19':
                    $(".listDiv").animate({ scrollTop:360 }, 100);
                    break;
                case 'linkAct20':
                    $(".listDiv").animate({ scrollTop:385 }, 100);
                    break;
                case 'linkAct21':
                    $(".listDiv").animate({ scrollTop:410 }, 100);
                    break;
                case 'linkAct22':
                    $(".listDiv").animate({ scrollTop:435 }, 100);
                    break;
                case 'linkAct23':
                    $(".listDiv").animate({ scrollTop:460 }, 100);
                    break;   
                case 'linkAct24':
                    $(".listDiv").animate({ scrollTop:485 }, 100);
                    break;  
                case 'linkAct25':
                    $(".listDiv").animate({ scrollTop:510 }, 100);
                    break;  
                case 'linkAct26':
                    $(".listDiv").animate({ scrollTop:535 }, 100);
                    break;  
                case 'linkAct26':
                    $(".listDiv").animate({ scrollTop:560 }, 100);
                    break;  
                default:             

        }
    }


    setNameButtonGroup();
    setNumbersDownPanel();
};




$('#downPanelRight').click(function(){

    x = $('.activePanel').attr('data-id');

    if($(this).attr('data-panel-set') == 1){

        $('#panel'+x).removeClass('activePanel');
    
        if(x == 5){
            x = 5;
        }else{
            x++;
        }
    
        if(x == 1){
            $(".wrapFourIn").animate({ scrollLeft:0 }, 200);
            $('.leftItemButRightSide').css('backgroundImage', 'url(/img/rightArr.png)');
        }
        if(x == 2){
            $(".wrapFourIn").animate({ scrollLeft:135 }, 200);
            $('.leftItemButRightSide').css('backgroundImage', 'url(/img/leftArr.png)');
        }
        if(x == 3){
            $(".wrapFourIn").animate({ scrollLeft:270 }, 200);
        }    
        if(x == 5){
            $(".wrapFourIn").animate({ scrollLeft:545 }, 500);
        }
        $('#panel'+x).addClass('activePanel');

        clearInterval(intervalMM);
        clearInterval(intervalSM);
        clearInterval(intervalFour);
        $('.num3').removeClass('itemActiveNumberNow');
        $('.num1').removeClass('itemActiveNumberNow');
        $('.fnMM').removeClass('itemActiveNumberNow');
    }else{

        clearInterval(intervalMM);
        clearInterval(intervalSM);
        clearInterval(intervalFour);
        $('.num3').removeClass('itemActiveNumberNow');
        $('.num1').removeClass('itemActiveNumberNow');
        $('.fnMM').removeClass('itemActiveNumberNow');
        intervalSM = setInterval(itemChoiseIntervalSM,1000);

        $('.allNum').removeClass('activeMM');
        $('.mmNum').hide();

        //$('.downNumbersRightPanel').removeClass('activeMMNum');
        $('.numSep').removeClass('activeMMSep');
    }

});

$('#downPanelLeft').click(function(){

    if($(this).attr('data-panel-set') == 1){

        x = $('.activePanel').attr('data-id');
        $('#panel'+x).removeClass('activePanel');
        
        if(x == 1){
            x = 1;
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
        $('.fnMM').removeClass('itemActiveNumberNow');

    }else{

        clearInterval(intervalMM);
        clearInterval(intervalSM);
        clearInterval(intervalFour);
        $('.num3').removeClass('itemActiveNumberNow');
        $('.num1').removeClass('itemActiveNumberNow');
        $('.fnMM').removeClass('itemActiveNumberNow');
        intervalFour = setInterval(itemChoiseIntervalFour,1000);

        $('.allNum').removeClass('activeMM');
        $('.mmNum').hide();

        //$('.downNumbersRightPanel').removeClass('activeMMNum');
        $('.numSep').removeClass('activeMMSep');

    }

});

$('#mmBut').click(function(){

    if($(this).attr('data-panel-set') == 2){


        clearInterval(intervalMM);
        clearInterval(intervalSM);
        clearInterval(intervalFour);
        $('.num3').removeClass('itemActiveNumberNow');
        $('.num1').removeClass('itemActiveNumberNow');
        $('.fnMM').removeClass('itemActiveNumberNow');
        intervalSM = setInterval(itemChoiseIntervalMM,1000);

        //$('.allNum').addClass('activeMM');
        //$('.mmNum').hide();

        //$('.downNumbersRightPanel').addClass('activeMMNum');
        //$('.numSep').addClass('activeMMSep');
    }


});



$('div[data-ran]').each(function() {
    $( this ).text($(this).attr('data-ran'));
  });


function FreezeOrNot(){



    if($('.holded').children('.markListFreeze').hasClass('markList3')){
        $('.freezeButton').addClass('activeButFreeze');
        $('.freezeButton').text('Unfreeze');
    }else{
        $('.freezeButton').removeClass('activeButFreeze');
        $('.freezeButton').text('Freeze');
    }

    if($('.holded').length == 0){
        $('.freezeButton').text('');
    }

/*

    if($('.holded').length>0){
        $('.freezeButton').addClass('activeButFreeze');
        $('.freezeButton').text('Unfreeze');
    }else{
        $('.freezeButton').removeClass('activeButFreeze');
        $('.freezeButton').text('Freeze');
    }

    /*
    if(!$('.activeHold').children('.markListFreeze').hasClass('markList3')){
        $('.freezeButton').removeClass('activeButFreeze');
        $('.freezeButton').text('Freeze');
    }else{
        $('.freezeButton').addClass('activeButFreeze');
        $('.freezeButton').text('Unfreeze');
    };
*/



}



$('.freezeButton').on('click', function(){



    if($('.activeHold').hasClass('holded')){

        if($('.freezeButton').text() == 'Freeze'){

            if($('.holded').hasClass('groupClass')){

                $('.groupClass').children('.markListFreeze').text('F');
                $('.groupClass').children('.markListFreeze').addClass('markList3');

            }else{

                $('.holded').children('.markListFreeze').text('F');
                $('.holded').children('.markListFreeze').addClass('markList3');

            }

            


            $('.freezeButton').addClass('activeButFreeze');
            $('.freezeButton').text('Unfreeze');



        }else{

            if($('.holded').hasClass('groupClass')){

                $('.groupClass').children('.markListFreeze').text('');
                $('.groupClass').children('.markListFreeze').removeClass('markList3');

            }else{
                $('.holded').children('.markListFreeze').text('');
                $('.holded').children('.markListFreeze').removeClass('markList3');
            }
            
            $('.freezeButton').removeClass('activeButFreeze');
            $('.freezeButton').text('Freeze');

        };
    }else if($('.activeHold').hasClass('lineTxt')){
        if($('.activeHold').hasClass('groupClass')){
            $('.activeHold').removeClass('groupClass');

        }else{
            $('.activeHold').addClass('groupClass');

        }
    }

    
    groupThis();
    setNameButtonGroup();


})


function groupThis(){
    $('.lineTxt').each(function(){
        if($(this).hasClass('groupClass')){
            $(this).children('.groupItems').text('+');
        }else{
            $(this).children('.groupItems').text('');
        }
    })
}




$('.saveButton').on('click',function(){



    if($('.saveButton').text() == 'Save'){

        clearInterval(intervalMM);
        clearInterval(intervalSM);
        clearInterval(intervalFour);
        $('.num3').removeClass('itemActiveNumberNow');
        $('.num1').removeClass('itemActiveNumberNow');
        $('.fnMM').removeClass('itemActiveNumberNow');
      /*  intervalSM = setInterval(itemChoiseIntervalSM,1000);

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

        $('.freezeButton').attr('data-panel-set',2);
        $('.freezeButton').text('');
        $('.freezeButton').addClass('emptyBut');

        $('.saveButton').attr('data-panel-set',2);
        $('.saveButton').text('Preset');

        $('.escBut').attr('data-panel-set',2);
        $('.escBut').text('View');




        $('.freezeButton').removeClass('activeFreeze');

        */
    }else{

        document.location.href = "/presets.php";



    }



})

$('.escBut').on('click',function(){



    if($('.escBut').text() == 'View'){

        document.location.href = '/circles.php';

    }else{
        
        if($('.activeHold').hasClass('holded')){




        $('.leftBut').removeClass('stopClick');
        $('.rightBut').removeClass('stopClick');
        $('.upBut').removeClass('stopClick');
        $('.downBut').removeClass('stopClick');

       /* $('.someNumbers').text('');
        $('.nameItemRightPanel').text('');
        $('.upNumbersRightPanel').text('');*/
/*
        $('.num1').text('');
        $('.num2').text('');
        $('.num3').text('');
        $('.num4').text('');
        $('.numSep').hide();
*/
        clearInterval(intervalSM);
        clearInterval(intervalMM);
        clearInterval(intervalFour);
        $('.num3').removeClass('itemActiveNumberNow');
        $('.num1').removeClass('itemActiveNumberNow');
        $('.fnMM').removeClass('itemActiveNumberNow');


        $('#downPanelLeft').attr('data-panel-set',1);
        $('#downPanelLeft').text('◄');

        $('#downPanelRight').attr('data-panel-set',1);
        $('#downPanelRight').text('►');

        $('#mmBut').attr('data-panel-set',1);
        $('#mmBut').text('');


        $('.freezeButton').attr('data-panel-set',2);
        $('.freezeButton').addClass('emptyBut');
         
        $('.saveButton').attr('data-panel-set',2);
        $('.saveButton').text('Preset');

        $('.escBut').attr('data-panel-set',2);
        $('.escBut').text('View');



        $('div[data-target=leftPanel]').each(function(){
            if($(this).hasClass('holdOff')){
                $(this).removeClass('holdOff');
                $(this).removeClass('holded');
            
            }else{
                if($(this).hasClass('holded')){
                    $('.activeHold').removeClass('holded');
                }else{
                   /*$(this).addClass('holdOff');*/
                    $('.activeHold').removeClass('holdOff');
                    /*$('.activeHold').addClass('holded');*/
                }
            }
        })




        }else{



        //


        if($('.numSep').is(':visible')){
        clearInterval(intervalMM);
        clearInterval(intervalSM);
        clearInterval(intervalFour);
        $('.num3').removeClass('itemActiveNumberNow');
        $('.num1').removeClass('itemActiveNumberNow');
        $('.fnMM').removeClass('itemActiveNumberNow');
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

       /* $('.someNumbers').text('');
        $('.nameItemRightPanel').text('');
        $('.upNumbersRightPanel').text('');*/

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
        $('.fnMM').removeClass('itemActiveNumberNow');


        $('#downPanelLeft').attr('data-panel-set',1);
        $('#downPanelLeft').text('◄');
        

        $('#downPanelRight').attr('data-panel-set',1);
        $('#downPanelRight').text('►');

        $('#mmBut').attr('data-panel-set',1);
        $('#mmBut').text('');


        $('.freezeButton').attr('data-panel-set',2);
        $('.freezeButton').text('');
        $('.freezeButton').addClass('emptyBut');


        $('.saveButton').attr('data-panel-set',2);
        $('.saveButton').text('Preset');


        $('.escBut').attr('data-panel-set',2);
        $('.escBut').text('View');





        }else{
            document.location.href = '/menu.php';
        }}

    }

    $('.freezeButton').removeClass('activeButFreeze');
    $('.leftBut').removeClass('stopClick');
    $('.rightBut').removeClass('stopClick');
    $('.upBut').removeClass('stopClick');
    $('.downBut').removeClass('stopClick');


    setNameButtonGroup();

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
$('#greyBut6').on('click',function(){
    $('.escBut').click();
})

$('.entButtonBig').on('click',function(){
    joistClick(this);
})
$('.escButtonBig').on('click',function(){
    //document.location.href = "/index.php?L=N";

    if($('.escBut').text() == 'Esc'){
        $('.escBut').click();
    }else{
        //document.location.href = "/menu.php";
    }

   
})

function setMem(){

    x = $('.activeHold').attr('data-mem-rand');
    $('.memoryItem').removeClass('memoryActiv');
    $('div[data-mem='+x+']').addClass('memoryActiv');

}



$('#greyBut1').hover(function(){
    $('#downPanelLeft').addClass('butActive');
},
function(){
    $('#downPanelLeft').removeClass('butActive');
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
    if($('#mmBut').text() != ''){
        $('#mmBut').addClass('butActive');
    }
},
function(){
    $('#mmBut').removeClass('butActive');
}

)

$('#greyBut4').hover(function(){

    if(!$('.freezeButton').hasClass('emptyBut')){
        $('.freezeButton').addClass('butActive');
    }

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

$('#greyBut6').hover(function(){
    $('.escBut').addClass('butActive');
},
function(){
    $('.escBut').removeClass('butActive');
}
)

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


$('.leftArRot').on('click',function(){
    $('#downPanelLeft').click();
})

$('.rightArRot').on('click',function(){
    $('#downPanelRight').click();
})



function setNameButtonGroup(){
    //подпись кнопки Freeze когда не выбрана лебедка

    if(!$('.activeHold').hasClass('holded')){
        if($('.activeHold').hasClass('groupClass')){
            $('.freezeButton').text('Remove');
        }else{
            $('.freezeButton').text('Add');
        };

    }
}


function setNumbersDownPanel(){
    //Заполняем данные нижнего левого блока \ положение лебедок
    if($('.activeHold').hasClass('lineTxt')){
        $('.someNumbers').text('040/000');
        n = $('.activeHold').children('.nameItem').text();
        n1 = $('.activeHold').children('.firstNum').text();
        n2 = $('.activeHold').children('.secondNum').text();

        $('.nameItemRightPanel').text(n);
        $('.upNumbersRightPanel').text(n1);
        //$('.downNumbersRightPanel').text(n2);
        $('.num1').text(n2[0]);
        $('.num2').text(n2[1]);
        $('.num3').text(n2[3]);
        $('.num4').text(n2[4]);
        $('.numSep').show();
    }else{
        $('.someNumbers').text('');
        $('.nameItemRightPanel').text('');
        $('.upNumbersRightPanel').text('');

        $('.num1').text('');
        $('.num2').text('');
        $('.num3').text('');
        $('.num4').text('');
        $('.numSep').hide();

    }

}

setNumbersDownPanel();