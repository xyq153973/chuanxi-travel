const pptxgen = require("pptxgenjs");

// 封面幻灯片
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };
  
  // 装饰性圆形背景
  slide.addShape(pres.shapes.OVAL, {
    x: -1.5, y: -1.5, w: 4, h: 4,
    fill: { color: theme.accent, transparency: 30 }
  });
  slide.addShape(pres.shapes.OVAL, {
    x: 7.5, y: 3.5, w: 4, h: 4,
    fill: { color: theme.accent, transparency: 40 }
  });
  slide.addShape(pres.shapes.OVAL, {
    x: 8, y: -1, w: 3, h: 3,
    fill: { color: theme.light, transparency: 50 }
  });
  
  // 主标题
  slide.addText("AI领域最新新闻", {
    x: 0.5, y: 1.8, w: 9, h: 1.2,
    fontSize: 54, fontFace: "Microsoft YaHei", fontBold: true,
    color: "FFFFFF", align: "center"
  });
  
  // 副标题
  slide.addText("2026年4月 · 热点速览", {
    x: 0.5, y: 3.1, w: 9, h: 0.6,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.light, align: "center"
  });
  
  // 底部装饰线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 3.5, y: 4.2, w: 3, h: 0.05,
    fill: { color: theme.accent }
  });
  
  // 页码
  slide.addText("01", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: theme.light, align: "right"
  });
  
  return slide;
}

module.exports = { createSlide };
