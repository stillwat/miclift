<html charset="utf-8">
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous" ></script>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
<link rel="stylesheet" type="text/css" href="css/styleSystemLog.css" >
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

            </div>
            <div class="middleLine">
                <div class="row">
                    <div class="listDiv col-12 col-xs-12 col-sm-12 col-lg-12">


                        <div class="lessCircles">

                           <div class="row">
                               <div class="titleLine col-12 col-xs-12 col-sm-12 col-lg-12">Log</div>
                           </div>

                           <div class="row">
                                <div class="col-12 col-xs-12 col-sm-12 col-lg-12">
                                    <div class="row wrapNameCol">
                                        <div class="nameCol col-4 col-xs-4 col-sm-4 col-lg-4">Date</div>
                                        <div class="nameCol col-4 col-xs-4 col-sm-4 col-lg-4">Device</div>
                                        <div class="nameCol col-4 col-xs-4 col-sm-4 col-lg-4">Error</div>
                                    </div>
                                </div>
                            </div>

                            <div class="row wrapError">
                                <div class="inWrapErr col-12 col-xs-12 col-sm-12 col-lg-12">
                                <? for($i=0;$i<4;$i++){ ?>
                                <div class="row wrapTextErr">
                                    <div class="txtErr col-4 col-xs-4 col-sm-4 col-lg-4">14.05.2020 14:31:42</div>
                                    <div class="txtErr col-4 col-xs-4 col-sm-4 col-lg-4">Name 1</div>
                                    <div class="txtErr col-4 col-xs-4 col-sm-4 col-lg-4">10160</div>
                                </div>

                            <?}?>
                        </div>
                            </div>
                        </div>


                </div>
            </div>
            <div class="downLineButtons">
                <div class="row">
                    <div id="downPanelLeft" data-panel-set='1' class="downButs col-2 col-xs-2 col-sm-2 col-lg-2"></div>
                    <div id="downPanelRight" data-panel-set='1' class="downButs col-2 col-xs-2 col-sm-2 col-lg-2"></div>
                    <div id="mmBut" data-panel-set='1' class="downButs col-2 col-xs-2 col-sm-2 col-lg-2"></div>
                    <div class="downButs freezeButton col-2 col-xs-2 col-sm-2 col-lg-2"></div>
                    <div class="downButs saveButton col-2 col-xs-2 col-sm-2 col-lg-2">Clear</div>
                    <div class="escBut downButs col-2 col-xs-2 col-sm-2 col-lg-2">Back</div>
                </div>
            </div>
            </div>
        </div>
    </div>
</div>




<script src="js/scriptsSystemLog.js"></script>
</body>
</html>