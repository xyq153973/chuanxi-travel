const pptxgen = require("pptxgenjs");

// 热点7: NeurIPS禁令事件
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  
  // 顶部装饰
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.accent }
  });
  
  // 标题
  slide.addText("NeurIPS禁令事件", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei", fontBold: true,
    color: theme.primary
  });
  slide.addText("学术开放与政治化的博弈", {
    x: 0.5, y: 0.95, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });
  
  // 事件时间线
  const timeline = [
    { date: "3月23日", event: "NeurIPS 2026征稿指南新增\"受制裁机构\"条款，禁止873家中国机构投稿" },
    { date: "3月25-27日", event: "中国科协、中国计算机学会等相继发表声明坚决反对" },
    { date: "3月27日", event: "NeurIPS在X上公开致歉，宣布撤销禁令" },
    { date: "3月30日", event: "中国计算机学会回应，欢迎投稿政策回归国际学术交流通行做法" }
  ];
  
  let yPos = 1.5;
  timeline.forEach((item, idx) => {
    // 日期标签
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.5, y: yPos, w: 1.8, h: 0.45,
      fill: { color: theme.primary }
    });
    slide.addText(item.date, {
      x: 0.5, y: yPos, w: 1.8, h: 0.45,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "FFFFFF", align: "center", valign: "middle"
    });
    
    // 事件内容
    slide.addText(item.event, {
      x: 2.5, y: yPos, w: 7, h: 0.45,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "middle"
    });
    
    yPos += 0.6;
  });
  
  // 底部强调
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 4.0, w: 9, h: 1.3,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 10, offset: 3, opacity: 0.1 }
  });
  slide.addText("中国声音与行动", {
    x: 0.7, y: 4.15, w: 8.6, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei", fontBold: true,
    color: theme.primary
  });
  slide.addText("中国计算机学会等机构坚决反对将学术交流与政治挂钩，呼吁尊重中国学者权益、恪守学术共同体基本准则。最终NeurIPS更新手册，与ACM、IEEE以及其他国际会议投稿规则保持一致。", {
    x: 0.7, y: 4.55, w: 8.6, h: 0.65,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, valign: "top"
  });
  
  // 页码
  slide.addText("09", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: theme.secondary, align: "right"
  });
  
  return slide;
}

module.exports = { createSlide };
