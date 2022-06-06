<style scoped>

.hero {
  background-image: url(/uploads/images/cloud-recovery-bg.svg);
  background-size: cover;
  background-position: center;
}
 .basehubspot-button {
    display: inline-flex;
    padding: .75rem 2rem;
  }
  .basehubspot-button>>>.hs-button {
    background: none;
    font-weight: 600;
  }
.freedom-bg {
  background-image: url(/uploads/images/freedom-bg.svg);
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: 25%;
}

.performance-bg {
  background-image: url(/uploads/images/performance-bg.svg);
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: 60%;
}

.multi-column {
  column-count: 2;
  column-gap: 2.5rem;
}
.float-form {
	@apply relative p-8 bg-gray-200 shadow-lg;
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
h3{
     font-weight: bold;
    font-size: 26px;
    letter-spacing: 0.25px;
}
h4{
    font-weight: bold;
    font-size: 22px;
    color: #57C0CB;
    margin-top: 10px;
}
@media only screen and (min-width: 768px) {
    .img-2{
        margin-left: -60px;
    }
}
@media only screen and (max-width: 768px) {
.flexer{
 flex-direction: column !important;


}
.flexer img{
   max-height: auto !important;
   
}
.flexer .float-form{
    max-height: auto !important;
    margin-top: 30px;
    width: auto;
  
}
.flexer-chld{
 margin-left: 0px !important;
 text-align: center !important;
 border: 1px solid;
 width: 100% !impor
}
.flexer-chld img{
    height: 200px;
    margin-top: 20px;
    width: auto;
    }
}
</style>

<template>
  <Layout>
    <section class="hero flex bg-gray-700 py-12 md:py-24 text-white px-6 xl:px-0">

      <div  class="flex flex-col max-w-1000 w-full mx-auto z-10 flexer"  style="display: flex; flex-direction: row;">
          <div style="width: 100%;">
        <span class="rfs-text-xl text-yellow1 mb-0">Migration Guide:</span>
        <h1 class="m-0 p-0 leading-none  sm:w-1/2 md:w-8/12">Migrating from Netezza to
Yellowbrick, the data
warehouse for distributed
clouds</h1>

          </div>
        <div class="w-full md:w-2/4">
          <div class="float-form">
  
 
            <img src="https://deploy-preview-714--yellowbrick.netlify.app/uploads/thumb-migration-guide-netezza.png" />
            <a href="https://www.yellowbrick.com/uploads/GUIDE_Netezza_Yellowbrick_Migration.pdf" style="margin-top: 30px;" class="button yellow basehubspot-button ungated-asset" id="migration-guide_netezza" >Download The PDF</a>
          </div>
        </div>
</div>

      
      </div>
    </section>

    <section class="flex py-12 bg-white px-6 xl:px-0">
      <div class="flex flex-col md:flex-row items-center justify-evenly max-w-1000 mx-auto">
        <div class="w-full md:w-full relative pr-0 md:pr-10">
          <h3 class="text-gray-500 mb-8">Introduction</h3>
          <p>Netezza introduced the first data warehouse appliance in 2003. However, Netezza didn’t keep up with
innovations in hardware and software and didn’t make the leap to the cloud. By migrating to Yellowbrick,
Netezza customers can achieve 100X performance and 10X scale at a fraction of the cost. This document
provides an overview of migration tasks and serves as a guide for further streamlining the process.</p>

          <h3>Modernizing your data warehouse with Yellowbrick</h3>
          <p class="mb-0">Yellowbrick Data Warehouse is an advanced, massively parallel (MPP), SQL database designed for the most
demanding batch, real-time, ad hoc, and mixed workloads. It can run complex queries at up to petabyte scale
across numerous nodes, with guaranteed sub-second response times. Yellowbrick was conceived with the
goal of optimizing price/performance. It's not uncommon for customers to see their workloads run tens or
hundreds of times faster at a fraction of the cost compared to cloud-only or legacy data warehouses.</p>
            <p class="mb-0"></p>
        </div>

      </div>
    </section>

    <section class="flex py-8 md:pt-0 bg-white px-6 xl:px-0">
      <div class="flex-1 justify-center max-w-1200 mx-auto">

        <div class="pt-6 sm:pt-0 pb-16 px-0 sm:px-10 max-w-800 mx-auto">

          <img src="/uploads/yellowbrick-datawarehouse-architecture-diagram.jpg" class="" alt="modern data warehouse" style="margin-left:10px"/>
        </div>

      </div>
    </section>

    <section class="flex py-12 bg-white px-6 xl:px-0">
      <div class="flex flex-col max-w-1000 mx-auto">
          
        <h3>A simple end to end migration</h3>

        <p class="mb-0">Yellowbrick is designed to make migrating from Netezza fast and simple. The Yellowbrick Data Warehouse:</p>
        <ul class="rfs-text-base">
          <li>
            Uses the same underlying PostgreSQL dialect as Netezza
          </li>
          <li>
         Supports PL/pgSQL stored procedures
          </li>
          <li>
          Has a library of functions added for Netezza compatibility
          </li>
          <li>
            Has intuitive syntax like Netezza (for example, nzload is ybload and nzsql is ybsql)
          </li>
                    <li>
           Offers a similar set of ecosystem integrations via standard ODBC, JDBC, and ADO drivers
          </li>
                    <li>
            Is certified and supported by many of the same enterprise tools you use today, such as Tableau,,
MicroStrategy and Informatica
          </li>
        </ul>
        <p>A Yellowbrick solutions architect will help you scope and plan your migration as part of a proof of concept
(POC). Once your POC is complete, the solutions architect will help you migrate your schema, data,
application logic, ecosystem tools, and users to the Yellowbrick platform.</p>
        <p>You’ll have a production-ready instance installed and running in under a day and will complete your
migration within days or weeks. Your post-migration activities are similarly easy: your team will have very
little tuning and configuration, will not have to pay for training and certification, and can get back to day-today business quickly</p>
          <h3>Yellowbrick is standards-based</h3>
          <p>The Yellowbrick Data Warehouse supports organizing your data into databases and schemas, just like
Netezza and every other PostgreSQL-inspired database. This means you do not have to worry about the
migration breaking your applications. You can continue to maintain your database organization as you
always have, with one database per tenant. If you want to expand to multiple schemas in a single database,
you can do so easily. </p>
           <p>The Yellowbrick Data Warehouse includes a query history database that is installed and fully documented.
Your queries will be logged and optimized on day one, and you no longer have to endure dumps of inmemory query history or manually configure the NZ_QUERY_HISTORY table as you might have been doing
with your Netezza system. Yellowbrick provides a richer, more granular level of detail about all activity within
the database and is easy to configure. You can set the retention period for your history with just one click. </p>
      
    
      
        <div class="pt-6 sm:pt-0 pb-16 px-0 sm:px-10 max-w-800 mx-auto">

          <img src="/uploads/servers-to-yellowbrick-data-warehouse.jpg" class=" img-2" alt="modern data warehouse"/>
        </div>
               <h4>Determining the current Netezza DDL</h4>
               <p>The nz_ddl_database command provides all the information about the DDL in your Netezza system,
including table, view, synonym, and sequence definitions; user and group role creations; stored procedures;
user-defined functions; and much more. </p>

<p>To extract the DDL for each database, execute the following command:</p>
<p><strong>$ nz_ddl_database < database > > < database >.ddl </strong> </p>
<p>One of our solutions architects will perform an inventory of your DDLs and map them appropriately to
Yellowbrick, according to best practices and using automated conversion tools.</p>
      <h4>Migrating table definitions</h4>
      <p>Migrating your table definitions is a seamless process. Many Yellowbrick customers move the Netezza DDL
(CREATE TABLE) with absolutely no change to their data types. In addition, you will have the opportunity to
improve your table distribution with the following options: </p>

       <ul class="rfs-text-base">
          <li>
            <strong>Replication </strong>
            for all tables that compress to a gigabyte or less
          </li>
          <li>
                   <strong>Hash-based co-location  </strong>
            of all tables greater than a gigabyte on a distribution column that links all the
tables
          </li>
                <li>
            <strong>Randomly distributed </strong>
             tables for other use cases 

          </li>
        </ul>
        <p>Yellowbrick also includes the following table features that enable you to further optimize your database:</p>
     
            <ul class="rfs-text-base">
          <li>
Table clustering and sorting that is like Netezza zone maps, but more granular
          </li>
          <li>
              Table partitioning, which is unavailable in Netezza; this feature reduces resource consumption for very
large aggregates and supports fact- to-fact joins that are impossible to execute on a Netezza system
          </li>

        </ul>
     
        <h4>Migrating view definitions</h4>
        <p>Because Yellowbrick is based on PostgreSQL, all your valid SQL operations and database views will run as is.</p>
        <h4>Migrating stored procedures</h4>
        <p>Yellowbrick supports PL/pgSQL stored procedures. A Yellowbrick solutions architect will perform an impact
analysis of your query history to determine which, if any, stored procedures you should migrate (that is, which
stored procedures your queries are using).</p>
   <h4>Exporting the data</h4>
      <p>You export Latin as well as Unicode data from your Netezza system with one of these options:</p>
                  <ul class="rfs-text-base">
          <li>
Direct streaming from Netezza into Yellowbrick (requires giving Yellowbrick necessary permissions)
          </li>
          <li>
              Exporting Netezza data to CSV files. You can do this on a Windows or Linux client using the following
methods:
            <ul>
                <li><strong>nz_backup</strong></li>
                <li><strong>nzsql</strong></li>
                 <li>SQL for remote external tables</li>
            </ul>
          </li>

        </ul>
        <p>Data will export in ASCII-delimited format that can be compressed.</p>
        <h4>Importing the data</h4>
        <p>If you exported the data to a CSV file (as opposed to direct streaming), you will import it using the <strong>ybload</strong>
tool. <strong>ybload</strong> is intuitive like Netezza <strong>nzload</strong>, but with dramatic improvements. It is designed for
parallelization, so you will not need to chunk files manually, and it maximizes the 10Gb network connection
shipped with Yellowbrick. <strong>ybload</strong> also compresses data before sending it to Yellowbrick and can load
multiple files at once. For example, users can run one <strong>ybload</strong> with a thousand files as input instead of
invoking <strong>nzload</strong> a thousand separate times. These optimizations make loading simple and possible to
dramatically accelerate load speeds compared to Netezza.
Yellowbrick can also load data directly from cloud-based object storage that’s S3-compatible. The platform
supports compressed or un-compressed files. If you are an HDFS user storing data in Hadoop, Yellowbrick
uses a Spark-based importer that can consume most common Hadoop file formats, such as Apache Parquet
or Avro.</p>
        <h4>Migrating user-defined functions (UDFs)</h4>
    <p>Netezza systems often have an Oracle compatibility toolkit installed that provides a set of UDFs. Typically,
customers use only a small number of UDFs, and the Yellowbrick Data Warehouse includes many of these
functions out of the box. A Yellowbrick solutions architect will perform an impact analysis to see if there are
any functions that the Yellowbrick Data Warehouse does not provide that are being used by queries.</p>

                <h4>Users, groups, and security configuration</h4>
                <p>
Like Netezza, Yellowbrick supports local or LDAP authentication methods. Creating database users (or roles)
is the primary mechanism for managing local database security. After creating users, you can set up access
control by granting or revoking privileges on databases, schemas, tables, columns, and stored procedures.

                    </p>

                        <h4>Users, groups, and security configuration</h4>

        <p>Like Netezza, Yellowbrick supports local or LDAP authentication methods.</p>

        <p>Creating database users (or roles) is the primary mechanism for managing local database security. After
creating users, you can set up access control by granting or revoking privileges on databases, schemas,
tables, columns, and stored procedures.</p>
          <p>Use the following SQL commands: CREATE ROLE, GRANT, and REVOKE</p>
            <p>Yellowbrick LDAP configurations support directory service providers such as Active Directory (AD) for
OpenLDAP. LDAP, LDAPS (LDAP over SSL), and LDAP+TLS configurations. This is an improvement over
Netezza LDAP integration, which is limited to just authentication and requires Netezza customers to manually
create USERS or GROUPS and can result in mismatches to the LDAP service.</p>
              <p>Yellowbrick provides an alternative to creating non-superusers manually in the database by synchronizing
the users and groups stored in an LDAP directory and creates users and roles with the same credentials. You
can synchronize specific users and groups by defining search criteria and filters.</p>
                                <h4>Redirecting users and applications</h4>

                    <p>You can connect ODBC, JDBC, and ADO.NET applications to a Yellowbrick database using standard
PostgreSQL drivers you download and install. This means you do not have to purchase new licenses to
redirect your existing applications. More importantly, third-party tools (such as BI, ETL, and analytical tools)
that are certified for PostgreSQL drivers will automatically be certified for the Yellowbrick Data Warehouse.</p>
                                        <p>Yellowbrick ships the open-standard PostgreSQL versions of these Windows or Linux drivers with every
instance. ETL tools leverage <strong>ybload</strong> and <strong>ybunload</strong> for high-speed data movement in and out of Yellowbrick
as described in the “Importing the data” section.</p>
       <h3>Simplify operations with intelligent automation</h3>
       <p>Yellowbrick is designed to deliver high performance to mixed workloads that modern enterprises require. It
can support thousands of users running mixtures of real-time transactional atomic inserts; bulk loads of data;
ELT workloads; interactive queries; ad hoc queries; and long-running, batch-oriented reports. While today’s
mixed workloads require a high-performance solution, as the number and diversity of workloads increases, it
is even more critical that you have the ability to specify, control, and automate the work that matters most.
Yellowbrick gives you this control with:</p>
  <ul class="rfs-text-base">
          <li>
         Real-time visibility into workload performance, with alerts, that ensures you know immediately when
workloads are struggling. Historical workload reporting also helps you manage workloads effectively
across the enterprise.
          </li>
          <li>
   Workload management reporting that enables you to see if the performance of different workload groups
is meeting business requirements.
          </li>
                <li>
 The ability to reprioritize any workload on the fly so you can adapt to unexpected changes in the business
environment.

          </li>
        </ul>
        <p>Automating workload management in Yellowbrick is simple and can be done via the Yellowbrick web
interface or SQL ALTER commands.</p>
<h4>Automated monitoring</h4>
<p>Yellowbrick includes 24x7 predictive remote monitoring technology that enables support engineers to handle
day-to-day monitoring activities. Yellowbrick support engineers review real-time diagnostic data, provide
recommendations, proactively address potential issues, and deliver prompt incident resolution.</p>
<p>You can monitor the platform yourself, instead of or in addition to using the Yellowbrick service. You can do
this through automated alerts that easily integrate to the endpoint tool of your choice. This is a simplified
experience instead of manually configuring each nzevent you want to monitor.</p>
<h4>Increase visibility</h4>
<p>Platform views give you comprehensive, real-time visibility into Yellowbrick. Monitoring is performed
continuously without affecting platform performance and is thoroughly documented so you can find what
you need, when you need it.</p>


      </div>
    </section>



    <MoreInfo />

  </Layout>
</template>

<script>
import MoreInfo from '~/components/moreinfonet.vue'

export default {
  metaInfo: {
    title: 'Netezza Migration Guide - Yellowbrick Data',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: 'Migrating  workloads to Yellowbrick is a seamless process. Yellowbrick is the only data warehouse that can manage your very large data sets with unparalleled performance.' }
    ]
  },
  components: {
    MoreInfo
  }
}
</script>
