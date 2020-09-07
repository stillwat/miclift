<html charset="utf-8">
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous" ></script>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
<link rel="stylesheet" type="text/css" href="css/styleSystemInfo.css" >
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
                <div id="upJ" onclick="rotateJoist(this)" data-rotateAr="left" class="leftArRot arRotateJ"></div>
                <div id="centerJRotate" data-rotate="0" class="mainJRot"></div>
                <div id="downJ" onclick="rotateJoist(this)" data-rotateAr="right" class="rightArRot arRotateJ"></div>
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


                </div>
            </div>
            <div class="middleLine">
            <div class="upLine">
                <div class="row">
                    <div class="titleWrapDiv col-11 cols-xs-11 col-lg-11 col-sm-11">
                        <div class="textTitle">System Info</div>
                    </div>
                    <div class="titleWrapDiv2 col-1 col-sm-1 col-xs-1 col-lg-1">
                        <div class="settingsDiv"></div>
                    </div>
                </div>
            </div>

                <div class="row">
                    <div class="listDiv col-8 col-xs-8 col-sm-8 col-lg-12">
                        
                        <? for($i=0;$i<4;$i++){ 
                            
                            if($i==0){
                                $nameTitle = '<span class="num1">B</span>olshoy Teatr';
                                $nameTitleData = 'Bolshoy Teatr';
                            }else if($i==1){
                                $nameTitle = '<span class="num1">U</span>fa Teatr';
                                $nameTitleData = 'Ufa Teatr';
                            }else if($i==2){
                                $nameTitle = '<span class="num1">P</span>iter Moika';
                                $nameTitleData = 'Piter Moika';
                            }else if($i==3){
                                $nameTitle = '<span class="num1">P</span>iga';
                                $nameTitleData = 'Piga';
                            }
                            
                        ?>

                        <div data-cloud="<? echo $i+1 ?>" data-selected="0" data-parent="<? echo $i+1 ?>" data-name-line="<? echo $nameTitleData ?>" class="row  wrapMainLine mbSelected <? if($i==0){echo 'markHere';} ?> <? if($i==0){echo 'activeFreeze';} ?>">
                            
                            <div data-number='<? echo $i ?>' class="mainLineTitle  col-11 col-sm-11 col-xs-11 col-lg-11"><div class="markPoint"><img class="pointM" src="/img/map.svg"></div>
                                <? echo $nameTitle; ?>
                            </div>
                            <div data-number='<? echo $i ?>' class="mainLinePlus  col-1 col-sm-1 col-xs-1 col-lg-1">
                                <span data-plus="<? echo ($i+1) ?>" class="plusCss">+</span>
                            </div>

                            <? for($s=1;$s<6;$s++){ ?>

                            <div data-cloud="<? echo ($i+1).($i+1) ?>" data-parent="<? echo ($i+1).($s) ?>" data-selected="0" data-name-line="Concert <? echo $s; ?>" class="row inMainLine mbSelected">
                                <div  class="mainLineTitle  col-11 col-sm-11 col-xs-11 col-lg-11">
                                <span class="num1">C</span>oncert <? echo $s; ?>
                                </div>
                                <div class="mainLinePlus col-1 col-sm-1 col-xs-1 col-lg-1">
                                <span data-plus="<? echo ($i+1).($s) ?>" class="plusCss">+</span>
                                </div> 
                            </div>

                            <? for($m=1;$m<6;$m++){ ?>
                            
                            <div data-cloud="<? echo ($i+1).($i+1).($i+1) ?>" data-parent="<? echo ($i+1).($s).($m) ?>" 
                            data-selected="0" data-name-line="Preset <? echo $m; ?>" class="row inInMainLine mbSelected">
                                <div  class="mainLineTitle col-11 col-sm-11 col-xs-11 col-lg-11">
                                <span class="num1">P</span>reset <? echo $m; ?>
                                </div>
                                <div class="mainLinePlus col-1 col-sm-1 col-xs-1 col-lg-1">
                                <span  class="plusCss"></span>
                                </div> 
                            </div>

                            <? } ?>
                            <? } ?>

                        </div>
                  
                          <? } ?>

                    </div>
                </div>

            </div>
            <div class="downLineButtons">
                <div class="row">
                    <div id="downPanelLeft" data-panel-set='1' class="emptyBut col-2 col-xs-2 col-sm-2 col-lg-2"></div>
                    <div id="downPanelRight" data-panel-set='1' class="emptyBut col-2 col-xs-2 col-sm-2 col-lg-2"></div>
                    <div id="mmBut" data-panel-set='1' class="downButs col-2 col-xs-2 col-sm-2 col-lg-2">Rename</div>
                    <div id="centerSmallBut" class="downButs freezeButton col-2 col-xs-2 col-sm-2 col-lg-2">Copy</div>
                    <div class="downButs saveButton col-2 col-xs-2 col-sm-2 col-lg-2">Delete</div>
                    <div class="escBut downButs col-2 col-xs-2 col-sm-2 col-lg-2">Back</div>
                </div>
            </div>
            </div>
        </div>
    </div>
</div>




<script src="js/scriptsSystemInfo.js"></script>
</body>
</html>