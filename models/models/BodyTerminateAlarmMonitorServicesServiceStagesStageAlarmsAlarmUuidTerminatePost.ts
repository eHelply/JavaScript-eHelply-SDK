/**
 * eHelply SDK - 1.1.70
 * eHelply SDK for SuperStack Services
 *
 * OpenAPI spec version: 1.1.70
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AlarmTerminate } from './AlarmTerminate';
import { HttpFile } from '../http/http';

export class BodyTerminateAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidTerminatePost {
    'terminate': AlarmTerminate;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "terminate",
            "baseName": "terminate",
            "type": "AlarmTerminate",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BodyTerminateAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidTerminatePost.attributeTypeMap;
    }

    public constructor() {
    }
}

