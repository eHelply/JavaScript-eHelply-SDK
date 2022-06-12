/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.77
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.77
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    CategoryBase,
    CategoryBaseFromJSON,
    CategoryBaseFromJSONTyped,
    CategoryBaseToJSON,
} from './CategoryBase';
import {
    ContactBase,
    ContactBaseFromJSON,
    ContactBaseFromJSONTyped,
    ContactBaseToJSON,
} from './ContactBase';
import {
    PlaceBase,
    PlaceBaseFromJSON,
    PlaceBaseFromJSONTyped,
    PlaceBaseToJSON,
} from './PlaceBase';
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
 * **:param** contact                             **type:** ContactBase or None
 * @export
 * @interface CompanyResponse
 */
export interface CompanyResponse {
    /**
     * 
     * @type {string}
     * @memberof CompanyResponse
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof CompanyResponse
     */
    summary?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CompanyResponse
     */
    _public?: boolean;
    /**
     * 
     * @type {object}
     * @memberof CompanyResponse
     */
    meta?: object;
    /**
     * 
     * @type {ContactBase}
     * @memberof CompanyResponse
     */
    contact?: ContactBase;
    /**
     * 
     * @type {string}
     * @memberof CompanyResponse
     */
    uuid: string;
    /**
     * 
     * @type {string}
     * @memberof CompanyResponse
     */
    projectUuid?: string;
    /**
     * 
     * @type {string}
     * @memberof CompanyResponse
     */
    metaUuid?: string;
    /**
     * 
     * @type {object}
     * @memberof CompanyResponse
     */
    catalogData?: object;
    /**
     * 
     * @type {object}
     * @memberof CompanyResponse
     */
    reviewGroupData?: object;
    /**
     * 
     * @type {object}
     * @memberof CompanyResponse
     */
    scheduleData?: object;
    /**
     * 
     * @type {object}
     * @memberof CompanyResponse
     */
    blogData?: object;
    /**
     * 
     * @type {Array<TagBase>}
     * @memberof CompanyResponse
     */
    tags?: Array<TagBase>;
    /**
     * 
     * @type {Array<CategoryBase>}
     * @memberof CompanyResponse
     */
    categories?: Array<CategoryBase>;
    /**
     * 
     * @type {Array<PlaceBase>}
     * @memberof CompanyResponse
     */
    places?: Array<PlaceBase>;
    /**
     * 
     * @type {string}
     * @memberof CompanyResponse
     */
    createdAt?: string;
    /**
     * 
     * @type {string}
     * @memberof CompanyResponse
     */
    updatedAt?: string;
    /**
     * 
     * @type {string}
     * @memberof CompanyResponse
     */
    deletedAt?: string;
}

export function CompanyResponseFromJSON(json: any): CompanyResponse {
    return CompanyResponseFromJSONTyped(json, false);
}

export function CompanyResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompanyResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'summary': !exists(json, 'summary') ? undefined : json['summary'],
        '_public': !exists(json, 'public') ? undefined : json['public'],
        'meta': !exists(json, 'meta') ? undefined : json['meta'],
        'contact': !exists(json, 'contact') ? undefined : ContactBaseFromJSON(json['contact']),
        'uuid': json['uuid'],
        'projectUuid': !exists(json, 'project_uuid') ? undefined : json['project_uuid'],
        'metaUuid': !exists(json, 'meta_uuid') ? undefined : json['meta_uuid'],
        'catalogData': !exists(json, 'catalog_data') ? undefined : json['catalog_data'],
        'reviewGroupData': !exists(json, 'review_group_data') ? undefined : json['review_group_data'],
        'scheduleData': !exists(json, 'schedule_data') ? undefined : json['schedule_data'],
        'blogData': !exists(json, 'blog_data') ? undefined : json['blog_data'],
        'tags': !exists(json, 'tags') ? undefined : ((json['tags'] as Array<any>).map(TagBaseFromJSON)),
        'categories': !exists(json, 'categories') ? undefined : ((json['categories'] as Array<any>).map(CategoryBaseFromJSON)),
        'places': !exists(json, 'places') ? undefined : ((json['places'] as Array<any>).map(PlaceBaseFromJSON)),
        'createdAt': !exists(json, 'created_at') ? undefined : json['created_at'],
        'updatedAt': !exists(json, 'updated_at') ? undefined : json['updated_at'],
        'deletedAt': !exists(json, 'deleted_at') ? undefined : json['deleted_at'],
    };
}

export function CompanyResponseToJSON(value?: CompanyResponse | null): any {
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
        'contact': ContactBaseToJSON(value.contact),
        'uuid': value.uuid,
        'project_uuid': value.projectUuid,
        'meta_uuid': value.metaUuid,
        'catalog_data': value.catalogData,
        'review_group_data': value.reviewGroupData,
        'schedule_data': value.scheduleData,
        'blog_data': value.blogData,
        'tags': value.tags === undefined ? undefined : ((value.tags as Array<any>).map(TagBaseToJSON)),
        'categories': value.categories === undefined ? undefined : ((value.categories as Array<any>).map(CategoryBaseToJSON)),
        'places': value.places === undefined ? undefined : ((value.places as Array<any>).map(PlaceBaseToJSON)),
        'created_at': value.createdAt,
        'updated_at': value.updatedAt,
        'deleted_at': value.deletedAt,
    };
}

