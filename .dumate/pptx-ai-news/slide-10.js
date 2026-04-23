const pptxgen = require("pptxgenjs");

// 热点8: AI发展趋势展望
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  
  // 顶部装饰
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.accent }
  });
  
  // 标题
  slide.addText("AI发展趋势展望", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei", fontBold: true,
    color: theme.primary
  });
  slide.addText("从规模竞赛到业务实效", {
    x: 0.5, y: 0.95, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });
  
  // 趋势卡片
  const trends = [
    {
      title: "AI原生技术基座重构",
      points: [
        "从\"AI on Cloud\"到\"AI Native\"",
        "异构计算成为标配：CPU、GPU、NPU、TPU",
        "万卡级算力高效协同"
      ]
    },
    {
      title: "大模型价值理性回归",
      points: [
        "从追求参数规模转向解决实际问题",
        "核心指标从参数量转向业务收益",
        "从通用能力转化为场景实效"
      ]
    },
    {
      title: "行业应用深度落地",
      points: [
        "AI+制造：智能体广泛应用",
        "AI+医疗：医工交叉创新",
        "AI+终端：智能眼镜等新入口"
      ]
    }
  ];
  
  let yPos = 1.5;
  trends.forEach((trend, idx) => {
    // 卡片背景
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.5, y: yPos, w: 9, h: 1.15,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 8, offset: 2, opacity: 0.08 }
    });
    
    // 标题
    slide.addText(trend.title, {
      x: 0.7, y: yPos + 0.1, w: 8.6, h: 0.35,
      fontSize: 15, fontFace: "Microsoft YaHei", fontBold: true,
      color: theme.primary
    });
    
    // 要点
    slide.addText(trend.points.join("  ·  "), {
      x: 0.7, y: yPos + 0.5, w: 8.6, h: 0.5,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "top"
    });
    
    yPos += 1.3;
  });
  
  // 底部总结
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 4.65, w: 9, h: 0.7,
    fill: { color: theme.primary }
  });
  slide.addText("IDC预测：到2027年，超过60%的企业将优先选择针对AI工作负载优化的云基础设施", {
    x: 0.7, y: 4.75, w: 8.6, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", align: "center", valign: "middle"
  });
  
  // 页码
  slide.addText("10", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: theme.secondary, align: "right"
  });
  
  return slide;
}

module.exports = { createSlide };
