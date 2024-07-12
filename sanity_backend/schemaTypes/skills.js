export default {
    name: 'skills',
    title: 'Skills',
    type: 'document',
    fields: [
      {
        name: 'skills',
        title: 'Skills',
        type: 'array',
        of: [{type: 'string'}],
      }
    ]
}