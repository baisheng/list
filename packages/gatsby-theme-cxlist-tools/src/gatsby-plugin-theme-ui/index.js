import colors from "./colors"

export default {
  colors,

  fonts: {
    body: `'Inter', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'PingFang SC', 'Microsoft YaHei', 'Source Han Sans SC', 'Noto Sans CJK SC', 'WenQuanYi Micro Hei', sans-serif`,
    heading: `'Inter', sans-serif`,
    monospace: `Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`,
  },
  fontSizes: [16, 18, 20, 22, 27, 36],
  fontWeights: {
    body: 300,
    heading: 400,
    bold: 700,
  },
  lineHeights: {
    body: 1.6,
    heading: 1.25,
  },
  sizes: {
    container: 1216, //1152 + 64
  },

  layout: {
    container: {
      maxWidth: 'container',
      mx: `auto`,
      px: 3,
      py: 4,
    }
  },

  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      letterSpacing: 'body',
      backgroundColor: 'background',
    },
    h1: {
      fontFamily: 'heading',
      fontSize: [20, 32],
      lineHeight: 'body',
      color: '#350909',
      textAlign: 'center',
    },
    h3: {
      fontFamily: 'body',
      fontWeight: 'body',
      fontSize: '13px',
      lineHeight: '1.4',
      textAlign: 'center',
      color: '#c6d2ff',
      visibility: 'hidden',
      position: 'absolute',
      width: '100%',
      left: '0',
      px: 2,
      pt: 2,
    },
  }
}