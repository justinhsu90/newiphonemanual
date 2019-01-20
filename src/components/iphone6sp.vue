<template>
  <div>
    <h1>iPhone 6s Plus Teardown</h1>
    <div class="iphone6-evalute clear">
      <div class="ip6R">
        <img src="https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6sp/title.jpeg" alt="iPhone 6s Display Assembly Replacement">
      </div>
      <div class="ip6L">
        <div class="iphone6-introduce">
      <h2>Introduction</h2>
      <p>
        It's time to tear down the biggest iPhone ever made—a fraction bigger even than last year's edition, the iPhone 6s Plus comes double-stuffed with new tech. To those of you joining us from the iPhone 6s teardown, welcome back! Here at DalTech, we have a habit of leaving no screw unturned—so with the first phone dispatched, we focus our attention on its Plus-sized counterpart.</p>
      <P>Can't get enough teardown talk? Neither can we! Follow us on Facebook, Instagram, or Twitter for the latest news from the repair world.</P>
    </div>    
      </div>
    </div>
    
    <br>
    <br>
    <div class="iphone6-introduction">
      <div class="intp-step11">
        <h2>
          <a href="javascript:void(0)">
            Step 1
            <span>iPhone 6s Plus Teardown</span>
          </a>
        </h2>
        <div class="content">
          <img :src="step1Src" alt="">
          <div class="intp-step11-right">
            <ul>
              <li>
                <img v-for="(v,i) in step1" :key="i" :class="v.active" :src="v.src" alt="" @mouseenter="handleEnter(i,1)">
                <div class="placeholder"></div>
              </li>
              <li>
                <i>●</i>
                Before we put this bad boy under the knife spudger, we have to ask: "Hey Siri, what's under the hood?":
              </li>
              <li>
                <i class="bulletRed">●</i>
                Apple A9 processor with embedded M9 motion coprocessor</li>
              <li>
                <i class="bulletOrange">●</i>
                16, 64, or 128 GB of storage</li>
              <li>
                <i class="bulletYellow">●</i>
                5.5-inch 1920 × 1080 pixels (401 ppi) Retina HD display with 3D Touch</li>
              <li>
                <i class="bulletGreen">●</i>
                12 MP iSight camera supporting 4K video recording with 1.22µ pixels, and a 5 MP FaceTime HD camera</li>
              <li>
                <i class="bulletBlueLight">●</i>
                7000 Series aluminum enclosure and Ion-X Glass</li>
              <li>
                <i class="bulletBlue">●</i>
                802.11a/b/g/n/ac Wi‑Fi with MIMO + Bluetooth 4.2 + NFC + 23-band LTE
              </li>
              <li>
                <i class="bulletPink">●</i>
                Taptic Engine
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
            Step 2
          </a>
        </h2>
        <div class="content">
          <img :src="step2Src" alt="">
          <div class="intp-step11-right">
            <ul>
              <li>
                <img v-for="(v,i) in step2" :key="i" :class="v.active" :src="v.src" alt="" @mouseenter="handleEnter(i,2)">
                <div class="placeholder"></div>
              </li>
              <li>
                <i>●</i>
                The 6s Plus stops by for a closeup and gives us a better view of that custom 7000 series aluminum alloy and flaunts a new model number: A1687</li>
              <li>
                <i>●</i>
                Early analysis of this new alloy breaks it down to around 91.17% aluminum, 0.08% iron, 7.64% zinc, and 0.106% tungsten.</li>
              <li>
                <i>●</i>
                The higher zinc content should provide a significant increase in tensile strength (and manufacturing cost) from the 6063 aluminum alloy in the iPhone 6.</li>
              <li>
                <i>●</i>
                That little ''S'' looks out of place on the new iPhone's large outer casing—but how else will you show your friends that you buy a new phone every year?</li>
              <li>
                <i>●</i>
                Really though, Apple's new push to encourage early upgrades is a low blow to the environment. As recyclable as Apple claims their devices are, a shorter product lifetime means increased carbon dioxide emissions and more e-waste.</li>
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
          <img :src="step3Src" alt="">
          <div class="intp-step11-right">
            <ul>
              <li>
                <img v-for="(v,i) in step3" :key="i" :class="v.active" :src="v.src" alt="" @mouseenter="handleEnter(i,3)">
                <li>
                  Time for a sneak peek! As usual, we'll be blasting this iPhone with the power of see-through: our friends at Creative Electron brought their X-ray tech to the land down under.</li>
                <li>
                  <i>●</i>
                  iPhone, you better run, you better take cover.</li>
                <li>
                  <i>●</i>
                  Our engineers travelled to the upside-down land of Australia to bring you this live teardown, but we couldn't have done it with the hospitality of Macfixit and Circuitwise.</li>
                <li>
                  <i>●</i>
                  Now for the moment that you've been waiting for—let's get this teardown started!</li>
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
              </li>
              <li>
                <i>●</i>
                Having just torn down the 6s, we know exactly where to start with the Plus.</li>
              <li>
                <i>●</i>
                Our teardown engineer busts open the phone in two seconds flat—one second for each screw, all caution thrown to the wind. (Just kidding, he's actually very careful and takes his time. This is the only 6s Plus we've got.)</li>
              <li>
                <i>●</i>
                Just like its smaller sibling, the 6s Plus features an adhesive strip along the perimeter of the display assembly. Lucky for us, it doesn't stand a chance against the iSclack.
              </li>
              <li>
                <i>●</i>
                With the Pentalobe screws out and display adhesive defeated, we're in!</li>
            </ul>
          </div>
        </div>
      </div>

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
                The battery connector is the first priority on our path to teardown glory.</li>
              <li>
                <i>●</i>
                As with the 6s, we are pleased to discover that all of the internal screws in the 6s Plus are Phillips screws. The fewer Pentalobe screws there are, the happier we are.</li>
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
          <img :src="step6Src" alt="">
          <div class="intp-step11-right">
            <ul>
              <li>
                <img v-for="(v,i) in step6" :key="i" :class="v.active" :src="v.src" alt="" @mouseenter="handleEnter(i,6)">
              </li>
              <li>
                <i>●</i>
                With three flicks of our spudger, we quickly disconnect and remove the display assembly.</li>
              <li>
                <i>●</i>

                Before we move on, we toss it on the scale. We note that the display assembly on the 6s Plus weighs in at 80 g—while on last year's 6 Plus, it weighed a measly 60 g.</li>
              <li>
                <i>●</i>
                This astonishing 33% increase in weight is all because of Apple's new 3D Touch technology. That's some heavy stuff.

              </li>
              <li>
                <i>●</i>
                A quick blast of X-rays reveals the presence of some new silicon piggybacking onto the display—just like we found on the 6s.</li>
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
              <li>
                <img v-for="(v,i) in step7" :key="i" :class="v.active" :src="v.src" alt="" @mouseenter="handleEnter(i,7)">
              </li>
              <li>
                <i>●</i>
                A new bracket secures the (bitty!) Taptic Engine and its new cable.</li>
              <li>
                <i>●</i>
                The Taptic Engine in the 6s Plus measures 15 x 8 x 4.9 mm compared to the 35 x 6 x 3.2 mm one found in the 6s.</li>
              <li class="info">
                <i class="el-icon-info"></i>
                Our guess as to the reason for the substantially smaller footprint: Apple didn't want to shave off too much from the already-scaled-down battery.</li>
              <li>
                <i>●</i>
                No question about it—it's a tight fit with everything assembled.</li>
              <li>
                <i>●</i>
                The Taptic Engine also has a lil' rubber bumper for bracing against the microphone.</li>
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
          <video width="577" height="434" controls style="position:relative;top: -51px;">
            <source src="../../public/img/iphone6sp/8-1.mp4" type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;" res="720" label="Medium">
          </video>
          <div class="intp-step11-right">
            <ul>
              <li class="mb0">
              </li>
              <li>
                <i>●</i>
                We plopped the Taptic Engine back into place long enough for it to perform its signature move.</li>
              <li>
                <i>●</i>
                Little did it know, it was being watched.</li>
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
          <img :src="step9Src" alt="">
          <div class="intp-step11-right">
            <ul>
              <li>
                <img v-for="(v,i) in step9" :key="i" :class="v.active" :src="v.src" alt="" @mouseenter="handleEnter(i,9)">
              </li>
              <li>
                <i>●</i>
                Moving on to the battery, we're greeted with a few familiar friends—adhesive pull tabs.</li>
              <li>
                <i>●</i>
                Never stop being awesome, adhesive pull tabs. Never.</li>
              <li>
                <i>●</i>
                Much like the 6 Plus before it, removing the battery is as easy as pulling 3 tabs. Well, as long as you pull them exactly right.</li>
              <li>
                <i>●</i>
                The battery capacity sits at 2750 mAh (10.45 Wh); a modest 165 mAh downgrade compared to last year's 6 Plus.</li>
              <li class="info">
                <i class="el-icon-info"></i>
                Despite the downgrade, Apple claims battery life will be comparable to that of the 6 Plus—that is, 14 hours of 3G talk time, approximately 10 hours of internet use, or up to 10 days on standby.</li>
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
                For the second time today, we pluck the 12 MP iSight camera from its cavity for a closer look.</li>
              <li>
                <i>●</i>
                At first glance, the iSight camera in the 6s Plus is fairly similar to the one found in the 6s. When the two cameras are laid out side-by-side though, the additional heft of the optical image stabilization hardware in the iPhone 6s Plus camera becomes readily apparent.</li>
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
              </li>
              <li>
                <i>●</i>
                The next stage of the game involves removing the logic board.</li>
              <li>
                <i>●</i>
                With the skill of a blackjack dealer, we send the cards cables flying and boards flipping.</li>
              <li class="info">
                <i class="el-icon-info"></i>
                You're going to need to channel your inner card shark to get this logic board out. Removing the final connector requires you to flip the logic board over—not a big problem, but a bit annoying.</li>
              <li>
                <i>●</i>
                We shuffle the logic board out of the case for a closer look. We like to have lots of chips on our (teardown) table...</li>
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
                Fresh, hot fish and chips, right off the barbie! (Fish not included.)</li>
              <li>
                <i class="bulletRed">●</i>
                Apple A9 APL1022 SoC + SK Hynix LPDDR4 RAM as denoted by the markings H9HKNNNBTUMUMR-NLH (we presume it is 2 GB LPDDR4 RAM, the same as in the iPhone 6s)</li>
              <li>
                <i class="bulletOrange">●</i>
                Qualcomm MDM9635M LTE Cat. 6 Modem (vs. the MDM9625M found in the iPhone 6)</li>
              <li>
                <i class="bulletYellow">●</i>
                TriQuint TQF6405 Power Amplifier Module</li>
              <li>
                <i class="bulletGreen">●</i>
                Skyworks SKY77812 Power Amplifier Module</li>
              <li>
                <i class="bulletBlueLight">●</i>
                Avago AFEM-8030 Power Amplifier Module</li>
              <li>
                <i class="bulletBlue">●</i>
                Qualcomm QFE1100 Envelope Tracking IC</li>
              <li>
                <i class="bulletPink">●</i>
                Likely a InvenSense 6-axis gyroscope and accelerometer combo</li>
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
              <li class="mb0"></li>
              <li>
                <i>●</i>
                And here's a side of Apple chips on the back of the logic board:</li>
              <li>
                <i class="bulletRed">●</i>
                SK Hynix H23QDG8UD1ACS 16 GB NAND Flash</li>
              <li>
                <i class="bulletOrange">●</i>
                Universal Scientific Industrial 339S00043 Wi-Fi Module</li>
              <li>
                <i class="bulletYellow">●</i>
                NXP 66V10 NFC Controller (vs. 65V10 found in iPhone 6)</li>
              <li>
                <i class="bulletGreen">●</i>
                Apple/Dialog 338S00122 Power Management IC</li>
              <li>
                <i class="bulletBlueLight">●</i>
                Apple/Cirrus Logic 338S00105 Audio IC</li>
              <li>
                <i class="bulletBlue">●</i>
                Qualcomm PMD9635 Power Management IC</li>
              <li>
                <i class="bulletPink">●</i>
                Skyworks SKY77357 Power Amplifier Module (likely an iteration of the SKY77354)</li>
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
              <li class="mb0">
              </li>
              <li>
                <i class="bulletRed">●</i>
                Murata 240 Front-End Module</li>
              <li>
                <i class="bulletOrange">●</i>
                RF Micro Devices RF5150 Antenna Switch</li>
              <li>
                <i class="bulletYellow">●</i>
                NXP 1610A3 (likely an iteration of the 1610A1 found in the iPhone 5s and 5c)</li>
              <li>
                <i class="bulletGreen">●</i>

                Apple/Cirrus Logic 338S1285 Audio IC (likely an iteration of the 338S1202 audio codec found in the iPhone 5s)</li>
              <li>
                <i class="bulletBlueLight">●</i>
                Texas Instruments TPS65730A0P Power Management IC</li>
              <li>
                <i class="bulletBlue">●</i>
                Qualcomm WTR3925 Radio Frequency Transceiver</li>
              <li>
                <i class="bulletPink">●</i>

                Skyworks SKY13701 Cellular and GPS Receive LNA-Filter Module</li>
                <li>
                  <i>●</i>
                  Texas Instruments TI 57A5KXI
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
                <i class="bulletRed">●</i>
               Possibly a Bosch Sensortec Barometric Pressure Sensor (BMP280)</li>
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
              <li class="mb0">
              </li>
              <li>
                <i>●</i>
                Teardown Update! Just like we found in the iPhone 6s, the logic board's connectors are protected by tiny silicone seals.</li>
              <li>
                <i>●</i>
                These appear to be the waterproof silicon seals that Apple patented back in March.</li>
              <li class="info">
                <i class="el-icon-info"></i>
                The most common point of failure on a phone dropped in water? The logic board connectors. Coincidence? I think not.</li>
              <li>
                <i>●</i>
                Recent tests have proved that water resistance is greatly improved in the new iPhone 6s and 6s Plus. But why did Apple not mention anything about waterproofing on their new product?</li>
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
              </li>
              <li>
                <i>●</i>
                Reaching the deepest depths of the 6s Plus, we come across the speaker and its little antenna buddy.</li>
              <li class="pl30">
                <i>●</i>
                As in the 6s, we find a very similar speaker to that of the original 6 Plus—a slightly modified form factor, but otherwise seemingly untouched.</li>
            
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
              </li>
              <li>
                <i>●</i>
                Alas, the last piece of the teardown puzzle—the Lightning connector assembly.</li>
              <li>
                <i>●</i>
                This time around, the Lightning connector assembly brings us everything we've seen before and then some, with the addition of a second microphone.</li>
              <li class="info">
                <i class="el-icon-info"></i>
                  This assembly is convenient as a space-saving measure, but it has a nasty side effect—repairing a single damaged Lightning port or headphone jack requires replacing the entire assembly.</li>
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
                The iPhone 6s Plus inherits a 7 out of 10 on the Repairability scale:</li>
               <li>
                <i class="bulletRed">●</i>
                The display assembly continues to be the first component out, simplifying screen repairs.</li>
              <li>
                <i class="bulletOrange">●</i>
                The battery is straightforward to access. Removing it requires a proprietary Pentalobe screwdriver and knowledge of the adhesive removal technique, but is not difficult.</li>
              <li>
                <i class="bulletYellow">●</i>
                The Touch ID cable is still tucked out of the way, but is paired to the logic board, complicating repairs.</li>
              <li>
                <i class="bulletGreen">●</i>
                The iPhone 6s Plus still uses proprietary Pentalobe screws on the exterior, requiring a specialty screwdriver to remove.</li>
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
            step1Src:'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6sp/1-1.jpeg',
            step1: [
                {
                    active: "active",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6sp/1-1.jpeg',
                },
                {
                    active: "",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6sp/1-2.jpeg',
                }
            ],
            step2Src:
                'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6sp/2-1.jpeg',
            step2: [
                {
                    active: "active",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6sp/2-1.jpeg',
                },
                {
                    active: "",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6sp/2-2.jpeg',
                }
            ],
            step3Src:
                'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6sp/3-1.jpeg',
            step3: [
                {
                    active: "active",
                    src:
                         'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6sp/3-1.jpeg',
                },
                {
                    active: "",
                    src:
                         'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6sp/3-2.jpeg',
                },
                {
                    active: "",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6sp/3-3.jpeg',
                }
            ],
            step4Src:
                 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6sp/4-1.jpeg',
            step4: [
                {
                    active: "active",
                    src:
                         'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6sp/4-1.jpeg',
                },
                {
                    active: "",
                    src:
                         'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6sp/4-2.jpeg',
                },
                {
                    active: "",
                    src:
                         'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6sp/4-3.jpeg',
                }
            ],
            step5Src:
                 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6sp/5-1.jpeg',
            step5: [
                {
                    active: "active",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6sp/5-1.jpeg',
                },
                {
                    active: "",
                    src:
                         'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6sp/5-2.jpeg',
                }
            ],
            step6Src:
                 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6sp/6-1.jpeg',
            step6: [
                {
                    active: "active",
                    src:
                         'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6sp/6-1.jpeg',
                },
                {
                    active: "",
                    src:
                         'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6sp/6-2.jpeg',
                },
                {
                    active: "",
                    src:
                         'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6sp/6-3.jpeg',
                }
            ],
            step7Src:
                 'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6sp/7-1.jpeg',
            step7: [
                {
                    active: "active",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6sp/7-1.jpeg',
                },
                {
                    active: "",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6sp/7-2.jpeg',
                },
                {
                    active: "",
                    src:
                       'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6sp/7-3.jpeg',
                }
            ],
            step9Src:
                'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6sp/9-1.jpeg',
            step9: [
                {
                    active: "active",
                    src:
                       'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6sp/9-1.jpeg',
                },
                {
                    active: "",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6sp/9-2.jpeg',
                },
                {
                    active: "",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6sp/9-3.jpeg',
                }
            ],
            step10Src:
                'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6sp/10-1.jpeg',
            step10: [
                {
                    active: "active",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6sp/10-1.jpeg',
                },
                {
                    active: "",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6sp/10-2.jpeg',
                },
                {
                    active: "",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6sp/10-3.jpeg',
                }
            ],
            step11Src:
                'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6sp/11-1.jpeg',
            step11: [
                {
                    active: "active",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6sp/11-1.jpeg',
                },
                {
                    active: "",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6sp/11-2.jpeg',
                },
                {
                    active: "",
                    src:
                       'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6sp/11-3.jpeg',
                }
            ],
            step12Src:
                'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6sp/12-1.jpeg',
            step13Src:
                'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6sp/13-1.jpeg',
            step14Src:
                'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6sp/14-1.jpeg',
            step15Src:
               'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6sp/15-1.jpeg',
            step16Src:
                'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6sp/16-1.jpeg',
            step17Src:
                'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6sp/17-1.jpeg',
             step17: [
                {
                    active: "active",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6sp/17-1.jpeg',
                },
                {
                    active: "",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6sp/17-2.jpeg',
                },
                {
                    active: "",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6sp/17-3.jpeg',
                }
            ],    
            step18Src:
                'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6sp/18-1.jpeg',
            step18: [
                {
                    active: "active",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6sp/18-1.jpeg',
                },
                {
                    active: "",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6sp/18-2.jpeg',
                },
                {
                    active: "",
                    src:
                       'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6sp/18-3.jpeg',
                }
            ],
            step19Src:
                'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6sp/19-1.jpeg',
            step19: [
                {
                    active: "active",
                    src:
                       'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6sp/19-1.jpeg',
                },
                {
                    active: "",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone6sp/19-2.jpeg',
                }
            ]
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
@import "../assets/scss/iphone6sp.scss";
</style>

