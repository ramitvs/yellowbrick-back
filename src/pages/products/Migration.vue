<style scoped>
  .hero {
    background-image: url(/uploads/images/tall-bg.svg);
    background-size: cover;
    background-position: 50%;
  }
  .free-trial {
    background-image: url(/uploads/images/contact-bg.svg);
    background-size: cover;
    background-position: 50%;
  }

  .arrow-divider {
    height: 30px;
    width: 100%;
    transform: translateX(-10px);
    background-color: #4F5357;
    position: relative;

    &:before {
      content: '';
      display: block;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 15px 0 15px 20px;
      border-color: transparent transparent transparent #FFFFFF;
    }

    &:after {
      content: '';
      position: absolute;
      right: -20px;
      top: 0;
      display: block;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 15px 0 15px 20px;
      border-color: transparent transparent transparent #4F5357;
    }
    &.yellow {
      background-color: #FFCD32;
      &:after {
      border-color: transparent transparent transparent #FFCD32;
       }
     }

  }

  .checkbox-flow {
    width: 100%;
    @media (min-width: 768px) {
      width: 300px;
    }
  }

  .flow-image {
    width: 230px;
    height: 230px;
  }

</style>

<template>
  <Layout>

    <Hero 
			:heroTitle="heroTitleText"
			:heroDescription="heroDescriptionText"
      :buttonLink="buttonLink"
      :heroButton="heroButton"
		/>

    <section class="bg-white flex py-12 bg-white px-6 xl:px-0">
      <div class="max-w-1200 w-full mx-auto">

        <div class="mb-12">
          <h3 class="accent-heading">Try for free</h3>
          <p>Test drive the world’s fastest data warehouse for 7 days using your own tools and test data set. Our test drive includes 2TB of user data, 12x5 support, and is available in any public cloud (AWS, Azure, or GCP).</p>
          <a href="/test-drive/" class="button yellow">Request a test drive</a>
        </div>

        <h3 class="text-center">How to get started with Yellowbrick</h3>
        <div class="flex flex-col md:flex-row my-12 text-center">
          <div class="w-full mb-12 md:mb-0 md:pr-10">
            <h3 class="mb-0">7-day test drive</h3>
            <img class="mx-auto mb-6 flow-image" src="/uploads/cloud-storage-flow.png" />
            <div class="arrow-divider mx-auto mb-4"></div>
            <div class="">
              <h5 class="mb-0">(if needed)</h5>
              <h5>User experience and tooling</h5>
            </div>
          </div>
          <div class="checkbox-flow flex-shrink-0 mb-12 md:mb-0 md:px-10 ">
            <h3 class="mb-0">15-day POC</h3>
            <img class="mx-auto mb-6 flow-image" src="/uploads/checkbox-flow.png" />
            <div class="arrow-divider mx-auto mb-4"></div>
            <div class="">
              <h5 class="mb-0">(if needed)</h5>
              <h5>Performance and operational testing</h5>
            </div>
          </div>
          <div class="w-full md:pl-10">
            <h3 class="mb-0">30 - 60 day production migration</h3>
            <img class="mx-auto mb-6 flow-image" src="/uploads/drive-to-the-cloud-flow.png" />
            <div class="arrow-divider mx-auto mb-4 yellow"></div>
            <div class="px-14">
              <h5 class="mb-0">Automation and services available through partner ecosystem</h5>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-gray-100 flex py-12 bg-white px-6 xl:px-0">
      <div class="flex flex-col sm:flex-row items-start justify-evenly max-w-1200 mx-auto">
        <div class="w-full md:w-8/12 pr-6 md:pr-10">
          <h3 class="accent-heading">Validate with a fast POC</h3>
          <p>Our POC helps you validate that Yellowbrick is the right fit for your use case – and we make it fast and easy. We work closely with you to understand requirements and scope a POC (in the cloud or in your data center). During the POC, we setup the test instance, migrate data, and integrate all applications. Setup is typically done in a day and testing usually completes in just one week.</p>
          <p>POC activities include:</p>
          <div class="flex flex-wrap">
            <div class="flex flex-col w-1/2 pr-12 mb-12">
              <div class="w-full">
                <svg width="100" height="100" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                  <path d="M65.676 72.936h-3.333V41.413h3.333v31.523z" fill="#5EC0CA"/>
                  <path d="M74.282 103.528H38.239v-3.334h36.043v3.334zM74.282 84.383H38.239V81.05h36.043v3.333z" fill="#4B5458"/>
                  <path d="M89.528 103.528H83.08v-3.334h6.448v3.334zM89.528 84.383H83.08V81.05h6.448v3.333z" fill="#5EC0CA"/>
                  <path d="M32.466 109.667h63.102v-15.82H32.466v15.82zM98.901 113H29.133V90.514H98.9V113z" fill="#4B5458"/>
                  <path d="M32.466 90.514h63.102V74.697H32.466v15.817zm66.435 3.334H29.133V71.364H98.9v22.484z" fill="#4B5458"/>
                  <path d="M72.088 49.772l-8.078-8.078-8.079 8.078-2.356-2.356L64.008 36.98l10.435 10.435-2.356 2.356" fill="#5EC0CA"/>
                  <path d="M88.646 58.954H75.692V55.62h12.954c6.079 0 11.024-4.946 11.024-11.025 0-6.075-4.944-11.02-11.02-11.023l-2.368.09-.454-2.608c-.381-7.249-6.36-12.926-13.612-12.926a13.584 13.584 0 00-13.27 10.504l-.847 3.58-3.139-1.917a9.718 9.718 0 00-5.06-1.433c-5.368 0-9.737 4.369-9.737 9.736V41.6l-3.197-.216a7.197 7.197 0 00-8.633 7.044c0 3.966 3.226 7.192 7.19 7.192h16.543v3.334H35.523C29.721 58.954 25 54.232 25 48.428c0-5.803 4.721-10.523 10.523-10.523.442 0 .883.028 1.32.082.322-6.923 6.054-12.459 13.057-12.459 2.095 0 4.162.513 6.026 1.487a16.903 16.903 0 0116.29-12.22c8.814 0 16.117 6.738 16.896 15.454 7.733.276 13.891 6.607 13.891 14.346 0 7.917-6.44 14.359-14.357 14.359" fill="#4B5458"/>
                </svg>
              </div>
              <p>Loading data from databases, HDFS, or object stores</p>
            </div>
             <div class="flex flex-col w-1/2 pr-12 mb-12">
              <div class="w-full">
                <svg width="100" height="100" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74 74">
                  <path d="M16.702 49.077h40.644V25.265H16.702v23.812zm40.952 2.32h-41.26c-.528 0-1.046-.214-1.419-.585a2.045 2.045 0 01-.593-1.428V24.958a2.018 2.018 0 012.013-2.013h41.259a2.013 2.013 0 012.012 2.013v24.426c0 .536-.208 1.04-.587 1.422-.383.382-.887.591-1.425.591M8.6 25.618l-3.411-3.41-3.41 3.41-1.64-1.64 5.05-5.05 5.05 5.05-1.64 1.64z" fill="#4B5458"/>
                  <path d="M24.045 31.028h7.189v1.82H26.21v2.985h4.259v1.82h-4.26v3.458h5.206v1.82h-7.37V31.027zM36.24 32.848H32.82v-1.82h9.008v1.82h-3.421V42.93H36.24V32.848zM43.813 31.028h2.165v10.083h4.914v1.82h-7.08V31.027z" fill="#5EC0CA"/>
                  <path d="M15.286 38.228H4.029v-17.66h2.32v15.34h8.937v2.32zM68.95 55.208l-5.052-5.05 1.64-1.64 3.411 3.41 3.41-3.41L74 50.157l-5.05 5.05" fill="#4B5458"/>
                  <path d="M70.11 53.568h-2.32v-15.34h-8.937v-2.32h11.256v17.66z" fill="#4B5458"/>
                </svg>
              </div>
              <p>Moving your ETL jobs </p>
            </div>
             <div class="flex flex-col w-1/2 pr-12 mb-12">
              <div class="w-full">
                <svg width="100" height="100" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74 74">
                  <path d="M27.958 57.358c-3.937 0-10.185-1.18-10.185-4.346h1.634c0 1.343 4.316 2.712 8.55 2.712 4.235 0 8.551-1.369 8.551-2.712h1.634c0 3.166-6.247 4.346-10.184 4.346M27.958 51.116c-3.937 0-10.185-1.18-10.185-4.346h1.634c0 1.343 4.316 2.712 8.55 2.712 4.235 0 8.551-1.369 8.551-2.712h1.634c0 3.166-6.247 4.346-10.184 4.346" fill="#5EC0CA"/>
                  <path d="M33.654 47.195l-.094.008a.545.545 0 01-.389-.157.555.555 0 01-.157-.396c0-.185.079-.357.202-.487a.72.72 0 01.41-.22l.094-.006a.539.539 0 01.547.552.734.734 0 01-.613.706zM33.654 53.295l-.094.008a.544.544 0 01-.389-.157.554.554 0 01-.157-.395c0-.185.079-.358.202-.488a.72.72 0 01.41-.22l.094-.006a.54.54 0 01.547.553.734.734 0 01-.613.706M33.654 59.467l-.094.007a.546.546 0 01-.389-.157.555.555 0 01-.157-.395c0-.185.079-.358.202-.487a.72.72 0 01.41-.22l.094-.007a.538.538 0 01.547.553.734.734 0 01-.613.706" fill="#5EC0CA"/>
                  <path d="M27.958 37.811c-4.235 0-8.55 1.37-8.55 2.713s4.315 2.712 8.55 2.712c4.234 0 8.55-1.369 8.55-2.712 0-1.343-4.316-2.713-8.55-2.713zm0 7.06c-3.937 0-10.185-1.18-10.185-4.347 0-3.167 6.248-4.347 10.185-4.347 3.937 0 10.184 1.18 10.184 4.347 0 3.166-6.247 4.346-10.184 4.346" fill="#4B5458"/>
                  <path d="M27.958 63.61c-3.937 0-10.185-1.18-10.185-4.346v-18.74h1.634v18.74c0 1.343 4.316 2.712 8.55 2.712 4.235 0 8.551-1.368 8.551-2.712V40.677h1.634v18.587c0 3.166-6.247 4.346-10.184 4.346" fill="#4B5458"/>
                  <path d="M46.124 31.181c-3.937 0-10.184-1.18-10.184-4.346h1.634c0 1.343 4.315 2.712 8.55 2.712s8.55-1.369 8.55-2.712h1.635c0 3.166-6.247 4.346-10.185 4.346zM46.124 24.939c-3.937 0-10.184-1.18-10.184-4.346h1.634c0 1.344 4.315 2.712 8.55 2.712s8.55-1.368 8.55-2.712h1.635c0 3.166-6.247 4.346-10.185 4.346z" fill="#5EC0CA"/>
                  <path d="M51.82 21.018l-.093.008h-.002a.545.545 0 01-.388-.157.554.554 0 01-.157-.396c0-.185.08-.357.202-.487a.72.72 0 01.411-.22l.093-.007a.54.54 0 01.548.553.734.734 0 01-.613.706M51.82 27.119l-.093.007h-.002a.542.542 0 01-.388-.157.553.553 0 01-.157-.396c0-.184.08-.357.202-.487a.722.722 0 01.411-.22l.093-.007a.541.541 0 01.548.553.736.736 0 01-.613.707M51.82 33.29l-.093.007h-.002a.543.543 0 01-.388-.157.554.554 0 01-.157-.396c0-.184.08-.357.202-.486a.72.72 0 01.411-.22l.093-.007a.54.54 0 01.548.552.736.736 0 01-.613.707" fill="#5EC0CA"/>
                  <path d="M46.124 11.634c-4.235 0-8.55 1.37-8.55 2.713s4.315 2.711 8.55 2.711 8.55-1.368 8.55-2.711c0-1.343-4.315-2.713-8.55-2.713zm0 7.058c-3.937 0-10.184-1.18-10.184-4.345C35.94 11.18 42.187 10 46.124 10c3.938 0 10.185 1.18 10.185 4.347 0 3.166-6.247 4.345-10.185 4.345z" fill="#4B5458"/>
                  <path d="M46.124 37.433c-3.937 0-10.184-1.18-10.184-4.346v-18.74h1.634v18.74c0 1.343 4.315 2.712 8.55 2.712s8.55-1.368 8.55-2.712V14.5h1.635v18.587c0 3.166-6.247 4.346-10.185 4.346z" fill="#4B5458"/>
                  <path d="M28.841 18.85l1.857 1.954a14.819 14.819 0 00-7.564 2.094c-4.438 2.664-7.105 7.355-7.134 12.547l1.634.01c.026-4.617 2.397-8.788 6.341-11.156a13.18 13.18 0 016.887-1.862l-2.166 2.057 1.126 1.185 4.08-3.876-3.876-4.08-1.185 1.127M56.366 40.207c-.026 4.618-2.397 8.788-6.341 11.156a13.19 13.19 0 01-6.886 1.862l2.165-2.057-1.126-1.185-4.08 3.876 3.876 4.08 1.185-1.127-1.855-1.952a14.829 14.829 0 007.562-2.096C55.304 50.1 57.971 45.41 58 40.216l-1.634-.01" fill="#5EC0CA"/>
                </svg>
              </div>
              <p>Running your SQL queries</p>
            </div>
             <div class="flex flex-col w-1/2 pr-12 mb-12">
              <div class="w-full">
                <svg width="100" height="100" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74 74">
                  <path d="M39.56 21.98a9.626 9.626 0 00-2.69-.693l.214-1.964c1.116.121 2.205.402 3.24.834l-.763 1.823zm3.764 2.8a9.797 9.797 0 00-1.718-1.635l1.178-1.586c.765.568 1.46 1.23 2.066 1.967l-1.526 1.255zm-20.778 4.383a6.867 6.867 0 00-2.89-.395l-.163-1.968a8.836 8.836 0 013.727.506l-.674 1.857zm3.577.5L24.2 29.21l.223-.94c1.1-4.656 4.854-8.14 9.563-8.873l.304 1.951c-3.912.61-7.03 3.506-7.945 7.377l-.222.94zm22.724 2.53a7.904 7.904 0 00-1.527-.148l-.652.025-.074-1.974.688-.026h.011c.675 0 1.313.063 1.935.185l-.381 1.938zm-37.21 4.761c-.64-3.957 1.25-7.617 4.809-9.326l.855 1.781c-2.752 1.32-4.21 4.158-3.713 7.23l-1.95.315zm-4.403 1.332l-1.096-1.644a7.187 7.187 0 013.141-1.155l.23 1.962a5.204 5.204 0 00-2.275.837zm-2.279 3.61L3 41.618a7.106 7.106 0 01.98-2.733l1.686 1.031a5.141 5.141 0 00-.71 1.978zm50.453 3.7l-1.618-1.133a7.894 7.894 0 00-2.792-11.506l.924-1.746a9.864 9.864 0 015.268 8.732 9.804 9.804 0 01-1.782 5.653zm-4.539 3.56l-.713-1.842a7.84 7.84 0 002.037-1.162l1.222 1.551a9.865 9.865 0 01-2.546 1.454zm-36.4.662h-4.35a7.19 7.19 0 01-6.812-4.89l1.87-.633a5.215 5.215 0 004.942 3.547h4.35v1.976zm11.11 0h-2.696v-1.976h2.695v1.976zm5.057 0h-3.284v-1.976h3.284v1.976zm16.68 0H32.541v-1.976h14.776c.353 0 .71-.023 1.058-.07l.264 1.957c-.435.059-.88.089-1.323.089z" fill="#5EC0CA"/>
                  <path d="M24.402 43.595a5.22 5.22 0 00-5.215 5.214 5.22 5.22 0 005.215 5.216h37.197c4.355 0 7.899-3.544 7.899-7.9 0-4.354-3.542-7.897-7.896-7.898l-1.509.058-.288-1.652a9.724 9.724 0 00-9.71-9.22 9.691 9.691 0 00-9.467 7.493l-.535 2.266-1.988-1.214a6.984 6.984 0 00-3.638-1.029 7.005 7.005 0 00-6.997 6.997v1.91l-2.021-.135a5.203 5.203 0 00-1.047-.106zM61.599 56H24.402c-3.965 0-7.19-3.226-7.19-7.19 0-3.966 3.225-7.19 7.19-7.19.368 0 .735.028 1.096.083.119-4.845 4.097-8.749 8.97-8.749 1.51 0 3 .387 4.332 1.124a11.658 11.658 0 0111.294-8.64c6.133 0 11.205 4.728 11.666 10.816 5.39.105 9.713 4.494 9.713 9.871 0 5.445-4.43 9.875-9.874 9.875" fill="#4B5458"/>
                </svg>
              </div>
              <p>Migrating stored procedures, embedded SQL, and business logic (if needed)</p>
            </div>
          </div>
        </div>
        <div class="w-full md:w-4/12">

          <div class="bg-white p-10">
            <svg class="mb-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150.7 32"><path fill="#B2191E" d="M16.1.2C7.4.2.3 7.3.3 16s7.1 15.8 15.8 15.8c8.7 0 15.8-7.1 15.8-15.8S24.8.2 16.1.2zM2.7 10.5c.2-.6.4-1.3.8-1.9 1-1.6 2.3-2.8 3.3-2.9h18.1c1 .4 1.7 1.3 1.6 2.4 0 .5-.1.9-.3 1.3H5.3c-1.3 0-2.3.8-2.8 1.9.1-.3.1-.5.2-.8zM18 30.4c-.6.2-1.3.3-2 .3-1.8 0-3.5-.6-4.1-1.4l-.2-.3S4.1 15.8 2.8 13.6c-.1-1.1.4-2.2 1.3-2.7.4-.3.8-.4 1.3-.4 1.4 2.3 10.5 18.1 10.5 18.1.6 1.1 1.8 1.6 2.9 1.5-.3.1-.5.2-.8.3zm11.6-17.1S22 26.5 20.7 28.7c-.8.7-2 .8-3 .2-.3-.2-.7-.5-.9-.9 1.4-2.3 10.5-18.1 10.5-18.1.6-1.1.5-2.4-.2-3.3.2.1.4.3.6.5.4.4.8 1 1.2 1.6 1 1.6 1.3 3.3.9 4.3l-.2.3zM59.3 6.7c.8-.7 1.6-1.2 2.5-1.5H34.3v4.5h8v20.6h5.3V9.7h9.1c.7-1.2 1.6-2.1 2.6-3z"/><path fill="#B2191E" d="M78.3 25.8h-8.5c-5.1 0-7-1.5-7.4-5.7h14.1v-4.5H62.4c.2-2.5.3-3 1.1-4.1 1.1-1.4 2.4-1.8 6-1.8h6.9V5.2h-9c-3.4 0-5.1.5-6.9 2-2.9 2.4-4.2 5.9-4.2 10.5 0 4 1.2 7.5 3.3 9.7 2 2.1 4.5 2.8 9.9 2.8h14.6c-2.5-.8-4.5-2.3-5.8-4.4z"/><path fill="#B2191E" d="M90.9 9.2c-4.7 0-6.6 2.5-6.6 8.4s2 8.5 6.6 8.5c4.3 0 6.4-2.7 6.4-8.5-.1-5.7-2.1-8.4-6.4-8.4zm.2 21.2c-8.3 0-12.7-4.4-12.7-12.5 0-8.7 4-12.8 12.4-12.8s12.3 4.2 12.3 13.3c0 7.8-4.2 12-12 12m34.5-4.6h-8.3c-5 0-6.8-2.3-6.8-8.4 0-5.6 1.8-7.7 6.6-7.7h7.8V5.2h-8.5c-2.4 0-4.9.4-6.3 1.1-3.5 1.7-5.5 5.8-5.5 11.4 0 4.5 1.1 8 3.3 10 1.9 1.9 4 2.5 8.3 2.5h15.2c-2.5-.8-4.5-2.3-5.8-4.4z"/><path fill="#B2191E" d="M138.1 9.2c-4.7 0-6.6 2.5-6.6 8.4s2 8.5 6.6 8.5c4.4 0 6.4-2.7 6.4-8.5 0-5.7-2-8.4-6.4-8.4zm.2 21.2c-8.3 0-12.7-4.4-12.7-12.5 0-8.7 4-12.8 12.4-12.8s12.3 4.2 12.3 13.3c.1 7.8-4.1 12-12 12"/></svg>
            <p>TEOCO had planned for three weeks of testing. But with the POC  completed in just one week, they used the remaining time to explore the limits of Yellowbrick. What TEOCO found was a solution that gave them the ability to run queries that were impossible with their previous vendor, along with a projected savings of $5 million.</p>
            <a  href="/resources/case-studies/teoco/" class="button yellow">Read our TEOCO case study</a>
          </div>

        </div>
      </div>
    </section>


    <section class="flex bg-gray py-16 px-6 xl:px-0">
      <div class="max-w-1200 mx-auto">
        <div class="flex flex-col md:flex-row items-center">
          <div class="w-full md:w-1/2 pr-0 md:pr-8">
            <h3 class="accent-heading">Use your tools out of the box</h3>
            <p>Yellowbrick is based on PostgreSQL and natively supports stored procedures, reducing migration timelines and allowing your team to be productive from day one. It works out of the box with the most common industry tools that speak ANSI SQL, such as Tableau, MicroStrategy, SAS, Microsoft Power BI, as well as with Python and R programming languages.</p>
          </div>
          <div class="flex flex-col sm:flex-row flex-wrap w-full md:w-1/2 pl-0 md:pl-8">
            <div class="flex items-center w-full sm:w-1/2 p-8">
              <img src="/uploads/partners-tableau-horiz.png" class="w-full h-auto" alt="tableau logo"/>
            </div>
            <div class="flex items-center w-full sm:w-1/2 p-8">
              <img src="/uploads/partners-microstrategy.png" class="w-full h-auto" alt="microstrategy logo"/>
            </div>
            <div class="flex items-center w-full sm:w-1/2 p-8">
              <img src="/uploads/partners-sas.png" class="w-full h-auto" alt="sas logo"/>
            </div>
            <div class="flex items-center w-full sm:w-1/2 p-8">
              <img src="/uploads/partners-powerbi.png" class="w-full h-auto" alt="power bi logo"/>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-gray-700 flex py-12 px-6 xl:px-0">
      <div class="flex sm:flex-row items-start items-center justify-evenly max-w-1200 mx-auto">
          <h3 class="mb-0 text-white">See Yellowbrick in action</h3>
          <a href="/go/book-a-demo/" class="button yellow mx-6">Book a demo</a>
      </div>
    </section>

    <section class="bg-white flex py-16 px-6 xl:px-0">
      <div class="flex flex-col items-start justify-evenly max-w-1200 mx-auto">
        <div class="w-full p-0 md:pr-10 relative">
          <h3 class="accent-heading">Migrate easily with our partner solutions</h3>
          <p class="">Yellowbrick has a broad partner ecosystem to help plan your transition, understand your data flows, and manage cutover. Our partners offer purpose-built tools and consulting services to migrate to Yellowbrick from any platform.</p>
          <img class="w-full h-auto" src="/uploads/yb-easy-migration.png" />
        </div>
        <div class="flex flex-col sm:flex-row w-full p-0 mt-6 self-center">
          <!-- <img class="w-full h-auto" src="/uploads/yb-easy-migration.png" /> -->
          <div class="w-1/2 sm:w-1/5 mx-auto my-1 sm:my-0 sm:mx-1 sm:my-0 p-8 bg-gray-700">
            <img src="/uploads/partners-nextpathway.svg" alt="next pathway logo"/>
          </div>
          <div class="w-1/2 sm:w-1/5 mx-auto my-1 sm:my-0 sm:mx-1 sm:my-0 p-8 bg-gray-700">
            <img src="/uploads/partners-virtusa.svg" alt="virtusa logo"/>
          </div>
          <div class="w-1/2 sm:w-1/5 mx-auto my-1 sm:my-0 sm:mx-1 sm:my-0 p-8 bg-gray-700">
            <img src="/uploads/partners-systech.svg" alt="systech logo"/>
          </div>
          <div class="w-1/2 sm:w-1/5 mx-auto my-1 sm:my-0 sm:mx-1 sm:my-0 p-8 bg-gray-700">
            <img src="/uploads/partners-emtec.svg" alt="emtec logo"/>
          </div>
          <div class="w-1/2 sm:w-1/5 mx-auto my-1 sm:my-0 sm:mx-1 sm:my-0 p-8 bg-gray-700">
            <img src="/uploads/partners-coffing.svg" alt="coffing logo"/>
          </div>
        </div>
      </div>
    </section>
    
    <section class="bg-gray-100 flex pb-12 bg-white px-6 xl:px-0 md:pt-20">
      <div class="mx-auto w-full max-w-1200">
        <h3 class="accent-heading">Migration resources</h3>
        <div class="flex flex-col sm:flex-row flex-wrap -mx-4 md:-mx-8">


          <div class="flex w-full md:w-1/2 xl:w-1/3 p-4 md:p-8">
            <div class="pr-5 w-5/12">
              <img src="/uploads/GUIDE SQL Server Yellowbrick Migration Thumbnail.png"  alt="Migration guide: Teradata to Yellowbrick Hybrid Data Warehouse" class="shadow-md" />
            </div>
            <div class="flex flex-col xl:justify-between w-7/12">
              <h5>Automated migration from SQL Server to Yellowbrick</h5>
              <a href="/resources/migration-guides/sql-server/" class="button yellow">Read Now</a>
            </div>
          </div>

          <div class="flex w-full md:w-1/2 xl:w-1/3 p-4 md:p-8">
            <div class="pr-5 w-5/12">
              <img src="/uploads/images/tera-pdf.png"  alt="Migration guide: Teradata to Yellowbrick Hybrid Data Warehouse" class="shadow-md" />
            </div>
            <div class="flex flex-col xl:justify-between w-7/12">
              <h5>Migration guide: Teradata to Yellowbrick Hybrid Data Warehouse</h5>
              <a href="/resources/migration-guides/teradata/" class="button yellow" target="_blank">Read Guide</a>
            </div>
          </div>

          <div class="flex w-full md:w-1/2 xl:w-1/3 p-4 md:p-8">
            <div class="pr-5 w-5/12">
              <img src="/uploads/thumb-migration-guide-netezza.png"  alt="Migrating from Netezza to Yellowbrick Is Fast and Painless" class="shadow-md" />
            </div>
            <div class="flex flex-col xl:justify-between w-7/12">
              <h5>Migrating from Netezza to Yellowbrick Is Fast and Painless</h5>
              <a href="/resources/migration-guides/netezza/" class="button yellow">Download</a>
            </div>
          </div>
          
          <div class="flex w-full md:w-1/2 xl:w-1/3 p-4 md:p-8">
            <div class="pr-5 w-5/12">
              <img src="/uploads/Yellowbrick_NextPathway_solution_brief_thumb.jpg"  alt="Next Pathway solution brief" class="shadow-md" />
            </div>
            <div class="flex flex-col xl:justify-between w-7/12">
              <h5>Next Pathway solution brief</h5>
              <a href="/uploads/BRIEF_Yellowbrick_Next_Pathway.pdf" class="button yellow" target="_blank">Download</a>
            </div>
          </div>

          <div class="flex w-full md:w-1/2 xl:w-1/3 p-4 md:p-8">
            <div class="pr-5 w-5/12">
              <img src="/uploads/Yellowbrick_Systech_solution_brief_thumb.jpg"  alt="Systech solution brief" class="shadow-md" />
            </div>
            <div class="flex flex-col xl:justify-between w-7/12">
              <h5>Systech solution brief</h5>
              <a href="/uploads/BRIEF_Yellowbrick_Systech.pdf" class="button yellow" target="_blank">Download</a>
            </div>
          </div>
          
        </div>
      </div>
    </section>

  </Layout>
</template>


<script>
import Hero from '~/components/HeroComponent.vue';

export default {
  components: {
    Hero
  },
  metaInfo: {
    title: 'Yellowbrick Data Migration',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: 'See Yellowbrick in action with a free trial or POC and experience unmatched data warehouse performance. As a customer, our partners support you with a seamless production migration, providing the automation and expertise needed to get you started. We are standards-based, so you’ll also be able to use industry tools out-of-the-box.'
      }
    ]
  },
  data() {
    return {
      heroTitleText: 'Modernize quickly and easily',
      heroDescriptionText: 'Get started with a test drive or POC and experience unmatched data warehouse performance. As a customer, our partners support you with a seamless production migration, providing the automation and expertise needed to get you on Yellowbrick.',
      buttonLink: '/contact-us/',
      heroButton: 'Talk to an expert',
      heroRightImage: 'https://via.placeholder.com/600x300',
      heroRightImageTitle: 'beep bop boop',
      expanded: false,
    };
  }
}
</script>