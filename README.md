##爬虫
````
npm init -y
touch .gitignore
````
##安装依赖
````
npm install request iconv-lite cheerio async cron debug mongoose express ejs -S
````
##步骤
````
1:向指定的网页发出请求  得到响应
2:把得到的数组列表放到数据库中
3:main方法实现爬虫
4:创建服务并显示页面
````