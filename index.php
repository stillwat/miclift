<html charset="utf-8">
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous" ></script>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
<link rel="stylesheet" type="text/css" href="css/styleIndex.css" >
<link rel="stylesheet" type="text/css" href="fonts/roboto.css" >
</head>
  <body>
    

<div class="parent">

    <div class="block">

    <?
$load = $_GET['L'];
if($load != 'N'){ ?>

    <div class="loadScr">
        <div class="loadScreenIn"></div>
    </div>

<? } ?>




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
                <div onclick="rotateJoist(this)" data-rotateAr="left" class="leftArRot arRotateJ"></div>
                <div id="centerJRotate" data-rotate="0" class="mainJRot"></div>
                <div onclick="rotateJoist(this)" data-rotateAr="right" class="rightArRot arRotateJ"></div>
            </div>


  <!--         <div class="stick">
                <div class="joist">
                    <div id="up" class="upBut"></div>
                    <div id="left" class="leftBut"></div>
                    <div id="down" class="downBut"></div>
                    <div id="right" class="rightBut"></div>
                    <div id="center" class="centerBut"></div>
                </div>
            </div>--> 
        </div>
        <div class="wrapPult">
            <div class="upLineButtons">
                <div class="row">
                    <div class="wrapFour">
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
                    <div class="wrapThree">
                        <div class="butRightSide leftItemButRightSide"></div>
                        <div id="rightPanelBT1" data-target="rightPanel" data-numb-bt="1" class="butRightSide centerItemButRightSide"></div>
                        <div id="rightPanelBT2" data-target="rightPanel" data-numb-bt="2" class="butRightSide rightItemButRightSide"></div>
                    </div>
                </div>
            </div>
            <div class="middleLine">
                <div class="row">
                    <div class="listDiv col-8 col-xs-8 col-sm-8 col-lg-9">
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
                        <div id='linkAct<? echo $i ; ?>' data-mem-rand='<? echo $r ; ?>' data-target="leftPanel" data-num='<? echo $i ; ?>' class="lineTxt row">
                            <div class="txtLeft nameItem itemList col-3 col-xs-3 col-sm-3 col-lg-3">Name <? echo $i ; ?></div>
                            <div data-ran="<? echo $randNumb ?>" class="itemList firstNum col-2 col-xs-2 col-sm-2 col-lg-2"></div>
                            <div data-ran="<? echo $randNumb ?>" class="greyItem secondNum itemList col-2 col-xs-2 col-sm-2 col-lg-2"></div>
                            <div class="groupItems itemList col-1 col-xs-1 col-sm-1 col-lg-1"></div>
                            <div class="itemList markListFreeze col-1 col-xs-1 col-sm-1 col-lg-1"></div>
                            <div class="itemList col-1 col-xs-1 col-sm-1 col-lg-1"></div>
                            <div class="itemList col-1 col-xs-1 col-sm-1 col-lg-1"></div>
                            <div class="itemList markList col-1 col-xs-1 col-sm-1 col-lg-1">P</div>
                        </div>
                    <?};?>
                    </div>
                    <div class="listDiv rightPanel col-3 col-xs-3 col-sm-3 col-lg-3">
                        <div class="upItemRightPanel">

                            <div class="row">
                                <div id="memActiv1" data-mem='1' data-id="1" class="memoryItem memoryActiv col-xs-4 col-sm-4 col-4 col-lg-4"></div>
                                <div id="memActiv2" data-mem='2' data-id="2" class="memoryItem col-xs-4 col-sm-4 col-4 col-lg-4"></div>
                                <div id="memActiv3" data-mem='3' data-id="3" class="memoryItem col-xs-4 col-sm-4 col-4 col-lg-4"></div>
                            </div>
                            <div class="row">
                                <div id="memActiv4" data-mem='4' data-id="4" class="memoryItem col-xs-4 col-sm-4 col-4 col-lg-4"></div>
                                <div id="memActiv5" data-mem='5' data-id="5" class="memoryItem col-xs-4 col-sm-4 col-4 col-lg-4"></div>
                                <div id="memActiv6" data-mem='6' data-id="6" class="memoryItem col-xs-4 col-sm-4 col-4 col-lg-4"></div>
                            </div>
                            <div style="display:none" class="row">
                                <div id="memActiv7" data-mem='7' data-id="7" class="memoryItem col-xs-4 col-sm-4 col-4 col-lg-4"></div>
                                <div id="memActiv8" data-mem='8' data-id="8" class="memoryItem col-xs-4 col-sm-4 col-4 col-lg-4"></div>
                                <div id="memActiv9" data-mem='9' data-id="9" class="memoryItem col-xs-4 col-sm-4 col-4 col-lg-4"></div>
                            </div>

                        </div>
                        <div class="downItemRightPanel">
                            <div class="row">
                                <div class="someNumbers">
                                    
                                </div>
                            </div>
                            <div class="row">
                                <div class="nameItemRightPanel"></div>
                            </div>
                            <div class="row panelNumbersRightPanel">
                                
                                <div class="upNumbersRightPanel col-12 col-sm-12 col-xs-12 col-12 col-lg-12"></div>
                                <div class="downNumbersRightPanel col-12 col-sm-12 col-xs-12 col-12 col-lg-12">
                                    <div class="row numbersLeb">
                                        <div class="num1 allNum col-3 col-xs-3 col-sm-3 col-lg-3"></div>
                                        <div class="num2 allNum col-3 col-xs-3 col-sm-3 col-lg-3"></div>
                                        <div class="numSep">.</div>
                                        <div class="num3 allNum col-3 col-xs-3 col-sm-3 col-lg-3"></div>
                                        <div class="num4 fnMM allNum col-3 col-xs-3 col-sm-3 col-lg-3"></div>
                                        <div class="numSep2 mmNum">.</div>
                                        <div class="numMM1 mmNum">
                                            <span style="letter-spacing: 1px;" <!-- class="fnMM" -->>0</span> 0
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="row downRightPanelBut">
                                <div class="col-6 col-sm-6 col-xs-6 col-6 col-lg-6"></div>
                                <div class="rightButtonRightPanel col-6 col-sm-6 col-xs-6 col-6 col-lg-6">P</div>
                            </div>
                        </div>
                </div>
            </div>
            <div class="downLineButtons">
                <div class="row">
                    <div id="downPanelLeft" data-panel-set='1' class="downButs col-2 col-xs-2 col-sm-2 col-lg-2">◄</div>
                    <div id="downPanelRight" data-panel-set='1' class="downButs col-2 col-xs-2 col-sm-2 col-lg-2">►</div>
                    <div id="mmBut" data-panel-set='1' class="emptyBut col-2 col-xs-2 col-sm-2 col-lg-2"></div>
                    <div data-panel-set='1' class="downButs emptyBut freezeButton col-2 col-xs-2 col-sm-2 col-lg-2">Add</div>
                    <div data-panel-set='1' class="downButs saveButton col-2 col-xs-2 col-sm-2 col-lg-2">Preset</div>
                    <div data-panel-set='1' class="escBut downButs col-2 col-xs-2 col-sm-2 col-lg-2">View</div>
                </div>
            </div>
            </div>
        </div>
    </div>
</div>


<script src="js/scriptsIndex.js"></script>
</body>
</html>