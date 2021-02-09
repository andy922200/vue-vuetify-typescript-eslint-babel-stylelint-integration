import {
    Locales
} from './locales'

import enUs from '../en_us.json'
import zhTw from '../zh_tw.json'
import zhCn from '../zh_cn.json'

export const messages = {
    [Locales.enUs]: enUs,
    [Locales.zhTw]: zhTw,
    [Locales.zhCn]: zhCn
}

export const defaultLocale = Locales.enUs
