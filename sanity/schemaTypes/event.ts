export default {
  name: 'event',
  title: 'Upcoming Events',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'eventDate',
      title: 'Event Date',
      type: 'date',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'time',
      title: 'Time',
      type: 'string',
      description: 'e.g., 6:00 PM - 8:00 PM',
    },
    {
      name: 'location',
      title: 'Location / Venue',
      type: 'string',
      initialValue: 'Church Sanctuary',
    },
    {
      name: 'description',
      title: 'Event Description',
      type: 'text',
      rows: 3,
    },
  ],
}