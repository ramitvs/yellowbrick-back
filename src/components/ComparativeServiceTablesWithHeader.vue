<template>
	<section class="py-12 bg-gray-100">
		
		<div class="max-w-1200 w-full mx-auto z-10">
			<h2 class="text-teal">SERVICE PLANS COMPARISON</h2>
		    <p>Predictable OPEX subscriptions are available under the three different service plans:</p>
	    </div>

		<div class="is-mobile block lg:hidden">
			<div class="mb-20">
				<div class="table-header">
					<div class="heading-row w-full">Standard</div>
				</div>
				<div class="flex flex-no-wrap table-subHeading">
					<div class="p-5"></div>
					<div class="stat-row text-center p-5 whitespace-no-wrap">Data centers</div>
					<div class="stat-row text-center p-5 whitespace-no-wrap">In cloud</div>
				</div>
				<div class="flex tableStat-header">
					<div class="stat-row">Industry-leading price/performance</div>
					<div class="stat-row"><span class="checkmark"></span></div>
					<div class="stat-row"><span class="checkmark"></span></div>
				</div>
				<div class="flex tableStat-header">
					<div class="stat-row">User data limit</div>
					<div class="stat-row">10TB</div>
					<div class="stat-row">10TB</div>
				</div>
				<div class="flex tableStat-header">
					<div class="stat-row">Native streaming support (millions of rows/second)</div>
					<div class="stat-row"><span class="checkmark"></span></div>
					<div class="stat-row"><span class="checkmark"></span></div>
				</div>
				<div class="flex tableStat-header">
					<div class="stat-row">United hybrid architecture</div>
					<div class="stat-row"><span class="checkmark"></span></div>
					<div class="stat-row"><span class="checkmark"></span></div>
				</div>
				<div class="flex tableStat-header">
					<div class="stat-row">Encryption at rest and on wire</div>
					<div class="stat-row"><span class="checkmark"></span></div>
					<div class="stat-row"><span class="checkmark"></span></div>
				</div>
				<div class="flex tableStat-header">
					<div class="stat-row">High-speed parallel import and export; Kafka and Spark connectors</div>
					<div class="stat-row">Up to 10TB/hr</div>
					<div class="stat-row">Up to 10TB/hr</div>
				</div>
				<div class="flex tableStat-header">
					<div class="stat-row">HA/Automatic failover</div>
					<div class="stat-row"><span class="checkmark"></span></div>
					<div class="stat-row"><span class="checkmark"></span></div>
				</div>
				<div class="flex tableStat-header">
					<div class="stat-row">Cloud DR support</div>
					<div class="stat-row">-</div>
					<div class="stat-row">-</div>
				</div>
				<div class="flex tableStat-header">
					<div class="stat-row">Advanced workload management</div>
					<div class="stat-row"><span class="checkmark"></span></div>
					<div class="stat-row"><span class="checkmark"></span></div>
				</div>
				<div class="flex tableStat-header">
					<div class="stat-row">Private link support in AWS/Azure (GCP coming soon)</div>
					<div class="stat-row">-</div>
					<div class="stat-row"><span class="checkmark"></span></div>
				</div>
				<div class="flex tableStat-header">
					<div class="stat-row">Backups</div>
					<div class="stat-row">Customer discretion/self-service</div>
					<div class="stat-row">Managed hourly backups with weekly retention (encrypted)</div>
				</div>
				<div class="flex tableStat-header">
					<div class="stat-row">Support</div>
					<div class="stat-row">12x5, 24-hour SLA</div>
					<div class="stat-row">12x5, 24-hour SLA</div>
				</div>
				<div class="flex tableStat-header">
					<div class="stat-row">Cloud compliance</div>
					<div class="stat-row">SOC 2 Type 2, ISO 9001, ISO 27001, ISO 14001, ISO 50001</div>
					<div class="stat-row">SOC 2 Type 2, ISO 9001, ISO 27001, ISO 14001, ISO 50001</div>
				</div>
			</div>

			<div class="mb-20">
				<div class="table-header">
					<div class="heading-row w-full">Enterprise</div>
				</div>
				<div class="flex flex-no-wrap table-subHeading">
					<div class="p-5"></div>
					<div class="stat-row text-center p-5 whitespace-no-wrap">Data centers</div>
					<div class="stat-row text-center p-5 whitespace-no-wrap">In cloud</div>
				</div>
				<div class="flex tableStat-header">
					<div class="stat-row">Industry-leading price/performance</div>
					<div class="stat-row"><span class="checkmark"></span></div>
					<div class="stat-row"><span class="checkmark"></span></div>
				</div>
				<div class="flex tableStat-header">
					<div class="stat-row">User data limit</div>
					<div class="stat-row">6PB</div>
					<div class="stat-row">6PB</div>
				</div>
				<div class="flex tableStat-header">
					<div class="stat-row">Native streaming support (millions of rows/second)</div>
					<div class="stat-row"><span class="checkmark"></span></div>
					<div class="stat-row"><span class="checkmark"></span></div>
				</div>
				<div class="flex tableStat-header">
					<div class="stat-row">United hybrid architecture</div>
					<div class="stat-row"><span class="checkmark"></span></div>
					<div class="stat-row"><span class="checkmark"></span></div>
				</div>
				<div class="flex tableStat-header">
					<div class="stat-row">Encryption at rest and on wire</div>
					<div class="stat-row"><span class="checkmark"></span></div>
					<div class="stat-row"><span class="checkmark"></span></div>
				</div>
				<div class="flex tableStat-header">
					<div class="stat-row">High-speed parallel import and export; Kafka and Spark connectors</div>
					<div class="stat-row">10TB/hr</div>
					<div class="stat-row">10TB/hr</div>
				</div>
				<div class="flex tableStat-header">
					<div class="stat-row">HA/Automatic failover</div>
					<div class="stat-row"><span class="checkmark"></span></div>
					<div class="stat-row"><span class="checkmark"></span></div>
				</div>
				<div class="flex tableStat-header">
					<div class="stat-row">Cloud DR support</div>
					<div class="stat-row"><span class="checkmark"></span></div>
					<div class="stat-row"><span class="checkmark"></span></div>
				</div>
				<div class="flex tableStat-header">
					<div class="stat-row">Advanced workload management</div>
					<div class="stat-row"><span class="checkmark"></span></div>
					<div class="stat-row"><span class="checkmark"></span></div>
				</div>
				<div class="flex tableStat-header">
					<div class="stat-row">Private link support in AWS/Azure (GCP coming soon)</div>
					<div class="stat-row">-</div>
					<div class="stat-row"><span class="checkmark"></span></div>
				</div>
				<div class="flex tableStat-header">
					<div class="stat-row">Backups</div>
					<div class="stat-row">Custom RTO/RPO and self-service restore</div>
					<div class="stat-row">Managed backups with custom RTO/RPO and self-service restore</div>
				</div>
				<div class="flex tableStat-header">
					<div class="stat-row">Support</div>
					<div class="stat-row">24x7, 4-hour SLA</div>
					<div class="stat-row">24x7, 4-hour SLA</div>
				</div>
				<div class="flex tableStat-header">
					<div class="stat-row">Cloud compliance</div>
					<div class="stat-row">SOC 2 Type 2, ISO 9001, ISO 27001, ISO 14001, ISO 50001</div>
					<div class="stat-row">SOC 2 Type 2, ISO 9001, ISO 27001, ISO 14001, ISO 50001</div>
				</div>
			</div>

			<div>
				<div class="table-header">
					<div class="heading-row w-full">Enterprise +</div>
				</div>
				<div class="flex flex-no-wrap table-subHeading">
					<div class="p-5"></div>
					<div class="stat-row text-center p-5 whitespace-no-wrap">Data centers</div>
					<div class="stat-row text-center p-5 whitespace-no-wrap">In cloud</div>
				</div>
				<div class="flex tableStat-header">
					<div class="stat-row">Industry-leading price/performance</div>
					<div class="stat-row"><span class="checkmark"></span></div>
					<div class="stat-row"><span class="checkmark"></span></div>
				</div>
				<div class="flex tableStat-header">
					<div class="stat-row">User data limit</div>
					<div class="stat-row">6PB</div>
					<div class="stat-row">6PB</div>
				</div>
				<div class="flex tableStat-header">
					<div class="stat-row">Native streaming support (millions of rows/second)</div>
					<div class="stat-row"><span class="checkmark"></span></div>
					<div class="stat-row"><span class="checkmark"></span></div>
				</div>
				<div class="flex tableStat-header">
					<div class="stat-row">United hybrid architecture</div>
					<div class="stat-row"><span class="checkmark"></span></div>
					<div class="stat-row"><span class="checkmark"></span></div>
				</div>
				<div class="flex tableStat-header">
					<div class="stat-row">Encryption at rest and on wire</div>
					<div class="stat-row"><span class="checkmark"></span></div>
					<div class="stat-row"><span class="checkmark"></span></div>
				</div>
				<div class="flex tableStat-header">
					<div class="stat-row">High-speed parallel import and export; Kafka and Spark connectors</div>
					<div class="stat-row">10TB/hr</div>
					<div class="stat-row">10TB/hr</div>
				</div>
				<div class="flex tableStat-header">
					<div class="stat-row">HA/Automatic failover</div>
					<div class="stat-row"><span class="checkmark"></span></div>
					<div class="stat-row"><span class="checkmark"></span></div>
				</div>
				<div class="flex tableStat-header">
					<div class="stat-row">Cloud DR support</div>
					<div class="stat-row"><span class="checkmark"></span></div>
					<div class="stat-row"><span class="checkmark"></span></div>
				</div>
				<div class="flex tableStat-header">
					<div class="stat-row">Advanced workload management</div>
					<div class="stat-row"><span class="checkmark"></span></div>
					<div class="stat-row"><span class="checkmark"></span></div>
				</div>
				<div class="flex tableStat-header">
					<div class="stat-row">Private link support in AWS/Azure (GCP coming soon)</div>
					<div class="stat-row">-</div>
					<div class="stat-row"><span class="checkmark"></span></div>
				</div>
				<div class="flex tableStat-header">
					<div class="stat-row">Backups</div>
					<div class="stat-row">Custom RTO/RPO and self-service restore</div>
					<div class="stat-row">Managed backups with custom RTO/RPO and self-service restore</div>
				</div>
				<div class="flex tableStat-header">
					<div class="stat-row">Support</div>
					<div class="stat-row">24x7, 4-hour SLA</div>
					<div class="stat-row">24x7, 4-hour SLA</div>
				</div>
				<div class="flex tableStat-header">
					<div class="stat-row">Cloud compliance</div>
					<div class="stat-row">SOC 2 Type 2, ISO 9001, ISO 27001, ISO 14001, ISO 50001</div>
					<div class="stat-row">HIPAA, PCI-DSS, SOC 2 Type 2, ISO 9001, ISO 27001, ISO 14001, ISO 50001</div>
				</div>
			</div>
		</div>

		<div class="hidden lg:block max-w-1200 mx-auto shadow">
			
			<div class="flex table-header">
				<div class="heading-row"></div>
				<div class="heading-row w-full md:w-1/4">
					Standard
				</div>
				<div class="heading-row w-full md:w-1/4">
					Enterprise
				</div>
				<div class="heading-row w-full md:w-1/4">
					Enterprise +
				</div>
			</div>

			<div class="flex justify-start subTable-header">
				<div class="heading-row"></div>
				<div class="heading-row md:w-1/7">Data centers</div>
				<div class="heading-row md:w-1/7">In cloud</div>
				<div class="heading-row md:w-1/7">Data centers</div>
				<div class="heading-row md:w-1/7">In cloud</div>
				<div class="heading-row md:w-1/7">Data centers</div>
				<div class="heading-row md:w-1/7">In cloud</div>
			</div>
			<div class="flex tableStat-header">
				<div class="stat-row">Industry-leading price/performance</div>
				<div class="stat-row"><span class="checkmark"></span></div>
				<div class="stat-row"><span class="checkmark"></span></div>
				<div class="stat-row"><span class="checkmark"></span></div>
				<div class="stat-row"><span class="checkmark"></span></div>
				<div class="stat-row"><span class="checkmark"></span></div>
				<div class="stat-row"><span class="checkmark"></span></div>
			</div>
			<div class="flex tableStat-header">
				<div class="stat-row">User data limit</div>
				<div class="stat-row">10TB</div>
				<div class="stat-row">10TB</div>
				<div class="stat-row">6PB</div>
				<div class="stat-row">6PB</div>
				<div class="stat-row">6PB</div>
				<div class="stat-row">6PB</div>
			</div>
			<div class="flex tableStat-header">
				<div class="stat-row">Native streaming support (millions of rows/second)</div>
				<div class="stat-row"><span class="checkmark"></span></div>
				<div class="stat-row"><span class="checkmark"></span></div>
				<div class="stat-row"><span class="checkmark"></span></div>
				<div class="stat-row"><span class="checkmark"></span></div>
				<div class="stat-row"><span class="checkmark"></span></div>
				<div class="stat-row"><span class="checkmark"></span></div>
			</div>
			<div class="flex tableStat-header">
				<div class="stat-row">United hybrid architecture</div>
				<div class="stat-row"><span class="checkmark"></span></div>
				<div class="stat-row"><span class="checkmark"></span></div>
				<div class="stat-row"><span class="checkmark"></span></div>
				<div class="stat-row"><span class="checkmark"></span></div>
				<div class="stat-row"><span class="checkmark"></span></div>
				<div class="stat-row"><span class="checkmark"></span></div>
			</div>
			<div class="flex tableStat-header">
				<div class="stat-row">Encryption at rest and on wire</div>
				<div class="stat-row"><span class="checkmark"></span></div>
				<div class="stat-row"><span class="checkmark"></span></div>
				<div class="stat-row"><span class="checkmark"></span></div>
				<div class="stat-row"><span class="checkmark"></span></div>
				<div class="stat-row"><span class="checkmark"></span></div>
				<div class="stat-row"><span class="checkmark"></span></div>
			</div>
			<div class="flex tableStat-header">
				<div class="stat-row">High-speed parallel import and export; Kafka and Spark connectors</div>
				<div class="stat-row">Up to 10TB/hr</div>
				<div class="stat-row">Up to 10TB/hr</div>
				<div class="stat-row">10TB/hr</div>
				<div class="stat-row">10TB/hr</div>
				<div class="stat-row">10TB/hr</div>
				<div class="stat-row">10TB/hr</div>
			</div>
			<div class="flex tableStat-header">
				<div class="stat-row">HA/Automatic failover</div>
				<div class="stat-row"><span class="checkmark"></span></div>
				<div class="stat-row"><span class="checkmark"></span></div>
				<div class="stat-row"><span class="checkmark"></span></div>
				<div class="stat-row"><span class="checkmark"></span></div>
				<div class="stat-row"><span class="checkmark"></span></div>
				<div class="stat-row"><span class="checkmark"></span></div>
			</div>
			<div class="flex tableStat-header">
				<div class="stat-row">Cloud DR support</div>
				<div class="stat-row">-</div>
				<div class="stat-row">-</div>
				<div class="stat-row"><span class="checkmark"></span></div>
				<div class="stat-row"><span class="checkmark"></span></div>
				<div class="stat-row"><span class="checkmark"></span></div>
				<div class="stat-row"><span class="checkmark"></span></div>
			</div>
			<div class="flex tableStat-header">
				<div class="stat-row">Advanced workload management</div>
				<div class="stat-row"><span class="checkmark"></span></div>
				<div class="stat-row"><span class="checkmark"></span></div>
				<div class="stat-row"><span class="checkmark"></span></div>
				<div class="stat-row"><span class="checkmark"></span></div>
				<div class="stat-row"><span class="checkmark"></span></div>
				<div class="stat-row"><span class="checkmark"></span></div>
			</div>
			<div class="flex tableStat-header">
				<div class="stat-row">Private link support in AWS/Azure (GCP coming soon)</div>
				<div class="stat-row">-</div>
				<div class="stat-row"><span class="checkmark"></span></div>
				<div class="stat-row">-</div>
				<div class="stat-row"><span class="checkmark"></span></div>
				<div class="stat-row">-</div>
				<div class="stat-row"><span class="checkmark"></span></div>
			</div>
			<div class="flex tableStat-header">
				<div class="stat-row">Backups</div>
				<div class="stat-row">Customer discretion/self-service</div>
				<div class="stat-row">Managed hourly backups with weekly retention (encrypted)</div>
				<div class="stat-row">Custom RTO/RPO and self-service restore</div>
				<div class="stat-row">Managed backups with custom RTO/RPO and self-service restore</div>
				<div class="stat-row">Custom RTO/RPO and self-service restore</div>
				<div class="stat-row">Managed backups with custom RTO/RPO and self-service restore</div>
			</div>
			<div class="flex tableStat-header">
				<div class="stat-row">Support</div>
				<div class="stat-row">12x5, 24-hour SLA</div>
				<div class="stat-row">12x5, 24-hour SLA</div>
				<div class="stat-row">24x7, 4-hour SLA</div>
				<div class="stat-row">24x7, 4-hour SLA</div>
				<div class="stat-row">24x7, 4-hour SLA</div>
				<div class="stat-row">24x7, 4-hour SLA</div>
			</div>
			<div class="flex tableStat-header">
				<div class="stat-row">Cloud compliance</div>
				<div class="stat-row">SOC 2 Type 2, ISO 9001, ISO 27001, ISO 14001, ISO 50001</div>
				<div class="stat-row">SOC 2 Type 2, ISO 9001, ISO 27001, ISO 14001, ISO 50001</div>
				<div class="stat-row">SOC 2 Type 2, ISO 9001, ISO 27001, ISO 14001, ISO 50001</div>
				<div class="stat-row">SOC 2 Type 2, ISO 9001, ISO 27001, ISO 14001, ISO 50001</div>
				<div class="stat-row">SOC 2 Type 2, ISO 9001, ISO 27001, ISO 14001, ISO 50001</div>
				<div class="stat-row">HIPAA, PCI-DSS, SOC 2 Type 2, ISO 9001, ISO 27001, ISO 14001, ISO 50001</div>
			</div>
		</div>
	</section>
</template>
<script>
	export default {}
</script>
