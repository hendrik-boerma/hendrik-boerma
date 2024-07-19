import { createClient } from '@sanity/client'

const isProduction = process.env.DATA_SET === 'production';

const client = createClient({
  projectId: '7d7n1ptu',
  dataset: isProduction ? 'production' : 'development',
  apiVersion: '2022-03-07'
})

export default client