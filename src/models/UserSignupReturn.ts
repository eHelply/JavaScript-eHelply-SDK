/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.118
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.118
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Default participant UUID
 * @export
 * @interface UserSignupReturn
 */
export interface UserSignupReturn {
    /**
     * 
     * @type {string}
     * @memberof UserSignupReturn
     */
    participantUuid: string;
}

export function UserSignupReturnFromJSON(json: any): UserSignupReturn {
    return UserSignupReturnFromJSONTyped(json, false);
}

export function UserSignupReturnFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserSignupReturn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'participantUuid': json['participant_uuid'],
    };
}

export function UserSignupReturnToJSON(value?: UserSignupReturn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'participant_uuid': value.participantUuid,
    };
}

