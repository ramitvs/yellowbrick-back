<style scoped>

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
  list-style: none; /* Remove default bullets */
  padding-left: 15px;
}

ul li::before {
  content: "\2022";  /* Add content: \2022 is the CSS Code/unicode for a bullet */
  color: #56c0cb; /* Change the color */
  font-weight: bold; /* If you want it to be bold */
  font-size: 30px;
  display: inline-block; /* Needed to add space between the bullet and the text */
  width: 1em; /* Also needed for space (tweak if needed) */
  margin-left: -1em; /* Also needed for space (tweak if needed) */
}
li {
  font-size: 1.125rem;
}

</style>

<template>
  <Layout>
  <section
      class="hero flex bg-gray-700 py-12 md:py-24 text-white px-6 xl:px-0"
    >
    <div class="flex flex-col md:flex-row max-w-1200 mx-auto">
      <div class="flex flex-col md:w-3/4 w-full">
        <h1 class="m-0 p-0 leading-tight text-5xl">Economics of Yellowbrick Data Warehouse</h1>
        <p class="rfs-text-xl max-w-800">
          Designed to enable insights from enterprise data across multiple lines of
          business in conjunction with business intelligence, data science, and data
          visualization tools, data warehouses can create value from data at a scale
          that would otherwise be impossible. But the wrong choice can also lead to
          long-term costs and lock-in that are toxic to TCO and ROI.
        </p>
        <p class="rfs-text-xl max-w-800">
          Yellowbrick Data Warehouse is designed to keep you out of those traps in a
          highly targeted way, with some key customer values in mind.
        </p>
      </div>
      <div class="flex flex-col md:w-1/4 w-full pt-6 md:pt-0">
        <a href="https://www.yellowbrick.com/uploads/yellowbrick_dw_economics.pdf" target="_blank" class="ungated-asset" id="brief_economics-of-yellowbrick-data-warehouse">
          <img src="https://www.yellowbrick.com/uploads/yellowbrick_dw_economics-thumb.jpg" class="cursor-pointer shadow-md  w-1/2 md:w-full mx-auto px-2" alt="Economics of Yellowbrick Data Warehouse Preview">
        </a>
        <div class="button-container px-2 pt-4 mt-1 w-1/2 md:w-full mx-auto">
          <a href="https://www.yellowbrick.com/uploads/yellowbrick_dw_economics.pdf" target="_blank" class="ungated-asset" id="brief_economics-of-yellowbrick-data-warehouse">
            <button class="text-center shadow button bg-yellow1 button-md border-none text-gray2 font-bold whitespace-no-wrap px-3 py-3 w-full block rounded-smmr-2">Download PDF</button>
          </a>
        </div>
      </div>
      </div>
    </section>
    

    <section class="flex bg-white py-0 px-6 xl:px-0 pt-8">
      <div class="flex flex-col md:flex-row max-w-1200 w-full mx-auto z-10">
        <div class="w-full md:w-3/4">
          <h3> Industry-leading price/performance</h3>
          <p>Legacy data warehouse platforms are too expensive to buy and to own.
          Similarly, public cloud-only options like Snowflake become unpredictably
          expensive as users, data, or utilization increase.</p>
          <p>Instead, we believe that an excellent price/performance ratio is the most
          important factor in customer success. Leading the industry on that value
          is our top priority, with customers reporting 100X improvements and
          beyond at a fraction of the cost of alternatives.</p>
          <p>In a 2020 study, Enterprise Strategy Group (ESG), an independent market
          research company, found that customers reported significant savings
          after migration to Yellowbrick. Customer experiences include:
          </p>
          <ul>
            <li>Melco Resorts & Entertainment, one of the largest hospitality
            companies in Asia ($5B in annual revenue), saved $1 million in its
            first 6 months by more deeply understanding trends in its
            business.</li>
            <li>One customer in the retail analytics space saved $1 million per
            year by moving workloads from Amazon Redshift and other
            platforms to Yellowbrick.</li>
            <li>One of the biggest mobile operators in Latin America
            safeguarded millions of at-risk dollars due to slow revenue
            assurance from SIM card resellers by making the process near
            real-time with Yellowbrick.</li>
          </ul>
        </div>
        <div class="w-full md:w-1/4 md:px-10 ">
          <p class=" rfs-text-xl text-teal" style="line-height:1.2"><b>“Yellowbrick was designed to minimize complexity. This
          results in significant savings and benefits, including faster time to value and improved
          operational efficiency.”</b><br>
          <em class="text-black" style="font-size:0.8em"><b>Enterprise Strategy Group</b></em>
          </p>
        </div>
      </div>
    </section>

    <section class="bg-white pt-2 md:pt-2 px-6 xl:px-0">
      <div class="flex flex-col md:flex-row max-w-1200 w-full mx-auto z-10">
        <div class="flex flex-col w-full md:w-1/2 mx-auto z-10">
          <div>
            <h3>Best cloud-first economics</h3>
            <p>Yellowbrick can be deployed in private clouds, public clouds, at the edge, and all the above (aka across
            distributed clouds), and on physical and virtualized infrastructure. That flexibility enables a gradual, lowrisk migration to the public cloud of choice or even to multiple clouds, including:</p>
            <ul>
              <li>Smooth transitions from CAPEX to OPEX</li>
              <li>Access to hybrid architectures, such as a DR approach that enables 100% utilization of your onpremises instance while paying for a DR instance only when used</li>
              <li>Ability to de-risk cloud adoption, as data can be replicated to the cloud as a subscription (not
              migration) event and accessed from AWS, Azure, and Google Cloud, with no data egress charges</li>
            </ul>
            <p>Furthermore, Yellowbrick support for industry standards ensures compatibility with existing tools, makes
            migrations easy, and lets you avoids proprietary interfaces that stifle future innovation.</p>
          </div>
        </div>

        <div class="flex flex-col w-full md:w-1/2 mx-auto">
          <div class="px-0 sm:px-4 md:px-8 my-2 md:my-12">
            <button @click="displayChart = !displayChart">
              <img alt="Estimates Graph" src="/uploads/Yellowbrick-dw-Economics-Graph.png" />
              <span class="inline-flex items-center"><expand-arrows class="pr-2"></expand-arrows>(click to enlarge)</span>
            </button>
            
            <modal-dialog v-if="displayChart" @close="displayChart=false">
              <img alt="Estimates Graph" src="/uploads/Yellowbrick-dw-Economics-Graph.png" />
            </modal-dialog>
          </div>
        </div>
      </div>
    </section>


    <section class="bg-white py-2 md:py-2 px-6 xl:px-0">
      <div class="max-w-1200 w-full mx-auto z-10">    
        <div>
          <h3>Predictable pricing</h3>
          <p>With Yellowbrick, everything is included as part of a fixed-rate subscription (three service plans are available), and there are never extra charges for users, data egress, bandwidth, or any other hidden line items. The more queries you run, the lower the cost per query.</p>
        </div>
        <div>
          <h3>Simpler management</h3>
          <p>Operational management is one of the biggest long-term costs in data warehousing. For legacy platforms particularly, it's always necessary to employ teams of technical specialists for performance optimization just to keep those platforms viable.</p>
          <p>In contrast, Yellowbrick Data Warehouse was designed to drastically reduce those costs by offering peak performance out of the box, with many management tasks either abstracted away or unnecessary.</p>
        </div>
      </div>
    </section>

  </Layout>
</template>

<script>
import MoreInfoNetezza from '~/components/MoreInfoNetezza.vue'
import TransitionExpand from '~/components/TransitionExpand.vue'
import ExpandArrows from "~/components/icons/ExpandArrows.vue";
import IconArrowRight from "~/components/icons/IconArrowRight.vue";
import ModalDialog from "~/components/ModalDialog.vue";

export default {
  metaInfo: {
    title: 'Economics of Yellowbrick Data Warehouse',
    meta: [
      { 
        key: 'description',
        name: 'description',
        content: 'Designed to enable insights from enterprise data across multiple lines of business in conjunction with business intelligence, science, and data visualization tools, data warehouses can create value from data at a scale that would otherwise be impossible.'
      },
      {
        key: 'og:description',
        name: "og:description",
        content: 'Designed to enable insights from enterprise data across multiple lines of business in conjunction with business intelligence, science, and data visualization tools, data warehouses can create value from data at a scale that would otherwise be impossible.'
      },
      {
        key: 'twitter:description',
        name: 'twitter:description',
        content: 'Designed to enable insights from enterprise data across multiple lines of business in conjunction with business intelligence, science, and data visualization tools, data warehouses can create value from data at a scale that would otherwise be impossible.'
      },
      {
        key: 'og:title',
        name: 'og:title',
        content: 'Economics of Yellowbrick Data Warehouse'
      },
      {
        key: 'twitter:title',
        name: 'twitter:title',
        content: 'Economics of Yellowbrick Data Warehouse'
      }
    ]
  },
  components: {
    MoreInfoNetezza,
    TransitionExpand,
    ExpandArrows,
    IconArrowRight,
    ModalDialog
  },
  data() {
    return {
      expanded: false,
      displayChart: false
    };
  }
}
</script>