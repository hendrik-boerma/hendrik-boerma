export default {
    name: 'work',
    title: 'Work',
    type: 'document',
    fields: [
      {
        name: 'role',
        title: 'Role',
        type: 'string',
      },
      {
        name: 'company',
        title: 'Company',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'array',
        of: [
          {
            type: 'block',
            styles: [
              { title: 'Normal', value: 'normal' },
            ],
            marks: {
              decorators: [
                { title: 'Strong', value: 'strong' },
                { title: 'Emphasis', value: 'em' }
              ],
              annotations: []
            },
            lists: []
          }
        ]
      },
      {
        name: 'startDate',
        title: 'Start Date',
        type: 'string',
      },
      {
        name: 'endDate',
        title: 'End Date',
        type: 'string',
      },
      {
        name: 'order',
        title: 'Order',
        type: 'number',
      }
    ],
    orderings: [
      {
        title: 'Order',
        name: 'orderAsc',
        by: [
          {field: 'order', direction: 'asc'}
        ]
      }
    ]
}