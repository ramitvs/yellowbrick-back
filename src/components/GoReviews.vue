    <template>
        <div>
            <ClientOnly>

                <VueScriptComponent script='

                <style>
                .gartner-pi-link:hover {
                background-image: none !important;
                }
                .gartner-pi-reviews-link {
                display:none;
                }
              .g2_widget      ,.g2-pi-header {
                color:black;
                }
                .custom-hbst {
                cursor: pointer;
                }
                .gartner-pi-sourcing-link a:hover {
                background-position: 0% !important;
                }
                .g2_submit:hover {
                color: #FFCD32 !important;
                color: rgba(255, 205, 50, var(--text-opacity)) !important;
                }
                .hs-input {
                max-width: 300px !important;
                border: 1px solid #dedede;
                height: 40px;
                background: #80808017;
                }
                .gartner-pi-sourcing-link a {
                border-bottom: 0px !important;
                color: none !important;
                background-position: none !important;
                }
                .gartner-pi-link {
                background-image: none !important;
                }
                .hbspt-form form {
                display: flex;
                }
                .custom-hbst {
                background-color: #ffcd32;
                padding-top: 6px;
                padding-bottom: 7px;
                padding-left: 6px;
                padding-right: 6px;
                }
                @media screen and (min-width: 768px) and (max-device-width: 1172px) {
                div#gartner-pi-widget-MDM5NDZjOWEtMWY1Yi00NDNjLWFkZWItMTY0YTBjNGQzNjBk {
                width: 100% !important;
                }

                .hbspt-form {
                width: 100% !important;
                }
                }
                .hydrated.rw-badge2 {
                position: inherit;
                width:300px;
                }
                .hbspt-form {
                width:300px;
                }
                .hydrated.rw-badge2 .container {
                border-radius: 0px;
                box-shadow: 1px solid white;
                margin: 0px;
                }
                ul.no-list.hs-error-msgs.inputs-list {
                width: 100%;
                list-style-type: none;
                padding-left: 0;
                padding-top: 4px;
                color: red;
                }
                @media only screen and (max-width: 768px) {
                div#gartner-pi-widget-MDM5NDZjOWEtMWY1Yi00NDNjLWFkZWItMTY0YTBjNGQzNjBk {
                width: 100%;
                }
                .hydrated.rw-badge2 {
                width: auto !important;
                }
                .hbspt-form {
                width: auto !important;
                }
                .background-square1 {
                width:100%!important;
                color:black;
                }
                }
                ul.no-list.hs-error-msgs.inputs-list li {
                width: 100%;
                }
                .reviews-num {
                display:none;
                }
                .container {
                position: relative;
                border-width: 1px;
                border-style: solid;
                border-radius: 0px;
                box-shadow: 1px solid white;
                margin: 0px;
                }

                .hydrated.rw-badge2 {
                width: 300px;
                }
                .hs_error_rollup {
                position: absolute;
                width: 100%;
                }

                .input input {
                position: relative;
                z-index: 9;
                }
                label.hs-main-font-element {
                display: none;
                }

                .gartner-pi-card .gartner-pi-as-of-date {
                -webkit-transform: inherit !important;
                }
                .g2-pi-header h6 {
                font-size: 13px;
                letter-spacing: .3px;
                line-height: normal;
                margin: 0 0 35px;
                font-weight: 300;
                }

                .background-square1 {
                background-color: white;
                border: 1px solid #dedede;
                padding: 12px;
                width: 300px;
                }
                .g2-pi-header h5 {
                font-size: 22px;
                margin: 20px 0 3px 0;
                line-height: normal;
                font-weight: 500;
                }

                .star {
                font-size: 24px;
                color: #f2c71a;
                }

                .value {
                font-size: 1.5em;
                font-weight: 500;
                margin-right: 8px;
                }

                .widget.container .rating.star {
                font-size: 24px;
                color: #f2c71a;
                }

                .widget.container .rating.value {
                font-size: 1.5em;
                font-weight: 500;
                margin-right: 8px;
                }
                @media screen and (min-width: 769px) and (max-device-width: 1173px) {
                .background-square1 {
                width: 100% !important;
                }
                }
                .rating_number {
                margin-left: 10px;
                margin-right: 8px;
                font-family: Roboto;
                font-weight: 400;
                font-size: 24px;
                }

                .gartner-pi-star-rating1 {
                display: inline-block;
                background: url(/uploads/stars.png) repeat-x 0 0;
                margin-top: -14px;
                height: 20px;
                width: 100px;
                background-size: 20px;
                }

                .gartner-pi-star-rating-score1 {
                display: inline-block;
                background: url(/uploads/stars.png) repeat-x 0 -16px;
                height: 20px;
                background-size: 20px;
                background-position: 0 -20px;
                }
                </style>' />
                <VueScriptComponent script='<script type="application/javascript"
                src="https://www.gartner.com/reviews/public/Widget/js/widget.js">
                </script>
                <script type="application/javascript">
                GartnerPI_Widget({
                size: "small",
                theme: "light",
                sourcingLink: "https://gtnr.io/FlyPtAx1l",
                widget_id: "MDM5NDZjOWEtMWY1Yi00NDNjLWFkZWItMTY0YTBjNGQzNjBk",
                version: "2",
                container: document.getElementById("widget-container"),
                })
                </script>' />
                <br />
                <div id="widget-container"></div>
                <br />
                <div>

                <div class="background-square1">
                <div><img style="float:right" src="/uploads/logo-g2crowd.png" /></div>
                <a target="_blank" href="https://www.g2.com/products/yellowbrick-data-yellowbrick/reviews?utm_source=review-widget">
                <div class="g2-pi-card">
                <div class="g2-pi-header">
                <h5>Yellowbrick</h5>
                <h6>The data warehouse for distributed clouds</h6>
                </div>
                </div>
                <div class="g2_widget"><span class="rating_number">4.9</span><span class="stars"><span class="gartner-pi-star-rating1"><span class="gartner-pi-star-rating-score1" style="width: 96%;"></span></span></span></div>
                </a>
                <div style="color: #4b6cc9; float:right;font-size: 14px; font-weight: 500; position: relative; margin-top: -25px;"><a target="_blank" href="https://www.g2.com/products/yellowbrick-data-yellowbrick/reviews?utm_source=review-widget" class="g2_submit">Submit a review <span style="display: inline-block;"><img src="/uploads/right.png"></span></a></div>
                <!-- End widget code -->
                </div>
                </div>
            </ClientOnly>
        </div>
    </template>

    <div id="widget-container"></div>
<script>
    export default {
        components: {
            VueScriptComponent: () =>
                import('vue-script-component'),
        },
    }
</script>
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
