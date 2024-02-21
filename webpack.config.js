module.exports = {  
    mode: 'development',  
    entry: './main.js',  
    output: {  
      filename: 'bundle.js',  
      publicPath: 'dist'  
    },
    devtool: 'inline-source-map'
  };