const pptxgen = require("pptxgenjs");

// 目录幻灯片
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  
  // 左侧装饰条
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });
  
  // 标题
  slide.addText("新闻目录", {
    x: 0.5, y: 0.3, w: 9, h: 0.8,
    fontSize: 36, fontFace: "Microsoft YaHei", fontBold: true,
    color: theme.primary, align: "left"
  });
  
  // 目录项
  const topics = [
    { num: "01", title: "Anthropic 源代码泄露事件", desc: "51万行代码意外暴露" },
    { num: "02", title: "世界模型融资热潮", desc: "25起融资，总额超22亿元" },
    { num: "03", title: "2026智能体AI元年", desc: "张亚勤院士定义新趋势" },
    { num: "04", title: "AI人才薪资暴涨", desc: "岗位量增12倍，平均月薪超6万" },
    { num: "05", title: "AWE 2026智能终端", desc: "从\"人工智能+\"到\"智能经济\"" },
    { num: "06", title: "通用智能人\"通通\"3.0", desc: "全球首个通用智能人亮相" },
    { num: "07", title: "NeurIPS禁令事件", desc: "学术开放与政治化的博弈" },
    { num: "08", title: "AI发展趋势展望", desc: "从规模竞赛到业务实效" }
  ];
  
  let yPos = 1.3;
  topics.forEach((topic, idx) => {
    // 编号
    slide.addText(topic.num, {
      x: 0.6, y: yPos, w: 0.6, h: 0.5,
      fontSize: 20, fontFace: "Arial", fontBold: true,
      color: theme.accent
    });
    // 标题
    slide.addText(topic.title, {
      x: 1.3, y: yPos, w: 4, h: 0.35,
      fontSize: 18, fontFace: "Microsoft YaHei", fontBold: true,
      color: theme.primary
    });
    // 描述
    slide.addText(topic.desc, {
      x: 1.3, y: yPos + 0.35, w: 4, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
    yPos += 0.5;
  });
  
  // 页码
  slide.addText("02", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: theme.secondary, align: "right"
  });
  
  return slide;
}

module.exports = { createSlide };
