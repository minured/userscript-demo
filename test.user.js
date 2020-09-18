// ==UserScript==
// @name         minu-userscript
// @namespace    https://github.com/minured
// @version      0.1
// @description  userscript demo
// @author       minured
// @match        https://10.124.195.138/embed/iframe/*
// @grant        none

// ==/UserScript==

(function () {
  "use strict";
  console.log("---- UserScript Start ------");

  const addBtn = () => {
    // 样式添加
    var $style = $("<style>");
    $style.attr("type", "text/css");
    $style.text(`
        #operation-btn {
          border: 2px solid rgb(73, 137, 243);
          box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
          border-radius: 6px;
          padding: 2px 10px 10px 10px;
          position: fixed;
          top: 10px;
          right: 10px;
          z-index: 99;
          display: flex;
          flex-direction: column;
        } 
        #operation-btn>button {
          padding: 5px 10px;
          margin-top: 8px;
          border: none;
          border-radius: 2px;
          box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
          background: white;
          transition: all 0.1s;
        }
        #operation-btn>button:active {
          background: #eee;
          transform: scale(0.95);
          color: red;
        }
        #operation-btn>button:hover {
          box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
          background: rgb(73, 137, 243);
          color: white;
        }
        #operation-btn>button:focus {
          outline:none;
        }
        
    `);
    $("body").append($style);

    // 按钮组
    var $btnWrapper = $("<div>");
    $btnWrapper.attr("id", "operation-btn");

    var $baseBtn = $("<button>").text("基本信息").appendTo($btnWrapper);
    var $goodsBtn = $("<button>").text("商品信息").appendTo($btnWrapper);
    var $otherBtn = $("<button>").text("其他信息").appendTo($btnWrapper);

        // 按钮
    // var btnMap = {
    //   $baseBtn: "基本信息",
    //   $goodsBtn: "商品信息",
    //   $otherBtn: "其他信息"
    // }
    // for (let i in btnMap) {
    //   $("<button>").text(btnMap[i]).appendTo($btnWrapper)
    // }

    $("body").append($btnWrapper);
    return {
      $baseBtn,
      $goodsBtn,
      $otherBtn
    };
  };
  const fillBaseForm = () => {
    console.log("填写基本信息");

    // 不能直接选择iframe里面的标签
    let iframe = $("._2t1nn").contents();

    // 联系人信息
    iframe.find("input[name=1-rg_00000019-CONTACT]").val("test");
    iframe.find("input[name=1-rg_00000019-CONTACT_PHONE]").val("12345678910");
    iframe.find("input[name=1-rg_00000019-CONTACT_EMAIL]").val("test@qq.com");

    // 发展人信息
    iframe.find("[name=0-rg_00000025-DEPART_NAME]").val("海珠自营厅");
    iframe.find("[name=0-rg_00000025-STAFF_NAME]").val("三区去");
    iframe.find("[name=0-rg_00000025-DEPART_ID]").val("11b0el5");
    iframe.find("[name=0-rg_00000025-STAFF_ID]").val("1102819078");
    iframe.find("[name=0-rg_00000025-DEV_CONTACT_PHONE]").val("12345678910");
    iframe.find("[name=0-rg_00000025-isSendSms]").val("0");
  };
  const fillGoodsForm = () => {
    console.log("填写商品信息");
    let iframe = $("._2t1nn").contents();

    // 业务产品
    iframe.find("[name=0-spjpw_00000001-200002052]").val("100003171");
    iframe.find("[name=0-spjpw_00000001-200002043]").val("100003049");
    iframe.find("[name=0-spjpw_00000001-200000157]").val("1_0000116");
    iframe.find("[name=0-spjpw_00000001-200002044]").val("100003056");
    iframe.find("[name=0-spjpw_00000001-200002045]").val("100003053");

    // 发端信息
    iframe.find("[name=0-spjpw_00000002-200002077]").val("100001639"); //发端运营商
    iframe.find("[name=0-spjpw_00000002-200002087]").val("100003263"); //电路租用范围
    iframe.find("[name=0-spjpw_00000002-200002080]").val("100003234"); //发端
    iframe.find("[name=0-spjpw_00000002-2_0000016]").val("1_0000106"); //SLA标识
    iframe.find("[name=0-spjpw_00000002-2_0000049]").val("1_0000107"); //是否骨干
    iframe.find("[name=0-spjpw_00000002-2_0000051]").val("100002805"); //接口类型

    iframe.find("[name=0-spjpw_00000002-2_0000054]").val("100002804"); //CE接口类型
    iframe.find("[name=0-spjpw_00000002-2_0000055]").val("1_0000152"); //CE客户设备情况

    iframe.find("[name=0-spjpw_00000002-2_0000118]").val("test"); //A端联系人
    iframe.find("[name=0-spjpw_00000002-2_0000120]").val("12345678910"); //A端联系电话
    iframe.find("[name=0-spjpw_00000002-cityInfoZ]").val("广东-广州-白云"); //城市
    iframe.find("[name=0-spjpw_00000002-2_0000211]").val("三元里"); //装机地址

    // 收端信息
    iframe.find("[name=0-spjpw_00000003-200002105]").val("100003215"); //收端运营商
    iframe.find("[name=0-spjpw_00000003-200002110]").val("100003229"); //平台节点
    iframe.find("[name=0-spjpw_00000003-200002111]").val("100003258"); //互联网协议
    iframe.find("[name=0-spjpw_00000003-200002112]").val("127.0.0.1"); //收端ip
    iframe.find("[name=0-spjpw_00000003-200002113]").val("3389"); //端口
    iframe.find("[name=0-spjpw_00000003-200002531]").val("100003258"); //协议2
    iframe.find("[name=0-spjpw_00000003-200002532]").val("127.0.0.2"); //ip2
    iframe.find("[name=0-spjpw_00000003-200002533]").val("3388"); //端口2

    // 传送计划
    iframe.find("input[name=0]").attr("checked", "true");
    iframe.find("[name=0-spjpw_00000004-200002049]").val("传送任务A");
    iframe.find("[name=0-spjpw_00000004-200002050]").val("2020-10-08 10:15:55");

    // 资费信息， 视频传送租费
    iframe.find("[name=0-spjpw_00000015-200001785]").val("666"); //月租
    // iframe.find("[name=0-spjpw_00000015-200000171]").val(""); // 末月收取方式
    // iframe.find("[name=0-spjpw_00000015-200000171]").val("100000265"); // 末月收取方式

    // 保存按钮
    //iframe.find("button.saveGoodsForBtn").click();
  };
  const fillOtherForm = () => {
    console.log("填写付费信息");
    let iframe = $("._2t1nn").contents();

    //订单信息
    iframe.find("[name=0-rg_00000004-ORD10012]").val("2020-10-15"); //完成时间
    iframe.find("[name=0-rg_00000004-ORD10005]").val("0"); //

    //付费关系设置
    iframe
      .find("table.accotMainTalbe>tbody>tr>td")
      .eq(2)
      .text("1111100040020060"); //账户编码
    iframe.find("table.accotMainTalbe>tbody>tr>td").eq(3).text("殷久煌"); //账户名称
    iframe.find("table.accotMainTalbe>tbody>tr>td").eq(4).text("全部"); //付费账目
    iframe
      .find("table.accotMainTalbe>tbody>tr>td")
      .eq(5)
      .html(
        `<a href="javascript:void(0)" onclick="payTableTrDetail({'10021134':'0','10021157':'0','10021158':'0','10021159':'2020-09','10021160':'2099-12','10021161':'1','isCenterDirectSign':'0','payModeCode':'0','provinceCode':'11','groupId':'1111000000000335715','isGroupAcct':'1','acctId':1111100040020060,'remark':'工号gaofang对客户进行账户开户操作','statusCd':'1000','updateDepartId':'1110882','debutyCode':'0','debutyUserId':0,'contractId':'ZH111102110000001986','custId':30106311,'removeTag':'1','accountCycle':'1','openDate':1600309914000,'payCycle':'1','payName':'殷久煌','eparchyCode':'110','updateStaff':'1000156481','commodityIndex':0,'feeCycle':'1','commodityName':'视频智能精品网商品','commodityCode':'200000000009493'})" style="display:inline-block;margin-right:10px;">详情</a><a href="javascript:void(0)" class="acctTableTrDelete" onclick="acctTableTrDelete(0,&quot;0&quot;)">删除</a>`
      ); //操作
  };

  const { $baseBtn, $goodsBtn, $otherBtn } = addBtn();
  $baseBtn.on("click", fillBaseForm);
  $goodsBtn.on("click", fillGoodsForm);
  $otherBtn.on("click", fillOtherForm);
})();
