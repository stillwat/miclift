<html charset="utf-8">
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous" ></script>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
<link rel="stylesheet" type="text/css" href="css/style3dGroup.css" >
<link rel="stylesheet" type="text/css" href="fonts/roboto.css" >
</head>
  <body>



    <!--
<div class="parent wrapDelete">
    <div class="block inWrapDelete">
        <div class="deleteDiv">
            <div class="parent midDivWrap">
                <div class="block midDiv">

                </div>
            <div class="downPanelDelete">
                <div class="row">
                    <div class="col-12 col-sm-12 col-xs-12 col-lg-12"></div>
                </div>
            </div>
            </div>
        </div>
    </div>
</div>
-->

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
                <div id="upJ" onclick="rotateJoist(this)" data-rotatear="left" class="leftArRot arRotateJ"></div>
                <div id="centerJRotate" data-rotate="0" class="mainJRot"></div>
                <div id="downJ" onclick="rotateJoist(this)" data-rotatear="right" class="rightArRot arRotateJ"></div>
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
            </div>
        </div>
-->
    <input id="freezeItemsSet" type="hidden" style="    position: relative;
    top: -62px;">

        </div>
        <div class="wrapPult">

            <div class="deleteWrap">
                <div class="parent delMainWrap">
                    <div class="block inDeleteWrap">
                        <div class="block midDiv">
                            <div class="row">
                                <div class="titleDelete col-12 col-sm-12 col-xs-12 col-lg-12">DELETE</div>
                            </div>
                            <div class="row titleObjectDeleteRow">
                                <div class="titleObjectDelete col-12 col-sm-12 col-xs-12 col-lg-12">Do you want delete <span class="nameDeleteObject"></span> ?</div>
                            </div>
                            <div class="row">
                                <div class="messageDelete col-12 col-sm-12 col-xs-12 col-lg-12">We remind you that after deleting the file, it will be impossible to return it. Please confirm your actions</div>
                            </div>
                        </div>
                    </div>
                    <div class="downPanelDelete">
                        <div class="row wrapButtonsDelete">

                            <div class="butDel col-2 col-sm-2 col-xs-2 col-lg-2"></div>
                            <div class="butDel butCancelThis col-2 col-sm-2 col-xs-2 col-lg-2">Cancel</div>
                            <div class="butDel col-2 col-sm-2 col-xs-2 col-lg-2"></div>
                            <div class="butDel col-2 col-sm-2 col-xs-2 col-lg-2"></div>
                            <div class="butDel butDeleteThis col-2 col-sm-2 col-xs-2 col-lg-2">Delete</div>
                            <div class="butDel col-2 col-sm-2 col-xs-2 col-lg-2"></div>

                        </div>
                    </div>
                </div>
            </div>




            <div class="upLineButtons">
                <div class="row">
                    <div class="wrapFour">

                        <div class="nameTitle">
                            Bolshoy Teatr <span class="rightArTxt"> > </span>
                            3D Group
                        </div>

                    </div>

                    <div class="wrapThree">
                        <div id="rightPanelBT2" data-target="rightPanel" data-numb-bt="2" class="butRightSide rightItemButRightSide"></div>
                        <!--<div id="rightPanelBT1" data-target="rightPanel" data-numb-bt="1" class="butRightSide centerItemButRightSide"></div>-->
                    </div>

                </div>
            </div>
            <div class="middleLine">
                <div class="row">


                    <div class="listDiv listStandartItem col-8 col-xs-8 col-sm-8 col-lg-7">
                    <? 
                    for ($i = 1; $i <= 30; $i++) {
                    
                        $x = rand(5, 15);
                        $y = rand(5, 15);
                        $r = rand(1, 9);
                        if($x < 10){
                            $x = '0'.$x;
                        }
                        if($y < 10){
                            $y = '0'.$y;
                        }
                        $randNumb = $x.'.'.$y;
                    ?>
                        <div id='linkAct<? echo $i ; ?>' data-howmuch-groups="0" data-freeze="<? echo $i; ?>" data-name="Name <? echo $i; ?>" data-target="leftPanel" data-num='<? echo $i; ?>' class="lineTxt row">
                            <div class="txtLeft nameItem itemList col-2 col-xs-2 col-sm-2 col-lg-2"><span class="num1">N</span>ame <? echo $i ; ?></div>
                            <div data-ran="<? echo $randNumb ?>" class="itemList firstNum col-2 col-xs-2 col-sm-2 col-lg-2"></div>
                            <div data-ran="<? echo $randNumb ?>" class="greyItem secondNum itemList col-2 col-xs-2 col-sm-2 col-lg-2">
                            </div>
                            <div class="itemList col-1 col-xs-1 col-sm-1 col-lg-1">
                                <div class="groupMark">3D</div>
                            </div>
                            <div class="itemList markListFreeze col-1 col-xs-1 col-sm-1 col-lg-1">
                                <div class="groupMark2">3D</div>
                            </div>
                            <div class="itemList col-1 col-xs-1 col-sm-1 col-lg-1">
                                <div class="groupMark3">3D</div>
                            </div>
                            <div class="itemList col-1 col-xs-1 col-sm-1 col-lg-1">
                                <div class="groupMark4">3D</div>
                            </div>
                            <div class="itemList col-1 col-xs-1 col-sm-1 col-lg-1">
                                <div class="groupMark5">3D</div>
                            </div>
                            <div class="itemList col-1 col-xs-1 col-sm-1 col-lg-1">
                                <div class="freezeMark">F</div>
                            </div>
                        </div>
                    <?};?>
                    </div>
                    <div class="listDiv rightPanel col-3 col-xs-3 col-sm-3 col-lg-3">

                        <div class="wrapGroup row">
                            <div class="groupWarpItem col-12 col-sm-12 col-xs-12 col-lg-12">
                                
                                <!--
                                <div class="row">
                                    <div class="groupDiv col-12 col-sm-12 col-xs-12 col-lg-12">
                                        <span class="num1">G</span>roup 1
                                    </div>
                                </div>
                                -->

                            </div>
                        </div>
                        <div class="row wrapDownPanelRight">

                            <div class="fDivDownPanel col-3 col-sm-3 col-xs-3 col-lg-3">
                                <div class="leftAr3d updownArDiv"></div>
                            </div>
                            <div class="sDivDownPanel col-6 col-sm-6 col-xs-6 col-lg-6">
                                <div class="row">

                                <div class="updownArDiv upArDiv col-12 col-sm-12 col-xs-12 col-lg-12">
                                    <div class="upAr3d updownArDiv"></div>
                                </div>
                                <div class="updownArDiv col-12 col-sm-12 col-xs-12 col-lg-12">
                                    <div class="downAr3d updownArDiv"></div>
                                </div>

                                </div>
                                
                            </div>
                            <div class="tDivDownPanel col-3 col-sm-3 col-xs-3 col-lg-3">
                                <div class="rightAr3d updownArDiv"></div>
                            </div>
                        </div>


                    </div>




            </div>
            <div class="downLineButtons">
                <div class="row">
                    <div id="downPanelLeft" data-panel-set='1' data-selectBut='1' class="downButs selectBut col-2 col-xs-2 col-sm-2 col-lg-2">Select</div>
                    <div id="downPanelRight" data-panel-set='1' class="downButs col-2 col-xs-2 col-sm-2 col-lg-2">Rename</div>
                    <div id="mmBut" data-panel-set='1' class="downButs emptyBut col-2 col-xs-2 col-sm-2 col-lg-2">View</div>
                    <div data-panel-set='1' class="downButs freezeButton col-2 col-xs-2 col-sm-2 col-lg-2">Freeze</div>
                    <div class="downButs saveButton col-2 col-xs-2 col-sm-2 col-lg-2">Group</div>
                   
                    
                    <?
                    $load = $_GET['L'];
                    if($load == 'Menu'){ ?>
                        <div class="escBut downButs menuBack col-2 col-xs-2 col-sm-2 col-lg-2">Esc</div>

                    <? }else{ ?>
                        <div class="escBut downButs col-2 col-xs-2 col-sm-2 col-lg-2">Esc</div>
                    <? } ?>




                </div>
            </div>
            </div>
        </div>
    </div>
</div>




<script src="js/scripts3dGroup.js"></script>
</body>
</html>