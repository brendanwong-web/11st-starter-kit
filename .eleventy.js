const fs = require('fs');

module.exports = function (config) {
  config.setLiquidOptions({
    dynamicPartials: true,
  });

  // shortcodes
  config.addPairedShortcode("collapseAbout", function(content, title, color, idx, img) {
    return `

      <button type="button" class="collapseAbout xl:-mt-16 xl:w-9/12 xl:m${idx == 1 ? 'l' : 'r'}-auto xl:col-start-${idx} xl:col-end-${Number(idx) + 1} px-4 py-6 text-left ${color} xl:bg-white order-${idx} xl:text-center" x-bind:class="{'font-bold': selected === ${idx}}" @click="selected !== ${idx} ? selected = ${idx} : selected = null">
        <div class="flex items-center justify-between xl:justify-center text-yellow-50 xl:text-black xl:text-4xl">
          <span>
            ${title}					
                    </span>
          <i class="fas fa-plus xl:hidden"></i>
        </div>
      </button>

      <div
            class="xl:flex xl:justify-center xl:col-start-1 xl:col-end-3 xl:row-start-2 xl:row-end-3 relative overflow-hidden transition-all max-h-0 duration-500 order-${idx * 2} xl:order-3"
            style="" x-ref="container${idx}" 
            x-bind:style="selected == ${idx} ? 'max-height: ' + ($refs.container${idx}.scrollHeight + 48) + 'px' : ''"
            >
        <div class="xl:max-w-sm p-4 xl:p-12 xl:pt-6">
          <img src="../images/${img}" alt="">
        </div>
        <div class="p-4 xl:p-12 xl:pt-6 prose">
          ${content}
        </div>
      </div>
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
