<style scoped>
  .numbered-list {
    counter-reset: item;

    & li.numbered {
      display: block;
    }

    & li.numbered:before {
      content: counters(item, ".") ". ";
      counter-increment: item;
      margin-right: 1rem;
      font-weight: bold;
    }

  }

  .alpha-list {
    list-style-type: lower-alpha;
    counter-reset: item;

    & li.alpha-item {
      display: flex;
    }

    & li.alpha-item:before {
      content: '(' counter(item, lower-alpha) ')';
      counter-increment: item;
      margin-right: 1rem;
      font-weight: bold;
    }

  }




</style>

<template>
  <Layout>
    <section class="flex py-24 px-12">
      <div class="flex flex-col items-start max-w-1200 mx-auto">
        <h4 class="mb-6">YELLOWBRICK END USER LICENSE AGREEMENT FOR SOFTWARE AND SUBSCRIPTION SERVICES</h4>
        <p>Please read this document carefully before proceeding. By clicking on the “I Accept” or “Agree” button or
          accessing or using the Yellowbrick software and subscription services (the first to occur being the <strong>“Effective
            Date”</strong>), you are agreeing to the terms of this end user license agreement
          (<strong>“Agreement”</strong>).</p>
        <p>This is a legal agreement between you <strong>(“Customer”)</strong> and Yellowbrick Data, Inc., a Delaware
          corporation with offices at 250 Cambridge Avenue, Suite 300, Palo Alto, CA 94306
          <strong>(“Yellowbrick”)</strong>. If you are
          entering into this Agreement on behalf of an entity, then you represent and warrant that you have the
          authority to bind that entity to this Agreement. As used herein, each of Yellowbrick and Customer may be
          referred to as a <strong>“Party”</strong> and collectively as the <strong>“Parties.”</strong> If you or your
          Company has previously accepted the
          most recent version of this Agreement, you are not required to re-accept or re-agree to this Agreement. If you
          are in doubt, click “I Accept” or “I Agree”.</p>
        <p>This Agreement governs your use of Yellowbrick’s various software products, including any updates and
          upgrades Yellowbrick implements thereto (<strong>“Licensed Software”</strong>) and Yellowbrick’s cloud-based
          subscription
          service and any other service made available now or in the future (<strong>“Subscription Service”</strong>)
          (together the
          <strong>“Solution”</strong>).</p>
        <ol class="numbered-list">
          <li class="numbered">
            <strong>LICENSE GRANT AND RESTRICTIONS</strong>
            <ol class="numbered-list">
              <li class="numbered"><strong>License Grant.</strong> Subject to the terms and conditions of this
                Agreement, Yellowbrick
                hereby grants to Customer a non-exclusive, non-sublicensable, non-assignable license to use the
                Solution,
                in object code form, provided to Customer by subscription.
              </li>
              <li class="numbered"><strong>Additional Restrictions.</strong> Customer shall not, and shall not permit
                any third party,
                including any parent, subsidiary, affiliate, or agent of Customer, to:
                <ol class="alpha-list">
                  <li class="alpha-item">assign, sell, lease, distribute, license, sublicense or otherwise transfer or
                    attempt to transfer
                    rights to the Solution;
                  </li>
                  <li class="alpha-item">extract, reverse engineer, decompile, disassemble or otherwise attempt to
                    derive source code or algorithms from the Solution, except to the extent expressly permitted by
                    applicable law notwithstanding this restriction;
                  </li>
                  <li class="alpha-item">modify, translate, or create derivative works, adaptations or compilations of,
                    or based on, any part of the Solution;
                  </li>
                  <li class="alpha-item">remove or otherwise interfere with any part of the Solution designed to monitor
                    Customer’s compliance with this Agreement;
                  </li>
                  <li class="alpha-item">copy the Solution, in whole or in part, except as specifically authorized by
                    this Agreement;
                  </li>
                  <li class="alpha-item">remove any proprietary notices or labels on or in any of the Solution; or</li>
                  <li class="alpha-item">use the Solution for operations of any type on aircraft, ships, nuclear plants,
                    life support machines, communications systems or any other equipment in which the malfunctioning of
                    the Solution could lead to personal injury, death or environmental damage.
                  </li>
                </ol>
              </li>
              <li class="numbered"><strong>Reservation of Rights.</strong> Except for the limited rights granted in
                Section 1.1, Yellowbrick retains all right, title and interest in and to the Solution, and all
                intellectual property rights therein and thereto. Nothing in this Agreement shall constitute a transfer
                of any ownership rights by Yellowbrick to Customer in the Solution or otherwise. All rights in the
                Solution not expressly granted hereunder are reserved by Yellowbrick and its licensors. Notwithstanding
                the foregoing, if and to the extent that the Solution contains any open source software components, such
                components are licensed to Customer under the terms of the applicable open source license, and this
                Agreement is not intended to limit any rights granted to Customer under such open source license.
                Applicable copyright notices and open source or similar licensing terms can be found at
                Yellowbrick.com/opensource/disclosure.
              </li>
              <li class="numbered"><strong>Processing of any Personal Data.</strong> To the extent that Yellowbrick
                receives, or is processing personal data of Customer or on Customer’s behalf in a capacity as data
                processor, Customer will ensure that it has secured all necessary consents, registrations and
                notifications as may be required to enable the lawful transfer of the personal data to Yellowbrick and
                in order for Yellowbrick to process such personal data to the extent required for, and for the duration
                of, Yellowbrick’s provision of the Solution to the Customer. Yellowbrick’s use of any such data shall be
                subject Yellowbrick’s Privacy Policy which can be found at Yellowbrick.com.
              </li>
              <li class="numbered"><strong>Updates.</strong> During the term of this Agreement, Yellowbrick may update
                the Solution to reflect changes in, for instance, laws, regulations, technology, industry practices and
                patterns of use. Any updates will not materially reduce the level of performance, functionality,
                security or availability of the Solution.
              </li>
            </ol>
          </li>
          <li class="numbered">
            <strong>DISCLAIMERS AND LIMITATIONS OF LIABILITY</strong>
            <ol class="numbered-list">
              <li class="numbered"><strong>Warranty.</strong> Yellowbrick warrants that the Solution will conform in all
                material respects with Yellowbrick’s published specifications for the term of the Subscription Services
                purchased by Customer. The Subscription Services shall include the provision of error corrections,
                improved usability, improved performance, and/or enhancements and updates. Customer’s sole and exclusive
                remedy and Yellowbrick’s sole and exclusive liability in the event of non-conformance shall be to use
                commercially reasonable efforts to correct or modify the Solution so as to conform in all material
                respects with Yellowbrick’s published specifications.
              </li>
              <li class="numbered"><strong>Disclaimer.</strong> YELLOWBRICK HEREBY DISCLAIMS ALL IMPLIED WARRANTIES OF
                MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE WITH RESPECT TO THE LICENSED SOFTWARE, SUBSCRIPTION
                SERVICES OR ANY OTHER MATERIALS AND SERVICES FURNISHED OR PROVIDED UNDER OR IN CONNECTION WITH THIS
                AGREEMENT, AND WITH RESPECT TO THE USE OF ANY OF THE FOREGOING. YELLOWBRICK DOES NOT WARRANT THAT EACH
                WILL BE ERROR-FREE OR SECURE, OR WILL WORK WITHOUT INTERRUPTIONS.
              </li>
              <li class="numbered"><strong>Limitation of Liability.</strong> IN NO EVENT WILL YELLOWBRICK BE LIABLE FOR
                ANY LOSS OF PROFITS, LOSS OF USE, BUSINESS INTERRUPTION, LOSS OF DATA, COST OF COVER, OR INDIRECT,
                SPECIAL, INCIDENTAL, PUNITIVE OR CONSEQUENTIAL DAMAGES OF ANY KIND IN CONNECTION WITH OR ARISING OUT OF
                THE FURNISHING, PERFORMANCE, OR USE OF THE LICENSED SOFTWARE, SUBSCRIPTION SERVICES OR ANY OTHER
                SERVICES, WHETHER ALLEGED AS A BREACH OF CONTRACT, TORT (INCLUDING NEGLIGENCE), OR ANY OTHER CLAIM OR
                CAUSE OF ACTION, EVEN IF YELLOWBRICK HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. YELLOWBRICK’S
                LIABILITY UNDER THIS AGREEMENT FOR DAMAGES WILL NOT, IN ANY EVENT, EXCEED THE AMOUNTS PAID BY CUSTOMER
                FOR THE SUBSCRIPTION SERVICES DURING THE TWELVE (12) MONTHS PRECEDING THE EVENTS WHICH GAVE RISE TO THE
                DAMAGES.
              </li>
            </ol>
          </li>
          <li class="numbered">
            <strong>TERM AND TERMINATION</strong>
            <ol class="numbered-list">
              <li class="numbered"><strong>Term.</strong> Unless terminated pursuant to Section 3.2, this Agreement
                shall commence on the Effective Date and continue for the term of the Subscription Services purchased by
                Customer and any renewal thereof (<strong>“Subscription Term”</strong>).
              </li>
              <li class="numbered"><strong>Termination for Cause.</strong> Either Party may, by providing written notice
                to the other Party, terminate this Agreement if the other Party is in material breach of any term,
                condition or provision of this Agreement, which breach, if capable of being cured, is not cured within
                thirty (30) days after the non-defaulting Party provides the other Party with written notice of such
                breach.
              </li>
              <li class="numbered"><strong>Effect of Termination.</strong> Upon termination of this Agreement pursuant
                to Section 3.2, or upon expiration of the Subscription Term, the license granted to Customer in Section
                1.1 will immediately cease and Customer will have no further rights to use the Solution. In addition, if
                Customer terminates this Agreement pursuant to Section 3.2, Customer shall receive a refund of any
                pre-paid Subscription Services fees for the period from the date of termination to the expiry of the
                Subscription Term, had this Agreement not been so terminated by Customer.
              </li>
              <li class="numbered"><strong>Survival.</strong> The following provisions will survive any termination of
                this Agreement: 1.2, 1.4, 2.3, 4 and 5.
              </li>
            </ol>
          </li>
          <li class="numbered">
            <strong>INDEMNITY</strong>
            <p>Yellowbrick shall defend and pay damages finally awarded for, or at its option settle, any third-party
              claim brought against Customer to the extent it alleges that any of the Solution used as authorized in
              this Agreement infringes any intellectual property rights of any third party; provided that Customer
              provides Yellowbrick with (i) prompt written notice of such claim; (ii) sole control over the defense and
              settlement of such claim; (iii) all information and assistance reasonably requested by Yellowbrick in
              connection with the defense or settlement of such claim; and (iv) not making any admission of liability,
              agreement or compromise in relation to any claim without the prior written consent of Yellowbrick. In the
              event any such claim is brought or threatened, Yellowbrick may, at its sole option and expense: (a)
              procure for Customer the right to continue to use the Solution; (b) modify or amend the Solution to make
              it non-infringing; (c) replace the Solution with a non-infringing Solution having substantially similar
              capabilities; or (d) if (a) – (c) are not commercially feasible, terminate this agreement immediately by
              notice in writing to Customer, and refund any pre-paid Subscription Services fees for the period from the
              date of termination to the expiry of the Subscription Term, had this Agreement not been so terminated by
              Yellowbrick. Notwithstanding the foregoing, Yellowbrick will have no liability to Customer for any claim
              of infringement to the extent such claim arises out of or is based upon (i) any modification of the
              Solution not made or authorized in writing by Yellowbrick; (ii) Customer’s failure to use the Solution in
              accordance with this Agreement, or instructions provided by Yellowbrick, or otherwise using the Solution
              for purposes for which it was not designed or intended; (iii) Solution updates provided by Yellowbrick to
              comply with the designs, requirements or specifications requested by Customer; (iv) use of any specified
              release of the Solution after Yellowbrick notifies Customer that continued use of such release may subject
              Customer to a claim of infringement, if Yellowbrick provides Customer with a replacement release; or (v)
              combination of the Solution with other software or products not provided by Yellowbrick. THE FOREGOING
              STATES THE ENTIRE LIABILITY AND OBLIGATIONS OF YELLOWBRICK AND THE EXCLUSIVE REMEDY OF CUSTOMER WITH
              RESPECT TO ANY ALLEGED OR ACTUAL INFRINGEMENT BY THE SOLUTION OF A THIRD PARTY’S INTELLECTUAL PROPERTY
              RIGHTSPATENTS OR COPYRIGHTS.</p>
          </li>
          <li class="numbered">
            <strong>MISCELLANEOUS</strong>
            <ol class="numbered-list">
              <li class="numbered"><strong>Assignment.</strong> Neither this Agreement nor any rights under this
                Agreement may be assigned or otherwise transferred by Customer, in whole or in part without the prior
                written consent of Yellowbrick, which shall not be unreasonably withheld. Yellowbrick may assign or
                transfer this Agreement, in whole or in part. A change of control of a Party shall not be considered an
                assignment. Subject to the foregoing, this Agreement will be binding upon and will inure to the benefit
                of the Parties and their respective successors and assigns.
              </li>
              <li class="numbered"><strong>Relationship of Parties.</strong> Nothing contained in this Agreement shall
                be construed as creating any agency, partnership or other form of joint enterprise between the Parties.
                The relationship between the Parties shall at all times be that of independent contractors. Neither
                Party shall have the authority to contract for or bind the other in any manner whatsoever. This
                Agreement confers no rights upon either Party except those expressly granted herein.
              </li>
              <li class="numbered"><strong>Backup Copies.</strong> Yellowbrick is not responsible for the backup storage
                of Customer’s data. Accordingly, Customer shall be responsible for the backup of its data and Customer
                assumes responsibility for any loss or damage from its failure to so maintain backup copies.
              </li>
              <li class="numbered"><strong>Notices.</strong> Any notice required or permitted under the terms of this
                Agreement or required by law must be in writing and must be (a) delivered in person, (b) sent by first
                class registered mail, or air mail, as appropriate or (c) sent by overnight air courier, in each case
                properly posted and fully prepaid to the address of the Party concerned.
              </li>
              <li class="numbered"><strong>Export Control.</strong> Customer agrees to comply with all applicable export
                control laws and regulations. Customer shall not sell, export, reexport, transfer, divert or otherwise
                dispose of, whether directly or indirectly, any regulated item or information to anyone outside the U.S.
                in connection with this Agreement without first complying with all export control laws and regulations
                which may be imposed by the U.S. Government and any country or organization of nations within whose
                jurisdiction Customer operates or does business.
              </li>
              <li class="numbered"><strong>Waiver.</strong> Any waiver of the provisions of this Agreement or of a
                Party’s rights or remedies under this Agreement must be in writing to be effective. Failure, neglect or
                delay by a Party to enforce the provisions of this Agreement or its rights or remedies at any time will
                not be construed as, and will not be deemed to be, a waiver of such Party’s rights under this Agreement,
                and will not in any way affect the validity of the whole or any part of this Agreement or prejudice such
                Party’s right to take subsequent action. No exercise or enforcement by either Party of any right or
                remedy under this Agreement will preclude the enforcement by such Party of any other right or remedy
                under this Agreement or any other right or remedy that such Party is entitled by law to enforce.
              </li>
              <li class="numbered"><strong>Severability.</strong> If any term, condition or provision in this Agreement
                is found to be invalid, unlawful or unenforceable to any extent, such invalid term, condition or
                provision will be severed from the remaining terms, conditions and provisions, which will continue to be
                valid and enforceable to the fullest extent permitted by law.
              </li>
              <li class="numbered"><strong>Integration.</strong> This Agreement contains the entire agreement of the
                Parties with respect to the subject matter of this Agreement and supersedes all previous communications,
                representations, understandings and agreements, either oral or written, between the Parties with respect
                to said subject matter. This Agreement may not be amended, except by a writing signed by both Parties.
              </li>
              <li class="numbered"><strong>Governing Law.</strong> This Agreement will be interpreted and construed in
                accordance with the laws of the State of California and the United States of America, without regard to
                conflict of law principles. The Parties agree that the United Nations Convention on Contracts for the
                International Sale of Goods is specifically excluded from application to this Agreement. Any judicial
                action or proceeding arising hereunder or relating hereto shall be brought in, and the Parties hereby
                consent to the exclusive personal jurisdiction of, the state and federal courts located in Santa Clara
                County, California.
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </section>
  </Layout>
</template>


<script>
export default {
  metaInfo: {
    title: 'Yellowbrick End User License Agreement for Software and Subscription Services',
    meta: [
      {
        name: 'robots',
        content: 'noindex, nofollow'
      }
    ]
  }
}
</script>
