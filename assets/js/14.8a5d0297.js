(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{368:function(t,s,a){"use strict";a.r(s);var r=a(25),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"活动类接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#活动类接口"}},[t._v("#")]),t._v(" 活动类接口")]),t._v(" "),a("h2",{attrs:{id:"根据活动号，批量上传兑换码接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#根据活动号，批量上传兑换码接口"}},[t._v("#")]),t._v(" 根据活动号，批量上传兑换码接口")]),t._v(" "),a("h3",{attrs:{id:"接口说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接口说明"}},[t._v("#")]),t._v(" 接口说明")]),t._v(" "),a("p",[t._v("根据请求流水号，开个店兑换码活动id，批量上传兑换码接口")]),t._v(" "),a("h3",{attrs:{id:"应用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[t._v("#")]),t._v(" 应用场景")]),t._v(" "),a("p",[t._v("商户在开个店后台创建好兑换码活动后，并选中“使用自定义兑换码”选项后，可以调用该接口，上传自定义的兑换码。")]),t._v(" "),a("p",[t._v("用户在小程序C端兑换码页面，快捷扫描兑换码生成的二维码，或手工输入兑换码后，可以兑换相应活动的优惠券。")]),t._v(" "),a("h3",{attrs:{id:"请求url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求url"}},[t._v("#")]),t._v(" 请求url")]),t._v(" "),a("p",[t._v("/promotion/redeemUpload")]),t._v(" "),a("h3",{attrs:{id:"请求参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求参数"}},[t._v("#")]),t._v(" 请求参数")]),t._v(" "),a("h4",{attrs:{id:"字段说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字段说明"}},[t._v("#")]),t._v(" 字段说明")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("strong",[t._v("字段")])]),t._v(" "),a("th",[a("strong",[t._v("类型")])]),t._v(" "),a("th",[a("strong",[t._v("必填")])]),t._v(" "),a("th",[a("strong",[t._v("举例")])]),t._v(" "),a("th",[a("strong",[t._v("说明")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("transNo")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("1111")]),t._v(" "),a("td",[t._v("商家请求流水号，请保证流水号唯一性，对于重复的流水号请求，将不会处理，请求流水号长度 <= 36 位")])]),t._v(" "),a("tr",[a("td",[t._v("activityId")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("150929794425421824")]),t._v(" "),a("td",[t._v("开个店兑换码活动id")])]),t._v(" "),a("tr",[a("td",[t._v("redeemCodes")]),t._v(" "),a("td",[t._v("Array")]),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v('["249916165","45782212"]')]),t._v(" "),a("td",[t._v("兑换码数组，每次请求兑换码数量最多 100 个，每个兑换码的长度需 >=6 位，<=32 位，兑换码为数字字母组合。在同一个请求内的激活码，开个店在接收到请求后，会先对数组做去重，再对兑换码进行业务处理")])])])]),t._v(" "),a("h4",{attrs:{id:"requestbody请求示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requestbody请求示例"}},[t._v("#")]),t._v(" requestBody请求示例")]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"transNo"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"208888"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"activityId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1212311"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"redeemCodes"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"12345678"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"22345678"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"32345678"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h3",{attrs:{id:"响应参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应参数"}},[t._v("#")]),t._v(" 响应参数")]),t._v(" "),a("h4",{attrs:{id:"字段说明-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字段说明-2"}},[t._v("#")]),t._v(" 字段说明")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("strong",[t._v("字段")])]),t._v(" "),a("th",[a("strong",[t._v("类型")])]),t._v(" "),a("th",[a("strong",[t._v("必填")])]),t._v(" "),a("th",[a("strong",[t._v("举例")])]),t._v(" "),a("th",[a("strong",[t._v("说明")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("successNum")]),t._v(" "),a("td",[t._v("Integer")]),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("10")]),t._v(" "),a("td",[t._v("成功个数")])]),t._v(" "),a("tr",[a("td",[t._v("failNum")]),t._v(" "),a("td",[t._v("Integer")]),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("0")]),t._v(" "),a("td",[t._v("失败个数")])]),t._v(" "),a("tr",[a("td",[t._v("errorList")]),t._v(" "),a("td",[t._v("Array")]),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("失败原因集合")])]),t._v(" "),a("tr",[a("td",[t._v("errorList\\redeemCode")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("123456789")]),t._v(" "),a("td",[t._v("兑换码编号")])]),t._v(" "),a("tr",[a("td",[t._v("errorList\\errorCode")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("001")]),t._v(" "),a("td",[t._v("错误代码 001-兑换码重复(数组重复)，002-兑换码已存在（数据库已存在）")])]),t._v(" "),a("tr",[a("td",[t._v("errorList\\errorMsg")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("123456789")]),t._v(" "),a("td",[t._v("失败原因")])])])]),t._v(" "),a("h4",{attrs:{id:"responsebody返回示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#responsebody返回示例"}},[t._v("#")]),t._v(" responseBody返回示例")]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"successNum"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"failNum"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"errorList"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"redeemCode"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"249916165"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"errorCode"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"001"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"errorMsg"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"兑换码重复"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("h2",{attrs:{id:"设置兑换码失效接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置兑换码失效接口"}},[t._v("#")]),t._v(" 设置兑换码失效接口")]),t._v(" "),a("h3",{attrs:{id:"接口说明-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接口说明-2"}},[t._v("#")]),t._v(" 接口说明")]),t._v(" "),a("p",[t._v("根据请求流水号、兑换码，作废兑换码，请求流水号和兑换码二选一。")]),t._v(" "),a("h3",{attrs:{id:"应用场景-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用场景-2"}},[t._v("#")]),t._v(" 应用场景")]),t._v(" "),a("p",[t._v("在用户退单等情况，需要将兑换码设置失效时，开发者可调用该接口，将兑换码失效。")]),t._v(" "),a("p",[t._v("需要注意，已经被用户兑换过的兑换码，将无法设置失效。")]),t._v(" "),a("h3",{attrs:{id:"请求url-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求url-2"}},[t._v("#")]),t._v(" 请求url")]),t._v(" "),a("p",[t._v("/promotion/redeemCancel")]),t._v(" "),a("h3",{attrs:{id:"请求参数-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求参数-2"}},[t._v("#")]),t._v(" 请求参数")]),t._v(" "),a("h4",{attrs:{id:"字段说明-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字段说明-3"}},[t._v("#")]),t._v(" 字段说明")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("strong",[t._v("字段")])]),t._v(" "),a("th",[a("strong",[t._v("类型")])]),t._v(" "),a("th",[a("strong",[t._v("必填")])]),t._v(" "),a("th",[a("strong",[t._v("举例")])]),t._v(" "),a("th",[a("strong",[t._v("说明")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("transNo")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("1111")]),t._v(" "),a("td",[t._v("请求流水号，请求流水号和兑换码二选一，同时存在则只处理兑换码数组。如传入transNo，将会对该请求下所有的兑换码设置失效（已经被兑换的兑换码除外）。")])]),t._v(" "),a("tr",[a("td",[t._v("redeemCodes")]),t._v(" "),a("td",[t._v("Array")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v('["249916165","45782212"]')]),t._v(" "),a("td",[t._v("需要设置失效的兑换码数组，请求流水号和兑换码二选一。每次最多传100个兑换码。")])])])]),t._v(" "),a("h4",{attrs:{id:"requestbody请求示例-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requestbody请求示例-2"}},[t._v("#")]),t._v(" requestBody请求示例")]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"transNo"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1212311"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"redeemCodes"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"249916165"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h3",{attrs:{id:"响应参数-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应参数-2"}},[t._v("#")]),t._v(" 响应参数")]),t._v(" "),a("h4",{attrs:{id:"字段说明-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字段说明-4"}},[t._v("#")]),t._v(" 字段说明")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("strong",[t._v("字段")])]),t._v(" "),a("th",[a("strong",[t._v("类型")])]),t._v(" "),a("th",[a("strong",[t._v("必填")])]),t._v(" "),a("th",[a("strong",[t._v("举例")])]),t._v(" "),a("th",[a("strong",[t._v("说明")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("successNum")]),t._v(" "),a("td",[t._v("Integer")]),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("10")]),t._v(" "),a("td",[t._v("成功个数")])]),t._v(" "),a("tr",[a("td",[t._v("failNum")]),t._v(" "),a("td",[t._v("Integer")]),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("0")]),t._v(" "),a("td",[t._v("失败个数")])]),t._v(" "),a("tr",[a("td",[t._v("errorList")]),t._v(" "),a("td",[t._v("Array")]),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("失败原因集合")])]),t._v(" "),a("tr",[a("td",[t._v("errorList\\redeemCode")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("123456789")]),t._v(" "),a("td",[t._v("兑换码编号")])]),t._v(" "),a("tr",[a("td",[t._v("errorList\\errorCode")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("123456789")]),t._v(" "),a("td",[t._v("错误代码 001-兑换码重复 003-兑换码不存在，004-兑换码已使用,005-兑换码已作废")])]),t._v(" "),a("tr",[a("td",[t._v("errorList\\errorMsg")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("123456789")]),t._v(" "),a("td",[t._v("失败原因")])])])]),t._v(" "),a("h4",{attrs:{id:"responsebody返回示例-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#responsebody返回示例-2"}},[t._v("#")]),t._v(" responseBody返回示例")]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"successNum"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"failNum"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"errorList"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"redeemCode"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"249916165"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"errorCode"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"003"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"errorMsg"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"兑换码不存在"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);