export interface LogFields {
    /**
     * interface for log data
     * 
     * @export
     * @interface LogFields
     * @extends {LogFields}
     * 
     * @property {string} [Application] - application name
     * @property {number} [ElapsedTime] - elapsed time
     * @property {string} [RequestPath] - request path
     * @property {string} [Environment] - environment
     * @property {string} [Version] - application version
     * @property {string} [Url] - URL
     * @property {string} [AppState] - application state
     * 
     */
    // userId: string;
    Application?: string;
    ElapsedTime?: number;
    RequestPath?: string;
    Environment?: string;
    Version?: string;
    Url?: string;
    AppState?: string;
  }