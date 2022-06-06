<style scoped>
    .hero {
        background-image: url(/uploads/go/data-warehouse.png);
        background-size: cover;
        background-position: center center;
        min-height: 790px;
        &:after

    {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        @apply bg-gray-700 absolute z-0;
        opacity: .7;
    }

    }
      .companylogo {
          border-left: 0px solid #c1c1c1;
      }
      a.yblogo {
    border-right: 2px solid #c1c1c1;
}
    .companylogo img {
        float: left;
        padding-left: 50px;
    }

    .dk-bg .mktoForm .mktoFormRow .mktoLabel {
        color: #ffffff !important;
    }

    .arrow-only-blue {
        font-size: 36px;
        padding-right: 50px;
        position: relative;
    }

        .arrow-only-blue::after {
            content: '';
            height: 19px;
            width: 25px;
            background-image: url(/uploads/images/blue-arrow-right.svg);
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-9px);
            transition: right .25s ease-in-out;
        }

        .arrow-only-blue:hover:after {
            right: -10px;
        }

    @media (max-width: 600px) {

        .companylogo img {
            float: right;
        }
        .companylogo img {
        float: left;
        padding-left: 24px !important;
    }
    .yblogo.active {
    float: right;
    padding-right: 24px !important;    
}
    }

    @media only screen and (max-width: 768px) {

        .hero-title {
            font-size: 30px !important;
        }
    }

    @media(min-width: 768px) {
        .hero-text
        .hero-title {
            padding: 0 212px 0 0;
        }

        .hero-text
        .description-container {
            padding: 0 168px 10px 0;
        }
    }
.yblogo.active {
    float: right;
    padding-right: 50px;    
}
.expertsboxes {
    text-align: center;
    display: flex;
    justify-content: center;
}
.expertsboxes h4 {
    color: #ffffff;
    margin-top: 12px;
    margin-bottom: 2px;
}
.expertsboxes h6 {
    margin-bottom: 10px;
    color: #c5bebe;
}
a.mailid {
    background: none !important;
    color: #00c3cd !important;
    border-bottom: 0 !important;
}
.expertsboxes a:hover {

  color: #ffffff;
}

a.mailid {
    font-size: 16px;
}

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
    <Layout>
        <header id="topnav" class="fixed md:px-20 px-2 z-50 h-20 flex items-center w-full trans-bg-color">
            <div class="w-full lg:w-1/2 mx-auto">
                <g-link to="/" aria-label="Yellowbrick Home Page" class="yblogo">
                    <svg class="hidden md:flex lg:hidden" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 43.8 40.9" xml:space="preserve" style="width:100%;max-width:44px;"><path fill="#fdcf41" d="M35.4 0H18.7l-1.8 3.2 8.3 14.5h16.7l1.9-3.2L35.4 0z" /><path fill="#cf8a00" d="M35.4 0l-1.8 3.2 8.3 14.5 1.9-3.2L35.4 0z" /><path fill="#fff3a2" d="M35.4 0l-1.8 3.2H16.9L18.7 0h16.7z" /><path fill="#fdcf41" d="M0 20.5L8.3 35H12l8.4-14.5L12 6H8.3L0 20.5z" /><path fill="#fff3a2" d="M0 20.5h3.7L12 6H8.3L0 20.5z" /><path fill="#cf8a00" d="M0 20.5h3.7L12 35H8.3L0 20.5z" /><path fill="#fdcf41" d="M35.4 40.9l8.4-14.4-1.9-3.2H25.2l-8.3 14.5 1.8 3.1h16.7z" /><path fill="#cf8a00" d="M35.4 40.9l-1.8-3.1H16.9l1.8 3.1h16.7z" /><path fill="#cf8a00" d="M35.4 40.9l-1.8-3.1 8.3-14.5 1.9 3.2-8.4 14.4z" /></svg>
                    <svg class="flex md:hidden lg:flex" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 242.7 40.9" style="width:100%; max-width:180px;" xml:space="preserve"><path fill="#f3f6f6" d="M186.5 15.4h3.4v2.8h.1c.2-.5.5-.9.9-1.3s.8-.7 1.3-1 1-.5 1.5-.7c.6-.2 1.1-.2 1.7-.2s1.1.1 1.5.2l-.2 3.7c-.3-.1-.6-.1-.8-.2-.3-.1-.6-.1-.8-.1-1.7 0-3 .5-3.8 1.4-.9.9-1.3 2.4-1.3 4.4v9h-3.4v-18h-.1zM66.2 18L58.6 7.6h-4.4l10.4 13.6v12.2h3.5V21L78.3 7.6h-4.4L66.2 18zM130.9 24.4c0 5.2-4.2 9.5-9.5 9.5s-9.5-4.2-9.5-9.5c0-5.2 4.2-9.5 9.5-9.5s9.5 4.3 9.5 9.5zm-9.4-6.1c-3.4 0-6.1 2.7-6.1 6.1s2.7 6.1 6.1 6.1 6.1-2.7 6.1-6.1-2.8-6.1-6.1-6.1zM82.5 14.9c-5.2 0-9.5 4.2-9.5 9.5s4.2 9.5 9.5 9.5c2.8 0 5.3-1.2 7-3.1l-3-1.7c-1.1.9-2.5 1.5-4 1.5-2.9 0-5.4-2.1-6-4.8h15.3c.1-.4.1-.8.1-1.3 0-5.3-4.2-9.6-9.4-9.6zm0 3.4c2.8 0 5.2 2 5.9 4.6H76.6c.6-2.6 3-4.6 5.9-4.6zM216.6 30.5c-3.4 0-6.1-2.7-6.1-6.1s2.7-6.1 6.1-6.1c1.5 0 2.9.6 4 1.5l3-1.7c-1.7-1.9-4.2-3.2-7-3.2-5.2 0-9.5 4.2-9.5 9.5s4.2 9.5 9.5 9.5c2.8 0 5.3-1.2 7-3.1l-3-1.7c-1.1.8-2.5 1.4-4 1.4zM132.3 15.4h3.8l4 13.5h.1l4.3-13.5h3.6l4.6 13.5h.1l3.8-13.5h3.6l-5.8 18h-3.5l-4.8-13.5h-.1l-4.4 13.5H138l-5.7-18zM199.8 15.4h3.4v18h-3.4v-18zM199.8 8.9h3.4v3.4h-3.4V8.9zM95.8 33.4h3.4V9.6l-3.4-2v25.8zM104.8 33.4h3.4V9.6l-3.4-2v25.8zM173.2 14.9c-2.3 0-4.4.8-6.1 2.2V9.5l-3.4-2v25.8h3.4v-1.8c1.6 1.4 3.8 2.2 6.1 2.2 5.2 0 9.5-4.2 9.5-9.5 0-5-4.3-9.3-9.5-9.3zm0 15.6c-3.4 0-6.1-2.7-6.1-6.1s2.7-6.1 6.1-6.1 6.1 2.7 6.1 6.1-2.7 6.1-6.1 6.1zM233.6 23.6l8.4-8.2h-4.7l-7.8 7.8V9.6l-3.4-2v25.8h3.4v-9.3l8.4 9.3h4.8l-9.1-9.8z" /><g><path fill="#fdcf41" d="M35.4 0H18.7l-1.8 3.2 8.3 14.5h16.7l1.9-3.2L35.4 0z" /><path fill="#cf8a00" d="M35.4 0l-1.8 3.2 8.3 14.5 1.9-3.2L35.4 0z" /><path fill="#fff3a2" d="M35.4 0l-1.8 3.2H16.9L18.7 0h16.7z" /><path fill="#fdcf41" d="M0 20.5L8.3 35H12l8.4-14.5L12 6H8.3L0 20.5z" /><path fill="#fff3a2" d="M0 20.5h3.7L12 6H8.3L0 20.5z" /><path fill="#cf8a00" d="M0 20.5h3.7L12 35H8.3L0 20.5z" /><path fill="#fdcf41" d="M35.4 40.9l8.4-14.4-1.9-3.2H25.2l-8.3 14.5 1.8 3.1h16.7z" /><path fill="#cf8a00" d="M35.4 40.9l-1.8-3.1H16.9l1.8 3.1h16.7z" /><path fill="#cf8a00" d="M35.4 40.9l-1.8-3.1 8.3-14.5 1.9 3.2-8.4 14.4z" /></g></svg>
                </g-link>
            </div>
            <div class="w-full lg:w-1/2 mx-auto companylogo">
                <img :src="this.selectedCompany ? this.selectedCompany.logourl: '/uploads/go/euroclear.png'" />
            </div>
        </header>
        <section class="hero flex bg-gray-700 py-10 md:py-12 text-white px-6 xl:px-0">
            <div class="flex flex-col md:flex-row max-w-1200 w-full py-8 mx-auto relative z-10">
                <div class="w-full lg:w-2/3 text-white hero-text">
                    <h5 class="text-teal mb-6 md:mb-2">
                        {{  this.selectedCompany ? this.selectedCompany.type:'Whitepaper'   }}
                        {{ this.selectedCompany ? 'for ' + this.selectedCompany.companyName : '' }}
                    </h5>
                    <div class="bg-transparent md:bg-transparent">
                        <h1 class="hero-title" v-if="!this.isExec">
                            {{
 this.selectedCompany ? this.selectedCompany.headline : ``
                            }}
                        </h1>
                        <h1 class="hero-title" v-if="this.isExec">
                            {{
 this.selectedCompany ? this.selectedCompany.headline : ``
                            }}
                        </h1>
                        <h2 class="font-normal">
                            {{
 this.selectedCompany ? this.selectedCompany.headlineone : ``
                            }}
                        </h2>
                        <p class="rfs-text-lg pb-10 description-container">
                            {{
 this.selectedCompany ? this.selectedCompany.body : ``
                            }}
                        </p>
                        <a :href="this.selectedCompany ? this.selectedCompany.pdfUrl : this.defaultPdfUrl" id="telecom-brief" class="button yellow ungated-asset">Download Now</a>
                    </div>
                </div>
            </div>
        </section>
        <section class="flex py-16 bg-gray-600 px-6 xl:px-0 enhance-bg">
            <div class="flex-1 justify-center max-w-1000 mx-auto">
                <h3 class="accent-heading text-white rfs-text-4xl font-light mb-1">“We believe Yellowbrick’s data warehouse technology leaps ahead of anything on the market after seeing firsthand what it can do for our analytics. We’re thrilled to invest in what will be the new standard in data warehousing and analytics." </h3>
                <p class="text-white rfs-text-lg text-right mb-0">—  Josh Woods, Head of Options, ETF, CES, and Research Technology, Citadel Securities </p>
            </div>
        </section>

        <HowYellowbrickIsDifferent />
        <GoCustomersOne />
        <GoReviewsOne />        


<section class="intro bg-blackish2" style="">
		<div class="max-w-1200 mx-auto">  
		  <h2 class="font-normal text-white pt-16 text-center">
          Get started with our experts
        </h2>

	<div class="flex flex-col md:flex-row mx-auto expertsboxes">

      <div class="mt-10 md:mb-20 px-10">
        <img src="/uploads/go/gary-west.png" class="expertphotp2"/>        
        <h4>Gary West</h4>
        <h6>VP & GM EMEA</h6>
        <p><a href="mailto:gary.west@yellowbrick.com" class="mailid">gary.west@yellowbrick.com</a></p>  
      </div>

	  <div class="mt-10 md:mb-20 px-10">
        <img src="/uploads/go/andrea_rivera.png" class="expertphotp2" />       
        <h4>Andrea Rivera</h4>
        <h6>Sales Development Rep.</h6>
        <p><a href="mailto:andrea.rivera@yellowbrick.com" class="mailid">andrea.rivera@yellowbrick.com</a></p>       
 	  </div>


		</div>

		</div>
    </section>

    </Layout>
</template>

<script>

import Layout from '~/layouts/LandingAbm.vue';
import GoCustomersOne from "~/components/GoCustomersOne.vue";
import HowYellowbrickIsDifferent from "~/components/HowYellowbrickIsDifferent.vue";
import GoReviewsOne from "~/components/GoReviewsOne.vue";

export default {
  metaInfo: {
    title: 'SAP IQ End of Life',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: 'The legacy analytic databases used to analyze and report trades, investments, risks, and compliance are no longer up to the task. '
      },
      {
        key: 'og:description',
        name: 'og:description',
        content: 'The legacy analytic databases used to analyze and report trades, investments, risks, and compliance are no longer up to the task. '
      },
      {
        key: 'twitter:description',
        name: 'twitter:description',
        content: 'The legacy analytic databases used to analyze and report trades, investments, risks, and compliance are no longer up to the task. '
      },
      {
        key: 'og:title',
        name: 'og:title',
        content: 'SAP IQ End of Life'
      },
      {
        key: 'twitter:title',
        name: 'twitter:title',
        content: 'SAP IQ End of Life'
      },
      {
        key: 'og:image',
        name: 'og:image',
        content: 'https://www.yellowbrick.com/uploads/go/data-warehouse.png'
      },
      {
        key: 'twitter:image',
        name: 'twitter:image',
        content: 'https://www.yellowbrick.com/uploads/go/data-warehouse.png'
      }
    ]
  },
  data() {
    return {
      isExec: false,
      selectedCompany: null,
      defaultPdfUrl: '/uploads/YB_Brief_TelecomAnalytics_v1.20.pdf',
      companies: [
        {
          companyName: 'Euroclear',
          type: 'Exclusive Content',
          logourl: '/uploads/go/euroclear.png',
          pdfUrl: '/go/exclusive/thank-you?company_name=euroclear',
          headline: 'SAP IQ End of Life',
          headlineone: 'Modernize your SAP IQ solution',
          body: 'The legacy analytic databases used to analyze and report trades, investments, risks, and compliance are no longer up to the task. \nAs SAP IQ reaches end of life and support ends, the next logical step is to migrate your data rather than investing in aging solutions or SAP IQ replacements. \nRunning consistently across cloud and on-premises, Yellowbrick powers complex queries on live data anywhere, at petabyte scale, supporting high concurrency with fast, interactive query response to your most challenging business questions. \nSee how Yellowbrick reduces query time to seconds, accelerates time to value and insight, and reduces costs through a predictable subscription model. '
        }
      ],
    }
  },
  mounted() {
    const companyNameQuery = "Euroclear";
    if(companyNameQuery !== null) {
      this.selectedCompany = this.companies.find( c => c.companyName.toLowerCase() === companyNameQuery.toLowerCase()) || null;
    }

    const pageQuery = this.$route.query.audience || '';
    if (pageQuery === 'exec') {
      this.isExec = true;
    }
  },
  components: {
    Layout,
    GoCustomersOne,
    HowYellowbrickIsDifferent,
    GoReviewsOne,    

  }
};
</script>