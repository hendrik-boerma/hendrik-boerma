import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

const isProduction = process.env.DATA_SET === 'production';

export default defineConfig({
  name: isProduction ? 'production' : 'development',
  title: 'Portfolio',
  projectId: '7d7n1ptu',
  dataset: isProduction ? 'production' : 'development',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  }
})

