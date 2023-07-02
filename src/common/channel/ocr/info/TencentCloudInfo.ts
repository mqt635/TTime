import { TencentCloudOcrLanguageEnum } from '../../../enums/TencentCloudOcrLanguageEnum'

export default {
  name: '腾讯云OCR',
  // 是否需要秘钥
  isKey: true,
  // 是否单秘钥
  isOneAppKey: false,
  // 构建时默认信息
  defaultInfo: {
    languageType: TencentCloudOcrLanguageEnum.AUTO
  }
}
