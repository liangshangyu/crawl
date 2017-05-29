/**
 * Created by Administrator on 2017/5/29.
 */
let Movie = require('../model').Movie
let async = require('async');
exports.write = function (movies,callback) {
    async.forEach(movies,function (movie,cb) {
        Movie.create(movie,cb)
    })
}
exports.write([{name:'超级大山炮',url:'sanpao'},{name:'白鹿原',url:'bailuyuan'}],function (err) {
    console.log(err)
})