const generateOverride = (params = {}) => {
    let result = ''

    // 内容区背景色 - contentBgColor
    if (params.bgColor && params.bgColor !== '#ffffff') {
        result += `
      body {
        background: ${params.bgColor};
      }
    `
    }

    // 自定义CSS
    if (params.customCss) {
        result += `
      ${params.customCss}
    `
    }

    return result
}

module.exports = generateOverride
