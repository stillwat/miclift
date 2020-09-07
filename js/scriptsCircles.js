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


    }

    if(x == 'center'){


    }




    if(x == 'down'){

        
        $('.lineTxt').removeClass('activeHold');
        if(target>29){
            target = 1;
        }else{
            target++;
        }

        $('#linkAct'+target).addClass('activeHold')
        /*$(".listDiv").scrollTop($(".activeHold").position().top);*/
        targ2 = $(".activeHold").attr('id');

        switch(targ2) {
            case 'linkAct1':
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
                break;
            case 'linkAct7':
                $(".listDiv").animate({ scrollTop:138 }, 100);
                break;
            case 'linkAct8':
                $(".listDiv").animate({ scrollTop:161 }, 100);
                break;
            case 'linkAct9':
                $(".listDiv").animate({ scrollTop:184 }, 100);
                break;
            case 'linkAct10':
                $(".listDiv").animate({ scrollTop:207 }, 100);
                break;
            case 'linkAct11':
                $(".listDiv").animate({ scrollTop:230 }, 100);
                break;
            case 'linkAct12':
                $(".listDiv").animate({ scrollTop:253 }, 100);
                break;
            case 'linkAct13':
                $(".listDiv").animate({ scrollTop:276 }, 100);
                break;
            case 'linkAct14':
                $(".listDiv").animate({ scrollTop:299 }, 100);
                break;
            case 'linkAct15':
                $(".listDiv").animate({ scrollTop:322 }, 100);
                break;
            case 'linkAct16':
                $(".listDiv").animate({ scrollTop:345 }, 100);
                break;
            case 'linkAct17':
                $(".listDiv").animate({ scrollTop:368 }, 100);
                    break;
            case 'linkAct18':
                $(".listDiv").animate({ scrollTop:391 }, 100);
                break;
            case 'linkAct19':
                $(".listDiv").animate({ scrollTop:412 }, 100);
                break;
            case 'linkAct30':
                $(".listDiv").animate({ scrollTop:412 }, 100);
                break;   

            default:

        }

        
    }
    
    if(x == 'up'){
        $('.lineTxt').removeClass('activeHold')
        
        if(target == 1){
            target = 30;
        }else{
            target--;
        }

        $('#linkAct'+target).addClass('activeHold');

        targ2 = $(".activeHold").attr('id');

        switch(targ2) {
            case 'linkAct1':
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
                break;
            case 'linkAct7':
                $(".listDiv").animate({ scrollTop:138 }, 100);
                break;
            case 'linkAct8':
                $(".listDiv").animate({ scrollTop:161 }, 100);
                break;
            case 'linkAct9':
                $(".listDiv").animate({ scrollTop:184 }, 100);
                break;
            case 'linkAct10':
                $(".listDiv").animate({ scrollTop:207 }, 100);
                break;
            case 'linkAct11':
                $(".listDiv").animate({ scrollTop:230 }, 100);
                break;
            case 'linkAct12':
                $(".listDiv").animate({ scrollTop:253 }, 100);
                break;
            case 'linkAct13':
                $(".listDiv").animate({ scrollTop:276 }, 100);
                break;
            case 'linkAct14':
                $(".listDiv").animate({ scrollTop:299 }, 100);
                break;
            case 'linkAct15':
                $(".listDiv").animate({ scrollTop:322 }, 100);
                break;
            case 'linkAct16':
                $(".listDiv").animate({ scrollTop:345 }, 100);
                break;
            case 'linkAct17':
                $(".listDiv").animate({ scrollTop:368 }, 100);
                    break;
            case 'linkAct18':
                $(".listDiv").animate({ scrollTop:391 }, 100);
                break;
            case 'linkAct19':
                $(".listDiv").animate({ scrollTop:412 }, 100);
                break;
            case 'linkAct30':
                $(".listDiv").animate({ scrollTop:412 }, 100);
                break;                

            default:

        }



    }



};



$('#downPanelLeft').click(function(){
    $('.downButs').removeClass('activeFreeze');
    $(this).addClass('activeFreeze');

    $('.lessCircles').show();
    $('.middleCircles').hide();
    $('.moreCircles').hide();

});

$('#downPanelRight').click(function(){
    $('.downButs').removeClass('activeFreeze');
    $(this).addClass('activeFreeze');

    $('.lessCircles').hide();
    $('.middleCircles').show();
    $('.moreCircles').hide();

});



$('#mmBut').click(function(){
    $('.downButs').removeClass('activeFreeze');
    $(this).addClass('activeFreeze');

    $('.lessCircles').hide();
    $('.middleCircles').hide();
    $('.moreCircles').show();

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

    if($(this).hasClass('presetBack')){
        document.location.href = "/presets.php";
    }else{
        document.location.href = "/index.php?L=N";
    }
   


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
    $('.escBut').click();
})


$(document).ready(function() {

$('.colCircles').each(function(){
    if($(this).text().length > 1){
        $(this).addClass('doubleNumber');
    }
})

});





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



