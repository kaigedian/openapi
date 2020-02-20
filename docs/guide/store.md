# 门店类接口

## 修改门店状态

### 应用场景

对门店进行开关店和置休开启

### 请求url：/store/setStoreStatus

### 请求参数

| 字段      | 类型   | 是否必传 | 举例               | 说明   |
| :-------- | ------ | -------- | ------------------ | ------ |
| storeId | String | 是       | 001               | 门店编号 |
| operator  | String | 是       | 非码小二 | 操作人 |
| storeEvent  | Integer | 是       | 1 | 门店状态参数(1-营业 2-停业 3-置休 4-开启) |


#### requestBody请求示例

```json
{
	"ver":1,
	"partnerId":"2282",
	"appId":"d64ffb6dec2e498a814579b4b080706f",
	"requestBody":"{'storeId':'001','operator':'非码小二','storeEvent':1}",
	"sign":"hFfOn1cyjGwnE7FF3DHjL5NSn+2YNsOABu41vv5EDbekNUWD9Xad2PVnPEHU2EFF+1fKSv6lL3lcJeNhmSaVsS9YLnadjc5qNymBl0AVw3wUwMC0syx02ttyHEwgNwFcxcxiz2khhNBMxTF5ueQGPBRfF6dtjmuTRRPpo39L9QhJHsixMi6C8OI874i/ZAPXzxLhwBZt7cJtqETvGLqLFJJv/9WRHKCjx3ZitmIgtazSxyAUzvw8HyDS4aeif+/Du7bTHTmc3Un+VzgiJFnpOBSEJX6OTVzY2scX6rt4ZCXcmYEgDMALbpmwonOuPKgJSpgPaQUOhKW9NrPRRFOXLg=="

}
```

### 响应参数

| **字段**                         | **类型** | 举例 | **说明**                                                     |
| -------------------------------- | -------- | ---- | ------------------------------------------------------------ |


#### responseBody返回示例

-

  ```
  {
      "ver": "1",
      "statusCode": "100",
      "message": "成功",
      "sign": "NPCioG7Nr0t4BtrgCS2PeBX9VVqvvOPmtDzFEtc0wavJaexvDKhCjIgfVsI0xcubIFCOVbGk5fTS1vJxPLyHZIfxoVYh9giqCIQb4WoeELREm/MzebHrlki0tGKhQ0uOq68iWlGfOu8SXLjabWYEVg8C/FqBrz0Ed5sghDHuNbWxX/pxPjPAhN22o/2sF1BdAT9/vd/xcz3VhLu9Zzue6LggGV+Rl9WkAffkcqGGd79To5eA+e7b6ZD4fXrYnTOvpxRS8R76j15ZclTjsieCu5qmRoUegAB6aiyBJeJdFS8nx1DF9JRgO7GYHgELYpnY6WL9pQCTsXtSSgW8m4UclA=="
  }
  ```


### 状态码

| 状态码 | 描述 |
| ------ | ---- |
| 100    | 成功 |


## 修改门店配置

### 应用场景

修改门店订单超时时间

### 请求url：/store/setStoreConfig

### 请求参数

| 字段      | 类型   | 是否必传 | 举例               | 说明   |
| :-------- | ------ | -------- | ------------------ | ------ |
| storeId | String | 是       | 001               | 门店编号 |
| operator  | String | 是       | 非码小二 | 操作人 |
| autoSelfmentionTakeOrderWorkflowFinishTime  | String | 否       | 1 | 自提单接单后自动流程时间  （1:2小时;2:1小时;3:30分钟;4:15分钟;5:10分钟;6:5分钟） |
| autoSelfmentionMakerWorkflowFinishTime  | String | 否       | 1 | 自提单制作完成后自动流程时间 （1:2小时;2:1小时;3:30分钟;4:15分钟;5:10分钟;6:5分钟） |
| autoTakeOutTakeOrderWorkflowFinishTime  | String | 否       | 1 | 自配送外卖单接单后自动流程时间 (1:2小时;2:1小时;3:30分钟;4:15分钟;5:10分钟;6:5分钟) |
| autoDeliveryTakeOrderWorkflowFinishTime  | String | 否       | 1 | 自配送外卖单配送后自动流程时间 (1:2小时;2:1小时;3:30分钟;4:15分钟;5:10分钟;6:5分钟) |
| autoChargebackOrderTime  | String | 否       | 1 | 自动退单时间 ( 1:2小时;2:1小时;3:30分钟;4:15分钟;5:10分钟;6:5分钟) |
| autoChargebackOrderType  | String | 否       | 1 | 退单类型 （1手动退单2自动退单） |
| autoOrderPrintConfig  | String | 否       | 1 | 打印模式 （1自动打印2手动打印） |




#### requestBody请求示例

```json
{
	"ver":1,
	"partnerId":"2282",
	"appId":"d64ffb6dec2e498a814579b4b080706f",
	"requestBody":"{'storeId':'001','operator':'非码小二','autoSelfmentionTakeOrderWorkflowFinishTime':'1','autoSelfmentionMakerWorkflowFinishTime':'1','autoTakeOutTakeOrderWorkflowFinishTime':'1','autoDeliveryTakeOrderWorkflowFinishTime':'1','autoChargebackOrderTime':'1','autoChargebackOrderType':'1','autoOrderPrintConfig':'1'}",
	"sign":"hFfOn1cyjGwnE7FF3DHjL5NSn+2YNsOABu41vv5EDbekNUWD9Xad2PVnPEHU2EFF+1fKSv6lL3lcJeNhmSaVsS9YLnadjc5qNymBl0AVw3wUwMC0syx02ttyHEwgNwFcxcxiz2khhNBMxTF5ueQGPBRfF6dtjmuTRRPpo39L9QhJHsixMi6C8OI874i/ZAPXzxLhwBZt7cJtqETvGLqLFJJv/9WRHKCjx3ZitmIgtazSxyAUzvw8HyDS4aeif+/Du7bTHTmc3Un+VzgiJFnpOBSEJX6OTVzY2scX6rt4ZCXcmYEgDMALbpmwonOuPKgJSpgPaQUOhKW9NrPRRFOXLg=="

}
```

### 响应参数

| **字段**                         | **类型** | 举例 | **说明**                                                     |
| -------------------------------- | -------- | ---- | ------------------------------------------------------------ |


#### responseBody返回示例

```json
{
    "ver": "1",
    "statusCode": "100",
    "message": "成功",
    "sign": "NPCioG7Nr0t4BtrgCS2PeBX9VVqvvOPmtDzFEtc0wavJaexvDKhCjIgfVsI0xcubIFCOVbGk5fTS1vJxPLyHZIfxoVYh9giqCIQb4WoeELREm/MzebHrlki0tGKhQ0uOq68iWlGfOu8SXLjabWYEVg8C/FqBrz0Ed5sghDHuNbWxX/pxPjPAhN22o/2sF1BdAT9/vd/xcz3VhLu9Zzue6LggGV+Rl9WkAffkcqGGd79To5eA+e7b6ZD4fXrYnTOvpxRS8R76j15ZclTjsieCu5qmRoUegAB6aiyBJeJdFS8nx1DF9JRgO7GYHgELYpnY6WL9pQCTsXtSSgW8m4UclA=="
}
```


### 状态码

| 状态码 | 描述 |
| ------ | ---- |
| 100    | 成功 |



## 同步门店信息

### 应用场景

根据操作标识,创建与更新门店信息

### 请求url：/store/sync

### 请求参数

| 字段      | 类型   | 是否必传 | 举例               | 说明   |
| :-------- | ------ | -------- | ------------------ | ------ |
| storeName | string | 是 |  | 门店名称 |
| storeId | string | 是 | 1033 | 门店ID |
| parentCode  | string |  |  | 上级编码 |
| activeFlag | string | 是 |  | 状态（1有效 0无效） |
| typeFlag | string | 是 |  | 类型（3门店） |
| briefName | string |  |  | 简称 |
| longitude | string |  |  | 经度(火星坐标,gcj02) |
| latitude | string |  |  | 纬度(火星坐标,gcj02) |
| businessHours | string |  |  | 营业时间例如08:00-20:00 多个以英文;分隔，支持7天 |
| phone | String |  |  | 电话号码 |
| address | String |  |  | 地址 |
| remark | String |  |  | 介绍 |
| receiptFlag | String |  |  | 支持开发票1支持 2不支持 |
| deliveryHours | String |  |  | 配送时间 例如08:00-20:00 多个以英文;分隔，支持7天 |
| delivery | String |  |  | 是否开通delivery（1是 2否） |
| deliveryPrice | Double |  |  | 配送价格,元（最多2位小数） |
| freeDeliveryPrice | Double |  |  | 起送费价格,元（最多2位小数） |
| deliveryRadius | Integer |  |  | 配送半径,整型，单位米 |
| distributionScope | String |  |  | 配送范围,所有点的经纬度集合,以英文逗号分隔 |
| scopeConfig | String |  |  | 配送范围绘制{1：自定义；2：按半径},默认为1 |
| serviceTime | Integer |  |  | 预计送达时间,单位分钟 |
| orderWarnTime | String |  |  | 预订单提醒时间{1:15分钟;2:30分钟;3:45分钟;4:60分钟} 默认为1 |
| orderPrintConfig | String |  |  | 预订单打印时间{1：提醒时打印；2：接单时打印} 默认为1 |
| maxOrderQuantity | Integer |  |  | 最大接单量,单位笔 |
| storeContacts | String |  |  | 门店联系人 |
| storeNotice | String |  |  | 门店公告 |
| breakNotice | String |  |  | 休息公告 |
| productCategory | String |  |  | 商品品类 |
| minPriceForInvoice | String |  |  | 可开票的最小价格 |
| invoiceExplain | String |  |  | 发票特殊说明 |
| packageCharge | String |  |  | 打包费 |
| preOrderSetInTime | Integer |  |  | 营业时间范围内的预下单设置 |
| preOrderSetOutOfTime | Integer  |  |  | 营业时间范围外的预下单设置 |
| isBook | Integer |  |  | 是否支持预定(1是2否) |
| delayDeliveryTime | Integer |  |  | 门店延迟发配送时间 |
| isOnlineReturnOrder | Integer |  |  | 是否支持在线退单(1是2否) |
| isAutoTakeOrder | Integer |  |  | 是否支持自动接单(1是2否) |
| logoUrl | String |  |  | 门店logo |
| isBusinessOpen | Integer |  |  | 是否营业(1营业2置休) |
| deliveryRemark | String |  |  | 配送说明 |
| storeSquare | String |  |  | 门店面积，单位m2 |
| storeAttributee | Integer |  |  | 门店属性（1直营店 2加盟店） |
| storeType | Integer |  |  | 门店分类（1社区店 2仓储店） |
| isSelfMention | Integer |  |  | 到店自取（1是 2否） |
| operateUserId | String |  |  | 操作人编号 |
| ThirdPartCode | String |  |  | 第三方编号 |
| StoreMobile | String |  |  | 门店手机号 |
| customerServicePhone | String |  |  | 客服电话 021-1111111 |
| platformStoreIds | List ||| 平台门店Id{"channelCode":"mt","storeId":"231234"}

### channelCode
| 字段      | 类型   |
| :-------- | ------ |
| channelName|  channelCode|
| 京东外卖|  jdwm|
| 滴滴外卖|  ddwm|
| 饿了么外卖|  eleme|
| 百度外卖|  bdwm|
| 小程序|  mall|
| 美团外卖|  mtwm|
| 饿百外卖|  ebwm|
| 口碑外卖|  koubeiwaimai|

#### requestBody请求示例

```json
{
    "ver":1,
    "partnerId":"1864",
    "appId":"2eb5c8f1170246429755e6dac313f89d",
    "requestBody":"{\"operationType\":\"0\",\"parentCode\":\"201904231\",\"storeId\":\"4455\",\"storeName\":\"测试门店\",\"typeFlag\":\"3\",\"activeFlag\":\"1\",\"logoUrl\":\"http://pic1.nipic.com/2008-12-15/20081215211851562_2.jpg\",\"freeDeliveryPrice\":1.0}",
    "sign":"skip"
}
```

### 响应参数

| **字段**                         | **类型** | 举例 | **说明**                                                     |
| -------------------------------- | -------- | ---- | ------------------------------------------------------------ |



#### responseBody返回示例

```json
{
    "ver": "1",
    "statusCode": "100",
    "message": "成功",
    "sign": "NPCioG7Nr0t4BtrgCS2PeBX9VVqvvOPmtDzFEtc0wavJaexvDKhCjIgI0xcubIFCOVbGk5fTS1vJxPLyHZIfxoVYh9giqCIQb4WoeELREm/MzebHrlki0tGKhQ0uOq68iWlGfOu8SXLjabWYEVg8C/FqBrz0Ed5sghDHuNbWxX/pxPjPAhN22o/2sF1BdAT9/vd/xcz3VhLu9Zzue6LggGV+Rl9WkAffkcqGGd79To5eA+e7b6ZD4fXrYnTOvpxRS8R76j15ZclTjsieCu5qmRoUegAB6aiyBJeJdFS8nx1DF9JRgO7GYHgELYpnY6WL9pQCTsXtSSgW8m4UclA=="
}
```


### 状态码

| 状态码 | 描述 |
| ------ | ---- |
| 100    | 成功 |



## 门店营业时间更新

### 应用场景

修改门店营业时间

### 请求url：/store/setBusinsessHours

### 请求参数

| 字段      | 类型   | 是否必传 | 举例               | 说明   |
| :-------- | ------ | -------- | ------------------ | ------ |
| businessHours | string | 是 |  |  是营业时间 例如08:00-20:00 多个以英文;分隔，支持7天 |
| operator | string | 是 |  | 操作人 |
| storeId | string | 是 |  | 门店ID |
| parentCode | String | 是 |  | 上级编号 |




#### requestBody请求示例

```json
{
	"ver": 1,
	"partnerId": "1864",
	"appId": "2eb5c8f1170246429755e6dac313f89d",
	"requestBody": "{\"businessHours\":\"08:30-22:00\",\"storeId\":\"1100\",\"operator\":\"飞码小二\",\"questeBy\":\"001\",\"parentCode\":\"201904231\"}",
	"sign": "skip"
}
```

### 响应参数

| **字段**                         | **类型** | 举例 | **说明**                                                     |
| -------------------------------- | -------- | ---- | ------------------------------------------------------------ |



#### responseBody返回示例


```json
{
    "ver": "1",
    "statusCode": "100",
    "message": "成功",
    "sign": "NPCioG7Nr0t4BtrgCS2PeBX9VVqvvOPmtDzFEtc0wavJaexvDKhCjIgfVsI0xcubIFCOVbGk5fTS1vJxPLyHZIfxoVYh9giqCIQb4WoeELREm/MzebHrlki0tGKhQ0uOq68iWlGfOu8SXLjabWYEVg8C/FqBrz0Ed5sghDHuNbWxX/pxPjPAhN22o/2sF1BdAT9/vd/xcz3VhLu9Zzue6LggGV+Rl9WkAffkcqGGd79To5eA+e7b6ZD4fXrYnTOvpxRS8R76j15ZclTjsieCu5qmRoUegAB6aiyBJeJdFS8nx1DF9JRgO7GYHgELYpnY6WL9pQCTsXtSSgW8m4UclA=="
}
```


### 状态码

| 状态码 | 描述 |
| ------ | ---- |
| 100    | 成功 |



## 门店列表查询

### 应用场景

根据条件查询对应门店

### 请求url：/store/getStoreList

### 请求参数

| 字段      | 类型   | 是否必传 | 举例               | 说明   |
| :-------- | ------ | -------- | ------------------ | ------ |
| activeFlag | Integer | 否 | 是否有效 |
| pageNo | Integer | 是 | 页码 |
| pageSize | Integer | 是 | 每页显示条数 |
| typeFlag | Integer | 否 | 类型（1总公司 2公司3门店），不传默认为3 |




#### requestBody请求示例

```json
{
    "appId":"2eb5c8f1170246429755e6dac313f89d",
    "partnerId":"1864",
    "requestBody":"{\"pageNo\":\"1\",\"pageSize\":\"10\",\"activeFlag\":\"1\"}",
    "sign":"skip",
    "ver":"1"
}
```

### 响应参数

| **字段**                         | **类型** | 举例 | **说明**                                                     |
| -------------------------------- | -------- | ---- | ------------------------------------------------------------ |
| storeName | string | 否 | 门店名称 |
| storeId | string | 否 | 门店号 |
| longitude | String | 否 | 经度(火星坐标,gcj02) |
| latitude | String | 否 | 纬度(火星坐标,gcj02) |
| businessHours | String | 否 | 营业时间段 |
| typeFlag | String | 否 | （1总公司 2公司3门店） |
| activeFlag | String | 否 | 状态（1有效 0无效 |
| delivery | String | 否 | 是否开通delivery |
| isBusinessOpen | String | 否 | 是否营业(1营业2置休) |
| businessType | String | 否 | 营业时间类型(1按天2按周3自定义) |
| isSelfMention | String | 否 | 到店自取（1是 2否） |



#### responseBody返回示例


```json
{
    "ver": "1",
    "statusCode": "100",
    "message": "成功",
    "requestBody":"[{\"storeName\":\"xxx店\",\"storeId\":1033,\"longitude\":\"14.222\",\"latitude\":\"31.222\",\"businessHours\":\"08:00-12:00\",\"typeFlag\":3,\"activeFlag\":\"1\",\"delivery\":\"1\",\"isBusinessOpen\":1,\"businessType\":\"1\",\"isSelfMention\":\"1\"}]",
    "sign": "NPCioG7Nr0t4BtrgCS2PeBX9VVqvvOPmtDzFEtc0wavJaexvDKhCjIgfVsI0xcubIFCOVbGk5fTS1vJxPLyHZIfxoVYh9giqCIQb4WoeELREm/MzebHrlki0tGKhQ0uOq68iWlGfOu8SXLjabWYEVg8C/FqBrz0Ed5sghDHuNbWxX/pxPjPAhN22o/2sF1BdAT9/vd/xcz3VhLu9Zzue6LggGV+Rl9WkAffkcqGGd79To5eA+e7b6ZD4fXrYnTOvpxRS8R76j15ZclTjsieCu5qmRoUegAB6aiyBJeJdFS8nx1DF9JRgO7GYHgELYpnY6WL9pQCTsXtSSgW8m4UclA=="
}
```


## 状态码

| 状态码 | 描述 |
| ------ | ---- |
| 100    | 成功 |




## 门店详情查询

### 应用场景

根据门店号查询详情

### 请求url：/store/getStoreInfo

### 请求参数

| 字段      | 类型   | 是否必传 | 举例               | 说明   |
| :-------- | ------ | -------- | ------------------ | ------ |
| storeId | String | 是 | 10333 | 门店号 |





#### requestBody请求示例

```json
{"ver":1,"partnerId":"1864","appId":"2eb5c8f1170246429755e6dac313f89d","requestBody":"{\"storeId\":\"666888\"}","sign":"skip"}
```

### 响应参数

| **字段**                         | **类型** | 举例 | **说明**                                                     |
| -------------------------------- | -------- | ---- | ------------------------------------------------------------ |
| storeName | string |  | 门店名称 |
| storeId | string |  | 门店编号 |
| activeFlag | string |  | 状态（1有效 0无效） |
| briefName | string |  | 简称 |
| longitude | string |  | 经度(火星坐标,gcj02) |
| longitude | string |  | 纬度(火星坐标,gcj02) |
| businessHours | string |  | 营业时间 例如08:00-20:00 多个以英文;分隔，支持7天 |
| phone | string |  | 电话号码 |
| address | string |  | 地址 |
| province | string |  | 省，文字，非编码 |
provinceCode | string |  | 省份编号 |
city | string |  | 市，文字，非编码 |
locationCode | string |  | 市编号 |
remark | string |  | 介绍 |
freeDeliveryPrice | double |  | 起送费，元 |
serviceTime | integer |  | 预计送达时间，单位分钟 |
deliveryRadius | integer |  | 配送半径，单位米 |
distributionScope | string |  | 配送范围，经纬度点集合，以英文逗号分隔 |
scopeConfig | string |  | 配送范围绘制（1、自定义2、按半径） |
deliveryPrice | double |  | 配送价格，元 |
orderWarnTime | string |  | 预订单提醒时间 |
orderPrintCofing | string |  | 预订单打印时间 |
maxOrderQuantity | integer |  | 最大接单量 |
receiptFlag | String |  | 支持开发票1支持 2不支持 |
delivery | String |  | 是否开通delivery（1是 2否） |
deliveryHours | String |  | 配送时间 例如08:00-20:00 多个以英文;分隔，支持7天 |
businessHoursDay | String |  | 当日营业时间 |
deliveryHoursDay | String |  | 当日配送时间 |
serviceTime | Integer |  | 预计送达时间,单位分钟 |
storeContacts | String |  | 门店联系人 |
storeNotice    | String |  | 门店公告 |
/breakNotice  | String |  | 休息公告 |
packageCharge    | String |  | 打包费 |
logoUrl        | String |  | 门店logo |
isBusinessOpen | String |  | 是否营业(1营业2置休) |
isSelfMention | Integer |  | 到店自取（1是 2否） |
thirdPartCode | String |  | 第三方编号 |
storeMobile | String |  | 门店手机号 |
storeConfig | json |  | 门店json配置 |
storeConfig/autoSelfmentionTakeOrderWorkflowFinishTime | String |  | 1:2小时;2:1小时;3:30分钟;4:15分钟;5:10分钟;6:5分钟; |
storeConfig/autoSelfmentionMakerWorkflowFinishTime | String |  | 1:2小时;2:1小时;3:30分钟;4:15分钟;5:10分钟;6:5分钟; |
storeConfig/autoTakeOutTakeOrderWorkflowFinishTime | String |  | 1:2小时;2:1小时;3:30分钟;4:15分钟;5:10分钟;6:5分钟; |
storeConfig/autoDeliveryTakeOrderWorkflowFinishTime | String |  | 1:2小时;2:1小时;3:30分钟;4:15分钟;5:10分钟;6:5分钟; |
storeConfig/autoChargebackOrderTime | String |  | 1:2小时;2:1小时;3:30分钟;4:15分钟;5:10分钟;6:5分钟; |
storeConfig/autoChargebackOrderType | String |  | 1手动退单2自动退单 |
storeConfig/autoOrderPrintConfig | String |  | 1自动打印2手动打印 |




#### responseBody返回示例

-

  ```
  {
      "ver": "1",
      "statusCode": "100",
      "message": "成功",
	  "requestBody":"[{\"activeFlag\": 1,\"address\": \"沪宜公路1003号\",\"bannerSpeed\": 10,\"breakNotice\": \"\",\"briefName\": \"\",\"businessHours\": \"00:30-23:30\",\"businessHoursDay\": \"00:30-23:30\",\"businessType\": \"1\",\"city\": \"上海市\",\"collection\": \"0\",\"countryCode\": \"7\",\"countryName\": \"中国\",\"delayDeliveryTime\": \"\",\"delivery\": \"2\",\"deliveryArea\": \"\",\"deliveryHours\": \"\",\"deliveryHoursDay\": \"\",\"deliveryPrice\": 0,\"deliveryRadius\": null,\"deliveryRemark\": \"\",\"distance\": \"\",\"distributionScope\": \"\",\"freeDeliveryPrice\": 0,\"invoiceExplain\": \"\",\"isAutoTakeOrder\": \"\",\"isBook\": \"\",\"isBusinessOpen\": \"\",\"isOnlineReturnOrder\": \"\",\"isSelfMention\": 1,\"latitude\": \"31.293201\",\"locationCode\": \"310100\",\"logoUrl\": \"https://picture.sandload.cn/1560754935386.png\",\"longitude\": \"121.304399\",\"maxOrderQuantity\": 100,\"minPriceForInvoice\": \"\",\"orderPrintConfig\": \"1\",\"orderWarnTime\": \"1\",\"packageCharge\": \"\",\"parentCode\": \"H00622\",\"parentId\": \"093d1a9e-8bd2-4df2-a923-930df0fa1012\",\"parentName\": \"福建达利园\",\"partnerId\": \"1864\",\"phone\": \"15956904546\",\"placeOrderFlag\": \"1\",\"preOrderSetInTime\": \"\",\"preOrderSetOutOfTime\": \"\",\"priceType\": \"\",\"productCategory\": \"\",\"province\": \"上海市\",\"provinceCode\": \"310000\",\"purchaseCode\": \"\",\"receiptFlag\": \"\",\"region\": \"嘉定区\",\"regionCode\": \"310114\",\"remark\": \"\",\"scopeConfig\": \"2\",\"scopeTagIds\": \"\",\"scopeTagNames\": \"\",\"serviceTime\": 0,\"state\": \"1\",\"storeAttributee\": null,\"storeId\": \"0000908\",\"storeConfig\": {  \"autoDeliveryTakeOrderWorkflowFinishTime\": \"1\",  \"autoOrderPrintConfig\": \"1\",  \"autoChargebackOrderTime\": \"1\",  \"autoSelfmentionMakerWorkflowFinishTime\": \"1\",  \"autoTakeOutTakeOrderWorkflowFinishTime\": \"1\",  \"autoSelfmentionTakeOrderWorkflowFinishTime\": \"1\",  \"autoChargebackOrderType\": \"1\"},\"storeContacts\": \"\",\"storeDelivery\": null,\"storeMobile\": \"\",\"storeName\": \"三虎测试门店\",\"storeNotice\": \"\",\"storeSquare\": \"\",\"storeType\": null,\"thirdPartCode\": \"\",\"typeFlag\": 3,\"userId\": \"\",\"zhouCode\": \"1\",\"zhouName\": \"亚洲\"}]",
      "sign": "NPCioG7Nr0t4BtrgCS2PeBX9VVqvvOPmtDzFEtc0wavJaexvDKhCjIgfVsI0xcubIFCOVbGk5fTS1vJxPLyHZIfxoVYh9giqCIQb4WoeELREm/MzebHrlki0tGKhQ0uOq68iWlGfOu8SXLjabWYEVg8C/FqBrz0Ed5sghDHuNbWxX/pxPjPAhN22o/2sF1BdAT9/vd/xcz3VhLu9Zzue6LggGV+Rl9WkAffkcqGGd79To5eA+e7b6ZD4fXrYnTOvpxRS8R76j15ZclTjsieCu5qmRoUegAB6aiyBJeJdFS8nx1DF9JRgO7GYHgELYpnY6WL9pQCTsXtSSgW8m4UclA=="
  }
  ```


### 状态码

| 状态码 | 描述 |
| ------ | ---- |
| 100    | 成功 |




## 渠道分组列表查询

### 应用场景

查询商户对应的渠道分组信息

### 请求url：/store/channelList

### 请求参数

| 字段      | 类型   | 是否必传 | 举例               | 说明   |
| :-------- | ------ | -------- | ------------------ | ------ |
| activeFlag | Integer | 否 |  | 是否有效（0无效，1有效） |
| typeFlag | Integer | 否 |  | 类型（1总公司 2公司），不传默认为全部 |
| pageNo | Integer | 是 |  | 页码 |
| pageSize | Integer | 是 |  | 每页显示条数 |



#### requestBody请求示例

```
{
    "appId":"2eb5c8f1170246429755e6dac313f89d",
    "partnerId":"1864",
    "requestBody":"{\"pageNo\":1,\"pageSize\":10}",
    "sign":"skip",
    "ver":"1"
}

```

### 响应参数

| **字段**                         | **类型** | 举例 | **说明**                                                     |
| ------- | ------ | -- | -- |
| organizationId | String |  | 组织Id |
| organizationCode | String |  | 组织编号 |
| organizationName | String |  | 组织名称 |
| parentCode | String |  | 上级组织编号 |
| parentName | String |  | 上级组织名称 |
| phone | String |  | 电话号码 |
| address | String |  | 地址 |
| typeFlag | Integer |  | （1总公司 2公司） |
| activeFlag | Integer |  | 状态（1有效 0无效） |
| remark | String |  | 介绍 |
| province | String |  | 省，文字，非编码 |
| city | String |  | 市，文字，非编码 |
| region | String |  | 区，文字，非编码 |
| partnerId | String |  | 商户编号 |




#### responseBody返回示例


```json
{
    "ver": "1",
    "statusCode": "100",
    "message": "成功",
    "requestBody":"[{\"activeFlag\": 1,\"address\": \"\",\"briefName\": \"\",\"city\": \"\",\"cityCode\": \"\",\"countryCode\": \"7\",\"storeId\": \"H00622\",\"storeName\": \"福建达利园\",\"parentCode\": \"2019042317\",\"parentName\": \"sass非码网络科技广州分公司\",\"partnerId\": \"186\",\"phone\": \"\",\"province\": \"\",\"provinceCode\": \"\",\"region\": \"\",\"regionCode\": \"\",\"remark\": \"\",\"typeFlag\": 2,\"zhouCode\": \"1\"}]",
    "sign": "NPCioG7Nr0t4BtrgCS2PeBX9VVqvvOPmtDzFEtc0wavJaexvDKhCjIgfVsI0xcubIFCOVbGk5fTS1vJxPLyHZIfxoVYh9giqCIQb4WoeELREm/MzebHrlki0tGKhQ0uOq68iWlGfOu8SXLjabWYEVg8C/FqBrz0Ed5sghDHuNbWxX/pxPjPAhN22o/2sF1BdAT9/vd/xcz3VhLu9Zzue6LggGV+Rl9WkAffkcqGGd79To5eA+e7b6ZD4fXrYnTOvpxRS8R76j15ZclTjsieCu5qmRoUegAB6aiyBJeJdFS8nx1DF9JRgO7GYHgELYpnY6WL9pQCTsXtSSgW8m4UclA=="
}
```


### 状态码

| 状态码 | 描述 |
| ------ | ---- |
| 100    | 成功 |


## 同步渠道分组

### 应用场景

根据操作类型创建或修改渠道分组

### 请求url：/store/channelSync

### 请求参数

| 字段      | 类型   | 是否必传 | 举例               | 说明   |
| :-------- | ------ | -------- | ------------------ | ------ |
| organizationCode | String | 是 |  | 组织编号 |
| organizationName | String | 是 |  | 组织名称 |
| parentCode | String | 是 |  | 上级组织编号(为空时这条记录是总公司，总公司只有一条) |
| typeFlag | Integer |是  |  | （1总公司 2公司） 总公司就只有一条记录 |
| activeFlag | Integer | 是 |  | 状态（1有效 0无效）,默认为1 |
| phone | String |  |  | 电话号码 |
| address | String |  |  | 地址 |
| remark | String |  |  | 介绍 |


#### requestBody请求示例

```json
{
	"appId": "2eb5c8f1170246429755e6dac313f89d",
	"partnerId": "1864",
	"requestBody": "{\"activeFlag\":1,\"operationType\":\"0\",\"organizationCode\":\"test02\",\"organizationName\":\"上海分公2司\",\"parentCode\":\"201904231\",\"phone\":\"136212758805\",\"typeFlag\":2}",
	"sign": "skip",
	"ver": "1"
}
```

### 响应参数

| **字段**                         | **类型** | 举例 | **说明**                                                     |
| ------- | ------ | -- | -- |




#### responseBody返回示例

```json
{
    "ver": "1",
    "statusCode": "100",
    "message": "成功",
    "sign": "NPCioG7Nr0t4BtrgCS2PeBX9VVqvvOPmtDzFEtc0wavJaexvDKhCjIgfVsI0xcubIFCOVbGk5fTS1vJxPLyHZIfxoVYh9giqCIQb4WoeELREm/MzebHrlki0tGKhQ0uOq68iWlGfOu8SXLjabWYEVg8C/FqBrz0Ed5sghDHuNbWxX/pxPjPAhN22o/2sF1BdAT9/vd/xcz3VhLu9Zzue6LggGV+Rl9WkAffkcqGGd79To5eA+e7b6ZD4fXrYnTOvpxRS8R76j15ZclTjsieCu5qmRoUegAB6aiyBJeJdFS8nx1DF9JRgO7GYHgELYpnY6WL9pQCTsXtSSgW8m4UclA=="
}
```


### 状态码

| 状态码 | 描述 |
| ------ | ---- |
| 100    | 成功 |




## 渠道详情查询

### 应用场景

根据渠道分组code查询

### 请求url：/store/channelInfo

### 请求参数

| 字段      | 类型   | 是否必传 | 举例               | 说明   |
| :-------- | ------ | -------- | ------------------ | ------ |
| organizationCode | String | 是 |  | 组织主键若为空，组织编号必填 |
| typeFlag | String | 是 |  | 组织主键若为空，类型必填，类型（1总公司 2公司) |



#### requestBody请求示例

```json
{
    "appId":"2eb5c8f1170246429755e6dac313f89d",
    "partnerId":"1864",
    "requestBody":"{\"organizationCode\":\"test02\",\"typeFlag\":2}",
    "sign":"skip",
    "ver":"1"
}
```

### 响应参数

| **字段**                         | **类型** | 举例 | **说明**                                                     |
| ------- | ------ | -- | -- |



#### responseBody返回示例

```json
{
    "ver": "1",
    "statusCode": "100",
    "message": "成功",
    "responseBody": "{\"activeFlag\":1,\"address\":\"\",\"city\":\"\",\"organizationCode\":\"test02\",\"organizationId\":\"d70afc5f-e9be-49ca-aa44-2a6c7157906c\",\"organizationName\":\"上海分公2司\",\"parentCode\":\"201904231\",\"parentName\":\"saas非码网络科技澳门分公司\",\"partnerId\":\"1864\",\"phone\":\"136212758805\",\"province\":\"\",\"region\":\"\",\"remark\":\"\",\"typeFlag\":2}",
    "sign": "ePk5/0w3KyomTbecla6HaBTp7BbF2xrRzz9aPr6dLYhGISu2S9veNJZJWrzRUvRDsft9lCnI1OlP6+E/7c+QrE5u6NBxK5Z0qPYdsWA0Dm+NI6molAGy7ryFto9d6hfYYSTbmxEFIDnal2viQsgR55yvpAKyOw4msVkaXE0HRVxsjzNny8HSVjLPx9SjJFYPVrHoyhrQkyzrlfBtlL7n3bWD6F9h8STQU1RmmG6wfn0tjeR9uTQCxaufXfaXt0B13dAqWkRn1Iyjyr+tgacecl2hMpc/qWQlU0RlhmNE6lJ3v57FNWTg8oFX6RS1SW+JNbaPsqaamoWg1tFBaEfblQ=="
}
```


### 状态码

| 状态码 | 描述 |
| ------ | ---- |
| 100    | 成功 |


## 门店短列表查询

### 应用场景



### 请求url：/store/getStoreShortList

### 请求参数

| 字段      | 类型   | 是否必传 | 举例               | 说明   |
| :-------- | ------ | -------- | ------------------ | ------ |
| activeFlag | Integer | 否 |  | 是否有效（0无效，1有效），不传此字段默认全部 |
| typeFlag | Integer | 否 |  | 类型（1总公司 2公司3门店），不传此字段默认全部|
| storeId | String | 否 |  | 组织编号 |
| storeName | String | 否 |  | 门店名称,模糊匹配 |
| province | String | 否 |  | 省份|
| location | String | 否 |  | 城市|
| region | String | 否 |  | 区域 |
| parentId | String | 否 |  | 上级组织ID |


#### requestBody请求示例

```json
{
    "appId":"2eb5c8f1170246429755e6dac313f89d",
    "partnerId":"1864",
    "requestBody":"{\"pageNo\":1,\"pageSize\":10}",
    "sign":"skip",
    "ver":"1"
}

```

### 响应参数

| **字段**                         | **类型** | 举例 | **说明**                                                     |
| ------- | ------ | -- | -- |
| organizationId | String |  | 组织Id |
| organizationCode | String |  | 组织编号 |
| organizationName | String |  | 组织名称 |
| parentCode | String |  | 上级组织编号 |
| parentName | String |  | 上级组织名称 |
| phone | String |  | 电话号码 |
| address | String |  | 地址 |
| typeFlag | Integer |  | （1总公司 2公司） |
| activeFlag | Integer |  | 状态（1有效 0无效） |
| remark | String |  | 介绍 |
| province | String |  | 省，文字，非编码 |
| city | String |  | 市，文字，非编码 |
| region | String |  | 区，文字，非编码 |
| partnerId | String |  | 商户编号 |





#### responseBody返回示例


```json
{
    "ver": "1",
    "statusCode": "100",
    "message": "成功",
    "requestBody":"[{\"activeFlag\": 1,\"address\": \"\",\"briefName\": \"\",\"city\": \"\",\"cityCode\": \"\",\"countryCode\": \"7\",\"storeId\": \"H00622\",\"storeName\": \"福建达利园\",\"parentCode\": \"2019042317\",\"parentName\": \"sass非码网络科技广州分公司\",\"partnerId\": \"186\",\"phone\": \"\",\"province\": \"\",\"provinceCode\": \"\",\"region\": \"\",\"regionCode\": \"\",\"remark\": \"\",\"typeFlag\": 2,\"zhouCode\": \"1\"}]",
    "sign": "NPCioG7Nr0t4BtrgCS2PeBX9VVqvvOPmtDzFEtc0wavJaexvDKhCjIgfVsI0xcubIFCOVbGk5fTS1vJxPLyHZIfxoVYh9giqCIQb4WoeELREm/MzebHrlki0tGKhQ0uOq68iWlGfOu8SXLjabWYEVg8C/FqBrz0Ed5sghDHuNbWxX/pxPjPAhN22o/2sF1BdAT9/vd/xcz3VhLu9Zzue6LggGV+Rl9WkAffkcqGGd79To5eA+e7b6ZD4fXrYnTOvpxRS8R76j15ZclTjsieCu5qmRoUegAB6aiyBJeJdFS8nx1DF9JRgO7GYHgELYpnY6WL9pQCTsXtSSgW8m4UclA=="
}
```


### 状态码

| 状态码 | 描述 |
| ------ | ---- |
| 100    | 成功 |


## 组织机构同步(新增、修改)

### 请求url: /store/getStoreChannels

### 请求参数

| 字段      | 类型   | 是否必传 | 举例               | 说明   |
| :-------- | ------ | -------- | ------------------ | ------ |
| storeId | String | 是 |门店编码  |



#### requestBody请求示例

```json
{
    "appId":"2eb5c8f1170246429755e6dac313f89d",
    "partnerId":"1864",
    "requestBody":"{\"storeId\":\"11111\"}",
    "sign":"skip",
    "ver":"1"
}

```

### 响应参数

#### responseBody返回示例

```json
{
    "ver": "1",
    "statusCode": "100",
    "message": "成功",
    "responseBody": "{\"eleme\":1231,\"mtwm\":\"123123\"}",
    "sign": "NPCioG7Nr0t4BtrgCS2PeBX9VVqvvOPmtDzFEtc0wavJaexvDKhCjIgfVsI0xcubIFCOVbGk5fTS1vJxPLyHZIfxoVYh9giqCIQb4WoeELREm/MzebHrlki0tGKhQ0uOq68iWlGfOu8SXLjabWYEVg8C/FqBrz0Ed5sghDHuNbWxX/pxPjPAhN22o/2sF1BdAT9/vd/xcz3VhLu9Zzue6LggGV+Rl9WkAffkcqGGd79To5eA+e7b6ZD4fXrYnTOvpxRS8R76j15ZclTjsieCu5qmRoUegAB6aiyBJeJdFS8nx1DF9JRgO7GYHgELYpnY6WL9pQCTsXtSSgW8m4UclA=="
}
```

### 状态码

| 状态码 | 描述 |
| ------ | ---- |
| 100    | 成功 |
