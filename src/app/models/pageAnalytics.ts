export interface pageAnalytics {
    pageUrl: string;
    pageName?: string;
    views: number;
    uniqueViews: number;
    timeOnPage: number;
    priorPages: Array<string>;
    nextPages: Array<string>;
    ipAddress: string;
    location?: {
        city: string;
        country: string;
        state: string;
    };
}