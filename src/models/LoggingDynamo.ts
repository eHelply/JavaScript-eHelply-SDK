/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.89
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.89
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface LoggingDynamo
 */
export interface LoggingDynamo {
    /**
     * 
     * @type {string}
     * @memberof LoggingDynamo
     */
    service: string;
    /**
     * 
     * @type {string}
     * @memberof LoggingDynamo
     */
    time: string;
    /**
     * 
     * @type {object}
     * @memberof LoggingDynamo
     */
    log: object;
    /**
     * 
     * @type {string}
     * @memberof LoggingDynamo
     */
    severity: string;
    /**
     * 
     * @type {string}
     * @memberof LoggingDynamo
     */
    subject: string;
}

/**
 * Check if a given object implements the LoggingDynamo interface.
 */
export function instanceOfLoggingDynamo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "service" in value;
    isInstance = isInstance && "time" in value;
    isInstance = isInstance && "log" in value;
    isInstance = isInstance && "severity" in value;
    isInstance = isInstance && "subject" in value;

    return isInstance;
}

export function LoggingDynamoFromJSON(json: any): LoggingDynamo {
    return LoggingDynamoFromJSONTyped(json, false);
}

export function LoggingDynamoFromJSONTyped(json: any, ignoreDiscriminator: boolean): LoggingDynamo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'service': json['service'],
        'time': json['time'],
        'log': json['log'],
        'severity': json['severity'],
        'subject': json['subject'],
    };
}

export function LoggingDynamoToJSON(value?: LoggingDynamo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'service': value.service,
        'time': value.time,
        'log': value.log,
        'severity': value.severity,
        'subject': value.subject,
    };
}

