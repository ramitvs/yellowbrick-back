<template>
  <div class="flex align-center justify-center md:px-0">
    <BaseScript src="https://app-sj25.marketo.com/js/forms2/js/forms2.min.js" @loaded="loadForm" />
    <form :id="`mktoForm_${id}`"></form>
  </div>
</template>

<script>
export default {
  props: ['id'],
  methods: {
    loadForm() {
      window.MktoForms2.loadForm('//app-sj25.marketo.com', '225-JCG-238', this.id)
      window.MktoForms2.whenRendered(form => {
        this.destyleMktoForm(form)
      })
      window.MktoForms2.whenReady(form => {
        form.getFormElem()[0].setAttribute("data-mkto-ready","true");
        form.onValidate(() => {
          var email = form.vals().Email
          if (email) {
            if (!this.isEmailGoodPersonal(email)) {
              form.submittable(false)
              var emailElem = form.getFormElem().find('#Email')
              form.showErrorMessage('Must be businesss email.', emailElem)
            } else {
              form.submittable(true)
            }
          }
        })
      })
    },
    isEmailGoodPersonal(email) {
      var invalidPersonalDomains = [
        '@gmail.',
        '@yahoo.',
        '@live.',
        '@aol.',
        '@outlook.',
        '@aol.',
        '@comcast.',
        '@earthlink.',
        '@facebook.',
        '@gmail.',
        '@gmx.',
        '@googlemail.',
        '@hotmail.',
        '@icloud.',
        '@mac.',
        '@me.',
        '@mail.',
        '@msn.',
        '@live.',
        '@sbcglobal.'
      ]
      for (var i = 0; i < invalidPersonalDomains.length; i++) {
        var domain = invalidPersonalDomains[i]
        if (email.indexOf(domain) != -1) {
          return false
        }
      }
      return true
    },
    destyleMktoForm(mktoForm) {
      var formEl = mktoForm.getFormElem()[0]
      var arrayFrom = Function.prototype.call.bind(Array.prototype.slice)

      // remove element styles from <form> and children
      var styledEls = arrayFrom(formEl.querySelectorAll('[style]')).concat(formEl)
      styledEls.forEach(el => {
        el.removeAttribute('style')
      })

      // disable remote stylesheets and local <style>s
      var styleSheets = arrayFrom(document.styleSheets)
      styleSheets.forEach(ss => {
        try {
          if (formEl.contains(ss.ownerNode)) ss.disabled = true
          else if (ss.href) {
            if (ss.href.includes('marketo')) ss.disabled = true
          } else if (ss.cssRules && ss.cssRules[0].cssText.includes('mkto')) ss.disabled = true
        } catch (e) {}
      })
    }
  }
}
</script>
