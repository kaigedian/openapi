# 商品类接口

## 商品查询接口

### 应用场景

> 根据商店id查询所有商品信息

* 请求地址
  `/goods/queryByStoreId`

* 请求参数

| 字段    | 类型   | 是否必传 | 举例   | 说明       |
| :------ | ------ | -------- | ------ | ---------- |
| storeId | String | 是       | 208888 | 商家门店号 |

* 请求示例

```json
{
	"ver":1,
	"partnerId":"1000",
	"appId":"2eb5c8f117dac313f89d",
	"requestBody":"{\"storeId\":\"10086\" }"，
    "sign": "sign"
}
```

* 响应参数

| **字段**      | **类型** | **必填** | **举例** | **说明**                                                     |
| ------------- | -------- | -------- | -------- | ------------------------------------------------------------ |
| menuName      | String   | 是       |          | 菜单名称                                                     |
| menuId        | String   | 是       |          | 菜单id                                                       |
| nid           | String   | 是       |          | 菜单节点ID以两位数字为一组，代表菜单顺序范围：01-ZZ，如果是多级菜单者在上级菜单的编号基础上增加两位顺序组。例如：一级菜单01，一级子菜单0101 |
| level         | Integer  | 是       |          | 层级                                                         |
| categoryInfos | Array    | 是       |          | 分类信息（见categoryInfos）                                  |

* categoryInfos

| **字段**     | **类型** | **必填** | **举例** | **说明**                                                     |
| ------------ | -------- | -------- | -------- | ------------------------------------------------------------ |
| categoryName | String   | 是       |          | 分类名称                                                     |
| level        | Integer  | 是       |          | 层级                                                         |
| nid          | String   | 是       |          | 菜单节点ID以两位数字为一组，代表菜单顺序范围：01-ZZ，如果是多级菜单者在上级菜单的编号基础上增加两位顺序组。例如：一级菜单01，一级子菜单0101 |
| sequence     | Integer  | 是       | 1        | 排序                                                         |
| productInfos | Array    | 否       |          | 商品详情（见productInfos）                                   |

* productInfos

| **字段**                                                 | **类型** | **必填** | **举例**     | **说明**                                                     |
| -------------------------------------------------------- | -------- | -------- | ------------ | ------------------------------------------------------------ |
| level                                                    | Integer  | 是       |              | 层级商品详情                                                 |
| nid                                                      | String   | 是       |              | 菜单节点ID以两位数字为一组，代表菜单顺序范围：01-ZZ，如果是多级菜单者在上级菜单的编号基础上增加两位顺序组。例如：一级菜单01，一级子菜单0101 |
| sequence                                                 | Integer  | 是       |              | 排序                                                         |
| barcode                                                  | String   |          |              | 条形码                                                       |
| brandId                                                  | String   | 否       |              | 品牌ID                                                       |
| brandName                                                | String   | 是       |              | 品牌名称                                                     |
| businessNo                                               | String   | 否       | TB2014032666 | 业务编号                                                     |
| category                                                 | String   | 否       |              | 商品分类编码                                                 |
| categoryName                                             | String   | 是       |              | 商品分类名称                                                 |
| companyId                                                | String   | 是       |              | 商户ID                                                       |
| finalPrice                                               | Integer  | 是       | 1000         | 商品最终售价-卖价(单位分)                                    |
| isSkuProduct                                             | Integer  | 是       | 1            | 是否sku商品，1是，0不是                                      |
| name                                                     | String   | 是       | 珍珠奶茶     | 商品名称                                                     |
| originalPrice                                            | Integer  | 是       | 800          | 商品标准售价-原价(单位分)                                    |
| packPrice                                                | Integer  | 是       | 100          | 包装价格(单位分)                                             |
| picture                                                  | String   | 是       |              | 图片地址                                                     |
| status                                                   | Integer  | 是       | 1            | 商品状态 /1下架/2上架/3售罄/4删除/5上架不可售(上架状态但是不在可售时间范围) |
| type                                                     | Integer  | 是       | 1            | 商品类型 /1普通商品/3组合商品/6套餐/9虚拟商品/10多规格商品   |
| pid                                                      | String   | 是       |              | 商品ID                                                       |
| labelNames                                               | Array    | 否       |              | 标签（spu才有）                                              |
| labelNames\name                                          | String   | 是       | 特色         | 标签名称                                                     |
| productAttributeGroupList                                | Array    | 否       |              | 商品属性（spu才有）                                          |
| productAttributeGroupList\attributeName                  | String   | 是       | 辣           | 商品折扣价，以分为单位                                       |
| productAttributeGroupList\attributeType                  | Integer  | 是       | 1000         | 属性组类型                                                   |
| productAttributeGroupList\sequence                       | Integer  | 是       | 1            | 属性组排序                                                   |
| productAttributeGroupList\attributeValues                | Array    | 是       |              | 属性组下属性信息                                             |
| productAttributeGroupList\attributeValues\attributeId    | String   | 是       |              | 属性值ID                                                     |
| productAttributeGroupList\attributeValues\attributeValue | String   | 是       |              | 属性名称                                                     |
| productAttributeGroupList\attributeValues\sequence       | Integer  | 是       | 2            | 属性排序                                                     |
| specificationGroupList                                   | Array    | 否       |              | 规格组列表（spu才有）                                        |
| specificationGroupList\sequence                          | Integer  | 是       |              | 排序                                                         |
| specificationGroupList\specId                            | String   | 是       |              | 规格组id                                                     |
| specificationGroupList\specName                          | String   | 是       |              | 规格组名称                                                   |
| specificationGroupList\specValueVos                      | Array    | 是       |              | 规格值列表                                                   |
| specificationGroupList\specValueVos\sequence             | Integer  | 是       |              | 排序号                                                       |
| specificationGroupList\specValueVos\specValue            | String   | 是       |              | 规格值                                                       |
| specificationGroupList\specValueVos\specValueId          | String   | 是       |              | 规格值ID                                                     |
| skuList                                                  | Array    | 否       |              | SKU列表                                                      |
| skuList\skuId                                            | String   | 是       |              | skuId                                                        |
| skuList\finalPrice                                       | Integer  | 是       |              | 最终价格                                                     |
| skuList\originalPrice                                    | Integer  | 是       |              | 原价                                                         |
| skuList\packPrice                                        | Integer  | 是       |              | 打包费                                                       |
| skuList\productName                                      | String   | 是       |              | 名称                                                         |
| skuList\productType                                      | Integer  | 是       |              | 商品类型                                                     |
| skuList\sequence                                         | Integer  | 是       |              | 排序                                                         |
| skuList\status                                           | Integer  | 是       |              | 状态                                                         |
| skuList\skuSpecValues                                    | Array    | 是       |              | 商品规格                                                     |
| skuList\skuSpecValues\productId                          | String   | 是       |              | 商品id                                                       |
| skuList\skuSpecValues\sequence                           | Integer  | 是       |              | 排序                                                         |
| skuList\skuSpecValues\specId                             | String   | 是       |              | 规格组id                                                     |
| skuList\skuSpecValues\specName                           | String   | 是       |              | 规格名称                                                     |
| skuList\skuSpecValues\specValue                          | String   | 是       |              | 规格值                                                       |
| skuList\skuSpecValues\specValueId                        | String   | 是       |              | 规格值Id                                                     |
| skuSpecValues                                            | Array    | 否       |              | sku规格（sku商品才有）                                       |
| skuSpecValues\productId                                  | String   | 是       |              | 商品id                                                       |
| skuSpecValues\sequence                                   | Integer  | 是       |              | 排序                                                         |
| skuSpecValues\specId                                     | String   | 是       |              | 规格组id                                                     |
| skuSpecValues\specName                                   | String   | 是       |              | 规格名称                                                     |
| skuSpecValues\specValue                                  | String   | 是       |              | 规格值                                                       |
| skuSpecValues\specValueId                                | String   | 是       |              | 规格值Id                                                     |


* 返回示例

```json
{
    "ver": "1",
    "statusCode": "100",
    "message": "成功",
    "responseBody": "{\"categoryInfos\":[{\"categoryName\":\"test\",\"level\":1,\"nid\":\"0101\",\"productInfos\":[{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"detailText\":\"多规格01\",\"finalPrice\":1,\"isSkuProduct\":0,\"labelNames\":[{\"id\":\"0\",\"name\":\"特色\",\"type\":\"0\"},{\"id\":\"0\",\"name\":\"美味\",\"type\":\"0\"}],\"level\":2,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"多规格01\",\"nid\":\"010101\",\"options\":\"\",\"originalPrice\":1,\"packPrice\":0,\"picture\":\"https://picture.sandload.cn/1554725170464.jpg\",\"pid\":\"138327334988135726\",\"pkNumber\":1,\"priceSource\":3,\"productAttributeGroupList\":[{\"attributeName\":\"温度\",\"attributeType\":3,\"attributeValues\":[{\"attributeId\":\"137174708465634585\",\"attributeValue\":\"冻\",\"id\":142407419635634480,\"price\":0,\"sequence\":0,\"status\":2},{\"attributeId\":\"125609440286271769\",\"attributeValue\":\"加少冰\",\"id\":142407419635634480,\"price\":0,\"sequence\":5,\"status\":2}],\"maxNumber\":1,\"minNumber\":1,\"must\":1,\"options\":\"\",\"sequence\":3},{\"attributeName\":\"奶量\",\"attributeType\":6,\"attributeValues\":[{\"attributeId\":\"125374222305519889\",\"attributeValue\":\"少量\",\"id\":142407419635634480,\"price\":0,\"sequence\":20,\"status\":2},{\"attributeId\":\"122493722811322375\",\"attributeValue\":\"加牛奶\",\"id\":142407419635634480,\"price\":0,\"sequence\":25,\"status\":2}],\"maxNumber\":1,\"minNumber\":1,\"must\":1,\"options\":\"\",\"sequence\":6},{\"attributeName\":\"口味\",\"attributeType\":100013,\"attributeValues\":[{\"attributeId\":\"124714737311163694\",\"attributeValue\":\"辣酱\",\"id\":142407419635634480,\"price\":0,\"sequence\":10,\"status\":2},{\"attributeId\":\"124714762753811759\",\"attributeValue\":\"番茄酱\",\"id\":142407419635634480,\"price\":0,\"sequence\":15,\"status\":2}],\"maxNumber\":0,\"minNumber\":0,\"must\":0,\"options\":\"\",\"sequence\":15}],\"productCode\":\"duogg01-p\",\"productPictureList\":[{\"pictureId\":\"142407419660800303\",\"productId\":\"138327334988135726\",\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://picture.sandload.cn/1554725170464.jpg\"}],\"productionLocation\":\"\",\"remark\":\"多规格01\",\"saleCount\":0,\"sequence\":1,\"skuList\":[{\"customerCode\":\"duogg01-bz\",\"finalPrice\":2,\"originalPrice\":2,\"packPrice\":1,\"productName\":\"多规格01/大杯/珍珠\",\"productType\":1,\"sequence\":0,\"skuId\":\"138327335005961520\",\"skuSpecValues\":[{\"productId\":\"138327335005961520\",\"sequence\":1,\"specId\":\"126981658895313165\",\"specName\":\"杯型\",\"specValue\":\"大杯\",\"specValueId\":\"126981795913787664\"},{\"productId\":\"138327335005961520\",\"sequence\":2,\"specId\":\"125388160722129444\",\"specName\":\"加料\",\"specValue\":\"珍珠\",\"specValueId\":\"135985417797493052\"}],\"status\":2},{\"customerCode\":\"duogg01-by\",\"finalPrice\":1,\"originalPrice\":1,\"packPrice\":2,\"productName\":\"多规格01/大杯/椰果\",\"productType\":1,\"sequence\":0,\"skuId\":\"138327335005961526\",\"skuSpecValues\":[{\"productId\":\"138327335005961526\",\"sequence\":3,\"specId\":\"126981658895313165\",\"specName\":\"杯型\",\"specValue\":\"大杯\",\"specValueId\":\"126981795913787664\"},{\"productId\":\"138327335005961526\",\"sequence\":4,\"specId\":\"125388160722129444\",\"specName\":\"加料\",\"specValue\":\"椰果\",\"specValueId\":\"135985397657493819\"}],\"status\":2},{\"customerCode\":\"duogg01-sz\",\"finalPrice\":1,\"originalPrice\":1,\"packPrice\":2,\"productName\":\"多规格01/小杯/珍珠\",\"productType\":1,\"sequence\":0,\"skuId\":\"138327335005961532\",\"skuSpecValues\":[{\"productId\":\"138327335005961532\",\"sequence\":5,\"specId\":\"126981658895313165\",\"specName\":\"杯型\",\"specValue\":\"小杯\",\"specValueId\":\"126981808335218961\"},{\"productId\":\"138327335005961532\",\"sequence\":6,\"specId\":\"125388160722129444\",\"specName\":\"加料\",\"specValue\":\"珍珠\",\"specValueId\":\"135985417797493052\"}],\"status\":2},{\"customerCode\":\"duogg01-sy\",\"finalPrice\":1,\"originalPrice\":1,\"packPrice\":2,\"productName\":\"多规格01/小杯/椰果\",\"productType\":1,\"sequence\":0,\"skuId\":\"138327335007010051\",\"skuSpecValues\":[{\"productId\":\"138327335007010051\",\"sequence\":7,\"specId\":\"126981658895313165\",\"specName\":\"杯型\",\"specValue\":\"小杯\",\"specValueId\":\"126981808335218961\"},{\"productId\":\"138327335007010051\",\"sequence\":8,\"specId\":\"125388160722129444\",\"specName\":\"加料\",\"specValue\":\"椰果\",\"specValueId\":\"135985397657493819\"}],\"status\":2}],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[{\"partnerId\":\"1864\",\"sequence\":0,\"specId\":\"126981658895313165\",\"specName\":\"杯型\",\"specValueVos\":[{\"sequence\":0,\"specId\":\"126981658895313165\",\"specValue\":\"大杯\",\"specValueId\":\"126981795913787664\"},{\"sequence\":0,\"specId\":\"126981658895313165\",\"specValue\":\"小杯\",\"specValueId\":\"126981808335218961\"}]},{\"partnerId\":\"1864\",\"sequence\":0,\"specId\":\"125388160722129444\",\"specName\":\"加料\",\"specValueVos\":[{\"sequence\":0,\"specId\":\"125388160722129444\",\"specValue\":\"珍珠\",\"specValueId\":\"135985417797493052\"},{\"sequence\":0,\"specId\":\"125388160722129444\",\"specValue\":\"椰果\",\"specValueId\":\"135985397657493819\"}]}],\"standardGoodsFlag\":2,\"status\":2,\"type\":10,\"unit\":\"\",\"valid\":true,\"version\":0,\"weight\":0}],\"sequence\":0}],\"level\":0,\"menuId\":\"138614756111043329\",\"menuName\":\"test-sjj\",\"nid\":\"01\",\"sequence\":0}",
    "sign": "sign"
}
```


## 商品沽清接口（非码商品ID）

### 应用场景

> 根据非码商品ID，商品沽清接口

* 请求地址
  `/goods/skuItem/sellOut`  

* 请求参数

| 字段    | 类型   | 是否必传 | 举例   | 说明       |
| :------ | ------ | -------- | ------ | ---------- |
| storeId | String | 是       | 208888 | 商家门店号 |
| spuId   | String |          |        |            |
| skuIds  | Array  | 是       |        |            |

* 请求示例

```json
{
	"ver":1,
	"partnerId":"1000",
	"appId":"2eb5c8f117dac313f89d",
	"requestBody":"{\"storeId\":\"1000189\",\"skuIds\":[\"141514633969296671\"],\"spuId\":\"141514633960908061\"}",
    	"sign": "sign"
}
```

* 响应参数说明：
  成功responseBody返回null, 部分成功则返回失败customerCode

* 返回示例

```json
{
    "ver": "1",
    "statusCode": "100",
    "message": "成功",
    "responseBody": "[\"323\",\"we232\"]",
    "sign": "sign"
}

```

## 商品撤销沽清接口（非码商品ID）

### 应用场景

> 根据非码商品ID，商品撤销沽清接口

* 请求地址
  `/goods/skuItem/cancelSellOut`

* 请求参数

| 字段    | 类型   | 是否必传 | 举例   | 说明       |
| :------ | ------ | -------- | ------ | ---------- |
| storeId | String | 是       | 208888 | 商家门店号 |
| spuId   | String | 是       |        |            |
| skuId   | String | 是       |        |            |

* 请求示例

```json
{
	"ver":1,
	"partnerId":"1000",
	"appId":"2eb5c8f117dac313f89d",
	"requestBody":"{\"storeId\":\"1000189\",\"skuId\":\"141514633969296671\",\"spuId\":\"141514633960908061\"}",
    	"sign": "sign"
}

```

* 响应参数说明
  成功responseBody返回null, 部分成功则返回失败customerCode

* 返回示例

```json
{
    "ver": "1",
    "statusCode": "100",
    "message": "成功",
    "responseBody": "[\"323\",\"we232\"]",
    "sign": "sign"
}

```


## 商品沽清接口（商家自定义商品ID）

### 应用场景

> 根据商家自定义商品ID，商品沽清接口

* 请求地址
  `/goods/skuItem/sellOutByCustomerCode`

* 请求参数

| 字段          | 类型   | 是否必传 | 举例   | 说明       |
| :------------ | ------ | -------- | ------ | ---------- |
| storeId       | String | 是       | 208888 | 商家门店号 |
| customerCodes | Array  | 是       |        |            |

* 请求示例

```json
{
	"ver":1,
	"partnerId":"1000",
	"appId":"2eb5c8f117dac313f89d",
	"requestBody":"{\"storeId\":\"1000189\",\"customerCodes\":[\"141514633969296671\",\"141514633969296672\",\"323\",\"we232\"]}",
    	"sign": "sign"
}

```

* 响应参数说明
  成功responseBody返回null,部分成功则返回失败customerCode

* 返回示例

```json
{
    "ver": "1",
    "statusCode": "100",
    "message": "成功",
    "responseBody": "[\"323\",\"we232\"]",
    "sign": "sign"
}

```



## 商品撤销沽清接口（商家自定义商品ID）

### 应用场景

> 根据商家自定义商品ID，商品撤销沽清接口

* 请求地址
    `/goods/skuItem/cancelSellOutByCustomerCode`

* 请求参数

| 字段          | 类型   | 是否必传 | 举例   | 说明       |
| :------------ | ------ | -------- | ------ | ---------- |
| storeId       | String | 是       | 208888 | 商家门店号 |
| customerCodes | Array  | 是       |        |            |

* 请求示例

```json
{
	"ver":1,
	"partnerId":"1000",
	"appId":"2eb5c8f117dac313f89d",
	"requestBody":"{\"storeId\":\"1000189\",\"customerCodes\":[\"141514633969296671\",\"141514633969296672\"]}",
    	"sign": "sign"
}
```

* 响应参数说明
  成功responseBody返回null,部分成功则返回失败customerCode

* 返回示例

```json
{
    "ver": "1",
    "statusCode": "100",
    "message": "成功",
    "responseBody": "[\"323\",\"we232\"]",
    "sign": "sign"
}

```

## 创建商品菜单接口

### 应用场景

> 创建商品菜单

* 请求地址
    `/menu/add`

* 请求参数

| 字段           | 类型   | 是否必传 | 举例 | 说明                                                         |
| -------------- | ------ | -------- | ---- | ------------------------------------------------------------ |
| **channel**    | String | 是       | saas | 渠道                                                         |
| **name**       | string | 是       |      | 菜单名称                                                     |
| **dateStatus** | String | 是       |      | 周期类型 /0不限周期/1周一/2周二/4周三/8周四/16周五/32周六/64周日，各个周期还可以相加，如3代表周一+周二 |
| **startTime**  | String | 是       |      | 开始时间 格式 HH:mm:ss,00:00:00-23:59:59                     |
| **endTime**    | String | 是       |      | 结束时间 格式 HH:mm:ss,00:00:00-23:59:59                     |
| **menuNo**     | String | 是       |      | 菜单编号，默认菜单=0                                         |
| **type**       | String | 是       |      | 菜单类型,1门店菜单/2商户菜单/3集中店菜单                     |
| remark         | String | 否       |      | 备注                                                         |

* 请求示例

```json

{
	"ver":1,
	"partnerId":"1864",
	"appId":"2eb5c8f1170246429755e6dac313f89d",
	"requestBody":"{\"channel\":\"saas\",\"dateStatus\": 1,\"endTime\":\"2019-08-09 10:00:00\",\"menuCode\":\"0102\",\"menuNo\":10,\"name\":\"测试\",\"partnerId\":\"string\",\"remark\":\"测试\",\"startTime\":\"2019-07-09 10:00:00\", \"type\": 0}",
    "sign": "skip"
}
```

* 响应参数

| **字段** | **类型** | **必填** | **举例** | **说明** |
| -------- | -------- | -------- | -------- | -------- |
| menuId   | String   | 是       |          | 菜单ID   |

* 返回示例

```json

{
    "ver": "1",
    "statusCode": "100",
    "message": "成功",
    "responseBody": "146682059538214920",
    "sign": "sign"
}
```

## 创建商品菜单分类接口

### 应用场景

> 创建商品菜单分类

* 请求地址
  `/menu/addCategory`

* 请求参数

| 字段                 | 类型    | 是否必传 | 举例 | 说明                                                         |
| -------------------- | ------- | -------- | ---- | ------------------------------------------------------------ |
| **name**             | string  | 是       |      | 分类名称                                                     |
| customerCategoryCode | string  | 否       |      | 分类code                                                     |
| categoryId           | String  | 是       |      | 菜单节点ID以两位数字为一组，代表菜单顺序范围：01-ZZ，如果是多级菜单者在上级菜单的编号基础上增加两位顺序组。例如：一级菜单01，一级子菜单0101 |
| **menuId**           | String  | 是       |      | 菜单id                                                       |
| **sequence**         | Integer | 是       |      | 排序值（值越小，分类越往上）                                 |
| **icon**             | String  | 否       |      | 节点图片                                                     |
| **options**          | String  | 否       |      | 节点options（扩展字段，提供用户存储自定义json格式数据）      |
| remark               | String  | 否       |      | 节点备注                                                     |

* 请求示例

```json
{
	"ver":1,
	"partnerId":"1000",
	"appId":"2eb5c8f117dac313f89d",
	"requestBody":"{\"menuId\":\"146682059538214920\",\"categoryId\":\"01\",\"customerCategoryCode\":\"111\",\"name\":\"分类二\",\"remark\":\"分类二\",\"sequence\":2}",
    	"sign": "sign"
}
```

* 响应参数

| **字段**   | **类型** | **必填** | **举例** | **说明**                                                     |
| ---------- | -------- | -------- | -------- | ------------------------------------------------------------ |
| menuId     | String   | 是       |          | 菜单ID                                                       |
| name       | string   |          |          | 分类名称                                                     |
| categoryId | string   |          |          | 菜单分类ID以两位数字为一组，代表菜单顺序范围：01-ZZ，如果是多级菜单者在上级菜单的编号基础上增加两位顺序组。例如：一级菜单01，一级子菜单0101 |
| icon       | string   |          |          | 图标                                                         |
| options    | string   |          |          | 扩展字段，提供用户端存储自定义json格式数据                   |
| sequence   | Integer  |          |          | 排序节点排序号,父节点编号+2位序号，根节点为0                 |
| type       | String   |          |          | 类型, 如套餐，主食，饮料等                                   |
| remark     | String   |          |          | 备注                                                         |
| createDate | String   |          |          | 创建时间                                                     |

* 返回示例

```json
{
    "ver": "1",
    "statusCode": "100",
    "message": "成功",
    "responseBody": "{\"createDate\":\"1562678160358\",\"icon\":\"\",\"menuId\":\"146682059538214920\",\"name\":\"分类二\",\"options\":\"\",\"remark\":\"分类二\",\"sequence\":2,\"type\":\"node\"}",
    "sign": "sign"
}
```

## 获取菜单列表接口

### 应用场景

> 根据商户id返回菜单及分类

* 请求地址
  `/menu/list`

* 请求参数

| 字段         | 类型    | 是否必传 | 举例 | 说明                         |
| ------------ | ------- | -------- | ---- | ---------------------------- |
| **channel**  | String  | 否       | saas | 渠道                         |
| **isValid**  | string  | 否       |      | 是否有效（0：无效，1：有效） |
| **menuCode** | String  | 否       |      | 菜单编号                     |
| **name**     | String  | 否       |      | 菜单名称                     |
| **storeId**  | String  | 否       |      | 门店id                       |
| pageNum      | Integer | 是       |      | 当前页                       |
| pageSize     | Integer | 是       |      | 页数                         |

* 请求示例

```json
{
	"ver":1,
	"partnerId":"1000",
	"appId":"2eb5c8f117dac313f89d",
	"requestBody":"{\"pageNum\":1,\"pageSize\":10}",
    	"sign": "sign"
}

```

* 响应参数

| **字段**      | **类型** | **必填** | **举例** | **说明**                     |
| ------------- | -------- | -------- | -------- | ---------------------------- |
| list/isOnline | Integer  | 是       |          | 是否在线上使用(0：否，1：是) |
| list/isValid  | Integer  | 是       |          | 是否有效(0：否，1：是)       |
| list/menuCode | String   | 是       |          | 菜单编号                     |
| list/menuId   | String   | 是       |          | 菜单id                       |
| list/name     | String   | 是       |          | 菜单名称                     |
| list/remark   | String   | 是       |          | 菜单备注                     |
| totalCount    | Integer  | 是       |          | 总数量                       |
| totalPages    | Integer  | 是       |          | 总页数                       |

* 返回示例

```json
{
    "ver": "1",
    "statusCode": "100",
    "message": "成功",
    "responseBody": "{\"list\":[{\"isOnline\":0,\"isValid\":1,\"menuCode\":\"146682059538214920\",\"menuId\":\"146682059538214920\",\"name\":\"测试\",\"remark\":\"测试\"},{\"isOnline\":0,\"isValid\":1,\"menuCode\":\"GC007\",\"menuId\":\"146693217764659980\",\"name\":\"GC007\",\"remark\":\"GC007\"},{\"isOnline\":0,\"isValid\":1,\"menuCode\":\"109387493\",\"menuId\":\"144983044929038390\",\"name\":\"菜单名称-0000001\",\"remark\":\"备注备注\"},{\"isOnline\":0,\"isValid\":1,\"menuCode\":\"00000\",\"menuId\":\"144427801391564829\",\"name\":\"test\",\"remark\":\"test\"},{\"isOnline\":0,\"isValid\":1,\"menuCode\":\"000111\",\"menuId\":\"144238503243448863\",\"name\":\"杨国福\",\"remark\":\"杨国福\"},{\"isOnline\":0,\"isValid\":1,\"menuCode\":\"test_youzi\",\"menuId\":\"144232335939895810\",\"name\":\"youzi的菜单\",\"remark\":\"\"},{\"isOnline\":0,\"isValid\":1,\"menuCode\":\"100130405\",\"menuId\":\"144065254209506317\",\"name\":\"专属菜单\",\"remark\":\"\"},{\"isOnline\":0,\"isValid\":1,\"menuCode\":\"asd\",\"menuId\":\"143670255396473861\",\"name\":\"test\",\"remark\":\"test\"},{\"isOnline\":0,\"isValid\":1,\"menuCode\":\"哗啦啦测试商品\",\"menuId\":\"143402139249742136\",\"name\":\"哗啦啦测试商品\",\"remark\":\"哗啦啦测试商品\"},{\"isOnline\":0,\"isValid\":1,\"menuCode\":\"testSkuLimit\",\"menuId\":\"142970993325052205\",\"name\":\"testSkuLimit\",\"remark\":\"testSkuLimit\"}],\"pageNum\":1,\"pageSize\":10,\"totalCount\":36,\"totalPages\":0}",
    "sign": "sign"
}
```

## 查询菜单及分类信息接口

### 应用场景

> 根据菜单ID或门店ID查询菜单及分类信息

* 请求地址
  `/menu/detail`

* 请求参数

| 字段        | 类型   | 是否必传 | 举例 | 说明   |
| ----------- | ------ | -------- | ---- | ------ |
| **menuId**  | Long   | 是       | saas | 菜单id |
| **storeId** | string | 否       |      | 门店id |

* 请求示例

```json
{
	"ver":1,
	"partnerId":"1000",
	"appId":"2eb5c8f117dac313f89d",
	"requestBody":"{\"menuId\":\"146682059538214920\",\"storeId\":\"101\"}",
    	"sign": "sign"
}

```

* 响应参数

| **字段**             | **类型** | **必填** | **举例** | **说明**                                                     |
| -------------------- | -------- | -------- | -------- | ------------------------------------------------------------ |
| menuId               | String   | 是       |          | 菜单ID                                                       |
| name                 | string   |          |          | 分类名称                                                     |
| categoryId           | string   |          |          | 菜单分类ID以两位数字为一组，代表菜单顺序范围：01-ZZ，如果是多级菜单者在上级菜单的编号基础上增加两位顺序组。例如：一级菜单01，一级子菜单0101 |
| customerCategoryCode | String   |          |          | 分类code                                                     |
| icon                 | string   |          |          | 图标                                                         |
| options              | string   |          |          | 扩展字段，提供用户端存储自定义json格式数据                   |
| sequence             | Integer  |          |          | 排序节点排序号,父节点编号+2位序号，根节点为0                 |
| type                 | String   |          |          | 类型, 如套餐，主食，饮料等                                   |
| remark               | String   |          |          | 备注                                                         |
| createDate           | String   |          |          | 创建时间                                                     |

* 返回示例

```json
{
    "ver": "1",
    "statusCode": "100",
    "message": "成功",
    "responseBody": "{\"list\":[{\"categoryId\":\"0101\",\"createDate\":\"1562665908000\",\"customerCategoryCode\":\"\",\"icon\":\"\",\"menuId\":\"146682059538214920\",\"name\":\"分类一\",\"options\":\"\",\"remark\":\"分类一\",\"sequence\":1,\"type\":\"node\"},{\"categoryId\":\"0102\",\"createDate\":\"1562677936000\",\"customerCategoryCode\":\"111\",\"icon\":\"\",\"menuId\":\"146682059538214920\",\"name\":\"分类二\",\"options\":\"\",\"remark\":\"分类二\",\"sequence\":2,\"type\":\"node\"},{\"categoryId\":\"0103\",\"createDate\":\"1562678160000\",\"customerCategoryCode\":\"121\",\"icon\":\"\",\"menuId\":\"146682059538214920\",\"name\":\"分类三\",\"options\":\"\",\"remark\":\"分类三\",\"sequence\":3,\"type\":\"node\"}]}",
    "sign": "sign"
}
```

## 菜单批量绑定门店(限制300)

* 请求地址
  `/goods/batchBindMenu`

* 请求参数

参数|参数含义|类型|必填|说明
---|---|---|---|---
menuId|菜单编号|String|Y|菜单编号
storeIds|门店列表|List`<String>`|Y|门店列表

* 请求示例

```json
{
	"ver":1,
	"partnerId":"1000",
	"appId":"2eb5c8f117dac313f89d",
	"requestBody":"{\"menuId\":\"137169131923508491\",\"storeIds\":[\"190314\"]}",
    	"sign": "sign"
}

```

* 响应参数
参数|参数含义|类型|说明
---|---|---|---
code|返回码|String|返回码
message|返回信息|String|返回信息
result|返回结果|Object|返回结果


* 响应示例

```json
{
    "ver": "1",
    "statusCode": "100",
    "message": "成功",
    "responseBody": null,
    "sign": null
}
```


## 商品批量上下架(限制300)

* 请求地址
  `/goods/batchChangeStatus`

* 请求参数

参数|参数含义|类型|必填|说明
---|---|---|---|---
productIds|菜单编号|List|Y|菜单编号
status|上下架状态|String|Y|上下架状态 1:上架 ；2：下架

* 请求示例

```json
{
	"ver":1,
	"partnerId":"1000",
	"appId":"2eb5c8f117dac313f89d",
	"requestBody":"{\"status\":\"1\",\"productIds\":[\"146609369572911135\",\"145588001954801706\"]}",
    	"sign": "sign"
}
```

* 响应参数：

参数|参数含义|类型|说明
---|---|---|---
code|返回码|String|返回码
message|返回信息|String|返回信息
result|返回结果|Object|返回结果

* 响应示例
```json
{
    "ver": "1",
    "statusCode": "100",
    "message": "成功",
    "responseBody": null,
    "sign": null
}
```

## 门店商品库存批量同步(限制300)

* 请求地址
  `/goods/batchSynStoreStock`

* 请求参数

参数|参数含义|类型|必填|说明
---|---|---|---|---
channel|渠道|String|Y|渠道
storeId|门店编号|String|Y|门店编号
invInfos|库存信息|List|Y|库存信息
invInfos/customerCode|商品编号|String|Y|商品编号, maxLength = 50 ， 与productId至少填一个
invInfos/productId|非码商品id|String|Y|非码商品id，与customerCode至少填一个
invInfos/productName|商品名称|String|Y|商品名称
invInfos/qty|初始库存数量|Integer|Y|初始库存数量
invInfos/remark|备注|String|N|备注
invInfos/safeQty|安全库存数|Integer|N|安全库存数
invInfos/virtualQty|虚拟库存数|Integer|N|虚拟库存数

* 请求示例
```json
{
	"ver":1,
	"partnerId":"1000",
	"appId":"2eb5c8f117dac313f89d",
	"requestBody":"{\"channel\":\"xcx\",\"storeId\":\"190314\",\"invInfos\":[{\"productId\":\"145584167419324450\",\"qty\":\"68\",\"safeQty\":\"8\"}]}",
    	"sign": "sign"
}

```

* 响应参数：

参数|参数含义|类型|说明
---|---|---|---
batchResp|返回处理失败商品信息|List|返回处理失败商品信息
batchResp/productId|非码商品id|String|非码商品id
batchResp/customerCode|商户商品id|String|商户商品id
batchResp/errorMsg|处理错误描述|String|处理错误描述
batchResp/errorCode|处理错误码|Integer|1、该商户不存在该商品；2、该商品不限制库存
count|处理错误商品列表条数|Integer|处理错误商品列表条数

* 响应示例

```json
{
    "ver": "1",
    "statusCode": "100",
    "message": "成功",
    "responseBody": "{\"batchResp\":[{\"customerCode\":\"887766666\",\"errorCode\":1,\"errorMsg\":\"商品不存在\"},{\"customerCode\":\"346545645\",\"errorCode\":1,\"errorMsg\":\"商品不存在\"},{\"customerCode\":\"buxiankucun\",\"errorCode\":2,\"errorMsg\":\"无限库存商品\",\"productId\":\"147457905203883564\"}],\"count\":3}",
    "sign": "eu1fdxqnklgzglnmdkbVYo9hfry//hbAMZGmtf/kXdawD/FM1/QhJyzMsGy0Hr6s/i2xF+SSwuSK+zrArmnTt7dXkMMvR/9ToA6stzBIVMuq6m46NVrRHLLZ4PfR0f54k80FyRpRO5tnxs5j/VwjjVI/xx+BaD+v6AGlzp32tUWrYXpYLr20jB5LSKpovHKSgQTTiHdoRO8umqSvQX+lvIJ7301ppv+1cPd4etZqYj1r408v4gz2yz5Ic2fiQFsSkR4XcRq19KWwbJoooVZi2lLqn3S+s1chSU8BDYHBfWy4a5cBfrFxXIhUxNor68W4kmcTKy7tuFzKy97aufekLw=="
}
```


## 添加商品

* 请求地址
    `/goods/add`

* 请求参数


| 参数                  | 参数含义     | 类型                | 必填 | 说明                                              |
| --------------------- | ------------ | ------------------- | ---- | ------------------------------------------------- |
| currentUser           | 当前用户     | String              | N    | 当前用户                                          |
| productVo             | 商品信息     | Array               | N   | 商品信息                                          |
| productVo/brandId     | 品牌ID     | String                | N   | 品牌ID                                            |
| productVo/brandName   | 品牌名称     | String              | N   | 品牌名称                                          |
| productVo/businessNo  | 业务编号     | String              | N   | 业务编号                                          |
| productVo/businessTyp | 业务类型     | String              | N   | 业务类型                                          |
| productVo/category    | 商品后台分类编码| String           | N   | 商品后台分类编码                                  |
| productVo/categoryName     | 商品后台分类编码名称| String  | N   | 商品后台分类编码名称                              |
| productVo/customerCode     | 客户商品编码, 对应客户的系统的商品编码| String| N   | 客户商品编码, 对应客户的系统的商品编码|
| productVo/detailText     | 富文本描述字段     | String              | N   | 富文本描述字段                           |
| productVo/groupVos     | 商品详情     | List     | N   | 商品详情                                 |
| productVo/groupVos/partnerId|商户编号| String              | N   | 商户编号                                          |
| productVo/groupVos/sequence|排序号   | Integer($int32)     | N   | 排序号                                            |
| productVo/groupVos/specId|规格类型ID | String              | N   | 规格类型ID                                        |
| productVo/groupVos/specName|规格类型名称| String           | N   | 规格类型名称                                      |
| productVo/groupVos/specValueVos |规则值列表| List| N   | 规则值列表                                   |
| productVo/groupVos/specValueVos/sequence |排序号| integer($int32) | N   | 排序号                                       |
| productVo/groupVos/specValueVos/specId |规格大类ID| String              | N   | 规格大类ID                                 |
| productVo/groupVos/specValueVos/specValue |规格值| String              | N   | 规格值                                       |
| productVo/groupVos/specValueVos/specValueId | 规格值ID | String | N | 规格值ID |
| productVo/isProductNameAppendSpecName | 是否拼接商品名称和规格名称 | String | N | 0 是，1 否（默认0） |
| productVo/listLabel | 商品标签 | List| N |                                                   |
| productVo/labelId | 标签id | String | N |                                                   |
| productVo/name | 标签名称 | String | N |                                                   |
| productVo/sequence | 标签排序 | integer($int32) | N |                                                   |
| productVo/listPAM | 商品属性加料 | List | N |                                                   |
| productVo/listPAM/attributeId | attributeId不能为空 | String | Y |                                                   |
| productVo/listPAM/attributeName | 属性名称 | String | N |                                                   |
| productVo/listPAM/attributeType | 属性类型 | integer($int32) | N |                                                   |
| productVo/listPAM/attributeValue | 属性值 | String | N |                                                   |
| productVo/listPAM/groupType | 属性组 | integer($int32) | N |                                                   |
| productVo/listPAM/status | 属性状态 | integer($int32) | N |                                        |
| productVo/listPAM/price | 价格 | integer($int32) | N |                                                   |
| productVo/listPAM/sequence | 排序 | integer($int32) |      |                                                   |
| productVo/listSku                           |                                        | List   |      |                                                   |
| productVo/listSku/weight | 重量 | number($double) |      | 单位kg |
| productVo/listSku/customerCode | skuCode | String |      |                                                   |
| productVo/listSku/finalPrice | 价格 | integer($int32) |      |                                                   |
| productVo/listSku/originalPrice | 价格 | integer($int32) |      |                                                   |
| productVo/listSku/packPrice | 商品包装价格 | integer($int32) |      |                                                   |
| productVo/listSku/productCode | 产品编号 | String |      |                                                   |
| productVo/listSku/productName | 规则名 | String |      |                                                   |
| productVo/listSku/productType | 商品类型 | integer($int32) |      |                                                   |
| productVo/listSku/sequence | 排序 | integer($int32) |      |                                                   |
| productVo/listSku/skuId | skuid | String |      |                                                   |
| productVo/listSku/status | 状态 | integer($int32) |      |                                                   |
| productVo/listSku/stockLimit | 商品库存数量 | integer($int32) |      |                                                   |
| productVo/listSku/stockQty | 商品库存数量 | integer($int32) |      |                                                   |
| productVo/listSku/stockRule | 库存规则 | String |      |                                                   |
| productVo/listSku/upc | upc | String | | upc |
| productVo/listSku/skuSpecValues | 商品规格值 | List | | 单位kg |
| productVo/listSku/skuSpecValues/productId | 商品id | String | | |
| productVo/listSku/skuSpecValues/sequence | 排序 | integer($int32) | | |
| productVo/listSku/skuSpecValues/specId | 规格Id | String | | |
| productVo/listSku/skuSpecValues/specName | 规格名 | String | | |
| productVo/listSku/skuSpecValues/specValue | 规格值 | String | | |
| productVo/listSku/skuSpecValues/specValueId | 规格Id | String | | |
| productVo/maxLimitNumber                    | 最大限制数量                           | integer($int32) |      |                                        |
| productVo/minLimitNumber                    | 最小限制数量 | integer($int32) | | |
| productVo/name | 商品名称 | String | Y | |
| productVo/nid | 最小限制数量 | String | | |
| productVo/nodeName | 菜单商品分类名称 | string | | |
| productVo/packPrice | 商品包装价格 | integer($int32) | | |
| productVo/productType | 商品类型 | list | Y | |
| productVo/rawMaterial | 原材料 | String | | |
| productVo/remark | 商品描述 | String | | |
| productVo/sequence | 排序 | integer($int32) | | |
| productVo/skuCode | sku编号 | | | |
| productVo/specProductId | spuId | integer($int32) | | |
| productVo/stockLimit | 库存限制 | integer($int32) | | 1=限制库存,2=不限制库存 |
| productVo/stockQty | 商品库存数量 | integer($int32) | | |
| productVo/stockRule | 库存规则 | string | | |
| productVo/storeCondition | 存储方式 | string | | |
| productVo/unit | 单位 | string | | （杯、套、份） |
| productVo/upc | upc | string | | |
| productVo/updateDate | 更新时间 | String | | |
| productVo/updator | 更新人 | string | | |
| productVo/weight | 重量 | number($double) | | |
| productVo/picture | 商品图片 | list | | |
| productVo/picture/pictureUrl | 商品图片 | string | Y | |
| productVo/picture/sequence | 排序 | integer($int32) | | |
| productVo/picture/id | id | integer($int64) | | |
| productVo/weightType |  称重类型:1.称重菜 | integer($int64) | | |
| productVo/isDishware | 是否是餐具商品 1:餐具商品 | integer($int64) || |
| productVo/packageProductTypes | 套餐可选商品集合 | Object| || |
| productVo/packageProductTypes/groupId | 商品组ID | String| || |
| productVo/packageProductTypes/sequence | 商品组顺序 | integer| || |
| productVo/productComboInfos | 套餐固定搭配集合 | Object| || |
| productVo/productComboInfos/productId | 商品id | String| || |
| productVo/productComboInfos/quantity | 数量,默认值1 | integer| || |
| productVo/productComboInfos/sequence | 商品排序信息 | integer| || |


* requestBody请求示例

```json
{
    "productVo": {
        "stockLimit": 2,
        "stockRule": "",
        "stockQty": 0,
        "producttype": "1",
        "partnerId": "1864",
        "name": "2222222222",
        "price": "100",
        "packPrice": 100,
        "productCode": "22222",
        "productId": "",
        "remark": "",
        "detailText": "",
        "customerCode": "22222222222",
        "status": 2,
        "picture": [
            {
                "id": "",
                "pictureUrl": "https://picture.sandload.cn/1562751049490.jpg",
                "sequence": 0
            }
        ],
        "listLabel": [],
        "listPAM": [],
        "platformLabelId": "137798724836528641",
        "listSku": []
    },
    "currentUser": "TEST"
}
```

* 响应参数

| 字段        | 类型   | 是否必传 | 举例 | 说明   |
| ----------- | ------ | -------- | ---- | ------ |
| productId  | String   | 是       | "146682059538214920" | 商品id |

* 响应示例
```json
{
    "message":"成功",
    "responseBody":"{"productId":"153380799549336875"}",
    "statusCode":"100",
    "ver":"1"
}
```

## 修改商品

* 请求地址
  `/goods/update`

* 请求方法 POST

* 请求参数


| 参数                  | 参数含义     | 类型                | 必填 | 说明                                              |
| --------------------- | ------------ | ------------------- | ---- | ------------------------------------------------- |
| currentUser           | 当前用户     | String              | N    | 当前用户                                          |
| productVo             | 商品信息     | Array               | N   | 商品信息                                          |
| productVo/brandId     | 品牌ID     | String                | N   | 品牌ID                                            |
| productVo/brandName   | 品牌名称     | String              | N   | 品牌名称                                          |
| productVo/businessNo  | 业务编号     | String              | N   | 业务编号                                          |
| productVo/businessTyp | 业务类型     | String              | N   | 业务类型                                          |
| productVo/category    | 商品后台分类编码| String           | N   | 商品后台分类编码                                  |
| productVo/categoryName     | 商品后台分类编码名称| String  | N   | 商品后台分类编码名称                              |
| productVo/customerCode     | 客户商品编码, 对应客户的系统的商品编码| String| N   | 客户商品编码, 对应客户的系统的商品编码|
| productVo/detailText     | 富文本描述字段     | String              | N   | 富文本描述字段                           |
| productVo/groupVos     | 商品详情     | List      | N   | 商品详情                                 |
| productVo/groupVos/partnerId|商户编号| String              | N   | 商户编号                                          |
| productVo/groupVos/sequence|排序号   | Integer($int32)     | N   | 排序号                                            |
| productVo/groupVos/specId|规格类型ID | String              | N   | 规格类型ID                                        |
| productVo/groupVos/specName|规格类型名称| String           | N   | 规格类型名称                                      |
| productVo/groupVos/specValueVos |规则值列表| List | N   | 规则值列表                                   |
| productVo/groupVos/specValueVos/sequence |排序号| integer($int32) | N   | 排序号                                       |
| productVo/groupVos/specValueVos/specId |规格大类ID| String              | N   | 规格大类ID                                 |
| productVo/groupVos/specValueVos/specValue |规格值| String              | N   | 规格值                                       |
| productVo/groupVos/specValueVos/specValueId | 规格值ID | String | N | 规格值ID |
| productVo/isProductNameAppendSpecName | 是否拼接商品名称和规格名称 | String | N | 0 是，1 否（默认0） |
| productVo/listLabel | 商品标签 | List | N |                                                   |
| productVo/labelId | 标签id | String | N |                                                   |
| productVo/name | 标签名称 | String | N |                                                   |
| productVo/sequence | 标签排序 | integer($int32) | N |                                                   |
| productVo/listPAM | 商品属性加料 | List | N |                                                   |
| productVo/listPAM/attributeId | attributeId不能为空 | String | Y |                                                   |
| productVo/listPAM/attributeName | 属性名称 | String | N |                                                   |
| productVo/listPAM/attributeType | 属性类型 | integer($int32) | N |                                                   |
| productVo/listPAM/attributeValue | 属性值 | String | N |                                                   |
| productVo/listPAM/groupType | 属性组 | integer($int32) | N |                                                   |
| productVo/listPAM/status | 属性状态 | integer($int32) | N |                                        |
| productVo/listPAM/price | 价格 | integer($int32) | N |                                                   |
| productVo/listPAM/sequence | 排序 | integer($int32) |      |                                                   |
| productVo/listSku                           |                                        | List  |      |                                                   |
| productVo/listSku/weight | 重量 | number($double) |      | 单位kg |
| productVo/listSku/customerCode | skuCode | String |      |                                                   |
| productVo/listSku/finalPrice | 价格 | integer($int32) |      |                                                   |
| productVo/listSku/originalPrice | 价格 | integer($int32) |      |                                                   |
| productVo/listSku/packPrice | 商品包装价格 | integer($int32) |      |                                                   |
| productVo/listSku/productCode | 产品编号 | String |      |                                                   |
| productVo/listSku/productName | 规则名 | String |      |                                                   |
| productVo/listSku/productType | 商品类型 | integer($int32) |      |                                                   |
| productVo/listSku/sequence | 排序 | integer($int32) |      |                                                   |
| productVo/listSku/skuId | skuid | String |      |                                                   |
| productVo/listSku/status | 状态 | integer($int32) |      |                                                   |
| productVo/listSku/stockLimit | 商品库存数量 | integer($int32) |      |                                                   |
| productVo/listSku/stockQty | 商品库存数量 | integer($int32) |      |                                                   |
| productVo/listSku/stockRule | 库存规则 | String |      |                                                   |
| productVo/listSku/upc | upc | String | | upc |
| productVo/listSku/skuSpecValues | 商品规格值 | List | | 单位kg |
| productVo/listSku/skuSpecValues/productId | 商品id | String | | |
| productVo/listSku/skuSpecValues/sequence | 排序 | integer($int32) | | |
| productVo/listSku/skuSpecValues/specId | 规格Id | String | | |
| productVo/listSku/skuSpecValues/specName | 规格名 | String | | |
| productVo/listSku/skuSpecValues/specValue | 规格值 | String | | |
| productVo/listSku/skuSpecValues/specValueId | 规格Id | String | | |
| productVo/maxLimitNumber                    | 最大限制数量                           | integer($int32) |      |                                        |
| productVo/minLimitNumber                    | 最小限制数量 | integer($int32) | | |
| productVo/name | 商品名称 | String | Y | |
| productVo/nid | 最小限制数量 | String | | |
| productVo/nodeName | 菜单商品分类名称 | string | | |
| productVo/packPrice | 商品包装价格 | integer($int32) | | |
| productVo/productType | 商品类型 | list | Y | |
| productVo/rawMaterial | 原材料 | String | | |
| productVo/remark | 商品描述 | String | | |
| productVo/sequence | 排序 | integer($int32) | | |
| productVo/skuCode | sku编号 | | | |
| productVo/specProductId | spuId | integer($int32) | | |
| productVo/stockLimit | 库存限制 | integer($int32) | | 1=限制库存,2=不限制库存 |
| productVo/stockQty | 商品库存数量 | integer($int32) | | |
| productVo/stockRule | 库存规则 | string | | |
| productVo/storeCondition | 存储方式 | string | | |
| productVo/unit | 单位 | string | | （杯、套、份） |
| productVo/upc | upc | string | | |
| productVo/updateDate | 更新时间 | String | | |
| productVo/updator | 更新人 | string | | |
| productVo/weight | 重量 | number($double) | | |
| productVo/picture | 商品图片 | list | | |
| productVo/picture/pictureUrl | 商品图片 | string | Y | |
| productVo/picture/sequence | 排序 | integer($int32) | | |
| productVo/picture/id | id | integer($int64) | | |
| productVo/weightType |  称重类型:1.称重菜 | integer($int64) | | |
| productVo/isDishware | 是否是餐具商品 1:餐具商品 | integer($int64) || |
| productVo/packageProductTypes | 套餐可选商品集合 | Object| || |
| productVo/packageProductTypes/groupId | 商品组ID | String| || |
| productVo/packageProductTypes/sequence | 商品组顺序 | integer| || |
| productVo/productComboInfos | 套餐固定搭配集合 | Object| || |
| productVo/productComboInfos/productId | 商品id | String| || |
| productVo/productComboInfos/quantity | 数量,默认值1 | integer| || |
| productVo/productComboInfos/sequence | 商品排序信息 | integer| || |


* requestBody请求示例

```json
{
    "productVo": {
        "stockLimit": 2,
        "stockRule": "",
        "stockQty": 0,
        "producttype": "1",
        "partnerId": "1864",
        "name": "2222222222",
        "price": "100",
        "packPrice": 100,
        "productCode": "22222",
        "productId": "",
        "remark": "",
        "detailText": "",
        "customerCode": "22222222222",
        "status": 2,
        "picture": [
            {
                "id": "",
                "pictureUrl": "https://picture.sandload.cn/1562751049490.jpg",
                "sequence": 0
            }
        ],
        "listLabel": [],
        "listPAM": [],
        "platformLabelId": "137798724836528641",
        "listSku": []
    },
    "currentUser": "TEST"
}
```

* 响应参数

| 字段        | 类型   | 是否必传 | 举例 | 说明   |
| ----------- | ------ | -------- | ---- | ------ |
| productId  | String   | 是       | "146682059538214920" | 商品id |

* 响应示例
```json
{
    "message":"成功",
    "responseBody":"{"productId":"153380799549336875"}",
    "statusCode":"100",
    "ver":"1"
}
```

<!-- # 配送类接口 -->

## 下单(配送单)

### 接口说明

> 创建配送单

### 应用场景

> 第三方调用此接口发起开个店外卖订单配送

* 请求地址
  `/delivery/createOrder`

* 请求参数

| 字段                       | 类型                | 是否必传 | 说明                                                         |
| :------------------------- | ------------------- | -------- | ------------------------------------------------------------ |
| productInfos               | List`<ProductInfo>` | 是       | 商品信息                                                     |
| serialNumber               | String              | 是       | 取餐号                                                       |
| orderId                    | String              | 是       | 订单编号                                                     |
| orderRemark                | String              | 否       | 订单备注                                                     |
| orderSource                | String              | 否       | 订单来源 美团 ，饿了么，百度，口碑 等（中文）                |
| orderTotalAmount           | Integer             | 是       | 订单总金额(分)                                               |
| orderActualAmount          | Integer             | 是       | 订单实付金额(分)                                             |
| depatchWeight              | Number              | 否       | 订单重量（kg）                                               |
| invoiceTitle               | String              | 否       | 发票抬头                                                     |
| partnerRemark              | String              | 否       | 商户信息备注                                                 |
| orderChannel               | String              | 是       | 订单渠道                                                     |
| deliveryChannel            | String              | 否       | 配送渠道                                                     |
| isPre                      | String              | 是       | 是否预约单 ：０否　１是                                      |
| storeId                    | String              | 是       | 门店id                                                       |
| storeCode                  | String              | 是       | 第三方门店id                                                 |
| storeName                  | String              | 是       | 门店名称                                                     |
| storeAddress               | String              | 是       | 门店地址                                                     |
| storeLng                   | Number              | 是       | 门店经度                                                     |
| storeLat                   | Number              | 是       | 门店纬度                                                     |
| storePhone                 | String              | 是       | 门店电话                                                     |
| storeContact               | String              | 否       | 门店联系人                                                   |
| receiverName               | String              | 是       | 收货人姓名                                                   |
| receiverPrimaryPhone       | String              | 是       | 收货人联系方式                                               |
| receiverSecondPhone        | String              | 否       | 收货人备用联系方式                                           |
| receiverAddress            | String              | 是       | 收货人地址                                                   |
| receiverLng                | Number              | 是       | 收货人经度                                                   |
| receiverLat                | Number              | 是       | 收货人纬度                                                   |
| cityName                   | String              | 是       | 收件人所在城市                                               |
| deliveryServiceCode        | Integer             | 否       | 配送服务代码（飞速达:4002；快速达:4011；及时达:4012；集中送:4013） |
| productType                | Integer             | 否       | 商品类型 1送餐; 2送药; 3百货;4脏衣收; 5干净衣派;6生鲜; 7保单;8饮品；9现场勘查；99其他 |
| callbackUrl                | String              | 是       | 回调地址                                                     |
| orderTime                  | Date                | 是       | 用户下单时间                                                 |
| expectTime                 | Date                | 否       | 用户期望送达时间                                             |
| productInfos/productCode   | String              | 是       | 商品编号                                                     |
| productInfos/productName   | String              | 是       | 商品名称                                                     |
| productInfos/productNumber | Integer             | 是       | 商品数量                                                     |
| productInfos/productPrice  | Integer             | 是       | 商品价格（分）                                               |
| productInfos/productSize   | Integer             | 否       | 商品尺寸                                                     |
| productInfos/productRemark | String              | 否       | 商品备注                                                     |


* requestBody请求示例

```json
{
	"ver":1,
	"partnerId":"2282",
	"appId":"d64ffb6dec2e498a814579b4b080706f",
	"requestBody":"{'callbackUrl': 'baidu.com','cityName': '上海','deliveryServiceCode': 4011,'depatchWeight': 2.5,'expectTime': '2018-11-26 11:11:11','isPre': 0,'orderActualAmount': '3500','orderChannel': '美团','orderId': '123456782118','orderRemark': '订单备注','orderSource': '美团','orderTime': '2018-11-26 11:11:11','orderTotalAmount': '3500','partnerRemark': 'remark','productInfos': [    {        'productName': '鱼香肉丝',        'productNumber': 1,        'productPrice': 2500,        'productRemark': '商品信息',        'productSize': 26    }],'productType': 1,'receiverAddress': '上海','receiverLat': 40.014098,'receiverLng': 116.352764,'receiverName': '刘德华','receiverPrimaryPhone': '1578565612356','receiverSecondPhone': '15895652365','serialNumber': '123','storeAddress': '上海','storeCode': '11047059','storeContact': '李姐','storeId': 'store-00002','storeLat': 42.267283,'storeLng': 121.377436,'storeName': '一号店','storePhone': '15689565265'}",
	"sign":"hFfOn1cyjGwnE7FF3DHjL5NSn+2YNsOABu41vv5EDbekNUWD9Xad2PVnPEHU2EFF+1fKSv6lL3lcJeNhmSaVsS9YLnadjc5qNymBl0AVw3wUwMC0syx02ttyHEwgNwFcxcxiz2khhNBMxTF5ueQGPBRfF6dtjmuTRRPpo39L9QhJHsixMi6C8OI874i/ZAPXzxLhwBZt7cJtqETvGLqLFJJv/9WRHKCjx3ZitmIgtazSxyAUzvw8HyDS4aeif+/Du7bTHTmc3Un+VzgiJFnpOBSEJX6OTVzY2scX6rt4ZCXcmYEgDMALbpmwonOuPKgJSpgPaQUOhKW9NrPRRFOXLg=="
	
}
```

* 响应参数

| **字段**   | **类型** | **说明** |
| ---------- | -------- | -------- |
| deliveryId | String   | 运单id   |


* responseBody返回示例

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

* 状态码

| 状态码 | 描述 |
| ------ | ---- |
| 100    | 成功 |


## 查询运单详情

### 应用场景

> 第三方调用此接口查询开个店运单详情

* 请求地址
  `/delivery/getOrder`

* 请求参数

| 字段       | 类型   | 是否必传 | 说明   |
| :--------- | ------ | -------- | ------ |
| deliveryId | String | 是       | 运单id |



* requestBody请求示例

```json
{
	"ver":1,
	"partnerId":"2282",
	"appId":"d64ffb6dec2e498a814579b4b080706f",
	"requestBody":"{'deliveryId':'8a69475d72e9468abba383bc97f0b593'}",
	"sign":"hFfOn1cyjGwnE7FF3DHjL5NSn+2YNsOABu41vv5EDbekNUWD9Xad2PVnPEHU2EFF+1fKSv6lL3lcJeNhmSaVsS9YLnadjc5qNymBl0AVw3wUwMC0syx02ttyHEwgNwFcxcxiz2khhNBMxTF5ueQGPBRfF6dtjmuTRRPpo39L9QhJHsixMi6C8OI874i/ZAPXzxLhwBZt7cJtqETvGLqLFJJv/9WRHKCjx3ZitmIgtazSxyAUzvw8HyDS4aeif+/Du7bTHTmc3Un+VzgiJFnpOBSEJX6OTVzY2scX6rt4ZCXcmYEgDMALbpmwonOuPKgJSpgPaQUOhKW9NrPRRFOXLg=="
	
}
```

* 响应参数

| **字段**                   | **类型**            | **说明**                                                     |
| -------------------------- | ------------------- | ------------------------------------------------------------ |
| productInfos               | List`<ProductInfo>` | 商品信息                                                     |
| deliveryId                 | String              | 配送单ID                                                     |
| serialNumber               | String              | 取餐号                                                       |
| orderId                    | String              | 订单编号                                                     |
| orderRemark                | String              | 订单备注                                                     |
| orderSource                | String              | 订单来源 美团 ，饿了么，百度，口碑 等（中文）                |
| orderTotalAmount           | Integer             | 订单总金额(分)                                               |
| orderActualAmount          | Integer             | 订单实付金额(分)                                             |
| depatchWeight              | Number              | 订单重量（kg）                                               |
| invoiceTitle               | String              | 发票抬头                                                     |
| depatchId                  | String              | 批次号                                                       |
| seq                        | Integer             | 配送顺序                                                     |
| partnerId                  | String              | 商户号                                                       |
| partnerRemark              | String              | 商户信息备注                                                 |
| orderChannel               | String              | 订单渠道                                                     |
| deliveryChannel            | String              | 配送渠道                                                     |
| isPre                      | String              | 是否预约单 ：０否　１是                                      |
| storeId                    | String              | 门店id                                                       |
| storeCode                  | String              | 第三方门店号                                                 |
| storeName                  | String              | 门店名称                                                     |
| deliveryStatus             | Integer             | 配送状态(-1：待处理,0:待接单,1:系统接单,2:分配骑手,3:骑手到店,4:骑手取餐,5:开始配送,6:运单送达,7:运单异常,8:运单取消) |
| distance                   | Integer             | 距离(米)                                                     |
| duration                   | Integer             | 配送时长(分钟)                                               |
| sendFee                    | Integer             | 配送费(分)                                                   |
| sendFeeExtra               | Integer             | 额外追加费用（小费单位分）                                   |
| settleType                 | String              | 结算方式                                                     |
| companyId                  | String              | 配送公司编号                                                 |
| depatchTime                | Date                | 骑手分配时间(yyyy-MM-dd HH:mm:ss)                            |
| appointTime                | Date                | 预计送达时间(yyyy-MM-dd HH:mm:ss)                            |
| sendTime                   | Date                | 送出时间(yyyy-MM-dd HH:mm:ss)                                |
| arriveShopTime             | Date                | 到店时间(yyyy-MM-dd HH:mm:ss)                                |
| completeTime               | Date                | 完成时间(yyyy-MM-dd HH:mm:ss)                                |
| customerSecondPhone        | String              | 客户备用手机号                                               |
| orginName                  | String              | 出发地                                                       |
| orginPoint                 | String              | 出发地坐标                                                   |
| destName                   | String              | 目的地                                                       |
| destPoint                  | String              | 目的地坐标                                                   |
| destRemark                 | String              | 目的地备注                                                   |
| cityName                   | String              | 收件人所在城市                                               |
| customer                   | String              | 客户名                                                       |
| deliveryServiceCode        | Integer             | 配送服务代码（飞速达:4002；快速达:4011；及时达:4012；集中送:4013） |
| productType                | Integer             | 商品类型 1送餐; 2送药; 3百货;4脏衣收; 5干净衣派;6生鲜; 7保单;8饮品；9现场勘查；99其他 |
| callbackUrl                | String              | 回调地址                                                     |
| remark                     | String              | 异常备注                                                     |
| channelDeliveryId          | String              | 渠道订单号                                                   |
| orderCancelDescription     | String              | 订单取消描述                                                 |
| orderCancelCode            | Integer             | 取消原因码                                                   |
| sysStatus                  | Integer             | 系统状态                                                     |
| isOpenPoll                 | Integer             | 是否开启自动轮询（0：否，1：是）                             |
| orderTime                  | Date                | 用户下单时间                                                 |
| expectTime                 | Date                | 用户期望送达时间                                             |
| assignTimeoutTime          | Date                | 待分配超时时间                                               |
| waitorderTimeoutTime       | Date                | 接单超时时间                                                 |
| unusualTime                | Date                | 异常时间                                                     |
| cancelTime                 | Date                | 取消时间                                                     |
| receiveTime                | Date                | 第三方接单时间                                               |
| deliveryTimeoutTime        | Date                | 配送超时时间: 下单时间 + 配送时效                            |
| assignType                 | Integer             | 分配类型（1：系统自动分配 ，2：人工分配）                    |
| exceptionType              | Integer             | 异常类型（1：系统推单异常，2：系统接单异常，3：骑手上报异常，4：第三方上报异常） |
| isUseInsurance             | Integer             | 运单是否保价（0：否，1：是）                                 |
| insuredPrice               | Integer             | 保价金额(分)                                                 |
| insuranceFee               | Integer             | 运单保价费用(分)                                             |
| isAssignTimeOut            | Integer             | 是否分配超时(0：否，1：是)                                   |
| isReceivedTimeOut          | Integer             | 是否第三方接单超时(0：否，1：是)                             |
| isDeliveryTimeOut          | Integer             | 是否配送超时(0：否，1：是)                                   |
| destLongitude              | Number              | 收货人经度                                                   |
| destLatitude               | Number              | 收货人纬度                                                   |
| deliveryOverTime           | Integer             | 距离配送超时分钟数：已超时为正数，提前送达为负数             |
| riderId                    | String              | 自配送骑手ID                                                 |
| riderName                  | String              | 骑手名字                                                     |
| riderPhone                 | String              | 骑手电话号码                                                 |
| pollChannels               | String              | 轮询过的渠道账号IDS（逗号分隔）                              |
| productInfos/productCode   | String              | 商品编号                                                     |
| productInfos/productName   | String              | 商品名称                                                     |
| productInfos/productNumber | Integer             | 商品数量                                                     |
| productInfos/productPrice  | Integer             | 商品价格（分）                                               |
| productInfos/productSize   | Integer             | 商品尺寸                                                     |
| productInfos/productRemark | String              | 商品备注                                                     |


* responseBody返回示例

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

* 状态码

| 状态码 | 描述 |
| ------ | ---- |
| 100    | 成功 |


## 运单状态变更推送

### 接口说明

> 由调用方实现该接口，开个店来调用，需要提供地址给到开个店

### 应用场景

> 第三方需要提供开个店事件通知地址

> 开个店有运单状态变更时回调第三方地址推送运单状态变更信息

> 第三方可再通过运单详细接口查询新订单详细信息


* 请求地址
`由对接方提供`

* 请求参数

| 字段              | 类型    | 是否必传 | 说明                                       |
| ----------------- | ------- | -------- | ------------------------------------------ |
| orderId           | String  | 是       | 订单编号                                   |
| deliveryId        | String  | 是       | 运单编号                                   |
| deliveryStatus    | Integer | 是       | 运单状态，详细示意请查看最下方的运单状态   |
| riderPhone        | String  | 否       | 骑手联系方式                               |
| remark            | String  | 否       | 描述                                       |
| riderName         | String  | 否       | 骑手名称                                   |
| channelDeliveryId | String  | 否       | 第三方配送渠道订单号                       |
| partnerId         | String  | 是       | 商户编号                                   |
| storeId           | String  | 是       | 门店编号                                   |
| channelName       | String  | 否       | 渠道名称                                   |
| channelCode       | String  | 否       | 渠道短码                                   |
| cancelReasonId    | Integer | 否       | 取消原因ID，详细示意请查看最下方的取消原因 |

* requestBody请求示例

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

* 响应参数

只需要返回公共参数 状态码和message 即可

* 返回示例

```json
{
    "ver": "1",
    "code": "100",
    "message": "success",
    "responseBody": ""
}
```

## 根据运单查询骑手位置

### 应用场景

> 根据运单ID，订单ID查询骑手位置

* 请求地址
  `/delivery/createOrder`

* 请求参数

| ***\*字段\**** | ***\*字段类型\**** | ***\*是否必填\**** | ***\*字段说明\**** |
| -------------- | ------------------ | ------------------ | ------------------ |
| deliveryId     | String             | 是                 | 运单编号           |
| orderId        | String             | 否                 | 订单编号           |

* requestBody请求示例

```json
{
    "deliveryId":"a20da60df3ea4f7494a14e975ebab7a3",
    "orderId":"12345789"
}
```

* 响应参数

| ***\*字段\****  | ***\*字段类型\**** | ***\*字段说明\**** |
| --------------- | ------------------ | ------------------ |
| riderName       | String             | 骑手名称           |
| riderPhone      | String             | 骑手手机           |
| riderPoint      | String             | 骑手位置           |
| deliveryRiderId | String             |                    |
| deliveryId      | String             |                    |

* responseBody响应参数

```json
{
  "code": 100,
  "data": {
            "riderName": "二师兄",
            "riderPhone": "1100000000000",
            "riderPoint": null,
            "deliveryRiderId": "f70d41eeb6f14f3894853936bec0093a",
            "deliveryId": "b1eb8083283b4a40a6e8b031cbcd32c3"
          },
  "msg": "查询成功"
}  
```

* 错误状态码

| ***\*状态码\**** | ***\*说明\**** |
| ---------------- | -------------- |
| 100              | 成功           |


## 取消配送单

### 应用场景

> 通过请求取消配送单接口，取消第三方渠道的配送单

* 请求地址
  `/delivery/cancel`

* 请求参数

| ***\*字段\****         | ***\*字段类型\**** | ***\*是否必填\**** | ***\*字段说明\**** |
| ---------------------- | ------------------ | ------------------ | ------------------ |
| deliveryId             | string             | 是                 | 配送单ID           |
| orderCancelCode        | int                | 是                 | 取消原因类型       |
| orderCancelDescription | string             | 否                 | 取消原因描述       |

* requestBody请求示例

```json
{
    "deliveryId":"a20da60df3ea4f7494a14e975ebab7a3",
    "orderCancelCode":1,
    "orderCancelDescription":"不想要了"
}
```

* 取消原因类型 （orderCancelCode枚举值）

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

* 响应参数

| ***\*字段\**** | ***\*字段类型\**** | ***\*字段说明\**** |
| -------------- | ------------------ | ------------------ |
| code           | int                | 接口响应code       |
| data           | object             | 消息体             |
| msg            | string             | 描述               |

* responseBody响应参数

```json
{
    "code":100,
    "data":null,
    "msg":"取消配送单成功！"
}
```

* 状态码

| ***\*状态码\**** | ***\*说明\**** |
| ---------------- | -------------- |
| 100              | 成功           |
| 1301             | 配送单不存在   |
| 1303             | 配送单状态有误 |
| 1311             | 取消失败       |


## 字段描述

* 配送渠道

| SelfDelivery | 自配送 |
| ------------ | ------ |
| ShunFeng     | 顺丰   |
| MeiTuan      | 美团   |
| DaDa         | 达达   |
| FengNiao     | 蜂鸟   |
| DianWoDa     | 点我达 |
| DingDing     | 叮叮   |
| CanTingBao   | 餐厅宝 |
| ShanSong     | 闪送   |


* 运单状态

| 0    | 待接单   |
| ---- | -------- |
| 1    | 系统接单 |
| 2    | 分配骑手 |
| 3    | 骑手到店 |
| 4    | 骑手取餐 |
| 5    | 开始配送 |
| 6    | 运单送达 |
| 7    | 运单异常 |
| 8    | 运单取消 |

* 取消原因

| 1    | 没有配送员接单                   |
| ---- | -------------------------------- |
| 2    | 配送员没来取货                   |
| 3    | 配送员态度太差                   |
| 4    | 顾客取消订单                     |
| 5    | 商户取消订单                     |
| 6    | 配送员让我取消此单               |
| 7    | 我不需要配送了                   |
| 8    | 商户发错单                       |
| 9    | 门店原因导致无法派单             |
| 10   | 订单填写错误                     |
| 11   | 顾客自取/不在家/要求另改时间配送 |
| 12   | 异常取消                         |
| 13   | 第三方接单超时取消               |

