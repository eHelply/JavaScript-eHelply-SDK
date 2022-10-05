/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.110
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.110
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Fields for updating participants including the participant uuid
 * @export
 * @interface ParticipantUpdate
 */
export interface ParticipantUpdate {
    /**
     * Dictionary containing any data you would like
     * @type {object}
     * @memberof ParticipantUpdate
     */
    meta?: object;
    /**
     * 
     * @type {string}
     * @memberof ParticipantUpdate
     */
    userUuid?: string;
    /**
     * 
     * @type {string}
     * @memberof ParticipantUpdate
     */
    uuid: string;
}

export function ParticipantUpdateFromJSON(json: any): ParticipantUpdate {
    return ParticipantUpdateFromJSONTyped(json, false);
}

export function ParticipantUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): ParticipantUpdate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'meta': !exists(json, 'meta') ? undefined : json['meta'],
        'userUuid': !exists(json, 'user_uuid') ? undefined : json['user_uuid'],
        'uuid': json['uuid'],
    };
}

export function ParticipantUpdateToJSON(value?: ParticipantUpdate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'meta': value.meta,
        'user_uuid': value.userUuid,
        'uuid': value.uuid,
    };
}

