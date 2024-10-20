import { field, group } from '@nuxthq/studio/theme'

export default defineNuxtSchema({
  appConfig: {
    seo: group({
      title: 'SEO',
      description: 'SEO configuration.',
      icon: 'i-ph-app-window',
      fields: {
        siteName: field({
          type: 'string',
          title: 'Site Name',
          description: 'Name used in ogSiteName and used as second part of your page title (My page title - Nuxt UI Pro).',
          icon: 'i-mdi-web',
          default: []
        })
      }
    }),
    // footer: group({
    //   title: 'Footer',
    //   description: 'Footer configuration.',
    //   icon: 'i-mdi-page-layout-footer',
    //   fields: {
    //     credits: field({
    //       type: 'string',
    //       title: 'Footer credits section',
    //       description: 'Text to display as credits in the footer.',
    //       icon: 'i-mdi-circle-edit-outline',
    //       default: ''
    //     }),
    //     colorMode: field({
    //       type: 'boolean',
    //       title: 'Color Mode',
    //       description: 'Hide or display the color mode button in the footer.',
    //       icon: 'i-mdi-moon-waning-crescent',
    //       default: false
    //     }),
    //     links: field({
    //       type: 'array',
    //       title: 'Links',
    //       description: 'Array of link object displayed in footer.',
    //       icon: 'i-mdi-link-variant',
    //       default: []
    //     })
    //   }
    // }),
  }
})