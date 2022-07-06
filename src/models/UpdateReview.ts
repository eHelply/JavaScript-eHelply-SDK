/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.86
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.86
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
 * @interface UpdateReview
 */
export interface UpdateReview {
    /**
     * 
     * @type {number}
     * @memberof UpdateReview
     */
    rating?: number;
    /**
     * 
     * @type {number}
     * @memberof UpdateReview
     */
    maxRating?: number;
    /**
     * 
     * @type {string}
     * @memberof UpdateReview
     */
    reviewText?: string;
}

export function UpdateReviewFromJSON(json: any): UpdateReview {
    return UpdateReviewFromJSONTyped(json, false);
}

export function UpdateReviewFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateReview {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'rating': !exists(json, 'rating') ? undefined : json['rating'],
        'maxRating': !exists(json, 'max_rating') ? undefined : json['max_rating'],
        'reviewText': !exists(json, 'review_text') ? undefined : json['review_text'],
    };
}

export function UpdateReviewToJSON(value?: UpdateReview | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'rating': value.rating,
        'max_rating': value.maxRating,
        'review_text': value.reviewText,
    };
}

