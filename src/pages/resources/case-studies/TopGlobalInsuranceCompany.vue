<style scoped>

.hero {
  background-image: url(/uploads/images/cloud-recovery-bg.svg);
  background-size: cover;
  background-position: center;
}

.freedom-bg {
  background-image: url(/uploads/images/freedom-bg.svg);
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: 25%;
}

.performance-bg {
  background-image: url(/uploads/images/performance-bg.svg);
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: 60%;
}

.multi-column {
  column-count: 2;
  column-gap: 2.5rem;
}

@media (max-width: 768px) {
	.multi-column {
		column-count: 1;
		column-gap: 0;
	}
}
.number {
  @apply absolute text-yellow1 rfs-text-7xl font-bold leading-none;
  top: -0.75rem;
  left: -3.5rem;
}

.data-points {
  @apply w-full flex flex-row;
  & div {
    @apply text-gray-400 pb-8 w-1/6;
  }
}

.legend {
  @apply text-center flex flex-row justify-center leading-none mt-12 mb-12;
  bottom: -3rem;
}

.html-chart {
  position: relative;
  & .y-axis {
    @apply absolute text-right w-8 text-gray-400 font-medium;
    &:nth-of-type(1) {
      top: calc(0% - 12px);
    }
    &:nth-of-type(2) {
      top: calc(20% - 12px);
    }
    &:nth-of-type(3) {
      top: calc(40% - 12px);
    }
    &:nth-of-type(4) {
      top: calc(60% - 12px);
    }
    &:nth-of-type(5) {
      top: calc(80% - 12px);
    }
    &:nth-of-type(6) {
      top: calc(100% - 12px);
    }
  }
  & .bar-5, & .bar-4, & .bar-3, & .bar-2, & .bar-1, & .bar-0 {
    @apply absolute bg-gray-200;
    left: 2.5rem;
    right: 0;
    height: 1px;
    z-index: 1;
  }
  & .bar-5 { top: 0%;}
  & .bar-4 { top: 20%;}
  & .bar-3 { top: 40%;}
  & .bar-2 { top: 60%;}
  & .bar-1 { top: 80%;}
  & .bar-0 { top: 100%;}
  & .vertical-chart {
    @apply p-0 m-0 ml-10 mt-6 mb-8 list-none relative h-64 flex flex-row items-end;
    & li {
      @apply mx-auto flex z-10 relative p-0;
      &.yellow {
        @apply bg-yellow1;
      }
      &.gray {
        @apply bg-gray-300;
      }
      & span {
        @apply absolute text-center w-full text-gray-500;
        bottom: -30px;
      }
      & .top-number {
        @apply absolute left-0 text-gray-500 font-medium;
        top: calc(0% - 1.5rem);
      }
    }
  }
}

</style>

<template>
  <Layout>
    <section class="hero flex bg-gray-700 py-12 md:py-24 text-white px-6 xl:px-0">
      <div class="flex flex-col max-w-1200 w-full mx-auto z-10">
        <span class="rfs-text-xl text-yellow1 mb-0">Case study:</span>
        <h1 class="m-0 p-0 leading-none w-full sm:w-3/4 pb-5">
          Top 3 global insurance company
        </h1>
        <h2 class="m-0 p-0 leading-none rfs-text-xl w-full sm:w-1/2">Yellowbrick Data Warehouse brings faster, more accurate underwriting and IFRS 17 compliance to billions of policies</h2>
      </div>
    </section>

    <section class="flex py-12 bg-white px-6 xl:px-0">
      <div class="flex flex-col sm:flex-row  justify-evenly max-w-1200 mx-auto">
        <div class="w-full md:w-2/3 p-0 md:pr-10 relative">
          <Details 
            industry="Insurance"
            business-use-case="Financial Reporting/Compliance, Underwriting, Claims Ratio Calculation"
            tech-use-case="Enterprise Data Warehouse"
          />

          <h4 class="text-gray-500">Overview</h4>
          <div class="text-gray-500 mb-8 md:mb-0">
            <p>This major insurance company, with more than $90 billion in annual premiums, has numerous use cases for fast, reliable data processing and analytics, including:</p>
            <ul class="rfs-text-base">
              <li>Compliance with IFRS 17, one of the most significant challenges to insurance accounting in more than 20 years.</li>
              <li>Processing billions of insurance policies to assign the costs incurred for each policy across different areas.</li>
              <li>Insurance underwriting, for which 200+ users interactive analyze huge amounts of historical data.</li>
              <li>Claim ratio calculation (the ratio of the net claim settled by the insurer to the net premiums collected), which relies on complicated algorithms.</li>
            </ul>
          </div>

          <h4 class="text-gray-500">Existing architecture failing the business</h4>
          <p>The company's patchwork of legacy data warehouses were too slow, inflexible, unreliable, expensive to support these use cases, slowing the pace of business and limiting the amount of accessible data:</p>
          <ul class="rfs-text-base">
            <li>Policy expenses could only be subdivided four ways, and multiple days were required to process the entire portfolio.</li>
            <li>Insurance underwriting was too slow due to latency when running ad hoc queries, with only a subset of data available for analysis.</li>
            <li>The solution lacked the performance and scalability needed to meet IFRS 17 compliance requirements.</li>
            <li>Claims ratio calculation took two full days to complete for the full portfolio.</li>
          </ul>

          <h4 class="text-gray-500">Modernizing for price/performance at scale with Yellowbrick</h4>
          <p>After extensive testing and evaluation, the company selected Yellowbrick over Greenplum and others for its data warehouse transformation project -- with queries running 400X faster on Yellowbrick. During testing, Yellowbrick proved out its ability to help process and analyze billions of rows of data (including numerous complex table associations), providing price/performance at scale, data consistency, and 24/7 availability.</p>
          <img src="/uploads/images/Insurance_customer_chart.png" alt="Performance testing results: Yellowbrick versus competitors (in seconds)" class="my-8 w-full" />
          <p>Today, the company is using Yellowbrick to bring instant insights to asset management, annuity insurance underwriting, life insurance marketing campaigns, and HR (for 2 million employees).</p>
          <h4 class="text-gray-500">Results include:</h4>
          <ul class="rfs-text-base">
            <li><strong>Hundreds of underwriters can create policies more quickly and accurately for customers</strong>, contributing to a reduction in average turnaround time from 3.8 days to 10 minutes</li>
            <li><strong>Capabilities now in place for compliance with IFRS 17</strong>, with the company being the first in its country to meet that milestone</li>
            <li><strong>Policy expense processing now completes in 2 hours (versus several days)</strong>, with costs subdivided into hundreds of different areas to drastically improve management accounting decisions</li>
            <li><strong>Claim ratio processing completes in 2 hours (versus 2 days)</strong>, while other processes are running concurrently without performance impact</li>
          </ul>
        </div>
        <div class="w-full md:w-5/12 relative">
          <h3 class="text-gray-500 rfs-text-4xl font-semibold mb-8 sm:mt-0 accent-heading">Key insights</h3>
          <div class="relative bg-transparent">
            <FeaturedStat
              alt-attribute="Query speed improved by 400X at a fraction of the cost"
              icon-name="tacometer.svg"
              featured-title="400X faster"
              featured-phrase="Query speed improved by 400X at a fraction of the cost"
              first="true"
            />
          </div>
          <div class="relative bg-transparent">
            <FeaturedStat
              alt-attribute="Ad hoc queries run by 200+ concurrent users"
              icon-name="ad-hoc-icon.svg"
              featured-title="200+ users"
              featured-phrase="Ad hoc queries run by 200+ concurrent users"
            />
          </div>
          <div class="relative bg-transparent">
            <FeaturedStat
              alt-attribute="Time to calculate claim ratios reduced to 2 hours for billions of policies"
              icon-name="predictable-timing.svg"
              featured-title="2 hours"
              featured-phrase="Time to calculate claim ratios reduced to 2 hours for billions of policies"
            />
          </div>
        </div>
      </div>
    </section>
    <MoreInfo />
  </Layout>
</template>

<script>
import MoreInfo from '~/components/MoreInfo.vue'
import FeaturedStat from '~/components/FeaturedStat.vue'
import Details from '~/components/CaseStudyDetails.vue'

export default {
  metaInfo: {
    title: 'Top Global Insurance Company Case Study',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: 'Top global insurance company uses Yellowbrick Data Warehouse to speed up claims processing and compliance' }
    ]
  },
  components: {
    Details,
    FeaturedStat,
    MoreInfo
  }
}
</script>
