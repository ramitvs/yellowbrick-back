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

</style>

<template>
  <Layout>

    <section class="hero flex bg-gray-700 py-12 md:py-24 text-white px-6 xl:px-0">
      <div class="flex flex-col max-w-1200 w-full mx-auto z-10">
        <div class="w-full md:w-1/2">
          <span class="rfs-text-xl text-yellow1 mb-0">Fast & secure:</span>
          <h1 class="rfs-text-5xl">Always-on security for the highest requirements</h1>
          <p class="rfs-text-lg">Whether you use Yellowbrick Data Warehouse on-premises or in the cloud, our technology and procedures meet the strictest compliance standards.</p>
        </div>
      </div>
    </section>
    
    <section class="flex pb-8 bg-gray-100 px-6 xl:px-0">
      <div class="flex flex-col justify-center max-w-1200 mx-auto">
        <div class="break-plane p-10 bg-white shadow-lg relative">
          <span class="accent"></span>
          <h3 class="text-gray-500 mb-8">Safeguard your data under rigorous compliance standards</h3>
          <div class="text-gray-500 w-full">
            <p class="rfs-text-lg w-full lg:w-2/3">Yellowbrick Data has experience serving customers in highly-regulated industries and government going back to its founding, so data and environment security are core values.</p>
            
            <h5 class="accent-heading mt-12">Capabilities include:</h5>
            
            <div class="flex flex-row flex-wrap">
              <div class="flex flex-row flex-wrap rfs-text-lg -mx-6 w-full">
                <div class="w-full md:w-1/3 p-6 items-center">
                  <img src="~@/assets/images/icons/compliance-icon.svg" alt="compliance" class="w-24" />
                  <p class="pt-5 rfs-text-lg">HIPAA and SOC 2 compliance; PCI DSS*, GDPR, and FedRAMP readiness</p>
                </div>
                <div class="w-full md:w-1/3 p-6 items-center">
                  <img src="~@/assets/images/icons/encryption-icon.svg" alt="encryption" class="w-24" />
                  <p class="pt-5 rfs-text-lg">FIPS 140-2 compliant AES-256 encryption for data at rest, with encryption key rotation</p>
                </div>
                <div class="w-full md:w-1/3 p-6 items-center">
                  <img src="~@/assets/images/icons/secure-icon.svg" alt="secure" class="w-24" />
                  <p class="pt-5 rfs-text-lg">SSL/TLS encryption for client communications and passwords</p>
                </div>
                <div class="w-full md:w-1/3 p-6 items-center">
                  <img src="~@/assets/images/icons/ldap-icon.svg" alt="ldap" class="w-24" />
                  <p class="pt-5 rfs-text-lg">Microsoft Active Directory and OpenLDAP integration</p>
                </div>
                <div class="w-full md:w-1/3 p-6 items-center">
                  <img src="~@/assets/images/icons/private-link-icon.svg" alt="private-link" class="w-24" />
                  <p class="pt-5 rfs-text-lg">Support for Azure Private Link and AWS PrivateLink for cloud deployments</p>
                </div>
                <div class="w-full md:w-1/3 p-6 items-center">
                  <img src="~@/assets/images/icons/control-icon.svg" alt="control" class="w-24" />
                  <p class="pt-5 rfs-text-lg">Fine-grained access control on any database object</p>
                </div>
                <div class="w-full md:w-1/3 p-6 items-center">
                  <img src="~@/assets/images/icons/tokenization-icon.svg" alt="tokenization" class="w-24" />
                  <p class="pt-5 rfs-text-lg">Tokenization for PII (through our partners)</p>
                </div>
                <div class="w-full md:w-1/3 p-6 items-center">
                  <img src="~@/assets/images/icons/threat-detection-icon.svg" alt="threat detection" class="w-24" />
                  <p class="pt-5 rfs-text-lg">Threat detection (through our partners)</p>
                </div>
              </div>
            </div>

            <p class="rfs-text-lg">Should you have extra security requirements beyond the major standards, we’ll work with you every step of the way to meet them.</p>
            <p class="rfs-text-lg text-right">(* on request)</p>
          </div>
        </div>

      </div>
    </section>

    <base-section>
      <h4 class="rfs-text-4xl mb-12">Resources</h4>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8">
        
        <div>
          <img src="/uploads/thumb-brief-yellowbrick-security.png" alt="451 Research Report thumbnail"
            class="w-7/12 mb-3 shadow-md self-start border-4 border-white" />
          <div class="flex flex-col justify-between flex-grow w-4/5">
            <div>
              <h5>Yellowbrick Data Security</h5>
              <p class="leading-tight">Learn how Yellowbrick secures data and manages user access.</p>
            </div>
            <arrow-link-button class="text-teal text-base" href="/resources/data-sheets/yellowbrick-data-warehouse-security/">Read now</arrow-link-button>
          </div>
        </div>

      </div>
    </base-section>

    <section class="flex bg-gray-700 py-16 px-6 xl:px-0">
      <div class="max-w-1200 mx-auto text-white">
        
        <div class="flex flex-col md:flex-row items-center">
          <div class="w-full md:w-1/2 pr-0 md:pr-8">
            <h2>Security solution partners</h2>
            <p>Move your data away from SQL Server easily and quickly with Yellowbrick’s best of breed partners. Our partners help you plan your transition, understand your data flows, and manage your cutover to the Yellowbrick platform.</p>
            <g-link to="/company/partners/" class="button yellow">View our partners</g-link>
          </div>
          <div class="flex flex-col sm:flex-row flex-wrap w-full md:w-1/2 pl-0 md:pl-8">
            <img src="/uploads/partners-protegrity.png" class="w-full sm:w-1/2 p-8" alt="protegrity logo"/>
            <img src="/uploads/partners-sotero.svg" class="w-full sm:w-1/2 p-8" alt="sotero logo"/>
          </div>
        </div>
      </div>
    </section>

    <MoreInfo />

  </Layout>
</template>

<script>
import MoreInfo from '~/components/MoreInfo.vue'
import TransitionExpand from '~/components/TransitionExpand.vue'
import ArrowLinkButton from '../components/buttons/arrowLinkButton.vue';

export default {
  metaInfo: {
    title: 'Yellowbrick Data Warehouse Security',
    meta: [
      { 
        key: 'description',
        name: 'description',
        content: 'Whether you use Yellowbrick Data Warehouse on-premises or in the cloud, our technology and procedures meet the strictest compliance standards.'
      },
      {
        key: 'og:description',
        name: "og:description",
        content: 'Whether you use Yellowbrick Data Warehouse on-premises or in the cloud, our technology and procedures meet the strictest compliance standards.'
      },
      {
        key: 'twitter:description',
        name: 'twitter:description',
        content: 'Whether you use Yellowbrick Data Warehouse on-premises or in the cloud, our technology and procedures meet the strictest compliance standards.'
      },
      {
        key: 'og:title',
        name: 'og:title',
        content: 'Yellowbrick Data Warehouse Security'
      },
      {
        key: 'twitter:title',
        name: 'twitter:title',
        content: 'Yellowbrick Data Warehouse Security'
      }
    ]
  },
  components: {
    ArrowLinkButton,
    MoreInfo,
    TransitionExpand
  },
  data() {
    return {
      expanded: false,
    };
  }

}
</script>
