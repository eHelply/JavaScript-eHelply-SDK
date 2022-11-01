/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.121
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.121
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    ServiceSuperStackMetaFaq,
    ServiceSuperStackMetaFaqFromJSON,
    ServiceSuperStackMetaFaqFromJSONTyped,
    ServiceSuperStackMetaFaqToJSON,
} from './ServiceSuperStackMetaFaq';
import {
    ServiceSuperStackMetaFeature,
    ServiceSuperStackMetaFeatureFromJSON,
    ServiceSuperStackMetaFeatureFromJSONTyped,
    ServiceSuperStackMetaFeatureToJSON,
} from './ServiceSuperStackMetaFeature';
import {
    ServiceSuperStackMetaGettingStarted,
    ServiceSuperStackMetaGettingStartedFromJSON,
    ServiceSuperStackMetaGettingStartedFromJSONTyped,
    ServiceSuperStackMetaGettingStartedToJSON,
} from './ServiceSuperStackMetaGettingStarted';
import {
    ServiceSuperStackMetaUseCase,
    ServiceSuperStackMetaUseCaseFromJSON,
    ServiceSuperStackMetaUseCaseFromJSONTyped,
    ServiceSuperStackMetaUseCaseToJSON,
} from './ServiceSuperStackMetaUseCase';

/**
 * 
 * @export
 * @interface ServiceSuperStackMeta
 */
export interface ServiceSuperStackMeta {
    /**
     * 
     * @type {string}
     * @memberof ServiceSuperStackMeta
     */
    humanName: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceSuperStackMeta
     */
    routeName: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceSuperStackMeta
     */
    serviceName: string;
    /**
     * 
     * @type {boolean}
     * @memberof ServiceSuperStackMeta
     */
    advertise: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ServiceSuperStackMeta
     */
    featured: boolean;
    /**
     * 
     * @type {string}
     * @memberof ServiceSuperStackMeta
     */
    picture: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceSuperStackMeta
     */
    backgroundPicture: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceSuperStackMeta
     */
    tagLine: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceSuperStackMeta
     */
    summary: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceSuperStackMeta
     */
    description: string;
    /**
     * 
     * @type {Array<ServiceSuperStackMetaFeature>}
     * @memberof ServiceSuperStackMeta
     */
    features: Array<ServiceSuperStackMetaFeature>;
    /**
     * 
     * @type {Array<ServiceSuperStackMetaUseCase>}
     * @memberof ServiceSuperStackMeta
     */
    useCases: Array<ServiceSuperStackMetaUseCase>;
    /**
     * 
     * @type {ServiceSuperStackMetaGettingStarted}
     * @memberof ServiceSuperStackMeta
     */
    gettingStarted: ServiceSuperStackMetaGettingStarted;
    /**
     * 
     * @type {Array<ServiceSuperStackMetaFaq>}
     * @memberof ServiceSuperStackMeta
     */
    faqs: Array<ServiceSuperStackMetaFaq>;
}

export function ServiceSuperStackMetaFromJSON(json: any): ServiceSuperStackMeta {
    return ServiceSuperStackMetaFromJSONTyped(json, false);
}

export function ServiceSuperStackMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServiceSuperStackMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'humanName': json['human_name'],
        'routeName': json['route_name'],
        'serviceName': json['service_name'],
        'advertise': json['advertise'],
        'featured': json['featured'],
        'picture': json['picture'],
        'backgroundPicture': json['background_picture'],
        'tagLine': json['tag_line'],
        'summary': json['summary'],
        'description': json['description'],
        'features': ((json['features'] as Array<any>).map(ServiceSuperStackMetaFeatureFromJSON)),
        'useCases': ((json['use_cases'] as Array<any>).map(ServiceSuperStackMetaUseCaseFromJSON)),
        'gettingStarted': ServiceSuperStackMetaGettingStartedFromJSON(json['getting_started']),
        'faqs': ((json['faqs'] as Array<any>).map(ServiceSuperStackMetaFaqFromJSON)),
    };
}

export function ServiceSuperStackMetaToJSON(value?: ServiceSuperStackMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'human_name': value.humanName,
        'route_name': value.routeName,
        'service_name': value.serviceName,
        'advertise': value.advertise,
        'featured': value.featured,
        'picture': value.picture,
        'background_picture': value.backgroundPicture,
        'tag_line': value.tagLine,
        'summary': value.summary,
        'description': value.description,
        'features': ((value.features as Array<any>).map(ServiceSuperStackMetaFeatureToJSON)),
        'use_cases': ((value.useCases as Array<any>).map(ServiceSuperStackMetaUseCaseToJSON)),
        'getting_started': ServiceSuperStackMetaGettingStartedToJSON(value.gettingStarted),
        'faqs': ((value.faqs as Array<any>).map(ServiceSuperStackMetaFaqToJSON)),
    };
}

