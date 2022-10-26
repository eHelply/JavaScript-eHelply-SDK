/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.113
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.113
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    CreateNote200Response,
    CreateNote200ResponseFromJSON,
    CreateNote200ResponseToJSON,
    DeleteNote200Response,
    DeleteNote200ResponseFromJSON,
    DeleteNote200ResponseToJSON,
    GetAppointment403Response,
    GetAppointment403ResponseFromJSON,
    GetAppointment403ResponseToJSON,
    HTTPValidationError,
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
    NoteBase,
    NoteBaseFromJSON,
    NoteBaseToJSON,
    NoteDynamoHistoryResponse,
    NoteDynamoHistoryResponseFromJSON,
    NoteDynamoHistoryResponseToJSON,
    UpdateNote200Response,
    UpdateNote200ResponseFromJSON,
    UpdateNote200ResponseToJSON,
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
     * @summary Createnote
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
    createNoteRaw(requestParameters: CreateNoteRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CreateNote200Response>>;

    /**
     * Createnote
     */
    createNote(requestParameters: CreateNoteRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CreateNote200Response>;

    /**
     * 
     * @summary Deletenote
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
    deleteNoteRaw(requestParameters: DeleteNoteRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<DeleteNote200Response>>;

    /**
     * Deletenote
     */
    deleteNote(requestParameters: DeleteNoteRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<DeleteNote200Response>;

    /**
     * 
     * @summary Getnote
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
    getNoteRaw(requestParameters: GetNoteRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<NoteDynamoHistoryResponse>>;

    /**
     * Getnote
     */
    getNote(requestParameters: GetNoteRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<NoteDynamoHistoryResponse>;

    /**
     * 
     * @summary Updatenote
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
    updateNoteRaw(requestParameters: UpdateNoteRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<UpdateNote200Response>>;

    /**
     * Updatenote
     */
    updateNote(requestParameters: UpdateNoteRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<UpdateNote200Response>;

}

/**
 * 
 */
export class NotesApi extends runtime.BaseAPI implements NotesApiInterface {

    /**
     * Createnote
     */
    async createNoteRaw(requestParameters: CreateNoteRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CreateNote200Response>> {
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

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateNote200ResponseFromJSON(jsonValue));
    }

    /**
     * Createnote
     */
    async createNote(requestParameters: CreateNoteRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CreateNote200Response> {
        const response = await this.createNoteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletenote
     */
    async deleteNoteRaw(requestParameters: DeleteNoteRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<DeleteNote200Response>> {
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

        return new runtime.JSONApiResponse(response, (jsonValue) => DeleteNote200ResponseFromJSON(jsonValue));
    }

    /**
     * Deletenote
     */
    async deleteNote(requestParameters: DeleteNoteRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<DeleteNote200Response> {
        const response = await this.deleteNoteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Getnote
     */
    async getNoteRaw(requestParameters: GetNoteRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<NoteDynamoHistoryResponse>> {
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
     * Getnote
     */
    async getNote(requestParameters: GetNoteRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<NoteDynamoHistoryResponse> {
        const response = await this.getNoteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updatenote
     */
    async updateNoteRaw(requestParameters: UpdateNoteRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<UpdateNote200Response>> {
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

        return new runtime.JSONApiResponse(response, (jsonValue) => UpdateNote200ResponseFromJSON(jsonValue));
    }

    /**
     * Updatenote
     */
    async updateNote(requestParameters: UpdateNoteRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<UpdateNote200Response> {
        const response = await this.updateNoteRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
