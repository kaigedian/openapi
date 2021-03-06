# 商品类接口

## 商品查询接口

### 应用场景

根据商店id查询所有商品信息

### 请求url：/goods/queryByStoreId

### 请求参数

| 字段      | 类型   | 是否必传 | 举例                                                       | 说明       |
| :-------- | ------ | -------- | ---------------------------------------------------------- | ---------- |
| storeId   | String | 是       | 208888                                                     | 商家门店号 |
| partnerId | String | 是       |                                                            | 商户ID     |
| channelId | String | 否       | saas ： 自提/saasdelivery : 外卖/saasmall : 微商城/wc:围餐 | 业务类型   |

### 请求示例

```json
{
  "ver":1,
  "partnerId":"2399",
  "appId":"wxaa246",
  "requestBody": "{\"storeId\":\"321123\"}",
  "sign": "<sign>"
}
```

### 响应参数

| **字段**      | **类型** | **必填** | **举例** | **说明**                                                     |
| ------------- | -------- | -------- | -------- | ------------------------------------------------------------ |
| menuName      | String   | 是       |          | 菜单名称                                                     |
| menuId        | String   | 是       |          | 菜单id                                                       |
| nid           | String   | 是       |          | 菜单节点ID以两位数字为一组，代表菜单顺序范围：01-ZZ，如果是多级菜单者在上级菜单的编号基础上增加两位顺序组。例如：一级菜单01，一级子菜单0101 |
| level         | Integer  | 是       |          | 层级                                                         |
| sequence      | Integer  | 是       |          | 排序                                                         |
| categoryInfos | Array    | 是       |          | 分类信息（见categoryInfos）                                  |

#### categoryInfos

| **字段**     | **类型** | **必填** | **举例** | **说明**                                                     |
| ------------ | -------- | -------- | -------- | ------------------------------------------------------------ |
| categoryName | String   | 是       |          | 分类名称                                                     |
| level        | Integer  | 是       |          | 层级                                                         |
| nid          | String   | 是       |          | 菜单节点ID以两位数字为一组，代表菜单顺序范围：01-ZZ，如果是多级菜单者在上级菜单的编号基础上增加两位顺序组。例如：一级菜单01，一级子菜单0101 |
| sequence     | Integer  | 是       | 1        | 排序                                                         |
| icon         | String   | 是       |          | 分类下的icon地址                                             |
| productInfos | Array    | 否       |          | 商品详情（见productInfos）                                   |

#### productInfos

| 字段                                                     | 类型    | 必填    | 举例 | 说明                                                         |
| -------------------------------------------------------- | ------- | ------- | ---- | ------------------------------------------------------------ |
| level                                                    | Integer | 是      |      | 层级                                                         |
| nid                                                      | String  | 是      |      | 菜单节点ID以两位数字为一组，代表菜单顺序范围：01-ZZ，如果是多级菜单者在上级菜单的编号基础上增加两位顺序组。 |
| sequence                                                 | Integer | 是      |      | 排序                                                         |
| barcode                                                  | String  | 是      |      | 商品条码                                                     |
| brandId                                                  | String  | 是      |      | 品牌ID                                                       |
| brandName                                                | String  | 是      |      | 品牌名称                                                     |
| businessNo                                               | String  | 是      |      | 业务编号                                                     |
| businessType                                             | String  | 是      |      | 业务类型                                                     |
| completeFlag                                             | Integer | 是      |      | 商品数据完成度，1未完成2已完成                               |
| detailText                                               | String  | 是      |      | html文本，商品详情                                           |
| maxLimitNumber                                           | Integer | 是      |      | 商品最大限制数量                                             |
| maxRestrictionQty                                        | Integer | 是      |      | 门店商品最大限购数量                                         |
| minLimitNumber                                           | Integer | 是      |      | 商品最小限制数量                                             |
| minRestrictionQty                                        | Integer | 是      |      | 门店商品最小限购数量                                         |
| options                                                  | String  | 否      |      | 扩展字段                                                     |
| priceSource                                              | Integer | 是      |      | 商品价格来源(1门店价/2价格组/3商品价)                        |
| customerCode                                             | String  | 是      |      | 关联第三方的商品ID                                           |
| productCode                                              | String  | 是      |      | 商品编号                                                     |
| weight                                                   | Integer | 是      |      | 数字，单位kg                                                 |
| finalPrice                                               | Long    | 是      |      | 最终价格 单位分                                              |
| isSkuProduct                                             | Integer | 是      |      | 是否是SKU商品  1是0否                                        |
| name                                                     | String  | 是      |      | 商品名称                                                     |
| originalPrice                                            | Long    | 是      |      | 原始价格 单位分                                              |
| packPrice                                                | Long    | 是      |      | 包装费 单位分                                                |
| picture                                                  | String  | 是      |      | 商品图片                                                     |
| pid                                                      | String  | 是      |      | 商品id                                                       |
| pkNumber                                                 | Integer | 是      |      | 包装含量                                                     |
| productionLocation                                       | String  | 是      |      | 产地                                                         |
| remark                                                   | String  | 否      |      | 备注                                                         |
| saleCount                                                | Integer | 是      |      | 销量                                                         |
| sourceChannel                                            | String  | 是      |      | 采购渠道                                                     |
| status                                                   | Integer | 是      |      | 商品状态   1=下架，2=上架，3=售罄，4=删除                    |
| type                                                     | Integer | 是      |      | 商品类型 1=普通商品,2=附加商品 4=套餐 6=多规格商品 10=新多规格 |
| unit                                                     | String  | 是      |      | 单位                                                         |
| valid                                                    | Boolean | 是      |      | 是否有效                                                     |
| version                                                  | Integer | 是      |      | 版本号，同步等功能使用                                       |
| standardGoodsFlag                                        | Integer | 是      |      | 是否标品 /1非标品/2标品                                      |
| labelNames                                               | Array   | 是      |      | 商品标签                                                     |
| labelNames\id                                            | String  | 是      |      | 商品标签ID                                                   |
| labelNames\name                                          | String  | 是      |      | 商品标签名称                                                 |
| labelNames\type                                          | String  | 是      |      | 标签类型                                                     |
| labelNames\partnerId                                     | String  | 是      |      | 商户ID                                                       |
| **labelNames\productList**                               | Array   | 是      |      | 关联商品列表                                                 |
| labelNames\storeId                                       | String  | 是      |      | 门店ID                                                       |
| productAttributeGroupList                                | Array   | 是      |      | 商品属性                                                     |
| productAttributeGroupList\attributeName                  | String  | 是      |      | 属性名称                                                     |
| productAttributeGroupList\attributeType                  | Integer | 是      |      | 属性类型                                                     |
| productAttributeGroupList\maxNumber                      | Integer | 是      |      | 最小选择数量                                                 |
| productAttributeGroupList\minNumber                      | Integer | 是      |      | 最大选择数量                                                 |
| productAttributeGroupList\must                           | Integer | 是      |      | 是否必选,1必选,2可选                                         |
| productAttributeGroupList\options                        | String  | 否      |      | 扩展字段，提供用户端存储自定义json格式数据                   |
| productAttributeGroupList\sequence                       | Integer | 是      |      | 属性大类排序信息                                             |
| productAttributeGroupList\customerCode                   | String  | 是      |      | 第三方编码                                                   |
| productAttributeGroupList\attributeValues                | Array   | 是      |      | 属性详细信息                                                 |
| productAttributeGroupList\attributeValues\attributeId    | String  | 是      |      | 属性ID                                                       |
| productAttributeGroupList\attributeValues\attributeValue | String  | 是      |      | 属性值                                                       |
| productAttributeGroupList\attributeValues\id             | Long    | 是      |      | 属性值ID                                                     |
| productAttributeGroupList\attributeValues\price          | Long    | 是      |      | 价格,单位：分                                                |
| productAttributeGroupList\attributeValues\sequence       | Integer | 是      |      | 排序                                                         |
| productAttributeGroupList\attributeValues\status         | Integer | 是      |      | 属性状态                                                     |
| productAttributeGroupList\attributeValues\customerCode   | String  | 是      |      | 第三方编码                                                   |
| productPictureList                                       | Array   | 是      |      | 商品的图片                                                   |
| productPictureList\pictureId                             | String  | 是      |      | 图片id                                                       |
| productPictureList\productId                             | String  | 是      |      | 商品id                                                       |
| productPictureList\sequence                              | String  | 是      |      | 序号，排序使用                                               |
| productPictureList\type                                  | String  | 是      |      | 图片类型，如default                                          |
| productPictureList\url                                   | String  | 是      |      | URL地址                                                      |
| skuList                                                  | Array   | 是      |      | sku商品                                                      |
| skuList\customerCode                                     | String  | 是      |      | 第三方编码                                                   |
| skuList\productCode                                      | String  | 是      |      | 商品编号                                                     |
| skuList\finalPrice                                       | Long    | 是      |      | 销售价格 商户通用                                            |
| skuList\originalPrice                                    | Long    | 是      |      | 商品标准售价-原价(单位分)                                    |
| skuList\productName                                      | String  | 是      |      | 商品名称                                                     |
| skuList\productType                                      | Integer | 是      |      | 商品类型                                                     |
| skuList\sequence                                         | Integer | 是      |      | 排序                                                         |
| skuList\skuCode                                          | String  | 是      |      | sku编号                                                      |
| skuList\skuId                                            | String  | 是      |      | sku ID                                                       |
| skuList\status                                           | String  | 是      |      | 商品状态   1=下架，2=上架，3=售罄，4=删除                    |
| skuList\packPrice                                        | Long    | 是      |      | sku商品包装费                                                |
| skuList\skuSpecValues                                    | Array   | 是      |      | 商品规格值                                                   |
| skuList\skuSpecValues\productId                          | String  | 是      |      | 商品ID                                                       |
| skuList\skuSpecValues\sequence                           | Integer | 是      |      | 排序                                                         |
| skuList\skuSpecValues\specId                             | String  | 是      |      | 规格ID                                                       |
| skuList\skuSpecValues\specName                           | String  | 是      |      | 规格名                                                       |
| skuList\skuSpecValues\specValue                          | String  | 是      |      | 规格值                                                       |
| skuList\skuSpecValues\specValueId                        | String  | 是      |      | 规格值ID                                                     |
| skuList\skuSpecValues\specCustomerCode                   | String  | 是      |      | 规格编码                                                     |
| skuList\skuSpecValues\specValueCustomerCode              | String  | 是      |      | 规格值编码                                                   |
| specificationGroupList                                   | Array   | 是      |      | 规格信息                                                     |
| specificationGroupList\partnerId                         | String  | 是      |      | 商户ID                                                       |
| specificationGroupList\sequence                          | Integer | 是      |      | 排序                                                         |
| specificationGroupList\specId                            | String  | 是      |      | 规格ID                                                       |
| specificationGroupList\specName                          | String  | 是      |      | 规格名                                                       |
| specificationGroupList\customerCode                      | String  | 是      |      | 第三方编码                                                   |
| specificationGroupList\specValueVos                      | Array   | 是      |      | 规格值信息                                                   |
| specificationGroupList\specValueVos\sequence             | Integer | 是      |      | 排序                                                         |
| specificationGroupList\specValueVos\specId               | String  | 是      |      | 规格ID                                                       |
| specificationGroupList\specValueVos\specValue            | String  | 是      |      | 规格值                                                       |
| specificationGroupList\specValueVos\specValueId          | String  | 是      |      | 规格值ID                                                     |
| specificationGroupList\specValueVos\customerCode         | String  | 是      |      | 第三方编码                                                   |
| skuSpecValues                                            | Array   | 是      |      | Sku 规格 如果 当前是sku 则有值                               |
| skuSpecValues\productId                                  | String  | 是      |      | 商品ID                                                       |
| skuSpecValues\sequence                                   | Integer | 是      |      | 排序                                                         |
| skuSpecValues\specId                                     | Integer | 是      |      | 规格ID                                                       |
| skuSpecValues\specName                                   | String  | 是      |      | 规格名                                                       |
| skuSpecValues\specValue                                  | String  | 是      |      | 规格值                                                       |
| skuSpecValues\specValueId                                | String  | 是      |      | 规格值ID                                                     |
| skuSpecValues\specCustomerCode                           | String  | 是      |      | 第三方编码                                                   |
| skuSpecValues\specValueCustomerCode                      | String  | 是      |      | 规格值编码                                                   |
| productComboList                                         | Array   | 是      |      | 套餐商品固定搭配子商品列表                                   |
| productComboList\barcode                                 | String  | 是      |      | 商品码                                                       |
| productComboList\category                                | String  | 是      |      | 商品后台分类编码                                             |
| productComboList\categoryName                            | String  | 是      |      | 商品后台分类                                                 |
| productComboList\customerCode                            | String  | 是      |      | 第三方商品编码                                               |
| productComboList\finalPrice                              | Integer | 是      |      | 最终售价                                                     |
| productComboList\labelNames                              | Array   | 是      |      | 标签列表                                                     |
| productComboList\labelNames\id                           | String  | 是      |      | 标签ID                                                       |
| productComboList\labelNames\name                         | String  | 是      |      | 标签名                                                       |
| productComboList\labelNames\name                         | String  | 是      |      | 标签类型                                                     |
| productComboList\labelNames\partnerId                    | String  | 是      |      | 商户                                                         |
| **productComboList\labelNames\productList**              | Array   | 是      |      | 关联商品列表                                                 |
| productComboList\labelNames\partnerId                    | String  | 是      |      | 门店                                                         |
| productComboList\options                                 | String  | 是      |      | 扩展字段                                                     |
| productComboList\originalPrice                           | Integer | 是      |      | 标准售价                                                     |
| productComboList\packPrice                               | Integer | 是      |      | 包装费                                                       |
| productComboList\productCode                             | String  | 是      |      | 商品Code                                                     |
| productComboList\productId                               | String  | 是      |      | 商品ID                                                       |
| productComboList\productId                               | String  | 是      |      | 商品名称                                                     |
| productComboList\productType                             | Integer | 是      |      | 商品类型 /1普通商品/3组合商品/6套餐/7加价套餐/9虚拟商品/10多规格商品 |
| productComboList\quantity                                | Integer | 是      |      | 商品数量                                                     |
| productComboList\sequence                                | Integer | 是      |      | 排序                                                         |
| productComboList\specification                           | String  | 是      |      | 规格                                                         |
| productComboList\status                                  | Integer | 是      |      | 商品状态 /1下架/2上架/3售罄/4删除                            |
| productComboList\status                                  | Integer | 是      |      | 是否设置库存                                                 |
| productComboList\unit                                    | String  | 是      |      | 单位                                                         |
| isDishware                                               | Integer | 是      |      | 是否是餐具 1、表示为餐具商品                                 |
| weightType                                               | Integer | Integer |      | 是否是称重商品 1、表示为称重                                 |




### 返回示例

```json
{
  "ver": "1",
  "statusCode": "100",
  "message": "成功",
  "responseBody": "{\"categoryInfos\":[{\"categoryName\":\"券包\",\"icon\":\"\",\"level\":0,\"nid\":\"0108\",\"productInfos\":[{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"14545\",\"detailText\":\"\",\"finalPrice\":1,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"不能在别的门店出现\",\"nid\":\"010801\",\"options\":\"\",\"originalPrice\":1,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/zfx01.jpg?timestamp=1593832540030\",\"pid\":\"179003669738676251\",\"pkNumber\":1,\"priceSource\":2,\"productAttributeGroupList\":[],\"productCode\":\"\",\"productComboList\":[],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/zfx01.jpg?timestamp=1593832540030\"}],\"productionLocation\":\"\",\"remark\":\"\",\"saleCount\":0,\"sequence\":1,\"skuList\":[],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[],\"standardGoodsFlag\":2,\"status\":2,\"type\":9,\"unit\":\"\",\"valid\":true,\"version\":0,\"weight\":0},{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"12415146543\",\"detailText\":\"\",\"finalPrice\":0,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"发券头头能使用\",\"nid\":\"010802\",\"options\":\"\",\"originalPrice\":0,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/zfx01.jpg?timestamp=1593832540030\",\"pid\":\"179007771264671781\",\"pkNumber\":1,\"priceSource\":2,\"productAttributeGroupList\":[],\"productCode\":\"\",\"productComboList\":[],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/zfx01.jpg?timestamp=1593832540030\"}],\"productionLocation\":\"\",\"remark\":\"\",\"saleCount\":0,\"sequence\":2,\"skuList\":[],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[],\"standardGoodsFlag\":2,\"status\":2,\"type\":9,\"unit\":\"\",\"valid\":true,\"version\":0,\"weight\":0},{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"21414\",\"detailText\":\"\",\"finalPrice\":1,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"未开始券包01\",\"nid\":\"010803\",\"options\":\"\",\"originalPrice\":1,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/21414.jpeg?timestamp=1594109716272\",\"pid\":\"179666636160331280\",\"pkNumber\":1,\"priceSource\":2,\"productAttributeGroupList\":[],\"productCode\":\"\",\"productComboList\":[],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/21414.jpeg?timestamp=1594109716272\"}],\"productionLocation\":\"\",\"remark\":\"\",\"saleCount\":0,\"sequence\":3,\"skuList\":[],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[],\"standardGoodsFlag\":2,\"status\":2,\"type\":9,\"unit\":\"\",\"valid\":true,\"version\":0,\"weight\":0}],\"sequence\":0},{\"categoryName\":\"今日特惠\",\"icon\":\"https://picture.sandload.cn/1589538484842.png\",\"level\":0,\"nid\":\"0106\",\"productInfos\":[{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"87583279832\",\"detailText\":\"\",\"finalPrice\":1,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"柚子的柚子茶\",\"nid\":\"010603\",\"options\":\"\",\"originalPrice\":1,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/柚子的柚子茶.jpeg?timestamp=1594106063646\",\"pid\":\"171651116949558542\",\"pkNumber\":6,\"priceSource\":3,\"productAttributeGroupList\":[],\"productCode\":\"\",\"productComboList\":[],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/柚子的柚子茶.jpeg?timestamp=1594106063646\"}],\"productionLocation\":\"\",\"remark\":\"\",\"saleCount\":0,\"sequence\":1,\"skuList\":[],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[],\"standardGoodsFlag\":2,\"status\":2,\"type\":1,\"unit\":\"包\",\"valid\":true,\"version\":0,\"weight\":22},{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"615002-003\",\"detailText\":\"酸奶芒果布丁多规格\",\"finalPrice\":300,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"酸奶芒果布丁多规格\",\"nid\":\"010604\",\"options\":\"\",\"originalPrice\":300,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/615002.jpg?timestamp=1594006646527\",\"pid\":\"177668119611925254\",\"pkNumber\":1,\"priceSource\":2,\"productAttributeGroupList\":[],\"productCode\":\"\",\"productComboList\":[],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/615002.jpg?timestamp=1594006646527\"}],\"productionLocation\":\"\",\"remark\":\"酸奶芒果布丁多规格\",\"saleCount\":0,\"sequence\":2,\"skuList\":[{\"customerCode\":\"615002-002\",\"finalPrice\":800,\"originalPrice\":800,\"packPrice\":0,\"productCode\":\"11112444\",\"productName\":\"酸奶芒果布丁多规格/大杯\",\"productType\":1,\"sequence\":0,\"skuId\":\"177668119666451208\",\"skuSpecValues\":[{\"productId\":\"177668119666451208\",\"sequence\":1,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"大杯\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146079329172027653\"}],\"status\":1},{\"customerCode\":\"615002-002\",\"finalPrice\":500,\"originalPrice\":500,\"packPrice\":0,\"productCode\":\"33322333\",\"productName\":\"酸奶芒果布丁多规格/中杯\",\"productType\":1,\"sequence\":0,\"skuId\":\"177668119666451212\",\"skuSpecValues\":[{\"productId\":\"177668119666451212\",\"sequence\":2,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"中杯\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146079334624622854\"}],\"status\":1},{\"customerCode\":\"615002-002\",\"finalPrice\":300,\"originalPrice\":300,\"packPrice\":0,\"productCode\":\"6444222\",\"productName\":\"酸奶芒果布丁多规格/小杯\",\"productType\":1,\"sequence\":0,\"skuId\":\"177668119666451216\",\"skuSpecValues\":[{\"productId\":\"177668119666451216\",\"sequence\":3,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"小杯\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146079343903471879\"}],\"status\":2}],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[{\"customerCode\":\"\",\"partnerId\":\"2399\",\"sequence\":1,\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValueVos\":[{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"146079324630644996\",\"specValue\":\"大杯\",\"specValueId\":\"146079329172027653\"},{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"146079324630644996\",\"specValue\":\"中杯\",\"specValueId\":\"146079334624622854\"},{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"146079324630644996\",\"specValue\":\"小杯\",\"specValueId\":\"146079343903471879\"}]}],\"standardGoodsFlag\":2,\"status\":2,\"type\":10,\"unit\":\"\",\"valid\":true,\"version\":0,\"weight\":0},{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"131232\",\"detailText\":\"\",\"finalPrice\":1,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"虚拟商品\",\"nid\":\"010606\",\"options\":\"\",\"originalPrice\":1,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/zfx01.jpg?timestamp=1593832540030\",\"pid\":\"178847112437564185\",\"pkNumber\":1,\"priceSource\":2,\"productAttributeGroupList\":[],\"productCode\":\"\",\"productComboList\":[],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/zfx01.jpg?timestamp=1593832540030\"}],\"productionLocation\":\"\",\"remark\":\"\",\"saleCount\":0,\"sequence\":4,\"skuList\":[],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[],\"standardGoodsFlag\":2,\"status\":2,\"type\":9,\"unit\":\"\",\"valid\":true,\"version\":0,\"weight\":0},{\"barcode\":\"12456434\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"wang02343513246515\",\"detailText\":\"\",\"finalPrice\":1100,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"甜蜜浓意茶\",\"nid\":\"010607\",\"options\":\"\",\"originalPrice\":1100,\"packPrice\":10,\"picture\":\"https://img10.sandload.cn/甜蜜浓意茶.jpg?timestamp=1594117981472\",\"pid\":\"178934687437292347\",\"pkNumber\":1,\"priceSource\":2,\"productAttributeGroupList\":[{\"attributeName\":\"属性\",\"attributeType\":25257,\"attributeValues\":[{\"attributeId\":\"178934687458263869\",\"attributeValue\":\"不另外加糖\",\"customerCode\":\"132432\",\"id\":178940354312265788,\"price\":0,\"sequence\":0,\"status\":2},{\"attributeId\":\"178934687465603903\",\"attributeValue\":\"不另外加糖2\",\"customerCode\":\"434564\",\"id\":178940354317508669,\"price\":0,\"sequence\":1,\"status\":2},{\"attributeId\":\"178934687475041026\",\"attributeValue\":\"不另外加糖3\",\"customerCode\":\"54512\",\"id\":178940354321702974,\"price\":0,\"sequence\":2,\"status\":2},{\"attributeId\":\"178934687482381060\",\"attributeValue\":\"不另外加糖4\",\"customerCode\":\"4564545\",\"id\":178940354326945855,\"price\":0,\"sequence\":3,\"status\":2}],\"customerCode\":\"\",\"maxNumber\":1,\"minNumber\":1,\"must\":1,\"options\":\"\",\"sequence\":25257}],\"productCode\":\"\",\"productComboList\":[],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/甜蜜浓意茶.jpg?timestamp=1594117981472\"}],\"productionLocation\":\"\",\"remark\":\"\",\"saleCount\":0,\"sequence\":5,\"skuList\":[{\"customerCode\":\"wang02343513246515_770979886767531\",\"finalPrice\":1100,\"originalPrice\":1100,\"packPrice\":1100,\"productCode\":\"\",\"productName\":\"甜蜜浓意茶/中杯\",\"productType\":1,\"sequence\":0,\"skuId\":\"178934687415272249\",\"skuSpecValues\":[{\"productId\":\"178934687415272249\",\"sequence\":0,\"specCustomerCode\":\"0001\",\"specId\":\"169042200716419114\",\"specName\":\"规格\",\"specValue\":\"中杯\",\"specValueCustomerCode\":\"178499340291188020\",\"specValueId\":\"178499340291188020\"}],\"status\":2},{\"customerCode\":\"wang02343513246515_797790709707496476874\",\"finalPrice\":1200,\"originalPrice\":1200,\"packPrice\":1200,\"productCode\":\"\",\"productName\":\"甜蜜浓意茶/大杯\",\"productType\":1,\"sequence\":0,\"skuId\":\"178934687386960695\",\"skuSpecValues\":[{\"productId\":\"178934687386960695\",\"sequence\":0,\"specCustomerCode\":\"0001\",\"specId\":\"169042200716419114\",\"specName\":\"规格\",\"specValue\":\"大杯\",\"specValueCustomerCode\":\"178499340291188021\",\"specValueId\":\"178499340291188021\"}],\"status\":1}],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[{\"customerCode\":\"0001\",\"partnerId\":\"2399\",\"sequence\":0,\"specId\":\"169042200716419114\",\"specName\":\"规格\",\"specValueVos\":[{\"customerCode\":\"178499340291188021\",\"sequence\":0,\"specId\":\"169042200716419114\",\"specValue\":\"大杯\",\"specValueId\":\"178499340291188021\"},{\"customerCode\":\"178499340291188020\",\"sequence\":0,\"specId\":\"169042200716419114\",\"specValue\":\"中杯\",\"specValueId\":\"178499340291188020\"}]}],\"standardGoodsFlag\":2,\"status\":2,\"type\":10,\"unit\":\"杯\",\"valid\":true,\"version\":0,\"weight\":0},{\"barcode\":\"1324234\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"W784564616546461\",\"detailText\":\"\",\"finalPrice\":1500,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"棒棒鸡001\",\"nid\":\"010608\",\"options\":\"\",\"originalPrice\":1500,\"packPrice\":100,\"picture\":\"https://img10.sandload.cn/zfx01.jpg?timestamp=1593832540030\",\"pid\":\"178866782811063078\",\"pkNumber\":1,\"priceSource\":2,\"productAttributeGroupList\":[{\"attributeName\":\"属性\",\"attributeType\":25257,\"attributeValues\":[{\"attributeId\":\"178495985942701337\",\"attributeValue\":\"不另外加糖\",\"customerCode\":\"001\",\"id\":178866782835180328,\"price\":0,\"sequence\":0,\"status\":2},{\"attributeId\":\"178495985950041371\",\"attributeValue\":\"不另外加糖2\",\"customerCode\":\"002\",\"id\":178866782842520361,\"price\":0,\"sequence\":1,\"status\":2},{\"attributeId\":\"178495985958429981\",\"attributeValue\":\"西瓜味\",\"customerCode\":\"003\",\"id\":178866782849860394,\"price\":0,\"sequence\":2,\"status\":2},{\"attributeId\":\"178498560910861605\",\"attributeValue\":\"西柚味\",\"customerCode\":\"004\",\"id\":178866782857200427,\"price\":0,\"sequence\":3,\"status\":2}],\"customerCode\":\"\",\"maxNumber\":1,\"minNumber\":1,\"must\":1,\"options\":\"\",\"sequence\":25257}],\"productCode\":\"\",\"productComboList\":[],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/zfx01.jpg?timestamp=1593832540030\"}],\"productionLocation\":\"\",\"remark\":\"\",\"saleCount\":0,\"sequence\":6,\"skuList\":[],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[],\"standardGoodsFlag\":2,\"status\":2,\"type\":1,\"unit\":\"杯\",\"valid\":true,\"version\":0,\"weight\":0}],\"sequence\":1},{\"categoryName\":\"多规格\",\"icon\":\"https://picture.sandload.cn/1589538524241.png\",\"level\":0,\"nid\":\"0102\",\"productInfos\":[{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"148732814396854790\",\"detailText\":\"莓莓奶茶\",\"finalPrice\":2,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[{\"id\":\"145523206443400237\",\"name\":\"星推荐\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"145523213705837614\",\"name\":\"超级好吃\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"}],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"莓莓奶茶\",\"nid\":\"010202\",\"options\":\"\",\"originalPrice\":2,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/莓莓奶茶.jpg?timestamp=1594117977715\",\"pid\":\"148732814396854790\",\"pkNumber\":1,\"priceSource\":2,\"productAttributeGroupList\":[{\"attributeName\":\"温度\",\"attributeType\":23991,\"attributeValues\":[{\"attributeId\":\"154178730067056650\",\"attributeValue\":\"加水\",\"customerCode\":\"0930001\",\"id\":171516019394900259,\"price\":0,\"sequence\":0,\"status\":2},{\"attributeId\":\"152211045677779754\",\"attributeValue\":\"加少冰\",\"customerCode\":\"14\",\"id\":171516019394900260,\"price\":0,\"sequence\":6,\"status\":2},{\"attributeId\":\"152211035658636073\",\"attributeValue\":\"加多冰\",\"customerCode\":\"13\",\"id\":171516019394900261,\"price\":0,\"sequence\":12,\"status\":2}],\"customerCode\":\"\",\"maxNumber\":1,\"minNumber\":1,\"must\":1,\"options\":\"\",\"sequence\":1}],\"productCode\":\"\",\"productComboList\":[],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/莓莓奶茶.jpg?timestamp=1594117977715\"}],\"productionLocation\":\"\",\"remark\":\"莓莓奶茶\",\"saleCount\":0,\"sequence\":1,\"skuList\":[{\"customerCode\":\"171516019198816554\",\"finalPrice\":2,\"originalPrice\":2,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"莓莓奶茶/常规/果粒多\",\"productType\":1,\"sequence\":0,\"skuId\":\"171516019198816554\",\"skuSpecValues\":[{\"productId\":\"171516019198816554\",\"sequence\":1,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"常规\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146641000458297610\"},{\"productId\":\"171516019198816554\",\"sequence\":2,\"specCustomerCode\":\"\",\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValue\":\"果粒多\",\"specValueCustomerCode\":\"\",\"specValueId\":\"151220996618314784\"}],\"status\":3},{\"customerCode\":\"171516019198816560\",\"finalPrice\":2,\"originalPrice\":2,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"莓莓奶茶/常规/椰奶\",\"productType\":1,\"sequence\":0,\"skuId\":\"171516019198816560\",\"skuSpecValues\":[{\"productId\":\"171516019198816560\",\"sequence\":3,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"常规\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146641000458297610\"},{\"productId\":\"171516019198816560\",\"sequence\":4,\"specCustomerCode\":\"\",\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValue\":\"椰奶\",\"specValueCustomerCode\":\"\",\"specValueId\":\"151221001714394145\"}],\"status\":3},{\"customerCode\":\"171516019198816566\",\"finalPrice\":2,\"originalPrice\":2,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"莓莓奶茶/常规/椰果\",\"productType\":1,\"sequence\":0,\"skuId\":\"171516019198816566\",\"skuSpecValues\":[{\"productId\":\"171516019198816566\",\"sequence\":5,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"常规\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146641000458297610\"},{\"productId\":\"171516019198816566\",\"sequence\":6,\"specCustomerCode\":\"\",\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValue\":\"椰果\",\"specValueCustomerCode\":\"\",\"specValueId\":\"148732770020069935\"}],\"status\":3},{\"customerCode\":\"171516019198816572\",\"finalPrice\":2,\"originalPrice\":2,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"莓莓奶茶/小杯/果粒多\",\"productType\":1,\"sequence\":0,\"skuId\":\"171516019198816572\",\"skuSpecValues\":[{\"productId\":\"171516019198816572\",\"sequence\":7,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"小杯\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146079343903471879\"},{\"productId\":\"171516019198816572\",\"sequence\":8,\"specCustomerCode\":\"\",\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValue\":\"果粒多\",\"specValueCustomerCode\":\"\",\"specValueId\":\"151220996618314784\"}],\"status\":3},{\"customerCode\":\"171516019199865091\",\"finalPrice\":2,\"originalPrice\":2,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"莓莓奶茶/小杯/椰奶\",\"productType\":1,\"sequence\":0,\"skuId\":\"171516019199865091\",\"skuSpecValues\":[{\"productId\":\"171516019199865091\",\"sequence\":9,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"小杯\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146079343903471879\"},{\"productId\":\"171516019199865091\",\"sequence\":10,\"specCustomerCode\":\"\",\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValue\":\"椰奶\",\"specValueCustomerCode\":\"\",\"specValueId\":\"151221001714394145\"}],\"status\":3},{\"customerCode\":\"171516019199865097\",\"finalPrice\":2,\"originalPrice\":2,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"莓莓奶茶/小杯/椰果\",\"productType\":1,\"sequence\":0,\"skuId\":\"171516019199865097\",\"skuSpecValues\":[{\"productId\":\"171516019199865097\",\"sequence\":11,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"小杯\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146079343903471879\"},{\"productId\":\"171516019199865097\",\"sequence\":12,\"specCustomerCode\":\"\",\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValue\":\"椰果\",\"specValueCustomerCode\":\"\",\"specValueId\":\"148732770020069935\"}],\"status\":3},{\"customerCode\":\"171516019201962255\",\"finalPrice\":2,\"originalPrice\":2,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"莓莓奶茶/大杯/果粒多\",\"productType\":1,\"sequence\":0,\"skuId\":\"171516019201962255\",\"skuSpecValues\":[{\"productId\":\"171516019201962255\",\"sequence\":13,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"大杯\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146079329172027653\"},{\"productId\":\"171516019201962255\",\"sequence\":14,\"specCustomerCode\":\"\",\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValue\":\"果粒多\",\"specValueCustomerCode\":\"\",\"specValueId\":\"151220996618314784\"}],\"status\":3},{\"customerCode\":\"171516019203010837\",\"finalPrice\":2,\"originalPrice\":2,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"莓莓奶茶/大杯/椰奶\",\"productType\":1,\"sequence\":0,\"skuId\":\"171516019203010837\",\"skuSpecValues\":[{\"productId\":\"171516019203010837\",\"sequence\":15,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"大杯\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146079329172027653\"},{\"productId\":\"171516019203010837\",\"sequence\":16,\"specCustomerCode\":\"\",\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValue\":\"椰奶\",\"specValueCustomerCode\":\"\",\"specValueId\":\"151221001714394145\"}],\"status\":3},{\"customerCode\":\"171516019203010843\",\"finalPrice\":2,\"originalPrice\":2,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"莓莓奶茶/大杯/椰果\",\"productType\":1,\"sequence\":0,\"skuId\":\"171516019203010843\",\"skuSpecValues\":[{\"productId\":\"171516019203010843\",\"sequence\":17,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"大杯\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146079329172027653\"},{\"productId\":\"171516019203010843\",\"sequence\":18,\"specCustomerCode\":\"\",\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValue\":\"椰果\",\"specValueCustomerCode\":\"\",\"specValueId\":\"148732770020069935\"}],\"status\":3}],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[{\"customerCode\":\"\",\"partnerId\":\"2399\",\"sequence\":1,\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValueVos\":[{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"146079324630644996\",\"specValue\":\"常规\",\"specValueId\":\"146641000458297610\"},{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"146079324630644996\",\"specValue\":\"小杯\",\"specValueId\":\"146079343903471879\"},{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"146079324630644996\",\"specValue\":\"大杯\",\"specValueId\":\"146079329172027653\"}]},{\"customerCode\":\"\",\"partnerId\":\"2399\",\"sequence\":2,\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValueVos\":[{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"148732758010729020\",\"specValue\":\"果粒多\",\"specValueId\":\"151220996618314784\"},{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"148732758010729020\",\"specValue\":\"椰奶\",\"specValueId\":\"151221001714394145\"},{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"148732758010729020\",\"specValue\":\"椰果\",\"specValueId\":\"148732770020069935\"}]}],\"standardGoodsFlag\":2,\"status\":3,\"type\":10,\"unit\":\"\",\"valid\":true,\"version\":0,\"weight\":0},{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"162169234554790164\",\"detailText\":\"\",\"finalPrice\":100,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"柚子的多规格多属性烧麦\",\"nid\":\"010204\",\"options\":\"\",\"originalPrice\":300,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/162169234554790164.jpg?timestamp=1594006645751\",\"pid\":\"162169234554790164\",\"pkNumber\":1,\"priceSource\":2,\"productAttributeGroupList\":[{\"attributeName\":\"温度\",\"attributeType\":23991,\"attributeValues\":[{\"attributeId\":\"146950402224558849\",\"attributeValue\":\"冷\",\"customerCode\":\"001\",\"id\":176136866194524213,\"price\":0,\"sequence\":0,\"status\":2},{\"attributeId\":\"152211035658636073\",\"attributeValue\":\"加多冰\",\"customerCode\":\"13\",\"id\":176136866194524214,\"price\":0,\"sequence\":5,\"status\":2}],\"customerCode\":\"\",\"maxNumber\":1,\"minNumber\":1,\"must\":1,\"options\":\"\",\"sequence\":1},{\"attributeName\":\"甜度\",\"attributeType\":23992,\"attributeValues\":[{\"attributeId\":\"152211074907884312\",\"attributeValue\":\"少糖\",\"customerCode\":\"16\",\"id\":176136866194524215,\"price\":0,\"sequence\":10,\"status\":2},{\"attributeId\":\"148028223996012569\",\"attributeValue\":\"无糖，半塘，正常糖\",\"customerCode\":\"003\",\"id\":176136866194524216,\"price\":0,\"sequence\":15,\"status\":2}],\"customerCode\":\"\",\"maxNumber\":1,\"minNumber\":1,\"must\":1,\"options\":\"\",\"sequence\":2}],\"productCode\":\"\",\"productComboList\":[],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/162169234554790164.jpg?timestamp=1594006645751\"}],\"productionLocation\":\"\",\"remark\":\"\",\"saleCount\":0,\"sequence\":4,\"skuList\":[{\"customerCode\":\"163318205105008394\",\"finalPrice\":100,\"originalPrice\":100,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"柚子的多规格多属性烧麦/韩月季6\",\"productType\":1,\"sequence\":0,\"skuId\":\"163318205105008394\",\"skuSpecValues\":[{\"productId\":\"163318205105008394\",\"sequence\":1,\"specCustomerCode\":\"\",\"specId\":\"151944975582594861\",\"specName\":\"韩月季\",\"specValue\":\"韩月季6\",\"specValueCustomerCode\":\"5435436543\",\"specValueId\":\"162168984389722374\"}],\"status\":2},{\"customerCode\":\"163318205105008402\",\"finalPrice\":100,\"originalPrice\":100,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"柚子的多规格多属性烧麦/韩月季4\",\"productType\":1,\"sequence\":0,\"skuId\":\"163318205105008402\",\"skuSpecValues\":[{\"productId\":\"163318205105008402\",\"sequence\":2,\"specCustomerCode\":\"\",\"specId\":\"151944975582594861\",\"specName\":\"韩月季\",\"specValue\":\"韩月季4\",\"specValueCustomerCode\":\"654765464\",\"specValueId\":\"162168936505450756\"}],\"status\":2},{\"customerCode\":\"163318205105008406\",\"finalPrice\":200,\"originalPrice\":200,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"柚子的多规格多属性烧麦/韩月季3\",\"productType\":1,\"sequence\":0,\"skuId\":\"163318205105008406\",\"skuSpecValues\":[{\"productId\":\"163318205105008406\",\"sequence\":3,\"specCustomerCode\":\"\",\"specId\":\"151944975582594861\",\"specName\":\"韩月季\",\"specValue\":\"韩月季3\",\"specValueCustomerCode\":\"543543\",\"specValueId\":\"162168928123134211\"}],\"status\":2},{\"customerCode\":\"163318205105008410\",\"finalPrice\":200,\"originalPrice\":200,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"柚子的多规格多属性烧麦/韩月季2\",\"productType\":1,\"sequence\":0,\"skuId\":\"163318205105008410\",\"skuSpecValues\":[{\"productId\":\"163318205105008410\",\"sequence\":4,\"specCustomerCode\":\"\",\"specId\":\"151944975582594861\",\"specName\":\"韩月季\",\"specValue\":\"韩月季2\",\"specValueCustomerCode\":\"325325432\",\"specValueId\":\"162168918680707330\"}],\"status\":2},{\"customerCode\":\"163318205105008414\",\"finalPrice\":300,\"originalPrice\":300,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"柚子的多规格多属性烧麦/韩月季1\",\"productType\":1,\"sequence\":0,\"skuId\":\"163318205105008414\",\"skuSpecValues\":[{\"productId\":\"163318205105008414\",\"sequence\":5,\"specCustomerCode\":\"\",\"specId\":\"151944975582594861\",\"specName\":\"韩月季\",\"specValue\":\"韩月季1\",\"specValueCustomerCode\":\"35325252\",\"specValueId\":\"162168910370742529\"}],\"status\":2}],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[{\"customerCode\":\"\",\"partnerId\":\"2399\",\"sequence\":1,\"specId\":\"151944975582594861\",\"specName\":\"韩月季\",\"specValueVos\":[{\"customerCode\":\"5435436543\",\"sequence\":0,\"specId\":\"151944975582594861\",\"specValue\":\"韩月季6\",\"specValueId\":\"162168984389722374\"},{\"customerCode\":\"654765464\",\"sequence\":0,\"specId\":\"151944975582594861\",\"specValue\":\"韩月季4\",\"specValueId\":\"162168936505450756\"},{\"customerCode\":\"543543\",\"sequence\":0,\"specId\":\"151944975582594861\",\"specValue\":\"韩月季3\",\"specValueId\":\"162168928123134211\"},{\"customerCode\":\"325325432\",\"sequence\":0,\"specId\":\"151944975582594861\",\"specValue\":\"韩月季2\",\"specValueId\":\"162168918680707330\"},{\"customerCode\":\"35325252\",\"sequence\":0,\"specId\":\"151944975582594861\",\"specValue\":\"韩月季1\",\"specValueId\":\"162168910370742529\"}]}],\"standardGoodsFlag\":2,\"status\":2,\"type\":10,\"unit\":\"g\",\"valid\":true,\"version\":0,\"weight\":0},{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"163349679547060021\",\"detailText\":\"\",\"finalPrice\":1,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"柚子多规格\",\"nid\":\"010206\",\"options\":\"\",\"originalPrice\":2,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/163349679547060021.jpg?timestamp=1594006657716\",\"pid\":\"163349679547060021\",\"pkNumber\":1,\"priceSource\":2,\"productAttributeGroupList\":[],\"productCode\":\"\",\"productComboList\":[],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/163349679547060021.jpg?timestamp=1594006657716\"}],\"productionLocation\":\"\",\"remark\":\"\",\"saleCount\":0,\"sequence\":6,\"skuList\":[{\"customerCode\":\"163349679564885815\",\"finalPrice\":2,\"originalPrice\":2,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"柚子多规格/中杯\",\"productType\":1,\"sequence\":0,\"skuId\":\"163349679564885815\",\"skuSpecValues\":[{\"productId\":\"163349679564885815\",\"sequence\":1,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"中杯\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146079334624622854\"}],\"status\":2},{\"customerCode\":\"163349679564885819\",\"finalPrice\":1,\"originalPrice\":1,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"柚子多规格/大杯\",\"productType\":1,\"sequence\":0,\"skuId\":\"163349679564885819\",\"skuSpecValues\":[{\"productId\":\"163349679564885819\",\"sequence\":2,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"大杯\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146079329172027653\"}],\"status\":2}],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[{\"customerCode\":\"\",\"partnerId\":\"2399\",\"sequence\":1,\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValueVos\":[{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"146079324630644996\",\"specValue\":\"中杯\",\"specValueId\":\"146079334624622854\"},{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"146079324630644996\",\"specValue\":\"大杯\",\"specValueId\":\"146079329172027653\"}]}],\"standardGoodsFlag\":2,\"status\":2,\"type\":10,\"unit\":\"g\",\"valid\":true,\"version\":0,\"weight\":0},{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"170685654373563905\",\"detailText\":\"付电费的是\",\"finalPrice\":14,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"柚子的多规格蟹\",\"nid\":\"01020A\",\"options\":\"\",\"originalPrice\":33,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/柚子的多规格蟹.jpg?timestamp=1594106066068\",\"pid\":\"170685654373563905\",\"pkNumber\":1,\"priceSource\":2,\"productAttributeGroupList\":[],\"productCode\":\"\",\"productComboList\":[],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/柚子的多规格蟹.jpg?timestamp=1594106066068\"}],\"productionLocation\":\"\",\"remark\":\"是发的说法是的\",\"saleCount\":0,\"sequence\":10,\"skuList\":[{\"customerCode\":\"179295445560866825\",\"finalPrice\":30,\"originalPrice\":30,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"柚子的多规格蟹/果粒多/中份\",\"productType\":1,\"sequence\":0,\"skuId\":\"179295445560866825\",\"skuSpecValues\":[{\"productId\":\"179295445560866825\",\"sequence\":1,\"specCustomerCode\":\"\",\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValue\":\"果粒多\",\"specValueCustomerCode\":\"\",\"specValueId\":\"151220996618314784\"},{\"productId\":\"179295445560866825\",\"sequence\":2,\"specCustomerCode\":\"\",\"specId\":\"146153456846207281\",\"specName\":\"分量\",\"specValue\":\"中份\",\"specValueCustomerCode\":\"\",\"specValueId\":\"150771074445931810\"}],\"status\":2},{\"customerCode\":\"179295445560866831\",\"finalPrice\":22,\"originalPrice\":22,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"柚子的多规格蟹/果粒多/小份\",\"productType\":1,\"sequence\":0,\"skuId\":\"179295445560866831\",\"skuSpecValues\":[{\"productId\":\"179295445560866831\",\"sequence\":3,\"specCustomerCode\":\"\",\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValue\":\"果粒多\",\"specValueCustomerCode\":\"\",\"specValueId\":\"151220996618314784\"},{\"productId\":\"179295445560866831\",\"sequence\":4,\"specCustomerCode\":\"\",\"specId\":\"146153456846207281\",\"specName\":\"分量\",\"specValue\":\"小份\",\"specValueCustomerCode\":\"\",\"specValueId\":\"150771053955708193\"}],\"status\":2},{\"customerCode\":\"179295445560866837\",\"finalPrice\":24,\"originalPrice\":24,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"柚子的多规格蟹/果粒多/大份\",\"productType\":1,\"sequence\":0,\"skuId\":\"179295445560866837\",\"skuSpecValues\":[{\"productId\":\"179295445560866837\",\"sequence\":5,\"specCustomerCode\":\"\",\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValue\":\"果粒多\",\"specValueCustomerCode\":\"\",\"specValueId\":\"151220996618314784\"},{\"productId\":\"179295445560866837\",\"sequence\":6,\"specCustomerCode\":\"\",\"specId\":\"146153456846207281\",\"specName\":\"分量\",\"specValue\":\"大份\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146153466182727986\"}],\"status\":2},{\"customerCode\":\"179295445560866843\",\"finalPrice\":25,\"originalPrice\":25,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"柚子的多规格蟹/椰奶/中份\",\"productType\":1,\"sequence\":0,\"skuId\":\"179295445560866843\",\"skuSpecValues\":[{\"productId\":\"179295445560866843\",\"sequence\":7,\"specCustomerCode\":\"\",\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValue\":\"椰奶\",\"specValueCustomerCode\":\"\",\"specValueId\":\"151221001714394145\"},{\"productId\":\"179295445560866843\",\"sequence\":8,\"specCustomerCode\":\"\",\"specId\":\"146153456846207281\",\"specName\":\"分量\",\"specValue\":\"中份\",\"specValueCustomerCode\":\"\",\"specValueId\":\"150771074445931810\"}],\"status\":2},{\"customerCode\":\"179295445560866849\",\"finalPrice\":27,\"originalPrice\":27,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"柚子的多规格蟹/椰奶/小份\",\"productType\":1,\"sequence\":0,\"skuId\":\"179295445560866849\",\"skuSpecValues\":[{\"productId\":\"179295445560866849\",\"sequence\":9,\"specCustomerCode\":\"\",\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValue\":\"椰奶\",\"specValueCustomerCode\":\"\",\"specValueId\":\"151221001714394145\"},{\"productId\":\"179295445560866849\",\"sequence\":10,\"specCustomerCode\":\"\",\"specId\":\"146153456846207281\",\"specName\":\"分量\",\"specValue\":\"小份\",\"specValueCustomerCode\":\"\",\"specValueId\":\"150771053955708193\"}],\"status\":2},{\"customerCode\":\"179295445560866855\",\"finalPrice\":28,\"originalPrice\":28,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"柚子的多规格蟹/椰奶/大份\",\"productType\":1,\"sequence\":0,\"skuId\":\"179295445560866855\",\"skuSpecValues\":[{\"productId\":\"179295445560866855\",\"sequence\":11,\"specCustomerCode\":\"\",\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValue\":\"椰奶\",\"specValueCustomerCode\":\"\",\"specValueId\":\"151221001714394145\"},{\"productId\":\"179295445560866855\",\"sequence\":12,\"specCustomerCode\":\"\",\"specId\":\"146153456846207281\",\"specName\":\"分量\",\"specValue\":\"大份\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146153466182727986\"}],\"status\":2},{\"customerCode\":\"179295445560866861\",\"finalPrice\":33,\"originalPrice\":33,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"柚子的多规格蟹/椰果/中份\",\"productType\":1,\"sequence\":0,\"skuId\":\"179295445560866861\",\"skuSpecValues\":[{\"productId\":\"179295445560866861\",\"sequence\":13,\"specCustomerCode\":\"\",\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValue\":\"椰果\",\"specValueCustomerCode\":\"\",\"specValueId\":\"148732770020069935\"},{\"productId\":\"179295445560866861\",\"sequence\":14,\"specCustomerCode\":\"\",\"specId\":\"146153456846207281\",\"specName\":\"分量\",\"specValue\":\"中份\",\"specValueCustomerCode\":\"\",\"specValueId\":\"150771074445931810\"}],\"status\":2},{\"customerCode\":\"179295445560866867\",\"finalPrice\":27,\"originalPrice\":27,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"柚子的多规格蟹/椰果/小份\",\"productType\":1,\"sequence\":0,\"skuId\":\"179295445560866867\",\"skuSpecValues\":[{\"productId\":\"179295445560866867\",\"sequence\":15,\"specCustomerCode\":\"\",\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValue\":\"椰果\",\"specValueCustomerCode\":\"\",\"specValueId\":\"148732770020069935\"},{\"productId\":\"179295445560866867\",\"sequence\":16,\"specCustomerCode\":\"\",\"specId\":\"146153456846207281\",\"specName\":\"分量\",\"specValue\":\"小份\",\"specValueCustomerCode\":\"\",\"specValueId\":\"150771053955708193\"}],\"status\":2},{\"customerCode\":\"179295445560866873\",\"finalPrice\":14,\"originalPrice\":14,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"柚子的多规格蟹/椰果/大份\",\"productType\":1,\"sequence\":0,\"skuId\":\"179295445560866873\",\"skuSpecValues\":[{\"productId\":\"179295445560866873\",\"sequence\":17,\"specCustomerCode\":\"\",\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValue\":\"椰果\",\"specValueCustomerCode\":\"\",\"specValueId\":\"148732770020069935\"},{\"productId\":\"179295445560866873\",\"sequence\":18,\"specCustomerCode\":\"\",\"specId\":\"146153456846207281\",\"specName\":\"分量\",\"specValue\":\"大份\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146153466182727986\"}],\"status\":2}],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[{\"customerCode\":\"\",\"partnerId\":\"2399\",\"sequence\":1,\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValueVos\":[{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"148732758010729020\",\"specValue\":\"果粒多\",\"specValueId\":\"151220996618314784\"},{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"148732758010729020\",\"specValue\":\"椰奶\",\"specValueId\":\"151221001714394145\"},{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"148732758010729020\",\"specValue\":\"椰果\",\"specValueId\":\"148732770020069935\"}]},{\"customerCode\":\"\",\"partnerId\":\"2399\",\"sequence\":2,\"specId\":\"146153456846207281\",\"specName\":\"分量\",\"specValueVos\":[{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"146153456846207281\",\"specValue\":\"中份\",\"specValueId\":\"150771074445931810\"},{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"146153456846207281\",\"specValue\":\"小份\",\"specValueId\":\"150771053955708193\"},{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"146153456846207281\",\"specValue\":\"大份\",\"specValueId\":\"146153466182727986\"}]}],\"standardGoodsFlag\":2,\"status\":2,\"type\":10,\"unit\":\"g\",\"valid\":true,\"version\":0,\"weight\":0},{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"150681315411293493\",\"detailText\":\"\",\"finalPrice\":40,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[{\"id\":\"145523206443400237\",\"name\":\"星推荐\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"145523213705837614\",\"name\":\"超级好吃\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"145523225585155119\",\"name\":\"不吃会后悔的呀呀呀呀\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"147498422922034472\",\"name\":\"测试标签3\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"}],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"0.5毛芝麻丸\",\"nid\":\"01020B\",\"options\":\"\",\"originalPrice\":8000,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/0.5毛芝麻丸.jpg?timestamp=1594106064755\",\"pid\":\"150681315411293493\",\"pkNumber\":1,\"priceSource\":2,\"productAttributeGroupList\":[],\"productCode\":\"\",\"productComboList\":[],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/0.5毛芝麻丸.jpg?timestamp=1594106064755\"}],\"productionLocation\":\"\",\"remark\":\"多规格\",\"saleCount\":0,\"sequence\":11,\"skuList\":[{\"customerCode\":\"150681315449042235\",\"finalPrice\":50,\"originalPrice\":50,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"0.5毛芝麻丸/椰果/小分\",\"productType\":1,\"sequence\":0,\"skuId\":\"150681315449042235\",\"skuSpecValues\":[{\"productId\":\"150681315449042235\",\"sequence\":1,\"specCustomerCode\":\"\",\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValue\":\"椰果\",\"specValueCustomerCode\":\"\",\"specValueId\":\"148732770020069935\"},{\"productId\":\"150681315449042235\",\"sequence\":2,\"specCustomerCode\":\"\",\"specId\":\"146153456846207281\",\"specName\":\"分量\",\"specValue\":\"小分\",\"specValueCustomerCode\":\"\",\"specValueId\":\"148126376254307341\"}],\"status\":2},{\"customerCode\":\"150681315451139330\",\"finalPrice\":40,\"originalPrice\":40,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"0.5毛芝麻丸/椰果/中分\",\"productType\":1,\"sequence\":0,\"skuId\":\"150681315451139330\",\"skuSpecValues\":[{\"productId\":\"150681315451139330\",\"sequence\":3,\"specCustomerCode\":\"\",\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValue\":\"椰果\",\"specValueCustomerCode\":\"\",\"specValueId\":\"148732770020069935\"},{\"productId\":\"150681315451139330\",\"sequence\":4,\"specCustomerCode\":\"\",\"specId\":\"146153456846207281\",\"specName\":\"分量\",\"specValue\":\"中分\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146153478998423859\"}],\"status\":2},{\"customerCode\":\"150681315451139336\",\"finalPrice\":60,\"originalPrice\":60,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"0.5毛芝麻丸/椰果/大份\",\"productType\":1,\"sequence\":0,\"skuId\":\"150681315451139336\",\"skuSpecValues\":[{\"productId\":\"150681315451139336\",\"sequence\":5,\"specCustomerCode\":\"\",\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValue\":\"椰果\",\"specValueCustomerCode\":\"\",\"specValueId\":\"148732770020069935\"},{\"productId\":\"150681315451139336\",\"sequence\":6,\"specCustomerCode\":\"\",\"specId\":\"146153456846207281\",\"specName\":\"分量\",\"specValue\":\"大份\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146153466182727986\"}],\"status\":2},{\"customerCode\":\"150681315452187918\",\"finalPrice\":70,\"originalPrice\":70,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"0.5毛芝麻丸/珍珠/小分\",\"productType\":1,\"sequence\":0,\"skuId\":\"150681315452187918\",\"skuSpecValues\":[{\"productId\":\"150681315452187918\",\"sequence\":7,\"specCustomerCode\":\"\",\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValue\":\"珍珠\",\"specValueCustomerCode\":\"\",\"specValueId\":\"148732764875756078\"},{\"productId\":\"150681315452187918\",\"sequence\":8,\"specCustomerCode\":\"\",\"specId\":\"146153456846207281\",\"specName\":\"分量\",\"specValue\":\"小分\",\"specValueCustomerCode\":\"\",\"specValueId\":\"148126376254307341\"}],\"status\":2},{\"customerCode\":\"150681315452187924\",\"finalPrice\":8000,\"originalPrice\":8000,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"0.5毛芝麻丸/珍珠/中分\",\"productType\":1,\"sequence\":0,\"skuId\":\"150681315452187924\",\"skuSpecValues\":[{\"productId\":\"150681315452187924\",\"sequence\":9,\"specCustomerCode\":\"\",\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValue\":\"珍珠\",\"specValueCustomerCode\":\"\",\"specValueId\":\"148732764875756078\"},{\"productId\":\"150681315452187924\",\"sequence\":10,\"specCustomerCode\":\"\",\"specId\":\"146153456846207281\",\"specName\":\"分量\",\"specValue\":\"中分\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146153478998423859\"}],\"status\":2},{\"customerCode\":\"150681315452187930\",\"finalPrice\":90,\"originalPrice\":90,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"0.5毛芝麻丸/珍珠/大份\",\"productType\":1,\"sequence\":0,\"skuId\":\"150681315452187930\",\"skuSpecValues\":[{\"productId\":\"150681315452187930\",\"sequence\":11,\"specCustomerCode\":\"\",\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValue\":\"珍珠\",\"specValueCustomerCode\":\"\",\"specValueId\":\"148732764875756078\"},{\"productId\":\"150681315452187930\",\"sequence\":12,\"specCustomerCode\":\"\",\"specId\":\"146153456846207281\",\"specName\":\"分量\",\"specValue\":\"大份\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146153466182727986\"}],\"status\":2}],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[{\"customerCode\":\"\",\"partnerId\":\"2399\",\"sequence\":1,\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValueVos\":[{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"148732758010729020\",\"specValue\":\"椰果\",\"specValueId\":\"148732770020069935\"},{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"148732758010729020\",\"specValue\":\"珍珠\",\"specValueId\":\"148732764875756078\"}]},{\"customerCode\":\"\",\"partnerId\":\"2399\",\"sequence\":2,\"specId\":\"146153456846207281\",\"specName\":\"分量\",\"specValueVos\":[{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"146153456846207281\",\"specValue\":\"小分\",\"specValueId\":\"148126376254307341\"},{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"146153456846207281\",\"specValue\":\"中分\",\"specValueId\":\"146153478998423859\"},{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"146153456846207281\",\"specValue\":\"大份\",\"specValueId\":\"146153466182727986\"}]}],\"standardGoodsFlag\":2,\"status\":2,\"type\":10,\"unit\":\"\",\"valid\":true,\"version\":0,\"weight\":0},{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"170796389158266413\",\"detailText\":\"梵蒂冈烦得很返回\",\"finalPrice\":2,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[{\"id\":\"166977426006499363\",\"name\":\"吃了不后悔系列\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"151661265434098710\",\"name\":\"个很丰富\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"147498430520016169\",\"name\":\"测试标签4\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"}],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"柚子的多规格螃蟹\",\"nid\":\"01020C\",\"options\":\"\",\"originalPrice\":2,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/柚子的多规格螃蟹.jpg?timestamp=1594117985325\",\"pid\":\"170796389158266413\",\"pkNumber\":1,\"priceSource\":2,\"productAttributeGroupList\":[{\"attributeName\":\"口味\",\"attributeType\":20,\"attributeValues\":[{\"attributeId\":\"170058292610055471\",\"attributeValue\":\"孜然味\",\"customerCode\":\"543543\",\"id\":170796389189723697,\"price\":0,\"sequence\":0,\"status\":2},{\"attributeId\":\"167495969659879432\",\"attributeValue\":\"巧克力味\",\"customerCode\":\"65467456464\",\"id\":170796389189723698,\"price\":0,\"sequence\":1,\"status\":2},{\"attributeId\":\"167495947781341191\",\"attributeValue\":\"香蕉味\",\"customerCode\":\"5745745754\",\"id\":170796389189723699,\"price\":0,\"sequence\":2,\"status\":2},{\"attributeId\":\"167495938104033286\",\"attributeValue\":\"烧烤味\",\"customerCode\":\"475643\",\"id\":170796389189723700,\"price\":0,\"sequence\":3,\"status\":2}],\"customerCode\":\"2424\",\"maxNumber\":1,\"minNumber\":1,\"must\":1,\"options\":\"\",\"sequence\":20}],\"productCode\":\"\",\"productComboList\":[],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/柚子的多规格螃蟹.jpg?timestamp=1594117985325\"}],\"productionLocation\":\"\",\"remark\":\"方师傅的说法\",\"saleCount\":0,\"sequence\":12,\"skuList\":[{\"customerCode\":\"170796389234812470\",\"finalPrice\":2,\"originalPrice\":2,\"packPrice\":1,\"productCode\":\"\",\"productName\":\"柚子的多规格螃蟹/中杯\",\"productType\":1,\"sequence\":0,\"skuId\":\"170796389234812470\",\"skuSpecValues\":[{\"productId\":\"170796389234812470\",\"sequence\":1,\"specCustomerCode\":\"hyjbx\",\"specId\":\"170796304154404393\",\"specName\":\"韩月季_杯型\",\"specValue\":\"中杯\",\"specValueCustomerCode\":\"22\",\"specValueId\":\"170796319324153387\"}],\"status\":2},{\"customerCode\":\"170796389234812474\",\"finalPrice\":2,\"originalPrice\":2,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"柚子的多规格螃蟹/大杯\",\"productType\":1,\"sequence\":0,\"skuId\":\"170796389234812474\",\"skuSpecValues\":[{\"productId\":\"170796389234812474\",\"sequence\":2,\"specCustomerCode\":\"hyjbx\",\"specId\":\"170796304154404393\",\"specName\":\"韩月季_杯型\",\"specValue\":\"大杯\",\"specValueCustomerCode\":\"33\",\"specValueId\":\"170796324362561068\"}],\"status\":2},{\"customerCode\":\"170796389234812478\",\"finalPrice\":2,\"originalPrice\":2,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"柚子的多规格螃蟹/小杯\",\"productType\":1,\"sequence\":0,\"skuId\":\"170796389234812478\",\"skuSpecValues\":[{\"productId\":\"170796389234812478\",\"sequence\":3,\"specCustomerCode\":\"hyjbx\",\"specId\":\"170796304154404393\",\"specName\":\"韩月季_杯型\",\"specValue\":\"小杯\",\"specValueCustomerCode\":\"11\",\"specValueId\":\"170796313618851370\"}],\"status\":2}],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[{\"customerCode\":\"hyjbx\",\"partnerId\":\"2399\",\"sequence\":1,\"specId\":\"170796304154404393\",\"specName\":\"韩月季_杯型\",\"specValueVos\":[{\"customerCode\":\"22\",\"sequence\":0,\"specId\":\"170796304154404393\",\"specValue\":\"中杯\",\"specValueId\":\"170796319324153387\"},{\"customerCode\":\"33\",\"sequence\":0,\"specId\":\"170796304154404393\",\"specValue\":\"大杯\",\"specValueId\":\"170796324362561068\"},{\"customerCode\":\"11\",\"sequence\":0,\"specId\":\"170796304154404393\",\"specValue\":\"小杯\",\"specValueId\":\"170796313618851370\"}]}],\"standardGoodsFlag\":2,\"status\":2,\"type\":10,\"unit\":\"g\",\"valid\":true,\"version\":0,\"weight\":0},{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"170871084079384333\",\"detailText\":\"测试\",\"finalPrice\":50,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[{\"id\":\"154180349566474252\",\"name\":\"人气王\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"154908048577615907\",\"name\":\"招牌菜\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"166977415240769570\",\"name\":\"不好吃不要钱1\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"166977426006499363\",\"name\":\"吃了不后悔系列\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"}],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"柚子的牛奶三兄弟\",\"nid\":\"01020D\",\"options\":\"\",\"originalPrice\":70,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/柚子的牛奶三兄弟.jpg?timestamp=1594117967252\",\"pid\":\"170871084079384333\",\"pkNumber\":1,\"priceSource\":2,\"productAttributeGroupList\":[],\"productCode\":\"\",\"productComboList\":[],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/柚子的牛奶三兄弟.jpg?timestamp=1594117967252\"}],\"productionLocation\":\"\",\"remark\":\"测试\",\"saleCount\":0,\"sequence\":13,\"skuList\":[{\"customerCode\":\"170871084140201747\",\"finalPrice\":50,\"originalPrice\":50,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"柚子的牛奶三兄弟/小杯/珍珠\",\"productType\":1,\"sequence\":0,\"skuId\":\"170871084140201747\",\"skuSpecValues\":[{\"productId\":\"170871084140201747\",\"sequence\":1,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"小杯\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146079343903471879\"},{\"productId\":\"170871084140201747\",\"sequence\":2,\"specCustomerCode\":\"\",\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValue\":\"珍珠\",\"specValueCustomerCode\":\"\",\"specValueId\":\"148732764875756078\"}],\"status\":1},{\"customerCode\":\"170871084140201753\",\"finalPrice\":50,\"originalPrice\":50,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"柚子的牛奶三兄弟/小杯/椰果\",\"productType\":1,\"sequence\":0,\"skuId\":\"170871084140201753\",\"skuSpecValues\":[{\"productId\":\"170871084140201753\",\"sequence\":3,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"小杯\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146079343903471879\"},{\"productId\":\"170871084140201753\",\"sequence\":4,\"specCustomerCode\":\"\",\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValue\":\"椰果\",\"specValueCustomerCode\":\"\",\"specValueId\":\"148732770020069935\"}],\"status\":1},{\"customerCode\":\"170871084140201759\",\"finalPrice\":50,\"originalPrice\":50,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"柚子的牛奶三兄弟/小杯/椰奶\",\"productType\":1,\"sequence\":0,\"skuId\":\"170871084140201759\",\"skuSpecValues\":[{\"productId\":\"170871084140201759\",\"sequence\":5,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"小杯\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146079343903471879\"},{\"productId\":\"170871084140201759\",\"sequence\":6,\"specCustomerCode\":\"\",\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValue\":\"椰奶\",\"specValueCustomerCode\":\"\",\"specValueId\":\"151221001714394145\"}],\"status\":2},{\"customerCode\":\"170871084140201765\",\"finalPrice\":60,\"originalPrice\":60,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"柚子的牛奶三兄弟/中杯/珍珠\",\"productType\":1,\"sequence\":0,\"skuId\":\"170871084140201765\",\"skuSpecValues\":[{\"productId\":\"170871084140201765\",\"sequence\":7,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"中杯\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146079334624622854\"},{\"productId\":\"170871084140201765\",\"sequence\":8,\"specCustomerCode\":\"\",\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValue\":\"珍珠\",\"specValueCustomerCode\":\"\",\"specValueId\":\"148732764875756078\"}],\"status\":2},{\"customerCode\":\"170871084140201771\",\"finalPrice\":60,\"originalPrice\":60,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"柚子的牛奶三兄弟/中杯/椰果\",\"productType\":1,\"sequence\":0,\"skuId\":\"170871084140201771\",\"skuSpecValues\":[{\"productId\":\"170871084140201771\",\"sequence\":9,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"中杯\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146079334624622854\"},{\"productId\":\"170871084140201771\",\"sequence\":10,\"specCustomerCode\":\"\",\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValue\":\"椰果\",\"specValueCustomerCode\":\"\",\"specValueId\":\"148732770020069935\"}],\"status\":2},{\"customerCode\":\"170871084140201777\",\"finalPrice\":60,\"originalPrice\":60,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"柚子的牛奶三兄弟/中杯/椰奶\",\"productType\":1,\"sequence\":0,\"skuId\":\"170871084140201777\",\"skuSpecValues\":[{\"productId\":\"170871084140201777\",\"sequence\":11,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"中杯\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146079334624622854\"},{\"productId\":\"170871084140201777\",\"sequence\":12,\"specCustomerCode\":\"\",\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValue\":\"椰奶\",\"specValueCustomerCode\":\"\",\"specValueId\":\"151221001714394145\"}],\"status\":2},{\"customerCode\":\"170871084140201783\",\"finalPrice\":70,\"originalPrice\":70,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"柚子的牛奶三兄弟/大杯/珍珠\",\"productType\":1,\"sequence\":0,\"skuId\":\"170871084140201783\",\"skuSpecValues\":[{\"productId\":\"170871084140201783\",\"sequence\":13,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"大杯\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146079329172027653\"},{\"productId\":\"170871084140201783\",\"sequence\":14,\"specCustomerCode\":\"\",\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValue\":\"珍珠\",\"specValueCustomerCode\":\"\",\"specValueId\":\"148732764875756078\"}],\"status\":2},{\"customerCode\":\"170871084140201789\",\"finalPrice\":70,\"originalPrice\":70,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"柚子的牛奶三兄弟/大杯/椰果\",\"productType\":1,\"sequence\":0,\"skuId\":\"170871084140201789\",\"skuSpecValues\":[{\"productId\":\"170871084140201789\",\"sequence\":15,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"大杯\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146079329172027653\"},{\"productId\":\"170871084140201789\",\"sequence\":16,\"specCustomerCode\":\"\",\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValue\":\"椰果\",\"specValueCustomerCode\":\"\",\"specValueId\":\"148732770020069935\"}],\"status\":2},{\"customerCode\":\"170871084141250308\",\"finalPrice\":70,\"originalPrice\":70,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"柚子的牛奶三兄弟/大杯/椰奶\",\"productType\":1,\"sequence\":0,\"skuId\":\"170871084141250308\",\"skuSpecValues\":[{\"productId\":\"170871084141250308\",\"sequence\":17,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"大杯\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146079329172027653\"},{\"productId\":\"170871084141250308\",\"sequence\":18,\"specCustomerCode\":\"\",\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValue\":\"椰奶\",\"specValueCustomerCode\":\"\",\"specValueId\":\"151221001714394145\"}],\"status\":2}],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[{\"customerCode\":\"\",\"partnerId\":\"2399\",\"sequence\":1,\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValueVos\":[{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"146079324630644996\",\"specValue\":\"小杯\",\"specValueId\":\"146079343903471879\"},{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"146079324630644996\",\"specValue\":\"中杯\",\"specValueId\":\"146079334624622854\"},{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"146079324630644996\",\"specValue\":\"大杯\",\"specValueId\":\"146079329172027653\"}]},{\"customerCode\":\"\",\"partnerId\":\"2399\",\"sequence\":2,\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValueVos\":[{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"148732758010729020\",\"specValue\":\"珍珠\",\"specValueId\":\"148732764875756078\"},{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"148732758010729020\",\"specValue\":\"椰果\",\"specValueId\":\"148732770020069935\"},{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"148732758010729020\",\"specValue\":\"椰奶\",\"specValueId\":\"151221001714394145\"}]}],\"standardGoodsFlag\":2,\"status\":2,\"type\":10,\"unit\":\"g\",\"valid\":true,\"version\":0,\"weight\":0},{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"170870916356507406\",\"detailText\":\"\",\"finalPrice\":1,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"柚子的红豆奶茶\",\"nid\":\"01020E\",\"options\":\"\",\"originalPrice\":3,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/柚子的红豆奶茶.jpg?timestamp=1594117986276\",\"pid\":\"170870916356507406\",\"pkNumber\":1,\"priceSource\":2,\"productAttributeGroupList\":[],\"productCode\":\"\",\"productComboList\":[],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/柚子的红豆奶茶.jpg?timestamp=1594117986276\"}],\"productionLocation\":\"\",\"remark\":\"\",\"saleCount\":0,\"sequence\":14,\"skuList\":[{\"customerCode\":\"170870916407887632\",\"finalPrice\":1,\"originalPrice\":1,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"柚子的红豆奶茶/小杯\",\"productType\":1,\"sequence\":0,\"skuId\":\"170870916407887632\",\"skuSpecValues\":[{\"productId\":\"170870916407887632\",\"sequence\":1,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"小杯\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146079343903471879\"}],\"status\":3},{\"customerCode\":\"170870916407887636\",\"finalPrice\":2,\"originalPrice\":2,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"柚子的红豆奶茶/中杯\",\"productType\":1,\"sequence\":0,\"skuId\":\"170870916407887636\",\"skuSpecValues\":[{\"productId\":\"170870916407887636\",\"sequence\":2,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"中杯\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146079334624622854\"}],\"status\":2},{\"customerCode\":\"170870916407887640\",\"finalPrice\":3,\"originalPrice\":3,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"柚子的红豆奶茶/大杯\",\"productType\":1,\"sequence\":0,\"skuId\":\"170870916407887640\",\"skuSpecValues\":[{\"productId\":\"170870916407887640\",\"sequence\":3,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"大杯\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146079329172027653\"}],\"status\":2}],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[{\"customerCode\":\"\",\"partnerId\":\"2399\",\"sequence\":1,\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValueVos\":[{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"146079324630644996\",\"specValue\":\"小杯\",\"specValueId\":\"146079343903471879\"},{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"146079324630644996\",\"specValue\":\"中杯\",\"specValueId\":\"146079334624622854\"},{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"146079324630644996\",\"specValue\":\"大杯\",\"specValueId\":\"146079329172027653\"}]}],\"standardGoodsFlag\":2,\"status\":2,\"type\":10,\"unit\":\"g\",\"valid\":true,\"version\":0,\"weight\":0},{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"172137344068178228\",\"detailText\":\"包你吃得饱\",\"finalPrice\":690,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[{\"id\":\"145523213705837614\",\"name\":\"超级好吃\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"147498430520016169\",\"name\":\"测试标签4\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"166977426006499363\",\"name\":\"吃了不后悔系列\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"}],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"柚子的豪华煎饼\",\"nid\":\"01020F\",\"options\":\"\",\"originalPrice\":690,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/柚子的豪华煎饼.jpg?timestamp=1594106061819\",\"pid\":\"172137344068178228\",\"pkNumber\":1,\"priceSource\":2,\"productAttributeGroupList\":[],\"productCode\":\"\",\"productComboList\":[],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/柚子的豪华煎饼.jpg?timestamp=1594106061819\"}],\"productionLocation\":\"\",\"remark\":\"任你加\",\"saleCount\":0,\"sequence\":15,\"skuList\":[{\"customerCode\":\"172137344124801334\",\"finalPrice\":700,\"originalPrice\":700,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"柚子的豪华煎饼/加培根\",\"productType\":1,\"sequence\":0,\"skuId\":\"172137344124801334\",\"skuSpecValues\":[{\"productId\":\"172137344124801334\",\"sequence\":1,\"specCustomerCode\":\"34325432\",\"specId\":\"172137235157831981\",\"specName\":\"加配料\",\"specValue\":\"加培根\",\"specValueCustomerCode\":\"6547633\",\"specValueId\":\"172137265104113969\"}],\"status\":1},{\"customerCode\":\"172137344124801338\",\"finalPrice\":850,\"originalPrice\":850,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"柚子的豪华煎饼/加生菜\",\"productType\":1,\"sequence\":0,\"skuId\":\"172137344124801338\",\"skuSpecValues\":[{\"productId\":\"172137344124801338\",\"sequence\":2,\"specCustomerCode\":\"34325432\",\"specId\":\"172137235157831981\",\"specName\":\"加配料\",\"specValue\":\"加生菜\",\"specValueCustomerCode\":\"53532\",\"specValueId\":\"172137245718040878\"}],\"status\":1},{\"customerCode\":\"172137344124801342\",\"finalPrice\":550,\"originalPrice\":550,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"柚子的豪华煎饼/加烤肠\",\"productType\":1,\"sequence\":0,\"skuId\":\"172137344124801342\",\"skuSpecValues\":[{\"productId\":\"172137344124801342\",\"sequence\":3,\"specCustomerCode\":\"34325432\",\"specId\":\"172137235157831981\",\"specName\":\"加配料\",\"specValue\":\"加烤肠\",\"specValueCustomerCode\":\"35436543\",\"specValueId\":\"172137258915418416\"}],\"status\":1},{\"customerCode\":\"172137344125849859\",\"finalPrice\":690,\"originalPrice\":690,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"柚子的豪华煎饼/加鸡蛋\",\"productType\":1,\"sequence\":0,\"skuId\":\"172137344125849859\",\"skuSpecValues\":[{\"productId\":\"172137344125849859\",\"sequence\":4,\"specCustomerCode\":\"34325432\",\"specId\":\"172137235157831981\",\"specName\":\"加配料\",\"specValue\":\"加鸡蛋\",\"specValueCustomerCode\":\"543534\",\"specValueId\":\"172137252096528687\"}],\"status\":2}],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[{\"customerCode\":\"34325432\",\"partnerId\":\"2399\",\"sequence\":1,\"specId\":\"172137235157831981\",\"specName\":\"加配料\",\"specValueVos\":[{\"customerCode\":\"6547633\",\"sequence\":0,\"specId\":\"172137235157831981\",\"specValue\":\"加培根\",\"specValueId\":\"172137265104113969\"},{\"customerCode\":\"53532\",\"sequence\":0,\"specId\":\"172137235157831981\",\"specValue\":\"加生菜\",\"specValueId\":\"172137245718040878\"},{\"customerCode\":\"35436543\",\"sequence\":0,\"specId\":\"172137235157831981\",\"specValue\":\"加烤肠\",\"specValueId\":\"172137258915418416\"},{\"customerCode\":\"543534\",\"sequence\":0,\"specId\":\"172137235157831981\",\"specValue\":\"加鸡蛋\",\"specValueId\":\"172137252096528687\"}]}],\"standardGoodsFlag\":2,\"status\":2,\"type\":10,\"unit\":\"\",\"valid\":true,\"version\":0,\"weight\":0},{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"151276993711957026\",\"detailText\":\"\",\"finalPrice\":10,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[{\"id\":\"145523206443400237\",\"name\":\"星推荐\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"145523213705837614\",\"name\":\"超级好吃\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"145523225585155119\",\"name\":\"不吃会后悔的呀呀呀呀\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"147498407648476454\",\"name\":\"测试标签1\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"}],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"多规格披萨\",\"nid\":\"01020G\",\"options\":\"\",\"originalPrice\":30,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/多规格披萨.jpg?timestamp=1594004750618\",\"pid\":\"151276993711957026\",\"pkNumber\":1,\"priceSource\":2,\"productAttributeGroupList\":[],\"productCode\":\"\",\"productComboList\":[],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/多规格披萨.jpg?timestamp=1594004750618\"}],\"productionLocation\":\"\",\"remark\":\"\",\"saleCount\":0,\"sequence\":16,\"skuList\":[{\"customerCode\":\"151276993751802920\",\"finalPrice\":10,\"originalPrice\":10,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"多规格披萨/果粒多/小份\",\"productType\":1,\"sequence\":0,\"skuId\":\"151276993751802920\",\"skuSpecValues\":[{\"productId\":\"151276993751802920\",\"sequence\":1,\"specCustomerCode\":\"\",\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValue\":\"果粒多\",\"specValueCustomerCode\":\"\",\"specValueId\":\"151220996618314784\"},{\"productId\":\"151276993751802920\",\"sequence\":2,\"specCustomerCode\":\"\",\"specId\":\"146153456846207281\",\"specName\":\"分量\",\"specValue\":\"小份\",\"specValueCustomerCode\":\"\",\"specValueId\":\"150771053955708193\"}],\"status\":2},{\"customerCode\":\"151276993751802926\",\"finalPrice\":20,\"originalPrice\":20,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"多规格披萨/果粒多/中分\",\"productType\":1,\"sequence\":0,\"skuId\":\"151276993751802926\",\"skuSpecValues\":[{\"productId\":\"151276993751802926\",\"sequence\":3,\"specCustomerCode\":\"\",\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValue\":\"果粒多\",\"specValueCustomerCode\":\"\",\"specValueId\":\"151220996618314784\"},{\"productId\":\"151276993751802926\",\"sequence\":4,\"specCustomerCode\":\"\",\"specId\":\"146153456846207281\",\"specName\":\"分量\",\"specValue\":\"中分\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146153478998423859\"}],\"status\":2},{\"customerCode\":\"151276993751802932\",\"finalPrice\":30,\"originalPrice\":30,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"多规格披萨/果粒多/大份\",\"productType\":1,\"sequence\":0,\"skuId\":\"151276993751802932\",\"skuSpecValues\":[{\"productId\":\"151276993751802932\",\"sequence\":5,\"specCustomerCode\":\"\",\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValue\":\"果粒多\",\"specValueCustomerCode\":\"\",\"specValueId\":\"151220996618314784\"},{\"productId\":\"151276993751802932\",\"sequence\":6,\"specCustomerCode\":\"\",\"specId\":\"146153456846207281\",\"specName\":\"分量\",\"specValue\":\"大份\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146153466182727986\"}],\"status\":2},{\"customerCode\":\"151276993751802938\",\"finalPrice\":10,\"originalPrice\":10,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"多规格披萨/椰奶/小份\",\"productType\":1,\"sequence\":0,\"skuId\":\"151276993751802938\",\"skuSpecValues\":[{\"productId\":\"151276993751802938\",\"sequence\":7,\"specCustomerCode\":\"\",\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValue\":\"椰奶\",\"specValueCustomerCode\":\"\",\"specValueId\":\"151221001714394145\"},{\"productId\":\"151276993751802938\",\"sequence\":8,\"specCustomerCode\":\"\",\"specId\":\"146153456846207281\",\"specName\":\"分量\",\"specValue\":\"小份\",\"specValueCustomerCode\":\"\",\"specValueId\":\"150771053955708193\"}],\"status\":2},{\"customerCode\":\"151276993752851457\",\"finalPrice\":20,\"originalPrice\":20,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"多规格披萨/椰奶/中分\",\"productType\":1,\"sequence\":0,\"skuId\":\"151276993752851457\",\"skuSpecValues\":[{\"productId\":\"151276993752851457\",\"sequence\":9,\"specCustomerCode\":\"\",\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValue\":\"椰奶\",\"specValueCustomerCode\":\"\",\"specValueId\":\"151221001714394145\"},{\"productId\":\"151276993752851457\",\"sequence\":10,\"specCustomerCode\":\"\",\"specId\":\"146153456846207281\",\"specName\":\"分量\",\"specValue\":\"中分\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146153478998423859\"}],\"status\":2},{\"customerCode\":\"151276993752851463\",\"finalPrice\":30,\"originalPrice\":30,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"多规格披萨/椰奶/大份\",\"productType\":1,\"sequence\":0,\"skuId\":\"151276993752851463\",\"skuSpecValues\":[{\"productId\":\"151276993752851463\",\"sequence\":11,\"specCustomerCode\":\"\",\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValue\":\"椰奶\",\"specValueCustomerCode\":\"\",\"specValueId\":\"151221001714394145\"},{\"productId\":\"151276993752851463\",\"sequence\":12,\"specCustomerCode\":\"\",\"specId\":\"146153456846207281\",\"specName\":\"分量\",\"specValue\":\"大份\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146153466182727986\"}],\"status\":2},{\"customerCode\":\"151276993752851469\",\"finalPrice\":10,\"originalPrice\":10,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"多规格披萨/椰果/小份\",\"productType\":1,\"sequence\":0,\"skuId\":\"151276993752851469\",\"skuSpecValues\":[{\"productId\":\"151276993752851469\",\"sequence\":13,\"specCustomerCode\":\"\",\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValue\":\"椰果\",\"specValueCustomerCode\":\"\",\"specValueId\":\"148732770020069935\"},{\"productId\":\"151276993752851469\",\"sequence\":14,\"specCustomerCode\":\"\",\"specId\":\"146153456846207281\",\"specName\":\"分量\",\"specValue\":\"小份\",\"specValueCustomerCode\":\"\",\"specValueId\":\"150771053955708193\"}],\"status\":2},{\"customerCode\":\"151276993752851475\",\"finalPrice\":20,\"originalPrice\":20,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"多规格披萨/椰果/中分\",\"productType\":1,\"sequence\":0,\"skuId\":\"151276993752851475\",\"skuSpecValues\":[{\"productId\":\"151276993752851475\",\"sequence\":15,\"specCustomerCode\":\"\",\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValue\":\"椰果\",\"specValueCustomerCode\":\"\",\"specValueId\":\"148732770020069935\"},{\"productId\":\"151276993752851475\",\"sequence\":16,\"specCustomerCode\":\"\",\"specId\":\"146153456846207281\",\"specName\":\"分量\",\"specValue\":\"中分\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146153478998423859\"}],\"status\":2},{\"customerCode\":\"151276993752851481\",\"finalPrice\":30,\"originalPrice\":30,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"多规格披萨/椰果/大份\",\"productType\":1,\"sequence\":0,\"skuId\":\"151276993752851481\",\"skuSpecValues\":[{\"productId\":\"151276993752851481\",\"sequence\":17,\"specCustomerCode\":\"\",\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValue\":\"椰果\",\"specValueCustomerCode\":\"\",\"specValueId\":\"148732770020069935\"},{\"productId\":\"151276993752851481\",\"sequence\":18,\"specCustomerCode\":\"\",\"specId\":\"146153456846207281\",\"specName\":\"分量\",\"specValue\":\"大份\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146153466182727986\"}],\"status\":2}],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[{\"customerCode\":\"\",\"partnerId\":\"2399\",\"sequence\":1,\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValueVos\":[{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"148732758010729020\",\"specValue\":\"果粒多\",\"specValueId\":\"151220996618314784\"},{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"148732758010729020\",\"specValue\":\"椰奶\",\"specValueId\":\"151221001714394145\"},{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"148732758010729020\",\"specValue\":\"椰果\",\"specValueId\":\"148732770020069935\"}]},{\"customerCode\":\"\",\"partnerId\":\"2399\",\"sequence\":2,\"specId\":\"146153456846207281\",\"specName\":\"分量\",\"specValueVos\":[{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"146153456846207281\",\"specValue\":\"小份\",\"specValueId\":\"150771053955708193\"},{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"146153456846207281\",\"specValue\":\"中分\",\"specValueId\":\"146153478998423859\"},{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"146153456846207281\",\"specValue\":\"大份\",\"specValueId\":\"146153466182727986\"}]}],\"standardGoodsFlag\":2,\"status\":2,\"type\":10,\"unit\":\"\",\"valid\":true,\"version\":0,\"weight\":0},{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"170796200887494161\",\"detailText\":\"的三个都是\",\"finalPrice\":100,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[{\"id\":\"147498430520016169\",\"name\":\"测试标签4\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"151661265434098710\",\"name\":\"个很丰富\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"166977426006499363\",\"name\":\"吃了不后悔系列\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"}],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"柚子的多味冰激凌\",\"nid\":\"01020H\",\"options\":\"\",\"originalPrice\":300,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/170796200887494161.jpg?timestamp=1594006644307\",\"pid\":\"170796200887494161\",\"pkNumber\":1,\"priceSource\":2,\"productAttributeGroupList\":[{\"attributeName\":\"2399温度\",\"attributeType\":26,\"attributeValues\":[{\"attributeId\":\"170150592303367483\",\"attributeValue\":\"冷\",\"customerCode\":\"cold\",\"id\":179664757481238044,\"price\":0,\"sequence\":0,\"status\":2},{\"attributeId\":\"170150579190924602\",\"attributeValue\":\"热\",\"customerCode\":\"hot\",\"id\":179664757481238045,\"price\":0,\"sequence\":3,\"status\":2},{\"attributeId\":\"170150564401808697\",\"attributeValue\":\"常温\",\"customerCode\":\"changwen\",\"id\":179664757481238046,\"price\":0,\"sequence\":6,\"status\":2}],\"customerCode\":\"2399wendu\",\"maxNumber\":1,\"minNumber\":1,\"must\":1,\"options\":\"\",\"sequence\":26}],\"productCode\":\"\",\"productComboList\":[],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/170796200887494161.jpg?timestamp=1594006644307\"}],\"productionLocation\":\"\",\"remark\":\"范德萨范德萨\",\"saleCount\":0,\"sequence\":17,\"skuList\":[{\"customerCode\":\"170796200958797337\",\"finalPrice\":200,\"originalPrice\":200,\"packPrice\":1,\"productCode\":\"\",\"productName\":\"柚子的多味冰激凌/中杯\",\"productType\":1,\"sequence\":0,\"skuId\":\"170796200958797337\",\"skuSpecValues\":[{\"productId\":\"170796200958797337\",\"sequence\":1,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"中杯\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146079334624622854\"}],\"status\":2},{\"customerCode\":\"170796200958797341\",\"finalPrice\":300,\"originalPrice\":300,\"packPrice\":1,\"productCode\":\"\",\"productName\":\"柚子的多味冰激凌/大杯\",\"productType\":1,\"sequence\":0,\"skuId\":\"170796200958797341\",\"skuSpecValues\":[{\"productId\":\"170796200958797341\",\"sequence\":2,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"大杯\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146079329172027653\"}],\"status\":2},{\"customerCode\":\"170796200958797345\",\"finalPrice\":100,\"originalPrice\":100,\"packPrice\":1,\"productCode\":\"\",\"productName\":\"柚子的多味冰激凌/小杯\",\"productType\":1,\"sequence\":0,\"skuId\":\"170796200958797345\",\"skuSpecValues\":[{\"productId\":\"170796200958797345\",\"sequence\":3,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"小杯\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146079343903471879\"}],\"status\":3}],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[{\"customerCode\":\"\",\"partnerId\":\"2399\",\"sequence\":1,\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValueVos\":[{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"146079324630644996\",\"specValue\":\"中杯\",\"specValueId\":\"146079334624622854\"},{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"146079324630644996\",\"specValue\":\"大杯\",\"specValueId\":\"146079329172027653\"},{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"146079324630644996\",\"specValue\":\"小杯\",\"specValueId\":\"146079343903471879\"}]}],\"standardGoodsFlag\":2,\"status\":2,\"type\":10,\"unit\":\"g\",\"valid\":true,\"version\":0,\"weight\":0},{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"170141602630682372\",\"detailText\":\"\",\"finalPrice\":670,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"香草甜筒冰淇淋\",\"nid\":\"01020I\",\"options\":\"\",\"originalPrice\":1100,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/170141602630682372.jpg?timestamp=1594006250129\",\"pid\":\"170141602630682372\",\"pkNumber\":1,\"priceSource\":2,\"productAttributeGroupList\":[],\"productCode\":\"\",\"productComboList\":[],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/170141602630682372.jpg?timestamp=1594006250129\"}],\"productionLocation\":\"\",\"remark\":\"\",\"saleCount\":0,\"sequence\":18,\"skuList\":[{\"customerCode\":\"170414840299499310\",\"finalPrice\":900,\"originalPrice\":900,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"香草甜筒冰淇淋/儿童球/大杯\",\"productType\":1,\"sequence\":0,\"skuId\":\"170414840299499310\",\"skuSpecValues\":[{\"productId\":\"170414840299499310\",\"sequence\":1,\"specCustomerCode\":\"1080122\",\"specId\":\"170141425007150849\",\"specName\":\"冰淇淋规格\",\"specValue\":\"儿童球\",\"specValueCustomerCode\":\"11111\",\"specValueId\":\"170141512425883394\"},{\"productId\":\"170414840299499310\",\"sequence\":2,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"大杯\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146079329172027653\"}],\"status\":2},{\"customerCode\":\"170414840299499316\",\"finalPrice\":800,\"originalPrice\":800,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"香草甜筒冰淇淋/儿童球/中杯\",\"productType\":1,\"sequence\":0,\"skuId\":\"170414840299499316\",\"skuSpecValues\":[{\"productId\":\"170414840299499316\",\"sequence\":3,\"specCustomerCode\":\"1080122\",\"specId\":\"170141425007150849\",\"specName\":\"冰淇淋规格\",\"specValue\":\"儿童球\",\"specValueCustomerCode\":\"11111\",\"specValueId\":\"170141512425883394\"},{\"productId\":\"170414840299499316\",\"sequence\":4,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"中杯\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146079334624622854\"}],\"status\":2},{\"customerCode\":\"170414840299499322\",\"finalPrice\":700,\"originalPrice\":700,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"香草甜筒冰淇淋/儿童球/小杯\",\"productType\":1,\"sequence\":0,\"skuId\":\"170414840299499322\",\"skuSpecValues\":[{\"productId\":\"170414840299499322\",\"sequence\":5,\"specCustomerCode\":\"1080122\",\"specId\":\"170141425007150849\",\"specName\":\"冰淇淋规格\",\"specValue\":\"儿童球\",\"specValueCustomerCode\":\"11111\",\"specValueId\":\"170141512425883394\"},{\"productId\":\"170414840299499322\",\"sequence\":6,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"小杯\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146079343903471879\"}],\"status\":2},{\"customerCode\":\"170414840300547841\",\"finalPrice\":1100,\"originalPrice\":1100,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"香草甜筒冰淇淋/标准球/大杯\",\"productType\":1,\"sequence\":0,\"skuId\":\"170414840300547841\",\"skuSpecValues\":[{\"productId\":\"170414840300547841\",\"sequence\":7,\"specCustomerCode\":\"1080122\",\"specId\":\"170141425007150849\",\"specName\":\"冰淇淋规格\",\"specValue\":\"标准球\",\"specValueCustomerCode\":\"2222\",\"specValueId\":\"170141532169520899\"},{\"productId\":\"170414840300547841\",\"sequence\":8,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"大杯\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146079329172027653\"}],\"status\":2},{\"customerCode\":\"170414840300547847\",\"finalPrice\":980,\"originalPrice\":980,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"香草甜筒冰淇淋/标准球/中杯\",\"productType\":1,\"sequence\":0,\"skuId\":\"170414840300547847\",\"skuSpecValues\":[{\"productId\":\"170414840300547847\",\"sequence\":9,\"specCustomerCode\":\"1080122\",\"specId\":\"170141425007150849\",\"specName\":\"冰淇淋规格\",\"specValue\":\"标准球\",\"specValueCustomerCode\":\"2222\",\"specValueId\":\"170141532169520899\"},{\"productId\":\"170414840300547847\",\"sequence\":10,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"中杯\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146079334624622854\"}],\"status\":2},{\"customerCode\":\"170414840301596429\",\"finalPrice\":670,\"originalPrice\":670,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"香草甜筒冰淇淋/标准球/小杯\",\"productType\":1,\"sequence\":0,\"skuId\":\"170414840301596429\",\"skuSpecValues\":[{\"productId\":\"170414840301596429\",\"sequence\":11,\"specCustomerCode\":\"1080122\",\"specId\":\"170141425007150849\",\"specName\":\"冰淇淋规格\",\"specValue\":\"标准球\",\"specValueCustomerCode\":\"2222\",\"specValueId\":\"170141532169520899\"},{\"productId\":\"170414840301596429\",\"sequence\":12,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"小杯\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146079343903471879\"}],\"status\":2}],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[{\"customerCode\":\"1080122\",\"partnerId\":\"2399\",\"sequence\":1,\"specId\":\"170141425007150849\",\"specName\":\"冰淇淋规格\",\"specValueVos\":[{\"customerCode\":\"11111\",\"sequence\":0,\"specId\":\"170141425007150849\",\"specValue\":\"儿童球\",\"specValueId\":\"170141512425883394\"},{\"customerCode\":\"2222\",\"sequence\":0,\"specId\":\"170141425007150849\",\"specValue\":\"标准球\",\"specValueId\":\"170141532169520899\"}]},{\"customerCode\":\"\",\"partnerId\":\"2399\",\"sequence\":2,\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValueVos\":[{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"146079324630644996\",\"specValue\":\"大杯\",\"specValueId\":\"146079329172027653\"},{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"146079324630644996\",\"specValue\":\"中杯\",\"specValueId\":\"146079334624622854\"},{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"146079324630644996\",\"specValue\":\"小杯\",\"specValueId\":\"146079343903471879\"}]}],\"standardGoodsFlag\":2,\"status\":2,\"type\":10,\"unit\":\"g\",\"valid\":true,\"version\":0,\"weight\":0},{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"8786876\",\"detailText\":\"对公对私个65贴图范德萨这是是测试65贴图范德萨这是是测试\",\"finalPrice\":10,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[{\"id\":\"145523213705837614\",\"name\":\"超级好吃\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"145523225585155119\",\"name\":\"不吃会后悔的呀呀呀呀\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"147498415470853415\",\"name\":\"测试标签2\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"147498430520016169\",\"name\":\"测试标签4\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"151661265434098710\",\"name\":\"个很丰富\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"154180349566474252\",\"name\":\"人气王\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"166977415240769570\",\"name\":\"不好吃不要钱1\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"166977426006499363\",\"name\":\"吃了不后悔系列\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"}],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"柚子的香草冰激凌\",\"nid\":\"01020J\",\"options\":\"\",\"originalPrice\":10,\"packPrice\":1,\"picture\":\"https://img10.sandload.cn/柚子的香草冰激凌.jpg?timestamp=1594117969484\",\"pid\":\"170777154594902587\",\"pkNumber\":1,\"priceSource\":1,\"productAttributeGroupList\":[{\"attributeName\":\"特殊符号\",\"attributeType\":25255,\"attributeValues\":[{\"attributeId\":\"177389836823505927\",\"attributeValue\":\"口味🌶🌶🌶\",\"customerCode\":\"333\",\"id\":178861841140810542,\"price\":0,\"sequence\":0,\"status\":2},{\"attributeId\":\"177389828403440646\",\"attributeValue\":\"口味🌶🌶\",\"customerCode\":\"222\",\"id\":178861841140810543,\"price\":0,\"sequence\":1,\"status\":2},{\"attributeId\":\"177389820906122245\",\"attributeValue\":\"口味🌶\",\"customerCode\":\"111\",\"id\":178861841140810544,\"price\":0,\"sequence\":2,\"status\":2}],\"customerCode\":\"888\",\"maxNumber\":1,\"minNumber\":1,\"must\":1,\"options\":\"\",\"sequence\":25255}],\"productCode\":\"\",\"productComboList\":[],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/柚子的香草冰激凌.jpg?timestamp=1594117969484\"}],\"productionLocation\":\"\",\"remark\":\"65贴图范德萨这是是测试65贴图范德萨这是是测试65贴图范德萨这是是测试65贴图范德萨这是是测试65贴图范德萨这是是测试65贴图范德萨这是是测试65贴图范德萨这是是测试65贴图范德萨这是是测试65贴图\",\"saleCount\":0,\"sequence\":19,\"skuList\":[],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[],\"standardGoodsFlag\":2,\"status\":2,\"type\":1,\"unit\":\"g\",\"valid\":true,\"version\":0,\"weight\":0},{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"54645654764\",\"detailText\":\"\",\"finalPrice\":100,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"柚子的测试\",\"nid\":\"01020K\",\"options\":\"\",\"originalPrice\":100,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/54645654764.jpg?timestamp=1594188367628\",\"pid\":\"177302682352080908\",\"pkNumber\":1,\"priceSource\":2,\"productAttributeGroupList\":[],\"productCode\":\"\",\"productComboList\":[],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/54645654764.jpg?timestamp=1594188367628\"}],\"productionLocation\":\"\",\"remark\":\"\",\"saleCount\":0,\"sequence\":20,\"skuList\":[{\"customerCode\":\"177302682401363982\",\"finalPrice\":100,\"originalPrice\":100,\"packPrice\":0,\"productCode\":\"\",\"prame\":\"柚子的测试/中杯\",\"productType\":1,\"sequence\":0,\"skuId\":\"177302682401363982\",\"skuSpecValues\":[{\"productId\":\"177302682401363982\",\"sequence\":1,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"中杯\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146079334624622854\"}],\"status\":2},{\"customerCode\":\"177302682401363986\",\"finalPrice\":100,\"originalPrice\":100,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"柚子的测试/大杯\",\"productType\":1,\"sequence\":0,\"skuId\":\"177302682401363986\",\"skuSpecValues\":[{\"productId\":\"177302682401363986\",\"sequence\":2,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"大杯\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146079329172027653\"}],\"status\":2},{\"customerCode\":\"177302682401363990\",\"finalPrice\":100,\"originalPrice\":100,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"柚子的测试/小杯\",\"productType\":1,\"sequence\":0,\"skuId\":\"177302682401363990\",\"skuSpecValues\":[{\"productId\":\"177302682401363990\",\"sequence\":3,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"小杯\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146079343903471879\"}],\"status\":2},{\"customerCode\":\"177302682405558298\",\"finalPrice\":100,\"originalPrice\":100,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"柚子的测试/常规\",\"productType\":1,\"sequence\":0,\"skuId\":\"177302682405558298\",\"skuSpecValues\":[{\"productId\":\"177302682405558298\",\"sequence\":4,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"常规\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146641000458297610\"}],\"status\":2}],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[{\"customerCode\":\"\",\"partnerId\":\"2399\",\"sequence\":1,\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValueVos\":[{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"146079324630644996\",\"specValue\":\"中杯\",\"specValueId\":\"146079334624622854\"},{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"146079324630644996\",\"specValue\":\"大杯\",\"specValueId\":\"146079329172027653\"},{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"146079324630644996\",\"specValue\":\"小杯\",\"specValueId\":\"146079343903471879\"},{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"146079324630644996\",\"specValue\":\"常规\",\"specValueId\":\"146641000458297610\"}]}],\"standardGoodsFlag\":2,\"status\":2,\"type\":10,\"unit\":\"\",\"valid\":true,\"version\":0,\"weight\":0},{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"167787581358159159\",\"detailText\":\"测试测试测试测试测试测试菜市场上厕所长春市\",\"finalPrice\":8,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[{\"id\":\"147498430520016169\",\"name\":\"测试标签4\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"151661265434098710\",\"name\":\"个很丰富\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"166977426006499363\",\"name\":\"吃了不后悔系列\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"}],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"柚子的多规格杂粮\",\"nid\":\"01020L\",\"options\":\"\",\"originalPrice\":400,\"packPrice\":0,\"picture\":\"https://picture.sandload.cn/1594103703533.gif\",\"pid\":\"167787581358159159\",\"pkNumber\":1,\"priceSource\":3,\"productAttributeGroupList\":[{\"attributeName\":\"口味\",\"attributeType\":20,\"attributeValues\":[{\"attributeId\":\"167495969659879432\",\"attributeValue\":\"巧克力味\",\"customerCode\":\"65467456464\",\"id\":179662488717192713,\"price\":0,\"sequence\":0,\"status\":2},{\"attributeId\":\"167495947781341191\",\"attributeValue\":\"香蕉味\",\"customerCode\":\"5745745754\",\"id\":179662488717192714,\"price\":0,\"sequence\":3,\"status\":2},{\"attributeId\":\"167495938104033286\",\"attributeValue\":\"烧烤味\",\"customerCode\":\"475643\",\"id\":179662488717192715,\"price\":0,\"sequence\":6,\"status\":2},{\"attributeId\":\"167495927050993669\",\"attributeValue\":\"番茄味\",\"customerCode\":\"56453543\",\"id\":179662488717192716,\"price\":0,\"sequence\":9,\"status\":2}],\"customerCode\":\"2424\",\"maxNumber\":1,\"minNumber\":1,\"must\":1,\"options\":\"\",\"sequence\":20},{\"attributeName\":\"2399温度\",\"attributeType\":26,\"attributeValues\":[{\"attributeId\":\"170150592303367483\",\"attributeValue\":\"冷\",\"customerCode\":\"cold\",\"id\":179662488717192717,\"price\":0,\"sequence\":12,\"status\":2},{\"attributeId\":\"170150579190924602\",\"attributeValue\":\"热\",\"customerCode\":\"hot\",\"id\":179662488717192718,\"price\":0,\"sequence\":15,\"status\":2},{\"attributeId\":\"170150564401808697\",\"attributeValue\":\"常温\",\"customerCode\":\"changwen\",\"id\":179662488717192719,\"price\":0,\"sequence\":18,\"status\":2},{\"attributeId\":\"170869652713386515\",\"attributeValue\":\"冰\",\"customerCode\":\"bing\",\"id\":179662488717192720,\"price\":0,\"sequence\":21,\"status\":2}],\"customerCode\":\"2399wendu\",\"maxNumber\":1,\"minNumber\":1,\"must\":1,\"options\":\"\",\"sequence\":26}],\"productCode\":\"\",\"productComboList\":[],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://picture.sandload.cn/1594103703533.gif\"}],\"productionLocation\":\"\",\"remark\":\"发送到发多少个\",\"saleCount\":0,\"sequence\":21,\"skuList\":[{\"customerCode\":\"171516069365838084\",\"finalPrice\":20,\"originalPrice\":20,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"柚子的多规格杂粮/椰奶/中杯\",\"productType\":1,\"sequence\":0,\"skuId\":\"171516069365838084\",\"skuSpecValues\":[{\"productId\":\"171516069365838084\",\"sequence\":1,\"specCustomerCode\":\"\",\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValue\":\"椰奶\",\"specValueCustomerCode\":\"\",\"specValueId\":\"151221001714394145\"},{\"productId\":\"171516069365838084\",\"sequence\":2,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"中杯\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146079334624622854\"}],\"status\":2},{\"customerCode\":\"171516069365838090\",\"finalPrice\":30,\"originalPrice\":30,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"柚子的多规格杂粮/椰奶/大杯\",\"productType\":1,\"sequence\":0,\"skuId\":\"171516069365838090\",\"skuSpecValues\":[{\"productId\":\"171516069365838090\",\"sequence\":3,\"specCustomerCode\":\"\",\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValue\":\"椰奶\",\"specValueCustomerCode\":\"\",\"specValueId\":\"151221001714394145\"},{\"productId\":\"171516069365838090\",\"sequence\":4,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"大杯\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146079329172027653\"}],\"status\":2},{\"customerCode\":\"171516069365838096\",\"finalPrice\":8,\"originalPrice\":8,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"柚子的多规格杂粮/椰奶/小杯\",\"productType\":1,\"sequence\":0,\"skuId\":\"171516069365838096\",\"skuSpecValues\":[{\"productId\":\"171516069365838096\",\"sequence\":5,\"specCustomerCode\":\"\",\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValue\":\"椰奶\",\"specValueCustomerCode\":\"\",\"specValueId\":\"151221001714394145\"},{\"productId\":\"171516069365838096\",\"sequence\":6,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"小杯\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146079343903471879\"}],\"status\":2},{\"customerCode\":\"171516069365838102\",\"finalPrice\":20,\"originalPrice\":20,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"柚子的多规格杂粮/椰果/中杯\",\"productType\":1,\"sequence\":0,\"skuId\":\"171516069365838102\",\"skuSpecValues\":[{\"productId\":\"171516069365838102\",\"sequence\":7,\"specCustomerCode\":\"\",\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValue\":\"椰果\",\"specValueCustomerCode\":\"\",\"specValueId\":\"148732770020069935\"},{\"productId\":\"171516069365838102\",\"sequence\":8,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"中杯\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146079334624622854\"}],\"status\":2},{\"customerCode\":\"171516069365838108\",\"finalPrice\":20,\"originalPrice\":20,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"柚子的多规格杂粮/椰果/大杯\",\"productType\":1,\"sequence\":0,\"skuId\":\"171516069365838108\",\"skuSpecValues\":[{\"productId\":\"171516069365838108\",\"sequence\":9,\"specCustomerCode\":\"\",\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValue\":\"椰果\",\"specValueCustomerCode\":\"\",\"specValueId\":\"148732770020069935\"},{\"productId\":\"171516069365838108\",\"sequence\":10,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"大杯\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146079329172027653\"}],\"status\":2},{\"customerCode\":\"171516069365838114\",\"finalPrice\":20,\"originalPrice\":20,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"柚子的多规格杂粮/椰果/小杯\",\"productType\":1,\"sequence\":0,\"skuId\":\"171516069365838114\",\"skuSpecValues\":[{\"productId\":\"171516069365838114\",\"sequence\":11,\"specCustomerCode\":\"\",\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValue\":\"椰果\",\"specValueCustomerCode\":\"\",\"specValueId\":\"148732770020069935\"},{\"productId\":\"171516069365838114\",\"sequence\":12,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"小杯\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146079343903471879\"}],\"status\":2},{\"customerCode\":\"171516069365838120\",\"finalPrice\":20,\"originalPrice\":20,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"柚子的多规格杂粮/珍珠/中杯\",\"productType\":1,\"sequence\":0,\"skuId\":\"171516069365838120\",\"skuSpecValues\":[{\"productId\":\"171516069365838120\",\"sequence\":13,\"specCustomerCode\":\"\",\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValue\":\"珍珠\",\"specValueCustomerCode\":\"\",\"specValueId\":\"148732764875756078\"},{\"productId\":\"171516069365838120\",\"sequence\":14,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"中杯\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146079334624622854\"}],\"status\":2},{\"customerCode\":\"171516069365838126\",\"finalPrice\":20,\"originalPrice\":20,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"柚子的多规格杂粮/珍珠/大杯\",\"productType\":1,\"sequence\":0,\"skuId\":\"171516069365838126\",\"skuSpecValues\":[{\"productId\":\"171516069365838126\",\"sequence\":15,\"specCustomerCode\":\"\",\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValue\":\"珍珠\",\"specValueCustomerCode\":\"\",\"specValueId\":\"148732764875756078\"},{\"productId\":\"171516069365838126\",\"sequence\":16,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"大杯\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146079329172027653\"}],\"status\":2},{\"customerCode\":\"171516069365838132\",\"finalPrice\":20,\"originalPrice\":20,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"柚子的多规格杂粮/珍珠/小杯\",\"productType\":1,\"sequence\":0,\"skuId\":\"171516069365838132\",\"skuSpecValues\":[{\"productId\":\"171516069365838132\",\"sequence\":17,\"specCustomerCode\":\"\",\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValue\":\"珍珠\",\"specValueCustomerCode\":\"\",\"specValueId\":\"148732764875756078\"},{\"productId\":\"171516069365838132\",\"sequence\":18,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"小杯\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146079343903471879\"}],\"status\":2},{\"customerCode\":\"173503070549967895\",\"finalPrice\":400,\"originalPrice\":400,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"柚子的多规格杂粮/加仙草/中杯\",\"productType\":1,\"sequence\":0,\"skuId\":\"173503070549967895\",\"skuSpecValues\":[{\"productId\":\"173503070549967895\",\"sequence\":19,\"specCustomerCode\":\"\",\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValue\":\"加仙草\",\"specValueCustomerCode\":\"xiancao\",\"specValueId\":\"170876203271456516\"},{\"productId\":\"173503070549967895\",\"sequence\":20,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"中杯\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146079334624622854\"}],\"status\":2},{\"customerCode\":\"173503070549967901\",\"finalPrice\":300,\"originalPrice\":300,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"柚子的多规格杂粮/加仙草/大杯\",\"productType\":1,\"sequence\":0,\"skuId\":\"173503070549967901\",\"skuSpecValues\":[{\"productId\":\"173503070549967901\",\"sequence\":21,\"specCustomerCode\":\"\",\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValue\":\"加仙草\",\"specValueCustomerCode\":\"xiancao\",\"specValueId\":\"170876203271456516\"},{\"productId\":\"173503070549967901\",\"sequence\":22,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"大杯\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146079329172027653\"}],\"status\":2},{\"customerCode\":\"173503070549967907\",\"finalPrice\":300,\"originalPrice\":300,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"柚子的多规格杂粮/加仙草/小杯\",\"productType\":1,\"sequence\":0,\"skuId\":\"173503070549967907\",\"skuSpecValues\":[{\"productId\":\"173503070549967907\",\"sequence\":23,\"specCustomerCode\":\"\",\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValue\":\"加仙草\",\"specValueCustomerCode\":\"xiancao\",\"specValueId\":\"170876203271456516\"},{\"productId\":\"173503070549967907\",\"sequence\":24,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"小杯\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146079343903471879\"}],\"status\":2}],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[{\"customerCode\":\"\",\"partnerId\":\"2399\",\"sequence\":1,\"specId\":\"148732758010729020\",\"specName\":\"加料\",\"specValueVos\":[{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"148732758010729020\",\"specValue\":\"椰奶\",\"specValueId\":\"151221001714394145\"},{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"148732758010729020\",\"specValue\":\"椰果\",\"specValueId\":\"148732770020069935\"},{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"148732758010729020\",\"specValue\":\"珍珠\",\"specValueId\":\"148732764875756078\"},{\"customerCode\":\"xiancao\",\"sequence\":0,\"specId\":\"148732758010729020\",\"specValue\":\"加仙草\",\"specValueId\":\"170876203271456516\"}]},{\"customerCode\":\"\",\"partnerId\":\"2399\",\"sequence\":2,\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValueVos\":[{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"146079324630644996\",\"specValue\":\"中杯\",\"specValueId\":\"146079334624622854\"},{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"146079324630644996\",\"specValue\":\"大杯\",\"specValueId\":\"146079329172027653\"},{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"146079324630644996\",\"specValue\":\"小杯\",\"specValueId\":\"146079343903471879\"}]}],\"standardGoodsFlag\":2,\"status\":2,\"type\":10,\"unit\":\"g\",\"valid\":true,\"version\":0,\"weight\":0},{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"hyj_001\",\"detailText\":\"\",\"finalPrice\":50,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"柚子的鲜榨红柚汁\",\"nid\":\"01020M\",\"options\":\"\",\"originalPrice\":50,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/柚子的鲜榨红柚汁.gif?timestamp=1594106065035\",\"pid\":\"172316466787475992\",\"pkNumber\":1,\"priceSource\":1,\"productAttributeGroupList\":[{\"attributeName\":\"甜度\",\"attributeType\":23992,\"attributeValues\":[{\"attributeId\":\"152211084882987801\",\"attributeValue\":\"不加糖\",\"customerCode\":\"17\",\"id\":179661771855954470,\"price\":0,\"sequence\":20,\"status\":2},{\"attributeId\":\"152211074907884312\",\"attributeValue\":\"少糖\",\"customerCode\":\"16\",\"id\":179661771855954471,\"price\":0,\"sequence\":25,\"status\":2},{\"attributeId\":\"152211066974358295\",\"attributeValue\":\"多糖\",\"customerCode\":\"15\",\"id\":179661771855954472,\"price\":0,\"sequence\":30,\"status\":2}],\"customerCode\":\"\",\"maxNumber\":1,\"minNumber\":1,\"must\":1,\"options\":\"\",\"sequence\":2},{\"attributeName\":\"2399温度\",\"attributeType\":26,\"attributeValues\":[{\"attributeId\":\"170869652713386515\",\"attributeValue\":\"冰\",\"customerCode\":\"bing\",\"id\":179661771855954466,\"price\":0,\"sequence\":0,\"status\":2},{\"attributeId\":\"170150592303367483\",\"attributeValue\":\"冷\",\"customerCode\":\"cold\",\"id\":179661771855954467,\"price\":0,\"sequence\":5,\"status\":2},{\"attributeId\":\"170150579190924602\",\"attributeValue\":\"热\",\"customerCode\":\"hot\",\"id\":179661771855954468,\"price\":0,\"sequence\":10,\"status\":2},{\"attributeId\":\"170150564401808697\",\"attributeValue\":\"常温\",\"customerCode\":\"changwen\",\"id\":179661771855954469,\"price\":0,\"sequence\":15,\"status\":2}],\"customerCode\":\"2399wendu\",\"maxNumber\":1,\"minNumber\":1,\"must\":1,\"options\":\"\",\"sequence\":26}],\"productCode\":\"\",\"productComboList\":[],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/柚子的鲜榨红柚汁.gif?timestamp=1594106065035\"}],\"productionLocation\":\"\",\"remark\":\"\",\"saleCount\":0,\"sequence\":22,\"skuList\":[],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[],\"standardGoodsFlag\":2,\"status\":2,\"type\":1,\"unit\":\"\",\"valid\":true,\"version\":0,\"weight\":0}],\"sequence\":2},{\"categoryName\":\"单品\",\"icon\":\"https://picture.sandload.cn/1589538595418.png\",\"level\":0,\"nid\":\"0101\",\"productInfos\":[{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"0001\",\"detailText\":\"\",\"finalPrice\":1,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"牛腩土豆盖浇饭\",\"nid\":\"01010K\",\"options\":\"\",\"originalPrice\":1,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/牛腩土豆盖浇饭.jpg?timestamp=1594117978423\",\"pid\":\"146135281451628826\",\"pkNumber\":1,\"priceSource\":3,\"productAttributeGroupList\":[{\"attributeName\":\"温度\",\"attributeType\":23991,\"attributeValues\":[{\"attributeId\":\"152211045677779754\",\"attributeValue\":\"加少冰\",\"customerCode\":\"14\",\"id\":179569007194731818,\"price\":0,\"sequence\":0,\"status\":2},{\"attributeId\":\"152211035658636073\",\"attributeValue\":\"加多冰\",\"customerCode\":\"13\",\"id\":179569007194731819,\"price\":0,\"sequence\":4,\"status\":2}],\"customerCode\":\"\",\"maxNumber\":1,\"minNumber\":1,\"must\":1,\"options\":\"\",\"sequence\":1}],\"productCode\":\"\",\"productComboList\":[],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/牛腩土豆盖浇饭.jpg?timestamp=1594117978423\"}],\"productionLocation\":\"\",\"remark\":\"\",\"saleCount\":0,\"sequence\":1,\"skuList\":[],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[],\"standardGoodsFlag\":2,\"status\":2,\"type\":1,\"unit\":\"\",\"valid\":true,\"version\":0,\"weight\":0},{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"543532532\",\"detailText\":\"\",\"finalPrice\":250,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"柚子的汉堡\",\"nid\":\"010105\",\"options\":\"\",\"originalPrice\":250,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/柚子的汉堡.jpg?timestamp=1594004743224\",\"pid\":\"164176791183998723\",\"pkNumber\":1,\"priceSource\":1,\"productAttributeGroupList\":[{\"attributeName\":\"口味\",\"attributeType\":20,\"attributeValues\":[{\"attributeId\":\"170058292610055471\",\"attributeValue\":\"孜然味\",\"customerCode\":\"543543\",\"id\":179000195482378260,\"price\":0,\"sequence\":3,\"status\":2},{\"attributeId\":\"167495969659879432\",\"attributeValue\":\"巧克力味\",\"customerCode\":\"65467456464\",\"id\":179000195482378261,\"price\":0,\"sequence\":4,\"status\":2},{\"attributeId\":\"167495947781341191\",\"attributeValue\":\"香蕉味\",\"customerCode\":\"5745745754\",\"id\":179000195482378262,\"price\":0,\"sequence\":5,\"status\":2},{\"attributeId\":\"167495938104033286\",\"attributeValue\":\"烧烤味\",\"customerCode\":\"475643\",\"id\":179000195482378263,\"price\":0,\"sequence\":6,\"status\":2},{\"attributeId\":\"167495927050993669\",\"attributeValue\":\"番茄味\",\"customerCode\":\"56453543\",\"id\":179000195482378264,\"price\":0,\"sequence\":7,\"status\":2}],\"customerCode\":\"2424\",\"maxNumber\":1,\"minNumber\":1,\"must\":1,\"options\":\"\",\"sequence\":20},{\"attributeName\":\"特殊符号\",\"attributeType\":25255,\"attributeValues\":[{\"attributeId\":\"177389836823505927\",\"attributeValue\":\"口味🌶🌶🌶\",\"customerCode\":\"333\",\"id\":179000195482378257,\"price\":0,\"sequence\":0,\"status\":2},{\"attributeId\":\"177389828403440646\",\"attributeValue\":\"口味🌶🌶\",\"customerCode\":\"222\",\"id\":179000195482378258,\"price\":0,\"sequence\":1,\"status\":2},{\"attributeId\":\"177389820906122245\",\"attributeValue\":\"口味🌶\",\"customerCode\":\"111\",\"id\":179000195482378259,\"price\":0,\"sequence\":2,\"status\":2}],\"customerCode\":\"888\",\"maxNumber\":1,\"minNumber\":1,\"must\":1,\"options\":\"\",\"sequence\":25255}],\"productCode\":\"\",\"productComboList\":[],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/柚子的汉堡.jpg?timestamp=1594004743224\"}],\"productionLocation\":\"\",\"remark\":\"\",\"saleCount\":0,\"sequence\":7,\"skuList\":[],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[],\"standardGoodsFlag\":2,\"status\":2,\"type\":1,\"unit\":\"g\",\"valid\":true,\"version\":0,\"weight\":0},{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"20200304001\",\"detailText\":\"春卷单规格商品\",\"finalPrice\":400,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"春卷\",\"nid\":\"010108\",\"options\":\"\",\"originalPrice\":400,\"packPrice\":100,\"picture\":\"https://img10.sandload.cn/zfx01.jpg?timestamp=1593832540030\",\"pid\":\"168314257550837291\",\"pkNumber\":1,\"priceSource\":1,\"productAttributeGroupList\":[{\"attributeName\":\"2399温度\",\"attributeType\":26,\"attributeValues\":[{\"attributeId\":\"170150592303367483\",\"attributeValue\":\"冷\",\"customerCode\":\"cold\",\"id\":177411670844451877,\"price\":0,\"sequence\":0,\"status\":2},{\"attributeId\":\"170150579190924602\",\"attributeValue\":\"热\",\"customerCode\":\"hot\",\"id\":177411670844451878,\"price\":0,\"sequence\":4,\"status\":2},{\"attributeId\":\"170150564401808697\",\"attributeValue\":\"常温\",\"customerCode\":\"changwen\",\"id\":177411670844451879,\"price\":0,\"sequence\":8,\"status\":2}],\"customerCode\":\"2399wendu\",\"maxNumber\":1,\"minNumber\":1,\"must\":1,\"options\":\"\",\"sequence\":26}],\"productCode\":\"20200304001\",\"productComboList\":[],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/zfx01.jpg?timestamp=1593832540030\"}],\"productionLocation\":\"\",\"remark\":\"春卷单规格商品\",\"saleCount\":0,\"sequence\":9,\"skuList\":[],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[],\"standardGoodsFlag\":2,\"status\":2,\"type\":1,\"unit\":\"g\",\"valid\":true,\"version\":0,\"weight\":0},{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"66666555555\",\"detailText\":\"\",\"finalPrice\":20,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[{\"id\":\"147498422922034472\",\"name\":\"测试标签3\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"147498430520016169\",\"name\":\"测试标签4\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"151661268710\",\"name\":\"个很丰富\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"154180349566474252\",\"name\":\"人气王\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"154908048577615907\",\"name\":\"招牌菜\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"166977415240769570\",\"name\":\"不好吃不要钱1\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"166977426006499363\",\"name\":\"吃了不后悔系列\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"}],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"草莓冰激凌\",\"nid\":\"01010A\",\"options\":\"\",\"originalPrice\":20,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/zfx01.jpg?timestamp=1593832540030\",\"pid\":\"151297842355493121\",\"pkNumber\":1,\"priceSource\":2,\"productAttributeGroupList\":[],\"productCode\":\"\",\"productComboList\":[],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/zfx01.jpg?timestamp=1593832540030\"}],\"productionLocation\":\"\",\"remark\":\"\",\"saleCount\":0,\"sequence\":11,\"skuList\":[],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[],\"standardGoodsFlag\":2,\"status\":2,\"type\":1,\"unit\":\"\",\"valid\":true,\"version\":0,\"weight\":0},{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"53465436436\",\"detailText\":\"\",\"finalPrice\":1,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[{\"id\":\"147498430520016169\",\"name\":\"测试标签4\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"154908048577615907\",\"name\":\"招牌菜\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"166977415240769570\",\"name\":\"不好吃不要钱1\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"166977426006499363\",\"name\":\"吃了不后悔系列\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"}],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"柚子的双汇火腿肠\",\"nid\":\"01010B\",\"options\":\"\",\"originalPrice\":1,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/柚子的双汇火腿肠.jpg?timestamp=1594117968879\",\"pid\":\"169623750501856031\",\"pkNumber\":1,\"priceSource\":1,\"productAttributeGroupList\":[{\"attributeName\":\"口味\",\"attributeType\":20,\"attributeValues\":[{\"attributeId\":\"167495969659879432\",\"attributeValue\":\"巧克力味\",\"customerCode\":\"65467456464\",\"id\":172239003922338321,\"price\":0,\"sequence\":0,\"status\":2},{\"attributeId\":\"167495947781341191\",\"attributeValue\":\"香蕉味\",\"customerCode\":\"5745745754\",\"id\":172239003922338322,\"price\":0,\"sequence\":6,\"status\":2},{\"attributeId\":\"167495938104033286\",\"attributeValue\":\"烧烤味\",\"customerCode\":\"475643\",\"id\":172239003922338323,\"price\":0,\"sequence\":12,\"status\":2},{\"attributeId\":\"167495927050993669\",\"attributeValue\":\"番茄味\",\"customerCode\":\"56453543\",\"id\":172239003922338324,\"price\":0,\"sequence\":18,\"status\":2},{\"attributeId\":\"163358218931696911\",\"attributeValue\":\"麻\",\"customerCode\":\"43243243\",\"id\":172239003922338325,\"price\":0,\"sequence\":24,\"status\":2},{\"attributeId\":\"163358205953471758\",\"attributeValue\":\"辣\",\"customerCode\":\"342343\",\"id\":172239003922338326,\"price\":0,\"sequence\":30,\"status\":2}],\"customerCode\":\"2424\",\"maxNumber\":1,\"minNumber\":1,\"must\":1,\"options\":\"\",\"sequence\":20}],\"productCode\":\"\",\"productComboList\":[],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/柚子的双汇火腿肠.jpg?timestamp=1594117968879\"}],\"productionLocation\":\"\",\"remark\":\"\",\"saleCount\":0,\"sequence\":12,\"skuList\":[],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[],\"standardGoodsFlag\":2,\"status\":2,\"type\":1,\"unit\":\"g\",\"valid\":true,\"version\":0,\"weight\":0},{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"790790\",\"detailText\":\"\",\"finalPrice\":1,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[{\"id\":\"147498422922034472\",\"name\":\"测试标签3\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"147498430520016169\",\"name\":\"测试标签4\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"151661265434098710\",\"name\":\"个很丰富\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"}],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"柚子的冰红茶\",\"nid\":\"01010C\",\"options\":\"\",\"originalPrice\":1,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/zfx01.jpg?timestamp=1593832540030\",\"pid\":\"170052487913520426\",\"pkNumber\":1,\"priceSource\":1,\"productAttributeGroupList\":[{\"attributeName\":\"温度\",\"attributeType\":23991,\"attributeValues\":[{\"attributeId\":\"154178730067056650\",\"attributeValue\":\"加水\",\"customerCode\":\"0930001\",\"id\":172239071892083228,\"price\":0,\"sequence\":0,\"status\":2},{\"attributeId\":\"152211045677779754\",\"attributeValue\":\"加少冰\",\"customerCode\":\"14\",\"id\":172239071892083229,\"price\":0,\"sequence\":2,\"status\":2},{\"attributeId\":\"146950416642478850\",\"attributeValue\":\"热\",\"customerCode\":\"002\",\"id\":172239071892083230,\"price\":0,\"sequence\":4,\"status\":2},{\"attributeId\":\"146950402224558849\",\"attributeValue\":\"冷\",\"customerCode\":\"001\",\"id\":172239071892083231,\"price\":0,\"sequence\":6,\"status\":2}],\"customerCode\":\"\",\"maxNumber\":1,\"minNumber\":1,\"must\":1,\"options\":\"\",\"sequence\":1}],\"productCode\":\"\",\"productComboList\":[],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/zfx01.jpg?timestamp=1593832540030\"}],\"productionLocation\":\"\",\"remark\":\"\",\"saleCount\":0,\"sequence\":13,\"skuList\":[],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[],\"standardGoodsFlag\":2,\"status\":2,\"type\":1,\"unit\":\"g\",\"valid\":true,\"version\":0,\"weight\":0},{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"4543643\",\"detailText\":\"\",\"finalPrice\":200,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"柚子的鸡翅\",\"nid\":\"01010D\",\"options\":\"\",\"originalPrice\":200,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/柚子的鸡翅.jpg?timestamp=1594106073869\",\"pid\":\"170143631849748781\",\"pkNumber\":1,\"priceSource\":1,\"productAttributeGroupList\":[{\"attributeName\":\"温度\",\"attributeType\":23991,\"attributeValues\":[{\"attributeId\":\"154178730067056650\",\"attributeValue\":\"加水\",\"customerCode\":\"0930001\",\"id\":180207684196346373,\"price\":0,\"sequence\":8,\"status\":2},{\"attributeId\":\"152211045677779754\",\"attributeValue\":\"加少冰\",\"customerCode\":\"14\",\"id\":180207684196346374,\"price\":0,\"sequence\":9,\"status\":2},{\"attributeId\":\"152211035658636073\",\"attributeValue\":\"加多冰\",\"customerCode\":\"13\",\"id\":180207684196346375,\"price\":0,\"sequence\":10,\"status\":2},{\"attributeId\":\"152211021838404392\",\"attributeValue\":\"加冰\",\"customerCode\":\"12\",\"id\":180207684196346376,\"price\":0,\"sequence\":11,\"status\":2},{\"attributeId\":\"148765553281991191\",\"attributeValue\":\"11111\",\"customerCode\":\"1111\",\"id\":180207684196346377,\"price\":0,\"sequence\":12,\"status\":2},{\"attributeId\":\"148765545868558870\",\"attributeValue\":\"1111\",\"customerCode\":\"1111\",\"id\":180207684196346378,\"price\":0,\"sequence\":13,\"status\":2},{\"attributeId\":\"148765267048006164\",\"attributeValue\":\"7\",\"customerCode\":\"7\",\"id\":180207684196346379,\"price\":0,\"sequence\":14,\"status\":2},{\"attributeId\":\"148765233517691406\",\"attributeValue\":\"1\",\"customerCode\":\"1\",\"id\":180207684196346380,\"price\":0,\"sequence\":15,\"status\":2},{\"attributeId\":\"148765149087400451\",\"attributeValue\":\"123123\",\"customerCode\":\"123\",\"id\":180207684196346381,\"price\":0,\"sequence\":16,\"status\":2},{\"attributeId\":\"146950402224558849\",\"attributeValue\":\"冷\",\"customerCode\":\"001\",\"id\":180207684196346382,\"price\":0,\"sequence\":17,\"status\":2},{\"attributeId\":\"146950416642478850\",\"attributeValue\":\"热\",\"customerCode\":\"002\",\"id\":180207684196346383,\"price\":0,\"sequence\":18,\"status\":2}],\"customerCode\":\"\",\"maxNumber\":1,\"minNumber\":1,\"must\":1,\"options\":\"\",\"sequence\":1},{\"attributeName\":\"口味\",\"attributeType\":20,\"attributeValues\":[{\"attributeId\":\"179022162420797955\",\"attributeValue\":\"aaaa\",\"customerCode\":\"55555\",\"id\":180207684195297852,\"price\":0,\"sequence\":0,\"status\":2},{\"attributeId\":\"170058292610055471\",\"attributeValue\":\"孜然味\",\"customerCode\":\"543543\",\"id\":180207684195297853,\"price\":0,\"sequence\":1,\"status\":2},{\"attributeId\":\"167495969659879432\",\"attributeValue\":\"巧克力味\",\"customerCode\":\"65467456464\",\"id\":180207684195297854,\"price\":0,\"sequence\":2,\"status\":2},{\"attributeId\":\"167495947781341191\",\"attributeValue\":\"香蕉味\",\"customerCode\":\"5745745754\",\"id\":180207684195297855,\"price\":0,\"sequence\":3,\"status\":2},{\"attributeId\":\"167495938104033286\",\"attributeValue\":\"烧烤味\",\"customerCode\":\"475643\",\"id\":180207684196346369,\"price\":0,\"sequence\":4,\"status\":2},{\"attributeId\":\"167495927050993669\",\"attributeValue\":\"番茄味\",\"customerCode\":\"56453543\",\"id\":180207684196346370,\"price\":0,\"sequence\":5,\"status\":2},{\"attributeId\":\"163358218931696911\",\"attributeValue\":\"麻\",\"customerCode\":\"43243243\",\"id\":180207684196346371,\"price\":0,\"sequence\":6,\"status\":2},{\"attributeId\":\"163358205953471758\",\"attributeValue\":\"辣\",\"customerCode\":\"342343\",\"id\":180207684196346372,\"price\":0,\"sequence\":7,\"status\":2}],\"customerCode\":\"2424\",\"maxNumber\":1,\"minNumber\":1,\"must\":1,\"options\":\"\",\"sequence\":20}],\"productCode\":\"\",\"productComboList\":[],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/柚子的鸡翅.jpg?timestamp=1594106073869\"}],\"productionLocation\":\"\",\"remark\":\"\",\"saleCount\":0,\"sequence\":14,\"skuList\":[],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[],\"standardGoodsFlag\":2,\"status\":2,\"type\":1,\"unit\":\"g\",\"valid\":true,\"version\":0,\"weight\":0},{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"5436346\",\"detailText\":\"\",\"finalPrice\":5,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"柚子的鸡柳\",\"nid\":\"01010E\",\"options\":\"\",\"originalPrice\":5,\"packPrice\":1,\"picture\":\"https://img10.sandload.cn/柚子的鸡柳.jpg?timestamp=1594004751180\",\"pid\":\"170143470841952553\",\"pkNumber\":1,\"priceSource\":1,\"productAttributeGroupList\":[],\"productCode\":\"\",\"productComboList\":[],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/柚子的鸡柳.jpg?timestamp=1594004751180\"}],\"productionLocation\":\"\",\"remark\":\"隆重登场\",\"saleCount\":0,\"sequence\":16,\"skuList\":[],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[],\"standardGoodsFlag\":2,\"status\":2,\"type\":1,\"unit\":\"g\",\"valid\":true,\"version\":0,\"weight\":0},{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"147952975419254790\",\"detailText\":\"\",\"finalPrice\":98,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[{\"id\":\"145523213705837614\",\"name\":\"超级好吃\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"145523225585155119\",\"name\":\"不吃会后悔的呀呀呀呀\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"147498415470853415\",\"name\":\"测试标签2\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"147498422922034472\",\"name\":\"测试标签3\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"147498430520016169\",\"name\":\"测试标签4\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"151661265434098710\",\"name\":\"个很丰富\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"166977415240769570\",\"name\":\"不好吃不要钱1\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"166977426006499363\",\"name\":\"吃了不后悔系列\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"}],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"柚子的肉圆\",\"nid\":\"01010M\",\"options\":\"\",\"originalPrice\":358,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/柚子的肉圆.jpg?timestamp=1594117967771\",\"pid\":\"147952975419254790\",\"pkNumber\":1,\"priceSource\":2,\"productAttributeGroupList\":[{\"attributeName\":\"甜度\",\"attributeType\":23992,\"attributeValues\":[{\"attributeId\":\"152211084882987801\",\"attributeValue\":\"不加糖\",\"customerCode\":\"17\",\"id\":179662379901218361,\"price\":0,\"sequence\":24,\"status\":2},{\"attributeId\":\"152211074907884312\",\"attributeValue\":\"少糖\",\"customerCode\":\"16\",\"id\":179662379901218362,\"price\":0,\"sequence\":27,\"status\":2},{\"attributeId\":\"152211066974358295\",\"attributeValue\":\"多糖\",\"customerCode\":\"15\",\"id\":179662379901218363,\"price\":0,\"sequence\":30,\"status\":2},{\"attributeId\":\"148028223996012569\",\"attributeValue\":\"无糖，半塘，正常糖\",\"customerCode\":\"003\",\"id\":179662379901218364,\"price\":0,\"sequence\":33,\"status\":2}],\"customerCode\":\"\",\"maxNumber\":1,\"minNumber\":1,\"must\":1,\"options\":\"\",\"sequence\":2},{\"attributeName\":\"口味\",\"attributeType\":20,\"attributeValues\":[{\"attributeId\":\"167495969659879432\",\"attributeValue\":\"巧克力味\",\"customerCode\":\"65467456464\",\"id\":179662379901218356,\"price\":0,\"sequence\":9,\"status\":2},{\"attributeId\":\"167495947781341191\",\"attributeValue\":\"香蕉味\",\"customerCode\":\"5745745754\",\"id\":179662379901218357,\"price\":0,\"sequence\":12,\"status\":2},{\"attributeId\":\"167495927050993669\",\"attributeValue\":\"番茄味\",\"customerCode\":\"56453543\",\"id\":179662379901218358,\"price\":0,\"sequence\":15,\"status\":2},{\"attributeId\":\"167495938104033286\",\"attributeValue\":\"烧烤味\",\"customerCode\":\"475643\",\"id\":179662379901218359,\"price\":0,\"sequence\":18,\"status\":2},{\"attributeId\":\"174823311563379242\",\"attributeValue\":\"鲜香麻辣鲜香麻辣鲜香麻辣鲜香麻辣\",\"customerCode\":\"6436436543\",\"id\":179662379901218360,\"price\":0,\"sequence\":21,\"status\":2}],\"customerCode\":\"2424\",\"maxNumber\":1,\"minNumber\":1,\"must\":1,\"options\":\"\",\"sequence\":20},{\"attributeName\":\"辣\",\"attributeType\":22,\"attributeValues\":[{\"attributeId\":\"163358360337413399\",\"attributeValue\":\"重辣\",\"customerCode\":\"654364364\",\"id\":179662379901218353,\"price\":0,\"sequence\":0,\"status\":2},{\"attributeId\":\"163358346437489942\",\"attributeValue\":\"中辣\",\"customerCode\":\"6543\",\"id\":179662379901218354,\"price\":0,\"sequence\":3,\"status\":2},{\"attributeId\":\"174823392516592177\",\"attributeValue\":\"变态辣，辣嘴巴\",\"customerCode\":\"9393939\",\"id\":179662379901218355,\"price\":0,\"sequence\":6,\"status\":2}],\"customerCode\":\"343253211\",\"maxNumber\":1,\"minNumber\":1,\"must\":1,\"options\":\"\",\"sequence\":22}],\"productCode\":\"\",\"productComboList\":[],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/柚子的肉圆.jpg?timestamp=1594117967771\"}],\"productionLocation\":\"\",\"remark\":\"\",\"saleCount\":0,\"sequence\":21,\"skuList\":[{\"customerCode\":\"168890616439133495\",\"finalPrice\":200,\"originalPrice\":200,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"柚子的肉圆/韩月季1/规格值1\",\"productType\":1,\"sequence\":0,\"skuId\":\"168890616439133495\",\"skuSpecValues\":[{\"productId\":\"168890616439133495\",\"sequence\":1,\"specCustomerCode\":\"\",\"specId\":\"151944975582594861\",\"specName\":\"韩月季\",\"specValue\":\"韩月季1\",\"specValueCustomerCode\":\"35325252\",\"specValueId\":\"162168910370742529\"},{\"productId\":\"168890616439133495\",\"sequence\":2,\"specCustomerCode\":\"\",\"specId\":\"145574029820066873\",\"specName\":\"规格名\",\"specValue\":\"规格值1\",\"specValueCustomerCode\":\"\",\"specValueId\":\"145574034960186426\"}],\"status\":2},{\"customerCode\":\"168890616439133501\",\"finalPrice\":300,\"originalPrice\":300,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"柚子的肉圆/韩月季1/规格值2\",\"productType\":1,\"sequence\":0,\"skuId\":\"168890616439133501\",\"skuSpecValues\":[{\"productId\":\"168890616439133501\",\"sequence\":3,\"specCustomerCode\":\"\",\"specId\":\"151944975582594861\",\"specName\":\"韩月季\",\"specValue\":\"韩月季1\",\"specValueCustomerCode\":\"35325252\",\"specValueId\":\"162168910370742529\"},{\"productId\":\"168890616439133501\",\"sequence\":4,\"specCustomerCode\":\"\",\"specId\":\"145574029820066873\",\"specName\":\"规格名\",\"specValue\":\"规格值2\",\"specValueCustomerCode\":\"\",\"specValueId\":\"145574041368034363\"}],\"status\":2},{\"customerCode\":\"168890616440182020\",\"finalPrice\":215,\"originalPrice\":215,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"柚子的肉圆/韩月季2/规格值1\",\"productType\":1,\"sequence\":0,\"skuId\":\"168890616440182020\",\"skuSpecValues\":[{\"productId\":\"168890616440182020\",\"sequence\":5,\"specCustomerCode\":\"\",\"specId\":\"151944975582594861\",\"specName\":\"韩月季\",\"specValue\":\"韩月季2\",\"specValueCustomerCode\":\"325325432\",\"specValueId\":\"162168918680707330\"},{\"productId\":\"168890616440182020\",\"sequence\":6,\"specCustomerCode\":\"\",\"specId\":\"145574029820066873\",\"specName\":\"规格名\",\"specValue\":\"规格值1\",\"specValueCustomerCode\":\"\",\"specValueId\":\"145574034960186426\"}],\"status\":2},{\"customerCode\":\"168890616440182026\",\"finalPrice\":178,\"originalPrice\":178,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"柚子的肉圆/韩月季2/规格值2\",\"productType\":1,\"sequence\":0,\"skuId\":\"168890616440182026\",\"skuSpecValues\":[{\"productId\":\"168890616440182026\",\"sequence\":7,\"specCustomerCode\":\"\",\"specId\":\"151944975582594861\",\"specName\":\"韩月季\",\"specValue\":\"韩月季2\",\"specValueCustomerCode\":\"325325432\",\"specValueId\":\"162168918680707330\"},{\"productId\":\"168890616440182026\",\"sequence\":8,\"specCustomerCode\":\"\",\"specId\":\"145574029820066873\",\"specName\":\"规格名\",\"specValue\":\"规格值2\",\"specValueCustomerCode\":\"\",\"specValueId\":\"145574041368034363\"}],\"status\":2},{\"customerCode\":\"174673555871584821\",\"finalPrice\":145,\"originalPrice\":145,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"柚子的肉圆/韩月季3/规格值1\",\"productType\":1,\"sequence\":0,\"skuId\":\"174673555871584821\",\"skuSpecValues\":[{\"productId\":\"174673555871584821\",\"sequence\":9,\"specCustomerCode\":\"\",\"specId\":\"151944975582594861\",\"specName\":\"韩月季\",\"specValue\":\"韩月季3\",\"specValueCustomerCode\":\"543543\",\"specValueId\":\"162168928123134211\"},{\"productId\":\"174673555871584821\",\"sequence\":10,\"specCustomerCode\":\"\",\"specId\":\"145574029820066873\",\"specName\":\"规格名\",\"specValue\":\"规格值1\",\"specValueCustomerCode\":\"\",\"specValueId\":\"145574034960186426\"}],\"status\":2},{\"customerCode\":\"174673555871584827\",\"finalPrice\":98,\"originalPrice\":98,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"柚子的肉圆/韩月季3/规格值2\",\"productType\":1,\"sequence\":0,\"skuId\":\"174673555871584827\",\"skuSpecValues\":[{\"productId\":\"174673555871584827\",\"sequence\":11,\"specCustomerCode\":\"\",\"specId\":\"151944975582594861\",\"specName\":\"韩月季\",\"specValue\":\"韩月季3\",\"specValueCustomerCode\":\"543543\",\"specValueId\":\"162168928123134211\"},{\"productId\":\"174673555871584827\",\"sequence\":12,\"specCustomerCode\":\"\",\"specId\":\"145574029820066873\",\"specName\":\"规格名\",\"specValue\":\"规格值2\",\"specValueCustomerCode\":\"\",\"specValueId\":\"145574041368034363\"}],\"status\":2},{\"customerCode\":\"174673555872633346\",\"finalPrice\":123,\"originalPrice\":123,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"柚子的肉圆/韩月季4/规格值1\",\"productType\":1,\"sequence\":0,\"skuId\":\"174673555872633346\",\"skuSpecValues\":[{\"productId\":\"174673555872633346\",\"sequence\":13,\"specCustomerCode\":\"\",\"specId\":\"151944975582594861\",\"specName\":\"韩月季\",\"specValue\":\"韩月季4\",\"specValueCustomerCode\":\"654765464\",\"specValueId\":\"162168936505450756\"},{\"productId\":\"174673555872633346\",\"sequence\":14,\"specCustomerCode\":\"\",\"specId\":\"145574029820066873\",\"specName\":\"规格名\",\"specValue\":\"规格值1\",\"specValueCustomerCode\":\"\",\"specValueId\":\"145574034960186426\"}],\"status\":2},{\"customerCode\":\"174673555872633352\",\"finalPrice\":358,\"originalPrice\":358,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"柚子的肉圆/韩月季4/规格值2\",\"productType\":1,\"sequence\":0,\"skuId\":\"174673555872633352\",\"skuSpecValues\":[{\"productId\":\"174673555872633352\",\"sequence\":15,\"specCustomerCode\":\"\",\"specId\":\"151944975582594861\",\"specName\":\"韩月季\",\"specValue\":\"韩月季4\",\"specValueCustomerCode\":\"654765464\",\"specValueId\":\"162168936505450756\"},{\"productId\":\"174673555872633352\",\"sequence\":16,\"specCustomerCode\":\"\",\"specId\":\"145574029820066873\",\"specName\":\"规格名\",\"specValue\":\"规格值2\",\"specValueCustomerCode\":\"\",\"specValueId\":\"145574041368034363\"}],\"status\":2}],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[{\"customerCode\":\"\",\"partnerId\":\"2399\",\"sequence\":1,\"specId\":\"151944975582594861\",\"specName\":\"韩月季\",\"specValueVos\":[{\"customerCode\":\"35325252\",\"sequence\":0,\"specId\":\"151944975582594861\",\"specValue\":\"韩月季1\",\"specValueId\":\"162168910370742529\"},{\"customerCode\":\"325325432\",\"sequence\":0,\"specId\":\"151944975582594861\",\"specValue\":\"韩月季2\",\"specValueId\":\"162168918680707330\"},{\"customerCode\":\"543543\",\"sequence\":0,\"specId\":\"151944975582594861\",\"specValue\":\"韩月季3\",\"specValueId\":\"162168928123134211\"},{\"customerCode\":\"654765464\",\"sequence\":0,\"specId\":\"151944975582594861\",\"specValue\":\"韩月季4\",\"specValueId\":\"162168936505450756\"}]},{\"customerCode\":\"\",\"partnerId\":\"2399\",\"sequence\":2,\"specId\":\"145574029820066873\",\"specName\":\"规格名\",\"specValueVos\":[{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"145574029820066873\",\"specValue\":\"规格值1\",\"specValueId\":\"145574034960186426\"},{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"145574029820066873\",\"specValue\":\"规格值2\",\"specValueId\":\"145574041368034363\"}]}],\"standardGoodsFlag\":2,\"status\":2,\"type\":10,\"unit\":\"\",\"valid\":true,\"version\":0,\"weight\":0},{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"33533\",\"detailText\":\"\",\"finalPrice\":200,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"扣三丝\",\"nid\":\"01010N\",\"options\":\"\",\"originalPrice\":200,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/扣三丝.jpg?timestamp=1594117976824\",\"pid\":\"147953127988111399\",\"pkNumber\":1,\"priceSource\":1,\"productAttributeGroupList\":[{\"attributeName\":\"麻\",\"attributeType\":21,\"attributeValues\":[{\"attributeId\":\"163358302190728467\",\"attributeValue\":\"不麻\",\"customerCode\":\"432432\",\"id\":172239149668110882,\"price\":0,\"sequence\":0,\"status\":2},{\"attributeId\":\"163358286692775186\",\"attributeValue\":\"重麻\",\"customerCode\":\"43325432\",\"id\":172239149668110883,\"price\":0,\"sequence\":2,\"status\":2},{\"attributeId\":\"163358275109156113\",\"attributeValue\":\"中麻\",\"customerCode\":\"3432532\",\"id\":172239149668110884,\"price\":0,\"sequence\":4,\"status\":2}],\"customerCode\":\"3432532\",\"maxNumber\":1,\"minNumber\":1,\"must\":1,\"options\":\"\",\"sequence\":21}],\"productCode\":\"\",\"productComboList\":[],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/扣三丝.jpg?timestamp=1594117976824\"}],\"productionLocation\":\"\",\"remark\":\"\",\"saleCount\":0,\"sequence\":22,\"skuList\":[],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[],\"standardGoodsFlag\":2,\"status\":2,\"type\":1,\"unit\":\"\",\"valid\":true,\"version\":0,\"weight\":0},{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"8786876\",\"detailText\":\"对公对私个65贴图范德萨这是是测试65贴图范德萨这是是测试\",\"finalPrice\":10,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[{\"id\":\"145523213705837614\",\"name\":\"超级好吃\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"145523225585155119\",\"name\":\"不吃会后悔的呀呀呀呀\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"147498415470853415\",\"name\":\"测试标签2\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"147498430520016169\",\"name\":\"测试标签4\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"151661265434098710\",\"name\":\"个很丰富\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"154180349566474252\",\"name\":\"人气王\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"166977415240769570\",\"name\":\"不好吃不要钱1\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"166977426006499363\",\"name\":\"吃了不后悔系列\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"}],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"柚子的香草冰激凌\",\"nid\":\"01010O\",\"options\":\"\",\"originalPrice\":10,\"packPrice\":1,\"picture\":\"https://img10.sandload.cn/柚子的香草冰激凌.jpg?timestamp=1594117969484\",\"pid\":\"170777154594902587\",\"pkNumber\":1,\"priceSource\":1,\"productAttributeGroupList\":[{\"attributeName\":\"特殊符号\",\"attributeType\":25255,\"attributeValues\":[{\"attributeId\":\"177389836823505927\",\"attributeValue\":\"口味🌶🌶🌶\",\"customerCode\":\"333\",\"id\":178861841140810542,\"price\":0,\"sequence\":0,\"status\":2},{\"attributeId\":\"177389828403440646\",\"attributeValue\":\"口味🌶🌶\",\"customerCode\":\"222\",\"id\":178861841140810543,\"price\":0,\"sequence\":1,\"status\":2},{\"attributeId\":\"177389820906122245\",\"attributeValue\":\"口味🌶\",\"customerCode\":\"111\",\"id\":178861841140810544,\"price\":0,\"sequence\":2,\"status\":2}],\"customerCode\":\"888\",\"maxNumber\":1,\"minNumber\":1,\"must\":1,\"options\":\"\",\"sequence\":25255}],\"productCode\":\"\",\"productComboList\":[],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/柚子的香草冰激凌.jpg?timestamp=1594117969484\"}],\"productionLocation\":\"\",\"remark\":\"65贴图范德萨这是是测试65贴图范德萨这是是测试65贴图范德萨这是是测试65贴图范德萨这是是测试65贴图范德萨这是是测试65贴图范德萨这是是测试65贴图范德萨这是是测试65贴图范德萨这是是测试65贴图\",\"saleCount\":0,\"sequence\":23,\"skuList\":[],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[],\"standardGoodsFlag\":2,\"status\":2,\"type\":1,\"unit\":\"g\",\"valid\":true,\"version\":0,\"weight\":0},{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"6547544\",\"detailText\":\"\",\"finalPrice\":6,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"儿童冰激凌球\",\"nid\":\"01010P\",\"options\":\"\",\"originalPrice\":6,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/儿童冰激凌球.png?timestamp=1594117974175\",\"pid\":\"171605414134298169\",\"pkNumber\":5,\"priceSource\":3,\"productAttributeGroupList\":[],\"productCode\":\"\",\"productComboList\":[],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/儿童冰激凌球.png?tmp=1594117974175\"}],\"productionLocation\":\"\",\"remark\":\"\",\"saleCount\":0,\"sequence\":24,\"skuList\":[],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[],\"standardGoodsFlag\":2,\"status\":2,\"type\":1,\"unit\":\"包\",\"valid\":true,\"version\":0,\"weight\":0},{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"54364363\",\"detailText\":\"精选红豆，粒粒饱满\",\"finalPrice\":70,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"柚子的一杯甜豆浆\",\"nid\":\"01010Q\",\"options\":\"\",\"originalPrice\":70,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/柚子的一杯甜豆浆.png?timestamp=1594004744368\",\"pid\":\"172139338740748600\",\"pkNumber\":1,\"priceSource\":1,\"productAttributeGroupList\":[{\"attributeName\":\"2399温度\",\"attributeType\":26,\"attributeValues\":[{\"attributeId\":\"170869652713386515\",\"attributeValue\":\"冰\",\"customerCode\":\"bing\",\"id\":179660800947978778,\"price\":0,\"sequence\":0,\"status\":2},{\"attributeId\":\"170150592303367483\",\"attributeValue\":\"冷\",\"customerCode\":\"cold\",\"id\":179660800947978779,\"price\":0,\"sequence\":6,\"status\":2},{\"attributeId\":\"170150579190924602\",\"attributeValue\":\"热\",\"customerCode\":\"hot\",\"id\":179660800947978780,\"price\":0,\"sequence\":12,\"status\":2},{\"attributeId\":\"170150564401808697\",\"attributeValue\":\"常温\",\"customerCode\":\"changwen\",\"id\":179660800947978781,\"price\":0,\"sequence\":18,\"status\":2}],\"customerCode\":\"2399wendu\",\"maxNumber\":1,\"minNumber\":1,\"must\":1,\"options\":\"\",\"sequence\":26}],\"productCode\":\"\",\"productComboList\":[],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/柚子的一杯甜豆浆.png?timestamp=1594004744368\"}],\"productionLocation\":\"\",\"remark\":\"美容养颜\",\"saleCount\":0,\"sequence\":25,\"skuList\":[],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[],\"standardGoodsFlag\":2,\"status\":2,\"type\":1,\"unit\":\"\",\"valid\":true,\"version\":0,\"weight\":0},{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"43643634\",\"detailText\":\"精选黄豆，粒粒饱满\",\"finalPrice\":80,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"柚子的一杯暖心豆浆\",\"nid\":\"01010R\",\"options\":\"\",\"originalPrice\":80,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/柚子的一杯暖心豆浆.jpg?timestamp=1594117970377\",\"pid\":\"172139268463087925\",\"pkNumber\":1,\"priceSource\":1,\"productAttributeGroupList\":[{\"attributeName\":\"2399温度\",\"attributeType\":26,\"attributeValues\":[{\"attributeId\":\"170869652713386515\",\"attributeValue\":\"冰\",\"customerCode\":\"bing\",\"id\":172139350893744447,\"price\":0,\"sequence\":0,\"status\":2},{\"attributeId\":\"170150592303367483\",\"attributeValue\":\"冷\",\"customerCode\":\"cold\",\"id\":172139350894792961,\"price\":0,\"sequence\":1,\"status\":2},{\"attributeId\":\"170150579190924602\",\"attributeValue\":\"热\",\"customerCode\":\"hot\",\"id\":172139350894792962,\"price\":0,\"sequence\":2,\"status\":2},{\"attributeId\":\"170150564401808697\",\"attributeValue\":\"常温\",\"customerCode\":\"changwen\",\"id\":172139350894792963,\"price\":0,\"sequence\":3,\"status\":2}],\"customerCode\":\"2399wendu\",\"maxNumber\":1,\"minNumber\":1,\"must\":1,\"options\":\"\",\"sequence\":26}],\"productCode\":\"\",\"productComboList\":[],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/柚子的一杯暖心豆浆.jpg?timestamp=1594117970377\"}],\"productionLocation\":\"\",\"remark\":\"甜度刚刚好\",\"saleCount\":0,\"sequence\":26,\"skuList\":[],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[],\"standardGoodsFlag\":2,\"status\":2,\"type\":1,\"unit\":\"\",\"valid\":true,\"version\":0,\"weight\":0},{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"54363463\",\"detailText\":\"22222收到\",\"finalPrice\":3,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[{\"id\":\"147498422922034472\",\"name\":\"测试标签3\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"147498430520016169\",\"name\":\"测试标签4\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"166977415240769570\",\"name\":\"不好吃不要钱1\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"166977426006499363\",\"name\":\"吃了不后悔系列\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"}],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"柚子的大闸蟹\",\"nid\":\"01010S\",\"options\":\"\",\"originalPrice\":3,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/54363463.jpg?timestamp=1594006644827\",\"pid\":\"166251036532661783\",\"pkNumber\":12,\"priceSource\":1,\"productAttributeGroupList\":[{\"attributeName\":\"辣\",\"attributeType\":22,\"attributeValues\":[{\"attributeId\":\"167451132362424383\",\"attributeValue\":\"321\",\"customerCode\":\"123\",\"id\":178371570810614313,\"price\":0,\"sequence\":7,\"status\":2},{\"attributeId\":\"163358360337413399\",\"attributeValue\":\"重辣\",\"customerCode\":\"654364364\",\"id\":178371570810614314,\"price\":0,\"sequence\":14,\"status\":2},{\"attributeId\":\"163358346437489942\",\"attributeValue\":\"中辣\",\"customerCode\":\"6543\",\"id\":178371570810614315,\"price\":0,\"sequence\":21,\"status\":2},{\"attributeId\":\"163358338391766293\",\"attributeValue\":\"微辣\",\"customerCode\":\"535322\",\"id\":178371570810614316,\"price\":0,\"sequence\":28,\"status\":2}],\"customerCode\":\"343253211\",\"maxNumber\":1,\"minNumber\":1,\"must\":1,\"options\":\"\",\"sequence\":22}],\"productCode\":\"\",\"productComboList\":[],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/54363463.jpg?timestamp=1594006644827\"}],\"productionLocation\":\"\",\"remark\":\"11111\",\"saleCount\":0,\"sequence\":27,\"skuList\":[],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[],\"standardGoodsFlag\":2,\"status\":2,\"type\":1,\"unit\":\"箱\",\"valid\":true,\"version\":0,\"weight\":1},{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"38383838383\",\"detailText\":\"发多少哥梵蒂冈兑换过\",\"finalPrice\":2,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"柚子的单品绿豆糕\",\"nid\":\"01010T\",\"options\":\"\",\"originalPrice\":2,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/38383838383.jpg?timestamp=1594188367203\",\"pid\":\"176048568357881866\",\"pkNumber\":1,\"priceSource\":2,\"productAttributeGroupList\":[],\"productCode\":\"\",\"productComboList\":[],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/38383838383.jpg?timestamp=1594188367203\"}],\"productionLocation\":\"\",\"remark\":\"334543的发多少割发代首\",\"saleCount\":0,\"sequence\":28,\"skuList\":[],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[],\"standardGoodsFlag\":2,\"status\":2,\"type\":1,\"unit\":\"\",\"valid\":true,\"version\":0,\"weight\":0},{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"youyou\",\"detailText\":\"\",\"finalPrice\":1500,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"柚子的食用油\",\"nid\":\"01010U\",\"options\":\"\",\"originalPrice\":1500,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/youyou.jpg?timestamp=1594188371499\",\"pid\":\"176671128994103556\",\"pkNumber\":1,\"priceSource\":2,\"productAttributeGroupList\":[],\"productCode\":\"\",\"productComboList\":[],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/youyou.jpg?timestamp=1594188371499\"}],\"productionLocation\":\"\",\"remark\":\"\",\"saleCount\":0,\"sequence\":29,\"skuList\":[],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[],\"standardGoodsFlag\":2,\"status\":2,\"type\":1,\"unit\":\"\",\"valid\":true,\"version\":0,\"weight\":0},{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"83016\",\"detailText\":\"\",\"finalPrice\":700,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"牛奶\",\"nid\":\"01010V\",\"options\":\"\",\"originalPrice\":700,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/牛奶.png?timestamp=1594090318626\",\"pid\":\"163769674596757788\",\"pkNumber\":1,\"priceSource\":1,\"productAttributeGroupList\":[],\"productCode\":\"\",\"productComboList\":[],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/牛奶.png?timestamp=1594090318626\"}],\"productionLocation\":\"\",\"remark\":\"营养美味，身体好！\",\"saleCount\":0,\"sequence\":30,\"skuList\":[],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[],\"standardGoodsFlag\":2,\"status\":2,\"type\":1,\"unit\":\"g\",\"valid\":true,\"version\":0,\"weight\":0},{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"605008\",\"detailText\":\"小炒腊肉605008\",\"finalPrice\":500,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"小炒腊肉605008\",\"nid\":\"01010W\",\"options\":\"\",\"originalPrice\":500,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/zfx01.jpg?timestamp=1593832540030\",\"pid\":\"176768250370226702\",\"pkNumber\":1,\"priceSource\":2,\"productAttributeGroupList\":[],\"productCode\":\"\",\"productComboList\":[],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/zfx01.jpg?timestamp=1593832540030\"}],\"productionLocation\":\"\",\"remark\":\"小炒腊肉605008\",\"saleCount\":0,\"sequence\":31,\"skuList\":[],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[],\"standardGoodsFlag\":2,\"status\":2,\"type\":1,\"unit\":\"\",\"valid\":true,\"version\":0,\"weight\":0},{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"605005\",\"detailText\":\"小炒牛肉605005\",\"finalPrice\":200,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"小炒牛肉605005\",\"nid\":\"01010X\",\"options\":\"\",\"originalPrice\":200,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/zfx01.jpg?timestamp=1593832540030\",\"pid\":\"176760541848697371\",\"pkNumber\":1,\"priceSource\":2,\"productAttributeGroupList\":[],\"productCode\":\"\",\"productComboList\":[],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/zfx01.jpg?timestamp=1593832540030\"}],\"productionLocation\":\"\",\"remark\":\"小炒牛肉605005\",\"saleCount\":0,\"sequence\":32,\"skuList\":[],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[],\"standardGoodsFlag\":2,\"status\":2,\"type\":1,\"unit\":\"\",\"valid\":true,\"version\":0,\"weight\":0},{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"615002-003\",\"detailText\":\"酸奶芒果布丁多规格\",\"finalPrice\":300,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"酸奶芒果布丁多规格\",\"nid\":\"01010Y\",\"options\":\"\",\"originalPrice\":300,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/615002.jpg?timestamp=1594006646527\",\"pid\":\"177668119611925254\",\"pkNumber\":1,\"priceSource\":2,\"productAttributeGroupList\":[],\"productCode\":\"\",\"productComboList\":[],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/615002.jpg?timestamp=1594006646527\"}],\"productionLocation\":\"\",\"remark\":\"酸奶芒果布丁多规格\",\"saleCount\":0,\"sequence\":33,\"skuList\":[{\"customerCode\":\"615002-002\",\"finalPrice\":800,\"originalPrice\":800,\"packPrice\":0,\"productCode\":\"11112444\",\"productName\":\"酸奶芒果布丁多规格/大杯\",\"productType\":1,\"sequence\":0,\"skuId\":\"177668119666451208\",\"skuSpecValues\":[{\"productId\":\"177668119666451208\",\"sequence\":1,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"大杯\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146079329172027653\"}],\"status\":1},{\"customerCode\":\"615002-002\",\"finalPrice\":500,\"originalPrice\":500,\"packPrice\":0,\"productCode\":\"33322333\",\"productName\":\"酸奶芒果布丁多规格/中杯\",\"productType\":1,\"sequence\":0,\"skuId\":\"177668119666451212\",\"skuSpecValues\":[{\"productId\":\"177668119666451212\",\"sequence\":2,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"中杯\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146079334624622854\"}],\"status\":1},{\"customerCode\":\"615002-002\",\"finalPrice\":300,\"originalPrice\":300,\"packPrice\":0,\"productCode\":\"6444222\",\"productName\":\"酸奶芒果布丁多规格/小杯\",\"productType\":1,\"sequence\":0,\"skuId\":\"177668119666451216\",\"skuSpecValues\":[{\"productId\":\"177668119666451216\",\"sequence\":3,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"小杯\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146079343903471879\"}],\"status\":2}],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[{\"customerCode\":\"\",\"partnerId\":\"2399\",\"sequence\":1,\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValueVos\":[{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"146079324630644996\",\"specValue\":\"大杯\",\"specValueId\":\"146079329172027653\"},{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"146079324630644996\",\"specValue\":\"中杯\",\"specValueId\":\"146079334624622854\"},{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"146079324630644996\",\"specValue\":\"小杯\",\"specValueId\":\"146079343903471879\"}]}],\"standardGoodsFlag\":2,\"status\":2,\"type\":10,\"unit\":\"\",\"valid\":true,\"version\":0,\"weight\":0},{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"ningmeng\",\"detailText\":\"\",\"finalPrice\":30,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"鲜丰水果柠檬\",\"nid\":\"01010Z\",\"options\":\"\",\"originalPrice\":30,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/ningmeng.jpg?timestamp=1594026619527\",\"pid\":\"179296495028156433\",\"pkNumber\":1,\"priceSource\":1,\"productAttributeGroupList\":[],\"productCode\":\"\",\"productComboList\":[],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/ningmeng.jpg?timestamp=1594026619527\"}],\"productionLocation\":\"\",\"remark\":\"\",\"saleCount\":0,\"sequence\":34,\"skuList\":[],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[],\"standardGoodsFlag\":2,\"status\":2,\"type\":1,\"unit\":\"\",\"valid\":true,\"version\":0,\"weight\":0},{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"87583279832\",\"detailText\":\"\",\"finalPrice\":1,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"柚子的柚子茶\",\"nid\":\"010110\",\"options\":\"\",\"originalPrice\":1,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/柚子的柚子茶.jpeg?timestamp=1594106063646\",\"pid\":\"171651116949558542\",\"pkNumber\":6,\"priceSource\":3,\"productAttributeGroupList\":[],\"productCode\":\"\",\"productComboList\":[],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/柚子的柚子茶.jpeg?timestamp=1594106063646\"}],\"productionLocation\":\"\",\"remark\":\"\",\"saleCount\":0,\"sequence\":35,\"skuList\":[],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[],\"standardGoodsFlag\":2,\"status\":2,\"type\":1,\"unit\":\"包\",\"valid\":true,\"version\":0,\"weight\":22},{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"711002\",\"detailText\":\"\",\"finalPrice\":300,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"711002甜玉米单品\",\"nid\":\"010111\",\"options\":\"\",\"originalPrice\":300,\"packPrice\":0,\"picture\":\"https://picture.sandload.cn/1594448199496.png\",\"pid\":\"180017298737834512\",\"pkNumber\":1,\"priceSource\":2,\"productAttributeGroupList\":[],\"productCode\":\"\",\"productComboList\":[],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://picture.sandload.cn/1594448199496.png\"}],\"productionLocation\":\"\",\"remark\":\"\",\"saleCount\":0,\"sequence\":36,\"skuList\":[],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[],\"standardGoodsFlag\":2,\"status\":2,\"type\":1,\"unit\":\"\",\"valid\":true,\"version\":0,\"weight\":0}],\"sequence\":3},{\"categoryName\":\"测试\",\"icon\":\"\",\"level\":0,\"nid\":\"0107\",\"productInfos\":[{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"hyj_001\",\"detailText\":\"\",\"finalPrice\":50,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"柚子的鲜榨红柚汁\",\"nid\":\"010701\",\"options\":\"\",\"originalPrice\":50,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/柚子的鲜榨红柚汁.gif?timestamp=1594106065035\",\"pid\":\"172316466787475992\",\"pkNumber\":1,\"priceSource\":1,\"productAttributeGroupList\":[{\"attributeName\":\"甜度\",\"attributeType\":23992,\"attributeValues\":[{\"attributeId\":\"152211084882987801\",\"attributeValue\":\"不加糖\",\"customerCode\":\"17\",\"id\":179661771855954470,\"price\":0,\"sequence\":20,\"status\":2},{\"attributeId\":\"152211074907884312\",\"attributeValue\":\"少糖\",\"customerCode\":\"16\",\"id\":179661771855954471,\"price\":0,\"sequence\":25,\"status\":2},{\"attributeId\":\"152211066974358295\",\"attributeValue\":\"多糖\",\"customerCode\":\"15\",\"id\":179661771855954472,\"price\":0,\"sequence\":30,\"status\":2}],\"customerCode\":\"\",\"maxNumber\":1,\"minNumber\":1,\"must\":1,\"options\":\"\",\"sequence\":2},{\"attributeName\":\"2399温度\",\"attributeType\":26,\"attributeValues\":[{\"attributeId\":\"170869652713386515\",\"attributeValue\":\"冰\",\"customerCode\":\"bing\",\"id\":179661771855954466,\"price\":0,\"sequence\":0,\"status\":2},{\"attributeId\":\"170150592303367483\",\"attributeValue\":\"冷\",\"customerCode\":\"cold\",\"id\":179661771855954467,\"price\":0,\"sequence\":5,\"status\":2},{\"attributeId\":\"170150579190924602\",\"attributeValue\":\"热\",\"customerCode\":\"hot\",\"id\":179661771855954468,\"price\":0,\"sequence\":10,\"status\":2},{\"attributeId\":\"170150564401808697\",\"attributeValue\":\"常温\",\"customerCode\":\"changwen\",\"id\":179661771855954469,\"price\":0,\"sequence\":15,\"status\":2}],\"customerCode\":\"2399wendu\",\"maxNumber\":1,\"minNumber\":1,\"must\":1,\"options\":\"\",\"sequence\":26}],\"productCode\":\"\",\"productComboList\":[],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/柚子的鲜榨红柚汁.gif?timestamp=1594106065035\"}],\"productionLocation\":\"\",\"remark\":\"\",\"saleCount\":0,\"sequence\":6,\"skuList\":[],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[],\"standardGoodsFlag\":2,\"status\":2,\"type\":1,\"unit\":\"\",\"valid\":true,\"version\":0,\"weight\":0},{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"54364363\",\"detailText\":\"精选红豆，粒粒饱满\",\"finalPrice\":70,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"柚子的一杯甜豆浆\",\"nid\":\"010702\",\"options\":\"\",\"originalPrice\":70,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/柚子的一杯甜豆浆.png?timestamp=1594004744368\",\"pid\":\"172139338740748600\",\"pkNumber\":1,\"priceSource\":1,\"productAttributeGroupList\":[{\"attributeName\":\"2399温度\",\"attributeType\":26,\"attributeValues\":[{\"attributeId\":\"170869652713386515\",\"attributeValue\":\"冰\",\"customerCode\":\"bing\",\"id\":179660800947978778,\"price\":0,\"sequence\":0,\"status\":2},{\"attributeId\":\"170150592303367483\",\"attributeValue\":\"冷\",\"customerCode\":\"cold\",\"id\":179660800947978779,\"price\":0,\"sequence\":6,\"status\":2},{\"attributeId\":\"170150579190924602\",\"attributeValue\":\"热\",\"customerCode\":\"hot\",\"id\":179660800947978780,\"price\":0,\"sequence\":12,\"status\":2},{\"attributeId\":\"170150564401808697\",\"attributeValue\":\"常温\",\"customerCode\":\"changwen\",\"id\":179660800947978781,\"price\":0,\"sequence\":18,\"status\":2}],\"customerCode\":\"2399wendu\",\"maxNumber\":1,\"minNumber\":1,\"must\":1,\"options\":\"\",\"sequence\":26}],\"productCode\":\"\",\"productComboList\":[],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/柚子的一杯甜豆浆.png?timestamp=1594004744368\"}],\"productionLocation\":\"\",\"remark\":\"美容养颜\",\"saleCount\":0,\"sequence\":7,\"skuList\":[],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[],\"standardGoodsFlag\":2,\"status\":2,\"type\":1,\"unit\":\"\",\"valid\":true,\"version\":0,\"weight\":0},{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"43643634\",\"detailText\":\"精选黄豆，粒粒饱满\",\"finalPrice\":80,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"柚子的一杯暖心豆浆\",\"nid\":\"010703\",\"options\":\"\",\"originalPrice\":80,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/柚子的一杯暖心豆浆.jpg?timestamp=1594117970377\",\"pid\":\"172139268463087925\",\"pkNumber\":1,\"priceSource\":1,\"productAttributeGroupList\":[{\"attributeName\":\"2399温度\",\"attributeType\":26,\"attributeValues\":[{\"attributeId\":\"170869652713386515\",\"attributeValue\":\"冰\",\"customerCode\":\"bing\",\"id\":172139350893744447,\"price\":0,\"sequence\":0,\"status\":2},{\"attributeId\":\"170150592303367483\",\"attributeValue\":\"冷\",\"customerCode\":\"cold\",\"id\":172139350894792961,\"price\":0,\"sequence\":1,\"status\":2},{\"attributeId\":\"170150579190924602\",\"attributeValue\":\"热\",\"customerCode\":\"hot\",\"id\":172139350894792962,\"price\":0,\"sequence\":2,\"status\":2},{\"attributeId\":\"170150564401808697\",\"attributeValue\":\"常温\",\"customerCode\":\"changwen\",\"id\":172139350894792963,\"price\":0,\"sequence\":3,\"status\":2}],\"customerCode\":\"2399wendu\",\"maxNumber\":1,\"minNumber\":1,\"must\":1,\"options\":\"\",\"sequence\":26}],\"productCode\":\"\",\"productComboList\":[],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/柚子的一杯暖心豆浆.jpg?timestamp=1594117970377\"}],\"productionLocation\":\"\",\"remark\":\"甜度刚刚好\",\"saleCount\":0,\"sequence\":8,\"skuList\":[],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[],\"standardGoodsFlag\":2,\"status\":2,\"type\":1,\"unit\":\"\",\"valid\":true,\"version\":0,\"weight\":0}],\"sequence\":4},{\"categoryName\":\"套餐\",\"icon\":\"\",\"level\":0,\"nid\":\"0103\",\"productInfos\":[{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"46547654\",\"detailText\":\"烦得很过分的话发到回复的\",\"finalPrice\":1100,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[{\"id\":\"145523206443400237\",\"name\":\"星推荐\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"145523213705837614\",\"name\":\"超级好吃\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"166977426006499363\",\"name\":\"吃了不后悔系列\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"}],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"柚子的煎饼套餐\",\"nid\":\"01030B\",\"options\":\"\",\"originalPrice\":1000,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/46547654.jpg?timestamp=1594006647742\",\"pid\":\"172139555834777863\",\"pkNumber\":1,\"priceSource\":1,\"productAttributeGroupList\":[],\"productCode\":\"6665555\",\"productComboList\":[{\"barcode\":\"\",\"category\":\"\",\"categoryName\":\"\",\"customerCode\":\"34325436\",\"finalPrice\":600,\"labelNames\":[],\"options\":\"\",\"originalPrice\":600,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/柚子的烤鸭煎饼.jpg?timestamp=1594004748876\",\"productCode\":\"kaoyajianbing\",\"productId\":\"172137470575726860\",\"productName\":\"柚子的烤鸭煎饼\",\"productType\":1,\"quantity\":1,\"sequence\":0,\"specification\":\"\",\"status\":2,\"stockLimit\":2,\"unit\":\"\"}],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/46547654.jpg?timestamp=1594006647742\"}],\"productionLocation\":\"\",\"remark\":\"佛挡杀佛的是公司\",\"saleCount\":0,\"sequence\":1,\"skuList\":[],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[],\"standardGoodsFlag\":2,\"status\":2,\"type\":7,\"unit\":\"\",\"valid\":true,\"version\":0,\"weight\":0},{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"544365473\",\"detailText\":\"\",\"finalPrice\":3,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"柚子套餐7\",\"nid\":\"010304\",\"options\":\"\",\"originalPrice\":2,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/柚子套餐7.jpg?timestamp=1594117971020\",\"pid\":\"168773151610734906\",\"pkNumber\":1,\"priceSource\":1,\"productAttributeGroupList\":[],\"productCode\":\"\",\"productComboList\":[{\"barcode\":\"\",\"category\":\"\",\"categoryName\":\"\",\"customerCode\":\"81011\",\"finalPrice\":700,\"labelNames\":[],\"options\":\"\",\"originalPrice\":700,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/zfx01.jpg?timestamp=1593832540030\",\"productCode\":\"\",\"productId\":\"163769199913742608\",\"productName\":\"黑椒鸡块\",\"productType\":1,\"quantity\":1,\"sequence\":0,\"specification\":\"\",\"status\":2,\"stockLimit\":2,\"unit\":\"g\"},{\"barcode\":\"\",\"category\":\"\",\"categoryName\":\"\",\"customerCode\":\"83031\",\"finalPrice\":500,\"labelNames\":[],\"options\":\"\",\"originalPrice\":500,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/zfx01.jpg?timestamp=1593832540030\",\"productCode\":\"\",\"productId\":\"163769158631305485\",\"productName\":\"玉米杯\",\"productType\":1,\"quantity\":1,\"sequence\":1,\"specification\":\"\",\"status\":2,\"stockLimit\":2,\"unit\":\"g\"}],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/柚子套餐7.jpg?timestamp=1594117971020\"}],\"productionLocation\":\"\",\"remark\":\"\",\"saleCount\":0,\"sequence\":2,\"skuList\":[],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[],\"standardGoodsFlag\":2,\"status\":2,\"type\":7,\"unit\":\"g\",\"valid\":true,\"version\":0,\"weight\":0},{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"455456436\",\"detailText\":\"\",\"finalPrice\":0,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"柚子的新品套餐\",\"nid\":\"010306\",\"options\":\"\",\"originalPrice\":0,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/柚子的新品套餐.jpg?timestamp=1594014099702\",\"pid\":\"168516475103162640\",\"pkNumber\":1,\"priceSource\":1,\"productAttributeGroupList\":[],\"productCode\":\"\",\"productComboList\":[{\"barcode\":\"\",\"category\":\"\",\"categoryName\":\"\",\"customerCode\":\"0001\",\"finalPrice\":1,\"labelNames\":[],\"options\":\"\",\"originalPrice\":1,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/牛腩土豆盖浇饭.jpg?timestamp=1594117978423\",\"productCode\":\"\",\"productId\":\"146135281451628826\",\"productName\":\"牛腩土豆盖浇饭\",\"productType\":1,\"quantity\":2,\"sequence\":0,\"specification\":\"\",\"status\":2,\"stockLimit\":1,\"unit\":\"\"}],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/柚子的新品套餐.jpg?timestamp=1594014099702\"}],\"productionLocation\":\"\",\"remark\":\"\",\"saleCount\":0,\"sequence\":3,\"skuList\":[],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[],\"standardGoodsFlag\":2,\"status\":3,\"type\":7,\"unit\":\"g\",\"valid\":true,\"version\":0,\"weight\":0},{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"605006\",\"detailText\":\"黄河糖醋鲤鱼605001\",\"finalPrice\":200,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"黄河糖醋鲤鱼605001\",\"nid\":\"01030D\",\"options\":\"\",\"originalPrice\":200,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/zfx01.jpg?timestamp=1593832540030\",\"pid\":\"176760689205082654\",\"pkNumber\":1,\"priceSource\":2,\"productAttributeGroupList\":[],\"productCode\":\"\",\"productComboList\":[{\"barcode\":\"\",\"category\":\"\",\"categoryName\":\"\",\"customerCode\":\"605007\",\"finalPrice\":300,\"labelNames\":[],\"options\":\"\",\"originalPrice\":300,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/zfx01.jpg?timestamp=1593832540030\",\"productCode\":\"\",\"productId\":\"176764846176631301\",\"productName\":\"椒盐鱼排605007\",\"productType\":1,\"quantity\":1,\"sequence\":0,\"specification\":\"\",\"status\":2,\"stockLimit\":2,\"unit\":\"\"},{\"barcode\":\"\",\"category\":\"\",\"categoryName\":\"\",\"customerCode\":\"605002\",\"finalPrice\":600,\"labelNames\":[],\"options\":\"\",\"originalPrice\":600,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/zfx01.jpg?timestamp=1593832540030\",\"productCode\":\"60500101\",\"productId\":\"176760357703023134\",\"productName\":\"糖醋鱼605001\",\"productType\":1,\"quantity\":1,\"sequence\":1,\"specification\":\"\",\"status\":2,\"stockLimit\":2,\"unit\":\"\"}],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/zfx01.jpg?timestamp=1593832540030\"}],\"productionLocation\":\"\",\"remark\":\"黄河糖醋鲤鱼605001\",\"saleCount\":0,\"sequence\":5,\"skuList\":[],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[],\"standardGoodsFlag\":2,\"status\":2,\"type\":7,\"unit\":\"\",\"valid\":true,\"version\":0,\"weight\":0},{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"605009\",\"detailText\":\"干捞粉丝605009\",\"finalPrice\":300,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"干捞粉丝605009\",\"nid\":\"01030E\",\"options\":\"\",\"originalPrice\":300,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/zfx01.jpg?timestamp=1593832540030\",\"pid\":\"176770125028030998\",\"pkNumber\":1,\"priceSource\":2,\"productAttributeGroupList\":[],\"productCode\":\"\",\"productComboList\":[{\"barcode\":\"\",\"category\":\"\",\"categoryName\":\"\",\"customerCode\":\"605008\",\"finalPrice\":500,\"labelNames\":[],\"options\":\"\",\"originalPrice\":500,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/zfx01.jpg?timestamp=1593832540030\",\"productCode\":\"\",\"productId\":\"176768250370226702\",\"productName\":\"小炒腊肉605008\",\"productType\":1,\"quantity\":1,\"sequence\":0,\"specification\":\"\",\"status\":2,\"stockLimit\":2,\"unit\":\"\"}],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/zfx01.jpg?timestamp=1593832540030\"}],\"productionLocation\":\"\",\"remark\":\"干捞粉丝605009\",\"saleCount\":0,\"sequence\":6,\"skuList\":[],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[],\"standardGoodsFlag\":2,\"status\":1,\"type\":7,\"unit\":\"\",\"valid\":false,\"version\":0,\"weight\":0},{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"615001\",\"detailText\":\"菠萝咕噜肉套餐\",\"finalPrice\":300,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"菠萝咕噜肉套餐\",\"nid\":\"01030F\",\"options\":\"\",\"originalPrice\":200,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/zfx01.jpg?timestamp=1593832540030\",\"pid\":\"177661656678031366\",\"pkNumber\":1,\"priceSource\":2,\"productAttributeGroupList\":[],\"productCode\":\"\",\"productComboList\":[{\"barcode\":\"\",\"category\":\"\",\"categoryName\":\"\",\"customerCode\":\"605008\",\"finalPrice\":500,\"labelNames\":[],\"options\":\"\",\"originalPrice\":500,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/zfx01.jpg?timestamp=1593832540030\",\"productCode\":\"\",\"productId\":\"176768250370226702\",\"productName\":\"小炒腊肉605008\",\"productType\":1,\"quantity\":1,\"sequence\":0,\"specification\":\"\",\"status\":2,\"stockLimit\":2,\"unit\":\"\"}],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/zfx01.jpg?timestamp=1593832540030\"}],\"productionLocation\":\"\",\"remark\":\"菠萝咕噜肉套餐\",\"saleCount\":0,\"sequence\":7,\"skuList\":[],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[],\"standardGoodsFlag\":2,\"status\":2,\"type\":7,\"unit\":\"\",\"valid\":true,\"version\":0,\"weight\":0},{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"736543\",\"detailText\":\"44\",\"finalPrice\":150,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"无固定搭配套餐\",\"nid\":\"01030G\",\"options\":\"\",\"originalPrice\":50,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/zfx01.jpg?timestamp=1593832540030\",\"pid\":\"177665369467520010\",\"pkNumber\":1,\"priceSource\":2,\"productAttributeGroupList\":[],\"productCode\":\"43453453\",\"productComboList\":[{\"barcode\":\"\",\"category\":\"\",\"categoryName\":\"\",\"customerCode\":\"2000003\",\"finalPrice\":1,\"labelNames\":[],\"options\":\"\",\"originalPrice\":1,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/zfx01.jpg?timestamp=1593832540030\",\"productCode\":\"2000003\",\"productId\":\"168928973746642999\",\"productName\":\"超级芝士堡\",\"productType\":1,\"quantity\":1,\"sequence\":0,\"specification\":\"\",\"status\":2,\"stockLimit\":2,\"unit\":\"g\"}],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/zfx01.jpg?timestamp=1593832540030\"}],\"productionLocation\":\"\",\"remark\":\"4444\",\"saleCount\":0,\"sequence\":8,\"skuList\":[],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[],\"standardGoodsFlag\":2,\"status\":2,\"type\":7,\"unit\":\"\",\"valid\":true,\"version\":0,\"weight\":0},{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"34365464444\",\"detailText\":\"改动过返回返回\",\"finalPrice\":301,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"柚子的无固定商品套餐\",\"nid\":\"01030C\",\"options\":\"\",\"originalPrice\":0,\"packPrice\":0,\"picture\":\"https://picture.sandload.cn/1590055606771.png\",\"pid\":\"175404460859826689\",\"pkNumber\":1,\"priceSource\":1,\"productAttributeGroupList\":[],\"productCode\":\"\",\"productComboList\":[],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://picture.sandload.cn/1590055606771.png\"}],\"productionLocation\":\"\",\"remark\":\"胜多负少改动过\",\"saleCount\":0,\"sequence\":12,\"skuList\":[],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[],\"standardGoodsFlag\":2,\"status\":2,\"type\":7,\"unit\":\"\",\"valid\":true,\"version\":0,\"weight\":0},{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"999977\",\"detailText\":\"舒舒服服是\",\"finalPrice\":2,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"柚子的固定商品套餐\",\"nid\":\"01030H\",\"options\":\"\",\"originalPrice\":2,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/柚子的固定商品套餐.jpg?timestamp=1594117985919\",\"pid\":\"170152153733694776\",\"pkNumber\":1,\"priceSource\":1,\"productAttributeGroupList\":[],\"productCode\":\"\",\"productComboList\":[{\"barcode\":\"\",\"category\":\"\",\"categoryName\":\"\",\"customerCode\":\"5436346\",\"finalPrice\":5,\"labelNames\":[],\"options\":\"\",\"originalPrice\":5,\"packPrice\":1,\"picture\":\"https://img10.sandload.cn/柚子的鸡柳.jpg?timestamp=1594004751180\",\"productCode\":\"\",\"productId\":\"170143470841952553\",\"productName\":\"柚子的鸡柳\",\"productType\":1,\"quantity\":1,\"sequence\":0,\"specification\":\"\",\"status\":2,\"stockLimit\":1,\"unit\":\"g\"},{\"barcode\":\"\",\"category\":\"炸串id\",\"categoryName\":\"炸串\",\"customerCode\":\"4543643\",\"finalPrice\":200,\"labelNames\":[],\"options\":\"\",\"originalPrice\":200,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/柚子的鸡翅.jpg?timestamp=1594106073869\",\"productCode\":\"\",\"productId\":\"170143631849748781\",\"productName\":\"柚子的鸡翅\",\"productType\":1,\"quantity\":1,\"sequence\":1,\"specification\":\"\",\"status\":2,\"stockLimit\":2,\"unit\":\"g\"}],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/柚子的固定商品套餐.jpg?timestamp=1594117985919\"}],\"productionLocation\":\"\",\"remark\":\"少时诵诗书\",\"saleCount\":0,\"sequence\":13,\"skuList\":[],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[],\"standardGoodsFlag\":2,\"status\":2,\"type\":7,\"unit\":\"g\",\"valid\":true,\"version\":0,\"weight\":0},{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"1424573\",\"detailText\":\"\",\"finalPrice\":788,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"套餐lulu34\",\"nid\":\"01030I\",\"options\":\"\",\"originalPrice\":788,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/zfx01.jpg?timestamp=1593832540030\",\"pid\":\"177302234459133954\",\"pkNumber\":1,\"priceSource\":2,\"productAttributeGroupList\":[],\"productCode\":\"\",\"productComboList\":[{\"barcode\":\"\",\"category\":\"\",\"categoryName\":\"\",\"customerCode\":\"44345678900987654321123456789011987654321234567890\",\"finalPrice\":300,\"labelNames\":[{\"id\":\"145523225585155119\",\"name\":\"不吃会后悔的呀呀呀呀\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"147498407648476454\",\"name\":\"测试标签1\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"147498415470853415\",\"name\":\"测试标签2\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"151661265434098710\",\"name\":\"个很丰富\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"154180349566474252\",\"name\":\"人气王\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"154908048577615907\",\"name\":\"招牌菜\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"}],\"options\":\"\",\"originalPrice\":300,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/zfx01.jpg?timestamp=1593832540030\",\"productCode\":\"\",\"productId\":\"177301926758701095\",\"productName\":\"单规格lulu34\",\"productType\":1,\"quantity\":1,\"sequence\":0,\"specification\":\"\",\"status\":2,\"stockLimit\":2,\"unit\":\"\"},{\"barcode\":\"\",\"category\":\"\",\"categoryName\":\"\",\"customerCode\":\"852852\",\"finalPrice\":350,\"labelNames\":[],\"options\":\"\",\"originalPrice\":350,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/zfx01.jpg?timestamp=1593832540030\",\"productCode\":\"7654\",\"productId\":\"170060198366587966\",\"productName\":\"单品lulu3\",\"productType\":1,\"quantity\":1,\"sequence\":1,\"specification\":\"\",\"status\":2,\"stockLimit\":2,\"unit\":\"g\"}],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/zfx01.jpg?timestamp=1593832540030\"}],\"productionLocation\":\"\",\"remark\":\"\",\"saleCount\":0,\"sequence\":14,\"skuList\":[],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[],\"standardGoodsFlag\":2,\"status\":2,\"type\":7,\"unit\":\"\",\"valid\":true,\"version\":0,\"weight\":0},{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"622002\",\"detailText\":\"\",\"finalPrice\":1000,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"姜葱蟹套餐\",\"nid\":\"01030J\",\"options\":\"\",\"originalPrice\":1000,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/zfx01.jpg?timestamp=1593832540030\",\"pid\":\"178286607340794380\",\"pkNumber\":1,\"priceSource\":2,\"productAttributeGroupList\":[],\"productCode\":\"\",\"productComboList\":[{\"barcode\":\"\",\"category\":\"\",\"categoryName\":\"\",\"customerCode\":\"605008\",\"finalPrice\":500,\"labelNames\":[],\"options\":\"\",\"originalPrice\":500,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/zfx01.jpg?timestamp=1593832540030\",\"productCode\":\"\",\"productId\":\"176768250370226702\",\"productName\":\"小炒腊肉605008\",\"productType\":1,\"quantity\":2,\"sequence\":0,\"specification\":\"\",\"status\":2,\"stockLimit\":2,\"unit\":\"\"}],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/zfx01.jpg?timestamp=1593832540030\"}],\"productionLocation\":\"\",\"remark\":\"\",\"saleCount\":0,\"sequence\":15,\"skuList\":[],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[],\"standardGoodsFlag\":2,\"status\":2,\"type\":7,\"unit\":\"\",\"valid\":true,\"version\":0,\"weight\":0},{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"622001\",\"detailText\":\"\",\"finalPrice\":1200,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"苦瓜炒蛋套餐\",\"nid\":\"01030K\",\"options\":\"\",\"originalPrice\":1200,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/zfx01.jpg?timestamp=1593832540030\",\"pid\":\"178286546988954120\",\"pkNumber\":1,\"priceSource\":2,\"productAttributeGroupList\":[],\"productCode\":\"\",\"productComboList\":[{\"barcode\":\"\",\"category\":\"\",\"categoryName\":\"\",\"customerCode\":\"605002\",\"finalPrice\":600,\"labelNames\":[],\"options\":\"\",\"originalPrice\":600,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/zfx01.jpg?timestamp=1593832540030\",\"productCode\":\"60500101\",\"productId\":\"176760357703023134\",\"productName\":\"糖醋鱼605001\",\"productType\":1,\"quantity\":2,\"sequence\":0,\"specification\":\"\",\"status\":2,\"stockLimit\":2,\"unit\":\"\"}],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/zfx01.jpg?timestamp=1593832540030\"}],\"productionLocation\":\"\",\"remark\":\"\",\"saleCount\":0,\"sequence\":16,\"skuList\":[],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[],\"standardGoodsFlag\":2,\"status\":2,\"type\":7,\"unit\":\"\",\"valid\":true,\"version\":0,\"weight\":0}],\"sequence\":5},{\"categoryName\":\"优惠\",\"icon\":\"\",\"level\":0,\"nid\":\"0105\",\"productInfos\":[{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"170141602630682372\",\"detailText\":\"\",\"finalPrice\":670,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"香草甜筒冰淇淋\",\"nid\":\"010501\",\"options\":\"\",\"originalPrice\":1100,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/170141602630682372.jpg?timestamp=1594006250129\",\"pid\":\"170141602630682372\",\"pkNumber\":1,\"priceSource\":2,\"productAttributeGroupList\":[],\"productCode\":\"\",\"productComboList\":[],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/170141602630682372.jpg?timestamp=1594006250129\"}],\"productionLocation\":\"\",\"remark\":\"\",\"saleCount\":0,\"sequence\":5,\"skuList\":[{\"customerCode\":\"170414840299499310\",\"finalPrice\":900,\"originalPrice\":900,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"香草甜筒冰淇淋/儿童球/大杯\",\"productType\":1,\"sequence\":0,\"skuId\":\"170414840299499310\",\"skuSpecValues\":[{\"productId\":\"170414840299499310\",\"sequence\":1,\"specCustomerCode\":\"1080122\",\"specId\":\"170141425007150849\",\"specName\":\"冰淇淋规格\",\"specValue\":\"儿童球\",\"specValueCustomerCode\":\"11111\",\"specValueId\":\"170141512425883394\"},{\"productId\":\"170414840299499310\",\"sequence\":2,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"大杯\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146079329172027653\"}],\"status\":2},{\"customerCode\":\"170414840299499316\",\"finalPrice\":800,\"originalPrice\":800,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"香草甜筒冰淇淋/儿童球/中杯\",\"productType\":1,\"sequence\":0,\"skuId\":\"170414840299499316\",\"skuSpecValues\":[{\"productId\":\"170414840299499316\",\"sequence\":3,\"specCustomerCode\":\"1080122\",\"specId\":\"170141425007150849\",\"specName\":\"冰淇淋规格\",\"specValue\":\"儿童球\",\"specValueCustomerCode\":\"11111\",\"specValueId\":\"170141512425883394\"},{\"productId\":\"170414840299499316\",\"sequence\":4,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"中杯\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146079334624622854\"}],\"status\":2},{\"customerCode\":\"170414840299499322\",\"finalPrice\":700,\"originalPrice\":700,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"香草甜筒冰淇淋/儿童球/小杯\",\"productType\":1,\"sequence\":0,\"skuId\":\"170414840299499322\",\"skuSpecValues\":[{\"productId\":\"170414840299499322\",\"sequence\":5,\"specCustomerCode\":\"1080122\",\"specId\":\"170141425007150849\",\"specName\":\"冰淇淋规格\",\"specValue\":\"儿童球\",\"specValueCustomerCode\":\"11111\",\"specValueId\":\"170141512425883394\"},{\"productId\":\"170414840299499322\",\"sequence\":6,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"小杯\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146079343903471879\"}],\"status\":2},{\"customerCode\":\"170414840300547841\",\"finalPrice\":1100,\"originalPrice\":1100,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"香草甜筒冰淇淋/标准球/大杯\",\"productType\":1,\"sequence\":0,\"skuId\":\"170414840300547841\",\"skuSpecValues\":[{\"productId\":\"170414840300547841\",\"sequence\":7,\"specCustomerCode\":\"1080122\",\"specId\":\"170141425007150849\",\"specName\":\"冰淇淋规格\",\"specValue\":\"标准球\",\"specValueCustomerCode\":\"2222\",\"specValueId\":\"170141532169520899\"},{\"productId\":\"170414840300547841\",\"sequence\":8,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"大杯\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146079329172027653\"}],\"status\":2},{\"customerCode\":\"170414840300547847\",\"finalPrice\":980,\"originalPrice\":980,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"香草甜筒冰淇淋/标准球/中杯\",\"productType\":1,\"sequence\":0,\"skuId\":\"170414840300547847\",\"skuSpecValues\":[{\"productId\":\"170414840300547847\",\"sequence\":9,\"specCustomerCode\":\"1080122\",\"specId\":\"170141425007150849\",\"specName\":\"冰淇淋规格\",\"specValue\":\"标准球\",\"specValueCustomerCode\":\"2222\",\"specValueId\":\"170141532169520899\"},{\"productId\":\"170414840300547847\",\"sequence\":10,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"中杯\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146079334624622854\"}],\"status\":2},{\"customerCode\":\"170414840301596429\",\"finalPrice\":670,\"originalPrice\":670,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"香草甜筒冰淇淋/标准球/小杯\",\"productType\":1,\"sequence\":0,\"skuId\":\"170414840301596429\",\"skuSpecValues\":[{\"productId\":\"170414840301596429\",\"sequence\":11,\"specCustomerCode\":\"1080122\",\"specId\":\"170141425007150849\",\"specName\":\"冰淇淋规格\",\"specValue\":\"标准球\",\"specValueCustomerCode\":\"2222\",\"specValueId\":\"170141532169520899\"},{\"productId\":\"170414840301596429\",\"sequence\":12,\"specCustomerCode\":\"\",\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValue\":\"小杯\",\"specValueCustomerCode\":\"\",\"specValueId\":\"146079343903471879\"}],\"status\":2}],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[{\"customerCode\":\"1080122\",\"partnerId\":\"2399\",\"sequence\":1,\"specId\":\"170141425007150849\",\"specName\":\"冰淇淋规格\",\"specValueVos\":[{\"customerCode\":\"11111\",\"sequence\":0,\"specId\":\"170141425007150849\",\"specValue\":\"儿童球\",\"specValueId\":\"170141512425883394\"},{\"customerCode\":\"2222\",\"sequence\":0,\"specId\":\"170141425007150849\",\"specValue\":\"标准球\",\"specValueId\":\"170141532169520899\"}]},{\"customerCode\":\"\",\"partnerId\":\"2399\",\"sequence\":2,\"specId\":\"146079324630644996\",\"specName\":\"杯型\",\"specValueVos\":[{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"146079324630644996\",\"specValue\":\"大杯\",\"specValueId\":\"146079329172027653\"},{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"146079324630644996\",\"specValue\":\"中杯\",\"specValueId\":\"146079334624622854\"},{\"customerCode\":\"\",\"sequence\":0,\"specId\":\"146079324630644996\",\"specValue\":\"小杯\",\"specValueId\":\"146079343903471879\"}]}],\"standardGoodsFlag\":2,\"status\":2,\"type\":10,\"unit\":\"g\",\"valid\":true,\"version\":0,\"weight\":0},{\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"completeFlag\":2,\"customerCode\":\"43435\",\"detailText\":\"\",\"finalPrice\":2,\"isDishware\":0,\"isSkuProduct\":0,\"labelNames\":[{\"id\":\"145523206443400237\",\"name\":\"星推荐\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"145523213705837614\",\"name\":\"超级好吃\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"145523225585155119\",\"name\":\"不吃会后悔的呀呀呀呀\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"},{\"id\":\"147498422922034472\",\"name\":\"测试标签3\",\"partnerId\":\"2399\",\"productList\":[],\"storeId\":\"\",\"type\":\"0\"}],\"level\":0,\"maxLimitNumber\":0,\"maxRestrictionQty\":0,\"minLimitNumber\":0,\"minRestrictionQty\":0,\"name\":\"柚子的芒果冰激凌\",\"nid\":\"010502\",\"options\":\"\",\"originalPrice\":2,\"packPrice\":0,\"picture\":\"https://img10.sandload.cn/柚子的芒果冰激凌.jpg?timestamp=1594117966755\",\"pid\":\"151213924380963594\",\"pkNumber\":1,\"priceSource\":1,\"productAttributeGroupList\":[],\"productCode\":\"\",\"productComboList\":[],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://img10.sandload.cn/柚子的芒果冰激凌.jpg?timestamp=1594117966755\"}],\"productionLocation\":\"\",\"remark\":\"\",\"saleCount\":0,\"sequence\":6,\"skuList\":[],\"skuSpecValues\":[],\"sourceChannel\":\"\",\"specificationGroupList\":[],\"standardGoodsFlag\":2,\"status\":2,\"type\":1,\"unit\":\"\",\"valid\":true,\"version\":0,\"weight\":0}],\"sequence\":6}],\"level\":0,\"menuId\":\"171524858391458083\",\"menuName\":\"柚子菜单1\",\"nid\":\"01\",\"sequence\":0}",
  "sign": "sBQ4q3PtEjS4nUocLE2R8e1D8K47xzmUgDArkbClFhruQp1o+rDBUk6lEtd97o64drGG6g/LMq5g98u/yoQeCIq2oEbm/C4yT7l4xDLPwnOTFKjljWL6kYBNyFoMat/LtbHG7PZ4NwnsCUSEQ/Otby+Csz7+KKSGpaH7pYuHK4KUs6N8HO6nZ7dHydCUtTfJcFuZKH/xgjUZ9NPNBfHhxi7XkAbnfAfqbQqjNPh76F8jHvjeKFKDeZ/kf6bfbBL2KJnxHB72el8yuheve6YVGTHXXvrtSVLIa1+5zTYPbflaNn8fX7Li7d+9Mnykr2xufvq+ho76M1i8WREkXgrlpw=="
}
```


## 商品沽清接口（非码商品ID）

### 应用场景

根据非码商品ID，商品沽清接口

### 请求url：/goods/skuItem/sellOut

### 请求参数

| 字段      | 类型   | 是否必传 | 举例                                                       | 说明       |
| :-------- | ------ | -------- | ---------------------------------------------------------- | ---------- |
| skuIds    | Array  | 是       |                                                            |            |
| storeId   | String | 是       | 208888                                                     | 商家门店号 |
| spuId     | String |          |                                                            |            |
| partmerId | String | 是       |                                                            | 商户ID     |
| channelId | String | 否       | saas ： 自提/saasdelivery : 外卖/saasmall : 微商城/wc:围餐 | 业务类型   |

### 请求示例

```json
{
  "ver":1,
  "partnerId":"2399",
  "appId":"wxaa246",
  "requestBody":"{\"storeId\":\"1000189\",\"skuIds\":[\"141514633969296671\"],\"spuId\":\"141514633960908061\",\"channelId\":\"saas\"}",
  "sign": "<sign>"
}
```

### 响应参数说明：成功responseBody返回null,部分成功则返回失败customerCode

### 返回示例

```json
{
  "ver": "1",
  "statusCode": "100",
  "message": "成功",
  "responseBody": "[\"141514633960908061\",\"141514633969296671\"]",
  "sign": "0M9vVVyUA1V1cdxKKM+rGXRarN5eJ5zglqT5jGXsFZjfrv2LURykdZ1HgwneweE31RfWYuXgAP/k+yh4NsmtDBGsWHX/TZl+9KnpBIrwnN1poNaRsm5/8l4LjJFVC5TSBjVfmwHxN19N2dX2PJ9Jb1Ur/tGs7cniGj2hZQUD4qi+7yyo/vemz2tSY0WnpMAEjlLXoIa+piVKyqbJiYWI5smzaERdWjnijAkUJzucnaTo/6gDMUXEDRDvG+NL+8qPzzC4uxZxdQ0hHJRmYq+GOUOl5tFAll+TNt+RupjzmWaJ/9mjfpw4yJY/anX6w4UaTUnXzECoWGSznjolaNHbZw=="
}
```

## 商品撤销沽清接口（非码商品ID）

### 应用场景

根据非码商品ID，商品撤销沽清接口

### 请求url：/goods/skuItem/cancelSellOut

### 请求参数

| 字段      | 类型   | 是否必传 | 举例                                                       | 说明       |
| :-------- | ------ | -------- | ---------------------------------------------------------- | ---------- |
| storeId   | String | 是       | 208888                                                     | 商家门店号 |
| spuId     | String | 是       |                                                            |            |
| skuId     | String | 是       |                                                            |            |
| partmerId | String | 是       |                                                            | 商户ID     |
| channelId | String | 否       | saas ： 自提/saasdelivery : 外卖/saasmall : 微商城/wc:围餐 | 业务类型   |

### 请求示例

```json
{
  "ver":1,
  "partnerId":"2399",
  "appId":"wxaa246",
  "requestBody":"{\"storeId\":\"1000189\",\"skuId\":\"141514633969296671\",\"spuId\":\"141514633960908061\",\"channelId\":\"saas\"}",
  "sign": "<sign>"
}
```

### 响应参数说明：成功responseBody返回null,部分成功则返回失败customerCode

### 返回示例

```json
{
  "ver": "1",
  "statusCode": "100",
  "message": "成功",
  "responseBody": "[\"141514633960908061\",\"141514633969296671\"]",
  "sign": "0M9vVVyUA1V1cdxKKM+rGXRarN5eJ5zglqT5jGXsFZjfrv2LURykdZ1HgwneweE31RfWYuXgAP/k+yh4NsmtDBGsWHX/TZl+9KnpBIrwnN1poNaRsm5/8l4LjJFVC5TSBjVfmwHxN19N2dX2PJ9Jb1Ur/tGs7cniGj2hZQUD4qi+7yyo/vemz2tSY0WnpMAEjlLXoIa+piVKyqbJiYWI5smzaERdWjnijAkUJzucnaTo/6gDMUXEDRDvG+NL+8qPzzC4uxZxdQ0hHJRmYq+GOUOl5tFAll+TNt+RupjzmWaJ/9mjfpw4yJY/anX6w4UaTUnXzECoWGSznjolaNHbZw=="
}
```


## 商品沽清接口（商家自定义商品ID）

### 应用场景

根据商家自定义商品ID，商品沽清接口

### 请求url：/goods/skuItem/sellOutByCustomerCode

### 请求参数

| 字段          | 类型   | 是否必传 | 举例                                                       | 说明       |
| :------------ | ------ | -------- | ---------------------------------------------------------- | ---------- |
| storeId       | String | 是       | 208888                                                     | 商家门店号 |
| customerCodes | Array  | 是       |                                                            |            |
| partnerId     | String | 是       |                                                            | 商户ID     |
| channelId     | String | 否       | saas ： 自提/saasdelivery : 外卖/saasmall : 微商城/wc:围餐 | 业务类型   |

### 请求示例

```json
{
  "ver":1,
  "partnerId":"2399",
  "appId":"wxaa246",
  "requestBody":"{\"storeId\":\"1000189\",\"customerCodes\":[\"141514633969296671\",\"141514633969296672\",\"323\",\"we232\"],\"channelId\":\"saas\"}",
  "sign": "<sign>"
}
```

### 响应参数说明：成功responseBody返回null,部分成功则返回失败customerCode

### 返回示例

```json
{
  "ver": "1",
  "statusCode": "100",
  "message": "成功",
  "responseBody": "[\"141514633969296671\",\"141514633969296672\",\"323\",\"we232\"]",
  "sign": "x9d4NgUtp6NL48SYSSXcWJ5enf4HUIGKFG38iyBAWZtXAq2vZJyJoaQ+YHsHnlzokA54F/2g8WCbKTKOqARtvImMK/ROFaEYi7gJfAFdvg9+7/3X2D859p5cfb48wYmNW31ojIH5f9MN2nCkuaWbWw6TAFkYFEoBkkjKLOem4220VnMpXmwlHAJAocbB2zda/cpsYfH9BnCYtfDqfqupBUpRd8UeRQ97WEfTUDuopVsd7YugJPZMVmQKbGUZZuyOnYDmWKP4IZUG2weqnaoWUDEU1sRLfYpJVRcv9vKXPAkMBJhJkwYeca2qJ1W8TjVMONwLYjtWo7LlAwlOWBvq1w=="
}
```



## 商品撤销沽清接口（商家自定义商品ID）

### 应用场景

根据商家自定义商品ID，商品撤销沽清接口

### 请求url：/goods/skuItem/cancelSellOutByCustomerCode

### 请求参数

| 字段          | 类型   | 是否必传 | 举例                                                       | 说明       |
| :------------ | ------ | -------- | ---------------------------------------------------------- | ---------- |
| storeId       | String | 是       | 208888                                                     | 商家门店号 |
| customerCodes | Array  | 是       |                                                            |            |
| partnerId     | String | 是       |                                                            | 商户ID     |
| channelId     | String | 否       | saas ： 自提/saasdelivery : 外卖/saasmall : 微商城/wc:围餐 | 业务类型   |

### 请求示例

```json
{
  "ver":1,
  "partnerId":"2399",
  "appId":"wxaa246",
  "requestBody":"{\"storeId\":\"1000189\",\"customerCodes\":[\"141514633969296671\",\"141514633969296672\"],\"channelId\":\"saas\"}",
  "sign": "<sign>"
}
```

### 响应参数说明：成功responseBody返回null,部分成功则返回失败customerCode

### 返回示例

```json
{
  "ver": "1",
  "statusCode": "100",
  "message": "成功",
  "responseBody": "[\"141514633969296671\",\"141514633969296672\"]",
  "sign": "3q0yQVavRh/8mW1DNzq0JrClvAjenLwSdmfHnX5FF5CHY3+MnvE//03aR8oiSeyGFdnILsXA39za9jtvGvp9U5QyhQrZQF4l5J79C7QtIeZnfGA+zCvEFvz2OsMc3tgBDpBQCYIxg9TJ9rF+hwjfSnHkh2ByQBpw+gtxXgxpLQN/L6JOv0qZWESsjHfeBlbZFLQj9ppqdj0pSnZbZvZpSCzbGd1i2uLXEZTmb/9QUC/FoZqz84F4jKqpvsg9dCMnUIes0s1ubbyRV3TERUs+v7kmsq6VGqqZTnhAIaiOlWcENYaekWJKe2QaTyZBLbdE1AzGwvGU3ycfOt196c2KBg=="
}
```

## 创建商品菜单接口

### 应用场景

创建商品菜单

### 请求url：/menu/add

### 请求参数

| 字段           | 类型   | 是否必传 | 举例                                                       | 说明                                                         |
| -------------- | ------ | -------- | ---------------------------------------------------------- | ------------------------------------------------------------ |
| partnerId      | String |          |                                                            | 商户号                                                       |
| **channel**    | String | 是       | saas ： 自提/saasdelivery : 外卖/saasmall : 微商城/wc:围餐 | 渠道                                                         |
| **name**       | string | 是       |                                                            | 菜单名称                                                     |
| **dateStatus** | String | 是       |                                                            | 周期类型 /0不限周期/1周一/2周二/4周三/8周四/16周五/32周六/64周日，各个周期还可以相加，如3代表周一+周二 |
| **startTime**  | String | 是       |                                                            | 开始时间 格式 HH:mm:ss,00:00:00-23:59:59                     |
| **endTime**    | String | 是       |                                                            | 结束时间 格式 HH:mm:ss,00:00:00-23:59:59                     |
| **menuNo**     | String | 是       |                                                            | 菜单编号，默认菜单=0                                         |
| **type**       | String | 是       |                                                            | 菜单类型,1门店菜单/2商户菜单/3集中店菜单                     |
| remark         | String | 否       |                                                            | 备注                                                         |

### 请求示例

```json

{
  "ver":1,
  "partnerId":"1864",
  "appId":"2eb5c8f1170246429755e6dac313f89d",
  "requestBody":"{\"channel\":\"saas\",\"dateStatus\": 1,\"endTime\":\"2019-08-09 10:00:00\",\"menuCode\":\"0102\",\"menuNo\":10,\"name\":\"测试\",\"partnerId\":\"string\",\"remark\":\"测试\",\"startTime\":\"2019-07-09 10:00:00\", \"type\": 0}",
  "sign": "<sign>"
}
```

### 响应参数

| **字段** | **类型** | **必填** | **举例** | **说明** |
| -------- | -------- | -------- | -------- | -------- |
| menuId   | String   | 是       |          | 菜单ID   |

### 返回示例

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

### 请求示例

```json
{
  "ver":1,
  "partnerId":"1000",
  "appId":"2eb5c8f117dac313f89d",
  "requestBody":"{\"menuId\":\"146682059538214920\",\"categoryId\":\"01\",\"customerCategoryCode\":\"111\",\"name\":\"分类二\",\"remark\":\"分类二\",\"sequence\":2}",
  "sign": "sign"
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
  "ver": "1",
  "statusCode": "100",
  "message": "成功",
  "responseBody": "{\"createDate\":\"1562678160358\",\"icon\":\"\",\"menuId\":\"146682059538214920\",\"name\":\"分类二\",\"options\":\"\",\"remark\":\"分类二\",\"sequence\":2,\"type\":\"node\"}",
  "sign": "sign"
}
```

## 获取菜单列表接口

### 应用场景

根据商户id返回菜单及分类

### 请求url：/menu/list

### 请求参数

| 字段         | 类型    | 是否必传 | 举例                                                       | 说明                         |
| ------------ | ------- | -------- | ---------------------------------------------------------- | ---------------------------- |
| **channel**  | String  | 否       | saas ： 自提/saasdelivery : 外卖/saasmall : 微商城/wc:围餐 | 渠道                         |
| **isValid**  | string  | 否       |                                                            | 是否有效（0：无效，1：有效） |
| **menuCode** | String  | 否       |                                                            | 菜单编号                     |
| **name**     | String  | 否       |                                                            | 菜单名称                     |
| **storeId**  | String  | 否       |                                                            | 门店id                       |
| pageNum      | Integer | 是       |                                                            | 当前页                       |
| pageSize     | Integer | 是       |                                                            | 页数                         |

### 请求示例

```json
{
  "ver":1,
  "partnerId":"1000",
  "appId":"2eb5c8f117dac313f89d",
  "requestBody":"{\"pageNum\":1,\"pageSize\":10}",
  "sign": "sign"
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

### 返回示例

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

根据菜单ID或门店ID查询菜单及分类信息

### 请求url：/menu/detail

### 请求参数

| 字段        | 类型   | 是否必传 | 举例 | 说明   |
| ----------- | ------ | -------- | ---- | ------ |
| **menuId**  | Long   | 是       |      | 菜单id |
| **storeId** | string | 否       |      | 门店id |

### 请求示例

```json
{
  "ver":1,
  "partnerId":"1000",
  "appId":"2eb5c8f117dac313f89d",
  "requestBody":"{\"menuId\":\"146682059538214920\",\"storeId\":\"101\"}",
  "sign": "sign"
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

### 返回示例

```json
{
  "ver": "1",
  "statusCode": "100",
  "message": "成功",
  "responseBody": "{\"list\":[{\"categoryId\":\"0101\",\"createDate\":\"1562665908000\",\"customerCategoryCode\":\"\",\"icon\":\"\",\"menuId\":\"146682059538214920\",\"name\":\"分类一\",\"options\":\"\",\"remark\":\"分类一\",\"sequence\":1,\"type\":\"node\"},{\"categoryId\":\"0102\",\"createDate\":\"1562677936000\",\"customerCategoryCode\":\"111\",\"icon\":\"\",\"menuId\":\"146682059538214920\",\"name\":\"分类二\",\"options\":\"\",\"remark\":\"分类二\",\"sequence\":2,\"type\":\"node\"},{\"categoryId\":\"0103\",\"createDate\":\"1562678160000\",\"customerCategoryCode\":\"121\",\"icon\":\"\",\"menuId\":\"146682059538214920\",\"name\":\"分类三\",\"options\":\"\",\"remark\":\"分类三\",\"sequence\":3,\"type\":\"node\"}]}",
  "sign": "sign"
}
```


## 添加商品

### 请求地址 /goods/add

### 请求方法 POST

### 请求参数

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
| productVo/groupVos     | 商品详情     | List`<Array>`      | N   | 商品详情                                 |
| productVo/groupVos/partnerId|商户编号| String              | N   | 商户编号                                          |
| productVo/groupVos/sequence|排序号   | Integer($int32)     | N   | 排序号                                            |
| productVo/groupVos/specId|规格类型ID | String              | N   | 规格类型ID                                        |
| productVo/groupVos/specName|规格类型名称| String           | N   | 规格类型名称                                      |
| productVo/groupVos/specValueVos |规则值列表| List`<Array>` | N   | 规则值列表                                   |
| productVo/groupVos/specValueVos/sequence |排序号| integer($int32) | N   | 排序号                                       |
| productVo/groupVos/specValueVos/specId |规格大类ID| String              | N   | 规格大类ID                                 |
| productVo/groupVos/specValueVos/specValue |规格值| String              | N   | 规格值                                       |
| productVo/groupVos/specValueVos/specValueId | 规格值ID | String | N | 规格值ID |
| productVo/isProductNameAppendSpecName | 是否拼接商品名称和规格名称 | String | N | 0 是，1 否（默认0） |
| productVo/listLabel | 商品标签 | List`<Array>` | N |                                                   |
| productVo/labelId | 标签id | String | N |                                                   |
| productVo/name | 标签名称 | String | N |                                                   |
| productVo/sequence | 标签排序 | integer($int32) | N |                                                   |
| productVo/listPAM | 商品属性加料 | List`<Array>` | N |                                                   |
| productVo/listPAM/attributeId | attributeId不能为空 | String | Y |                                                   |
| productVo/listPAM/attributeName | 属性名称 | String | N |                                                   |
| productVo/listPAM/attributeType | 属性类型 | integer($int32) | N |                                                   |
| productVo/listPAM/attributeValue | 属性值 | String | N |                                                   |
| productVo/listPAM/groupType | 属性组 | integer($int32) | N |                                                   |
| productVo/listPAM/status | 属性状态 | integer($int32) | N |                                        |
| productVo/listPAM/price | 价格 | integer($int32) | N |                                                   |
| productVo/listPAM/sequence | 排序 | integer($int32) |      |                                                   |
| productVo/listSku                           |                                        | List`<Array>`   |      |                                                   |
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
| productVo/listSku/skuSpecValues | 商品规格值 | List`<Array>` | | 单位kg |
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
| productVo/productType | 商品类型 | list`<Array>` | Y | |
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
| productVo/picture | 商品图片 | list`<Array>` | | |
| productVo/picture/pictureUrl | 商品图片 | string | Y | |
| productVo/picture/sequence | 排序 | integer($int32) | | |
| productVo/picture/id | id | integer($int64) | | |
| productVo/weightType |  称重类型:1.称重菜 | integer($int64) | | |
| productVo/isDishware | 是否是餐具商品 1:餐具商品 | integer($int64) || |
| productVo/packageProductTypes | 套餐可选商品集合 | Object| ||
| productVo/packageProductTypes/groupId | 商品组ID | String| ||
| productVo/packageProductTypes/sequence | 商品组顺序 | integer| ||
| productVo/productComboInfos | 套餐固定搭配集合 | Object| ||
| productVo/productComboInfos/productId | 商品id | String| ||
| productVo/productComboInfos/quantity | 数量,默认值1 | integer| ||
| productVo/productComboInfos/sequence | 商品排序信息 | integer| ||
| productVo/additionalGroupType | 加料组 | Object | | |
| productVo/additionalGroupType/groupId | 加料组id | String | | |
| productVo/additionalGroupType/groupName | 加料组名称 | String | | |
| productVo/additionalGroupType/groupDetailTypeList | 加料组详情列表 | List | | |
| productVo/additionalGroupType/groupDetailTypeList/markUpPrice | 加价价格 | Integer | | |
| productVo/additionalGroupType/groupDetailTypeList/isDefault | 是否为默认商品，1是0否 | Integer | | |
| productVo/additionalGroupType/groupDetailTypeList/productId | 商品id | String | | |
| productVo/additionalGroupType/groupDetailTypeList/sequence | 商品排序信息 | Integer | | |
| productVo/productOrganizationTypes | 商品区域信息 | list | | |
| productVo/productOrganizationTypes/organizationCode | 渠道code | String | | |
| productVo/productOrganizationTypes/organizationName | 渠道名称 | String | | |

#### 请求示例

```json
{
  "ver": "1",
  "appId": "wxaa246",
  "partnerId": "1864",
  "requestBody": "{\"currentUser\":\"十二\",\"productVo\":{\"rawMaterialList\":[],\"jdHomeBrandList\":[],\"jdHomeCategoryList\":[],\"productId\":\"\",\"partnerId\":1864,\"name\":\"单品加料\",\"productCode\":\"\",\"skuCode\":\"\",\"status\":2,\"price\":239,\"listPAM\":[],\"picture\":[{\"Id\":\"\",\"sequence\":0,\"pictureUrl\":\"https://picture.sandload.cn/1595842515413.png\"}],\"listLabel\":[],\"remark\":\"\",\"sequence\":\"\",\"nid\":\"\",\"nodeName\":\"\",\"updateDate\":\"\",\"updator\":\"\",\"customerCode\":\"202007291053\",\"customerName\":\"\",\"packPrice\":0,\"riseSell\":1,\"groupVos\":[],\"listSku\":[],\"isProductNameAppendSpecName\":null,\"upc\":\"\",\"specification\":\"\",\"unit\":\"\",\"category\":\"\",\"categoryName\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"weight\":0,\"detailText\":\"\",\"detailImages\":[],\"stockQty\":0,\"stockLimit\":2,\"stockRule\":\"\",\"businessType\":\"\",\"businessNo\":\"\",\"productType\":1,\"maxLimitNumber\":\"\",\"minLimitNumber\":\"\",\"specProductId\":\"\",\"storeCondition\":\"\",\"rawMaterial\":\"\",\"pknumber\":\"\",\"isDishware\":0,\"weightType\":0,\"platformLabelId\":\"\",\"merchantBrandCode\":\"\",\"merchantBrandName\":\"\",\"openMemberDiscount\":0,\"memberDiscount\":\"\",\"productComboInfos\":[],\"packageProductTypes\":[],\"isValidPackageProductRepeat\":false,\"productSellTimeMappingType\":{\"customerCode\":1,\"sellTimeTypes\":[],\"sellTimeMonthTypes\":[],\"sellTimeRangeTypes\":\"\"},\"productOrganizationTypes\":[],\"productBindingCouponTypes\":[],\"additionalGroupType\":{\"groupId\":\"\",\"groupName\":\"\",\"groupDetailTypeList\":[{\"productId\":\"180924447287431459\",\"productName\":\"奶霜\",\"markUpPrice\":90},{\"productId\":\"180924378835341600\",\"productName\":\"咖啡冻\",\"markUpPrice\":10}]}},\"requestHeaderInfo\":\"\"}"
  "sign": "<sign>"
}
```

#### 响应

| 字段        | 类型   | 是否必传 | 举例 | 说明   |
| ----------- | ------ | -------- | ---- | ------ |
| productId  | String   | 是       | "181770276805024828" | 商品id |

#### 响应示例
```json
{
  "ver": "1",
  "statusCode": "100",
  "message": "成功",
  "responseBody": "{\"productId\":\"181770276805024828\"}",
  "sign": "Xys+2ZyNNag2RHvnBf72uwFlSgghg+eMa7JKjjObNYykM/kxY4EaMMmS3WUSvA0lW8mNUj669KWfPVtgPo0Thc0oTyAF3XlH8R23ohuBNIT4NTVaeuS9nPkVUdFqGqcKM+LbPiC2k5CophztOaqJDqXGJsgudFElDPU+cjDJCbqCnvW0mKCM5Z7t5ABCfEkBYuvf7HW1FGqagQX0vvCdByUOOvvgGtqVH3FzUu+p3Mz8UBUdKiVW3ksqi091+xUZgcm9Xb+6Ry3gvhqrWhzQ31dle+3nilVjFOQTYDj1Y0ELImCsqij8B/w1zyl9PG7+DtaHLa4STPKGFK18mCLykA=="
}
```

## 修改商品

### 请求地址 /goods/update

### 请求方法 POST

### 请求参数


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
| productVo/groupVos     | 商品详情     | List`<Array>`      | N   | 商品详情                                 |
| productVo/groupVos/partnerId|商户编号| String              | N   | 商户编号                                          |
| productVo/groupVos/sequence|排序号   | Integer($int32)     | N   | 排序号                                            |
| productVo/groupVos/specId|规格类型ID | String              | N   | 规格类型ID                                        |
| productVo/groupVos/specName|规格类型名称| String           | N   | 规格类型名称                                      |
| productVo/groupVos/specValueVos |规则值列表| List`<Array>` | N   | 规则值列表                                   |
| productVo/groupVos/specValueVos/sequence |排序号| integer($int32) | N   | 排序号                                       |
| productVo/groupVos/specValueVos/specId |规格大类ID| String              | N   | 规格大类ID                                 |
| productVo/groupVos/specValueVos/specValue |规格值| String              | N   | 规格值                                       |
| productVo/groupVos/specValueVos/specValueId | 规格值ID | String | N | 规格值ID |
| productVo/isProductNameAppendSpecName | 是否拼接商品名称和规格名称 | String | N | 0 是，1 否（默认0） |
| productVo/listLabel | 商品标签 | List`<Array>` | N |                                                   |
| productVo/labelId | 标签id | String | N |                                                   |
| productVo/name | 标签名称 | String | N |                                                   |
| productVo/sequence | 标签排序 | integer($int32) | N |                                                   |
| productVo/listPAM | 商品属性加料 | List`<Array>` | N |                                                   |
| productVo/listPAM/attributeId | attributeId不能为空 | String | Y |                                                   |
| productVo/listPAM/attributeName | 属性名称 | String | N |                                                   |
| productVo/listPAM/attributeType | 属性类型 | integer($int32) | N |                                                   |
| productVo/listPAM/attributeValue | 属性值 | String | N |                                                   |
| productVo/listPAM/groupType | 属性组 | integer($int32) | N |                                                   |
| productVo/listPAM/status | 属性状态 | integer($int32) | N |                                        |
| productVo/listPAM/price | 价格 | integer($int32) | N |                                                   |
| productVo/listPAM/sequence | 排序 | integer($int32) |      |                                                   |
| productVo/listSku                           |                                        | List`<Array>`   |      |                                                   |
| productVo/listSku/weight | 重量 | number($double) |      | 单位kg |
| productVo/listSku/customerCode | skuCode | String |      |                                                   |
| productVo/listSku/finalPrice | 价格 | integer($int32) |      |                                                   |
| productVo/listSku/originalPrice | 价格 | integer($int32) |      |                                                   |
| productVo/listSku/packPrice | 商品包装价格 | integer($int32) |      |                                                   |
| productVo/listSku/productCode | 产品编号 | String |      |                                                   |
| productVo/listSku/productName                                | sku商品名称                            | String          |      |                                        |
| productVo/listSku/productType | 商品类型 | integer($int32) |      |                                                   |
| productVo/listSku/sequence | 排序 | integer($int32) |      |                                                   |
| productVo/listSku/skuId | skuid | String |      |                                                   |
| productVo/listSku/status | 状态 | integer($int32) |      |                                                   |
| productVo/listSku/stockLimit | 商品库存数量 | integer($int32) |      |                                                   |
| productVo/listSku/stockQty | 商品库存数量 | integer($int32) |      |                                                   |
| productVo/listSku/stockRule | 库存规则 | String |      |                                                   |
| productVo/listSku/upc | upc | String | | upc |
| productVo/listSku/skuSpecValues | 商品规格值 | List`<Array>` | | 单位kg |
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
| productVo/productType | 商品类型 | list`<Array>` | Y | |
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
| productVo/picture | 商品图片 | list`<Array>` | | |
| productVo/picture/pictureUrl | 商品图片 | string | Y | |
| productVo/picture/sequence | 排序 | integer($int32) | | |
| productVo/picture/id | id | integer($int64) | | |
| productVo/weightType |  称重类型:1.称重菜 | integer($int64) | | |
| productVo/isDishware | 是否是餐具商品 1:餐具商品 | integer($int64) || |
| productVo/packageProductTypes | 套餐可选商品集合 | Object| ||
| productVo/packageProductTypes/groupId | 商品组ID | String| ||
| productVo/packageProductTypes/sequence | 商品组顺序 | integer| ||
| productVo/productComboInfos | 套餐固定搭配集合 | Object| ||
| productVo/productComboInfos/productId | 商品id | String| ||
| productVo/productComboInfos/quantity | 数量,默认值1 | integer| ||
| productVo/productComboInfos/sequence | 商品排序信息 | integer| ||
| productVo/additionalGroupType                                | 加料组                                 | Object          |      |                                        |
| productVo/additionalGroupType/groupId                        | 加料组id                               | String          |      |                                        |
| productVo/additionalGroupType/groupName                      | 加料组名称                             | String          |      |                                        |
| productVo/additionalGroupType/groupDetailTypeList            | 加料组详情列表                         | List            |      |                                        |
| productVo/additionalGroupType/groupDetailTypeList/markUpPrice | 加价价格                               | Integer         |      |                                        |
| productVo/additionalGroupType/groupDetailTypeList/isDefault  | 是否为默认商品，1是0否                 | Integer         |      |                                        |
| productVo/additionalGroupType/groupDetailTypeList/productId  | 商品id                                 | String          |      |                                        |
| productVo/additionalGroupType/groupDetailTypeList/sequence   | 商品排序信息                           | Integer         |      |                                        |
| productVo/productOrganizationTypes                           | 商品区域信息                           | list            |      |                                        |
| productVo/productOrganizationTypes/organizationCode          | 渠道code                               | String          |      |                                        |
| productVo/productOrganizationTypes/organizationName          | 渠道名称                               | String          |      |                                        |

#### 请求示例

```json
{
  "ver":1,
  "appId": "wxaa246",
  "partnerId": "1864",
  "requestBody": "{\"currentUser\":\"十二\",\"productVo\":{\"rawMaterialList\":[],\"jdHomeBrandList\":[],\"jdHomeCategoryList\":[],\"productId\":\"\",\"partnerId\":1864,\"name\":\"单品加料\",\"productCode\":\"\",\"skuCode\":\"\",\"status\":2,\"price\":239,\"listPAM\":[],\"picture\":[{\"Id\":\"\",\"sequence\":0,\"pictureUrl\":\"https://picture.sandload.cn/1595842515413.png\"}],\"listLabel\":[],\"remark\":\"\",\"sequence\":\"\",\"nid\":\"\",\"nodeName\":\"\",\"updateDate\":\"\",\"updator\":\"\",\"customerCode\":\"202007291053\",\"customerName\":\"\",\"packPrice\":0,\"riseSell\":1,\"groupVos\":[],\"listSku\":[],\"isProductNameAppendSpecName\":null,\"upc\":\"\",\"specification\":\"\",\"unit\":\"\",\"category\":\"\",\"categoryName\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"weight\":0,\"detailText\":\"\",\"detailImages\":[],\"stockQty\":0,\"stockLimit\":2,\"stockRule\":\"\",\"businessType\":\"\",\"businessNo\":\"\",\"productType\":1,\"maxLimitNumber\":\"\",\"minLimitNumber\":\"\",\"specProductId\":\"\",\"storeCondition\":\"\",\"rawMaterial\":\"\",\"pknumber\":\"\",\"isDishware\":0,\"weightType\":0,\"platformLabelId\":\"\",\"merchantBrandCode\":\"\",\"merchantBrandName\":\"\",\"openMemberDiscount\":0,\"memberDiscount\":\"\",\"productComboInfos\":[],\"packageProductTypes\":[],\"isValidPackageProductRepeat\":false,\"productSellTimeMappingType\":{\"customerCode\":1,\"sellTimeTypes\":[],\"sellTimeMonthTypes\":[],\"sellTimeRangeTypes\":\"\"},\"productOrganizationTypes\":[],\"productBindingCouponTypes\":[],\"additionalGroupType\":{\"groupId\":\"\",\"groupName\":\"\",\"groupDetailTypeList\":[{\"productId\":\"180924447287431459\",\"productName\":\"奶霜\",\"markUpPrice\":90},{\"productId\":\"180924378835341600\",\"productName\":\"咖啡冻\",\"markUpPrice\":10}]}},\"requestHeaderInfo\":\"\"}"
  "sign": "<sign>"
}
```

#### 响应

| 字段        | 类型   | 是否必传 | 举例 | 说明   |
| ----------- | ------ | -------- | ---- | ------ |
| productId  | String   | 是       | "181770276805024828" | 商品id |

#### 响应示例
```json
{
  "ver": "1",
  "statusCode": "100",
  "message": "成功",
  "responseBody": "{\"productId\":\"181770276805024828\"}",
  "sign": "Xys+2ZyNNag2RHvnBf72uwFlSgghg+eMa7JKjjObNYykM/kxY4EaMMmS3WUSvA0lW8mNUj669KWfPVtgPo0Thc0oTyAF3XlH8R23ohuBNIT4NTVaeuS9nPkVUdFqGqcKM+LbPiC2k5CophztOaqJDqXGJsgudFElDPU+cjDJCbqCnvW0mKCM5Z7t5ABCfEkBYuvf7HW1FGqagQX0vvCdByUOOvvgGtqVH3FzUu+p3Mz8UBUdKiVW3ksqi091+xUZgcm9Xb+6Ry3gvhqrWhzQ31dle+3nilVjFOQTYDj1Y0ELImCsqij8B/w1zyl9PG7+DtaHLa4STPKGFK18mCLykA=="
}
```

## 菜单分类添加商品

### 请求地址 /goods/addMenuDetailLeaf

### 请求方法 POST

### 请求参数

| 参数                     | 类型           | 必填 | 举例 | 说明                   |
| ------------------------ | -------------- | ---- | ---- | ---------------------- |
| menuId                   | String         | Y    |      | 菜单ID                 |
| nid                      | String         | Y    |      | 菜单节点ID             |
| products                 | List`<String>` | Y    |      | 商品编号集合(非码编号) |
| requestHeaderInfo        |                | Y    |      |                        |
| requestHeaderInfo\source | String         |      |      | 数据来源               |
| sequence                 | int            |      |      | 排序值                 |
| partnerId                | String         | Y    |      | 商户号                 |

### 请求示例(待补充)

```json
{
  "ver":1,
  "partnerId":"1000",
  "appId":"2eb5c8f117dac313f89d",
  "requestBody": "{\"menuId\":\"171524858391458083\",\"nid\":\"01\",\"products\":[],\"requestHeaderInfo\":{\"source\":\"\"},\"sequence\":1,\"partnerId\":\"\"}",
  "sign": "<sign>"
}
```

### 响应：

| 参数         | 参数含义 | 类型   | 说明 |
| ------------ | -------- | ------ | ---- |
| statusCode   |          | String |      |
| message      |          | String |      |
| responseBody |          | String |      |
| sign         |          | String |      |
| ver          |          | String |      |

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

## 菜单批量绑定门店(限制300)

### 请求地址 /goods/batchBindMenu

### 请求方法 POST

### 请求参数

| 参数       | 类型           | 必填 | 举例 | 说明         |
| ---------- | -------------- | ---- | ---- | ------------ |
| partnerId  | String         | Y    |      | 商户编号     |
| menuId     | String         | Y    |      | 菜单节点ID   |
| storeIds   | List`<String>` | Y    |      | 门店编号集合 |
| channelIds | List<String>   | Y    |      | 渠道编号集合 |

### 请求示例

```json
{
  "ver":1,
  "partnerId":"1000",
  "appId":"2eb5c8f117dac313f89d",
  "requestBody":"{\"menuId\":\"137169131923508491\",\"storeIds\":[\"190314\"],\"channelIds\":[\"saas\"]}",
  "sign": "sign"
}
```

### 响应：

| 参数         | 参数含义 | 类型   | 说明 |
| ------------ | -------- | ------ | ---- |
| ver          |          | String |      |
| statusCode   |          | String |      |
| message      |          | String |      |
| responseBody |          | String |      |
| sign         |          | String |      |

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



## 商户商品批量上下架(限制300)

### 请求地址 /goods/batchChangeStatus

### 请求方法 POST

### 请求参数

| 参数       | 类型            | 必填 | 举例 | 说明                 |
| ---------- | --------------- | ---- | ---- | -------------------- |
| partnerId  | String          | Y    |      | 商户编号             |
| status     | Integer         | Y    |      | 商品状态 1下架,2上架 |
| productIds | Array`<String>` | Y    |      | 商品编号集合         |

### 请求示例

```json
{
  "ver":1,
  "partnerId":"1000",
  "appId":"2eb5c8f117dac313f89d",
  "requestBody":"{\"partnerId:\":\"1864\",\"status\":\"1\",\"productIds\":[\"146609369572911135\",\"145588001954801706\"]}",
  "sign": "sign"
}
```

### 响应：

| 参数         | 参数含义 | 类型   | 说明 |
| ------------ | -------- | ------ | ---- |
| ver          |          | String |      |
| statusCode   |          | String |      |
| message      |          | String |      |
| responseBody |          | String |      |
| sign         |          | String |      |

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

| 参数                  | 类型   | 必填 | 举例 | 说明         |
| --------------------- | ------ | ---- | ---- | ------------ |
| partnerId             | String | Y    |      | 商户编号     |
| channel               | String | Y    |      | 渠道编号     |
| storeId               |        | Y    |      | 门店编号     |
| invInfos              | List   |      |      |              |
| invInfos\customerCode | String | Y    |      | 三方商品编号 |
| invInfos\productId    | String | Y    |      | 非码商品编号 |
| invInfos\productName  | String |      |      | 商品名称     |
| invInfos\qty          | int    | Y    |      | 库存数量     |
| invInfos\remark       | String |      |      | 说明         |
| invInfos\safeQty      | int    |      |      | 安全库存     |
| invInfos\virtualQty   | int    |      |      | 虚拟库存     |

### 请求示例

```json
{
  "ver":1,
  "partnerId":"1000",
  "appId":"2eb5c8f117dac313f89d",
  "requestBody":"{\"channel\":\"xcx\",\"storeId\":\"190314\",\"invInfos\":[{\"productId\":\"145584167419324450\",\"qty\":\"68\",\"safeQty\":\"8\"}]}",
  "sign": "sign"
}
```

### 响应：

| 参数                                              | 参数含义 | 类型    | 说明             |
| ------------------------------------------------- | -------- | ------- | ---------------- |
| batchSynStoreStockResponse                        |          |         |                  |
| batchSynStoreStockResponse\batchResp              |          | List    | 同步错误数据集合 |
| batchSynStoreStockResponse\batchResp\productId    |          | String  | 非码商品编号     |
| batchSynStoreStockResponse\batchResp\customerCode |          | String  | 三方商品编号     |
| batchSynStoreStockResponse\batchResp\errorMsg     |          | String  | 错误说明         |
| batchSynStoreStockResponse\batchResp\errorCode    |          | Integer | 错误code         |
| batchSynStoreStockResponse\count                  |          | Integer | 错误数量         |

### 响应示例（待补充）

## 根据三方商品编号查询商品

### 请求地址 /goods/queryProductsByCustomCodes

### 请求方法 POST

### 请求参数

| 参数          | 类型         | 必填 | 举例 | 说明             |
| ------------- | ------------ | ---- | ---- | ---------------- |
| partnerId     | String       | Y    |      | 商户编号         |
| channel       | String       | Y    |      | 商品状态         |
| shopId        | String       | Y    |      | 门店编号         |
| customerCodes | List<String> | Y    |      | 三方商品编号集合 |

### 请求示例

```json
{
  "ver": "1",
  "appId": "wxaa246",
  "partnerId": "1864",
  "requestBody": "{\"partnerId\": \"1864\",\"channel\": \"saas\",\"shopId\": \"002903\",\"customerCodes\": [\"202007271017\"],\"productIds\": []}"
  "sign": "sign"
}
```

### 响应：

| 参数                                                         | 类型    | 参数含义                                                     | 说明 |
| ------------------------------------------------------------ | ------- | ------------------------------------------------------------ | ---- |
| products\                                                    | List    |                                                              |      |
| products\businessNo                                          | String  | 业务编号                                                     |      |
| products\barcode                                             | String  | 商品条码                                                     |      |
| products\brandId                                             | String  | 品牌ID                                                       |      |
| products\brandName                                           | String  | 品牌名称                                                     |      |
| products\category                                            | String  | 商品分类编码                                                 |      |
| products\categoryName                                        | String  | 商品分类名称                                                 |      |
| products\companyId                                           | String  | 商户ID                                                       |      |
| products\customerCode                                        | String  | 客户商品编码对应客户系统的商品编码                           |      |
| products\productCode                                         | String  | 商品编号                                                     |      |
| products\finalPrice                                          | Long    | 商品最终售价-卖价(单位分)                                    |      |
| products\isSkuProduct                                        | Integer | 是否sku商品                                                  |      |
| products\name                                                | String  | 商品名称                                                     |      |
| products\originalPrice                                       | Long    | 商品标准售价-原价(单位分)                                    |      |
| products\packPrice                                           | Long    | 包装价格(单位分)                                             |      |
| products\picture                                             | String  | 默认图片                                                     |      |
| products\pid                                                 | String  | 商品ID                                                       |      |
| products\specification                                       | String  | 规格                                                         |      |
| products\status                                              | Integer | 商品状态 /1下架/2上架/3售罄/4删除/5上架不可售(上架状态但是不在可售时间范围) |      |
| products\stock                                               | Integer | 库存                                                         |      |
| products\stockLimit                                          | Integer | 商品库存类型 /1限制库存/2不限库存                            |      |
| products\type                                                | int     | 商品类型 /1普通商品/3组合商品/6套餐/7加价套餐/9虚拟商品/10多规格商品 |      |
| products\unit                                                | String  | 单位                                                         |      |
| products\riseSell                                            | Integer | 起售份数                                                     |      |
| products\openMemberDiscount                                  | Integer | 是否开启付费会员卡(0否/1是)                                  |      |
| products\memberDiscount                                      | Integer | 会员折扣比例                                                 |      |
| products\isDishware                                          | Integer | 是否是餐具商品                                               |      |
| products\weightType                                          | Integer | 是否称重菜                                                   |      |
| products\weight                                              | Double  | 重量,最多四位小数，单位kg                                    |      |
| products\productAttributeGroupList                           |         |                                                              |      |
| products\productAttributeGroupList\attributeName             | String  | 属性组名称                                                   |      |
| products\productAttributeGroupList\attributeType             | Integer | 属性组类型                                                   |      |
| products\productAttributeGroupList\attributeValues           |         |                                                              |      |
| products\productAttributeGroupList\attributeValues\attributeId | String  | 属性值ID                                                     |      |
| products\productAttributeGroupList\attributeValues\attributeValue | String  | 属性名称                                                     |      |
| products\productAttributeGroupList\attributeValues\id        | String  | 商品属性mappingid                                            |      |
| products\productAttributeGroupList\attributeValues\price     | Integer | 属性价格信息                                                 |      |
| products\productAttributeGroupList\attributeValues\sequence  | Integer | 属性值排序信息                                               |      |
| products\productAttributeGroupList\attributeValues\status    | Integer | 属性状态信息                                                 |      |
| products\additionalGroupList                                 | List    | 加料商品                                                     |      |
| products\additionalGroupList\pgid                            | String  | 加料组ID                                                     |      |
| products\additionalGroupList\linkId                          | String  | 商户ID                                                       |      |
| products\additionalGroupList\groupCode                       | String  | 商品组编号，跟groupId一样确认商品组唯一的字段                |      |
| products\additionalGroupList\options                         | String  | 扩展字段                                                     |      |
| products\additionalGroupList\name                            | String  | 商品组名                                                     |      |
| products\additionalGroupList\must                            | Integer | 商品组规则-是否必选                                          |      |
| products\additionalGroupList\allowRepeat                     | Integer | 商品组规则-是否允许重复选                                    |      |
| products\additionalGroupList\minNumber                       | Integer | 商品组规则-选择的最小数量                                    |      |
| products\additionalGroupList\maxNumber                       | Integer | 商品组规则-选择的最大数量                                    |      |
| products\additionalGroupList\remark                          | String  | 商品组备注                                                   |      |
| products\additionalGroupList\total                           | Integer | 商品组下子商品总数量                                         |      |
| products\additionalGroupList\groupDetail                     | List    | 商品组详情                                                   |      |
| products\additionalGroupList\groupDetail\productId           | String  | 商品ID                                                       |      |
| products\additionalGroupList\groupDetail\productName         | String  | 商品名称                                                     |      |
| products\additionalGroupList\groupDetail\customerCode        | String  | 第三方商品编码                                               |      |
| products\additionalGroupList\groupDetail\productPrice        | Integer | 标准售价                                                     |      |
| products\additionalGroupList\groupDetail\productFinalPrice   | Integer | 最终售价                                                     |      |
| products\additionalGroupList\groupDetail\picture             | String  | 商品默认图片                                                 |      |
| products\additionalGroupList\groupDetail\stockLimit          | Integer | 是否设置库存                                                 |      |
| products\additionalGroupList\groupDetail\unit                | String  | 单位                                                         |      |
| products\additionalGroupList\groupDetail\productCode         | String  | 商品Code                                                     |      |
| products\additionalGroupList\groupDetail\weightType          | Integer | 是否是称重商品 1 =称重商品                                   |      |
| products\additionalGroupList\groupDetail\weight              | Double  | 重量                                                         |      |

### 响应示例

```json
{
  "ver": "1",
  "statusCode": "100",
  "message": "成功",
  "responseBody": "[{\"additionalGroupList\":[{\"allowRepeat\":0,\"groupCode\":\"g181445667657572905\",\"groupDetail\":[{\"customerCode\":\"bb01\",\"markUpPrice\":10,\"picture\":\"https://picture.sandload.cn/1595240789993.jpg\",\"productCode\":\"\",\"productFinalPrice\":10,\"productId\":\"180924265316503837\",\"productName\":\"波霸\",\"productPrice\":0,\"stockLimit\":0,\"unit\":\"\",\"weight\":0.0,\"weightType\":0},{\"customerCode\":\"kfd01\",\"markUpPrice\":10,\"picture\":\"https://picture.sandload.cn/1595240789993.jpg\",\"productCode\":\"\",\"productFinalPrice\":10,\"productId\":\"180924378835341600\",\"productName\":\"咖啡冻\",\"productPrice\":0,\"stockLimit\":0,\"unit\":\"\",\"weight\":0.0,\"weightType\":0}],\"linkId\":\"1864\",\"maxNumber\":0,\"minNumber\":0,\"must\":0,\"name\":\"\",\"options\":\"\",\"pgid\":\"181466012421485831\",\"remark\":\"\",\"total\":0}],\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"category\":\"first1111\",\"categoryName\":\"第一级\",\"companyId\":\"1864\",\"customerCode\":\"202007271017\",\"finalPrice\":1000,\"isDishware\":0,\"isSkuProduct\":2,\"memberDiscount\":0,\"memberDiscountResult\":100,\"name\":\"多规格绑定加料\",\"openMemberDiscount\":0,\"originalPrice\":1100,\"packPrice\":0,\"picture\":\"https://picture.sandload.cn/1595816239791.png\",\"pid\":\"181445667657572905\",\"productAttributeGroupList\":[{\"attributeName\":\"分量\",\"attributeType\":100050,\"attributeValues\":[{\"attributeId\":\"179142649493737233\",\"attributeValue\":\"2kg\",\"id\":181466013077894411,\"price\":0,\"sequence\":0,\"status\":2},{\"attributeId\":\"168806444808822024\",\"attributeValue\":\"1kg\",\"id\":181466013077894412,\"price\":0,\"sequence\":2,\"status\":2}]}],\"productCode\":\"\",\"productComboList\":[],\"productGroupList\":[],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://picture.sandload.cn/1595816239791.png\"}],\"riseSell\":1,\"skuList\":[{\"customerCode\":\"181445667757187633\",\"finalPrice\":1000,\"memberDiscountResult\":100,\"originalPrice\":1000,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"多规格绑定加料/冷\",\"productType\":1,\"riseSell\":1,\"sequence\":0,\"skuId\":\"181445667757187633\",\"skuSpecValues\":[{\"productId\":\"181445667757187633\",\"sequence\":1,\"specId\":\"127177627269155847\",\"specName\":\"温度\",\"specValue\":\"冷\",\"specValueId\":\"125396403744789027\"}],\"status\":2,\"stockLimit\":2,\"stockQty\":9999,\"unit\":\"\",\"weight\":0.0},{\"customerCode\":\"181445667757187637\",\"finalPrice\":1100,\"memberDiscountResult\":100,\"originalPrice\":1100,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"多规格绑定加料/热\",\"productType\":1,\"riseSell\":1,\"sequence\":0,\"skuId\":\"181445667757187637\",\"skuSpecValues\":[{\"productId\":\"181445667757187637\",\"sequence\":2,\"specId\":\"127177627269155847\",\"specName\":\"温度\",\"specValue\":\"热\",\"specValueId\":\"125396413426291236\"}],\"status\":2,\"stockLimit\":2,\"stockQty\":9999,\"unit\":\"\",\"weight\":0.0}],\"skuSpecValues\":[],\"specification\":\"\",\"status\":2,\"stock\":0,\"stockLimit\":0,\"type\":10,\"unit\":\"\",\"weight\":0.0,\"weightType\":0}]",
  "sign": "y/EdnP4X4pLJ4hJfYjTfoH/2TXx5G9ttvIzgQ+9XMnS1eh42aaMjaF2MZOqUoKGXvPVF9rZWRIEoXoTH0ATbmg6RgyFtZqDoq/JKxuFhgVaA+LgYgf8aqSz9CVjww2ppFnqN8eAANwBUHNIKa/Fwa/ZNnSAaQhl6M+MEkwuh53I/ODEkumedu/QIpeyomghukcOdb34FXAumJs+AtMQLGse1eHtfKlhrBhnh85t54VrnPj9HV+6OPbkS39hh4QaRHs5e0kheUp57yl1OBAtN6zdAgDb/ws/CHFH+QSOB98g9FCPxyCjA//DGfYf3rVz/eeelTd/gsohVhhVXgVbnLw=="
}
```

## 根据非码商品编号查询商品

### 请求地址 /goods/queryProductsByProductIds

### 请求方法 POST

### 请求参数

| 参数       | 类型         | 必填 | 举例 | 说明             |
| ---------- | ------------ | ---- | ---- | ---------------- |
| partnerId  | String       | Y    |      | 商户编号         |
| channel    | String       | Y    |      | 商品状态         |
| shopId     | String       | Y    |      | 门店编号         |
| productIds | List<String> | Y    |      | 非码商品编号集合 |

### 请求示例

```json
{
  "ver": "1",
  "appId": "wxaa246",
  "partnerId": "1864",
  "requestBody": "{\"partnerId\": \"1864\",\"channel\": \"saas\",\"shopId\": \"002903\",\"customerCodes\": [],\"productIds\": [\"181445667657572905\"]}"
  "sign": "sign"
}
```

### 响应：

| 参数                                                         | 类型    | 参数含义                                                     | 说明 |
| ------------------------------------------------------------ | ------- | ------------------------------------------------------------ | ---- |
| products\                                                    | List    |                                                              |      |
| products\businessNo                                          | String  | 业务编号                                                     |      |
| products\barcode                                             | String  | 商品条码                                                     |      |
| products\brandId                                             | String  | 品牌ID                                                       |      |
| products\brandName                                           | String  | 品牌名称                                                     |      |
| products\category                                            | String  | 商品分类编码                                                 |      |
| products\categoryName                                        | String  | 商品分类名称                                                 |      |
| products\companyId                                           | String  | 商户ID                                                       |      |
| products\customerCode                                        | String  | 客户商品编码对应客户系统的商品编码                           |      |
| products\productCode                                         | String  | 商品编号                                                     |      |
| products\finalPrice                                          | Long    | 商品最终售价-卖价(单位分)                                    |      |
| products\isSkuProduct                                        | Integer | 是否sku商品                                                  |      |
| products\name                                                | String  | 商品名称                                                     |      |
| products\originalPrice                                       | Long    | 商品标准售价-原价(单位分)                                    |      |
| products\packPrice                                           | Long    | 包装价格(单位分)                                             |      |
| products\picture                                             | String  | 默认图片                                                     |      |
| products\pid                                                 | String  | 商品ID                                                       |      |
| products\specification                                       | String  | 规格                                                         |      |
| products\status                                              | Integer | 商品状态 /1下架/2上架/3售罄/4删除/5上架不可售(上架状态但是不在可售时间范围) |      |
| products\stock                                               | Integer | 库存                                                         |      |
| products\stockLimit                                          | Integer | 商品库存类型 /1限制库存/2不限库存                            |      |
| products\type                                                | int     | 商品类型 /1普通商品/3组合商品/6套餐/7加价套餐/9虚拟商品/10多规格商品 |      |
| products\unit                                                | String  | 单位                                                         |      |
| products\riseSell                                            | Integer | 起售份数                                                     |      |
| products\openMemberDiscount                                  | Integer | 是否开启付费会员卡(0否/1是)                                  |      |
| products\memberDiscount                                      | Integer | 会员折扣比例                                                 |      |
| products\isDishware                                          | Integer | 是否是餐具商品                                               |      |
| products\weightType                                          | Integer | 是否称重菜                                                   |      |
| products\weight                                              | Double  | 重量,最多四位小数，单位kg                                    |      |
| products\productAttributeGroupList                           |         |                                                              |      |
| products\productAttributeGroupList\attributeName             | String  | 属性组名称                                                   |      |
| products\productAttributeGroupList\attributeType             | Integer | 属性组类型                                                   |      |
| products\productAttributeGroupList\attributeValues           |         |                                                              |      |
| products\productAttributeGroupList\attributeValues\attributeId | String  | 属性值ID                                                     |      |
| products\productAttributeGroupList\attributeValues\attributeValue | String  | 属性名称                                                     |      |
| products\productAttributeGroupList\attributeValues\id        | String  | 商品属性mappingid                                            |      |
| products\productAttributeGroupList\attributeValues\price     | Integer | 属性价格信息                                                 |      |
| products\productAttributeGroupList\attributeValues\sequence  | Integer | 属性值排序信息                                               |      |
| products\productAttributeGroupList\attributeValues\status    | Integer | 属性状态信息                                                 |      |
| products\additionalGroupList                                 | List    | 加料商品                                                     |      |
| products\additionalGroupList\pgid                            | String  | 加料组ID                                                     |      |
| products\additionalGroupList\linkId                          | String  | 商户ID                                                       |      |
| products\additionalGroupList\groupCode                       | String  | 商品组编号，跟groupId一样确认商品组唯一的字段                |      |
| products\additionalGroupList\options                         | String  | 扩展字段                                                     |      |
| products\additionalGroupList\name                            | String  | 商品组名                                                     |      |
| products\additionalGroupList\must                            | Integer | 商品组规则-是否必选                                          |      |
| products\additionalGroupList\allowRepeat                     | Integer | 商品组规则-是否允许重复选                                    |      |
| products\additionalGroupList\minNumber                       | Integer | 商品组规则-选择的最小数量                                    |      |
| products\additionalGroupList\maxNumber                       | Integer | 商品组规则-选择的最大数量                                    |      |
| products\additionalGroupList\remark                          | String  | 商品组备注                                                   |      |
| products\additionalGroupList\total                           | Integer | 商品组下子商品总数量                                         |      |
| products\additionalGroupList\groupDetail                     | List    | 商品组详情                                                   |      |
| products\additionalGroupList\groupDetail\productId           | String  | 商品ID                                                       |      |
| products\additionalGroupList\groupDetail\productName         | String  | 商品名称                                                     |      |
| products\additionalGroupList\groupDetail\customerCode        | String  | 第三方商品编码                                               |      |
| products\additionalGroupList\groupDetail\productPrice        | Integer | 标准售价                                                     |      |
| products\additionalGroupList\groupDetail\productFinalPrice   | Integer | 最终售价                                                     |      |
| products\additionalGroupList\groupDetail\picture             | String  | 商品默认图片                                                 |      |
| products\additionalGroupList\groupDetail\stockLimit          | Integer | 是否设置库存                                                 |      |
| products\additionalGroupList\groupDetail\unit                | String  | 单位                                                         |      |
| products\additionalGroupList\groupDetail\productCode         | String  | 商品Code                                                     |      |
| products\additionalGroupList\groupDetail\weightType          | Integer | 是否是称重商品 1 =称重商品                                   |      |
| products\additionalGroupList\groupDetail\weight              | Double  | 重量                                                         |      |

### 响应示例

```json
{
  "ver": "1",
  "statusCode": "100",
  "message": "成功",
  "responseBody": "[{\"additionalGroupList\":[{\"allowRepeat\":0,\"groupCode\":\"g181445667657572905\",\"groupDetail\":[{\"customerCode\":\"bb01\",\"markUpPrice\":10,\"picture\":\"https://picture.sandload.cn/1595240789993.jpg\",\"productCode\":\"\",\"productFinalPrice\":10,\"productId\":\"180924265316503837\",\"productName\":\"波霸\",\"productPrice\":0,\"stockLimit\":0,\"unit\":\"\",\"weight\":0.0,\"weightType\":0},{\"customerCode\":\"kfd01\",\"markUpPrice\":10,\"picture\":\"https://picture.sandload.cn/1595240789993.jpg\",\"productCode\":\"\",\"productFinalPrice\":10,\"productId\":\"180924378835341600\",\"productName\":\"咖啡冻\",\"productPrice\":0,\"stockLimit\":0,\"unit\":\"\",\"weight\":0.0,\"weightType\":0}],\"linkId\":\"1864\",\"maxNumber\":0,\"minNumber\":0,\"must\":0,\"name\":\"\",\"options\":\"\",\"pgid\":\"181466012421485831\",\"remark\":\"\",\"total\":0}],\"barcode\":\"\",\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"category\":\"first1111\",\"categoryName\":\"第一级\",\"companyId\":\"1864\",\"customerCode\":\"202007271017\",\"finalPrice\":1000,\"isDishware\":0,\"isSkuProduct\":2,\"memberDiscount\":0,\"memberDiscountResult\":100,\"name\":\"多规格绑定加料\",\"openMemberDiscount\":0,\"originalPrice\":1100,\"packPrice\":0,\"picture\":\"https://picture.sandload.cn/1595816239791.png\",\"pid\":\"181445667657572905\",\"productAttributeGroupList\":[{\"attributeName\":\"分量\",\"attributeType\":100050,\"attributeValues\":[{\"attributeId\":\"179142649493737233\",\"attributeValue\":\"2kg\",\"id\":181466013077894411,\"price\":0,\"sequence\":0,\"status\":2},{\"attributeId\":\"168806444808822024\",\"attributeValue\":\"1kg\",\"id\":181466013077894412,\"price\":0,\"sequence\":2,\"status\":2}]}],\"productCode\":\"\",\"productComboList\":[],\"productGroupList\":[],\"productPictureList\":[{\"sequence\":\"0\",\"type\":\"default\",\"url\":\"https://picture.sandload.cn/1595816239791.png\"}],\"riseSell\":1,\"skuList\":[{\"customerCode\":\"181445667757187633\",\"finalPrice\":1000,\"memberDiscountResult\":100,\"originalPrice\":1000,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"多规格绑定加料/冷\",\"productType\":1,\"riseSell\":1,\"sequence\":0,\"skuId\":\"181445667757187633\",\"skuSpecValues\":[{\"productId\":\"181445667757187633\",\"sequence\":1,\"specId\":\"127177627269155847\",\"specName\":\"温度\",\"specValue\":\"冷\",\"specValueId\":\"125396403744789027\"}],\"status\":2,\"stockLimit\":2,\"stockQty\":9999,\"unit\":\"\",\"weight\":0.0},{\"customerCode\":\"181445667757187637\",\"finalPrice\":1100,\"memberDiscountResult\":100,\"originalPrice\":1100,\"packPrice\":0,\"productCode\":\"\",\"productName\":\"多规格绑定加料/热\",\"productType\":1,\"riseSell\":1,\"sequence\":0,\"skuId\":\"181445667757187637\",\"skuSpecValues\":[{\"productId\":\"181445667757187637\",\"sequence\":2,\"specId\":\"127177627269155847\",\"specName\":\"温度\",\"specValue\":\"热\",\"specValueId\":\"125396413426291236\"}],\"status\":2,\"stockLimit\":2,\"stockQty\":9999,\"unit\":\"\",\"weight\":0.0}],\"skuSpecValues\":[],\"specification\":\"\",\"status\":2,\"stock\":0,\"stockLimit\":0,\"type\":10,\"unit\":\"\",\"weight\":0.0,\"weightType\":0}]",
  "sign": "y/EdnP4X4pLJ4hJfYjTfoH/2TXx5G9ttvIzgQ+9XMnS1eh42aaMjaF2MZOqUoKGXvPVF9rZWRIEoXoTH0ATbmg6RgyFtZqDoq/JKxuFhgVaA+LgYgf8aqSz9CVjww2ppFnqN8eAANwBUHNIKa/Fwa/ZNnSAaQhl6M+MEkwuh53I/ODEkumedu/QIpeyomghukcOdb34FXAumJs+AtMQLGse1eHtfKlhrBhnh85t54VrnPj9HV+6OPbkS39hh4QaRHs5e0kheUp57yl1OBAtN6zdAgDb/ws/CHFH+QSOB98g9FCPxyCjA//DGfYf3rVz/eeelTd/gsohVhhVXgVbnLw=="
}
```

## 新增商品组信息

### 请求地址 /goods/addProductGroup

### 请求方法 POST

### 请求参数

| 参数                    | 类型    | 必填 | 举例 | 说明                                          |
| ----------------------- | ------- | ---- | ---- | --------------------------------------------- |
| groupCode               | String  | Y    |      | 商品组第三方编码，跟groupid一样确定唯一性     |
| maxNumber               | Integer | Y    |      | 商品组规则-选择的最大数量                     |
| minNumber               | Integer | Y    |      | 商品组规则-选择的最小数量                     |
| must                    | Integer |      |      | 商品组规则 /1必选/2非必选                     |
| name                    | String  | Y    |      | 商品组名                                      |
| options                 | String  | Y    |      | 扩展字段                                      |
| partnerId               | String  |      |      | 商户编号                                      |
| pgid                    | String  | Y    |      | 商品组ID,新增商品组时不用设置值，系统自动生成 |
| remark                  | String  |      |      | 商品组备注                                    |
| groupDetail\            | List    |      |      | 商品组详情                                    |
| groupDetail\markUpPrice | Integer |      |      | 加价价格                                      |
| groupDetail\isDefault   | Integer |      |      | 是否为默认商品，1是0否                        |
| groupDetail\productId   | String  |      |      | 商品id                                        |
| groupDetail\sequence    | Integer |      |      | 商品排序信息                                  |

### 请求示例(待补充)

```json
{
  "ver":1,
  "partnerId":"1000",
  "appId":"2eb5c8f117dac313f89d",
  "requestBody":"{\"groupCode\":\"\",\"maxNumber\":\"\",\"minNumber\":\"\",\"must\":\"\",\"name\":\"\",\"options\":\"\",\"partnerId\":\"\",\"pgid\":\"\",\"remark\":\"\",\"groupDetail\":[{\"markUpPrice\":100,\"isDefault\":1,\"productId\":\"\",\"sequence\":1}]}",
  "sign": "sign"
}
```

### 响应：

| 参数                          | 参数含义                                                     | 类型 | 说明 |
| ----------------------------- | ------------------------------------------------------------ | ---- | ---- |
| pgid                          | 商品组ID                                                     |      |      |
| linkId                        | 商户ID                                                       |      |      |
| groupCode                     | 商品组编号，跟groupId一样确认商品组唯一的字段                |      |      |
| options                       | 扩展字段                                                     |      |      |
| name                          | 商品组名                                                     |      |      |
| must                          | 商品组规则-是否必选                                          |      |      |
| allowRepeat                   | 商品组规则-是否允许重复选                                    |      |      |
| minNumber                     | 商品组规则-选择的最小数量                                    |      |      |
| maxNumber                     | 商品组规则-选择的最大数量                                    |      |      |
| remark                        | 商品组备注                                                   |      |      |
| total                         | 商品组下子商品总数量                                         |      |      |
| createDate                    | 创建时间                                                     |      |      |
| updateDate                    | 更新时间                                                     |      |      |
| groupDetail\                  |                                                              |      |      |
| groupDetail\groupId           | 商品组ID                                                     |      |      |
| groupDetail\sequence          | 排序                                                         |      |      |
| groupDetail\isDefault         | 是否默认商品，1是0否                                         |      |      |
| groupDetail\productId         | 商品ID                                                       |      |      |
| groupDetail\productName       | 商品名称                                                     |      |      |
| groupDetail\customerCode      | 第三方商品编码                                               |      |      |
| groupDetail\productPrice      | 标准售价                                                     |      |      |
| groupDetail\productFinalPrice | 最终售价                                                     |      |      |
| groupDetail\markUpPrice       | 加价价格                                                     |      |      |
| groupDetail\defaultQuantity   | 默认选中数量                                                 |      |      |
| groupDetail\category          | 商品后台分类编码                                             |      |      |
| groupDetail\categoryName      | 商品后台分类                                                 |      |      |
| groupDetail\picture           | 商品默认图片                                                 |      |      |
| groupDetail\status            | 商品状态 /1下架/2上架/3售罄/4删除                            |      |      |
| groupDetail\stockLimit        | 是否设置库存                                                 |      |      |
| groupDetail\specification     | 规格                                                         |      |      |
| groupDetail\productType       | 商品类型 /1普通商品/3组合商品/6套餐/7加价套餐/9虚拟商品/10多规格商品 |      |      |
| groupDetail\unit              | 单位                                                         |      |      |
| groupDetail\barcode           | upc                                                          |      |      |
| groupDetail\options           | 扩展字段                                                     |      |      |
| groupDetail\productCode       | 商品Code                                                     |      |      |
| groupDetail\weightType        | 是否是称重商品                                               |      |      |
| groupDetail\weight            | 重量,单位kg                                                  |      |      |

### 响应示例（待补充）

## 商品组添加商品

### 请求地址 /product/group/addProducts

### 请求方法 POST

### 请求参数

| 参数                          | 类型    | 必填 | 举例 | 说明         |
| ----------------------------- | ------- | ---- | ---- | ------------ |
| partnerId                     | String  | Y    |      | 商户编号     |
| pgid                          | Integer | Y    |      | 商品组id     |
| groupProductInfos             | List    | Y    |      |              |
| groupProductInfos\isDefault   | Integer |      |      | 是否默认商品 |
| groupProductInfos\markUpPrice | String  | Y    |      | 商品加价价格 |
| groupProductInfos\productId   | String  | Y    |      | 商品编号     |
| groupProductInfos\sequence    | String  |      |      | 排序值       |

### 请求示例

```json
{
  "ver":1,
  "partnerId":"1000",
  "appId":"2eb5c8f117dac313f89d",
  "requestBody":"{\"partnerId\":\"1864\",\"pgid\":1,\"groupProductInfos\":[{\"isDefault\":1,\"markUpPrice\":100,\"productId\":\"\",\"sequence\":\"\"}]}",
  "sign": "sign"
}
```

### 响应（待补充）

### 响应示例（待补充）


## 商品组删除多个商品

### 请求地址 /product/group/deleteProducts

### 请求方法 POST

### 请求参数

| 参数       | 类型       | 必填 | 举例 | 说明     |
| ---------- | ---------- | ---- | ---- | -------- |
| partnerId  | String     | Y    |      | 商户编号 |
| pgid       | Integer    | Y    |      | 商品组id |
| productIds | List<Long> | Y    |      | 商品编号 |

### 请求示例

```json
{
  "ver":1,
  "partnerId":"1864",
  "appId":"2eb5c8f117dac313f89d",
  "requestBody":"{\"partnerId\":\"1864\",\"pgid\":1,\"productIds\":[\"1349043043210\",\"134109432190\"]}",
  "sign": "sign"
}
```

### 响应（待补充）

### 响应示例（待补充）


## 门店根据code批量上下架商品

### 请求地址 /goods/syncProductStatus/code

### 请求方法 POST

### 请求参数

| 参数       | 类型            | 必填 | 举例 | 说明                 |
| ---------- | --------------- | ---- | ---- | -------------------- |
| partnerId  | String          | Y    |      | 商户编号             |
| shopId  | String          | Y    |      | 门店编号             |
| channel  | String          | N    |      | 渠道编号,默认saas             |
| productStatusList\   | List         | Y    |      | 商品上下架集合 |
| productStatusList/customerCode | String | Y    |      | 商品编号         |
| productStatusList/status | Integer | Y    |      |商品状态 1上架,2下架         |


### 请求示例

```json
{
    "ver": 1,
    "partnerId": "1864",
    "appId": "wxaa246",
    "requestBody": "{\"shopId\":\"3545465788\",\"partnerId\":\"1864\",\"productStatusList\":[{\"customerCode\":\"MCD20200715_1\",\"status\":2},{\"customerCode\":\"MCD20200715_2\",\"status\":1}]}",
    "sign": "<sign>"
}

```

### 响应：
```json
{
  "ver": "1",
  "statusCode": "100",
  "message": "成功",
  "responseBody": "\"\"",
  "sign": "RJpzfEz6+zR+nBGgkt5A4HcIH7LqMLALk0tNiEu0xS/zZBV23Awo+pr33BeapzOCeRNDnv53mQxvIvbI8jWTspukQM4olaE2sYrFTy2gNqgNod/A+5UTZLvHGtuEX/F2SZS25ok4F5Rzt2z+GVTG9D/jcGmRV7QqsmWM2D6rxz95NCGlBTckUmU0SsaHkyKascHO2BEjlRBz6BDl/r4zi/lSuWFYl/WcYhiJ01mrIOBBKMpVlvnOzwWD/c8Ee0Z+s3DGkpzmnyFH1E26C6Hg18GjWz13NobPi/+gfSpXaFna/wXvWGmcm/1dvchoscmTKmaHfhkhmeJPOm05j0xYaw=="
}

```

## 商品列表

### 请求地址 /goods/searchProduct

### 请求方法 POST

### 请求参数

| 参数                 | 类型    | 必填 | 举例 | 说明                                                         |
| -------------------- | ------- | ---- | ---- | ------------------------------------------------------------ |
| partnerId            | String  | Y    |      | 商户id                                                       |
| productCode          | String  | N    |      | 商品货号                                                     |
| customerCode         | String  | N    |      | 商品编号                                                     |
| productId            | String  | N    |      | 产品id                                                       |
| productName          | String  | N    |      | 产品名称模糊查询                                             |
| labelId              | String  | N    |      | 标签Id                                                       |
| status               | String  | N    |      | 1=下架，2=上架，3=售罄                                       |
| customerCategoryId   | String  | N    |      | 分类的第三方编号: 即分类列表返回的customerCategoryId         |
| paging               | Object  | Y    |      | 分页参数                                                     |
| paging/pageNum       | Integer | Y    |      |                                                              |
| paging/pageSize      | Integer | Y    |      |                                                              |
| includedProducts     | List    | N    |      | 包含的商品Id                                                 |
| productType          | Integer | N    |      | 商品类型 /1普通商品/3组合商品/6套餐/7加价套餐/9虚拟商品/10多规格商品 |
| includeProductType   | List    | N    |      | 包含哪些商品类型,不可以和排除都选择                          |
| excludeProductType   | List    | N    |      | 排除哪些商品类型,不可以和包含都选择                          |
| includeBusinessTypes | List    | N    |      | 包含的商品业务类型                                           |
| platformLabelId      | String  | N    |      | 商品平台标签id                                               |
| isIncludeSku         | Boolean | N    |      | 是否包含sku商品,默认为false                                  |
| excludeAdditional    | Boolean | N    |      | 是否排除绑定有加料的商品,默认为false                         |
| merchantBrandCode    | String  | N    |      | 子品牌编码                                                   |
| organizationCodes    | List    | N    |      | 组织机构编码                                                 |
| productNameEquals    | Set     | N    |      | 产品名称精确查询                                             |

### 请求示例

```json
{
  "sign": "<sign>",
  "ver": "1",
  "appId": "wxaa246",
  "partnerId": "1864",
  "requestBody": "{\"status\": 0,\"excludeProductType\": [2],\"partnerId\": \"1864\",\"paging\": {\"pageNum\": 1,\"pageSize\": 10},\"platformlabelId\": \"137798724836528641\"}"
}
```

### 响应：

| 字段                                                         | 类型    | 是否必传 | 举例 | 说明                                                         |
| ------------------------------------------------------------ | ------- | -------- | ---- | ------------------------------------------------------------ |
| totalCount                                                   | Long    |          |      | 总数量,推荐使用                                              |
| totalPages                                                   | Long    |          |      | 总页数                                                       |
| totalNum                                                     | Long    |          |      | 总数量                                                       |
| list                                                         | List    |          |      | 返回数据列表                                                 |
| list\productId                                               | String  |          |      | 商品id                                                       |
| list\partnerId                                               | String  |          |      | 商户id                                                       |
| list\name                                                    | String  |          |      | 商品名称                                                     |
| list\productCode                                             | String  |          |      | 产品编号                                                     |
| list\skuCode                                                 | String  |          |      | sku编号                                                      |
| list\status                                                  | Integer |          |      | 商品状态  1=下架, 2=上架, 3=售罄                             |
| list\price                                                   | Integer |          |      | 商品价格                                                     |
| list\listPAM                                                 | List    |          |      | 商品与属性映射关系                                           |
| list\listPAM\Id                                              | String  |          |      | 主键                                                         |
| list\listPAM\attributeId                                     | String  |          |      | 商品属性id, attributeId不能为空                              |
| list\listPAM\attributeType                                   | Integer |          |      | 属性类型                                                     |
| list\listPAM\attributeCustomerCode                           | String  |          |      | 属性的第三方编码                                             |
| list\listPAM\attributeValueCustomerCode                      | String  |          |      | 属性值的第三方编码                                           |
| list\listPAM\attributeName                                   | String  |          |      | 属性名称                                                     |
| list\listPAM\attributeValue                                  | String  |          |      | 属性值                                                       |
| list\listPAM\groupType                                       | short   |          |      | 属性组                                                       |
| list\listPAM\sequence                                        | Integer |          |      | 排序                                                         |
| list\listPAM\price                                           | Integer |          |      | 价格                                                         |
| list\listPAM\status                                          | Integer |          |      | 属性状态                                                     |
| list\picture                                                 | List    |          |      | 商品图片                                                     |
| list\picture\id                                              | Long    |          |      | 图片id                                                       |
| list\picture\pictureUrl                                      | String  |          |      | 图片url地址                                                  |
| list\picture\sequence                                        | Integer |          |      | 排序                                                         |
| list\listLabel                                               | List    |          |      | 商品标签                                                     |
| list\listLabel\labelId                                       | String  |          |      | 商品标签id                                                   |
| list\listLabel\name                                          | String  |          |      | 商品标签名称                                                 |
| list\listLabel\sequence                                      | Integer |          |      | 排序                                                         |
| list\remark                                                  | String  |          |      | 商品描述                                                     |
| list\sequence                                                | Integer |          |      | 排序                                                         |
| list\nid                                                     | String  |          |      | 菜单分类ID                                                   |
| list\nodeName                                                | String  |          |      | 菜单商品分类名称                                             |
| list\updateDate                                              | Date    |          |      | 更新时间                                                     |
| list\updator                                                 | String  |          |      | 更新人                                                       |
| list\customerCode                                            | String  |          |      | 客户商品编码, 对应客户的系统的商品编码                       |
| list\customerName                                            | String  |          |      | 三方商品名称                                                 |
| list\packPrice                                               | Integer |          |      | 商品包装价格                                                 |
| list\riseSell                                                | Integer |          |      | 起购份数                                                     |
| list\groupVos                                                | List    |          |      | 规格信息                                                     |
| list\groupVos\specId                                         | String  |          |      | 规格类型ID                                                   |
| list\groupVos\partnerId                                      | String  |          |      | 商户编号                                                     |
| list\groupVos\specName                                       | String  |          |      | 规格类型名称                                                 |
| list\groupVos\customerCode                                   | String  |          |      | 第三方编码                                                   |
| list\groupVos\sequence                                       | Integer |          |      | 排序号                                                       |
| list\groupVos\createDate                                     | Date    |          |      | 创建时间                                                     |
| list\groupVos\updateDate                                     | Date    |          |      | 更新时间                                                     |
| list\groupVos\specValueVos                                   | List    |          |      | 规格值列表                                                   |
| list\groupVos\specValueVos\specValueId                       | String  |          |      | 规格值ID                                                     |
| list\groupVos\specValueVos\specId                            | String  |          |      | 规格大类ID                                                   |
| list\groupVos\specValueVos\customerCode                      | String  |          |      | 第三方编码                                                   |
| list\groupVos\specValueVos\status                            | Integer |          |      | 规格的状态                                                   |
| list\groupVos\specValueVos\specValue                         | String  |          |      | 规格值                                                       |
| list\groupVos\specValueVos\sequence                          | Integer |          |      | 排序号                                                       |
| list\groupVos\specValueVos\createDate                        | Date    |          |      | 创建时间                                                     |
| list\groupVos\specValueVos\updateDate                        | Date    |          |      | 更新时间                                                     |
| list\listSku                                                 | List    |          |      | sku明细                                                      |
| list\listSku\skuId                                           | String  |          |      | skuID                                                        |
| list\listSku\productName                                     | String  |          |      | 规格名                                                       |
| list\listSku\productType                                     | Integer |          |      | 商品类型                                                     |
| list\listSku\customerCode                                    | String  |          |      | skuCode                                                      |
| list\listSku\originalPrice                                   | Integer |          |      | 价格                                                         |
| list\listSku\finalPrice                                      | Integer |          |      | 最终价格                                                     |
| list\listSku\status                                          | Integer |          |      | 状态                                                         |
| list\listSku\sequence                                        | Integer |          |      | 排序                                                         |
| list\listSku\skuSpecValues                                   | List    |          |      | 商品规格值                                                   |
| list\listSku\skuSpecValues\productId                         | String  |          |      | 商品id                                                       |
| list\listSku\skuSpecValues\specId                            | String  |          |      | 规格Id                                                       |
| list\listSku\skuSpecValues\specValueCustomerCode             | String  |          |      | 规格值的第三方编码                                           |
| list\listSku\skuSpecValues\specCustomerCode                  | String  |          |      | 规格的第三方编码                                             |
| list\listSku\skuSpecValues\specName                          | String  |          |      | 规格名                                                       |
| list\listSku\skuSpecValues\specValueId                       | String  |          |      | 规格值Id                                                     |
| list\listSku\skuSpecValues\specValue                         | String  |          |      | 规格值                                                       |
| list\listSku\skuSpecValues\sequence                          | Integer |          |      | 排序                                                         |
| list\listSku\packPrice                                       | Integer |          |      | 商品包装价格                                                 |
| list\listSku\riseSell                                        | Integer |          |      | 起购份数                                                     |
| list\listSku\stockQty                                        | Integer |          |      | 商品库存数量                                                 |
| list\listSku\stockLimit                                      | Integer |          |      | 库存限制， 1=限制库存,2=不限制库存                           |
| list\listSku\stockRule                                       | String  |          |      | 库存规则                                                     |
| list\listSku\weight                                          | Double  |          |      | 重量，单位kg                                                 |
| list\listSku\unit                                            | String  |          |      | 计件单位                                                     |
| list\listSku\pknumber                                        | Integer |          |      | 单位含量                                                     |
| list\listSku\upc                                             | String  |          |      | upc                                                          |
| list\listSku\productCode                                     | String  |          |      | 产品编号                                                     |
| list\listSku\productAttributeGroupList                       | List    |          |      | 商品属性                                                     |
| list\listSku\productAttributeGroupList\must                  | Integer |          |      | 属性组选择规则，1必选2可选                                   |
| list\listSku\productAttributeGroupList\minNumber             | Integer |          |      | 属性组允许最小选择数量                                       |
| list\listSku\productAttributeGroupList\maxNumber             | Integer |          |      | 属性组允许最大选择数量                                       |
| list\listSku\productAttributeGroupList\sequence              | Integer |          |      | 属性组排序                                                   |
| list\listSku\productAttributeGroupList\customerCode          | String  |          |      | 第三方编码                                                   |
| list\listSku\productAttributeGroupList\attributeType         | Integer |          |      | 属性组类型                                                   |
| list\listSku\productAttributeGroupList\attributeName         | String  |          |      | 属性组名称                                                   |
| list\listSku\productAttributeGroupList\options               | String  |          |      | 扩展信息                                                     |
| list\listSku\productAttributeGroupList\attributeValues       | List    |          |      | 属性组下属性信息                                             |
| list\listSku\productAttributeGroupList\attributeValues\id    | String  |          |      | 商品属性mappingid                                            |
| list\listSku\productAttributeGroupList\attributeValues\attributeId | String  |          |      | 属性值ID                                                     |
| list\listSku\productAttributeGroupList\attributeValues\attributeValue | String  |          |      | 属性名称                                                     |
| list\listSku\productAttributeGroupList\attributeValues\customerCode | String  |          |      | 属性商户编码                                                 |
| list\listSku\productAttributeGroupList\attributeValues\sequence | int     |          |      | 属性值排序信息                                               |
| list\listSku\productAttributeGroupList\attributeValues\price | int     |          |      | 属性价格信息                                                 |
| list\listSku\productAttributeGroupList\attributeValues\status | Integer |          |      | 属性状态信息                                                 |
| list\listSku\productAttributeGroupList\attributeValues\options | String  |          |      | 扩展信息                                                     |
| list\isProductNameAppendSpecName                             | String  |          |      | 是否拼接商品名称和规格名称 0 是，1 否（默认0）               |
| list\upc                                                     | String  |          |      | upc                                                          |
| list\specification                                           | String  |          |      | 规格（例如毫升， 500ml 规格加商品）                          |
| list\unit                                                    | String  |          |      | 单位 （杯、套、份）                                          |
| list\category                                                | String  |          |      | 商品后台分类编码                                             |
| list\categoryName                                            | String  |          |      | 商品后台分类编码名称                                         |
| list\brandId                                                 | String  |          |      | 品牌ID                                                       |
| list\brandName                                               | String  |          |      | 品牌名称                                                     |
| list\weight                                                  | Double  |          |      | 重量,单位kg                                                  |
| list\detailText                                              | String  |          |      | 富文本描述字段                                               |
| list\detailImages                                            | List    |          |      | 商品图片描述                                                 |
| list\stockQty                                                | Integer |          |      | 商品库存数量                                                 |
| list\stockLimit                                              | Integer |          |      | 库存限制， 1=限制库存,2=不限制库存                           |
| list\businessType                                            | String  |          |      | 业务类型                                                     |
| list\businessNo                                              | String  |          |      | 业务编号                                                     |
| list\productType                                             | Integer |          |      | 商品类型 /1普通商品/3组合商品/6套餐/7加价套餐/9虚拟商品/10多规格商品 |
| list\maxLimitNumber                                          | Integer |          |      | 最大限制数量                                                 |
| list\minLimitNumber                                          | Integer |          |      | 最小限制数量                                                 |
| list\specProductId                                           | String  |          |      | spuId                                                        |
| list\storeCondition                                          | String  |          |      | 存储方式                                                     |
| list\rawMaterial                                             | String  |          |      | 原材料                                                       |
| list\pknumber                                                | Integer |          |      | 包装含量                                                     |
| list\isDishware                                              | Integer |          |      | 是否是餐具商品                                               |
| list\weightType                                              | Integer |          |      | 称重类型:1.称重菜                                            |
| list\platformLabelId                                         | String  |          |      | 平台标签ID                                                   |
| list\merchantBrandCode                                       | String  |          |      | 商户下子品牌的编码                                           |
| list\merchantBrandName                                       | String  |          |      | 商户下子品牌的名称                                           |
| list\openMemberDiscount                                      | Integer |          |      | 是否开启付费会员卡 0否/1是                                   |
| list\memberDiscount                                          | Integer |          |      | 会员价折扣                                                   |
| list\productComboInfos                                       | List    |          |      | 固定搭配商品列表,传null不操作，其他做全删全增                |
| list\productComboInfos\productId                             | String  |          |      | 商品id                                                       |
| list\productComboInfos\sequence                              | Integer |          |      | 商品排序信息                                                 |
| list\productComboInfos\isStaple                              | Integer |          |      | 是否是主食                                                   |
| list\productComboInfos\quantity                              | Integer |          |      | 数量,默认值1                                                 |
| list\packageProductTypes                                     |         |          |      | 商品组信息列表                                               |
| list\packageProductTypes\groupId                             | Long    |          |      | 商品组ID                                                     |
| list\packageProductTypes\sequence                            | Integer |          |      | 商品组顺序                                                   |
| list\packageProductTypes\productComboInfos                   | List    |          |      | 套餐固定搭配集合                                             |
| list\packageProductTypes\productComboInfos\productId         | String  |          |      | 商品id                                                       |
| list\packageProductTypes\productComboInfos\quantity          | Integer |          |      | 数量,默认值1                                                 |
| list\packageProductTypes\productComboInfos\sequence          | Integer |          |      | 商品排序信息                                                 |
| list\isValidPackageProductRepeat                             | Boolean |          |      | 是否校验商品组内商品可重复,默认为false                       |
| list\productSellTimeMappingType                              | Object  |          |      | 商品可售时间                                                 |
| list\productSellTimeMappingType\customerCode                 | String  |          |      | 商品编码                                                     |
| list\productSellTimeMappingType\sellTimeTypes                | List    |          |      | 可售时间周期(按周)                                           |
| list\productSellTimeMappingType\sellTimeTypes\name           | String  |          |      | 售卖时间名称                                                 |
| list\productSellTimeMappingType\sellTimeTypes\dateStatus     | Integer |          |      | 周期类型 /0不限周期/1周一/2周二/4周三/8周四/16周五/32周六/64周日，各个周期还可以相加，如3代表周一+周二 |
| list\productSellTimeMappingType\sellTimeTypes\startTime      | String  |          |      | 开始时间  格式HH:mm:ss                                       |
| list\productSellTimeMappingType\sellTimeTypes\endTime        | String  |          |      | 截止时间 格式HH:mm:ss                                        |
| list\productSellTimeMappingType\sellTimeMonthTypes           | List    |          |      | 可售时间周期(按月)                                           |
| list\productSellTimeMappingType\sellTimeMonthTypes\dayOfMonthList | List    |          |      | 周日日期列表                                                 |
| list\productSellTimeMappingType\sellTimeMonthTypes\startTime | String  |          |      | 开始时间  格式HH:mm:ss                                       |
| list\productSellTimeMappingType\sellTimeMonthTypes\endTime   | String  |          |      | 截止时间 格式HH:mm:ss                                        |
| list\productSellTimeMappingType\sellTimeMonthTypes\remark    | String  |          |      | 售卖时间名称                                                 |
| list\productSellTimeMappingType\sellTimeRangeTypes           | List    |          |      | 可售时间段                                                   |
| list\productSellTimeMappingType\sellTimeRangeTypes\startTime | String  |          |      | 开始时间,格式yyyy-MM-dd HH:mm:ss                             |
| list\productSellTimeMappingType\sellTimeRangeTypes\endTime   | String  |          |      | 截止时间,格式yyyy-MM-dd HH:mm:ss                             |
| list\productSellTimeMappingType\sellTimeRangeTypes\remark    | String  |          |      | 备注                                                         |
| list\productOrganizationTypes                                | List    |          |      | 商品的可见区域                                               |
| list\productOrganizationTypes\organizationCode               | String  |          |      | 商品的可见区域编号                                           |
| list\productOrganizationTypes\organizationName               | String  |          |      | 商品的可见区域名称                                           |
| list\productBindingCouponTypes                               | List    |          |      | 虚拟商品绑定的优惠券                                                             |
| list\productBindingCouponTypes\activityCode                  | String  |          |      | 优惠券CODE                                                   |
| list\productBindingCouponTypes\num                           | Integer |          |      | 数量                                                         |
| list\productBindingCouponTypes\sequence                      | Integer |          |      | 排序                                                         |
| list\productBindingCouponTypes\Id                            | Long    |          |      | 主键                                                         |
| list\additionalGroupType                                     | Object  |          |      | 加料信息                                                     |
| list\additionalGroupType\groupId                             | String  |          |      | 加料组id                                                     |
| list\additionalGroupType\groupName                           | String  |          |      | 加料组名称                                                   |
| list\additionalGroupType\groupDetailTypeList                 | List    |          |      | 加料组详情列表                                               |
| list\additionalGroupType\groupDetailTypeList\markUpPrice     | Integer |          |      | 加价价格                                                     |
| list\additionalGroupType\groupDetailTypeList\isDefault       | Integer |          |      | 是否为默认商品，1是0否                                       |
| list\additionalGroupType\groupDetailTypeList\productId       | String  |          |      | 商品id                                                       |
| list\additionalGroupType\groupDetailTypeList\sequence        | Integer |          |      | 商品排序信息                                                 |

### 返回示例

```json
{
  "ver": "1",
  "statusCode": "100",
  "message": "成功",
  "responseBody": "{\"list\":[{\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"category\":\"\",\"categoryName\":\"\",\"customerCode\":\"20201596081633222\",\"customerName\":\"\",\"detailImages\":[],\"detailText\":\"\",\"groupVos\":[],\"isDishware\":0,\"isProductNameAppendSpecName\":\"\",\"isValidPackageProductRepeat\":false,\"listLabel\":[],\"listPAM\":[],\"listSku\":[],\"maxLimitNumber\":0,\"memberDiscount\":0,\"merchantBrandCode\":\"\",\"merchantBrandName\":\"\",\"minLimitNumber\":0,\"name\":\"测试\",\"nid\":\"\",\"nodeName\":\"\",\"openMemberDiscount\":0,\"packPrice\":0,\"packageProductTypes\":[],\"partnerId\":\"1864\",\"picture\":[{\"id\":0,\"pictureUrl\":\"https://picture.sandload.cn/1590645489380.png\",\"sequence\":0}],\"pknumber\":1,\"platformLabelId\":\"\",\"price\":10,\"productBindingCouponTypes\":[],\"productCode\":\"\",\"productComboInfos\":[],\"productId\":\"181773119197813799\",\"productOrganizationTypes\":[],\"productType\":1,\"rawMaterial\":\"\",\"remark\":\"\",\"riseSell\":0,\"sequence\":0,\"skuCode\":\"\",\"specProductId\":\"181773119197813799\",\"specification\":\"\",\"status\":2,\"stockLimit\":1,\"stockQty\":0,\"stockRule\":\"\",\"storeCondition\":\"\",\"unit\":\"\",\"upc\":\"\",\"updateDate\":1596081634000,\"updator\":\"梦\",\"weight\":0.01,\"weightType\":0},{\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"category\":\"\",\"categoryName\":\"\",\"customerCode\":\"20201596081221782\",\"customerName\":\"\",\"detailImages\":[],\"detailText\":\"\",\"groupVos\":[],\"isDishware\":0,\"isProductNameAppendSpecName\":\"\",\"isValidPackageProductRepeat\":false,\"listLabel\":[],\"listPAM\":[],\"listSku\":[],\"maxLimitNumber\":0,\"memberDiscount\":0,\"merchantBrandCode\":\"\",\"merchantBrandName\":\"\",\"minLimitNumber\":0,\"name\":\"测试\",\"nid\":\"\",\"nodeName\":\"\",\"openMemberDiscount\":0,\"packPrice\":0,\"packageProductTypes\":[],\"partnerId\":\"1864\",\"picture\":[{\"id\":0,\"pictureUrl\":\"https://picture.sandload.cn/1590645489380.png\",\"sequence\":0}],\"pknumber\":1,\"platformLabelId\":\"\",\"price\":10,\"productBindingCouponTypes\":[],\"productCode\":\"\",\"productComboInfos\":[],\"productId\":\"181772687694109730\",\"productOrganizationTypes\":[],\"productType\":1,\"rawMaterial\":\"\",\"remark\":\"\",\"riseSell\":0,\"sequence\":0,\"skuCode\":\"\",\"specProductId\":\"181772687694109730\",\"specification\":\"\",\"status\":2,\"stockLimit\":1,\"stockQty\":0,\"stockRule\":\"\",\"storeCondition\":\"\",\"unit\":\"\",\"upc\":\"\",\"updateDate\":1596081222000,\"updator\":\"梦\",\"weight\":0.01,\"weightType\":0},{\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"category\":\"\",\"categoryName\":\"\",\"customerCode\":\"202007291053\",\"customerName\":\"\",\"detailImages\":[],\"detailText\":\"\",\"groupVos\":[],\"isDishware\":0,\"isProductNameAppendSpecName\":\"\",\"isValidPackageProductRepeat\":false,\"listLabel\":[],\"listPAM\":[],\"listSku\":[],\"maxLimitNumber\":0,\"memberDiscount\":0,\"merchantBrandCode\":\"\",\"merchantBrandName\":\"\",\"minLimitNumber\":0,\"name\":\"单品加料\",\"nid\":\"\",\"nodeName\":\"\",\"openMemberDiscount\":0,\"packPrice\":0,\"packageProductTypes\":[],\"partnerId\":\"1864\",\"picture\":[{\"id\":0,\"pictureUrl\":\"https://picture.sandload.cn/1596078918253.png\",\"sequence\":0}],\"pknumber\":0,\"platformLabelId\":\"\",\"price\":239,\"productBindingCouponTypes\":[],\"productCode\":\"\",\"productComboInfos\":[],\"productId\":\"181770276805024828\",\"productOrganizationTypes\":[],\"productType\":1,\"rawMaterial\":\"\",\"remark\":\"\",\"riseSell\":0,\"sequence\":0,\"skuCode\":\"\",\"specProductId\":\"181770276805024828\",\"specification\":\"\",\"status\":2,\"stockLimit\":2,\"stockQty\":0,\"stockRule\":\"\",\"storeCondition\":\"\",\"unit\":\"\",\"upc\":\"\",\"updateDate\":1596078923000,\"updator\":\"十二\",\"weight\":0.0,\"weightType\":0},{\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"category\":\"\",\"categoryName\":\"\",\"customerCode\":\"20201596077198122\",\"customerName\":\"\",\"detailImages\":[],\"detailText\":\"\",\"groupVos\":[],\"isDishware\":0,\"isProductNameAppendSpecName\":\"\",\"isValidPackageProductRepeat\":false,\"listLabel\":[],\"listPAM\":[],\"listSku\":[],\"maxLimitNumber\":0,\"memberDiscount\":0,\"merchantBrandCode\":\"\",\"merchantBrandName\":\"\",\"minLimitNumber\":0,\"name\":\"测试\",\"nid\":\"\",\"nodeName\":\"\",\"openMemberDiscount\":0,\"packPrice\":0,\"packageProductTypes\":[],\"partnerId\":\"1864\",\"picture\":[{\"id\":0,\"pictureUrl\":\"https://picture.sandload.cn/1590645489380.png\",\"sequence\":0}],\"pknumber\":1,\"platformLabelId\":\"\",\"price\":10,\"productBindingCouponTypes\":[],\"productCode\":\"\",\"productComboInfos\":[],\"productId\":\"181768468775836729\",\"productOrganizationTypes\":[],\"productType\":1,\"rawMaterial\":\"\",\"remark\":\"\",\"riseSell\":0,\"sequence\":0,\"skuCode\":\"\",\"specProductId\":\"181768468775836729\",\"specification\":\"\",\"status\":2,\"stockLimit\":1,\"stockQty\":0,\"stockRule\":\"\",\"storeCondition\":\"\",\"unit\":\"\",\"upc\":\"\",\"updateDate\":1596077199000,\"updator\":\"梦\",\"weight\":0.01,\"weightType\":0},{\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"category\":\"\",\"categoryName\":\"\",\"customerCode\":\"202015960763125843\",\"customerName\":\"\",\"detailImages\":[],\"detailText\":\"\",\"groupVos\":[],\"isDishware\":0,\"isProductNameAppendSpecName\":\"\",\"isValidPackageProductRepeat\":false,\"listLabel\":[],\"listPAM\":[],\"listSku\":[],\"maxLimitNumber\":0,\"memberDiscount\":0,\"merchantBrandCode\":\"\",\"merchantBrandName\":\"\",\"minLimitNumber\":0,\"name\":\"测试自动化\",\"nid\":\"\",\"nodeName\":\"\",\"openMemberDiscount\":0,\"packPrice\":0,\"packageProductTypes\":[],\"partnerId\":\"1864\",\"picture\":[{\"id\":0,\"pictureUrl\":\"https://picture.sandload.cn/下载.jpg\",\"sequence\":0}],\"pknumber\":1,\"platformLabelId\":\"\",\"price\":10,\"productBindingCouponTypes\":[],\"productCode\":\"\",\"productComboInfos\":[],\"productId\":\"181767540124425245\",\"productOrganizationTypes\":[],\"productType\":1,\"rawMaterial\":\"\",\"remark\":\"\",\"riseSell\":0,\"sequence\":0,\"skuCode\":\"\",\"specProductId\":\"181767540124425245\",\"specification\":\"\",\"status\":2,\"stockLimit\":2,\"stockQty\":0,\"stockRule\":\"\",\"storeCondition\":\"\",\"unit\":\"\",\"upc\":\"\",\"updateDate\":1596076324000,\"updator\":\"\",\"weight\":0.01,\"weightType\":0},{\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"category\":\"\",\"categoryName\":\"\",\"customerCode\":\"202015960762462541\",\"customerName\":\"\",\"detailImages\":[],\"detailText\":\"\",\"groupVos\":[],\"isDishware\":0,\"isProductNameAppendSpecName\":\"\",\"isValidPackageProductRepeat\":false,\"listLabel\":[],\"listPAM\":[],\"listSku\":[],\"maxLimitNumber\":0,\"memberDiscount\":0,\"merchantBrandCode\":\"\",\"merchantBrandName\":\"\",\"minLimitNumber\":0,\"name\":\"测试自动化\",\"nid\":\"\",\"nodeName\":\"\",\"openMemberDiscount\":0,\"packPrice\":0,\"packageProductTypes\":[],\"partnerId\":\"1864\",\"picture\":[{\"id\":0,\"pictureUrl\":\"https://picture.sandload.cn/下载.jpg\",\"sequence\":0}],\"pknumber\":1,\"platformLabelId\":\"\",\"price\":10,\"productBindingCouponTypes\":[],\"productCode\":\"\",\"productComboInfos\":[],\"productId\":\"181767470204328982\",\"productOrganizationTypes\":[],\"productType\":1,\"rawMaterial\":\"\",\"remark\":\"\",\"riseSell\":0,\"sequence\":0,\"skuCode\":\"\",\"specProductId\":\"181767470204328982\",\"specification\":\"\",\"status\":1,\"stockLimit\":2,\"stockQty\":0,\"stockRule\":\"\",\"storeCondition\":\"\",\"unit\":\"\",\"upc\":\"\",\"updateDate\":1596076301000,\"updator\":\"\",\"weight\":0.01,\"weightType\":0},{\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"category\":\"\",\"categoryName\":\"\",\"customerCode\":\"20201596076200539\",\"customerName\":\"\",\"detailImages\":[],\"detailText\":\"\",\"groupVos\":[],\"isDishware\":0,\"isProductNameAppendSpecName\":\"\",\"isValidPackageProductRepeat\":false,\"listLabel\":[],\"listPAM\":[],\"listSku\":[],\"maxLimitNumber\":0,\"memberDiscount\":0,\"merchantBrandCode\":\"\",\"merchantBrandName\":\"\",\"minLimitNumber\":0,\"name\":\"测试\",\"nid\":\"\",\"nodeName\":\"\",\"openMemberDiscount\":0,\"packPrice\":0,\"packageProductTypes\":[],\"partnerId\":\"1864\",\"picture\":[{\"id\":0,\"pictureUrl\":\"https://picture.sandload.cn/1590645489380.png\",\"sequence\":0}],\"pknumber\":1,\"platformLabelId\":\"\",\"price\":1,\"productBindingCouponTypes\":[],\"productCode\":\"\",\"productComboInfos\":[],\"productId\":\"181767421902724113\",\"productOrganizationTypes\":[],\"productType\":1,\"rawMaterial\":\"\",\"remark\":\"\",\"riseSell\":0,\"sequence\":0,\"skuCode\":\"\",\"specProductId\":\"181767421902724113\",\"specification\":\"\",\"status\":2,\"stockLimit\":2,\"stockQty\":0,\"stockRule\":\"\",\"storeCondition\":\"\",\"unit\":\"\",\"upc\":\"\",\"updateDate\":1596076200000,\"updator\":\"梦\",\"weight\":0.01,\"weightType\":0},{\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"category\":\"\",\"categoryName\":\"\",\"customerCode\":\"202015960761543035\",\"customerName\":\"\",\"detailImages\":[],\"detailText\":\"\",\"groupVos\":[],\"isDishware\":0,\"isProductNameAppendSpecName\":\"\",\"isValidPackageProductRepeat\":false,\"listLabel\":[],\"listPAM\":[],\"listSku\":[],\"maxLimitNumber\":0,\"memberDiscount\":0,\"merchantBrandCode\":\"\",\"merchantBrandName\":\"\",\"minLimitNumber\":0,\"name\":\"测试\",\"nid\":\"\",\"nodeName\":\"\",\"openMemberDiscount\":0,\"packPrice\":0,\"packageProductTypes\":[],\"partnerId\":\"1864\",\"picture\":[{\"id\":0,\"pictureUrl\":\"https://picture.sandload.cn/1590645489380.png\",\"sequence\":0}],\"pknumber\":1,\"platformLabelId\":\"\",\"price\":1,\"productBindingCouponTypes\":[],\"productCode\":\"\",\"productComboInfos\":[],\"productId\":\"181767374179933192\",\"productOrganizationTypes\":[],\"productType\":1,\"rawMaterial\":\"\",\"remark\":\"\",\"riseSell\":0,\"sequence\":0,\"skuCode\":\"\",\"specProductId\":\"181767374179933192\",\"specification\":\"\",\"status\":2,\"stockLimit\":2,\"stockQty\":0,\"stockRule\":\"\",\"storeCondition\":\"\",\"unit\":\"\",\"upc\":\"\",\"updateDate\":1596076155000,\"updator\":\"梦\",\"weight\":0.01,\"weightType\":0},{\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"category\":\"\",\"categoryName\":\"\",\"customerCode\":\"202015960761429633\",\"customerName\":\"\",\"detailImages\":[],\"detailText\":\"\",\"groupVos\":[],\"isDishware\":0,\"isProductNameAppendSpecName\":\"\",\"isValidPackageProductRepeat\":false,\"listLabel\":[],\"listPAM\":[],\"listSku\":[],\"maxLimitNumber\":0,\"memberDiscount\":0,\"merchantBrandCode\":\"\",\"merchantBrandName\":\"\",\"minLimitNumber\":0,\"name\":\"测试\",\"nid\":\"\",\"nodeName\":\"\",\"openMemberDiscount\":0,\"packPrice\":0,\"packageProductTypes\":[],\"partnerId\":\"1864\",\"picture\":[{\"id\":0,\"pictureUrl\":\"https://picture.sandload.cn/1590645489380.png\",\"sequence\":0}],\"pknumber\":1,\"platformLabelId\":\"\",\"price\":1,\"productBindingCouponTypes\":[],\"productCode\":\"\",\"productComboInfos\":[],\"productId\":\"181767361067490367\",\"productOrganizationTypes\":[],\"productType\":1,\"rawMaterial\":\"\",\"remark\":\"\",\"riseSell\":0,\"sequence\":0,\"skuCode\":\"\",\"specProductId\":\"181767361067490367\",\"specification\":\"\",\"status\":2,\"stockLimit\":2,\"stockQty\":0,\"stockRule\":\"\",\"storeCondition\":\"\",\"unit\":\"\",\"upc\":\"\",\"updateDate\":1596076142000,\"updator\":\"梦\",\"weight\":0.01,\"weightType\":0},{\"brandId\":\"\",\"brandName\":\"\",\"businessNo\":\"\",\"businessType\":\"\",\"category\":\"\",\"categoryName\":\"\",\"customerCode\":\"202015960761315532\",\"customerName\":\"\",\"detailImages\":[],\"detailText\":\"\",\"groupVos\":[],\"isDishware\":0,\"isProductNameAppendSpecName\":\"\",\"isValidPackageProductRepeat\":false,\"listLabel\":[],\"listPAM\":[],\"listSku\":[],\"maxLimitNumber\":0,\"memberDiscount\":0,\"merchantBrandCode\":\"\",\"merchantBrandName\":\"\",\"minLimitNumber\":0,\"name\":\"测试\",\"nid\":\"\",\"nodeName\":\"\",\"openMemberDiscount\":0,\"packPrice\":0,\"packageProductTypes\":[],\"partnerId\":\"1864\",\"picture\":[{\"id\":0,\"pictureUrl\":\"https://picture.sandload.cn/1590645489380.png\",\"sequence\":0}],\"pknumber\":1,\"platformLabelId\":\"\",\"price\":1,\"productBindingCouponTypes\":[],\"productCode\":\"\",\"productComboInfos\":[],\"productId\":\"181767349534202940\",\"productOrganizationTypes\":[],\"productType\":1,\"rawMaterial\":\"\",\"remark\":\"\",\"riseSell\":0,\"sequence\":0,\"skuCode\":\"\",\"specProductId\":\"181767349534202940\",\"specification\":\"\",\"status\":2,\"stockLimit\":2,\"stockQty\":0,\"stockRule\":\"\",\"storeCondition\":\"\",\"unit\":\"\",\"upc\":\"\",\"updateDate\":1596076131000,\"updator\":\"梦\",\"weight\":0.01,\"weightType\":0}],\"totalCount\":4225,\"totalNum\":4225,\"totalPages\":423}",
  "sign": "u44mQJkxotpDueOGezK6IaVY4SCE0TaNhHm6THy4YtaCHt/80tcvoLN7ZGB8IvFWL3qYK4KUcoJwYdi0O++xykM1ft/J8hVnj47oYhsaC+upegwqufFm0FC0WYg7N9bRtcwFpqr09DobpTHemuq+1HLVJ3/TWjuQclVPj3iRunLPpCbB+7kGT/drYA0eRthmP9StkzGj50TCbpReevHvgcq6LPoOs7+To1Kiyz4LCp/YQMhsMXsDrxgdc8o+I5P5DzvEQak5LgIgvr4QXE9e/sqgWk0jkDsFGvc7vUx4OnJS7v784H5l7Fg8Tv+L1osKRGrm5x2K1qeZYCQDoKWKyg=="
}
```