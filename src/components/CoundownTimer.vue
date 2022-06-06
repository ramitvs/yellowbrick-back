<style scoped>
.countdown-timer {
  max-width: 320px;
  width: 100%;
  margin: 0 auto;
}
.number {
  font-weight: 600;
}
.countdown-timer
> .countdown-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  margin: 0 auto;
}

.countdown-wrapper
> .time-container {
  padding: 0 8px;
}

.chart {
  position: relative;
  display: inline-block;
  color: #999;
  font-size: 20px;
  text-align: center;
}

.chart 
figcaption {
  padding: 15px 25px;
  font-size: 2.5rem !important;
  color: #fff;
}

.chart
svg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: visible;
}

.outer {
  fill: transparent;
  stroke: #fff;
  stroke-width: 5;
  stroke-dasharray: 251;
  transform: translate(-50%, 149%) rotate(-89deg);
  transition: stroke-dashoffset 1s;
  -webkit-animation-play-state: running;
}

@media(min-width: 320px) {
  .countdown-timer {
    margin-top: 75px;
  }

  .countdown-wrapper
  > .time-container {
    padding: 0 0px;
  }
}
@media(min-width: 480px) {
  .countdown-timer {
    max-width: 560px;
  }
  .countdown-wrapper
  > .time-container {
    padding: 0 10px;
  }
}
@media(min-width: 768px) {
  .countdown-wrapper
  > .time-container {
    padding: 0 10px;
  }
  .countdown-timer {
    margin-top: 0;
  }
}
@media(min-width: 1140px) {
  .countdown-wrapper
  > .time-container {
    padding: 0 30px;
  }
}
</style>
<template>
  <div class="countdown-timer">
    <div class="countdown-wrapper" v-show ="statusType !== 'expired' && statusType !== 'running'">
      <div class="time-container day" v-if="!hideDays">
        <span class="number">
          <figure class="chart" :data-percent="this.dayPerc">
            <figcaption class="number">{{ days }}</figcaption>
            <svg width="100" height="100">
              <circle class="outer" cx="100" cy="100" r="40" :stroke-dashoffset="this.dayDashOffset" transform="rotate(-90, 95, 95)"/>
            </svg>
          </figure>
        </span>
        <div class="format text-white font-bold">{{ (days === 1) ? 'Day' : 'Days' }}</div>
      </div>
      <div class="time-container hour" v-if="!hideHours">
        <span class="number">
          <figure class="chart" :data-percent="0.5">
            <figcaption class="number">{{ hours }}</figcaption>
            <svg width="100" height="100">
              <circle class="outer" cx="100" cy="100" r="40" :stroke-dashoffset="this.hourDashOffset" transform="rotate(-90, 95, 95)"/>
            </svg>
          </figure>
        </span>
        <div class="format text-white font-bold">{{ (hours === 0 || hours === 1) ? 'Hour' : 'Hours' }}</div>
      </div>
      <div class="time-container min" v-if="!hideMinutes">
        <span class="number">
          <figure class="chart" :data-percent="this.minutePerc">
            <figcaption class="number">{{ minutes }}</figcaption>
            <svg width="100" height="100">
              <circle class="outer" cx="100" cy="100" r="40" :stroke-dashoffset="this.minuteDashOffset" transform="rotate(-90, 95, 95)"/>
            </svg>
          </figure>
        </span>
        <div class="format text-white font-bold">{{ (minutes === 0 || hours === 1) ? 'Minute' : 'Minutes' }}</div>
      </div>
      <div class="time-container sec" v-if="!hideSeconds">
        <span class="number">
          <figure class="chart" :data-percent="this.secondsPerc">
            <figcaption class="number">{{ seconds }}</figcaption>
            <svg width="100" height="100">
              <circle class="outer" cx="100" cy="100" r="40" :stroke-dashoffset="this.secondDashOffset" transform="rotate(-90, 95, 95)"/>
            </svg>
          </figure>
        </span>
        <div class="format text-white font-bold">{{ (seconds === 0 || seconds === 1) ? 'Second' : 'Seconds' }}</div>
      </div>
    </div>
    <div v-show="statusType !== 'upcoming'" class="message">{{ message }}</div>
  </div>
</template>
<script>
export default {
  props: ['starttime', 'endtime', 'trans', 'hideDays', 'hideHours', 'hideMinutes', 'hideSeconds'],
  data: function(){
    return{
      timer:"",
      wordString: {},
      start: "",
      end: "",
      interval: "",
      days:"",
      minutes:"",
      hours:"",
      seconds:"",
      message:"",
      statusType:"",
      statusText: "",
      dayPerc: 100,
      hourPerc: 100,
      minutePerc: 100,
      secondsPerc: 100,
      dayDashOffset: 0,
      hourDashOffset: 0,
      minuteDashOffset: 0,
      secondDashOffset: 0
    };
  },
  created: function () {
    this.wordString = JSON.parse(this.trans);
  },
  mounted() {
    this.start = new Date(this.starttime).getTime();
    this.end = new Date(this.endtime).getTime();
    // Update the count down every 1 second
    this.timerCount(this.start,this.end);
    this.interval = setInterval(() => {
        this.timerCount(this.start,this.end);
    }, 1000);
    // 1577
  },
  methods: {
    timerCount: function(start,end) {

      // Get todays date and time
      let now = new Date().getTime();
      // Find the distance between now an the count down date
      let distance = start - now;
      let passTime =  end - now;

      if (distance < 0 && passTime < 0) {
        this.message = this.wordString.expired;
        this.statusType = "expired";
        this.statusText = this.wordString.status.expired;
        clearInterval(this.interval);
        return;

      } else if (distance < 0 && passTime > 0){
        this.calcTime(passTime);
        this.message = this.wordString.running;
        this.statusType = "running";
        this.statusText = this.wordString.status.running;

      } else if ( distance > 0 && passTime > 0 ){
        this.calcTime(distance); 
        this.message = this.wordString.upcoming;
        this.statusType = "upcoming";
        this.statusText = this.wordString.status.upcoming;
      }
    },
    calcDayBar() {
      const { dayPerc } = this;
      const newCalc = Math.floor(dayPerc * 251);
      if(dayPerc === 0) {
        this.dayDashOffset = 0;
      } else {
        this.dayDashOffset = 251 - newCalc;
      }
    },
    calcHourBar() {
      const { hourPerc } = this;
      const newCalc = Math.floor(hourPerc * 251);
      if(hourPerc === 0) {
        this.hourDashOffset = 0;
      } else {
        this.hourDashOffset = 251 - newCalc;
      }
    },
    calcMinutesBar() {
      const { minutePerc } = this;
      const newCalc = Math.floor(minutePerc * 251);
      if(minutePerc === 0) {
        this.minuteDashOffset = 0;
      } else {
        this.minuteDashOffset = 251 - newCalc;
      }
    },
    calcSecondsBar() {
      const { secondsPerc } = this;
      const newCalc = Math.floor(secondsPerc * 251);
      if(secondsPerc === 0) {
        this.secondsDashOffset = 0;
      } else {
        this.secondDashOffset = 251 - newCalc;
      }
    },
    calcTime: function(dist){
      //set up initial time and calculations
      this.days = Math.floor(dist / (1000 * 60 * 60 * 24)) + 1;
      this.dayPerc = this.days / 365;
      this.hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.hourPerc = this.hours / 24;
      this.minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
      this.minutePerc = this.minutes / 60;
      this.seconds = Math.floor((dist % (1000 * 60)) / 1000);
      this.secondsPerc = this.seconds / 60;

      this.calcSecondsBar();
      this.calcMinutesBar();
      this.calcHourBar();
      this.calcDayBar();
    } 
  }
}
</script>