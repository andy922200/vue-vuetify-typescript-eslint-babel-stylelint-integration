interface I18nLanguage {
    param: string;
    title: string;
}

export enum Locales {
    enUs = 'en_us',
    zhTw = 'zh_tw',
    zhCn = 'zh_cn',
}

export const LayoutLanguages: Array<I18nLanguage> = [
    {
        param: Locales.enUs,
        title: 'English'
    },
    {
        param: Locales.zhTw,
        title: '繁體中文'
    },
    {
        param: Locales.zhCn,
        title: '简体中文'
    }
]
