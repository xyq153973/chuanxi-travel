const path = require('path');
const pptxgen = require('pptxgenjs');

const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';

// 主题配色 - 科技蓝
const theme = {
  primary: "1E3A5F",    // 深蓝
  secondary: "3D5A80",  // 中蓝
  accent: "00B4D8",     // 科技青
  light: "CAF0F8",      // 浅青
  bg: "F8F9FA"         // 浅灰白
};

// 加载所有幻灯片
const slideModules = [
  require('./slide-01.js'),
  require('./slide-02.js'),
  require('./slide-03.js'),
  require('./slide-04.js'),
  require('./slide-05.js'),
  require('./slide-06.js'),
  require('./slide-07.js'),
  require('./slide-08.js'),
  require('./slide-09.js'),
  require('./slide-10.js')
];

// 生成所有幻灯片
slideModules.forEach(module => {
  module.createSlide(pres, theme);
});

// 输出到当前工作目录
const outputDir = process.env.OUTPUT_DIR || process.cwd();
pres.writeFile({ fileName: path.join(outputDir, 'AI新闻速览.pptx') })
  .then(() => console.log('PPT生成成功！'))
  .catch(err => console.error('生成失败:', err));
