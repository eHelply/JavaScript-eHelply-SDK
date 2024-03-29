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


import * as runtime from '../runtime';
import {
    HTTPValidationError,
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
} from '../models';

export interface DeleteTagRequest {
    tagUuid: string;
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

/**
 * TagApi - interface
 * 
 * @export
 * @interface TagApiInterface
 */
export interface TagApiInterface {
    /**
     * Deletes the tag member with the given ID and returns True if successful
     * @summary Deletetag
     * @param {string} tagUuid 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagApiInterface
     */
    deleteTagRaw(requestParameters: DeleteTagRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<any>>;

    /**
     * Deletes the tag member with the given ID and returns True if successful
     * Deletetag
     */
    deleteTag(requestParameters: DeleteTagRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<any>;

}

/**
 * 
 */
export class TagApi extends runtime.BaseAPI implements TagApiInterface {

    /**
     * Deletes the tag member with the given ID and returns True if successful
     * Deletetag
     */
    async deleteTagRaw(requestParameters: DeleteTagRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.tagUuid === null || requestParameters.tagUuid === undefined) {
            throw new runtime.RequiredError('tagUuid','Required parameter requestParameters.tagUuid was null or undefined when calling deleteTag.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xAccessToken !== undefined && requestParameters.xAccessToken !== null) {
            headerParameters['x-access-token'] = String(requestParameters.xAccessToken);
        }

        if (requestParameters.xSecretToken !== undefined && requestParameters.xSecretToken !== null) {
            headerParameters['x-secret-token'] = String(requestParameters.xSecretToken);
        }

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['authorization'] = String(requestParameters.authorization);
        }

        if (requestParameters.ehelplyActiveParticipant !== undefined && requestParameters.ehelplyActiveParticipant !== null) {
            headerParameters['ehelply-active-participant'] = String(requestParameters.ehelplyActiveParticipant);
        }

        if (requestParameters.ehelplyProject !== undefined && requestParameters.ehelplyProject !== null) {
            headerParameters['ehelply-project'] = String(requestParameters.ehelplyProject);
        }

        if (requestParameters.ehelplyData !== undefined && requestParameters.ehelplyData !== null) {
            headerParameters['ehelply-data'] = String(requestParameters.ehelplyData);
        }

        const response = await this.request({
            path: `/places/tags/{tag_uuid}`.replace(`{${"tag_uuid"}}`, encodeURIComponent(String(requestParameters.tagUuid))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Deletes the tag member with the given ID and returns True if successful
     * Deletetag
     */
    async deleteTag(requestParameters: DeleteTagRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<any> {
        const response = await this.deleteTagRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
