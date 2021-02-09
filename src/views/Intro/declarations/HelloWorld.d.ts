import {
    TranslateResult
} from 'vue-i18n'

export interface Link {
    caption: string | TranslateResult;
    link: string | TranslateResult;
}
