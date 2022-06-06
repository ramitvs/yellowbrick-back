<template>
  <div class="pt-10 pb-24 max-w-1200 w-full mx-auto z-10">
    <h2 class="accent-heading z-10" v-text="title" />
    <div class="w-full -mx-6 z-10 relative">
      <div class="flex flex-wrap">
        <div class="zoomer flex w-full sm:w-1/2 md:w-1/3 p-5 pt-10" v-for="event in events" :key="event.id">
          <div class="p-4 w-full bg-white flex flex-col">
            <component :is="event.url ? 'a' : 'div'" :href="event.url || undefined" target="_blank">
              <img v-if="event.image" :src="event.image" :alt="event.title" class="w-full" />
              <h3 class="mt-3" v-text="event.title" />
              <div v-text="dateFormat(event.date, event.endDate)" />
              <div v-text="event.location" />
            </component>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: ['title', 'events'],
  methods: {
    dateFormat(dateStr, endDateStr) {
      const date = new Date(dateStr)
      if (endDateStr && endDateStr != dateStr) {
        const endDate = new Date(endDateStr)
        return `${date.toLocaleString(undefined, { month: 'short', day: 'numeric', timeZone: 'UTC' })} - ${endDate.toLocaleString(undefined, { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' })}`;
      }
      return date.toLocaleString(undefined, { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' })
    }
  }
}
</script>