---
title: "How to use Checkpoint Live"
date: "2018-05-03"
img: 'https://checkpointlive.com/img/largeLogo.svg'
description: 'How to use Checkpoint Live. The event management service for checkpoint based events'
tags: ["Tutorial","How to guide"]
---

This tutorial explains basics for you to get started with Checkpoint Live.

Are you part of the administration team for your event? If yes, please take this [tutorial for specific instructions on the administrator interface](/how-to-use-checkpoint-live-as-an-admin).

### What is in this tutorial
* [How you fit into the wider system](#widerSystem)
* [Logging in](#loggingIn)
* [Selecting your checkpoint](#selectingCheckpoint)
* [Entering information](#enteringInformation)

## How you fit into the wider system
<a name="widerSystem"></a>
Everyone using Checkpoint Live is in communication with each other via their mobile devices. Your role marshalling a checkpoint/base is to record the participants as they arrive and leave your checkpoint/base. If there are points available at your checkpoint/base you will also enter these, as Checkpoint Live will collate the scores input by all checkpoints/bases.

[We will get to how you enter this information shortly](#enteringInformation). As soon as you submit the information it is transmitted via the internet to a central database. This will then update all users on your checkpoint/base and the admin team monitoring the event.

<div class="row">
  <svg id="whatIsCheckpointLive" class="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3" version="1.1" viewBox="0 0 361.41 307.72" xmlns="http://www.w3.org/2000/svg">
                <title>Diagram of Checkpoint Live communications</title>
                <desc>Diagram showing how checkpoints communicate with checkpoint live to inform the admins for the event which
                  teams have been seen.</desc>
                <g transform="translate(0 10.717)">
                  <g transform="translate(124.77 78.219)">
                    <path class="chkptAnimation" id="chkpt1-device" d="m-54.954 60.024h-13.31c-2.7617 0-4.9911 2.2293-4.9911 4.991v26.619c0 2.7617 2.2294 4.9911 4.9911 4.9911h13.31c2.7617 0 4.991-2.2294 4.991-4.9911v-26.619c0-2.7617-2.2293-4.991-4.991-4.991zm-3.3274 33.274h-6.6548v-1.6637h6.6548zm5.407-4.9911h-17.469v-23.292h17.469z"
                      style="stroke-width:.52917" />
                    <g id="logo" transform="matrix(2.3334 0 0 2.3334 39.592 -594.41)" style="stroke-width:.42856">
                      <g transform="translate(-24.848,244.22)" style="stroke-width:.42856">
                        <g transform="translate(18.184 -14.978)" style="stroke-width:.42856">
                          <path d="m14.153 59.914c0.0105 2.5068 2.7727 5.8145 2.7727 5.8145 2.5061-3.0556 2.9618-5.0061 2.8488-6.1564-0.10069-1.4622-1.3155-2.6177-2.8038-2.6177-1.4807 0-2.6876 1.1653-2.7995 2.6177m2.7962-1.2906c0.83416 0 1.5104 0.6766 1.5104 1.5104 0 0.83416-0.67624 1.5104-1.5104 1.5104s-1.5104-0.67624-1.5104-1.5104 0.67624-1.5104 1.5104-1.5104"
                            style="fill:#ff9100;stroke-width:.42856" />
                          <g transform="matrix(.36221 0 0 .36221 -10.666 53.333)" style="fill-rule:evenodd;fill:#ccc;stroke-linecap:square;stroke-linejoin:bevel;stroke-width:.42856">
                            <path d="m84.087 37.562c0 0.7853-3.4846 1.422-7.783 1.422s-7.783-0.6367-7.783-1.422 3.4846-1.422 7.783-1.422 7.783 0.6367 7.783 1.422"
                              style="fill-rule:nonzero;fill:#ccc;stroke-width:.42856" />
                          </g>
                        </g>
                        <ellipse id="chkpt1-logo" transform="scale(-1,1)" cx="-34.001" cy="37.456" rx="1.3698" ry="1.3696" style="fill:none;stroke-linecap:square;stroke-linejoin:bevel;stroke-width:.79371;stroke:#ff9100"
                        />
                        <ellipse id="chkpt2-logo" cx="26.793" cy="37.456" rx="1.3698" ry="1.3696" style="fill:none;stroke-linecap:square;stroke-linejoin:bevel;stroke-width:.79371;stroke:#ff9100"
                        />
                        <ellipse id="chkpt3-logo" cx="26.793" cy="44.765" rx="1.3698" ry="1.3696" style="fill:none;stroke-linecap:square;stroke-linejoin:bevel;stroke-width:.79371;stroke:#ff9100"
                        />
                        <path d="m32.298 37.468-3.7974-0.02363" style="fill:none;stroke-width:.22678;stroke:#000" />
                        <path d="m26.805 43.009-0.02363-3.7974" style="fill:none;stroke-width:.22678;stroke:#000" />
                        <path d="m28.54 44.776 3.8213-0.02363" style="fill:none;stroke-width:.22678;stroke:#000" />
                      </g>
                    </g>
                    <g class="chkptAnimation" transform="translate(270.06 -75.972)">
                      <path d="m-217.17 260.58c1.8301 0 3.3107-1.4973 3.3107-3.3274l0.0166-16.637c0-1.8301-1.4973-3.3274-3.3274-3.3274h-26.619c-1.83 0-3.3274 1.4973-3.3274 3.3274v16.637c0 1.83 1.4973 3.3274 3.3274 3.3274h-6.6547v3.3274h39.928v-3.3274zm-26.619-19.964h26.619v16.637h-26.619z"
                        style="stroke-width:.52917" />
                      <path d="m-183.6 232.3h-13.309c-2.2959 0-4.1592 1.8633-4.1592 4.1592v28.283c0 2.2959 1.8633 4.1592 4.1592 4.1592h13.309c2.2959 0 4.1592-1.8633 4.1592-4.1592v-28.283c0-2.2959-1.8633-4.1592-4.1592-4.1592zm-6.6547 34.937c-1.3809 0-2.4955-1.1147-2.4955-2.4955s1.1147-2.4955 2.4955-2.4955 2.4955 1.1147 2.4955 2.4955-1.1147 2.4955-2.4955 2.4955zm7.4866-6.6547h-14.973v-23.292h14.973z"
                        style="stroke-width:.52917" />
                    </g>
                    <ellipse cx="-61.609" cy="19.147" rx="5.9136" ry="5.9132" style="fill:none;stroke-linecap:square;stroke-linejoin:bevel;stroke-width:4;stroke:#ff9100"
                    />
                    <g transform="matrix(2.3931 0 0 2.3931 131.22 -132.03)" style="stroke-width:.41788">
                      <path d="m14.153 59.914c0.0105 2.5068 2.7727 5.8145 2.7727 5.8145 2.5061-3.0556 2.9618-5.0061 2.8488-6.1564-0.10069-1.4622-1.3155-2.6177-2.8038-2.6177-1.4807 0-2.6876 1.1653-2.7995 2.6177m2.7962-1.2906c0.83416 0 1.5104 0.6766 1.5104 1.5104 0 0.83416-0.67624 1.5104-1.5104 1.5104s-1.5104-0.67624-1.5104-1.5104 0.67624-1.5104 1.5104-1.5104"
                        style="fill:#ff9100;stroke-width:.41788" />
                      <g transform="matrix(.36221 0 0 .36221 -10.666 53.333)" style="fill-rule:evenodd;fill:#ccc;stroke-linecap:square;stroke-linejoin:bevel;stroke-width:.41788">
                        <path d="m84.087 37.562c0 0.7853-3.4846 1.422-7.783 1.422s-7.783-0.6367-7.783-1.422 3.4846-1.422 7.783-1.422 7.783 0.6367 7.783 1.422"
                          style="fill-rule:nonzero;fill:#ccc;stroke-width:.41788" />
                      </g>
                    </g>
                    <ellipse cx="55.115" cy="-81.023" rx="5.9136" ry="5.9132" style="fill:none;stroke-linecap:square;stroke-linejoin:bevel;stroke-width:4;stroke:#ff9100"
                    />
                    <path d="m20.127 216.83c0.072 0.14367 0.029 0.25831-0.1291 0.25831h-1.3059c-0.1292 0-0.2009-0.0572-0.2439-0.15782l-0.8897-1.8655h-6.185l-0.8753 1.8655c-0.057 0.10059-0.1292 0.15782-0.244 0.15782h-1.3202c-0.1435 0-0.2152-0.11464-0.1578-0.25831l5.41-11.164c0.043-0.10041 0.1148-0.12911 0.1865-0.12911h0.1865c0.072 0 0.1291 0.0287 0.1865 0.12911l5.3814 11.164m-8.0507-3.243h4.7786l-2.3821-5.08-2.3965 5.08m14.983-7.9786c3.8172 0 5.8695 2.9563 5.8695 5.6828 0 2.9992-2.0665 5.7975-5.855 5.7975h-3.8459c-0.1437 0-0.2441-0.10041-0.2441-0.24392v-11.007c0-0.1292 0.086-0.22963 0.2296-0.22963h3.8459v-8e-5m0.043 9.9161c2.6548 0 4.1761-2.0808 4.1617-4.2476 0-2.1239-1.4638-4.1042-4.1617-4.1042h-2.5113l0.014 8.3519h2.497m22-9.9161c0.1291 0 0.23 0.10059 0.23 0.24426v10.992c0 0.12914-0.086 0.24376-0.2298 0.24376h-1.1337c-0.1578 0-0.2439-0.10041-0.2439-0.24392v-7.907l-4.6782 7.6487c-0.072 0.11478-0.1435 0.17222-0.2583 0.17222h-0.072c-0.1148 0-0.1865-0.0574-0.2583-0.17222l-4.6638-7.6487v7.907c0 0.12914-0.1006 0.24384-0.2441 0.24384h-1.1337c-0.1435 0-0.2441-0.10046-0.2441-0.24397v-11.007c0-0.12911 0.086-0.2296 0.2296-0.2296h0.9758c0.1291 0 0.2152 0.0431 0.287 0.1579l5.0943 8.3233 5.0942-8.3233c0.057-0.1148 0.1435-0.1579 0.2871-0.1579h0.9614l1e-4 8e-5m5.1679 0-1.1052-1.6e-4c-0.1435 0-0.2296 0.10049-0.2296 0.22961v11.007c0 0.14351 0.1004 0.244 0.2441 0.244h1.105c0.1291 0 0.2152-0.1147 0.2152-0.24384v-11.007c0-0.12909-0.1004-0.2296-0.2296-0.2296h1e-4m13.505 0c0.1291 0 0.2299 0.10059 0.2299 0.2154v11.05c0 0.11478-0.086 0.21532-0.2153 0.21532h-0.4018c-0.3013 0-0.617-0.21532-1.0189-0.66016l-6.6585-7.6487v8.0648c0 0.12914-0.1004 0.22963-0.2296 0.22963l-1.1337 0.0143c-0.1435 0-0.2441-0.10054-0.2441-0.24405v-11.007c0-0.12912 0.1006-0.22966 0.2296-0.22966h0.6745c0.1291 0 0.2152 0.0574 0.33 0.18664l7.0602 8.2371v-8.2084c0-0.1148 0.086-0.21534 0.2153-0.21534h1.1624v-5e-5m18.4 0c0.1436 0 0.2441 0.10059 0.2441 0.22979v11.007c0 0.15783-0.086 0.24374-0.2153 0.24374h-0.8466c-0.3588 0-0.5597-0.24374-0.5597-0.57386v-4.2477h-6.3141v4.5778c0 0.12923-0.1005 0.24384-0.2296 0.24384h-1.148c-0.1435 0-0.2441-0.10043-0.2441-0.24394v-11.007c0-0.1292 0.086-0.22966 0.2296-0.22966h1.148c0.1435 0 0.2441 0.10046 0.2441 0.22966v4.8074h6.3141v-4.8074c0-0.1292 0.086-0.22966 0.2297-0.22966h1.1479l-1e-4 -5e-5m14.51 12.14c0.1719 0.14351 0.1 0.33009-0.014 0.40177l-0.861 0.53104c-0.3014 0.18638-0.6172 0.11483-0.7891-0.17219l-1.0761-1.7938c-0.718 0.30134-1.5071 0.4734-2.325 0.4734-3.2576 0-5.8837-2.5686-5.8837-5.8548 0-3.2432 2.6261-5.8263 5.8837-5.8263 3.2284 0 5.8547 2.583 5.8547 5.8263 0 1.8368-0.8179 3.4584-2.1234 4.5204l0.5452 0.90406c0.3582 0.55962 0.5741 0.8037 0.7891 0.99015m-9.3279-6.4143c0 2.0808 1.5073 3.8315 3.4732 4.2046l-0.072-0.0143c-0.4165-0.30125-0.6028-0.73194-0.6028-1.1911 0-0.96147 0.7891-1.7508 1.8796-1.7508 0.7747 0 1.3775 0.30133 1.966 1.105 0.1727 0.24392 0.3302 0.50223 0.502 0.77486 0.8332-0.78928 1.364-1.9086 1.364-3.1284 0-2.3246-1.9372-4.2618-4.2477-4.2618-2.325 0-4.2622 1.9372-4.2622 4.2618h-1e-4m4.2623 4.2908c0.5165 0 1.0185-0.10033 1.4783-0.27255l-0.287-0.48784c-0.3015-0.48794-0.6317-0.68902-1.1058-0.68902-0.4445 0-0.8035 0.37314-0.8035 0.83235 0 0.2154 0.1152 0.44487 0.359 0.60275 0.1152 0.0143 0.2439 0.0143 0.359 0.0143"
                    />
                    <path d="m117.11 45.579c0.1143 0.10042 0.1143 0.22979-0.014 0.35873-1.0617 1.1195-2.5112 1.7938-4.2333 1.7938-3.186 0-5.8268-2.5542-5.8268-5.8117 0-3.2575 2.6408-5.8693 5.8268-5.8693 1.6933 0 3.1851 0.67445 4.2621 1.8081 0.12869 0.12904 0.12869 0.25823 0.014 0.34426l-0.9186 0.74608c-0.1152 0.10058-0.2151 0.10058-0.3302-0.0142-0.6173-0.64575-1.679-1.3202-2.9701-1.3202-2.5832 0-4.2622 2.1526-4.2622 4.305 0 2.1669 1.679 4.2476 4.2622 4.2476 1.2767 0 2.3097-0.64575 2.9269-1.2772 0.1151-0.12912 0.2294-0.14334 0.3446-0.0573l0.9186 0.74625m12.543-9.428c0.1431 0 0.2438 0.10058 0.2438 0.22978v11.007c0 0.15782-0.086 0.24376-0.215 0.24376h-0.8467c-0.359 0-0.5597-0.24376-0.5597-0.57388v-4.2476h-6.3144v4.5778c0 0.1292-0.1007 0.24384-0.2294 0.24384h-1.1481c-0.1431 0-0.2439-0.10041-0.2439-0.24392v-11.007c0-0.12921 0.086-0.22963 0.2295-0.22963h1.1481c0.1431 0 0.2438 0.10042 0.2438 0.22963v4.8074h6.3144v-4.8074c0-0.12921 0.086-0.22963 0.2295-0.22963h1.1481v-8e-5m11.094 1.5638h-5.6963v3.5015h3.3003c0.1431 0 0.2438 0.1004 0.2438 0.24391v1.0763c0 0.15791-0.1007 0.24401-0.2438 0.24401h-3.3003l0.014 3.2862h5.6828c0.14388 0 0.24378 0.10042 0.24378 0.24393v1.0763c0 0.14351-0.10001 0.24402-0.24378 0.24402h-7.0747c-0.1431 0-0.2439-0.10051-0.2439-0.24402v-11.007c0-0.12911 0.086-0.22962 0.2294-0.22962h7.0892c0.14388 0 0.24468 0.10051 0.24468 0.22962v1.105c0 0.14351-0.1008 0.22963-0.24468 0.22963v-9e-5m13.232 7.8642c0.11523 0.10041 0.11523 0.22979-0.014 0.35873-1.0617 1.1195-2.5112 1.7938-4.2333 1.7938-3.1852 0-5.8259-2.5542-5.8259-5.8117s2.6407-5.8693 5.8259-5.8693c1.6933 0 3.186 0.67444 4.2621 1.8081 0.12959 0.12903 0.12959 0.25823 0.014 0.34425l-0.9186 0.74609c-0.1143 0.10059-0.21511 0.10059-0.3302-0.0142-0.6164-0.64575-1.6789-1.3202-2.9701-1.3202-2.5832 0-4.2621 2.1526-4.2621 4.305 0 2.1669 1.6789 4.2476 4.2621 4.2476 1.2768 0 2.3105-0.64575 2.9278-1.2772 0.1143-0.12912 0.22939-0.14334 0.34369-0.0573l0.91858 0.74625m11.754 1.5212c0.2159 0.22953 0.10078 0.53119-0.215 0.53119h-1.2057c-0.12951 0-0.20071-0.0285-0.30141-0.12903l-5.367-5.654v5.5535c0 0.12904-0.1008 0.22953-0.2295 0.22953h-1.1624c-0.12959 0-0.2295-0.10049-0.2295-0.22953v-10.189c-0.014-0.33003-0.043-0.53095-0.086-0.77487-0.029-0.15791 0.014-0.28702 0.1583-0.28702h0.98981c0.34459 0 0.55959 0.20091 0.55959 0.51663v4.793l4.7364-5.1804c0.071-0.0863 0.1574-0.12929 0.28699-0.12929h1.2336c0.28702 0 0.3878 0.30133 0.215 0.48777l-4.6058 5.0226 5.2231 5.4387m7.4777-10.949c2.4968 0 3.9319 2.1095 3.9319 3.8459 0 1.8368-1.4342 3.8746-3.9319 3.8746h-2.8558v3.5158c0 0.15782-0.086 0.24384-0.22939 0.24384h-1.1625c-0.14309 0-0.2295-0.086-0.2295-0.24384v-11.007c0-0.12911 0.086-0.22961 0.2295-0.22961h4.2477m-0.12869 6.1561c1.5782 0 2.4537-1.1624 2.4537-2.3104 0-1.1337-0.87551-2.2817-2.4537-2.2817h-2.7262v4.5921h2.7262m12.615 5.4243c3.2283 0 5.8547-2.5685 5.8547-5.8548 0-3.2432-2.6264-5.8262-5.8547-5.8262-3.258 0-5.8844 2.583-5.8844 5.8262 0 3.2862 2.6264 5.8548 5.8844 5.8548m0-1.564c-2.325 0-4.2622-1.9372-4.2622-4.2907 0-2.3246 1.9372-4.2619 4.2622-4.2619 2.3097 0 4.2477 1.9373 4.2477 4.2619 0 2.3535-1.938 4.2907-4.2477 4.2907m10.577-10.016-1.1049-1.7e-4c-0.14399 0-0.2295 0.1005-0.2295 0.22961v11.007c0 0.14351 0.10001 0.24401 0.24389 0.24401h1.1049c0.12952 0 0.215-0.11472 0.215-0.24384v-11.007c0-0.12911-0.1-0.22961-0.22939-0.22961m13.505 0c0.12959 0 0.23029 0.10058 0.23029 0.21539v11.05c0 0.1148-0.086 0.2153-0.2159 0.2153h-0.40129c-0.30139 0-0.61719-0.2153-1.0194-0.66014l-6.6582-7.6487v8.0648c0 0.12912-0.1007 0.22962-0.22939 0.22962l-1.1337 0.0142c-0.14388 0-0.24468-0.10051-0.24468-0.24402v-11.007c0-0.12912 0.1008-0.22961 0.23029-0.22961h0.674c0.12951 0 0.215 0.0574 0.3302 0.1866l7.0603 8.237v-8.2083c0-0.11482 0.086-0.21531 0.21511-0.21531h1.1624v-9e-5m12.112 0c0.12952 0 0.22942 0.0861 0.22942 0.22961v1.105c0 0.12912-0.1008 0.22961-0.22942 0.22961h-3.4587v9.6723c0 0.15782-0.086 0.24377-0.2294 0.24377h-0.8323c-0.3734 0-0.55962-0.24377-0.55962-0.57388v-9.3421h-3.4587c-0.1287 0-0.24382-0.086-0.24382-0.22953v-1.0905c0-0.14368 0.1007-0.24417 0.24382-0.24417h8.5387v-9e-5m7.9231 0.43012 6.2712 1.6e-4c0.1583 0 0.2295 0.0861 0.2295 0.22962v1.1337c0 0.17212-0.043 0.28693-0.15751 0.41613l-2.7271 2.87c0.4885 0 0.97618 0.14351 1.3783 0.35891 1.1049 0.44484 1.8365 1.6216 1.8365 2.8557 0 1.8798-1.7365 3.329-3.6018 3.329-1.6222 0-2.7982-0.68868-3.8032-1.9802-0.086-0.11481-0.10002-0.21531 0.014-0.31573l0.78909-0.74625c0.1152-0.11472 0.20151-0.10042 0.31581 0.0286 0.5597 0.73185 1.5503 1.4494 2.5976 1.4494 1.3775 0 2.0236-1.0619 2.0236-1.9372 0-0.88968-0.64611-1.7507-1.6934-1.7507-0.44529 0-0.84659 0.21522-1.1912 0.30134-0.086 0.0144-0.15748-0.0287-0.2295-0.10042l-0.61719-0.81797c-0.072-0.1148-0.086-0.21531 0.014-0.33011l3.2004-3.4297h-4.6499c-0.1287 0-0.25821-0.10059-0.25821-0.22962v-1.0906c0-0.14342 0.1151-0.24393 0.25821-0.24393v-1.7e-4"
                    />
                    <path d="m-114.69 45.6c0.1143 0.10042 0.1143 0.22979-0.014 0.35873-1.0618 1.1195-2.5113 1.7938-4.2334 1.7938-3.186 0-5.8267-2.5542-5.8267-5.8117 0-3.2575 2.6407-5.8693 5.8267-5.8693 1.6934 0 3.1852 0.67445 4.2621 1.8081 0.1287 0.12904 0.1287 0.25823 0.014 0.34426l-0.9186 0.74608c-0.1151 0.10058-0.215 0.10058-0.3302-0.0142-0.6172-0.64575-1.6789-1.3202-2.9701-1.3202-2.5832 0-4.2621 2.1526-4.2621 4.305 0 2.1669 1.6789 4.2476 4.2621 4.2476 1.2768 0 2.3097-0.64575 2.9269-1.2772 0.1152-0.12912 0.2295-0.14334 0.3446-0.0573l0.9187 0.74625m12.543-9.428c0.1431 0 0.2439 0.10058 0.2439 0.22978v11.007c0 0.15782-0.086 0.24376-0.2151 0.24376h-0.8467c-0.3589 0-0.5596-0.24376-0.5596-0.57388v-4.2476h-6.3144v4.5778c0 0.1292-0.1008 0.24384-0.2295 0.24384h-1.1481c-0.1431 0-0.2438-0.10041-0.2438-0.24392v-11.007c0-0.1292 0.086-0.22962 0.2294-0.22962h1.1481c0.1431 0 0.2439 0.10042 0.2439 0.22962v4.8074h6.3144v-4.8074c0-0.1292 0.085-0.22962 0.2294-0.22962h1.1481v-8e-5m11.094 1.5638h-5.6964v3.5015h3.3003c0.1431 0 0.2439 0.10041 0.2439 0.24392v1.0763c0 0.15792-0.1008 0.24401-0.2439 0.24401h-3.3003l0.014 3.2863h5.6829c0.1439 0 0.2438 0.10042 0.2438 0.24393v1.0763c0 0.14351-0.1 0.244-0.2438 0.244h-7.0748c-0.1431 0-0.2438-0.10049-0.2438-0.244v-11.007c0-0.12912 0.086-0.22961 0.2294-0.22961h7.0892c0.1439 0 0.2446 0.10049 0.2446 0.22961v1.105c0 0.14351-0.1007 0.22962-0.2446 0.22962v-9e-5m13.233 7.8642c0.1152 0.10042 0.1152 0.22979-0.014 0.35873-1.0617 1.1195-2.5112 1.7938-4.2333 1.7938-3.1851 0-5.8259-2.5542-5.8259-5.8117 0-3.2575 2.6408-5.8693 5.8259-5.8693 1.6933 0 3.186 0.67445 4.2621 1.8081 0.1296 0.12904 0.1296 0.25823 0.014 0.34426l-0.9186 0.74608c-0.1143 0.10058-0.215 0.10058-0.3302-0.0142-0.6164-0.64575-1.6789-1.3202-2.9701-1.3202-2.5832 0-4.2621 2.1526-4.2621 4.305 0 2.1669 1.6789 4.2476 4.2621 4.2476 1.2768 0 2.3106-0.64575 2.9278-1.2772 0.1143-0.12912 0.2294-0.14333 0.3437-0.0573l0.9187 0.74624m11.754 1.5212c0.2159 0.22952 0.1008 0.53118-0.215 0.53118h-1.2057c-0.1295 0-0.2006-0.0285-0.3014-0.12902l-5.367-5.654v5.5536c0 0.12904-0.1008 0.22952-0.2295 0.22952h-1.1624c-0.1296 0-0.2295-0.10048-0.2295-0.22952v-10.189c-0.014-0.33001-0.043-0.53094-0.086-0.77486-0.029-0.15791 0.014-0.28702 0.1583-0.28702h0.9898c0.3446 0 0.5596 0.20092 0.5596 0.51664v4.793l4.7364-5.1804c0.071-0.0863 0.1575-0.12929 0.287-0.12929h1.2336c0.287 0 0.3878 0.30133 0.2151 0.48776l-4.6059 5.0226 5.2231 5.4387m7.4777-10.949c2.4968 0 3.9319 2.1095 3.9319 3.8459 0 1.8368-1.4342 3.8746-3.9319 3.8746h-2.8558v3.5158c0 0.15781-0.085 0.24384-0.2294 0.24384h-1.1625c-0.1431 0-0.2295-0.086-0.2295-0.24384v-11.007c0-0.12911 0.086-0.2296 0.2295-0.2296h4.2477m-0.1287 6.1561c1.5782 0 2.4537-1.1624 2.4537-2.3104 0-1.1337-0.8755-2.2817-2.4537-2.2817h-2.7262v4.5921h2.7262m12.615 5.4243c3.2283 0 5.8547-2.5685 5.8547-5.8548 0-3.2432-2.6264-5.8263-5.8547-5.8263-3.258 0-5.8844 2.583-5.8844 5.8263 0 3.2862 2.6264 5.8548 5.8844 5.8548m0-1.564c-2.325 0-4.2622-1.9372-4.2622-4.2907 0-2.3246 1.9372-4.2619 4.2622-4.2619 2.3097 0 4.2477 1.9373 4.2477 4.2619 0 2.3535-1.938 4.2907-4.2477 4.2907m10.577-10.016-1.1049-1.7e-4c-0.144 0-0.2295 0.1005-0.2295 0.2296v11.007c0 0.14351 0.1 0.24401 0.2439 0.24401h1.1049c0.1295 0 0.215-0.11473 0.215-0.24384v-11.007c0-0.12911-0.1-0.2296-0.2294-0.2296m13.505 0c0.1295 0 0.2302 0.10057 0.2302 0.21538v11.05c0 0.1148-0.086 0.21531-0.2159 0.21531h-0.4013c-0.3014 0-0.6172-0.21531-1.0194-0.66014l-6.6581-7.6487v8.0648c0 0.12913-0.1008 0.22963-0.2295 0.22963l-1.1337 0.0142c-0.1439 0-0.2447-0.10049-0.2447-0.244v-11.007c0-0.12912 0.1008-0.22961 0.2303-0.22961h0.674c0.1295 0 0.215 0.0574 0.3302 0.1866l7.0603 8.237v-8.2083c0-0.11482 0.086-0.21531 0.2151-0.21531h1.1625v-9e-5m12.112 0c0.1295 0 0.2294 0.0861 0.2294 0.22961v1.105c0 0.12912-0.1008 0.22961-0.2294 0.22961h-3.4587v9.6723c0 0.15782-0.085 0.24377-0.2294 0.24377h-0.8323c-0.3734 0-0.5596-0.24377-0.5596-0.57388v-9.3421h-3.4587c-0.1287 0-0.2438-0.086-0.2438-0.22953v-1.0905c0-0.14368 0.1007-0.24417 0.2438-0.24417h8.5387v-9e-5m11.211 0.4301c0.1295 0 0.2438 0.10042 0.2438 0.22962v10.577c0 0.14351-0.1 0.24393-0.2438 0.24393h-1.1337c-0.1431 0-0.2438-0.10042-0.2438-0.24393v-8.2084l-1.3632 0.33003c-0.1439 0.0287-0.2294-0.0287-0.2582-0.1722l-0.1295-0.81797c-0.014-0.14351 0.014-0.21522 0.1871-0.25831 0.7027-0.24393 1.3055-0.9758 1.6933-1.5355l0.014-0.043c0.042-0.0717 0.1143-0.10042 0.2151-0.10042h1.0185v-5.3e-4"
                    />
                    <path d="m0.19636-51.007c0.1143 0.10041 0.1143 0.22979-0.014 0.35873-1.0618 1.1195-2.5113 1.7938-4.2334 1.7938-3.186 0-5.8267-2.5542-5.8267-5.8117 0-3.2575 2.6407-5.8693 5.8267-5.8693 1.6934 0 3.1852 0.67445 4.2621 1.8081 0.1287 0.12903 0.1287 0.25823 0.014 0.34425l-0.9186 0.74609c-0.1152 0.10058-0.2151 0.10058-0.3302-0.01421-0.6172-0.64575-1.6789-1.3202-2.9701-1.3202-2.5832 0-4.2621 2.1526-4.2621 4.305 0 2.1669 1.6789 4.2476 4.2621 4.2476 1.2768 0 2.3097-0.64575 2.9269-1.2772 0.1152-0.12912 0.2295-0.14334 0.3446-0.0573l0.9186 0.74625m12.543-9.428c0.1431 0 0.2439 0.10058 0.2439 0.22978v11.007c0 0.15782-0.086 0.24376-0.2151 0.24376h-0.8467c-0.359 0-0.5596-0.24376-0.5596-0.57388v-4.2476h-6.3145v4.5778c0 0.1292-0.1007 0.24384-0.2294 0.24384h-1.1481c-0.1431 0-0.2438-0.10041-0.2438-0.24392v-11.007c0-0.1292 0.086-0.22962 0.2294-0.22962h1.1481c0.1431 0 0.2439 0.10042 0.2439 0.22962v4.8074h6.3144v-4.8074c0-0.1292 0.086-0.22962 0.2294-0.22962h1.1481v-8e-5m11.094 1.5638h-5.6964v3.5015h3.3003c0.1431 0 0.2439 0.10041 0.2439 0.24392v1.0763c0 0.15791-0.1008 0.24401-0.2439 0.24401h-3.3003l0.014 3.2862h5.6829c0.1439 0 0.2438 0.10042 0.2438 0.24393v1.0763c0 0.14351-0.1 0.24401-0.2438 0.24401h-7.0748c-0.1431 0-0.2438-0.1005-0.2438-0.24401v-11.007c0-0.12912 0.086-0.22962 0.2294-0.22962h7.0892c0.1439 0 0.2446 0.1005 0.2446 0.22962v1.105c0 0.14351-0.1007 0.22962-0.2446 0.22962v-9e-5m13.232 7.8642c0.1152 0.10041 0.1152 0.22979-0.014 0.35873-1.0617 1.1195-2.5112 1.7938-4.2333 1.7938-3.1852 0-5.8259-2.5542-5.8259-5.8117 0-3.2575 2.6407-5.8693 5.8259-5.8693 1.6933 0 3.186 0.67445 4.2621 1.8081 0.1295 0.12903 0.1295 0.25823 0.014 0.34425l-0.9186 0.74609c-0.1143 0.10058-0.2151 0.10058-0.3302-0.01421-0.6164-0.64575-1.679-1.3202-2.9701-1.3202-2.5832 0-4.2622 2.1526-4.2622 4.305 0 2.1669 1.679 4.2476 4.2622 4.2476 1.2767 0 2.3105-0.64575 2.9277-1.2772 0.1143-0.12912 0.2295-0.14334 0.3438-0.0573l0.9186 0.74625m11.754 1.5212c0.2159 0.22953 0.1007 0.53119-0.2151 0.53119h-1.2056c-0.1296 0-0.2007-0.0285-0.3014-0.12903l-5.3671-5.654v5.5535c0 0.12904-0.1007 0.22953-0.2294 0.22953h-1.1625c-0.1295 0-0.2294-0.10049-0.2294-0.22953v-10.189c-0.014-0.33003-0.043-0.53095-0.086-0.77487-0.029-0.15791 0.014-0.28702 0.1583-0.28702h0.9898c0.3446 0 0.5596 0.20091 0.5596 0.51663v4.793l4.7363-5.1804c0.071-0.0863 0.1575-0.12929 0.2871-0.12929h1.2336c0.287 0 0.3877 0.30133 0.215 0.48777l-4.6059 5.0226 5.2231 5.4387m7.4778-10.949c2.4968 0 3.9319 2.1095 3.9319 3.8459 0 1.8368-1.4342 3.8746-3.9319 3.8746h-2.8558v3.5158c0 0.15782-0.085 0.24384-0.2295 0.24384h-1.1624c-0.1431 0-0.2295-0.086-0.2295-0.24384v-11.007c0-0.12911 0.086-0.22961 0.2295-0.22961h4.2477m-0.1287 6.1561c1.5782 0 2.4536-1.1624 2.4536-2.3104 0-1.1337-0.8754-2.2817-2.4536-2.2817h-2.7263v4.5921h2.7263m12.615 5.4243c3.2284 0 5.8547-2.5685 5.8547-5.8548 0-3.2432-2.6263-5.8263-5.8547-5.8263-3.2579 0-5.8843 2.583-5.8843 5.8263 0 3.2862 2.6264 5.8548 5.8843 5.8548m0-1.564c-2.3249 0-4.2621-1.9372-4.2621-4.2907 0-2.3246 1.9372-4.2619 4.2621-4.2619 2.3097 0 4.2478 1.9373 4.2478 4.2619 0 2.3535-1.9381 4.2907-4.2478 4.2907m10.577-10.016-1.1049-1.69e-4c-0.1439 0-0.2294 0.1005-0.2294 0.22961v11.007c0 0.14351 0.1 0.24401 0.2438 0.24401h1.1049c0.1296 0 0.2151-0.11472 0.2151-0.24384v-11.007c0-0.12911-0.1-0.22961-0.2295-0.22961m13.505 0c0.1296 0 0.2303 0.10058 0.2303 0.21539v11.05c0 0.1148-0.086 0.2153-0.2159 0.2153h-0.4013c-0.3014 0-0.6172-0.2153-1.0194-0.66014l-6.6582-7.6487v8.0648c0 0.12912-0.1008 0.22962-0.2294 0.22962l-1.1337 0.01421c-0.144 0-0.2447-0.1005-0.2447-0.24401v-11.007c0-0.12912 0.1007-0.22962 0.2303-0.22962h0.6739c0.1296 0 0.2151 0.0574 0.3302 0.18661l7.0604 8.237v-8.2083c0-0.11481 0.086-0.21531 0.215-0.21531h1.1625v-8.2e-5m12.112 0c0.1296 0 0.2295 0.0861 0.2295 0.22961v1.105c0 0.12912-0.1008 0.22961-0.2295 0.22961h-3.4586v9.6723c0 0.15782-0.085 0.24376-0.2295 0.24376h-0.8322c-0.3734 0-0.5597-0.24376-0.5597-0.57387v-9.3421h-3.4586c-0.1287 0-0.2438-0.086-0.2438-0.22953v-1.0905c0-0.14368 0.1007-0.24418 0.2438-0.24418h8.5386v-8.2e-5m14.912 9.9157c0.1439 0 0.2159 0.0719 0.2159 0.22979v1.1052c0 0.12895-0.287 0.22945-0.4166 0.22945h-6.4287c-0.1287 0-0.2295-0.1005-0.2439-0.22945v-0.3876l4.2334-4.9796c0.6739-0.76056 1.2336-1.5068 1.2336-2.3965 0-0.97578-0.9034-1.7363-2.0227-1.7363-1.1337 0-1.8661 0.64575-2.4689 1.3633-0.071 0.11481-0.2295 0.11481-0.3294 0l-0.6604-0.70315c-0.086-0.1005-0.1007-0.24418-0.014-0.3446 0.8755-1.2628 2.2098-1.8655 3.5586-1.8655 1.8372 0 3.545 1.3489 3.545 3.2719 0 0.81796-0.3158 1.7076-1.0338 2.5543l-3.3579 3.8889h4.1902"
                    />
                    <path class="chkptAnimation" id="chkpt3-device" d="m178.49 60.024h-13.31c-2.7618 0-4.9911 2.2293-4.9911 4.991v26.619c0 2.7617 2.2293 4.991 4.9911 4.991h13.31c2.7617 0 4.991-2.2294 4.991-4.991v-26.619c0-2.7617-2.2293-4.991-4.991-4.991zm-3.3274 33.274h-6.6548v-1.6637h6.6548zm5.407-4.9911h-17.469v-23.292h17.469z"
                      style="stroke-width:.52917" />
                    <path class="chkptAnimation" id="chkpt2-device" d="m61.77-36.281h-13.31c-2.2959 0-4.1592 1.8633-4.1592 4.1592v28.283c0 2.2959 1.8633 4.1592 4.1592 4.1592h13.31c2.2959 0 4.1592-1.8633 4.1592-4.1592v-28.283c0-2.2959-1.8633-4.1592-4.1592-4.1592zm-6.6547 34.937c-1.3809 0-2.4956-1.1147-2.4956-2.4955 0-1.3809 1.1147-2.4955 2.4956-2.4955 1.3808 0 2.4955 1.1147 2.4955 2.4955 0 1.3809-1.1147 2.4955-2.4955 2.4955zm7.4866-6.6547h-14.973v-23.292h14.973z"
                      style="stroke-width:.52917" />
                    <g transform="translate(1421.9 -240.39)">
                      <path class="chkptAnimation" id="chkpt3-in" d="m-1301.8 320.38v-4.9911h11.662v-3.3274h-11.662v-4.991l-6.6381 6.6547z" clip-path="url(#b)"
                        style="stroke-width:.52917" />
                      <path class="chkptAnimation" id="chkpt3-out" d="m-1311.7 322.04h-11.662v3.3274h11.662v4.9911l6.6381-6.6547-6.6381-6.6547z"
                        clip-path="url(#b)" style="stroke-width:.52917" />
                    </g>
                    <g transform="translate(1301.8 -240.39)">
                      <path class="chkptAnimation" id="chkpt1-out" d="m-1301.8 320.38v-4.9911h11.662v-3.3274h-11.662v-4.991l-6.6381 6.6547z" clip-path="url(#b)"
                        style="stroke-width:.52917" />
                      <path class="chkptAnimation" id="chkpt1-in" d="m-1311.7 322.04h-11.662v3.3274h11.662v4.9911l6.6381-6.6547-6.6381-6.6547z"
                        clip-path="url(#b)" style="stroke-width:.52917" />
                    </g>
                    <path class="chkptAnimation" id="admin-out" d="m56.779 122.15h-4.9911v-11.662h-3.3274v11.662h-4.991l6.6547 6.6381z" clip-path="url(#b)"
                      style="stroke-width:.52917" />
                    <path class="chkptAnimation" id="admin-in" d="m58.442 132.09v11.662h3.3274v-11.662h4.9911l-6.6547-6.6381-6.6547 6.6381z"
                      clip-path="url(#b)" style="stroke-width:.52917" />
                    <g transform="rotate(90 -481.22 855.05)">
                      <path class="chkptAnimation" id="chkpt2-out" d="m-1301.8 320.38v-4.9911h11.662v-3.3274h-11.662v-4.991l-6.6381 6.6547z" clip-path="url(#b)"
                        style="stroke-width:.52917" />
                      <path class="chkptAnimation" id="chkpt2-in" d="m-1311.7 322.04h-11.662v3.3274h11.662v4.9911l6.6381-6.6547-6.6381-6.6547z"
                        clip-path="url(#b)" style="stroke-width:.52917" />
                    </g>
                  </g>
                </g>
              </svg>
</div>


## How to log into Checkpoint Live
<a name="loggingIn"></a>
To log into Checkpoint Live you need a username and password provided to you by the event organisers. This might come in the form of an email that looks a little bit like this:
<div class="row">
  <div class="m_5308179020243031396content" style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;box-sizing:border-box;font-size:14px;max-width:600px;display:block;margin:0 auto;padding:20px">
    <table class="m_5308179020243031396main" width="100%" cellpadding="0" cellspacing="0" style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;box-sizing:border-box;font-size:14px;border-radius:3px;background-color:#fff;margin:0;border:1px solid #e9e9e9"
      bgcolor="#fff">
      <tbody>
        <tr style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;box-sizing:border-box;font-size:20px;margin:0">
          <td class="m_5308179020243031396alert m_5308179020243031396alert-warning" style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;box-sizing:border-box;font-size:20px;font-weight:600;text-transform:uppercase;vertical-align:top;color:#fff;font-weight:500;text-align:center;border-radius:3px 3px 0 0;background-color:#ffffff;margin:0;padding:20px"
            align="center" bgcolor="#ffffff" valign="top">
            <img src="https://checkpointlive.com/largeLogo.png" alt="checkpointlive.com logo" style="max-width:70%">
          </td>
        </tr>
        <tr style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;box-sizing:border-box;font-size:20px;margin:0">
          <td class="m_5308179020243031396alert m_5308179020243031396alert-warning" style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;box-sizing:border-box;font-size:20px;font-weight:600;text-transform:uppercase;vertical-align:top;color:#fff;font-weight:500;text-align:center;border-radius:3px 3px 0 0;background-color:#ef6c00;margin:0;padding:20px"
            align="center" bgcolor="#ef6c00" valign="top">
            Example Event
          </td>
        </tr>
        <tr style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;box-sizing:border-box;font-size:14px;margin:0">
          <td class="m_5308179020243031396content-wrap" style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;box-sizing:border-box;font-size:14px;vertical-align:top;margin:0;padding:20px"
            valign="top">
            <table width="100%" cellpadding="0" cellspacing="0" style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;box-sizing:border-box;font-size:14px;margin:0">
              <tbody>
                <tr style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;box-sizing:border-box;font-size:14px;margin:0">
                  <td class="m_5308179020243031396content-block" style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;box-sizing:border-box;font-size:14px;vertical-align:top;margin:0;padding:0 0 20px"
                    valign="top">
                    <span style="text-transform:capitalize;font-weight:600">Example Event</span> is being managed by the
                    checkpoint
                    <span class="lG">Live</span> website and you are 3 simple steps away from taking part.
                  </td>
                </tr>
                <tr style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;box-sizing:border-box;font-size:16px;margin:0;font-weight:700">
                  <td class="m_5308179020243031396content-block" style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;box-sizing:border-box;font-weight:700;font-size:16px;vertical-align:top;margin:0;padding:0 0 20px"
                    valign="top">
                    Step 1: Find the website
                  </td>
                </tr>
                <tr style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;box-sizing:border-box;font-size:14px;margin:0">
                  <td class="m_5308179020243031396content-block" style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;box-sizing:border-box;font-size:14px;vertical-align:top;margin:0;padding:0 0 20px"
                    valign="top">
                    Click the link below to take you to the website. We recommend you try this before the event starts to familiarise yourself with the site. This also caches the website to aid it in loading faster in low bandwidth environments.
                  </td>
                </tr>
                <tr style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;box-sizing:border-box;font-size:14px;margin:0">
                  <td class="m_5308179020243031396content-block" style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;text-align:center;box-sizing:border-box;font-size:14px;vertical-align:top;margin:0;padding:0 0 20px"
                    valign="top">
                    <a href="https://checkpointlive.com" target="_blank">checkpointlive.com</a>
                  </td>
                </tr>
                <tr style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;box-sizing:border-box;font-size:16px;margin:0;font-weight:700">
                  <td class="m_5308179020243031396content-block" style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;box-sizing:border-box;font-weight:700;font-size:16px;vertical-align:top;margin:0;padding:0 0 20px"
                    valign="top">
                    Step 2: Sign into the event
                  </td>
                </tr>
                <tr style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;box-sizing:border-box;font-size:14px;margin:0">
                  <td class="m_5308179020243031396content-block" style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;box-sizing:border-box;font-size:14px;vertical-align:top;margin:0;padding:0 0 20px"
                    valign="top">
                    On the homepage you will find a sign in form. Use the username and password below and select the black 'sign in' button to enter the event. Everyone uses the same sign in details to enter the event.
                  </td>
                </tr>
                <tr style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;box-sizing:border-box;font-size:14px;margin:0">
                  <td class="m_5308179020243031396content-block" style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;box-sizing:border-box;text-align:center;font-size:14px;vertical-align:top;margin:0;padding:0 0 20px"
                    valign="top">
                    <strong style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;box-sizing:border-box;font-size:14px;margin:0">Username: exampleUser
                      <br>Password: 0A0T9g</strong>
                  </td>
                </tr>
                <tr style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;box-sizing:border-box;font-size:16px;margin:0;font-weight:700">
                  <td class="m_5308179020243031396content-block" style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;box-sizing:border-box;font-weight:700;font-size:16px;vertical-align:top;margin:0;padding:0 0 20px"
                    valign="top">
                    Step 3: Select your
                    checkpoint/base
                  </td>
                </tr>
                <tr style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;box-sizing:border-box;font-size:10px;margin:0">
                  <td class="m_5308179020243031396content-block" style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;text-align:center;font-weight:600;box-sizing:border-box;font-size:14px;vertical-align:top;margin:0;padding:0 0 20px"
                    valign="top">
                    Your
                    checkpoint/base for Example Event is
                    checkpoint 1: Scout Hut
                  </td>
                </tr>
                <tr style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;box-sizing:border-box;font-size:10px;margin:0">
                  <td class="m_5308179020243031396content-block" style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;box-sizing:border-box;font-size:14px;vertical-align:top;margin:0;padding:0 0 20px"
                    valign="top">
                    Once signed in you will see details about the event and name and pass-code inputs. Enter your name, and the pass-code found below. Now click on the 'Go to checkpoint' button. From here you can record team sightings.
                  </td>
                </tr>
                <tr style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;text-align:center;box-sizing:border-box;font-size:10px;margin:0">
                  <td class="m_5308179020243031396content-block" style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;text-align:center;box-sizing:border-box;font-size:14px;vertical-align:top;margin:0;padding:0 0 20px"
                    valign="top">
                    <strong>Your passcode is: sheep</strong>
                  </td>
                </tr>
                <tr style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;box-sizing:border-box;font-size:10px;margin:0">
                  <td class="m_5308179020243031396content-block" style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;box-sizing:border-box;font-size:14px;vertical-align:top;margin:0;padding:0 0 20px"
                    valign="top">
                    Multiple users can be inputting Patrol logs into website using their mobile device and
                    checkpoint
                    <span class="lG">Live</span> will keep them all in sync as well as informing those organising the event that a Patrol has
                    been seen.
                  </td>
                </tr>
                <tr style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;box-sizing:border-box;font-size:16px;margin:0;font-weight:700">
                  <td class="m_5308179020243031396content-block" style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;box-sizing:border-box;font-weight:700;font-size:16px;vertical-align:top;margin:0;padding:0 0 20px"
                    valign="top">
                  </td>
                </tr>
                <tr style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;box-sizing:border-box;font-size:16px;margin:0;font-weight:700">
                  <td class="m_5308179020243031396content-block" style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;box-sizing:border-box;font-weight:700;font-size:16px;vertical-align:top;margin:0;padding:0 0 20px"
                    valign="top">
                    Information from your event organisers
                  </td>
                </tr>
                <tr style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;box-sizing:border-box;font-size:14px;margin:0">
                  <td class="m_5308179020243031396content-block" style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;box-sizing:border-box;font-size:14px;vertical-align:top;margin:0;padding:0 0 20px"
                    valign="top">
                    The event will begin at:
                    <strong>9:30 AM on Sat May 5 2018</strong>.
                  </td>
                </tr>
                <tr style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;box-sizing:border-box;font-size:16px;margin:0;font-weight:700">
                  <td class="m_5308179020243031396content-block" style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;text-align:center;box-sizing:border-box;font-weight:700;font-size:16px;color:#ef6c00;vertical-align:top;margin:0;padding:0 0 20px"
                    valign="top">
                    Enjoy Your Event!
                  </td>
                </tr>
                <tr style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;text-align:center;box-sizing:border-box;font-size:10px;margin:0">
                  <td class="m_5308179020243031396content-block" style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;text-align:center;box-sizing:border-box;font-size:12px;vertical-align:top;margin:0;padding:0 0 20px"
                    valign="top">
                    Thank you for choosing the
                    <a href="https://checkpointlive.com" target="_blank">
                      checkpoint
                      <span class="lG">Live</span>
                    </a> to organise your events. To sign up and organise your own event(s) click on the orange 'Event Organiser
                    Sign Up' button under the sign in button.
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

You can follow the instructions in the email or continue to follow this tutorial.

Everyone attending the event uses the same login details to access Checkpoint Live. For example the email above states that the username is: **exampleUser** and the password is: **0A0T9g**

You enter this information into the Checkpoint Live homepage.

<div class="row">
  <div class="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-4">
    <img  src="https://github.com/ARChilton/checkpoint-live-blog/blob/Develop/src/img/log-in-screen.png?raw=true" alt="Checkpoint Live log in screen"></img>
  </div>
</div>

## How to select your checkpoint or base
<a name="selectingCheckpoint"></a>

 The next page you will see is your event's homepage. It will look something like this:

The first thing to do is enter your name in the name field. Your name is attributed to every log entry you create in Checkpoint Live. Allowing the administrative team to know not only where was a participant/team last seen but by whom.

Next you select your checkpoint. This is achieved in one of two ways, dependant on the security for the event.

You might see a drop-down list of checkpoints. In which case select your checkpoint and click 'Go to checkpoint'. Otherwise you will see a pass-code field. Here you enter the pass-code given to you by the event organisers. If you received an email like the one above you will find the pass-code in there too. In our example the pass-code is: **sheep**.

(_Note: This pass-code is case sensitive_)

![No passcode image of the Checkpoint Live event's homepage] ![Passcode entry for Checkpoint Live's event homepage]

## How to enter information into Checkpoint Live
<a name="enteringInformation"></a>

Having selected your checkpoint/base. You will see a simple form to enter whenever a participant/team comes to your checkpoint.

This might vary dependant on what information your event's admin team need to keep track of. The example below shows every field you might see.

![Checkpoint page to capture information about the participants seen, to relay this information to the administrative team for the event.]


