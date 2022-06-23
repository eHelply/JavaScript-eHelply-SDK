/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.81
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.81
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
 * @interface AlarmAcknowledge
 */
export interface AlarmAcknowledge {
    /**
     * 
     * @type {string}
     * @memberof AlarmAcknowledge
     */
    acknowledgerUuid: string;
}

export function AlarmAcknowledgeFromJSON(json: any): AlarmAcknowledge {
    return AlarmAcknowledgeFromJSONTyped(json, false);
}

export function AlarmAcknowledgeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlarmAcknowledge {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'acknowledgerUuid': json['acknowledger_uuid'],
    };
}

export function AlarmAcknowledgeToJSON(value?: AlarmAcknowledge | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'acknowledger_uuid': value.acknowledgerUuid,
    };
}

