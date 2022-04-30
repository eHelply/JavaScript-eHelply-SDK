// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { Contact } from '..models/models/Contact';
import { ContactResponse } from '..models/models/ContactResponse';
import { CreateTicket } from '..models/models/CreateTicket';
import { HTTPValidationError } from '..models/models/HTTPValidationError';
import { InlineResponse403 } from '..models/models/InlineResponse403';
import { TicketResponse } from '..models/models/TicketResponse';
import { TicketsResponse } from '..models/models/TicketsResponse';

/**
 * no description
 */
export class SupportApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create Contact
     * @param contact 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public async createContactSupportContactPost(contact: Contact, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'contact' is not null or undefined
        if (contact === null || contact === undefined) {
            throw new RequiredError("SupportApi", "createContactSupportContactPost", "contact");
        }








        // Path Params
        const localVarPath = '/sam/support/contact';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("x-access-token", ObjectSerializer.serialize(xAccessToken, "string", ""));

        // Header Params
        requestContext.setHeaderParam("x-secret-token", ObjectSerializer.serialize(xSecretToken, "string", ""));

        // Header Params
        requestContext.setHeaderParam("authorization", ObjectSerializer.serialize(authorization, "string", ""));

        // Header Params
        requestContext.setHeaderParam("ehelply-active-participant", ObjectSerializer.serialize(ehelplyActiveParticipant, "string", ""));

        // Header Params
        requestContext.setHeaderParam("ehelply-project", ObjectSerializer.serialize(ehelplyProject, "string", ""));

        // Header Params
        requestContext.setHeaderParam("ehelply-data", ObjectSerializer.serialize(ehelplyData, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(contact, "Contact", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Create Ticket
     * @param projectUuid 
     * @param memberUuid 
     * @param createTicket 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public async createTicketSupportProjectsProjectUuidMembersMemberUuidTicketsPost(projectUuid: string, memberUuid: string, createTicket: CreateTicket, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'projectUuid' is not null or undefined
        if (projectUuid === null || projectUuid === undefined) {
            throw new RequiredError("SupportApi", "createTicketSupportProjectsProjectUuidMembersMemberUuidTicketsPost", "projectUuid");
        }


        // verify required parameter 'memberUuid' is not null or undefined
        if (memberUuid === null || memberUuid === undefined) {
            throw new RequiredError("SupportApi", "createTicketSupportProjectsProjectUuidMembersMemberUuidTicketsPost", "memberUuid");
        }


        // verify required parameter 'createTicket' is not null or undefined
        if (createTicket === null || createTicket === undefined) {
            throw new RequiredError("SupportApi", "createTicketSupportProjectsProjectUuidMembersMemberUuidTicketsPost", "createTicket");
        }








        // Path Params
        const localVarPath = '/sam/support/projects/{project_uuid}/members/{member_uuid}/tickets'
            .replace('{' + 'project_uuid' + '}', encodeURIComponent(String(projectUuid)))
            .replace('{' + 'member_uuid' + '}', encodeURIComponent(String(memberUuid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("x-access-token", ObjectSerializer.serialize(xAccessToken, "string", ""));

        // Header Params
        requestContext.setHeaderParam("x-secret-token", ObjectSerializer.serialize(xSecretToken, "string", ""));

        // Header Params
        requestContext.setHeaderParam("authorization", ObjectSerializer.serialize(authorization, "string", ""));

        // Header Params
        requestContext.setHeaderParam("ehelply-active-participant", ObjectSerializer.serialize(ehelplyActiveParticipant, "string", ""));

        // Header Params
        requestContext.setHeaderParam("ehelply-project", ObjectSerializer.serialize(ehelplyProject, "string", ""));

        // Header Params
        requestContext.setHeaderParam("ehelply-data", ObjectSerializer.serialize(ehelplyData, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createTicket, "CreateTicket", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Delete Contact
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public async deleteContactSupportContactDelete(xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;







        // Path Params
        const localVarPath = '/sam/support/contact';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("x-access-token", ObjectSerializer.serialize(xAccessToken, "string", ""));

        // Header Params
        requestContext.setHeaderParam("x-secret-token", ObjectSerializer.serialize(xSecretToken, "string", ""));

        // Header Params
        requestContext.setHeaderParam("authorization", ObjectSerializer.serialize(authorization, "string", ""));

        // Header Params
        requestContext.setHeaderParam("ehelply-active-participant", ObjectSerializer.serialize(ehelplyActiveParticipant, "string", ""));

        // Header Params
        requestContext.setHeaderParam("ehelply-project", ObjectSerializer.serialize(ehelplyProject, "string", ""));

        // Header Params
        requestContext.setHeaderParam("ehelply-data", ObjectSerializer.serialize(ehelplyData, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * List Tickets
     * @param projectUuid 
     * @param memberUuid 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public async listTicketsSupportProjectsProjectUuidMembersMemberUuidTicketsGet(projectUuid: string, memberUuid: string, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'projectUuid' is not null or undefined
        if (projectUuid === null || projectUuid === undefined) {
            throw new RequiredError("SupportApi", "listTicketsSupportProjectsProjectUuidMembersMemberUuidTicketsGet", "projectUuid");
        }


        // verify required parameter 'memberUuid' is not null or undefined
        if (memberUuid === null || memberUuid === undefined) {
            throw new RequiredError("SupportApi", "listTicketsSupportProjectsProjectUuidMembersMemberUuidTicketsGet", "memberUuid");
        }








        // Path Params
        const localVarPath = '/sam/support/projects/{project_uuid}/members/{member_uuid}/tickets'
            .replace('{' + 'project_uuid' + '}', encodeURIComponent(String(projectUuid)))
            .replace('{' + 'member_uuid' + '}', encodeURIComponent(String(memberUuid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("x-access-token", ObjectSerializer.serialize(xAccessToken, "string", ""));

        // Header Params
        requestContext.setHeaderParam("x-secret-token", ObjectSerializer.serialize(xSecretToken, "string", ""));

        // Header Params
        requestContext.setHeaderParam("authorization", ObjectSerializer.serialize(authorization, "string", ""));

        // Header Params
        requestContext.setHeaderParam("ehelply-active-participant", ObjectSerializer.serialize(ehelplyActiveParticipant, "string", ""));

        // Header Params
        requestContext.setHeaderParam("ehelply-project", ObjectSerializer.serialize(ehelplyProject, "string", ""));

        // Header Params
        requestContext.setHeaderParam("ehelply-data", ObjectSerializer.serialize(ehelplyData, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update Ticket
     * @param projectUuid 
     * @param memberUuid 
     * @param ticketId 
     * @param createTicket 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public async updateTicketSupportProjectsProjectUuidMembersMemberUuidTicketsTicketIdPut(projectUuid: string, memberUuid: string, ticketId: string, createTicket: CreateTicket, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'projectUuid' is not null or undefined
        if (projectUuid === null || projectUuid === undefined) {
            throw new RequiredError("SupportApi", "updateTicketSupportProjectsProjectUuidMembersMemberUuidTicketsTicketIdPut", "projectUuid");
        }


        // verify required parameter 'memberUuid' is not null or undefined
        if (memberUuid === null || memberUuid === undefined) {
            throw new RequiredError("SupportApi", "updateTicketSupportProjectsProjectUuidMembersMemberUuidTicketsTicketIdPut", "memberUuid");
        }


        // verify required parameter 'ticketId' is not null or undefined
        if (ticketId === null || ticketId === undefined) {
            throw new RequiredError("SupportApi", "updateTicketSupportProjectsProjectUuidMembersMemberUuidTicketsTicketIdPut", "ticketId");
        }


        // verify required parameter 'createTicket' is not null or undefined
        if (createTicket === null || createTicket === undefined) {
            throw new RequiredError("SupportApi", "updateTicketSupportProjectsProjectUuidMembersMemberUuidTicketsTicketIdPut", "createTicket");
        }








        // Path Params
        const localVarPath = '/sam/support/projects/{project_uuid}/members/{member_uuid}/tickets/{ticket_id}'
            .replace('{' + 'project_uuid' + '}', encodeURIComponent(String(projectUuid)))
            .replace('{' + 'member_uuid' + '}', encodeURIComponent(String(memberUuid)))
            .replace('{' + 'ticket_id' + '}', encodeURIComponent(String(ticketId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("x-access-token", ObjectSerializer.serialize(xAccessToken, "string", ""));

        // Header Params
        requestContext.setHeaderParam("x-secret-token", ObjectSerializer.serialize(xSecretToken, "string", ""));

        // Header Params
        requestContext.setHeaderParam("authorization", ObjectSerializer.serialize(authorization, "string", ""));

        // Header Params
        requestContext.setHeaderParam("ehelply-active-participant", ObjectSerializer.serialize(ehelplyActiveParticipant, "string", ""));

        // Header Params
        requestContext.setHeaderParam("ehelply-project", ObjectSerializer.serialize(ehelplyProject, "string", ""));

        // Header Params
        requestContext.setHeaderParam("ehelply-data", ObjectSerializer.serialize(ehelplyData, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createTicket, "CreateTicket", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * View Ticket
     * @param projectUuid 
     * @param memberUuid 
     * @param ticketId 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public async viewTicketSupportProjectsProjectUuidMembersMemberUuidTicketsTicketIdGet(projectUuid: string, memberUuid: string, ticketId: string, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'projectUuid' is not null or undefined
        if (projectUuid === null || projectUuid === undefined) {
            throw new RequiredError("SupportApi", "viewTicketSupportProjectsProjectUuidMembersMemberUuidTicketsTicketIdGet", "projectUuid");
        }


        // verify required parameter 'memberUuid' is not null or undefined
        if (memberUuid === null || memberUuid === undefined) {
            throw new RequiredError("SupportApi", "viewTicketSupportProjectsProjectUuidMembersMemberUuidTicketsTicketIdGet", "memberUuid");
        }


        // verify required parameter 'ticketId' is not null or undefined
        if (ticketId === null || ticketId === undefined) {
            throw new RequiredError("SupportApi", "viewTicketSupportProjectsProjectUuidMembersMemberUuidTicketsTicketIdGet", "ticketId");
        }








        // Path Params
        const localVarPath = '/sam/support/projects/{project_uuid}/members/{member_uuid}/tickets/{ticket_id}'
            .replace('{' + 'project_uuid' + '}', encodeURIComponent(String(projectUuid)))
            .replace('{' + 'member_uuid' + '}', encodeURIComponent(String(memberUuid)))
            .replace('{' + 'ticket_id' + '}', encodeURIComponent(String(ticketId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("x-access-token", ObjectSerializer.serialize(xAccessToken, "string", ""));

        // Header Params
        requestContext.setHeaderParam("x-secret-token", ObjectSerializer.serialize(xSecretToken, "string", ""));

        // Header Params
        requestContext.setHeaderParam("authorization", ObjectSerializer.serialize(authorization, "string", ""));

        // Header Params
        requestContext.setHeaderParam("ehelply-active-participant", ObjectSerializer.serialize(ehelplyActiveParticipant, "string", ""));

        // Header Params
        requestContext.setHeaderParam("ehelply-project", ObjectSerializer.serialize(ehelplyProject, "string", ""));

        // Header Params
        requestContext.setHeaderParam("ehelply-data", ObjectSerializer.serialize(ehelplyData, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class SupportApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createContactSupportContactPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createContactSupportContactPost(response: ResponseContext): Promise<ContactResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ContactResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ContactResponse", ""
            ) as ContactResponse;
            return body;
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: InlineResponse403 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse403", ""
            ) as InlineResponse403;
            throw new ApiException<InlineResponse403>(403, "Unauthorized - Denied by eHelply", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Not found", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(422, "Validation Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ContactResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ContactResponse", ""
            ) as ContactResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createTicketSupportProjectsProjectUuidMembersMemberUuidTicketsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createTicketSupportProjectsProjectUuidMembersMemberUuidTicketsPost(response: ResponseContext): Promise<TicketResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TicketResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TicketResponse", ""
            ) as TicketResponse;
            return body;
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: InlineResponse403 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse403", ""
            ) as InlineResponse403;
            throw new ApiException<InlineResponse403>(403, "Unauthorized - Denied by eHelply", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Not found", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(422, "Validation Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TicketResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TicketResponse", ""
            ) as TicketResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteContactSupportContactDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteContactSupportContactDelete(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Not found", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(422, "Validation Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listTicketsSupportProjectsProjectUuidMembersMemberUuidTicketsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listTicketsSupportProjectsProjectUuidMembersMemberUuidTicketsGet(response: ResponseContext): Promise<Array<TicketsResponse> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<TicketsResponse> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<TicketsResponse>", ""
            ) as Array<TicketsResponse>;
            return body;
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: InlineResponse403 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse403", ""
            ) as InlineResponse403;
            throw new ApiException<InlineResponse403>(403, "Unauthorized - Denied by eHelply", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: InlineResponse403 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse403", ""
            ) as InlineResponse403;
            throw new ApiException<InlineResponse403>(404, "Record does not exist", body, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(422, "Validation Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<TicketsResponse> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<TicketsResponse>", ""
            ) as Array<TicketsResponse>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateTicketSupportProjectsProjectUuidMembersMemberUuidTicketsTicketIdPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateTicketSupportProjectsProjectUuidMembersMemberUuidTicketsTicketIdPut(response: ResponseContext): Promise<TicketResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TicketResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TicketResponse", ""
            ) as TicketResponse;
            return body;
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: InlineResponse403 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse403", ""
            ) as InlineResponse403;
            throw new ApiException<InlineResponse403>(403, "Unauthorized - Denied by eHelply", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Not found", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(422, "Validation Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TicketResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TicketResponse", ""
            ) as TicketResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to viewTicketSupportProjectsProjectUuidMembersMemberUuidTicketsTicketIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async viewTicketSupportProjectsProjectUuidMembersMemberUuidTicketsTicketIdGet(response: ResponseContext): Promise<TicketResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TicketResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TicketResponse", ""
            ) as TicketResponse;
            return body;
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: InlineResponse403 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse403", ""
            ) as InlineResponse403;
            throw new ApiException<InlineResponse403>(403, "Unauthorized - Denied by eHelply", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Not found", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(422, "Validation Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TicketResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TicketResponse", ""
            ) as TicketResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
