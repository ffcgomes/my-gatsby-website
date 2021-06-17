var plugins = [{
      plugin: require('C:/Users/USUARIO/Google Drive/Github/my-gatsby-website/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('C:/Users/USUARIO/Google Drive/Github/my-gatsby-website/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Olá, Sou Flávio Cardoso, Engenheiro e Cientista de Dados!","short_name":"Olá, Sou Flávio Cardoso, Engenheiro e Cientista de Dados!","start_url":"/gatsby-starter-cv","background_color":"#ffffff","theme_color":"#25303B","display":"minimal-ui","icon":"src/assets/gatsby-icon.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"edf3d310d67f8284a562bc3a58c3e761"},
    },{
      plugin: require('C:/Users/USUARIO/Google Drive/Github/my-gatsby-website/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('C:/Users/USUARIO/Google Drive/Github/my-gatsby-website/node_modules/gatsby-plugin-google-gtag/gatsby-ssr'),
      options: {"plugins":[],"trackingIds":["UA-000000000-1"]},
    },{
      plugin: require('C:/Users/USUARIO/Google Drive/Github/my-gatsby-website/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
