module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Olá, Sou Flávio Cardoso, Engenheiro e Cientista de Dados!","short_name":"Olá, Sou Flávio Cardoso, Engenheiro e Cientista de Dados!","start_url":"/gatsby-starter-cv","background_color":"#ffffff","theme_color":"#25303B","display":"minimal-ui","icon":"src/assets/gatsby-icon.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"edf3d310d67f8284a562bc3a58c3e761"},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-gtag/gatsby-browser.js'),
      options: {"plugins":[],"trackingIds":["UA-000000000-1"]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
