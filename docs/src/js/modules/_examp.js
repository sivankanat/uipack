/* examp */
import '../libs/_prism';

if (document.querySelectorAll('.examp')) {
  const examps = document.querySelectorAll('.examp');

  examps.forEach(function (examp) {
    let options = JSON.parse(examp.dataset.options);
    let Html = examp.innerHTML;

    let component = `<ul class="reset examp-tabs">
    <li class="${options.active == 'preview' ? 'active' : ''}">Preview</li>
    <li class="${options.active == 'source' ? 'active' : ''}">Source</li>
    </ul>
    <ul class="reset examp-conts relative">
    <li class="${options.active == 'preview' ? 'active' : ''}">${Html}</li>
    <li class="${options.active == 'source' ? 'active' : ''}">
    <pre><code class="language-${options.lang}"><xmp>${Html}</xmp></code></pre>
    </li>
    </ul>`;

    examp.innerHTML = component;

    examp.querySelectorAll('.examp-tabs > li').forEach((el, i) => {
      el.addEventListener('click', function (e) {

        examp.querySelectorAll('.examp-tabs > li').forEach(el => el.classList.remove('active'))
        examp.querySelectorAll('.examp-conts > li').forEach(el => el.classList.remove('active'))

        this.classList.add('active')
        examp.querySelectorAll('.examp-conts > li')[i].classList.add('active')
      })
    })

  })
}

/* Prism.plugins.NormalizeWhitespace.setDefaults({
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
Prism.highlightAll(); */

