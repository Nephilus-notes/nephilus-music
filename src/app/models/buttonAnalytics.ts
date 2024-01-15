export interface buttonAnalytics {
    id: string;
    type: string;
    title: string;
    ariaLabel: string;
    clicks: number;
    uniqueClicks: number;
    uniqueIpAddresses?: Array<string>;
    pageClickedFrom: string;
    pageClickedTo?: string;
}