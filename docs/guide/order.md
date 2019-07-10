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
|orderStatus|Integer|是|订单状态（见字段描述）|
|orderType|Integer|是|订单类型（见字段描述）|
|payChannel|String|否|支付渠道|
|payChannelName|String|否|支付渠道名称|
|payStatus|Integer|否|支付状态（见字段描述）|
|payType|Integer|否|支付类型（见字段描述）|
|payTime|String|否|支付时间（yyyy-MM-dd HH:mm:ss）|
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
    "orderStatus": 1,
    "orderType": 1,
    "payChannel": "测试支付",
    "payChannelName": "微信支付",
    "payStatus": 1,
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

业务说明：
1. 拉单接口根据订单更新时间来拉，开始时间、结束时间如果不填，默认查询当日0点-24点订单。
如请求未传开始时间结束时间，则接口处理逻辑为查询当天0点至24点的所有订单，若符合条件的结果集最新时间是08:00:00:000，下一次拉单开始时间以08:00:00:000为准，调用方后续拉单开始时间都以订单列表查询响应接口字段nextStartTimestamp为准。


###  请求url：/order/batchQuery
### 请求参数
|      字段      |      类型       | 是否必传 |               说明               |
| ------------|  -------------|  ------|  ------------------------------|
| startTimestamp |     Long     |    否    |  订单创建开始时间戳（单位：毫秒），如果不传，默认请求当日00:00:00:000  |
|  endTimestamp  |     Long     |    否    |  订单创建结束时间戳（单位：毫秒），如果不传，默认请求当日23:59:59:000  |
|  orderClients  | Array[] Integer |    否    | 订单来源、下单渠道（见字段描述） |
|   storeId    |     String      |    是    |              门店号              |
|  orderStatus  | Array[] Integer |    否    | 订单状态（见字段描述） |
| count | Integer | 否 | 每次请求数量（最大10），不传入默认10 |
| nextOrderCode |     String     |    否    |               下次拉取起始值，不传入默认从头拉取               |

### 备注
建议订单列表查询接口时间戳时间间隔可以以随机数方式，保证接口的效率与稳定

#### requestBody请求示例

```json
{
    "startTimestamp": 1559114908000,
    "endTimestamp": 1559201308000,
    "orderClients": [1, 2, 3],
    "storeId": "1862",
    "orderStatus": [1, 2, 3],
    "nextOrderCode": "142858598583644715",
    "count": 5
}
```

### 响应参数
|   字段   |  类型   |   说明   |
| ------|  -----|  ------|
|  total   | Integer |   总数   |
| count | Integer | 每次请求数量 |
| nextOrderCode | String | 下次起始值(即将弃用) |
| nextStartTimestamp | Long | 下次开始时间戳(精确到毫秒) |
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
|itemList/orderStatus|Integer|订单状态（见字段描述）|
|itemList/orderType|Integer|订单类型（见字段描述）|
|itemList/payChannel|String|支付渠道|
|itemList/payChannelName|String|支付渠道名称|
|itemList/payStatus|Integer|支付状态（见字段描述）|
|itemList/payType|Integer|支付类型（见字段描述）|
|itemList/payTime|String|支付时间（yyyy-MM-dd HH:mm:ss）|
|itemList/posCode|String|pos编号|
|itemList/operator|String|操作人|
|itemList/userId|String|用户id|
|itemList/userName|String|用户姓名|
|itemList/pickUpGoodsNo|String|取餐号|
|itemList/createTime|String|下单时间（yyyy-MM-dd HH:mm:ss）|
|itemList/acceptTime|String|接单时间（yyyy-MM-dd HH:mm:ss）|
|itemList/pickUpTime|String|拣货时间（yyyy-MM-dd HH:mm:ss）|
|itemList/deliveryTime|String|配送时间（yyyy-MM-dd HH:mm:ss）|
|itemList/estimateDeliveryCompleteTime|String|预计送达时间（yyyy-MM-dd HH:mm:ss）|
|itemList/actualArrivalTime|String|实际到达时间（yyyy-MM-dd HH:mm:ss）|
|itemList/receiveTime|String|签收送达时间（yyyy-MM-dd HH:mm:ss）|
|itemList/expectTime|String|用户期望送达时间（yyyy-MM-dd HH:mm:ss）|
|itemList/longitude|String|收货地址经度|
|itemList/latitude|String|收货地址维度|
|itemList/deliverFee|Integer|订单配送费|
|itemList/packageFee|Integer|订单包装费|
|itemList/mobile|String|用户手机号|

#### responseBody返回示例

```json
{
    "total": 1000,
    "count": 10,
    "nextOrderCode":"1384186324074980",
    "nextStartTimestamp":"1559201308000",
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
            "orderStatus": 1,
            "orderType": 1,
            "payChannel": "微信",
            "payChannelName": "微信支付",
            "payStatus": 1,
            "payType": 1,
            "payTime": "1557367505",
            "posCode": "1001",
            "operator": "许磊",
            "userId": "115380388035218205",
            "userName": "MRX",
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
    "orderCode": ["142858598583644715"]
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
|orderStatus|Integer|订单状态（见字段描述）|
|orderType|Integer|订单类型（见字段描述）|
|payChannel|String|支付渠道|
|payChannelName|String|支付渠道名称|
|payStatus|Integer|支付状态（见字段描述）|
|payType|Integer|支付类型（见字段描述）|
|payTime|String|支付时间（yyyy-MM-dd HH:mm:ss）|
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
|createTime|String|下单时间（yyyy-MM-dd HH:mm:ss）|
|acceptTime|String|接单时间（yyyy-MM-dd HH:mm:ss）|
|pickUpTime|String|拣货时间（yyyy-MM-dd HH:mm:ss）|
|deliveryTime|String|配送时间（yyyy-MM-dd HH:mm:ss）|
|estimateDeliveryCompleteTime|String|预计送达时间（yyyy-MM-dd HH:mm:ss）|
|actualArrivalTime|String|实际到达时间（yyyy-MM-dd HH:mm:ss）|
|receiveTime|String|签收送达时间（yyyy-MM-dd HH:mm:ss）|
|expectTime|String|用户期望送达时间（yyyy-MM-dd HH:mm:ss）|
|longitude|String|收货地址经度|
|latitude|String|收货地址维度|
|deliverFee|Long|订单配送费|
|packageFee|Long|订单包装费|
|mobile|String|用户手机号|

#### responseBody返回示例

```json
[{
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
    "orderStatus": 1,
    "orderType": 1,
    "payChannel": "测试支付",
    "payChannelName": "微信支付",
    "payStatus": 1,
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
}]
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
| startTimestamp |     Long     |    是    |  订单创建开始时间戳（单位：毫秒）  |
|  endTimestamp  |     Long     |    是    |  订单创建结束时间戳（单位：毫秒）  |
|   storeId    |     String      |    是    |              门店号              |
|    refundstatus     |     Array[] Integer     |    是    |               订单退款状态(见字段描述)         |
| count          | Integer | 否       | 每次请求数量（最大10），不传入默认10 |

#### requestBody请求示例

```json
{
    "startTimestamp": 1559114908000,
    "endTimestamp": 1559115908000,
    "storeId": "1862",
    "refundstatus": [1],
    "count": 10
}
```

### 响应参数
|   字段   |  类型   |   说明   |
| ------|  -----|  ------|
|  total   | Integer |   总数   |
| nextStartTimestamp | Long | 下次开始时间戳(精确到毫秒) |
|   itemList   |  Array  | 订单列表 |
|itemList/orderCode  | String | 订单号 |

#### responseBody返回示例

```json
{
    "total": "1",
    "nextStartTimestamp":"1559201308000",
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

###  请求url：/order/batchOrderStatus

### 请求参数
|      字段      |      类型       | 是否必传 |               说明               |
| ------------|  -------------|  ------|  ------------------------------|
|  orderCodes  | Array[] String |    是   | 订单号集合 |

#### requestBody请求示例

```json
{
    "orderCodes": ["12354545","34353"]
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
​      2、第三方完成订单流程可调用此接口完成订单状态结束订单流程，或通知用户来取餐

### 请求url：/order/statusOperation
### 请求参数
|   字段    |  类型  | 是否必传 |                说明                |
| -------|  ----|  ------|  -----------------------|
|    orderCode    | String |    是    |        订单号     |
|    orderStatus    | String |    是    |订单状态 3=接单，4=配送中，5=完成，7=拒单，31=制作完成 |
| reason | String | 否 | 拒单原因，拒单时传入 |
|    operator    | String |    否    |        操作人     |
|    deliveryInfo    | Object |    否    |        配送信息，操作订单状态为配送中时，必传     |
|    deliveryInfo/contactsName    | String |    是    |        配送员姓名    |
|    deliveryInfo/mobile    | String |    是    |        配送员手机     |
|    deliveryInfo/expressChannelCode    | String |    否    |        配送渠道编号     |
|    deliveryInfo/expressChannelName    | String |    否    |        配送渠道名称     |
|    deliveryInfo/expressNo    | String |    否    |        快递单号     |
|    deliveryInfo/remark    | String |    否    |       配送员手机     |

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
    "code": "100",
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

### 响应参数
只返回公共参数 状态码和message
#### 返回示例

```json
{
    "ver": "1",
    "code": "100",
    "message": "success",
    "responseBody": ""
}
```


## 商家售后、客诉订单退款
### 接口说明

调用此接口处理订单退款
### 应用场景

第三方可通过商家售后、客诉订单处理接口，为售后、客诉订单进行退款，同时作废订单。
配送中、已取消的订单不允许调用该接口，必须请骑手完成配送后，才能进行退款。
退款为异步，最终订单是否取消以订单状态为准

### 请求url：/order/cancel
### 请求参数
|   字段    |  类型  | 是否必传 |                说明               |
| ------- | ---- | ------ | -------------------------------- |
| orderCode    | String |    是    |           订单号     |
| reason | String | 是 | 拒绝原因 |
|    operator    | String |    否    |        操作人     |

#### requestBody请求示例

```json
{
    "orderCodes": "12354545",
    "reason": "",
    "operator": "MRX"
}
```

### 响应参数
只返回公共参数 状态码和message
#### 返回示例

```json
{
    "ver": "1",
    "code": "100",
    "message": "success",
    "responseBody": ""
}
```


## 订单状态变更推送

### 接口说明

由调用方实现该接口，开个店来调用，需要提供地址给到开个店

### 应用场景

第三方需要提供开个店事件通知地址

开个店有新订单或订单状态变更时回调第三方地址推送订单号信息

第三方可再通过订单详细接口查询新订单详细信息

`如果订单状态是1（支付未接单），代表这个订单是新订单`



### 请求url：由对接方提供
### 请求参数
|   字段    |  类型  | 是否必传 |                    说明                     |
| -------|  ----|  ------|  --------------------------------|
| timeStamp | String |    是    |        订单状态变更时间戳（毫秒）     |
| orderCode | String | 是 | 订单号 |
| orderStatus | String | 是 | 订单状态，详细示意请查看最下方的订单状态 |
| cancelType | String | 否 | 取消类型  1:其他取消 2:用户取消 3:商户取消 4:未支付超时关单 5:商户接单超时取消 6:商家拒单 7:配送用户拒收 8:用户售后退货/售后退款 9:系统取消 10:客服取消 11:用户统一取消 12 配送取消 |
| cancelStatus | String | 否 | 取消状态  1:申请退款  3:拒绝退款 4:退款中 5:退款完成 6:取消退款 |
| cancelReason | String | 否 | 取消原因 |

#### requestBody请求示例

```json
{
    "cancelReason": "商家取消",
    "cancelStatus": "5",
    "cancelType": "2",
    "orderCode": "14947740098045346600002",
    "orderStatus": "6",
    "timeStamp": "1562595367000"
}
```

### 响应参数

只需要返回公共参数 状态码和message 即可
#### 返回示例

```json
{
    "ver": "1",
    "code": "100",
    "message": "success",
    "responseBody": ""
}
```



## 用户申请订单取消/退款 状态变更推送

### 接口说明

由调用方实现该接口，开个店来调用，需要提供地址给到开个店
### 应用场景

第三方需要提供开个店回调地址

开个店订单退款状态有变更时回调第三方地址推送订单号信息

第三方可再通过订单详细接口查询新订单详细信息



### 请求url：由对接方提供
### 请求参数
|   字段    |  类型  | 是否必传 |                    说明                     |
| -------|  ----|  ------|  --------------------------------|
| timeStamp | String |    是    |        订单状态变更时间戳（毫秒）     |
| orderCode | String | 是 | 订单号 |
| refundType | String | 否 | 取消类型  1:其他取消 2:用户取消 3:商户取消 4:未支付超时关单 5:商户接单超时取消 6:商家拒单 7:配送用户拒收 8:用户售后退货/售后退款 9:系统取消 10:客服取消 11:用户统一取消 12 配送取消 |
| refundStatus | String | 否 | 取消状态  1:申请退款  3:拒绝退款 4:退款中 5:退款完成 6:取消退款 |
| refundReason | String | 否 | 取消原因 |

#### requestBody请求示例

```json
{
    "refundReason": "商家取消",
    "refundStatus": "5",
    "refundType": "2",
    "orderCode": "14947740098045346600002",
    "timeStamp": "1562595367000"
}
```

### 响应参数

只需要返回公共参数 状态码和message 即可
#### 返回示例

```json
{
    "ver": "1",
    "code": "100",
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
