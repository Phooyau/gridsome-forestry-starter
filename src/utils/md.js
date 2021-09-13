import MarkdownIt from 'markdown-it'
import MarkdownItRplLink from 'markdown-it-replace-link'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'

export const md = new MarkdownIt({
  highlight: function(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' + hljs.highlight(lang, str, true).value + '</code></pre>'
      } catch (__) {}
    }

    return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>'
  },
  replaceLink: function (link, env) {
    if (link.match(/^\/[^/]*/)) {
      return process.env.GRIDSOME_API_URL + link
    } else {
      return link
    }
  }
}).use(MarkdownItRplLink)