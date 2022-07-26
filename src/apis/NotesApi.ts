/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.100
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.100
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  HTTPValidationError,
  NoteBase,
  NoteDynamoHistoryResponse,
  NoteDynamoResponse,
} from '../models';
import {
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
    NoteBaseFromJSON,
    NoteBaseToJSON,
    NoteDynamoHistoryResponseFromJSON,
    NoteDynamoHistoryResponseToJSON,
    NoteDynamoResponseFromJSON,
    NoteDynamoResponseToJSON,
} from '../models';

export interface CreateNoteRequest {
    noteBase: NoteBase;
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

export interface DeleteNoteRequest {
    noteId: string;
    method?: string;
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

export interface GetNoteRequest {
    noteId: string;
    history?: number;
    historyContent?: boolean;
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

export interface UpdateNoteRequest {
    noteId: string;
    noteBase: NoteBase;
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

/**
 * NotesApi - interface
 * 
 * @export
 * @interface NotesApiInterface
 */
export interface NotesApiInterface {
    /**
     * 
     * @summary Create Note
     * @param {NoteBase} noteBase 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotesApiInterface
     */
    createNoteRaw(requestParameters: CreateNoteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NoteDynamoResponse>>;

    /**
     * Create Note
     */
    createNote(requestParameters: CreateNoteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NoteDynamoResponse>;

    /**
     * 
     * @summary Delete Note
     * @param {string} noteId 
     * @param {string} [method] 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotesApiInterface
     */
    deleteNoteRaw(requestParameters: DeleteNoteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>>;

    /**
     * Delete Note
     */
    deleteNote(requestParameters: DeleteNoteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any>;

    /**
     * 
     * @summary Get Note
     * @param {string} noteId 
     * @param {number} [history] 
     * @param {boolean} [historyContent] 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotesApiInterface
     */
    getNoteRaw(requestParameters: GetNoteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NoteDynamoHistoryResponse>>;

    /**
     * Get Note
     */
    getNote(requestParameters: GetNoteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NoteDynamoHistoryResponse>;

    /**
     * 
     * @summary Update Note
     * @param {string} noteId 
     * @param {NoteBase} noteBase 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotesApiInterface
     */
    updateNoteRaw(requestParameters: UpdateNoteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NoteDynamoResponse>>;

    /**
     * Update Note
     */
    updateNote(requestParameters: UpdateNoteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NoteDynamoResponse>;

}

/**
 * 
 */
export class NotesApi extends runtime.BaseAPI implements NotesApiInterface {

    /**
     * Create Note
     */
    async createNoteRaw(requestParameters: CreateNoteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NoteDynamoResponse>> {
        if (requestParameters.noteBase === null || requestParameters.noteBase === undefined) {
            throw new runtime.RequiredError('noteBase','Required parameter requestParameters.noteBase was null or undefined when calling createNote.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

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
            path: `/notes/notes`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: NoteBaseToJSON(requestParameters.noteBase),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NoteDynamoResponseFromJSON(jsonValue));
    }

    /**
     * Create Note
     */
    async createNote(requestParameters: CreateNoteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NoteDynamoResponse> {
        const response = await this.createNoteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete Note
     */
    async deleteNoteRaw(requestParameters: DeleteNoteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.noteId === null || requestParameters.noteId === undefined) {
            throw new runtime.RequiredError('noteId','Required parameter requestParameters.noteId was null or undefined when calling deleteNote.');
        }

        const queryParameters: any = {};

        if (requestParameters.method !== undefined) {
            queryParameters['method'] = requestParameters.method;
        }

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
            path: `/notes/notes/{note_id}`.replace(`{${"note_id"}}`, encodeURIComponent(String(requestParameters.noteId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Delete Note
     */
    async deleteNote(requestParameters: DeleteNoteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.deleteNoteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Note
     */
    async getNoteRaw(requestParameters: GetNoteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NoteDynamoHistoryResponse>> {
        if (requestParameters.noteId === null || requestParameters.noteId === undefined) {
            throw new runtime.RequiredError('noteId','Required parameter requestParameters.noteId was null or undefined when calling getNote.');
        }

        const queryParameters: any = {};

        if (requestParameters.history !== undefined) {
            queryParameters['history'] = requestParameters.history;
        }

        if (requestParameters.historyContent !== undefined) {
            queryParameters['history_content'] = requestParameters.historyContent;
        }

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
            path: `/notes/notes/{note_id}`.replace(`{${"note_id"}}`, encodeURIComponent(String(requestParameters.noteId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NoteDynamoHistoryResponseFromJSON(jsonValue));
    }

    /**
     * Get Note
     */
    async getNote(requestParameters: GetNoteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NoteDynamoHistoryResponse> {
        const response = await this.getNoteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update Note
     */
    async updateNoteRaw(requestParameters: UpdateNoteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NoteDynamoResponse>> {
        if (requestParameters.noteId === null || requestParameters.noteId === undefined) {
            throw new runtime.RequiredError('noteId','Required parameter requestParameters.noteId was null or undefined when calling updateNote.');
        }

        if (requestParameters.noteBase === null || requestParameters.noteBase === undefined) {
            throw new runtime.RequiredError('noteBase','Required parameter requestParameters.noteBase was null or undefined when calling updateNote.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

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
            path: `/notes/notes/{note_id}`.replace(`{${"note_id"}}`, encodeURIComponent(String(requestParameters.noteId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: NoteBaseToJSON(requestParameters.noteBase),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NoteDynamoResponseFromJSON(jsonValue));
    }

    /**
     * Update Note
     */
    async updateNote(requestParameters: UpdateNoteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NoteDynamoResponse> {
        const response = await this.updateNoteRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
