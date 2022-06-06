<style scoped>
  .hero {
    background-image: url(/uploads/images/tall-bg.svg);
    background-size: cover;
    background-position: center;
  }

  .embellish-bg {
    background-image: url(/uploads/images/predictability-bg.svg);
    background-position: bottom right;
    background-repeat: no-repeat;
    background-size: 39%;
  }

  .multi-column {
    column-count: 1;
    column-gap: 0;
  }

  @media (min-width: 768px) {
    .multi-column {
      column-count: 2;
      column-gap: 2.5rem;
    }
  }

  .break-plane {
    top: -3rem;
    z-index: 40;
  }

  .stroke-main {
    stroke: #4b5458;
    stroke-width: 3px;
  }

  .stroke-accent {
    stroke: #fecf41;
    stroke-width: 2.5px;
  }

  .active {
    display: none;
  }

  .gate-form {
    min-height: 300px;
  }

  .expand-enter-active,
  .expand-leave-active {
    transition-property: opacity, height;
  }

  .expand-enter,
  .expand-leave-to {
    opacity: 0;
  }
</style>

<template>
  <Layout>

    <section class="hero flex bg-gray-700 py-12 md:py-24 text-white px-6 xl:px-0">
      <div class="flex flex-col max-w-1200 w-full mx-auto z-10">
        <div class="w-full md:w-1/2">
          <span class="rfs-text-xl text-yellow1 mb-0">Stop Feeding the Beast:</span>
          <h1 class="rfs-text-6xl leading-none">Migrate Teradata Workloads for 10X Performance at a Fraction of the Cost</h1>
        </div>
      </div>
    </section>

    <section class="bg-white py-12 md:py-24 md:pb-32 px-6 xl:px-0">
      <div class="mx-auto w-full max-w-1200">
        <div class="flex flex-col md:flex-row mx-0 md:-mx-6 text-gray-500">
          <div class="w-full md:w-1/3 px-6 mb-16 md:mb-0">
            <h2 class="rfs-text-6xl font-semibold -my-2 leading-tight text-teal">10X</h2>
            <h3 class="rfs-text-4xl leading-none">Performance</h3>
            <p>Yellowbrick scales to the largest data sets—all the way to hundreds of petabytes—with performance typically 10X faster versus legacy Teradata.</p>
            <!-- <g-link to="/resources/case-studies/top-financial-services-company/" class="button yellow">Read Case Study</g-link> -->
          </div>
          <div class="w-full md:w-1/3 px-6 mb-16 md:mb-0">
            <h2 class="rfs-text-6xl font-semibold -my-2 leading-tight text-teal">Seamless</h2>
            <h3 class="rfs-text-4xl leading-none">Migration</h3>
            <p>Yellowbrick is based on PostgreSQL and natively supports stored procedures, significantly reducing the time you need to migrate data from Teradata.</p>
            <!-- <g-link to="/resources/case-studies/symphony-retail-AI/" class="button yellow">Read Case Study</g-link> -->
          </div>
          <div class="w-full md:w-1/3 px-6 mb-16 md:mb-0">
            <h2 class="rfs-text-6xl font-semibold -my-2 leading-tight text-teal">Fraction</h2>
            <h3 class="rfs-text-4xl leading-none">of the Cost</h3>
            <p>Yellowbrick has predictable subscription pricing, with no hidden costs and no extra charges for data movement.</p>
            <!-- <g-link to="/resources/case-studies/teoco/" class="button yellow">Read Case Study</g-link> -->
          </div>
        </div>
      </div>
    </section>

    <section class="flex pb-8 bg-gray-100 px-6 xl:px-0">
      <div class="flex flex-col justify-center max-w-1200 mx-auto">
        <div class="break-plane p-10 bg-white shadow-lg relative">
          <span class="accent"></span>
          <h3 class="text-gray-500 mb-8">Tired of "Feeding the Beast"?</h3>
          <div class="text-gray-500 w-full">
            <p class="rfs-text-lg">Any way you look at it, Teradata’s data warehouse is a beast – huge, complex, lots of syntax and indices to configure, unpredictable performance, low concurrency and requires an army of highly trained DBAs to keep
              it running all with an extremely high price tag. Isn’t it time to stop feeding the beast?</p>

            <transition-expand>
              <div v-if="expanded">
                <p class="rfs-text-lg">Native cloud data warehouses get rid of some of the complexity, but their price points are not much lower due to hidden costs – especially if you need a data warehouse that runs 24/7 just like your business
                  does.</p>
                <p class="rfs-text-lg">Yellowbrick is built to manage large datasets, on the scale of petabytes, with up to 10X faster performance than your Teradata system and thousands of users querying data concurrently. Yellowbrick’s hybrid
                  cloud architecture enables your users to run workloads both on-premises and in the cloud from any major public cloud. With Yellowbrick you aren’t locked-in to any particular cloud and have the flexibility to move your data where
                  your business needs it. Yellowbrick’s PostgreSQL support means that you don’t have to re-write or re-tool any scripts – your applications will work seamlessly right away.</p>
                <p class="rfs-text-lg">With Yellowbrick, migration away from Teradata is easy with low risk. Now is the time to stop feeding the beast and get the best performance from the fastest hybrid cloud data warehouse available at a fraction
                  of the cost.</p>
              </div>
            </transition-expand>

            <button @click="expanded = !expanded" class="button dark">
              {{ expanded ? `Read Less` : `Read More` }}
            </button>

          </div>
        </div>

      </div>
    </section>

    <section class="bg-gray-100 pb-12 px-6 xl:px-0">
      <div class="mx-auto w-full max-w-1200">
        <h2 class="accent-heading">Downloadable Resources</h2>
        <div class="flex flex-col sm:flex-row flex-wrap -mx-4 md:-mx-8">
          <div class="w-full sm:w-1/2 p-4 md:p-8">
            <div class="flex flex-col md:flex-row">
              <div class="w-5/12 pr-0 md:pr-5">
                <img src="/uploads/images/tera-pdf.png" alt="" class="shadow-md" />
              </div>
              <div class="w-full md:w-1/2">
                <div class="font-semibold rfs-text-lg">Featured eBook:</div>
                <h5 class="mb-6">Migrating Teradata Workloads to Yellowbrick</h5>
                <a href="/resources/migration-guides/teradata/" class="button yellow" target="_blank">Read Guide</a>
              </div>
            </div>
          </div>

          <div class="w-full sm:w-1/2 p-4 md:p-8">
            <div class="flex flex-col md:flex-row">
              <div class="w-5/12 pr-0 md:pr-5">
                <img src="/uploads/thumb-data-sheet-teradata-migration.png" alt="" class="shadow-md" />
              </div>
              <div class="w-full md:w-1/2">
                <div class="font-semibold rfs-text-lg">Brief:</div>
                <h5 class="mb-6">Comparing Yellowbrick with Teradata</h5>
                <a href="https://ww2.yellowbrick.com/hubfs/Resources/Data-Sheets/DS_Yellowbrick%20versus%20Teradata.pdf" class="button yellow" target="_blank">Read Brief</a>
              </div>
            </div>
          </div>

          <div class="w-full sm:w-1/2 p-4 md:p-8">
            <div class="flex flex-col md:flex-row">
              <div class="w-5/12 pr-0 md:pr-5">
                <img src="/uploads/economic-benefits-of-yellowbrick.jpg" alt="" class="shadow-md" />
              </div>
              <div class="w-full md:w-1/2">
                <div class="font-semibold rfs-text-lg">Economic Report:</div>
                <h5 class="mb-6">The Economic Benefits of Yellowbrick</h5>
                <a href="/uploads/esg-economic-validation-report-oct-2020.pdf" class="button yellow" target="_blank">Get the Report</a>
              </div>
            </div>
          </div>

          <div class="w-full sm:w-1/2 p-4 md:p-8">
            <div class="flex flex-col md:flex-row">
              <div class="w-5/12 pr-0 md:pr-5">
                <img src="/uploads/thumb-partner-brief-coffing-data-warehouse.png" alt="" class="shadow-md" />
              </div>
              <div class="w-full md:w-1/2">
                <div class="font-semibold rfs-text-lg">Partner Brief:</div>
                <h5 class="mb-6">Fast Migrations with Coffing Data Warehouse</h5>
                <a href="https://ww2.yellowbrick.com/hubfs/Resources/Briefs/Partner-Briefs/BRIEF%20Yellowbrick%20Coffing.pdf" class="button yellow ungated-asset" id="coffing-data-warehouse-brief" target="_blank">Read Brief</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="flex pb-8 bg-gray-500 py-16 px-6 xl:px-0 embellish-bg">
      <div class="max-w-1200 w-full text-white mx-auto">
        <h2>Real Customer Stories</h2>
        <div class="flex flex-col md:flex-row -mx-10">
          <div class="flex w-full md:w-1/2 p-10 text-gray-500">
            <div class="p-10 bg-white shadow-lg">
              <h4 class="accent-heading">Large Health Care Insurance Provider</h4>
              <p>A large national health and wellness organization migrated billions of rows of customer data from Teradata directly into a Yellowbrick system. Installation was completed in fewer than four hours, and meaningful results were derived
                from migrated data in less than two days.</p>
              <p class="mb-2">Other benefits include:</p>
              <ul class="rfs-text-base">
                <li>Very little administration required</li>
                <li>Subsecond out-of-the-box performance with little to no tuning required</li>
                <li>Multiple Teradata racks consolidated into 10u of Yellowbrick equipment</li>
                <li>Consistent ad hoc query performance</li>
              </ul>
            </div>
          </div>

          <div class="flex w-full md:w-1/2 p-10 text-gray-500">
            <div class="p-10 bg-white shadow-lg">
              <h4 class="accent-heading">Top 10 Financial Services Company</h4>
              <p>In evaluating its options for data lake augmentation, a top 10 financial services company compared a 15-node, 6U Yellowbrick system against a 20-rack Teradata 6800. The company loaded two years of historical data from MapR into each
                system and then evaluated their performance across a set of 240 queries, with Yellowbrick beating the Teradata system on all but two.</p>

              <p>Shortly thereafter, the company purchased its first Yellowbrick system, which has become the company’s primary enterprise data warehouse. Every new transaction across the company’s lines of business is loaded into Yellowbrick,
                which, thanks to the system’s 5PB capacity, is able to store five full years of transaction data. Even better, thanks to Yellowbrick’s unique architecture, all of this data remains “hot” at all times, making it instantly queryable
                for thousands of daily users.</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="flex pb-8 bg-white py-16 px-6 xl:px-0">
      <div class="max-w-1200 mx-auto">
        <h3>With Yellowbrick you have:</h3>
        <div class="flex flex-col md:flex-row flex-wrap mx-0 md:-mx-6">

          <div class="w-full md:w-1/2 p-6 flex flex-col sm:flex-row items-start">
            <img src="~@/assets/images/icons/checkmark-2.svg" class="w-16" />
            <p class="pl-0 sm:pl-6"><span class="rfs-text-2xl">Best Price/Performance</span><br>Yellowbrick scales to the largest data sets—all the way to hundreds of petabytes—with performance typically 10X faster than legacy Teradata, and all at a
              fraction of the cost. Yellowbrick has predictable subscription pricing, with no hidden costs and no extra charges for data movement.</p>
          </div>

          <div class="w-full md:w-1/2 p-6 flex flex-col sm:flex-row items-start">
            <img src="~@/assets/images/icons/checkmark-2.svg" class="w-16" />
            <p class="pl-0 sm:pl-6"><span class="rfs-text-2xl">Flexibility with No Lock-in</span><br>Yellowbrick’s innovations enable you to deploy a modern data warehouse with high scalability either on premises in a private cloud, in the public
              cloud, or both. Yellowbrick supports all major cloud platforms so you’re not locked in to a particular vendor, providing you with ultimate flexibility in deployment options. Furthermore, users can run queries on the same data from
              multiple clouds simultaneously.</p>
          </div>

          <div class="w-full md:w-1/2 p-6 flex flex-col sm:flex-row items-start">
            <img src="~@/assets/images/icons/checkmark-2.svg" class="w-16" />
            <p class="pl-0 sm:pl-6"><span class="rfs-text-2xl">Reduce Footprint</span><br>Yellowbrick helps you meet infrastructure reduction initiatives with a cloud solution that can completely eliminate the data warehouse footprint, while the
              on-premises solution can shrink racks of hardware and shelves of disks to just 6U of space. The Yellowbrick system’s highly available architecture has no single point of failure and built-in redundancy, so you don’t have to add extra
              instances for added resiliency.</p>
          </div>

          <div class="w-full md:w-1/2 p-6 flex flex-col sm:flex-row items-start">
            <img src="~@/assets/images/icons/checkmark-2.svg" class="w-16" />
            <p class="pl-0 sm:pl-6"><span class="rfs-text-2xl">Seamless Integration</span><br>Yellowbrick is based on PostgreSQL and natively supports stored procedures, significantly reducing the time you need to migrate data from Teradata. It
              works out of the box with BI tools (Tableau, MicroStrategy, SAS, Microsoft PowerBI, and others) that speak ANSI SQL, as well as with Python and R programming languages.</p>
          </div>

          <div class="w-full md:w-1/2 p-6 flex flex-col sm:flex-row items-start">
            <img src="~@/assets/images/icons/checkmark-2.svg" class="w-16" />
            <p class="pl-0 sm:pl-6"><span class="rfs-text-2xl">Broad Ecosystem</span><br>Yellowbrick works with a variety of partners to help ease and simplify the migration of your data to a Yellowbrick system. These partners offer migration tools,
              consulting services, and more to ensure your migration is as successful as possible.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="flex flex-col py-12 md:py-24 bg-gray-100 px-6 xl:px-0">
      <div class="flex flex-col sm:flex-row justify-center max-w-1200 mx-auto pb-20">
        <div class="w-full sm:w-1/2 px-6 pb-6 md:pb-0">
          <img src="/uploads/thumb-webinar-migrate-teradata-workloads.png" alt="Teradata migration" />
        </div>
        <div class="w-full sm:w-1/2 px-6">
          <h5 class="mb-0 text-gray-500">On-Demand Webinar:</h5>
          <h3>Real-time Migration from Teradata</h3>
          <p>Migration away from a legacy data warehouse is complex and typically requires lots of operational overhead. Yellowbrick and Next Pathway, cloud migration industry leader, have partnered together to provide enterprises with an end-to-end
            solution that eases the migration from legacy data warehouse technologies such as Teradata to Yellowbrick’s modern hybrid cloud data warehouse.</p>
          <a href="/go/yellowbrick-next-pathway/" class="button yellow">Watch Now</a>
        </div>
      </div>
      <!-- </section>

    <section class="flex py-12 md:py-24 bg-gray-100 px-6 xl:px-0"> -->
      <div class="flex flex-col sm:flex-row justify-center max-w-1200 mx-auto">
        <div class="w-full sm:w-1/2 px-6 pb-6 md:pb-0">
          <img src="/uploads/blog-load-and-go-coffing-nexus.png" alt="Coffing Data Warehouse Webinar" />
        </div>
        <div class="w-full sm:w-1/2 px-6">
          <h5 class="mb-0 text-gray-500">On-Demand Webinar:</h5>
          <h3>Load & Go with Yellowbrick and Nexus</h3>
          <p>Yellowbrick Data Warehouse offers the best price/performance in the industry, while Coffing Data Warehousing's Nexus products make it quick and easy to move millions of rows out of Teradata, Oracle, SQL Server, DB2, Snowflake, or
            Redshift, and join and query multiple tables across different systems.</p>
          <a href="/go/load-and-go-with-yellowbrick-and-nexus-webinar/" class="button yellow">Watch Now</a>
        </div>
      </div>
    </section>


    <section class="flex flex-col bg-gray-700 py-16 px-6 xl:px-0 text-white">
      <div class="max-w-1200 mx-auto text-white">
        <div class="flex flex-row lg:flex-row md:flex-col items-center">
          <div class="w-full lg:w-1/2 pr-0 lg:pr-8">
            <h2>Migration Partners</h2>
            <p class="">Move your data away from Teradata easily and quickly with Yellowbrick’s best of breed partners. Our partners help you plan your transition, understand your data flows, and manage your cutover to the Yellowbrick platform.</p>
            <a href="/uploads/BRIEF_Yellowbrick_Next_Pathway.pdf" class="button yellow mr-4 mb-4 sm:mb-0">Next Pathway</a>
            <a href="/uploads/BRIEF_Yellowbrick_Systech.pdf" class="button yellow mr-4 mb-4 sm:mb-0">Systech</a>
            <a href="https://ww2.yellowbrick.com/hubfs/Resources/Briefs/Partner-Briefs/BRIEF%20Yellowbrick%20Coffing.pdf" class="button yellow">Coffing</a>
          </div>
          <div class="flex flex-col sm:flex-row flex-wrap w-full lg:w-1/2 pl-0 lg:pl-8">
            <img src="/uploads/partners-nextpathway.svg" class="w-full sm:w-1/3 p-8" />
            <img src="/uploads/partners-systech.svg" class="w-full sm:w-1/3 p-8" />
            <img src="/uploads/partners-coffing.svg" class="w-full sm:w-1/3 p-8" />
          </div>
        </div>
      </div>
      <div class="mx-auto w-full mt-8 lg:my-8 max-w-1200">
        <div class="flex flex-col sm:flex-row flex-wrap -mx-4 md:-mx-8">
          <div class="w-full sm:w-1/2 p-4 md:p-8">
            <div class="flex flex-col md:flex-row">
              <div class="w-5/12 pr-0 md:pr-5">
                <img src="/uploads/mg-teradata-nextpathway-thumb.jpg" alt="" class="shadow-md" />
              </div>
              <div class="w-full md:w-1/2">
                <div class="font-semibold rfs-text-lg">Migration Guide:</div>
                <h5 class="mb-6">Teradata to Yellowbrick Hybrid Data Warehouse</h5>
                <a href="/uploads/GUIDE_Teradata_Yellowbrick_Migration.pdf" class="button yellow" target="_blank">Get the Guide</a>
              </div>
            </div>
          </div>
          <div class="w-full sm:w-1/2 p-4 md:p-8">
            <div class="flex flex-col md:flex-row">
              <div class="w-5/12 pr-0 md:pr-5">
                <img src="/uploads/Yellowbrick_NextPathway_solution_brief_thumb.jpg" alt="" class="shadow-md" />
              </div>
              <div class="w-full md:w-1/2">
                <div class="font-semibold rfs-text-lg">Partner Solution Brief:</div>
                <h5 class="mb-6">Modernize Your Data Warehouse in Minutes</h5>
                <a href="/resources/solutions-briefs/modernize-with-next-pathway/" class="button yellow ungated-asset" id="coffing-data-warehouse-brief" target="_blank">Read Brief</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <MoreInfoTeradata />

  </Layout>
</template>

<script>
  import MoreInfoTeradata from '~/components/MoreInfoTeradata.vue'
  import TransitionExpand from '~/components/TransitionExpand.vue'

  export default {
    metaInfo: {
      title: 'Teradata Migration to Yellowbrick Data Warehouse',
      meta: [{
          key: 'description',
          name: 'description',
          content: 'Yellowbrick Data Warehouse enables interactive ad hoc analytics on Teradata-scale datasets with ease—but at a fraction of the cost and without the complexity and management headaches.'
        },
        {
          key: 'og:description',
          name: "og:description",
          content: 'Yellowbrick Data Warehouse enables interactive ad hoc analytics on Teradata-scale datasets with ease—but at a fraction of the cost and without the complexity and management headaches.'
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: 'Yellowbrick Data Warehouse enables interactive ad hoc analytics on Teradata-scale datasets with ease—but at a fraction of the cost and without the complexity and management headaches.'
        },
        {
          key: 'og:title',
          name: 'og:title',
          content: 'Teradata Migration to Yellowbrick Data Warehouse'
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: 'Teradata Migration to Yellowbrick Data Warehouse'
        }
      ]
    },
    components: {
      MoreInfoTeradata,
      TransitionExpand
    },
    data() {
      return {
        expanded: false,
      };
    }

  }
</script>