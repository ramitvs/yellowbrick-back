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
</style>
<template>
  <Layout>
    <section class="hero flex bg-gray-700 py-12 md:py-24 text-white px-6 xl:px-0">
      <div class="flex flex-col max-w-1200 w-full mx-auto z-10">
        <span class="rfs-text-xl text-yellow1 mb-0">Case study:</span>
        <div class="image-container py-8">
          <img src="/uploads/images/customers/catalina.svg" class="w-1/4" />
        </div>
        <h1 class="m-0 p-0 leading-none rfs-text-2xl w-full sm:w-1/2 md:w-5/12">Catalina Marketing enables data scientists and power users with up to 182x better query performance</h1>
      </div>
    </section>
    <section class="flex py-12 bg-white px-6 xl:px-0">
      <div class="flex flex-col sm:flex-row items-start justify-evenly max-w-1200 mx-auto">
        <div class="w-full md:w-7/12 p-0 md:pr-10 relative">

          <Details
            industry="Retail"
            business-use-case="Predictive marketing analytics"
            tech-use-case="Enterprise Data Warehouse"
          />
          <div class="text-gray-500 mb-8 md:mb-0">
            <h4>Overview</h4>
            <p>Catalina Marketing is the market leader in shopper intelligence and targeted in-store and digital media. The company delivers $6.1 billion in consumer value annually, combining the richest buyer history database in the world with its own deep analytics and insights to help retailers, CPG brands, and agencies optimize every stage of media planning, execution, and measurement.</p>
            <h4>Business challenge</h4>
            <p>Until recently, the company’s enterprise data warehouse ran entirely on an IBM Netezza system. It supported two main workloads:</p>
            <ul class="rfs-text-base">
              <li>Data processing, consisting of the complex ETL processes required to convert nightly data feeds from customers into a normalized set of databases for querying and reporting.</li>
              <li>Consumption of processed data by the company’s Analytics team—consisting of about 100 data scientists, analysts and  power users, who use advanced analytics and data mining tools like Python, R and SAS.  to run large, ad-hoc queries as they support customers across all of the company’s lines of business.</li>
            </ul>
            <p>However, the Netezza system lacked the compute capacity to support both workloads. "It was an unsustainable environment, in which we weren't able to finish our data loads because we had 15-20 queries running at any given time," says Luis Velez, Data Engineering Director at Catalina. "Every day, it was getting a little bit worse."</p>

            <p>The company’s Analytics team—the source of those queries—was also hamstrung by the lack of compute capacity, having to wait 20 minutes or more for their queries to run. "Sometimes queries took hours, and other times they were simply killed so ETL processes could run," says Aaron Augustine, Executive Director, Analytics  Architecture at Catalina. "We only had small windows of time for heavy analysis—like maybe 25% of the day. Given that we have Analytics teams overseas and in Japan, it was a 24x7 problem."</p>

            <h4>Enabling power users with Yellowbrick</h4>
            <p>Catalina decided to augment its existing data warehouse with a second system, dividing the compute workload into two parts. Data processing would continue to run on the Netezza system, while consumption of the processed data—including queries by the Analytics team—would be supported by Yellowbrick. "The Netezza box was running some pretty advanced ETL processes, which were working fine when there weren’t a lot of big queries hitting the system," explains Augustine. "At the same time, we needed to give data scientists, analysts and other power users the means to ask some really big questions of the data—as needed to discover entirely new insights into buyer behavior. Moving that ad-hoc, advanced analytics workload onto Yellowbrick was an incremental, low-risk approach that made a lot of sense."</p>

            <p>Catalina discovered Yellowbrick after a failed proof-of-technology (POT) with a different vendor, which couldn’t deliver the needed performance or compatibility. During a successful 3-week POT on Yellowbrick, a single 10-U, 30-node Yellowbrick system delivered up to 182x better performance for specific use cases than an 8-rack, 56-node Netezza Mako system. The company immediately purchased the Yellowbrick system and spent the next 4-6 weeks migrating its 260 TB of data. Over the following two months, Catalina moved the Analytics team onto Yellowbrick. "All in all, our migration onto Yellowbrick took four months—far faster than we expected," says Augustine.</p>

            <p>Today, the company’s Analytics team can work unimpeded. Queries that used to take up to 30 minutes—if they weren’t killed first—are now completed in a few seconds to a few minutes. "Our Yellowbrick system has made our analytics team a lot more productive," says Augustine. "These are power users doing deep and complex analytics—using tools like Python, R and SAS to query three years of point-of-sale data. We’re continuously hammering on Yellowbrick with some really big queries, and it’s handling them very well."</p>

            <p>Now that it’s no longer hamstrung by a lack of compute capacity, the Analytics team can fully contribute to all parts of the business:</p>

            <ul class="rfs-text-base">
              <li>Data mining and predictive analytics—as needed to fuel Catalina’s targeting solutions.</li>
              <li>Retail analytics—helping retailers build effective multichannel campaigns.</li>
              <li>Manufacturing analytics—helping CPG brands optimize engagement and targeting.</li>
              <li>Digital analytics—helping agencies drive effective advertising and promotions for CPG clients.</li>
            </ul>

            <h4>Results:</h4>
            <ul>
              <li><strong>Uncompromised query performance.</strong> Catalina’s 100-member Analytics team now enjoys superior query performance at all times, giving it 24x7 access to all the compute resources it needs to work at top speed.</li>
              <li><strong>Faster data loads.</strong> Yellowbrick’s PostgreSQL interface lets Catalina use familiar tools like Informatica to load data at rates in excess of 100,000 rows per second. YBLoad, Yellowbrick’s native data-loading utility, delivers even more performance, bypassing the system’s PostgreSQL layer to bulk-load data directly into NVMe flash memory.</li>
              <li><strong>Increased focus on product development.</strong> "In the past, we frequently had to act as Level-3 support for the Analytics team, which prevented us from focusing on more strategic initiatives," says Velez. "Now that we no longer need to triage resource constraints day-in and day-out, we’ve been able to collaborate on the development of two new products—something that, in the past, we were unable to do."</li>
              <li><strong>Rapid, low-risk migration.</strong> With both Netezza and Yellowbrick based on PostgreSQL, Catalina was able to complete its migration onto Yellowbrick quickly, with minimal risk.</li>
              <li><strong>Minimal form factor.</strong> Yellowbrick’s minimal form factor—a single 10-U rack-mount system—also helped facilitate the company’s migration.</li>
              <li><strong>High reliability.</strong> Compared to the old Netezza environment, which had hundreds of spinning disks, Yellowbrick is delivering better reliability because it has a fault-tolerant design and no moving parts.</li>
            </ul>
            <p>Although the aforementioned technical benefits are impressive on their own, to Augustine, the largest benefit of the company’s decision to partner with Yellowbrick has been its commitment to Catalina’s success. "To me, Yellowbrick is a lot more than just great hardware," he says. "What really impressed me was the great service and support. From the very beginning of the project, our partnership with Yellowbrick has gave us confidence that what we were doing would work out well—and it has."</p>
          </div>
        </div>
        <div class="w-full md:w-5/12 relative">
          <FeaturedStat
            alt-attribute="Catalina only needed 16 weeks for pain-free migration"
            icon-name="server-heavy-lifting.svg"
            featured-title="182X faster"
            featured-phrase="Query performance up to 182X better"
            first="true"
          />

          <FeaturedStat
            alt-attribute="Catalina experienced 182 times faster query performance"
            icon-name="tacometer.svg"
            featured-title="10TB/hour"
            featured-phrase="Data load speeds of up to 10TB/hour"
          />

          <FeaturedStat
            alt-attribute="Catalina has 100 power users running complex, ad hoc queries"
            icon-name="personnel.svg"
            featured-title="100 power users"
            featured-phrase="Running complex, ad hoc queries"
          />
          <div class="bg-white shadow-lg mt-12 p-10 relative text-gray-500 performance-bg pb-10 relative">
            <span class="rfs-text-3xl">"Our Yellowbrick system has made our Analytics team a lot more productive. These are power users doing deep and complex analytics—using tools like Python, R and SAS to query three years of point-of-sale data."</span>
            <p class="mt-8">- Aaron Augustine,<br>Executive Director of Analytics Architecture<br>Catalina Marketing</p>
            <span class="accent z-10"></span>
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
      title: 'Yellowbrick improves query performance by 182x for Catalina Marketing',
      meta: [{
          key: 'description',
          name: 'description',
          content: 'Catalina is also looking at how it can take advantage of Yellowbrick’s hybrid cloud architecture to help the company move its computing workloads to the cloud. '
        },
        {
          key: 'og:description',
          name: 'og:description',
          content: 'description',
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: 'description',
        }
      ]
    },
    components: {
      Details,
      FeaturedStat,
      MoreInfo
    }
  }
</script>