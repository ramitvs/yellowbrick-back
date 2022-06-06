<style scoped>
  .hero {
    background-image: url(/uploads/images/hero-alt-bg.svg);
    background-size: cover;
    background-position: center center;

    &:before {
      height: 2rem;
    }
  }

  .freedom-bg {
    background-image: url(/uploads/images/freedom-bg.svg);
    background-position: bottom right;
    background-repeat: no-repeat;
    background-size: 45%;
  }

  .float-form {
    @apply relative p-8 bg-gray-200 shadow-lg;
  }
</style>

<template>
  <Layout>
    <section class="hero flex bg-gray-700 py-10 md:py-12 text-white px-6 xl:px-0">
      <div class="flex flex-col md:flex-row max-w-1200 w-full py-8 mx-auto relative z-10">
        <div class="flex flex-col w-full md:w-2/3 p-0 md:pr-16 text-white">
          <div class="flex flex-col">
            <h5 class="text-yellow1 mb-2">Migration Guide:</h5>
            <h1 class="p-0">Automated migration from SQL Server to Yellowbrick with Nexus Server</h1>
          </div>


        </div>
        <div class="w-full md:w-1/3">
          <div class="float-form">
            <h3 class="text-gray-700">Read it Now</h3>
            <img src="/uploads/nexus-thumbnail.png" alt="Netezza Migration Guide" class="flex w-full  shadow-lg mr-8 self-start" />
            <a class="button yellow basehubspot-button" href="https://ww2.yellowbrick.com/hubfs/Resources/Migration%20Guides/MIGRATION%20GUIDE%20Automated%20migration%20from%20SQL%20Server%20to%20Yellowbrick%20with%20Nexus%20Server.pdf "
              style="margin-top: 30px;">Read Now</a>
          </div>
        </div>
      </div>
    </section>
    <base-section class="nexus rfs-text-lg">
      <div class="flex flex-col  text-left" style="display: inline;">
        <h3>Replace SQL Server with Yellowbrick for 100X performance at a fraction of the cost</h3>
        <p class="rfs-text-lg">Replacing SQL Server databases with Yellowbrick Data Warehouse brings the power of interactive, ad hoc
          analytics to thousands of users, simplifies operations, and reduces costs. </p>

        <ul>
          <li>
            <p>
              <span>Analyze Data 100X Faster:</span>
              Designed for highly optimized MPP analytics, Yellowbrick enables real-time, ad-hoc queries for thousands of users, far beyond what SQL Server can achieve.
            </p>
          </li>
          <li>
            <p>
              <span>Consolidate disparate databases:</span>
              Yellowbrick Data Warehouse can scale from single TBs to multiple PBs,
              offering a way to combine multiple SQL Server databases into a single, easy-to manage instance. Or, easily
              replicate data from SQL Server to Yellowbrick for Change Data Capture scenarios.
            </p>
          </li>
          <li>
            <p>
              <span>Simplify management:</span>
              With Yellowbrick, unlike SQL Server, there’s no need for manual time-consuming
              tasks like query tuning or building indexes. PostgreSQL compatibility ensures access to common skill sets.
            </p>
          </li>
          <li>
            <p>
              <span>Count on rock-solid reliability:</span>
              Yellowbrickʼs Advanced Workload Management offers granular control of
              workloads to prioritize concurrent queries across massive amounts of data, bringing added reliability and
              performance.
            </p>
          </li>
          <li>
            <p>
              <span>Grow along with the business: </span>
              Yellowbrick instances can be expanded easily without downtime, eliminating
              any impact on operations.
            </p>
          </li>
          <li>
            <p>
              <span>Fit into the Windows world:</span>
              Yellowbrick integrates with Microsoft Active Directory, and for cloud
              deployments, functions as a Private Link Service in Azure. Plus, Power BI and a full range of other enterprise
              ecosystem tools are supported
            </p>
          </li>
        </ul>
      </div>
    </base-section>


  </Layout>
</template>

<script>
  import GoCustomers from "~/components/GoCustomers.vue";
  import Layout from '~/layouts/Landing.vue';

  export default {
    metaInfo: {
      title: 'Netezza Migration Guide',
      meta: [{
          key: 'description',
          name: 'description',
          content: 'Replace SQL Server with Yellowbrick for 100X performance at a fraction of the cost'
        },
        {
          key: 'og:description',
          name: "og:description",
          content: 'Replace SQL Server with Yellowbrick for 100X performance at a fraction of the cost'
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: 'Replace SQL Server with Yellowbrick for 100X performance at a fraction of the cost'
        },
        {
          key: 'og:title',
          name: 'og:title',
          content: 'Automated migration from SQL Server to Yellowbrick with Nexus Server'
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: 'Automated migration from SQL Server to Yellowbrick with Nexus Server'
        }
      ]
    },
    components: {
      GoCustomers,
      Layout
    }
  };
</script>

<style>
  .nexus ul li p span {
    font-weight: bold !important;

  }
</style>