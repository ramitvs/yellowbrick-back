<style scoped>
.hero {
  background-color: #fff;
  background-size: cover;
  background-position: center center;
  z-index: 1;
}
.white-pattern {
  background-image: url(/uploads/images/octo-light.svg);
  background-size: cover;
  background-position: center center;
  z-index: 1;
}
.dark-pattern {
  background-image: url(/uploads/images/octo-dark.svg);
  background-size: cover;
  background-position: center center;
  z-index: 1;
}

.predictability-bg {
  background-image: url(/uploads/images/predictability-bg.svg);
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: 50%;
}

.dk-bg .mktoForm .mktoFormRow .mktoLabel {
	color: #ffffff !important;
}

.float-form-event {
  @apply relative p-12 shadow-lg;
  &:before {
    content: '';
    @apply absolute top-0 bottom-0 left-0 right-0 opacity-100 bg-gray-500;
    z-index: -1;
  }
	& .mktoForm {
    z-index: 10;
    margin-top: .5rem !important;
    & .mktoFormRow {
      & .mktoLabel {
        color: #ffcd32!important;
      }
    }
  }
}

.parallelogram {
  @apply relative -ml-12 pt-6;
  &:before {
    content: '';
    @apply bg-yellow1 absolute bottom-0 left-0 h-full w-full z-0;
    transform: skew(-30deg);
  }
  &:after {
    content: '';
    @apply bg-yellow3 absolute h-full w-full;
    z-index: -1;
    top: 8px;
    right: -8px;
    transform: skew(-30deg);
  }
}

.yeellow {
	fill: none;
  stroke-dashoffset: 0;
  stroke-dasharray: 200;
	animation: clean 12s infinite linear;
}

.bleuu-solid-stroke {
	fill: none;
  stroke-dashoffset: 0;
  stroke-dasharray: 500;
	animation: clean 10s infinite linear;
}

.bleuu-stroked {
  stroke-dashoffset: 0;
  stroke-dasharray: 5;
	fill: none;
}

.white-stroked {
  stroke-dashoffset: 0;
  stroke-dasharray: 5;
	fill: none;
}

@keyframes dash {
	to {
		stroke-dashoffset: 500;
	}
}

@keyframes clean {
	from {
		stroke-dashoffset: 0;
	}
	to {
		stroke-dashoffset: 4000;
	}
}

.image-bio {
  position: relative;
  & .mini-bio {
    transition: opacity .2s ease;
    @apply opacity-0 absolute top-0 left-0 w-full h-full text-black flex flex-col justify-center p-4 text-left bg-yellow1;
  }
  &:hover {
    & .mini-bio {
      opacity: 1;
    }
  }
}

.animated-bg {
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
}

</style>

<template>
  <Layout>
    <section class="hero flex px-6 xl:px-0 relative z-10">
      <svg class="animated-bg h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1960 711">
        <path class="bleuu-stroked" d="M203.72,0l87.13,150.9" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="bleuu-stroked" d="M332,28H221.23" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="bleuu-stroked" d="M220.05,28h-.18" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="bleuu-solid-stroke" d="M162.54,77.61l.09.15" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="bleuu-stroked" d="M163.81,79.82l94.28,163.29,106,.26L292.22,366" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="bleuu-solid-stroke" d="M201.19,77.61H201" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="bleuu-stroked" d="M198.59,77.61H114.81l-43.1,74.47H.58" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="bleuu-stroked" d="M333.25,328.07,297,390.88" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="bleuu-solid-stroke" d="M3.24,673.26l.09.15h.18" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="bleuu-stroked" d="M5.91,673.41H153L262.71,482.83,196.35,365.4.9,365.56" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="bleuu-stroked" d="M16.23,711.68l17.91-31" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="bleuu-solid-stroke" d="M.44,416.89h33.1" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="bleuu-solid-stroke" d="M645.06,416.89H282L215.09,301,239,259.66" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="bleuu-solid-stroke" d="M248.53,193.46l66.89,115.85h191.1l62.11,107.58" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="bleuu-solid-stroke" d="M253.31,135.53H62.21L.58,28.79" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="bleuu-solid-stroke" d="M573.4,193.46,506.52,309.31" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="bleuu-solid-stroke" d="M348.86,632l57.33-99.3h105.1l9.56-16.55H301.08L210.31,359h38.22" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="bleuu-solid-stroke" d="M38.32,574.11,0,640.45" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="bleuu-solid-stroke" d="M673.73,632H282l-46,79.64" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="bleuu-solid-stroke" d="M552.12,710.54,597.29,632" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="bleuu-solid-stroke" d="M219.87,623.76,191.2,574.11H133.87l57.33-99.3-52.55-91" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="white-stroked" d="M127.82,199.52,43.19,52.63l31-53.77" fill="none" stroke="#d3dadd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="white-stroked" d="M431.35,162.57l17.83,30.89" fill="none" stroke="#d3dadd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="white-stroked" d="M156,0l30.48,52.78H261.5" fill="none" stroke="#d3dadd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="white-stroked" d="M35.34,0,.79,59.86" fill="none" stroke="#d3dadd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="white" d="M348.86,565.84l.09-.16" fill="none" stroke="#d3dadd" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="white-stroked" d="M350.14,563.63l37.06-64h85.87l38.22-66.2h66.88L687.37,244.3" fill="none" stroke="#d3dadd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="white-stroked" d="M11,356.69,32.84,318.8" fill="none" stroke="#d3dadd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="white-stroked" d="M465.74,193.46H353.63l86,149H667.57" fill="none" stroke="#d3dadd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="white-stroked" d="M127.82,480.88l-26.71-46.26" fill="none" stroke="#d3dadd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="white-stroked" d="M442.18,702.52h206.3" fill="none" stroke="#d3dadd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="bleuu-stroked" d="M174.17,213.61,145,163" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="bleuu-stroked" d="M548.57,415.25l-13.38-23.19h-86L377.34,267.93H489" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="bleuu-stroked" d="M130.9,0l-40,69.33H.58" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="bleuu-stroked" d="M65.55,361.45,105,293.11,49.46,196.2" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="bleuu-stroked" d="M532.86,710.54l35.91-61.95H699.34" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="bleuu-stroked" d="M524.78,681.69H434.52l-17.23,30.43" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="white-stroked" d="M326.94,180.32,272.8,85.23,322,0" fill="none" stroke="#d3dadd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="white-stroked" d="M396.27,334.76l-18.75,32.48h-35" fill="none" stroke="#d3dadd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="white-stroked" d="M142.66,284.48H0" fill="none" stroke="#d3dadd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="white-stroked" d="M174.82,264.39l92.77,160.68-47.72,82.84h-115L76.56,557.56H0" fill="none" stroke="#d3dadd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="white-stroked" d="M76.56,557.56l39,66.92h25.74" fill="none" stroke="#d3dadd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="white-stroked" d="M397.33,690h96.53" fill="none" stroke="#d3dadd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="white-stroked" d="M265.67,709.93l25.86-44.79H511.29l62.44-107.58H691.51" fill="none" stroke="#d3dadd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="white" d="M301.08,549.29l-.35.62" fill="none" stroke="#d3dadd" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="white-stroked" d="M298.36,554l-91.28,158.1" fill="none" stroke="#d3dadd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="white-stroked" d="M418.45,487.78l74,127.71H540" fill="none" stroke="#d3dadd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="yeellow" d="M162.54,342.41H.44" fill="none" stroke="#ffcd32" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="yeellow" d="M339.3,168.63,291.53,85.88l28.67,0" fill="none" stroke="#ffcd32" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="yeellow" d="M520.34,168.63H282" fill="none" stroke="#ffcd32" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="yeellow" d="M110,400.34,43.1,284.48l33.44-57.92h66.89l33.44-57.92h76.44L277.2,210" fill="none" stroke="#ffcd32" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="yeellow" d="M102.4-.28,67,61.06l52.55,91" fill="none" stroke="#ffcd32" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="yeellow" d="M301.08,450H501.74l15.19,25.35,56.47-.53" fill="none" stroke="#ffcd32" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="yeellow" d="M647.73,284.48H463.52L401.41,392.06H334.53l-76.44,132.4" fill="none" stroke="#ffcd32" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="yeellow" d="M38.32,706.51H0" fill="none" stroke="#ffcd32" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="yeellow" d="M2.77,400.34H186.42L334.53,656.87h66.88L432,709.93" fill="none" stroke="#ffcd32" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="yeellow" d="M.1,590.66l47.78-82.75L19.21,458.26H.44" fill="none" stroke="#ffcd32" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="yeellow" d="M277.2,557.56l-52.56,91H5.77" fill="none" stroke="#ffcd32" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="yeellow" d="M74.22,710.54,110,648.59" fill="none" stroke="#ffcd32" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="yeellow" d="M301.08,598.94H501.74l90.77-157.23H669" fill="none" stroke="#ffcd32" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="yeellow" d="M511.29,582.39h95.56l47.77,82.75" fill="none" stroke="#ffcd32" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="bleuu-stroked" d="M1754.19,710.33l-87.12-150.9" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="bleuu-stroked" d="M1626,682.37h110.74" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="bleuu-stroked" d="M1737.87,682.37h.18" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="bleuu-solid-stroke" d="M1795.38,632.72l-.09-.15" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="bleuu-stroked" d="M1794.11,630.51l-94.28-163.29-106-.26,71.89-122.67" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="bleuu-solid-stroke" d="M1756.73,632.72h.18" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="bleuu-stroked" d="M1759.33,632.72h83.78l43.1-74.47h71.13" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="bleuu-stroked" d="M1624.67,382.26l36.26-62.81" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="bleuu-solid-stroke" d="M1954.68,37.07l-.09-.15h-.18" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="bleuu-stroked" d="M1952,36.92H1804.93L1695.21,227.5l66.36,117.43,195.44-.16" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="bleuu-stroked" d="M1941.69-1.35l-17.91,31" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="bleuu-solid-stroke" d="M1957.48,293.44h-33.1" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="bleuu-solid-stroke" d="M1312.86,293.44h363.08l66.89,115.86-23.89,41.37" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="bleuu-solid-stroke" d="M1709.39,516.87,1642.5,401H1451.4l-62.11-107.58" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="bleuu-solid-stroke" d="M1704.61,574.8h191.1l61.63,106.74" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="bleuu-solid-stroke" d="M1384.52,516.87,1451.4,401" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="bleuu-solid-stroke" d="M1609.06,78.29l-57.33,99.3h-105.1l-9.56,16.55h219.77l90.77,157.23h-38.22" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="bleuu-solid-stroke" d="M1919.6,136.22l38.3-66.34" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="bleuu-solid-stroke" d="M1284.19,78.29h391.75l46-79.64" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="bleuu-solid-stroke" d="M1405.8-.21l-45.17,78.5" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="bleuu-solid-stroke" d="M1738.05,86.57l28.67,49.65h57.33l-57.33,99.3,52.55,91" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="white-stroked" d="M1830.1,510.81l84.63,146.89-31,53.77" fill="none" stroke="#d3dadd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="white-stroked" d="M1526.57,547.76l-17.84-30.89" fill="none" stroke="#d3dadd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="white-stroked" d="M1802,710.33l-30.48-52.78h-75.07" fill="none" stroke="#d3dadd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="white-stroked" d="M1922.57,710.33l34.56-59.86" fill="none" stroke="#d3dadd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="white" d="M1609.06,144.49l-.09.16" fill="none" stroke="#d3dadd" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="white-stroked" d="M1607.78,146.7l-37.07,64h-85.86l-38.22,66.2h-66.89L1270.55,466" fill="none" stroke="#d3dadd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="white-stroked" d="M1947,353.64l-21.87,37.89" fill="none" stroke="#d3dadd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="white-stroked" d="M1492.18,516.87h112.11l-86-148.95H1290.35" fill="none" stroke="#d3dadd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="white-stroked" d="M1830.1,229.45l26.71,46.26" fill="none" stroke="#d3dadd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="white-stroked" d="M1515.74,7.81h-206.3" fill="none" stroke="#d3dadd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="bleuu-stroked" d="M1783.75,496.72l29.21,50.6" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="bleuu-stroked" d="M1409.35,295.08l13.38,23.19h86l71.85,124.13H1468.91" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="bleuu-stroked" d="M1827,710.33l40-69.33h90.29" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="bleuu-stroked" d="M1892.37,348.88l-39.46,68.34,55.55,96.91" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="bleuu-stroked" d="M1425.06-.21l-35.92,62H1258.58" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="bleuu-stroked" d="M1433.14,28.64h90.26l17.23-30.43" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="white-stroked" d="M1631,530l54.14,95.09-49.2,85.23" fill="none" stroke="#d3dadd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="white-stroked" d="M1561.65,375.57l18.75-32.48h35" fill="none" stroke="#d3dadd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="white-stroked" d="M1815.26,425.85h142.66" fill="none" stroke="#d3dadd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="white-stroked" d="M1783.1,445.94l-92.77-160.68,47.72-82.84h115l28.34-49.65h76.55" fill="none" stroke="#d3dadd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="white-stroked" d="M1881.35,152.77,1842.4,85.85h-25.74" fill="none" stroke="#d3dadd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="white-stroked" d="M1560.59,20.37h-96.53" fill="none" stroke="#d3dadd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="white-stroked" d="M1692.25.4l-25.86,44.79H1446.63l-62.44,107.58H1266.41" fill="none" stroke="#d3dadd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="white" d="M1656.84,161l.35-.62" fill="none" stroke="#d3dadd" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="white-stroked" d="M1659.56,156.31l91.28-158.1" fill="none" stroke="#d3dadd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="white-stroked" d="M1539.47,222.55l-74-127.71H1418" fill="none" stroke="#d3dadd" stroke-linecap="round" stroke-linejoin="round" />
        <path class="yeellow" d="M1795.38,367.92h162.1" fill="none" stroke="#ffcd32" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="yeellow" d="M1618.62,541.7l47.77,82.75-28.67,0" fill="none" stroke="#ffcd32" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="yeellow" d="M1437.58,541.7H1676" fill="none" stroke="#ffcd32" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="yeellow" d="M1847.94,310l66.88,115.86-33.44,57.92h-66.89l-33.44,57.92h-76.44l-23.89-41.38" fill="none" stroke="#ffcd32" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="yeellow" d="M1855.52,710.61l35.41-61.34-52.55-91" fill="none" stroke="#ffcd32" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="yeellow" d="M1656.84,260.34H1456.18L1441,235l-56.47.53" fill="none" stroke="#ffcd32" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="yeellow" d="M1310.19,425.85H1494.4l62.11-107.58h66.88l76.44-132.4" fill="none" stroke="#ffcd32" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="yeellow" d="M1919.6,3.82h38.32" fill="none" stroke="#ffcd32" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="yeellow" d="M1955.15,310H1771.5L1623.39,53.46h-66.88L1525.88.4" fill="none" stroke="#ffcd32" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="yeellow" d="M1957.82,119.67,1910,202.42l28.67,49.65h18.77" fill="none" stroke="#ffcd32" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="yeellow" d="M1680.72,152.77l52.56-91h218.87" fill="none" stroke="#ffcd32" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="yeellow" d="M1883.7-.21l-35.77,62" fill="none" stroke="#ffcd32" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="yeellow" d="M1656.84,111.39H1456.18l-90.77,157.23H1289" fill="none" stroke="#ffcd32" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="yeellow" d="M1446.63,127.94h-95.56L1303.3,45.19" fill="none" stroke="#ffcd32" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <div class="flex flex-col max-w-1200 w-full py-10 md:pt-20 md:pb-40 mx-auto relative z-20">
        <div class="text-center mx-auto border-8 border-teal py-12 px-16">
          <h1 class="rfs-text-10xl text-teal font-bold mx-auto px-2 py-4 bg-white -mt-32 mb-0" style="line-height: .9;">ANSWERS</h1>
          <h2 class="rfs-text-5xl text-gray-700 font-bold leading-none mb-0" style="line-height: .9;">For a World That Can't Wait</h2>
        </div>
        <!-- <div class="rfs-text-4xl text-gray-500 font-medium mx-auto mt-6 text-center">Yellowbrick Virtual Event</div> -->
        <div class="rfs-text-6xl mt-6 text-gray-700 font-bold mx-auto text-center">9.29.20</div>

        <div class="mx-auto">
          <button v-scroll-to="'#virtual'" class="button button-lg yellow mt-8" @click="expanded = !expanded">{{ expanded ? `Close Form` : `Register Today` }}</button>
        </div>

        <transition-expand>
          <div v-show="expanded">
            <div class="w-full md:w-1/2 pl-0 md:pl-8 z-40 relative mx-auto" id="virtual">
              <div class="float-form-event z-40">
                <div class="rfs-text-4xl font-medium text-white leading-none">Reserve Your Spot</div>
                <BaseHubspot id="f605d3b8-4faa-4dc5-862c-5fafc99bb202" class="text-gray-700"/>
              </div>
            </div>
					</div>
        </transition-expand>
      </div>
		</section>

    <section class="bg-gray-200 px-6 xl:px-0">
      <div class="flex flex-col max-w-1200 w-full mx-auto relative z-10 justify-center">
        
        <Countdown class="rounded-full bg-white shadow-xl px-20 py-10 absolute self-center" />

      </div>
    </section>


		<section class="bg-gray-light py-8 sm:pt-32 sm:pb-10 z-10 px-6 xl:px-0">
			<div class="flex flex-col max-w-1200 w-full mx-auto relative">
        <h2 class="accent-heading">Why Attend?</h2>
				<div class="flex flex-col md:flex-row -mx-10">
          <div class="w-full md:w-1/3 p-4 px-10">
            <img src="~@/assets/images/icons/two-hours.svg" alt="" class="w-5/12 mb-8" />
            <h3>Two Hours</h3>
            <p>With a two hour, fast-paced runtime, this event is filled with non-stop action, just for you!</p>
          </div>
          <div class="w-full md:w-1/3 p-4 px-10">
            <img src="~@/assets/images/icons/podium-speaker.svg" alt="" class="w-5/12 mb-8" />
            <h3>Six Speakers</h3>
            <p>Yellowbrick leadership, industry experts, and real customers sharing their success stories.</p>
          </div>
          <div class="w-full md:w-1/3 p-4 px-10">
            <img src="~@/assets/images/icons/pure-knowledge.svg" alt="" class="w-5/12 mb-8" />
            <h3>Pure Knowledge</h3>
            <p>Mind-blowing numbers and real-life examples will change the way you think about your data.</p>
          </div>
        </div>

      </div>
    </section>


		<section class="white-bg white-pattern py-8 sm:py-16 z-10 px-6 xl:px-0">
			<div class="flex flex-col md:flex-row max-w-1200 w-full mx-auto relative">
        
        <div class="w-full md:w-3/4 py-4">
          <h2 class="accent-heading">What's in Store?</h2>
          <p class="rfs-text-lg">Join Yellowbrick for a virtual experience and discover how companies like yours are meeting today’s unique analytics challenges and implementing hybrid-cloud analytics systems that give them immediate insights into their business performance—in some cases getting answers to questions they never thought they could ask. At this one-of-a-kind online event, you’ll hear from:</p>
          <div class="rfs-text-xl flex flex-row flex-wrap">
            <div class="border-l-4 border-yellow1 w-full px-6 m-0 my-6">Businesses who have transformed their legacy analytics systems into faster-answer systems</div>
            <div class="border-l-4 border-yellow1 w-full px-6 m-0 my-6">Analysts with deep insight into analytics tools and trends for hybrid cloud</div>
            <div class="border-l-4 border-yellow1 w-full px-6 m-0 my-6">Yellowbrick CEO, Neil Carson, with an innovative take on high-performance, hybrid-cloud analytics</div>
            <div class="border-l-4 border-yellow1 w-full px-6 m-0 my-6">Rebekah D. Jones, American whistleblower and geographer specializing in data science and tracking COVID-19</div>
          </div>
        </div>

      </div>
    </section>


		<section class="dark-pattern bg-black py-8 sm:py-16 z-10 px-6 xl:px-0">
			<div class="flex flex-col max-w-1200 w-full mx-auto relative">


        <div class="w-full text-white py-12">
          <h2 class="accent-heading rfs-text-5xl font-semibold">Speakers</h2>
          <div class="flex flex-col md:flex-row flex-wrap text-center -mx-10">
            <div class="w-full md:w-1/3 px-10 py-4">
              <div class="image-bio">
                <img src="/uploads/neil-bw.jpg" alt="Neil Carson" class="colorized w-full mx-auto border-4 border-yellow1" />
                <div class="mini-bio">
                  <h6 class="self-start">Neil Carson</h6>
                  <p class="self-start mb-0">Previously, Neil served as Executive Vice President and Chief Technology Officer at Fusion-io where he was responsible for company strategy, product definitions, roadmaps, corporate development and strategic partnerships and key customer acquisitions.</p>
                  <div class="flex mt-auto justify-between">
                    <span class="">LinkedIn Twitter</span>
                    <span class="">Mail</span>
                  </div>
                </div>
              </div>
              <h5 class="mb-0 mt-8">Neil Carson</h5>
              <h6 class="text-teal">CEO, Yellowbrick</h6>
            </div>
            <div class="w-full md:w-1/3 px-10 py-4">
              <div class="image-bio">
                <img src="/uploads/jeff-bw.jpg" alt="Jeff Spicer" class="colorized w-full mx-auto border-4 border-yellow1" />
                <div class="mini-bio">
                  <h6 class="self-start">Jeff Spicer</h6>
                  <p class="self-start mb-0">Jeff has more than two decades of experience building strong brands that resonate with businesses and leading marketing teams that drive positive results. </p>
                  <div class="flex mt-auto justify-between">
                    <span class="">LinkedIn Twitter</span>
                    <span class="">Mail</span>
                  </div>
                </div>
              </div>
              <h5 class="mb-0 mt-8">Jeff Spicer</h5>
              <h6 class="text-teal">CMO, Yellowbrick</h6>
            </div>
            <div class="w-full md:w-1/3 px-10 py-4">
              <div class="image-bio">
                <img src="/uploads/brian-bw.jpg" alt="Brian Bulkowski" class="colorized w-full mx-auto border-4 border-yellow1" />
                <div class="mini-bio">
                  <h6 class="self-start">Brian Bulkowski</h6>
                  <p class="self-start mb-0">Brian has deep industry expertise in distributed systems, databases, Flash storage, and high performance networking. At Yellowbrick, he is in charge of both long term technical strategy and product direction.</p>
                  <div class="flex mt-auto justify-between">
                    <span class="">LinkedIn Twitter</span>
                    <span class="">Mail</span>
                  </div>
                </div>
              </div>
              <h5 class="mb-0 mt-8">Brian Bulkowski</h5>
              <h6 class="text-teal">CTO, Yellowbrick</h6>
            </div>
            <div class="w-full md:w-1/3 px-10 py-4">
              <div class="image-bio">
                <img src="/uploads/profile-woman1.jpg" alt="Jenna Myers" class="colorized w-full mx-auto border-4 border-yellow1" />
                <div class="mini-bio">
                  <h6 class="self-start">Jenna Myers</h6>
                  <p class="self-start mb-0">Jenna has deep industry expertise in distributed systems, databases, Flash storage, and high performance networking. At Yellowbrick, he is in charge of both long term technical strategy and product direction.</p>
                  <div class="flex mt-auto justify-between">
                    <span class="">LinkedIn Twitter</span>
                    <span class="">Mail</span>
                  </div>
                </div>
              </div>
              <h5 class="mb-0 mt-8">Jenna Myers</h5>
              <h6 class="text-teal">CEO, Data Rise</h6>
            </div>
            <div class="w-full md:w-1/3 px-10 py-4">
              <div class="image-bio">
                <img src="/uploads/profile-man2.jpg" alt="Igor Sykorski" class="colorized w-full mx-auto border-4 border-yellow1" />
                <div class="mini-bio">
                  <h6 class="self-start">Igor Sykorski</h6>
                  <p class="self-start mb-0">Igor has deep industry expertise in distributed systems, databases, Flash storage, and high performance networking. At Yellowbrick, he is in charge of both long term technical strategy and product direction.</p>
                  <div class="flex mt-auto justify-between">
                    <span class="">LinkedIn Twitter</span>
                    <span class="">Mail</span>
                  </div>
                </div>
              </div>
              <h5 class="mb-0 mt-8">Igor Sykorski</h5>
              <h6 class="text-teal">Data Architect, Google</h6>
            </div>
            <div class="w-full md:w-1/3 px-10 py-4">
              <div class="image-bio">
                <img src="/uploads/profile-woman2.jpg" alt="Berryessa Montrose" class="colorized w-full mx-auto border-4 border-yellow1" />
                <div class="mini-bio">
                  <h6 class="self-start">Berryessa Montrose</h6>
                  <p class="self-start mb-0">Berryessa has deep industry expertise in distributed systems, databases, Flash storage, and high performance networking. At Yellowbrick, he is in charge of both long term technical strategy and product direction.</p>
                  <div class="flex mt-auto justify-between">
                    <span class="">LinkedIn Twitter</span>
                    <span class="">Mail</span>
                  </div>
                </div>
              </div>
              <h5 class="mb-0 mt-8">Berryessa Montrose</h5>
              <h6 class="text-teal">CIO, Leviathan Networks</h6>
            </div>
          </div>
        </div>
      </div>
    </section>


		<section class="dark-pattern bg-gray-600 py-8 sm:py-16 z-10 px-6 xl:px-0">
			<div class="flex flex-col max-w-1200 w-full mx-auto relative">


        <div class="w-full text-white py-12">
          <h2 class="accent-heading rfs-text-5xl font-semibold">Agenda</h2>
          <div class="max-w-1200 w-full mx-auto">
            <table class="table-auto w-full">
              <thead>
                <tr>
                  <th class="text-yellow1 p-2 rfs-text-xl font-medium text-left">Time</th>
                  <th class="text-yellow1 p-2 rfs-text-xl font-medium text-left pl-10">Speaker/Topic</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="align-top rfs-text-2xl px-2 md:px-4 py-4"><div class="border-r-4 border-yellow1">9:00AM</div></td>
                  <td class="align-top font-light rfs-text-xl text-white rfs-text-3xl pl-10 pr-2 py-2">Intro/Welcome<p class="rfs-text-xl leading-none text-teal font-medium">Jeff Spicer</p></td>
                </tr>
                <tr>
                  <td class="align-top rfs-text-2xl px-2 md:px-4 py-4"><div class="border-r-4 border-yellow1">9:05AM</div></td>
                  <td class="align-top font-light rfs-text-xl text-white rfs-text-3xl pl-10 pr-2 py-2">Challenge the Data Warehouse Status Quo<p class="rfs-text-xl leading-none text-teal font-medium">Neil Carson</p></td>
                </tr>
                <tr>
                  <td class="align-top rfs-text-2xl px-2 md:px-4 py-4"><div class="border-r-4 border-yellow1">9:25AM</div></td>
                  <td class="align-top font-light rfs-text-xl text-white rfs-text-3xl pl-10 pr-2 py-2">Investing in Analytics During Disruption<p class="rfs-text-xl leading-none text-teal font-medium">Igor Sykorski</p></td>
                </tr>
                <tr>
                  <td class="align-top rfs-text-2xl px-2 md:px-4 py-4"><div class="border-r-4 border-yellow1">9:50AM</div></td>
                  <td class="align-top font-light rfs-text-xl text-white rfs-text-3xl pl-10 pr-2 py-2">Benefits of Hybrid/Multi-Cloud Approaches for Data Analytics<p class="rfs-text-xl leading-none text-teal font-medium">Berryessa Montrose</p></td>
                </tr>
                <tr>
                  <td class="align-top rfs-text-2xl px-2 md:px-4 py-4"><div class="border-r-4 border-yellow1">10:10AM</div></td>
                  <td class="align-top font-light rfs-text-xl text-white rfs-text-3xl pl-10 pr-2 py-2">Building the Best-of-Breed Data Analytics Cloud<p class="rfs-text-xl leading-none text-teal font-medium">Brian Bulkowski</p></td>
                </tr>
                <tr>
                  <td class="align-top rfs-text-2xl px-2 md:px-4 py-4"><div class="border-r-4 border-yellow1">10:40AM</div></td>
                  <td class="align-top font-light rfs-text-xl text-white rfs-text-3xl pl-10 pr-2 py-2">Why Accurate Data Matters<p class="rfs-text-xl leading-none text-teal font-medium">Megan Ayers</p></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="flex justify-center mt-16">
          <button class="button yellow" v-scroll-to="'#virtual'" @click="expanded = !expanded">Reserve Your Spot</button>
        </div>

			</div>
		</section>

		<section class="bg-black py-8 sm:py-16 z-10 px-6 xl:px-0">
			<div class="flex flex-col max-w-1200 w-full mx-auto relative text-white">
          <h2 class="accent-heading rfs-text-5xl font-semibold">Sponsors</h2>
          <div class="py-4 text-center">
            <span class="mx-auto w-auto inline-block py-3 px-8 border-2 border-white rfs-text-2xl text-white">Platinum Sponsors</span>
            <div class="flex flex-row flex-wrap">
              <img src="/uploads/partners-tableau.svg" alt="tableau" class="w-1/3 px-12" />
              <img src="/uploads/partners-sisense.svg" alt="sisense" class="w-1/3 px-12" />
              <img src="/uploads/partners-striim.svg" alt="striim" class="w-1/3 px-12" />
            </div>
          </div>
          <div class="py-4 text-center">
            <span class="mx-auto w-auto inline-block py-3 px-8 border-2 border-white rfs-text-2xl text-white">Gold</span>
            <div class="flex flex-row flex-wrap">
              <img src="/uploads/partners-virtusa.svg" alt="virtusa" class="w-1/4 px-12" />
              <img src="/uploads/partners-sotero.svg" alt="sotero" class="w-1/4 px-12" />
              <img src="/uploads/partners-truxton.svg" alt="truxton" class="w-1/4 px-12" />
              <img src="/uploads/partners-emtec.svg" alt="emtec" class="w-1/4 px-12" />
            </div>
          </div>
          <div class="py-4 text-center">
            <span class="mx-auto w-auto inline-block py-3 px-8 border-2 border-white rfs-text-2xl text-white">Silver</span>
            <div class="flex flex-row flex-wrap">
              <img src="/uploads/partners-vion.svg" alt="vion" class="w-1/5 px-12" />
              <img src="/uploads/partners-intellisoft.svg" alt="intellisoft" class="w-1/5 px-12" />
              <img src="/uploads/partners-powerbi.svg" alt="powerbi" class="w-1/5 px-12" />
              <img src="/uploads/partners-attunity.svg" alt="attunity" class="w-1/5 px-12" />
              <img src="/uploads/partners-denodo.svg" alt="denodo" class="w-1/5 px-12" />
            </div>
          </div>
			</div>
		</section>

    <section class="bg-yellow1 px-6 xl:px-0">
      <div class="max-w-1200 w-full py-12 mx-auto relative z-10">
        <div class="flex flex-row justify-center items-center">
          <h2 class="mb-0">Interested in Becoming a Sponsor?</h2>
          <g-link to="/sponsor/" class="button dark ml-5">Inquire Here</g-link>
        </div>
      </div>
    </section>


  </Layout>
</template>

<script>

import BaseHubspot from '~/components/BaseHubspot.vue'
import Layout from '~/layouts/EventLanding.vue'
import Countdown from '~/components/Countdown.vue'
import TransitionExpand from '~/components/TransitionExpand.vue'

export default {
  metaInfo: {
    title: 'Yellowbrick Virtual Event: Answers for a World That Can\'t Wait',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: 'Register to join this free virtual event to learn how Yellowbrick Hybrid Cloud Data Warehouse is leading the charge to speed up your data, save you money, and improve overall business processes.'
      },
      {
        key: 'og:description',
        name: 'og:description',
        content: 'Register to join this free virtual event to learn how Yellowbrick Hybrid Cloud Data Warehouse is leading the charge to speed up your data, save you money, and improve overall business processes.'
      },
      {
        key: 'twitter:description',
        name: 'twitter:description',
        content: 'Register to join this free virtual event to learn how Yellowbrick Hybrid Cloud Data Warehouse is leading the charge to speed up your data, save you money, and improve overall business processes.'
      },
      {
        key: 'og:image',
        name: 'og:image',
        content: 'https://www.yellowbrick.com/uploads/yellowbrick-answers-event.jpg'
      },
      {
        key: 'twitter:image',
        name: 'twitter:image',
        content: 'https://www.yellowbrick.com/uploads/yellowbrick-answers-event.jpg'
      }
    ]
  },
  components: {
    BaseHubspot,
    Layout,
    Countdown,
    TransitionExpand
  },
  data() {
    return {
      expanded: false,
    };
  }
};
</script>