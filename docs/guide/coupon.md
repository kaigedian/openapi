# 开放平台券码接口
##### 以下接口说明仅限于 requestBody 和 responseBody 参数内部参数

## 查询接口

### 请求地址 /coupon/query

### 请求参数

| **字段**       | **类型** | **必填** | **举例** | **说明**     |
|----------------|----------|----------|----------|--------------|
| storeId        | String   | 否       |          | 非码门店编码 |
| couponCode     | String   | 是       |          | 优惠券编号   |
| stationId      | String   | 否       |          | POS机编号    |
| operatorId     | String   | 否       |          | 营业员编号   |

#### 请求示例

```json
{  
  "ver": 1,  
  "appId": "RBeR1M1N7PE",  
  "sign": "<sign>",  
  "partnerId": "2491",  
  "station_id": "03122311",  
  "requestBody": "{\"storeId\":\"0329\",\"couponCode\":\"88606513071572960008\",\"stationId\":\"1\",\"operatorId\":\"1\"}"  
}
```
### 返回参数

| **字段**                                   | **类型**  | **必填** | **举例**   | **说明**                                                            |
|--------------------------------------------|-----------|----------|------------|---------------------------------------------------------------------|
| couponType                                 | Integer   | 是       |            | 优惠券类型，1：代金券                                               |
| codeInfo                                   | Object    | 是       |            | 优惠券信息                                                          |
| codeInfo/codeState                         | Integer   | 是       |            | 卡券状态：-1：未激活0：已激活1：已使用2：部分使用3：已作废6: 已过期 |
| codeInfo/actName                           | String    | 是       |            | 活动名称                                                            |
| codeInfo/actId                             | String    | 是       |            | 活动编号                                                            |
| codeInfo/endDate                           | String    | 是       | 2016-04-15 | 优惠券过期时间                                                      |
| codeInfo/code                              | String    | 是       |            | 优惠券编号                                                          |
| codeInfo/ebCode                            | String    | 是       |            | 优惠券渠道商编号                                                    |
| codeInfo/ebName                            | Integer   | 是       |            | 优惠券渠道商名称                                                    |
| codeInfo/amount                            | Integer   | 否       |            | 代金券金额，只有代金券才返回，以分为单位                            |
| codeInfo/salePrice                         | Integer   | 否       |            | 代金券售价，只有代金券才返回，以分为单位                            |
| codeInfo/originalPrice                     | Integer   | 否       |            | 代金券原价，只有代金券才返回，以分为单位                            |
| codeInfo/paid                              | Integer   | 否       |            | 对账价格，只有代金券才返回，以分为单位                              |
| codeInfo/promotionType                     | String    | 是       |            | 折扣编码                                                            |
| codeInfo/platformItemId                    | String    | 是       |            | 屏幕编码                                                            |
| codeInfo/products                          | List      | 否       |            | 商品券时才返回                                                      |
| codeInfo/products/pid                      | String    | 是       |            | 商户商品编号                                                        |
| codeInfo/products/name                     | String    | 是       |            | 商品名称                                                            |
| codeInfo/products/number                    | Integer   | 是       |            | 最大可取商品个数                                                    |
| codeInfo/products/priceAct                 | Integer   | 是       |            | 商品折扣价，以分为单位                                              |
| codeInfo/products/priceOriginal            | Integer   | 是       |            | 原价，以分为单位                                                    |
| codeInfo/products/payment                  | Object    | 否       |            |                                                                     |
| codeInfo/products/payment/paid             | Integer   | 是       |            | 线上已付金额，以分为单位                                            |
| codeInfo/products/payment/remaining        | Integer   | 是       |            | 线下需要收取的金额，以分为单位                                      |
| codeInfo/groups                            | List      | 否       |            | M选N商品券时才返回                                                  |
| codeInfo/groups/gid                        | Integer   | 是       |            | M选N商品券商品组标识                                                |
| codeInfo/groups/gMax                       | Integer   | 是       |            | 该组对应的所有商品总最多可选商品数量                                |
| codeInfo/groups/products                   | List      | 否       |            |                                                                     |
| codeInfo/groups/products/pid               | String    | 是       |            | 商户商品编号                                                        |
| codeInfo/groups/products/name              | String    | 是       |            | 商品名称                                                            |
| codeInfo/groups/products/number            | Integer   | 是       |            | 最大可取商品个数                                                    |
| codeInfo/groups/products/priceAct          | Integer   | 是       |            | 商品折扣价，以分为单位                                              |
| codeInfo/groups/products/priceOriginal     | Integer   | 是       |            | 原价，以分为单位                                                    |
| codeInfo/groups/products/payment           | Object    | 否       |            |                                                                     |
| codeInfo/groups/products/payment/paid      | Integer   | 是       |            | 线上已付金额，以分为单位                                            |
| codeInfo/groups/products/payment/remaining | Integer   | 是       |            | 线下需要收取的金额，以分为单位                                      |

#### 返回示例（待补充）

## 核销接口  

### 请求地址 /coupon/couponRedeem 

### 请求参数 

| **字段**                     | **类型**  | **必填** | **举例** | **说明**                    |
|------------------------------|-----------|----------|----------|-----------------------------|
| thirdStoreId                 | String    | 是       |          | 商户门店编码                |
| thirdOrderCode               | String    | 是       |          | POS交易序号                 |
| stationId                    | String    | 否       |          | POS机编号                   |
| operatorId                 | String    | 否       |          | 营业员编号                  |
| memberId                     | String    | 否       |          | 会员id                      |
| useFlag                      | Integer   | 否       | 1        | 1：核销，目前只支持1。默认1 |
| channel                      | String    | 否       | pickup   | pickup：到店取餐，delivery：外卖。默认pickup |
| coupons                      | Array     | 是       |          | 优惠券信息                  |
| coupons/code                 | String    | 是       |          | 优惠券编码，目前只支持单券核销|
| transactions                 | Array     | 是       |          | 商品列表                    |
| transactions/productCode     | String    | 是       |          | 商户的商品编码              |
| transactions/productQuantity | Integer   | 是       |          | 商品数量                    |
| transactions/productPrice    | String    | 是       |          | 商品价格（单位分）          |
| transactions/categoryCode    | String    | 否       |          | 商户的商品分类编码          |
| transactions/categoryName    | String    | 否       |          | 商户的商品分类名称          |

#### 请求示例  

```json
{  
  "ver": 1,  
  "appId": "wxaa246",  
  "sign": "<sign>",  
  "partnerId": "1864",  
  "requestBody": "{\"thirdStoreId\":\"123123aa哈哈\",\"thirdOrderCode\":\"88606442249231550751\",\"transactions\":[{\"productCode\":\"110101\",\"productQuantity\":1,\"productPrice\":900},{\"productCode\":\"110102\",\"productQuantity\":2,\"productPrice\":900}],\"coupons\":[{\"code\":\"88606469538009667859\"}]}"  
}
```
### 返回参数

| **字段**                                     | **类型**  | **必填** | **举例** | **说明**                 |
|----------------------------------------------|-----------|----------|----------|--------------------------|
| memberId                                     | String    | 是       |          | 返回memberId             |
| mobile                                       | String    | 是       |          | 会员手机号               |
| discountAmount                               | Long      | 是       |          | 所有券总优惠，单位：分   |
| discountInfo                                 | Object    | 是       |          | 优惠信息                 |
| discountInfo/actId                           | String    | 是       |          | 活动id                   |
| discountInfo/actName                         | String    | 是       |          | 活动名称                 |
| discountInfo/thirdActCode                    | String    | 是       |          | 第三方活动编号           |
| discountInfo/couponName                      | String    | 是       |          | 券名称                   |
| discountInfo/couponCode                      | String    | 是       |          | 优惠券编号               |
| discountInfo/couponType                      | Integer   | 是       |          | 优惠券类型，1：代金券    |
| discountInfo/discountAmount                  | Integer   | 是       |          | 本券总优惠金额，单位为分 |
| discountInfo/discountProducts                | Array     | 是       |          | 优惠的商品列表           |
| discountInfo/discountProducts/customerCode   | String    | 是       |          | 商品第三方编号           |
| discountInfo/discountProducts/discountQty    | Integer   | 是       |          | 优惠数量                 |
| discountInfo/discountProducts/productId      | String    | 是       |          | 非码商品编号             |

#### 返回示例

```json
{
  "ver": "1",  
  "statusCode": "100",  
  "message": "成功",  
  "responseBody": "{\"discountAmount\":99900,\"discountInfo\":[{\"actId\":\"V1578966771568602\",\"actName\":\"14-4\",\"couponCode\":\"88606509363527402248\",\"couponName\":\"14-4\",\"couponType\":1,\"discountAmount\":99900,\"discountProducts\":[{\"customerCode\":\"001\",\"discountQty\":1},{\"customerCode\":\"002\",\"discountQty\":2}],\"thirdActCode\":\"1234\"}],\"memberId\":\"3577953412544166890\"}",  
  "sign": "<sign>"  
}
```
## 冲正接口 

### 请求地址 /coupon/couponReverse  

### 请求参数

| **字段**          | **类型** | **必填** | **举例** | **说明**                     |
|-------------------|----------|----------|----------|------------------------------|
| thirdStoreId      | String   | 是       |          | 商户门店编码                 |
| thirdOrderCode    | String   | 是       |          | POS交易序号（核销时的序号）  |
| stationId         | String   | 否       |          | POS机编号                    |
| operatorId      | String   | 否       |          | 营业员编号                   |
| transactions      | Array    | 是       |          | 优惠券列表                   |
| transactions/code | String   | 是       |          | 优惠券编码，目前只支持单券冲正 |

#### 请求示例：

```json
{  
  "ver": 1,  
  "appId": "RBeR1M1N7PE",  
  "sign": "<sign>",  
  "partnerId": "2491",  
  "station_id": "03122311",  
  "requestBody":"{\"transactions\":[{\"code\":\"88606513071572960008\"}],\"thirdOrderCode\":\"1411233345\",\"thirdStoreId\":\"0329\"}"  
}
```
### 返回参数

statusCode为100 代表成功

#### 返回示例（待补充）

## 核销失败日志查询接口

### 请求地址 /coupon/redeemFailLogQuery

### 请求参数 

| **字段**   | **类型**       | **必填** | **举例** | **说明**                                             |
|------------|----------------|----------|----------|------------------------------------------------------|
| providerId | Integer        | 是       |          | 渠道                                                 |
| codes      | List\<String\> | 否       |          | 优惠券编号列表                                       |
| startTime  | String         | 否       |          | 查询开始时间（codes不传时必填，codes传了该参数无效） |
| endTime    | String         | 否       |          | 查询结束时间（codes不传时必填，codes传了该参数无效） |
| pageNo     | Integer        | 否       |          | 页码（codes不传时必填，codes传了该参数无效）         |
| pageSize   | Integer        | 否       |          | 每页数据条数（codes不传时必填，codes传了该参数无效） |

#### 请求示例1

```json
{
  "ver": 1,
  "appId": "wxaa246",
  "sign": "<sign>",
  "partnerId": "1864",
  "requestBody": "{\"providerId\":2255,\"codes\":[\"88601425334435792164\",\"88600017959259233977\"]}"
}
```
#### 请求示例2

```json
{
  "ver": 1,
  "appId": "wxaa246",
  "sign": "<sign>",
  "partnerId": "1864",
  "requestBody": "{\"providerId\":2255,\"startTime\":\"2019-11-22 00:00:00\",\"endTime\":\"2019-11-22 23:00:00\",\"pageNo\":1,\"pageSize\":30}"
}
```
### 返回参数

| **字段**             | **类型** | **必填** | **举例** | **说明**                 |
|----------------------|----------|----------|----------|--------------------------|
| totalCount           | Integer  | 是       |          | 符合查询条件的数据总条数 |
| logList              | List     | 是       |          | 本次查询数据列表         |
| logList/activeCode   | String   | 是       |          | 活动号                   |
| logList/activeName   | String   | 是       |          | 活动名称                 |
| logList/code         | String   | 是       |          | 优惠券编号               |
| logList/failReason   | String   | 是       |          | 失败原因                 |
| logList/orderId      | String   | 是       |          | 单号                     |
| logList/partnerId    | Integer  | 是       |          | 商户号                   |
| logList/providerId   | Long     | 是       |          | 渠道商编号               |
| logList/providerName | String   | 是       |          | 渠道商名称               |
| logList/redeemTime   | String   | 是       |          | 核销时间                 |
| logList/storeId      | String   | 是       |          | 门店号                   |
| logList/transId      | String   | 是       |          | 流水号                   |
| logList/url          | String   | 是       |          | url                         |

#### 返回示例

```json
{
  "ver": "1",
  "statusCode": "100",
  "message": "成功",
  "responseBody": "{\"logList\":[{\"activeCode\":\"M1574217926285419\",\"activeName\":\"10元商品券全可用\",\"code\":\"88600017959259171887\",\"failReason\":\"404 \",\"orderId\":\"9cde1caa-4b91-4399-bca1-badcf429c149\",\"partnerId\":1914,\"providerId\":2255,\"providerName\":\"i会员\",\"redeemTime\":\"2019-11-22 17:58:20\",\"storeId\":\"xiaoyuan\",\"transId\":\"16187401391489001200005\",\"url\":\"http://customer-application-service.koderover-qa-open-store.svc:9213/customer/coupon/couponVerifyCallback\"},{\"activeCode\":\"D1574403515680942\",\"activeName\":\"全商品折扣券\",\"code\":\"88601425334435792164\",\"failReason\":\"404 \",\"orderId\":\"a4378fc4-0990-4217-a12b-bf6bd683a876\",\"partnerId\":1864,\"providerId\":2255,\"providerName\":\"i会员\",\"redeemTime\":\"2019-11-22 17:19:30\",\"storeId\":\"666666\",\"transId\":\"99992151167\",\"url\":\"http://customer-application-service.koderover-qa-open-store.svc:9213/customer/coupon/couponVerifyCallback\"},{\"activeCode\":\"V1574402138996618\",\"activeName\":\"全商品代金券\",\"code\":\"88600017959259233977\",\"failReason\":\"404 \",\"orderId\":\"da992c89-bd1b-491d-9519-1b4bd54a335a\",\"partnerId\":1864,\"providerId\":2255,\"providerName\":\"i会员\",\"redeemTime\":\"2019-11-22 17:14:56\",\"storeId\":\"666666\",\"transId\":\"3311432\",\"url\":\"http://customer-application-service.koderover-qa-open-store.svc:9213/customer/coupon/couponVerifyCallback\"},{\"activeCode\":\"M1574322390225796\",\"activeName\":\"韩月季的奶茶券\",\"code\":\"88600017959393411369\",\"failReason\":\"404 \",\"orderId\":\"31cfb5fb-d936-4a39-a940-d15dbae20e21\",\"partnerId\":1864,\"providerId\":2255,\"providerName\":\"i会员\",\"redeemTime\":\"2019-11-22 17:01:38\",\"storeId\":\"666666\",\"transId\":\"99992151119\",\"url\":\"http://customer-application-service.koderover-qa-open-store.svc:9213/customer/coupon/couponVerifyCallback\"},{\"activeCode\":\"M1574322390225796\",\"activeName\":\"韩月季的奶茶券\",\"code\":\"88601425334142779527\",\"failReason\":\"404 \",\"orderId\":\"ef47bbdc-fc18-468b-92cf-8bea3cf2f429\",\"partnerId\":1864,\"providerId\":2255,\"providerName\":\"i会员\",\"redeemTime\":\"2019-11-22 14:06:39\",\"storeId\":\"666666\",\"transId\":\"99992151199\",\"url\":\"http://customer-application-service.koderover-qa-open-store.svc:9213/customer/coupon/couponVerifyCallback\"}],\"totalCount\":5}",
  "sign": "VKXtmHVNoBahbFy/PkTyXgk4838ocOAuPwJj0Hg7XxPxDZXgkH4s4CKVQjn1PdyPz7wQOeFz9U4NxfyySWHBcMwwHnkxzEetoI9jz8k3B85nanHgZAfnWQ31P63Cj/TwqjoJXdAUahUSibRmPQ9n+iXWfME3gwtxV72oEwIXltgWio9kQ3xaUVVInuyEtvSdmbk8KVIvL3UJ9vAMSgOyM1ZdyHmldUgc2OfhLotAFltLqxJt63Oov6fW1lIgNOplvaX/qghz85fncjDevx4jN6akkH+lbiR9goea772LyQ6VZC0BHjFLS99It7OTbT6/l6xqqH4kmrLeeHjVFIrvVA=="
}
```
## 查询核销明细：

### 请求地址 /coupon/queryRedeemLogList

### 请求参数 

| **字段**   | **类型**       | **必填** | **举例** | **说明**                                             |
|------------|----------------|----------|----------|------------------------------------------------------|
| storeId    | Integer        | 是       |          | 非码门店编号（和第三方门店编号二选一，都传以此为准） |
| thirdStoreId | String | 是       |          | 第三方门店编号（和非码门店编号二选一）              |
| redeemTimeBegin  | String         | 是       |  2020-07-01 00:00:00  | 查询起始核销时间 |
| redeemTimeEnd    | String         | 是       |  2020-07-01 23:59:59 | 查询终止核销时间 |
| page     | Integer        | 是       |          |查询页数，最小1         |
| pageSize   | Integer        | 是       |     10     | 每页数据条数，最小1，最大50 |

#### 请求示例

```json
{
  "ver": "1",
  "appId": "a5382dc5f13c4e5f89e5b0223986cebe",
  "partnerId": "2227",
  "requestBody": "{\"StoreId\":\"622000\",\"page\":\"1\",\"pageSize\":\"10\",\"redeemTimeBegin\":\"2020-07-01 00:00:00\",\"redeemTimeEnd\":\"2020-07-20 23:59:59\"}",
  "sign": "QvdPR5uru9ptdtE17pO/FgV+CwCrWR/LY1sxK+WUzzwYUrEyRGwH6cgoZXccXRGCqqCl5vILW3MVnIJ9FDGpC1Vg94i31XB+ygia5txCE3a42olXgZMt+RQ2a48D3lJ0ImcRxCCXvYyq3avo/c6cxvlQwUilNl1GUYxPgRFdSttW8chd+NEQjQ6CwBqexz1d/BEyTraopKUmoafoOGfHjcJkadMQZ8lbOg6PGPQyKxg41u0Qi/FoZeem8RQee6Nlxua6KBh8SDCUAaA3CM2jCtB9KnKEWlb+Cscnd/CLCy2blUP/0TlDqKMBKW0Ay0BKH5ymtJQYUYR7nJTOzwp07g=="
}
```

### 响应参数
| **字段**   | **类型**       | **必填** | **举例** | **说明**                                             |
|------------|----------------|----------|----------|------------------------------------------------------|
| dataCount | integer | 是 | | 总数据条数 |
| dataList | object[] | 否 | | |
| dataList/activeCode | string | 是 |          |活动编号|
| dataList/activeName | string | 是 | | 活动名称 |
| dataList/couponCode | string | 是 | | 券号 |
| dataList/couponEndTime | Date | 是 | | 券截止日期 |
| dataList/amount | Integer | 是 | | 兑换数量 |
| dataList/couponState | Integer | 是 | | 券状态： 0 可用，1 已核销， 2 部分核销 |
| dataList/ebCode | string | 是 | | 渠道编号 |
| dataList/operatorId | string | 是 | | 操作员编号 |
| dataList/orderId | string | 是 | | 订单号 |
| dataList/redeemDate | string | 是 | | 核销时间 |
| dataList/stationId | string | 是 | | POS 机编号 |
| dataList/storeId | string | 是 | | 非码门店编号 |
| dataList/storeName | string | 否 | | 门店名称 |
| dataList/storeLocation | string | 否 | | 门店编号 |
| dataList/storeSignChar | string | 否 | | 区域编号 |
| dataList/transId | string | 是 | | POS 交易流水号 |
| dataList/type | Integer | 是 | | 券类型： 0 商品券，1 代金券， 3 折扣券，4 换购券 |
| dataList/providerId | string | 否 | | 渠道ID |

#### 返回示例

```json
{
  "ver": "1",
  "statusCode": "100",
  "message": "成功",
  "responseBody": "{\"dataCount\":4,\"dataList\":[{\"activeCode\":\"V1593535155276545\",\"activeName\":\"0.5券\",\"couponCode\":\"88707105117297666563\",\"couponEndTime\":1594223999000,\"couponState\":1,\"ebCode\":\"0000000864\",\"operatorId\":\"-1\",\"orderId\":\"703f2e0fcfa8417daf4e356935c7a705\",\"redeemDate\":1593535217000,\"stationId\":\"-1\",\"storeId\":\"622000\",\"storeLocation\":\"上海市\",\"storeName\":\"柚子的测试门店1\",\"storeSignChar\":\"shfmwlkjyxgsQp\",\"transId\":\"18192124302548257000002\",\"type\":1},{\"activeCode\":\"D1593534786040863\",\"activeName\":\"折扣--部分\",\"couponCode\":\"88707105106205086729\",\"couponEndTime\":1593791999000,\"couponState\":1,\"ebCode\":\"0000000912\",\"operatorId\":\"-1\",\"orderId\":\"181920911176398396000041\",\"redeemDate\":1593535351000,\"stationId\":\"-1\",\"storeId\":\"622000\",\"storeLocation\":\"上海市\",\"storeName\":\"柚子的测试门店1\",\"storeSignChar\":\"shfmwlkjyxgsQp\",\"transId\":\"18192138329459672600004\",\"type\":3},{\"activeCode\":\"M1592308980819375\",\"activeName\":\"柚子的油券\",\"amount\":1.00,\"couponCode\":\"88707134984413664049\",\"couponEndTime\":1594828799000,\"couponState\":1,\"ebCode\":\"0000001108\",\"operatorId\":\"-1\",\"orderId\":\"3e02c86b96074b589dbe935093cb4d51\",\"redeemDate\":1594276753000,\"stationId\":\"-1\",\"storeId\":\"622000\",\"storeLocation\":\"上海市\",\"storeName\":\"柚子的测试门店1\",\"storeSignChar\":\"shfmwlkjyxgsQp\",\"transId\":\"18269879685199514800004\",\"type\":0},{\"activeCode\":\"V1594647756406169\",\"activeName\":\"回归1\",\"couponCode\":\"88707150691341601283\",\"couponEndTime\":1594655999000,\"couponState\":1,\"ebCode\":\"0000001108\",\"operatorId\":\"-1\",\"orderId\":\"57845d2234d741958b3ef6f977fd5e85\",\"redeemDate\":1594652651000,\"stationId\":\"-1\",\"storeId\":\"622000\",\"storeLocation\":\"上海市\",\"storeName\":\"柚子的测试门店1\",\"storeSignChar\":\"shfmwlkjyxgsQp\",\"transId\":\"18309295384845389900002\",\"type\":1}]}",
  "sign": "bgy3SOt7bhs7IAxjIMgy55ZZDOQNPZrCHEtuoJFcB3oXFrXRGQCuJPNyyAzjVq3QZ7VrjiY29xUofC9lRC72XpklqCf3ZyUeDJUo0JNoAp4PlpB5TshWrygNbCzbYiXJcu4W2twVGs1Dw/DGhcwvQbHr+Gt96URqngtm+4fY7ZjbGdr9CmWM0v7EJUn1MScqPEdTelkXK1cbDBS7EsF9QnBX00aHNBKe4GiK5b7e1fR3PSg60IvYzXdJx3xyFcEgY9u0Gz+snM1i67H6LfJfhCQStDz0cjG5S5IXcxJ1EvfwPi1RUcgdSG1WqymxxSCLVNXvOR80oJS+i86Cg2+jFQ=="
}
```

