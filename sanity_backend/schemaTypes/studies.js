export default {
    name: 'studies',
    title: 'Studies',
    type: 'document',
    fields: [
      {
        name: 'studiename',
        title: 'Studie name',
        type: 'string',
      },
      {
        name: 'institution',
        title: 'Institution',
        type: 'string',
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