# 订单类接口

## 订单列表查询

### 接口说明

调用次接口获取订单列表

### 应用场景
第三方可调用订单列表查询接口，开个店会通过此接口返回所有状态下的订单基本信息。
接口可根据订单创建与结束时间以及订单渠道进行过滤筛选
可用来展示订单列表界面

###  请求url：/order/batchQuery
### 请求参数
|      字段      |      类型       | 是否必传 |               说明               |
| ------------|  -------------|  ------|  ------------------------------|
| startTimestamp |     Integer     |    是    |  订单创建开始时间戳（单位：秒）  |
|  endTimestamp  |     Integer     |    是    |  订单创建结束时间戳（单位：秒）  |
|  orderClients  | Array[] Integer |    否    | 订单来源、下单渠道（见字段描述） |
|   storeId    |     String      |    是    |              门店号              |
|    pageNum     |     Integer     |    是    |               页数               |
|    pageSize    |     Integer     |    是    |             页面大小             |

### 响应参数
|   字段   |  类型   |   说明   |
| ------|  -----|  ------|
| pageNum  | Integer | 当前页数 |
| pageSize | Integer | 页面大小 |
|  pages   | Integer |  总页数  |
|  total   | Integer |   总数   |
|   data   |  Array  | 订单列表 |
|data/orderCode  | String | 订单号 |
|data/thirdOrderCode| String |第三方平台订单号|
|data/companySelfCode|String|商户自生成订单|
|data/storeId|String|下单门店号|
|data/storeName|String|门店名称|
|data/actualPayAmount|Integer|实际支付金额（分）|
|data/originalAmount|Integer|订单原金额（分）|
|data/barCounter|String|桌台号|
|data/canRefund|Boolean|是否能退货|
|data/needInvoice|Boolean|需要开发票|
|data/orderClient|Integer|下单渠道|
|data/description|String|订单备注|
|data/orderState|Integer|订单状态（见字段描述）|
|data/orderStateDesc|String|订单状态描述|
|data/orderType|Integer|订单类型（见字段描述）|
|data/payChannel|String|支付渠道|
|data/payChannelName|String|支付渠道名称|
|data/payState|Integer|支付状态（见字段描述）|
|data/payType|Integer|支付类型（见字段描述）|
|data/payTime|String|支付时间|
|data/posCode|String|pos编号|
|data/operator|String|操作人|
|data/userId|String|用户id|
|data/userName|String|用户姓名|
|data/itemList|Array|订单商品信息|
|data/itemList/productSeq|Integer|商品序号|
|data/itemList/productCode|String|商品编号|
|data/itemList/skuId|String|规格ID（多规格必传）|
|data/itemList/productName|String|商品名称|
|data/itemList/price|Integer|商品单价（分）|
|data/itemList/quantity|int|数量|
|data/itemList/total|int|总价|
|data/itemList/sharePrice|Integer|优惠分摊金额（分）|
|data/itemList/userPrice|Integer|用户看到价格（分）|
|data/itemList/unit|String|商品单位|
|data/itemList/weight|Integer|商品重量（克）|
|data/itemList/specs|Array|多规格必传|
|data/specs/name|String|规格名称（杯型）|
|data/specs/value|String|规格值（大杯）|
|data/itemList/attributes|Array|多属性|
|data/attributes/name|String|属性名称（甜度）|
|data/attributes/value|String|属性值（三分糖）|
|data/invoice|String|发票抬头|
|data/taxpayerId|String|纳税人识别号|
|data/invoiceAddress|String|发票地址|
|data/invoiceAmount|String|发票金额|
|data/bankCardNo|String|银行账号|
|data/invoiceContent|String|发票内容|
|data/invoiceBank|String|开户行|
|data/phoneNo|String|电话号码|
|data/pickUpGoodsNo|String|取餐号|
|data/suspendDesc|String|挂起描述|
|data/suspendState|Integer|挂起状态 0 正常 1 未成团挂起 2 风控挂起 3 售后挂起|
|data/createTime|String|下单时间|
|data/acceptTime|String|接单时间|
|data/pickUpTime|String|拣货时间|
|data/deliveryTime|String|配送时间|
|data/estimateDeliveryCompleteTime|String|预计送达时间|
|data/actualArrivalTime|String|实际到达时间|
|data/receiveTime|String|签收送达时间|
|data/expectTime|String|用户期望送达时间|
|data/consignee|String|订单收货人姓名|
|data/deliveryGeo|String|订单收货地址经纬度|
|data/deliveryPoiAddress|String|顾客送餐地址|
|data/phone|String|收货人联系电话|
|data/activities|Array|订单参与活动信息|
|data/activities/id|String|活动id|
|data/activities/name|String|活动名称|
|data/activities/desc|String|优惠描述|

##  订单详情

### 接口说明

### 应用场景
第三方可通过订单号调用订单详细接口，开个店会通过此接口返回订单详细信息,包括订单基本信息、商品信息、配送信息、用户信息、支付信息等
可用来展示点击订单详细信息界面


### 请求url：/order/queryDetail
### 请求参数
|   字段    |  类型  | 是否必传 |                    说明                     |
| -------|  ----|  ------|  --------------------------------|
|    orderCode    | String |    否    | 订单号，与thirdOrderCode二选一  |
| thirdOrderCode | String | 否 | 第三方平台订单号，与orderCode二选一 |

### 响应参数
|   字段    |  类型  |         说明          |
| -------|  ----|  ------|
| orderCode | String | 订单号 |
|thirdOrderCode| String |第三方平台订单号|
|companySelfCode|String|商户自生成订单|
|storeId|String|下单门店号|
|storeName|String|门店名称|
|actualPayAmount|Integer|实际支付金额（分）|
|originalAmount|Integer|订单原金额（分）|
|barCounter|String|桌台号|
|canRefund|Boolean|是否能退货|
|needInvoice|Boolean|需要开发票|
|orderClient|Integer|下单渠道|
|description|String|订单备注|
|orderState|Integer|订单状态（见字段描述）|
|orderStateDesc|String|订单状态描述|
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
|itemList|Array|订单商品信息|
|itemList/productSeq|Integer|商品序号|
|itemList/productCode|String|商品编号|
|itemList/skuId|String|规格ID（多规格必传）|
|itemList/productName|String|商品名称|
|itemList/price|Integer|商品单价（分）|
|itemList/quantity|int|数量|
|itemList/total|int|总价|
|itemList/sharePrice|Integer|优惠分摊金额（分）|
|itemList/userPrice|Integer|用户看到价格（分）|
|itemList/unit|String|商品单位|
|itemList/weight|Integer|商品重量（克）|
|itemList/specs|Array|多规格必传|
|specs/name|String|规格名称（杯型）|
|specs/value|String|规格值（大杯）|
|itemList/attributes|Array|多属性|
|attributes/name|String|属性名称（甜度）|
|attributes/value|String|属性值（三分糖）|
|invoice|String|发票抬头|
|taxpayerId|String|纳税人识别号|
|invoiceAddress|String|发票地址|
|invoiceAmount|String|发票金额|
|bankCardNo|String|银行账号|
|invoiceContent|String|发票内容|
|invoiceBank|String|开户行|
|phoneNo|String|电话号码|
|pickUpGoodsNo|String|取餐号|
|suspendDesc|String|挂起描述|
|suspendState|Integer|挂起状态 0 正常 1 未成团挂起 2 风控挂起 3 售后挂起|
|createTime|String|下单时间|
|acceptTime|String|接单时间|
|pickUpTime|String|拣货时间|
|deliveryTime|String|配送时间|
|estimateDeliveryCompleteTime|String|预计送达时间|
|actualArrivalTime|String|实际到达时间|
|receiveTime|String|签收送达时间|
|expectTime|String|用户期望送达时间|
|consignee|String|订单收货人姓名|
|deliveryGeo|String|订单收货地址经纬度|
|deliveryPoiAddress|String|顾客送餐地址|
|phone|String|收货人联系电话|
|activities|Array|订单参与活动信息|
|activities/id|String|活动id|
|activities/name|String|活动名称|
|activities/desc|String|优惠描述|
|deliverFee|Long|订单配送费|
|packageFee|Long|订单包装费|

## 下单

### 接口说明

线下消费订单上传接口

### 应用场景
此接口针对商户线下支付场景
用户线下门店点餐，门店收银pos下单成功后调用开个店下单接口，把线下支付订单信息推送给开个店
通过下单接口可实现对于线下支付点餐的会员积分或其他权益的增加，也可实现开个店后台线上线下订单对账


### 请求url：/order/submit

###  请求参数
|   字段    |  类型  | 是否必传 |                    说明                     |
| -------|  ----|  ------|  --------------------------------|
|thirdOrderCode| String |否| 第三方平台(饿了么或者美团等)订单号|
|++partnerOrderCode|String|否|商户自生成订单|
|storeId|String|是|下单门店号|
|storeName|String|是|门店名称|
|actualPayAmount|Integer|是|实际支付金额（分）|
|++originalAmount|Integer|是|订单原金额（分）|
|barCounter|String|否|桌台号|
|++canRefund|Boolean|是|是否能退货|
|needInvoice|Boolean|否|是否需要开发票|
|--orderInvoice|String|否|发票信息|
|orderClient|Integer|是|下单渠道|
|--node|String|否|订单备注|
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
|++needBonus|Integer|是|是否赠送积分0是1否|
|orderItemList|Array||订单商品信息|
|orderItemList/productSeq|Integer|是|商品序号|
|--orderItemList/productId|String|是|商品编号|
|++orderItemList/skuId|String|否|规格ID（多规格必传）|
|orderItemList/productName|String|是|商品名称|
|--orderItemList/productPrice|Integer|是|商品单价（分）|
|--orderItemList/productQuantity|int|是|数量|
|++orderItemList/total|int|是|总价|
|orderItemList/productSharePrice|Integer|否|优惠分摊金额（分）|
|++orderItemList/userPrice|Integer|否|用户看到价格（分）|
|--orderItemList/productWeightUnit|String|否|商品单位|
|orderItemList/weight|Integer|否|商品重量（克）|
|--orderItemList/productSpecName|String|否|商品规格名称（大杯）|
|--orderItemList/productProperty|String|否|商品属性名称（三分糖）|
|++orderItemList/specs|Array|否|多规格必传|
|++specs/name|String|是|规格名称（杯型）|
|++specs/value|String|是|规格值（大杯）|
|++itemList/attributes|Array|否|多属性|
|++attributes/name|String|是|属性名称（甜度）|
|++attributes/value|String|是|属性值（三分糖）|


### 响应参数
|   字段    |  类型  |        说明        |
| -------|  ----|  ----------------|
| orderCode | String | 订单号（成功则有） |



## 商家确认接单

### 接口说明

### 应用场景
第三方收到开个店新订单时，调用确认订单接口，确认第三方成功收到订单信息并可以接单制作
开个店会修改订单状态为已接单

### 请求url：/order/confirm
### 请求参数
|   字段    |  类型  | 是否必传 |                    说明                     |
| -------|  ----|  ------|  --------------------------------|
|    orderCode    | String |    是    |           订单号     |
| operator | String | 否 | 接单人 |
| timeout | Integer | 否 | 从接单开始计时，超时未制作的时间（单位：分钟）（具体见字段描述） |

### 响应参数



## 自配送开始配送

### 应用场景
第三方制作完成订单并送出开始配送时，调用自配送开始配送接口，确认订单已经进入配送状态
开个店会修改订单状态为配送中

### 请求url：/order/startDeliveryBySelf
### 请求参数
|   字段    |  类型  | 是否必传 |                说明                |
| -------|  ----|  ------|  -----------------------|
|    orderCode    | String |    是    |        订单号     |
| operator | String | 否 | 操作人 |
| timeout | Integer | 否 | 从此时开始，超时未完成的时间（单位：分钟）（具体见字段描述） |

### 响应参数
###

## 自配送完成送达(含堂食)

### 应用场景
第三方配送完成订单并确认订单操作流程完成时，调用自配送完成送达接口，确认订单已经进入完成状态
如订单为堂食订单，则制作完成并送出给用户时也可调用次接口完成订单流程
开个店会修改订单状态为已完成

### 请求url：/order/completeDeliveryBySelf
### 请求参数
|   字段    |  类型  | 是否必传 |                说明                |
| -------|  ----|  ------|  -----------------------|
|    orderCode    | String |    是    |        订单号     |
| operator | String | 否 | 操作人 |

### 响应参数

## 商家同意取消
### 请求url：/order/agreeRefund
### 请求参数
|   字段    |  类型  | 是否必传 |                说明               |
| ------- | ---- | ------ | -------------------------------- |
|    orderCode    | String |    是    |           订单号     |
| operator | String | 否 | 操作人 |

### 响应参数

只返回公共参数 状态码和message

## 商家拒绝取消
### 请求url：/order/disagreeRefund
### 请求参数
|   字段    |  类型  | 是否必传 |                    说明                     |
| ------- | ---- | ------ | -------------------------------- |
|    orderCode    | String |    是    |           订单号     |
| reason | String | 是 | 商家不同意取消原因 |
| operator | String | 否 | 操作人 |

### 响应参数

只返回公共参数 状态码和message

## 商家拒单

### 应用场景
第三方如需要有手动接单场景，则接收到开个店新订单时，在特殊情况下可以调用拒单接口，拒绝接收订单
开个店会修改订单状态为已拒单

### 请求url：/order/rejection
### 请求参数
|   字段    |  类型  | 是否必传 |                    说明                     |
| -------|  ----|  ------|  --------------------------------|
|    orderCode    | String |    是    |           订单号     |
| reasonCode | int | 是 | 见取消原因列表 |

### 响应参数
## 商家取消订单
### 应用场景
第三方如需要有手动接单场景，则接收到开个店新订单时，在特殊情况下可以调用取消接口，取消接收订单
开个店会修改订单状态为已取消

### 请求url：/order/cancel
### 请求参数
|   字段    |  类型  | 是否必传 |                    说明                     |
| -------|  ----|  ------|  --------------------------------|
|    orderCode    | String |    是    |           订单号     |

### 响应参数

## 推送新订单通知

由POS实现该接口，非码来调用，需要提供地址给到非码

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

### 响应参数

只需要返回公共参数 状态码和message 即可

## 订单状态变更推送

由POS实现该接口，非码来调用，需要提供地址给到非码

### 应用场景
第三方需要提供开个店回调地址
开个店所有订单状态由改变时回调第三方地址推送订单修改后状态


### 请求url：/order/statusChange
### 请求参数
|   字段    |  类型  | 是否必传 |                    说明                     |
| -------|  ----|  ------|  --------------------------------|
|    orderCode    | String |    是    |           订单号     |
| statusCode | String | 是 | 订单状态 |
| timeStamp | String | 是 | 状态变更时间戳 |

### 响应参数

只需要返回公共参数 状态码和message 即可


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
| 11   | :美团外卖        |
| 12   | 自营APP          |
| 13   | 开个店会员       |
| 14   | 开个店订货       |
| 15   | POS              |

### 订单状态

默认为待支付状态，如需要则设置对应的值

| 枚举值 | 说明             |
| ------ | ---------------- |
| 1      | 待支付           |
| 2      | 支付未接单       |
| 3      | 已接单           |
| 4      | 制作完成(待发货) |
| 5      | 配送中           |
| 6      | 已完成           |
| 7      | 已关闭           |

### 订单类型

| 枚举值 | 说明                    |
| :----- | :---------------------- |
| 1      | (店内自取实时-常规堂食) |
| 2      | (店内自取预约-预约堂食) |
| 3      | (店外快递实时-常规外送) |
| 4      | (店外快递预约-预约外送) |
| 5      | (店外自取实时-常规自取) |
| 6      | (店外自取预约-预约自取) |

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
