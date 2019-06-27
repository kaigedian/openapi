# 会员类接口



### 接口说明

##  根据会员id或手机号查询会员信息接口

### 应用场景

根据会员id查询会员信息

### 请求url：/member/getMemberInfoByIdOrMobile

### 请求参数

| 字段      | 类型   | 是否必传                     | 举例               | 说明   |
| :-------- | ------ | ---------------------------- | ------------------ | ------ |
| memberId  | String | 是(memberId与mobile必传一个) | 115589208394311926 | 会员id |
| mobile    | String | 是                           | 18616703980        | 手机号 |

#### requestBody请求示例
```json
{
    "mobile": "13918457789"
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
| registerTime                     | DateTime |      | 注册时间{格式：yyyy-MM-dd HH:mm:ss}                          |
| registerStoreCode                | String   |      | 注册门店                                                     |
| memberChannels                   | Array     |      | 会员渠道列表                                                 |
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

#### responseBody返回示例

```json
{
    "memberId": "001",
    "memberName": "mrx",
    "nickName": "",
    "mobile":"",
    "photoUrl":"https://wx.qlogo.cn/mmhead/VB1rsYrhNqpEPqThmWiafBJKBSJsAtb9nPdObl2AibPib0/132",
    "sexFlag":"0",
    "birthday":"",
    "email":"",
    "idCard":"",
    "registerTime":"2019-0629 13:44:33",
    "registerStoreCode":"1001",
    "memberChannels":[
          {
              "cardCode":"",
              "cardId":"",
              "channelCode":"dcxcx",
              "channelId":"215589208394967421",
              "createTime":"2019-05-27 09:33:59",
              "memberId":"115589208394311926",
              "partnerId":"2282",
              "registerStoreCode":"",
              "registerType":"2",
              "thirdPartyCode":"orZZ75W27gmvtJmS6qy4dOXokK6U",
              "unionId":"oeAlw1VjDr2hUynN5E_fQigVmcGk",
              "updateTime":"2019-05-27 09:33:59"
          }
      ]
}
```


## 会员列表信息接口

### 应用场景

查询会员列表信息

### 请求url：/member/getMembers

### 请求参数

| 字段       | 类型    | 是否必传 | 举例        | 说明                 |
| :--------- | ------- | -------- | ----------- | -------------------- |
| startTime  | Date    | 否       |             | 查询开始时间         |
| endTime    | Date    | 否       |             | 查询结束时间         |
| pageNum    | Integer | 是       |             | 页号                 |
| pageSize   | Integer | 是       |             | 一页数据大小         |

#### requestBody请求示例

```json
{
    "startTime": "2019-05-27 13:44:33",
    "endTime": "2019-06-27 13:44:33",
    "pageNum": 1,
    "pageSize": 20
}

```

### 响应参数



| **字段**                               | **类型**     | 举例 | **说明**                            |
| -------------------------------------- | ------------ | ---- | ----------------------------------- |
| totalCount                             | Integer      |      | 记录总数                            |
| totalPages                             | Integer      |      | 总页数                              |
| pageNum                                | Integer      |      | 页号                                |
| pageSize                               | Integer      |      | 一页数据大小                        |
| memberList                             | Array        |      | 会员信息集合                        |
| memberList/memberId                    | String       |      | 会员编号                            |
| memberList/nickName                    | String       |      | 昵称                                |
| memberList/mobile                      | String       |      | 手机号                              |
| memberList/labels                      | Array        |      | 会员标签集合                        |
| memberList/registerTime                | DateTime     |      | 注册时间{格式：yyyy-MM-dd HH:mm:ss} |
| memberList/memberPaidList              | Array        |      | 付费会员                      |
| memberList/memberPaidList/paidName     | String       |      | 付费会员卡名称                      |
| memberList/memberPaidList/expiryTime   | List         |      | 付费会员卡到期时间                  |
| memberList/consumeCount                | String       |      | 累计消费次数                        |
| memberList/consumeMoney                | String       |      | 累计消费金额                        |
| memberList/ruleName                    | String       |      | 等级名称                            |
| memberList/currentScore                | String       |      | 当前积分                            |
| memberList/statusFlag                  | Date         |      | 状态标识{0禁用1激活}                |


#### responseBody返回示例

```json
{
    "totalCount":100,
    "totalPages":5,
    "pageNum":1,
    "pageSize":20,
    "memberList":[
        {
            "memberId": "001",
            "nickName": "",
            "mobile":"13918346055",
            "labels":[{

            }],
            "registerTime":"2019-06-29 13:44:33",
            "memberPaidList":[
                {
                    "paidName":"付费会员",
                    "expiryTime":"2019-06-29 13:44:33",
                }
            ],
            "consumeCount":"100",
            "consumeMoney": "5001",
            "currentScore": "4657",
            "statusFlag": "1"
        }
    ]

```





##  会员加减积分

### 应用场景

会员加减积分

### 请求url：/member/score/opt/{type}

### 请求参数

| 字段                     | 类型    | 是否必传 | 举例        | 说明                                                         |
| :----------------------- | ------- | -------- | ----------- | ------------------------------------------------------------ |
| type                     | Integer | 是       | 1           | 1:加，15：减                                                 |
| memberId                 | String  | 是       |             | 会员编号                                                     |
| score                    | String  | 是/否    |             | 积分数（金额和积分数必填一项）                               |
| operationType            | Integer | 是       |             | 操作类型{1消费送积分2积分支付退回3积分签到4手动赠送5等级升级送积分6割接7生日送8注册送9完善送10消费满赠11手动扣减12积分兑换13积分清理14积分支付15消费送积分扣回16等级升级退积分17消费满赠扣回} |
| operationName            | String  | 否       |             | 操作名称{1消费送积分2积分支付退回3积分签到4手动赠送5等级升级送积分6割接7生日送8注册送9完善送10消费满赠11手动扣减12积分兑换13积分清理14积分支付15消费送积分扣回16等级升级退积分17消费满赠扣回} |
| orderId                  | String  | 否       |             | 订单编号                                                     |
| activityCode             | String  | 否       |             | 活动编号                                                     |
| remark                   | String  |          |             | 备注                                                         |
| idempotencyBussinessId   | String  | 是       |             | 业务ID{调用方保证唯一}                                       |
| idempotencyBussinessType | String  | 否       |             | 业务类型{1注册送 2发放经验值 3等级升级 4等级降级 5积分支付 6消费送积分 7消费满赠 8生日送 9定时送 10储值支付 11储值充值 12完善资料 |

#### requestBody请求示例

```json
{
    "type":"1",
    "memberId":"115589208394311926",
    "score":"100",
    "operationType":"1",
    "idempotencyBussinessId":"2",
    "idempotencyBussinessType":"6"
}

```

### 响应参数



| **字段**     | **类型** | 举例 | **说明**     |
| ------------ | -------- | ---- | ------------ |
| currentScore | Integer  |      | 当前可用积分 |
| updateScore  | Integer  |      | 变化积分数   |
| sendScore    | Integer  |      | 新增积分数   |


#### responseBody返回示例

 ```json
{
    "currentScore":5000,
    "updateScore":100,
    "sendScore":100
}

```



##  推送会员信息回调接口

### 应用场景

会员注册完成推送会员信息到第三方

### 请求url：商家自定义

### 请求参数



| **字段**                         | **类型** | 是束必传 | 举例 | **说明**                                                     |
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
| registerTime                     | DateTime | 否       |      | 注册时间{格式：yyyy-MM-dd HH:mm:ss}                          |
| registerStoreCode                | String   | 否       |      | 注册门店                                                     |
| memberChannels                   | Array     | 否       |      | 会员渠道列表                                                 |
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



#### requestBody请求示例

```json

{
    "birthday":"",
    "email":"",
    "idCard":"",
    "memberChannels":[
        {
            "cardCode":"",
            "cardId":"",
            "channelCode":"dcxcx",
            "channelId":"215589208394967421",
            "createTime":"2019-05-27 09:33:59",
            "memberId":"115589208394311926",
            "partnerId":"2282",
            "registerStoreCode":"",
            "registerType":"2",
            "thirdPartyCode":"orZZ75W27gmvtJmS6qy4dOXokK6U",
            "unionId":"oeAlw1VjDr2hUynN5E_fQigVmcGk",
            "updateTime":"2019-05-27 09:33:59"
        }
    ],
    "memberId":"115589208394311926",
    "memberName":"",
    "mobile":"",
    "nickName":"童百良",
    "photoUrl":"https://wx.qlogo.cn/mmhead/VB1rsYrhNqpEPqThmWiafBJKBSJsAtb9nPdObl2AibPib0/132",
    "sexFlag":"0"
}

```
