import Prism from 'prismjs';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';

document.querySelectorAll('.uipack-scenario').forEach(function (e) {
  let html = e.innerHTML;
  let scenarioCont = `<div class="uipack-scenario" data-live="false" flex="">
                      <nav class="wd:a">
                      <div class="sticky-nav scenario-tab"><span class="active" data-tab="preview">Preview</span><span                       data-tab="source">Source</span></div></nav>
                      <div class="scenario-list expand">
                      <div class="preview active" animate="to-left">${html}</div>
                      <div class="source" animate="to-left"><pre><code class="language-html"><xmp>${html}</xmp></code></pre>
                      </div></div></div>`;
  e.innerHTML = scenarioCont;
});

// Create a new Normalizer object
Prism.plugins.NormalizeWhitespace.setDefaults({
  'remove-trailing': true,
  'remove-indent': true,
  'left-trim': true,
  'right-trim': true,
  'break-lines': 80,
  'indent': 1,
  'remove-initial-line-feed': false,
  'tabs-to-spaces': 2,
  'spaces-to-tabs': 2
});
Prism.highlightAll();

document.querySelectorAll('.uipack-scenario').forEach(function (scenario) {
  scenario.querySelectorAll('nav span').forEach(function (e, i) {
    e.addEventListener('click', function () {
      scenario_reset(this.closest('.uipack-scenario'));
      let dataTab = this.dataset.tab;
      this.classList.add('active');
      scenario.querySelector(`.scenario-list .${dataTab}`).classList.add('active')
    })
  })
})
function scenario_reset(sc) {
  sc.querySelectorAll('.scenario-tab span').forEach((e) => e.classList.remove('active'))
  sc.querySelectorAll('.scenario-list > div').forEach((e) => e.classList.remove('active'))
}

