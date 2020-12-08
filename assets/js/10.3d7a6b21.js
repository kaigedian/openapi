(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{371:function(t,v,_){"use strict";_.r(v);var r=_(25),a=Object(r.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"开始前必读"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#开始前必读"}},[t._v("#")]),t._v(" 开始前必读")]),t._v(" "),_("h2",{attrs:{id:"开放平台概述"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#开放平台概述"}},[t._v("#")]),t._v(" 开放平台概述")]),t._v(" "),_("p",[t._v("开个店开放平台，是为开个店商户提供开放基础服务的重要开放途径，旨在为需要开发接入的开个店商户提供系统对接服务。")]),t._v(" "),_("p",[t._v("开发者可通过API文档来了解开个店开放平台目前已开放的业务接口，可自主选择所需接口提交授权进行对接，以实现商户运营效率的快速提升，帮助商户实现自助餐厅，提升管理效率。")]),t._v(" "),_("p",[t._v("有开发能力的开个店商户、中小型IT创业团队和个人开发者，均可在开个店开放平台对接开个店的订单、外卖、会员、营销等开放接口，并简单快速集成到产品中，实现产品的快速上线。")]),t._v(" "),_("h2",{attrs:{id:"安全规范"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#安全规范"}},[t._v("#")]),t._v(" 安全规范")]),t._v(" "),_("p",[t._v("开个店使用RSA2（SHA256WithRSA）签名加密，强制要求RSA密钥的长度至少为2048，公钥和私钥，由开个店提供给开发者。")]),t._v(" "),_("h3",{attrs:{id:"接口签名"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#接口签名"}},[t._v("#")]),t._v(" 接口签名")]),t._v(" "),_("h4",{attrs:{id:"筛选排序"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#筛选排序"}},[t._v("#")]),t._v(" 筛选排序")]),t._v(" "),_("p",[t._v("获取所有请求参数，不包括字节类型参数，如文件、字节流，剔除sign字段，剔除值为空的参数，并按照第一个字符的键值ASCII码递增排序（字母升序排序），如果遇到相同字符则按照第二个字符的键值ASCII码递增排序，以此类推。")]),t._v(" "),_("h4",{attrs:{id:"拼接"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#拼接"}},[t._v("#")]),t._v(" 拼接")]),t._v(" "),_("p",[t._v("将排序后的参数与其对应值，组合成“参数=参数值”的格式，并且把这些参数用&字符连接起来，此时生成的字符串为待签名字符串。")]),t._v(" "),_("blockquote",[_("p",[t._v("例如下面的请求示例")])]),t._v(" "),_("div",{staticClass:"language-string line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('ver=1\npartnerId=2038\nappId=2038\nrequestBody={"orderCode":"1023987523084","operator":"操作人员"}\nsign=e9zEAe4TTQ4LPLQvETPoLGXTiURcxiAKfMVQ6Hrrsx2hmyIEGvSfAQzbLxHrhyZ48wOJXTsD4FPnt+YGdK57+fP1BCbf9rIVycfjhYCqlFhbTu9pFnZgT55W+xbAFb9y7vL0MyAxwXUXvZtQVqEwW7pURtKilbcBTEW7TAxzgro=\n')])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br"),_("span",{staticClass:"line-number"},[t._v("4")]),_("br"),_("span",{staticClass:"line-number"},[t._v("5")]),_("br")])]),_("blockquote",[_("p",[t._v("则带签名字符串为：")])]),t._v(" "),_("div",{staticClass:"language-string line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('appId=2038&partnerId=2018&requestBody={"orderCode":"1023987523084","operator":"操作人员"}&ver=1\n')])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("h4",{attrs:{id:"调用签名函数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#调用签名函数"}},[t._v("#")]),t._v(" 调用签名函数")]),t._v(" "),_("p",[t._v("使用各自语言对应的SHA256WithRSA签名函数利用商户私钥对待签名字符串进行签名，并进行Base64编码")]),t._v(" "),_("h4",{attrs:{id:"sign-赋值"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#sign-赋值"}},[t._v("#")]),t._v(" sign 赋值")]),t._v(" "),_("p",[t._v("将加密好的数据 赋值给sign字段")]),t._v(" "),_("h2",{attrs:{id:"公共参数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#公共参数"}},[t._v("#")]),t._v(" 公共参数")]),t._v(" "),_("h3",{attrs:{id:"请求头"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#请求头"}},[t._v("#")]),t._v(" 请求头")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("字段")]),t._v(" "),_("th",[t._v("是否必传")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("默认值")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Content-Type")]),t._v(" "),_("td",[t._v("是")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("application/json;charset=utf-8")]),t._v(" "),_("td",[t._v("指定参数类型为json格式")])]),t._v(" "),_("tr",[_("td",[t._v("x-transaction-id")]),t._v(" "),_("td",[t._v("是")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("请求id，每一次请求不一样请保持唯一")])]),t._v(" "),_("tr",[_("td",[t._v("Accept")]),t._v(" "),_("td",[t._v("是")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("application/json;charset=utf-8")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("access_token")]),t._v(" "),_("td",[t._v("是")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("网关的token,由开个店提供")])])])]),t._v(" "),_("h3",{attrs:{id:"请求参数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#请求参数"}},[t._v("#")]),t._v(" 请求参数")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("字段")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("是否必传")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("ver")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("是")]),t._v(" "),_("td",[t._v("接口版本号，如无特殊情况，请传 1")])]),t._v(" "),_("tr",[_("td",[t._v("partnerId")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("是")]),t._v(" "),_("td",[t._v("由开个店颁发商户唯一标识")])]),t._v(" "),_("tr",[_("td",[t._v("appId")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("是")]),t._v(" "),_("td",[t._v("由开个店颁发平台唯一标识")])]),t._v(" "),_("tr",[_("td",[t._v("requestBody")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("是")]),t._v(" "),_("td",[t._v("业务请求参数")])]),t._v(" "),_("tr",[_("td",[t._v("sign")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("是")]),t._v(" "),_("td",[t._v("API访问签名参数，请参见API调用协议-接口签名")])])])]),t._v(" "),_("h3",{attrs:{id:"响应参数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#响应参数"}},[t._v("#")]),t._v(" 响应参数")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("字段")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("是否必传")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("ver")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("是")]),t._v(" "),_("td",[t._v("接口版本号，如无特殊情况为 1")])]),t._v(" "),_("tr",[_("td",[t._v("statusCode")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("是")]),t._v(" "),_("td",[t._v("状态码 100 为成功")])]),t._v(" "),_("tr",[_("td",[t._v("message")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("是")]),t._v(" "),_("td",[t._v("返回信息（失败原因）")])]),t._v(" "),_("tr",[_("td",[t._v("responseBody")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("业务响应参数，成功则有")])])])]),t._v(" "),_("h3",{attrs:{id:"开个店提供参数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#开个店提供参数"}},[t._v("#")]),t._v(" 开个店提供参数")]),t._v(" "),_("ul",[_("li",[t._v("ver：接口版本")]),t._v(" "),_("li",[t._v("partnerId：商户唯一标识")]),t._v(" "),_("li",[t._v("appId：平台唯一标识")]),t._v(" "),_("li",[t._v("access_token：固定token值")])]),t._v(" "),_("h2",{attrs:{id:"全局返回码说明"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#全局返回码说明"}},[t._v("#")]),t._v(" 全局返回码说明")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("状态码")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("100")]),t._v(" "),_("td",[t._v("成功")])]),t._v(" "),_("tr",[_("td",[t._v("21")]),t._v(" "),_("td",[t._v("缺少必要的请求参数")])]),t._v(" "),_("tr",[_("td",[t._v("500")]),t._v(" "),_("td",[t._v("内部服务异常")])])])]),t._v(" "),_("h2",{attrs:{id:"接口地址"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#接口地址"}},[t._v("#")]),t._v(" 接口地址")]),t._v(" "),_("p",[t._v("开个店开放平台提供正式环境和联调环境地址，商户如需联调对接，可联系开个店工作人员，索要接口地址。")]),t._v(" "),_("h2",{attrs:{id:"版本更新记录"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#版本更新记录"}},[t._v("#")]),t._v(" 版本更新记录")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("服务接口")]),t._v(" "),_("th",[t._v("改动点")]),t._v(" "),_("th",[t._v("修改人")]),t._v(" "),_("th",[t._v("修改日期")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("1.0")]),t._v(" "),_("td",[t._v("初始文档")]),t._v(" "),_("td",[t._v("崔根友")]),t._v(" "),_("td",[t._v("2019年04月17日")])]),t._v(" "),_("tr",[_("td",[t._v("1.0.1")]),t._v(" "),_("td",[t._v("查询订单信息增加配送费和餐盒费")]),t._v(" "),_("td",[t._v("伍平")]),t._v(" "),_("td",[t._v("2019年05月5日")])]),t._v(" "),_("tr",[_("td",[t._v("1.0.2")]),t._v(" "),_("td",[t._v("增加生产地址，接口公共参数增加access_token")]),t._v(" "),_("td",[t._v("伍平")]),t._v(" "),_("td",[t._v("2019年05月6日")])]),t._v(" "),_("tr",[_("td",[t._v("1.0.3")]),t._v(" "),_("td",[t._v("参数修正，增加一些请求示例")]),t._v(" "),_("td",[t._v("伍平")]),t._v(" "),_("td",[t._v("2019年05月9日")])]),t._v(" "),_("tr",[_("td",[t._v("1.1")]),t._v(" "),_("td",[t._v("针对拉单轮询对接进行优化")]),t._v(" "),_("td",[t._v("侯书虎")]),t._v(" "),_("td",[t._v("2019年05月13日")])]),t._v(" "),_("tr",[_("td",[t._v("1.1.1")]),t._v(" "),_("td",[t._v("新增卡券类API")]),t._v(" "),_("td",[t._v("孙佳杰")]),t._v(" "),_("td",[t._v("2019年05月16日")])]),t._v(" "),_("tr",[_("td",[t._v("1.1.2")]),t._v(" "),_("td",[t._v("新增订单状态变更推送、用户申请订单取消/退款 状态变更推送")]),t._v(" "),_("td",[t._v("侯书虎")]),t._v(" "),_("td",[t._v("2019年07月10日")])]),t._v(" "),_("tr",[_("td",[t._v("1.1.3")]),t._v(" "),_("td",[t._v("订单列表、详情接口，新增discountAmount（订单总优惠金额），sharePrice（商品行优惠分摊总金额）字段")]),t._v(" "),_("td",[t._v("侯书虎")]),t._v(" "),_("td",[t._v("2019年07月19日")])]),t._v(" "),_("tr",[_("td",[t._v("1.1.4")]),t._v(" "),_("td",[t._v("退款订单查询返回新增refundstatus字段")]),t._v(" "),_("td",[t._v("侯书虎")]),t._v(" "),_("td",[t._v("2019年07月19日")])]),t._v(" "),_("tr",[_("td",[t._v("1.1.5")]),t._v(" "),_("td",[t._v("新增历史订单查询接口")]),t._v(" "),_("td",[t._v("伍平")]),t._v(" "),_("td",[t._v("2019年07月23日")])]),t._v(" "),_("tr",[_("td",[t._v("1.1.6")]),t._v(" "),_("td",[t._v("新增兑换码活动查询接口")]),t._v(" "),_("td",[t._v("胡敬轩")]),t._v(" "),_("td",[t._v("2019年08月14日")])]),t._v(" "),_("tr",[_("td",[t._v("1.9.11")]),t._v(" "),_("td",[t._v("删除/organization/sync，新增/store/getStoreChannels")]),t._v(" "),_("td",[t._v("罗文雄")]),t._v(" "),_("td",[t._v("2020年02月20日")])])])])])}),[],!1,null,null,null);v.default=a.exports}}]);