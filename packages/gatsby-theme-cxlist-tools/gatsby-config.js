module.exports = ({
  contentPath = "data"
}) => ({
  plugins: [{
      resolve: `gatsby-source-filesystem`,
      options: {
        path: contentPath
      }
    },
    'gatsby-plugin-theme-ui',
    'gatsby-transformer-sharp',
    'gatsby-transformer-yaml',
    'gatsby-plugin-sharp',
    'gatsby-plugin-emotion'
  ]
})