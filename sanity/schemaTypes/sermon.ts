
export default {
  name: 'sermon',
  title: 'Sunday Sermons',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Sermon Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'speaker',
      title: 'Speaker / Pastor',
      type: 'string',
      initialValue: 'Pastor',
    },
    {
      name: 'datePreached',
      title: 'Date Preached',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'youtubeUrl',
      title: 'YouTube or Video Link',
      type: 'url',
      description: 'The link to the sermon video/livestream so church members can watch it.',
    },
    {
      name: 'notes',
      title: 'Sermon Notes & Scripture References',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
}