<style scoped>
.hero {
  background-image: url(/uploads/images/wire-with-blocks-bg.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: 55%;
}

.arrow .yb-icon {
  transition: transform 213ms ease-in-out;
}
.arrow:hover .yb-icon {
  transform: translate(0.6rem, 2px);
}

.key-features {
  background-size: 3%;
  background-position-x: center;
  background-position-y: center;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath d='M223.71 255.58a32 32 0 1032-32 32 32 0 00-32 32z' fill='%23fff' opacity='.15'/%3E%3C/svg%3E%0A");
}

.why-yellowbrick {
  background-position-x: center;
  background-position-y: center;
}
.why-yellowbrick i {
   width: 70px;
        margin-right: 2rem;
        min-width: 70px;
}

.partner-ecosystem {
  background-image: url("/uploads/images/bricks-overlay.png");
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: bottom;
  background-size: contain;
}
</style>

<template>
  <Layout>

    <base-section class="hero text-white">
      <div class="w-full md:w-3/4">
        <h1 class="rfs-text-4xl font-normal max-w-sm">Cloud Data Warehousing Without Limits</h1>
        <p class="rfs-text-lg max-w-md">Yellowbrick offers the elasticity and great user experience that Snowflake and other cloud-native data warehouses have, along with the reliability, control, deployment options, and excellent price/performance they don’t.</p>
        <a href="/performance/" class="arrow flex md:inline-flex items-center text-yellow1 rfs-text-lg mr-6 mb-4">Performance <icon-arrow-right class="ml-2"></icon-arrow-right></a>
        <a href="/monitoring-and-management/" class="arrow flex md:inline-flex items-center text-yellow1 rfs-text-lg mr-6 mb-4">Management <icon-arrow-right class="ml-2"></icon-arrow-right></a>
        <a href="/security/" class="arrow flex md:inline-flex items-center text-yellow1 rfs-text-lg mr-6 mb-4">Security <icon-arrow-right class="ml-2"></icon-arrow-right></a>
        <a href="/pricing/" class="arrow flex md:inline-flex items-center text-yellow1 rfs-text-lg mr-6 mb-4">Pricing <icon-arrow-right class="ml-2"></icon-arrow-right></a>
        <a href="/products/migration/" class="arrow flex md:inline-flex items-center text-yellow1 rfs-text-lg mr-6 mb-4">Migration <icon-arrow-right class="ml-2"></icon-arrow-right></a>
      </div>
    </base-section>

    <base-section>
      <p class="rfs-text-lg text-center">Yellowbrick Data Warehouse is a modern, MPP analytic database designed for the most demanding batch, real-time, interactive, and mixed workloads. We continuously implement the latest advances in software (e.g., Kubernetes) and hardware (e.g., NVMe) protocols, combine these advances with smart thinking about database architecture, and add on top a standards-based interface that’s familiar to users (PostgreSQL) for ecosystem compatibility.</p>
      <p class="rfs-text-lg text-center">The result is a modern, quickly provisioned, and easy-to-use solution that blows the doors off rivals in price/performance economics, and that can be deployed anywhere across distributed clouds (private, public, and edge networks).</p>
    </base-section>

    <base-section class="key-features bg-gray-500">
      <h3 class="text-white rfs-text-4xl mb-12">Key features</h3>
      <div class="flex flex-col md:flex-row mx-0 md:-mx-6 text-white">
        <div class="w-full md:w-1/3 px-24 sm:px-12 lg:px-24 mb-16 md:mb-0 text-center">
          <i class="inline-block mx-auto mb-4">
            <svg height="90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55.61 46.17">
              <g>
                <path d="M48.21 46.17L30.15 35.53a8.14 8.14 0 01-2.07.34 8.06 8.06 0 117.83-8.3 8 8 0 010 .84l13.88 15.85zM29.84 33l1.08.09 11.86 7-9.14-10.45-.3-1a5.69 5.69 0 00.07-1 5.57 5.57 0 10-11.13.36A5.58 5.58 0 0024 31.86a5.45 5.45 0 004 1.51 5.65 5.65 0 001.84-.37z" fill="#fdbf14"/>
                <path d="M27.81 0A27.8 27.8 0 003.69 41.64l.5.87L15 39.15l-.74-2.39-8.89 2.76A25.36 25.36 0 012.54 29h4.21v-2.5H2.53a25.25 25.25 0 012.78-10.27L9 18.34l1.25-2.16-3.68-2.11a25.48 25.48 0 017.51-7.51l2.1 3.65L18.35 9l-2.11-3.69a25.1 25.1 0 0110.31-2.78v4.23h2.5V2.53A25.24 25.24 0 0139.36 5.3L37.25 9l2.17 1.25 2.11-3.65a25.41 25.41 0 017.53 7.54l-3.65 2.11 1.25 2.16 3.65-2.11a25 25 0 012.77 10.28h-4.23V29h4.22a25.33 25.33 0 01-3.3 11.34l2.17 1.24A27.81 27.81 0 0027.81 0z" fill="#fff"/>
              </g>
            </svg>
          </i>
          <h2 class="rfs-text-xl font-semibold -my-2 leading-none text-yellow1 mb-4">Get 100X performance</h2>
          <p clsas="rfs-text-lg">Let 1000s of users run ad hoc queries up to 100x faster, on real-time and at-rest data.</p>
        </div>
        <div class="w-full md:w-1/3 px-24 sm:px-12 lg:px-24 mb-16 md:mb-0 text-center">
          <i class="inline-block mx-auto mb-4">
            <svg height="90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.26 68.05">
              <g>
                <g>
                  <path d="M38.16 68.05L21.79 58.6 23 56.43l15.12 8.73 15.11-8.72 1.25 2.16zM16.79 45.72h-2.5V26.78l16.41-9.47 1.3 2.16-15.21 8.75zm45.23 0h-2.5v-17.5l-15.16-8.75 1.25-2.16L62 26.78z" fill="#fff"/>
                  <path fill="#fdbf14" d="M53.06 33.4l-1.25-2.16-13.65 7.88-13.66-7.88-1.25 2.16 13.66 7.89v16.65h2.5V41.29l13.65-7.89zM24.55 46.97L3.52 59.12l1.19-4.46-2.41-.64L0 62.6l8.58 2.3.65-2.42-4.46-1.19L25.8 49.14l-1.25-2.17zM36.91 4.79v20.72h2.5V4.79l3.26 3.26 1.77-1.77L38.16 0l-6.28 6.28 1.76 1.77 3.27-3.26zM72.96 53.39l-2.42.65 1.2 4.46-19.92-11.51-1.25 2.17 19.92 11.5-4.46 1.2.65 2.41 8.58-2.3-2.3-8.58z"/>
                </g>
              </g>
            </svg>
          </i>
          <h2 class="rfs-text-xl font-semibold -my-2 leading-none text-yellow1 mb-4">Deploy anywhere</h2>
          <p clsas="rfs-text-lg">Bring analytics to private data centers, public clouds, and the edge with simple, unified management.</p>
        </div>
        <div class="w-full md:w-1/3 px-24 sm:px-12 lg:px-24 mb-16 md:mb-0 text-center">
          <i class="inline-block mx-auto mb-4">
            <svg height="90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62.07 69.83">
              <g>
                <g>
                  <path fill="#fdbf14" d="M58.81 33.46h2.5v17.98h-2.5zM45.56 20.41h2.5v31.03h-2.5zM32.31 0h2.5v51.44h-2.5zM19.06 20.41h2.5v31.03h-2.5z"/>
                  <path d="M35.64 69.83A35.64 35.64 0 0123.45.7l.85 2.35A33.14 33.14 0 1060.21 56.4l1.86 1.68a35.72 35.72 0 01-26.43 11.75z" fill="#fff"/>
                </g>
              </g>
            </svg>
          </i>
          <h2 class="rfs-text-xl font-semibold -my-2 leading-none text-yellow1 mb-4">Save millions</h2>
          <p clsas="rfs-text-lg">Pay a fraction of other options cost via a choice of fixed-rate subscriptions.</p>
        </div>
      </div>
    </base-section>

    <base-section>
      <button @click="displayChart = !displayChart">
        <img alt="hybrid chart" src="/uploads/Yellowbrick-Architecture.png" />
        <span class="inline-flex items-center"><expand-arrows class="pr-2"></expand-arrows>(click to enlarge)</span>
      </button>
      
      <modal-dialog v-if="displayChart" @close="displayChart=false">
        <img alt="hybrid chart" src="/uploads/Yellowbrick-Architecture.png" />
      </modal-dialog>
    </base-section>
    
    <p class="rfs-text-sm text-center">Yellowbrick makes it easy to ingest, process, and query data for any SQL analytics use case</p>
    
    <base-section class="why-yellowbrick bg-gray-100">

      <h3 class="rfs-text-4xl mb-12">Why Yellowbrick?</h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 p-6 md:p-0">
        <div class="flex">
          <i>
            <svg class="w-full h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 483.02 511.56">
              <path fill="#fbbe18" d="M174.34 323.23l-11.06-16.93 73.21-47.84V115.58h20.22v153.83l-82.37 53.82z"/>
              <path d="M403.52.22l-19.75 4.39 12 53.83a248.64 248.64 0 00-134.55-40.11c-136 0-246.73 110.68-246.73 246.73s110.65 246.72 246.66 246.72h10.13l-.08-59.17h-20.23l.06 38.69a224.69 224.69 0 01-94.38-25.3L176 432.43l-17.52-10.11-19.32 33.46a228.18 228.18 0 01-68.68-68.73L104 367.73l-10.17-17.52-33.52 19.35A224.82 224.82 0 0135 275.22h38.71V255H35a224.77 224.77 0 0125.34-94.32L93.83 180 104 162.5l-33.54-19.33a228.29 228.29 0 0169-68.93l19.34 33.51 17.51-10.12-19.39-33.53A224.82 224.82 0 01251 38.81v38.78h20.2V39a228.31 228.31 0 01116.43 38.32l-58.34 13 4.39 19.75 89.84-20z" transform="translate(-14.49 -.22)" fill="#4b5459"/>
              <path fill="#fbbe18" transform="rotate(-30 436.882 185.922)" d="M420 148.89h49.04v20.23H420z"/>
              <path fill="#fbbe18" d="M433.98 254.77h49.04V275h-49.04z"/>
              <path fill="#fbbe18" transform="rotate(-60 437.109 383.666)" d="M434.41 346.71h20.23v49.04h-20.23z"/>
              <path fill="#fbbe18" transform="matrix(.87 -.5 .5 .87 -189.61 243.5)" d="M357.08 424.09h20.23v49.04h-20.23z"/>
            </svg>
          </i>
          <div>
            <h4 class="rfs-text-lg">Built for real-time insights</h4>
            <p class="rfs-text-base">Bulk-load/unload data in parallel at line speed and ingest streams at millions of rows/sec, with no impact on other workloads</p>
          </div>
        </div>
        <div class="flex">
          <i>
            <svg class="w-full h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 502.35 501.59">
              <path d="M199.21 506.8l-5.51-3.68c-.44-.29-1.74-1-3.68-2.15a734.46 734.46 0 01-104.24-72.75C26.39 378.54 4.83 297.77 4.83 255.61V72.09L199.26 5.2l194.43 66.89v95.39h-19.07V85.71L199.26 25.38 23.9 85.71v169.9c0 38.58 19.74 112.49 74.11 158a715 715 0 00101.25 70.69 714.45 714.45 0 00101.25-70.69A174.3 174.3 0 00317 397.76l14.06 12.9a196.48 196.48 0 01-18.34 17.55A733 733 0 01208.5 501c-1.94 1.13-3.24 1.87-3.82 2.25z" transform="translate(-4.83 -5.2)" fill="#4b5459"/>
              <path fill="#fbbe18" d="M333.48 327.5l-32.53-32.68-13.52 13.46 46.45 46.66 108.34-115.46-13.9-13.05-94.84 101.07z"/>
              <path fill="#fbbe18" d="M374 157.09c-73.44 0-133.19 59.75-133.19 133.2S300.54 423.48 374 423.48s133.19-59.75 133.19-133.19-59.77-133.2-133.19-133.2zm0 247.31a114.12 114.12 0 11114.1-114.11A114.24 114.24 0 01374 404.4z" transform="translate(-4.83 -5.2)"/>
            </svg>
          </i>
          <div>
            <h4 class="rfs-text-lg">Privacy by default</h4>
            <p class="rfs-text-base">At-rest data is encrypted automatically; includes support for fine- grained access control and data masking</p>
          </div>
        </div>
        <div class="flex">
          <i>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 403.19 503.34">
              <path fill="#fbbe18" d="M396.68 151.63l-43.87-44.87-13.38 13.08 15.47 15.82-24.03 24.04 13.23 13.23 23.88-23.89 15.32 15.67 13.38-13.08zM37.27 149.04l23.89 23.89 13.23-13.23-24.04-24.04 15.46-15.82-13.37-13.08-43.87 44.87 13.38 13.08 15.32-15.67z"/>
              <path fill="#fbbe18" d="M265.33 257.7a49 49 0 00-45 17.37l-165.22 13-.73 18.57 162.35 25.56c.65 1.05 1.35 2.06 2.07 3a48.82 48.82 0 1046.53-77.54zm22.61 52.73a30.13 30.13 0 01-56.88 9.08l-6.93-5.09-88.4-13.93 90.31-7.1 7-4.1a30.2 30.2 0 0154.87 21.14z" transform="translate(-54.4 -4.33)"/>
              <path d="M293.77 109.67V73h21.54V4.33H198.42V73h20v37.11A200.6 200.6 0 0062.59 256.26L80.71 261a182 182 0 01176.15-136c100.37 0 182 81.66 182 182s-81.65 182-182 182c-87 0-162.19-61.93-178.69-147.24l-18.38 3.55c18.2 94.1 101.08 162.4 197.07 162.4 110.68 0 200.74-90.05 200.74-200.73 0-98.11-70.72-179.93-163.83-197.31zM217.13 23h79.46v31.2h-79.46zm20 84.24V73h38v34.12c-6-.54-12.06-.86-18.2-.86-6.74-.05-13.32.37-19.85 1.02z" transform="translate(-54.4 -4.33)" fill="#4b5459"/>
            </svg>
          </i>
          <div>
            <h4 class="rfs-text-lg">Peak performance out of the box</h4>
            <p class="rfs-text-base">Run queries in milliseconds on billions of rows of data, with no need for indexes, partitions, or query tuning</p>
          </div>
        </div>
        <div class="flex">
          <i>
            <svg class="w-full h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 503.32 503.34">
              <path fill="#fbbe18" d="M265.27 124.71V37.36l22.53 22.53 12.2-12.2-43.36-43.36-43.36 43.36 12.2 12.2L248 37.36v104.33h8.63c45 0 87 27.36 104.63 68.08l15.84-6.85c-19.48-45.06-62.78-75.04-111.83-78.21zM263.86 474.64V370.33h-8.63c-43.68 0-85.23-27.4-103.4-68.19l-15.76 7c19.69 44.22 63.38 74.76 110.53 78.12v87.36l-22.52-22.53-12.21 12.2 43.36 43.36 43.36-43.36-12.2-12.2z" transform="translate(-4.97 -4.33)"/>
              <path fill="#4b5459" d="M125.35 247H38l22.53-22.52-12.2-12.18L5 255.66 48.33 299l12.2-12.2L38 264.29h104.31v-8.63c0-43.8 26.69-85.47 66.42-103.68l-7.19-15.69c-43.14 19.77-72.92 63.55-76.19 110.71zM464.94 212.93l-12.2 12.2 22.53 22.53H371v8.63a114.1 114.1 0 01-67.78 104.22l7 15.77a131.39 131.39 0 0077.75-111.37h87.34l-22.53 22.53 12.2 12.2 43.36-43.35z" transform="translate(-4.97 -4.33)"/>
            </svg>
          </i>
          <div>
            <h4 class="rfs-text-lg">Battle-tested for business continuity</h4>
            <p class="rfs-text-base">Includes rich database replication functionality for disaster recovery and high availability use cases</p>
          </div>
        </div>
        <div class="flex">
          <i>
            <svg class="w-full h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 502.59 489.47">
              <path d="M279.89 483.35l-86.78-71.82a2.62 2.62 0 00-2-.82 5 5 0 00-2 3.16 99 99 0 01-8.7 28.11c-12.73 23.08-36.11 33.75-64.35 29.88a83.46 83.46 0 01-68.95-61.42c-9.24-31.33 8.79-64.91 40.27-74.61a19.06 19.06 0 004.75-1.85l1.62-.72a1.85 1.85 0 001.09-.95 1.79 1.79 0 00.09-1.44 1.84 1.84 0 00-.75-1l-.8-.6L0 252.62l69.52-84.64c8.34-9.66 19.3-13.91 30.3-11.87s20.31 10.56 24.64 22.7c6.6 18.48 18.32 18.2 26.6 16.36a45.76 45.76 0 0016-8.12 40.51 40.51 0 0016.85-31.78c1.06-11.69-7.12-21.54-18.2-22.57a35.79 35.79 0 01-25.41-13.63 31.92 31.92 0 011.54-38.61c7.08-9 63.66-77.55 66.06-80.46l14.86 12.27c-.59.71-58.83 71.25-66 80.32a12.53 12.53 0 00-.93 15.14 16.21 16.21 0 0011.31 5.75 39.58 39.58 0 0136 43 59.1 59.1 0 01-24.44 46 65.38 65.38 0 01-23.05 11.46c-23.23 5.15-41-5.29-49.36-28.59-2-5.7-5.69-9.43-10-10.24-4.14-.79-8.38 1.13-12 5.35l-57.16 69.5 78.17 64.17a21.31 21.31 0 017.9 10.55 21.15 21.15 0 01-12.36 26.51 36.78 36.78 0 01-8.2 3.18c-21.04 6.48-33.34 29.36-26.97 50.89a64.31 64.31 0 0053.09 47.52c20.09 2.81 36-4.17 44.51-19.63a80 80 0 006.8-22.37 24.34 24.34 0 0113.23-17.81l1.37-.54a22 22 0 0122 5.41l85.49 70.66z" fill="#fbbe18"/>
              <path d="M287.3 489.46l-14.87-12.26 70.66-85.68a11.61 11.61 0 001.39-14.39 14.57 14.57 0 00-11.18-6.31 38 38 0 01-4.63-.54 39.64 39.64 0 01-32.06-45.86 66.34 66.34 0 0145.7-53.9 39.54 39.54 0 0149.53 24c.69 1.45 1.25 2.91 1.8 4.36a32.63 32.63 0 001.25 3.05 12.09 12.09 0 002.23 3.39 11.56 11.56 0 0016 .86l61.93-74.75-80.16-62a21.18 21.18 0 01-9.21-21.49 21.83 21.83 0 0115.46-16.85l5.55-1.86c17.55-5.29 28.75-20 28.95-37.62-.25-1.77-.41-3.35-.56-4.82a32.08 32.08 0 00-.52-4 65.31 65.31 0 00-52-51c-19-3.55-32.89 1-43.73 14.48a52.44 52.44 0 00-9.81 27.09c-1.2 9.71-6.64 17.38-14.25 20.55-7.18 3-15.3 1.64-22.25-3.74l-82-63.1 11.75-15.28 82.03 63.18c.51.38 2.24 1.57 3.09 1.2s2.17-2.17 2.48-4.63a71.47 71.47 0 0113.7-37c15.64-19.36 36.57-26.53 62.56-21.66a84.43 84.43 0 0167.25 65.85 50.68 50.68 0 01.88 6.18c.13 1.35.28 2.83.54 4.52l.11 1.44c.11 26.26-16.92 49.06-42.4 56.74l-5.69 1.9a2.79 2.79 0 00-2.22 2.06 2 2 0 001 1.83l.79.55 96.24 74.44-75.91 91.5a30.82 30.82 0 01-49.14-9.64 46 46 0 01-1.91-4.6c-.39-1-.75-2-1.26-3.05l-.46-1.08a20.42 20.42 0 00-25.69-12.62 47.17 47.17 0 00-32.54 38.52 20.44 20.44 0 0016.4 23.92 22.61 22.61 0 002.43.28 33.84 33.84 0 0126 14.79 30.72 30.72 0 01-2.83 37.75z" fill="#4b5459"/>
            </svg>
          </i>
          <div>
            <h4 class="rfs-text-lg">Based on industry standards</h4>
            <p class="rfs-text-base">ANSI SQL syntax and PostgreSQL front end for compatibility with enterprise BI and data motion tools</p>
          </div>
        </div>
        <div class="flex">
          <i>
            <svg class="w-full h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 398.22 501.36">
              <path fill="#fbbe18" d="M190.64 135.89h17.02v160.93h-17.02z"/>
              <path fill="#4b5459" d="M67.58 435.98h184.01V453H67.58zM67.58 338.24h184.01v17.02H67.58z"/>
              <path fill="#fbbe18" d="M296.51 435.98h32.92V453h-32.92zM296.51 338.24h32.92v17.02h-32.92z"/>
              <path fill="#4b5459" d="M434.17 506.68H78V391.89h356.17zM95 489.66h322.15v-80.75H95z" transform="translate(-56.89 -5.32)"/>
              <path fill="#4b5459" d="M434.17 408.91H78V294.12h356.17zM95 391.89h322.15v-80.76H95z" transform="translate(-56.89 -5.32)"/>
              <path fill="#fbbe18" d="M240.39 178.56l-41.24-41.24-41.24 41.24-12.03-12.03 53.27-53.27 53.27 53.27-12.03 12.03z"/>
              <path fill="#4b5459" d="M381.81 230.76h-66.13v-17h66.13a56.28 56.28 0 000-112.56l-12.09.47-2.31-13.33A69.6 69.6 0 00230.19 76l-4.32 18.28-16-9.79a49.62 49.62 0 00-75.54 42.4v15.31L118 141.07a36.26 36.26 0 00-7.36-.75 36.71 36.71 0 100 73.42h84.44v17h-84.46a53.73 53.73 0 010-107.46 56.33 56.33 0 016.74.42 66.62 66.62 0 0197.41-56 86.61 86.61 0 01169.42 16.52 73.29 73.29 0 01-2.38 146.54z" transform="translate(-56.89 -5.32)"/>
            </svg>
          </i>
          <div>
            <h4 class="rfs-text-lg">Fast, easy migrations</h4>
            <p class="rfs-text-base">Migrations are fast and easy from any legacy platform. We’ll work with you to validate your use cases and success metrics.</p>
          </div>
        </div>
      </div>
    </base-section>

    <base-section class="bg-gray-500 text-white">


      <h3 class="accent-heading rfs-text-4xl text-white">Get More Information</h3>
      <div class="flex flex-col sm:flex-row flex-wrap -mx-4 md:-mx-8">
        <div class="w-full sm:w-1/2 lg:w-1/3 p-4 md:p-8">
          <img src="/uploads/thumb-brief-technical-overview.png" alt="Yellowbrick technical overview image" class="w-7/12 shadow-md border-4 border-white" />
          <h5 class="my-6">Yellowbrick Technical Overview</h5>
          <a href="/resources/briefs/technical-overview/" class="arrow flex items-center text-teal text-xl">Read Now <icon-arrow-right class="ml-2"></icon-arrow-right></a>
        </div>

        <div class="w-full sm:w-1/2 lg:w-1/3 p-4 md:p-8">
          <img src="/uploads/yellowbrick-data-warehouse-architecture-thumb.png" alt="Eeconomics of yellowbrick data warehouse image" class="w-7/12 shadow-md border-4 border-white" />
          <h5 class="my-6">Yellowbrick Data Warehouse Architecture</h5>
          <a href="/go/yellowbrick-data-warehouse-architecture/" class="arrow flex items-center text-teal text-xl">Read Now <icon-arrow-right class="ml-2"></icon-arrow-right></a>
        </div>

        <div class="w-full sm:w-1/2 lg:w-1/3 p-4 md:p-8">
          <img src="/uploads/yellowbrick_dw_economics-thumb.jpg" alt="Eeconomics of yellowbrick data warehouse image" class="w-7/12 shadow-md border-4 border-white" />
          <h5 class="my-6">Economics of Yellowbrick Data Warehouse</h5>
          <a href="/resources/briefs/economics-of-yellowbrick-data-warehouse/" class="arrow flex items-center text-teal text-xl">Read Now <icon-arrow-right class="ml-2"></icon-arrow-right></a>
        </div>


        <div class="w-full sm:w-1/2 lg:w-1/3 p-4 md:p-8">
          <img src="/uploads/ds-data-warehouse-thumb.jpg" alt="netezza migration guide image" class="w-7/12 shadow-md border-4 border-white" />
          <h5 class="my-6">Yellowbrick Data Warehouse Datasheet</h5>
          <a class="arrow flex items-center text-teal text-xl" href="/resources/data-sheets/yellowbrick-data-warehouse-overview/">Read Now <icon-arrow-right class="ml-2"></icon-arrow-right></a>
        </div>

        <div class="w-full sm:w-1/2 lg:w-1/3 p-4 md:p-8">
          <img src="/uploads/thumb-data-lake-augmentation.png" alt="build a data lakehouse with yellowbrick image" class="w-7/12 shadow-md border-4 border-white" />
          <h5 class="my-6">Build a “data lakehouse” with Yellowbrick</h5>
          <a href="/resources/briefs/yellowbrick-data-lake-augmentation/" class="arrow flex items-center text-teal text-xl">Read Now <icon-arrow-right class="ml-2"></icon-arrow-right></a>
        </div>
      </div>
    </base-section>

    <base-section class="partner-ecosystem bg-black">
      <h3 class="rfs-text-4xl text-white">Partner ecosystem</h3>
      <p class="rfs-text-xl text-white">Yellowbrick Data partners offer best-of-breed solutions for BI/data visualization, security, data motion, and consulting and integration, complementing Yellowbrick Data Warehouse’s industry-leading speed and flexibility. The ecosystem is growing fast, so check back here often for updates.</p>
      <div class="grid grid-cols-2 md:grid-cols-5 gap-x-20 gap-y-0 p-6 md:p-0">
        <img alt="coffing logo" src="/uploads/partners-coffing.svg" />
        <img alt="attunity logo" src="/uploads/partners-attunity.svg" />
        <img alt="dbeaver logo" src="/uploads/partners-dbeaver.svg" />
        <img alt="denodo logo" src="/uploads/partners-denodo.svg" />
        <img alt="emtec logo" src="/uploads/partners-emtec.svg" />
        <img alt="icedq logo" src="/uploads/partners-icedq.svg" />
        <img alt="nexla logo" src="/uploads/partners-nexla.svg" />
        <img alt="nextpathway logo" src="/uploads/partners-nextpathway.svg" />
        <img alt="sas logo" src="/uploads/partners-sas.svg" />
        <img alt="striim logo" src="/uploads/partners-striim.svg" />
      </div>
      <a class="arrow rfs-text-xl text-yellow1 flex items-center" href="/company/partners/">View our partners<icon-arrow-right class="ml-2"></icon-arrow-right></a>
    </base-section>

  </Layout>
</template>

<script>
import BaseSection from "../../components/BaseSection";
import ExpandArrows from "~/components/icons/ExpandArrows.vue";
import IconArrowRight from "~/components/icons/IconArrowRight.vue";
import ModalDialog from "~/components/ModalDialog.vue";

export default {
  metaInfo: {
    title: 'Yellowbrick Data Warehouse',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: 'Yellowbrick’s hybrid cloud data warehouse offers Industry-leading price/performance for ad hoc analytics on real-time data'
      },
      {
        key: 'og:description',
        name: "og:description",
        content: 'Yellowbrick’s hybrid cloud data warehouse offers Industry-leading price/performance for ad hoc analytics on real-time data'
      },
      {
        key: 'twitter:description',
        name: 'twitter:description',
        content: 'Yellowbrick’s hybrid cloud data warehouse offers Industry-leading price/performance for ad hoc analytics on real-time data'
      },
      {
        key: 'og:title',
        name: 'og:title',
        content: 'Yellowbrick Data Warehouse'
      },
      {
        key: 'twitter:title',
        name: 'twitter:title',
        content: 'Yellowbrick Data Warehouse'
      }
    ]
  },
  components: {
    BaseSection,
    ExpandArrows,
    IconArrowRight,
    ModalDialog,
  },
  data() {
    return {
      displayChart: false
    }
  },
}
</script>
