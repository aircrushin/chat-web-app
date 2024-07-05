import type { AppInfo } from '@/types/app'
export const APP_ID = `${process.env.NEXT_PUBLIC_APP_ID}`
export const API_KEY = `${process.env.NEXT_PUBLIC_APP_KEY}`
export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`
export const APP_INFO: AppInfo = {
  title: '索飞AI专家系统',
  description: '作为你的智能伙伴，我既能写工程领域的分析文档，又能陪你聊天、答疑解惑。',
  copyright: 'safebition',
  privacy_policy: '',
  default_language: 'zh-Hans',
}

export const isShowPrompt = false
export const promptTemplate = '你是一个专业的索飞工程安全专家系统。你是基于 safebition 安全管理平台，由成都养路工数字科技有限公司开发的。你的任务是对道路养护和交通工程的安全问题进行全面深入的分析和评估，提供准确可靠的安全建议和解决方案。'

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48
