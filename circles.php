﻿<html charset="utf-8">
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous" ></script>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
<link rel="stylesheet" type="text/css" href="css/styleCircles.css" >
<link rel="stylesheet" type="text/css" href="fonts/roboto.css" >
</head>
  <body>
    

<div class="parent">





    <div class="block">

    <div class="greyButLine">
        <div id="greyBut1" class="greyBut"></div>
        <div id="greyBut2" class="greyBut"></div>
        <div id="greyBut3" class="greyBut"></div>
        <div id="greyBut4" class="greyBut"></div>
        <div id="greyBut5" class="greyBut"></div>
        <div id="greyBut6" class="greyBut"></div>
    </div>

    <div class="entButtonBig" id="centerButSecond"></div>
    <div class="escButtonBig"></div>

    <div class="joist">
            <div id="up" class="upBut"></div>
            <div id="left" class="leftBut"></div>
            <div id="down" class="downBut"></div>
            <div id="right" class="rightBut"></div>
            <div id="center" class="centerBut"></div>
        </div>
        <div class="stickWrap">
            <div class="rotateJoist">
                <div onclick="rotateJoist(this)" data-rotatear="left" class="leftArRot arRotateJ"></div>
                <div id="centerJRotate" data-rotate="0" class="mainJRot"></div>
                <div onclick="rotateJoist(this)" data-rotatear="right" class="rightArRot arRotateJ"></div>
            </div>


<!--
        <div class="stickWrap">
            <div class="stick">
                <div class="joist">
                    <div id="up" class="upBut"></div>
                    <div id="left" class="leftBut"></div>
                    <div id="down" class="downBut"></div>
                    <div id="right" class="rightBut"></div>
                    <div id="center" class="centerBut"></div>
                </div>
-->





        </div>
        <div class="wrapPult">
            <div class="upLineButtons">
                <div class="row">
                    <div style="display:none;" class="wrapFour">
                        <div class="wrapFourIn">
                            <div id="panel1" data-id="1" class="buttonsFour activePanel">Name 1</div>
                            <div id="panel2" data-id="2" class="buttonsFour">Name 2
                                <img src="/img/atten.png">
                            </div>
                            <div id="panel3" data-id="3" class="buttonsFour">Name 3
                            <img src="/img/greenP.png">
                            </div>
                            <div id="panel4" data-id="4" class="buttonsFour">Name 4</div>
                            <div id="panel5" data-id="5" class="buttonsFour">Name 5</div>
                            
                        </div>
                    </div>
                    <div style="display:none;" class="wrapThree">
                        <div class="butRightSide leftItemButRightSide"></div>
                        <div id="rightPanelBT1" data-target="rightPanel" data-numb-bt="1" class="butRightSide centerItemButRightSide"></div>
                        <div id="rightPanelBT2" data-target="rightPanel" data-numb-bt="2" class="butRightSide rightItemButRightSide"></div>
                    </div>
                </div>
            </div>
            <div class="middleLine">



                <div class="row">
                    <div class="listDiv col-8 col-xs-8 col-sm-8 col-lg-12">

                        <div class="lessCircles">
                            <? 
                            $x = 1;
                            for ($i = 1; $i <= 5; $i++) { 

                                if($i==1){
                                    $bckMid = 'style="background-image: url(/img/emptyGreenCircle.png);"';
                                }else if($i>1 && $i<5){
                                    $bckMid = 'style="background-image: url(/img/emptyGreyCircle.png);"';
                                }else if($i==5){
                                    $bckMid = 'style="background-image: url(/img/emptyYellowCircle.png);"';
                                    $txtIn = '';
                                };

                            ?>

                                <div class="row">
                                    <div class="cirleDiv col-3 col-sm-3 col-xs-3 col-lg-3">
                                        <div <? echo $bckMid ?>  class="colCircles"><? echo $x ?></div>
                                        <div class="textCircles">14.25</div>
                                        <? $x++; ?>
                                    </div>
                                    <div class="cirleDiv col-3 col-sm-3 col-xs-3 col-lg-3">
                                        <div <? echo $bckMid ?>  class="colCircles"><? echo $x ?></div>
                                        <div class="textCircles">14.25</div>
                                        <? $x++; ?>
                                    </div>
                                    <div class="cirleDiv col-3 col-sm-3 col-xs-3 col-lg-3">
                                        <div <? echo $bckMid ?>  class="colCircles"><? echo $x ?></div>
                                        <div class="textCircles">14.25</div>
                                        <? $x++; ?>
                                    </div>
                                    <div class="cirleDiv col-3 col-sm-3 col-xs-3 col-lg-3">
                                        <div <? echo $bckMid ?>  class="colCircles"><? echo $x ?></div>
                                        <div class="textCircles">14.25</div>
                                        <? $x++; ?>
                                    </div>
                                </div>
                            
                            
                            
                            <?};?>
                        </div>
                    
                        <div style="display:none;" class="middleCircles">
                            <? 
                            $x = 1;
                            for ($i = 1; $i <= 5; $i++) {
                                $txtIn = '';

                                if($i==1){
                                    $bckMid = 'style="background-image: url(/img/fullYellowCircle.png);"';
                                }else if($i==2){
                                    $bckMid = 'style="background-image: url(/img/fullGreyCircle.png);"';
                                }else if($i==3){
                                    $bckMid = 'style="background-image: url(/img/fullGreenCircle.png);"';
                                }else if($i==4){
                                    $bckMid = 'style="background-image: url(/img/fullRedCircle.png);"';
                                    $txtIn = '!';
                                }else if($i==5){
                                    $bckMid = 'style="background-image: url(/img/fullGreenCircle.png);"';
                                    $txtIn = '';
                                };

                            ?>

                                <div class="row">
                                    <div class="cirleDivMiddle col-3 col-sm-3 col-xs-3 col-lg-1">
                                        <div <? echo $bckMid ?> class="colCirclesMiddle"><? echo $txtIn ?></div>
                                    </div>
                                    <div class="cirleDivMiddle col-3 col-sm-3 col-xs-3 col-lg-1">
                                        <div <? echo $bckMid ?> class="colCirclesMiddle"><? echo $txtIn ?></div>
                                    </div>
                                    <div class="cirleDivMiddle col-3 col-sm-3 col-xs-3 col-lg-1">
                                        <div <? echo $bckMid ?> class="colCirclesMiddle"><? echo $txtIn ?></div>
                                    </div>
                                    <div class="cirleDivMiddle col-3 col-sm-3 col-xs-3 col-lg-1">
                                        <div <? echo $bckMid ?> class="colCirclesMiddle"><? echo $txtIn ?></div>
                                    </div>
                                    <div class="cirleDivMiddle col-3 col-sm-3 col-xs-3 col-lg-1">
                                        <div <? echo $bckMid ?> class="colCirclesMiddle"><? echo $txtIn ?></div>
                                    </div>
                                    <div class="cirleDivMiddle col-3 col-sm-3 col-xs-3 col-lg-1">
                                        <div <? echo $bckMid ?> class="colCirclesMiddle"><? echo $txtIn ?></div>
                                    </div>
                                    <div class="cirleDivMiddle col-3 col-sm-3 col-xs-3 col-lg-1">
                                        <div <? echo $bckMid ?> class="colCirclesMiddle"><? echo $txtIn ?></div>
                                    </div>
                                    <div class="cirleDivMiddle col-3 col-sm-3 col-xs-3 col-lg-1">
                                        <div <? echo $bckMid ?> class="colCirclesMiddle"><? echo $txtIn ?></div>
                                    </div>

                                </div>
                            
                            
                            
                            <?};?>
                        </div>



                        <div style="display:none;" class="moreCircles">
                            <? 
                            $x = 1;
                            for ($i = 1; $i <= 10; $i++) {
                                $txtIn = '';

                                if($i==1){
                                    $bckMid = 'style="background-image: url(/img/fullYellowCircle.png);"';
                                }else if($i>2 && $i<8){
                                    $bckMid = 'style="background-image: url(/img/fullGreenCircle.png);"';
                                }else if($i==8 || $i==10){
                                    $bckMid = 'style="background-image: url(/img/fullRedCircle.png);"';
                                    $txtIn = '!';
                                }else if($i==9){
                                    $bckMid = 'style="background-image: url(/img/fullGreyCircle.png);"';
                                    $txtIn = '';
                                };

                            ?>

                                <div class="row">
                                    <div class="cirleDivMore col-3 col-sm-3 col-xs-3 col-lg-1">
                                        <div <? echo $bckMid ?> class="colCirclesMore"><? echo $txtIn ?></div>
                                    </div>
                                    <div class="cirleDivMore col-3 col-sm-3 col-xs-3 col-lg-1">
                                        <div <? echo $bckMid ?> class="colCirclesMore"><? echo $txtIn ?></div>
                                    </div>
                                    <div class="cirleDivMore col-3 col-sm-3 col-xs-3 col-lg-1">
                                        <div <? echo $bckMid ?> class="colCirclesMore"><? echo $txtIn ?></div>
                                    </div>
                                    <div class="cirleDivMore col-3 col-sm-3 col-xs-3 col-lg-1">
                                        <div <? echo $bckMid ?> class="colCirclesMore"><? echo $txtIn ?></div>
                                    </div>
                                    <div class="cirleDivMore col-3 col-sm-3 col-xs-3 col-lg-1">
                                        <div <? echo $bckMid ?> class="colCirclesMore"><? echo $txtIn ?></div>
                                    </div>
                                    <div class="cirleDivMore col-3 col-sm-3 col-xs-3 col-lg-1">
                                        <div <? echo $bckMid ?> class="colCirclesMore"><? echo $txtIn ?></div>
                                    </div>
                                    <div class="cirleDivMore col-3 col-sm-3 col-xs-3 col-lg-1">
                                        <div <? echo $bckMid ?> class="colCirclesMore"><? echo $txtIn ?></div>
                                    </div>
                                    <div class="cirleDivMore col-3 col-sm-3 col-xs-3 col-lg-1">
                                        <div <? echo $bckMid ?> class="colCirclesMore"><? echo $txtIn ?></div>
                                    </div>
                                    <div class="cirleDivMore col-3 col-sm-3 col-xs-3 col-lg-1">
                                        <div <? echo $bckMid ?> class="colCirclesMore"><? echo $txtIn ?></div>
                                    </div>
                                    <div class="cirleDivMore col-3 col-sm-3 col-xs-3 col-lg-1">
                                        <div <? echo $bckMid ?> class="colCirclesMore"><? echo $txtIn ?></div>
                                    </div>
                                </div>
                            
                            
                            
                            <?};?>
                        </div>



                </div>
            </div>
            <div class="downLineButtons">
                <div class="row">
                    <div id="downPanelLeft" data-panel-set='1' class="downButs activeFreeze col-2 col-xs-2 col-sm-2 col-lg-2">20</div>
                    <div id="downPanelRight" data-panel-set='1' class="downButs col-2 col-xs-2 col-sm-2 col-lg-2">40</div>
                    <div id="mmBut" data-panel-set='1' class="downButs col-2 col-xs-2 col-sm-2 col-lg-2">100</div>
                    <div class="emptyBut freezeButton col-2 col-xs-2 col-sm-2 col-lg-2"></div>
                    <div class="emptyBut saveButton col-2 col-xs-2 col-sm-2 col-lg-2"></div>

                    <?
$load = $_GET['L'];
if($load == 'preset'){ ?>

    <div class="escBut presetBack downButs col-2 col-xs-2 col-sm-2 col-lg-2">back</div>

<? }else{ ?>

    <div class="escBut controlBack downButs col-2 col-xs-2 col-sm-2 col-lg-2">back</div>

<? }; ?>



                </div>
            </div>
            </div>
        </div>
    </div>
</div>




<script src="js/scriptsCircles.js"></script>
</body>
</html>