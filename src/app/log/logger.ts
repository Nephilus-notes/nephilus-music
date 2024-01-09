import { environment } from "src/environments/environment";
import { Subject } from "rxjs";
import { debounceTime, filter } from "rxjs";
import { LogFields } from "./log-data";

export type LogType = 'info' | 'error' | 'warn' | 'debug' | 'log';

interface LogEntry {
    type: LogType;
    message: string;
    data: LogFields;
}

enum LoggerEvents {
    Flush = 1
}

export class Logger {
    private readonly APP_FIELD = "Application";
    private readonly ENV_FIELD = "Environment"; 
    private readonly VERSION_FIELD = "Version";
    private readonly ELAPSED_TIME_FIELD = "ElapsedTime";
    private readonly REQUEST_PATH_FIELD = "RequestPath";
    private readonly URL_FIELD = "Url";
    private readonly APP_STATE_FIELD = "AppState";

    private buffer: LogEntry[] = [];
    private flush = new Subject<LoggerEvents>();

    constructor(private appName: string, private logEndpoint: string) {
        this.flush.pipe(
            filter(event => event === LoggerEvents.Flush),
            debounceTime(1000)
        ).subscribe(() => this.flushBuffer());
        }
    

        public log (type:LogType, message: string, data: LogFields) {
            this.buffer.push({
                type,
                message,
                data
            });
            this.flush.next(LoggerEvents.Flush);
        }

    private flushBuffer() {
        const data = this.buffer.splice(0);

        if (data.length === 0) {
            return;
        }

        const body = data
        .map(entry => this.buildLogString(entry))
        .reduce((sum, entry) => (sum += entry), '');

        if (!environment.production) {
            console.log({
                body, 
                data
            });
        } else {

            // const url = environment.logUrl;
            // const headers = new Headers();
            // headers.append('Content-Type', 'application/json');

            // fetch(url, {
            //     method: 'POST',
            //     body,
            //     headers
            // }).catch(err => {
            //     console.log(err);
            // }
            // );

            const xobj = new XMLHttpRequest();
            xobj.onerror = (err) => console.error(err);
            xobj.open('POST', this.logEndpoint, true);
            xobj.send(body);
        }
    }

    private buildLogString(entry: LogEntry): string {
        const index = this.buildIndexChunk();
        const body = this.buildBodyChunk(entry);

        return `${index}${body}\n`;
    }

    private buildIndexChunk(): string {
        const date = new Date();
        const index = {
            index: {
                _index: `logstash-${date.toTimeString()}`,
                _type: 'logevent'
            }
        };
        return JSON.stringify(index);
    }

    private buildBodyChunk(entry: LogEntry): string {
        const { type, message, data } = entry;
        const level = type;
        const date = new Date();
        const messageTemplate = this.getMessageTemplate();
        const fields = this.getFields(data);
        const body = {
            timestamp: `${date.toISOString()}`,
            level,
            messageTemplate,
            message,
            fields
        };
        return JSON.stringify(body);
    }

    private getMessageTemplate(): string {
        const fields: string[] = [
            this.APP_FIELD,
            this.ENV_FIELD,
            this.VERSION_FIELD,
            this.ELAPSED_TIME_FIELD,
            this.REQUEST_PATH_FIELD,
            this.URL_FIELD,
            this.APP_STATE_FIELD
        ];
        const template = fields.map((field) => `{${field}}`).join(' ');
        return template;
        
    }

    private getFields(data: LogFields): LogFields {
        return {
            [this.APP_FIELD]: this.appName,
            [this.ENV_FIELD]: data.Environment || environment.title,
            [this.VERSION_FIELD]: data.Version, // || environment.version,
            [this.ELAPSED_TIME_FIELD]: data.ElapsedTime,
            [this.REQUEST_PATH_FIELD]: data.RequestPath,
            [this.URL_FIELD]: data.Url,
            [this.APP_STATE_FIELD]: data.AppState
        }
    }
}