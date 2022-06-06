<style scoped>

.hero {
  background-image: url(/uploads/images/hero-bg.svg);
  background-size: cover;
}

.performance-bg {
  background-image: url(/uploads/images/performance-bg.svg);
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: 50%;
}

.freedom-bg {
  background-image: url(/uploads/images/freedom-bg.svg);
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: 50%;
}

.predictability-bg {
  background-image: url(/uploads/images/predictability-bg.svg);
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: 50%;
}


@media (min-width: 768px) {
  .replicate-bg {
    background-image: url(/uploads/images/replicate-bg.svg);
    background-position: center left;
    background-repeat: no-repeat;
    background-size: 30%;
  }

  .no-lockin-bg {
    background-image: url(/uploads/images/no-lockin-bg.svg);
    background-position: center right;
    background-repeat: no-repeat;
    background-size: 30%;
  }

  .data-protection-bg {
    background-image: url(/uploads/images/data-protection-bg.svg);
    background-position: center left;
    background-repeat: no-repeat;
    background-size: 30%;
  }

  .reliability-bg {
    background-image: url(/uploads/images/reliability-bg.svg);
    background-position: center right;
    background-repeat: no-repeat;
    background-size: 30%;
  }
}

.replicate-bg,
.no-lockin-bg,
.data-protection-bg,
.reliability-bg,
.replicate-bg,
.no-lockin-bg,
.data-protection-bg,
.reliability-bg {
  background-size: 0%;
}

.slash-box {
  @apply relative;
  &:before {
    content: '';
    @apply absolute bg-gray-500 bottom-0;
    top: 0;
    right: -100px;
    left: -100%;
    z-index: 1;
  }
  &:after {
    content: '';
    @apply absolute;
    background-image: url("data:image/svg+xml,%3Csvg width='20' height='27' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v27H0z'/%3E%3Cpath d='M13.667 7.09a.663.663 0 00-.911.247L6.089 18.99a.676.676 0 00.244.919.66.66 0 00.911-.246l6.667-11.655a.676.676 0 00-.244-.919' fill='%234B5357'/%3E%3C/g%3E%3C/svg%3E");
    background-repeat: repeat;
    top: -55px;
    left: -100%;
    right: -155px;
    bottom: 55px;
    z-index: 2;
    opacity: .4;
  }
  & > * {
    z-index: 10;
  }
}

</style>

<template>
  <Layout>
    <section class="hero flex justify-center bg-gray-700 py-12 md:py-24 text-white capitalize px-6 xl:px-0">
      <div class="flex flex-col max-w-1200 w-full py-8 mx-auto z-10">
        <div class="w-full md:w-1/2">
          <h1 class="m-0 p-0">Discover the Yellowbrick Cloud Data Warehouse</h1>
        </div>
      </div>
    </section>

    <section class="bg-gray-600 py-12 md:pt-0 px-6 xl:px-0 z-20 relative">
      <div class="flex max-w-1200 w-full mx-auto">
        <div class="flex flex-wrap sm:-mx-6 -mt-10 mb-6">

          <div class="flex w-full px-0 sm:px-6 sm:w-1/3 mb-6 md:mb-0">
            <div class="performance-bg flex flex-col w-full bg-white p-8 md:pb-20 rounded-sm relative">
              <h3>Performance</h3>
              <p class="w-full sm:w-3/4">Run analytics 10x-100x faster than any other data warehouse</p>
            </div>
          </div>

          <div class="flex w-full px-0 sm:px-6 sm:w-1/3 mb-6 md:mb-0">
            <div class="freedom-bg flex flex-col w-full bg-white p-8 md:pb-20 rounded-sm relative">
              <h3>Freedom</h3>
              <p class="w-full sm:w-3/4">Support the applications, users and public clouds of your choice</p>
            </div>
          </div>

          <div class="flex w-full px-0 sm:px-6 sm:w-1/3 mb-6 md:mb-0">
            <div class="predictability-bg flex flex-col w-full bg-white p-8 md:pb-20 rounded-sm relative">
              <h3>Predictability</h3>
              <p class="w-full sm:w-3/4">Predictable analytics performance, scalability and costs</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="bg-gray-600 flex py-10 md:py-20 px-6 xl:px-0">
      <div class="flex justify-center w-full max-w-1200 mx-auto text-white">
        <h3 class="font-light leading-normal">Introducing the Yellowbrick Cloud Data Warehouse – overcome the scale, cost and performance challenges posed by traditional cloud data warehouses. Multi-cloud support allows customers to connect multiple public and private clouds to a single Yellowbrick Cloud Data Warehouse. Support the applications, users and public clouds of your choice.</h3>
      </div>
    </section>

    <section class="bg-gray-600 py-12 md:py-20 px-6 xl:px-0">
      <div class="flex flex-col justify-center w-full max-w-1200 mx-auto text-white">
        <h2 class="accent-heading">Clouds, Clouds Everywhere</h2>
        <p>
          The Yellowbrick Cloud Data Warehouse provides private connections as part your subscription. Our service locations ensure sub-millisecond latency to each public cloud. If your organization does not want to utilize a public cloud, we provide private direct internet access (DIA) VPN connections.
        </p>
          <div class="flex flex-wrap sm:-mx-6 mb-6">

            <div class="flex flex-col w-full md:w-1/3 pb-16 md:pb-0 px-6">
              <img src="/uploads/images/vendor/aws.svg" alt="AWS Public Cloud" class="mx-auto py-16 w-7/12 md:w-1/2 lg:w-1/3" />
              <h6 class="border-t-2 border-gray-300 py-2">DirectConnect</h6>
            </div>

            <div class="flex flex-col w-full md:w-1/3 pb-16 md:pb-0 px-6">
              <img src="/uploads/images/vendor/g-cloud.svg" alt="Google Cloud" class="mx-auto py-16 w-7/12 md:w-1/2 lg:w-1/3" />
              <h6 class="border-t-2 border-gray-300 py-2">Interconnect</h6>
            </div>

            <div class="flex flex-col w-full md:w-1/3 pb-0 md:pb-0 px-6">
              <img src="/uploads/images/vendor/azure.svg" alt="Azure" class="mx-auto py-16 w-7/12 md:w-1/2 lg:w-1/3" />
              <h6 class="border-t-2 border-gray-300 py-2">ExpressRoute</h6>
            </div>

          </div>

      </div>
    </section>

    <section class="bg-gray-600 text-white replicate-bg px-6 xl:px-0">
      <div class="flex flex-wrap py-8 items-start max-w-1200 mx-auto w-full">
        <div class="flex flex-col md:flex-row w-full py-8">

          <div class="flex w-full md:w-5/12 p-0 md:pr-20">
            <img src="~@/assets/images/icons/replicate.svg" alt="Replicate Databases" class="w-32 self-start mx-auto md:ml-auto mb-8 md:mb-0" />
          </div>

          <div class="w-full md:w-7/12 md:text-left">
            <h3 class="mb-6 md:mb-12">Replicate</h3>
            <h5 class="font-light leading-normal rfs-text-lg">Yellowbrick can replicate databases between on-premises and the cloud, supporting hybrid scenarios such as keeping legacy ETL on-premises but allowing users to access the data in the cloud – and giving customers the flexibility to migrate from or to the cloud at will.</h5>
          </div>

        </div>
      </div>
    </section>

    <section class="bg-gray-600 text-white no-lockin-bg bg-cover md:bg-auto px-6 xl:px-0">
      <div class="flex flex-wrap py-8 items-start max-w-1200 mx-auto w-full">
        <div class="flex flex-col md:flex-row w-full py-8">

          <div class="w-full md:w-7/12 md:text-left order-2 md:order-1">
            <h3 class="mb-6 md:mb-12">No Lock-in</h3>
            <h5 class="font-light leading-normal rfs-text-lg">Never again fear infrastructure vendor warehouse incompatibility. Yellowbrick supports multiple clouds for the same warehouse, so you can have your data present, up-to-date and available in real-time in any public cloud as well as on-premises. Yellowbrick is ANSI SQL compliant enabling you to move in and out with ease.</h5>
          </div>

          <div class="w-full md:w-5/12 p-0 md:pl-20 order-1 md:order-2">
            <img src="~@/assets/images/icons/unlock-1.svg" alt="No Lock Infrastructure" class="w-32 self-start mx-auto md:mr-auto mb-8 md:mb-0" />
          </div>

        </div>
      </div>
    </section>

    <section class="bg-gray-600 text-white data-protection-bg px-6 xl:px-0">
      <div class="flex flex-wrap py-8 items-start max-w-1200 mx-auto w-full">
        <div class="flex flex-col md:flex-row w-full py-8">

          <div class="w-full md:w-5/12 p-0 md:pr-20">
            <img src="~@/assets/images/icons/protect-data.svg" alt="Data Protection" class="w-32 self-start mx-auto md:ml-auto mb-8 md:mb-0" />
          </div>

          <div class="w-full md:w-7/12 md:text-left">
            <h3 class="mb-6 md:mb-12">Data Protection</h3>
            <h5 class="font-light leading-normal rfs-text-lg">Yellowbrick Cloud keeps you protected with hourly backups and a full week of retention. Need more flexibility? We support custom backup policies, allowing you to specify individual databases, backup intervals and retention. Restore to the same warehouse or another within our service.</h5>
          </div>

        </div>
      </div>
    </section>

    <section class="bg-gray-600 text-white reliability-bg px-6 xl:px-0">
      <div class="flex flex-wrap py-8 items-start max-w-1200 mx-auto w-full">
        <div class="flex flex-col md:flex-row w-full py-8">

          <div class="w-full md:w-7/12 md:text-left order-2 md:order-1">
            <h3 class="mb-6 md:mb-12">Reliability</h3>
            <h5 class="font-light leading-normal rfs-text-lg">Yellowbrick Cloud carries a 99.9% Service Uptime Guarantee. We stand by our reliability with service credits.</h5>
          </div>

          <div class="w-full md:w-5/12 p-0 md:pl-20 order-1 md:order-2">
            <img src="~@/assets/images/icons/umbrella-check.svg" alt="Reliability" class="w-32 self-start mx-auto md:mr-auto mb-8 md:mb-0" />
          </div>

        </div>
      </div>
    </section>

    <section class="bg-gray-600 py-12 md:py-20 px-6 xl:px-0">
      <div class="flex flex-col w-full max-w-1200 mx-auto justify-center">
        <button class="button yellow mx-auto outline-none" @click="showSpecTable=!showSpecTable">Cloud Technical Specifications</button>
        <transition name="slider">
          <div v-if="showSpecTable">
            <div class="flex flex-col max-w-1000 relative bg-gray-light p-4 md:p-20 mx-auto mt-12">
              <h5 class="leading-tight text-base sm:text-base">The Yellowbrick enterprise data warehouse has a modern integrated architecture and delivers faster, more accurate, and interactive analytics with fewer resources than traditional solutions.</h5>
              <div class="overflow-auto">
                <table class="table-auto w-full text-center">
                  <thead>
                    <th class="bg-gray-500 text-gray-200 py-2 text-xl" colspan="2"></th>
                    <th class="bg-gray-500 text-gray-200 py-2 text-xl" colspan="3">Nodes</th>
                  </thead>
                  <tr class="text-lg">
                    <td class="bg-gray-400 text-white" rowspan="4">User<br>Data</td>
                    <td class="bg-teal text-gray-500 px-2 md:px-4 py-2"></td>
                    <td class="px-2 md:px-4 py-2">8xG1*</td>
                    <td class="px-2 md:px-4 py-2">16xG1*</td>
                    <td class="px-2 md:px-4 py-2">30xG1*</td>
                  </tr>
                  <tr class="text-lg bg-gray-100">
                    <td class="border-t bg-teal text-gray-500 border-gray-400 px-2 md:px-4 py-2">L</td>
                    <td class="border-t border-gray-200 px-2 md:px-4 py-2">140 TB</td>
                    <td class="border-t border-gray-200 px-2 md:px-4 py-2">280 TB</td>
                    <td class="border-t border-gray-200 px-2 md:px-4 py-2">600 TB</td>
                  </tr>
                  <tr class="text-lg">
                    <td class="border-t bg-teal text-gray-500 border-gray-400 px-2 md:px-4 py-2">XL</td>
                    <td class="border-t border-gray-200 px-2 md:px-4 py-2">280 TB</td>
                    <td class="border-t border-gray-200 px-2 md:px-4 py-2">560 TB</td>
                    <td class="border-t border-gray-200 px-2 md:px-4 py-2">1,200 TB</td>
                  </tr>
                  <tr class="text-lg bg-gray-100">
                    <td class="border-t bg-teal text-gray-500 border-gray-400 px-2 md:px-4 py-2">XXL</td>
                    <td class="border-t border-gray-200 px-2 md:px-4 py-2">560 TB</td>
                    <td class="border-t border-gray-200 px-2 md:px-4 py-2">1,120 TB</td>
                    <td class="border-t border-gray-200 px-2 md:px-4 py-2">2,400 TB</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </section>

    <section class="bg-gray-600 pt-12 md:pt-20 px-6 xl:px-0 overflow-hidden">
      <div class="max-w-1200 mx-auto text-white w-full slash-box py-12 md:py-20">

        <div class="relative z-10">

          <h2 class="accent-heading">Compliance Certification</h2>
          <p>Yellowbrick Cloud services operate within secure data center environments supporting a range of compliance certifications:</p>

          <div class="flex flex-row flex-wrap text-gray-700 sm:-mx-6 sm:mt-16">

            <expandable-card>
              <template v-slot:title>SOC 2</template>
              <template v-slot:content>
                <p>Developed by the American Institute of CPAs (AICPA), SOC 2 defines criteria for managing customer data based on five “trust service principles”—security, availability, processing integrity, confidentiality and privacy.</p>
              </template>
            </expandable-card>

            <expandable-card>
              <template v-slot:title>ISO 9001</template>
              <template v-slot:content>
                <p>ISO 9001 is the international standard for a quality management system (“QMS”). In order to be certified to the ISO 9001 standard, a company must follow the requirements set forth in the ISO 9001 Standard. The standard is used by organizations to demonstrate their ability to consistently provide products and services that meet customer and regulatory requirements and to demonstrate continuous improvement.</p>
              </template>
            </expandable-card>

            <expandable-card>
              <template v-slot:title>ISO 27001</template>
              <template v-slot:content>
                <p>ISO/IEC 27001 is an information security standard, part of the ISO/IEC 27000 family of standards. It is published by the International Organization for Standardization (ISO) and the International Electrotechnical Commission (IEC) under the joint ISO and IEC subcommittee, ISO/IEC JTC 1/SC 27.</p>
                <p>ISO/IEC 27001 specifies a management system that is intended to bring information security under management control and gives specific requirements. Organizations that meet the requirements may be certified by an accredited certification body following successful completion of an audit.</p>
              </template>
            </expandable-card>

            <expandable-card>
              <template v-slot:title>ISO 14001</template>
              <template v-slot:content>
                <p>ISO 14000 is a family of standards related to environmental management that exists to help organizations (a) minimize how their operations (processes, etc.) negatively affect the environment (i.e. cause adverse changes to air, water, or land); (b) comply with applicable laws, regulations, and other environmentally oriented requirements; and (c) continually improve in the above.</p>
                <p>ISO 14000 is similar to ISO 9000 quality management in that both pertain to the process of how a product is produced, rather than to the product itself. As with ISO 9001, certification is performed by third-party organizations rather than being awarded by ISO directly. The ISO 19011 and ISO 17021 audit standards apply when audits are being performed.</p>
              </template>
            </expandable-card>

            <expandable-card>
              <template v-slot:title>ISO 50001</template>
              <template v-slot:content>
                <p>ISO 50001 is the international standard for Energy Management Systems, created by the International Organization for Standardization (ISO). The standard specifies the requirements for establishing, implementing, maintaining and improving an energy management system, whose purpose is to enable an organization to follow a systematic approach in achieving continual improvement of energy performance, including energy efficiency, energy security, energy use and consumption.</p>
                <p>The standard aims to help organizations continually reduce their energy use, and therefore their energy costs and their greenhouse gas emissions.</p>
              </template>
            </expandable-card>

          </div>

          <p class="pt-6">Additional region support for HIPAA, PCI-DSS, and FedRAMP is available on request.</p>

        </div>

      </div>
    </section>

    <MoreInfo />
  </Layout>
</template>

<script>
import MoreInfo from '~/components/MoreInfo.vue'
import ExpandableCard from '~/components/ExpandableCard.vue'

export default {
  metaInfo: {
    title: 'Yellowbrick Cloud Data Warehouse',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: 'Yellowbrick overcomes the scale, cost and performance challenges posed by traditional cloud data warehouses.'
      }
    ]
  },
  components: {
    MoreInfo, ExpandableCard
  },
  data: () => ({
    showSpecTable: false,
  })
}
</script>
