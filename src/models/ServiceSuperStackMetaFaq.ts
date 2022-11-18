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
 * 
 * @export
 * @interface ServiceSuperStackMetaFaq
 */
export interface ServiceSuperStackMetaFaq {
    /**
     * 
     * @type {string}
     * @memberof ServiceSuperStackMetaFaq
     */
    question: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceSuperStackMetaFaq
     */
    answer: string;
}

export function ServiceSuperStackMetaFaqFromJSON(json: any): ServiceSuperStackMetaFaq {
    return ServiceSuperStackMetaFaqFromJSONTyped(json, false);
}

export function ServiceSuperStackMetaFaqFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServiceSuperStackMetaFaq {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'question': json['question'],
        'answer': json['answer'],
    };
}

export function ServiceSuperStackMetaFaqToJSON(value?: ServiceSuperStackMetaFaq | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'question': value.question,
        'answer': value.answer,
    };
}

