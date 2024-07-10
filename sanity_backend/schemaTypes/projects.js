export default {
    name: 'projects',
    title: 'Projects',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'subtitle',
        title: 'Subtitle',
        type: 'string',
      },
      {
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [{type: 'string'}],
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'link',
        title: 'Link',
        type: 'url',
      },
      {
        name: 'linktext',
        title: 'Link Text',
        type: 'string',
      }
    ]
  }