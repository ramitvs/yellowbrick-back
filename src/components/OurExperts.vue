<style scoped>
  .bg-blackish2 {
    background-color: #11181f;
}
.expertdetails {
    text-align: center;
    margin-top: 14px;
    color: #ffffff;
}
.expertdetails h4 {
    margin-bottom: 4px;
}
.expertdetails h6 {
    margin-bottom: 6px;
    color: #c5bebe;
}
.expertdetails a {
    background: none !important;
    color: #00c3cd !important;
    border-bottom: 0 !important;
}
</style>
<template>
	  <section class="intro bg-blackish2" style="">
		<div class="max-w-1200 mx-auto">  
		  <h2 class="font-normal text-white pt-16 text-center">
          Get started with our experts
        </h2>
	<div class="flex flex-col md:flex-row mx-auto">
      <div class="mt-10 md:mb-20 px-6 free md:w-1/1 mx-auto">
       <div class="expertslist">
        <img src="/uploads/go/gary-west.png" class="expertphotp w-full"/>
        <div class="expertdetails">
        <h4>Gary West</h4>
        <h6>VP & GM EMEA</h6>
        <p><a href="mailto:gary.west@yellowbrick.com">gary.west@yellowbrick.com</a></p>
        </div>
        </div>
      </div>
	  <!-- <div class="mt-10 md:mb-20 px-6 free md:w-1/2">
      <div class="expertslist lg:float-left">
        <img src="/uploads/go/drake-astleford.png" class="expertphotp w-full" />
        <div class="expertdetails">
        <h4>Drake Astleford</h4>
        <h6>Sales Developement Rep.</h6>
        <p><a href="mailto:drake.astleford@yellowbrick.com">drake.astleford@yellowbrick.com</a></p>
        </div>
        </div> -->
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
