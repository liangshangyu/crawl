/**
 * Created by Administrator on 2017/5/29.
 */
let request = require('request')
let cheerio = require('cheerio');
let iconv = require('iconv-lite');
let debug = require('debug')('crawl:read');
exports.read = function (url,callback) {
    request({url,encoding:null},function (err,response,body) {
        //把body从buffer转成字符串
        body = iconv.decode(body,'gbk');
        let $ = cheerio.load(body);
        let movies = [];
        $('.keyword .list-title').each(function () {
            let $this = $(this);
            let movie = {
                name:$this.text(),
                url:$this.attr('href')
            };
            debug(`读到电影：${movie.name}`);
            movies.push(movie)
        });
        callback(err,movies)
    });
}
/*
exports.read('http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1',(err,movies)=>{
    console.log(movies)
})*/
