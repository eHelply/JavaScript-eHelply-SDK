/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.106
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.106
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
 * @interface ServiceCreate
 */
export interface ServiceCreate {
    /**
     * 
     * @type {string}
     * @memberof ServiceCreate
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceCreate
     */
    key: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceCreate
     */
    version: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceCreate
     */
    summary: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ServiceCreate
     */
    authors: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ServiceCreate
     */
    authorEmails: Array<string>;
}

export function ServiceCreateFromJSON(json: any): ServiceCreate {
    return ServiceCreateFromJSONTyped(json, false);
}

export function ServiceCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServiceCreate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'key': json['key'],
        'version': json['version'],
        'summary': json['summary'],
        'authors': json['authors'],
        'authorEmails': json['author_emails'],
    };
}

export function ServiceCreateToJSON(value?: ServiceCreate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'key': value.key,
        'version': value.version,
        'summary': value.summary,
        'authors': value.authors,
        'author_emails': value.authorEmails,
    };
}

