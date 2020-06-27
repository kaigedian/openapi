# 券码类接口

## 1.1 卡券查询接口

### 应用场景

> 此接口针对线下卡券查询

* 请求地址
  `/coupon/query`

* 请求参数

| 字段       | 类型   | 是否必传 | 举例      | 说明          |
| :--------- | ------ | -------- | --------- | ------------- |
| storeId    | String | 是       | 208888    | 商家门店号    |
| couponCode | String | 是       | 123456789 | 需要查询的码  |
| stationId  | String | 否       | 1         | 商家POS机编号 |
| operatorId | String | 否       | 2         | 营业员编号    |

* requestBody请求示例

```json
{
  "storeId":"208888",
  "couponCode": "123456789"
}
```

* 响应参数


| **字段**                            | **类型** | **必填** | **举例**      | **说明**                                                     |
| ----------------------------------- | -------- | -------- | ------------- | ------------------------------------------------------------ |
| couponType                          | Integer  | 是       | 0             | 电子凭证码类型: 0：商品券 1：代金券                          |
| codeInfo                            | Object   |          |               |                                                              |
| codeInfo \codeState                 | Integer  | 是       | -1            | 卡券状态：-1：未激活0：已激活1：已使用2：部分使用3：已作废6: 已过期 |
| codeInfo\ actId                     | String   | 否       | TB2014032666  | 活动编号                                                     |
| codeInfo\ actName                   | String   | 否       | 可乐半价      | 活动名称                                                     |
| codeInfo\ endDate                   | String   | 是       | 2016-4-15     | 优惠券过期时间                                               |
| codeInfo\ code                      | String   | 是       | 785227842     | 优惠券编号                                                   |
| codeInfo\ebCode                     | String   | 是       | ‘0000000004   | 优惠券渠道商编号                                             |
| codeInfo\ebName                     | String   | 否       | 中国电信      | 优惠券渠道商名称                                             |
| codeInfo\ amount                    | Integer  | 否       | 1000          | 代金券金额，只有代金券才返回，以分为单位                     |
| codeInfo\ salePrice                 | Integer  | 是       | 80            | 代金券售价，只有代金券才返回，以分为单位                     |
| codeInfo\ originalPrice             | Integer  | 是       | 100           | 代金券原价，只有代金券才返回，以分为单位                     |
| codeInfo\ paid                      | Integer  | 是       | 80            | 对账价格，只有代金券才返回，以分为单位                       |
| codeInfo\promotionType              | String   | 否       | 0001          | 折扣编码                                                     |
| codeInfo\platformItemId             | String   | 否       | 0001          | 屏幕编码                                                     |
| codeInfo\products                   | Array    | 否       |               | 商品券时才返回                                               |
| codeInfo\products\pid               | String   | 是       | 77842         | 商户商品编号                                                 |
| codeInfo\products\name              | String   | 否       | 优倍鲜奶200ML | 商品名称                                                     |
| codeInfo\products\number            | Integer  | 是       | 1             | 最大可取商品个数                                             |
| codeInfo\products\priceAct          | Integer  | 是       | 1000          | 商品折扣价，以分为单位                                       |
| codeInfo\products\priceOriginal     | Integer  | 是       | 1000          | 原价，以分为单位                                             |
| codeInfo\products\payment           | Object   | 是       |               |                                                              |
| codeInfo\products\payment\paid      | Integer  | 是       | 1000          | 线上已付金额，以分为单位                                     |
| codeInfo\products\payment\remaining | Integer  | 是       | 0             | 线下需要收取的金额，以分为单位                               |
| codeInfo\groups                     | Array    | 否       |               | M选N商品券时才返回                                           |
| codeInfo\groups\gid                 | Integer  | 是       | 2             | M选N商品券商品组标识                                         |
| codeInfo\groups\gMax                | Integer  | 是       | 1             | 该组对应的所有商品总最多可选商品数量                         |
| codeInfo\groups\products            | Array    | 是       |               | 同codeInfo\products                                          |

* responseBody返回示例

- 代金券返回

  ```
  {
    "codeInfo": {
      "actId": "TB2014032666",
      "actName": "代金券10元",
      "amount": 1000,
      "code": "785227842",
      "ebCode": "0000000004",
      "ebName": "中国移动",
      "endDate": "2016-04-15"
    },
    "couponType": 1
  }
  ```



- 普通商品券返回

  ```json
  {
    "codeInfo": {
      "actId": "TB2014032688",
      "actName": "可乐二选一",
      "code": "249916165",
      "ebCode": "0000000004",
      "ebName": "CMCC",
      "products": [{
          "number": 3,
          "payment": {
            "paid": 500,
            "remaining": 0
          },
          "pid": "0079020",
          "priceAct": 500
        },
        {
          "number": 3,
          "payment": {
            "paid": 110,
            "remaining": 0
          },
          "pid": "0380454",
          "priceAct": 110
        }
      ],
      "endDate": "2016-04-15"
    },
    "couponType": 0
  }
  ```

- M选N商品券返回

  ```
  {
    "codeInfo": {
      "actId": "FM2015032401",
      "actName": "可乐二选一",
      "code": "905662028",
      "ebCode": "0000000004",
      "ebName": "CMCC",
      "groups": [{
        "gid": 1,
        "gmax": 2,
        "products": [{
            "number": 1,
            "payment": {
              "paid": 500,
              "remaining": 0
            },
            "pid": "2120249",
            "priceAct": 500
          },
          {
            "number": 1,
            "payment": {
              "paid": 500,
              "remaining": 0
            },
            "pid": "0115001",
            "priceAct": 500
          }
        ]
      }],
      "endDate": "2016-04-05"
    },
    "couponType": 0
  }
  ```

## 1.2 券核销

### 应用场景
> 优惠券使用接口，此接口会判断券折扣规则并返回折扣信息。
> 调用此接口后券会被使用掉。
> POS需要使用优惠券的场景包括:营业员模式和C端用户出示模式

### 请求url

  `coupon/couponApply`

* 请求参数 requestBody

  | 字段           | 类型   | 是否必填 | 说明               |
  | -------------- | ------ | -------- | ------------------ |
  |storeId        | String | 否       | 开个店对应的门店ID |
  |thirdStoreId   | String | 是       | 第三方门店编号     |
  |thirdOrderCode | String | 是       | 第三方订单号       |
  |operatorId|String|否|操作人ID
  |memberId|String|否|非码平台会员id如果没有传<br/>则需要通过券码查找会员ID|
  |useFlag|Int|否|0-不使用 1-使用|
  |coupons|List|||
  |└code|String|是|优惠券Code|
  |transactions|List|是||
  |└productCode|String|是|商品编码（农工商）|
  |└productName|String|是|商品名称|
  |└productPrice|Int|是|商品价格（单位分）|
  |└productQuantity|Int|是|商品数量|
  |└categoryCode|String|是|商品分类编码|
  |└categoryName|String|是|商品分类名称|

* 响应参数

  | 字段                          | 类型   | 是否必填 | 说明       |
  | ----------------------------- | ------ | -------- | ---------- |
  | memberId                      | String | 是       | 会员ID     |
  | mobile | String | 是       | 会员手机号 |
  |discountAmount|Int|是|券折扣的总金额<br/>如果使用多张则是多张折扣的金额总和
  |discountInfo|Array|是|每个券使用的折扣信息|
  |└actId|String|是|活动ID
  |└actName|String|否|活动名称
  |└thirdActCode|String|否|第三方活动编号
  |└couponName|String|是|优惠券名称
  |└couponCode|String|是|优惠券编号
  |└couponType|Int|是|优惠券类型：0-商品券 1-代金券
  |└discountAmount|Int|是|优惠折扣的金额
  |└discountProducts|Array|是|享受优惠券的商品信息
  |└└productId|String|是|非码商品ID
  |└└customerCode|String|是|商家自定义商品编码
  |└└discountQty|Int|否|享受优惠的商品数量




## **1.2.1** 卡券核销（代金券）接口

### 接口说明
  >旧接口，不建议继续使用


*  请求地址
  `/coupon/redeem`

* 请求参数

| **字段**            | **类型** | **必填** | **举例**   | **说明**         |
| ------------------- | -------- | -------- | ---------- | ---------------- |
| storeId             | String   | 是       | 208888     | 商家门店号       |
| transId             | String   | 是       | 1111       | POS交易序号      |
| stationId           | String   | 否       | 1          | 商家POS机编号    |
| operatorId          | String   | 否       | 2          | 营业员编号       |
| businessDate        | String   | 否       | 2015-07-01 | 营业日           |
| transactions        | Array    | 是       |            |                  |
| transactions\code   | String   | 是       | 123456789  | 优惠券编号       |
| transactions\ebCode | String   | 可选     | 0000000004 | 优惠券渠道商编号 |

#### requestBody请求示例

```json
{
    "storeId": "208888",
    "transId": 1,
    "businessDate": "2015-07-01",
    "channel":"pickup",
    "transactions": [
        {
            "code": "785227842",
            "ebCode": "0000000004"
        }
    ]
}
```

* 响应参数

| **字段**                              | **类型** | **必填** | **举例**     | **说明**   |
| ------------------------------------- | -------- | -------- | ------------ | ---------- |
| actInfo                               | Array    | 是       |              |            |
| actInfo\actId                         | String   | 是       | TB2014032666 | 活动编号   |
| actInfo\actName                       | String   | 否       | 可乐半价     | 活动名称   |
| actInfo\code                          | String   | 是       | 785227842    | 优惠券编号 |
|discountInfo                           |Object    |是        |优惠信息      |优惠信息
|discountInfo\discountAmount            |Object    |是        |100           |优惠总金额,单位分|
|discountInfo\discountProducts          |Array     |否        |享受优惠商品信息|享受优惠商品信息,如果是指定商品可用，会校验商品白名单，非必填|
|discountInfo\discountProducts\productId|String|否|133444111|非码商品ID|
|discountInfo\discountProducts\customerCode|String|否|product123|商家自定义商品ID|
|discountInfo\discountProducts\discountNum|String|否|1|享受优惠的商品数量|


* responseBody返回示例

```json
{
    "actInfo": [
        {
            "actId": "TB2014032666",
            "actName": "可乐半价",
            "code": "785227842"
        }
    ],
    "discountInfo": {
        "discountAmount": 80,
        "discountProducts": []
      }

}
```



## 1.2.2 卡券核销接口(商品券）

### 接口说明
> 旧接口，不建议继续使用


* 请求地址
  `/coupon/redeem`

* 请求参数

| **字段**                         | **类型** | **必填** | **举例**   | **说明**              |
| -------------------------------- | -------- | -------- | ---------- | --------------------- |
| storeId                          | String   | 是       | 208888     | 商家门店号            |
| transId                          | String   | 是       | 1111       | 交易流水号            |
| stationId                        | String   | 否       | 1          | 商家POS机编号         |
| operatorId                       | String   | 否       | 2          | 营业员编号            |
| businessDate                     | String   | 否       | 2015-07-01 | 营业日                |
| transactions                     | Array    | 是       |            |                       |
| transactions\code                | String   | 是       | 123456789  | 优惠券编号            |
| transactions\ebCode              | String   | 否       | 0000000004 | 优惠券渠道商编号      |
| transactions\products            | Array    | 是       |            | 需要兑换的商品信息    |
| transactions\products\pid        | String   | 是       | 123456789  | 核销商品编号          |
| transactions\products\seq        | Integer  | 是       | 1          | 核销顺序，从1开始记数 |
| transactions\products\consumeNum | Integer  | 是       | 1          | 核销个数              |

* requestBody请求示例

```json
{
    "storeId": "208888",
    "transId": 3,
    "businessDate": "2015-07-01",
    "transactions": [
        {
            "code": "249916165",
            "ebCode": "0000000004",
            "products": [
                {
                    "consumeNum": 1,
                    "pid": "0079020",
                    "seq": 1
                },
                {
                    "consumeNum": 1,
                    "pid": "0077842",
                    "seq": 2
                }
            ]
        }
    ]
}
```

* 响应参数

| **字段**        | **类型** | **必填** | **举例**     | **说明**   |
| --------------- | -------- | -------- | ------------ | ---------- |
| actInfo         | Array    | 是       |              |            |
| actInfo\actId   | String   | 是       | TB2014032666 | 活动编号   |
| actInfo\actName | String   | 否       | 可乐半价     | 活动名称   |
| actInfo\code    | String   | 是       | 785227842    | 优惠券编号 |
|discountInfo|Object|是|优惠信息|优惠信息|
|discountInfo\discountAmount|Object|是|100|优惠总金额,单位分|
|discountInfo\discountProducts|Array|是|享受优惠商品信息|享受优惠商品信息|
|discountInfo\discountProducts\productId|String|是|133444111|非码商品ID|
|discountInfo\discountProducts\customerCode|String|是|product123|商家自定义商品ID|
|discountInfo\discountProducts\discountNum|String|是|1|享受优惠的商品数量|


* responseBody返回示例

```json
{
  "actInfo": [{
    "actId": "TB2014032666",
    "actName": "可乐半价",
    "code": "785227842"
  }],
  "discountInfo": {
    "discountAmount": 80,
    "discountProducts": [{
        "productId": "0079020",
        "customerCode": "354352",
        "discountNum": 1
      },
      {
        "productId": "0077842",
        "customerCode": "3543521",
        "discountNum": 1
      }
    ]
  }
}
```
## 1.2.3 卡券核销接口(折扣券）

### 接口说明
> 旧接口，不建议继续使用


* 请求地址
  `/coupon/redeem`

* 请求参数

| **字段**                         | **类型** | **必填** | **举例**   | **说明**              |
| -------------------------------- | -------- | -------- | ---------- | --------------------- |
| storeId                          | String   | 是       | 208888     | 商家门店号            |
| transId                          | String   | 是       | 1111       | 交易流水号            |
| stationId                        | String   | 否       | 1          | 商家POS机编号         |
| operatorId                       | String   | 否       | 2          | 营业员编号            |
| businessDate                     | String   | 否       | 2015-07-01 | 营业日                |
| transactions                     | Array    | 是       |            |                       |
| transactions\code                | String   | 是       | 123456789  | 优惠券编号            |
| transactions\ebCode              | String   | 否       | 0000000004 | 优惠券渠道商编号      |
|transactions\totalAmount      | String   | 否       | 100 | 实际优惠总金额，折扣券是由应用层计算，非必填    |
| transactions\products            | Array    | 否       |            | 享受折扣的商品，如果是指定商品享受折扣券，会校验商品白名单，非必填   |
| transactions\products\pid        | String   | 否       | 123456789  | 核销商品编号          |
| transactions\products\seq        | Integer  | 否      | 1          | 核销顺序，从1开始记数 |
| transactions\products\consumeNum | Integer  | 否       | 1          | 核销个数              |

* requestBody请求示例

```json
{
    "storeId": "208888",
    "transId": 3,
    "businessDate": "2015-07-01",
    "transactions": [
        {
            "code": "249916165",
            "ebCode": "0000000004",
            "totalAmount":"100",
            "products": []
        }
    ]
}
```

* 响应参数

| **字段**        | **类型** | **必填** | **举例**     | **说明**   |
| --------------- | -------- | -------- | ------------ | ---------- |
| actInfo         | Array    | 是       |              |            |
| actInfo\actId   | String   | 是       | TB2014032666 | 活动编号   |
| actInfo\actName | String   | 否       | 可乐半价     | 活动名称   |
| actInfo\code    | String   | 是       | 785227842    | 优惠券编号 |
|discountInfo|Object|是|优惠信息|优惠信息|
|discountInfo\discountAmount|Object|是|100|优惠总金额,单位分|
|discountInfo\discountProducts|Array|否|享受优惠商品信息|享受优惠商品信息|
|discountInfo\discountProducts\productId|String|否|133444111|非码商品ID|
|discountInfo\discountProducts\customerCode|String|否|product123|商家自定义商品ID|
|discountInfo\discountProducts\discountNum|String|否|1|享受优惠的商品数量|


* responseBody返回示例

```json
{
  "actInfo": [{
    "actId": "TB2014032666",
    "actName": "可乐半价",
    "code": "785227842"
  }],
  "discountInfo": {
    "discountAmount": 100,
    "discountProducts": []
  }
}
```


## 1.2.4 卡券核销接口(M选N券）

### 接口说明
> 旧接口，不建议继续使用


* 请求地址
  `/coupon/redeem`

* 请求参数

| **字段**                         | **类型** | **必填** | **举例**   | **说明**                 |
| -------------------------------- | -------- | -------- | ---------- | ------------------------ |
| storeId                          | String   | 是       | 208888     | 商家门店号               |
| transId                          | String   | 是       | 1111       | 交易流水号               |
| stationId                        | String   | 否       | 1          | 商家POS机编号            |
| operatorId                       | String   | 否       | 2          | 营业员编号               |
| businessDate                     | String   | 否       | 2015-07-01 | 营业日                   |
| transactions                     | Array    | 是       |            |                          |
| transactions\code                | String   | 是       | 123456789  | 优惠券编号               |
| transactions\ebCode              | String   | 否       | 0000000004 | 优惠券渠道商编号         |
| transactions\products            | Array    | 是       |            | 需要兑换的商品信息       |
| transactions\products\pid        | String   | 是       | 123456789  | 核销商品编号             |
| transactions\products\seq        | Integer  | 是       | 1          | 核销顺序，从1开始记数    |
| transactions\products\consumeNum | Integer  | 是       | 1          | 核销个数                 |
| transactions\products\gid        | Integer  | 是       | 2          | 核销对应的M选N商品组编号 |

* requestBody请求示例

```json
{
    "storeId": "208888",
    "transId": 3,
    "businessDate": "2015-07-01",
    "transactions": [
        {
            "code": "249916165",
            "ebCode": "0000000004",
            "products": [
                {
                    "consumeNum": 3,
                    "pid": "0079020",
                    "seq": 1
                },
                {
                    "consumeNum": 4,
                    "pid": "0077842",
                    "seq": 2
                }
            ]
        }
    ]
}
```

* 响应参数

| **字段**        | **类型** | **必填** | **举例**     | **说明**   |
| --------------- | -------- | -------- | ------------ | ---------- |
| actInfo         | Array    | 是       |              |            |
| actInfo\actId   | String   | 是       | TB2014032666 | 活动编号   |
| actInfo\actName | String   | 否       | 可乐半价     | 活动名称   |
| actInfo\code    | String   | 是       | 785227842    | 优惠券编号 |

* responseBody返回示例

```json
{
    "actInfo": [
        {
            "actId": "TB2014032666",
            "actName": "可乐半价",
            "code": "785227842"
        }
    ]
}
```

## 1.3 卡券冲正接口

### 接口说明

> **NOTE：请求参数为核销的参数，只需要把reqType 修改为3,其他的参数不变(其他的参数一定要和之前核销的参数一样)**


* 请求地址
  `/coupon/reverse`

* 请求参数

| **字段**          | **类型** | **必填** | **举例**  | **说明**      |
| ----------------- | -------- | -------- | --------- | ------------- |
| storeId           | String   | 是       | 208888    | 商家门店号    |
| transId           | String   | 是       | 1111      | 交易流水号    |
| stationId         | String   | 否       | 1         | 商家POS机编号 |
| operatorId        | String   | 否       | 2         | 营业员编号    |
| transactions      | Array    | 是       |           |               |
| transactions\code | String   | 是       | 123456789 | 优惠券编号    |



* requestBody请求示例

```json
{
    "storeId": "208888",
    "transId": 3,
    "transactions": [
        {
            "code": "249916165"
        }
    ]
}
```

* 响应参数

无

* responseBody返回示例

```json

```


## 状态码

|  状态码   |  描述 |
| -------|  ----|
|100|成功|
|21|缺少必要的请求参数|
|500|内部服务异常|
