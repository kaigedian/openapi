# 会员类接口


## **1.1** 根据会员id或手机号查询会员信息接口

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

#### 请求示例

```json
{
	"appId":"2eb5c8f1170246429755e6dac313f89d",
	"partnerId":"1864",
	"requestBody":"{'partnerId':'1864','memberId':'115632749214110108'

	,'mobile':'15623261994','showScoreSwitch':'1','showCouponSwitch':'1'}",
	"sign":"skip",
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
| memberCoupons                   | List     |      | 优惠券列表
| memberCoupons/couponName        | String     |      |  券名称
| memberCoupons/couponCode        | String     |      | 券CODE
| memberCoupons/cuoponType        | Integer     |      | 券类型 0：商品 券 1：代金券 3 折扣券
| memberCoupons/couponRule        | String     |      | 规则文字描述，支持富文本 (暂时不支持)
| memberCoupons/couponLimit        | String     |      | 如：2019-10-1 至 2019-10-10 当天有效

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





## **1.2** 会员列表信息接口

### 应用场景

查询会员列表信息

### 请求url：/member/getMembers

### 请求参数

| 字段       | 类型    | 是否必传 | 举例        | 说明                 |
| --------- | ------- | -------- | ----------- | -------------------- |
| partnerId  | String  | 是       | 1864        | 商户id               |
| nickName   | String  | 否       |             | 微信昵称             |
| mobile     | String  | 否       | 18616703980 | 会员id               |
| paidId     | String  | 否       |             | 付费会员卡Id         |
| labelName  | String  | 否       |             | 标签名称             |
| ruleCode   | String  | 否       |             | 等级编号             |
| startScore | Integer | 否       |             | 查询开始积分         |
| endScore   | Integer | 否       |             | 查询结束积分         |
| statusFlag | Integer | 否       |             | 状态标识{0禁用1激活} |
| startTime  | Date    | 否       |             | 查询开始时间         |
| endTime    | Date    | 否       |             | 查询结束时间         |
| pageNum    | Integer | 是       |             | 页号                 |
| pageSize   | Integer | 是       |             | 一页数据大小         |

#### 请求示例

```json
{
	"ver":1,
	"partnerId":"1000",
	"appId":"2eb5c8f117dac313f89d",
	"requestBody":"{\"pageNum\":1,\"pageSize\":20}",
    	"sign": "sign"
}

```

### 响应参数



| **字段**                             | **类型**     | 举例               | **说明**                            |
| ------------------------------------ | ------------ | ------------------ | ----------------------------------- |
| totalCount                           | Integer      |                    | 记录总数                            |
| totalPages                           | Integer      |                    | 总页数                              |
| pageNum                              | Integer      |                    | 页号                                |
| pageSize                             | Integer      |                    | 一页数据大小                        |
| memberList                           | List         |                    | 会员信息集合                        |
| memberList/memberId                  | String       |                    | 会员编号                            |
| memberList/nickName                  | String       |                    | 昵称                                |
| memberList/mobile                    | String       |                    | 手机号                              |
| memberList/labels                    | List<String> |                    | 会员标签集合                        |
| memberList/registerTime              | Date         |                    | 注册时间{格式：yyyy-MM-dd HH:mm:ss} |
| memberList/memberPaidList/paidName   | String       |                    | 付费会员卡名称                      |
| memberList/memberPaidList/expiryTime | String       | 付费会员卡到期时间 |                                     |
| memberList/consumeCount              | String       |                    | 累计消费次数                        |
| memberList/consumeMoney              | String       |                    | 累计消费金额                        |
| memberList/ruleName                  | String       |                    | 等级名称                            |
| memberList/currentScore              | String       |                    | 当前积分                            |
| memberList/statusFlag                | Date         |                    | 状态标识{0禁用1激活}                |


#### 返回示例

```
{
	"ver":1,
	"partnerId":"1000",
	"appId":"2eb5c8f117dac313f89d",
	"requestBody":"{\"memberList\":[{\"consumeMoney\":\"\",\"currentScore\":0,\"labelList\":[],\"memberId\":\"115604222300254410\",\"memberPaidList\":[],\"mobile\":\"13621758805\",\"nickName\":\"森屿海港@\",\"registerTime\":\"2019-06-13 18:37:10\",\"ruleName\":\"\",\"statusFlag\":1},{\"consumeMoney\":\"\",\"currentScore\":0,\"labelList\":[],\"memberId\":\"115591161789102515\",\"memberPaidList\":[],\"mobile\":\"15956904546\",\"nickName\":\"三虎\",\"registerTime\":\"2019-05-29 15:49:38\",\"ruleName\":\"\",\"statusFlag\":1}],\"pageNum\":1,\"pageSize\":20,\"totalCount\":15,\"totalPages\":1}",
    	"sign": "sign"
}
```





## **1.3** 会员加减积分

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

-

```json
{
      "ver": "1",
      "statusCode": "100",
      "message": "成功",
      "responseBody": "{\"currentScore\":300,\"sendScore\":100,\"updateScore\":100}",
      "sign": "sign"
}

```



## **1.4** 推送会员信息回调接口

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

#### 返回示例

无


## **1.5** 推送会员积分变动信息接口
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

## **1.6** 根据手机号注册会员
### 应用场景

用户在小程序通过输入手机号的方式注册会员

### 请求url：/member/register/mobile

### 请求参数

| **字段**                         | **类型** | 是否必传 | 举例 | **说明**                                                     |
| -------------------------------- | -------- | -------- | ---- | ------------------------------------------------------------ |
|partnerId|String|是|商户号||
|channelCode|String|是|渠道编码{xcx:会员小程序,dcxcx:点餐小程序,ptxcx:拼团小程序,wcxcx:围餐小程序}||
|mobile|String|是|手机号码||
|unionId|String|否|微信unionId|unionId、thirdPartyCode二选一必传|
|registerType|String|是|注册类型{1门店，2/页面注册、3领卡、4扫码、5支付即会员||
|thirdPartyCode|String|否|微信oppenid、等|unionId、thirdPartyCode二选一必传|
|cardCode|String|否|卡号||
|cardId|String|否|原生卡ID{微信原生卡ID、支付宝模板ID、商户自定义原生卡ID}||
|mobileValidateFlag|String|是| 手机校验码标识{1：需要校验，2：不需要校验(默认)}||
|validCode|String|否|验证码|mobileValidateFlag为1，必传|
|nickName|String|否|昵称||
|photoUrl|String|否|头像地址||
|sexFlag|String|否|性别{0未知1男2女}||
|registerInitData|String|是|是否需要初始化|0:初始化积分1：初始化余额2：注册送4：推送微信消息1/需要(默认需要) 2不需要1#2#2#2#2|
|registerStoreCode|String|否|注册门店||

#### 请求示例：

```json

{
	"ver":1,
	"partnerId":"1000",
	"appId":"2eb5c8f117dac313f89d",
	"requestBody":"{\"cardCode\":\"001\",\"cardId\":\"001\",\"channelCode\":\"saas\",\"mobile\":\"13333333333\",\"mobileValidateFlag\":\"1\",\"nickName\":\"bbbb\",\"partnerId\":\"1000\",\"photoUrl\":\"\",\"registerInitData\":\"1#1#2#2#2\",\"registerStoreCode\":\"shop001\",\"registerType\":\"1\",\"sexFlag\":\"1\",\"thirdPartyCode\":\"fasdfsadfaa222\",\"unionId\":\"\",\"validCode\":\"2468\"}",
    "sign": "sign"
}

```

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


## **2.1** 更新积分

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
| orgCode  | String | 否|  | 机构编码|
| orgType  | Integer | 否|  | 机构类型{1总公司2分公司3门店}|
| remark  | String | 否|  | 备注|

#### 请求示例

```json
{
	"appId":"2eb5c8f1170246429755e6dac313f89d",
	"partnerId":"1864",
	"requestBody":"{'partnerId':'1864','memberId':'115596590488056494','changeScore':'8','idempotencyBussinessId':'q235246245234','idempotencyBussinessType':'15','operationType':'1'}",
	"sign":"skip",
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

# **2.2** 添加积分

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
| orgCode  | String | 否|  | 机构编码|
| orgType  | Integer | 否|  | 机构类型{1总公司2分公司3门店}|
| remark  | String | 否|  | 备注|
| idempotencyBussinessId  | String | 是|  | 业务ID(保持唯一)|
| idempotencyBussinessType  | String | 是|  | 业务类型{1注册送 2发放经验值 3等级升级 4等级降级 5积分支付 6消费送积分 7消费满赠 8生日送 9定时送 10储值支付 11储值充值 12完善资料送 13等级升级送积分 14储值卡投放 15会员消费数据增加 16会员消费数据冲正}|

#### 请求示例

```json
{
	"appId":"2eb5c8f1170246429755e6dac313f89d",
	"partnerId":"1864",
	"requestBody":"{'partnerId':'1864','memberId':'115596590488056494','score':'8','idempotencyBussinessId':'q235246245234','idempotencyBussinessType':'15','operationType':'1'}",
	"sign":"skip",
	"ver":1
}
```

### 响应参数

| **字段**                         | **类型** | 举例 | **说明**                                                     |
| -------------------------------- | -------- | ---- | ------------------------------------------------------------ |
| currentScore                         | Integer   |      | 当前可用积分                                                     |
| updateScore                         | Integer   |      | 变化积分数                                                     |
| sendScore                         | Integer   |      | 新增积分数                                                     |
                                              |

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

# **2.3**  积分回退

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

#### 请求示例

```json
{
	"appId":"2eb5c8f1170246429755e6dac313f89d",
	"partnerId":"1864",
	"requestBody":"{'partnerId':'1864','memberId':'115596590488056494','score':'8','idempotencyBussinessId':'q235246245234','idempotencyBussinessType':'15','operationType':'1'}",
	"sign":"skip",
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

# **2.4**  积分统计

### 应用场景

积分回退

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
	"requestBody":"{'partnerId':'1864','memberId':'115596590488056494','score':'8','idempotencyBussinessId':'q235246245234','idempotencyBussinessType':'15','operationType':'1'}",
	"sign":"skip",
	"ver":1
}
```

### 响应参数

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
