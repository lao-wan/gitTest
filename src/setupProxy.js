const {createProxyMiddleware} = require('http-proxy-middleware');
module.exports = function(app) {
   app.use(createProxyMiddleware('/json', { changeOrigin: true,target: 'http://www.bjlink32.com/data.php' }));
   app.use(createProxyMiddleware('/bjlink32', { 
          changeOrigin: true,
          target: 'http://www.bjlink32.com/LSLajax/img/',
          pathRewrite: {
                    '^/bjlink32': '' // 这样处理后，最终得到的接口路径为： http://localhost:8080/xxx
                  }
        }));
    // app.use(createProxyMiddleware('jianshu', { 
    //           changeOrigin: true,
    //           target: 'http://www.bjlink32.com/LSLajax/jianshu/',
    //           pathRewrite: {
    //                     '^/bjlink32': '' // 这样处理后，最终得到的接口路径为： http://localhost:8080/xxx
    //                   }
    //         }));

  app.use(createProxyMiddleware('/jj', { 
      changeOrigin: true,
      target: 'http://upload-images.jianshu.io/upload_images/16572117-087f3e1ee6a786d4.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
      pathRewrite: {
                '^/jj': '' // 这样处理后，最终得到的接口路径为： http://localhost:8080/xxx
              }
    }));
app.use(createProxyMiddleware('/as', { 
          changeOrigin: true,
          target: 'http://upload-images.jianshu.io/upload_images/9175450-242ec64cfe0f8589.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
          pathRewrite: {
                    '^/as': '' // 这样处理后，最终得到的接口路径为： http://localhost:8080/xxx
                  }
        }));
    app.use(createProxyMiddleware('/bd', { 
              changeOrigin: true,
              target: 'http://upload-images.jianshu.io/upload_images/3651857-51bda3b571d69e66.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
              pathRewrite: {
                        '^/bd': '' // 这样处理后，最终得到的接口路径为： http://localhost:8080/xxx
                      }
            }));
        app.use(createProxyMiddleware('/sf', { 
                  changeOrigin: true,
                  target: 'http://upload-images.jianshu.io/upload_images/22094067-c43cfa8b170826e8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
                  pathRewrite: {
                            '^/sf': '' // 这样处理后，最终得到的接口路径为： http://localhost:8080/xxx
                          }
                }));
};