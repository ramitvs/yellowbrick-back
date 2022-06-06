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
  line-height: 1.4;
}

</style>

<template>
  <Layout>
  <section
      class="hero flex bg-gray-700 py-12 md:py-24 text-white px-6 xl:px-0"
    >
    
    <div class="flex flex-col md:flex-row max-w-1200 mx-auto">
      <div class="flex flex-col md:w-3/4 w-full">
        <h1 class="m-0 p-0 leading-tight text-5xl">Yellowbrick Data Warehouse Security</h1>
        <p class="rfs-text-3xl max-w-800 pt-4">
          The data warehouse for distributed clouds
        </p>
        <p class="rfs-text-lg">Yellowbrick is built for a world where we assume everything is “private by default.” No public buckets are enabled by default to gain access to data, no built-in guest users are present, and strict access must be granted to all data and management functionality. </p>
      </div>
      <div class="flex flex-col md:w-1/4 w-full pt-6 md:pt-0">
        <a href="/uploads/Yellowbrick_Data_Warehouse_Security.pdf" target="_blank" class="ungated-asset" id="data-sheet_yellowbrick-data-security">
          <img src="/uploads/thumb-brief-yellowbrick-security.png" class="cursor-pointer shadow-md  w-1/2 md:w-full mx-auto px-2" alt="Yellowbrick Data Warehouse Overview Preview">
        </a>
        <div class="button-container px-2 pt-4 mt-1 w-1/2 md:w-full mx-auto">
          <a href="/uploads/Yellowbrick_Data_Warehouse_Security.pdf" target="_blank" class="ungated-asset" id="data-sheet_yellowbrick-data-security">
            <button class="text-center shadow button bg-yellow1 button-md border-none text-gray2 font-bold whitespace-no-wrap px-3 py-3 w-full block rounded-smmr-2">Download PDF</button>
          </a>
        </div>
      </div>
    </div>
  </section>
    
    <section class="flex bg-white py-0 px-6 xl:px-0 pt-8">
      <div class="flex flex-col md:flex-row max-w-1200 w-full mx-auto z-10">
        <div class="w-full md:w-7/12">
          <h4>Authentication</h4>
          <p class="rfs-text-lg">Database users can be authenticated locally or with LDAP and Active Directory. We are currently working on deep integration of OpenID Connect and SAML 2.0 multi-factor authentication (MFA) for cloud-native products (including Azure Active Directory, Okta, and Ping).</p>
          <h4>Manageability without “super users”</h4>
          <p class="rfs-text-lg">Yellowbrick incorporates a PostgreSQL front end for compatibility, and PostgreSQL relies on having a “super user” for administration and regular users for everything else. The super user can administer anything whatsoever, much like the “root” user on a Unix system. We deliberately split the privileges afforded to the super user into dozens of different grants to allow users to manage subsections of the database in a far more fine-grained manner—for example, the ability of a role to manage other roles, view SQL query text of other users, initiate backups, control LDAP integrations, and even the ability to grant privileges themselves all can be granted or revoked individually.</p>
          <h4>Role-based access control</h4>
          <p class="rfs-text-lg">Access to all database schema objects is fully role-based. Below the granularity of a table, Yellowbrick allows granting access to columns of a table.</p>
          <h4>Encryption of data at rest</h4>
          <p class="rfs-text-lg">Yellowbrick stores all data fully encrypted with AES-256 using keys stored in a HashiCorp Vault. Encryption of data on cloud object stores is managed by the object store itself and ephemeral cloud storage is also encrypted and crypto-erased.</p>
          <h4>Column-level encryption and functions</h4>
          <p class="rfs-text-lg">Yellowbrick provides a variety of SQL functions for data encryption, decryption, and hashing using several algorithms. Individual VARCHAR columns within tables can designated as encrypted so that Yellowbrick will encrypt the data for the column as it’s inserted. When a user with access to the corresponding encryption key does a query, they will see the decrypted data; however, users without access to the encryption key will see only the encrypted, scrambled data. Keys are stored in and referenced from the HashiCorp Vault.</p>
          <h4>TLS support</h4>
          <p class="rfs-text-lg">TLS 1.2 is supported for all traffic in and out of Yellowbrick. This is true for *DBC access and web access and all external connectivity, loading, unloading, backup, and so on. TLS mutual authentication is used for authentication of cross-database replication sessions. </p>
          <img src="/uploads/protegrity-logo.png" style="height:40px" class="mb-4" alt="Protegrity Logo">
          <p class="rfs-text-lg">Yellowbrick has a production-quality integration with our strategic partner, Protegrity, which provides sophisticated, policy-based data protection and masking functionality that goes beyond Yellowbrick column-level encryption.</p>
        </div>

        <div class="w-full md:w-5/12 md:px-10  mt-12">
          <div class="break-plane p-10 bg-white shadow-lg relative performance-bg">
            <span class="accent yellow"></span>
              <h2 class="rfs-text-2xl text-teal">Key features</h2>
              <ul>
                <li class="rfs-text-lg">FIPS 140-2 compliant AES-256 encryption for data at rest, with encryption key rotation</li>
                <li class="rfs-text-lg">HIPAA and PCI-DS compliance</li>
                <li class="rfs-text-lg">SSL/TLS encryption for client communications and passwords</li>
                <li class="rfs-text-lg">No-code, on-the-fly <i>ENCRYPTED</i> column constraints</li>
                <li class="rfs-text-lg">Microsoft Active Directory and OpenLDAP integration</li>
                <li class="rfs-text-lg">Fine-grained access control on any database object</li>
                <li class="rfs-text-lg">Data masking/tokenization for PII (through our partners)</li>
                <li class="rfs-text-lg">Threat detection (through our partners)</li>
              </ul>
            </div>
          </div>

          
        </div>
      </div>
    </section>

  </Layout>
</template>

<script>
import MoreInfoNetezza from '~/components/MoreInfoNetezza.vue'
import TransitionExpand from '~/components/TransitionExpand.vue'

export default {
  metaInfo: {
    title: 'Yellowbrick Data Warehouse Security',
    meta: [
      { 
        key: 'description',
        name: 'description',
        content: 'Yellowbrick is built for a world where we assume everything is “private by default.” '
      },
      {
        key: 'og:description',
        name: "og:description",
        content: 'Yellowbrick is built for a world where we assume everything is “private by default.” '
      },
      {
        key: 'twitter:description',
        name: 'twitter:description',
        content: 'Yellowbrick is built for a world where we assume everything is “private by default.” '
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
    MoreInfoNetezza,
    TransitionExpand
  },
  data() {
    return {
      expanded: false,
    };
  }
}
</script>