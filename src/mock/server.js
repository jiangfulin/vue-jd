let http = require('http');
let fs = require('fs');
let url = require('url');
let path = require('path');
let pageSize = 5;

//获取轮播图 /sliders
function read(cb) {
  fs.readFile('./book.json', 'utf8', function (err, data) {
    if (err || data.length === 0) {
      cb([])
    } else {
      cb(JSON.parse(data))
    }

  })

}

function write(data, cb) {

  fs.writeFile('./book.json', JSON.stringify(data), cb)

}


let sliders = require('./sliders.js');
http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.setHeader("X-Powered-By", ' 3.2.1');
  if (req.method == "OPTIONS") return res.end();
  /*让options请求快速返回*/


  let {pathname, query} = url.parse(req.url, true);//true 把query转换成对象
  if (pathname === '/page') {
    let offset = parseInt(query.offset) || 0;
    read((books) => {
      let result = books.slice(offset, offset + pageSize);
      let hasMore = true;
      if (books.length <= offset + pageSize) {
        hasMore = false
      }
      res.end(JSON.stringify({hasMore, books: result}))
    });
    return
  }


  if (pathname === '/sliders') {
    res.setHeader('Content-Type', 'application/json;charset=utf8');
    return res.end(JSON.stringify(sliders))

  }
  if (pathname === '/hot') {
    read((books) => {
      let hot = books.slice(0, 6);
      res.setHeader('Content-Type', 'application/json;charset=utf8');
      res.end(JSON.stringify(hot))
    });
    return
  }
  //对书的增删改查
  if (pathname === '/book') {
    let id = parseInt(query.id);//取出的字符串
    switch (req.method) {
      case 'GET':
        if (!isNaN(id)) {//查询一个
          read((books) => {
            let book = books.find(item => item.bookId == id);
            if (!book) book = {};//如果没找到则返回{}
            res.setHeader('Content-Type', 'application/json;charset=utf8');
            res.end(JSON.stringify(book))
          })
        } else {//获取所有图书
          read((books) => {
            res.setHeader('Content-Type', 'application/json;charset=utf8');
            res.end(JSON.stringify(books))
          })

        }
        break;
      case 'POST':
        let str = '';
        req.on('data', (chunk) => {
          str += chunk
        });
        req.on('end', () => {
          let book = JSON.parse(str);
          read((books) => {
            book.bookId = books.length ? books[books.length - 1].bookId + 1 : 1;
            books.push(book);
            write(books, () => {
              res.end(JSON.stringify(book))
            })

          })

        });
        break;
      case 'PUT':
        if (id) {
          let str = '';
          req.on('data', chunk => {
            str += chunk
          });
          req.on('end', () => {
            let book = JSON.parse(str);
            read((books) => {
              books = books.map(item => {
                if (item.bookId === id) {
                  return book
                }
                return item
              });
              write(books, () => {
                res.end(JSON.stringify(book))

              })
            });


          })

        }
        break;
      case 'DELETE':

        read((books) => {
          books = books.filter(item => item.bookId !== id);

          write(books, () => {
            res.end(JSON.stringify({}))//删除返回空对象
          })
        });
        break;
    }

  }

  /*fs.stat('.' + pathname, (err, stats) => {
    if (err) {
      fs.createReadStream('index.html').pipe(res)
   /!*   res.statusCode = 404;
      res.end('not found')*!/
    } else {
      if (stats.isDirectory()) {
        let p = path.join('.' + pathname, './index.html');
        fs.createReadStream(p).pipe(res)
      } else {
        fs.createReadStream('.' + pathname).pipe(res)
      }

    }

  })*/
}).listen(3000,()=>{
  console.log('3000')
});
