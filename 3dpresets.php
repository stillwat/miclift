<html charset="utf-8">
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous" ></script>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
<link rel="stylesheet" type="text/css" href="css/style3dPresets.css" >
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

                <div class="row middleRow">
                    <div class="listDiv col-8 col-xs-8 col-sm-8 col-lg-12">

                            <div class="row">
                                <div style="padding-left:20px;" class="nameText titleUpText col-8 col-xs-8 col-sm-8 col-lg-8">
                                    Bolshoy Teatr
                                </div>
                                <div style="padding-left:20px;" class="nameText2 titleUpText col-3 col-xs-3 col-sm-3 col-lg-3">
                                    Playlist
                                </div>
                                <div class="titleUpText setDiv col-1 col-xs-1 col-sm-1 col-lg-1">
                                </div>
                            </div>
                            <div id="topAnchor" class="row">
                                <div id="toPlaylist" class="titleUpTextIn col-8 col-xs-8 col-sm-8 col-lg-8">
                                    
                                    <? 
                                    for($i=1;$i<15;$i++){ 
                                        $style = '';
                                        if($i==1){
                                            $style = 'activeFreeze';
                                        }
                                    ?>

                                    <div data-panel="left" data-item="<? echo $i ?>" data-preset="<? echo $i ?>" class="itemLeft <? echo $style; ?>"><span class="num1">P</span>reset <? echo $i ?></div>

                                    <? } ?>
                                </div>
                                <div id="playlist" class="titleUpTextIn col-4 col-xs-4 col-sm-4 col-lg-4">
                                    
                                </div>
                            </div>


                        </div>

                </div>
            </div>
            <div class="downLineButtons">
                <div class="row">
                    <div data-slide="0" id="downPanelLeft" data-panel-set='1' class="downButs col-2 col-xs-2 col-sm-2 col-lg-2">To Plst</div>
                    <div id="downPanelRight" data-panel-set='1' class="downButs col-2 col-xs-2 col-sm-2 col-lg-2">Rename</div>
                    <div id="mmBut" data-panel-set='1' class="downButs col-2 col-xs-2 col-sm-2 col-lg-2">Copy</div>
                    <div class="downButs freezeButton col-2 col-xs-2 col-sm-2 col-lg-2">Delete</div>
                    <div class="downButs saveButton col-2 col-xs-2 col-sm-2 col-lg-2">Save</div>
                    <div data-slide="0" class="escBut downButs col-2 col-xs-2 col-sm-2 col-lg-2">Esc</div>
                </div>
            </div>
            </div>
        </div>
    </div>
</div>




<script src="js/scripts3dPresets.js"></script>
</body>
</html>