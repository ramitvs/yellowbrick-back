<style>

.hooper-slide {
  flex-shrink: 0;
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
}
.hooper-progress {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 4px;
  background-color: #efefef;
}
.hooper-progress-inner {
  height: 100%;
  background-color: #4285f4;
  transition: 300ms;
}
.hooper-pagination {
  position: absolute;
  bottom: 0;
  right: 50%;
  transform: translateX(50%);
  display: flex;
  padding: 5px 10px;
}
.hooper-indicators {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}
    .hooper-indicator:hover, .hooper-indicator.is-active {
        background-color: #ffcd32;
    }
    .pt-12 {
        padding: 25px;
    }
    .hooper-indicator {
        height: 12px;
        width: 12px;
        border-radius: 50%;
        display: inline-block;
        margin: 0 4px;
        border: none;
        padding: 0;
        background-color: white;
        cursor: pointer;
    }
.hooper-pagination.is-vertical {
  bottom: auto;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
.hooper-pagination.is-vertical .hooper-indicators {
  flex-direction: column;
}
.hooper-pagination.is-vertical .hooper-indicator {
  width: 6px;
}
.hooper-next,
.hooper-prev {
  background-color: transparent;
  border: none;
  padding: 1em;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
.hooper-next.is-disabled,
.hooper-prev.is-disabled {
  opacity: 0.3;
  cursor: not-allowed;
}
.hooper-next {
  right: 0;
}
.hooper-prev {
  left: 0;
}
.hooper-navigation.is-vertical .hooper-next {
  top: auto;
  bottom: 0;
  transform: initial;
}
.hooper-navigation.is-vertical .hooper-prev {
  top: 0;
  bottom: auto;
  right: 0;
  left: auto;
  transform: initial;
}
.hooper-navigation.is-rtl .hooper-prev {
  left: auto;
  right: 0;
}
.hooper-navigation.is-rtl .hooper-next {
  right: auto;
  left: 0;
}
.hooper {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 200px;
}
.hooper * {
  box-sizing: border-box;
}
.hooper-list {
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.hooper-track {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.hooper.is-vertical .hooper-track {
  flex-direction: column;
  height: 200px;
}

.hooper.is-rtl {
  direction: rtl;
}

.hooper-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.arrow-right {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  @apply text-teal;
  transform: rotate(45deg);
}
.arrow-right:after,
.arrow-right:before {
  content: "";
  box-sizing: border-box;
}
.arrow-right {
  width: 14px;
  height: 14px;
  border-width: 2px 2px 0 0;
  border-style: solid;
  @apply border-teal;
  margin: 7px;
}
.arrow-right:before {
  right: 0;
  top: -1px;
  position: absolute;
  height: 2px;
  box-shadow: inset 0 0 0 32px;
  transform: rotate(-45deg);
  width: 18px;
  transform-origin: right top;
}

.hooper {
  height: auto;
}
.hooper-slide {
  @apply text-white py-16 h-full;
}
.slide-prev {
  width: 22px;
  height: 100px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%) translateX(0);
  left: -30px;
  transition: .2s transform ease-in-out;
  &:hover {
    transform: translateY(-50%) translateX(-5px);
  }
}
.slide-next {
  width: 22px;
  height: 100px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%) translateX(0);
  right: -30px;
  transition: .2s transform ease-in-out;
  &:hover {
    transform: translateY(-50%) translateX(5px);
  }
}


</style>

<template>
  <div class="z-50 relative">
      <button class="slide-prev" @click.prevent="slidePrev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.93 98.75"><path d="M20.07,0l1.86.76L2.08,49.38,21.93,98l-1.86.75-20-49a1.08,1.08,0,0,1,0-.75Z" style="fill:#fff"/></svg></button>
      <button class="slide-next" @click.prevent="slideNext"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.93 98.75"><path d="M1.85,98.75,0,98,19.85,49.38,0,.76,1.85,0l20,49a1,1,0,0,1,0,.76Z" style="fill:#fff"/></svg></button>
      <hooper ref="carousel" @slide="updateCarousel">
        <slide>
          <div class="flex flex-col md:flex-row items-center px-8 py-12 bg-gray-800">
            <img src="/uploads/images/customers/white/teoco.svg" class="w-full md:w-1/4" />
            <p class="rfs-text-2xl mb-1 pl-0 md:pl-12 text-center">"The power of Yellowbrick, combined with our deep knowledge of the data and proprietary algorithms, will produce insights that were impossible before.”<br><span class="rfs-text-base text-gray-200">- Atul Jain, Chairman & CEO</span></p>
          </div>
        </slide>
        <slide>
          <div class="flex flex-col md:flex-row items-center px-8 py-12 bg-gray-800">
            <img src="/uploads/images/customers/white/lexisnexis.svg" class="w-full md:w-1/4" />
            <p class="rfs-text-2xl mb-1 pl-0 md:pl-12 text-center">"Following extensive testing of data warehouses and Hadoop-based solutions, we found that Yellowbrick provided superior performance."<br><span class="rfs-text-base text-gray-200">- Matthias Baumhof, CTO</span></p>
          </div>
        </slide>
        <slide>
          <div class="flex flex-col md:flex-row items-center px-8 py-12 bg-gray-800">
            <img src="/uploads/images/customers/white/clarity.svg" class="w-full md:w-1/4" />
            <p class="rfs-text-2xl mb-1 pl-0 md:pl-12 text-center">"From the time we first had Yellowbrick, we were able to load billions of rows in minutes."<br><span class="rfs-text-base text-gray-200">- Wes Daniels, COO</span></p>
          </div>
        </slide>
        <slide>
          <div class="flex flex-col md:flex-row items-center px-8 py-12 bg-gray-800">
            <img src="/uploads/images/customers/white/overstock.svg" class="w-full md:w-1/4" />
            <p class="rfs-text-2xl mb-1 pl-0 md:pl-12 text-center">"Yellowbrick enables Overstock data scientists to operate at the speed of thought-- for the first time ever, they can query all data on-demand.” <br><span class="rfs-text-base text-gray-200">- JP Knab, CMO</span></p>
          </div>
        </slide>
        <slide>
          <div class="flex flex-col md:flex-row items-center px-8 py-12 bg-gray-800">
            <img src="/uploads/images/customers/white/symphony.svg" class="w-full md:w-1/4" />
            <p class="rfs-text-2xl mb-1 pl-0 md:pl-12 text-center">"It’s a big benefit to customers—and a big win for us—when we tell them they’ll get 10X more data accuracy and 2X performance gain. Our largest data set is about 60TB, which Yellowbrick is handling with ease.”<br><span class="rfs-text-base text-gray-200">- Nigel Pratt, SVP Development</span></p>
          </div>
        </slide>
        <slide>
          <div class="flex flex-col md:flex-row items-center px-8 py-12 bg-gray-800">
            <img src="/uploads/images/customers/white/catalina.svg" class="w-full md:w-1/4" />
            <p class="rfs-text-2xl mb-1 pl-0 md:pl-12 text-center">"The biggest benefit that we've seen from our move to Yellowbrick is performance--our queries actually run to completion instead of getting killed. And we get full utilization of the box 24x7. ”<br><span class="rfs-text-base text-gray-200">- Aaron Augustine, Executive Director of Data Science</span></p>
          </div>
        </slide>

        <!-- <hooper-navigation slot="hooper-addons"></hooper-navigation> -->
      </hooper>
      </div>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper';
//import 'hooper/dist/hooper.css';

export default {
  components: {
    Hooper,
    Slide,
    HooperNavigation
  },
  data () {
    return {
      carouselData: 0
    }
  },
  watch: {
    carouselData () {
      this.$refs.carousel.slideTo(this.carouselData);
    }
  },
  methods: {
    slidePrev() {
      this.$refs.carousel.slidePrev();
    },
    slideNext() {
      this.$refs.carousel.slideNext();
    },
    updateCarousel(payload) {
      this.myCarouselData = payload.currentSlide;
    }
  }
}
</script>