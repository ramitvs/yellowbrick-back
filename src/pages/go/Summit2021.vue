<style scoped>
.hero {
  background-image: url('/uploads/Yellowbrick_AprilSummitHeroImage.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: initial;
  &:after {
    content: '';
    background: linear-gradient(90deg, rgba(0,0,0, .65) 0%, rgba(0,0,0, 0) 100%);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
.hero-half {
  @apply bg-white;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 60%;
    background-image: url(/uploads/images/hero-new.svg);
    background-size: cover;
    background-position: center center;
    @apply bg-gray-700 absolute z-0;
  }
}

.float-form {
	@apply relative p-8 shadow-lg;
  background-color: rgba(113, 128, 150, .6);
}

.countdown-container {
  position: relative;
  top: -30px;
}

.countdown-container
div {
  text-align: center;
}

.customer-section
> .wrap {
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
}

.button-container
.button {
  border-color: transparent;
}

.image-container
> .icon-image {
  text-align: center;
  margin: 0 auto;
  height: 80px;
  width: auto;
}

.description {
  font-size: 1rem;
}

.event-row {
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #1F292E;
}
.event-row:last-of-type {
  border-bottom: none;
}

.event-row
> span {
  width: 33%;
  text-align: left;
}

.event-row
> .speaker {
  text-align: right;
  padding-right: 30px;
}
.agenda-section {
  position: relative;
  z-index: 1;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    opacity: .25;
    z-index: 0;
    background-image: url("data:image/svg+xml,%3Csvg class='z-0' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 433.42 381.65'%3E%3Cpath stroke='%23ffce32' stroke-miterlimit='10' fill='none' d='M270.59 76.52l53.94-31.21.11-13.99L270.63.65l-53.98 30.78.03 13.82 53.91 31.27z'/%3E%3Cpath stroke='%23ffce32' stroke-miterlimit='10' fill='none' d='M270.42 76.34l.17-13.58-53.93-31.07.02 13.56 53.74 31.09z'/%3E%3Cpath stroke='%23ffce32' stroke-miterlimit='10' fill='none' d='M270.71 76.31l-.12-13.55 53.95-31.21-.01 13.76-53.82 31zm-.16 76.25l53.94-31.22.11-13.99-54.01-30.67-53.98 30.78.02 13.82 53.92 31.28z'/%3E%3Cpath stroke='%23ffce32' stroke-miterlimit='10' fill='none' d='M270.38 152.37l.17-13.58-53.93-31.07.01 13.56 53.75 31.09zm.29-.03l-.12-13.55 53.95-31.21-.01 13.76-53.82 31zm107.86.22l53.94-31.21.11-13.99-54.01-30.67-53.98 30.77.03 13.83 53.91 31.27z'/%3E%3Cpath stroke='%23ffce32' stroke-miterlimit='10' fill='none' d='M378.36 152.38l.18-13.58-53.94-31.07.02 13.56 53.74 31.09z'/%3E%3Cpath stroke='%23ffce32' stroke-miterlimit='10' fill='none' d='M378.65 152.35l-.11-13.55 53.94-31.21-.01 13.76-53.82 31zm-216.22.37l53.95-31.21.1-13.99-54.01-30.67-53.97 30.78.02 13.82 53.91 31.27z'/%3E%3Cpath stroke='%23ffce32' stroke-miterlimit='10' fill='none' d='M162.26 152.54l.18-13.58-53.94-31.07.02 13.56 53.74 31.09zm.3-.03l-.12-13.55 53.95-31.21-.01 13.76-53.82 31zm108.05 76.16l53.95-31.21.1-14-54.01-30.67-53.98 30.78.03 13.83 53.91 31.27z'/%3E%3Cpath stroke='%23ffce32' stroke-miterlimit='10' fill='none' d='M270.44 228.48l.18-13.57-53.94-31.07.02 13.56 53.74 31.08zm.3-.03l-.12-13.54 53.94-31.22v13.77l-53.82 30.99zm107.85.22l53.95-31.21.1-13.99-54.01-30.67-53.98 30.77.03 13.83 53.91 31.27z'/%3E%3Cpath stroke='%23ffce32' stroke-miterlimit='10' fill='none' d='M378.42 228.49l.18-13.58-53.94-31.07.02 13.56 53.74 31.09zm.3-.03l-.12-13.55 53.95-31.21-.01 13.76-53.82 31zm-216.22.38l53.94-31.22.11-13.99-54.01-30.67-53.98 30.78.02 13.82 53.92 31.28z'/%3E%3Cpath stroke='%23ffce32' stroke-miterlimit='10' fill='none' d='M162.33 228.65l.17-13.58L108.57 184l.01 13.56 53.75 31.09zm.3-.03l-.13-13.55 53.95-31.21-.01 13.76-53.81 31zm-108.11.49l53.95-31.21.1-13.99-54.01-30.67L.58 184.01l.03 13.83 53.91 31.27z'/%3E%3Cpath stroke='%23ffce32' stroke-miterlimit='10' fill='none' d='M54.35 228.92l.18-13.57L.59 184.28l.02 13.56 53.74 31.08zm.3-.02l-.12-13.55 53.94-31.21v13.76l-53.82 31zm216 75.58l53.95-31.21.1-13.99-54-30.67-53.98 30.77.02 13.83 53.91 31.27z'/%3E%3Cpath stroke='%23ffce32' stroke-miterlimit='10' fill='none' d='M270.48 304.3l.18-13.58-53.93-31.07.01 13.56 53.74 31.09z'/%3E%3Cpath stroke='%23ffce32' stroke-miterlimit='10' fill='none' d='M270.78 304.27l-.12-13.55 53.95-31.21-.01 13.76-53.82 31zm107.85.22l53.95-31.22.11-13.99-54.01-30.67-53.98 30.78.02 13.82 53.91 31.28z'/%3E%3Cpath stroke='%23ffce32' stroke-miterlimit='10' fill='none' d='M378.46 304.3l.18-13.57-53.93-31.08.01 13.56 53.74 31.09zm.3-.03l-.12-13.54 53.95-31.22-.01 13.76-53.82 31zm-216.22.38l53.95-31.21.1-13.99-54.01-30.67-53.98 30.77.03 13.83 53.91 31.27z'/%3E%3Cpath stroke='%23ffce32' stroke-miterlimit='10' fill='none' d='M162.37 304.46l.18-13.57-53.94-31.07.02 13.56 53.74 31.08z'/%3E%3Cpath stroke='%23ffce32' stroke-miterlimit='10' fill='none' d='M162.67 304.44l-.12-13.55 53.95-31.21-.01 13.76-53.82 31zm107.86 76.1l53.95-31.22.1-13.99-54.01-30.67-53.98 30.78.03 13.82 53.91 31.28z'/%3E%3Cpath stroke='%23ffce32' stroke-miterlimit='10' fill='none' d='M270.36 380.35l.18-13.58-53.94-31.07.02 13.56 53.74 31.09zm.3-.03l-.12-13.55 53.95-31.21-.01 13.76-53.82 31zm107.85.22l53.95-31.21.1-13.99-54.01-30.67-53.98 30.77.03 13.83 53.91 31.27z'/%3E%3Cpath stroke='%23ffce32' stroke-miterlimit='10' fill='none' d='M378.34 380.36l.18-13.58-53.94-31.07.02 13.56 53.74 31.09zm.3-.03l-.12-13.55 53.94-31.21v13.76l-53.82 31zm-216.22.37l53.94-31.21.11-13.99-54.01-30.67-53.98 30.78.02 13.82 53.92 31.27z'/%3E%3Cpath stroke='%23ffce32' stroke-miterlimit='10' fill='none' d='M162.25 380.52l.18-13.58-53.94-31.07.01 13.56 53.75 31.09z'/%3E%3Cpath stroke='%23ffce32' stroke-miterlimit='10' fill='none' d='M162.54 380.49l-.11-13.55 53.94-31.21-.01 13.76-53.82 31zm-108.1.49l53.95-31.21.1-14-54.01-30.66L.5 335.88l.03 13.83 53.91 31.27z'/%3E%3Cpath stroke='%23ffce32' stroke-miterlimit='10' fill='none' d='M54.27 380.79l.18-13.57L.51 336.15l.02 13.56 53.74 31.08zm.3-.03l-.12-13.54L108.39 336v13.77l-53.82 30.99zM378.86 76.45l53.95-31.21.1-13.99-54-30.68-53.98 30.78.02 13.83 53.91 31.27z'/%3E%3Cpath stroke='%23ffce32' stroke-miterlimit='10' fill='none' d='M378.69 76.26l.18-13.57-53.94-31.07.02 13.56 53.74 31.08zm.3-.02l-.12-13.55 53.95-31.21-.01 13.76-53.82 31z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position-x: right;
    background-position-y: bottom;
  }
}
.agenda-section
.floating-image {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;
  opacity: .25;
}
.accordion-agenda {
  border: solid 2px #1F292E;
  padding: 20px;
  overflow: hidden;
  position: relative;
  background-color: rgba(230, 235, 235, .85);
  z-index: 2;
}
.accordion-agenda.-isClosed {
  height: 158px;
}
.accordion-agenda.-isOpen {
  max-height: 100%;
}

.accordion-agenda
.accordion-button {
  position: relative;
}
.accordion-agenda
.accordion-button:after {
  content: '';
  height: 25px;
  width: 25px;
  border-right: solid 2px #00C3CD;
  border-bottom: solid 2px #00C3CD;
  position: absolute;
  top: 0px;
  right: 20px;
  transform: rotate(45deg);
  transition: transform .2s ease, top .2s ease;
}
.accordion-agenda
.accordion-button.-isOpen:after {
  transform: rotate(-135deg);
  top: 10px;
}

.speaker-section
> .wrap {
  flex-wrap: wrap;
  justify-content: flex-start;
}
.speaker-tile {
  max-width: 320px;
  margin: 0 auto 30px;

}
.speaker-tile
> .image-container {
  max-height: 250px;
  overflow: hidden;
  text-align: center;
  border: solid 2px #FFCD32;
}

.circle_animation {
  stroke: #fff !important;
}

.summit-title {
  font-size: 4rem;
}
.tag-line {
  margin-bottom: 20px;
}
.main-title {
  font-size: 1.938rem;
}

.date-tagline {
  font-size: 1.15rem;
}

.list-title {
  font-size: 1.125rem;
  font-weight: 500;
}

.hero-description {
  font-size: 1rem;
}

.icon-section
> .wrap {
  flex-wrap: wrap;
}

.icon-event {
  width: 3.5rem;
  height: auto;
}

@media(min-width: 320px) {
}

@media(min-width: 480px) {
  .main-title {
    font-size: 2.938rem;
  }
  .summit-title {
    font-size: 5rem;
  }
  .speaker-tile {
    width: 50%;
    padding: 0 20px;
    margin-bottom: 30px;
  }
  .speaker-section
  > .wrap {
    max-width: 560px;
    width: 100%;
  }
}

@media(min-width: 988px) {
  .hero-description {
    font-size: calc(1.275rem + 0.3vw);
  }
  .date-tagline {
    font-size: 1.75rem;
  }
  .speaker-tile {
    max-width: 240px;
    width: 100%;
  }
  .tag-line {
    font-size: 2rem;
    font-weight: 500;
  }
}
@media(min-width: 1024px) {
  .summit-title {
    font-size: 6.5rem;
  }
  .speaker-section
  > .wrap {
    max-width: 1200px;
  }
}
</style>

<template>
  <Layout>

    <section class="hero flex bg-gray-700 py-10 md:py-12 text-white px-6 xl:px-0" id="hero-section">
      <div class="flex flex-col md:flex-row max-w-1200 w-full py-8 mx-auto relative z-10">
					<div class="w-full md:w-2/3 p-0 md:pr-24 text-gray-700 md:text-white">
						<div class="hero-left bg-gray-600 md:bg-transparent p-6 md:p-0">
              <h2 class="text-3xl lg:text-5xl leading-none text-white md:mb-4">Reimagine what a <span class="md:block">data warehouse can do</span></h2>
              <h1 class="summit-title inline-block leading-none text-white bg-yellow1 p-2 mb-3 md:mb-4">Yellowbrick<br/> Summit 2021</h1>
              <h2 class="text-3xl lg:text-3xl leading-none text-white mb-10">Be the first to discover the data warehouse<span class="lg:block"> for distributed clouds</span></h2>
              <ul class="list-none text-3xl text-white p-0 m-0">
                <li class="flex items-center mb-3 hidden"><img class="icon-event mr-4" src="/uploads/icons/DateIcon.png" alt="Date"/>Thursday, April 29</li>
                <li class="flex items-center hidden"><img class="icon-event mr-4" src="/uploads/icons/TimeIcon.png" alt="Time"/>10 am PT / 1 pm ET</li>
                <li class="flex items-center"><img class="icon-event mr-4" src="/uploads/icons/DurationIcon.png" alt="Duration"/>Duration: 200 minutes</li>
              </ul>
							<!-- <h1 class="p-0 main-title">Real-time<br><span class="text-yellow1">data warehousing</span><br>for private and public clouds</h1>
              <h2 class="rfs-text-xl tag-line">Reimagine what a data warehouse can do</h2>
							<p class="hero-description pt-4 rfs-text-xl">Join us to learn about the future of faster, more flexible cloud data warehouses. This deep dive into Yellowbrick's innovative platform is a must for data professionals and IT leaders from all industries.</p>
              <p class="mt-8 date-tagline">Thursday, April 29th  <span class="text-yellow1">|</span>  10 AM PT / 1 PM ET</p> -->
						</div>
					</div>

					<div class="w-full w-full md:w-1/3">
            <div class="countdown-container">
              <Timer
                starttime="Apr 29, 2021 10:00:00"
                endtime="Apr 29, 2021 13:20:00"
                trans='{
                "day":"Days",
                "hours":"Hours",
                "minutes":"Minutes",
                "seconds":"Seconds",
                "expired":"Watch on-demand",
                "running":"We are live. Join us now!",
                "upcoming":"Till start of event.",
                "status": {
                    "expired":"Expired",
                    "running":"Running",
                    "upcoming":"Future"
                  }}'
                  :hideDays="true"
                  :hideSeconds="true"
                ></Timer>
            </div>
            <div class="float-form">
              <BaseHubspot id="00e92820-efb6-42e3-8750-2a67befcfc11" sfid="7011G000000KW29QAG" />
            </div>
					</div>

				</div>
		</section>
    <!-- <section class="bg-white customer-section py-8">
      <div class="flex wrap">
        <h2 class="w-full text-center customer-sectionTitle">Hear From</h2>
        <img src="/uploads/customers/bmw-formatted.png" alt="yellowbrick logo" class="w-1/4" />
        <img src="/uploads/customers/lexisnexis-formatted.svg" alt="yellowbrick logo" class="w-1/4" />
      </div>
    </section> -->
    <section class="icon-section bg-white text-center pt-0 pb-16">
      <div class="wrap max-w-1200 pt-16 mx-auto">
        <h2 class="text-5xl leading-none text-gray-600">About this Summit</h2>
        <p class="rfs-text-xl">Learn about the future of faster, more flexible cloud data warehouses. This deep dive into Yellowbrick's innovative platform is a must for data professionals and IT leaders from all industries.</p>
      </div>
      <div class="flex wrap max-w-1200 py-16 mx-auto">
        <div class="w-full md:w-1/3 px-12">
          <div class="image-container w-full mb-4">
            <img class="icon-image" src="/uploads/icons/YB Iconography_CONVERTED_Finance_Blue.png" alt="Data Analytics Leaders | Yellowbrick"/>
          </div>
          <h4 class="list-title text-teal">Data Analytics Leaders</h4>
          <p class="description">Understand how to achieve real-time analytics and the new paradigms in analytics infrastructure</p>
        </div>
        <div class="w-full md:w-1/3 px-12">
          <div class="image-container w-full mb-4">
            <img class="icon-image" src="/uploads/icons/YB Iconography_CONVERTED_Real-time Data_Blue.png" alt="Data Analytics Leaders | Yellowbrick"/>
          </div>
          <h4 class="list-title text-teal">Architects & Data Engineers</h4>
          <p class="description">Dive into Yellowbrick architectural details, capabilities, and best practices that give more data consumers access to more up-to-the-second data in near real time</p>
        </div>
        <div class="w-full md:w-1/3 px-12">
          <div class="image-container w-full mb-4">
            <img class="icon-image" src="/uploads/icons/YB Iconography_CONVERTED_Performance_Blue.png" alt="Data Analytics Leaders | Yellowbrick"/>
          </div>
          <h4 class="list-title text-teal">Data Consumers</h4>
          <p class="description">Learn how simultaneous, speed-of-thought access to vast amounts of streaming and at-rest data makes data insight faster and more impactful</p>
        </div>
      </div>
      <div class="button-container mb-20 hidden">
        <a href="#hero-section" class="btn button bg-yellow1 rfs-text-xl cta-button font-bold">RSVP today</a>
      </div>
    </section>

    <section class="speaker-section bg-gray-700 py-10 md:py-16 px-6">
      <div class="wrap flex mx-auto">
        <h2 class="text-teal font-bold w-full ml-4">Speakers</h2>
        <div class="speaker-tile w-full md:w-1/4">
          <div class="image-container mb-4">
            <img src="/uploads/neil-carson-bw.png" alt="Neil Carson | CEO at Yellowbrick | Keynot Speaker" />
          </div>
          <h6 class="mb-0 event-title text-gray-100 text-center">Keynote</h6>
          <h6 class="mb-0 name text-yellow1 text-center">Neil Carson</h6>
          <h6 class="mb-0 title-name text-gray-100 text-center">CEO, Yellowbrick</h6>
        </div>
        <div class="speaker-tile w-full md:w-1/4">
          <div class="image-container mb-4">
            <img src="/uploads/andrew-brust-bw.jpg" alt="Andrew Brust | Yellowbrick | Partner Ecosystem Panel 1"/>
          </div>
          <h6 class="mb-0 event-title text-gray-100 text-center">Analyst Session</h6>
          <h6 class="mb-0 name text-yellow1 text-center">Andrew Brust</h6>
          <h6 class="mb-0 title-name text-gray-100 text-center">Analyst, GigaOm Research</h6>
        </div>
        <div class="speaker-tile w-full md:w-1/4">
          <div class="image-container mb-4">
            <img src="/uploads/jeff-bw.jpg" alt="Jeff Spicer | CMO Yellowbrick | Welcome speaker" />
          </div>
          <h6 class="mb-0 event-title text-gray-100 text-center">Welcome</h6>
          <h6 class="mb-0 name text-yellow1 text-center">Jeff Spicer</h6>
          <h6 class="mb-0 title-name text-gray-100 text-center">CMO, Yellowbrick</h6>
        </div>
        <div class="speaker-tile w-full md:w-1/4">
          <div class="image-container mb-4">
            <img src="/uploads/mark-cusack-bw.png" alt="" />
          </div>
          <h6 class="mb-0 event-title text-gray-100 text-center">Panel Discussion</h6>
          <h6 class="mb-0 name text-yellow1 text-center">Mark Cusack</h6>
          <h6 class="mb-0 title-name text-gray-100 text-center">CTO, Yellowbrick</h6>
        </div>
        <div class="speaker-tile w-full md:w-1/4">
          <div class="image-container mb-4">
            <img src="/uploads/allen-bw.jpg" alt="Allen Holmes | Yellowbrick | Partner Ecosystem Panel 1"/>
          </div>
          <h6 class="mb-0 event-title text-gray-100 text-center">Partner Ecosystem Panel</h6>
          <h6 class="mb-0 name text-yellow1 text-center">Allen Holmes</h6>
          <h6 class="mb-0 title-name text-gray-100 text-center">VP Business Dev. Yellowbrick</h6>
        </div>
        <div class="speaker-tile w-full md:w-1/4">
          <div class="image-container mb-4">
            <img src="/uploads/Matthias_Baumhof.jpg" alt="Matthias Baumhof | CTO, ThreatMetrix" />
          </div>
          <h6 class="mb-0 name text-yellow1 text-center">Matthias Baumhof</h6>
          <h6 class="mb-0 title-name text-gray-100 text-center">CTO, ThreatMetrix</h6>
        </div>
        <div class="speaker-tile w-full md:w-1/4">
          <div class="image-container mb-4">
            <img src="/uploads/Srinivasan_Sankar.jpg" alt="Srinivasan Sankar | Chief Data and Analytics Officer" />
          </div>
          <h6 class="mb-0 name text-yellow1 text-center">Srinivasan Sankar</h6>
          <h6 class="mb-0 title-name text-gray-100 text-center">Chief Data and Analytics Officer, Hanover Insurance</h6>
        </div>
        <div class="speaker-tile w-full md:w-1/4">
          <div class="image-container mb-4">
            <img src="/uploads/Salema_Rice.jpg" alt="Salema Rice | Chief Data and Analytics Officer, GRI" />
          </div>
          <h6 class="mb-0 name text-yellow1 text-center">Salema Rice</h6>
          <h6 class="mb-0 title-name text-gray-100 text-center">Chief Data and Analytics Officer, GRI</h6>
        </div>
        <div class="speaker-tile w-full md:w-1/4">
          <div class="image-container mb-4">
            <img src="/uploads/nanda.jpg" alt="Nandakumar Sivaraman | Practice Head, Data and Insights, Emtec Inc" />
          </div>
          <h6 class="mb-0 name text-yellow1 text-center">Nandakumar Sivaraman</h6>
          <h6 class="mb-0 title-name text-gray-100 text-center">Practice Head, Data and Insights, Emtec Inc</h6>
        </div>
        <div class="speaker-tile w-full md:w-1/4">
          <div class="image-container mb-4">
            <img src="/uploads/jay-chitnis.jpg" alt="Jay Chitnis | VP Global Alliances, Partners and Business Development - Protegrity" />
          </div>
          <h6 class="mb-0 name text-yellow1 text-center">Jay Chitnis</h6>
          <h6 class="mb-0 title-name text-gray-100 text-center">VP Global Alliances, Partners and Business Development - Protegrity</h6>
        </div>
        <div class="speaker-tile w-full md:w-1/4">
          <div class="image-container mb-4">
            <img src="/uploads/VinayHeadshot.jpg" alt="Vinay Mathur | Chief Strategy Officer, Next Pathway" />
          </div>
          <h6 class="mb-0 name text-yellow1 text-center">Vinay Mathur</h6>
          <h6 class="mb-0 title-name text-gray-100 text-center">Chief Strategy Officer, Next Pathway</h6>
        </div>
      </div>
      <div class="button-container py-16 text-center hidden">
        <a href="#hero-section" class="btn button bg-yellow1 rfs-text-xl cta-button font-bold">RSVP today</a>
      </div>
    </section>

    <section class="bg-gray-100 text-center py-10 md:py-16 px-6">
      <div class="wrap max-w-1200 mx-auto">
        <h2 class="text-5xl leading-none text-gray-600 pb-6">Trends and Innovation in Data Warehouse</h2>
        <p class="rfs-text-xl">Business demands on data analytics infrastructure—for real-time answers, better scalability, and more deployment flexibility at a predictable cost—stress the legacy and cloud-only options to their limits.</p>
        <p class="rfs-text-xl">If you’re an IT leader, architect, data engineer, data scientist, or developer and want to learn about how Yellowbrick Data Warehouse architecture and capabilities transform  your analytics infrastructure, this technically detailed event is for you.</p>
      </div>
    </section>

    <section class="agenda-section py-10 md:py-16 px-6">
      <div class="max-w-1200 mx-auto px-12 relative z-10">

        <h2 class="text-5xl text-teal">Agenda</h2>
        <p class="rfs-text-2xl mb-12">Summit duration: < 3 hours</p>

        <button @click="displayAgendaBusiness = !displayAgendaBusiness" class="flex items-center mb-4 uppercase rfs-text-2xl mb-0 font-bold cursor-pointer">
          <span>Business</span> 
          <svg class="w-6 h-6 text-teal ml-2 transition-transform duration-150 ease-in-out transform" :class="{'rotate-180': !displayAgendaBusiness, 'rotate-0': displayAgendaBusiness}" viewBox="0 0 66 36" xmlns="http://www.w3.org/2000/svg"><path d="M3 3l30 30L63 3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="6"></path></svg>
        </button>

        <div class="agenda-section__business mb-20" v-show="displayAgendaBusiness">
          <div class="grid grid-cols-1 sm:grid-cols-2 grid-rows-1 gap-x-8 gap-y-4 border-b border-black py-6">
            <div class="hidden">
              <h3 class="rfs-text-lg font-medium uppercase mb-0">10 AM PT / 1:00 PM ET</h3>
              <p class="rfs-text-sm pb-0">Duration: 5 minutes</p>
            </div>
            <div>
              <h3 class="text-teal rfs-text-lg uppercase mb-0">Welcome</h3>
            </div>
            <div>
              <p class="rfs-text-xl mb-0 font-medium">Jeff Spicer</p>
              <p class="mb-0">CMO, Yellowbrick</p>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 grid-rows-1 gap-x-8 gap-y-4 border-b border-black py-6">
            <div class="hidden">
              <h3 class="rfs-text-lg font-medium uppercase mb-0">10:05 AM PT / 1:05 PM ET</h3>
              <p class="rfs-text-sm pb-0">Duration: 20 minutes</p>
            </div>
            <div>
              <h3 class="text-teal rfs-text-lg uppercase mb-0">Keynote</h3>
              <p class="mb-0">The technology behind the world’s fastest, most flexible data warehouse</p>
            </div>
            <div>
              <p class="rfs-text-xl mb-0 font-medium">Neil Carson</p>
              <p class="mb-0">CEO, Yellowbrick</p>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 grid-rows-1 gap-x-8 gap-y-4 border-b border-black py-6">
            <div class="hidden">
              <h3 class="rfs-text-lg font-medium uppercase mb-0">10:25 AM PT / 1:25 PM ET</h3>
              <p class="rfs-text-sm pb-0">Duration: 20 minutes</p>
            </div>
            <div>
              <h3 class="text-teal rfs-text-lg uppercase mb-0">Thought Leadership Panel</h3>
              <p class="mb-0">The Next Frontier: Data warehousing for distributed clouds</p>
            </div>
            <div>
              <p><span class="font-semibold">Moderator:</span> Mark Cusack CTO, Yellowbrick</p>
              <p class="font-semibold mb-0">Panelists</p>
              <ul class="m-0 rfs-text-base">
                <li class="pb-0">Matthias Baumhof, CTO, Threatmetrix</li>
                <li class="pb-0">Srinivasan Sankar, Enterprise Data Leader, Hanover Insurance Group</li>
                <li class="pb-0">Salema Rice, Chief Data Officer, Geometric Results, Inc.</li>
              </ul>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 grid-rows-1 gap-x-8 gap-y-4 border-b border-black py-6">
            <div class="hidden">
              <h3 class="rfs-text-lg font-medium uppercase mb-0">10:45 AM PT / 1:45 PM ET</h3>
              <p class="rfs-text-sm pb-0">Duration: 20 minutes</p>
            </div>
            <div>
              <h3 class="text-teal rfs-text-lg uppercase mb-0">Analyst Session</h3>
              <p class="mb-0">Trends and Innovation in Data Warehouses</p>
            </div>
            <div>
              <p class="mb-0">Andrew Brust, GigaOm Analyst</p>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 grid-rows-1 gap-x-8 gap-y-4 py-6">
            <div class="hidden">
              <h3 class="rfs-text-lg font-medium uppercase mb-0">11:05 AM PT / 2:05 PM ET</h3>
              <p class="rfs-text-sm pb-0">Duration: 20 minutes</p>
            </div>
            <div>
              <h3 class="text-teal rfs-text-lg uppercase mb-0">Partner Panel</h3>
              <p class="mb-0">Building a partner ecosystem for next-generation analytic platforms</p>
            </div>
            <div>
              <p><span class="font-semibold">Moderator:</span> Allen Holmes, VP, Business Development, Yellowbrick</p>
              <p class="font-semibold mb-0">Panelists</p>
              <ul class="m-0 rfs-text-base">
                <li class="pb-0">Jay Chitnis, VP Global Alliances, Partners, and Business Development, Protegrity</li>
                <li class="pb-0">Nandakumar Sivaraman, Practice Head, Data and Insights, Emtec, Inc.</li>
                <li class="pb-0">Vinay Mathur, Chief Strategy Next Pathway</li>
              </ul>
            </div>
          </div>

        </div>

        <button @click="displayAgendaTechnical = !displayAgendaTechnical" class="flex items-center mb-4 uppercase rfs-text-2xl mb-0 font-bold cursor-pointer">
          <span>Technical</span> 
          <svg class="w-6 h-6 text-teal ml-2 transition-transform duration-150 ease-in-out transform" :class="{'rotate-180': !displayAgendaTechnical, 'rotate-0': displayAgendaTechnical}" viewBox="0 0 66 36" xmlns="http://www.w3.org/2000/svg"><path d="M3 3l30 30L63 3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="6"></path></svg>
        </button>

        <div class="agenda-section__technical" v-show="displayAgendaTechnical">
          <div class="grid grid-cols-1 sm:grid-cols-2 grid-rows-1 gap-x-8 gap-y-4 border-b border-black py-6">
            <div class="hidden">
              <h3 class="rfs-text-lg font-medium uppercase mb-0">11:25 AM PT / 2:25 PM ET</h3>
              <p class="rfs-text-sm pb-0">Duration: 15 minutes</p>
            </div>
            <div>
              <h3 class="rfs-text-base font-semibold mb-0">Getting started with Yellowbrick</h3>
              <p class="mb-0">Learn how to manage instances, create databases and users, load data, and query and explore your data using the Yellowbrick Manager web UI.</p>
            </div>
            <div>
              <p class="mb-0">Mike McWhorter</p>
              <p class="mb-0">Systems Engineer</p>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 grid-rows-1 gap-x-8 gap-y-4 border-b border-black py-6">
            <div class="hidden">
              <h3 class="rfs-text-lg font-medium uppercase mb-0">11:40 AM PT / 2:40 PM ET</h3>
              <p class="rfs-text-sm pb-0">Duration: 15 minutes</p>
            </div>
            <div>
              <h3 class="rfs-text-base font-semibold mb-0">Yellowbrick Architecture 101: Concepts</h3>
              <p class="mb-0">“How is Yellowbrick so fast?”, you may ask? Get the answer in this introduction to Yellowbrick concepts and design principles, including its unique adaptive cut-through architecture.</p>
            </div>
            <div>
              <p class="mb-0">Christian Shrauder</p>
              <p class="mb-0">VP, Systems Engineering</p>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 grid-rows-1 gap-x-8 gap-y-4 border-b border-black py-6">
            <div class="hidden">
              <h3 class="rfs-text-lg font-medium uppercase mb-0">11:55 AM PT / 2:55 PM ET</h3>
              <p class="rfs-text-sm pb-0">Duration: 15 minutes</p>
            </div>
            <div>
              <h3 class="rfs-text-base font-semibold mb-0">Intro to Yellowbrick Architecture 102: Advanced Concepts</h3>
              <p class="mb-0">Learn about workload management, security, replication, and other key Yellowbrick features that make it stand out from other data warehouses.</p>
            </div>
            <div>
              <p class="mb-0">Joey Foley</p>
              <p class="mb-0">Senior Systems Engineer</p>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 grid-rows-1 gap-x-8 gap-y-4 border-b border-black py-6">
            <div class="hidden">
              <h3 class="rfs-text-lg font-medium uppercase mb-0">12:10 AM PT / 3:10 PM ET</h3>
              <p class="rfs-text-sm pb-0">Duration: 15 minutes</p>
            </div>
            <div>
              <h3 class="rfs-text-base font-semibold mb-0">Demo: Data warehousing for Distributed Clouds</h3>
              <p class="mb-0">Data is everywhere, and data warehouses have to adapt. Watch this demo to see Yellowbrick bring near-real-time performance to data across multiple private cloud and public cloud environments.</p>
            </div>
            <div>
              <p class="mb-0">Joey Foley, Senior Systems Engineer</p>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 grid-rows-1 gap-x-8 gap-y-4 py-6">
            <div class="hidden">
              <h3 class="rfs-text-lg font-medium uppercase mb-0">12:25 AM PT / 3:25 PM ET</h3>
              <p class="rfs-text-sm pb-0">Duration: 20 minutes</p>
            </div>
            <div>
              <h3 class="rfs-text-base font-semibold mb-0">Building a Self-service Distributed Cloud</h3>
              <p class="mb-0">Learn how the combination of Yellowbrick and Denodo allow you to create a self-service distributed cloud environment in which 1000s of users can get near-real time results from data wherever it's physically located--in private clouds, public clouds, or at the edge.</p>
            </div>
            <div>
              <p class="mb-0">Lorenzo Danesi, Senior Systems Engineer, Yellowbrick</p>
              <p class="mb-0">Suntosh Murthy, Sales Engineer, Denodo</p>
            </div>
          </div>

        </div>
      </div>

    </section>

    <!-- <section class="agenda-section bg-gray-100 py-16">
      <div class="floating-image">
        <img src="/uploads/textured-background-with-accents.png" alt="decorative image | Yellowbrick Summit 2021" />
      </div>
      <div class="max-w-1200 mx-auto py-16">
        <h2 class="section-title">Agenda</h2>
        <div class="legend">
          <div class="event-row flex py-4">
            <span class="time rfs-text-xl pr-4">10:00am - 10:05am</span>
            <span class="title text-teal rfs-text-xl pr-4">Welcome reception</span>
            <span class="speaker rfs-text-xl">Jeff Spicer</span>
          </div>
          <div class="event-row flex py-4">
            <span class="time rfs-text-xl pr-4">10:05am - 10:25am</span>
            <span class="title text-teal rfs-text-xl pr-4">Keynote</span>
            <span class="speaker rfs-text-xl">Neil Carson</span>
          </div>
          <div class="event-row flex py-4">
            <span class="time rfs-text-xl pr-4">10:25am - 10:45am</span>
            <span class="title text-teal rfs-text-xl pr-4">Technical Keynote</span>
            <span class="speaker rfs-text-xl">Jeff Spicer</span>
          </div>
          <div class="event-row flex py-4">
            <span class="time rfs-text-xl pr-4">11:25am - 11:45am</span>
            <span class="title rfs-text-xl pr-4"> <span class="rfs-text-xl font-bold text-gray-300">PARTNER ECOSYSTEM PANEL 1</span><br>Allen + Partners</span>
            <span class="speaker rfs-text-xl">Allen Holmes</span>
          </div>
        </div>
      </div>
      <div class="accordion-agenda max-w-1200 mx-auto">
        <div class="accordion-button">
          <h4 class="rfs-text-xl font-bold text-gray-500 -isClosed">Business and Technical Sessions. 20 minutes</h4>
          <div class="post-type rfs-text-base"><span class="font-bold rfs-text-xl text-gray-700 pr-2">T</span> Cloud Console (Preview): Creating & Managing Instances each.</div>
          <div class="post-type rfs-text-base"><span class="font-bold rfs-text-xl text-gray-700 pr-2">B</span> Cloud Console (Preview): Using the SQL Developer Workbench.</div>
        </div>
      </div>
    </section> -->

  </Layout>
</template>

<script>

import Layout from '~/layouts/Landing.vue';
import Timer from '../../components/CoundownTimer.vue';

export default {

  components: {
    Layout,
    Timer,
  },
  mounted() {
    const date = new Date();
  },
  metaInfo: {
    title: 'Yellowbrick Summit 2021: Reimagine what a data warehouse can do',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: 'Yellowbrick Summit 2021'
      },
      {
        key: 'og:description',
        name: 'og:description',
        content: 'Yellowbrick Summit 2021'
      },
      {
        key: 'twitter:description',
        name: 'twitter:description',
        content: 'Yellowbrick Summit 2021'
      },
      {
        key: 'og:image',
        name: 'og:image',
        content: 'https://www.yellowbrick.com/uploads/Yellowbrick_AprilSummitHeroImage.jpg'
      },
      {
        key: 'twitter:image',
        name: 'twitter:image',
        content: 'https://www.yellowbrick.com/uploads/Yellowbrick_AprilSummitHeroImage.jpg'
      }
    ]
  },
  data() {
    return {
      displayAgendaBusiness: true,
      displayAgendaTechnical: true
    }
  }
};
</script>