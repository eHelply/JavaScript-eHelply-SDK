export enum LogLevel {
    INFO,
    DEBUG
}

export class Logger {
    private _logLevel: LogLevel

    constructor(logLevel: LogLevel) {
        this._logLevel = logLevel;
    }

    set logLevel(value: LogLevel) {
        this._logLevel = value;
    }

    debug(message: string) {
        if(this._logLevel >= LogLevel.DEBUG) {
            console.log(`[eHelply SDK] ${message}`)
        }
    }

    info(message: string) {
        if(this._logLevel >= LogLevel.INFO) {
            console.log(`[eHelply SDK] ${message}`)
        }
    }
}