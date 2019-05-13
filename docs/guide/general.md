# 开始前必读

## 首页

## 版本说明
| 服务接口 | 改动点   | 修改人 |    修改日期    |
| ------|  ------- | ----|  ------------|
|   1.0    | 初始文档 | 崔根友 | 2019年04月17日 |
|   1.0    | 查询订单信息增加配送费和餐盒费 | 伍平 | 2019年05月5日 |
|   1.0    | 增加生产地址，接口公共参数增加access_token | 伍平 | 2019年05月6日 |
|   1.0    | 参数修正，增加一些请求示例 | 伍平 | 2019年05月9日 |


## 全局返回码说明

|  状态码   |  描述 |
| -------|  ----|
|100|成功|
|21|缺少必要的请求参数|
|500|内部服务异常|


## 接口调用规则

### 接口签名

#### 签名算法

RSA2 （SHA256WithRSA）强制要求RSA密钥的长度至少为2048

#### 签名规则

##### 筛选排序

获取所有请求参数，不包括字节类型参数，如文件、字节流，剔除sign字段，剔除值为空的参数，并按照第一个字符的键值ASCII码递增排序（字母升序排序），如果遇到相同字符则按照第二个字符的键值ASCII码递增排序，以此类推。

##### 拼接

将排序后的参数与其对应值，组合成“参数=参数值”的格式，并且把这些参数用&字符连接起来，此时生成的字符串为待签名字符串。

例如下面的请求示例

```
ver=1
partnerId=2038
appId=2038
requestBody={"orderCode":"1023987523084","operator":"操作人员"}
sign=e9zEAe4TTQ4LPLQvETPoLGXTiURcxiAKfMVQ6Hrrsx2hmyIEGvSfAQzbLxHrhyZ48wOJXTsD4FPnt+YGdK57+fP1BCbf9rIVycfjhYCqlFhbTu9pFnZgT55W+xbAFb9y7vL0MyAxwXUXvZtQVqEwW7pURtKilbcBTEW7TAxzgro=
```

则带签名字符串为：

```
appId=2038&partnerId=2018&requestBody={"orderCode":"1023987523084","operator":"操作人员"}&ver=1
```

##### 调用签名函数

使用各自语言对应的SHA256WithRSA签名函数利用商户私钥对待签名字符串进行签名，并进行Base64编码

##### sign 赋值

将加密好的数据 赋值给sign字段

## 公共参数

### 请求头

|       字段       | 是否必传 |  类型  |             默认值             |                说明                |
| -------------- | ------ | ---- | ---------------------------- | -------------------------------- |
|   Content-Type   |    是    | String | application/json;charset=utf-8 |       指定参数类型为json格式       |
| x-transaction-id |    是    | String |                                | 请求id，每一次请求不一样请保持唯一 |
| Accept | 是 |  | application/json;charset=utf-8 |  |
| access_token | 是 |  | |  |请求参数

### 请求参数

|    字段     |  类型  | 是否必传 |                    说明                     |
| --------- |---- | ------ | --------------------------------------|
|     ver     | String |    是    |                接口版本号，1                |
|  partnerId  | String |    是    |           由开个店颁发商户唯一标识            |
|    appId    | String |    是    |           由开个店颁发平台唯一标识            |
| requestBody | String | 是 |                业务请求参数                 |
|    sign     | String |    是    | API访问签名参数，请参见API调用协议-接口签名 |

### 响应参数

|    字段    |  类型  | 是否必传 |                    说明                     |
| --------|  ----|  ------|  --------------------------------|
|    ver     | String |    是    |             接口版本号，1              |
| statusCode | String |    是    |         状态码 成功：100          |
|   message   | String |    是    |         返回信息（失败原因）        |
| responseBody | String | 否 | 业务响应参数，成功则有 |

### 开个店提供参数
* ver：接口版本
* partnerId：户唯一标识 
* appId：平台唯一标识 
* access_token：固定token值

## 接口地址
* 正式环境 `https://open-store.sandload.cn/openapi`
* 测试环境 `https://open-store-dev.sandload.cn`
