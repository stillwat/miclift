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
    if($(a).attr('id') == 'center' || $(a).attr('id') == 'centerButSecond' || $(a).attr('id') == 'centerSmallBut' || $(a).attr('id') ==  'centerJRotate'){
        x = 'center';
    }

    target = $('.activeHold').data('num');

    if(x == 'right'){
        clearInterval(intervalFour);
        $('.num1').removeClass('itemActiveNumberNow');
        $('.escBut').text('Back');

        if($('.activeFreeze').hasClass('mbSelected')){
            $('.mbSelected').removeClass('activeFreeze')//.removeClass('selectItem');
            $('.settingsDiv').addClass('activeFreeze').addClass('settingsDivAct');
        }else{
            $('.settingsDiv').removeClass('activeFreeze').removeClass('settingsDivAct');
            $('.wrapMainLine').first().addClass('activeFreeze')
        }

        markColor();
    }

    if(x == 'left'){
        clearInterval(intervalFour);
        $('.num1').removeClass('itemActiveNumberNow');
        $('.escBut').text('Back');


        if($('.activeFreeze').hasClass('mbSelected')){
            $('.mbSelected').removeClass('activeFreeze')//.removeClass('activeFreeze');
            $('.settingsDiv').addClass('activeFreeze').addClass('settingsDivAct');
        }else{
            $('.settingsDiv').removeClass('activeFreeze').removeClass('settingsDivAct');
            $('.wrapMainLine').first().addClass('activeFreeze')
        }

        markColor();
    }

    if(x == 'center'){


        if($('.activeFreeze').hasClass('settingsDiv')){
            document.location.href = '/index.php?L=N'
        }



        clearInterval(intervalFour);
        $('.num1').removeClass('itemActiveNumberNow');
        $('.escBut').text('Back');
        x = $('.activeFreeze').attr('data-cloud');
        s = $('.activeFreeze').attr('data-parent');
        ln = x.length;

        
        if($('.activeFreeze').hasClass('wrapMainLine') && !$('.activeFreeze').hasClass('markHere')){
            $('.wrapMainLine').removeClass('markHere');
            $('.activeFreeze').addClass('markHere');
            markPoint();

        }else{


        if(ln == 1){

            
            
            if(!$('.activeFreeze').hasClass('noSelect')){
                if($('div[data-cloud='+x+x+']').hasClass('dsplFlex')){
                    if($('div[data-cloud='+x+x+x+']').hasClass('dsplFlex')){
                        /*$('div[data-cloud='+x+x+']').removeClass('dsplFlex');
                        $('div[data-cloud='+x+x+x+']').removeClass('dsplFlex');*/
                    }else{
                    /*   $('div[data-cloud='+x+x+']').removeClass('dsplFlex');
                        $('span[data-plus='+s+']').text('+').removeClass('selectItemPlus');
                        $('div[data-parent='+s+']').removeClass('selectItem')
                    */
                    }
                }else{
                    $('span[data-plus='+s+']').text('-').addClass('selectItemPlus');
                    $('div[data-parent='+s+']').addClass('selectItem');
                    $('div[data-cloud='+x+x+']').addClass('dsplFlex');
                }
            }

/*
            if($('.activeFreeze').hasClass('wrapMainLine')){
                $('.activeFreeze').find('.selectItem').removeClass('selectItem');
                $('.activeFreeze').find('.selectItemPlus').text('+').removeClass('selectItemPlus');
            }
*/
            

        }else if(ln == 2){

            ey = 0;
            
            for(n=1;n<7;n++){
                if($('div[data-parent='+s+n+']').hasClass('dsplFlex')){
                    ey=1;
                }
            }
            
            if(!$('.activeFreeze').hasClass('noSelect')){
                if(ey==1){
                 /*   $('div[data-parent='+s+']').removeClass('selectItem');
                    $('span[data-plus='+s+']').text('+').removeClass('selectItemPlus');
                    for(i=1;i<7;i++){
                        $('div[data-parent='+s[0]+s[1]+i+']').removeClass('dsplFlex')   ;
                    }*/
                }else{
                    $('div[data-parent='+s+']').addClass('selectItem');
                    $('span[data-plus='+s+']').text('-').addClass('selectItemPlus');
                    for(i=1;i<7;i++){

                        $('div[data-parent='+s[0]+s[1]+i+']').addClass('dsplFlex');
                    }
                }
            }
        }
        }
        testPlus();
        
        
        markColor();
    }

    if(x == 'down'){
        clearInterval(intervalFour);
        $('.num1').removeClass('itemActiveNumberNow');
        $('.escBut').text('Back');
        m=1
        x = vis();
        y = $('.activeFreeze').attr('data-selected');

        if(y == x-1){
            m = 1;
        }else{
            m=y;
            m++;
        }

        $('.activeFreeze').removeClass('activeFreeze');
        //$('.selected'+y).removeClass('activeFreeze');
        $('.selected'+m).addClass('activeFreeze');
        
        markColor();
    }
    
    if(x == 'up'){
        clearInterval(intervalFour);
        $('.num1').removeClass('itemActiveNumberNow');
        $('.escBut').text('Back');
        m=1
        x = vis();
        y = $('.activeFreeze').attr('data-selected');
        
        if(y == 1){
            m = x-1;
        }else{
            m=y;
            m--;
        }

        $('.selected'+y).removeClass('activeFreeze');
        $('.selected'+m).addClass('activeFreeze');

        markColor();
    };
};



$('#downPanelLeft').click(function(){

});

$('#downPanelRight').click(function(){

    clearInterval(intervalFour);
    $('.num1').removeClass('itemActiveNumberNow');
    $('.escBut').text('Back');
});



$('#mmBut').on('click',function(){
    clearInterval(intervalFour);
    $('.num1').removeClass('itemActiveNumberNow');
    intervalFour = setInterval(itemChoiseIntervalFour,1000);
    $('.escBut').text('Save');
});



$('div[data-ran]').each(function() {
    $( this ).text($(this).attr('data-ran'));
  });

$('.freezeButton').on('click', function(){

    clearInterval(intervalFour);
    $('.num1').removeClass('itemActiveNumberNow');

    x = $('.activeFreeze').clone();

    if($('.activeFreeze').hasClass('wrapMainLine')){

        x.removeClass('activeFreeze');
        x.removeClass('selectItem');
        $('.listDiv').append(x);
        reCheck();

    }else if($('.activeFreeze').hasClass('inMainLine')){

        s = '';
        od = '';
        y = $('.activeFreeze').attr('data-parent');

        for(i=1;i<6;i++){
            a = String(i);
            if($('div[data-parent='+y+a+']').hasClass('inInMainLine')){

                parent = $('div[data-parent='+y+a+']').attr('data-parent');
                cloud = $('div[data-parent='+y+a+']').attr('data-cloud').split(-1);
                od = $('div[data-parent='+y+a+']').html();

                s += '<div data-cloud="'+cloud+'" data-parent="0" data-selected="0" class="row inInMainLine mbSelected">' + od.trim() + '</div>';
            }


            $('.activeFreeze').parent('.wrapMainLine').append(x);
            $('.activeFreeze').parent('.wrapMainLine').append(s);
            x.removeClass('activeFreeze').removeClass('selectItem');

            reCheck();
        }

    }else if($('.activeFreeze').hasClass('inInMainLine')){

        $(x).insertAfter($('.activeFreeze'));
        x.removeClass('activeFreeze').removeClass('selectItem');

    }

})




$('.saveButton').on('click',function(){

    x = $('.activeFreeze').attr('data-name-line');

    $('.deleteWrap').show();
    $('.nameDeleteObject').text(x);

})


$('.butCancelThis').on('click',function(){

    $('.deleteWrap').hide();
    $('.nameDeleteObject').text('');

});






$('.butDeleteThis').on('click',function(){
    

    clearInterval(intervalFour);
    $('.num1').removeClass('itemActiveNumberNow');
    $('.escBut').text('Back');
    x = $('.activeFreeze').attr('data-parent');
    y = $('.activeFreeze').attr('data-cloud');
    r = $('.wrapMainLine').length;
    

    if(x.length == 1){
        //уровень театров
        $('.activeFreeze').remove();

        for(i=1;i<5;i++){
            if($('div[data-parent='+i+']').hasClass('mbSelected')){
                $('div[data-parent='+i+']').addClass('activeFreeze');
                break;
            }
        }
       
        for(i=1;i<6;i++){
            $('div[data-parent='+x+i+']').remove();
        }

    }else if(x.length == 2){
        // уровень концертов
        for(i=1;i<6;i++){
            $('div[data-parent='+x+i+']').remove();
        }

        $('.activeFreeze').remove();
        
        if($('div[data-cloud='+y+']').hasClass('inMainLine')){
            $('div[data-cloud='+y+']').first().addClass('activeFreeze');
            
        }else{
            $('div[data-cloud='+y[0]+']').first().addClass('activeFreeze');
            $('span[data-plus='+y[0]+']').text('').removeClass('selectItemPlus');
            $('div[data-cloud='+y[0]+']').removeClass('selectItem');
            $('div[data-cloud='+y[0]+']').addClass('noSelect');
            

        }

    }else if(x.length == 3){
        // уровень пресетов
        for(i=1;i<6;i++){
            $('div[data-parent='+x+i+']').remove();
        }

        $('.activeFreeze').remove();
        console.log(x,y);
        if($('div[data-cloud='+y+']').hasClass('inInMainLine')){
            console.log(x[0]+x[1]+2);

            if($('div[data-parent='+x[0]+x[1]+1+']').hasClass('inInMainLine')){
                $('div[data-parent='+x[0]+x[1]+1+']').first().addClass('activeFreeze');
            }else if($('div[data-parent='+x[0]+x[1]+2+']').hasClass('inInMainLine')){
                $('div[data-parent='+x[0]+x[1]+2+']').first().addClass('activeFreeze');
            }else if($('div[data-parent='+x[0]+x[1]+3+']').hasClass('inInMainLine')){
                $('div[data-parent='+x[0]+x[1]+3+']').first().addClass('activeFreeze');
            }else if($('div[data-parent='+x[0]+x[1]+4+']').hasClass('inInMainLine')){
                $('div[data-parent='+x[0]+x[1]+4+']').first().addClass('activeFreeze');
            }else if($('div[data-parent='+x[0]+x[1]+5+']').hasClass('inInMainLine')){
                $('div[data-parent='+x[0]+x[1]+5+']').first().addClass('activeFreeze');
            }else{
                $('div[data-parent='+x[0]+x[1]+']').first().addClass('activeFreeze');
                $('div[data-parent='+x[0]+x[1]+']').first().addClass('noSelect');
                $('span[data-plus='+x[0]+x[1]+']').text('').removeClass('selectItemPlus');
                
                $('div[data-parent='+x[0]+x[1]+']').removeClass('selectItem');
            }

        }else{

            $('div[data-cloud='+y[0]+y[0]+']').first().addClass('activeFreeze');
            $('span[data-plus='+y[0]+y[0]+']').text('+').removeClass('selectItemPlus');
            $('div[data-cloud='+y[0]+y[0]+']').removeClass('selectItem');
        }




    }

    r = $('.wrapMainLine').length;
    console.log(r);
    if(r == 0){
        $('.settingsDiv').addClass('activeFreeze').addClass('settingsDivAct');
    }


    /////

    
    $('.deleteWrap').hide();
    $('.nameDeleteObject').text('');



})


$('.escBut').on('click',function(){

    if($('.escBut').text()=='Save'){

        clearInterval(intervalFour);
        $('.num1').removeClass('itemActiveNumberNow');
        $('.escBut').text('Back');

    }else{

        if($('.activeFreeze').hasClass('inInMainLine')){

            xClassNum = $(".activeFreeze").attr('data-parent');

            x1 = xClassNum[0];
            x2 = xClassNum[1];
            xParentNum = x1+x2;

            $('div[data-parent="'+xParentNum+'"]').addClass('activeFreeze');

            for(i=0;i<20;i++){
                $('div[data-parent="'+xParentNum+i+'"]').removeClass('activeFreeze').removeClass('dsplFlex');
            }

            $('.activeFreeze').children('.mainLinePlus').children('.plusCss').text('+').css('color','grey');
            $('.activeFreeze').css('background-color','black');
            $('.activeFreeze').css('color','white');

        }else if($('.activeFreeze').hasClass('inMainLine')){
            countC = 0;

            xClassNum = $('.activeFreeze').attr('data-parent');
            x1 = xClassNum[0];
            console.log(xClassNum);

            for(i=0;i<20;i++){
                if($('div[data-parent="'+xClassNum+i+'"]').hasClass('dsplFlex')){
                    countC++;
                    $('div[data-parent="'+xClassNum+i+'"]').removeClass('dsplFlex');
                }
            }

            if(countC>0){

                $('.activeFreeze').removeClass('selectItem');
                $('.activeFreeze').children('.mainLinePlus').children('.plusCss').removeClass('selectItemPlus').text('+');

            }else if(countC == 0){
                $('.inMainLine').each(function(){
                    $(this).css('background-color','black').css('color','white');
                    $(this).children('.mainLinePlus').children('.plusCss').text('+').css('color','grey');
                })

                $('.inMainLine').removeClass('activeFreeze');
                $('div[data-cloud="'+x1+'"]').addClass('activeFreeze');
                $('.activeFreeze').children().removeClass('dsplFlex');
                $('.activeFreeze').removeClass('selectItem');
                $('.activeFreeze').children('.mainLinePlus').children('.plusCss').text('+');
            }



        }else if($('.activeFreeze').hasClass('wrapMainLine')){

            if($('.activeFreeze').hasClass('selectItem') || $('.activeFreeze').children('div').hasClass('dsplFlex')){
                $('.activeFreeze').children('div').removeClass('dsplFlex');
                $('.activeFreeze').removeClass('selectItem');
                $('.activeFreeze').children('.mainLinePlus').children('.plusCss').text('+').removeClass('selectItemPlus');
                $('.activeFreeze').children('.inMainLine').children('.mainLinePlus').children('.plusCss').text('+');
                $('.activeFreeze').children('.inMainLine').removeClass('selectItem');
                
            }else{
                document.location.href = "/menu.php";
            }
            
        }



        //



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
    
    $('.butCancelThis').click();

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
    $('.escBut').click();
})

$(document).ready(function() {

    vis();

})


function vis(){

    c=1
    for(i=0;i<200;i++){
        $('.mbSelected').removeClass('selected'+i);
    };

    $('.mbSelected').each(function(){

        if($(this).is(':visible')){
            
            $(this).addClass('selected'+c);
            $(this).attr('data-selected',c)
            c++;
        }
    
    })
    return c;
}

function itemChoiseIntervalFour(){

    if(!$('.activeFreeze .num1').hasClass('itemActiveNumberNow')){
        $('.activeFreeze .num1').addClass('itemActiveNumberNow');
    }else{
        $('.activeFreeze .num1').removeClass('itemActiveNumberNow');
    }

    
}

$

function testPlus(){
    $('.wrapMainLine').each(function(){
        if($(this).hasClass('selectItem')){
            $(this).children('.mainLinePlus').children('.plusCss').addClass('selectItemPlus').text('-')
        }
    })
}


function reCheck(){
    

    c = 1;
    $('.wrapMainLine').each(function(){
        g = 1;
        b = 1;
        p = 0;
        $(this).attr('data-cloud',c);
        $(this).attr('data-selected',c);
        $(this).attr('data-parent',c);


        $(this).children('.inMainLine').each(function(){
            m = String(c);
            t = String(g);
            $(this).attr('data-parent',m+t);
            $(this).attr('data-cloud',m+m);
            g++;
        })

        $(this).children().each(function(){
            if($(this).hasClass('inMainLine')){

                b = 1;
                p++;

            }else if($(this).hasClass('inInMainLine')){

                m = String(c);
                t = String(g);
                u = String(p);
                d = String(b);

                $(this).attr('data-parent',m+p+d)
                b++;
            }
        }
        )
        c++;
    });


}








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
    }
},
function(){

    $('.butCancelThis').removeClass('butActive');

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

    $('.butDeleteThis').addClass('butActive');
    $('.saveButton').addClass('butActive');
    
},
function(){

    $('.butDeleteThis').removeClass('butActive');
    $('.saveButton').removeClass('butActive');

})






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


function markPoint(){
    $('.markPoint').hide();
    $('.markHere').children('div').children('.markPoint').show();
}

function markColor(){
     

    if(!$('.activeFreeze').hasClass('markHere') && !$('.markHere').hasClass('selectItem')){
        $('.pointM').attr('src','/img/mapW.svg');
    }else{
        $('.pointM').attr('src','/img/map.svg');
    }
    

}

markPoint();


$('.leftArRot').on('click',function(){
    joistClick(this)
})

$('.rightArRot').on('click',function(){
    joistClick(this)
})
