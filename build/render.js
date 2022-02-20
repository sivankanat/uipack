const fs = require('fs'),
  ejs = require('ejs'),
  _dir = 'docs/src/ejs/';

fs.readdir(_dir, (err, files) => {
  files.forEach(file => {

    if (file.includes('.ejs')) {
      _to_html = file.replace('.ejs', '.html');

      ejs.renderFile(`docs/src/ejs/${file}`, {}, function (err, str) {
        // str => Rendered HTML string
        err
          ? console.log(err)
          : fs.writeFileSync(`docs/${_to_html}`, str, () => true);
        console.log(`${_to_html} rendered`);
      });

    }
  });
});