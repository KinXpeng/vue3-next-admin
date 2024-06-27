import Tesseract from 'tesseract.js'

/**
 * 识别图片
 * @param {string} url 图片地址
 * @param {string} language 识别的语言  chi_sim 中文 / eng 英文
 * */
const resolveImg = (url: string, language: string) => {
  return Tesseract.recognize(url, language)
    .then(({ data: { text } }) => {
      return {
        url: url,
        text: text
      }
    }).catch(() => {
      return {
        url: url,
        text: ''
      }
    })
}

/**
 * 图片处理
 * @param {string[]} urlList 图片地址列表
 * @param {string} language 识别的语言  chi_sim 中文 / eng 英文
 * */
export interface IRecognize {
  url: string
  text: string
}
export const recognizeText = async (urlList: string[], language = 'chi_sim') => {
  const result: IRecognize[] = await Promise.all(urlList.map(item => resolveImg(item, language)))
  return result
}