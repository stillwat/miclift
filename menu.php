<html charset="utf-8">
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous" ></script>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
<link rel="stylesheet" type="text/css" href="css/styleMenu.css" >
<link rel="stylesheet" type="text/css" href="fonts/roboto.css" >
</head>
  <body>
    


<div class="parent">
    <div class="block">
    <div class="greyButLine">
        <div id="greyBut3" class="greyBut"></div>
        <div id="greyBut5" class="greyBut"></div>
        <div id="greyBut1" class="greyBut"></div>
        <div id="greyBut2" class="greyBut"></div>
        <div id="greyBut4" class="greyBut"></div>
        
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
            <div class="stick">
                <div class="joist">
                    <div id="up" class="upBut"></div>
                    <div id="left" class="leftBut"></div>
                    <div id="down" class="downBut"></div>
                    <div id="right" class="rightBut"></div>
                    <div id="center" class="centerBut"></div>
                </div>
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

                            <div class="row txtWrapW">
                                <div class="txtWrap col-12 col-xs-12 col-sm-12 col-lg-12">
                                    Bolshoy Teatr
                                </div>
                            </div>
                            <div class="row">
                                <div class="txtWrap col-12 col-xs-12 col-sm-12 col-lg-12">
                                    
                                    <div class="row">
                                        <div class="menuDiv menuDiv3 col-2 col-xs-2 col-sm-2 col-lg-2">
                                            <div class="row">
                                                <div class="col-12 col-xs-12 col-sm-12 col-lg-12">
                                                    <div class="imgMenu3 imgMenu"></div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="textCss col-12 col-xs-12 col-sm-12 col-lg-12">
                                                    <div class="txtMenuIn">Main<br>Control</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="menuDiv menuDiv5 col-2 col-xs-2 col-sm-2 col-lg-2">
                                            <div class="row">
                                                <div class="col-12 col-xs-12 col-sm-12 col-lg-12">
                                                    <div class="imgMenu5 imgMenu"></div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="textCss col-12 col-xs-12 col-sm-12 col-lg-12">
                                                    <div class="txtMenuIn">Presets</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="menuDiv menuDiv1 col-2 col-xs-2 col-sm-2 col-lg-2">
                                            <div class="row">
                                                <div class="col-12 col-xs-12 col-sm-12 col-lg-12">
                                                    <div class="imgMenu1 imgMenu"></div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="textCss col-12 col-xs-12 col-sm-12 col-lg-12">
                                                    <div class="txtMenuIn">Group</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="menuDiv menuDiv2 col-2 col-xs-2 col-sm-2 col-lg-2">
                                            <div class="row">
                                                <div class="col-12 col-xs-12 col-sm-12 col-lg-12">
                                                    <div class="imgMenu2 imgMenu"></div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="textCss col-12 col-xs-12 col-sm-12 col-lg-12">
                                                    <div class="txtMenuIn">3D<br>Group</div>
                                                </div>
                                            </div>
                                        </div>
 
                                        <div class="menuDiv menuDiv4 col-2 col-xs-2 col-sm-2 col-lg-2">
                                            <div class="row">
                                                <div class="col-12 col-xs-12 col-sm-12 col-lg-12">
                                                    <div class="imgMenu4 imgMenu"></div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="textCss col-12 col-xs-12 col-sm-12 col-lg-12">
                                                    <div class="txtMenuIn">System<br>Info</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="menuDiv menuDiv6 ol-2 col-xs-2 col-sm-2 col-lg-2">
                                            <div class="row">
                                                <div class="col-12 col-xs-12 col-sm-12 col-lg-12">
                                                    <div class="imgMenu6 imgMenu"></div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="textCss col-12 col-xs-12 col-sm-12 col-lg-12">
                                                    <div class="txtMenuIn">System<br>Log</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>


                </div>
            </div>
            <div class="downLineButtons">
                <div class="row">
                    <div id="mmBut" data-panel-set='1' class="downButs col-2 col-xs-2 col-sm-2 col-lg-2">Main</div>
                    <div class="downButs saveButton col-2 col-xs-2 col-sm-2 col-lg-2">Presets</div>
                    <div id="downPanelLeft" data-panel-set='1' class="downButs col-2 col-xs-2 col-sm-2 col-lg-2">Group</div>
                    <div id="downPanelRight" data-panel-set='1' class="downButs col-2 col-xs-2 col-sm-2 col-lg-2">3D</div>
                    <div class="downButs freezeButton col-2 col-xs-2 col-sm-2 col-lg-2">System</div>
                    <div class="escBut downButs col-2 col-xs-2 col-sm-2 col-lg-2">Log</div>
                </div>
            </div>
            </div>
        </div>
    </div>
</div>




<script src="js/scriptsMenu.js"></script>
</body>
</html>