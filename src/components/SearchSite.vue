<template>
  <div class="text-gray-700">
    <input
      ref="input"
      id="search-site"
      v-model="q"
      type="search"
      placeholder="Search Yellowbrick"
      class="border border-gray-700 rounded-sm rfs-text-base rfs-px-2 rfs-py-1 bg-gray-700 text-gray-300"
      @input="search"
      @focus="search"
      @keydown.esc="results = null"
      @keydown.down="selectionMove(1)"
      @keydown.up="selectionMove(-1)"
      @keydown.enter="$router.push(results[selectedIndex].link)"
    />
    <div v-if="results" class="bg-white md:absolute left-0 rounded shadow-1xl sm:min-w-300 md:min-w-400 lg:min-w-600 max-w-600 overflow-y-auto" style="max-height: 70vh; top: 100%;">
      <div
        class="rfs-py-4 rfs-px-1"
        v-for="(result, index) in results"
        :key="index"
        :class="{ 'bg-gray-200': selectedIndex === index }"
        :id="`result-${index}`"
        @mousemove="selectedIndex = index"
      >
        <g-link class="flex" :to="result.link">
          <div class="flex flex-col w-1/5">
            <img v-if="result.image" :src="result.image" class="shadow rfs-m-1" />
            <div v-else class="rfs-m-1 text-gray-100" />
          </div>
          <div class="flex flex-col ml-2 w-4/5">
            <p v-html="result.title" class="font-semibold leading-tight m-0" />
            <cite v-text="origin + result.link" class="text-blue rfs-text-sm leading-none rfs-py-2" />
            <p v-html="result.content.substring(0, 300)" class="rfs-text-sm line-limit-3 font-light mb-0 leading-tight" style="max-lines: 3" />
          </div>
        </g-link>
      </div>
      <div v-if="results.length === 0">No results.</div>
    </div>
  </div>
</template>

<script>
import Flexsearch from 'flexsearch'
import slugify from '@sindresorhus/slugify'
import unified from 'unified'
import markdown from 'remark-parse'
import html from 'rehype-parse'
import toString from 'mdast-util-to-string'

export default {
  data: () => ({
    index: null,
    q: '',
    results: null,
    selectedIndex: 0
  }),
  beforeMount() {
    this.index = new Flexsearch({
      doc: {
        id: 'id',
        field: ['title', 'content']
      }
    })
    this.index.add(
      this.$static.allBlog.edges.map(blog => {
        return {
          id: blog.node.id,
          type: 'blog',
          image: blog.node.coverImage,
          link: blog.node.path,
          title: blog.node.title,
          date: blog.node.date,
          content: toString(
            unified()
              .use(markdown)
              .parse(blog.node.content)
          )
        }
      })
    )
    this.index.add(
      this.$static.team.members.map((member, index) => {
        return {
          id: this.$static.team.id + index,
          type: 'team',
          image: member.photo,
          link: `/company/#${slugify(member.name)}`,
          title: member.name,
          date: null,
          content: toString(
            unified()
              .use(html)
              .parse(member.body)
          )
        }
      })
    )
    const products = [
      { title: 'Data Warehouse Appliance', link: '/products/data-warehouse/', content: 'Replace racks of hardware with an easy to manage turn-key appliance. Yellowbrick delivers an optimized analytic database and advanced software that eliminates tasks that consume hours of IT and DBA staff time, all while improving service and insight quality.' },
      { title: 'Cloud Data Warehouse', link: '/products/data-warehouse/', content: 'Introducing the Yellowbrick Cloud Data Warehouse – overcome the scale, cost and performance challenges posed by traditional cloud data warehouses. Multi-cloud support allows customers to connect multiple public and private clouds to a single Yellowbrick Cloud Data Warehouse. Support the applications, users and public clouds of your choice.' },
      { title: 'Cloud Disaster Recovery', link: '/products/cloud-disaster-recovery', content: 'Introducing Yellowbrick Cloud Disaster Recovery—A low cost service providing up-to-date, automatic, replicated copies of Yellowbrick databases in the cloud.' },
      { title: 'Hybrid Cloud Architecture', link: '/products/hybrid-cloud-architecture', content: 'Our “cloud-smart” approach makes other options look slow, inflexible, unpredictable, and expensive by enabling lightning-fast analytics on any private and/or major public cloud, with no hidden cloud fees or lock-in.' },
      { title: 'Data Lake Augmentation', link: '/solutions/data-lake-augmentation/', content: 'Yellowbrick augments the data lake with a modern, real-time enterprise analytics environment that is purpose-built for enabling analysts and data scientists to answer the hardest questions, accurately and within SLA windows, using their favorite tools.' },
      { title: 'Data Warehouse Modernization', link: '/solutions/data-warehouse-modernization/', content: 'ellowbrick provides an innovative data warehousing platform for on-premises, hybrid, and multi-cloud deployments that eliminates the performance/scale limitations of legacy approaches. And, it’s designed to simplify operations to keep long-term costs under control.' },
      { title: 'Netezza Replacement', link: '/netezza/', content: 'Yellowbrick breaks that pattern by offering a standards-based solution that not only improves on Netezza performance (by up to 100X) and scale (to thousands of users and multiple PBs) at a fraction of the cost, but makes the migration process fast and easy-- you can be up and running in days, not weeks or months, thanks to Yellowbrick\'s Postgres frontend.' },
      { title: 'Teradata Migration', link: '/teradata/', content: 'Yellowbrick is built to manage large datasets, on the scale of petabytes, with up to 10X faster performance than your Teradata system and thousands of users querying data concurrently. Yellowbrick’s hybrid cloud architecture enables your users to run workloads both on-premises and in the cloud from any major public cloud. ' },
      { title: 'Industry Solutions', link: '/solutions/industries/', content: 'Yellowbrick serves many industries, including: Government, Financial Services, Banking, Insurance, Retail, Telecom, Life Sciences, and Analytics.' },
      { title: 'Solutions for Financial Services', link: '/solutions/financial-services/', content: 'The financial services industry is undergoing a digital transformation as consumers and even businesses demand a fully integrated customer experience across all channels, from social media and other digital channels to in-person conversations. Yellowbrick Data Warehouse delivers 100X performance at enterprise scale whether in a data center or through a major public cloud, while avoiding the risks and unpredictable costs of cloud-only options.' },
      { title: 'Solutions for Federal Systems', link: '/solutions/federal/', content: 'The world’s fastest data warehouse for hybrid and multi-cloud environments gives Federal customers the industry-leading, real-time performance and scalability they need for mission-critical applications.' },
      { title: 'Solutions for Retail', link: '/solutions/retail/', content: 'The Yellowbrick Data Warehouse provides a path for retailers to safely transform their data and analytics infrastructure while leveraging existing systems and data sources.' },
      { title: 'Solutions for Insurance', link: '/solutions/insurance/', content: 'The Yellowbrick Data Warehouse is ideal for addressing the data analysis complexities and speed the insurance industry requires. It allows organizations to build a real-time, standards-based analytics platform that leverages existing tools, models, and investments in the cloud or on-premises, while providing breakthrough price/performance and flexibility far beyond what legacy platforms like IBM Netezza and Teradata, or cloud-only options like Snowflake, can provide.' },
      { title: 'Solutions for Telecommunications', link: '/products/telecom/', content: 'Whether the need is to optimize the customer experience, generate profitable business decisions from data trapped in of data lakes, or take full advantage of all the possibilities of new 5G networks, the Yellowbrick Data Warehouse delivers an unfair competitive advantage.' },
      { title: 'Customer: ThreatMetrix', link: '/resources/case-studies/lexisnexis/', content: 'One of the key business applications of ThreatMetrix (a LexisNexis Risk Solution), a global digital fraud and identity-authentication service, is an online portal accessed by thousands of users around the world.' },
      { title: 'Customer: Catalina Marketing', link: '/resources/case-studies/catalina/', content: 'Catalina Marketing is the market leader in shopper intelligence and targeted in-store and digital media. The company delivers $6.1 billion in consumer value annually, combining the richest buyer history database in the world with its own deep analytics and insights to help retailers, CPG brands, and agencies optimize every stage of media planning, execution, and measurement.' },
      { title: 'Customer: Clarity', link: '/customers/', content: 'Clarity Innovations provides analytic software the US Intelligence Community (IC) uses to support missions to keep the nation safe. The disk-based solution couldn\'t return data as fast as needed. Yellowbrick Data Warehouse came in and allowed them to measure work in minutes, not hours.' },
      { title: 'Customer: Symphony RetailAI', link: '/resources/case-studies/symphony-retail-AI/', content: 'Symphony RetailAI helps retailers and CPG manufacturers drive profitable revenue growth through AI-enabled decision-making. Its customers include 15 of the world’s 25 largest grocery retailers, thousands of retail brands, and hundreds of national and regional chains, who rely on Symphony RetailAI to transform their raw transaction data into actionable insights for personalized marketing, merchandising and category management, supply chain and retail operations, and more.' },
      { title: 'Customer: Teoco', link: '/resources/case-studies/teoco/', content: 'TEOCO embarked on a project to evaluate next generation data warehousing solutions, an evaluation that included the latest solutions from established vendors such as IBM, to startups including Yellowbrick Data. TEOCO’s proof-of-concept approach was an exhaustive, three-month process that, for most vendors, showed only modest performance improvements while revealing many issues around migration, data load and systems portability. Yellowbrick was the exception.' },
      { title: 'Customer: Top 10 Financial Services', link: '/resources/case-studies/top-financial-services-company/', content: 'This customer is a multinational financial services corporation and member of the S&P 100, with hundreds of billions of dollars in annual revenue. Every day, the company must capture millions of transactions and analyze petabytes of data across its partner and co-branding programs, merchant services, reward points programs, and more. Thousands of analysts across the company require immediate access to this data throughout the day—via both ad-hoc, interactive queries and prebuilt reports.' },
      { title: 'Customer: Top Global Insurance Company', link: '/resources/case-studies/top-global-insurance-company/', content: 'After extensive testing and evaluation, in August 2019, the company chose Yellowbrick over Greenplum, and others for its data warehouse transformation project. During testing, Yellowbrick proved out its ability to enable complex and high-performance data analysis of billions of rows of data (including numerous complex table associations), data consistency, interactive ad hoc, and 24/7 availability. An implementation project began shortly thereafter in coordination with Accenture.' },
      { title: 'Customer: Hospitality and Casino', link: '/resources/case-studies/hospitality-and-casino/', content: 'A top hospitality and casino company chose Yellowbrick Data Warehouse to transform their digital environment into a high-performance powerhouse, while also complementing hadoop and existing applications.' },
      { title: 'Customer: Top Telecom Company', link: '/resources/case-studies/top-telecom-company/', content: 'A top telecom company and mobile operator struggled with explosive growth in data volumes across its organization. The company depends on insights from billions of records. For years, the company used IBM Netezza, but it struggled to keep up. Yellowbrick was able to process more records faster and give deeper, more efficient insights.' },
      { title: 'Faster Insights for Insurance Companies', link: '/go/yellowbrick-for-insurance/', content: 'A hybrid cloud approach helps protect your insurance company’s unique analytics investments and existing infrastructure while moving toward a more flexible, cloud-based future.' },
      { title: 'Faster Insights for Retail Companies', link: '/go/yellowbrick-for-retail/', content: 'Retail industry success is driven by volume and speed, yet most existing retail systems are not able to keep up. Learn how to modernize your data warehouse to get the scale and speed you need to keep your customers satisfied and your business profitable.' },
      { title: 'Yellowbrick for Banking and Financial Services', link: '/go/yellowbrick-for-banking-and-financial-services/', content: 'Banks and financial services firms are more dependent than ever on effective and efficient data analytics. Learn how to modernize your data warehouse and turn large, complex data sets into profitable business decisions.' },
      { title: 'Faster Insights for Telecommunications Companies', link: '/go/yellowbrick-for-telecom/', content: 'Telecommunications companies face critical pressure points that require more data and data analytics than ever before. With competitive pricing pressures, subscriber growth issues and 5G network buildouts, it is more important than ever to ensure your telecom company can turn large, complex data sets into profitable business decisions.' },
      { title: 'Migrate Teradata Workloads to Yellowbrick for 10X Performance at a Fraction of the Cost', link: '/go/migrate-teradata-workloads-to-yellowbrick/', content: 'Teradata is an established legacy data warehouse that has been around for decades. Their new offering has changed in name only while the underlying infrastructure has not.' },
      { title: 'Replacing Netezza', link: '/go/replacing-netezza/', content: 'Netezza was introduced in 2003 and enabled organizations to analyze more data, faster. Unfortunately, Netezza has not kept up with innovation and never made the leap to the cloud. Since IBM acquired Netezza, there has been inconsistency with their plans leaving many customers confused.' },
      { title: 'Turbocharge Your Data Lake', link: '/go/turbocharge-your-data-lake/', content: 'Data Lakes are effective low-cost repositories for vast amounts of data. But when it comes to delivering business insights, data lakes are slow and provide unreliable analytics at scale.' },
      { title: 'Modernizing Your Data Warehouse for Hybrid Cloud Analytics', link: '/go/modernizing-your-data-warehouse-for-hybrid-cloud-analytics/', content: 'For most organizations, data warehouses are more critical than ever. But all too often, they’re also no longer able to keep up to the task. They are simply too inflexible. They’re too hard to scale. They’re too expensive to scale. They require too many technical resources to manage and update. And they’re too hard to manage in the face of modern requirements such as huge data volumes, growing numbers of users, increasingly complex queries, and real-time data.'},
      { title: 'Unlocking the Value of Data Lakes', link: '/go/unlocking-the-value-of-data-lakes/', content: 'Many large companies today have invested in some form of data lake to get value from them in the form of real-time analytics. Unfortunately, that promise has failed to materialize. As a result, most data lake owners have discovered that while their investments are very effective for storing vast amounts of raw data, most fall short for meeting the main requirement for doing real-time, large-scale analytics.'},
      { title: 'Analytics and Cloud Infrastructure Spending During Disruption', link: '/go/research-survey-whitepaper/', content: 'The world has changed dramatically since March 2020. The rapid spread of the novel coronavirus and its resulting illness, COVID-19, have completely altered business, personal, and social life for the immediate future. To better understand the immediate impact of all these unprecedented changes on businesses and their IT infrastructures, Yellowbrick Data recently surveyed 1000 enterprise IT managers and executives to uncover their infrastructure priorities during this era of economic uncertainty and disruption.'},
      { title: 'Key Trends in Hybrid, Multicloud and Distributed Cloud for 2021', link: '/go/key-trends-research/', content: 'To better understand the impact of unprecedented changes on businesses and their IT infrastructures, Yellowbrick Data surveyed enterprise IT managers and executives and uncovered their data warehousing and analytics priorities. The survey revealed some initially surprising results, given all the challenges that organizations are coping with.'},
      { title: 'The Strategic Advantages of Hybrid Cloud Data Warehousing', link: '/go/strategic-advantages-of-hybrid-cloud-data-warehousing-451-research/', content: 'Today, hybrid cloud is viewed not only as the logical and inevitable consequence of an abundance of choice in relation to computing and data storage location options, but also as a strategic imperative that enables enterprises to make the most efficient use of the variety of infrastructure location options.'},
      { title: 'Modernize Your Data Warehouse for Faster, Deeper Insights', link: '/go/modernize-your-data-warehouse/', content: 'Learn about how Yellowbrick’s hybrid cloud approach and how modernizing your data warehouse will improve query performance and reduce overall data center costs.'},
      { title: 'Replace SQL Server Sprawl with Yellowbrick - Save Time and Money', link: '/sql-server-consolidation/', content: 'Sometimes less is more. It’s hard to deliver on world-class performance, reduce costs, decrease maintenance requirements, meet SLAs, and reduce security risks when too many moving parts - like dozens, scores, or even hundreds of Microsoft SQL Server databases—are involved, with each of them requiring significant maintenance, management, and resources.'}
    ]
    this.index.add(
      products.map((product, index) => {
        return {
          id: 'product-' + index,
          type: 'product',
          title: product.title,
          link: product.link,
          image: product.image,
          content: product.content
        }
      })
    )
  },
  computed: {
    origin() {
      return location.origin
    }
  },
  methods: {
    search() {
      if (this.index === null || this.q.length < 1) {
        this.results = null
      } else this.results = this.index.search({ query: this.q })
    },

    selectionMove(dir) {
      const delta = dir + this.selectedIndex
      if (delta < 0) this.selectedIndex = 0
      else if (this.results && this.results.length <= delta) this.selectedIndex = this.results.length - 1
      else this.selectedIndex = delta
      document.getElementById(`result-${this.selectedIndex}`).scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' })
    }
  }
}
</script>

<static-query>
  query Blog {
    allBlog {
      edges {
        node {
          id
          title
          date(format: "DD MMM YYYY")
          path
          coverImage
          content
        }
      }
    }
    team: pages(path: "/data/pages/team") {
      path
      id
      members {
        name
        position
        photo
        body
      }
    }
  }
</static-query>
