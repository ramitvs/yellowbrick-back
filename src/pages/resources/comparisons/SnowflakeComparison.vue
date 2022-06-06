<style scoped>
  .hero {
    background-image: url('/uploads/YBBanner_Snowfl-YB-Comp.png');
    background-size: cover;
    background-position: center;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      @apply bg-gray-700 absolute z-0;
      opacity: .7;
    }
  }

  .stat-row .yb-icon:before {
    left: unset;
  }

  .table-header {
    font-size: 1.5em;
  }

  .table-header .heading-row.md\:w-1\/2 {
    width: 50%;
  }

  .checkmark-x,
  .checkmark-y {
    height: 25px;
    width: 25px;
  }

  .tableStat-header .stat-row:nth-child(1) {
    position: relative;
    min-width: 346px;
    text-align: left;
    border-right: solid 1px #4B5459;
    font-weight: 500;
    align-items: flex-start;
  }

  .additional-resources-row {
    align-items: center;
  }

  @media (min-width: 100px) {
    .lg\:block {
      display: block;
    }
  }

  .lg\:w-5\/12 {
    width: 50%;
  }

  .text-yellow {
    color: #FFCD32;
  }

  .checkmark-x {
    background-color: transparent !important;
  }

  @media (min-width:600px) and (max-width:767px) {
    .table-header .heading-row.md\:w-1\/2 {
      width: 100%;
    }

    .tableStat-header .stat-row:nth-child(1) {
      position: relative;
      min-width: 198px;
      text-align: left;
      border-right: solid 1px #4B5459;
      font-weight: 500;
      align-items: flex-start;
    }
  }
  @media only screen and (min-width: 1200px) and (max-width: 2100px) {
  .ar-mid h5{
    margin-bottom: 48.25px !important;
  }
  }
  @media only screen and (max-width: 599px) and (min-width: 400px) {
    .tableStat-header .stat-row:nth-child(1) {

      min-width: 146px !important;
      text-align: left;
      border-right: solid 1px #4B5459;
      font-weight: 500;
      align-items: flex-start;
    }

    .table-header .heading-row.md\:w-1\/2 {
      width: 100%;
    }
  }

  @media only screen and (max-width: 499px) and (min-width: 320px) {
    .tableStat-header .stat-row:nth-child(1) {
      position: relative;
      min-width: 130px;
      text-align: left;
      border-right: solid 1px #4B5459;
      font-weight: 500;
      align-items: flex-start;
    }

    .table-header {
      font-size: 1.2em;
    }

    .table-header .heading-row.md\:w-1\/2 {
      width: 129%;
    }

    .table-header {
      font-size: 1.1em;

    }
  }

  .hubspot-button-wrapper>>>.hs-button {
    background: none;
  }

  a.arrow {
    font-weight: normal;
  }
  .ar-1{
      margin-top: 80px;
    font-size: 22px;
    font-weight: 600 !important;
    line-height: 24px;
    font-family: Source Sans Pro !important;
    line-height: 20px;
  }
  .ar-wrapper h5{
    min-height: 100px !important;

  }

</style>
<template>
  <Layout>

    <section class="hero flex bg-gray-700 py-12 md:py-24 text-white px-6 xl:px-0 bg-hero">
      <div class="flex flex-col max-w-1200 w-full mx-auto z-10">
        <div class="w-full md:w-1/2 lg:w-5/12">
          <h1 class="rfs-text-6xl">How Yellowbrick Data&nbspWarehouse <span class="text-yellow">Outperforms</span> Snowflake</h1>
        </div>
      </div>
    </section>
    <section class="bg-white pt-12 md:pt-16 px-6 xl:px-0">
      <div class="max-w-1200 w-full mx-auto">
        <h2 class="accent-heading mb-6 text-gray-500">Budgeting Made Simple</h2>
        <p class=" mb-6">Snowflake’s consumption model, where you purchase credits up front and then burn through them while your <b>virtual data warehouses</b> are running, makes it near impossible to determine the costs because you don’t know
          how long your queries will take to run, particularly in a mixed workload environment.</p>
        <p class=" mb-6">This is especially the case for ad hoc, discovery workloads that are very data and query
          dependent. This restricts innovation, as business analysts and data scientists/engineers
          must now become cost-conscious or risk exceeding their analytics budget given the
          open-ended nature of this type of work. Snowflake’s autoscaling makes the cost situation
          even harder to predict, as scaling out your cluster dynamically in response to new
          workloads or concurrent users means doubling the size of the cluster. You might find
          yourself doubling costs just because you’ve added a single new user to the system. </p>
        <p class=" mb-6">Snowflake isn’t interested in making its software more efficient as it would impact
          its business model. Since Snowflake has no workload management, the only way to
          improve performance is to double the nodes and the costs.</p>
        <p class=" mb-6">
          With Yellowbrick, you don’t buy credits, you simply decide what size of data warehouse you want in terms of
          the number of nodes and pay a <a href="/pricing">flat subscription</a> for the software over a 1- or 3-year term for that number of
          nodes.
        </p>
        <ul>
          <li>
            It’s an “all you can eat” deal – you can consume as much of Yellowbrick as you like, 24x7 and 365 days of the
            year, without worrying about cost overruns at a fixed cost. The more queries you run, the lower cost per
            query.
          </li>
          <li>
            If you need to scale, you can add nodes to Yellowbrick one node at a time and we’ll only charge you a pro
            rated amount for the extra nodes you use – no huge step changes in cost.
          </li>
          <li>
            Yellowbrick was designed from the ground up to be the most efficient database in the world and we do more
            with less, saving you money
          </li>
        </ul>
      </div>
    </section>
    <section class="bg-white pt-12 md:pt-16 px-6 xl:px-0">
      <div class="max-w-1200 w-full mx-auto">
        <h2 class="accent-heading mb-6 text-gray-500">Query Performance Comparison</h2>
        <p class=" mb-6">Yellowbrick is regularly benchmarked against other <b>data warehousing solutions</b> during the procurement process. In this document we present query performance comparisons from real world benchmarks against Snowflake.
          This benchmark was conducted by a customer using its own data and query workloads.</p>
        <p class=" mb-6">Snowflake is an MPP cloud data warehouse, which is delivered “as-a-service” on all three major public clouds. Advocates of Snowflake cite its elasticity features, its ability to share data easily and its compelling
          user experience. While it is certainly true that Snowflake has made data warehousing more accessible to many smaller enterprises, its performance struggles when data volumes and concurrency requirements are higher and mixed workloads get
          more complex. Snowflake’s answer to higher concurrency and query volumes is to spin up more virtual data warehouses, which means partitioning up your users and workloads manually. This quickly becomes cost prohibitive, particularly if you
          are running business-critical “always-on” applications.</p>
        <p class=" mb-6">A customer in the digital marketing space wanted to reduce the time to insight into campaign performance for its clients, who are primarily in the financial services sector. The customer decided to replace its
          existing 40-node Vertica data warehouse platform to drive the improvements in performance needed from its advertising platform. The customer ran proof of concept exercises with Snowflake and Yellowbrick to identify the replacement. As part
          of the POC, it conducted query performance tests using 12 representative SQL workloads against its own data. The data consisted of 3.5 trillion records distributed across 82 tables, with a volume of approximately 500 TB. </p>
      </div>
    </section>
    <section class="bg-gray-100 pb-6 pt-12 px-6 xl:px-0">
      <div class="flex flex-col md:flex-row flex-1 justify-center max-w-1200 mx-auto">
        <div class="w-full md:width-1/2 pr-0 md:pr-8">
          <h4 class="mb-6 text-center text-gray-500">Shorter Queries</h4>

          <p class=" mb-6">The query tests compared a 32-node 2XL Snowflake cluster with a 30-node Yellowbrick cluster. Yellowbrick was 6X faster on average across all 12 queries. Ten of the queries had runtimes less than 2 minutes on both
            platforms:</p>


          <div class="px-0 sm:px-10 mb-6">
            <button @click="displayChart = !displayChart">
              <img src="/uploads/Shorter-queries-graph.png" alt="Shorter Queries Graph" />
              <span class="inline-flex items-center pt-4">
                <expand-arrows class="pr-2"></expand-arrows>(click to enlarge)
              </span>
            </button>

            <modal-dialog v-if="displayChart" @close="displayChart=false">
              <img src="/uploads/Shorter-queries-graph.png" alt="snowflake query performance" />
            </modal-dialog>
          </div>
        </div>

        <div class="w-full md:width-1/2  pl-0 md:pl-2 pr-0 md:pr-6">
          <h4 class="mb-6 text-center text-gray-500">Longer Queries</h4>

          <p class=" mb-6">The queries ranged in complexity from simple aggregations to complex joins and large updates. Yellowbrick was 147X faster in the case of one of the longest running queries involving a semi-join scanning over a
            year of data:</p>
          <div class="px-0 sm:px-10 mb-6">
            <button @click="displayChart2 = !displayChart2">
              <img src="/uploads/Longer-queries.png" alt="Longer Queries Graph" />
              <span class="inline-flex items-center pt-4">
                <expand-arrows class="pr-2"></expand-arrows>(click to enlarge)
              </span>
            </button>

            <modal-dialog v-if="displayChart2" @close="displayChart2=false">
              <img src="/uploads/Longer-queries.png" alt="snowflake improve query performance" />
            </modal-dialog>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white pt-6 px-6 xl:px-0">
      <div class="max-w-1200 w-full mx-auto">
        <p class=" mb-6">In addition to outperforming Snowflake in terms of query performance, Yellowbrick was also able to demonstrate a significant improvement in performance of critical ELT tasks, taking ELT times down from over 10
          hours to just 45 minutes. Near real-time data ingestion was also important to the customer and tests demonstrated that Yellowbrick was able to ingest data from Kafta topics at 2 million records per second, far exceeding the 900,000
          records/second requirement.</p>
        <p class=" mb-12">After selecting Yellowbrick, this customer can now update campaigns every 2 hours, enabling it to modify underperforming campaigns in flight, rather than having to let an obviously underperforming campaign run all
          day. This has helped the customer increase the performance of the upsell campaigns for their clients.</p>
      </div>
    </section>

    <section class="py-0 pt-6 pb-6 px-6 xl:px-0">
      <div class="max-w-1200 w-full mx-auto">
        <h2 class="accent-heading mb-6 text-gray-500">Service Features Comparison</h2>
        <p class=" mb-6">In a side-by-side comparison of <b>Yellowbrick vs. Snowflake</b>, it quickly becomes clear that Yellowbrick is in a league of its own. Simply put, Yellowbrick can do everything Snowflake can at a lower cost.
          Conversely, Snowflake simply does not offer the features and capabilities of Yellowbrick.</p>
        <p>To illustrate this stark contrast, please review the comparison chart below.</p>
      </div>
    </section>

    <section class="flex px-6 xl:px-0">
      <div class="hidden lg:block max-w-1200 mx-auto shadow">

        <div class="flex table-header">
          <div class="heading-row w-full md:w-1/2">
            Service Features
          </div>
          <div class="heading-row w-full md:w-1/4">
            Yellowbrick
          </div>
          <div class="heading-row w-full md:w-1/4">
            Snowflake
          </div>
        </div>

        <div class="flex tableStat-header">
          <div class="stat-row md:w-1/2">Predictable, low cost</div>
          <div class="stat-row md:w-1/4"><span class="checkmark-x"><img src="/uploads/YBEmblem.png"></img></span></div>
          <div class="stat-row md:w-1/4"><span class="checkmark-y" style="border: 1px solid Gray; height: 1px;"></span></div>
        </div>
        <div class="flex tableStat-header">
          <div class="stat-row md:w-1/2">Pay with money, not credits</div>
          <div class="stat-row md:w-1/4"><span class="checkmark-x"><img src="/uploads/YBEmblem.png"></img></span></div>
          <div class="stat-row md:w-1/4"><span class="checkmark-y" style="border: 1px solid Gray; height: 1px;"></span></div>
        </div>
        <div class="flex tableStat-header">
          <div class="stat-row md:w-1/2">Data Warehousing as a service (DWaaS) in your own Virtual Private Cloud (VPC)</div>
          <div class="stat-row md:w-1/4"><span class="checkmark-x"><img src="/uploads/YBEmblem.png"></img></span></div>
          <div class="stat-row md:w-1/4"><span class="checkmark-y" style="border: 1px solid Gray; height: 1px;"></span></div>
        </div>
        <div class="flex tableStat-header">
          <div class="stat-row md:w-1/2">Kubernetes-based architecture for hybrid/ distributed deployments</div>
          <div class="stat-row md:w-1/4"><span class="checkmark-x"><img src="/uploads/YBEmblem.png"></img></span></div>
          <div class="stat-row md:w-1/4"><span class="checkmark-y" style="border: 1px solid Gray; height: 1px;"></span></div>
        </div>
        <div class="flex tableStat-header">
          <div class="stat-row md:w-1/2">High concurrency, predictable latency</div>
          <div class="stat-row md:w-1/4"><span class="checkmark-x"><img src="/uploads/YBEmblem.png"></img></span></div>
          <div class="stat-row md:w-1/4"><span class="checkmark-y" style="border: 1px solid Gray; height: 1px;"></span></div>
        </div>
        <div class="flex tableStat-header">
          <div class="stat-row md:w-1/2">Workload management</div>
          <div class="stat-row md:w-1/4"><span class="checkmark-x"><img src="/uploads/YBEmblem.png"></img></span></div>
          <div class="stat-row md:w-1/4"><span class="checkmark-y" style="border: 1px solid Gray; height: 1px;"></span></div>
        </div>
        <div class="flex tableStat-header">
          <div class="stat-row md:w-1/2">Native, real-time streaming data ingest</div>
          <div class="stat-row md:w-1/4"><span class="checkmark-x"><img src="/uploads/YBEmblem.png"></img></span></div>
          <div class="stat-row md:w-1/4"><span class="checkmark-y" style="border: 1px solid Gray; height: 1px;"></span></div>
        </div>
        <div class="flex tableStat-header">
          <div class="stat-row md:w-1/2">Compatibility with on-premises ETL (Informatica PowerCenter, etc.)</div>
          <div class="stat-row md:w-1/4"><span class="checkmark-x"><img src="/uploads/YBEmblem.png"></img></span></div>
          <div class="stat-row md:w-1/4"><span class="checkmark-y" style="border: 1px solid Gray; height: 1px;"></span></div>
        </div>
        <div class="flex tableStat-header">
          <div class="stat-row md:w-1/2">Elastic with separate storage/compute</div>
          <div class="stat-row md:w-1/4"><span class="checkmark-x"><img src="/uploads/YBEmblem.png"></img></span></div>
          <div class="stat-row md:w-1/4"><span class="checkmark-y"><img src="/uploads/SFEmblem.png"></img></span></div>
        </div>
      </div>
    </section>

    <section class="pt-12 pb-0 px-6 xl:px-0">
      <div class="max-w-1200 w-full mx-auto">
        <p class=" mb-6">As acceptance of cloud data warehousing has grown, so have the challenges. That
          is where Yellowbrick takes the baton from Snowflake and moves data warehousing forward. Our service architecture was designed to address the concerns raised in the areas of support for hybrid/distributed cloud models, data and
          infrastructure
          ownership, predictable cost, performance and concurrency, workload management, and real-time streaming ingest.</p>
        <p class=" mb-6">If you want to learn more about how Yellowbrick offers the best data warehousing service in the industry at the most competitive price, take a look at the resources below.</p>
      </div>
    </section>

    <base-section class="bg-gray-100">
      <h4 class="rfs-text-4xl">Additional Resources</h4>
      <div class="flex flex-col sm:flex-row flex-wrap">

        <!-- Comparing Yellowbrick Data Warehouse to Snowflake -->
        <div class="flex flex-col md:flex-row w-full lg:w-1/3 md:w-1/2  p-4 ar-wrapper ar-mid">
          <img src="/uploads/thumb-whitepaper-yellowbrick-vs-snowflake.png" alt="Comparing Yellowbrick Data Warehouse to Snowflake" class="w-1/3 shadow-md self-start mb-12 md:mb-0" />
          <div class="flex flex-col pl-0 md:px-8 ar-wrapper">
            <h5 class="mb-6 ">Comparing Yellowbrick Data Warehouse to Snowflake</h5>
            <div class=" flex items-center  hubspot-button-wrapper">
              <BaseHubspot class="flex items-center " id="c826ff64-739d-4a46-8dc3-0b9552948d6a" sfid="7011G000000KaXQQA0" />
            </div>
          </div>
        </div>
        <!-- Query Performance Comparison -->
        <div class="flex flex-col md:flex-row w-full lg:w-1/3 md:w-1/2 p-4 ar-wrapper">
          <img src="/uploads/thumb-brief-snowflake-query-comparison.png" alt="Snowflake Query Comparison Brief" class="w-1/3 shadow-md self-start mb-12 md:mb-0" />
          <div class="flex flex-col pl-0 md:px-8">
            <h5 class="mb-6">Query Performance Comparison</h5>
<a data-v-b46e6e66="" data-v-c6c5ef5c="" id="hybrid-cloud-brief" href="https://ww2.yellowbrick.com/hubfs/Resources/Briefs/comparisons/BRIEF%20Yellowbrick%20Benchmarks%20Snowflake.pdf" target="_blank" class="button yellow ungated-asset ar-1">Download Now </a>
          </div>
        </div>


        <!-- Comparing Yellowbrick Data Warehouse to Snowflake -->
        <div class="flex flex-col md:flex-row w-full lg:w-1/3 md:w-1/2 p-4 ar-wrapper">
          <img src="/uploads/thumb-comparison-predict-snowflake-costs.png" alt="Yellowbrick vs Snowflake Cost Predictability" class="w-1/3 shadow-md self-start mb-12 md:mb-0" />
          <div class="flex flex-col pl-0 md:px-8">
            <h5 class="mb-6">Yellowbrick vs Snowflake Cost Predictability</h5>
<a data-v-b46e6e66="" data-v-c6c5ef5c="" id="hybrid-cloud-brief" href="https://ww2.yellowbrick.com/hubfs/Resources/Briefs/comparisons/BRIEF%20Yellowbrick%20Snowflake%20Cost%20Predictability.pdf" target="_blank" class="button yellow ungated-asset ar-1">Download Now </a>
          </div>
        </div>
      </div>
    </base-section>

    <!-- <base-section class="bg-white">
            <h3 class="rfs-text-4xl">Resources</h3>
            <div class="flex flex-col sm:flex-row flex-wrap">
              <div class="flex flex-col md:flex-row w-full md:w-1/2 p-4">
                <img src="/uploads/thumb-brief-snowflake-query-comparison.png" alt="Snowflake Query Comparison Brief" class="w-1/3 shadow-md self-start mb-12 md:mb-0" />
                <div class="flex flex-col pl-0 md:px-8">
                  <h5 class="mb-6">Query Performance Comparison</h5>
                  <a href="https://ww2.yellowbrick.com/hubfs/Resources/Briefs/comparisons/BRIEF%20Yellowbrick%20Benchmarks%20Snowflake.pdf" target="_blank" class="arrow flex items-center text-teal ">
                    Download<icon-arrow-right class="ml-2"></icon-arrow-right>
                  </a>
                </div>
              </div>
              <div class="flex flex-col md:flex-row w-full md:w-1/2 p-4">
                <img src="/uploads/thumb-whitepaper-yellowbrick-vs-snowflake.png" alt="Comparing Yellowbrick Data Warehouse to Snowflake" class="w-1/3 shadow-md self-start mb-12 md:mb-0" />
                <div class="flex flex-col pl-0 md:px-8">
                  <h5 class="mb-6">Comparing Yellowbrick Data Warehouse to Snowflake</h5>
                  <div>
                    <BaseHubspot class="arrow flex items-center text-teal " id="c826ff64-739d-4a46-8dc3-0b9552948d6a" sfid="7011G000000KaXQQA0" />
                    <icon-arrow-right class="ml-2"></icon-arrow-right>
                  </div>
                </div>
              </div>
            </div>
          </base-section> -->

  </Layout>
</template>

<script>
  import BaseSection from "~/components/BaseSection.vue";
  import TransitionExpand from "~/components/TransitionExpand.vue";
  import HubspotCTA from '../../../components/HubspotCTA.vue';
  import ExpandArrows from "~/components/icons/ExpandArrows.vue";
  import IconArrowRight from "~/components/icons/IconArrowRight.vue";
  import ModalDialog from "~/components/ModalDialog.vue";

  export default {
    metaInfo: {
          title: "Data Warehouse Platforms Snowflake Comparison - Yellowbrick Data",
      meta: [{
          key: "description",
          name: "description",
          content: "This competitive comparison of yellowbrick vs snowflake demonstrates how yellowbrick offers a superior data warehousing service.Snowflake has made data warehousing, its performance struggles when data volumes and concurrency requirements.",
        },
        {
          key: "og:description",
          name: "og:description",
            content: "This competitive comparison of yellowbrick vs snowflake demonstrates how yellowbrick offers a superior data warehousing service.Snowflake has made data warehousing, its performance struggles when data volumes and concurrency requirements.",
        },
        {
          key: "twitter:description",
          name: "twitter:description",
            content: "This competitive comparison of yellowbrick vs snowflake demonstrates how yellowbrick offers a superior data warehousing service.Snowflake has made data warehousing, its performance struggles when data volumes and concurrency requirements.",
        },
        {
          key: "og:title",
          name: "og:title",
            content: "Data Warehouse Platforms Snowflake Comparison - Yellowbrick Data",
        },
        {
          key: "twitter:title",
          name: "twitter:title",
            content: "Data Warehouse Platforms Snowflake Comparison - Yellowbrick Data",
        }, 
      ],
    },
    components: {
      BaseSection,
      TransitionExpand,
      HubspotCTA,
      ExpandArrows,
      IconArrowRight,
      ModalDialog
    },
    data() {
      return {
        expanded: false,
        displayChart: false,
        displayChart2: false
      };
    },
  };
</script>