<style scoped>

</style>

<template>
  <div class="flex flex-row mx-auto justify-between">
    <div class="flex flex-col text-center w-20 ">
      <div class="rfs-text-4xl font-light text-yellow1 leading-none">{{displayDays}}</div>
      <div class="rfs-text-xl font-medium text-white">Days</div>
    </div>
    <span class="text-teal rfs-text-4xl leading-none m-0 p-0 self-start">:</span>
    <div class="flex flex-col text-center w-20 ">
      <div class="rfs-text-4xl font-light text-yellow1 leading-none">{{displayHours}}</div>
      <div class="rfs-text-xl font-medium text-white">Hours</div>
    </div>
    <span class="text-teal rfs-text-4xl leading-none m-0 p-0 self-start">:</span>
    <div class="flex flex-col text-center w-20 ">
      <div class="rfs-text-4xl font-light text-yellow1 leading-none">{{displayMinutes}}</div>
      <div class="rfs-text-xl font-medium text-white">Mins</div>
    </div>
    <span class="text-teal rfs-text-4xl leading-none m-0 p-0 self-start">:</span>
    <div class="flex flex-col text-center w-20 ">
      <div class="rfs-text-4xl font-light text-yellow1 leading-none">{{displaySeconds}}</div>
      <div class="rfs-text-xl font-medium text-white">Secs</div>
    </div>
  </div>
</template>

<script>

export default {
  data: () => ({
    displayDays: 0,
    displayHours: 0,
    displayMinutes: 0,
    displaySeconds: 0
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
    showRemaining(){
      const timer = setInterval(() => {
        const now = new Date();
        const end = new Date(2020, 8, 29, 11, 0, 0, 0);
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
