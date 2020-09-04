# 配送类接口

## 下单(配送单)

### 接口说明

# **1.1** 创建配送单

### 应用场景

第三方调用此接口发起开个店外卖订单配送

### 请求url：/delivery/createOrder

### 请求参数

| 字段      | 类型   | 是否必传 |  说明   |
| :-------- | ------ | -------- |  ------ |
| productInfos | List`<ProductInfo>` | 是  | 商品信息 |
| serialNumber  | String | 是    | 取餐号 |
| orderId  | String | 是 | 订单编号 |
| orderRemark  | String | 否  | 订单备注 |
| orderSource  | String | 否  | 订单来源 美团 ，饿了么，百度，口碑 等（中文） |
| orderTotalAmount  | Integer | 是 | 订单总金额(分) |
| orderActualAmount  | Integer | 是 | 订单实付金额(分) |
| depatchWeight  | Number | 否 | 订单重量（kg） |
| invoiceTitle  | String | 否 | 发票抬头 |
| partnerRemark  | String | 否 | 商户信息备注 |
| orderChannel  | String | 是| 订单渠道 |
| deliveryChannel  | String | 否 | 配送渠道 |
| isPre  | String | 是  | 是否预约单 ：０否　１是 |
| storeId  | String | 是 | 门店id |
| storeCode  | String | 是 | 第三方门店id |
| storeName  | String | 是 | 门店名称 |
| storeAddress  | String | 是  | 门店地址 |
| storeLng  | Number | 是| 门店经度 |
| storeLat  | Number | 是 | 门店纬度 |
| storePhone  | String | 是| 门店电话 |
| storeContact  | String | 否| 门店联系人 |
| receiverName  | String | 是| 收货人姓名 |
| receiverPrimaryPhone  | String | 是| 收货人联系方式 |
| receiverSecondPhone  | String | 否 | 收货人备用联系方式 |
| receiverAddress  | String | 是 | 收货人地址 |
| receiverLng  | Number | 是| 收货人经度 |
| receiverLat  | Number | 是| 收货人纬度 |
| cityName  | String | 是| 收件人所在城市 |
| deliveryServiceCode  | Integer | 否| 配送服务代码（飞速达:4002；快速达:4011；及时达:4012；集中送:4013） |
| productType  | Integer | 否| 商品类型 1送餐; 2送药; 3百货;4脏衣收; 5干净衣派;6生鲜; 7保单;8饮品；9现场勘查；99其他 |
| callbackUrl  | String | 是| 回调地址 |
| orderTime  | Date | 是| 用户下单时间 |
| expectTime  | Date | 否| 用户期望送达时间 |
| productInfos/productCode  | String | 是 |商品编号 |
| productInfos/productName  | String | 是| 商品名称 |
| productInfos/productNumber  | Integer | 是| 商品数量 |
| productInfos/productPrice  | Integer | 是| 商品价格（分） |
| productInfos/productSize  | Integer | 否| 商品尺寸 |
| productInfos/productRemark  | String | 否|  商品备注 |


#### requestBody请求示例

```json
{
	"ver":1,
	"partnerId":"2282",
	"appId":"d64ffb6dec2e498a814579b4b080706f",
	"requestBody":"{'callbackUrl': 'baidu.com','cityName': '上海','deliveryServiceCode': 4011,'depatchWeight': 2.5,'expectTime': '2018-11-26 11:11:11','isPre': 0,'orderActualAmount': '3500','orderChannel': '美团','orderId': '123456782118','orderRemark': '订单备注','orderSource': '美团','orderTime': '2018-11-26 11:11:11','orderTotalAmount': '3500','partnerRemark': 'remark','productInfos': [    {        'productName': '鱼香肉丝',        'productNumber': 1,        'productPrice': 2500,        'productRemark': '商品信息',        'productSize': 26    }],'productType': 1,'receiverAddress': '上海','receiverLat': 40.014098,'receiverLng': 116.352764,'receiverName': '刘德华','receiverPrimaryPhone': '1578565612356','receiverSecondPhone': '15895652365','serialNumber': '123','storeAddress': '上海','storeCode': '11047059','storeContact': '李姐','storeId': 'store-00002','storeLat': 42.267283,'storeLng': 121.377436,'storeName': '一号店','storePhone': '15689565265'}",
	"sign":"hFfOn1cyjGwnE7FF3DHjL5NSn+2YNsOABu41vv5EDbekNUWD9Xad2PVnPEHU2EFF+1fKSv6lL3lcJeNhmSaVsS9YLnadjc5qNymBl0AVw3wUwMC0syx02ttyHEwgNwFcxcxiz2khhNBMxTF5ueQGPBRfF6dtjmuTRRPpo39L9QhJHsixMi6C8OI874i/ZAPXzxLhwBZt7cJtqETvGLqLFJJv/9WRHKCjx3ZitmIgtazSxyAUzvw8HyDS4aeif+/Du7bTHTmc3Un+VzgiJFnpOBSEJX6OTVzY2scX6rt4ZCXcmYEgDMALbpmwonOuPKgJSpgPaQUOhKW9NrPRRFOXLg=="
	
}
```

### 响应参数

| **字段**                         | **类型** | **说明**                                                     |
| -------------------------------- | --------  | ------------------------------------------------------------ |
| deliveryId| String | 运单id| 

## 


#### responseBody返回示例

- 

  ```
  {
      "ver": "1",
      "statusCode": "100",
      "message": "成功",
      "responseBody":"{'deliveryId':'8a69475d72e9468abba383bc97f0b593'}"
      "sign": "NPCioG7Nr0t4BtrgCS2PeBX9VVqvvOPmtDzFEtc0wavJaexvDKhCjIgfVsI0xcubIFCOVbGk5fTS1vJxPLyHZIfxoVYh9giqCIQb4WoeELREm/MzebHrlki0tGKhQ0uOq68iWlGfOu8SXLjabWYEVg8C/FqBrz0Ed5sghDHuNbWxX/pxPjPAhN22o/2sF1BdAT9/vd/xcz3VhLu9Zzue6LggGV+Rl9WkAffkcqGGd79To5eA+e7b6ZD4fXrYnTOvpxRS8R76j15ZclTjsieCu5qmRoUegAB6aiyBJeJdFS8nx1DF9JRgO7GYHgELYpnY6WL9pQCTsXtSSgW8m4UclA=="
  }
  ```


## 状态码

| 状态码 | 描述 |
| ------ | ---- |
| 100    | 成功 |


# **1.2** 查询运单详情

### 应用场景

第三方调用此接口查询开个店运单详情

### 请求url：/delivery/getOrder

### 请求参数

| 字段      | 类型   | 是否必传 |  说明   |
| :-------- | ------ | -------- | ------ |
| deliveryId | String | 是      |运单id |




#### requestBody请求示例

```json
{
	"ver":1,
	"partnerId":"2282",
	"appId":"d64ffb6dec2e498a814579b4b080706f",
	"requestBody":"{'deliveryId':'8a69475d72e9468abba383bc97f0b593'}",
	"sign":"hFfOn1cyjGwnE7FF3DHjL5NSn+2YNsOABu41vv5EDbekNUWD9Xad2PVnPEHU2EFF+1fKSv6lL3lcJeNhmSaVsS9YLnadjc5qNymBl0AVw3wUwMC0syx02ttyHEwgNwFcxcxiz2khhNBMxTF5ueQGPBRfF6dtjmuTRRPpo39L9QhJHsixMi6C8OI874i/ZAPXzxLhwBZt7cJtqETvGLqLFJJv/9WRHKCjx3ZitmIgtazSxyAUzvw8HyDS4aeif+/Du7bTHTmc3Un+VzgiJFnpOBSEJX6OTVzY2scX6rt4ZCXcmYEgDMALbpmwonOuPKgJSpgPaQUOhKW9NrPRRFOXLg=="
	
}
```

### 响应参数

| **字段**                         | **类型**  | **说明**                                                     |
| -------------------------------- | ---- | ------------------------------------------------------------ |
| productInfos | List`<ProductInfo>`         | 商品信息 |
| deliveryId | String   | 配送单ID |
| serialNumber  | String | 取餐号 |
| orderId  | String | 订单编号 |
| orderRemark  | String |  订单备注 |
| orderSource  | String |  订单来源 美团 ，饿了么，百度，口碑 等（中文） |
| orderTotalAmount  | Integer |  订单总金额(分) |
| orderActualAmount  | Integer |  订单实付金额(分) |
| depatchWeight  | Number | 订单重量（kg） |
| invoiceTitle  | String  |  发票抬头 |
| depatchId  | String  |  批次号 |
| seq  | Integer  |  配送顺序 |
| partnerId  | String  |  商户号 |
| partnerRemark  | String   | 商户信息备注 |
| orderChannel  | String  | 订单渠道 |
| deliveryChannel  | String  | 配送渠道 |
| isPre  | String   | 是否预约单 ：０否　１是 |
| storeId  | String       | 门店id |
| storeCode  | String       | 第三方门店号 |
| storeName  | String      | 门店名称 |
| deliveryStatus  | Integer    | 配送状态(-1：待处理,0:待接单,1:系统接单,2:分配骑手,3:骑手到店,4:骑手取餐,5:开始配送,6:运单送达,7:运单异常,8:运单取消) |
| distance  | Integer      | 距离(米) |
| duration  | Integer      | 配送时长(分钟) |
| sendFee  | Integer      | 配送费(分)|
| sendFeeExtra  | Integer    | 额外追加费用（小费单位分） |
| settleType  | String      | 结算方式 |
| companyId  | String      | 配送公司编号 |
| depatchTime  | String      | 骑手分配时间(yyyy-MM-dd HH:mm:ss) |
| appointTime  | String     | 预计送达时间(yyyy-MM-dd HH:mm:ss) |
| sendTime  | String      | 送出时间(yyyy-MM-dd HH:mm:ss) |
| arriveShopTime  | String     | 到店时间(yyyy-MM-dd HH:mm:ss) |
| completeTime  | String      | 完成时间(yyyy-MM-dd HH:mm:ss) |
| customerSecondPhone  | String    | 客户备用手机号 |
| orginName  | String   | 出发地 |
| orginPoint  | String    | 出发地坐标|
| destName  | String   | 目的地 |
| destPoint  | String    | 目的地坐标 |
| destRemark  | String   | 目的地备注 |
| cityName  | String | 收件人所在城市 |
| customer  | String | 客户名 |
| deliveryServiceCode  | Integer  | 配送服务代码（飞速达:4002；快速达:4011；及时达:4012；集中送:4013） |
| productType  | Integer | 商品类型 1送餐; 2送药; 3百货;4脏衣收; 5干净衣派;6生鲜; 7保单;8饮品；9现场勘查；99其他 |
| callbackUrl  | String  | 回调地址 |
| remark  | String | 异常备注 |
| channelDeliveryId  | String  | 渠道订单号 |
| orderCancelDescription  | String  | 订单取消描述 |
| orderCancelCode  | Integer  | 取消原因码 |
| sysStatus  | Integer  | 系统状态 |
| isOpenPoll  | Integer | 是否开启自动轮询（0：否，1：是） |
| orderTime  | String  | 用户下单时间 |
| expectTime  | String    | 用户期望送达时间 |
| assignTimeoutTime  | String   | 待分配超时时间 |
| waitorderTimeoutTime  | String    | 接单超时时间 |
| unusualTime  | String    | 异常时间 |
| cancelTime  | String    | 取消时间 |
| receiveTime  | String    | 第三方接单时间 |
| deliveryTimeoutTime  | String   | 配送超时时间: 下单时间 + 配送时效 |
| assignType  | Integer    | 分配类型（1：系统自动分配 ，2：人工分配） |
| exceptionType  | Integer   | 异常类型（1：系统推单异常，2：系统接单异常，3：骑手上报异常，4：第三方上报异常） |
| isUseInsurance  | Integer  | 运单是否保价（0：否，1：是） |
| insuredPrice  | Integer   | 保价金额(分) |
| insuranceFee  | Integer    | 运单保价费用(分) |
| isAssignTimeOut  | Integer    | 是否分配超时(0：否，1：是) |
| isReceivedTimeOut  | Integer  | 是否第三方接单超时(0：否，1：是) |
| isDeliveryTimeOut  | Integer   | 是否配送超时(0：否，1：是) |
| destLongitude  | BigDecimal    | 收货人经度 |
| destLatitude  | BigDecimal    | 收货人纬度 |
| deliveryOverTime  | Integer    |距离配送超时分钟数：已超时为正数，提前送达为负数 |
| riderId  | String | 自配送骑手ID |
| riderName  | String | 骑手名字 |
| riderPhone  | String  | 骑手电话号码 |
| pollChannels  | String | 轮询过的渠道账号IDS（逗号分隔） |
| productInfos/productCode  | String | 商品编号 |
| productInfos/productName  | String | 商品名称 |
| productInfos/productNumber  | Integer  | 商品数量 |
| productInfos/productPrice  | Integer| 商品价格（分） |
| productInfos/productSize  | Integer  | 商品尺寸 |
| productInfos/productRemark  | String    | 商品备注 |
## 


#### responseBody返回示例

- 

  ```
  {
      "ver": "1",
      "statusCode": "100",
      "message": "成功",
      "responseBody":"{
                          'id': 347,
                          'deliveryId': '3426e25f34b1403e9c21036a6e49f7ab',
                          'orderId': '1234567821',
                          'orderSource': '美团',
                          'orderRemark': '订单备注',
                          'orderTotalAmount': 3500,
                          'orderActualAmount': 3500,
                          'depatchWeight': 2.5,
                          'invoiceTitle': null,
                          'depatchId': '571fd743ff6a44bd86da6eb928bdbd6b',
                          'seq': null,
                          'partnerId': '999',
                          'partnerRemark': 'remark',
                          'storeId': 'store-00002',
                          'storeName': '一号店',
                          'isAvailable': 1,
                          'orderChannel': '美团',
                          'deliveryChannel': 'SelfDelivery',
                          'isPre': 0,
                          'deliveryStatus': 2,
                          'distance': null,
                          'duration': null,
                          'sendFee': null,
                          'sendFeeExtra': null,
                          'settleType': null,
                          'companyId': null,
                          'storeCode': '11047059',
                          'depatchTime': null,
                          'appointTime': null,
                          'sendTime': null,
                          'arriveShopTime': null,
                          'completeTime': null,
                          'customerSecondPhone': null,
                          'orginName': '上海',
                          'orginPoint': '121.377436,42.267283',
                          'orginPhone': '15689565265',
                          'destName': '上海',
                          'destPoint': '116.352764,40.014098',
                          'destRemark': null,
                          'cityName': '上海',
                          'customer': '刘德华',
                          'customerPhone': '1578565612356',
                          'deliveryServiceCode': 4011,
                          'productType': 1,
                          'remark': null,
                          'createDate': '2018-11-23 14:42:01',
                          'createUser': 'fm_sys',
                          'updateDate': '2018-11-23 15:03:41',
                          'updateUser': null,
                          'channelDeliveryId': null,
                          'orderCancelCode': null,
                          'orderCancelDescription': null,
                          'callbackUrl': 'baidu.com',
                          'sysStatus': 3,
                          'orderTime': '2018-09-21 10:34:14',
                          'expectTime': '2018-09-21 10:34:14',
                          'searchKey': '1234567821,刘德华,关羽',
                          'riderId': '9455b505f4ff42cb9e99c75ed6e11928',
                          'riderName': '关羽',
                          'riderPhone': '1800000002',
                          'serialNumber': null,
                          'productInfoList': [
                            {
                              'productCode': null,
                              'productName': '鱼香肉丝',
                              'productNumber': 1,
                              'productPrice': 2500,
                              'productSize': 26,
                              'productRemark': '商品信息'
                            }
                          ]
                        }"
      "sign": "NPCioG7Nr0t4BtrgCS2PeBX9VVqvvOPmtDzFEtc0wavJaexvDKhCjIgfVsI0xcubIFCOVbGk5fTS1vJxPLyHZIfxoVYh9giqCIQb4WoeELREm/MzebHrlki0tGKhQ0uOq68iWlGfOu8SXLjabWYEVg8C/FqBrz0Ed5sghDHuNbWxX/pxPjPAhN22o/2sF1BdAT9/vd/xcz3VhLu9Zzue6LggGV+Rl9WkAffkcqGGd79To5eA+e7b6ZD4fXrYnTOvpxRS8R76j15ZclTjsieCu5qmRoUegAB6aiyBJeJdFS8nx1DF9JRgO7GYHgELYpnY6WL9pQCTsXtSSgW8m4UclA=="
  }
  ```


## 状态码

| 状态码 | 描述 |
| ------ | ---- |
| 100    | 成功 |


## 运单状态变更推送

### 接口说明

由调用方实现该接口，开个店来调用，需要提供地址给到开个店

### 应用场景

第三方需要提供开个店事件通知地址

开个店有运单状态变更时回调第三方地址推送运单状态变更信息

第三方可再通过运单详细接口查询新订单详细信息


### 请求url：由对接方提供
### 请求参数
|   字段    |  类型  | 是否必传 |                    说明                     |
| -------|  ----|  ------|  --------------------------------|
| orderId | String |    是    |        订单编号     |
| deliveryId | String | 是 | 运单编号 |
| deliveryStatus | Integer | 是 | 运单状态，详细示意请查看最下方的运单状态 |
| riderPhone | String | 否 | 骑手联系方式 |
| remark | String | 否 | 描述 |
| riderName | String | 否 | 骑手名称 |
| channelDeliveryId | String | 否 | 第三方配送渠道订单号 |
| partnerId | String | 是 | 商户编号 |
| storeId | String | 是 | 门店编号 |
| channelName | String | 否 | 渠道名称 |
| channelCode | String | 否 | 渠道短码 |
| cancelReasonId | Integer | 否 | 取消原因ID，详细示意请查看最下方的取消原因 |

#### requestBody请求示例

```json
{
    "deliveryId": "3426e25f34b1403e9c21036a6e49f7ab",
    "deliveryStatus": 8,
    "cancelReasonId": 2,
    "orderId": "14947740098045346600002",
    "partnerId": "2282",
    "storeId": "1030"
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

### 配送渠道

| SelfDelivery   | 自配送   |
| ---- | ---------------- |
| ShunFeng    | 顺丰             |
| MeiTuan    | 美团 |
| DaDa    | 达达           |
| FengNiao    | 蜂鸟      |
| DianWoDa    | 点我达      |
| DingDing   | 叮叮       |
| CanTingBao    | 餐厅宝           |
| ShanSong    | 闪送             |


### 运单状态

| 0   | 待接单   |
| ---- | ---------------- |
| 1    | 系统接单             |
| 2    | 分配骑手 |
| 3    | 骑手到店           |
| 4    | 骑手取餐      |
| 5    | 开始配送      |
| 6   | 运单送达       |
| 7    | 运单异常           |
| 8    | 运单取消             |

### 取消原因

| 1    | 没有配送员接单             |
| ---- | ---------------- |
| 2    | 配送员没来取货 |
| 3    | 配送员态度太差           |
| 4    | 顾客取消订单      |
| 5    | 商户取消订单      |
| 6   | 配送员让我取消此单       |
| 7    | 我不需要配送了           |
| 8    | 商户发错单             |
| 9    | 门店原因导致无法派单             |
| 10    | 订单填写错误             |
| 11    | 顾客自取/不在家/要求另改时间配送             |
| 12    | 异常取消             |
| 13    | 第三方接单超时取消             |


## 根据运单id查询骑手位置

### 应用场景

根据运单ID，订单ID查询骑手位置

### 请求url：/delivery/getRiderAddress

### 请求参数

| ***\*字段\**** | ***\*字段类型\**** | ***\*是否必填\**** | ***\*字段说明\**** |
| -------------- | ------------------ | ------------------ | ------------------ |
| deliveryId     | String             | 是                 | 运单编号           |
| orderId        | String             | 否                 | 订单编号           |

#### requestBody请求示例

```json
{
    "appId":"wxaa246",
    "partnerId":"1864",
    "requestBody":"",
    "sign":"skip",
    "ver":"1"
}
```

### 响应参数

| ***\*字段\****  | ***\*字段类型\**** | ***\*字段说明\**** |
| --------------- | ------------------ | ------------------ |
| riderName       | String             | 骑手名称           |
| riderPhone      | String             | 骑手手机           |
| riderPoint      | String             | 骑手位置           |
| deliveryRiderId | String             |                    |
| deliveryId      | String             |                    |

#### responseBody响应参数

```json
{
    "ver": "1",
    "statusCode": "100",
    "message": "成功",
    "responseBody": "",
    "sign": "YsAMGx/AMDiMGe9OFOxhtJTBX904Vuk1o+KLmGbmjQHkhyRmN0Be1aRTliAzvBwKRb96i9ZTTJcTx2htWQJgbfa3IdJYvk3CVjaW2TQC3rlHEuOgijNn6PLU1M75dode9PVPBaw7BVFZGAv3HcjdzXMWzPZZZaDK9jEW8gmwj7AqjnhHvSGOLrwzvoqrHzk2KzOtQGagHNwLmmaQGbWmRdzKNmPvFeSqJ52tZ7KPeTFEsdlFXkVdh3ChAAsL+R+JwXm7bWxrivwq2jkYaiHzBNniVGvKaZQxLUwiSkYnZqLP251BCaVqdHPFJnOHGHeUMiQX9Y/rOOkFkNR/4q3+8w=="
}
```

### 错误状态码

| ***\*状态码\**** | ***\*说明\**** |
| ---------------- | -------------- |
| 100              | 成功           |

## 取消配送单

### 功能描述

通过请求取消配送单接口，取消第三方渠道的配送单

### 请求url：/delivery/cancelOrder

### 请求参数

| ***\*字段\****         | ***\*字段类型\**** | ***\*是否必填\**** | ***\*字段说明\**** |
| ---------------------- | ------------------ | ------------------ | ------------------ |
| deliveryId             | string             | 是                 | 配送单ID           |
| orderCancelCode        | int                | 是                 | 取消原因类型       |
| orderCancelDescription | string             | 否                 | 取消原因描述       |

#### requestBody请求示例

```json
{
    "appId":"wxaa246",
    "partnerId":"1864",
    "requestBody":"{\"deliveryId\":\"11111\"}",
    "sign":"skip",
    "ver":"1"
}
```

#### 取消原因类型 （orderCancelCode枚举值）

| 状态码 | 描述                             |
| ------ | -------------------------------- |
| 1      | 没有配送员接单                   |
| 2      | 配送员没来取货                   |
| 3      | 配送员态度太差                   |
| 4      | 顾客取消订单                     |
| 5      | 商户取消订单                     |
| 6      | 配送员让我取消此单               |
| 7      | 我不需要配送了                   |
| 8      | 商户发错单                       |
| 9      | 门店原因导致无法派单             |
| 10     | 订单填写错误                     |
| 11     | 顾客自取/不在家/要求另改时间配送 |
| 12     | 异常取消                         |

### 响应参数

| ***\*字段\**** | ***\*字段类型\**** | ***\*字段说明\**** |
| -------------- | ------------------ | ------------------ |
| code           | int                | 接口响应code       |
| data           | object             | 消息体             |
| msg            | string             | 描述               |

#### responseBody响应参数

```json
{
    "ver": "1",
    "statusCode": "100",
    "message": "成功",
    "responseBody": null,
    "sign": "WSqhCU8+LZwsY3csJwDI75e/d1+vSsVmcqZMa4avS7B7ZyJpmBlN+Hyxd16n242QW5Pq+3crEl5WjzBCBbBsWJAAhvG5muwz3mQfZ/mkgNw61iY/SpHPPINZpQ5rQqLUC3u7yb+qPPAnS1Bxb1P8Of4XwLLwQtj1f+WoznYEfQ0/nUyMN/L8xwgY9bkZ22Gzl4zc39I37zkyddTCOrwSylxbH+fHB3y8NWG0Pa8x0/aJbXRvH0BggIPk2lUi8ZeBMOG+OR9UdHXSuBOD+FsRAaBzYvIACAeWa8evZlAahxxKaELGX9wWus1NxU7s0WvqlvBJzTtj1+g5spffWRhcUA=="
}
```

### 错误状态码

| ***\*状态码\**** | ***\*说明\**** |
| ---------------- | -------------- |
| 100              | 成功           |
| 1301             | 配送单不存在   |
| 1303             | 配送单状态有误 |
| 1311             | 取消失败       |

## 心跳检测

### 应用场景

心跳检测

### 请求url：/delivery/heartbeatDetection

### 请求参数

| ***\*字段\**** | ***\*字段类型\**** | ***\*是否必填\**** | ***\*字段说明\**** |
| -------------- | ------------------ | ------------------ | ------------------ |

#### requestBody请求示例

```json
{
    "appId":"wxaa246",
    "partnerId":"1864",
    "requestBody":"1",
    "sign":"skip",
    "ver":"1"
}
```

### 响应参数

| ***\*字段\****  | ***\*字段类型\**** | ***\*字段说明\**** |

#### responseBody响应参数

```json
{
    "ver": "1",
    "statusCode": "100",
    "message": "成功",
    "responseBody": null,
    "sign": "WSqhCU8+LZwsY3csJwDI75e/d1+vSsVmcqZMa4avS7B7ZyJpmBlN+Hyxd16n242QW5Pq+3crEl5WjzBCBbBsWJAAhvG5muwz3mQfZ/mkgNw61iY/SpHPPINZpQ5rQqLUC3u7yb+qPPAnS1Bxb1P8Of4XwLLwQtj1f+WoznYEfQ0/nUyMN/L8xwgY9bkZ22Gzl4zc39I37zkyddTCOrwSylxbH+fHB3y8NWG0Pa8x0/aJbXRvH0BggIPk2lUi8ZeBMOG+OR9UdHXSuBOD+FsRAaBzYvIACAeWa8evZlAahxxKaELGX9wWus1NxU7s0WvqlvBJzTtj1+g5spffWRhcUA=="
} 
```

### 错误状态码

| ***\*状态码\**** | ***\*说明\**** |
| ---------------- | -------------- |
| 100              | 成功           |