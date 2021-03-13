import UIPack from '../../../src/js/uipack';

import './_pages';
import './_examp';

fetch('https://api.github.com/repos/sivankanat/uipack/tags')
  .then(res => res.json())
  .then(function (data) {
    if (document.getElementById('gitReleaseLink')) {
      let linkEl = document.getElementById('gitReleaseLink');
      linkEl.href = `https://github.com/sivankanat/uipack/releases/tag/${data[0].name}`
      linkEl.querySelector('#gitReleaseTag').innerHTML = data[0].name
    }
  })

