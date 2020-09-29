module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ?
    '/group/':
    '/'
    // используется для продакшена '/group/' имя репозитория
}