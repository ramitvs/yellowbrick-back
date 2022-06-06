<style scoped>
 .hero {
        
        background-size: cover;
        background-position: center;
    }
    .companylogo {
        border-left: 0px solid #c1c1c1;
    }
    .yblogo.active {
        float: right;
        padding-right: 50px;
    }
    @supports (-webkit-touch-callout: none) {
        .features_image {
            height: 260px !important;
        }
    }
    @media (min-width: 1024px) {
        h2 {
            font-size: 2rem;
        }
    }
    a.yblogo {
        border-right: 2px solid #c1c1c1;
    }
    .announcement-box a {
        margin-right: 20px;
    }
        a .yblogo {
        border-right: 2px solid #c1c1c1;
    }
    @media only screen and (min-width: 1024px) {
        .announcement-box__card img {
            height:320px;
        }
    }
    @media only screen and (max-width: 912px) {
        .thank_you_div {
            transform: translateY(0%) !important;
        }
    }
    @media only screen and (max-width: 912px) {
        .features1_image {
            height: auto!important;
        }
    }
        .companylogo img {
            float: left;
            padding-left: 50px;
        }

        .hero:before {
            height: 30px !important;
        }

        .dk-bg .mktoForm .mktoFormRow .mktoLabel {
            color: #ffffff !important;
        }

        #topnav {
            background-color: rgba(23, 33, 38, .97);
        }

        .arrow-only-blue {
            font-size: 36px;
            padding-right: 50px;
            position: relative;
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
</style>

<template>
    <Layout>
        <header id="topnav" class="fixed md:px-20 px-2 z-50 h-20 flex items-center  w-full text-grew-full bg-blackish">
            <div class="w-full lg:w-1/2 mx-auto">
                <g-link to="/" aria-label="Yellowbrick Home Page" class="yblogo">
                    <svg class="hidden md:flex lg:hidden" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 43.8 40.9" xml:space="preserve" style="width:100%;max-width:44px;"><path fill="#fdcf41" d="M35.4 0H18.7l-1.8 3.2 8.3 14.5h16.7l1.9-3.2L35.4 0z" /><path fill="#cf8a00" d="M35.4 0l-1.8 3.2 8.3 14.5 1.9-3.2L35.4 0z" /><path fill="#fff3a2" d="M35.4 0l-1.8 3.2H16.9L18.7 0h16.7z" /><path fill="#fdcf41" d="M0 20.5L8.3 35H12l8.4-14.5L12 6H8.3L0 20.5z" /><path fill="#fff3a2" d="M0 20.5h3.7L12 6H8.3L0 20.5z" /><path fill="#cf8a00" d="M0 20.5h3.7L12 35H8.3L0 20.5z" /><path fill="#fdcf41" d="M35.4 40.9l8.4-14.4-1.9-3.2H25.2l-8.3 14.5 1.8 3.1h16.7z" /><path fill="#cf8a00" d="M35.4 40.9l-1.8-3.1H16.9l1.8 3.1h16.7z" /><path fill="#cf8a00" d="M35.4 40.9l-1.8-3.1 8.3-14.5 1.9 3.2-8.4 14.4z" /></svg>
                    <svg class="flex md:hidden lg:flex" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 242.7 40.9" style="width:100%; max-width:180px;" xml:space="preserve"><path fill="#f3f6f6" d="M186.5 15.4h3.4v2.8h.1c.2-.5.5-.9.9-1.3s.8-.7 1.3-1 1-.5 1.5-.7c.6-.2 1.1-.2 1.7-.2s1.1.1 1.5.2l-.2 3.7c-.3-.1-.6-.1-.8-.2-.3-.1-.6-.1-.8-.1-1.7 0-3 .5-3.8 1.4-.9.9-1.3 2.4-1.3 4.4v9h-3.4v-18h-.1zM66.2 18L58.6 7.6h-4.4l10.4 13.6v12.2h3.5V21L78.3 7.6h-4.4L66.2 18zM130.9 24.4c0 5.2-4.2 9.5-9.5 9.5s-9.5-4.2-9.5-9.5c0-5.2 4.2-9.5 9.5-9.5s9.5 4.3 9.5 9.5zm-9.4-6.1c-3.4 0-6.1 2.7-6.1 6.1s2.7 6.1 6.1 6.1 6.1-2.7 6.1-6.1-2.8-6.1-6.1-6.1zM82.5 14.9c-5.2 0-9.5 4.2-9.5 9.5s4.2 9.5 9.5 9.5c2.8 0 5.3-1.2 7-3.1l-3-1.7c-1.1.9-2.5 1.5-4 1.5-2.9 0-5.4-2.1-6-4.8h15.3c.1-.4.1-.8.1-1.3 0-5.3-4.2-9.6-9.4-9.6zm0 3.4c2.8 0 5.2 2 5.9 4.6H76.6c.6-2.6 3-4.6 5.9-4.6zM216.6 30.5c-3.4 0-6.1-2.7-6.1-6.1s2.7-6.1 6.1-6.1c1.5 0 2.9.6 4 1.5l3-1.7c-1.7-1.9-4.2-3.2-7-3.2-5.2 0-9.5 4.2-9.5 9.5s4.2 9.5 9.5 9.5c2.8 0 5.3-1.2 7-3.1l-3-1.7c-1.1.8-2.5 1.4-4 1.4zM132.3 15.4h3.8l4 13.5h.1l4.3-13.5h3.6l4.6 13.5h.1l3.8-13.5h3.6l-5.8 18h-3.5l-4.8-13.5h-.1l-4.4 13.5H138l-5.7-18zM199.8 15.4h3.4v18h-3.4v-18zM199.8 8.9h3.4v3.4h-3.4V8.9zM95.8 33.4h3.4V9.6l-3.4-2v25.8zM104.8 33.4h3.4V9.6l-3.4-2v25.8zM173.2 14.9c-2.3 0-4.4.8-6.1 2.2V9.5l-3.4-2v25.8h3.4v-1.8c1.6 1.4 3.8 2.2 6.1 2.2 5.2 0 9.5-4.2 9.5-9.5 0-5-4.3-9.3-9.5-9.3zm0 15.6c-3.4 0-6.1-2.7-6.1-6.1s2.7-6.1 6.1-6.1 6.1 2.7 6.1 6.1-2.7 6.1-6.1 6.1zM233.6 23.6l8.4-8.2h-4.7l-7.8 7.8V9.6l-3.4-2v25.8h3.4v-9.3l8.4 9.3h4.8l-9.1-9.8z" /><g><path fill="#fdcf41" d="M35.4 0H18.7l-1.8 3.2 8.3 14.5h16.7l1.9-3.2L35.4 0z" /><path fill="#cf8a00" d="M35.4 0l-1.8 3.2 8.3 14.5 1.9-3.2L35.4 0z" /><path fill="#fff3a2" d="M35.4 0l-1.8 3.2H16.9L18.7 0h16.7z" /><path fill="#fdcf41" d="M0 20.5L8.3 35H12l8.4-14.5L12 6H8.3L0 20.5z" /><path fill="#fff3a2" d="M0 20.5h3.7L12 6H8.3L0 20.5z" /><path fill="#cf8a00" d="M0 20.5h3.7L12 35H8.3L0 20.5z" /><path fill="#fdcf41" d="M35.4 40.9l8.4-14.4-1.9-3.2H25.2l-8.3 14.5 1.8 3.1h16.7z" /><path fill="#cf8a00" d="M35.4 40.9l-1.8-3.1H16.9l1.8 3.1h16.7z" /><path fill="#cf8a00" d="M35.4 40.9l-1.8-3.1 8.3-14.5 1.9 3.2-8.4 14.4z" /></g></svg>
                </g-link>
            </div>
            <div class="w-full lg:w-1/2 mx-auto companylogo">
                <img :src="this.selectedCompany ? this.selectedCompany.logourl: '/uploads/go/ubs.svg'" />
            </div>
        </header>
        <section class="hero  bg-gray-700 flex flex-col pt-24 pb-8 px-6 xl:px-0 mx-auto">
            <div class="max-w-1200  w-full mx-auto z-10">
                <div class="float-none lg:float-left w-full sm:mx-0  lg:w-1/4 m-0  lg:mr-4  lg:mt-3">
                    <img style=" height: 270px;" class="mx-auto features1_image" :src="this.selectedCompany ? this.selectedCompany.bgUrl : '/uploads/go/eBook_Real-time_analytics_for_banks_and_financial_services_companies.png'" /><br />
                </div>
                <div>
                    <div class="lg:ml-8 mt-4 mb-4 thank_you_div"  style=" transform: translateY(70%);">
                        <div class="text-white  text-base font-normal">Thanks for downloading: </div>
                        <h2 style="margin-bottom: 4px; margin-top: 4px;" class="text-yellow1 font-bold">
                            &ldquo;{{this.selectedCompany ? this.selectedCompany.companyNameTitle : ''}}  <span style="color:white!important;">Replacing SAP IQ - Why Yellowbrick?</span>&rdquo;
                        </h2>
                        <div class="mx-auto text-white text-base font-normal">If your download does not start automatically, <a :href="this.selectedCompany ? this.selectedCompany.pdfUrl : this.defaultPdfUrl" id="telecom-brief" class="yellow text-teal underline ungated-asset text-center font-normal" download>click here.</a></div>
                    </div>
                   
                </div>
            </div>
        </section>
        
        <section class=" flex flex-col pt-2 pb-8 px-6 xl:px-0 mx-auto">
            <h2 class="font-bold max-w-1200  w-full mx-auto z-10" style="margin-bottom:20px; margin-top: 20px; padding-top: 8px;">Latest Posts</h2>
            <div class="max-w-1200 w-full mx-auto z-10 flex flex-col md:flex-row announcement-box relatedblogs">
                <a v-for="(author,index) in $page.allBlog.edges" :key="author.node.title" @click="handleEvent(author.node.path)" :href="author.node.path" class="flex flex-col w-full md:w-1/2 pb-8">
                    <div data-v-4bc9d7de="" class="flex flex-col w-full h-full justify-content-center announcement-box__card bmw-group border">
                        <div data-v-4bc9d7de="" class="max-w-xl w-full h-full">
                            <h4 data-v-4bc9d7de="" class="leading-tight mb-0 w-full text-black">
                                <img v-if="author.node.thumbnailImage" :src="author.node.thumbnailImage" class="features_image w-full">
                                <img v-else :src="author.node.coverImage" class=" w-full" />
                            </h4><div class="p-3 px-5">
                                <h5 v-text="author.node.title" class="leading-tight mb-0 text-black" style=" font-weight: 600;" />
                                <p v-text="author.node.description" class="font-normal" style="margin-top: 5px;" />
                                <p class="text-teal  mb-0 w-full font-normal text-right"><a class="text-teal  mb-0 w-full font-normal ">Read More</a></p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>


</section>


    </Layout>
</template>

<script>
    import Layout from '~/layouts/LandingAbm.vue';
    export default {
        data() {
            return {
                isExec: false,
                selectedCompany: null,
                defaultPdfUrl: '/uploads/Replacing_SAP_IQ_Why_Yellowbrick.pdf',
                companies: [
                    {
                        companyName: 'UBS',
                        companyNameTitle: 'UBS',
                        logourl: '/uploads/go/ubs.svg',
                        bgUrl:'/uploads/go/exclusive/images/UBS_Replacing_SAP_IQ_Why_Yellowbrick.png',
                        pdfUrl: '/uploads/go/exclusive/pdf/UBS_Replacing_SAP_IQ_Why_Yellowbrick.pdf',
                    },
                    {
                        companyName: 'Euroclear',
                        companyNameTitle: 'Euroclear',
                        logourl: '/uploads/go/euroclear.png',
                        bgUrl: '/uploads/go/exclusive/images/Euroclear_Replacing_SAP_IQ_Why_Yellowbrick.png',
                        pdfUrl: '/uploads/go/exclusive/pdf/Euroclear_Replacing_SAP_IQ_Why_Yellowbrick.pdf',
                    },
                    {
                        companyName: 'BlackRock',
                        companyNameTitle: 'BlackRock',
                        logourl: '/uploads/go/blackrock.svg',
                        bgUrl: '/uploads/go/exclusive/images/BlackRock_Replacing_SAP_IQ_Why_Yellowbrick.png',
                        pdfUrl: '/uploads/go/exclusive/pdf/BlackRock_Replacing_SAP_IQ_Why_Yellowbrick.pdf',
                    },
                    {
                        companyName: 'Bridgewater',
                        companyNameTitle: 'Bridgewater',
                        logourl: '/uploads/go/bridgewater.svg',
                        bgUrl: '/uploads/go/exclusive/images/Bridgewater_Replacing_SAP_IQ_Why_Yellowbrick.png',
                        pdfUrl: '/uploads/go/exclusive/pdf/Bridgewater_Replacing_SAP_IQ_Why_Yellowbrick.pdf',
                    },
                    {
                        companyName: 'Capital Group',
                        companyNameTitle: 'Capital Group',
                        logourl: '/uploads/go/capital-group.png',
                        bgUrl: '/uploads/go/exclusive/images/Capital_Group_Replacing_SAP_IQ_Why_Yellowbrick-copy.png',
                        pdfUrl: '/uploads/go/exclusive/pdf/Capital_Group_Replacing_SAP_IQ_Why_Yellowbrick.pdf',
                    },
                    {
                        companyName: 'Citizens Finance Group',
                        companyNameTitle: 'Citizens Finance Group',
                        logourl: '/uploads/go/Citizens-Financial-Group.png',
                        bgUrl: '/uploads/go/exclusive/images/Citizens_Finance_Group_Replacing_SAP_IQ_Why_Yellowbrick.png',
                        pdfUrl: '/uploads/go/exclusive/pdf/Citizens_Finance_Group_Replacing_SAP_IQ_Why_Yellowbrick.pdf',
                    },
                    {
                        companyName: 'Commerzbank',
                        companyNameTitle: 'Commerzbank',
                        logourl: '/uploads/go/Commerzbank.png',
                        bgUrl: '/uploads/go/exclusive/images/Commerzbank_Replacing_SAP_IQ_Why_Yellowbrick.png',
                        pdfUrl: '/uploads/go/exclusive/pdf/Commerzbank_Replacing_SAP_IQ_Why_Yellowbrick.pdf',
                    },
                    {
                        companyName: 'DE Shaw Group',
                        companyNameTitle: 'D.E. Shaw Group',
                        logourl: '/uploads/go/DE-Shaw-Group.svg',
                        bgUrl: '/uploads/go/exclusive/images/DE_Shaw_Group_Replacing_SAP_IQ_Why_Yellowbrick.png',
                        pdfUrl: '/uploads/go/exclusive/pdf/DE_Shaw_Group_Replacing_SAP_IQ_Why_Yellowbrick.pdf',
                    },
                    {
                        companyName: 'JPMC',
                        companyNameTitle: 'JPMorgan Chase & Co',
                        logourl: '/uploads/go/jpmc-logo.png',
                        bgUrl: '/uploads/go/exclusive/images/JPMC_Replacing_SAP_IQ_Why_Yellowbrick.png',
                        pdfUrl: '/uploads/go/exclusive/pdf/JPMC_Replacing_SAP_IQ_Why_Yellowbrick.pdf',
                    },
                    {
                        companyName: 'London Clearing House',
                        companyNameTitle: 'London Clearing House',
                        logourl: '/uploads/go/lchlogo.svg',
                        bgUrl: '/uploads/go/exclusive/images/London_Clearing_House-Replacing_SAP_IQ_Why_Yellowbrick.png',
                        pdfUrl: '/uploads/go/exclusive/pdf/London_Clearing_House-Replacing_SAP_IQ_Why_Yellowbrick.pdf',
                    },
                    {
                        companyName: 'Rabobank',
                        companyNameTitle: 'Rabobank',
                        logourl: '/uploads/go/Rabobank_logo.png',
                        bgUrl: '/uploads/go/exclusive/images/Rabobank_Replacing_SAP_IQ_Why_Yellowbrick.png',
                        pdfUrl: '/uploads/go/exclusive/pdf/Rabobank_Replacing_SAP_IQ_Why_Yellowbrick.pdf',
                    },
                    {
                        companyName: 'Two Sigma',
                        companyNameTitle: 'Two Sigma',
                        logourl: '/uploads/go/twosigma.svg',
                        bgUrl: '/uploads/go/exclusive/images/Two_Sigma_Replacing_SAP_IQ_Why_Yellowbrick.png',
                        pdfUrl: '/uploads/go/exclusive/pdf/Two_Sigma_Replacing_SAP_IQ_Why_Yellowbrick.pdf',
                    },
                    {
                        companyName: 'Vanguard',
                        companyNameTitle: 'Vanguard',
                        logourl: '/uploads/go/vanguard.svg',
                        bgUrl: '/uploads/go/exclusive/images/Vangaurd_Replacing_SAP_IQ_Why_Yellowbrick.png',
                        pdfUrl: '/uploads/go/exclusive/pdf/Vangaurd_Replacing_SAP_IQ_Why_Yellowbrick.pdf',
                    }
                ],
            }
        },
        components: {
            Layout,
        },
        mounted() {
            const companyNameQuery = this.$route.query.company_name || null;
            if (companyNameQuery !== null) {
                this.selectedCompany = this.companies.find(c => c.companyName.toLowerCase() === companyNameQuery.toLowerCase()) || null;
            }
            if (this.selectedCompany == null) {
                this.selectedCompany = this.companies.find(c => c.companyName.toLowerCase() === companyNameQuery.replace(/-/g, ' ')) || null;
            }
            const pageQuery = this.$route.query.audience || '';
            if (pageQuery === 'exec') {
                this.isExec = true;
            }
            setTimeout(function () {
                const elem = document.getElementById('telecom-brief');
                elem.click();
            }, 1500);
        },
  metaInfo: {
    title: 'Thank You for Contacting Yellowbrick',
    meta: [
      { name: 'description', content: 'Thank you so much for contacting us. We will respond to your inquiry as soon as possible. Have a great day!' }
    ]
  }
}

</script>
<page-query>
    query Blog {
    allBlog(limit: 3, sortBy: "date", order: DESC) {
    edges {
    node {
    id
    title
    author {
    name
    authorImage
    path
    }
    description
    date(format: "MMMM D, YYYY")
    categories {
    id
    title
    }
    path
    coverImage
    thumbnailImage
    author {
    name
    authorImage
    path
    }
    }
    }
    }
    }
</page-query>