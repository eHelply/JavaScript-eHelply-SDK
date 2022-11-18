/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.122
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.122
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Contains field for when we create a participant only
 * @export
 * @interface ParticipantCreate
 */
export interface ParticipantCreate {
    /**
     * Dictionary containing any data you would like
     * @type {object}
     * @memberof ParticipantCreate
     */
    meta?: object;
    /**
     * 
     * @type {string}
     * @memberof ParticipantCreate
     */
    userUuid?: string;
}

export function ParticipantCreateFromJSON(json: any): ParticipantCreate {
    return ParticipantCreateFromJSONTyped(json, false);
}

export function ParticipantCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): ParticipantCreate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'meta': !exists(json, 'meta') ? undefined : json['meta'],
        'userUuid': !exists(json, 'user_uuid') ? undefined : json['user_uuid'],
    };
}

export function ParticipantCreateToJSON(value?: ParticipantCreate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'meta': value.meta,
        'user_uuid': value.userUuid,
    };
}

