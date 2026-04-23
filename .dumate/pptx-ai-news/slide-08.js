const pptxgen = require("pptxgenjs");

// 热点6: 通用智能人"通通"3.0
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  
  // 顶部装饰
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.accent }
  });
  
  // 标题
  slide.addText("通用智能人\"通通\"3.0", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei", fontBold: true,
    color: theme.primary
  });
  slide.addText("全球首个通用智能人亮相2026中关村论坛", {
    x: 0.5, y: 0.95, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });
  
  // 核心信息卡片
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.5, w: 9, h: 1.2,
    fill: { color: theme.primary }
  });
  slide.addText("3月29日 · 2026中关村论坛年会", {
    x: 0.7, y: 1.6, w: 8.6, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.light
  });
  slide.addText("北京通用人工智能研究院发布全球首个通用智能人\"通通\"3.0版本", {
    x: 0.7, y: 2.0, w: 8.6, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei", fontBold: true,
    color: "FFFFFF"
  });
  
  // 能力特点 - 三个卡片
  // 左侧
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 2.9, w: 2.8, h: 2.3,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 8, offset: 2, opacity: 0.08 }
  });
  slide.addText("心智水平", {
    x: 0.7, y: 3.05, w: 2.4, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei", fontBold: true,
    color: theme.primary
  });
  slide.addText("5-6岁\n儿童心智水平", {
    x: 0.7, y: 3.5, w: 2.4, h: 0.8,
    fontSize: 20, fontFace: "Arial", fontBold: true,
    color: theme.accent, align: "center"
  });
  slide.addText("能够理解对方意图，遵循自身人格特质引导对话方向", {
    x: 0.7, y: 4.4, w: 2.4, h: 0.6,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center"
  });
  
  // 中间
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 3.6, y: 2.9, w: 2.8, h: 2.3,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 8, offset: 2, opacity: 0.08 }
  });
  slide.addText("核心能力", {
    x: 3.8, y: 3.05, w: 2.4, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei", fontBold: true,
    color: theme.primary
  });
  slide.addText("理解意图\n言行一致", {
    x: 3.8, y: 3.5, w: 2.4, h: 0.8,
    fontSize: 20, fontFace: "Arial", fontBold: true,
    color: theme.accent, align: "center"
  });
  slide.addText("准确理解对方意图，更能遵循自身人格特质引导对话方向", {
    x: 3.8, y: 4.4, w: 2.4, h: 0.6,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center"
  });
  
  // 右侧
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 6.7, y: 2.9, w: 2.8, h: 2.3,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 8, offset: 2, opacity: 0.08 }
  });
  slide.addText("技术意义", {
    x: 6.9, y: 3.05, w: 2.4, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei", fontBold: true,
    color: theme.primary
  });
  slide.addText("AGI\n里程碑", {
    x: 6.9, y: 3.5, w: 2.4, h: 0.8,
    fontSize: 20, fontFace: "Arial", fontBold: true,
    color: theme.accent, align: "center"
  });
  slide.addText("通用人工智能发展的重要里程碑，推动AGI技术落地", {
    x: 6.9, y: 4.4, w: 2.4, h: 0.6,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center"
  });
  
  // 页码
  slide.addText("08", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: theme.secondary, align: "right"
  });
  
  return slide;
}

module.exports = { createSlide };
