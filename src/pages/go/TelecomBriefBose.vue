<style scoped>
.hero {
  background-image: url(/uploads/images/bose-headphones-man.jpg);
  background-size: cover;
  background-position: center center;
  &:after {
    content: '';
    background: linear-gradient(90deg, #000 0%, rgba(0,0,0, 0) 100%);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}

.dk-bg .mktoForm .mktoFormRow .mktoLabel {
	color: #ffffff !important;
}

.float-form {
  @apply relative shadow-lg;
  background-color: #f3f6f6;
  padding: 2rem 2rem 1rem;
	& .mktoForm {
    margin-top: .5rem !important;
    & .mktoFormRow {
      & label.mktoLabel {
        color: #edc124 !important;
      }
    }
  }
}

.float-form::after {
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: 0;
  background-repeat: no-repeat;
  background-position-x: center;
  background-image: url(/uploads/images/bose-headphones-black.png);
}

.float-form
.form-container {
  position: relative;
  z-index: 3;
  margin-bottom: 175px;
}

.float-form
.floating-image {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: auto;
  z-index: 1;
}

.image-container
.description-container {
  position: relative;
  max-width: 100%;
  z-index: 2;
  & h2 {
    font-size: 24px;
  }
}

.float-form
.description-container
h2
> .text-orange1 {
  color: #d9832a;
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

@media(min-width: 320px) {
  .float-form
  .floating-image {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    max-width: 320px;
    height: auto;
  }
  .float-form::after {
    background-position-y: 35%;
    background-size: 65% auto;
  }
}
@media(min-width: 480px) {
  .image-container
  .description-container {
    max-width:345px;
    margin-right: auto;
  }
  .float-form::after {
    background-size: 80%;
  }
}
@media(min-width: 768px) {
  .hero-text
  .hero-title {
    padding: 0 212px 0 0;
  }
  .hero-text
  .description-container {
    padding: 0 50px 0 0;
  }
  .float-form
  .floating-image {
    transform: translateY(-10%);
    max-width: 60%;
  }
  .float-form::after {
    background-position-y: 45%;
  }
}
@media(min-width: 990px) {
  .float-form::after {
    background-size: 125px auto;

  }
}
@media(max-width: 990px){
  .float-form {
    box-shadow: none;
  }
  .float-form
  .form-container {
    margin-bottom: 0px;
  }
  .float-form::after {
    opacity: 0.15;
  }
  .image-container .description-container {
    margin-top: 1rem;
    max-width: 100%;
  }
}
</style>

<style>
.telecom-brief-offer-form form {
  position: relative;

  &
  .hs-email {
    width: 60%;
  }

  &
  .hs-submit {
    position: absolute;
    top: 1.5rem;
    right: 0;
    width: 100%;
    max-width: 40%;
  }

  &
  input.hs-input {
    width: 100%;
    font-size: 1.125rem;
    display: inline-flex;
    line-height: 1.25;
    padding: .75rem 1rem;
    border-radius: .125rem;
    border: 1px solid #cbd6e2;
    border-right: none;
  }

  &
  input.hs-button {
    border-color: #00c3cd;
    background-color: #00c3cd;
    font-weight: 600;
    border-radius: 0 .125rem .125rem 0;
    text-decoration: none;
    color: #FFFFFF;
    font-size: 1.125rem;
    width: auto;
    text-align: center;
    display: inline-flex;
    width: 100%;
    justify-content: center;
    line-height: 1.35;
    padding: .75rem 2rem;
    align-self: flex-start;
    transition: all .2s ease;
  }

  &
  .legal-consent-container {
    padding-top: 1rem;

    &
    p {
      font-size: .8rem;
      line-height: 1rem;
    }

  }
}

@media (max-width: 990px) {
  .telecom-brief-offer-form form {
    &
      input.hs-input {
      border: 1px solid #cbd6e2;
    }

    & input.hs-button {
      border-radius: .125rem;
    }

    & .hs-email {
      width: 100%;
    }

    & .hs-submit {
        position: static;
        max-width: 100%;
      }
    }
}
</style>

<template>
  <Layout>

    <section class="hero flex bg-gray-700 py-10 md:py-12 text-white px-6 xl:px-0">
      <div class="flex flex-col md:flex-row max-w-1200 w-full py-8 mx-auto relative z-10">
					<div class="w-full lg:w-2/3 text-gray-700 md:text-white hero-text">
            <h5 class="text-teal mb-6 md:mb-2">Industry Brief {{this.selectedCompany ? 'for ' + this.selectedCompany.companyName : ''}}</h5>
						<div class="bg-white md:bg-transparent p-6 md:p-0">
              <h1 class="hero-title">See how Yellowbrick can <span class="text-yellow1">help {{this.selectedCompany ? this.selectedCompany.companyName : 'you'}}  cancel out the noise</span> through real-time analytics</h1>
              <p class="rfs-text-lg description-container">Based on a redesign/modernization of analytics databases from the ground up to take advantage of highly optimized instances, Yellowbrick offers the best price/performance for network and application analytics available, along with operational simplicity and flexibility to support any deployment choice up to –and including—the edge. See how Yellowbrick addresses each of the analytics challenges within telco.</p>
              <a :href="this.selectedCompany ? this.selectedCompany.pdfUrl : this.defaultPdfUrl" id="telecom-brief" class="arrow-only-blue text-teal ungated-asset">Download the brief</a>
						</div>
					</div>
					<div class="w-full md:w-1/3 ">
            <div class="float-form">
              <h3 class="text-gray-700">Want to learn more?</h3>
              <div class="text-gray-700">
                <BaseHubspot id="03633937-992f-414c-b36b-90f0edfd19a1" sfid="7011G000000KVSQQA4" class="form-container telecom-brief-offer-form"/>
              </div>
              <div class="image-container">
                <div class="description-container">
                  <h2 class="pt-38 text-black">See how Yellowbrick can <span class="text-orange1">help you cancel out the noise</span> (and get real-time insights)</h2>
                  <p class="description rfs-base text-black">In appreciation of you accepting a meeting, we will send you a pair of Bose QuietComfort 35 II Wireless Bluetooth Headphones, Noise-Cancelling or we will donate to a charity of your choice.</p>
                </div>
              </div>
            </div>
					</div>
				</div>
		</section>
    <section class="flex py-16 bg-gray-600 px-6 xl:px-0 enhance-bg">
      <div class="flex-1 justify-center max-w-1000 mx-auto">
        <h3 class="accent-heading text-white rfs-text-4xl font-light mb-1">“With the power of Yellowbrick combined with our deep knowledge of the data and proprietary algorithms, we will be able to produce insights that have not been possible before.”</h3>
        <p class="text-white rfs-text-lg text-right mb-0">– Atul Jain, Chariman & CEO TEOCO</p>
      </div>
    </section>
  </Layout>
</template>

<script>

import Layout from '~/layouts/Landing.vue';

export default {
  metaInfo: {
    title: 'Industry Brief: Cancel Out the Noise',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: 'See how Yellowbrick can help drive your business through real-time analytics'
      },
      {
        key: 'og:description',
        name: 'og:description',
        content: 'See how Yellowbrick can help drive your business through real-time analytics'
      },
      {
        key: 'twitter:description',
        name: 'twitter:description',
        content: 'See how Yellowbrick can help drive your business through real-time analytics'
      },
      {
        key: 'og:title',
        name: 'og:title',
        content: 'Industry Brief: Cancel Out the Noise'
      },
      {
        key: 'twitter:title',
        name: 'twitter:title',
        content: 'Industry Brief: Cancel Out the Noise'
      },
      {
        key: 'og:image',
        name: 'og:image',
        content: 'https://www.yellowbrick.com/uploads/ebook-data-lake-thumb.jpg'
      },
      {
        key: 'twitter:image',
        name: 'twitter:image',
        content: 'https://www.yellowbrick.com/uploads/ebook-data-lake-thumb.jpg'
      }
    ]
  },
  data() {
    return {
      selectedCompany: null,
      defaultPdfUrl: '/uploads/YB_Brief_TelecomAnalytics_v1.20.pdf',
      companies: [
        {
          companyName: 'AT&T',
          pdfUrl: '/uploads/YB_Brief_TelecomAnalytics_ATTCustom.pdf'
        },
        {
          companyName: 'Charter',
          pdfUrl: '/uploads/YB_Brief_TelecomAnalytics_CharterCustom.pdf'
        },
        {
          companyName: 'Comcast',
          pdfUrl: '/uploads/YB_Brief_TelecomAnalytics_ComcastCustom.pdf'
        },
        {
          companyName: 'Telus',
          pdfUrl: '/uploads/YB_Brief_TelecomAnalytics_TelusCustom.pdf'
        },
        {
          companyName: 'T-Mobile',
          pdfUrl: '/uploads/YB_Brief_TelecomAnalytics_TMobileCustom.pdf'
        },
        {
          companyName: 'UScellular',
          pdfUrl: '/uploads/YB_Brief_TelecomAnalytics_USCellularCustom.pdf'
        },
        {
          companyName: 'Verizon',
          pdfUrl: '/uploads/YB_Brief_TelecomAnalytics_VerizonCustom.pdf'
        }
      ],
    }
  },
  mounted() {
    const companyNameQuery = this.$route.query.company_name || null;
    if(companyNameQuery !== null) {
      this.selectedCompany = this.companies.find( c => c.companyName.toLowerCase() === companyNameQuery.toLowerCase()) || null;
    }
  },
  components: {
    Layout
  }
};
</script>