import { createClient } from '@sanity/client'

const client = createClient({
  projectId: '7d7n1ptu',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2022-03-07'
})

export default client