<style scoped>
.number {
  color: #fff;
}
</style>

<template>
  <div class="flex flex-row max-w-600 w-full mx-auto justify-between">
    <div class="flex flex-col text-center px-2">
      <div class="number rfs-text-4xl font-semibold text-gray-600 leading-none">{{displayDays}}</div>
      <div class="rfs-text-base font-medium text-teal">Days</div>
    </div>
    <!-- <span class="text-gray-200 rfs-text-4xl leading-none m-0 p-0 self-start">:</span>
    <div class="flex flex-col text-center px-2">
      <div class="number rfs-text-4xl font-semibold text-gray-600 leading-none">{{displayHours}}</div>
      <div class="rfs-text-xl font-medium text-teal">Hours</div>
    </div> -->
    <span class="text-gray-200 rfs-text-4xl leading-none m-0 p-0 self-start">:</span>
    <div class="flex flex-col text-center px-2">
      <div class="number rfs-text-4xl font-semibold text-gray-600 leading-none">{{displayMinutes}}</div>
      <div class="rfs-text-base font-medium text-teal">Minutes</div>
    </div>
    <span class="text-gray-200 rfs-text-4xl leading-none m-0 p-0 self-start">:</span>
    <div class="flex flex-col text-center px-2">
      <div class="number rfs-text-4xl font-semibold text-gray-600 leading-none">{{displaySeconds}}</div>
      <div class="rfs-text-base font-medium text-teal">Seconds</div>
    </div>
  </div>    
</template>
<script>

export default {
  props: {
    displayDays: Number,
    displayHours: Number,
    displayMinutes: Number,
    displaySeconds: Number,
  },
  data: () => ({
    secondaryDisplayDays: 0,
    secondaryDisplayHours: 0,
    secondaryDisplayMinutes: 0,
    secondaryDisplaySeconds: 0
  }),
  mounted() {
    this.showRemaining();
  },
  computed: {
    _seconds: () => 1000,
    _minutes() {
      return this._seconds * 60
    },
    _hours() {
      return this._minutes * 60
    },
    _days() {
      return this._hours * 24
    }
  },
  methods: {
    formatNum: num => (num < 10 ? "0" + num : num),
    showRemaining() {
      const timer = setInterval(() => {
        const now = new Date();
        const end = new Date(2020, 8, 28, 10, 0, 0, 0);
        const distance = end.getTime() - now.getTime();

        if(distance < 0){
          clearInterval(timer);
          return;
        }
        const days = Math.floor(distance / this._days);
        const hours = Math.floor((distance % this._days) / this._hours);
        const minutes = Math.floor((distance % this._hours) / this._minutes);
        const seconds = Math.floor((distance % this._minutes) / this._seconds);
        this.displayMinutes = this.formatNum(minutes);
        this.displaySeconds = this.formatNum(seconds);
        this.displayHours = this.formatNum(hours);
        this.displayDays = this.formatNum(days);
      }, 1000);
    }
  }
}
</script>
