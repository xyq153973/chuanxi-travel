const pptxgen = require("pptxgenjs");

// 热点2: 世界模型融资热潮
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  
  // 顶部装饰
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.accent }
  });
  
  // 标题
  slide.addText("世界模型融资热潮", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei", fontBold: true,
    color: theme.primary
  });
  slide.addText("25起融资事件，总额超22亿元", {
    x: 0.5, y: 0.95, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });
  
  // 什么是世界模型
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.5, w: 9, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("什么是世界模型？", {
    x: 0.7, y: 1.6, w: 8.6, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei", fontBold: true,
    color: theme.accent
  });
  slide.addText("世界模型通过从感官数据中学习和预测运动、力以及空间关系等动态特性，来理解物理世界中事物的性质、运行规律和空间特性。借助世界模型，AI从认知、识别转向理解、推理，是具身智能和客观环境自主高效交互的基础。", {
    x: 0.7, y: 2.0, w: 8.6, h: 0.55,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "top"
  });
  
  // 国际融资案例 - 左侧卡片
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 2.8, w: 4.3, h: 2.4,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 10, offset: 3, opacity: 0.1 }
  });
  slide.addText("国际融资案例", {
    x: 0.7, y: 2.95, w: 3.9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei", fontBold: true,
    color: theme.primary
  });
  slide.addText("• 李飞飞创立的世界模型企业完成10亿美元融资\n• 图灵奖得主杨立昆的世界模型初创公司AMI完成逾10亿美元融资", {
    x: 0.7, y: 3.45, w: 3.9, h: 1.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, valign: "top"
  });
  
  // 国内融资案例 - 右侧卡片
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.2, y: 2.8, w: 4.3, h: 2.4,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 10, offset: 3, opacity: 0.1 }
  });
  slide.addText("国内融资案例", {
    x: 5.4, y: 2.95, w: 3.9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei", fontBold: true,
    color: theme.primary
  });
  slide.addText("• 今年国内发生25起世界模型相关融资事件\n• 融资总额超22亿元\n• 极佳视界完成10亿元Pre-B轮融资，其具身世界模型GigaWorld-1登上WorldArena榜首", {
    x: 5.4, y: 3.45, w: 3.9, h: 1.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, valign: "top"
  });
  
  // 页码
  slide.addText("04", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: theme.secondary, align: "right"
  });
  
  return slide;
}

module.exports = { createSlide };
