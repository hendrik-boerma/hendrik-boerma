import { createClient } from '@sanity/client'

const client = createClient({
  projectId: '7d7n1ptu',
  dataset: 'production',
  useCdn: false
})

export default client