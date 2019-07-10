# 商品类接口

## 商品查询接口

### 应用场景

根据商店id查询所有商品信息

### 请求url：/goods/queryByStoreId

### 请求参数

| 字段    | 类型   | 是否必传 | 举例   | 说明       |
| :------ | ------ | -------- | ------ | ---------- |
| storeId | String | 是       | 208888 | 商家门店号 |

### requestBody请求示例

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

#### productInfos

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


### responseBody返回示例

```json
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
                                    "id": 142407419635634480,
                                    "price": 0,
                                    "sequence": 0,
                                    "status": 2
                                },
                                {
                                    "attributeId": "125609440286271769",
                                    "attributeValue": "加少冰",
                                    "id": 142407419635634480,
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
                                    "id": 142407419635634480,
                                    "price": 0,
                                    "sequence": 20,
                                    "status": 2
                                },
                                {
                                    "attributeId": "122493722811322375",
                                    "attributeValue": "加牛奶",
                                    "id": 142407419635634480,
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
                                    "id": 142407419635634480,
                                    "price": 0,
                                    "sequence": 10,
                                    "status": 2
                                },
                                {
                                    "attributeId": "124714762753811759",
                                    "attributeValue": "番茄酱",
                                    "id": 142407419635634480,
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
                }
            ],
            "sequence": 0
        }
    ],
    "level": 0,
    "menuId": "138614756111043329",
    "menuName": "test-sjj",
    "nid": "01",
    "sequence": 0
}
  ```


## 商品沽清接口（非码商品ID）

### 应用场景

根据非码商品ID，商品沽清接口

### 请求url：/goods/skuItem/sellOut

### 请求参数

| 字段    | 类型   | 是否必传 | 举例   | 说明       |
| :------ | ------ | -------- | ------ | ---------- |
| storeId | String | 是       | 208888 | 商家门店号 |
| spuId   | String |          |        |            |
| skuIds  | Array  | 是       |        |            |

### requestBody请求示例

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

## 商品撤销沽清接口（非码商品ID）

### 应用场景

根据非码商品ID，商品撤销沽清接口

### 请求url：/goods/skuItem/cancelSellOut

### 请求参数

| 字段    | 类型   | 是否必传 | 举例   | 说明       |
| :------ | ------ | -------- | ------ | ---------- |
| storeId | String | 是       | 208888 | 商家门店号 |
| spuId   | String | 是       |        |            |
| skuId   | String | 是       |        |            |

### requestBody请求示例

```json
{
    "storeId": "1000189",
    "skuId": "141514633969296671",
    "spuId": "141514633960908061"
}
```

### 响应参数

无

## 商品沽清接口（商家自定义商品ID）

### 应用场景

根据商家自定义商品ID，商品沽清接口

### 请求url：/goods/skuItem/sellOutByCustomerCode

### 请求参数

| 字段          | 类型   | 是否必传 | 举例   | 说明       |
| :------------ | ------ | -------- | ------ | ---------- |
| storeId       | String | 是       | 208888 | 商家门店号 |
| customerCodes | Array  | 是       |        |            |

### requestBody请求示例

```json
{
    "storeId": "1000189",
    "customerCodes": ["141514633969296671","141514633969296672"]
}
```

### 响应参数

无

## 商品撤销沽清接口（商家自定义商品ID）

### 应用场景

根据商家自定义商品ID，商品撤销沽清接口

### 请求url：/goods/skuItem/cancelSellOutByCustomerCode

### 请求参数

| 字段          | 类型   | 是否必传 | 举例   | 说明       |
| :------------ | ------ | -------- | ------ | ---------- |
| storeId       | String | 是       | 208888 | 商家门店号 |
| customerCodes | Array  | 是       |        |            |

### requestBody请求示例

```json
{
    "storeId": "1000189",
    "customerCodes": ["141514633969296671","141514633969296672"]
}
```

### 响应参数

无

## 创建商品菜单接口

### 应用场景

创建商品菜单

### 请求url：/menu/add

### 请求参数

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

### requestBody请求示例

```json

{
    "channel":"saas",
    "dateStatus":1,
    "endTime":"2019-08-09 10:00:00",
    "menuCode":"0102",
    "menuNo":10,
    "name":"测试",
    "partnerId":"string",
    "remark":"测试",
    "startTime":"2019-07-09 10:00:00",
    "type":0
}
```

### 响应参数

| **字段** | **类型** | **必填** | **举例** | **说明** |
| -------- | -------- | -------- | -------- | -------- |
| menuId   | String   | 是       |          | 菜单ID   |

### responseBody返回示例

```json
 "146682059538214920"
```

## 创建商品菜单分类接口

### 应用场景

创建商品菜单分类

### 请求url：/menu/addCategory

### 请求参数

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

### requestBody请求示例

```json
{
    "menuId":"146682059538214920",
    "categoryId":"01",
    "customerCategoryCode":"111",
    "name":"分类二",
    "remark":"分类二",
    "sequence":2
}
```

### 响应参数

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

responseBody返回示例

```json
{
    "createDate":"1562678160358",
    "icon":"",
    "menuId":"146682059538214920",
    "name":"分类二",
    "options":"",
    "remark":"分类二",
    "sequence":2,
    "type":"node"
}
```

## 获取菜单列表接口

### 应用场景

根据商户id返回菜单及分类

### 请求url：/menu/list

### 请求参数

| 字段         | 类型    | 是否必传 | 举例 | 说明                         |
| ------------ | ------- | -------- | ---- | ---------------------------- |
| **channel**  | String  | 否       | saas | 渠道                         |
| **isValid**  | string  | 否       |      | 是否有效（0：无效，1：有效） |
| **menuCode** | String  | 否       |      | 菜单编号                     |
| **name**     | String  | 否       |      | 菜单名称                     |
| **storeId**  | String  | 否       |      | 门店id                       |
| pageNum      | Integer | 是       |      | 当前页                       |
| pageSize     | Integer | 是       |      | 页数                         |

### requestBody请求示例

```json
{
    "pageNum":1,
 	"pageSize":10
}
```

### 响应参数

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

### responseBody返回示例

```json
"list":[
        {
            "isOnline":0,
            "isValid":1,
            "menuCode":"146682059538214920",
            "menuId":"146682059538214920",
            "name":"测试",
            "remark":"测试"
        },
        {
            "isOnline":0,
            "isValid":1,
            "menuCode":"GC007",
            "menuId":"146693217764659980",
            "name":"GC007",
            "remark":"GC007"
        },
        {
            "isOnline":0,
            "isValid":1,
            "menuCode":"109387493",
            "menuId":"144983044929038390",
            "name":"菜单名称-0000001",
            "remark":"备注备注"
        },
        {
            "isOnline":0,
            "isValid":1,
            "menuCode":"00000",
            "menuId":"144427801391564829",
            "name":"test",
            "remark":"test"
        },
        {
            "isOnline":0,
            "isValid":1,
            "menuCode":"000111",
            "menuId":"144238503243448863",
            "name":"杨国福",
            "remark":"杨国福"
        },
        {
            "isOnline":0,
            "isValid":1,
            "menuCode":"test_youzi",
            "menuId":"144232335939895810",
            "name":"youzi的菜单",
            "remark":""
        },
        {
            "isOnline":0,
            "isValid":1,
            "menuCode":"100130405",
            "menuId":"144065254209506317",
            "name":"专属菜单",
            "remark":""
        },
        {
            "isOnline":0,
            "isValid":1,
            "menuCode":"asd",
            "menuId":"143670255396473861",
            "name":"test",
            "remark":"test"
        },
        {
            "isOnline":0,
            "isValid":1,
            "menuCode":"哗啦啦测试商品",
            "menuId":"143402139249742136",
            "name":"哗啦啦测试商品",
            "remark":"哗啦啦测试商品"
        },
        {
            "isOnline":0,
            "isValid":1,
            "menuCode":"testSkuLimit",
            "menuId":"142970993325052205",
            "name":"testSkuLimit",
            "remark":"testSkuLimit"
        }
    ],
    "pageNum":1,
    "pageSize":10,
    "totalCount":36,
    "totalPages":0
}
```

## 查询菜单及分类信息接口

### 应用场景

根据菜单ID或门店ID查询菜单及分类信息

### 请求url：/menu/detail

### 请求参数

| 字段        | 类型   | 是否必传 | 举例 | 说明   |
| ----------- | ------ | -------- | ---- | ------ |
| **menuId**  | Long   | 是       | saas | 菜单id |
| **storeId** | string | 否       |      | 门店id |

### requestBody请求示例

```json
{
  "menuId": "146682059538214920",
  "storeId": "101"
}
```

### 响应参数

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

### responseBody返回示例

```json
{
    "list":[
        {
            "categoryId":"0101",
            "createDate":"1562665908000",
            "customerCategoryCode":"",
            "icon":"",
            "menuId":"146682059538214920",
            "name":"分类一",
            "options":"",
            "remark":"分类一",
            "sequence":1,
            "type":"node"
        },
        {
            "categoryId":"0102",
            "createDate":"1562677936000",
            "customerCategoryCode":"111",
            "icon":"",
            "menuId":"146682059538214920",
            "name":"分类二",
            "options":"",
            "remark":"分类二",
            "sequence":2,
            "type":"node"
        },
        {
            "categoryId":"0103",
            "createDate":"1562678160000",
            "customerCategoryCode":"121",
            "icon":"",
            "menuId":"146682059538214920",
            "name":"分类三",
            "options":"",
            "remark":"分类三",
            "sequence":3,
            "type":"node"
        }
    ]
}
```

## 菜单批量绑定门店(限制300)

### 请求地址 /goods/bandingMenuToStores

### 请求方法 POST

### 请求参数

参数|参数含义|类型|必填|说明
---|---|---|---|---
partnerId|商户编号|String|Y|商户编号
menuId|菜单编号|String|Y|菜单编号
storeIds|门店列表|List`<String>`|Y|门店列表

### requestBody请求示例

```json
{
"menuId":"137169131923508491",
"storeIds":["190314"]
}
```

### 响应：
参数|参数含义|类型|说明
---|---|---|---
code|返回码|String|返回码
message|返回信息|String|返回信息
result|返回结果|Object|返回结果


### 响应示例

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

### 请求地址 /goods/batchChangeStatus

### 请求方法 POST

### 请求参数

参数|参数含义|类型|必填|说明
---|---|---|---|---
partnerId|商户编号|String|Y|商户编号
productIds|菜单编号|List`<String>`|Y|菜单编号
status|上下架状态|String|Y|上下架状态 1:上架 ；2：下架

### requestBody请求示例

```json
{
"status":"1",
"productIds":["146609369572911135","145588001954801706"]
}

```

### 响应：

参数|参数含义|类型|说明
---|---|---|---
code|返回码|String|返回码
message|返回信息|String|返回信息
result|返回结果|Object|返回结果

### 响应示例
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

### 请求地址 /goods/batchSynStoreStock

### 请求方法 POST

### 请求参数

参数|参数含义|类型|必填|说明
---|---|---|---|---
channel|渠道|String|Y|渠道
partnerId|商户号|String|Y|商户号
storeId|门店编号|String|Y|门店编号
invInfos|库存信息|List`<FullInvInfoVo>`|Y|库存信息
invInfos/customerCode|商品编号|String|Y|商品编号, maxLength = 50 ， 与productId至少填一个
invInfos/productId|非码商品id|String|Y|非码商品id，与customerCode至少填一个
invInfos/productName|商品名称|String|Y|商品名称
invInfos/qty|初始库存数量|Integer|Y|初始库存数量
invInfos/remark|备注|String|N|备注
invInfos/safeQty|安全库存数|Integer|N|安全库存数
invInfos/virtualQty|虚拟库存数|Integer|N|虚拟库存数

### requestBody请求示例
```json
{
"channel":"xcx",
"partnerId":"1864",
"storeId":"190314",
"invInfos":[{"productId":"145584167419324450","qty":"68","safeQty":"8"}]
}
```

### 响应：

参数|参数含义|类型|说明
---|---|---|---
code|返回码|String|返回码
message|返回信息|String|返回信息
result|返回结果|Object|返回结果

### 响应示例

```json
{
    "ver": "1",
    "statusCode": "100",
    "message": "成功",
    "responseBody": null,
    "sign": null
}
```
