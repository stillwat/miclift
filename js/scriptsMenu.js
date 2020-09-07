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

    document.location.href = "/3dGroup.php?L=Menu";

})

$('#downPanelRight').click(function(){
/*

    x = $('.activePanel').attr('data-id');

    if($(this).attr('data-panel-set') == 1){

        $('#panel'+x).removeClass('activePanel');
    
        if(x == 5){
            x = 1;
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

    }else{

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
    }



*/
});

$('#downPanelLeft').click(function(){
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
*/
});

$('#downPanelLeft').click(function(){

    document.location.href = "/group.php?L=Menu";

});


$('#mmBut').click(function(){

    document.location.href = "/index.php?L=N";

});



$('div[data-ran]').each(function() {
    $( this ).text($(this).attr('data-ran'));
  });

$('.freezeButton').on('click', function(){
    document.location.href = "/systemInfo.php";
})

//±

$('.saveButton').on('click',function(){
    document.location.href = "/presets.php?L=menu";
})

$('.escBut').on('click',function(){
    //document.location.href = '/systemLog.php';
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
    document.location.href = "/systemLog.php";
    //$('.escBut').click();
})

$('.entButtonBig').on('click',function(){
    joistClick(this);
})
$('.escButtonBig').on('click',function(){
    $('.escBut').click();
})

$('#downPanelLeft').hover(function(){
    $('.menuDiv1').addClass('activeFreeze1');
    $('.imgMenu1').addClass('imgMenu1A');
    },
    function(){
        $('.menuDiv1').removeClass('activeFreeze1');
        $('.imgMenu1').removeClass('imgMenu1A');
});

$('#downPanelRight').hover(function(){
    $('.menuDiv2').addClass('activeFreeze2');
    $('.imgMenu2').addClass('imgMenu2A');
    },
    function(){
        $('.menuDiv2').removeClass('activeFreeze2');
        $('.imgMenu2').removeClass('imgMenu2A');
});

$('#mmBut').hover(function(){
    $('.menuDiv3').addClass('activeFreeze3');
    $('.imgMenu3').addClass('imgMenu3A');
    },
    function(){
        $('.menuDiv3').removeClass('activeFreeze3');
        $('.imgMenu3').removeClass('imgMenu3A');
});

$('.freezeButton').hover(function(){
    $('.menuDiv4').addClass('activeFreeze4');
    $('.imgMenu4').addClass('imgMenu4A');
    },
    function(){
        $('.menuDiv4').removeClass('activeFreeze4');
        $('.imgMenu4').removeClass('imgMenu4A');
});

$('.saveButton').hover(function(){
    $('.menuDiv5').addClass('activeFreeze5');
    $('.imgMenu5').addClass('imgMenu5A');
    },
    function(){
        $('.menuDiv5').removeClass('activeFreeze5');
        $('.imgMenu5').removeClass('imgMenu5A');
});

$('.escBut').hover(function(){
    $('.menuDiv6').addClass('activeFreeze6');
    $('.imgMenu6').addClass('imgMenu6A');
    },
    function(){
        $('.menuDiv6').removeClass('activeFreeze6');
        $('.imgMenu6').removeClass('imgMenu6A');
});




$('#greyBut1').hover(function(){
    $('.menuDiv1').addClass('activeFreeze1');
    $('.imgMenu1').addClass('imgMenu1A');
    },
    function(){
        $('.menuDiv1').removeClass('activeFreeze1');
        $('.imgMenu1').removeClass('imgMenu1A');
});

$('#greyBut2').hover(function(){
    $('.menuDiv2').addClass('activeFreeze2');
    $('.imgMenu2').addClass('imgMenu2A');
    },
    function(){
        $('.menuDiv2').removeClass('activeFreeze2');
        $('.imgMenu2').removeClass('imgMenu2A');
});

$('#greyBut3').hover(function(){
    $('.menuDiv3').addClass('activeFreeze3');
    $('.imgMenu3').addClass('imgMenu3A');
    },
    function(){
        $('.menuDiv3').removeClass('activeFreeze3');
        $('.imgMenu3').removeClass('imgMenu3A');
});

$('#greyBut4').hover(function(){
    $('.menuDiv4').addClass('activeFreeze4');
    $('.imgMenu4').addClass('imgMenu4A');
    },
    function(){
        $('.menuDiv4').removeClass('activeFreeze4');
        $('.imgMenu4').removeClass('imgMenu4A');
});

$('#greyBut5').hover(function(){
    $('.menuDiv5').addClass('activeFreeze5');
    $('.imgMenu5').addClass('imgMenu5A');
    },
    function(){
        $('.menuDiv5').removeClass('activeFreeze5');
        $('.imgMenu5').removeClass('imgMenu5A');
});

$('#greyBut6').hover(function(){
    $('.menuDiv6').addClass('activeFreeze6');
    $('.imgMenu6').addClass('imgMenu6A');
    },
    function(){
        $('.menuDiv6').removeClass('activeFreeze6');
        $('.imgMenu6').removeClass('imgMenu6A');
});

/*
$(document).ready ( function(){
    
    $(".loadScr").animate({ opacity:0 }, 3000);
    
    setInterval(opacityOrNot,3100)


});

function opacityOrNot(){
    if($(".loadScr").css('opacity')==0){
        $(".loadScr").hide();
    }
}
*/



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

/*
$('.leftArRot').on('click',function(){
    $('#downPanelLeft').click();
})

$('.rightArRot').on('click',function(){
    $('#downPanelRight').click();
})
*/