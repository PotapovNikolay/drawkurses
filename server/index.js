require('ignore-styles')

require('@babel/register')({
    ignore:[/(node_modelue)/],
    presets:['@babel/preset-env','@babel/preset-react']
})

require('./server')