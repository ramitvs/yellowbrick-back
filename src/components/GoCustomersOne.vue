<style>
	.logo-images {
		height: 80px;
	}
</style>
<template>
	<section class="py-8 sm:py-24 px-6 xl:px-0">
		<div class="flex flex-col max-w-1200 w-full mx-auto relative">
			<h2 class="text-center">Yellowbrick helps enterprises innovate and thrive</h2>
			<div class="flex flex-row flex-wrap -mx-8 p-8">
				<div class="flex w-full xs:w-1/2 md:w-1/3 lg:w-1/4 p-6 sm:px-4 md:px-8" v-for="logo in $static.pages.logo" :key="logo.name">
					<img class="w-3/4 mx-auto xs:w-full sm:w-3/4 self-start  logo-images" :src="logo.photo" :alt="logo.name " :title="logo.name " />
				</div>
			</div>
			<g-link to="/customers/" class="button yellow self-center">Read our customer stories</g-link>
		</div>
	</section>
</template>
<static-query>
	query Page {
	pages(path: "/data/pages/client") {
	logo {
	name
	position
	photo
	}
	}
	}
</static-query>