import React from 'react'
import CMS from 'netlify-cms'

// required to extract the css-in-js from emotion
import CSSInjector from './previewTemplates/CSSInjector'

import BlogPostPreview from './previewTemplates/BlogPostPreview'

CMS.registerPreviewTemplate('blog', props => (
  <CSSInjector>
    <BlogPostPreview {...props} />
  </CSSInjector>
))
