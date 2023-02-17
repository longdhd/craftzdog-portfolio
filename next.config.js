module.exports = {
    reactStrictMode: true,
    env: {
        MONGODB_URI : 'mongodb+srv://long:admin@nodetuts.dah6mna.mongodb.net/node-tuts?retryWrites=true&w=majority'
    },
    externals: [
        "dns"
    ]
}