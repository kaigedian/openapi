# 订单类接口

## 下单

### 接口说明
线下消费订单上传接口

### 应用场景

此接口针对商户线下支付场景。

用户线下门店点餐，门店收银pos下单成功后调用开个店下单接口，把线下支付订单信息推送给开个店。

通过下单接口可实现对于线下支付点餐的会员积分或其他权益的增加，也可实现开个店后台线上线下订单对账

### 请求url：/order/submit

### 请求参数
|   字段    |  类型  | 是否必传 |                    说明                     |
| -------|  ----|  ------|  --------------------------------|
|thirdOrderCode| String |否| 第三方平台(饿了么或者美团等)订单号|
|storeId|String|是|下单门店号|
|storeName|String|是|门店名称|
|actualPayAmount|Integer|是|实际支付金额（分）|
|originalAmount|Integer|是|订单原金额（分）|
|barCounter|String|否|桌台号|
|canRefund|Boolean|是|是否能退货|
|needInvoice|Boolean|否|是否需要开发票|
|orderInvoice|Object|否|发票信息,暂不支持|
|orderClient|Integer|是|下单渠道|
|note|String|否|订单备注|
|orderState|Integer|是|订单状态（见字段描述）|
|orderType|Integer|是|订单类型（见字段描述）|
|payChannel|String|否|支付渠道|
|payChannelName|String|否|支付渠道名称|
|payState|Integer|否|支付状态（见字段描述）|
|payType|Integer|否|支付类型（见字段描述）|
|payTime|String|否|支付时间|
|posCode|String|否|pos编号|
|operator|String|否|操作人|
|userId|String|是|用户id|
|userName|String|否|用户姓名|
|needBonus|Integer|是|是否赠送积分0是1否 暂不支持保存|
|orderItemList|Array||订单商品信息|
|orderItemList/productSeq|Integer|是|商品序号|
|orderItemList/productId|String|是|商品编号|
|orderItemList/thirdProductId|String|否|商家商品编号|
|orderItemList/productName|String|是|商品名称|
|orderItemList/productPrice|Integer|是|商品单价（分）|
|orderItemList/productQuantity|Integer|是|数量|
|orderItemList/productSharePrice|Integer|否|优惠分摊金额（分）|
|orderItemList/productWeightUnit|String|否|商品单位|
|orderItemList/weight|Integer|否|商品重量（克）|
|orderItemList/productSpecName|String|否|商品规格名称（大杯）|
|orderItemList/productProperty|String|否|商品属性名称（三分糖）|

#### requestBody请求示例

```json
{
    "actualPayAmount": "1889943343",
    "storeId": "10001",
    "storeName": "开个店徐汇店",
    "actualPayAmount": 2000,
    "originalAmount": 2500,
    "barCounter": "06",
    "canRefund": false,
    "needInvoice": false,
    "orderClient": 1,
    "note": "订单备注",
    "orderState": 1,
    "orderType": 1,
    "payChannel": "测试支付",
    "payChannelName": "微信支付",
    "payState": 1,
    "payType": 1,
    "payTime": "12545445",
    "posCode": "39938289509032322",
    "operator": "MRX",
    "userId": "198004522",
    "userName": "MRX",
    "needBonus": 1,
    "orderItemList": [
        {
            "productSeq": 1,
            "productId": "138418632407497998",
            "thirdProductId": "188453334",
            "productName": "测试商品",
            "productPrice": 2000,
            "productQuantity": 1,
            "productSharePrice": 1800,
            "productWeightUnit": "杯",
            "weight": 1500,
            "productSpecName": "大杯",
            "productProperty": "三分糖"
        }
    ]
}
```

### 响应参数
|   字段    |  类型  |        说明        |
| -------|  ----|  ----------------|
| orderCode | String | 订单号（成功则有） |

#### 返回示例

```json
{
    "ver": "1",
    "statusCode": "100",
    "message": "success",
    "responseBody": {
        "orderCode": "1889943343"
    }

}
```

## 订单列表查询

### 接口说明
获取订单列表，调用次接口，后续有调用次数限制

### 应用场景
第三方可调用订单列表查询接口，开个店会通过此接口返回所有状态下的订单基本信息。

接口可根据订单创建与结束时间以及订单渠道进行过滤筛选，可用于展示订单列表界面。

###  请求url：/order/batchQuery
### 请求参数
|      字段      |      类型       | 是否必传 |               说明               |
| ------------|  -------------|  ------|  ------------------------------|
| startTimestamp |     Integer     |    是    |  订单创建开始时间戳（单位：秒）  |
|  endTimestamp  |     Integer     |    是    |  订单创建结束时间戳（单位：秒）  |
|  orderClients  | Array[] Integer |    否    | 订单来源、下单渠道（见字段描述） |
|   storeId    |     String      |    是    |              门店号              |
|  status  | Array[] Integer |    否    | 订单状态（见字段描述） |
|    pageNum     |     Integer     |    是    |               页数               |
|    pageSize    |     Integer     |    是    |             页面大小，默认10条   |

### 备注
建议订单列表查询接口时间戳时间间隔可以以随机数方式，保证接口的效率与稳定

#### requestBody请求示例

```json
{
    "orderCode": 142858598583644715,
    "startTimestamp": 3456554633,
    "endTimestamp": 356887877,
    "orderClients": [{1, 2, 3}],
    "storeId": "1862",
    "status": [{1, 2, 3}],
    "pageNum": 20,
    "pageSize": 50
}
```

### 响应参数
|   字段   |  类型   |   说明   |
| ------|  -----|  ------|
| pageNum  | Integer | 当前页数 |
| pageSize | Integer | 页面大小 |
|  pages   | Integer |  总页数  |
|  total   | Integer |   总数   |
|   itemList   |  Array  | 订单列表 |
|itemList/orderCode  | String | 订单号 |
|itemList/thirdOrderCode| String |第三方平台订单号|
|itemList/storeId|String|下单门店号|
|itemList/storeName|String|门店名称|
|itemList/actualPayAmount|Integer|实际支付金额（分）|
|itemList/originalAmount|Integer|订单原金额（分）|
|itemList/barCounter|String|桌台号|
|itemList/needInvoice|Boolean|需要开发票|
|itemList/orderClient|Integer|下单渠道|
|itemList/note|String|订单备注|
|itemList/orderState|Integer|订单状态（见字段描述）|
|itemList/orderType|Integer|订单类型（见字段描述）|
|itemList/payChannel|String|支付渠道|
|itemList/payChannelName|String|支付渠道名称|
|itemList/payState|Integer|支付状态（见字段描述）|
|itemList/payType|Integer|支付类型（见字段描述）|
|itemList/payTime|String|支付时间|
|itemList/posCode|String|pos编号|
|itemList/operator|String|操作人|
|itemList/userId|String|用户id|
|itemList/userName|String|用户姓名|
|itemList/orderItemList|Array|订单商品信息|
|itemList/orderItemList/productSeq|Integer|商品序号|
|itemList/orderItemList/productId|String|商品编号|
|itemList/orderItemList/productName|String|商品名称|
|itemList/orderItemList/productPrice|Integer|商品单价（分）|
|itemList/orderItemList/productQuantity|int|数量|
|itemList/orderItemList/sharePrice|Integer|优惠分摊金额（分）|
|itemList/orderItemList/unit|String|商品单位|
|itemList/orderItemList/weight|Integer|商品重量（克）|
|itemList/orderItemList/productSpecName|String|商品规格名称（大杯）|
|itemList/orderItemList/productProperty|String|商品属性名称（三分糖）|
|itemList/pickUpGoodsNo|String|取餐号|
|itemList/createTime|String|下单时间|
|itemList/acceptTime|String|接单时间|
|itemList/pickUpTime|String|拣货时间|
|itemList/deliveryTime|String|配送时间|
|itemList/estimateDeliveryCompleteTime|String|预计送达时间|
|itemList/actualArrivalTime|String|实际到达时间|
|itemList/receiveTime|String|签收送达时间|
|itemList/expectTime|String|用户期望送达时间|
|itemList/longitude|String|收货地址经度|
|itemList/latitude|String|收货地址维度|
|itemList/deliverFee|Long|订单配送费|
|itemList/packageFee|Long|订单包装费|

#### responseBody返回示例

```json
{
    "pageNum": 1,
    "pageSize": 50,
    "pages": 20,
    "total": 1000,
    "itemList": [
        {
            "orderCode": "1384186324074979",
            "thirdOrderCode": "15909445",
            "storeId": "1001",
            "storeName": "南翔一店",
            "actualPayAmount": 1200,
            "originalAmount": 1200,
            "barCounter": "10",
            "needInvoice": false,
            "orderClient": 1,
            "note": "订单备注",
            "orderState": 1,
            "orderType": 1,
            "payChannel": "微信",
            "payChannelName": "微信支付",
            "payState": 1,
            "payType": 1,
            "payTime": "1557367505",
            "posCode": "1001",
            "operator": "许磊",
            "userId": "115380388035218205",
            "userName": "MRX",
            "orderItemList": [
                 {
                   "productSeq": 001,
                   "productId": "001001",
                   "productName": "奶茶",
                   "productPrice": 1200,
                   "unit": "杯",
                   "weight": 1000,
                   "productSpecName": "大杯",
                   "productProperty": "三分糖"
                 }
             ],
            "pickUpGoodsNo": "4578",
            "createTime": "1557367505",
            "acceptTime": "1557368643",
            "pickUpTime": "",
            "deliveryTime": "1557398566",
            "estimateDeliveryCompleteTime": "1557457545",
            "actualArrivalTime": "1557458545",
            "receiveTime": "1557458545",
            "expectTime": "1557389003",
            "longitude": "31.43434",
            "latitude": "121.3434334",
            "deliverFee": 5,
            "packageFee": 0
        }
    ]
}
```



##  订单详情

### 接口说明

### 应用场景

第三方可通过订单号调用订单详细接口，开个店会通过此接口返回订单详细信息,包括订单基本信息、商品信息、配送信息、用户信息、支付信息等。
订单详情接口可支持批量查询，每次查询订单数量最多10条。

### 请求url：/order/queryDetail
### 请求参数
|   字段    |  类型  | 是否必传 |                    说明                     |
| -------|  ----|  ------|  --------------------------------|
|    orderCode    | Array[] String |    是    | 订单号  |

#### requestBody请求示例

```json
{
    "orderCode": {"142858598583644715"}
}
```

### 响应参数
|   字段    |  类型  |         说明          |
| -------|  ----|  ------|
| orderCode | String | 订单号 |
|thirdOrderCode| String |第三方平台订单号|
|storeId|String|下单门店号|
|storeName|String|门店名称|
|actualPayAmount|Integer|实际支付金额（分）|
|originalAmount|Integer|订单原金额（分）暂不支持|
|barCounter|String|桌台号|
|needInvoice|Boolean|需要开发票|
|orderClient|Integer|下单渠道|
|note|String|订单备注|
|orderState|Integer|订单状态（见字段描述）|
|orderType|Integer|订单类型（见字段描述）|
|payChannel|String|支付渠道|
|payChannelName|String|支付渠道名称|
|payState|Integer|支付状态（见字段描述）|
|payType|Integer|支付类型（见字段描述）|
|payTime|String|支付时间|
|posCode|String|pos编号|
|operator|String|操作人|
|userId|String|用户id|
|userName|String|用户姓名|
|orderItemList|Array|订单商品信息|
|orderItemList/productSeq|Integer|商品序号|
|orderItemList/productId|String|商品编号|
|orderItemList/productName|String|商品名称|
|orderItemList/productPrice|Integer|商品单价（分）|
|orderItemList/productQuantity|int|数量|
|orderItemList/sharePrice|Integer|优惠分摊金额（分）|
|orderItemList/unit|String|商品单位|
|orderItemList/weight|Integer|商品重量（克）|
|orderItemList/productSpecName|String|商品规格名称（大杯）|
|orderItemList/productProperty|String|商品属性名称（三分糖）|
|pickUpGoodsNo|String|取餐号|
|createTime|String|下单时间|
|acceptTime|String|接单时间|
|pickUpTime|String|拣货时间|
|deliveryTime|String|配送时间|
|estimateDeliveryCompleteTime|String|预计送达时间|
|actualArrivalTime|String|实际到达时间|
|receiveTime|String|签收送达时间|
|expectTime|String|用户期望送达时间|
|longitude|String|收货地址经度|
|latitude|String|收货地址维度|
|deliverFee|Long|订单配送费|
|packageFee|Long|订单包装费|

#### responseBody返回示例

```json
{
    "orderCode": "21343343",
    "thirdOrderCode": "1343534298",
    "storeId": "1001",
    "storeName": "开个店徐汇店",
    "actualPayAmount": 2000,
    "originalAmount": 2500,
    "barCounter": "06",
    "needInvoice": false,
    "orderClient": 1,
    "note": "订单备注",
    "orderState": 1,
    "orderType": 1,
    "payChannel": "测试支付",
    "payChannelName": "微信支付",
    "payState": 1,
    "payType": 1,
    "payTime": "12545445",
    "posCode": "39938289509032322",
    "operator": "MRX",
    "userId": "198004522",
    "userName": "MRX",
    "orderItemList": [
        {
            "productSeq": 1,
            "productId": "138418632407497998",
            "thirdProductId": "188453334",
            "productName": "测试商品",
            "productPrice": 2000,
            "productQuantity": 1,
            "productSharePrice": 1800,
            "unit": "杯",
            "weight": 1500,
            "productSpecName": "大杯",
            "productProperty": "三分糖"
        }
    ],
    "pickUpGoodsNo": "4578",
    "createTime": "1557367505",
    "acceptTime": "1557368643",
    "pickUpTime": "",
    "deliveryTime": "1557398566",
    "estimateDeliveryCompleteTime": "1557457545",
    "actualArrivalTime": "1557458545",
    "receiveTime": "1557458545",
    "expectTime": "1557389003",
    "longitude": "31.43434",
    "latitude": "121.3434334",
    "deliverFee": 5,
    "packageFee": 0

}
```


## 退款订单查询

### 接口说明

调用此接口获取订单列表

### 应用场景

第三方可通过退款订单查询接口调用获取开个店退款订单，开个店会通过此接口返回订单退款详细信息供第三方对退款订单进行处理。

###  请求url：/order/queryRefundOrders
### 请求参数
|      字段      |      类型       | 是否必传 |               说明               |
| ------------|  -------------|  ------|  ------------------------------|
| startTimestamp |     Integer     |    是    |  订单创建开始时间戳（单位：秒）  |
|  endTimestamp  |     Integer     |    是    |  订单创建结束时间戳（单位：秒）  |
|   storeId    |     String      |    是    |              门店号              |
|    refundstatus     |     Array[] Integer     |    是    |               订单退款状态(见字段描述)         |
|    pageNum     |     Integer     |    是    |               页数               |
|    pageSize    |     Integer     |    是    |             页面大小             |

#### requestBody请求示例

```json
{
    "startTimestamp": 3456554633,
    "endTimestamp": 356887877,
    "storeId": "1862",
    "refundstatus": {1},
    "pageNum": 20,
    "pageSize": 50
}
```

### 响应参数
|   字段   |  类型   |   说明   |
| ------|  -----|  ------|
|  total   | Integer |   总数   |
|   itemList   |  Array  | 订单列表 |
|itemList/orderCode  | String | 订单号 |

#### responseBody返回示例

```json
{
    "total": "1",
    "itemList": [
        {
            "orderCode": "12355556"
        }
    ],
}
```

## 批量查询订单状态

### 接口说明

调用此接口获取订单状态
### 应用场景

第三方可通过批量查询订单状态接口调用查询指定订单当前在开个店中状态

###  请求url：/order/queryRefundOrders

### 请求参数
|      字段      |      类型       | 是否必传 |               说明               |
| ------------|  -------------|  ------|  ------------------------------|
|  orderCodes  | Array[] String |    是   | 订单号集合 |

#### requestBody请求示例

```json
{
    "orderCodes": {"12354545"}

}
```


### 响应参数
|   字段   |  类型   |   说明   |
| ------|  -----|  ------|
|   itemList   |  Array  | 状态列表 |
|itemList/orderCode  | String | 订单号 |
|itemList/orderStatus  | String | 订单状态 |


#### responseBody返回示例

```json
{

    "itemList": [
        {
            "orderCode": "12355556",
            "orderStatus": "1"
        }
    ],
}
```


## 订单状态处理

### 接口说明

调用此接口处理订单状态
### 应用场景

第三方可通过订单状态处理接口调用修改开个店中订单状态
例如：1、在手动接单情况下可调用此接口接收订单
      2、第三方完成订单流程可调用此接口完成订单状态结束订单流程

### 请求url：/order/statusOperation
### 请求参数
|   字段    |  类型  | 是否必传 |                说明                |
| -------|  ----|  ------|  -----------------------|
|    orderCode    | String |    是    |        订单号     |
|    orderStatus    | String |    是    |        订单状态 3=接单，5=完成，7=拒单    |
| reason | String | 否 | 拒单原因，拒单时传入 |
|    operator    | String |    否    |        操作人     |

#### requestBody请求示例

```json
{
    "orderCodes": "12354545",
    "orderStatus": "3",
    "orderStatus": "",
    "operator": "MRX"

}
```
```json
{
    "orderCodes": "12354545",
    "orderStatus": "7",
    "orderStatus": "超出配送返回",
    "operator": "MRX"

}
```

### 响应参数
只返回公共参数 状态码和message

#### 返回示例

```json
{
    "ver": "1",
    "statusCode": "100",
    "message": "success",
    "responseBody": ""

}
```

## 商家退款处理
### 接口说明

调用此接口处理退单订单
### 应用场景

第三方可通过商家退款处理接口调用对开个店申请退款的订单进行处理，可同意/拒绝退款。

### 请求url：/order/refundOperation
### 请求参数
|   字段    |  类型  | 是否必传 |                说明               |
| ------- | ---- | ------ | -------------------------------- |
| orderCode    | String |    是    |           订单号     |
| action | Int | 是 | 1=同意，2=拒绝|
| reason | String | 否 | 拒绝原因 |
|    operator    | String |    否    |        操作人     |

#### requestBody请求示例

```json
{
    "orderCodes": "12354545",
    "action": "1",
    "reason": "",
    "operator": "MRX"

}
```
```json
{
    "orderCodes": "12354545",
    "action": "2",
    "reason": "不能退款",
    "operator": "MRX"

}
```

### 响应参数
只返回公共参数 状态码和message
#### 返回示例

```json
{
    "ver": "1",
    "statusCode": "100",
    "message": "success",
    "responseBody": ""

}
```


## 推送新订单通知

### 接口说明

由POS实现该接口，开个店来调用，需要提供地址给到开个店
### 应用场景

第三方需要提供开个店回调地址

开个店有新订单时回调第三方地址推送订单号信息

第三方可再通过订单详细接口查询新订单详细信息



### 请求url：/order/callback
### 请求参数
|   字段    |  类型  | 是否必传 |                    说明                     |
| -------|  ----|  ------|  --------------------------------|
|    timeStamp    | String |    是    |        下单时间戳     |
| storeId | String | 是 | 门店号 |
| orderCode | String | 是 | 订单号 |

#### requestBody请求示例

```json
{
    "timeStamp": "12354545",
    "storeId": "1001",
    "orderCode": "1494953"

}
```

### 响应参数

只需要返回公共参数 状态码和message 即可
#### 返回示例

```json
{
    "ver": "1",
    "statusCode": "100",
    "message": "success",
    "responseBody": ""

}
```

## 订单状态变更推送

### 接口说明

由POS实现该接口，开个店来调用，需要提供地址给到开个店
### 应用场景

第三方需要提供开个店回调地址

开个店有订单状态改变时回调第三方地址推送订单号与状态信息

第三方可修改自己的订单状态进行流程流转



### 请求url：/order/statusChange
### 请求参数
|   字段    |  类型  | 是否必传 |                    说明                     |
| -------|  ----|  ------|  --------------------------------|
| orderCode    | String |    是    | 订单号     |
| statusCode | String | 是 | 订单状态 |
| timeStamp | String | 是 | 状态变更时间戳 |

#### requestBody请求示例

```json
{
    "orderCode": "126673345",
    "statusCode": "1",
    "timeStamp": "1494953"

}
```

### 响应参数

只需要返回公共参数 状态码和message 即可

#### 返回示例

```json
{
    "ver": "1",
    "statusCode": "100",
    "message": "success",
    "responseBody": ""

}
```


## 字段描述

### 下单渠道

| 1    | 自营微信小程序   |
| ---- | ---------------- |
| 2    | SAAS             |
| 3    | 自营支付宝小程序 |
| 4    | 自营H5           |
| 5    | 自营安卓APP      |
| 6    | 自营苹果APP      |
| 7    | 自营PC-WEB       |
| 8    | 饿了么           |
| 9    | 饿百             |
| 10   | 京东             |
| 11   | 美团外卖        |
| 12   | 自营APP          |
| 13   | 开个店会员       |
| 14   | 开个店订货       |
| 15   | POS              |

### 订单状态

默认为待支付状态，如需要则设置对应的值

| 枚举值 | 说明             |
| ------ | ---------------- |
| 1      | 支付未接单       |
| 2      | 待支付           |
| 3      | 已接单           |
| 31     | 制作完成(待发货) |
| 4      | 配送中           |
| 5      | 已完成           |
| 6      | 取消           |
| 7      | 拒单           |

### 订单类型

| 枚举值 | 说明                    |
| :----- | :---------------------- |
| 1      | (店内自取实时-常规堂食) |
| 2      | (店内自取预约-预约堂食) |
| 3      | (店外快递实时-常规外送) |
| 4      | (店外快递预约-预约外送) |
| 5      | (店外自取实时-常规自取) |
| 6      | (店外自取预约-预约自取) |

### 订单退款类型

| 枚举值 | 说明                    |
| :----- | :---------------------- |
| 1      | 待处理   |
| 3      | 拒绝退款 |
| 5      | 完成 |


### 支付状态

正常情况下不要设置值，此字段仅在做订单同步时使用

|      | 说明     |
| ---- | -------- |
| 1    | 未支付   |
| 2    | 已支付   |
| 3    | 已退款   |
| 4    | 部分退款 |

### 支付类型

|      | 说明     |
| ---- | -------- |
| 1    | 线上支付 |
| 2    | 线下支付 |



### timeout

用于操作订单后，带下一步操作超时时间，超时则通知；如不需要则不填写，可填写的范围如下：

 5:5分钟,10:10分钟,15:15分钟,20:20分钟,30:30分钟,45:45分钟,60:60分钟,120:120分钟,180:180分钟,360:360分钟

## 状态码

|  状态码   |  描述 |
| -------|  ----|
|100|成功|
|21|缺少必要的请求参数|
|500|内部服务异常|
