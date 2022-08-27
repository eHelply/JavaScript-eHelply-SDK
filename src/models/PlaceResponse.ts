/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.104
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.104
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    AddressBase,
    AddressBaseFromJSON,
    AddressBaseFromJSONTyped,
    AddressBaseToJSON,
} from './AddressBase';
import {
    CategoryBase,
    CategoryBaseFromJSON,
    CategoryBaseFromJSONTyped,
    CategoryBaseToJSON,
} from './CategoryBase';
import {
    Company,
    CompanyFromJSON,
    CompanyFromJSONTyped,
    CompanyToJSON,
} from './Company';
import {
    ContactBase,
    ContactBaseFromJSON,
    ContactBaseFromJSONTyped,
    ContactBaseToJSON,
} from './ContactBase';
import {
    TagBase,
    TagBaseFromJSON,
    TagBaseFromJSONTyped,
    TagBaseToJSON,
} from './TagBase';

/**
 * **:param** name                                **type:** string
 * **:param** summary                             **type:** string or None
 * 
 * **:param** public                              **type:** bool or None
 * 
 * **:param** meta                                **type:** dict or None
 * 
 * **:param** addresses                           **type:** PlaceAddress or None
 * 
 * **:param** contact                             **type:** ContactBase or None
 * @export
 * @interface PlaceResponse
 */
export interface PlaceResponse {
    /**
     * 
     * @type {string}
     * @memberof PlaceResponse
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof PlaceResponse
     */
    summary?: string;
    /**
     * 
     * @type {boolean}
     * @memberof PlaceResponse
     */
    _public?: boolean;
    /**
     * 
     * @type {object}
     * @memberof PlaceResponse
     */
    meta?: object;
    /**
     * 
     * @type {Array<AddressBase>}
     * @memberof PlaceResponse
     */
    addresses?: Array<AddressBase>;
    /**
     * 
     * @type {ContactBase}
     * @memberof PlaceResponse
     */
    contact?: ContactBase;
    /**
     * 
     * @type {string}
     * @memberof PlaceResponse
     */
    picture?: string;
    /**
     * 
     * @type {string}
     * @memberof PlaceResponse
     */
    uuid: string;
    /**
     * 
     * @type {string}
     * @memberof PlaceResponse
     */
    projectUuid?: string;
    /**
     * 
     * @type {string}
     * @memberof PlaceResponse
     */
    metaUuid?: string;
    /**
     * 
     * @type {Array<TagBase>}
     * @memberof PlaceResponse
     */
    tags?: Array<TagBase>;
    /**
     * 
     * @type {Array<CategoryBase>}
     * @memberof PlaceResponse
     */
    categories?: Array<CategoryBase>;
    /**
     * 
     * @type {Company}
     * @memberof PlaceResponse
     */
    company?: Company;
    /**
     * 
     * @type {string}
     * @memberof PlaceResponse
     */
    createdAt?: string;
    /**
     * 
     * @type {string}
     * @memberof PlaceResponse
     */
    updatedAt?: string;
    /**
     * 
     * @type {string}
     * @memberof PlaceResponse
     */
    deletedAt?: string;
}

export function PlaceResponseFromJSON(json: any): PlaceResponse {
    return PlaceResponseFromJSONTyped(json, false);
}

export function PlaceResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlaceResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'summary': !exists(json, 'summary') ? undefined : json['summary'],
        '_public': !exists(json, 'public') ? undefined : json['public'],
        'meta': !exists(json, 'meta') ? undefined : json['meta'],
        'addresses': !exists(json, 'addresses') ? undefined : ((json['addresses'] as Array<any>).map(AddressBaseFromJSON)),
        'contact': !exists(json, 'contact') ? undefined : ContactBaseFromJSON(json['contact']),
        'picture': !exists(json, 'picture') ? undefined : json['picture'],
        'uuid': json['uuid'],
        'projectUuid': !exists(json, 'project_uuid') ? undefined : json['project_uuid'],
        'metaUuid': !exists(json, 'meta_uuid') ? undefined : json['meta_uuid'],
        'tags': !exists(json, 'tags') ? undefined : ((json['tags'] as Array<any>).map(TagBaseFromJSON)),
        'categories': !exists(json, 'categories') ? undefined : ((json['categories'] as Array<any>).map(CategoryBaseFromJSON)),
        'company': !exists(json, 'company') ? undefined : CompanyFromJSON(json['company']),
        'createdAt': !exists(json, 'created_at') ? undefined : json['created_at'],
        'updatedAt': !exists(json, 'updated_at') ? undefined : json['updated_at'],
        'deletedAt': !exists(json, 'deleted_at') ? undefined : json['deleted_at'],
    };
}

export function PlaceResponseToJSON(value?: PlaceResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'summary': value.summary,
        'public': value._public,
        'meta': value.meta,
        'addresses': value.addresses === undefined ? undefined : ((value.addresses as Array<any>).map(AddressBaseToJSON)),
        'contact': ContactBaseToJSON(value.contact),
        'picture': value.picture,
        'uuid': value.uuid,
        'project_uuid': value.projectUuid,
        'meta_uuid': value.metaUuid,
        'tags': value.tags === undefined ? undefined : ((value.tags as Array<any>).map(TagBaseToJSON)),
        'categories': value.categories === undefined ? undefined : ((value.categories as Array<any>).map(CategoryBaseToJSON)),
        'company': CompanyToJSON(value.company),
        'created_at': value.createdAt,
        'updated_at': value.updatedAt,
        'deleted_at': value.deletedAt,
    };
}

