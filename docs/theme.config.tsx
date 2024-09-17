import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: <h1>JPage</h1>,
  // banner: {
  //   text: "Olá",
  // },
  project: {
    link: 'https://github.com/pedro-isacss/jpage',
  },
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: 'https://github.com/pedro-isacss/jpage',
  footer: {
    text: 'JPage',
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – JPage'
      }
    } else {
      return {
        titleTemplate: 'JPage – Creating Slide-Based Websites',
      }
    }
  },
}

export default config
