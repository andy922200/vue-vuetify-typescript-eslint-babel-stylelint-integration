import dayjs from 'dayjs'

export interface RootState {
    today: dayjs.Dayjs;
    leftNavigationStatus: boolean;
    selectedLanguage: string;
    windowWidth: number;
}
