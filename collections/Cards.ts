import type { CollectionConfig } from "payload";

export const Cards: CollectionConfig = {
  slug: "cards",
  defaultPopulate: {
    title: true,
    slug: true,
  },
  admin: {
    defaultColumns: ["title", "status", "date", "updatedAt"],
    livePreview: {
      url: "http://localhost:3000",
    },
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "date",
      type: "date",
      required: true,
    },
    {
      name: "status",
      type: "select",
      options: [
        { label: "Draft", value: "draft" },
        { label: "Active", value: "active" },
        { label: "Archived", value: "archived" },
      ],
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
};
