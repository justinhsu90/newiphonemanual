<template>
  <div>
    <h1>iPhone 7 Plus Display Assembly Replacement</h1>
    <div class="iphone6-evalute clear">
      <div class="ip6R">
        <img
          src="https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/title.jpeg"
          alt="iPhone 6s Display Assembly Replacement"
        >
        <P>
          <i
            class="svg-icon"
            style="display: inline-block; width: 24px; height: 24px;"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle
                cx="12"
                cy="8"
                r="7"
              ></circle>
              <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
            </svg>
          </i> Featured Guide
        </P>
      </div>
      <div class="ip6L">
          <div class="iphone6-introduce">
      <h2>Introduction</h2>
      <p>
        Use this guide if your new display assembly comes with the front-facing camera, earpiece speaker, and LCD shield plate already installed. You'll simply remove the old display assembly and transfer the home/Touch ID sensor to the new display assembly.</p>
      <P>If your replacement display does not include those components, follow this more in-depth guide instead.</P>
      <P>In both cases, the original home/Touch ID sensor must be transferred onto the new display in order for it to function.</P>
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
              <a href="javascript:void(0)">iOpener</a>
            </li>
            <li>
              <i class="el-icon-star-on  icon"></i>
              <a href="javascript:void(0)">Suction Handle</a>
            </li>
            <li>
              <i class="el-icon-star-on  icon"></i>
              <a href="javascript:void(0)">Suction Handle</a>
            </li>
            <li>
              <i class="el-icon-star-on  icon"></i>
              <a href="javascript:void(0)">Tri-point Y000 Screwdriver Bit</a>
            </li>
            <li>
              <i class="el-icon-star-on  icon"></i>
              <a href="javascript:void(0)">iFixit Opening Picks set of 6</a>
            </li>
            <li>
              <i class="el-icon-star-on  icon"></i>
              <a href="javascript:void(0)">Tweezers</a>
            </li>
            <li>
              <i class="el-icon-star-on  icon"></i>
              <a href="javascript:void(0)">P2 Pentalobe Screwdriver iPhone</a>
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
            <img
              src="../../public/img/iphone7p/small.jpeg"
              alt=""
            >
          </a>
          <a href="javascript:void(0)">
            <p>iPhone 7 Plus LCD Screen and Digitizer Full Assembly </p>
            <p>$99.99</p>
          </a>
          <a href="javascript:void(0)">
            Buy
          </a>
        </div>
        <div class="iphone6-parts-content">
          <ul>
            <li>
              <i class="el-icon-star-on  icon"></i>
              <a href="javascript:void(0)">iPhone 7 Plus Display Assembly Adhesive</a>
            </li>
            <li>
              <i class="el-icon-star-on  icon"></i>
              <a href="javascript:void(0)">iPhone 7/7 Plus Bottom Screws
              </a>
            </li>
            <li>
              <i class="el-icon-star-on  icon"></i>
              <a href="javascript:void(0)">iPhone 7 Plus Front Panel Assembly Cable Bracket
              </a>
            </li>
            <li>
              <i class="el-icon-star-on  icon"></i>
              <a href="javascript:void(0)">NuGlas Tempered Glass Screen Protector for iPhone 7 Plus/8 Plus</a>
            </li>
          </ul>
        </div>
      </div>
    </div> -->
    <div class="iphone6-introduction">
      <div class="intp-step11">
        <h2>
          <a href="javascript:void(0)">
            Step 1
            <span>Pentalobe Screws</span>
          </a>
        </h2>
        <div
          class="content"
          style="width:100%"
        >
          <img
            :src="step1Src"
            alt=""
          >
          <div class="intp-step11-right">
            <ul>
              <li class="mb0">
              </li>
              <li>
                <i>●</i>
                Before you begin, discharge your iPhone battery below 25%. A charged lithium-ion battery can catch fire and/or explode if accidentally punctured.
              </li>
              <li class="warn">
                <i class="el-icon-warning"></i>
                Power off your iPhone before beginning disassembly.</li>
              <li>
                <i>●</i>
                Remove the two 3.4 mm pentalobe screws at the bottom edge of the iPhone.</li>
              <li class="info">
                <i class="el-icon-info"></i>
                Opening the iPhone's display will compromise its waterproof seals. Have replacement seals ready before you proceed past this step, or take care to avoid liquid exposure if you reassemble your iPhone without replacing the seals.</li>
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
          <img
            :src="step2Src"
            alt=""
          >
          <div class="intp-step11-right">
            <ul>
              <li>
                <img
                  v-for="(v,i) in step2"
                  :key="i"
                  :class="v.active"
                  :src="v.src"
                  alt=""
                  @mouseenter="handleEnter(i,2)"
                >
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
            <span>Opening Procedure</span>
          </a>
        </h2>
        <div class="content">
          <img
            :src="step3Src"
            alt=""
          >
          <div class="intp-step11-right">
            <ul>
              <li class="mb0"></li>
              <li class="info">
                <i class="el-icon-info"></i>
                Heating the lower edge of the iPhone will help soften the adhesive securing the display, making it easier to open.</li>
              <li>
                <i>●</i>
                Use a hairdryer or prepare an iOpener and apply it to the lower edge of the iPhone for about a minute in order to soften up the adhesive underneath.</li>
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
          <img
            :src="step4Src"
            alt=""
          >
          <div class="intp-step11-right">
            <ul>
              <li>
                <img
                  v-for="(v,i) in step4"
                  :key="i"
                  :class="v.active"
                  :src="v.src"
                  alt=""
                  @mouseenter="handleEnter(i,4)"
                >
                <div class="placeholder"></div>
              </li>
              <li>
                <i>●</i>
                Apply a suction cup to the lower half of the front panel, just above the home button.</li>
              <li class="info">
                <i class="el-icon-info"></i>
                Be sure the suction cup does not overlap with the home button, as this will prevent a seal from forming between the suction cup and front glass.</li>
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
          <img
            :src="step5Src"
            alt=""
          >
          <div class="intp-step11-right">
            <ul>
              <li>
                <img
                  v-for="(v,i) in step5"
                  :key="i"
                  :class="v.active"
                  :src="v.src"
                  alt=""
                  @mouseenter="handleEnter(i,5)"
                >
              </li>
              <li>
                <i>●</i>
                Pull up on the suction cup with firm, constant pressure to create a slight gap between the front panel and rear case.</li>
              <li>
                <i>●</i>
                Insert the flat end of a spudger into the gap.</li>
              <li class="info">
                <i class="el-icon-info"></i>
                The watertight adhesive holding the display in place is very strong; creating this initial gap takes a significant amount of force. If you're having a hard time opening a gap, rock the screen up and down to weaken the adhesive until you can fit a spudger inside.</li>
              <li>
                <i>●</i>
                While pulling up on the suction cup, twist the spudger to widen the opening between the screen and rear case.</li>
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
          </a>
        </h2>
        <div class="content">
          <img
            :src="step6Src"
            alt=""
          >
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
                Be sure the cup is completely on the screen to get a tight seal.
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
            <span>Start lifting the front panel assembly</span>
          </a>
        </h2>
        <div class="content">
          <img
            :src="step7Src"
            alt=""
          >
          <div class="intp-step11-right">
            <ul>
              <li class="mb0">
              </li>
              <li class="warn">
                <i class="el-icon-warning"></i>
                The front panel is attached with clips, and there are several ribbon cables connecting it to the rest of the phone. Your goal here is to release the clips and open the phone only enough to disconnect the cables. Go slowly and carefully to avoid damage.</li>

              <li class="info">
                <i class="el-icon-info"></i>
                Make sure the suction cup is firmly attached to the front panel assembly near the home button.</li>
              <li>
                <i>●</i>
                While holding the iPhone down with one hand, pull up on the suction cup to slightly separate the home button end of the front panel from the rear case.</li>
              <li>
                <i>●</i>
                With a plastic opening tool, gently pry the edges of the rear case down, away from the front panel assembly, while you pull up with the suction cup.</li>
              <li class="warn">
                <i class="el-icon-warning"></i>
                Take your time and apply firm, constant force. The 5s front panel assembly is a much tighter fit than most devices.</li>
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
          <img
            :src="step8Src"
            alt=""
          >
          <div class="intp-step11-right">
            <ul>
              <li>
                <img
                  v-for="(v,i) in step8"
                  :key="i"
                  :class="v.active"
                  :src="v.src"
                  alt=""
                  @mouseenter="handleEnter(i,8)"
                >
                <div class="placeholder"></div>
              </li>
              <li class="warn">
                <i class="el-icon-warning"></i>
                Do not try to completely remove the front panel assembly from the rear case, as there are several delicate ribbon cables connecting them.</li>
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
            <span>Removing the Touch ID cable bracket</span>
          </a>
        </h2>
        <div class="content">
          <img
            :src="step9Src"
            alt=""
          >
          <div class="intp-step11-right">
            <ul>
              <li>
                <img
                  v-for="(v,i) in step9"
                  :key="i"
                  :class="v.active"
                  :src="v.src"
                  alt=""
                  @mouseenter="handleEnter(i,9)"
                >
                <div class="placeholder"></div>
              </li>
              <li>
                <i>●</i>
                Open the phone just enough to reveal the metal bracket covering the home button cable.</li>
              <li>
                <i>●</i>
                Only the phone's original home button assembly will be capable of using the Touch ID functionality. If you rip the cable, installing a new home button will only restore ordinary home button functions, not the Touch ID features.</li>
              <li class="warn">
                <i class="el-icon-warning"></i>
                Do not open the phone too far or you risk damaging the home button cable, or the socket it plugs into. Keep the cable loose—if it is stretched taut, that's too far.</li>
              <li>
                <i>●</i>
                Use the tip of a spudger to push the bracket free and remove it with tweezers.</li>
              <li class="info">
                <i class="el-icon-info"></i>
                The next two steps apply to reassembly. Skip them and continue to Step 12 until reassembly.</li>
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
          <img
            :src="step10Src"
            alt=""
          >
          <div class="intp-step11-right">
            <ul>
              <li>
                <img
                  v-for="(v,i) in step10"
                  :key="i"
                  :class="v.active"
                  :src="v.src"
                  alt=""
                  @mouseenter="handleEnter(i,10)"
                >
                <div class="placeholder"></div>
              </li>
              <li class="info">
                <i class="el-icon-info"></i>
                During reassembly, you will need to reinstall the Touch ID cable bracket. The top of the bracket needs to slide between the battery and Touch ID cable connector, in front of the metal tab. The bottom must latch down over the connector.</li>
              <li class="info">
                <i class="el-icon-info"></i>
                Slide the top of the bracket over the Touch ID cable connector from left to right.</li>
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
          </a>
        </h2>
        <div class="content">
          <img
            :src="step11Src"
            alt=""
          >
          <div class="intp-step11-right">
            <ul>
              <li>
                <img
                  v-for="(v,i) in step11"
                  :key="i"
                  :class="v.active"
                  :src="v.src"
                  alt=""
                  @mouseenter="handleEnter(i,11)"
                >
              </li>
              <li>
                <i>●</i>
                Pull the display assembly slightly away from the top edge of the phone to disengage the clips holding it to the rear case.</li>
              <li>
                <i>●</i>
                Open the iPhone by swinging the display up from the left side, like the back cover of a book.</li>
              <li class="warn">
                <i class="el-icon-warning"></i>
                Open the iPhone by swinging the display up from the left side, like the back cover of a book.</li>
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
            <span>Battery Disconnection</span>
          </a>
        </h2>
        <div class="content">
          <img
            :src="step12Src"
            alt=""
          >
          <div class="intp-step11-right">
            <ul>
              <li class="mb0">
              </li>
              <li>
                <i>●</i>
                Remove the following four tri-point Y000 screws securing the lower display cable bracket to the logic board:</li>
              <li class="warn">
                <i class="bulletRed">●</i>
                Three 1.2 mm screws</li>
              <li>
                <i class="bulletOrange">●</i>
                One 2.6 mm screw</li>
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
            <span>Opening up the phone</span>
          </a>
        </h2>
        <div class="content">
          <img
            :src="step13Src"
            alt=""
          >
          <div class="intp-step11-right">
            <ul>
              <li>
                <img
                  v-for="(v,i) in step13"
                  :key="i"
                  :class="v.active"
                  :src="v.src"
                  alt=""
                  @mouseenter="handleEnter(i,13)"
                >
                <div class="placeholder"></div>
              </li>
              <li>
                <i>●</i>
                Remove the lower display cable bracket.</li>
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
          </a>
        </h2>
        <div class="content">
          <img
            :src="step14Src"
            alt=""
          >
          <div class="intp-step11-right">
            <ul>
              <li>
                <img
                  v-for="(v,i) in step14"
                  :key="i"
                  :class="v.active"
                  :src="v.src"
                  alt=""
                  @mouseenter="handleEnter(i,14)"
                >
              </li>
              <li>
                <i>●</i>
                Use the point of a spudger to lift the battery connector out of its socket on the logic board.</li>
              <li class="info">
                <i class="el-icon-info"></i>
                Bend the connector cable up slightly to prevent it from making contact with the socket and providing power to the phone.
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
          <img
            :src="step15Src"
            alt=""
          >
          <div class="intp-step11-right">
            <ul>
              <li>
                <img
                  v-for="(v,i) in step15"
                  :key="i"
                  :class="v.active"
                  :src="v.src"
                  alt=""
                  @mouseenter="handleEnter(i,15)"
                >
              </li>
              <li class="warn">
                <i class="el-icon-warning"></i>
                Make sure the battery is disconnected before you disconnect or reconnect the cables in this step.</li>
              <li>
                <i>●</i>
                Use the flat end of a spudger or a fingernail to disconnect the two lower display connectors by prying them straight up from their sockets on the logic board.</li>
              <li class="info">
                <i class="el-icon-info"></i>
                To re-attach press connectors, press down on one end until it clicks into place, then repeat on the other end. Do not press down on the middle. If the connector is even slightly misaligned, the connector can bend, causing permanent damage.</li>
              <li class="info">
                <i class="el-icon-info"></i>
                If you have a blank screen, white lines on the display, or partial or complete lack of touch response after reassembling your phone, try disconnecting and carefully reconnecting both of these cables and make sure they are fully seated.</li>
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
          <img
            :src="step16Src"
            alt=""
          >
          <div class="intp-step11-right">
            <ul>
              <li>
                <img
                  v-for="(v,i) in step16"
                  :key="i"
                  :class="v.active"
                  :src="v.src"
                  alt=""
                  @mouseenter="handleEnter(i,16)"
                >
              </li>
              <li>
                <i>●</i>
                Remove the three tri-point Y000 screws securing the bracket over the front panel sensor assembly connector:</li>
              <li>
                <i class="bulletRed">●</i>
                One 1.3 mm screw</li>
              <li>
                <i class="bulletOrange">●</i>
                Two 1.0 mm screws</li>
              <li>
                <i>●</i>
                Remove the bracket.</li>
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
          <img
            :src="step17Src"
            alt=""
          >
          <div class="intp-step11-right">
            <ul>
              <li>
                <img
                  v-for="(v,i) in step17"
                  :key="i"
                  :class="v.active"
                  :src="v.src"
                  alt=""
                  @mouseenter="handleEnter(i,17)"
                >
                <div class="placeholder"></div>
              </li>
              <li>
                <i>●</i>
                Disconnect the front panel sensor assembly connector from its socket on the logic board.</li>
              <li class="info">
                <i class="el-icon-info"></i>
                This press connector should also be reconnected one end at a time to minimize the risk of bending.</li>
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
          <img
            :src="step18Src"
            alt=""
          >
          <div class="intp-step11-right">
            <ul>
              <li class="mb0">
              </li>
              <li>
                <i>●</i>
                Remove the display assembly.</li>
              <li class="info">
                <i class="el-icon-info"></i>
                During reassembly, pause here if you wish to replace the adhesive around the edges of the display.</li>
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
          <img
            :src="step19Src"
            alt=""
          >
          <div class="intp-step11-right">
            <ul>
              <li class="mb0">
              </li>
              <li>
                <i>●</i>
                Remove the four Y000 screws securing the bracket over the home/Touch ID sensor:</li>
              <li>
                <i class="bulletRed">●</i>
                One 1.1 mm screw</li>
              <li>
                <i class="bulletOrange">●</i>
                Three 1.3 mm screws</li>
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
          </a>
        </h2>
        <div class="content">
          <img
            :src="step20Src"
            alt=""
          >
          <div class="intp-step11-right">
            <ul>
              <li class="mb0">
              </li>
              <li>
                <i>●</i>
                Remove the bracket that secures the home/Touch ID sensor.</li>
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
          </a>
        </h2>
        <div class="content">
          <img
            :src="step21Src"
            alt=""
          >
          <div class="intp-step11-right">
            <ul>
              <li>
                <img
                  v-for="(v,i) in step21"
                  :key="i"
                  :class="v.active"
                  :src="v.src"
                  alt=""
                  @mouseenter="handleEnter(i,21)"
                >
                <div class="placeholder"></div>
              </li>
              <li>
                <i>●</i>
                Pry under the left edge of the home button cable connector to disconnect it from its socket.</li>
              <li class="warn">
                <i class="el-icon-warning"></i>
                If the entire connector begins to flip up without separating, press down on the cable at the top edge of the connector with the flat of your spudger, while simultaneously prying up the left edge of the connector. Be very careful not to damage the cable or connector, or you will permanently disable the sensor.</li>
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
          <img
            :src="step22Src"
            alt=""
          >
          <div class="intp-step11-right">
            <ul>
              <li>
                <img
                  v-for="(v,i) in step22"
                  :key="i"
                  :class="v.active"
                  :src="v.src"
                  alt=""
                  @mouseenter="handleEnter(i,22)"
                >
                <div class="placeholder"></div>
              </li>
              <li>
                <i>●</i>
                Carefully pry up the underlying connector and move it out of the way of the home/Touch ID cable.</li>
              <li class="warn">
                <i class="el-icon-warning"></i>
                It's very easy to damage your iPhone during this step. Work slowly and take care where you pry with your tool. If you damage the Touch ID hardware, it can only be replaced by Apple.</li>
              <li>
                <i>●</i>
                If the connector doesn't pry up easily, use a hair dryer or iOpener to heat and soften the adhesive securing the connector, and then try again.</li>
              <li class="warn">
                <i class="el-icon-warning"></i>
                Don't try to detach the connector completely—simply flip it up slightly so that the underlying home/Touch ID sensor cable can be removed.</li>
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
          <img
            :src="step23Src"
            alt=""
          >
          <div class="intp-step11-right">
            <ul>
              <li class="mb0">
              </li>
              <li class="info">
                <i class="el-icon-info"></i>
                Heating the area around the home/Touch ID sensor will help soften the adhesive holding its delicate cable in place, making it easier to remove safely.</li>
              <li>
                <i>●</i>
                Flip the display assembly over. Use a hairdryer or prepare an iOpener and apply it to the lower edge of the display for about 90 seconds in order to soften up the adhesive underneath.</li>
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
          <img
            :src="step24Src"
            alt=""
          >
          <div class="intp-step11-right">
            <ul>
              <li>
                <img
                  v-for="(v,i) in step24"
                  :key="i"
                  :class="v.active"
                  :src="v.src"
                  alt=""
                  @mouseenter="handleEnter(i,24)"
                >
              </li>
              <li>
                <i>●</i>
                Use an opening pick to gently separate the adhesive holding the home/Touch ID sensor cable to the back side of the display panel.</li>
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
          <img
            :src="step25Src"
            alt=""
          >
          <div class="intp-step11-right">
            <ul>
              <li class="mb0">
              </li>
              <li>
                <i>●</i>
                Remove the home/Touch ID sensor assembly by lifting it through the front side of the display.</li>
              <li class="info">
                <i class="el-icon-info"></i>
                To reinstall, first feed the cable through the hole in the front of the display.</li>
              <li class="info">
                <i class="el-icon-info"></i>
                Your replacement part may come with an extra Y000 screw already installed right of the Home Button. Remove the unnecessary screw so that you can reinstall the home button bracket.</li>
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
            <img
              src="../../public/img/common/1.jpeg"
              alt=""
            >
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
            <img
              src="../../public/img/common/2.svg"
              alt=""
            >
            <img
              src="../../public/img/common/3.svg"
              alt=""
            >
            <img
              src="../../public/img/common/4.svg"
              alt=""
            >
          </div>
          <div>
            <p>+43 more badges</p>
          </div>
        </div>
      </div>
      <div class="iphone6-auto-right">
        <h3>Team</h3>
        <div>
          <img
            src="../../public/img/common/5.jpeg"
            alt=""
          >
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
      step1Src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/1-1.jpeg",
      step2Src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/2-1.jpeg",
      step2: [
        {
          active: "active",
          src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/2-1.jpeg"
        },
        {
          active: "",
          src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/2-2.jpeg"
        },
        {
          active: "",
          src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/2-3.jpeg"
        }
      ],
      step3Src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/3-1.jpeg",
      step4Src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/4-1.jpeg",
      step4: [
        {
          active: "active",
          src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/4-1.jpeg"
        },
        {
          active: "",
          src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/4-2.jpeg"
        }
      ],
      step5Src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/5-1.jpeg",
      step5: [
        {
          active: "active",
          src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/5-1.jpeg"
        },
        {
          active: "",
          src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/5-2.jpeg"
        },
        {
          active: "",
          src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/5-3.jpeg"
        }
      ],
      step6Src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/6-1.jpeg",
      step7Src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/7-1.jpeg",
      step8Src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/8-1.jpeg",
      step8: [
        {
          active: "active",
          src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/8-1.jpeg"
        },
        {
          active: "",
          src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/8-2.jpeg"
        }
      ],
      step9Src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/9-1.jpeg",
      step9: [
        {
          active: "active",
          src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/9-1.jpeg"
        },
        {
          active: "",
          src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/9-2.jpeg"
        }
      ],
      step10Src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/10-1.jpeg",
      step10: [
        {
          active: "active",
          src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/10-1.jpeg"
        },
        {
          active: "",
          src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/10-2.jpeg"
        }
      ],
      step11Src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/11-1.jpeg",
      step11: [
        {
          active: "active",
          src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/11-1.jpeg"
        },
        {
          active: "",
          src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/11-2.jpeg"
        },
        {
          active: "",
          src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/11-3.jpeg"
        }
      ],
      step12Src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/12-1.jpeg",
      step13Src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/13-1.jpeg",
      step13: [
        {
          active: "active",
          src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/13-1.jpeg"
        },
        {
          active: "",
          src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/13-2.jpeg"
        }
      ],
      step14Src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/14-1.jpeg",
      step14: [
        {
          active: "active",
          src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/14-1.jpeg"
        },
        {
          active: "",
          src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/14-2.jpeg"
        },
        {
          active: "",
          src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/14-3.jpeg"
        }
      ],
      step15Src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/15-1.jpeg",
      step15: [
        {
          active: "active",
          src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/15-1.jpeg"
        },
        {
          active: "",
          src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/15-2.jpeg"
        },
        {
          active: "",
          src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/15-3.jpeg"
        }
      ],
      step16Src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/16-1.jpeg",
      step16: [
        {
          active: "active",
          src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/16-1.jpeg"
        },
        {
          active: "",
          src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/16-2.jpeg"
        },
        {
          active: "",
          src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/16-3.jpeg"
        }
      ],
      step17Src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/17-1.jpeg",
      step17: [
        {
          active: "active",
          src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/17-1.jpeg"
        },
        {
          active: "",
          src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/17-2.jpeg"
        }
      ],
      step18Src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/18-1.jpeg",
      step19Src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/19-1.jpeg",
      step20Src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/20-1.jpeg",
      step21Src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/21-1.jpeg",
      step21: [
        {
          active: "active",
          src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/21-1.jpeg"
        },
        {
          active: "",
          src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/21-2.jpeg"
        }
      ],
      step22Src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/22-1.jpeg",
      step22: [
        {
          active: "active",
          src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/22-1.jpeg"
        },
        {
          active: "",
          src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/22-2.jpeg"
        }
      ],
      step23Src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/23-1.jpeg",
      step24Src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/24-1.jpeg",
      step24: [
        {
          active: "active",
          src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/24-1.jpeg"
        },
        {
          active: "",
          src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/24-2.jpeg"
        },
        {
          active: "",
          src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/24-3.jpeg"
        }
      ],
      step25Src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone7p/25-1.jpeg"
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
@import "../assets/scss/iphone7p.scss";
</style>

