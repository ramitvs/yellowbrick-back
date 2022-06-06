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

.video-caption {
  position: relative;
  background-color: #1F292E;
  padding:10px 0 10px 15px;
}

.caption-wrapper
> .caption {
  background-color: #1F292E;
  margin: 0;
  position: relative;
  color: #fff;
  width: 100%;
  text-align: center;
  padding-top: 10px;
}

.caption-wrapper
> .inline-accent {
  height: 8px;
  width: 50%;
  background-color: #00C3CD;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(-2.5px);
  z-index: 2;
}
</style>

<template>
  <Layout>
    <section class="hero flex bg-gray-700 py-12 md:py-24 text-white px-6 xl:px-0">
      <div class="flex flex-col max-w-1200 w-full mx-auto z-10">
        <span class="rfs-text-xl text-yellow1 mb-0">Case study:</span>
        <div class="image-container">
          <img src="/uploads/images/customers/teoco.svg" class="w-full sm:w-1/3 py-5" alt="yellowbrick answers virtual event" />
        </div>
        <h1 class="m-0 p-0 leading-none rfs-text-2xl w-full sm:w-1/2 md:w-5/12">Yellowbrick Data Warehouse beats legacy and cloud-only options on price/performance for delivering richer insights, faster</h1>
      </div>
    </section>

    <section class="flex py-12 bg-white px-6 xl:px-0">
      <div class="flex flex-col sm:flex-row items-start justify-evenly max-w-1200 mx-auto">
        <div class="w-full md:w-7/12 p-0 md:pr-10 relative">
          <Details 
            industry="Telecommunications"
            business-use-case="Finance, Revenue Assurance, Operational Intelligence, Customer Experience Management"
            tech-use-case="Enterprise Data Warehouse"
          />

          <h4>Overview</h4>
          <div class="text-gray-500 mb-8 md:mb-0">
            <p class="mb-0">TEOCO (The Employee Owned Company) is a leading provider of analytics, assurance and optimization solutions to the Telecom industry. It has over 300 communication service providers (CSPs) and OEM customers to which it provides actionable intelligence about revenue assurance, network quality of service, and customer experience. TEOCO’s expertise and value-add to their customers derives from three core competencies:</p>
            <ul class="rfs-text-base">
							<li>Handling the extremely large volumes of data that telecom carriers generate.</li>
							<li>Applying TEOCO’s deep industry knowledge and understanding of this data.</li>
							<li>Developing algorithms that transform this raw data into actionable insights.</li>
						</ul>
          </div>
          <div class="video-caption rfs-text-sm font-light">
            <div class="caption-wrapper">
              <span class="inline-accent"></span>
              <h6 class="caption">Watch to learn more about TEOCO’s data journey</h6>
            </div>
          </div>
          <div class="px-0"><BaseWistia id="la4zrp63ow" /></div>
          <div class="text-gray-500 mb-8 md:mb-0">
            <h4 class="mt-10">Modern requirements call for a modern platform</h4>
            <p>These high-scale requirements have always led TEOCO to push the envelope for data warehouse innovation, and the company was among the first to adopt IBM Netezza. However, with the explosion of data from mobile devices and 5G on the horizon, technology leaders at the company knew that its legacy Netezza data warehouse would need to be replaced with a modern, scalable alternative with much better price/performance.</p>
            <h4 class="mt-10">Big results after just 3 weeks of testing</h4>
            <p>In 2017, TEOCO evaluated several data warehousing solutions in an exhaustive, three-month process that, for most vendors, showed only modest performance improvements while revealing issues about migration, data load speed, and systems portability.</p>
            <p>The exception was Yellowbrick Data. Although TEOCO only had a three-week window in which to complete its testing, with Yellowbrick’s data loading capabilities, overall performance and query compatibility, most of the testing was completed within a week--enabling TEOCO to spend the next two weeks pushing the limits of what Yellowbrick could do.</p>
            <ul class="rfs-text-base">
              <li>During testing, TEOCO ran 7,000 BusinessObjects queries in Netezza and in Yellowbrick.</li>
              <li>Yellowbrick queries were up to 100X faster at 1/5th of the cost per query, even as concurrency increased.</li>
              <li>Unlike Netezza, all Yellowbrick queries ran to completion and produced the same results with virtually no tuning.</li>
            </ul>
          </div>
          <div class="text-gray-500 mb-8 md:mb-0">
            <h4 class="mt-10">Results Include</h4>
            <ul class="rfs-text-base">
              <li><strong>Faster, more accurate insights for TEOCO customers.</strong> With Yellowbrick’s improved and consistent query speed versus Netezza, TEOCO can provide richer insights about quality of service for its customers more quickly</li>
              <li><strong>Ingestion of more data for processing.</strong> Yellowbrick can ingest up to 40 billion new records per day and process it immediately with no impact on overall performance, enabling much more granular revenue assurance for customers.</li>
              <li><strong>Millions in data center savings.</strong> TEOCO expects to save as much $5 million in data center costs over the next several years.</li>
            </ul>
          </div>
        </div>
				<div class="w-full md:w-5/12 relative ">
          <h3 class="text-gray-500 rfs-text-4xl font-semibold mb-8 sm:mt-0 accent-heading">Key Insights</h3>
          <FeaturedStat
            alt-attribute="Teoco experienced 100X faster queries at 1/5th of the cost" 
            icon-name="tacometer.svg"
            featured-title="100X Faster"
            featured-phrase="Up to 100X faster queries at 1/5th of the cost"
            first="true"
          />
          <FeaturedStat
            alt-attribute="Teoco ingests 40 billion new rows daily, with no impact on performance" 
            icon-name="cloud-computing.svg"
            featured-title="40 Billion"
            featured-phrase="40 billion new rows ingested daily, with no impact on performance"
          />
          <FeaturedStat
            alt-attribute="Teoco saved five million dollars in data center expenses" 
            icon-name="db-money.svg"
            featured-title="$5 Million"
            featured-phrase="$5M saved in data center expenses"
          />
          <div class="bg-white shadow-lg p-10 relative text-gray-500 performance-bg mt-8">
            <span class="accent z-10"></span>
            <span class="rfs-text-3xl italic">"With the power of Yellowbrick combined with our deep knowledge of the data and proprietary algorithms, we will be able to produce insights that have not been possible before."</span>
            <p class="mt-8">- Atul Jain, Chariman &amp; CEO<br>TEOCO</p>
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
    title: 'Teoco Case Study',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: 'Teoco Delivers Previously Unavailable Insights To The Telecom Industry Using Yellowbrick Data' }
    ]
  },
  components: {
    Details,
    FeaturedStat,
    MoreInfo
  }
}
</script>
