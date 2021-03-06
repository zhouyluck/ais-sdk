/**
 * 图像反黄检测服务的使用示例
 */
var antiporn = require("./ais_sdk/image_antiporn");
var token = require("./ais_sdk/gettoken");
var utils = require("./ais_sdk/utils");

var username = "*******";       // 配置用户名
var domainname = "*******";     // 配置用户名
var password = "*******";       // 密码
var regionName = "cn-north-1";  // 配置区域信息

var filepath = "./data/moderation-demo-2.png";
var data = utils.changeFileToBase64(filepath);
/**
 * token 方式获取结果
 * @type {string}
 */
demo_data_url = 'https://ais-sample-data.obs.myhwclouds.com/tagging-normal.jpg';
token.getToken(username, domainname, password, regionName, function (token) {

    antiporn.image_antiporn(token, data, "", function (result) {
        console.log(result);
    });

    antiporn.image_antiporn(token, "", demo_data_url, function (result) {
        console.log(result);
    })
});
/**
 * aksk 方式获取结果
 * @type {string}
 */
var app_key = "*************";
var app_secret = "************";

antiporn.image_antiporn_aksk(app_key, app_secret, data, "", function (result) {
    console.log(result);
});

antiporn.image_antiporn_aksk(app_key, app_secret, "", demo_data_url, function (result) {
    console.log(result);
});