<style scoped>
.hero {
  background-image: url('/uploads/images/careers-bg.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.careers-panel {
  background-image: url('/uploads/images/careers-panel-bg.svg');
}

.dots-square-mix {
  position: relative;
  z-index: 1;
  &:before {
    @apply absolute top-0 left-0;
    content: '';
    right: 62%;
    bottom: 0px;
    position: absolute;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21 21'%3E%3Cpath fill='none' d='M0 0h21v21H0z'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' fill='%234b5357' d='M9 9h3v3H9z'/%3E%3C/svg%3E");
    background-repeat: repeat;
    background-size: 22px;
    z-index: 1;
    opacity: .4;
  }
  &:after {
    @apply absolute right-0;
    content: '';
    left: 39%;
    top: -40px;
    bottom: 60px;
    position: absolute;
    background: #d8d9e0;
    z-index: 2;
    opacity: .3;
  }
}

#grnhse_app {
  @apply max-w-1200 w-full mx-auto;
}
</style>

<template>
  <Layout>
    <section class="hero bg-gray-700 pt-32 pb-24 px-6 xl:px-0">
      <div class="w-full max-w-1200 text-white mx-auto z-10">
        <h1>Careers</h1>
        <button v-scroll-to="'#joblistings'" class="mt-8 button yellow button-center">View Openings</button>
      </div>
    </section>

    <section class="py-12 md:py-32 bg-white text-gray-600 px-6 xl:px-0 z-10">
      <div class="max-w-1200 w-full mx-auto">
        <h2 class="accent-heading">Come Join Us</h2>
        <h3 class="leading-normal">Yellowbrick Data empowers companies to make faster decisions with all of their data. We have a passionate team with big plans ahead focused on creating new opportunities with data and analytics!</h3>
      </div>
    </section>

    <section class="careers-panel bg-gray-700 py-20 px-6 xl:px-0">
      <div class="w-full max-w-1200 text-white mx-auto">
        <div class="flex flex-col flex-wrap md:flex-row -mx-4 lg:-mx-6">
          <div class="w-full md:w-1/2 xl:w-1/4 px-4 lg:px-6 pb-6 md:pb-0 mb-4 md:mb-6 xl:mb-0">
            <img src="~@/assets/images/icons/pay.svg" alt="competitive pay" class="pb-2 md:pb-6"/>
            <h4>Competitive Pay</h4>
            <p>Yellowbrick is a well-funded, growing company. We need the best and brightest and we know what it takes to get them.</p>
          </div>
          <div class="w-full md:w-1/2 xl:w-1/4 px-4 lg:px-6 pb-6 md:pb-0 mb-4 md:mb-6 xl:mb-0">
            <img src="~@/assets/images/icons/meals.svg" alt="catered meals" class="pb-2 md:pb-6"/>
            <h4>Catered Meals</h4>
            <p>Twice a week Yellowbrick provides meals for all employees. But, you’re welcome to bring your PB & J anytime.</p>
          </div>
          <div class="w-full md:w-1/2 xl:w-1/4 px-4 lg:px-6 pb-6 md:pb-0 mb-4 md:mb-6 xl:mb-0">
            <img src="~@/assets/images/icons/airplane.svg" alt="unlimited vacation" class="pb-2 md:pb-6" style="width: 50%;"/>
            <h4 style="margin-top: -10px;">Unlimited Vacation</h4>
            <p >Take the time you need when you need it. Everyone needs to recharge without having to worry about a fixed amount of PTO.</p>
          </div>
          <div class="w-full md:w-1/2 xl:w-1/4 px-4 lg:px-6 pb-6 md:pb-0 mb-4 md:mb-6 xl:mb-0">
            <img src="~@/assets/images/icons/handshake.svg" alt="growth opportunities" class="pb-2 md:pb-6"/>
            <h4 >Growth Opportunities</h4>
            <p>As we are a growing company, the opportunities are plentiful. Show us what you got and we’ll reward you accordingly.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gray-light px-6 xl:px-0" id="joblistings">
      <div class="max-w-1200 w-full mx-auto">
        <h2 class="accent-heading">Open Positions</h2>
        <h4 class="mx-auto pb-6 text-gray-600 rfs-text-lg">
          <span class="text-gray-700 pr-1">Job Location: </span>
          <select class="selectbox mt-1" v-model="selectedLocation">
            <option v-for="location in locations" :key="location.id" :value="location.id" v-text="location.name" />
          </select>
        </h4>

        <h4 class="mx-auto pb-6 lg:hidden text-gray-600 rfs-text-lg">
          <span class="text-gray-700 pr-1">Department: </span>
          <select class="selectbox" v-model="selectedDepartment">
            <option v-for="department in departments" :key="department.id" :value="department.id" v-text="department.name" />
          </select>
        </h4>

        <div class="hidden lg:flex flex-wrap">
          <div v-for="department in departments" :key="department.id" class="accent-yellow" :class="{'active': department.id===selectedDepartment}" v-text="department.name" @click="selectedDepartment=department.id" />
        </div>

        <div class="pb-8 pt-16" v-for="department in filteredDepartments" :key="department.id">
          <div v-if="selectedDepartment === 0">
            <h3 v-text="department.name" />
          </div>
          <div class="flex flex-wrap -mx-8">
            <div v-for="job in filteredJobs(department.id)" :key="job.id" class="flex p-8 w-full sm:w-1/2 md:w-1/3">
              <div class="bg-gray-100 w-full relative box-link">
              <span class="accent"></span>
                <g-link :to="`/company/careers/${job.node.id}/`" class="flex flex-col h-full p-8">
                  <h5 v-text="capitalize(job.node.title)" class="m-0 text-gray-600 leading-tight font-semibold capitalize" />
                  <h6 v-if="job.node.location" class="p-0 m-0 my-6 text-gray-500" v-html="capitalize(job.node.location.name)" />
                  <span class="arrow-btn mt-auto"></span>
                </g-link>
              </div>
            </div>
          </div>
          <h5 v-if="selectedDepartment > 0 && filteredJobs(department.id).length === 0" >
            No open positions. <button @click="selectedLocation=0;selectedDepartment=0" class="button lighter button-sm">Clear filters</button>
          </h5>
        </div>
        <h2 v-if="jobs.length === 0" >
          No open positions.
        </h2>
      </div>

    </section>

    <section class="flex py-16 bg-white px-6 xl:px-0">
      <div class="w-full max-w-1200 mx-auto">

        <h3 class="accent-heading">Yellowbrick Applicant Information and Resources</h3>
        <div class="flex flex-col md:flex-row items-center">
          <div class="w-full md:w-3/4 pr-0 md:pr-12">
            <p>Yellowbrick Data is proud to provide Equal Employment Opportunities (EEO) to all employees and applicants for employment without regard to race, color, religion, sex, national origin, age, sexual orientation, gender identity, protected veteran, disability, genetic information, or other applicable legally protected characteristics.</p>
            <p>Yellowbrick Data participates in the <a href="https://www.uscis.gov/e-verify/employees" target="_blank">E-Verify</a> program for all US positions.</p>
            <p>View the Participant Poster in <a href="https://support.8x8.com/downloads/get/3364" target="_blank">English</a> | <a href="https://support.8x8.com/downloads/get/3365" target="_blank">Español</a>. View the Right to Work Poster in <a href="https://support.8x8.com/downloads/get/3366" target="_blank">English</a> | <a href="https://support.8x8.com/downloads/get/3368" target="_blank">Español</a>.</p>
            <p>We also provide reasonable accommodation to individuals with disabilities in accordance with applicable laws. Please email us at <a href="mailto:mailto:careers@yellowbrick.com">careers@yellowbrick.com</a> (Include “Reasonable Accommodation” in the subject line)</p>
          </div>
          <div class="w-full md:w-1/4 justify-center pl-0 md:pl-12">
            <img src="/uploads/images/e-verify.svg" alt="e-verify logo" class="w-full py-8 self-start" />
            <img src="/uploads/images/eeo-logo.svg" alt="e-verify logo" class="w-full py-8 self-start" />
          </div>
        </div>
      </div>
    </section>



  </Layout>
</template>

<script>

export default {
  metaInfo: {
    title: 'Join Us Here at Yellowbrick',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: 'A passionate team with big plans ahead is focused on creating new opportunities with the hybrid cloud data warehouse. Join the team!'
      }
    ]
  },

  data: () => ({
    jobs: [],
    selectedDepartment: 0,
    departments: [{ id: 0, name: 'All Positions' }],
    selectedLocation: 0,
    locations: [{ id: 0, name: 'All Locations' }]
  }),

  mounted () {
    if (this.$page && this.$page.jobDetails && Array.isArray(this.$page.jobDetails.edges)) {
      this.jobs = this.$page.jobDetails.edges
    }

    this.jobs.forEach((job) => {
      job.node.departments.forEach((department) => {
        if (!this.departments.some(d => d.id === department.id)) {
          this.departments.push({ id: department.id, name: this.capitalize(department.name) })
        }
      })
      const location = this.capitalize(job.node.location.name)
      if (!this.locations.some(l => l.name.trim().toUpperCase() === location.toUpperCase())) {
        this.locations.push({ id: this.locations.length, name: location})
      }
    })

    const sorter = (a, b) => {
      if (a.id === 0) return -1
      if (b.id === 0) return 1
      return a.name.trim().localeCompare(b.name.trim())
    }
    this.jobs.sort((a, b) => a.node.title.trim().localeCompare(b.node.title.trim()))
    this.departments.sort(sorter)
    this.locations.sort(sorter)
  },

  computed: {
    filteredDepartments () {
      if (this.selectedDepartment === 0 && this.selectedLocation === 0) return this.departments.filter(d => d.id > 0)
      if (this.selectedDepartment > 0) return this.departments.filter(d => d.id === this.selectedDepartment)

      const ret = []
      this.filteredJobs(0).forEach((job) => {
          job.node.departments.forEach((department) => {
            if (!ret.some(d => d.id === department.id)) {
              ret.push({ id: department.id, name: this.capitalize(department.name) })
            }
          })
      })
      ret.sort((a, b) => a.name.localeCompare(b.name))
      return ret
    }
  },

  methods: {
    filteredJobs (department) {
      return this.jobs.filter(job =>
        (
          department === 0 ||
          job.node.departments.some(d => d.id === department)
        ) && (
          this.selectedLocation === 0 ||
          this.locations.find(l => l.id === this.selectedLocation).name.toUpperCase() === job.node.location.name.trim().toUpperCase()
        )
      )
    },
    capitalize (s) {
      if (typeof s !== 'string') return ''
      s = s.trim()
      return s.charAt(0).toUpperCase() + s.slice(1)
    },
  }
}
</script>

<page-query>
query GreenhouseJobDetails {
    jobDetails: allPublicJobDetail {
      edges {
        node {
          id
          title
          location {
            name
          }
          departments {
            id
            name
          }
        }
      }
    }
  }
</page-query>
