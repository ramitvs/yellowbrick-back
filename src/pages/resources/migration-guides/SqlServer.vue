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

.bold-text {
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

#arrow {
  display: none;
}

#bmwcol {
  padding-left:0em;
  position: relative;
}

@media (min-width: 768px) {
  .multi-column {
    column-count: 2;
    column-gap: 2.5rem;
  }

  #bmwcol {
  padding-left:2em;
}
}

@media (min-width: 490px){
  #arrow {
    display: table-cell;
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
  content: "▪";  /* Add content: \2022 is the CSS Code/unicode for a bullet */
  color: black; /* Change the color */
  font-weight: bold; /* If you want it to be bold */
  font-size: 15px;
  display: inline-block; /* Needed to add space between the bullet and the text */
  width: 1em; /* Also needed for space (tweak if needed) */
  margin-left: -1em; /* Also needed for space (tweak if needed) */
}

.check-list {
  list-style: none; /* Remove default bullets */
  padding-left: 15px;
}

.check-list li::before {
  content: "✓";  /* Add content: \2022 is the CSS Code/unicode for a bullet */
  color: black; /* Change the color */
  font-weight: bold; /* If you want it to be bold */
  font-size: 15px;
  display: inline-block; /* Needed to add space between the bullet and the text */
  width: 1em; /* Also needed for space (tweak if needed) */
  margin-left: -1em; /* Also needed for space (tweak if needed) */
}

.check-list-teal {
  list-style: none; /* Remove default bullets */
  padding-left: 15px;
}

.check-list-teal li::before {
  content: "✓";  /* Add content: \2022 is the CSS Code/unicode for a bullet */
  color: #00c3cd; /* Change the color */
  font-weight: bold; /* If you want it to be bold */
  font-size: 15px;
  display: inline-block; /* Needed to add space between the bullet and the text */
  width: 1em; /* Also needed for space (tweak if needed) */
  margin-left: -1em; /* Also needed for space (tweak if needed) */
}

li {
  font-size: 1.125rem;
  line-height: 1.5em;
}
hr {
  color: #56c0cb;
  background-color: #56c0cb;
  width: 90%;
  height:2px;
  border: none;
  text-align:right;
  margin: auto;
}

td {
  padding-left: 10px;
  padding-right: 10px;
}


#key-plat {
  margin: 0 auto;
  width:90%;
}

#bmwlogo {
  width:125px;
  position:absolute;
  right:0px;
}

</style>

<template>
  <Layout>
  <section
      class="hero flex bg-gray-700 py-12 md:py-24 text-white px-6 xl:px-0"
    >
    <div class="flex flex-col md:flex-row max-w-1200 mx-auto">
      <div class="flex flex-col md:w-3/4 w-full">
        <h6 class="mb-0 text-yellow1">MIGRATION GUIDE</h6>
        <h1 class="m-0 p-0 leading-tight text-5xl">Automated migration from SQL Server to Yellowbrick, the data warehouse for distributed clouds</h1>
        <p class="rfs-text-2xl max-w-800">
          Using Systech DBShift™ to migrate SQL Server based data & analytics environments to Yellowbrick
        </p>
        <img src="/uploads/images/partners/systech.svg" alt="Systech Logo" width=100px class=" mb-4 md:mb-0" />
      </div>
      <div class="flex flex-col md:w-1/4 w-full pt-6 md:pt-0">
        <a href="/uploads/GUIDE%20SQL%20Server%20Yellowbrick%20Migration.pdf" target="_blank" class="ungated-asset" id="brief_yellowbrick-technical-overview">
          <img src="/uploads/GUIDE SQL Server Yellowbrick Migration Thumbnail.png" class="cursor-pointer shadow-md  w-1/2 md:w-full mx-auto px-2" alt="Migration guide: Teradata to Yellowbrick Hybrid Data Warehouse">
        </a>
        <div class="button-container px-2 pt-4 mt-1 w-1/2 md:w-full mx-auto">
          <a href="/uploads/GUIDE%20SQL%20Server%20Yellowbrick%20Migration.pdf" target="_blank" class="ungated-asset" id="brief_yellowbrick-technical-overview">
            <button class="text-center shadow button bg-yellow1 button-md border-none text-gray2 font-bold whitespace-no-wrap px-3 py-3 w-full block rounded-smmr-2">Download PDF</button>
          </a>
        </div>
      </div>
      </div>
    </section>

    
    <section class="flex bg-white py-0 px-6 xl:px-0 pt-8">
      <div class="flex flex-col md:flex-row max-w-1200 w-full mx-auto z-10">
        <div class="w-full">
          <h3 class="text-gray-500 pt-4">Introduction</h3>
          <p>Many organizations rely on Microsoft SQL Server as their data and analytics platform. However, SQL Server was designed for transactional workloads and lacks the massively parallel processing (MPP) architecture required for doing interactive, ad hoc analytics at scale. In turn, organizations are looking to modernize their data warehouse and accelerate the migration to a platform that can support their analytics initiatives.</p>
          <p>Yellowbrick Data and Systech have partnered to deliver a modernization and migration solution that leverages automation to help organizations move from SQL Server to Yellowbrick Data Warehouse. This guide provides an overview of migration activities and migration considerations.</p>
          <h3 class="text-gray-500 pt-4">Modernization drivers</h3>
          <p>Legacy modernization means updating all or some of the data management and analytics stack (i.e., data warehouses, data platforms and applications) to better support business goals and processes. Business leaders drive innovation at their companies, but they need new technologies to enable and support this innovation in a real-world environment. They require fast applications, systems that support connectivity, and platforms that bring everything together. Most older IT stacks fail to meet those modern needs.</p>
        </div>
      </div>
    </section>

    <section class="flex bg-white py-0 px-6 xl:px-0 pt-2">
      <div class="flex flex-col md:flex-row max-w-1200 w-full mx-auto z-10">
        <div class="w-full">
          <h5 class="text-gray-500 text-center">Key platform modernization drivers</h5>
          <hr>
          <div class="pt-6">
            <table id="key-plat">
              <tbody>
                <tr>
                  <td class="pt-4 text-center"><p class="bold-text"><b>Business&nbsp;Fit</b></p></td>
                  <td id="arrow"><img src="/uploads/arrow-right-gray.png" alt="Arrow Icon" width=45px /></td>
                  <td class="pt-4"><p>Inability to support the platform needs of modern analytic workloads in an efficient manner</p></td>
                </tr>
                <tr>
                  <td class="pt-4 text-center"><p class="bold-text"><b>Business&nbsp;Value</b></p></td>
                  <td id="arrow"><img src="/uploads/arrow-right-yellow.png" alt="Arrow Icon" width=45px /></td>
                  <td class="pt-4"><p>Lack of business value, quality of support, information delivered from the systems, etc.</p></td>
                </tr>
                <tr>
                  <td class="pt-4 text-center"><p class="bold-text"><b>Agility</b></p></td>
                  <td id="arrow"><img src="/uploads/arrow-right-teal.png" alt="Arrow Icon" width=45px /></td>
                  <td class="pt-4"><p>Inability to scale at the pace of ever-changing business needs leading to unacceptable risk & cost</p></td>
                </tr>
                <tr>
                  <td class="pt-4 text-center"><p class="bold-text"><b>Cost</b></p></td>
                  <td id="arrow"><img src="/uploads/arrow-right-brown.png" alt="Arrow Icon" width=45px /></td>
                  <td class="pt-4"><p>TCO of operating, maintaining, and changing the platform is high</p></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <section class="flex py-2 bg-white px-6 xl:px-0 pt-8">
      <div class="flex-1 justify-center max-w-1200 mx-auto">
        <h3 class="text-gray-500">Modernizing your data warehouse with Yellowbrick</h3>
        <p>Yellowbrick Data Warehouse is an advanced, massively parallel (MPP), SQL database designed for the most demanding batch, real-time, ad hoc, and mixed workloads. It can run complex queries at up to petabyte scale across numerous nodes, with guaranteed sub-second response times. Yellowbrick was conceived with the goal of optimizing price/performance. It’s not uncommon for customers to see their workloads run tens or hundreds of times faster at a fraction of the cost compared to cloud-only or legacy data warehouses.</p>
        <p>Yellowbrick continuously implements new hardware (e.g., NVMe and flash memory) and software (most recently Kubernetes) protocols in an adaptive “cut-through” architecture that ensures best performance in every environment. Yellowbrick combines these advances with smart thinking about storage formats and indexing, and add on top a modern, standards-based database interface that’s familiar to users (PostgreSQL) for ecosystem compatibility. The result is a modern, quickly provisioned, and easy-to-use data warehouse that knocks the socks off rivals in price/performance economics and can be deployed across distributed clouds (private data centers, public clouds, and edge networks) – with all instances, databases, and users managed through a simple, unified control plane (Yellowbrick Manager).</p>

        <div class="px-0 sm:px-10 md:px-32 my-8">
          <button @click="displayChart = !displayChart">
            <img src="/uploads/Yellowbrick-Architecture.png" alt="modern data warehouse" />
            <span class="inline-flex items-center"><expand-arrows class="pr-2"></expand-arrows>(click to enlarge)</span>
          </button>
            
          <modal-dialog v-if="displayChart" @close="displayChart=false">
            <img src="/uploads/Yellowbrick-Architecture.png" alt="modern data warehouse" />
          </modal-dialog>
        </div>
      </div>
    </section>

    <section class="bg-white py-2 md:py-2 px-6 xl:px-0">
      <div class="max-w-1200 w-full mx-auto z-10">
        <h3 class="text-gray-500">Replace SQL Server with Yellowbrick for 100X performance at a fraction of the cost</h3>
        <p>Replacing SQL Server databases with Yellowbrick Data Warehouse brings the power of interactive, ad hoc analytics to thousands of users, simplifies operations, and reduces costs. </p>
        <ul>
          <li><span class="bold-text">Analyze data 100X faster: </span>Yellowbrick Data Warehouse can scale from single TBs to multiple PBs, offering a way to combine multiple SQL Server databases into a single, easy-to manage instance. Or, easily replicate data from SQL Server to Yellowbrick for Change Data Capture scenarios.</li>
          <li><span class="bold-text">Consolidate disparate databases: </span>Yellowbrick Data Warehouse can scale from single TBs to multiple PBs, offering a way to combine multiple SQL Server databases into a single, easy-to manage instance. Or, easily replicate data from SQL Server to Yellowbrick for Change Data Capture scenarios.</li>
          <li><span class="bold-text">Simplify management: </span>With Yellowbrick, unlike SQL Server, there’s no need for manual time-consuming tasks like query tuning or building indexes. PostgreSQL compatibility ensures access to common skill sets.</li>
          <li><span class="bold-text">Count on rock-solid reliability: </span>Yellowbrick’s Advanced Workload Management offers granular control of workloads to prioritize concurrent queries across massive amounts of data, bringing added reliability and performance.</li>
          <li><span class="bold-text">Grow along with the business: </span>Yellowbrick instances can be expanded easily without downtime, eliminating any impact on operations.</li>
          <li><span class="bold-text">Fit into the Windows world: </span>Yellowbrick integrates with Microsoft Active Directory, and for cloud deployments, functions as a Private Link Service in Azure. Plus, PowerBI and a full range of other enterprise ecosystem tools are supported.</li>
        </ul>
      </div>
    </section>

    <section class="flex bg-white py-0 px-6 xl:px-0 pt-6">
      <div class="flex flex-col md:flex-row max-w-1200 w-full mx-auto z-10">
        <div class="flex flex-col w-full md:w-1/2">
          <h6 class="text-teal">Customer Spotlight</h6>
          <h3 class="text-gray-500">BMW Group Financial Services</h3>
          <p>BMW Group Financial Services is one of the leading financial services providers in the automotive sector, serving customers worldwide.</p>
          <h5>Challenge</h5>
          <p>The customer’s SQL Server-based analytics and reporting solution was at the edge of performance and scalability limits for use cases like funding analysis, payments aggregation, and calculating portfolio internal rate of return.</p>
          <h5>Results with Yellowbrick </h5>
          <p>BMW Group chose Yellowbrick to replace SQL Server as its analytics and reporting platform.</p>
        </div>
        <div class="flex flex-col w-full md:w-1/2" id="bmwcol">
        <img src="/uploads/customers/bmw-formatted.png" alt="BMW Logo" id="bmwlogo" />
        <h5 class="pt-0 md:pt-20">Test results including:</h5>
        <ul>
          <li>152X faster queries on average</li>
          <li>70% reduction in required data storage space</li>
          <li>Successful integrations with Informatica,Tableau, and SAS</li>
        </ul>

        <p><b>“We’re confident that Yellowbrick’s <span class="text-teal">ability to quickly analyze large amounts of data</span> and offer new insights will help us deliver on our goals.”</b></p>
        <p>Ian Smith<br>CEO, BMW Group Financial Services North America</p>

        </div>
      </div>
    </section>

    <section class="bg-white py-2 md:py-2 px-6 xl:px-0">
      <div class="max-w-1200 w-full mx-auto z-10">
        <h3 class="text-gray-500 pt-4">A holistic modernization and migration approach</h3>
        <p>Undoubtedly, modernizing the data management and analytics environment provides huge business value. Next, it seems pertinent to highlight the effort and tasks involved in modernizing and migration of the environment. The diagram below outlines a typical analytical ecosystem. </p>
        <p>The data storage layer in the middle is where the data warehouse and data lake(s) are stored. To the left of the data storage layer there are data pipelines that bring in data from various sources internal and external to the organization, transform and load it into the data warehouse and data lakes. To the right side of the data storage layer there are dashboarding, visualization, and reporting applications that read data from the data warehouse and data lakes. There could also be other downstream applications that consume data from the data storage layer. Modernization involves the migration of these 3 layers into Yellowbrick.</p>

        <div class="px-0 sm:px-10 md:px-32 my-8 text-center">
          <button @click="displayChart1 = !displayChart1">
            <img src="/uploads/migration-chart.png" alt="Migration Flow Chart" />
            <span class="inline-flex items-center pt-4"><expand-arrows class="pr-2"></expand-arrows>(click to enlarge)</span>
          </button>
            
          <modal-dialog v-if="displayChart1" @close="displayChart1=false">
            <img src="/uploads/migration-chart.png" alt="Migration Flow Chart" />
          </modal-dialog>
        </div>
      </div>
    </section>

    <section class="bg-white py-2 md:py-2 px-6 xl:px-0">
      <div class="max-w-1200 w-full mx-auto z-10">
        <h3 class="text-gray-500">Migration considerations</h3>
        <p>The migration of these 3 layers requires systematic planning and execution. For each of these 3 layers, inventory analysis should first be performed to identify objects that need to be migrated. Migration should be taken as an opportunity to clean up obsolete, not required, and unused objects. The next step once the objects have been identified is to map each of the source data warehouse (SQL Server) components, both functional and structural to target data warehouse (Yellowbrick) environment. Migration should then be carried out based on these mappings followed by detailed validation, UAT, and sign-off.</p>

        <div class="px-0 sm:px-10 md:px-32 my-8 text-center">
          <button @click="displayChart2 = !displayChart2">
            <img src="/uploads/inventory-analysis.png" alt="Inventory Analysis Blocks" />
            <span class="inline-flex items-center pt-4"><expand-arrows class="pr-2"></expand-arrows>(click to enlarge)</span>
          </button>
            
          <modal-dialog v-if="displayChart2" @close="displayChart2=false">
            <img src="/uploads/inventory-analysis.png" alt="Inventory Analysis Blocks" />
          </modal-dialog>
        </div>

        <p>The DB Objects migration involves structural migration from SQL Server to Yellowbrick. SQL Server specific SQL functions and statement syntaxes need to be identified and converted to ANSI SQL or Yellowbrick specific functions. Each SQL Server database object including but not limited to databases, schemas, tables, columns (data types), indexes, triggers, and stored procedures need to be mapped and converted to Yellowbrick objects. Next comes the migration of connections used in data pipeline platforms and dashboard and visualization tools from SQL Server to Yellowbrick.</p>

        <div class="px-0 sm:px-10 md:px-32 my-8 text-center">
          <button @click="displayChart3 = !displayChart3">
            <img src="/uploads/sqlserver-flowchart.png" alt="SQL Server Flowchart" />
            <span class="inline-flex items-center pt-4"><expand-arrows class="pr-2"></expand-arrows>(click to enlarge)</span>
          </button>
            
          <modal-dialog v-if="displayChart3" @close="displayChart3=false">
            <img src="/uploads/sqlserver-flowchart.png" alt="SQL Server Flowchart" />
          </modal-dialog>
        </div>
      </div>
    </section>

    <section class="bg-white py-2 md:py-2 px-6 xl:px-0">
      <div class="max-w-1200 w-full mx-auto z-10">
        <h3 class="text-gray-500">Migration methodology</h3>
        <p>The phases of migration outlined in the previous section can further be detailed into a migration roadmap and approach document. Based on the maturity of the data management and analytics environment, the complexity of migration varies. More mature environments employ all possible processes to extract insights from data and these need to be migrated to Yellowbrick. Migration becomes more involved both based on the number of objects to be migrated as well as the complexity of these objects.</p>

        <div class="flex flex-col md:flex-row">
          <div class="flex flex-col md:w-1/4 w-full px-3 pt-6">
            <img src="/uploads/circle-paper-icon.png" alt="Circle Paper Icon" width=75px; class="mx-auto" />
            <h6 class="text-teal pt-6">Inventory Analysis</h6>
            <ul class="check-list">
              <li>Detailed objects inventory
                <ul class="pb-0">
                  <li>SQL Server databases, schemas and objects</li>
                  <li>ETL ecosystem</li>
                  <li>Reporting / dashboard ecosystem</li>
                  <li>Downstream systems</li>
                </ul>
              </li>
              <li>Determine automation level (70%+)</li>
              <li>Migration roadmap & detailed plan</li>
              <li>Define impact criteria</li>
              <li>Identify in-flight projects and define data & code synchronization mechanism</li>
              <li>Testing & in-depth validation strategy</li>
            </ul>
          </div>
          <div class="flex flex-col md:w-1/4 w-full px-3 pt-6">
            <img src="/uploads/circle-cloud-icon.png" alt="Circle Cloud Icon" width=75px; class="mx-auto" />
            <h6 class="text-teal pt-6">Setup Yellowbrick On-Premise / Edge / Cloud Configure Network & Security</h6>
            <ul class="check-list">
              <li>Configure user access</li>
              <li>Configure firewall rules & network controls</li>
              <li>Configure an inbound traffic protocol(HTTPS,RDP)</li>
              <li>Configure a local persistent storage and a database repository services</li>
            </ul>
            <h6 class="text-teal">Configure Container & Abstraction Services</h6>
            <ul class="check-list">
              <li>Configure the necessary container & abstraction services</li>
            </ul>
            <h6 class="text-teal">Create Static IP for VPC</h6>
            <ul class="check-list">
              <li>Allocate & associate a new private IP address to the instance</li>
            </ul>
            <h6 class="text-teal">Validation</h6>
            <ul class="check-list">
              <li>Perform validation of all the configured services</li>
            </ul>
          </div>

          <div class="flex flex-col md:w-1/4 w-full px-3 pt-6">
            <img src="/uploads/circle-server-icon.png" alt="Circle Server Icon" width=75px; class="mx-auto" />
            <h6 class="text-teal pt-6">Impact Analysis</h6>
            <ul class="check-list">
              <li>Identify  objects that needs to be migrated based on the impact criteria</li>
              <li>Identify the data / code base which needs to be re-written/refactored</li>
            </ul>
            <h6 class="text-teal">Data Migration</h6>
            <ul class="check-list">
              <li>Modify / re-create database objects in the Yellowbrick environment</li>
              <li>Re-architect / migrate data management</li>
              <li>Jobs(SQL, NoSQL, Hadoop, Data Pipes etc)</li>
              <li>Modify connection parameters</li>
              <li>Apply changes to the new environment</li>
            </ul>
            <h6 class="text-teal">Application Migration</h6>
            <ul class="check-list">
              <li>Re-architect / migrate application repository i.e. reports, portals, dashboards. microservices etc.</li>
              <li>Apply changes to the new environment</li>
            </ul>
            <h6 class="text-teal">In-Flight Projects Management</h6>
            <ul class="check-list">
              <li>Perform code sync at multiple check points & dual coding wherever needed</li>
              <li>Perform final data sync</li>
              <li>Production freeze</li>
            </ul>
          </div>
          <div class="flex flex-col md:w-1/4 w-full px-3 pt-6">
            <img src="/uploads/circle-shield-icon.png" alt="Circle Shield Icon" width=75px; class="mx-auto" />
            <h6 class="text-teal pt-6">Validation</h6>
            <ul class="check-list">
              <li>Perform In-depth data validation & functionality validation for identified reports</li>
              <li>Perform multiple parallel runs of data pipelines for testing data accuracy</li>
              <li>Perform in-depth testing of migrated code based for all objects affected by impact criteria</li>
            </ul>
            <h6 class="text-teal">Monitoring & Resource Utilization</h6>
            <ul class="check-list">
              <li>Set up all the log capture mechanism</li>
              <li>Setup monitoring mechanisms for Resource utilization and billing alert</li>
            </ul>
            <h6 class="text-teal">Deploy in Production</h6>
          </div>
        </div>
        <p class="pt-6">Systech’s migration methodology is well proven and accelerates the migration from SQL Server to Yellowbrick. Each of these phases will have well-defined inputs (artifacts, process outputs) and produce outputs that will be fed to the subsequent phase.</p>
      </div>
    </section>

    <section class="bg-white py-2 md:py-2 px-6 xl:px-0">
      <div class="max-w-1200 w-full mx-auto z-10">
        <h3 class="text-gray-500">Automated migration using Systech DBShift™</h3>
        <p>Systech’s DBShift™ utility accelerates data warehouse modernization by automating the discovery, migration and validation phases of the migration. Automation scripts will be deployed to identify objects that need to be migrated. These SQL Server objects are automatically mapped to Yellowbrick objects. In addition, DBShift™ can perform automation of migration of the data pipelines built on platforms like Informatica from SQL Server to Yellowbrick. DBShift™ can achieve at least 70% automation, reducing migration efforts and cost considerably. </p>
        <p class="pb-0">Key features of DBShift™:</p>
        <ul class="check-list-teal pt-0">
          <li>Guided strategy & assessment to evaluate SQL Server environment and select the right migration approach to meet business needs (e.g., Re-Host / Re-Architect / Re-Factor).</li>
          <li>Automated database, data pipeline, and application migration utilities to ensure a swift, secure, and smooth transition to cloud.</li>
          <li>Containerization & orchestration of workloads for a higher level of baked-in scalability, monitoring and fault tolerance.</li>
          <li>DevOps methodology for continuous integration & delivery.</li>
          <li>Monitoring & logging for security and performance (APM).</li>
        </ul>
        <img src="/uploads/sqlserver-screenshot.png" alt="SQLServer Screenshot" class="mx-auto" />
      </div>
    </section>

    <section class="bg-white py-2 md:py-2 px-6 xl:px-0">
      <div class="max-w-1200 w-full mx-auto z-10">
        <h3 class="text-gray-500 pt-4">Summary</h3>
        <p>This document explores the various benefits of migrating your data and analytics environment from Microsoft SQL Server to Yellowbrick Data Warehouse. Specifically, this migration guide highlights the modernization drivers, migration approach, migration considerations, migration methodology, key features of DBShift™, and the benefits that Yellowbrick offers.</p>
        <h3 class="text-gray-500 pt-4">About Systech</h3>
        <p>Systech Solutions delivers measurable value, fast. They accomplish data and analytics initiatives 2x faster for 2x lower cost than most providers. With an unsurpassed technical breadth and depth along with 25+ years of industry experience, Systech is a leader in their field, having executed thousands of data strategy and management projects for businesses across verticals with a 100% success rate. To learn more about Systech, please visit: <a href="https://www.systechusa.com">www.systechusa.com</a>.</p>
      </div>
    </section>

  </Layout>
</template>

<script>
import MoreInfoNetezza from '~/components/MoreInfoNetezza.vue';
import TransitionExpand from '~/components/TransitionExpand.vue';
import ExpandArrows from "~/components/icons/ExpandArrows.vue";
import IconArrowRight from "~/components/icons/IconArrowRight.vue";
import ModalDialog from "~/components/ModalDialog.vue";

export default {
  metaInfo: {
    title: 'Systech SQL Migration Guide',
    meta: [
      { 
        key: 'description',
        name: 'description',
        content: 'Yellowbrick Data and Systech have partnered to deliver a modernization and migration solution that leverages automation to help organizations move from SQL Server to Yellowbrick Data Warehouse. This guide provides an overview of migration activities and migration considerations.'
      },
      {
        key: 'og:description',
        name: "og:description",
        content: 'Yellowbrick Data and Systech have partnered to deliver a modernization and migration solution that leverages automation to help organizations move from SQL Server to Yellowbrick Data Warehouse. This guide provides an overview of migration activities and migration considerations.'
      },
      {
        key: 'twitter:description',
        name: 'twitter:description',
        content: 'Yellowbrick Data and Systech have partnered to deliver a modernization and migration solution that leverages automation to help organizations move from SQL Server to Yellowbrick Data Warehouse. This guide provides an overview of migration activities and migration considerations.'
      },
      {
        key: 'og:title',
        name: 'og:title',
        content: 'Systech SQL Migration Guide'
      },
      {
        key: 'twitter:title',
        name: 'twitter:title',
        content: 'Systech SQL Migration Guide'
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
      displayChart: false,
      displayChart1: false,
      displayChart2: false,
      displayChart3: false
    };
  }
}
</script>