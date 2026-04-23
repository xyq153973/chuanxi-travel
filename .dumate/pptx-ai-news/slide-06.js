const pptxgen = require("pptxgenjs");

// 热点4: AI人才薪资暴涨
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  
  // 顶部装饰
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.accent }
  });
  
  // 标题
  slide.addText("AI人才薪资暴涨", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei", fontBold: true,
    color: theme.primary
  });
  slide.addText("2026年春招AI人才争夺成招聘主战场", {
    x: 0.5, y: 0.95, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });
  
  // 核心数据 - 大数字展示
  // 岗位量增长
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.5, w: 2.8, h: 1.6,
    fill: { color: theme.primary }
  });
  slide.addText("12倍", {
    x: 0.5, y: 1.65, w: 2.8, h: 0.8,
    fontSize: 42, fontFace: "Arial", fontBold: true,
    color: "FFFFFF", align: "center"
  });
  slide.addText("AI岗位量同比增长", {
    x: 0.5, y: 2.5, w: 2.8, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.light, align: "center"
  });
  
  // 平均月薪
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 3.6, y: 1.5, w: 2.8, h: 1.6,
    fill: { color: theme.accent }
  });
  slide.addText("60,738元", {
    x: 3.6, y: 1.65, w: 2.8, h: 0.8,
    fontSize: 36, fontFace: "Arial", fontBold: true,
    color: "FFFFFF", align: "center"
  });
  slide.addText("AI岗位平均月薪", {
    x: 3.6, y: 2.5, w: 2.8, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", align: "center"
  });
  
  // 高于行业平均
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 6.7, y: 1.5, w: 2.8, h: 1.6,
    fill: { color: theme.secondary }
  });
  slide.addText("+26%", {
    x: 6.7, y: 1.65, w: 2.8, h: 0.8,
    fontSize: 42, fontFace: "Arial", fontBold: true,
    color: "FFFFFF", align: "center"
  });
  slide.addText("高于行业平均", {
    x: 6.7, y: 2.5, w: 2.8, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.light, align: "center"
  });
  
  // 下方详情卡片
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 3.3, w: 9, h: 2,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 10, offset: 3, opacity: 0.1 }
  });
  
  slide.addText("高薪岗位排行榜", {
    x: 0.7, y: 3.45, w: 8.6, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei", fontBold: true,
    color: theme.primary
  });
  
  // 薪资排行列表
  const salaryList = [
    { job: "AI科学家/负责人", salary: "137,153元" },
    { job: "算法研究员", salary: "约70,000元" },
    { job: "大模型算法", salary: "约70,000元" },
    { job: "AIGC算法工程师", salary: "约70,000元" }
  ];
  
  let listY = 3.9;
  salaryList.forEach((item, idx) => {
    slide.addText(item.job, {
      x: 0.7, y: listY, w: 5, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
    slide.addText(item.salary, {
      x: 6, y: listY, w: 3.2, h: 0.35,
      fontSize: 13, fontFace: "Arial", fontBold: true,
      color: theme.accent, align: "right"
    });
    listY += 0.38;
  });
  
  // 页码
  slide.addText("06", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: theme.secondary, align: "right"
  });
  
  return slide;
}

module.exports = { createSlide };
