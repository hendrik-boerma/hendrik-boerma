import { createClient } from '@sanity/client'

const isProduction = process.env.NODE_ENV === 'production';

const client = createClient({
  projectId: '7d7n1ptu',
  dataset: isProduction ? 'production' : 'development',
  useCdn: false,
  apiVersion: '2022-03-07'
})

export default client