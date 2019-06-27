# 商品类接口


### 接口说明

##  根据商店id查询所有商品信息接口

### 应用场景

根据商店id查询所有商品信息

### 请求url：/goods/queryByStoreId

### 请求参数

| 字段    | 类型   | 是否必传 | 举例   | 说明       |
| :------ | ------ | -------- | ------ | ---------- |
| storeId | String | 是       | 208888 | 商家门店号 |

#### requestBody请求示例

```json
{
   "storeId":"10086"
}
```

### 响应参数



| **字段**      | **类型** | **必填** | **举例** | **说明**                                                     |
| ------------- | -------- | -------- | -------- | ------------------------------------------------------------ |
| menuName      | String   | 是       |          | 菜单名称                                                     |
| menuId        | String   | 是       |          | 菜单id                                                       |
| nid           | String   | 是       |          | 菜单节点ID以两位数字为一组，代表菜单顺序范围：01-ZZ，如果是多级菜单者在上级菜单的编号基础上增加两位顺序组。例如：一级菜单01，一级子菜单0101 |
| level         | Integer  | 是       |          | 层级                                                         |
| categoryInfos | Array    | 是       |          | 分类信息（见categoryInfos）                                  |

#### categoryInfos

| **字段**     | **类型** | **必填** | **举例** | **说明**                                                     |
| ------------ | -------- | -------- | -------- | ------------------------------------------------------------ |
| categoryName | String   | 是       |          | 分类名称                                                     |
| level        | Integer  | 是       |          | 层级                                                         |
| nid          | String   | 是       |          | 菜单节点ID以两位数字为一组，代表菜单顺序范围：01-ZZ，如果是多级菜单者在上级菜单的编号基础上增加两位顺序组。例如：一级菜单01，一级子菜单0101 |
| sequence     | Integer  | 是       | 1        | 排序                                                         |
| productInfos | Array    | 否       |          | 商品详情（见productInfos）                                   |

##### productInfos

| **字段**                  | **类型** | **必填** | **举例**     | **说明**                                                     |
| ------------------------- | -------- | -------- | ------------ | ------------------------------------------------------------ |
| level                     | Integer  | 是       |              | 层级商品详情                                                 |
| nid                       | String   | 是       |              | 菜单节点ID以两位数字为一组，代表菜单顺序范围：01-ZZ，如果是多级菜单者在上级菜单的编号基础上增加两位顺序组。例如：一级菜单01，一级子菜单0101 |
| sequence                  | Integer  | 是       |              | 排序                                                         |
| barcode                   | String   |          |              | 条形码                                                       |
| brandId                   | String   | 否       |              | 品牌ID                                                       |
| brandName                 | String   | 是       |              | 品牌名称                                                     |
| businessNo                | String   | 否       | TB2014032666 | 业务编号                                                     |
| category                  | String   | 否       |              | 商品分类编码                                                 |
| categoryName              | String   | 是       |              | 商品分类名称                                                 |
| companyId                 | String   | 是       |              | 商户ID                                                       |
| finalPrice                | Integer  | 是       | 1000         | 商品最终售价-卖价(单位分)                                    |
| isSkuProduct              | Integer  | 是       | 1            | 是否sku商品，1是，0不是                                      |
| name                      | String   | 是       | 珍珠奶茶     | 商品名称                                                     |
| originalPrice             | Integer  | 是       | 800          | 商品标准售价-原价(单位分)                                    |
| packPrice                 | Integer  | 是       | 100          | 包装价格(单位分)                                             |
| picture                   | String   | 是       |              | 图片地址                                                     |
| status                    | Integer  | 是       | 1            | 商品状态 /1下架/2上架/3售罄/4删除/5上架不可售(上架状态但是不在可售时间范围) |
| type                      | Integer  | 是       | 1            | 商品类型 /1普通商品/3组合商品/6套餐/9虚拟商品/10多规格商品   |
| pid                       | String   | 是       |              | 商品ID                                                       |
| labelNames                | Array    | 否       |              | 标签（spu才有）                                              |
| labelNames\name           | String   | 是       | 特色         | 标签名称                                                     |
| productAttributeGroupList | Array    | 否       |              | 商品属性（spu才有，见productAttributeGroupList）             |
| specificationGroupList    | Array    | 否       |              | 规格组列表（spu才有，见specificationGroupList）              |
| skuList                   | Array    | 否       |              | SKU列表（见skuList）                                         |
| skuSpecValues             | Array    | 否       |              | sku规格（sku商品才有，见skuSpecValues）                      |

###### productAttributeGroupList

| **字段**                                                 | **类型** | **必填** | **举例**     | **说明**                                                     |
| -------------------------------------------------------- | -------- | -------- | ------------ | ------------------------------------------------------------ |
| productAttributeGroupList\attributeName                  | String   | 是       | 辣           | 商品折扣价，以分为单位                                       |
| productAttributeGroupList\attributeType                  | Integer  | 是       | 1000         | 属性组类型                                                   |
| productAttributeGroupList\sequence                       | Integer  | 是       | 1            | 属性组排序                                                   |
| productAttributeGroupList\attributeValues                | Array    | 是       |              | 属性组下属性信息                                             |
| productAttributeGroupList\attributeValues\attributeId    | String   | 是       |              | 属性值ID                                                     |
| productAttributeGroupList\attributeValues\attributeValue | String   | 是       |              | 属性名称                                                     |
| productAttributeGroupList\attributeValues\sequence       | Integer  | 是       | 2            | 属性排序                                                     |

###### specificationGroupList

| **字段**                                                 | **类型** | **必填** | **举例**     | **说明**                                                     |
| -------------------------------------------------------- | -------- | -------- | ------------ | ------------------------------------------------------------ |
| specificationGroupList\sequence                          | Integer  | 是       |              | 排序                                                         |
| specificationGroupList\specId                            | String   | 是       |              | 规格组id                                                     |
| specificationGroupList\specName                          | String   | 是       |              | 规格组名称                                                   |
| specificationGroupList\specValueVos                      | Array    | 是       |              | 规格值列表                                                   |
| specificationGroupList\specValueVos\sequence             | Integer  | 是       |              | 排序号                                                       |
| specificationGroupList\specValueVos\specValue            | String   | 是       |              | 规格值                                                       |
| specificationGroupList\specValueVos\specValueId          | String   | 是       |              | 规格值ID                                                     |

###### skuList
| **字段**                                                 | **类型** | **必填** | **举例**     | **说明**                                                     |
| -------------------------------------------------------- | -------- | -------- | ------------ | ------------------------------------------------------------ |
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

###### skuSpecValues
| **字段**                                                 | **类型** | **必填** | **举例**     | **说明**                                                     |
| -------------------------------------------------------- | -------- | -------- | ------------ | ------------------------------------------------------------ |
| skuSpecValues\productId                                  | String   | 是       |              | 商品id                                                       |
| skuSpecValues\sequence                                   | Integer  | 是       |              | 排序                                                         |
| skuSpecValues\specId                                     | String   | 是       |              | 规格组id                                                     |
| skuSpecValues\specName                                   | String   | 是       |              | 规格名称                                                     |
| skuSpecValues\specValue                                  | String   | 是       |              | 规格值                                                       |
| skuSpecValues\specValueId                                | String   | 是       |              | 规格值Id                                                     |


#### responseBody返回示例

- 

  ```
  {
  	"categoryInfos": [
		{
  			"categoryName": "test",
  			"level": 1,
  			"nid": "0101",
  			"productInfos": [
  				{
  					"barcode": "",
  					"brandId": "",
  					"brandName": "",
  					"businessNo": "",
  					"businessType": "",
  					"completeFlag": 2,
  					"detailText": "多规格01",
  					"finalPrice": 1,
  					"isSkuProduct": 0,
  					"labelNames": [
  						{
  							"id": "0",
  							"name": "特色",
  							"type": "0"
  						},
  						{
  							"id": "0",
  							"name": "美味",
  							"type": "0"
  						}
  					],
  					"level": 2,
  					"maxLimitNumber": 0,
  					"maxRestrictionQty": 0,
  					"minLimitNumber": 0,
  					"minRestrictionQty": 0,
  					"name": "多规格01",
  					"nid": "010101",
  					"options": "",
  					"originalPrice": 1,
  					"packPrice": 0,
  					"picture": "https://picture.sandload.cn/1554725170464.jpg",
  					"pid": "138327334988135726",
  					"pkNumber": 1,
  					"priceSource": 3,
  					"productAttributeGroupList": [
  						{
  							"attributeName": "温度",
  							"attributeType": 3,
  							"attributeValues": [
  								{
  									"attributeId": "137174708465634585",
  									"attributeValue": "冻",
  									"id": 142407419635634473,
  									"price": 0,
  									"sequence": 0,
  									"status": 2
  								},
  								{
  									"attributeId": "125609440286271769",
  									"attributeValue": "加少冰",
  									"id": 142407419635634474,
  									"price": 0,
  									"sequence": 5,
  									"status": 2
  								}
  							],
  							"maxNumber": 1,
  							"minNumber": 1,
  							"must": 1,
  							"options": "",
  							"sequence": 3
  						},
  						{
  							"attributeName": "奶量",
  							"attributeType": 6,
  							"attributeValues": [
  								{
  									"attributeId": "125374222305519889",
  									"attributeValue": "少量",
  									"id": 142407419635634477,
  									"price": 0,
  									"sequence": 20,
  									"status": 2
  								},
  								{
  									"attributeId": "122493722811322375",
  									"attributeValue": "加牛奶",
  									"id": 142407419635634478,
  									"price": 0,
  									"sequence": 25,
  									"status": 2
  								}
  							],
  							"maxNumber": 1,
  							"minNumber": 1,
  							"must": 1,
  							"options": "",
  							"sequence": 6
  						},
  						{
  							"attributeName": "口味",
  							"attributeType": 100013,
  							"attributeValues": [
  								{
  									"attributeId": "124714737311163694",
  									"attributeValue": "辣酱",
  									"id": 142407419635634475,
  									"price": 0,
  									"sequence": 10,
  									"status": 2
  								},
  								{
  									"attributeId": "124714762753811759",
  									"attributeValue": "番茄酱",
  									"id": 142407419635634476,
  									"price": 0,
  									"sequence": 15,
  									"status": 2
  								}
  							],
  							"maxNumber": 0,
  							"minNumber": 0,
  							"must": 0,
  							"options": "",
  							"sequence": 15
  						}
  					],
  					"productCode": "duogg01-p",
  					"productPictureList": [
  						{
  							"pictureId": "142407419660800303",
  							"productId": "138327334988135726",
  							"sequence": "0",
  							"type": "default",
  							"url": "https://picture.sandload.cn/1554725170464.jpg"
  						}
  					],
  					"productionLocation": "",
  					"remark": "多规格01",
  					"saleCount": 0,
  					"sequence": 1,
  					"skuList": [
  						{
  							"customerCode": "duogg01-bz",
  							"finalPrice": 2,
  							"originalPrice": 2,
  							"packPrice": 1,
  							"productName": "多规格01/大杯/珍珠",
  							"productType": 1,
  							"sequence": 0,
  							"skuId": "138327335005961520",
  							"skuSpecValues": [
  								{
  									"productId": "138327335005961520",
  									"sequence": 1,
  									"specId": "126981658895313165",
  									"specName": "杯型",
  									"specValue": "大杯",
  									"specValueId": "126981795913787664"
  								},
  								{
  									"productId": "138327335005961520",
  									"sequence": 2,
  									"specId": "125388160722129444",
  									"specName": "加料",
  									"specValue": "珍珠",
  									"specValueId": "135985417797493052"
  								}
  							],
  							"status": 2
  						},
  						{
  							"customerCode": "duogg01-by",
  							"finalPrice": 1,
  							"originalPrice": 1,
  							"packPrice": 2,
  							"productName": "多规格01/大杯/椰果",
  							"productType": 1,
  							"sequence": 0,
  							"skuId": "138327335005961526",
  							"skuSpecValues": [
  								{
  									"productId": "138327335005961526",
  									"sequence": 3,
  									"specId": "126981658895313165",
  									"specName": "杯型",
  									"specValue": "大杯",
  									"specValueId": "126981795913787664"
  								},
  								{
  									"productId": "138327335005961526",
  									"sequence": 4,
  									"specId": "125388160722129444",
  									"specName": "加料",
  									"specValue": "椰果",
  									"specValueId": "135985397657493819"
  								}
  							],
  							"status": 2
  						},
  						{
  							"customerCode": "duogg01-sz",
  							"finalPrice": 1,
  							"originalPrice": 1,
  							"packPrice": 2,
  							"productName": "多规格01/小杯/珍珠",
  							"productType": 1,
  							"sequence": 0,
  							"skuId": "138327335005961532",
  							"skuSpecValues": [
  								{
  									"productId": "138327335005961532",
  									"sequence": 5,
  									"specId": "126981658895313165",
  									"specName": "杯型",
  									"specValue": "小杯",
  									"specValueId": "126981808335218961"
  								},
  								{
  									"productId": "138327335005961532",
  									"sequence": 6,
  									"specId": "125388160722129444",
  									"specName": "加料",
  									"specValue": "珍珠",
  									"specValueId": "135985417797493052"
  								}
  							],
  							"status": 2
  						},
  						{
  							"customerCode": "duogg01-sy",
  							"finalPrice": 1,
  							"originalPrice": 1,
  							"packPrice": 2,
  							"productName": "多规格01/小杯/椰果",
  							"productType": 1,
  							"sequence": 0,
  							"skuId": "138327335007010051",
  							"skuSpecValues": [
  								{
  									"productId": "138327335007010051",
  									"sequence": 7,
  									"specId": "126981658895313165",
  									"specName": "杯型",
  									"specValue": "小杯",
  									"specValueId": "126981808335218961"
  								},
  								{
  									"productId": "138327335007010051",
  									"sequence": 8,
  									"specId": "125388160722129444",
  									"specName": "加料",
  									"specValue": "椰果",
  									"specValueId": "135985397657493819"
  								}
  							],
  							"status": 2
  						}
  					],
  					"skuSpecValues": [],
  					"sourceChannel": "",
  					"specificationGroupList": [
  						{
  							"partnerId": "1864",
  							"sequence": 0,
  							"specId": "126981658895313165",
  							"specName": "杯型",
  							"specValueVos": [
  								{
  									"sequence": 0,
  									"specId": "126981658895313165",
  									"specValue": "大杯",
  									"specValueId": "126981795913787664"
  								},
  								{
  									"sequence": 0,
  									"specId": "126981658895313165",
  									"specValue": "小杯",
  									"specValueId": "126981808335218961"
  								}
  							]
  						},
  						{
  							"partnerId": "1864",
  							"sequence": 0,
  							"specId": "125388160722129444",
  							"specName": "加料",
  							"specValueVos": [
  								{
  									"sequence": 0,
  									"specId": "125388160722129444",
  									"specValue": "珍珠",
  									"specValueId": "135985417797493052"
  								},
  								{
  									"sequence": 0,
  									"specId": "125388160722129444",
  									"specValue": "椰果",
  									"specValueId": "135985397657493819"
  								}
  							]
  						}
  					],
  					"standardGoodsFlag": 2,
  					"status": 2,
  					"type": 10,
  					"unit": "",
  					"valid": true,
  					"version": 0,
  					"weight": 0
  				},
  				{
  					"barcode": "",
  					"brandId": "",
  					"brandName": "",
  					"businessNo": "",
  					"businessType": "",
  					"completeFlag": 2,
  					"detailText": "单规格01",
  					"finalPrice": 1000,
  					"isSkuProduct": 0,
  					"labelNames": [],
  					"level": 2,
  					"maxLimitNumber": 0,
  					"maxRestrictionQty": 0,
  					"minLimitNumber": 0,
  					"minRestrictionQty": 0,
  					"name": "单规格01",
  					"nid": "010102",
  					"options": "",
  					"originalPrice": 1000,
  					"packPrice": 0,
  					"picture": "https://picture.sandload.cn/1554725021612.jpg",
  					"pid": "138327166846876963",
  					"pkNumber": 1,
  					"priceSource": 3,
  					"productAttributeGroupList": [],
  					"productCode": "dangg01-p",
  					"productPictureList": [
  						{
  							"pictureId": "138327166855265572",
  							"productId": "138327166846876963",
  							"sequence": "0",
  							"type": "default",
  							"url": "https://picture.sandload.cn/1554725021612.jpg"
  						}
  					],
  					"productionLocation": "",
  					"remark": "单规格01",
  					"saleCount": 0,
  					"sequence": 2,
  					"skuList": [
  						{
  							"customerCode": "dangg01-b",
  							"finalPrice": 2000,
  							"originalPrice": 2000,
  							"packPrice": 0,
  							"productName": "单规格01/大杯",
  							"productType": 1,
  							"sequence": 0,
  							"skuId": "138327166884625701",
  							"skuSpecValues": [
  								{
  									"productId": "138327166884625701",
  									"sequence": 1,
  									"specId": "126981658895313165",
  									"specName": "杯型",
  									"specValue": "大杯",
  									"specValueId": "126981795913787664"
  								}
  							],
  							"status": 2
  						},
  						{
  							"customerCode": "dangg01-s",
  							"finalPrice": 1000,
  							"originalPrice": 1000,
  							"packPrice": 0,
  							"productName": "单规格01/小杯",
  							"productType": 1,
  							"sequence": 0,
  							"skuId": "138327166884625705",
  							"skuSpecValues": [
  								{
  									"productId": "138327166884625705",
  									"sequence": 2,
  									"specId": "126981658895313165",
  									"specName": "杯型",
  									"specValue": "小杯",
  									"specValueId": "126981808335218961"
  								}
  							],
  							"status": 2
  						}
  					],
  					"skuSpecValues": [],
  					"sourceChannel": "",
  					"specificationGroupList": [
  						{
  							"partnerId": "1864",
  							"sequence": 0,
  							"specId": "126981658895313165",
  							"specName": "杯型",
  							"specValueVos": [
  								{
  									"sequence": 0,
  									"specId": "126981658895313165",
  									"specValue": "大杯",
  									"specValueId": "126981795913787664"
  								},
  								{
  									"sequence": 0,
  									"specId": "126981658895313165",
  									"specValue": "小杯",
  									"specValueId": "126981808335218961"
  								}
  							]
  						}
  					],
  					"standardGoodsFlag": 2,
  					"status": 2,
  					"type": 10,
  					"unit": "",
  					"valid": true,
  					"version": 0,
  					"weight": 0
  				},
  				{
  					"barcode": "",
  					"brandId": "",
  					"brandName": "",
  					"businessNo": "",
  					"businessType": "",
  					"completeFlag": 2,
  					"detailText": "大虾特价限购一单",
  					"finalPrice": 2000,
  					"isSkuProduct": 0,
  					"labelNames": [],
  					"level": 2,
  					"maxLimitNumber": 0,
  					"maxRestrictionQty": 0,
  					"minLimitNumber": 0,
  					"minRestrictionQty": 0,
  					"name": "大虾特价限购一单",
  					"nid": "010104",
  					"options": "",
  					"originalPrice": 2000,
  					"packPrice": 200,
  					"picture": "https://picture.sandload.cn/1555745348415.png",
  					"pid": "139419965158759461",
  					"pkNumber": 1,
  					"priceSource": 3,
  					"productAttributeGroupList": [],
  					"productCode": "dxthjxg",
  					"productPictureList": [],
  					"productionLocation": "",
  					"remark": "大虾特价限购一单",
  					"saleCount": 0,
  					"sequence": 4,
  					"skuList": [],
  					"skuSpecValues": [],
  					"sourceChannel": "",
  					"specificationGroupList": [],
  					"standardGoodsFlag": 2,
  					"status": 2,
  					"type": 1,
  					"unit": "",
  					"valid": true,
  					"version": 0,
  					"weight": 0
  				},
  				{
  					"barcode": "",
  					"brandId": "",
  					"brandName": "",
  					"businessNo": "",
  					"businessType": "",
  					"completeFlag": 2,
  					"detailText": "一维规格属性+库存\n一维规格属性+库存一维规格属性+库存\n一维规格属性+库存一维规格属性+库存一维规格属性+库存",
  					"finalPrice": 500,
  					"isSkuProduct": 0,
  					"labelNames": [],
  					"level": 2,
  					"maxLimitNumber": 0,
  					"maxRestrictionQty": 0,
  					"minLimitNumber": 0,
  					"minRestrictionQty": 0,
  					"name": "二维规格属性+库存",
  					"nid": "010105",
  					"options": "",
  					"originalPrice": 500,
  					"packPrice": 0,
  					"picture": "https://picture.sandload.cn/1556001210664.jpg",
  					"pid": "139688320143891470",
  					"pkNumber": 1,
  					"priceSource": 3,
  					"productAttributeGroupList": [
  						{
  							"attributeName": "甜度",
  							"attributeType": 5,
  							"attributeValues": [
  								{
  									"attributeId": "127114558289705231",
  									"attributeValue": "3分甜",
  									"id": 142026195807043597,
  									"price": 0,
  									"sequence": 0,
  									"status": 2
  								},
  								{
  									"attributeId": "127114547387660558",
  									"attributeValue": "2分甜",
  									"id": 142026195807043598,
  									"price": 0,
  									"sequence": 6,
  									"status": 2
  								},
  								{
  									"attributeId": "127114535776778509",
  									"attributeValue": "1分甜",
  									"id": 142026195807043599,
  									"price": 0,
  									"sequence": 12,
  									"status": 2
  								}
  							],
  							"maxNumber": 1,
  							"minNumber": 1,
  							"must": 1,
  							"options": "",
  							"sequence": 5
  						},
  						{
  							"attributeName": "口味",
  							"attributeType": 100013,
  							"attributeValues": [
  								{
  									"attributeId": "124714762753811759",
  									"attributeValue": "番茄酱",
  									"id": 142026195807043600,
  									"price": 0,
  									"sequence": 18,
  									"status": 2
  								},
  								{
  									"attributeId": "124714737311163694",
  									"attributeValue": "辣酱",
  									"id": 142026195807043601,
  									"price": 0,
  									"sequence": 24,
  									"status": 2
  								}
  							],
  							"maxNumber": 0,
  							"minNumber": 0,
  							"must": 0,
  							"options": "",
  							"sequence": 24
  						},
  						{
  							"attributeName": "走",
  							"attributeType": 100012,
  							"attributeValues": [
  								{
  									"attributeId": "126988892823899906",
  									"attributeValue": "啦啦啦啦啦啦啦啦啦啊了",
  									"id": 142026195807043602,
  									"price": 0,
  									"sequence": 30,
  									"status": 2
  								},
  								{
  									"attributeId": "126988876239621889",
  									"attributeValue": "啦啦啦啦啦",
  									"id": 142026195807043603,
  									"price": 0,
  									"sequence": 36,
  									"status": 2
  								}
  							],
  							"maxNumber": 0,
  							"minNumber": 0,
  							"must": 0,
  							"options": "",
  							"sequence": 36
  						}
  					],
  					"productCode": "testProduct002",
  					"productPictureList": [
  						{
  							"pictureId": "142026195815432212",
  							"productId": "139688320143891470",
  							"sequence": "0",
  							"type": "default",
  							"url": "https://picture.sandload.cn/1556001210664.jpg"
  						}
  					],
  					"productionLocation": "",
  					"remark": "",
  					"saleCount": 0,
  					"sequence": 5,
  					"skuList": [
  						{
  							"customerCode": "",
  							"finalPrice": 1000,
  							"originalPrice": 1000,
  							"packPrice": 3,
  							"productName": "二维规格属性+库存/库存规格值1/啦-库存规格值2",
  							"productType": 1,
  							"sequence": 0,
  							"skuId": "139688320162765847",
  							"skuSpecValues": [
  								{
  									"productId": "139688320162765847",
  									"sequence": 1,
  									"specId": "139688137342491706",
  									"specName": "库存规格1",
  									"specValue": "库存规格值1",
  									"specValueId": "139688146022603835"
  								},
  								{
  									"productId": "139688320162765847",
  									"sequence": 2,
  									"specId": "139688256376839179",
  									"specName": "库存规格2",
  									"specValue": "啦-库存规格值2",
  									"specValueId": "139688270141496332"
  								}
  							],
  							"status": 2
  						},
  						{
  							"customerCode": "",
  							"finalPrice": 500,
  							"originalPrice": 500,
  							"packPrice": 1,
  							"productName": "二维规格属性+库存/库存规格值1/啦-库存规格值1",
  							"productType": 1,
  							"sequence": 0,
  							"skuId": "139688320162765853",
  							"skuSpecValues": [
  								{
  									"productId": "139688320162765853",
  									"sequence": 3,
  									"specId": "139688137342491706",
  									"specName": "库存规格1",
  									"specValue": "库存规格值1",
  									"specValueId": "139688146022603835"
  								},
  								{
  									"productId": "139688320162765853",
  									"sequence": 4,
  									"specId": "139688256376839179",
  									"specName": "库存规格2",
  									"specValue": "啦-库存规格值1",
  									"specValueId": "139688280502475789"
  								}
  							],
  							"status": 2
  						},
  						{
  							"customerCode": "",
  							"finalPrice": 1000,
  							"originalPrice": 1000,
  							"packPrice": 2,
  							"productName": "二维规格属性+库存/库存规格值2/啦-库存规格值2",
  							"productType": 1,
  							"sequence": 0,
  							"skuId": "139688320162765859",
  							"skuSpecValues": [
  								{
  									"productId": "139688320162765859",
  									"sequence": 5,
  									"specId": "139688137342491706",
  									"specName": "库存规格1",
  									"specValue": "库存规格值2",
  									"specValueId": "139688154874682428"
  								},
  								{
  									"productId": "139688320162765859",
  									"sequence": 6,
  									"specId": "139688256376839179",
  									"specName": "库存规格2",
  									"specValue": "啦-库存规格值2",
  									"specValueId": "139688270141496332"
  								}
  							],
  							"status": 2
  						},
  						{
  							"customerCode": "",
  							"finalPrice": 500,
  							"originalPrice": 500,
  							"packPrice": 4,
  							"productName": "二维规格属性+库存/库存规格值2/啦-库存规格值1",
  							"productType": 1,
  							"sequence": 0,
  							"skuId": "139688320162765865",
  							"skuSpecValues": [
  								{
  									"productId": "139688320162765865",
  									"sequence": 7,
  									"specId": "139688137342491706",
  									"specName": "库存规格1",
  									"specValue": "库存规格值2",
  									"specValueId": "139688154874682428"
  								},
  								{
  									"productId": "139688320162765865",
  									"sequence": 8,
  									"specId": "139688256376839179",
  									"specName": "库存规格2",
  									"specValue": "啦-库存规格值1",
  									"specValueId": "139688280502475789"
  								}
  							],
  							"status": 2
  						}
  					],
  					"skuSpecValues": [],
  					"sourceChannel": "",
  					"specificationGroupList": [
  						{
  							"partnerId": "1864",
  							"sequence": 0,
  							"specId": "139688137342491706",
  							"specName": "库存规格1",
  							"specValueVos": [
  								{
  									"sequence": 0,
  									"specId": "139688137342491706",
  									"specValue": "库存规格值1",
  									"specValueId": "139688146022603835"
  								},
  								{
  									"sequence": 0,
  									"specId": "139688137342491706",
  									"specValue": "库存规格值2",
  									"specValueId": "139688154874682428"
  								}
  							]
  						},
  						{
  							"partnerId": "1864",
  							"sequence": 0,
  							"specId": "139688256376839179",
  							"specName": "库存规格2",
  							"specValueVos": [
  								{
  									"sequence": 0,
  									"specId": "139688256376839179",
  									"specValue": "啦-库存规格值2",
  									"specValueId": "139688270141496332"
  								},
  								{
  									"sequence": 0,
  									"specId": "139688256376839179",
  									"specValue": "啦-库存规格值1",
  									"specValueId": "139688280502475789"
  								}
  							]
  						}
  					],
  					"standardGoodsFlag": 2,
  					"status": 2,
  					"type": 10,
  					"unit": "",
  					"valid": true,
  					"version": 0,
  					"weight": 0
  				},
  				{
  					"barcode": "",
  					"brandId": "",
  					"brandName": "",
  					"businessNo": "",
  					"businessType": "",
  					"completeFlag": 2,
  					"detailText": "",
  					"finalPrice": 1000,
  					"isSkuProduct": 0,
  					"labelNames": [],
  					"level": 2,
  					"maxLimitNumber": 0,
  					"maxRestrictionQty": 0,
  					"minLimitNumber": 0,
  					"minRestrictionQty": 0,
  					"name": "咖啡套餐s",
  					"nid": "010106",
  					"options": "",
  					"originalPrice": 1000,
  					"packPrice": 0,
  					"picture": "https://picture.sandload.cn/1557903126396.png",
  					"pid": "141710245000013076",
  					"pkNumber": 1,
  					"priceSource": 3,
  					"productAttributeGroupList": [],
  					"productCode": "咖啡套餐s",
  					"productPictureList": [
  						{
  							"pictureId": "141973351439597575",
  							"productId": "141710245000013076",
  							"sequence": "0",
  							"type": "default",
  							"url": "https://picture.sandload.cn/1557903126396.png"
  						}
  					],
  					"productionLocation": "",
  					"remark": "",
  					"saleCount": 0,
  					"sequence": 6,
  					"skuList": [
  						{
  							"customerCode": "",
  							"finalPrice": 1000,
  							"originalPrice": 1000,
  							"packPrice": 200,
  							"productName": "咖啡套餐s/1111",
  							"productType": 1,
  							"sequence": 0,
  							"skuId": "141710245008401686",
  							"skuSpecValues": [
  								{
  									"productId": "141710245008401686",
  									"sequence": 1,
  									"specId": "124299075036309506",
  									"specName": "规格3",
  									"specValue": "1111",
  									"specValueId": "125027181094157083"
  								}
  							],
  							"status": 2
  						},
  						{
  							"customerCode": "",
  							"finalPrice": 2000,
  							"originalPrice": 2000,
  							"packPrice": 0,
  							"productName": "咖啡套餐s/222",
  							"productType": 1,
  							"sequence": 0,
  							"skuId": "141710245008401690",
  							"skuSpecValues": [
  								{
  									"productId": "141710245008401690",
  									"sequence": 2,
  									"specId": "124299075036309506",
  									"specName": "规格3",
  									"specValue": "222",
  									"specValueId": "127130249753491762"
  								}
  							],
  							"status": 2
  						}
  					],
  					"skuSpecValues": [],
  					"sourceChannel": "",
  					"specificationGroupList": [
  						{
  							"partnerId": "1864",
  							"sequence": 0,
  							"specId": "124299075036309506",
  							"specName": "规格3",
  							"specValueVos": [
  								{
  									"sequence": 0,
  									"specId": "124299075036309506",
  									"specValue": "1111",
  									"specValueId": "125027181094157083"
  								},
  								{
  									"sequence": 0,
  									"specId": "124299075036309506",
  									"specValue": "222",
  									"specValueId": "127130249753491762"
  								}
  							]
  						}
  					],
  					"standardGoodsFlag": 2,
  					"status": 2,
  					"type": 10,
  					"unit": "",
  					"valid": true,
  					"version": 0,
  					"weight": 0
  				},
  				{
  					"barcode": "",
  					"brandId": "",
  					"brandName": "",
  					"businessNo": "",
  					"businessType": "",
  					"completeFlag": 2,
  					"detailText": "",
  					"finalPrice": 300,
  					"isSkuProduct": 0,
  					"labelNames": [],
  					"level": 2,
  					"maxLimitNumber": 0,
  					"maxRestrictionQty": 0,
  					"minLimitNumber": 0,
  					"minRestrictionQty": 0,
  					"name": "雪碧",
  					"nid": "010107",
  					"options": "",
  					"originalPrice": 300,
  					"packPrice": 0,
  					"picture": "https://picture.sandload.cn/1557394857362.jpg",
  					"pid": "141177281811997965",
  					"pkNumber": 1,
  					"priceSource": 3,
  					"productAttributeGroupList": [],
  					"productCode": "562002",
  					"productPictureList": [],
  					"productionLocation": "",
  					"remark": "",
  					"saleCount": 0,
  					"sequence": 7,
  					"skuList": [],
  					"skuSpecValues": [],
  					"sourceChannel": "",
  					"specificationGroupList": [],
  					"standardGoodsFlag": 2,
  					"status": 2,
  					"type": 1,
  					"unit": "",
  					"valid": true,
  					"version": 0,
  					"weight": 0
  				}
  			],
  			"sequence": 0
  		},
  		{
  			"categoryName": "test2",
  			"level": 1,
  			"nid": "0102",
  			"productInfos": [
  				{
  					"barcode": "",
  					"brandId": "",
  					"brandName": "",
  					"businessNo": "",
  					"businessType": "",
  					"completeFlag": 2,
  					"detailText": "一维规格属性+库存\n一维规格属性+库存一维规格属性+库存\n一维规格属性+库存一维规格属性+库存一维规格属性+库存",
  					"finalPrice": 500,
  					"isSkuProduct": 0,
  					"labelNames": [],
  					"level": 2,
  					"maxLimitNumber": 0,
  					"maxRestrictionQty": 0,
  					"minLimitNumber": 0,
  					"minRestrictionQty": 0,
  					"name": "二维规格属性+库存",
  					"nid": "010201",
  					"options": "",
  					"originalPrice": 500,
  					"packPrice": 0,
  					"picture": "https://picture.sandload.cn/1556001210664.jpg",
  					"pid": "139688320143891470",
  					"pkNumber": 1,
  					"priceSource": 3,
  					"productAttributeGroupList": [
  						{
  							"attributeName": "甜度",
  							"attributeType": 5,
  							"attributeValues": [
  								{
  									"attributeId": "127114558289705231",
  									"attributeValue": "3分甜",
  									"id": 142026195807043597,
  									"price": 0,
  									"sequence": 0,
  									"status": 2
  								},
  								{
  									"attributeId": "127114547387660558",
  									"attributeValue": "2分甜",
  									"id": 142026195807043598,
  									"price": 0,
  									"sequence": 6,
  									"status": 2
  								},
  								{
  									"attributeId": "127114535776778509",
  									"attributeValue": "1分甜",
  									"id": 142026195807043599,
  									"price": 0,
  									"sequence": 12,
  									"status": 2
  								}
  							],
  							"maxNumber": 1,
  							"minNumber": 1,
  							"must": 1,
  							"options": "",
  							"sequence": 5
  						},
  						{
  							"attributeName": "口味",
  							"attributeType": 100013,
  							"attributeValues": [
  								{
  									"attributeId": "124714762753811759",
  									"attributeValue": "番茄酱",
  									"id": 142026195807043600,
  									"price": 0,
  									"sequence": 18,
  									"status": 2
  								},
  								{
  									"attributeId": "124714737311163694",
  									"attributeValue": "辣酱",
  									"id": 142026195807043601,
  									"price": 0,
  									"sequence": 24,
  									"status": 2
  								}
  							],
  							"maxNumber": 0,
  							"minNumber": 0,
  							"must": 0,
  							"options": "",
  							"sequence": 24
  						},
  						{
  							"attributeName": "走",
  							"attributeType": 100012,
  							"attributeValues": [
  								{
  									"attributeId": "126988892823899906",
  									"attributeValue": "啦啦啦啦啦啦啦啦啦啊了",
  									"id": 142026195807043602,
  									"price": 0,
  									"sequence": 30,
  									"status": 2
  								},
  								{
  									"attributeId": "126988876239621889",
  									"attributeValue": "啦啦啦啦啦",
  									"id": 142026195807043603,
  									"price": 0,
  									"sequence": 36,
  									"status": 2
  								}
  							],
  							"maxNumber": 0,
  							"minNumber": 0,
  							"must": 0,
  							"options": "",
  							"sequence": 36
  						}
  					],
  					"productCode": "testProduct002",
  					"productPictureList": [
  						{
  							"pictureId": "142026195815432212",
  							"productId": "139688320143891470",
  							"sequence": "0",
  							"type": "default",
  							"url": "https://picture.sandload.cn/1556001210664.jpg"
  						}
  					],
  					"productionLocation": "",
  					"remark": "",
  					"saleCount": 0,
  					"sequence": 1,
  					"skuList": [
  						{
  							"customerCode": "",
  							"finalPrice": 1000,
  							"originalPrice": 1000,
  							"packPrice": 3,
  							"productName": "二维规格属性+库存/库存规格值1/啦-库存规格值2",
  							"productType": 1,
  							"sequence": 0,
  							"skuId": "139688320162765847",
  							"skuSpecValues": [
  								{
  									"productId": "139688320162765847",
  									"sequence": 1,
  									"specId": "139688137342491706",
  									"specName": "库存规格1",
  									"specValue": "库存规格值1",
  									"specValueId": "139688146022603835"
  								},
  								{
  									"productId": "139688320162765847",
  									"sequence": 2,
  									"specId": "139688256376839179",
  									"specName": "库存规格2",
  									"specValue": "啦-库存规格值2",
  									"specValueId": "139688270141496332"
  								}
  							],
  							"status": 2
  						},
  						{
  							"customerCode": "",
  							"finalPrice": 500,
  							"originalPrice": 500,
  							"packPrice": 1,
  							"productName": "二维规格属性+库存/库存规格值1/啦-库存规格值1",
  							"productType": 1,
  							"sequence": 0,
  							"skuId": "139688320162765853",
  							"skuSpecValues": [
  								{
  									"productId": "139688320162765853",
  									"sequence": 3,
  									"specId": "139688137342491706",
  									"specName": "库存规格1",
  									"specValue": "库存规格值1",
  									"specValueId": "139688146022603835"
  								},
  								{
  									"productId": "139688320162765853",
  									"sequence": 4,
  									"specId": "139688256376839179",
  									"specName": "库存规格2",
  									"specValue": "啦-库存规格值1",
  									"specValueId": "139688280502475789"
  								}
  							],
  							"status": 2
  						},
  						{
  							"customerCode": "",
  							"finalPrice": 1000,
  							"originalPrice": 1000,
  							"packPrice": 2,
  							"productName": "二维规格属性+库存/库存规格值2/啦-库存规格值2",
  							"productType": 1,
  							"sequence": 0,
  							"skuId": "139688320162765859",
  							"skuSpecValues": [
  								{
  									"productId": "139688320162765859",
  									"sequence": 5,
  									"specId": "139688137342491706",
  									"specName": "库存规格1",
  									"specValue": "库存规格值2",
  									"specValueId": "139688154874682428"
  								},
  								{
  									"productId": "139688320162765859",
  									"sequence": 6,
  									"specId": "139688256376839179",
  									"specName": "库存规格2",
  									"specValue": "啦-库存规格值2",
  									"specValueId": "139688270141496332"
  								}
  							],
  							"status": 2
  						},
  						{
  							"customerCode": "",
  							"finalPrice": 500,
  							"originalPrice": 500,
  							"packPrice": 4,
  							"productName": "二维规格属性+库存/库存规格值2/啦-库存规格值1",
  							"productType": 1,
  							"sequence": 0,
  							"skuId": "139688320162765865",
  							"skuSpecValues": [
  								{
  									"productId": "139688320162765865",
  									"sequence": 7,
  									"specId": "139688137342491706",
  									"specName": "库存规格1",
  									"specValue": "库存规格值2",
  									"specValueId": "139688154874682428"
  								},
  								{
  									"productId": "139688320162765865",
  									"sequence": 8,
  									"specId": "139688256376839179",
  									"specName": "库存规格2",
  									"specValue": "啦-库存规格值1",
  									"specValueId": "139688280502475789"
  								}
  							],
  							"status": 2
  						}
  					],
  					"skuSpecValues": [],
  					"sourceChannel": "",
  					"specificationGroupList": [
  						{
  							"partnerId": "1864",
  							"sequence": 0,
  							"specId": "139688137342491706",
  							"specName": "库存规格1",
  							"specValueVos": [
  								{
  									"sequence": 0,
  									"specId": "139688137342491706",
  									"specValue": "库存规格值1",
  									"specValueId": "139688146022603835"
  								},
  								{
  									"sequence": 0,
  									"specId": "139688137342491706",
  									"specValue": "库存规格值2",
  									"specValueId": "139688154874682428"
  								}
  							]
  						},
  						{
  							"partnerId": "1864",
  							"sequence": 0,
  							"specId": "139688256376839179",
  							"specName": "库存规格2",
  							"specValueVos": [
  								{
  									"sequence": 0,
  									"specId": "139688256376839179",
  									"specValue": "啦-库存规格值2",
  									"specValueId": "139688270141496332"
  								},
  								{
  									"sequence": 0,
  									"specId": "139688256376839179",
  									"specValue": "啦-库存规格值1",
  									"specValueId": "139688280502475789"
  								}
  							]
  						}
  					],
  					"standardGoodsFlag": 2,
  					"status": 2,
  					"type": 10,
  					"unit": "",
  					"valid": true,
  					"version": 0,
  					"weight": 0
  				},
  				{
  					"barcode": "",
  					"brandId": "",
  					"brandName": "",
  					"businessNo": "",
  					"businessType": "",
  					"completeFlag": 2,
  					"detailText": "一维规格+库存\n一维规格+库存\n一维规格+库存",
  					"finalPrice": 1000,
  					"isSkuProduct": 0,
  					"labelNames": [],
  					"level": 2,
  					"maxLimitNumber": 0,
  					"maxRestrictionQty": 0,
  					"minLimitNumber": 0,
  					"minRestrictionQty": 0,
  					"name": "一维规格+库存",
  					"nid": "010202",
  					"options": "",
  					"originalPrice": 1000,
  					"packPrice": 1,
  					"picture": "https://picture.sandload.cn/1556001087276.jpg",
  					"pid": "139688209162607677",
  					"pkNumber": 1,
  					"priceSource": 3,
  					"productAttributeGroupList": [],
  					"productCode": "testProduct001",
  					"productPictureList": [
  						{
  							"pictureId": "141517239091356940",
  							"productId": "139688209162607677",
  							"sequence": "0",
  							"type": "default",
  							"url": "https://picture.sandload.cn/1556001087276.jpg"
  						}
  					],
  					"productionLocation": "",
  					"remark": "一维规格+库存一维规格+库存一维规格+库存",
  					"saleCount": 0,
  					"sequence": 2,
  					"skuList": [
  						{
  							"customerCode": "ceshihuohao",
  							"finalPrice": 1000,
  							"originalPrice": 1000,
  							"packPrice": 2,
  							"productName": "一维规格+库存/库存规格值1",
  							"productType": 1,
  							"sequence": 0,
  							"skuId": "139688209172044863",
  							"skuSpecValues": [
  								{
  									"productId": "139688209172044863",
  									"sequence": 1,
  									"specId": "139688137342491706",
  									"specName": "库存规格1",
  									"specValue": "库存规格值1",
  									"specValueId": "139688146022603835"
  								}
  							],
  							"status": 2
  						},
  						{
  							"customerCode": "ceshihuohao",
  							"finalPrice": 1500,
  							"originalPrice": 1500,
  							"packPrice": 1,
  							"productName": "一维规格+库存/库存规格值2",
  							"productType": 1,
  							"sequence": 0,
  							"skuId": "139688209173093380",
  							"skuSpecValues": [
  								{
  									"productId": "139688209173093380",
  									"sequence": 2,
  									"specId": "139688137342491706",
  									"specName": "库存规格1",
  									"specValue": "库存规格值2",
  									"specValueId": "139688154874682428"
  								}
  							],
  							"status": 2
  						}
  					],
  					"skuSpecValues": [],
  					"sourceChannel": "",
  					"specificationGroupList": [
  						{
  							"partnerId": "1864",
  							"sequence": 0,
  							"specId": "139688137342491706",
  							"specName": "库存规格1",
  							"specValueVos": [
  								{
  									"sequence": 0,
  									"specId": "139688137342491706",
  									"specValue": "库存规格值1",
  									"specValueId": "139688146022603835"
  								},
  								{
  									"sequence": 0,
  									"specId": "139688137342491706",
  									"specValue": "库存规格值2",
  									"specValueId": "139688154874682428"
  								}
  							]
  						}
  					],
  					"standardGoodsFlag": 2,
  					"status": 2,
  					"type": 10,
  					"unit": "",
  					"valid": true,
  					"version": 0,
  					"weight": 0
  				},
  				{
  					"barcode": "",
  					"brandId": "",
  					"brandName": "",
  					"businessNo": "",
  					"businessType": "",
  					"completeFlag": 2,
  					"detailText": "大虾特价限购一单",
  					"finalPrice": 2000,
  					"isSkuProduct": 0,
  					"labelNames": [],
  					"level": 2,
  					"maxLimitNumber": 0,
  					"maxRestrictionQty": 0,
  					"minLimitNumber": 0,
  					"minRestrictionQty": 0,
  					"name": "大虾特价限购一单",
  					"nid": "010203",
  					"options": "",
  					"originalPrice": 2000,
  					"packPrice": 200,
  					"picture": "https://picture.sandload.cn/1555745348415.png",
  					"pid": "139419965158759461",
  					"pkNumber": 1,
  					"priceSource": 3,
  					"productAttributeGroupList": [],
  					"productCode": "dxthjxg",
  					"productPictureList": [],
  					"productionLocation": "",
  					"remark": "大虾特价限购一单",
  					"saleCount": 0,
  					"sequence": 3,
  					"skuList": [],
  					"skuSpecValues": [],
  					"sourceChannel": "",
  					"specificationGroupList": [],
  					"standardGoodsFlag": 2,
  					"status": 2,
  					"type": 1,
  					"unit": "",
  					"valid": true,
  					"version": 0,
  					"weight": 0
  				},
  				{
  					"barcode": "",
  					"brandId": "",
  					"brandName": "",
  					"businessNo": "",
  					"businessType": "",
  					"completeFlag": 2,
  					"detailText": "",
  					"finalPrice": 100,
  					"isSkuProduct": 0,
  					"labelNames": [],
  					"level": 2,
  					"maxLimitNumber": 0,
  					"maxRestrictionQty": 0,
  					"minLimitNumber": 0,
  					"minRestrictionQty": 0,
  					"name": "sjj-多规格-库存",
  					"nid": "010204",
  					"options": "",
  					"originalPrice": 100,
  					"packPrice": 0,
  					"picture": "https://picture.sandload.cn/1557716377798.jpg",
  					"pid": "141514633960908061",
  					"pkNumber": 1,
  					"priceSource": 3,
  					"productAttributeGroupList": [],
  					"productCode": "sjj-duo1",
  					"productPictureList": [
  						{
  							"pictureId": "141547741927073061",
  							"productId": "141514633960908061",
  							"sequence": "0",
  							"type": "default",
  							"url": "https://picture.sandload.cn/1557716377798.jpg"
  						}
  					],
  					"productionLocation": "",
  					"remark": "",
  					"saleCount": 0,
  					"sequence": 4,
  					"skuList": [
  						{
  							"customerCode": "",
  							"finalPrice": 100,
  							"originalPrice": 100,
  							"packPrice": 0,
  							"productName": "sjj-多规格-库存/1/2",
  							"productType": 1,
  							"sequence": 0,
  							"skuId": "141514633969296671",
  							"skuSpecValues": [
  								{
  									"productId": "141514633969296671",
  									"sequence": 1,
  									"specId": "124299212005336578",
  									"specName": "规格1",
  									"specValue": "1",
  									"specValueId": "127877117352407578"
  								},
  								{
  									"productId": "141514633969296671",
  									"sequence": 2,
  									"specId": "124299152334082049",
  									"specName": "规格2",
  									"specValue": "2",
  									"specValueId": "141514605407135004"
  								}
  							],
  							"status": 2
  						}
  					],
  					"skuSpecValues": [],
  					"sourceChannel": "",
  					"specificationGroupList": [
  						{
  							"partnerId": "1864",
  							"sequence": 0,
  							"specId": "124299212005336578",
  							"specName": "规格1",
  							"specValueVos": [
  								{
  									"sequence": 0,
  									"specId": "124299212005336578",
  									"specValue": "1",
  									"specValueId": "127877117352407578"
  								}
  							]
  						},
  						{
  							"partnerId": "1864",
  							"sequence": 0,
  							"specId": "124299152334082049",
  							"specName": "规格2",
  							"specValueVos": [
  								{
  									"sequence": 0,
  									"specId": "124299152334082049",
  									"specValue": "2",
  									"specValueId": "141514605407135004"
  								}
  							]
  						}
  					],
  					"standardGoodsFlag": 2,
  					"status": 2,
  					"type": 10,
  					"unit": "",
  					"valid": true,
  					"version": 0,
  					"weight": 0
  				},
  				{
  					"barcode": "",
  					"brandId": "",
  					"brandName": "",
  					"businessNo": "",
  					"businessType": "",
  					"completeFlag": 2,
  					"detailText": "新鲜柠檬，搭配鲜绿的金桔，自然散发这浓浓的柠檬香，入口酸甜，清新萦绕在口鼻之间。让你齿间清香，身体清爽。\n",
  					"finalPrice": 1,
  					"isSkuProduct": 0,
  					"labelNames": [],
  					"level": 2,
  					"maxLimitNumber": 0,
  					"maxRestrictionQty": 0,
  					"minLimitNumber": 0,
  					"minRestrictionQty": 0,
  					"name": "金桔柠檬",
  					"nid": "010205",
  					"options": "",
  					"originalPrice": 1,
  					"packPrice": 1,
  					"picture": "https://picture.sandload.cn/1556519782716.jpg",
  					"pid": "140232044850617351",
  					"pkNumber": 1,
  					"priceSource": 3,
  					"productAttributeGroupList": [
  						{
  							"attributeName": "温度",
  							"attributeType": 3,
  							"attributeValues": [
  								{
  									"attributeId": "125609440286271769",
  									"attributeValue": "加少冰",
  									"id": 141260970662192386,
  									"price": 0,
  									"sequence": 0,
  									"status": 2
  								},
  								{
  									"attributeId": "125505636723255573",
  									"attributeValue": "冰",
  									"id": 141260970662192387,
  									"price": 0,
  									"sequence": 4,
  									"status": 2
  								}
  							],
  							"maxNumber": 1,
  							"minNumber": 1,
  							"must": 1,
  							"options": "",
  							"sequence": 3
  						},
  						{
  							"attributeName": "甜度",
  							"attributeType": 5,
  							"attributeValues": [
  								{
  									"attributeId": "125610092230011191",
  									"attributeValue": "三分甜",
  									"id": 141260970662192388,
  									"price": 0,
  									"sequence": 8,
  									"status": 2
  								},
  								{
  									"attributeId": "125610069571332406",
  									"attributeValue": "五分甜",
  									"id": 141260970662192389,
  									"price": 0,
  									"sequence": 12,
  									"status": 2
  								},
  								{
  									"attributeId": "125610126515300665",
  									"attributeValue": "正常",
  									"id": 141260970662192390,
  									"price": 0,
  									"sequence": 16,
  									"status": 2
  								},
  								{
  									"attributeId": "125610057277827381",
  									"attributeValue": "七分甜",
  									"id": 141260970662192391,
  									"price": 0,
  									"sequence": 20,
  									"status": 2
  								}
  							],
  							"maxNumber": 1,
  							"minNumber": 1,
  							"must": 1,
  							"options": "",
  							"sequence": 5
  						}
  					],
  					"productCode": "00013",
  					"productPictureList": [],
  					"productionLocation": "",
  					"remark": "新鲜柠檬，搭配鲜绿的金桔，自然散发这浓浓的柠檬香，入口酸甜，清新萦绕在口鼻之间。让你齿间清香，身体清爽。\n",
  					"saleCount": 0,
  					"sequence": 5,
  					"skuList": [],
  					"skuSpecValues": [],
  					"sourceChannel": "",
  					"specificationGroupList": [],
  					"standardGoodsFlag": 2,
  					"status": 2,
  					"type": 1,
  					"unit": "",
  					"valid": true,
  					"version": 0,
  					"weight": 0
  				}
  			],
  			"sequence": 1
  		}
  	],
  	"level": 0,
  	"menuId": "138614756111043329",
  	"menuName": "test-sjj",
  	"nid": "01",
  	"sequence": 0
  }
  ```
  
##  商品沽清接口

### 应用场景

商品沽清接口

### 请求url：/goods/skuItem/sellOut

### 请求参数

| 字段    | 类型   | 是否必传 | 举例   | 说明       |
| :------ | ------ | -------- | ------ | ---------- |
| storeId | String | 是       | 208888 | 商家门店号 |
| spuId   | String | 是         |        |            |
| skuIds  | Array  | 是       |        |            |

#### requestBody请求示例

```json
{
    "storeId": "1000189",
    "skuIds": [
        "141514633969296671"
    ],
    "spuId": "141514633960908061"
}
```

### 响应参数

无

##  商品撤销沽清接口

### 应用场景

商品撤销沽清接口

### 请求url：/goods/skuItem/cancelSellOut

### 请求参数

| 字段    | 类型   | 是否必传 | 举例   | 说明       |
| :------ | ------ | -------- | ------ | ---------- |
| storeId | String | 是       | 208888 | 商家门店号 |
| spuId   | String | 是       |        |            |
| skuId   | String | 是       |        |            |

#### requestBody请求示例

```json
{
    "storeId": "1000189",
    "skuId": "141514633969296671",
    "spuId": "141514633960908061"
}
```

### 响应参数

无



## 状态码

| 状态码 | 描述               |
| ------ | ------------------ |
| 100    | 成功               |
| 21     | 缺少必要的请求参数 |
| 500    | 内部服务异常       |
  
