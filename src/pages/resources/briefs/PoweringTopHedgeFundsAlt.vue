<style scoped>
  .hero-bg {
    background-image: url(/uploads/images/cloud-recovery-bg.svg);
    background-size: cover;
    background-position: center;
  }

  .hero-flex-container {
    align-items: center;
    justify-content: space-between;
  }

  .freedom-bg {
    background-image: url(/uploads/images/freedom-bg.svg);
    background-position: bottom right;
    background-repeat: no-repeat;
    background-size: 45%;
  }

  .performance-bg {
    background-image: url(/uploads/images/performance-bg.svg);
    background-position: bottom right;
    background-repeat: no-repeat;
    background-size: 45%;
  }

  .multi-column {
    column-count: 2;
    column-gap: 2.5rem;
  }

  .blue-bold-text {
    color: #00c3cd;
    font-weight: 400;
  }

  .brief-table-header {
    background-color: #4b5459;
    text-align: center;
    padding: 5px;
    font-size: 20px;
  }

  .brief-table-row:first-child {
    position: relative;
    text-align: left;
    border-right: 1px solid #4b5459;
    font-weight: 500;
    align-items: flex-start;
  }

  .brief-table-row {
    flex-grow: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .tableStat-header .stat-row {
    text-align: left;
    padding: 10px;
    min-width: auto;
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
    <section class="hero-bg bg-gray-700 py-12 md:py-24 text-white px-6 xl:px-0">
      <div class="hero-flex-container flex flex-row max-w-1200 w-full mx-auto ">
        <div class="flex flex-col z-10">
          <span class="rfs-text-xl text-yellow1 mb-0">Brief:</span>
          <h1 class="m-0 p-0 leading-none w-full">Powering Top Hedge Funds</h1>
          <!--HubSpot Call-to-Action Code --><span class="hs-cta-wrapper" id="hs-cta-wrapper-5e7f1193-3a18-48d3-abea-54d2690e1e0c"><span class="hs-cta-node hs-cta-5e7f1193-3a18-48d3-abea-54d2690e1e0c" id="hs-cta-5e7f1193-3a18-48d3-abea-54d2690e1e0c"><!--[if lte IE 8]><div id="hs-cta-ie-element"></div><![endif]--><a href="https://cta-redirect.hubspot.com/cta/redirect/8366986/5e7f1193-3a18-48d3-abea-54d2690e1e0c" ><img class="hs-cta-img" id="hs-cta-img-5e7f1193-3a18-48d3-abea-54d2690e1e0c" style="border-width:0px;" src="https://no-cache.hubspot.com/cta/default/8366986/5e7f1193-3a18-48d3-abea-54d2690e1e0c.png"  alt="Download the PDF"/></a></span><script type="application/javascript" charset="utf-8" src="https://js.hscta.net/cta/current.js"</script><script type="application/javascript"> hbspt.cta.load(8366986, '5e7f1193-3a18-48d3-abea-54d2690e1e0c', {"useNewLoader":"true","region":"na1"}); </script></span><!-- end HubSpot Call-to-Action Code -->
        </div>
        <div class="w-full md:w-1/3 relative">
          <span class="accent yellow z-10"></span>
          <div class="bg-white shadow-lg p-10 relative text-gray-500 performance-bg">
            <h5>Key facts</h5>
            <p>
              More than <span class="blue-bold-text">$3 trillion</span>
              total value of assets
              managed by hedge
              funds worldwide in
              2019
            </p>
            <p>
              More than <span class="blue-bold-text">50
                percent</span> of marketleading hedge fund
              managers use seven
              or more alternative
              data sets
            </p>
            <p>
              <span class="blue-bold-text">$1.7 billion</span>
              estimated spending
              on alternative data
              by fund managers in
              2020, up from $400
              million four years ago
            </p>


          </div>
        </div>
      </div>
    </section>

    <section class="flex py-12 bg-white px-6 xl:px-0">
      <div class="max-w-1200 mx-auto">
        <div class="w-full relative">
          <h3 class="text-gray-500 mb-8">Overview</h3>
          <p>Hedge funds are always seeking alpha. But these days, potential profits may be driven
            more by data and analytics than by financial fundamentals.</p>

          <p>That’s why the need for both data and high-speed analytics for hedge funds has
            exploded in the past few years. This is especially true with hedge funds’ use of big
            data, alternative data, and data-powered investing. Analyses of increasingly large sets
            of alternative data, from social media posts to news reports—and just about anything
            else—can have a big impact on investment decisions. They can also highlight
            important economic trends that provide new opportunities.</p>

          <p>Faster analytics and processing capabilities and more-flexible data strategies are
            required to capitalize on the massive amounts of alternative data. They need to
            enable fund managers and analysts to easily work with billions of rows of data in near
            real time. Hedge funds need to be able to rapidly onboard information from both
            local and cloud-based sources in a scalable and consistent way. And analysts need to
            be able to use that data to quickly explore new ideas, create new models, and make
            faster decisions.</p>
          <p>
            Even hedge funds that don’t rely on alternative data are falling behind the competition
            when it comes to real-time analytics. Market volume has exploded. For everything
            from daily order processing to reporting and Order Audit Trail Systems (OATS) and
            Consolidated Audit Trail (CATS) compliance, getting reports or critical analysis
            completed in ever-tighter timeframes is becoming increasingly difficult with most
            existing hedge fund systems. At the same time, controlling and managing risk has
            never been more important, or more difficult.
          </p>

          <h3>Modern analytics with Yellowbrick Data Warehouse</h3>
          <p>Legacy platforms are too expensive, and vendors of conventional cloud data
            warehouses offer unpredictable consumption-based pricing and have no incentive
            to provide good performance.</p>

          <p>Yellowbrick Data Warehouse is an advanced MPP SQL analytic database for demanding batch, real-time, ad hoc, and mixed workloads. Built from scratch for best price/performance, its adaptive “cut-through” architecture takes best advantage
            of any physical (e.g., optimized instances) or virtualized (e.g., Kubernetes) infrastructure—delivering 100x performance for thousands of users
            at a fraction of the cost of alternative data warehouses. On top of that, we add a modern, industry-standard database interface (PostgreSQL) that’s familiar to users for ecosystem compatibility. The result is a modern, quickly
            provisioned, and easy-to-use solution that blows the doors off rivals in price/performance economics and that can be deployed anywhere across distributed clouds (private, public, and edge networks).</p>

          <p>Additional Yellowbrick advantages include:</p>

          <div class="lg:block max-w-1200 mx-auto shadow mb-20">
            <div class="flex table-header brief-table-header">
              <div class="brief-heading-row w-full md:w-1/3">
                Challenges
              </div>
              <div class="brief-heading-row w-full md:w-2/3">
                Opportunities
              </div>
            </div>

            <div class="flex tableStat-header">
              <div class="brief-table-row md:w-1/3">Compliance</div>
              <div class="brief-table-row md:w-2/3">Get faster access to more-granular data for
                automated and ad hoc regulatory disclosures</div>
            </div>
            <div class="flex tableStat-header">
              <div class="brief-table-row md:w-1/3">Siloed data sources</div>
              <div class="brief-table-row md:w-2/3">Seamlessly integrate multiple data sources and
                legacy systems data into a single instance for
                better investment decisions</div>
            </div>
            <div class="flex tableStat-header">
              <div class="brief-table-row md:w-1/3">Real-time data</div>
              <div class="brief-table-row md:w-2/3">Integrate real-time data—of any amount—
                seamlessly into decision-making processes
                and models</div>
            </div>
            <div class="flex tableStat-header">
              <div class="brief-table-row md:w-1/3">Overwhelming flows of real-time data</div>
              <div class="brief-table-row md:w-2/3">Discover new opportunities for profit and competitive advantage via more-accurate
                models based on the latest data sets</div>
            </div>
            <div class="flex tableStat-header">
              <div class="brief-table-row md:w-1/3">Onboarding new data</div>
              <div class="brief-table-row md:w-2/3">Rapidly onboard new data from any source, using
                standard tools, to support analytical needs </div>
            </div>
            <div class="flex tableStat-header">
              <div class="brief-table-row md:w-1/3">Rapidly testing new ideas and models</div>
              <div class="brief-table-row md:w-2/3">Get freedom to choose data centers, public clouds, and both (hybrid) for deployment</div>
            </div>
            <div class="flex tableStat-header">
              <div class="brief-table-row md:w-1/3">Rapidly scaling systems to meet new opportunities</div>
              <div class="brief-table-row md:w-2/3">Address new opportunities by scaling data and analytics horizontally or vertically without limits</div>
            </div>
            <div class="flex tableStat-header">
              <div class="brief-table-row md:w-1/3">Data incompatability</div>
              <div class="brief-table-row md:w-2/3">Seamlessly integrate as much alternative data as wanted, from cloud or local sources, into analyses and models</div>
            </div>
            <div class="flex tableStat-header">
              <div class="brief-table-row md:w-1/3">Integrating cloud data with data from local systems while increasing flexibility and agility</div>
              <div class="brief-table-row md:w-2/3">De-risk cloud journeys via freedom to choose data centers, public clouds, and both (hybrid) for development</div>
            </div>
            <div class="flex tableStat-header">
              <div class="brief-table-row md:w-1/3">Security</div>
              <div class="brief-table-row md:w-2/3">Ensure security by encrypting data at rest by default, with rapid de-encryption when data access is required by authorized users</div>
            </div>

          </div>

          <h3>Fast & easy migrations</h3>
          <p>
            Yellowbrick is compliant with industry standards for plugging seamlessly into
            existing environments that include common data integration, BI, and identity
            management tools. Migrations are fast and easy from any legacy platform, and
            we’ll work with you to validate your use cases and success metrics along the way.
          </p>

          <h3>Customer spotlights</h3>

          <h6 class="accent-heading mt-12">Top hedge fund and market maker</h6>
          <p>A top hedge fund and market maker found its existing database and analytics infrastructure
            unable to keep pace with current requirements in a variety of ways. The company knew it
            needed to modernize its SAP Sybase IQ legacy technology to keep up with modern-day market
            volumes. The legacy system was overly complex and provided poor performance. In addition,
            the company was struggling with timely OATS and CATS compliance reporting. </p>
          <p>After evaluating a range of options, the hedge fund selected Yellowbrick for its solution and
            achieved significant results:</p>
          <ul>
            <li>
              Yellowbrick performance was 10x the nearest competitor.
            </li>
            <li>
              Daily order processing dropped from five hours to four minutes.
            </li>
            <li>
              Yellowbrick enabled near real-time ad hoc reporting for reports that previously took hours.
            </li>
            <li>
              Yellowbrick’s hybrid architecture enabled the company to deploy on premises.
            </li>
            <li>
              Yellowbrick provided the ability to run compliance reports even when the internet was down.
            </li>
          </ul>

          <h6 class="accent-heading mt-12">Top 10 hedge fund</h6>
          <p>A major top-10 hedge fund faced multiple challenges with its existing analytics platform. The
            company needed more speed and fl exibility from the platform, which wasn’t keeping up
            with current business needs. The legacy Microsoft SQL Server and KDB proprietary database
            for time-series Trades and Quotes (TAQ ) data was unable to meet critical performance
            requirements. In addition, the new solution needed to leverage standard SQL and standard
            tools for seamless analytics by existing users. And the solution needed to support a hybrid
            environment, with the ability to deploy both on premises and in the cloud. </p>
          <p>After evaluating both KDB and SQL Server upgrades, the hedge fund selected Yellowbrick for its
            new analytical platform for the following reasons:</p>
          <ul>
            <li>
              Yellowbrick’s performance was exceptional. The system loaded 1 billion records in less than
              three minutes. </li>
            <li>
              Yellowbrick was the only solution to meet the company’s research performance requirements. </li>
            <li>
              Yellowbrick met or exceeded performance requirements for future predictions of extreme
              workloads and disaster recovery situations. </li>
            <li>
              Yellowbrick’s hybrid architecture provided ultimate fl exibility with its ability to deploy both on
              premises and in the cloud. </li>

          </ul>

          <h3>Get Started</h3>
          <p>Yellowbrick Data empowers companies to make faster decisions with all of their data. Built for enterprises and the hybrid cloud, the Yellowbrick Data Warehouse deploys powerful analytics anywhere, with best in-class economics.</p>
        </div>

      </div>
    </section>

    <MoreInfo />

  </Layout>
</template>

<script>
  import MoreInfo from '~/components/MoreInfo.vue'

  export default {
    metaInfo: {
      title: 'Powering Top Hedge Funds Brief',
      meta: [{
        key: 'description',
        name: 'description',
        content: 'The Yellowbrick  hybrid  cloud  data  warehouse  is  the  only  data  warehouse  that  can  manage  your  very  large data  sets  with  ease  while  providing  unparalleled  performance  in  a  very  small  form  factor both on premisesand in the cloud—and at a fraction of the cost of Teradata.'
      }]
    },
    components: {
      MoreInfo
    }
  }
</script>
