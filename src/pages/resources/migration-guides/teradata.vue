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

h3 {
	font-weight: bold;
	font-size: 26px;
	letter-spacing: 0.25px;
}

h4 {
	font-weight: bold;
	font-size: 22px;
	color: #57C0CB;
	margin-top: 10px;
}
@media only screen and (min-width: 1400px) {
 .img-1{
   margin-left: 40px;
 }
}
@media only screen and (min-width: 768px) {
	.img-2 {
		margin-left: -60px;
	}
}

@media only screen and (max-width: 768px) {
	.flexer {
		flex-direction: column !important;
	}
	.flexer img {
		max-height: auto !important;
	}
	.flexer .float-form {
		max-height: auto !important;
		margin-top: 30px;
		width: auto;
	}
	.flexer-chld {
		margin-left: 0px !important;
		text-align: center !important;
		border: 1px solid;
		width: 100% !impor
	}
	.flexer-chld img {
		height: 200px;
		margin-top: 20px;
		width: auto;
	}
}

.shft {
	font-weight: bold;
}

.card img {
	width: auto;
	height: 60px;
  margin-bottom: 20px;
  margin-top: 10px;
}

.card {
	border-bottom: 10px solid #057992;
	background-color: white;
	box-shadow: 2px 2px 10px black;
	border-radius: 5px;
	margin: 5px;
	padding: 10px;
	margin-bottom: 50px;
}

.card-text {
	padding-top: 10px;
  height: 220px;
}
.box12 {
	width: 40%;
	margin: 40px;
}

/* .card-img-btn img{
  margin-bottom: 20px;
  border-bottom: 2px solid transparent;
}
.card-img-btn img:hover{


  border-bottom: 2px solid black;

} */
.rfs-text-base{
  margin-top: -10px;
}

</style>
<template>
	<Layout>
		<section class="hero flex bg-gray-700 py-12 md:py-24 text-white px-6 xl:px-0">
			<div class="flex flex-col max-w-1000 w-full mx-auto z-10 flexer" style="display: flex; flex-direction: row;">
				<div style="width: 100%;"> <span class="rfs-text-xl text-yellow1 mb-0">Migration Guide:</span>
					<h1 class="m-0 p-0 leading-none  sm:w-1/2 md:w-8/12">Migrating from Teradata to
Yellowbrick, the data
warehouse for distributed
clouds</h1>
					<p style="margin-top: 20px;">Developed by Next Pathway and Yellowbrick</p>
				</div>
				<div class="w-full md:w-2/4">
					<div class="float-form"> <img src="/uploads/images/tera-pdf.png" /> <a href="https://www.yellowbrick.com/uploads/GUIDE_Teradata_Yellowbrick_Migration.pdf" style="margin-top: 30px;" class="button yellow basehubspot-button ungated-asset" id="migration-guide_teradata">Read Now</a> </div>
				</div>
			</div>
			</div>
		</section>
		<section class="flex py-12 bg-white px-6 xl:px-0">
			<div class="flex flex-col md:flex-row items-center justify-evenly max-w-1000 mx-auto">
				<div class="w-full md:w-full relative pr-0 md:pr-10">
					<h3 class="text-gray-500 mb-8">Introduction</h3>
					<p>Yellowbrick Data and Next Pathway, an industry leader in cloud migration, have partnered on an end-to-end solution that streamlines your move from your legacy Teradata enterprise data warehouse platform to Yellowbrick Data Warehouse — alleviating the need for extensive manual development and migration efforts. With Teradata outsourcing support to IBM--which, ironically, has endlessly confused its own customers about the Netezza roadmap--there's never been a better time to activate an "Off Teradata" initiative</p>
					<p>This document is intended for customers seeking a migration path for key workloads from Teradata to Yellowbrick Data Warehouse. This guide will provide customers with best practices and key considerations when planning and executing their migration.</p>
					<h3>Modernizing your data warehouse with Yellowbrick</h3>
					<p class="mb-0">Yellowbrick Data Warehouse is an advanced, massively parallel (MPP), SQL database designed for the most demanding batch, real-time, ad hoc, and mixed workloads. It can run complex queries at up to petabyte scale across numerous nodes, with guaranteed sub-second response times. Yellowbrick was conceived with the goal of optimizing price/performance. It's not uncommon for customers to see their workloads run tens or hundreds of times faster at a fraction of the cost compared to cloud-only or legacy data warehouses.</p>
					<p class="mb-0"></p>
				</div>
			</div>
		</section>
		<section class="flex py-8 md:pt-0 bg-white px-6 xl:px-0">
			<div class="flex-1 justify-center max-w-1200 mx-auto">
				<div class="pt-6 sm:pt-0 pb-16 px-0 sm:px-10 "> <img src="/uploads/images/tera-1.png" class="w-full" alt="modern data warehouse" style="text-align: center;" /> </div>
			</div>
		</section>
		<section class="flex py-12 bg-white px-6 xl:px-0">
			<div class="flex flex-col max-w-1000 mx-auto">
				<h3>End to end migration approach, powered by Next Pathway</h3>
				<p class="mb-0">Once pioneers in the Relational Database Management System (RDBMS) space, Teradata is now deemed as legacy. Organizations with ambitions of moving to cloud-native environments for data warehouse and advanced analytic capabilities are left behind with the legacy Teradata world, including high licensing costs, inability to perform advanced analytics, and their complex library of functions and commands. These include BTEQ, FastLoad, MultiLoad, TPT, and various others. Simply put, migration from Teradata is not a trivial task for customers today.</p>
				<p>To help customers modernize their data warehouse quickly and easily, Next Pathway designed the SHIFT™ Migration Suite with Teradata specifically in mind and have solved for the end-to-end challenges customers experience when moving from Teradata to Yellowbrick</p>
				<p>Next Pathway’s migration methodology focuses on the three core steps of migration:</p>
				<ul class="rfs-text-base" style="list-style-type: none;">
					<li> a. Plan Effectively </li>
					<li> b. Automate Code Conversion and Data Migration </li>
					<li> c. Prioritize Validation and Testing </li>
				</ul>



				<div class="pt-6 sm:pt-0 pb-16 px-0 sm:px-10 "> <img src="/uploads/images/tera-2.png" class="w-full" alt="modern data warehouse" style="text-align: center;" /> </div>
				<h3 style="margin-bottom: 50px; text-align: center;">Key features of Next Pathway’s SHIFT™ Migration Suite</h3>
				<div style="display: flex; flex-direction: row; flex-wrap: wrap; justify-content: center;" class="pt-6 sm:pt-0 pb-16 px-0 sm:px-10 ">
					<div class="card" style="width: 18rem;"> <a href="https://www.nextpathway.com/crawler-360" class="card-img-btn"> <img class="card-img-top" src="/uploads/images/crawler-360.png" alt="Crawler Image"></a>
						<div class="card-body">
              
							<p class="card-text">SHIFT > scans and catalogs legacy data sources, including ETL pipelines, scheduler jobs, and downstream consuming applications, to uncover actionable insights to plan your migration efficiently.</p>  </div>
					</div>
					<div class="card" style="width: 18rem;"> <a href="https://www.nextpathway.com/shift-migration-suite/#analyzer" class="card-img-btn"> <img class="card-img-top" src="/uploads/images/shift-1.png" alt="Shift Analyzer Image"></a>
						<div class="card-body">
							<p class="card-text">SHIFT ANALYZER assesses various legacy application code types to create inventories of all objects, define complexity, and provide automation rates in order to right-size your migration.</p></div>
					</div>
					<div class="card" style="width: 18rem;"> <a href="https://www.nextpathway.com/shift-migration-suite/#translator" class="card-img-btn"> <img class="card-img-top" src="/uploads/images/shift-4.png" alt="Shift Translator Image"></a>
						<div class="card-body">
							<p class="card-text">SHIFT TRANSLATOR automates the translation of complex workloads, including SQL, Stores Procedures, ETL, and various other code types for various source and target platforms.</p>  </div>
					</div>
					<div class="card" style="width: 18rem;"><a href="https://www.nextpathway.com/shift-migration-suite/shift-jet-interpreter/" class="card-img-btn"> <img class="card-img-top" src="/uploads/images/shift-2.png" alt="Shift Jet Interpreter Image"></a>
						<div class="card-body">
							<p class="card-text">SHIFT JET INTERPRETER serves as a migration accelerator to get customers off of Teradata by eliminating the need to re-write Teradata utilities like BTEQ and FLOAD, and thus, move these utilities off of the migration critical path.</p></div>
					</div>
					<div class="card" style="width: 18rem;"><a href="https://www.nextpathway.com/shift-migration-suite/shift-tester/" class="card-img-btn"> <img class="card-img-top" src="/uploads/images/shift-5.png" alt="Shift Tester Image"></a>
						<div class="card-body">
							<p class="card-text">SHIFT TESTER automates key tasks in the testing life-cycle when executing and optimizing workloads within the cloud.</p>  </div>
					</div>
				</div>
				<h3>Migration planning</h3>
				<p>Migration planning is incredibly important to justify the migration and define the most efficient migration approach. Without defining the right migration strategy and plan upfront, customers often hit major migration bottlenecks during later phases of the migration project, which either stall or derail the migration project entirely</p>
				<p>An effective migration strategy in plan helps answer questions including:</p>
				<ul class="rfs-text-base" style="list-style-type: none;">
					<li> 1. How long will the migration project take, and how much will it cost? </li>
					<li> 2. What type of migration strategy should I employ? </li>
					<li> 3. What are the ‘x-factors’ in Teradata that I need to plan for? </li>
					<li> 4. What workloads should be prioritized as migration candidates? </li>
				</ul>
				<p>To answer these, and many other, questions that often come up during early parts of migration planning, we encourage customers to employ a data-driven and automated planning process.</p>
				<p>Next Pathway’s SHIFT™ > and SHIFT™ ANALYZER are automated tools to accelerate this process and help quickly define answers to these, and many other, questions to define the right migration plan.</p>
				<p>SHIFT™ > is used to identify the workloads within the Teradata environment that are migration candidates, in order to define the appropriate migration approach. Further, SHIFT™ > will provide a lineage view for the data pipelines feeding Teradata, to develop the migration plan for repointing those pipelines to Yellowbrick.</p>
				<div class="max-w-1000 flex">
					<div class="md:w-1/3">
						<p>SHIFT™ ANALYZER is then used to scan the Teradata applications to identify the complete code inventory, complexity of objects (including DDL, DML, Stored Procedures, Functions, among others), and “x-factors” that will require custom solutions when moving to Yellowbrick.</p>
						<p> Both SHIFT™ > and SHIFT™ ANALYZER are important utilities to help define the appropriate migration strategy, project timeline, as well as help to define the right size of Yellowbrick environment required to replace Teradata. </p>
					</div>
					<div class="md:w-2/3">
						<div class="pt-6 sm:pt-0 pb-16 px-0 sm:px-10 "> <img src="/uploads/images/tera-3.png" class="w-3/4" alt="modern data warehouse" style="margin-left:10px" /> </div>
					</div>
				</div>
				<h3>Automate code translation and data migration </h3>
				<p>Code translation and data migration are two steps that often go hand in hand in this phase of the Teradata migration project. </p>
				<p>There are two core data migration steps: historical data migration, and on-going data ingestion. Historical data migration refers to the one-time load of historical data from the legacy Teradata environment, at a point in time, while on-going data ingestion refers to the delta, or incremental, data loads, once all of the source system data feeds are repointed to the target platform.</p>
				<p>Key considerations for data migration that will vary from project to project may include:</p>
				<ul class="rfs-text-base">
					<li> Determining how much historical data is required to migrate, which will be dictated by migration approach defined during planning </li>
					<li> Employing the appropriate historical migration tool and method, that gets data migrated as quickly and efficiently as possible </li>
					<li> Determining if a new on-going data ingestion tool is required, depending on whether the legacy Teradata environment is reliant on Teradata utilities like FLOAD and MLOAD for data import, or a third-party ETL tool like Informatica that are still within the migration strategy </li>
				</ul>
				<p>Code translation involves automating the process to alleviate manual development efforts to write table, queries, and other transformations happening within the Teradata environment. </p>
				<p>This step involves employing TRANSLATOR, which will automatically translate all Teradata SQL and Stored Procedure objects to Yellowbrick syntax, with accuracy of at least 95% out of the box. Further, our Professional Services team leverages a vast knowledge base of solutions to help address common Teradata implementation scenarios.</p>
				<p>For Teradata specifically, an approach must also be taken for Teradata’s vast library of proprietary utilities that handle data movement within the EDW. For these utilities, the  JET INTERPRETER will handle the interpretation and execution of these Teradata utilities like BTEQ and TPT with precision and speed, matching or exceeding existing business SLAs, in order to remove these discrepancies from the migration critical path.</p>
				<p>Lastly, for Teradata environments dependent on third-party ETL tools like Informatica or DataStage,  TRANSLATOR can be employed to automatically translate and repoint the legacy data pipelines (that are moving data from source systems into Teradata) to now point against the Yellowbrick environment. This task cannot be underestimated. Traditionally ETL repointing involves complicated manual refactoring efforts to unpack each pipeline, convert legacy data transformation logic to Yellowbrick syntax, as well as update source and target connectors. TRANSLATOR</span> handles all aspects of this conversion process automatically, thus alleviating this typical migration bottleneck from the migration timeline.</p>
				<div class="pt-6 sm:pt-0 pb-16 px-0 sm:px-10 "> <img src="/uploads/images/tera-4.png" class="w-full" alt="modern data warehouse" /> </div>
				<h3>Validation, testing, and cutover</h3>
				<p>Once data and code has been migrated, organizations must prioritize testing and validation, as well as cutover tasks to ensure the legacy Teradata environment can be decommissioned.</p>
				<p>Testing focuses primarily on evaluating or assessing the quality and completeness of the various data and code elements migrated in the earlier phases. This should be an iterative process aligned with the prior phases to deliver a complete and validated migration solution according to a defined migration schedule outlined in a Migration Plan for the engagement</p>
				<p>The key objectives of the Testing phase should include:</p>
				<ul class="rfs-text-base">
					<li> To find and document defects and problems in the migrated application </li>
					<li> Validate that requirements are implemented properly and the solution works as intended </li>
					<li> Ensure existing business SLAs are either met or exceeded between Teradata and Yellowbrick </li>
				</ul>
				<p>The helps accelerate this phase by automating data validation and hash-level attribute comparison between the Teradata and Yellowbrick environments. By automating this process, this helps organizations get to later phases of testing faster, including systems integration and business acceptance testing. </p>
				<p>The key consideration to remember at this phase is to budget as much time as possible for testing and validation to ensure your business partners are happy.</p>
				<p>Naturally, as testing is accelerated and performance/validation are accounted for, organizations can then decide on their ‘parallel run’ strategy to determine the length of time required to keep an active-active set-up between Teradata and Yellowbrick, before fully decommissioning the Teradata environment.</p>
				<h4>Summary</h4>
				<p>Together, Next Pathway and Yellowbrick are providing Teradata customers with the industry’s fastest and more effective migration path off of their legacy Teradata EDW to Yellowbrick’s data warehouse for distributed clouds. By leveraging the  Migration Suite, customers can benefit from automation at every phase of their migration, including planning, code translation and testing/validation to accelerate the time to cut-over.</p>
				<p>Benefits of  Migration Suite offers over manual migration</p>
				<ul class="rfs-text-base">
					<li> Planning: Whether you’re translating complex workloads, or testing, ’s automation parallelizes development efforts to deliver faster, more efficiently and in a truly agile model </li>
					<li> Testing: By applying automation to the migration life-cycle and removing manual efforts, human error is eliminated, and standardization is enforced to respect and enforce various governance and security controls for your organization </li>
					<li> Translation: ’s automation brings HUGE benefits over manual efforts, in order for your business to focus their time on downstream tasks that matter most </li>
					<li> End-to-end approach:  automates key parts of the end-to-end migration life cycle to get you to cut-over faster, including ETL and BI conversion, in addition to code translation and testing </li>
					<li> Scalability: ’s unique architecture enables it to support any custom requirement or edge-cases with the simple addition of new rules, and thus avoid typical project bottlenecks </li>
				</ul>
			</div>
		</section>
		<MoreInfo /> </Layout>
</template>
<script>
import MoreInfo from '~/components/MoreInfoTeradata.vue'
export default {
	metaInfo: {
		title: 'Teradata Migration Guide - Yellowbrick Data',
		meta: [{
			key: 'description',
			name: 'description',
			content: 'Migrating Teradata workloads to Yellowbrick is a seamless process. Yellowbrick is the only data warehouse that can manage your very large data sets with unparalleled performance.'
		}]
	},
	components: {
		MoreInfo
	}
}
</script>