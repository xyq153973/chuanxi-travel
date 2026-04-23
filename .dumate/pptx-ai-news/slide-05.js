const pptxgen = require("pptxgenjs");

// 热点3: 2026智能体AI元年
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  
  // 顶部装饰
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.accent }
  });
  
  // 标题
  slide.addText("2026智能体AI元年", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei", fontBold: true,
    color: theme.primary
  });
  slide.addText("张亚勤院士定义AI发展三大趋势", {
    x: 0.5, y: 0.95, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });
  
  // 三大趋势卡片
  const trends = [
    {
      num: "01",
      title: "从生成式AI走向智能体AI",
      desc: "涵盖工业、消费、制药等领域。2026年是\"智能体AI元年\"，标志着AI从通用人工智能迈向智能体人工智能。"
    },
    {
      num: "02", 
      title: "从信息智能走向物理智能",
      desc: "从\"信息智能\"走向\"物理智能\"和\"生物智能\"，机器人、无人驾驶等都是物理AI的应用。"
    },
    {
      num: "03",
      title: "从AI走向AI+",
      desc: "AI不再只是技术，而是融入各行各业的经济工具，代表一种\"AI思维\"，大小企业都需用AI思维管理公司。"
    }
  ];
  
  let yPos = 1.5;
  trends.forEach((trend, idx) => {
    // 卡片背景
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.5, y: yPos, w: 9, h: 1.2,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 8, offset: 2, opacity: 0.08 }
    });
    
    // 编号
    slide.addText(trend.num, {
      x: 0.7, y: yPos + 0.15, w: 0.5, h: 0.5,
      fontSize: 24, fontFace: "Arial", fontBold: true,
      color: theme.accent
    });
    
    // 标题
    slide.addText(trend.title, {
      x: 1.3, y: yPos + 0.15, w: 8, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei", fontBold: true,
      color: theme.primary
    });
    
    // 描述
    slide.addText(trend.desc, {
      x: 1.3, y: yPos + 0.55, w: 8, h: 0.55,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "top"
    });
    
    yPos += 1.35;
  });
  
  // 底部强调
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 4.65, w: 9, h: 0.7,
    fill: { color: theme.primary }
  });
  slide.addText("\"一人公司\"正在兴起，一个人加上一群AI智能体，即可完成过去需要一个团队才能完成的工作。", {
    x: 0.7, y: 4.75, w: 8.6, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", align: "center"
  });
  
  // 页码
  slide.addText("05", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: theme.secondary, align: "right"
  });
  
  return slide;
}

module.exports = { createSlide };
