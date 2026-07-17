'use client'

/**
 * This configuration is used for the Sanity Studio that’s mounted 
 * on the `app/studio/[[...tool]]/page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// Import gikan sa 'sanity' folder nga naa sa root
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schemaTypes'
import {structure} from './sanity/structure'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Schema configuration
  schema,
  plugins: [
    structureTool({structure}),
    // Vision plugin para sa pag-query sa data
    visionTool({defaultApiVersion: apiVersion}),
  ],
})