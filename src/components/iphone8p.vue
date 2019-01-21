<template>
  <div>
    <h1 style="font-style: oblique;">iPhone 8 Plus Teardown</h1>
    <div class="iphone6-evalute clear">
      <div class="ip6R">
        <img src="https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone8p/title.jpeg" alt="iPhone 6s Display Assembly Replacement">
      </div>
      <div class="ip6L">
          <div class="iphone6-introduce">
      <h2>Introduction</h2>
      <p>
        They say that good things come in threes. Seems like Apple has really taken that adage to heart with an unusual release of three new phones this season.</p>
      <P>We already showed you what's inside the iPhone 8—but what about the 8 Plus? Is wireless charging wrapped in pretty pink glass enough to distinguish the iPhone 8 Plus in the lineup? Or are two large glass panels just tempting fate? We're here at Circuitwise headquarters in Sydney, Australia, to find out. Join us as we tear down the iPhone 8 Plus.</P>
      <p>We've got three more good things for you— Facebook, Twitter, and Instagram to keep you up-to-date on all things repair!</p>
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
            <span>iPhone 8 Plus Teardown</span>
          </a>
        </h2>
        <div class="content">
          <img :src="step1Src" alt="">
          <div class="intp-step11-right">
            <ul>
              <li class="mb0">
              </li>
              <li>
                <i>●</i>
                The 8 Plus adds some bonus screen, and some bonus features. Let's take a look:
              </li>
              <li>
                <i class="bulletRed">●</i>
                Apple A11 Bionic processor with embedded M11 motion coprocessor</li>
              <li>
                <i class="bulletOrange">●</i>
                64 or 256 GB onboard storage capacity</li>
              <li>
                <i class="bulletYellow">●</i>
                5.5-inch multitouch IPS Retina HD display with 1920 × 1080 pixels (401 ppi)</li>
              <li>
                <i class="bulletGreen">●</i>
                Dual 12 MP wide-angle and telephoto cameras with ƒ/1.8 and ƒ/2.8 apertures (respectively), optical zoom, and 10x digital zoom</li>
              <li>
                <i class="bulletBlueLight">●</i>
                7 MP FaceTime HD camera with ƒ/2.2 aperture and 1080p HD recording capability</li>
              <li>
                <i class="bulletBlue">●</i>
                Supports fast-charge and Qi wireless charging
              </li>
              <li>
                <i class="bulletPink">●</i>
                802.11a/b/g/n/ac Wi‑Fi + MIMO Bluetooth 5.0 + NFC
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
              </li>
              <li>
                <i>●</i>
                From the front, we have... an iPhone. Except for the new color, the 8 Plus looks about the same as a 6 Plus from 2014.</li>
              <li>
                <i>●</i>
                Flip it over and one new feature really shines. That glossy glass back serves two purposes: wireless charging, and doubled crackability—the likes of which iPhones haven't seen since the 4s.</li>
              <li>
                <i>●</i>
                Of course, Samsung's flagship phones adopted the glass sandwich design starting with the S6, and it comes with similar trade-offs.</li>
              <li>
                <i class="bulletRed">●</i>
                In a great victory for Apple Chief Design Officers everywhere, the model number has been erased from the back panel. Fumbling for the box, we see that our 8 Plus is A1864 (an iPhone 8 plus one).</li>
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
          </a>
        </h2>
        <div class="content">
          <img :src="step3Src" alt="">
          <div class="intp-step11-right">
            <ul>
              <li>
                <img v-for="(v,i) in step3" :key="i" :class="v.active" :src="v.src" alt="" @mouseenter="handleEnter(i,3)">
                <div class="placeholder"></div>
                <li>
                  We can't wait to get a peek inside ... and we don't have to, thanks to Creative Electron and their magic X-ray technology.</li>
                <li>
                  <i>●</i>
                  After taking the 8 Plus for a spin in the X-ray machine, we see a dizzying spiral—the charging coil—on the back of the phone. More on that later...</li>
                <li>
                  <i>●</i>
                  Just like in the iPhone 8, there's no sign of an Apple logo, which was prominent in prior models like the iPhone 7 Plus.</li>
                <li>
                  <i>●</i>
                  It's not all apples and oranges compared with the previous generation—we reckon that is the same Taptic Engine of yore.</li>
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
                Pentalobe-puller in hand, we find our familiar nemesis—and it's wearing some kind of gasket, for ingress-proofing, we presume.</li>
              <li>
                <i>●</i>
                This new iPhone is a little nervous for its big debut, so we called in our iOpener to apply some heat and help it relax ... its adhesive.</li>
              <li>
                <i>●</i>
                A little coaxing and we get this iPhone to open up. Now, if it will just spill its guts ...
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
          </a>
        </h2>
        <div class="content">
          <img :src="step5Src" alt="">
          <div class="intp-step11-right">
            <ul>
              <li>
                <img v-for="(v,i) in step5" :key="i" :class="v.active" :src="v.src" alt="" @mouseenter="handleEnter(i,5)">
              </li>
              <li>
                <i>●</i>
                The battery connector is no match against our trusty spudger. Just like we saw in the iPhone 8, Apple ditched the tricky tri-points we're accustomed to seeing on this bracket and replaced them with Phillips #000 screws.</li>
              <li>
                <i>●</i>
                Also mirroring the iPhone 8, we find four battery tabs, where in prior years there were but two.</li>
              <li>
                <i>●</i>
                Taking a closer look at the battery, we find a 3.82 V, 2691 mAh cell providing 10.28 Wh of power.</li>
              <li>
                <i>●</i>
                The 8 Plus packs less of a punch than its predecessor—the iPhone 7 Plus boasted a 3.82 V, 2900 mAh cell coming in at 11.1 Wh.</li>
              <li>
                <i>●</i>
                It's also a lightweight stacked up against the Galaxy Note8, which sports 12.71 Wh (3300 mAh at 3.85 V) of power.</li>
              <li>
                <i>●</i>
                Lest you worry about the hard hit to the battery spec, Apple promises the battery life will remain a contender with last year's model.</li>
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
                Just a few turns from our Phillips and tri-point drivers and the display is free ... to hit the bench. For the full scoop on the display, check out our iPhone 8 Teardown.</li>
              <li class="info">
                <i class="el-icon-info"></i>
                Our parts testing crew reports that the 8 and 8 Plus use the exact same home button part, which should make that particular replacement part a little easier to source.</li>
              <li>
                <i>●</i>
                We successfully yanked 3 out of 4 adhesive tabs when removing the battery—leaving one stubbornly in place. Looks like Apple's decision to switch to four tabs from two was to avoid a sticky situation on that fancy new wireless charging coil.
              </li>
              <li>
                <i>●</i>
                Speeding right along, we pull out that factory-calibrated-for-AR dual camera unit.</li>
              <li>
                <i>●</i>
                These 12 MP cameras are solidly fixed together, enabling software used for portrait mode to combine images from both lenses.</li>
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
                We take our camera staring contest to the next level—with X-rays!</li>
              <li>
                <i>●</i>
                By adjusting the exposure on our scope, a few different details come into view.</li>
              <li>
                <i>●</i>
                The first image shows ribbon cable traces under the camera image sensors.</li>
              <li>
                <i>●</i>
                The last image shows magnets used for OIS on only one of the dual cameras.</li>
              <li class="info">
                <i class="el-icon-info"></i>
                Those missing magnets and the horizontal orientation is just another reminder that this isn't the iPhone X ...</li>
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
              <li class="mb0">
              </li>
              <li>
                <i>●</i>
                We're serving up the silicon next! Logic board, we are coming for you.</li>
              <li>
                <i>●</i>
                There is some nervous anticipation as we approach a logic board on a new midframe assembly ...</li>
              <li>
                <i>●</i>
                ... But we are stoked to find that the logic board is secured using the same standoff screws and Phillips screws seen in other iPhones.</li>
              <li>
                <i>●</i>
                We quickly remove and decap de-sticker the logic board for the IC-ing on the cake.</li>
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
                <div class="placeholder"></div>
              </li>
              <li>
                <i>●</i>
                Let's take a look at what the iPhone 8 Plus has under the hood:</li>
              <li>
                <i class="bulletRed">●</i>
                Apple 339S00439 A11 Bionic SoC layered over Samsung 3 GB LPDDR4 RAM</li>
              <li>
                <i class="bulletOrange">●</i>
                Qualcomm MDM9655 Snapdragon X16 LTE modem</li>
              <li>
                <i class="bulletYellow">●</i>
                Skyworks SkyOne SKY78140</li>
              <li>
                <i class="bulletGreen">●</i>
                Avago 8072JD112</li>
              <li>
                <i class="bulletBlueLight">●</i>
                P215 730N71T - likely an envelope tracking IC</li>
              <li>
                <i class="bulletBlue">●</i>
                Skyworks 77366-17 quad-band GSM power amplifier module</li>
              <li>
                <i class="bulletPink">●</i>
                NXP 80V18 secure NFC module</li>
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
                <div class="placeholder"></div>
              </li>
              <li>
                <i>●</i>
                And on the flip side, we find:</li>
              <li>
                <i class="bulletRed">●</i>
                Murata 339S00399 WiFi/Bluetooth module</li>
              <li>
                <i class="bulletOrange">●</i>

                Apple 338S00248, 338S00309 PMIC, and S3830028</li>
              <li>
                <i class="bulletYellow">●</i>

                SanDisk SDMPEGF12 64 GB NAND flash storage</li>
              <li>
                <i class="bulletGreen">●</i>
                Qualcomm WTR5975 Gigabit LTE RF transceiver and PMD9655 PMIC</li>
              <li>
                <i class="bulletBlueLight">●</i>

                NXP 1612A1—Likely an iteration of the 1610 tristar IC</li>
              <li>
                <i class="bulletBlue">●</i>

                Skyworks 3760 3759 1727 RF Switch and SKY762-21 207839 1731 RF Switch</li>
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
               With the logic board out, we can remove some of the peripheral components. We go into sensory overload as we pop out a speaker, tap our Taptic Engine, and blow through the barometric vent.</li>
              <li>
                <i>●</i>
               Do you remember when you could swap your speaker without first removing the logic board? DalTech remembers.</li>
              <li>
                <i>●</i>
              How about when you could remove the Taptic Engine without first removing the speaker? Yeah, we remember that too.</li>
              <li class="info">
                <i class="el-icon-info"></i>
                While we are happy that many components remain modular, the new layout and placement seems like a near-impossible game of pick-up sticks.</li>
                <li class="info">
                <i class="el-icon-info"></i> 
                Any more throwbacks and we'll need to take a DeLorean home.</li>
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
                We remove the Lightning port cable and take a quick moment to examine this notable update.</li>
              <li>
                <i>●</i>
                Our suspicions here are the same as they were in the iPhone 8: the new design could be meant to dissipate heat quickly for fast charging, but at the very least it seems color-coded to match the body of the phone and Apple's proprietary mystery glass.</li>
              <li>
                <i>●</i>
                Emphasis was placed not only on the color of the glass, achieved through a seven-layer color process, but on the material itself, reinforced with an “internal, laser welded, steel and copper structure." What this actually is and what it means for performance, rigidity, and Apple's future aims at metallic glass remains to be seen. For now, we know that Apple likes Pantone colors.</li>
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
               After painstakingly removing the rear panel from the iPhone 8 intact, we decide to go hard on the heat, just in case that's the secret sauce.</li>
              <li>
                <i>●</i>
               Spoiler alert: it isn't. It looks like Apple's adhesive of choice is pretty impervious to heat. If anything, it softens the metal frame a bit, but it doesn't seem to do much to the glue.</li>
              <li>
                <i>●</i>
              This time, we totally broke the panel on purpose, to try out a more realistic situation of removing a broken panel. The verdict: don't drop this phone. Removing a broken panel is much more difficult than getting it out in one piec</li>
              <li class="warn">
                <i class="el-icon-warning"></i>
               Maybe next time we'll use even more heat.</li>
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
              </li>
              <li>
                <i>●</i>
                Another tough teardown under our belts, we gaze upon the fruits of our labor, and give thanks...</li>
              <li>
                <i>●</i>
                Thanks once again to Circuitwise for letting us camp at your place.</li>
              <li>
                <i>●</i>
                And thanks to Creative Electron for the inside scoop with their wicked cool X-ray machine.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            step1Src:
                'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone8p/1-1.jpeg',
            step2Src:
                'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone8p/2-1.jpeg',
            step2: [
                {
                    active: "active",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone8p/2-1.jpeg',
                },
                {
                    active: "",
                    src:
                       'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone8p/2-2.jpeg',
                },
                {
                    active: "",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone8p/2-3.jpeg',
                }
            ],
            step3Src:
                'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone8p/3-1.jpeg',
            step3: [
                {
                    active: "active",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone8p/3-1.jpeg',
                },
                {
                    active: "",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone8p/3-2.jpeg',
                }
            ],
            step4Src:
                'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone8p/4-1.jpeg',
            step4: [
                {
                    active: "active",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone8p/4-1.jpeg'
                },
                {
                    active: "",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone8p/4-2.jpeg',
                },
                {
                    active: "",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone8p/4-3.jpeg',
                }
            ],
            step5Src:
                'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone8p/5-1.jpeg',
            step5: [
                {
                    active: "active",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone8p/5-1.jpeg',
                },
                {
                    active: "",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone8p/5-2.jpeg',
                },
                {
                    active: "",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone8p/5-3.jpeg',
                }
            ],
            step6Src:
                'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone8p/6-1.jpeg',
            step6: [
                {
                    active: "active",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone8p/6-1.jpeg',
                },
                {
                    active: "",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone8p/6-2.jpeg',
                },
                {
                    active: "",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone8p/6-3.jpeg',
                }
            ],
            step7Src:
                'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone8p/7-1.jpeg',
            step7: [
                {
                    active: "active",
                    src:
                       'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone8p/7-1.jpeg',
                },
                {
                    active: "",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone8p/7-2.jpeg',
                },
                {
                    active: "",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone8p/7-3.jpeg',
                }
            ],
            step8Src:
                'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone8p/8-1.jpeg',
            step9Src:
                'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone8p/9-1.jpeg',
            step9: [
                {
                    active: "active",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone8p/9-1.jpeg',
                },
                {
                    active: "",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone8p/9-2.jpeg',
                }
            ],
            step10Src:
                'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone8p/10-1.jpeg',
            step10: [
                {
                    active: "active",
                    src:
                       'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone8p/10-1.jpeg',
                },
                {
                    active: "",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone8p/10-2.jpeg',
                }
            ],
            step11Src:
                'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone8p/11-1.jpeg',
            step11: [
                {
                    active: "active",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone8p/11-1.jpeg',
                },
                {
                    active: "",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone8p/11-2.jpeg',
                },
                {
                    active: "",
                    src:
                       'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone8p/11-3.jpeg',
                }
            ],
            step12Src:
                'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone8p/12-1.jpeg',
            step13Src:
                'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone8p/13-1.jpeg',
            step14Src:
                'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone8p/14-1.jpeg',
            step14: [
                {
                    active: "active",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone8p/14-1.jpeg',
                },
                {
                    active: "",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone8p/14-2.jpeg'
                },
                {
                    active: "",
                    src:
                        'https://jj0k0vdokyote8dbink.blob.core.windows.net/iphone8p/14-3.jpeg',
                }
            ],
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
@import "../assets/scss/iphone8p.scss";
</style>

