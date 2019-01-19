<template>
  <div>
    <h1>iPhone 6 Plus Display Assembly Replacement</h1>
    <div class="iphone6-evalute clear">
      <div class="ip6R">
        <img
          src="https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6p/title.jpeg"
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
        Use this guide to replace the cracked or broken screen on your iPhone 6 Plus by swapping out the display assembly.</p>
      <P>This guide will help you remove the screen and the home button for transfer to the new part. This guide does not include the removal of the front-facing camera and sensor cable, or the earpiece speaker. If your part does not have these components, follow the more in-depth front panel guide.</P>
      <p>In either case, it's important to transfer the original home button onto the new display in order for Touch ID (fingerprint scanning) to function.</p>
    </div>
      </div>
    </div>
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
              <a href="javascript:void(0)">P2 Pentalobe Screwdriver iPhone</a>
            </li>
            <li>
              <i class="el-icon-star-on  icon"></i>
              <a href="javascript:void(0)">Suction Handle</a>
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
              <a href="javascript:void(0)">iFixit Opening Tools</a>
            </li>
            <li>
              <i class="el-icon-star-on  icon"></i>
              <a href="javascript:void(0)">Phillips #000 Screwdriver</a>
            </li>
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
              src="../../public/img/iphone6p/small.jpeg"
              alt=""
            >
          </a>
          <a href="javascript:void(0)">
            <p>iPhone 6 Plus LCD Screen and Digitizer Full Assembly </p>
            <p>$74.99</p>
          </a>
          <a href="javascript:void(0)">
            Buy
          </a>
        </div>
        <div class="iphone6-parts-content">
          <ul>
            <li>
              <i class="el-icon-star-on  icon"></i>
              <a href="javascript:void(0)">NuGlas Tempered Glass Screen Protector for iPhone 6 Plus 6s Plus 7 Plus</a>
            </li>
            <li>
              <i class="el-icon-star-on  icon"></i>
              <a href="javascript:void(0)">iPhone 6 Plus Front Panel Assembly Cable Bracket</a>
            </li>
          </ul>
        </div>
      </div>
      <div style="clear:both"></div>
    </div> -->

    <br>
    <br>
    <div class="iphone6-introduction">
      <div class="intp-step11">
        <h2>
          <a href="javascript:void(0)">
            Step 1
            <span>Pentalobe Screws</span>
          </a>
        </h2>
        <div class="content">
          <img
            :src="step1Src"
            alt=""
          >
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
                <i class="bulletRed">●</i>
                Remove the two 3.6 mm P2 Pentalobe screws next to the Lightning connector.</li>
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
                If your display glass is cracked, keep further breakage contained and prevent bodily harm during your repair by taping over the glass.</li>
              <li>
                <i>●</i>
                Lay overlapping strips of clear packing tape over the iPhone's display until the whole face is covered.</li>
              <li>
                <i class="el-icon-info"></i>
                This will keep glass shards contained and provide structural integrity when prying and lifting the display.</li>
              <li class="warn">
                <i class="el-icon-warning"></i>
                Wear safety glasses to protect your eyes from any glass shaken free during the repair.</li>
              <li>
                <i>●</i>
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
          <img
            :src="step3Src"
            alt=""
          >
          <div class="intp-step11-right">
            <ul>
              <li>
                <img
                  v-for="(v,i) in step3"
                  :key="i"
                  :class="v.active"
                  :src="v.src"
                  alt=""
                  @mouseenter="handleEnter(i,3)"
                >
              <li class="info">
                <i class="el-icon-info"></i>
                The next two steps demonstrate using the iSclack, a great tool for safely opening the iPhone 6 Plus that we recommend for anyone doing more than one repair. If you aren't using the iSclack, skip to Step 4.</li>
              <li>
                <i>●</i>
                If the plastic depth gauge is attached at the center of the iSclack, remove it now—it's not needed for larger phones like the iPhone 6 Plus.</li>
              <li>
                <i>●</i>
                Close the handle on the iSclack, opening the suction cup jaws.</li>
              <li>
                <i>●</i>
                Place the bottom of your iPhone in between the suction cups.</li>
              <li class="info">
                <i class="el-icon-info"></i>
                Position the iSclack's upper suction cup against the display, near the home button.</li>
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
                Hold onto your iPhone securely and close the handle of the iSclack to separate the suction cups, pulling the front panel up from the rear case.</li>
              <li class="info">
                <i class="el-icon-info"></i>
                The iSclack is designed to safely open your iPhone enough to separate the pieces, but not enough to damage any of the display cables.</li>
              <li>
                <i>●</i>
                Peel the two suction cups off your iPhone.
              </li>
              <li>
                <i>●</i>
                Skip the next three steps and continue on to Step 7.
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
            Step 5
            <span>Front Panel Assembly</span>
          </a>
        </h2>
        <div class="content">
          <img
            :src="step5Src"
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
                Be sure the cup is pressed securely onto the screen to get a tight seal.</li>
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
                While holding the iPhone down with one hand, pull up on the suction cup to slightly separate the front panel assembly from the rear case.</li>
              <li class="warn">
                <i class="el-icon-warning"></i>
                Take your time and apply firm, constant force. The display assembly is a much tighter fit than most devices.</li>
              <li>
                <i>●</i>
                Using a plastic opening tool, begin to gently pry the rear case down, away from the display assembly, while continuing to pull up with the suction cup.
              </li>
              <li class="info">
                <i class="el-icon-info"></i>
                There are several clips attaching the front panel assembly to the rear case, so you may need to use a combination of the suction cup and plastic opening tool to free the front panel assembly.</li>
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
          <img
            :src="step7Src"
            alt=""
          >
          <div class="intp-step11-right">
            <ul>
              <li>
                <img
                  v-for="(v,i) in step7"
                  :key="i"
                  :class="v.active"
                  :src="v.src"
                  alt=""
                  @mouseenter="handleEnter(i,7)"
                >
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
              </li>
              <li>
                <i>●</i>
                Pull the home button end of the front panel assembly away from the rear case, using the top of the phone as a hinge.</li>
              <li>
                <i>●</i>
                Open the display to about a 90º angle, and lean it against something to keep it propped up while you're working on the phone.</li>
              <li>
                <i>●</i>
                Add a rubber band to keep the display securely in place while you work. This prevents undue strain on the display cables.</li>
              <li class="info">
                <i class="el-icon-info"></i>
                In a pinch, you can use an unopened canned beverage to hold the display.</li>
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
              <li class="info">
                <i class="el-icon-info"></i>
                Several clips along the top edge of the front panel form a partial hinge, allowing the front panel assembly to swing open like a book.</li>
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
          <img
            :src="step10Src"
            alt=""
          >
          <div class="intp-step11-right">
            <ul>
              <li class="mb0">
              </li>
              <li>
                <i>●</i>
                Remove the following Phillips screws from the battery connector bracket:</li>
              <li>
                <i class="bulletRed">●</i>
                One 2.3 mm screw</li>
              <li>
                <i class="bulletOrange">●</i>
                One 3.1 mm screw</li>
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
            Step 12
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
                Use a clean fingernail or the edge of an opening tool to gently pry the battery connector up from its socket on the logic board.</li>
              <li class="warn">
                <i class="el-icon-warning"></i>
                Take care to only pry up on the battery connector, and not the socket on the logic board. If you pry up on the logic board socket, you may break the connector entirely.</li>
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
          </a>
        </h2>
        <div class="content">
          <img
            :src="step13Src"
            alt=""
          >
          <div class="intp-step11-right">
            <ul>
              <li class="mb0"></li>
              <li>
                <i>●</i>
                Remove the following Phillips screws securing the front panel assembly cable bracket:</li>
              <li>
                <i class="warn">●</i>
                Three 1.2 mm screws.</li>
              <li>
                <i class="bulletRed">●</i>
                One 1.5 mm screw.</li>
              <li>
                <i class="bulletOrange">●</i>
                One 2.9 mm screw.</li>
              <li class="warn">
                <i class="el-icon-warning"></i>
                Do not attempt to insert longer screws into the red marked screw holes. Doing so may result in irreparable damage to the logic board.</li>
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
                <div class="placeholder"></div>
              </li>
              <li class="warn">
                <i class="el-icon-warning"></i>
                In the next four steps, take care to pry up only on the cable connectors, and not on their sockets on the logic board.</li>
              <li>
                <i>●</i>
                While still supporting the front panel, use a fingernail or the edge of an opening tool to disconnect the front-facing camera and earpiece speaker connector.</li>
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
                <div class="placeholder"></div>
              </li>
              <li>
                <i>●</i>
                Disconnect the home button cable connector.</li>
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
                <i class="el-icon-warning"></i>
                Make sure the battery is disconnected before you disconnect or reconnect the cable in this step.</li>
              <li>
                <i>●</i>
                Use a plastic opening tool to disconnect the display data cable connector.</li>
              <li class="info">
                <i class="el-icon-info"></i>
                When reassembling your phone, the display data cable may pop off the connector. This can result in white lines or a blank screen when powering your phone back on. If that happens, simply reconnect the cable and power cycle your phone. The best way to power cycle your phone is to disconnect and reconnect the battery connector.</li>
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
                Finally, disconnect the digitizer cable connector.</li>
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
            Step 19
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
            Step 20
            <span>Home Button Assembly</span>
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
                Remove the two 1.8 mm Phillips screws securing the home button bracket to the front panel.</li>
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
              <li class="mb0">
              </li>
              <li>
                <i>●</i>
                Remove the home button bracket from the front panel assembly.</li>
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
                Use the tip of a spudger to disconnect the home button connector from its socket on the home button cable.</li>
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
              <li>
                <i>●</i>
                Carefully wedge the tip of a spudger underneath the home button connector cable.</li>
              <li>
                <i>●</i>
                Gently move the spudger across to separate the home button connector cable from the adhesive securing it to the front panel assembly.</li>
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
                <div class="placeholder"></div>
              </li>
              <li>
                <i>●</i>
                Using your fingertip, gently push, but do not remove, the home button up from the opposite side to free one edge of the home button gasket from the front panel.</li>
              <li class="info">
                <i class="el-icon-info"></i>
                Do not push the home button all the way through—you only need to get a corner free, so that you can pry it free with a spudger.

              </li>
              <li class="warn">
                <i class="el-icon-warning"></i>
                The rubber gasket surrounding the home button is very thin. To prevent the gasket from tearing, we recommend applying a minimal amount of heat.</li>
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
              <li>
                <img
                  v-for="(v,i) in step25"
                  :key="i"
                  :class="v.active"
                  :src="v.src"
                  alt=""
                  @mouseenter="handleEnter(i,25)"
                >
                <div class="placeholder"></div>
              </li>
              <li>
                <i>●</i>
                Carefully run the tip of a spudger underneath the perimeter of the home button to separate it from the front panel assembly.</li>
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
          <img
            :src="step26Src"
            alt=""
          >
          <div class="intp-step11-right">
            <ul>
              <li class="mb0">
              </li>
              <li>
                <i>●</i>
                Lift and remove the home button assembly off the front panel assembly.</li>
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
            <span>Display Assembly</span>
          </a>
        </h2>
        <div class="content">
          <img
            :src="step27Src"
            alt=""
          >
          <div class="intp-step11-right">
            <ul>
              <li class="mb0">
              </li>
              <li>
                <i>●</i>
                Display assembly remains.</li>
              <li class="info">
                <i class="el-icon-info"></i>
                The Touch ID function will ONLY work with your phone's original home button assembly, so you'll need to transfer the home button assembly from your old display assembly to your new display assembly to retain Touch ID.</li>
              <li class="info">
                <i class="el-icon-info"></i>
                Your replacement part may come with an extra Phillips screw already installed left of the Home Button. Remove the unnecessary screw so that you can reinstall the home button bracket.</li>
              <li class="info">
                <i class="el-icon-info"></i>
                After reassembly, clean the touchscreen surface with an alcohol wipe prior to turning the iPhone back on. The alcohol helps dissipate any lingering static electricity, which can cause problems with the display.</li>
              <li class="warn">
                <i class="el-icon-warning"></i>
                After reassembly, connect the iPhone to an AC power source before turning it on for the first time. Once the iPhone has booted up successfully, you can disconnect the AC power.</li>

            </ul>
          </div>
        </div>
      </div>
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
      step1Src: 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6p/1-1.jpeg',
      step2Src: 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6p/2-1.jpeg',
      step2: [
        {
          active: "active",
          src: 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6p/2-1.jpeg'
        },
        {
          active: "",
          src: 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6p/2-2.jpeg'
        },
        {
          active: "",
          src: 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6p/2-3.jpeg'
        }
      ],
      step3Src: 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6p/3-1.jpeg',
      step3: [
        {
          active: "active",
          src: 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6p/3-1.jpeg'
        },
        {
          active: "",
          src: 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6p/3-2.jpeg'
        },
        {
          active: "",
          src: 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6p/3-3.jpeg'
        }
      ],
      step4Src: 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6p/4-1.jpeg',
      step4: [
        {
          active: "active",
          src: 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6p/4-1.jpeg'
        },
        {
          active: "",
          src: 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6p/4-2.jpeg'
        }
      ],
      step5Src: 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6p/5-1.jpeg',
      step6Src: 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6p/6-1.jpeg',
      step7Src: 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6p/7-1.jpeg',
      step7: [
        {
          active: "active",
          src: 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6p/7-1.jpeg'
        },
        {
          active: "",
          src: 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6p/7-2.jpeg'
        }
      ],
      step8Src: 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6p/8-1.jpeg',
      step8: [
        {
          active: "active",
          src: 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6p/8-1.jpeg'
        },
        {
          active: "",
          src: 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6p/8-2.jpeg'
        },
        {
          active: "",
          src: 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6p/8-3.jpeg'
        }
      ],
      step9Src: 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6p/9-1.jpeg',
      step9: [
        {
          active: "active",
          src: 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6p/9-1.jpeg'
        },
        {
          active: "",
          src: 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6p/9-2.jpeg'
        }
      ],
      step10Src: 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6p/10-1.jpeg',
      step11Src: 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6p/11-1.jpeg',
      step12Src: 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6p/12-1.jpeg',
      step13Src: 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6p/13-1.jpeg',
      step14Src: 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6p/14-1.jpeg',
      step15Src: 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6p/15-1.jpeg',
      step15: [
        {
          active: "active",
          src: 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6p/15-1.jpeg'
        },
        {
          active: "",
          src: 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6p/15-2.jpeg'
        }
      ],
      step16Src: 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6p/16-1.jpeg',
      step16: [
        {
          active: "active",
          src: 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6p/16-1.jpeg'
        },
        {
          active: "",
          src: 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6p/16-2.jpeg'
        }
      ],
      step17Src: 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6p/17-1.jpeg',
      step17: [
        {
          active: "active",
          src: 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6p/17-1.jpeg'
        },
        {
          active: "",
          src: 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6p/17-2.jpeg'
        }
      ],
      step18Src: 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6p/18-1.jpeg',
      step18: [
        {
          active: "active",
          src: 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6p/18-1.jpeg'
        }
        // {
        //     active: "",
        //     src:
        //         'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6p/18-2.jpeg',
        // }
      ],
      step19Src: 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6p/19-1.jpeg',
      step20Src: 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6p/20-1.jpeg',
      step21Src: 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6p/21-1.jpeg',
      step22Src: 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6p/22-1.jpeg',
      step22: [
        {
          active: "active",
          src: 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6p/22-1.jpeg'
        },
        {
          active: "",
          src: 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6p/22-2.jpeg'
        }
      ],
      step23Src: 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6p/23-1.jpeg',
      step24Src: 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6p/24-1.jpeg',
      step24: [
        {
          active: "active",
          src: 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6p/24-1.jpeg'
        },
        {
          active: "",
          src: 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6p/24-2.jpeg'
        }
      ],
      step25Src: 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6p/25-1.jpeg',
      step25: [
        {
          active: "active",
          src: 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6p/25-1.jpeg'
        },
        {
          active: "",
          src: 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6p/25-2.jpeg'
        }
      ],
      step26Src: 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6p/26-1.jpeg',
      step27Src: 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6p/27-1.jpeg'
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
@import "../assets/scss/iphone6p.scss";
</style>

