<template>
  <div>
    <h1>iPhone 6s Display Assembly Replacement</h1>
    <div class="iphone6-evalute clear">
      <div class="ip6R">
        <img src="https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/1.jpeg" alt="iPhone 6s Display Assembly Replacement">
      </div>
      <div class="ip6L">
        <div class="iphone6-introduce">
      <h2>Introduction</h2>
      <p>Use this guide if your new display assembly comes with the front-facing camera and sensor assembly and the display EMI shield already installed. All you need to do is remove the old display assembly and transfer the home button to the new display assembly.</p>
      <P>If your replacement display does not include those parts, follow the longer version of this guide here.</P>
      <P>In either case, it's important to transfer the original home button onto the new display in order for Touch ID (fingerprint scanning) to function.</P>
      <P>You can also use this guide to replace the front panel assembly cable bracket.</P>
    </div>
      </div>
    </div>
    <div class="iphone6-introduction">
      <div class="intp-step1">
        <h2>
          <a href="javascript:void(0)">
            Step 1
            <span>Pentalobe Screws</span>
          </a>
        </h2>
        <div class="content">
          <img :src="step1Src" alt="">
          <div class="intp-step1-right">
            <ul>
              <li class="warn">
                <i class="el-icon-warning"></i>
                Before disassembling your iPhone, discharge the battery below 25%. A charged lithium-ion battery can catch fire and/or explode if accidentally punctured.</li>
              <li>
                <i>●</i>
                Power off your iPhone before beginning disassembly.</li>
              <li>
                <i class="bulletRed">●</i>
                Remove the two 3.4 mm P2 Pentalobe screws on the bottom edge of the iPhone, next to the Lightning connector.</li>
            </ul>
          </div>
        </div>
      </div>
      <br>
      <hr>
      <br>
      <div class="intp-step2">
        <h2>
          <a href="javascript:void(0)">
            Step 2
            <span>Taping Over The Display</span>
          </a>
        </h2>
        <div class="content">
          <img :src="step2Src" alt="">
          <div class="intp-step2-right">
            <ul>
              <li>
                <img v-for="(v,i) in step2" :key="i" :class="v.active" :src="v.src" alt="" @mouseenter="handleEnter(i,2)">
              </li>
              <li>
                <i>●</i>   
                If your display glass is cracked, keep further breakage contained and prevent bodily harm during your repair by taping over the glass.</li>
              <li>
                <i>●</i>
                Lay overlapping strips of clear packing tape over the iPhone's display until the whole face is covered.</li>
              <li class="info">
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
      <div class="intp-step3">
        <h2>
          <a href="javascript:void(0)">
            Step 3
            <span>Opening Procedure</span>
          </a>
        </h2>
        <div class="content">
          <img :src="step3Src" alt="">
          <div class="intp-step3-right">
            <ul>
              <li class="info">
                <i class="el-icon-info"></i>
                Opening the display on the 6s separates a thin strip of adhesive around the perimeter of the display. If you prefer to replace the adhesive, have a set of new adhesive strips ready before you continue. It's possible to complete the repair without replacing the adhesive, and you probably won't notice any difference in functionality.</li>
              <li>
                <i>●</i>
                Apply a suction cup to the lower left corner of the display assembly.</li>
              <li>
                <i>●</i>
                Take care not to place the suction cup over the home button.</li>
            </ul>
          </div>
        </div>
      </div>
      <br>
      <hr>
      <br>
      <div class="intp-step4">
        <h2>
          <a href="javascript:void(0)">
            Step 4
          </a>
        </h2>
        <div class="content">
          <img :src="step4Src" alt="">
          <div class="intp-step4-right">
            <ul>
              <li>
                <img v-for="(v,i) in step4" :key="i" :class="v.active" :src="v.src" alt="" @mouseenter="handleEnter(i,4)">
                <div class="placeholder"></div>
              </li>
              <li>
                <i>●</i>
                Pull up on the suction cup with firm, constant pressure to create a slight gap between the front panel and rear case.</li>
              <li  class="info">
                <i class="el-icon-info"></i>
                Take your time and apply firm, constant force. The display assembly is a much tighter fit than most devices and is held down with adhesive.</li>
              <li class="warn">
                <i class="el-icon-warning"></i>
                Pulling too hard may damage the display assembly. Apply just enough pressure to create a small gap between the display assembly and the rear case.</li>
              <li class="info">
                <i class="el-icon-info"></i>
                If you have any trouble, heat the front of the iPhone using an iOpener, hair dryer, or heat gun until it's slightly too hot to touch. This will help soften the adhesive securing the edges of the display.</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="intp-step5">
        <h2>
          <a href="javascript:void(0)">
            Step 5
          </a>
        </h2>
        <div class="content">
          <img :src="step5Src" alt="">
          <div class="intp-step5-right">
            <ul>
              <li>
                <img v-for="(v,i) in step5" :key="i" :class="v.active" :src="v.src" alt="" @mouseenter="handleEnter(i,5)">
                <div class="placeholder"></div>
              </li>
              <li class="info">
                <i class="el-icon-info"></i>
                There is a notch on the underside of the display, just above the headphone jack. This is the safest place to begin prying the phone open.</li>
              <li>
                <i>●</i>
                Place the flat edge of a spudger into the gap between the screen and rear case, directly above the headphone jack.</li>
            </ul>
          </div>
        </div>
      </div>
      <br>
      <hr>
      <br>
      <div class="intp-step6">
        <h2>
          <a href="javascript:void(0)">
            Step 6
          </a>
        </h2>
        <div class="content">
          <img :src="step6Src" alt="">
          <div class="intp-step6-right">
            <ul>
              <li>
                <img v-for="(v,i) in step6" :key="i" :class="v.active" :src="v.src" alt="" @mouseenter="handleEnter(i,6)">
                <div class="placeholder"></div>
              </li>
              <li>
                <i>●</i>
                Twist the spudger to widen the gap between the front panel assembly and the rest of the phone.</li>
            </ul>
          </div>
        </div>
      </div>

      <br>
      <hr>
      <br>
      <div class="intp-step7">
        <h2>
          <a href="javascript:void(0)">
            Step 7
          </a>
        </h2>
        <div class="content">
          <img :src="step7Src" alt="">
          <div class="intp-step7-right">
            <ul>
              <li>
                <img v-for="(v,i) in step7" :key="i" :class="v.active" :src="v.src" alt="" @mouseenter="handleEnter(i,7)">
                <div class="placeholder"></div>
              </li>
              <li>
                <i>●</i>
                Twist the spudger to widen the gap between the front panel assembly and the rest of the phone.</li>
            </ul>
          </div>
        </div>
      </div>

      <br>
      <hr>
      <br>
      <div class="intp-step8">
        <h2>
          <a href="javascript:void(0)">
            Step 8
          </a>
        </h2>
        <div class="content">
          <img :src="step8Src" alt="">
          <div class="intp-step8-right">
            <ul>
              <li>
                <img v-for="(v,i) in step8" :key="i" :class="v.active" :src="v.src" alt="" @mouseenter="handleEnter(i,8)">
                <div class="placeholder"></div>
              </li>
              <li>
                <i>●</i>
                Remove the spudger and reinsert it on the bottom edge, where you pried the phone open.</li>
              <li>
                <i>●</i>
                Slide the spudger to the right, along the bottom edge of the phone.</li>
            </ul>
          </div>
        </div>
      </div>
      <br>
      <hr>
      <br>

      <div class="intp-step9">
        <h2>
          <a href="javascript:void(0)">
            Step 9
          </a>
        </h2>
        <div class="content">
          <img :src="step9Src" alt="">
          <div class="intp-step9-right">
            <ul>
              <li>
                <img v-for="(v,i) in step9" :key="i" :class="v.active" :src="v.src" alt="" @mouseenter="handleEnter(i,9)">
                <div class="placeholder"></div>
              </li>
              <li>
                <i>●</i>
                Slide the spudger up the right side to continue separating the adhesive and popping the display clips free from the iPhone.</li>
            </ul>
          </div>
        </div>
      </div>

      <br>
      <hr>
      <br>
      <div class="intp-step10">
        <h2>
          <a href="javascript:void(0)">
            Step 10
          </a>
        </h2>
        <div class="content">
          <img :src="step10Src" alt="">
          <div class="intp-step10-right">
            <ul>
              <li>
                <img v-for="(v,i) in step10" :key="i" :class="v.active" :src="v.src" alt="" @mouseenter="handleEnter(i,10)">
                <div class="placeholder"></div>
              </li>
              <li>
                <i>●</i>
                Use the suction cup to open the display, breaking the last of the adhesive.</li>
              <li class="warn">
                <i class="el-icon-warning"></i>
                Don't open the display more than 90º, as it is still connected at the top by three cables that may break if stretched.</li>
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
          <img :src="step11Src" alt="">
          <div class="intp-step11-right">
            <ul>
              <li>
                <img v-for="(v,i) in step11" :key="i" :class="v.active" :src="v.src" alt="" @mouseenter="handleEnter(i,11)">
                <div class="placeholder"></div>
              </li>
              <li>
                <i>●</i>
                Pull up on the nub on the top side of the suction cup to remove it from the front panel.</li>
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
              <li>
                <img v-for="(v,i) in step12" :key="i" :class="v.active" :src="v.src" alt="" @mouseenter="handleEnter(i,12)">
              </li>
              <li>
                <i>●</i>
                Gently grasp the display assembly and lift it up to open the phone, using the clips at the top of the front panel as a hinge.</li>
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
            Step 13
          </a>
        </h2>
        <div class="content">
          <img :src="step13Src" alt="">
          <div class="intp-step11-right">
            <ul>
              <li class="pl30"> 
                <i>●</i>
                Remove two Phillips screws securing the battery connector bracket, of the following lengths:</li>
                <li class="ml30">
                <i class="bulletRed">●</i>
                One 2.9 mm screw</li>
                <li class="ml30">
                <i class="bulletOrange">●</i>
                One 2.2 mm screw</li>
                <li class="info">
                <i class="el-icon-info"></i>
                Throughout this repair, keep track of each screw and make sure it goes back exactly where it came from to avoid damaging your iPhone.</li>
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
          <img :src="step14Src" alt="">
          <div class="intp-step11-right">
            <ul>
              <li>
                <img v-for="(v,i) in step14" :key="i" :class="v.active" :src="v.src" alt="" @mouseenter="handleEnter(i,14)">
                <div class="placeholder"></div>
              </li>
              <li>
                <i>●</i>
                Remove the battery connector bracket from the iPhone.</li>
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
              <li>
                <img v-for="(v,i) in step15" :key="i" :class="v.active" :src="v.src" alt="" @mouseenter="handleEnter(i,15)">
              </li>
              <li>
                <i>●</i>
                Use the point of a spudger to disconnect the battery connector by prying it straight up from the logic board.</li>
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
              <li>
                <i>●</i>
                Use the point of a spudger to disconnect the battery connector by prying it straight up from the logic board.</li>
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
              <li class="pl30">
                <i>●</i>
                Remove the following four Phillips screws securing the display cable bracket:</li>
             <li>
                <i class="bulletRed">●</i>
                Three 1.2 mm screws
                </li>
              <li>
                <i class="bulletOrange"> ●</i>
                One 2.8 mm screw
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
              <li>
                <i>●</i>
                Remove the display cable bracket.</li>
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
          <img :src="step19Src" alt="">
          <div class="intp-step11-right">
            <ul>
              <li>
                <img v-for="(v,i) in step19" :key="i" :class="v.active" :src="v.src" alt="" @mouseenter="handleEnter(i,19)">
                <div class="placeholder"></div>  
              </li>
              <li>
                <i>●</i>
                Use a spudger or a clean fingernail to disconnect the front camera flex cable by prying it straight up from its socket on the logic board.</li>
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
          <img :src="step20Src" alt="">
          <div class="intp-step11-right">
            <ul>
              <li>
                <img v-for="(v,i) in step20" :key="i" :class="v.active" :src="v.src" alt="" @mouseenter="handleEnter(i,20)">
                <div class="placeholder"></div>  
              </li>
              <li>
                <i>●</i>
                Disconnect the digitizer cable by prying it straight up from its socket on the logic board.</li>
              <li class="warn">
                <i class="el-icon-warning"></i>
                When reconnecting the digitizer cable, <strong>do not press the center of the connector.</strong> Press one end of the connector, then press the opposite end. Pressing in the center of the connector can bend the component and cause digitizer damage.</li>
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
          <img :src="step21Src" alt="">
          <div class="intp-step11-right">
            <ul>
              <li>
                <img v-for="(v,i) in step21" :key="i" :class="v.active" :src="v.src" alt="" @mouseenter="handleEnter(i,21)">
                <div class="placeholder"></div>  
              </li>
              <li class="warn">
                <i class="el-icon-warning"></i>
                Make sure the battery is disconnected before you disconnect or reconnect the cable in this step.</li>
                <li>
                <i>●</i>
                Disconnect the display cable by prying it straight up from its socket on the logic board.</li>
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
              <li style="display:none"></li>
              <li>
                <i>●</i>
                Remove the display assembly.</li>
              <li class="warn">
                <i class="el-icon-warning"></i>
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
            Step 23  <span>Home Button Assembly</span>
          </a>
        </h2>
        <div class="content">
          <img :src="step23Src" alt="">
          <div class="intp-step11-right">
            <ul>
              <li style="display:none"></li>
              <li>
                <i class="bulletRed">●</i>
                Remove the three 1.7 mm Phillips screws securing the home button bracket.</li>
              <li class="warn">
                <i class="el-icon-warning"></i>
                    Do not over-tighten these screws as these can damage the front of the display.</li>
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
              </li>
              <li>
                <i>●</i>
                    Lift the lower edge of the home button bracket until it clears the small peg on the right side.</li>
                    <li>
                <i>●</i>
                    Slide the bracket out from under the EMI shield to remove it.</li>
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
                    Use a spudger to disconnect the home button connector by popping it out of its socket on the back of the display panel.</li>
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
                    Gently press up on the home button from the front side of the display assembly to slowly separate the home button's rubber gasket from the front panel.</li>
              <li class="warn">
                <i class="el-icon-warning"></i>
                    The gasket is very thin and will tear easily. Apply steady pressure and give it time to separate.</li>
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
              <li>
                <img v-for="(v,i) in step27" :key="i" :class="v.active" :src="v.src" alt="" @mouseenter="handleEnter(i,27)">
                <div class="placeholder"></div>
              </li>
              <li>
                <i>●</i>
                   Use the pointed tip of a spudger to pry the home button flex cable off the back of the display panel.</li>
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
            Step 28
          </a>
        </h2>
        <div class="content">
          <img :src="step28Src" alt="">
          <div class="intp-step11-right">
            <ul>
              <li>
                <img v-for="(v,i) in step28" :key="i" :class="v.active" :src="v.src" alt="" @mouseenter="handleEnter(i,28)">
                <div class="placeholder"></div>
              </li>
              <li>
                <i>●</i>
                   Remove the home button assembly.</li>
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
            Step 29
          </a>
        </h2>
        <div class="content">
          <img :src="step29Src" alt="">
          <div class="intp-step11-right">
            <ul>
              <li style="display:none"> 
            
              </li>
              <li>
                <i>●</i>
                   Only the front panel remains.</li>
            </ul>
          </div>
        </div>
      </div>

     <br>
      <hr>
      <br> 
    </div> 
  </div>
</template>
<script>
export default {
    data() {
        return {
            step1Src:
                "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/2.jpeg",
            step2Src:
                "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/3.jpeg",
            step2: [
                {
                    active: "active",
                    src:
                          "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/3.jpeg",
                },
                {
                    active: "",
                    src:
                        "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/4.jpeg",
                },
                {
                    active: "",
                    src:
                       "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/5.jpeg",
                }
            ],
            step3Src:
                "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/6.jpeg",
            step4Src:
               "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/7.jpeg",
            step4: [
                {
                    active: "active",
                    src:
                        "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/7.jpeg",
                },
                {
                    active: "",
                    src:
                       "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/8.jpeg",
                }
            ],
            step5Src:
                "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/9.jpeg",
            step5: [
                {
                    active: "active",
                    src:
                        "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/9.jpeg",
                },
                {
                    active: "",
                    src:
                         "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/10.jpeg",
                }
            ],
            step6Src:
                 "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/11.jpeg",
            step6: [
                {
                    active: "active",
                    src:
                         "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/11.jpeg",
                },
                {
                    active: "",
                    src:
                         "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/12.jpeg",
                }
            ],
            step7Src:
                 "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/13.jpeg",
            step7: [
                {
                    active: "active",
                    src:
                         "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/13.jpeg",
                },
                {
                    active: "",
                    src:
                         "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/14.jpeg",
                }
            ],
            step8Src:
                 "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/15.jpeg",
            step8: [
                {
                    active: "active",
                    src:
                         "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/15.jpeg",
                },
                {
                    active: "",
                    src:
                        "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/16.jpeg",
                }
            ],
            step9Src:
                "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/17.jpeg",
            step9: [
                {
                    active: "active",
                    src:
                         "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/17.jpeg",
                },
                {
                    active: "",
                    src:
                         "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/18.jpeg",
                }
            ],
            step10Src:
                 "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/19.jpeg",
            step10: [
                {
                    active: "active",
                    src:
                         "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/19.jpeg",
                },
                {
                    active: "",
                    src:
                         "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/21.jpeg",
                }
            ],
            step11Src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/22.jpeg",
            step11: [
                {
                    active: "active",
                    src:
                         "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/22.jpeg",
                },
                {
                    active: "",
                    src:
                         "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/23.jpeg",
                }
            ],
            step12Src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/24.jpeg",
            step12: [
                {
                    active: "active",
                    src:
                        "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/24.jpeg",
                },
                {
                    active: "",
                    src:
                        "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/25.jpeg",
                },
                {
                    active: "",
                    src:
                         "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/26.jpeg",
                }
            ],
            step13Src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/27.jpeg",
            step14Src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/28.jpeg",
            step14: [
                  {
                    active: "active",
                    src:
                         "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/28.jpeg",
                },
                {
                    active: "",
                    src:
                         "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/29.jpeg",
                }
            ],
            step15Src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/30.jpeg",
            step15: [
                  {
                    active: "active",
                    src:
                         "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/30.jpeg",
                },
                {
                    active: "",
                    src:
                         "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/31.jpeg",
                },
                {
                    active: "",
                    src:
                         "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/32.jpeg",
                }
            ],
            step16Src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/33.jpeg",
            step16: [
                  {
                    active: "active",
                    src:
                         "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/33.jpeg",
                },
                {
                    active: "",
                    src:
                         "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/34.jpeg",
                }
            ],
            step17Src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/35.jpeg",
            step18Src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/36.jpeg",
            step18: [
                  {
                    active: "active",
                    src:
                         "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/36.jpeg",
                },
                {
                    active: "",
                    src:
                         "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/37.jpeg",
                }
            ],
            step19Src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/38.jpeg",
            step19: [
                  {
                    active: "active",
                    src:
                         "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/38.jpeg",
                },
                {
                    active: "",
                    src:
                         "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/39.jpeg",
                }
            ],
            step20Src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/40.jpeg",
            step20: [
                  {
                    active: "active",
                    src:
                         "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/40.jpeg",
                },
                {
                    active: "",
                    src:
                        "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/41.jpeg",
                }
            ],
            step21Src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/42.jpeg",
            step21: [
                  {
                    active: "active",
                    src:
                         "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/42.jpeg",
                },
                {
                    active: "",
                    src:
                         "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/43.jpeg",
                }
            ],
            step22Src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/44.jpeg",
            step23Src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/45.jpeg",
            step24Src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/46.jpeg",
            step24: [
                  {
                    active: "active",
                    src:
                         "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/46.jpeg",
                },
                {
                    active: "",
                    src:
                         "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/47.jpeg",
                },
                {
                    active: "",
                    src:
                         "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/48.jpeg",
                }
            ],
            step25Src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/49.jpeg",
            step25: [
                  {
                    active: "active",
                    src:
                         "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/49.jpeg",
                },
                {
                    active: "",
                    src:
                         "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/50.jpeg",
                }
            ],
            step26Src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/51.jpeg",
            step26: [
                  {
                    active: "active",
                    src:
                        "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/51.jpeg",
                },
                {
                    active: "",
                    src:
                         "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/52.jpeg",
                }
            ],
            step27Src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/53.jpeg",
            step27: [
                  {
                    active: "active",
                    src:
                         "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/53.jpeg",
                },
                {
                    active: "",
                    src:
                         "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/54.jpeg",
                }
            ],
            step28Src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/55.jpeg",
            step28: [
                  {
                    active: "active",
                    src:
                         "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/55.jpeg",
                },
                {
                    active: "",
                    src:
                         "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/56.jpeg",
                }
            ],
            step29Src: "https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6s/57.jpeg",
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
@import "../assets/scss/iphone6s.scss";
</style>

