export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6145f7efcb908d75681d141a',
                  title: 'Sanity Studio',
                  name: 'emilieportfolio-studio',
                  apiId: 'ba15dcc3-cae9-4783-8a2e-b19f8fa87eb9'
                },
                {
                  buildHookId: '6145f7eff6781a646c2c4b44',
                  title: 'Portfolio Website',
                  name: 'emilieportfolio',
                  apiId: 'ca6c1cf8-87e9-4f5b-b4a6-6d657feb8960'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/emiliempark/emilieportfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://emilieportfolio.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
