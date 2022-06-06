<style scoped>
    .bg-blackish2 {
        background-color: #11181f;
    }
</style>
<template>
    <section class="intro bg-blackish2" style="">
        <div class="max-w-1200 mx-auto">
            <h2 class="font-normal text-white pt-16 text-center">
                How Yellowbrick is Different
            </h2>
            <div class="flex flex-col md:flex-row">
                <div class="mt-10 md:mb-20 px-6 free md:w-1/2">
                    <BaseWistia id="jl7d88uzmd" />
                </div>
                <div class="mt-10 md:mb-20 px-6 free md:w-1/2">
                    <p class="mt-4 rfs-text-lg free text-white">
                        Yellowbrick Cloud Data Warehouse is a state-of-the-art, MPP analytics database that helps you get the most value from all your data by combining everything you love about on-premises and cloud data
                        warehouses-including
                        industry-leading speed and concurrency, agile and elastic provisioning, and a predictable subscription pricing model. Unlike other data warehouses, Yellowbrick’s architecture provides a flexible, future-proof platform that meets any
                        deployment need across private, public, and hybrid/distributed clouds.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

  import BaseWistia from "../components/BaseWistia.vue";
  export default {
    components: {
      BaseWistia
    },
  }
</script>
