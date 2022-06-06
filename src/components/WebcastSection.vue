<template>
  <div class="max-w-1200 w-full mx-auto">
    <div class="flex flex-row flex-wrap -mx-6 webcast-list">
      <a @click="handleEvent(node.webcastLink)" :to="node.webcastLink"  v-for="node in webcasts" :key="node.id" class="flex flex-col w-full md:w-1/2 relative current-post -webcasts p-6" :class="node.pinned ? 'pinned' : ''">
        <div class="flex flex-col w-full h-full" :style="`background-image: url('${node.coverImage}'); background-size: cover; background-position: right center;`">
          <div class="p-10 md:px-6 w-full md:w-3/4 lg:w-8/12">
            <div class="block text-gray-200">
              <span class="date" v-text="node.date"/><span v-if="node.time" class="time">&nbsp;&nbsp;|&nbsp;&nbsp;{{node.time}}</span>
            </div>
            <h4 class="rfs-text-xl text-white" v-html="node.title" />
           
            <div class="arrow-only-white text-white">Watch On-Demand</div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'webcasts', 'cta'],
  methods: {
  handleEvent(open) {
                window.location.href = open;
            },
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
<style scoped>
  .webcast-list
  > .current-post {
    order: 2;
  }

  .webcast-list
  > .current-post.pinned {
    order: 1 !important;
  }

  .text-gray-200 {
    font-size: 14px;
  }
</style>