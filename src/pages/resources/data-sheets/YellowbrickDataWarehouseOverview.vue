<style scoped>
  .performance-bg {
    background-image: url(/uploads/images/performance-bg.svg);
    background-position: 100% 100%;
    background-repeat: no-repeat;
    background-size: 45%;
  }

  .blue-bold-text {
    color: #00c3cd;
    font-weight: 400;
  }

  .hero {
    background-image: url(https://www.yellowbrick.com/uploads/images/generic-bg.svg);
    background-position-x: -100px;
    background-blend-mode: color-dodge;
  }

  .embellish-bg {
    background-image: url(/uploads/images/predictability-bg.svg);
    background-position: bottom right;
    background-repeat: no-repeat;
    background-size: 30%;
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


  ul {
    list-style: none;
    /* Remove default bullets */
    padding-left: 15px;
  }

  ul li::before {
    content: "\2022";
    /* Add content: \2022 is the CSS Code/unicode for a bullet */
    color: #56c0cb;
    /* Change the color */
    font-weight: bold;
    /* If you want it to be bold */
    font-size: 30px;
    display: inline-block;
    /* Needed to add space between the bullet and the text */
    width: 1em;
    /* Also needed for space (tweak if needed) */
    margin-left: -1em;
    /* Also needed for space (tweak if needed) */
  }

  li {
    font-size: 1.125rem;
    line-height: 1.4;
  }
</style>

<template>
  <Layout>
    <section class="hero flex bg-gray-700 py-12 md:py-24 text-white px-6 xl:px-0">
      <div class="flex flex-col md:flex-row max-w-1200 mx-auto">
        <div class="flex flex-col md:w-3/4 w-full">
          <h1 class="m-0 p-0 leading-tight text-5xl">Yellowbrick Data Warehouse</h1>
          <p class="rfs-text-2xl max-w-800">
            The fastest data warehouse - anywhere
          </p>
          <p> With more data flowing into organizations than ever before, you require real-time data decisioning to get the most impactful insights and business value. This means you need unlimited, fast access to your data. With our unique hybrid
            capabilities, Yellowbrick gives you ultimate levels of performance, high-availability, affordability, and security you expect to help you modernize your enterprise data warehouse</p>
          <p>Yellowbrick is leapfrogging rivals with a Kubernetes-centric, cloud-native architecture that brings superb price/performance so you can run on-premises applications with the same flexibility and benefits as any type of cloud.</p>
        </div>
        <div class="flex flex-col md:w-1/4 w-full pt-6 md:pt-0">
          <a href="https://ww2.yellowbrick.com/hubfs/Resources/Briefs/Generic/DATA-SHEET_Yellowbrick_Data-Warehouse-Overview.pdf" target="_blank" class="ungated-asset" id="data-sheet_yellowbrick-data-warehouse">
            <img src="/uploads/thumb_BRIEF_Yellowbrick_Data_Warehouse_Overview.png" class="cursor-pointer shadow-md  w-1/2 md:w-full mx-auto px-2" alt="Yellowbrick Data Warehouse Overview Preview">
          </a>
          <div class="button-container px-2 pt-4 mt-1 w-1/2 md:w-full mx-auto">
            <a href="https://ww2.yellowbrick.com/hubfs/Resources/Briefs/Generic/DATA-SHEET_Yellowbrick_Data-Warehouse-Overview.pdf" target="_blank" class="ungated-asset" id="data-sheet_yellowbrick-data-warehouse">
              <button class="text-center shadow button bg-yellow1 button-md border-none text-gray2 font-bold whitespace-no-wrap px-3 py-3 w-full block rounded-smmr-2">Download PDF</button>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="flex bg-white py-0 px-6 xl:px-0 pt-8">
      <div class="flex flex-col md:flex-row max-w-1200 w-full mx-auto z-10">
        <div class="w-full md:w-7/12">

          <p>
            On top of that, we add a modern, industry-standard database interface (PostgreSQL) that’s familiar to users for easy migrations and ecosystem compatibility. That makes Yellowbrick your best choice for any data warehouse upgrade, BI
            acceleration, or data lake augmentation project.
          </p>
          <div class="flex flex-row">
            <div class="flex flex-col w-1/4">
              <img src="/uploads/GraphIcon.jpg" class="my-auto px-4" style="padding-right:48px;" alt="Graph Icon">
            </div>
            <div class="flex flex-col w-3/4">
              <h4>Unbeatable economics</h4>
              <p>Legacy platforms are too inflexible and expensive, and conventional cloud data warehouses with unpredictable consumption-based pricing have no incentive to provide good performance. Instead, we offer industry-leading
                price/performance under three fixed-rate service plans (see comparison table). The more queries you run, the lower the cost per query.</p>
            </div>
          </div>
          <div class="flex flex-row">
            <div class="flex flex-col w-1/4">
              <img src="/uploads/CloudIcon.jpg" class="my-auto px-4" style="padding-right:48px;" alt="Cloud Icon">
            </div>
            <div class="flex flex-col w-3/4">
              <h4>Deploy anywhere</h4>
              <p>Yellowbrick gives you the ultimate in flexibility and future-proof architecture: Deploy in private, public, and hybrid/distributed clouds, and manage all your data warehouses with single, easy-to-use control plane (Yellowbrick
                Manager).
              </p>
            </div>
          </div>
          <div class="flex flex-row">
            <div class="flex flex-col w-1/4">
              <img src="/uploads/MigrationIcon.jpg" class="my-auto px-4" style="padding-right:48px;" alt="Migration Icon">
            </div>
            <div class="flex flex-col w-3/4">
              <h4>Fast & easy migrations</h4>
              <p>Migrations are fast and easy from any legacy platform, and PostgreSQL compatibility ensures easy access to common skill sets. We'll work with you to validate your use cases and success metrics along the way.</p>
            </div>
          </div>
          <div class="flex flex-row">
            <div class="flex flex-col w-1/4">

            </div>
            <div class="flex flex-col w-3/4">
              <p>Try our free 7-day Test Drive: <a href="https://www.yellowbrick.com/test-drive/">yellowbrick.com/test-drive</a></p>
            </div>
          </div>
        </div>

        <div class="w-full md:w-5/12 md:px-10  mt-12">
          <div class="break-plane p-10 bg-white shadow-lg relative performance-bg">
            <span class="accent yellow"></span>
            <h2 class="rfs-text-2xl">Key features</h2>
            <ul>
              <li><b class="blue-bold-text">Industry-leading speed out of the box</b><br>
                Run sub-second ANSI SQL queries on billions of rows of real-time and at-rest data, with no manual indexes or tuning. Advanced workload management ensures fast, reliable query execution.</li>
              <li><b class="blue-bold-text">Battle-tested for business continuity</b><br> Rely on a database designed for HA, with a track record of backing production, business-critical applications.</li>
              <li><b class="blue-bold-text">Privacy as default</b><br> Protect sensitive data via a strictly “private by default” approach to data access that includes encryption/ fast decryption and role-based access control over every database
                object.</li>
              <li><b class="blue-bold-text">Works in your world</b><br> Yellowbrick works out of the box with common BI, data motion, and ML tools, with custom connectors available for Informatica, Tableau, and more.</li>
            </ul>
          </div>
        </div>


      </div>
    </section>

    <Compare />

  </Layout>
</template>

<script>
  import MoreInfoNetezza from '~/components/MoreInfoNetezza.vue'
  import TransitionExpand from '~/components/TransitionExpand.vue'
  import Compare from '~/components/ComparativeServiceTablesWithHeader.vue'

  export default {
    metaInfo: {
      title: 'Data warehouse for distributed clouds',
      meta: [{
          key: 'description',
          name: 'description',
          content: 'Yellowbrick Data Warehouse is an advanced MPP SQL analytic database for demanding batch, real-time, ad hoc, and mixed workloads. '
        },
        {
          key: 'og:description',
          name: "og:description",
          content: 'Yellowbrick Data Warehouse is an advanced MPP SQL analytic database for demanding batch, real-time, ad hoc, and mixed workloads. '
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: 'Yellowbrick Data Warehouse is an advanced MPP SQL analytic database for demanding batch, real-time, ad hoc, and mixed workloads. '
        },
        {
          key: 'og:title',
          name: 'og:title',
          content: 'Data warehouse for distributed clouds'
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: 'Data warehouse for distributed clouds'
        }
      ]
    },
    components: {
      MoreInfoNetezza,
      Compare,
      TransitionExpand
    },
    data() {
      return {
        expanded: false,
      };
    }
  }
</script>