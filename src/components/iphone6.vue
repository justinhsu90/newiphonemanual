<template>
  <div>
    <h1>iPhone 6 Display Assembly Replacement</h1>
    <div class="iphone6-evalute clear"> 
      <div class="ip6R">
        <img src="https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/title.jpeg" alt="iPhone 6 Display Assembly Replacement">
        <P>
          <i class="svg-icon" style="display: inline-block; width: 24px; height: 24px;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="8" r="7"></circle>
              <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
            </svg>
          </i> Featured Guide
        </P>
      </div>
      <div class="ip6L">
          <div class="iphone6-introduce">
      <h2>Introduction</h2>
      <p>
        Use this guide to replace the screen on your iPhone 6. This guide will show you how to remove the old display and the home button. If you do not transfer your phone's original home button to the new display, you will lose Touch ID functionality.</p>
      <P>If your replacement part does not have a speaker or front-facing camera sensor cable you should follow the complete transfer guide.</P>
      <P>You can also use this guide to replace the front panel assembly cable bracket.</P>
    </div>
      </div>
    </div>
    <br>
    <br>
    <!-- <div>
      <div class="iphone6-tools">
        <div class="iphone6-tools-heade">
          <h5>Tools</h5>
          <div class="buy">
            <a href="javascript:void(0)">Buy these tools</a>
          </div>
        </div>
        <div class="iphone6-tools-content">
          <ul>
            <li>
              <i class="el-icon-star-on  icon"></i>
              <a href="javascript:void(0)">Spudger</a>
            </li>
            <li>
              <i class="el-icon-star-on  icon"></i>
              <a href="javascript:void(0)">Suction Handle</a>
            </li>
            <li>
              <i class="el-icon-star-on  icon"></i>
              <a href="javascript:void(0)">P2 Pentalobe Screwdriver iPhone</a>
            </li>
            <li>
              <i class="el-icon-star-on  icon"></i>
              <a href="javascript:void(0)">iFixit Opening Tools</a>
            </li>
            <li>
              <i class="el-icon-star-on  icon"></i>
              <a href="javascript:void(0)">iSclack</a>
            </li>
            <li>
              <i class="el-icon-star-on  icon"></i>
              <a href="javascript:void(0)">Tweezers</a>
            </li>
            <li>
              <i class="el-icon-star-on  icon"></i>
              <a href="javascript:void(0)">Phillips #000 Screwdriver</a>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
      <div class="iphone6-parts">
        <div class="iphone6-parts-heade">
          <h5>Parts</h5>
          <div class="buy">
            <a href="javascript:void(0)">Buy these Parts</a>
          </div>
        </div>
        <div class="iphone6-parts-buy">
          <a href="javascript:void(0)">
            <img src="../../public/img/iphone6/small.jpeg" alt="">
          </a>
          <a href="javascript:void(0)">
            <p>iPhone 6 LCD Screen and Digitizer Full Assembly </p>
            <p>$64.99</p>
          </a>
          <a href="javascript:void(0)">
            Buy
          </a>
        </div>
        <div class="iphone6-parts-content">
          <ul>
            <li>
              <i class="el-icon-star-on  icon"></i>
              <a href="javascript:void(0)">NuGlas Tempered Glass Screen Protector for iPhone 6 6s</a>
            </li>
            <li>
              <i class="el-icon-star-on  icon"></i>
              <a href="javascript:void(0)">iPhone 6 Front Panel Assembly Cable Bracket
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div style="clear:both"></div>
    </div> -->
    <div class="iphone6-introduction">
      <div class="intp-step11">
        <h2>
          <a href="javascript:void(0)">
            Step 1
            <span>Pentalobe Screws</span>
          </a>
        </h2>
        <div class="content" style="width:100%">
          <img :src="step1Src" alt="">
          <div class="intp-step11-right">
            <ul>
              <li class="mb0">
              </li>
              <li class="warn">
                <i class="el-icon-warning"></i>
               Before disassembling your iPhone, discharge the battery below 25%. A charged lithium-ion battery can catch fire and/or explode if accidentally punctured.
              </li>
              <li>
                <i>●</i>
                Power off your iPhone before beginning disassembly.</li>
              <li>
                <i>●</i>
                Remove the two 3.6 mm-long Pentalobe screws next to the Lightning connector.</li>
            </ul>
          </div>
        </div>
      </div>
      <br>
      <hr>
      <br>
      <div class="intp-step11">
        <h2>
          <a href="javascript:void(0)">
            Step 2
            <span>Taping Over The Display</span>
          </a>
        </h2>
        <div class="content">
          <img :src="step2Src" alt="">
          <div class="intp-step11-right">
            <ul>
              <li>
                <img v-for="(v,i) in step2" :key="i" :class="v.active" :src="v.src" alt="" @mouseenter="handleEnter(i,2)">
              </li>
              <li>
                <i>●</i>
                If your display glass is cracked, keep further breakage contained and prevent bodily harm during your repair by taping over the glass.
              </li>
              <li>
                <i>●</i>
                Lay overlapping strips of clear packing tape over the iPhone's display until the whole face is covered.
              </li>
              <li class="info">
                <i class="el-icon-info"></i>
                This will keep glass shards contained and provide structural integrity when prying and lifting the display.</li>
              <li class="warn">
                <i class="el-icon-warning"></i>
                Wear safety glasses to protect your eyes from any glass shaken free during the repair.</li>
              <li class="info">
                <i class="el-icon-info"></i>
               If the broken glass makes it difficult to get a suction cup to stick in the next few steps, try folding a strong piece of tape (such as duct tape) into a handle and lifting the display with that instead.</li>
            </ul>
          </div>
        </div>
      </div>
      <br>
      <hr>
      <br>
      <div class="intp-step11">
        <h2>
          <a href="javascript:void(0)">
            Step 3
            <span>iSclack Opening Procedure</span>
          </a>
        </h2>
        <div class="content">
          <img :src="step3Src" alt="">
          <div class="intp-step11-right">
            <ul>
              <li class="mb0"></li>
              <li class="info">
                <i class="el-icon-info"></i>
               The next three steps demonstrate using the iSclack, a great tool for safely opening the iPhone 6 that we recommend for anyone doing more than one repair. If you aren't using the iSclack, skip down three steps for an alternate method.</li>
              <li>
                <i>●</i>
               If the plastic depth gauge is attached at the center of the iSclack, remove it now—it's not needed for larger phones like the iPhone 6.</li>
              <li>
                <i>●</i>
               Close the handle on the iSclack, opening the suction-cup jaws.</li>
            </ul>
          </div>
        </div>
      </div>
      <br>
      <hr>
      <br>
      <div class="intp-step11">
        <h2>
          <a href="javascript:void(0)">
            Step 4
          </a>
        </h2>
        <div class="content">
          <img :src="step4Src" alt="">
          <div class="intp-step11-right">
            <ul>
              <li>
                <img v-for="(v,i) in step4" :key="i" :class="v.active" :src="v.src" alt="" @mouseenter="handleEnter(i,4)">
                <div class="placeholder"></div>
              </li>
              <li>
                <i>●</i>
                Place the bottom of your iPhone in between the suction cups.</li>
              <li>
                <i>●</i>
               Position the iSclack's upper suction cup against the display, just above (but not covering) the home button.</li>
              <li>
                <i>●</i>
               Open the handles to close the jaws of the iSclack. Center the suction cups and press them firmly onto the top and bottom of the iPhone.</li>
            </ul>
          </div>
        </div>
      </div>
      <br>
      <hr>
      <br>
      <div class="intp-step11">
        <h2>
          <a href="javascript:void(0)">
            Step 5
          </a>
        </h2>
        <div class="content">
          <img :src="step5Src" alt="">
          <div class="intp-step11-right">
            <ul>
              <li>
                <img v-for="(v,i) in step5" :key="i" :class="v.active" :src="v.src" alt="" @mouseenter="handleEnter(i,5)">
                <div class="placeholder"></div>
              </li>
              <li>
                <i>●</i>
                Hold onto your iPhone securely and close the handle of the iSclack to separate the suction cups, pulling the front panel up from the rear case.</li>
              <li>
                <i>●</i>
               The iSclack is designed to safely open your iPhone just enough to separate the pieces, but not enough to damage the display cables.</li>
              <li>
                <i>●</i>
               Peel the two suction cups off your iPhone.</li>
              <li>
                <i>●</i>
              Skip the next three steps and continue on to Step 8.</li>
            </ul>
          </div>
        </div>
      </div>
      <br>
      <hr>
      <br>
      <div class="intp-step11">
        <h2>
          <a href="javascript:void(0)">
            Step 6
            <span>Manual Opening Procedure</span>
          </a>
        </h2>
        <div class="content">
          <img :src="step6Src" alt="">
          <div class="intp-step11-right">
            <ul>
              <li class="mb0">
              </li>
              <li>
                <i>●</i>
               If you don't have an iSclack, use a single suction cup to lift the front panel:</li>
              <li>
                <i>●</i>
               Press a suction cup onto the screen, just above the home button.</li>
              <li class="info">
                <i class="el-icon-info"></i>
               Be sure the cup is pressed securely onto the screen to get a tight seal.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <br>
      <hr>
      <br>
      <div class="intp-step11">
        <h2>
          <a href="javascript:void(0)">
            Step 7
          </a>
        </h2>
        <div class="content">
          <img :src="step7Src" alt="">
          <div class="intp-step11-right">
            <ul>
              <li class="mb0">
              </li>
              <li class="warn">
                <i class="el-icon-warning"></i>
                While holding the iPhone down with one hand, pull up on the suction cup to slightly separate the front panel assembly from the rear case.</li>
              <li>
                <i>●</i>
                Take your time and apply firm, constant force. The display assembly is a much tighter fit than most devices.</li>
              <li>
                <i>●</i>
               Using a plastic opening tool, begin to gently pry the rear case down, away from the display assembly, while continuing to pull up with the suction cup.</li>
              <li class="info">
                <i class="el-icon-info"></i>
                There are several clips holding the front panel assembly to the rear case, so you may need to use a combination of the suction cup and plastic opening tool to free the front panel assembly.</li>
            </ul>
          </div>
        </div>
      </div>

      <br>
      <hr>
      <br>
      <div class="intp-step11">
        <h2>
          <a href="javascript:void(0)">
            Step 8
          </a>
        </h2>
        <div class="content">
          <img :src="step8Src" alt="">
          <div class="intp-step11-right">
            <ul>
              <li>
                <img v-for="(v,i) in step8" :key="i" :class="v.active" :src="v.src" alt="" @mouseenter="handleEnter(i,8)">
                <div class="placeholder"></div>
              </li>
              <li>
               <i>●</i>
               Pull the plastic nub to release the vacuum seal on the suction cup.</li>
              <li>
                <i>●</i>
              Remove the suction cup from the display assembly.</li>
            </ul>
          </div>
        </div>
      </div>
      <br>
      <hr>
      <br>

      <div class="intp-step11">
        <h2>
          <a href="javascript:void(0)">
            Step 9
            <span>Opening up the phone</span>
          </a>
        </h2>
        <div class="content">
          <img :src="step9Src" alt="">
          <div class="intp-step11-right">
            <ul>
              <li>
                <img v-for="(v,i) in step9" :key="i" :class="v.active" :src="v.src" alt="" @mouseenter="handleEnter(i,9)">
              </li>
              <li>
                <i>●</i>
                Open the iPhone by swinging the home button end of the front panel assembly away from the rear case, using the top of the phone as a hinge.</li>
              <li class="info">
                <i class="el-icon-info"></i>
                Several clips along the top edge of the front panel form a partial hinge.</li>
              <li class="info">
                <i class="el-icon-info"></i>
                During reassembly, align the clips just below the top edge of the rear case. Then, slide the front panel upward until its top edge is flush with that of the rear case.</li>
            </ul>
          </div>
        </div>
      </div>

      <br>
      <hr>
      <br>
      <div class="intp-step11">
        <h2>
          <a href="javascript:void(0)">
            Step 10
          </a>
        </h2>
        <div class="content">
          <img :src="step10Src" alt="">
          <div class="intp-step11-right">
            <ul>
              <li>
                <img v-for="(v,i) in step10" :key="i" :class="v.active" :src="v.src" alt="" @mouseenter="handleEnter(i,10)">
              </li>
              <li>
                <i>●</i>
                Open the display to about a 90º angle, and lean it against something to keep it propped up while you're working on the phone.</li>
              <li class="info">
                <i class="el-icon-info"></i>
               In a pinch, an unopened canned beverage works well for this.</li>
              <li>
                <i>●</i>
              Add a rubber band to keep the display securely in place while you work. This prevents undue strain on the display cables.</li>
            </ul>
          </div>
        </div>
      </div>

      <br>
      <hr>
      <br>
      <div class="intp-step11">
        <h2>
          <a href="javascript:void(0)">
            Step 11
            <span>Removing the battery connector bracket screws</span>
          </a>
        </h2>
        <div class="content">
          <img :src="step11Src" alt="">
          <div class="intp-step11-right">
            <ul>
              <li class="mb0">
              </li>
              <li>
                <i>●</i>
                Remove the following Phillips screws from the battery connector bracket:</li>
              <li>
                <i class="bulletRed">●</i>
               One 2.2 mm screw</li>
              <li>
                <i class="bulletOrange">●</i>
               One 3.2 mm screw</li>
            </ul>
          </div>
        </div>
      </div>

      <br>
      <hr>
      <br>
      <div class="intp-step11">
        <h2>
          <a href="javascript:void(0)">
            Step 12
          </a>
        </h2>
        <div class="content">
          <img :src="step12Src" alt="">
          <div class="intp-step11-right">
            <ul>
              <li class="mb0">
              </li>
              <li>
                <i>●</i>
                Remove the metal battery connector bracket from the iPhone.</li>
            </ul>
          </div>
        </div>
      </div>

      <br>
      <hr>
      <br>
      <div class="intp-step11">
        <h2>
          <a href="javascript:void(0)">
            Step 13
            <span>Disconnecting the battery connector</span>
          </a>
        </h2>
        <div class="content">
          <img :src="step13Src" alt="">
          <div class="intp-step11-right">
            <ul>
              <li class="mb0">
              </li>
              <li>
                <i>●</i>
               Use a plastic opening tool to gently pry the battery connector up from its socket on the logic board.</li>
             <li class="warn">
               <i class="el-icon-warning"></i>
               Take care to only pry up on the battery connector, and not the socket on the logic board. If you pry up on the logic board socket, you may break the connector entirely.
               </li>  
            </ul>
          </div>
        </div>
      </div>

      <br>
      <hr>
      <br>
      <div class="intp-step11">
        <h2>
          <a href="javascript:void(0)">
            Step 14
            <span>Removing the front panel assembly cable bracket screws</span>
          </a>
        </h2>
        <div class="content">
          <img :src="step14Src" alt="">
          <div class="intp-step11-right">
            <ul>
              <li class="mb0">
              </li>
              <li>
                <i>●</i>
                Remove the following five Phillips screws securing the front panel assembly cable bracket:</li>
              <li>
                <i>●</i>
                Three 1.2 mm screws
              </li>
              <li>
                <i>●</i>
                One 1.7 mm screw
              </li>
              <li>
                <i>●</i>
                One 3.1 mm screw
              </li>
              <li class="warn">
                <i class="el-icon-warning"></i>
               Incorrect placement of these screws during reassembly will cause permanent damage to your iPhone's logic board.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <br>
      <hr>
      <br>
      <div class="intp-step11">
        <h2>
          <a href="javascript:void(0)">
            Step 15
          </a>
        </h2>
        <div class="content">
          <img :src="step15Src" alt="">
          <div class="intp-step11-right">
            <ul>
              <li class="mb0">
              </li>
              <li>
                <i>●</i>
               Remove the front panel assembly cable bracket from the logic board.</li>
            </ul>
          </div>
        </div>
      </div>

      <br>
      <hr>
      <br>
      <div class="intp-step11">
        <h2>
          <a href="javascript:void(0)">
            Step 16
          </a>
        </h2>
        <div class="content">
          <img :src="step16Src" alt="">
          <div class="intp-step11-right">
            <ul>
              <li>
                <img v-for="(v,i) in step16" :key="i" :class="v.active" :src="v.src" alt="" @mouseenter="handleEnter(i,16)">
                <div class="placeholder"></div>
              </li>
              <li class="warn">
                <i class="el-icon-warning"></i>
               In the next four steps, take care to pry up only on the cable connectors, and not on their sockets on the logic board.</li>
              <li>
                <i>●</i>
               Use a spudger or a fingernail to disconnect the front-facing camera and sensor cable connector.</li>
            </ul>
          </div>
        </div>
      </div>

      <br>
      <hr>
      <br>
      <div class="intp-step11">
        <h2>
          <a href="javascript:void(0)">
            Step 17
          </a>
        </h2>
        <div class="content">
          <img :src="step17Src" alt="">
          <div class="intp-step11-right">
            <ul>
              <li>
                <img v-for="(v,i) in step17" :key="i" :class="v.active" :src="v.src" alt="" @mouseenter="handleEnter(i,17)">
                <div class="placeholder"></div>
              </li>
              <li>
                <i>●</i>
              Use a spudger or a fingernail to disconnect the home button cable connector.</li>
            </ul>
          </div>
        </div>
      </div>

      <br>
      <hr>
      <br>
      <div class="intp-step11">
        <h2>
          <a href="javascript:void(0)">
            Step 18
          </a>
        </h2>
        <div class="content">
          <img :src="step18Src" alt="">
          <div class="intp-step11-right">
            <ul>
              <li>
                 <img v-for="(v,i) in step18" :key="i" :class="v.active" :src="v.src" alt="" @mouseenter="handleEnter(i,18)">
                   <div class="placeholder"></div>
              </li>
              <li class="warn">
                <i class="el-icon-warning"></i>
               Make sure the battery is disconnected before you disconnect or reconnect the cable in this step.</li>
              <li>
                <i>●</i>
              Use a spudger or a fingernail to disconnect the display data cable connector.</li>
              <li class="info">
                <i class="el-icon-info"></i>
              When reassembling your phone, the display data cable may pop off its connector. This can result in white lines or a blank screen when powering your phone back on. If that happens, simply reconnect the cable and power cycle your phone. The best way to power cycle your phone is to disconnect and reconnect the battery connector.</li>
            </ul>
          </div>
        </div>
      </div>

      <br>
      <hr>
      <br>
      <div class="intp-step11">
        <h2>
          <a href="javascript:void(0)">
            Step 19
            <span>Home/Touch ID Sensor</span>
          </a>
        </h2>
        <div class="content">
          <img :src="step19Src" alt="">
          <div class="intp-step11-right">
            <ul>
              <li>
                 <img v-for="(v,i) in step19" :key="i" :class="v.active" :src="v.src" alt="" @mouseenter="handleEnter(i,19)">
                   <div class="placeholder"></div>
              </li>
              <li>
                <i>●</i>
                Use the flat end of a spudger to disconnect the digitizer cable connector.</li>
              <li class="info">
                <i class="el-icon-info"></i>
                When reconnecting the digitizer cable, do not press the center of the connector. Press one end of the connector, then press the opposite end. Pressing in the center of the connector can bend the component and cause digitizer damage.</li>
            </ul>
          </div>
        </div>
      </div>
      <br>
      <hr>
      <br>
      <div class="intp-step11">
        <h2>
          <a href="javascript:void(0)">
            Step 20
            <span>Separating front panel assembly and rear case</span>
          </a>
        </h2>
        <div class="content">
          <img :src="step20Src" alt="">
          <div class="intp-step11-right">
            <ul>
              <li class="mb0">
              </li>
              <li>
                <i>●</i>
                Remove the front panel assembly from the rear case.</li>
            </ul>
          </div>
        </div>
      </div>
      <br>
      <hr>
      <br>
      <div class="intp-step11">
        <h2>
          <a href="javascript:void(0)">
            Step 21
            <span>Home Button</span>
          </a>
        </h2>
        <div class="content">
          <img :src="step21Src" alt="">
          <div class="intp-step11-right">
            <ul>
              <li class="mb0">
              </li>
              <li>
                <i class="bulletRed">●</i>
               Remove the two 1.9 mm Phillips screws securing the home button bracket.</li>
            </ul>
          </div>
        </div>
      </div>
      <br>
      <hr>
      <br>
      <div class="intp-step11">
        <h2>
          <a href="javascript:void(0)">
            Step 22
          </a>
        </h2>
        <div class="content">
          <img :src="step22Src" alt="">
          <div class="intp-step11-right">
            <ul>
              <li>
                  <img v-for="(v,i) in step22" :key="i" :class="v.active" :src="v.src" alt="" @mouseenter="handleEnter(i,22)">
                <div class="placeholder"></div>  
              </li>
              <li>
                <i>●</i>
               Remove the home button bracket from the front panel.</li>
            </ul>
          </div>
        </div>
      </div>
      <br>
      <hr>
      <br>
      <div class="intp-step11">
        <h2>
          <a href="javascript:void(0)">
            Step 23
          </a>
        </h2>
        <div class="content">
          <img :src="step23Src" alt="">
          <div class="intp-step11-right">
            <ul>
              <li>
                    <img v-for="(v,i) in step23" :key="i" :class="v.active" :src="v.src" alt="" @mouseenter="handleEnter(i,23)">
                <div class="placeholder"></div>  
              </li>
              <li>
                <i>●</i>
                Use the point of a spudger to disconnect the home button cable connector by pushing it up and away from the home button.</li>
            </ul>
          </div>
        </div>
      </div>
      <br>
      <hr>
      <br>
      <div class="intp-step11">
        <h2>
          <a href="javascript:void(0)">
            Step 24
          </a>
        </h2>
        <div class="content">
          <img :src="step24Src" alt="">
          <div class="intp-step11-right">
            <ul>
              <li>
                <img v-for="(v,i) in step24" :key="i" :class="v.active" :src="v.src" alt="" @mouseenter="handleEnter(i,24)">
                <div class="placeholder"></div>
              </li>
              <li>
                <i>●</i>
                Gently push the top left corner of the home button up away from the front panel.</li>
              <li class="warn">
                <i class="el-icon-warning"></i>
                Do not push the home button all the way through—you only need to get a corner free so that you can pry it free with a spudger.</li>
              <li class="info">
                <i class="el-icon-info"></i>
                This membrane is very thin. If you feel like you're going to tear the button, apply mild heat (with an iOpener, heat gun, or hair dryer) and try again.</li>
            </ul>
          </div>
        </div>
      </div>
      <br>
      <hr>
      <br>
      <div class="intp-step11">
        <h2>
          <a href="javascript:void(0)">
            Step 25
          </a>
        </h2>
        <div class="content">
          <img :src="step25Src" alt="">
          <div class="intp-step11-right">
            <ul>
              <li>
                    <img v-for="(v,i) in step25" :key="i" :class="v.active" :src="v.src" alt="" @mouseenter="handleEnter(i,25)">
                <div class="placeholder"></div>
              </li>
              <li>
                <i>●</i>
                 Peel the home button the rest of the way off of the display by prying gently with a spudger.</li>
            </ul>
          </div>
        </div>
      </div>

        <br>
      <hr>
      <br>
      <div class="intp-step11">
        <h2>
          <a href="javascript:void(0)">
            Step 26
          </a>
        </h2>
        <div class="content">
          <img :src="step26Src" alt="">
          <div class="intp-step11-right">
            <ul>
              <li>
                    <img v-for="(v,i) in step26" :key="i" :class="v.active" :src="v.src" alt="" @mouseenter="handleEnter(i,26)">
                <div class="placeholder"></div>
              </li>
              <li>
                <i>●</i>
               Use the point of a spudger to carefully separate the home button cable from the adhesive securing it to the front panel.</li>
              <li class="warn">
                <i class="el-icon-warning"></i>
               If the cable doesn't separate easily, apply heat using an iOpener or hair dryer to soften the adhesive, and try again. Be careful not to damage the cable.</li>
            </ul>
          </div>
        </div>
      </div>

           <br>
      <hr>
      <br>
      <div class="intp-step11">
        <h2>
          <a href="javascript:void(0)">
            Step 27
          </a>
        </h2>
        <div class="content">
          <img :src="step27Src" alt="">
          <div class="intp-step11-right">
            <ul>
              <li class="mb0">
              </li>
              <li>
                <i>●</i>
               Once all the adhesive has been separated, remove the home button from the front panel.</li>
              <li class="info">
                <i class="el-icon-info"></i>
               If you are replacing a broken front panel, there may be glass shards stuck to the home button. Carefully remove any remaining glass before transferring your home button to a new display.</li>
              <li class="info">
                <i class="el-icon-info"></i>
               Your replacement part may come with an extra Phillips screw already installed left of the Home Button. Remove the unnecessary screw so that you can reinstall the home button bracket.</li>
            </ul>
          </div>
        </div>
      </div>
      <br>
      <hr>
      <br>
    </div>
    <br>
    <br>
    <br>
    <br>
    <div class="iphone6-conclusion">
      <div class="header">
        <h3>CONCLUSION</h3>
      </div>
      <div class="content">
        <p>To reassemble your device, follow these instructions in reverse order.</p>
        <a href="javascript:void(0)">
          Give the author +30 points!
        </a>
      </div>
      <div class="foot">
        <a href="javascript:void(0)">
          565 other people completed this guide.
        </a>
      </div>
    </div>

    <!-- <div class="iphone6-auto">
      <div class="iphone6-auto-left">
        <div class="left">
          <h3>Author</h3>
          <div>
            <img src="../../public/img/common/1.jpeg" alt="">
            <div>
              <p>Jeff Suovanen</p>
              <p>Member since: 08/06/2013</p>
              <p>178,602 Reputation</p>
              <p>144 Guides authored</p>
            </div>
          </div>
        </div>
        <div class="right">
          <div>
            <p>with 4 other contributors</p>
          </div>
          <div>
            <p>Badges:
              <span style="color:#555">46</span>
            </p>
          </div>
          <div>
            <img src="../../public/img/common/2.svg" alt="">
            <img src="../../public/img/common/3.svg" alt="">
            <img src="../../public/img/common/4.svg" alt="">
          </div>
          <div>
            <p>+43 more badges</p>
          </div>
        </div>
      </div>
      <div class="iphone6-auto-right">
        <h3>Team</h3>
        <div>
          <img src="../../public/img/common/5.jpeg" alt="">
          <div>
            <p>iFixit</p>
            <p>Community</p>
            <p>106 Members</p>
            <p>6,451 Guides authored</p>
          </div>
        </div>
      </div>
    </div> -->

    <br>
    <br>
    <hr>
    <br>
    <br>
  </div>
</template>
<script>
export default {
    data() {
        return {
            step1Src:
                'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/1-1.jpeg',
            step2Src:
                'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/2-1.jpeg',
            step2: [
                {
                    active: "active",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/2-1.jpeg',
                },
                {
                    active: "",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/2-2.jpeg',
                },
                {
                    active: "",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/2-3.jpeg',
                }
            ],
            step3Src:
                'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/3-1.jpeg',
            step4Src:
                'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/4-1.jpeg',
            step4: [
                {
                    active: "active",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/4-1.jpeg',
                },
                {
                    active: "",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/4-2.jpeg',
                }
            ],
            step5Src:
                'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/5-1.jpeg',
            step5: [
                {
                    active: "active",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/5-1.jpeg',
                },
                {
                    active: "",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/5-2.jpeg',
                }
            ],
            step6Src:
                'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/6-1.jpeg',
            step7Src:
                'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/7-1.jpeg',
            step8Src:
                'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/8-1.jpeg',
            step8: [
                {
                    active: "active",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/8-1.jpeg',
                },
                {
                    active: "",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/8-2.jpeg',
                }
            ],
            step9Src:
                'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/9-1.jpeg',
            step9: [
                {
                    active: "active",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/9-1.jpeg',
                },
                {
                    active: "",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/9-2.jpeg',
                },
                {
                    active: "",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/9-3.jpeg',
                }
            ],
            step10Src:
                'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/10-1.jpeg',
            step10: [
                {
                    active: "active",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/10-1.jpeg',
                },
                {
                    active: "",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/10-2.jpeg',
                },
                {
                    active: "",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/10-3.jpeg',
                }
            ],
            step11Src:
                'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/11-1.jpeg',
            step12Src:
                'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/12-1.jpeg',
            step13Src:
                'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/13-1.jpeg',
            step14Src:
                'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/14-1.jpeg',
            step15Src:
                'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/15-1.jpeg',
            step16Src:
                'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/16-1.jpeg',
            step16: [
                {
                    active: "active",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/16-1.jpeg',
                },
                {
                    active: "",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/16-2.jpeg',
                },
            ],
            step17Src:
                'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/17-1.jpeg',
            step17: [
                {
                    active: "active",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/17-1.jpeg',
                },
                {
                    active: "",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/17-2.jpeg',
                }
            ],
            step18Src:
                'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/18-1.jpeg',
            step18: [
                {
                    active: "active",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/18-1.jpeg',
                },
                {
                    active: "",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/18-2.jpeg',
                }
            ],    
            step19Src:
                'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/19-1.jpeg',
            step19: [
                {
                    active: "active",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/19-1.jpeg',
                },
                {
                    active: "",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/19-2.jpeg',
                }
            ],     
            step20Src:
                'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/20-1.jpeg',
            step21Src:
                'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/21-1.jpeg',
            step22Src:
                'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/22-1.jpeg',
            step22: [
                {
                    active: "active",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/22-1.jpeg',
                },
                {
                    active: "",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/22-2.jpeg',
                }
            ],
            step23Src:
                'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/23-1.jpeg',
            step23: [
                {
                    active: "active",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/23-1.jpeg',
                },
                {
                    active: "",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/23-2.jpeg',
                }
            ],    
            step24Src:
                'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/24-1.jpeg',
            step24: [
                {
                    active: "active",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/24-1.jpeg',
                },
                {
                    active: "",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/24-2.jpeg',
                },
            ],
            step25Src:
                'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/25-1.jpeg',
            step25: [
                {
                    active: "active",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/25-1.jpeg',
                },
                {
                    active: "",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/25-2.jpeg',
                },
            ],     
            step26Src:
                'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/26-1.jpeg',
            step26: [
                {
                    active: "active",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/26-1.jpeg',
                },
                {
                    active: "",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/26-2.jpeg',
                },
            ], 
            step27Src:
                'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6/27-1.jpeg',
        };
    },
    methods: {
        handleEnter(i, v) {
            this[`step${v}Src`] = this[`step${v}`][i].src;
            _.each(this[`step${v}`], (value, index) => {
                if (i == index) {
                    value.active = "active";
                } else {
                    value.active = "";
                }
            });
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/iphone6.scss";
</style>

