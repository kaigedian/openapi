# 会员类接口

## 根据会员id或手机号查询会员信息接口

### 应用场景

根据会员id查询会员信息

### 请求url：/member/getMemberInfoByIdOrMobile

### 请求参数

| 字段      | 类型   | 是否必传                        | 举例               | 说明   |
| -------- | ------ | ------------------------------- | ------------------ | ------ |
| partnerId | String | 是                              | 1864               | 商户id |
| memberId  | String | 是/否(memberId与mobile、dynamicCode必传一个) | 115589208394311926 | 会员id |
| mobile    | String | 是/否 (memberId与mobile、dynamicCode必传一个)                          | 18616703980        | 手机号 |
| dynamicCode    | String | 是/否 (memberId与mobile、dynamicCode必传一个)                          | 动态码    | 动态码 |
| showScoreSwitch    | Integer | 否   | | 是否查询积分 1：是；2：否  默认否|
| showCouponSwitch    | Integer | 否  | | 是否查询优惠券 1：是；2：否 默认否|
| showCardSwitch    | Integer | 否  | | 是否查询储值卡 1：是；2：否 默认否|

#### 请求示例

```json
{
  "appId":"2eb5c8f1170246429755e6dac313f89d",
  "partnerId":"1864",
  "requestBody":"{\"partnerId\":\"1864\",\"memberId\":\"115632749214110108\",\"mobile\":\"15623261994\",\"showScoreSwitch\":\"1\",\"showCouponSwitch\":\"1\",\"showCardSwitch\":1}",
  "sign":"<sign>",
  "ver":1
}
```

### 响应参数

| **字段**                         | **类型** | 举例 | **说明**                                                     |
| -------------------------------- | -------- | ---- | ------------------------------------------------------------ |
| memberId                         | String   |      | 会员编号                                                     |
| memberName                       | String   |      | 会员名称                                                     |
| nickName                         | String   |      | 昵称                                                         |
| mobile                           | String   |      | 手机号                                                       |
| photoUrl                         | String   |      | 头像地址                                                     |
| sexFlag                          | String   |      | 性别{0未知1男2女}                                            |
| birthday                         | String   |      | 生日                                                         |
| email                            | String   |      | 邮箱                                                         |
| idCard                           | String   |      | 身份证                                                       |
| registerTime                     | Date     |      | 注册时间{格式：yyyy-MM-dd HH:mm:ss}                          |
| registerStoreCode                | String   |      | 注册门店                                                     |
| memberChannels                   | List     |      | 会员渠道列表                                                 |
| memberChannels/cardCode          | String   |      | 卡号{原生卡卡号}                                             |
| memberChannels/cardId            | String   |      | 原生卡ID{微信原生卡ID、支付宝模板ID、商户自定义原生卡ID}     |
| memberChannels/channelCode       | String   |      | 渠道编码{wxgzpt:微信公众平台,xcx:会员小程序,dcxcx:点餐小程序,ptxcx:拼团小程序,dsf:第三方} |
| memberChannels/channelId         | String   |      | 渠道Id                                                       |
| memberChannels/createTime        | Date     |      | 创建时间{格式：yyyy-MM-dd HH:mm:ss}                          |
| memberChannels/memberId          | String   |      | 会员编号                                                     |
| memberChannels/partnerId         | String   |      | 商户编号                                                     |
| memberChannels/registerStoreCode | String   |      | 注册门店                                                     |
| memberChannels/registerType      | String   |      | 注册类型{1门店，2/页面注册、3领卡、4扫码、5支付即会员、6线下导入} |
| memberChannels/thirdPartyCode    | String   |      | Openid                                                       |
| memberChannels/unionId           | String   |      | unionId                                                      |
| memberChannels/updateTime        | Date     |      | 更新时间{格式：yyyy-MM-dd HH:mm:ss}                          |
|currentScore                      | Integer  |      |当前可用积分                     |
|totalScore                      | Integer  |      |历史累计积分                     |
|usedScore                      | Integer  |      |已使用积分                     |
| scoreRule                        | Object   |      | 积分规则                     |
| scoreRule/ruleId                 | String   |      | 积分规则表主键                     |
| scoreRule/reduceStatus           | Integer  |      | 抵扣状态{1禁用 2启用}                     |
| scoreRule/reduceRatio            | String   |      | 抵扣比例{积分:金额}                     |
| scoreRule/reducePriceLimit       | Integer  |      | 抵扣金额限制{单位分}                     |
| scoreRule/reduceLimitType        | Integer  |      | 单笔抵扣限制类型{1按需支付金额比例限制 2按最大可抵扣积分限制}                     |
| scoreRule/reduceLimitValue       | Integer  |      | 单笔抵扣限制值                     |
| scoreRule/dayLimitType           | Integer  |      | 积分单日上限类型{1无上限 2有上限}                     |
| scoreRule/dayLimitValue          | Integer  |      | 积分单日上限值                     |
| scoreRule/overlayOffers          | Integer  |      | 是否可优惠同享{0所有订单均可抵扣,1仅限原价订单才可抵扣（享受了促销活动、或使用了优惠券，不能进行积分抵扣）                     |
| scoreRule/scoreRemark            | String   |      | 积分说明                     |
| scoreRule/subBrandCode           | String   |      | 子品牌编号                     |
| scoreRule/storeId                | String   |      | 门店Id                     |
| memberCoupons                   | List     |      | 优惠券列表 |
| memberCoupons/couponName        | String     |      |  券名称 |
| memberCoupons/couponCode        | String     |      | 券CODE |
| memberCoupons/cuoponType        | Integer     |      | 券类型 0：商品 券 1：代金券 3 折扣券 |
| memberCoupons/couponRule        | String     |      | 规则文字描述，支持富文本 (暂时不支持) |
| memberCoupons/couponLimit        | String     |      | 如：2019-10-1 至 2019-10-10 当天有效 |
| memberCoupons/status        | Integer |      | 状态：-1:未激活  0:可用(剔除过期) 1:已使用  2:部分使用   3:取消  6:已过期(根据生失效日期) 99：未知（目前暂不支持）          |
| memberCards                      | List     |      | 储值卡列表                     |
| memberCards/amount               | Integer  |      | 实充余额，单位分                     |
| memberCards/vamount              | Integer  |      | 赠送余额，单位分                     |
| memberCards/applyId              | String   |      | 卡规格ID                     |
| memberCards/cardCode             | String   |      | 卡号                     |
| memberCards/cardName             | String   |      | 卡名称                     |

#### 返回示例

```json
{
  "ver": "1",
  "statusCode": "100",
  "message": "成功",
  "responseBody": "{\"birthday\":\"\",\"email\":\"\",\"idCard\":\"\",\"memberChannels\":[{\"cardCode\":\"\",\"cardId\":\"\",\"channelCode\":\"dcxcx\",\"channelId\":\"215589208394967421\",\"createTime\":\"2019-05-27 09:33:59\",\"memberId\":\"115589208394311926\",\"partnerId\":\"2282\",\"registerStoreCode\":\"\",\"registerType\":\"2\",\"thirdPartyCode\":\"orZZ75W27gmvtJmS6qy4dOXokK6U\",\"unionId\":\"oeAlw1VjDr2hUynN5E_fQigVmcGk\",\"updateTime\":\"2019-05-27 09:33:59\"}],\"memberId\":\"115589208394311926\",\"memberName\":\"\",\"mobile\":\"\",\"nickName\":\"童百良\",\"photoUrl\":\"https://wx.qlogo.cn/mmhead/VB1rsYrhNqpEPqThmWiafBJKBSJsAtb9nPdObl2AibPib0/132\",\"sexFlag\":\"0\"}",
  "sign": "sign"
}
```
### 状态码

| 状态码 | 描述 |
| ------ | ---- |
| 100    | 成功 |

##  会员加减积分

### 应用场景

会员加减积分

### 请求url：/member/score/opt/{type}

### 请求参数

| 字段                     | 类型    | 是否必传 | 举例        | 说明                                                         |
| ----------------------- | ------- | -------- | ----------- | ------------------------------------------------------------ |
| type                     | Integer | 是       | 1           | 1:加，15：减                                                 |
| partnerId                | String  | 是       | 1864        | 商户id                                                       |
| memberId                 | String  | 是       |             | 会员编号                                                     |
| amount                   | Integer | 是/否    | 18616703980 | 金额（金额和积分数必填一项）                                 |
| score                    | Integer | 是/否    |             | 积分数（金额和积分数必填一项）                               |
| operationType            | Integer | 是       |             | 操作类型{1消费送积分2积分支付退回3积分签到4手动赠送5等级升级送积分6割接7生日送8注册送9完善送10消费满赠11手动扣减12积分兑换13积分清理14积分支付15消费送积分扣回16等级升级退积分17消费满赠扣回} |
| operationName            | String  | 否       |             | 操作名称{1消费送积分2积分支付退回3积分签到4手动赠送5等级升级送积分6割接7生日送8注册送9完善送10消费满赠11手动扣减12积分兑换13积分清理14积分支付15消费送积分扣回16等级升级退积分17消费满赠扣回} |
| orderId                  | String  | 否       |             | 订单编号                                                     |
| activityCode             | String  | 否       |             | 活动编号                                                     |
| remark                   | String  |          |             | 备注                                                         |
| idempotencyBussinessId   | String  | 是       |             | 业务ID{调用方保证唯一}                                       |
| idempotencyBussinessType | String  | 否       |             | 业务类型{1注册送 2发放经验值 3等级升级 4等级降级 5积分支付 6消费送积分 7消费满赠 8生日送 9定时送 10储值支付 11储值充值 12完善资料 |

#### 请求示例

```json
{
  "ver":1,
  "partnerId":"1000",
  "appId":"2eb5c8f117dac313f89d",
  "requestBody":"{\"memberId\":\"115589208394311926\",\"score\":\"100\",\"operationType\":\"1\",\"idempotencyBussinessId\":\"2\",\"idempotencyBussinessType\":\"6\"}",
  "sign": "sign"
}
```

### 响应参数



| **字段**     | **类型** | 举例 | **说明**     |
| ------------ | -------- | ---- | ------------ |
| currentScore | Integer  |      | 当前可用积分 |
| updateScore  | Integer  |      | 变化积分数   |
| sendScore    | Integer  |      | 新增积分数   |


#### 返回示例

```json
{
  "ver": "1",
  "statusCode": "100",
  "message": "成功",
  "responseBody": "{\"currentScore\":300,\"sendScore\":100,\"updateScore\":100}",
  "sign": "sign"
}
```



##  推送会员信息回调接口

### 应用场景

会员注册完成推送会员信息到第三方

### 请求url：商家自定义

### 请求参数



| **字段**                         | **类型** | 是否必传 | 举例 | **说明**                                                     |
| -------------------------------- | -------- | -------- | ---- | ------------------------------------------------------------ |
| memberId                         | String   | 否       |      | 会员编号                                                     |
| memberName                       | String   | 否       |      | 会员名称                                                     |
| nickName                         | String   | 否       |      | 昵称                                                         |
| mobile                           | String   | 否       |      | 手机号                                                       |
| photoUrl                         | String   | 否       |      | 头像地址                                                     |
| sexFlag                          | String   | 否       |      | 性别{0未知1男2女}                                            |
| birthday                         | String   | 否       |      | 生日                                                         |
| email                            | String   | 否       |      | 邮箱                                                         |
| idCard                           | String   | 否       |      | 身份证                                                       |
| registerTime                     | Date     | 否       |      | 注册时间{格式：yyyy-MM-dd HH:mm:ss}                          |
| registerStoreCode                | String   | 否       |      | 注册门店                                                     |
| memberChannels                   | List     | 否       |      | 会员渠道列表                                                 |
| memberChannels/cardCode          | String   | 否       |      | 卡号{原生卡卡号}                                             |
| memberChannels/cardId            | String   | 否       |      | 原生卡ID{微信原生卡ID、支付宝模板ID、商户自定义原生卡ID}     |
| memberChannels/channelCode       | String   | 否       |      | 渠道编码{wxgzpt:微信公众平台,xcx:会员小程序,dcxcx:点餐小程序,ptxcx:拼团小程序,dsf:第三方} |
| memberChannels/channelId         | String   | 否       |      | 渠道Id                                                       |
| memberChannels/createTime        | Date     | 否       |      | 创建时间{格式：yyyy-MM-dd HH:mm:ss}                          |
| memberChannels/memberId          | String   | 否       |      | 会员编号                                                     |
| memberChannels/partnerId         | String   | 否       |      | 商户编号                                                     |
| memberChannels/registerStoreCode | String   | 否       |      | 注册门店                                                     |
| memberChannels/registerType      | String   | 否       |      | 注册类型{1门店，2/页面注册、3领卡、4扫码、5支付即会员、6线下导入} |
| memberChannels/thirdPartyCode    | String   | 否       |      | Openid                                                       |
| memberChannels/unionId           | String   | 否       |      | unionId                                                      |
| memberChannels/updateTime        | Date     | 否       |      | 更新时间{格式：yyyy-MM-dd HH:mm:ss}                          |


#### 请求示例

```json
{
  "ver":1,
  "partnerId":"1000",
  "appId":"2eb5c8f117dac313f89d",
  "requestBody":"{\"birthday\":\"\",\"email\":\"\",\"idCard\":\"\",\"memberChannels\":[{\"cardCode\":\"\",\"cardId\":\"\",\"channelCode\":\"dcxcx\",\"channelId\":\"215589208394967421\",\"createTime\":\"2019-05-27 09:33:59\",\"memberId\":\"115589208394311926\",\"partnerId\":\"2282\",\"registerStoreCode\":\"\",\"registerType\":\"2\",\"thirdPartyCode\":\"orZZ75W27gmvtJmS6qy4dOXokK6U\",\"unionId\":\"oeAlw1VjDr2hUynN5E_fQigVmcGk\",\"updateTime\":\"2019-05-27 09:33:59\"}],\"memberId\":\"115589208394311926\",\"memberName\":\"\",\"mobile\":\"\",\"nickName\":\"童百良\",\"photoUrl\":\"https://wx.qlogo.cn/mmhead/VB1rsYrhNqpEPqThmWiafBJKBSJsAtb9nPdObl2AibPib0/132\",\"sexFlag\":\"0\"}",
  "sign": "sign"
}
```

#### 返回示例（待补充）

```json
{
  "ver": "1",
  "statusCode": "100",
  "message": "成功",
  "sign": "sign"
}

```


##  推送会员积分变动信息接口
### 应用场景

会员积分变动信息推送到第三方

### 请求url：商家自定义

### 请求参数

| **字段**                         | **类型** | 是否必传 | 举例 | **说明**                                                     |
| -------------------------------- | -------- | -------- | ---- | ------------------------------------------------------------ |
|memberId|String|是||会员号|
|mobile|String|是||用户手机号|
|changeScore|Integer|是||更新积分数|
|currentScore|Integer|是||当前积分数|
|changeType|Integer|是||变动类型{1新增 2扣减}|
|operationType|Integer|是||操作类型{1消费送积分2积分支付退回3积分签到4手动赠送5等级升级送积分6割接7生日送8注册送9完善送10消费满赠11手动扣减12积分兑换13积分清理14积分支付15消费送积分扣回16等级升级退积分17消费满赠扣回}|
|transNo|String|否||积分变换流水号|


#### 请求示例：

```json
{
  "ver":1,
  "partnerId":"1000",
  "appId":"2eb5c8f117dac313f89d",
  "requestBody":"{\"changeScore\":\"20\",\"currentScore\":\"200\",\"changeType\":\"1\",\"operationType\":\"2\",\"memberId\":\"115589208394311926\",\"mobile\":\"13333333333\",\"transNo\":\"31231233\"}",
  "sign": "sign"
}
```

#### 返回示例

```json
{
  "ver": "1",
  "statusCode": "100",
  "message": "成功",
  "sign": "sign"
}
```

##  根据手机号注册会员
### 应用场景

用户在小程序通过输入手机号的方式注册会员

### 请求url：/member/register/mobile

### 请求参数

| **字段**                         | **类型** | 是否必传 | 举例 | **说明**                                                     |
| -------------------------------- | -------- | -------- | ---- | ------------------------------------------------------------ |
|partnerId|String|是|商户号||
|channelCode|String|是|渠道编码{xcx:会员小程序,dcxcx:点餐小程序,ptxcx:拼团小程序,wcxcx:围餐小程序}||
|appId|String|是|应用编码||
|mobile|String|是|手机号码||
|unionId|String|否|微信unionId||
|thirdPartyCode|String|是|微信oppenid、等||
|cardCode|String|否|卡号||
|cardId|String|否|原生卡ID{微信原生卡ID、支付宝模板ID、商户自定义原生卡ID}||
|mobileValidateFlag|String|是| 手机校验码标识{1：需要校验，2：不需要校验(默认)}||
|validCode|String|否|验证码|mobileValidateFlag为1，必传|
|nickName|String|否|昵称||
|photoUrl|String|否|头像地址||
|sexFlag|String|否|性别{0未知1男2女}||
|registerInitData|String|是|是否需要初始化|0:初始化积分1：初始化余额2：注册送4：推送微信消息1/需要(默认需要) 2不需要1#2#2#2#2|
|registerStoreCode|String|否|注册门店||
|birthday|String|否|生日日期||

#### 请求示例

```json
{
  "ver":1,
  "partnerId":"1000",
  "appId":"2eb5c8f117dac313f89d",
  "requestBody":"{\"cardCode\":\"001\",\"cardId\":\"001\",\"channelCode\":\"saas\"，\"appId\":\"wx001\",\"mobile\":\"13333333333\",\"mobileValidateFlag\":\"1\",\"nickName\":\"bbbb\",\"partnerId\":\"1000\",\"photoUrl\":\"\",\"registerInitData\":\"1#1#2#2#2\",\"registerStoreCode\":\"shop001\",\"registerType\":\"1\",\"sexFlag\":\"1\",\"thirdPartyCode\":\"fasdfsadfaa222\",\"unionId\":\"\",\"validCode\":\"2468\"}",
  "sign": "sign"
}
```

### 响应参数

| **字段**                         | **类型** | 举例 | **说明**                                                     |
| -------------------------------- | -------- | ---- | ------------------------------------------------------------ |
| memberId                         | String   |   4545444   | 用户Id |



#### 返回示例

```json
{
  "ver": "1",
  "statusCode": "100",
  "message": "成功",
  "responseBody": "{\"memberId\":\"4545444\"}",
  "sign": "sign"
}
```




# 会员积分类接口


##  更新积分

### 应用场景

积分新增或扣减

### 请求url：/member/score/updateScore

### 请求参数

| 字段      | 类型   | 是否必传                        | 举例               | 说明   |
| -------- | ------ | ------------------------------- | ------------------ | ------ |
| partnerId | String | 是  | 6   | 商户编号 |
| memberId | String | 是  | 6   | 会员编号 |
| changeScore | Integer | 是  | 6   | 变动积分不能低于1积分 |
| changeType  | Integer | 是  | 1 | 变动类型{1新增 2扣减}|
| operationType  | Integer | 是  | 1 | 操作类型{1消费送积分2积分支付退回3积分签到4手动赠送5等级升级送积分6割接7生日送8注册送9完善送10消费满赠11手动扣减12积分兑换13积分清理14积分支付15消费送积分扣回16等级升级退积分17消费满赠扣回}|
| operationName  | String | 否| 1 | 操作名称{1消费送积分2积分支付退回3积分签到4手动赠送5等级升级送积分6割接7生日送8注册送9完善送10消费满赠11手动扣减12积分兑换13积分清理14积分支付15消费送积分扣回16等级升级退积分17消费满赠扣回}|
| orderId  | String | 否|  | 订单编号|
| activityCode  | String | 否|  | 活动编号|
| operator  | String | 否|  | 操作人|
| operatorId  | String | 否|  | operatorId|
| remark  | String | 否|  | 备注|

#### 请求示例

```json
{
  "appId":"2eb5c8f1170246429755e6dac313f89d",
  "partnerId":"1864",
  "requestBody":"{\"partnerId\":\"1864\",\"memberId\":\"115596590488056494\",\"changeScore\":\"8\",\"idempotencyBussinessId\":\"q235246245234\",\"idempotencyBussinessType\":\"15\",\"operationType\":\"1\"}",
  "sign":"<sign>",
  "ver":1
}
```

### 响应参数

| **字段**                         | **类型** | 举例 | **说明**                                                     |
| -------------------------------- | -------- | ---- | ------------------------------------------------------------ |
| updateScore                         | Integer   |      | 返回更新积分数                                                     |

#### 返回示例

```json
{
  "ver": "1",
  "statusCode": "100",
  "message": "成功",
  "responseBody": "{\"updateScore\":0}",
  "sign": "IDXg9JvSrFFx6oQ2VHJP80+/IkJl+4zQtfDanL/KyDSZ5wZivJ43s2if0QZQcpMel26Vn0Ge4/rI2q5hIn4z8vf8xYRjK4ctKBPfkAuTN1Naba/MInridfP4PH03ztG7NPyAqxRKgjRqjldPgn1Y5UvZjkx3p3H4/nZQAgJvwswHea37BM/uuHvYobI+ERnSA8LDbvegAUPP6udNhcAqmwq1dVn/r3s9soufdQsz+9V8ihqHy+l2k53L9ykUixqxysQ0JHaJriRgnr+gFRMZ5+JWdm+BJaazHQXo02IzHTWlG0T+IHP0dWWpOdpdsJP9J3TgdVqsSZsYwrw15aVUvA=="
}
```

##  添加积分

### 应用场景

赠送积分

### 请求url：/member/score/sendScore

### 请求参数

| 字段      | 类型   | 是否必传                        | 举例               | 说明   |
| -------- | ------ | ------------------------------- | ------------------ | ------ |
| partnerId | String | 是  | 6   | 商户编号 |
| memberId | String | 是  | 6   | 会员编号 |
| amount | Integer | 是  | 6   | 金额 （金额和积分数必填一项） |
| score | Integer | 是  | 6   | 积分数 （金额和积分数必填一项）|
| operationType  | Integer | 是  | 1 | 操作类型{1消费送积分2积分支付退回3积分签到4手动赠送5等级升级送积分6割接7生日送8注册送9完善送10消费满赠}|
| operationName  | String | 否| 1 | 操作名称{1消费送积分2积分支付退回3积分签到4手动赠送5等级升级送积分6割接7生日送8注册送9完善送10消费满赠}|
| orderId  | String | 否|  | 订单编号|
| activityCode  | String | 否|  | 活动编号|
| remark  | String | 否|  | 备注|
| idempotencyBussinessId  | String | 是|  | 业务ID(保持唯一)|
| idempotencyBussinessType  | String | 是|  | 业务类型{1注册送 2发放经验值 3等级升级 4等级降级 5积分支付 6消费送积分 7消费满赠 8生日送 9定时送 10储值支付 11储值充值 12完善资料送 13等级升级送积分 14储值卡投放 15会员消费数据增加 16会员消费数据冲正}|

#### 请求示例

```json
{
  "appId":"2eb5c8f1170246429755e6dac313f89d",
  "partnerId":"1864",
  "requestBody":"{\"partnerId\":\"1864\",\"memberId\":\"115596590488056494\",\"score\":\"8\",\"idempotencyBussinessId\":\"q235246245234\",\"idempotencyBussinessType\":\"15\",\"operationType\":\"1\"}",
  "sign":"<sign>",
  "ver":1
}
```

### 响应参数

| **字段**                         | **类型** | 举例 | **说明**                                                     |
| -------------------------------- | -------- | ---- | ------------------------------------------------------------ |
| currentScore                         | Integer   |      | 当前可用积分                                                     |
| updateScore                         | Integer   |      | 变化积分数                                                     |
| sendScore                         | Integer   |      | 新增积分数                                                     |
#### 返回示例

```json
{
  "ver": "1",
  "statusCode": "100",
  "message": "成功",
  "responseBody": "{\"updateScore\":0}",
  "sign": "IDXg9JvSrFFx6oQ2VHJP80+/IkJl+4zQtfDanL/KyDSZ5wZivJ43s2if0QZQcpMel26Vn0Ge4/rI2q5hIn4z8vf8xYRjK4ctKBPfkAuTN1Naba/MInridfP4PH03ztG7NPyAqxRKgjRqjldPgn1Y5UvZjkx3p3H4/nZQAgJvwswHea37BM/uuHvYobI+ERnSA8LDbvegAUPP6udNhcAqmwq1dVn/r3s9soufdQsz+9V8ihqHy+l2k53L9ykUixqxysQ0JHaJriRgnr+gFRMZ5+JWdm+BJaazHQXo02IzHTWlG0T+IHP0dWWpOdpdsJP9J3TgdVqsSZsYwrw15aVUvA=="
}
```

##   积分回退

### 应用场景

积分回退

### 请求url：/member/score/returnScore

### 请求参数

| 字段      | 类型   | 是否必传                        | 举例               | 说明   |
| -------- | ------ | ------------------------------- | ------------------ | ------ |
| partnerId | String | 是  | 6   | 商户编号 |
| memberId | String | 是  | 6   | 会员编号 |
| operationType  | Integer | 是  | 1 | 操作类型{1消费送积分2积分支付退回3积分签到4手动赠送5等级升级送积分6割接7生日送8注册送9完善送10消费满赠11手动扣减12积分兑换13积分清理14积分支付15消费送积分扣回16等级升级退积分17消费满赠扣回}|
| orderId  | String | 否|  | 订单编号|
| activityCode  | String | 否|  | 活动编号|
| remark  | String | 否|  | 备注|
| operationName  | String | 否|  | 操作人|

#### 请求示例

```json
{
  "appId":"2eb5c8f1170246429755e6dac313f89d",
  "partnerId":"1864",
  "requestBody":"{\"partnerId\":\"1864\",\"memberId\":\"115596590488056494\",\"score\":\"8\",\"idempotencyBussinessId\":\"q235246245234\",\"idempotencyBussinessType\":\"15\",\"operationType\":\"1\",,\"operationName\":\"123\"}",
  "sign":"<sign>",
  "ver":1
}
```

### 响应参数

| **字段**                         | **类型** | 举例 | **说明**                                                     |
| -------------------------------- | -------- | ---- | ------------------------------------------------------------ |
| currentScore                         | Integer   |      | 当前可用积分                                                     |
| updateScore                         | Integer   |      | 变化积分数                                                     |

#### 返回示例

```json
{
  "ver": "1",
  "statusCode": "100",
  "message": "成功",
  "responseBody": "{\"updateScore\":0}",
  "sign": "IDXg9JvSrFFx6oQ2VHJP80+/IkJl+4zQtfDanL/KyDSZ5wZivJ43s2if0QZQcpMel26Vn0Ge4/rI2q5hIn4z8vf8xYRjK4ctKBPfkAuTN1Naba/MInridfP4PH03ztG7NPyAqxRKgjRqjldPgn1Y5UvZjkx3p3H4/nZQAgJvwswHea37BM/uuHvYobI+ERnSA8LDbvegAUPP6udNhcAqmwq1dVn/r3s9soufdQsz+9V8ihqHy+l2k53L9ykUixqxysQ0JHaJriRgnr+gFRMZ5+JWdm+BJaazHQXo02IzHTWlG0T+IHP0dWWpOdpdsJP9J3TgdVqsSZsYwrw15aVUvA=="
}
```

##   积分统计

### 应用场景

积分统计

### 请求url：/member/score/statisticalScore

### 请求参数

| 字段      | 类型   | 是否必传                        | 举例               | 说明   |
| -------- | ------ | ------------------------------- | ------------------ | ------ |
| partnerId | String | 是  | 6   | 商户编号 |
| memberId | String | 是  | 6   | 会员编号 |

#### 请求示例

```json
{
  "appId":"2eb5c8f1170246429755e6dac313f89d",
  "partnerId":"1864",
  "requestBody":"{\"partnerId\":\"1864\",\"memberId\":\"115596590488056494\"",
  "sign":"<sign>",
  "ver":1
}
```

#### 响应参数

| **字段**                         | **类型** | 举例 | **说明**                                                     |
| -------------------------------- | -------- | ---- | ------------------------------------------------------------ |
| currentScore                         | Integer   |      | 当前可用积分                                                     |
| totalScore                         | Integer   |      | 历史累计积分                                                     |
| usedScore                         | Integer   |      | 已使用积分                                                     |


#### 返回示例

```json
{
  "ver": "1",
  "statusCode": "100",
  "message": "成功",
  "responseBody": "{\"updateScore\":0}",
  "sign": "IDXg9JvSrFFx6oQ2VHJP80+/IkJl+4zQtfDanL/KyDSZ5wZivJ43s2if0QZQcpMel26Vn0Ge4/rI2q5hIn4z8vf8xYRjK4ctKBPfkAuTN1Naba/MInridfP4PH03ztG7NPyAqxRKgjRqjldPgn1Y5UvZjkx3p3H4/nZQAgJvwswHea37BM/uuHvYobI+ERnSA8LDbvegAUPP6udNhcAqmwq1dVn/r3s9soufdQsz+9V8ihqHy+l2k53L9ykUixqxysQ0JHaJriRgnr+gFRMZ5+JWdm+BJaazHQXo02IzHTWlG0T+IHP0dWWpOdpdsJP9J3TgdVqsSZsYwrw15aVUvA=="
}
```


##   查询会员

### 应用场景

查询会员

### 请求url：/member/getMembersByCondition

### 请求参数

| 字段      | 类型   | 是否必传                        | 举例               | 说明   |
| -------- | ------ | ------------------------------- | ------------------ | ------ |
|partnerId|String|是|1864|商户id|
|appId|String|是|98290e1b36634fcf953da89df9c8a527|由非码颁发平台唯一标识,用来验签数据 |
|ver|String|是||版本号|
|sign|String|是||签名|
|requestBody|String|是||请求主体|
|requestBody/partnerId | String | 是  | 6   | 商户编号 |
|requestBody/nickName | String | 否  | 6   | 用户昵称 |
|requestBody/mobile | String | 否  | 6   | 手机号码 |
|requestBody/startTime | String | 否  | 6   | 开始时间 |
|requestBody/endTime | String | 否  | 6   | 结束时间 |
|requestBody/pageNum | String | 是  | 6   | 页号，最小为1 |
|requestBody/pageSize | String | 是  | 6   | 一页数据大小,最小为1 |

#### 请求示例

```json
{
  "partnerId":"1864",
  "appId":"98290e1b36634fcf953da89df9c8a527",
  "requestBody":"{\"partnerId\":\"1864\",\"mobile\":\"13262725815\",\"nickName\":\"\",\"startTime\":\"\",\"endTime\":\"\",\"pageNum\":\"1\",\"pageSize\":\"10\"}",
  "ver":"1",
  "sign":"aG3A3D4Hzt3Vq/EWbG4SfOT3LncB1moNwLJOVyQxuxMd3BkSTRsGq17MoGLTpXPDHFVkbAIypTK3hIKNOgWC6M4uSIGZTFNIU+UdjiUEWh1EqUAUvXAZjO+nTzLtNUgASor+ZVFx97EDd/h0UgA6Q0Mu2MJBVULDcl6fGPigBGqVP0AFk6hojjctUrfHzvrzKCazhArIh5mGuK7XPrn8FiZVdCnaDMZ/LDH+q3Q/ke2yZUT7vvmjW9cVHxzlyQBAX9oEOD4lMyMjNUmmffmgHqmWsY9O8/nJiEr4MDO4L7D1JFWOgcRhRvYQgCozkxvdVk3AQ8m9vCgGI5TxliMPzA=="
}
```

#### 响应参数

| **字段**                         | **类型** | 举例 | **说明**                                                     |
| -------------------------------- | -------- | ---- | ------------------------------------------------------------ |
| totalCount                         | Integer   |  1    | 总记录数                                                     
| pageSize                         | Integer   |   1   | 一页数据大小                                                     
| pageNum                         | Integer   |    10  | 页号                                                     
| totalPages                         | Integer   |   1   | 总页数
| memberList                         |    |      | 会员列表
| memberList/partnerId                         |  String   |  1864    | 商户编号
| memberList/memberId                         |  String   |  3595577290888658005    | 用户ID
| memberList/nickName                         |  String   |  不像话的小孩    | 微信昵称
| memberList/mobile                         |  String   |  13262725815    | 手机号
| memberList/birthday                         |  String   |      | 生日
| memberList/sexFlag                         |  String   |  1    | 性别，{0未知1男2女}
| memberList/registerTime                         |  String   |      | 注册时间
| memberList/channelList                         |    |      | 渠道信息
| memberList/channelList/channelId                         |  String  |      | 渠道主键id
| memberList/channelList/memberId                         |  String  |      | 会员编号
| memberList/channelList/partnerId                         |  String  |      | 商户编号
| memberList/channelList/channelCode                         |  String  |      | 渠道编码{wxgzpt:微信公众平台,xcx:会员小程序,dcxcx:点餐小程序,ptxcx:拼团小程序,dsf:第三方}
| memberList/channelList/appId                         |  String  |      | 应用编号
| memberList/channelList/thirdPartyCode                         |  String  |      | 第三方编码{openid、userid}
| memberList/channelList/registerType                         |  String  |      | 注册类型
| memberList/channelList/cardCode                         |  String  |      | 卡号{原生卡卡号}
| memberList/channelList/cardId                         |  String  |      | 原生卡ID{微信原生卡ID、支付宝模板ID、商户自定义原生卡ID}
| memberList/channelList/unionId                         |  String  |      | 微信unionId
| memberList/channelList/cardCode                         |  String  |      | 卡号{原生卡卡号}
| memberList/channelList/createTime                         |  String  |      | 创建时间
| memberList/channelList/updateTime                         |  String  |      | 更新时间
| memberList/channelList/registerStoreCode                         |  String  |      | 注册门店



#### 返回示例

```json
{
  "ver": "1",
  "statusCode": "100",
  "message": "成功",
  "responseBody": "{\"memberList\":[{\"birthday\":\"\",\"channelList\":[{\"appId\":\"wxb78fb7c6218cb52c\",\"cardCode\":\"\",\"cardId\":\"\",\"channelCode\":\"dcxcx\",\"channelId\":\"3595577290907658006\",\"createTime\":1595577291000,\"memberId\":\"3595577290888658005\",\"partnerId\":\"1864\",\"registerStoreCode\":\"\",\"registerType\":\"2\",\"thirdPartyCode\":\"oORZK5O2CRQeC6-N7xn7JXOo0abo\",\"unionId\":\"okRmn1FXwxBseieLsHJQTyu1QFCE\",\"updateTime\":1596005361000}],\"memberId\":\"3595577290888658005\",\"mobile\":\"13262725815\",\"nickName\":\"不像话的小孩\",\"partnerId\":\"1864\",\"registerTime\":1595577291000}],\"pageNum\":1,\"pageSize\":10,\"totalCount\":1,\"totalPages\":1}",
  "sign": "hG/XiAwtOigUSB0lhTu+t0orK8TycXmtrTqcACsHeXsWCVwd0tjaGV2E/guv3gaXbus4UbppBoCbjpgh9U5vv4Jx0j26vcXbYWz/S1XPsPXN4DPlc9uxGIQChD/sxBukZobO5U8Rj78yA2rtgKebx9E4+ZlwIu5nUZvoqLcyYdFzXZ0CfoDfrqO5/NpJo4+CNcyhNr1Gw9U4j0bGSgpbzZrngwNq9Vcssufvu3tWHDXNVgoQd38bko5FmOSlpMc8yZGw74QK3kahrhnnmhExm1mVHrcwwVJdRznLHbD9oEBtLFmt9fn4aWCX0iN9C/uVI95zuXzIif0CEO10WEj+2w=="
}
```
## 积分流水

### 应用场景

积分流水记录

### 请求url：/member/score/getScoreRecords

### 请求参数

| 字段      | 类型   | 是否必传                        | 举例               | 说明   |
| -------- | ------ | ------------------------------- | ------------------ | ------ |
| partnerId | String | 是  | 6   | 商户编号 |
| startTime | String | 是  |    | 查询开始时间, yyyy-MM-dd hh:mm:ss |
| endTime | String | 是  |    | 查询结束时间, yyyy-MM-dd hh:mm:ss |
| pageNum | Integer | 是  | 1   | 页号,最小为1 |
| pageSize | Integer | 是  | 10   | 一页数据大小, 范围:1-100 |

#### 请求示例

```json
{
  "appId": "98290e1b36634fcf953da89df9c8a527",
  "partnerId": "1864",
  "requestBody": "{\"partnerId\": \"2654\",\"startTime\": \"2020-03-31 18:01:50\",\"endTime\": \"2020-03-31 19:01:54\",\"pageNum\": \"1\",\"pageSize\":\"100\"}",
  "ver": "1",
  "sign": "IDXg9JvSrFFx6oQ2VHJP80+/IkJl+4zQtfDanL/KyDSZ5wZivJ43s2if0QZQcpMel26Vn0Ge4/rI2q5hIn4z8vf8xYRjK4ctKBPfkAuTN1Naba/MInridfP4PH03ztG7NPyAqxRKgjRqjldPgn1Y5UvZjkx3p3H4/nZQAgJvwswHea37BM/uuHvYobI+ERnSA8LDbvegAUPP6udNhcAqmwq1dVn/r3s9soufdQsz+9V8ihqHy+l2k53L9ykUixqxysQ0JHaJriRgnr+gFRMZ5+JWdm+BJaazHQXo02IzHTWlG0T+IHP0dWWpOdpdsJP9J3TgdVqsSZsYwrw15aVUvA=="
}
```

### 响应参数

| **字段**                         | **类型** | 举例 | **说明**                                                     |
| -------------------------------- | -------- | ---- | ------------------------------------------------------------ |
| recordId                         | String   |      | 积分变动记录ID   |
| partnerId                        | String   |      | 商户编号                                                     |
| memberId                         | String   |      | 会员编号                                                     |
| nickName                         | String   |      | 会员昵称                                                     |
| mobile                         | String   |      | 手机号                                                     |
| memberType                         | Integer   |      | 会员类型 0普通会员1付费会员默认为0                                                     |
| changeType                         | Integer   |      | 变动类型{1新增 2扣减}                                                     |
| changeScore                         | Integer   |      | 变动积分                                                    |
| operationType                         | Integer   |      | 操作类型{1消费送积分2积分支付退回3积分签到4手动赠送5等级升级送积分6割接7生日送8注册送9完善送10消费满赠11手动扣减12积分兑换13积分清理14积分支付15消费送积分扣回16等级升级退积分17消费满赠扣回}                                                     |
| operationName                         | String   |      | 操作名称{1消费送积分2积分支付退回3积分签到4手动赠送5等级升级送积分6割接7生日送8注册送9完善送10消费满赠11手动扣减12积分兑换13积分清理14积分支付15消费送积分扣回16等级升级退积分17消费满赠扣回}                                                     |
| orderId                         | String   |      | 订单编号                                                     |
| activityCode                         | String   |      | 活动编号                                                     |
| orgType                         | Integer   |      | 机构类型{1总公司2分公司3门店}                                                     |
| orgCode                         | String   |      | 机构编码                                                    |
| storeId                         | String   |      | 门店Id                                                    |
| storeName                         | String   |      | 门店名称                                                    |
| operatorId                         | String   |      | 操作人id                                                    |
| operator                         | String   |      | 操作人                                                    |
| createTime                         | Date   |      | 创建时间yyyy-MM-dd HH:mm:ss                                                    |
| subBrandCode                         | String   |      | 子品牌编号                                                    |
| subBrandName                         | String   |      | 子品牌名称                                                    |
| appId                         | String   |      | 应用ID                                                    |

#### 返回示例

```json
{
  "ver": "1",
  "statusCode": "100",
  "message": "成功",
  "responseBody": "{\"pageNum\":1,\"pageSize\":100,\"scoreRecords\":[{\"changeScore\":100,\"changeType\":1,\"createTime\":1585650535000,\"memberId\":\"3585650454703946215\",\"memberType\":0,\"mobile\":\"\",\"nickName\":\"hold.Y\",\"operationName\":\"注册送\",\"operationType\":4,\"operator\":\"RegisterActivity\",\"operatorId\":\"\",\"orgCode\":\"123456\",\"orgType\":3,\"partnerId\":\"2654\",\"recordId\":\"3585650534868766166\",\"remark\":\"注册有礼送积分\",\"storeId\":\"123456\",\"storeName\":\"ngs\",\"subBrandCode\":\"001\",\"subBrandName\":\"子品牌by李勇\"},{\"changeScore\":100,\"changeType\":1,\"createTime\":1585648914000,\"memberId\":\"3585648851764946213\",\"memberType\":0,\"mobile\":\"\",\"nickName\":\"hold.Y\",\"operationName\":\"注册送\",\"operationType\":4,\"operator\":\"RegisterActivity\",\"operatorId\":\"\",\"orgCode\":\"123456\",\"orgType\":3,\"partnerId\":\"2654\",\"recordId\":\"3585648914372766162\",\"remark\":\"注册有礼送积分\",\"storeId\":\"123456\",\"storeName\":\"ngs\",\"subBrandCode\":\"001\",\"subBrandName\":\"子品牌by李勇\"}],\"totalCount\":2,\"totalPages\":1}",
  "sign": "syLgIjjNUUFEM1x84kCXgqcKMcXqCYFx39obzD/2hQ71RS1apv4fQGXw5kS/Q0E0l8Vfc8unDUUvMNDraUJfdTdFv92xQcnwavlqCdOQW1YdtOnv0Wy9lxO3D9h1vi3FVLLpcErH55h7TvFPrrQXo6+21i6r7tbzLsf+IR5ls7pzleWiWYwRwoN5dLRLDTbwh6sRMA3VeQodCIiHShAfkGamU0WXtmNgZR5ZhnRYVz0G8Dx+DW5gg51VbJc66uTDpJ/POctnw2xvNSCUmM/B60qMzKPNpfbGRzDeIf+xZysB8KV6zg+bkiBZ2N5soChxsfdQam3sQlmnJhq7TR3XHw=="
}
```


##   储值卡流水

### 应用场景

储值卡流水记录

### 请求url：/member/card/getCardRecords

### 请求参数

| 字段      | 类型   | 是否必传                        | 举例               | 说明   |
| -------- | ------ | ------------------------------- | ------------------ | ------ |
| partnerId | String | 是  | 1864   | 商户编号 |
| memberId | String | 是  | 3597739376070140025   | 会员编号 |
| startTime | String | 是  |    | 查询开始时间,时间范围最多90天, yyyy-MM-dd hh:mm:ss |
| endTime | String | 是  |    | 查询结束时间,时间范围最多90天, yyyy-MM-dd hh:mm:ss |
| pageNum | Integer | 是  | 1   | 页号,最小为1 |
| pageSize | Integer | 是  | 10   | 一页数据大小, 范围:1-15 |

#### requestBody请求示例

```json
{
        "appId": "98290e1b36634fcf953da89df9c8a527",
        "partnerId": "1864",
        "requestBody": "{\"partnerId\": \"1864\",\"memberId\": \"3597739376070140025\",\"startTime\": \"2020-06-05 00:00:00\",\"endTime\": \"2020-09-03 00:00:00\",\"pageNum\":\"1\",\"pageSize\": \"10\"}",
        "ver": "1",
        "sign": "skip"
}
```

### 响应参数

| **字段**                         | **类型** | 举例 | **说明**                                                     |
| -------------------------------- | -------- | ---- | ------------------------------------------------------------ |
| applyName                         | String   |      | 卡档案名称   
| cardCode                        | String   |      | 卡号                                                     |
| moneyStr                         | String   |      | 金额Str，单位元，不带符号                                                     |
| tradeId                         | String   |      | 订单号                                                     |
| tradeTimeStr                         | String   |      | 时间Str，yyyy-MM-dd HH:mm:ss                                                     |
| tradeType                         | Integer   |      | 交易类型                                                     |
| typeStr                         | String   |      | 类型，充值/消费/退款                                                    |
#### responseBody返回示例

```json
{
    "ver": "1",
    "statusCode": "100",
    "message": "成功",
    "responseBody": "{\"pageNum\":1,\"pageSize\":10,\"totalCount\":1,\"totalPages\":1,\"tradeRecords\":[{\"applyName\":\"生意兴隆卡\",\"cardCode\":\"5818640000000010000\",\"moneyStr\":\"100.01\",\"tradeId\":\"200903000000000100011Dfau9\",\"tradeTimeStr\":\"2020-09-03 18:04:13\",\"tradeType\":9,\"typeStr\":\"激活\"}]}",
    "sign": "LRRP6s3RHP+CUISIuYOzfdecgd6A4kNZ2vh5C3kI5JDXern84hiUF9DYKDvn4X7PtpBU8awUOANFFvF9kGL55JlGgNfnsAiX/YSFDXNuKRQ1ZcL6mQSfx+Dcy1TKWNc2k3/IAvlNIN0wJh38yeXJdGTRF/Mgnc/oRoyk8qz2bMSG/VSpPo8gNNbLaQ0ow1Zo3iF7Y0SW3WKRyhHvNosaoEP3CyqUsbCzBrEH58LcvM7t/1YY48bV+EZ2GYiAHNgm4dVuUpkhlC5KZbOYNclEJld4MnTw4vaFdCsRtB4hGw4iuoppjCOgFhDOIFvn7ORHV/LeXGDhmMFsToxl8FckBQ=="
}
```