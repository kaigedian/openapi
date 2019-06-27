# 门店类接口

### 接口说明

# 1.1 修改门店状态

### 应用场景

对门店进行开关店和置休开启

### 请求url：/store/setStoreStatus

### 请求参数

| 字段      | 类型   | 是否必传 | 举例               | 说明   |
| :-------- | ------ | -------- | ------------------ | ------ |
| storeCode | String | 是       | 001               | 门店编号 |
| operator  | String | 是       | 非码小二 | 操作人 |
| storeEvent  | Integer | 是       | 1 | 门店状态参数(1-营业 2-停业 3-置休 4-开启) |


#### requestBody请求示例

```json
{
	"storeCode": "1001",
	"operator": "非码小二",
    "storeEvent": 1
}
```

### 响应参数

只返回公共参数 状态码和message

#### responseBody返回示例

```json
{
    "ver": "1",
    "statusCode": "100",
    "message": "success",
    "responseBody": ""
}
```


## 状态码

|  状态码   |  描述 |
| -------|  ----|
|100|成功|
|21|缺少必要的请求参数|
|500|内部服务异常|


