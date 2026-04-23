const pptxgen = require("pptxgenjs");

// 热点1: Anthropic源代码泄露
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  
  // 顶部装饰
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.accent }
  });
  
  // 标题区
  slide.addText("Anthropic 源代码泄露事件", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei", fontBold: true,
    color: theme.primary
  });
  slide.addText("AI界的\"核泄漏\"事件", {
    x: 0.5, y: 0.95, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });
  
  // 左侧卡片 - 事件概述
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.5, w: 4.3, h: 2.2,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 10, offset: 3, opacity: 0.1 }
  });
  slide.addText("事件概述", {
    x: 0.7, y: 1.65, w: 3.9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei", fontBold: true,
    color: theme.primary
  });
  slide.addText("3月31日，AI巨头Anthropic核心AI编程工具Claude Code的完整源代码意外泄露，规模达51.2万行TypeScript代码、超1900个文件，包括尚未发布的尖端功能、内部架构逻辑。", {
    x: 0.7, y: 2.1, w: 3.9, h: 1.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, valign: "top"
  });
  
  // 右侧卡片 - 泄露原因
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.2, y: 1.5, w: 4.3, h: 2.2,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 10, offset: 3, opacity: 0.1 }
  });
  slide.addText("泄露原因", {
    x: 5.4, y: 1.65, w: 3.9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei", fontBold: true,
    color: theme.primary
  });
  slide.addText("并非黑客攻击，而是发布打包失误。Web3安全公司实习研究员未正确排除调试文件(.npm文件)，导致57MB源映射文件被公开发布。", {
    x: 5.4, y: 2.1, w: 3.9, h: 1.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, valign: "top"
  });
  
  // 底部重点强调
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 3.9, w: 9, h: 1.3,
    fill: { color: theme.primary }
  });
  slide.addText("影响与警示", {
    x: 0.7, y: 4.05, w: 8.6, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei", fontBold: true,
    color: theme.accent
  });
  slide.addText("以\"安全优先\"为核心理念、估值高达3500亿美元的AI明星公司，在筹备IPO之际，以最不可能的方式\"开源\"了核心产品。业内人士称此为AI界的\"核泄漏\"事件。", {
    x: 0.7, y: 4.45, w: 8.6, h: 0.7,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "top"
  });
  
  // 页码
  slide.addText("03", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: theme.secondary, align: "right"
  });
  
  return slide;
}

module.exports = { createSlide };
