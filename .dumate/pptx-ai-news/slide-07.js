const pptxgen = require("pptxgenjs");

// 热点5: AWE 2026智能终端
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  
  // 顶部装饰
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.accent }
  });
  
  // 标题
  slide.addText("AWE 2026 智能终端", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei", fontBold: true,
    color: theme.primary
  });
  slide.addText("从\"人工智能+\"到\"智能经济\"——中国消费电子新纪元", {
    x: 0.5, y: 0.95, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });
  
  // 展会数据
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.5, w: 9, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("1200+ 参展企业  ·  17万+ 平方米展览面积  ·  与德国IFA、美国CES并称全球三大家电与消费电子展", {
    x: 0.7, y: 1.7, w: 8.6, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", align: "center"
  });
  
  // 两大亮点卡片
  // 左侧 - 智能眼镜
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 2.6, w: 4.3, h: 2.6,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 10, offset: 3, opacity: 0.1 }
  });
  slide.addText("智能眼镜成为新入口", {
    x: 0.7, y: 2.75, w: 3.9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei", fontBold: true,
    color: theme.primary
  });
  slide.addText("Xreal 1S\n• 3毫秒超低延迟\n• 700尼特入眼亮度\n• 全球首创实时2D转3D\n\n小度AI眼镜Pro\n• 仅39克重量\n• 集成导航、识物、AI助手", {
    x: 0.7, y: 3.25, w: 3.9, h: 1.8,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, valign: "top"
  });
  
  // 右侧 - 具身智能
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.2, y: 2.6, w: 4.3, h: 2.6,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 10, offset: 3, opacity: 0.1 }
  });
  slide.addText("具身智能\"钢铁碰撞\"", {
    x: 5.4, y: 2.75, w: 3.9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei", fontBold: true,
    color: theme.primary
  });
  slide.addText("• 智元机器人\n• 宇树科技\n• 云深处科技\n\n180平米\"角斗场\"上演具身智能展示\n\n\"终端即入口\"——智能眼镜有望成为继手机之后的下一个核心入口", {
    x: 5.4, y: 3.25, w: 3.9, h: 1.8,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, valign: "top"
  });
  
  // 页码
  slide.addText("07", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: theme.secondary, align: "right"
  });
  
  return slide;
}

module.exports = { createSlide };
