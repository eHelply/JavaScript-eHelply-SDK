/**
 * eHelply SDK - 1.1.71
 * eHelply SDK for SuperStack Services
 *
 * OpenAPI spec version: 1.1.71
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AlarmAcknowledge } from './AlarmAcknowledge';
import { HttpFile } from '../http/http';

export class BodyAckAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAcknowledgePost {
    'acknowledge': AlarmAcknowledge;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "acknowledge",
            "baseName": "acknowledge",
            "type": "AlarmAcknowledge",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BodyAckAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAcknowledgePost.attributeTypeMap;
    }

    public constructor() {
    }
}

