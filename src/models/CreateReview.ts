/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.114
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.114
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
 * @interface CreateReview
 */
export interface CreateReview {
    /**
     * 
     * @type {number}
     * @memberof CreateReview
     */
    rating: number;
    /**
     * 
     * @type {number}
     * @memberof CreateReview
     */
    maxRating: number;
    /**
     * 
     * @type {string}
     * @memberof CreateReview
     */
    reviewText: string;
}

export function CreateReviewFromJSON(json: any): CreateReview {
    return CreateReviewFromJSONTyped(json, false);
}

export function CreateReviewFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateReview {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'rating': json['rating'],
        'maxRating': json['max_rating'],
        'reviewText': json['review_text'],
    };
}

export function CreateReviewToJSON(value?: CreateReview | null): any {
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

