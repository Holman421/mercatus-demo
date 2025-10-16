import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig<'pages'> = {
  slug: 'pages',
  defaultPopulate: {
    title: true,
    slug: true,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url:  "http://localhost:3000",
    },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
  ],
  hooks: {
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
