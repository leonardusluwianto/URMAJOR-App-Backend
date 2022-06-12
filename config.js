const config = {
    HOST: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    PORT: process.env.PORT || 5000
}

module.exports = config;