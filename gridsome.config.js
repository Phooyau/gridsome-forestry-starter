// This is where project configuration and installed plugin options are located.
// Learn more: https://gridsome.org/docs/config

module.exports = {
  siteName: "Portfolio",
  siteUrl: `https://www.itsnwa.com`,
  host: "0.0.0.0",
  port: 8081,
  titleTemplate: "%s - NWA",
  siteDescription: "Creative technologist",
  plugins: [
    // {
    //   use: "@gridsome/source-filesystem",
    //   options: {
    //     path: "projects/**/*.md",
    //     typeName: "ProjectPost",
    //     resolveAbsolutePaths: true,
    //     remark: {
    //       externalLinksTarget: "_blank",
    //       externalLinksRel: ["nofollow", "noopener", "noreferrer"]
    //     }
    //   }
    // },
    // {
    //   use: "@gridsome/source-filesystem",
    //   options: {
    //     path: "journal/**/*.md",
    //     typeName: "JournalPost",
    //     resolveAbsolutePaths: true,
    //     remark: {
    //       externalLinksTarget: "_blank",
    //       externalLinksRel: ["nofollow", "noopener", "noreferrer"]
    //     }
    //   }
    // }
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: process.env.GRIDSOME_API_URL,
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['project-post', 'journal-post'],
        typeName: '',
        // singleTypes: ['impressum'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        loginData: {
          identifier: '',
          password: ''
        }
      }
    }
  ],
  templates: {
    ProjectPost: [
      {
        path: '/project/:id',
        component: './src/templates/ProjectPost.vue'
      }
    ],
    JournalPost: [
      {
        path: '/journal/:id',
        component: './src/templates/JournalPost.vue'
      }
    ]
  }
  // transformers: {
  //   remark: {
  //     plugins: ["@gridsome/remark-prismjs"]
  //   }
  // }
};
