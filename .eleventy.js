const fs = require('fs');

module.exports = function (config) {
  config.setLiquidOptions({
    dynamicPartials: true,
  });

  // shortcodes
  config.addPairedShortcode("collapseAbout", function(content, title, color, idx) {
    return `
      <li class="relative" x-data="{selected:null}">

      <button type="button" class="w-full px-4 py-6 text-left ${color}" @click="selected !== ${idx} ? selected = ${idx} : selected = null">
        <div class="flex items-center justify-between text-yellow-50">
          <span>
            ${title}					
                    </span>
          <i class="fas fa-plus"></i>
        </div>
      </button>

      <div
            class="relative overflow-hidden transition-all max-h-0 duration-500"
            style="" x-ref="container${idx}" 
            x-bind:style="selected == ${idx} ? 'max-height: ' + $refs.container${idx}.scrollHeight + 'px' : ''"
            >
        <div class="p-4">
          ${content}
        </div>
      </div>

    </li>
    `;
  });


  // Static assets to pass through
  config.addPassthroughCopy('./src/fonts');
  config.addPassthroughCopy('./src/images');
  config.addPassthroughCopy('./src/favicon.ico');
  config.addPassthroughCopy('./src/manifest.json');
  config.addPassthroughCopy('./src/robots.txt');

  // 404
  config.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, browserSync) {
        const content_404 = fs.readFileSync('dist/404.html');

        browserSync.addMiddleware('*', (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      },
    },
  });

  return {
    dir: {
      input: 'src',
      output: 'src/_site',
    },
    passthroughFileCopy: true,
    templateFormats: ['html', 'md', 'liquid', 'njk'],
    htmlTemplateEngine: 'liquid',
    dataTemplateEngine: 'liquid',
    markdownTemplateEngine: 'liquid',
  };
};
