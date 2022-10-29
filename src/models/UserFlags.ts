/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.119
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.119
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Flags that may be attached to a user
 * @export
 * @interface UserFlags
 */
export interface UserFlags {
    /**
     * 
     * @type {boolean}
     * @memberof UserFlags
     */
    requiresTour?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserFlags
     */
    missingData?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserFlags
     */
    legalUpdates?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserFlags
     */
    newsletters?: boolean;
}

export function UserFlagsFromJSON(json: any): UserFlags {
    return UserFlagsFromJSONTyped(json, false);
}

export function UserFlagsFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserFlags {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'requiresTour': !exists(json, 'requires_tour') ? undefined : json['requires_tour'],
        'missingData': !exists(json, 'missing_data') ? undefined : json['missing_data'],
        'legalUpdates': !exists(json, 'legal_updates') ? undefined : json['legal_updates'],
        'newsletters': !exists(json, 'newsletters') ? undefined : json['newsletters'],
    };
}

export function UserFlagsToJSON(value?: UserFlags | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'requires_tour': value.requiresTour,
        'missing_data': value.missingData,
        'legal_updates': value.legalUpdates,
        'newsletters': value.newsletters,
    };
}

