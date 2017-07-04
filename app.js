'use strict'

var Koa = require('koa')
var path = require('path')
var wechat = require('./wechat/g')
var util = require('./util/util')

var wechat_file = path.join(__dirname,'./config/wechat.txt')
var config = {
    wechat:{
        appID:"wxe753c61fb8e3f697",
        appSecret:"15dee4a18ef073229c3b24447e3fb000",
        token:"shiweitanglin1990",
        getAccessToken: function(){
            return util.readFileAsync(wechat_file)
        },
        saveSccessToken: function(data){
	        data = JSON.stringify(data)

	        return util.writeFileAsync(wechat_file, data)
        }
    }
}

var app = new Koa()

app.use(wechat(config.wechat))

app.listen(8088)
console.log('shiwei');
