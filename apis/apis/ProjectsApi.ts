// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { CreateKeyResponse } from '..models/models/CreateKeyResponse';
import { HTTPValidationError } from '..models/models/HTTPValidationError';
import { InlineResponse2003 } from '..models/models/InlineResponse2003';
import { InlineResponse2004 } from '..models/models/InlineResponse2004';
import { InlineResponse2005 } from '..models/models/InlineResponse2005';
import { InlineResponse403 } from '..models/models/InlineResponse403';
import { Page } from '..models/models/Page';
import { ProjectsProjectCreate } from '..models/models/ProjectsProjectCreate';
import { ProjectsProjectGet } from '..models/models/ProjectsProjectGet';
import { ProjectsProjectMemberDB } from '..models/models/ProjectsProjectMemberDB';
import { ProjectsProjectUpdate } from '..models/models/ProjectsProjectUpdate';
import { ProjectsProjectUsageDB } from '..models/models/ProjectsProjectUsageDB';
import { ProjectsUsageTypeCreate } from '..models/models/ProjectsUsageTypeCreate';
import { ProjectsUsageTypeDB } from '..models/models/ProjectsUsageTypeDB';
import { ProjectsUsageTypeGet } from '..models/models/ProjectsUsageTypeGet';
import { ProjectsUsageTypeUpdate } from '..models/models/ProjectsUsageTypeUpdate';
import { SecurityKeyCreate } from '..models/models/SecurityKeyCreate';

/**
 * no description
 */
export class ProjectsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Add Member To Project
     * @param projectUuid 
     * @param entityUuid 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public async addMemberToProjectProjectsProjectsProjectUuidMembersEntityUuidPost(projectUuid: string, entityUuid: string, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'projectUuid' is not null or undefined
        if (projectUuid === null || projectUuid === undefined) {
            throw new RequiredError("ProjectsApi", "addMemberToProjectProjectsProjectsProjectUuidMembersEntityUuidPost", "projectUuid");
        }


        // verify required parameter 'entityUuid' is not null or undefined
        if (entityUuid === null || entityUuid === undefined) {
            throw new RequiredError("ProjectsApi", "addMemberToProjectProjectsProjectsProjectUuidMembersEntityUuidPost", "entityUuid");
        }








        // Path Params
        const localVarPath = '/sam/projects/projects/{project_uuid}/members/{entity_uuid}'
            .replace('{' + 'project_uuid' + '}', encodeURIComponent(String(projectUuid)))
            .replace('{' + 'entity_uuid' + '}', encodeURIComponent(String(entityUuid)));

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


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Archive Project
     * @param projectUuid 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public async archiveProjectProjectsProjectsProjectUuidDelete(projectUuid: string, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'projectUuid' is not null or undefined
        if (projectUuid === null || projectUuid === undefined) {
            throw new RequiredError("ProjectsApi", "archiveProjectProjectsProjectsProjectUuidDelete", "projectUuid");
        }








        // Path Params
        const localVarPath = '/sam/projects/projects/{project_uuid}'
            .replace('{' + 'project_uuid' + '}', encodeURIComponent(String(projectUuid)));

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
     * Create Project Key
     * @param projectUuid 
     * @param securityKeyCreate 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public async createProjectKeyProjectsProjectsProjectUuidKeysPost(projectUuid: string, securityKeyCreate: SecurityKeyCreate, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'projectUuid' is not null or undefined
        if (projectUuid === null || projectUuid === undefined) {
            throw new RequiredError("ProjectsApi", "createProjectKeyProjectsProjectsProjectUuidKeysPost", "projectUuid");
        }


        // verify required parameter 'securityKeyCreate' is not null or undefined
        if (securityKeyCreate === null || securityKeyCreate === undefined) {
            throw new RequiredError("ProjectsApi", "createProjectKeyProjectsProjectsProjectUuidKeysPost", "securityKeyCreate");
        }








        // Path Params
        const localVarPath = '/sam/projects/projects/{project_uuid}/keys'
            .replace('{' + 'project_uuid' + '}', encodeURIComponent(String(projectUuid)));

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
            ObjectSerializer.serialize(securityKeyCreate, "SecurityKeyCreate", ""),
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
     * Create a new Project
     * Create Project
     * @param projectsProjectCreate 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public async createProjectProjectsProjectsPost(projectsProjectCreate: ProjectsProjectCreate, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'projectsProjectCreate' is not null or undefined
        if (projectsProjectCreate === null || projectsProjectCreate === undefined) {
            throw new RequiredError("ProjectsApi", "createProjectProjectsProjectsPost", "projectsProjectCreate");
        }








        // Path Params
        const localVarPath = '/sam/projects/projects';

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
            ObjectSerializer.serialize(projectsProjectCreate, "ProjectsProjectCreate", ""),
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
     * Create Usage Type
     * @param projectsUsageTypeCreate 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public async createUsageTypeProjectsUsageTypesPost(projectsUsageTypeCreate: ProjectsUsageTypeCreate, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'projectsUsageTypeCreate' is not null or undefined
        if (projectsUsageTypeCreate === null || projectsUsageTypeCreate === undefined) {
            throw new RequiredError("ProjectsApi", "createUsageTypeProjectsUsageTypesPost", "projectsUsageTypeCreate");
        }








        // Path Params
        const localVarPath = '/sam/projects/usage/types';

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
            ObjectSerializer.serialize(projectsUsageTypeCreate, "ProjectsUsageTypeCreate", ""),
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
     * Delete Usage Type
     * @param usageTypeKey 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public async deleteUsageTypeProjectsUsageTypesUsageTypeKeyDelete(usageTypeKey: string, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'usageTypeKey' is not null or undefined
        if (usageTypeKey === null || usageTypeKey === undefined) {
            throw new RequiredError("ProjectsApi", "deleteUsageTypeProjectsUsageTypesUsageTypeKeyDelete", "usageTypeKey");
        }








        // Path Params
        const localVarPath = '/sam/projects/usage/types/{usage_type_key}'
            .replace('{' + 'usage_type_key' + '}', encodeURIComponent(String(usageTypeKey)));

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
     * Get All Project Usage
     * @param projectUuid 
     * @param year 
     * @param month 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public async getAllProjectUsageProjectsProjectsProjectUuidUsageGet(projectUuid: string, year?: number, month?: number, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'projectUuid' is not null or undefined
        if (projectUuid === null || projectUuid === undefined) {
            throw new RequiredError("ProjectsApi", "getAllProjectUsageProjectsProjectsProjectUuidUsageGet", "projectUuid");
        }










        // Path Params
        const localVarPath = '/sam/projects/projects/{project_uuid}/usage'
            .replace('{' + 'project_uuid' + '}', encodeURIComponent(String(projectUuid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (year !== undefined) {
            requestContext.setQueryParam("year", ObjectSerializer.serialize(year, "number", ""));
        }

        // Query Params
        if (month !== undefined) {
            requestContext.setQueryParam("month", ObjectSerializer.serialize(month, "number", ""));
        }

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
     * Get Member Projects
     * @param entityUuid 
     * @param role 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public async getMemberProjectsProjectsMembersEntityUuidProjectsGet(entityUuid: string, role?: string, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'entityUuid' is not null or undefined
        if (entityUuid === null || entityUuid === undefined) {
            throw new RequiredError("ProjectsApi", "getMemberProjectsProjectsMembersEntityUuidProjectsGet", "entityUuid");
        }









        // Path Params
        const localVarPath = '/sam/projects/members/{entity_uuid}/projects'
            .replace('{' + 'entity_uuid' + '}', encodeURIComponent(String(entityUuid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (role !== undefined) {
            requestContext.setQueryParam("role", ObjectSerializer.serialize(role, "string", ""));
        }

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
     * Get Project Keys
     * @param projectUuid 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public async getProjectKeysProjectsProjectsProjectUuidKeysGet(projectUuid: string, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'projectUuid' is not null or undefined
        if (projectUuid === null || projectUuid === undefined) {
            throw new RequiredError("ProjectsApi", "getProjectKeysProjectsProjectsProjectUuidKeysGet", "projectUuid");
        }








        // Path Params
        const localVarPath = '/sam/projects/projects/{project_uuid}/keys'
            .replace('{' + 'project_uuid' + '}', encodeURIComponent(String(projectUuid)));

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
     * Get Project Members
     * @param projectUuid 
     * @param role 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public async getProjectMembersProjectsProjectsProjectUuidMembersGet(projectUuid: string, role?: string, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'projectUuid' is not null or undefined
        if (projectUuid === null || projectUuid === undefined) {
            throw new RequiredError("ProjectsApi", "getProjectMembersProjectsProjectsProjectUuidMembersGet", "projectUuid");
        }









        // Path Params
        const localVarPath = '/sam/projects/projects/{project_uuid}/members'
            .replace('{' + 'project_uuid' + '}', encodeURIComponent(String(projectUuid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (role !== undefined) {
            requestContext.setQueryParam("role", ObjectSerializer.serialize(role, "string", ""));
        }

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
     * Get a Project
     * Get Project
     * @param projectUuid 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public async getProjectProjectsProjectsProjectUuidGet(projectUuid: string, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'projectUuid' is not null or undefined
        if (projectUuid === null || projectUuid === undefined) {
            throw new RequiredError("ProjectsApi", "getProjectProjectsProjectsProjectUuidGet", "projectUuid");
        }








        // Path Params
        const localVarPath = '/sam/projects/projects/{project_uuid}'
            .replace('{' + 'project_uuid' + '}', encodeURIComponent(String(projectUuid)));

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
     * Get Specific Project Usage
     * @param usageTypeKey 
     * @param projectUuid 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public async getSpecificProjectUsageProjectsProjectsProjectUuidUsageUsageTypeKeyGet(usageTypeKey: string, projectUuid: string, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'usageTypeKey' is not null or undefined
        if (usageTypeKey === null || usageTypeKey === undefined) {
            throw new RequiredError("ProjectsApi", "getSpecificProjectUsageProjectsProjectsProjectUuidUsageUsageTypeKeyGet", "usageTypeKey");
        }


        // verify required parameter 'projectUuid' is not null or undefined
        if (projectUuid === null || projectUuid === undefined) {
            throw new RequiredError("ProjectsApi", "getSpecificProjectUsageProjectsProjectsProjectUuidUsageUsageTypeKeyGet", "projectUuid");
        }








        // Path Params
        const localVarPath = '/sam/projects/projects/{project_uuid}/usage/{usage_type_key}'
            .replace('{' + 'usage_type_key' + '}', encodeURIComponent(String(usageTypeKey)))
            .replace('{' + 'project_uuid' + '}', encodeURIComponent(String(projectUuid)));

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
     * Get a UsageType  No auth because we may want to use this on pricing/docs pages
     * Get Usage Type
     * @param usageTypeKey 
     */
    public async getUsageTypeProjectsUsageTypesUsageTypeKeyGet(usageTypeKey: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'usageTypeKey' is not null or undefined
        if (usageTypeKey === null || usageTypeKey === undefined) {
            throw new RequiredError("ProjectsApi", "getUsageTypeProjectsUsageTypesUsageTypeKeyGet", "usageTypeKey");
        }


        // Path Params
        const localVarPath = '/sam/projects/usage/types/{usage_type_key}'
            .replace('{' + 'usage_type_key' + '}', encodeURIComponent(String(usageTypeKey)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Remove Member From Project
     * @param projectUuid 
     * @param entityUuid 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public async removeMemberFromProjectProjectsProjectsProjectUuidMembersEntityUuidDelete(projectUuid: string, entityUuid: string, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'projectUuid' is not null or undefined
        if (projectUuid === null || projectUuid === undefined) {
            throw new RequiredError("ProjectsApi", "removeMemberFromProjectProjectsProjectsProjectUuidMembersEntityUuidDelete", "projectUuid");
        }


        // verify required parameter 'entityUuid' is not null or undefined
        if (entityUuid === null || entityUuid === undefined) {
            throw new RequiredError("ProjectsApi", "removeMemberFromProjectProjectsProjectsProjectUuidMembersEntityUuidDelete", "entityUuid");
        }








        // Path Params
        const localVarPath = '/sam/projects/projects/{project_uuid}/members/{entity_uuid}'
            .replace('{' + 'project_uuid' + '}', encodeURIComponent(String(projectUuid)))
            .replace('{' + 'entity_uuid' + '}', encodeURIComponent(String(entityUuid)));

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
     * Remove Project Key
     * @param projectUuid 
     * @param accessToken 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public async removeProjectKeyProjectsProjectsProjectUuidKeysDelete(projectUuid: string, accessToken?: string, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'projectUuid' is not null or undefined
        if (projectUuid === null || projectUuid === undefined) {
            throw new RequiredError("ProjectsApi", "removeProjectKeyProjectsProjectsProjectUuidKeysDelete", "projectUuid");
        }









        // Path Params
        const localVarPath = '/sam/projects/projects/{project_uuid}/keys'
            .replace('{' + 'project_uuid' + '}', encodeURIComponent(String(projectUuid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (accessToken !== undefined) {
            requestContext.setQueryParam("access_token", ObjectSerializer.serialize(accessToken, "string", ""));
        }

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
     * Sandbox
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public async sandboxProjectsSandboxGet(xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;







        // Path Params
        const localVarPath = '/sam/projects/sandbox';

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
     * Search projects
     * Search Projects
     * @param page 
     * @param pageSize 
     * @param search 
     * @param searchOn 
     * @param sortOn 
     * @param sortDesc 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public async searchProjectsProjectsProjectsGet(page?: number, pageSize?: number, search?: string, searchOn?: string, sortOn?: string, sortDesc?: boolean, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;













        // Path Params
        const localVarPath = '/sam/projects/projects';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
        }

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("page_size", ObjectSerializer.serialize(pageSize, "number", ""));
        }

        // Query Params
        if (search !== undefined) {
            requestContext.setQueryParam("search", ObjectSerializer.serialize(search, "string", ""));
        }

        // Query Params
        if (searchOn !== undefined) {
            requestContext.setQueryParam("search_on", ObjectSerializer.serialize(searchOn, "string", ""));
        }

        // Query Params
        if (sortOn !== undefined) {
            requestContext.setQueryParam("sort_on", ObjectSerializer.serialize(sortOn, "string", ""));
        }

        // Query Params
        if (sortDesc !== undefined) {
            requestContext.setQueryParam("sort_desc", ObjectSerializer.serialize(sortDesc, "boolean", ""));
        }

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
     * Get a UsageType  No auth because we may want to use this on pricing/docs pages
     * Search Usage Type
     * @param page 
     * @param pageSize 
     * @param search 
     * @param searchOn 
     * @param sortOn 
     * @param sortDesc 
     */
    public async searchUsageTypeProjectsUsageTypesGet(page?: number, pageSize?: number, search?: string, searchOn?: string, sortOn?: string, sortDesc?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;







        // Path Params
        const localVarPath = '/sam/projects/usage/types';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
        }

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("page_size", ObjectSerializer.serialize(pageSize, "number", ""));
        }

        // Query Params
        if (search !== undefined) {
            requestContext.setQueryParam("search", ObjectSerializer.serialize(search, "string", ""));
        }

        // Query Params
        if (searchOn !== undefined) {
            requestContext.setQueryParam("search_on", ObjectSerializer.serialize(searchOn, "string", ""));
        }

        // Query Params
        if (sortOn !== undefined) {
            requestContext.setQueryParam("sort_on", ObjectSerializer.serialize(sortOn, "string", ""));
        }

        // Query Params
        if (sortDesc !== undefined) {
            requestContext.setQueryParam("sort_desc", ObjectSerializer.serialize(sortDesc, "boolean", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update Project
     * @param projectUuid 
     * @param projectsProjectUpdate 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public async updateProjectProjectsProjectsProjectUuidPut(projectUuid: string, projectsProjectUpdate: ProjectsProjectUpdate, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'projectUuid' is not null or undefined
        if (projectUuid === null || projectUuid === undefined) {
            throw new RequiredError("ProjectsApi", "updateProjectProjectsProjectsProjectUuidPut", "projectUuid");
        }


        // verify required parameter 'projectsProjectUpdate' is not null or undefined
        if (projectsProjectUpdate === null || projectsProjectUpdate === undefined) {
            throw new RequiredError("ProjectsApi", "updateProjectProjectsProjectsProjectUuidPut", "projectsProjectUpdate");
        }








        // Path Params
        const localVarPath = '/sam/projects/projects/{project_uuid}'
            .replace('{' + 'project_uuid' + '}', encodeURIComponent(String(projectUuid)));

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
            ObjectSerializer.serialize(projectsProjectUpdate, "ProjectsProjectUpdate", ""),
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
     * Update Usage Type
     * @param usageTypeKey 
     * @param projectsUsageTypeUpdate 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public async updateUsageTypeProjectsUsageTypesUsageTypeKeyPut(usageTypeKey: string, projectsUsageTypeUpdate: ProjectsUsageTypeUpdate, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'usageTypeKey' is not null or undefined
        if (usageTypeKey === null || usageTypeKey === undefined) {
            throw new RequiredError("ProjectsApi", "updateUsageTypeProjectsUsageTypesUsageTypeKeyPut", "usageTypeKey");
        }


        // verify required parameter 'projectsUsageTypeUpdate' is not null or undefined
        if (projectsUsageTypeUpdate === null || projectsUsageTypeUpdate === undefined) {
            throw new RequiredError("ProjectsApi", "updateUsageTypeProjectsUsageTypesUsageTypeKeyPut", "projectsUsageTypeUpdate");
        }








        // Path Params
        const localVarPath = '/sam/projects/usage/types/{usage_type_key}'
            .replace('{' + 'usage_type_key' + '}', encodeURIComponent(String(usageTypeKey)));

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
            ObjectSerializer.serialize(projectsUsageTypeUpdate, "ProjectsUsageTypeUpdate", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class ProjectsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addMemberToProjectProjectsProjectsProjectUuidMembersEntityUuidPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addMemberToProjectProjectsProjectsProjectUuidMembersEntityUuidPost(response: ResponseContext): Promise<InlineResponse2005 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse2005 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2005", ""
            ) as InlineResponse2005;
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
            throw new ApiException<InlineResponse403>(404, "Project does not exist", body, response.headers);
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
            const body: InlineResponse2005 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2005", ""
            ) as InlineResponse2005;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to archiveProjectProjectsProjectsProjectUuidDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async archiveProjectProjectsProjectsProjectUuidDelete(response: ResponseContext): Promise<InlineResponse2003 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse2003 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2003", ""
            ) as InlineResponse2003;
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
            const body: InlineResponse2003 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2003", ""
            ) as InlineResponse2003;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createProjectKeyProjectsProjectsProjectUuidKeysPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createProjectKeyProjectsProjectsProjectUuidKeysPost(response: ResponseContext): Promise<CreateKeyResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CreateKeyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateKeyResponse", ""
            ) as CreateKeyResponse;
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
            throw new ApiException<InlineResponse403>(404, "Project or Entity does not exist", body, response.headers);
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
            const body: CreateKeyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateKeyResponse", ""
            ) as CreateKeyResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createProjectProjectsProjectsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createProjectProjectsProjectsPost(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
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
     * @params response Response returned by the server for a request to createUsageTypeProjectsUsageTypesPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createUsageTypeProjectsUsageTypesPost(response: ResponseContext): Promise<ProjectsUsageTypeDB > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ProjectsUsageTypeDB = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProjectsUsageTypeDB", ""
            ) as ProjectsUsageTypeDB;
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
            const body: ProjectsUsageTypeDB = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProjectsUsageTypeDB", ""
            ) as ProjectsUsageTypeDB;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteUsageTypeProjectsUsageTypesUsageTypeKeyDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteUsageTypeProjectsUsageTypesUsageTypeKeyDelete(response: ResponseContext): Promise<InlineResponse2004 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse2004 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2004", ""
            ) as InlineResponse2004;
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
            const body: InlineResponse2004 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2004", ""
            ) as InlineResponse2004;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAllProjectUsageProjectsProjectsProjectUuidUsageGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllProjectUsageProjectsProjectsProjectUuidUsageGet(response: ResponseContext): Promise<Array<ProjectsProjectUsageDB> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<ProjectsProjectUsageDB> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ProjectsProjectUsageDB>", ""
            ) as Array<ProjectsProjectUsageDB>;
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
            throw new ApiException<InlineResponse403>(404, "Project does not exist", body, response.headers);
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
            const body: Array<ProjectsProjectUsageDB> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ProjectsProjectUsageDB>", ""
            ) as Array<ProjectsProjectUsageDB>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMemberProjectsProjectsMembersEntityUuidProjectsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getMemberProjectsProjectsMembersEntityUuidProjectsGet(response: ResponseContext): Promise<Array<ProjectsProjectGet> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<ProjectsProjectGet> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ProjectsProjectGet>", ""
            ) as Array<ProjectsProjectGet>;
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
            throw new ApiException<InlineResponse403>(404, "Member does not exist", body, response.headers);
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
            const body: Array<ProjectsProjectGet> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ProjectsProjectGet>", ""
            ) as Array<ProjectsProjectGet>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getProjectKeysProjectsProjectsProjectUuidKeysGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getProjectKeysProjectsProjectsProjectUuidKeysGet(response: ResponseContext): Promise<Array<ProjectsProjectMemberDB> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<ProjectsProjectMemberDB> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ProjectsProjectMemberDB>", ""
            ) as Array<ProjectsProjectMemberDB>;
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
            throw new ApiException<InlineResponse403>(404, "Project or Entity does not exist", body, response.headers);
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
            const body: Array<ProjectsProjectMemberDB> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ProjectsProjectMemberDB>", ""
            ) as Array<ProjectsProjectMemberDB>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getProjectMembersProjectsProjectsProjectUuidMembersGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getProjectMembersProjectsProjectsProjectUuidMembersGet(response: ResponseContext): Promise<Array<ProjectsProjectMemberDB> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<ProjectsProjectMemberDB> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ProjectsProjectMemberDB>", ""
            ) as Array<ProjectsProjectMemberDB>;
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
            throw new ApiException<InlineResponse403>(404, "Project does not exist", body, response.headers);
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
            const body: Array<ProjectsProjectMemberDB> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ProjectsProjectMemberDB>", ""
            ) as Array<ProjectsProjectMemberDB>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getProjectProjectsProjectsProjectUuidGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getProjectProjectsProjectsProjectUuidGet(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
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
            throw new ApiException<InlineResponse403>(404, "Project does not exist", body, response.headers);
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
     * @params response Response returned by the server for a request to getSpecificProjectUsageProjectsProjectsProjectUuidUsageUsageTypeKeyGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSpecificProjectUsageProjectsProjectsProjectUuidUsageUsageTypeKeyGet(response: ResponseContext): Promise<ProjectsProjectUsageDB > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ProjectsProjectUsageDB = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProjectsProjectUsageDB", ""
            ) as ProjectsProjectUsageDB;
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
            throw new ApiException<InlineResponse403>(404, "Project, Usage does not exist", body, response.headers);
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
            const body: ProjectsProjectUsageDB = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProjectsProjectUsageDB", ""
            ) as ProjectsProjectUsageDB;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageTypeProjectsUsageTypesUsageTypeKeyGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getUsageTypeProjectsUsageTypesUsageTypeKeyGet(response: ResponseContext): Promise<ProjectsUsageTypeGet > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ProjectsUsageTypeGet = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProjectsUsageTypeGet", ""
            ) as ProjectsUsageTypeGet;
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
            throw new ApiException<InlineResponse403>(404, "UsageType does not exist", body, response.headers);
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
            const body: ProjectsUsageTypeGet = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProjectsUsageTypeGet", ""
            ) as ProjectsUsageTypeGet;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to removeMemberFromProjectProjectsProjectsProjectUuidMembersEntityUuidDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async removeMemberFromProjectProjectsProjectsProjectUuidMembersEntityUuidDelete(response: ResponseContext): Promise<InlineResponse2005 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse2005 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2005", ""
            ) as InlineResponse2005;
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
            throw new ApiException<InlineResponse403>(404, "Project does not exist", body, response.headers);
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
            const body: InlineResponse2005 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2005", ""
            ) as InlineResponse2005;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to removeProjectKeyProjectsProjectsProjectUuidKeysDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async removeProjectKeyProjectsProjectsProjectUuidKeysDelete(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
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
            throw new ApiException<InlineResponse403>(404, "Project, Entity, or Key does not exist", body, response.headers);
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
     * @params response Response returned by the server for a request to sandboxProjectsSandboxGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async sandboxProjectsSandboxGet(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to searchProjectsProjectsProjectsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async searchProjectsProjectsProjectsGet(response: ResponseContext): Promise<Page > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Page = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Page", ""
            ) as Page;
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
            const body: Page = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Page", ""
            ) as Page;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to searchUsageTypeProjectsUsageTypesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async searchUsageTypeProjectsUsageTypesGet(response: ResponseContext): Promise<Page > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Page = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Page", ""
            ) as Page;
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
            const body: Page = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Page", ""
            ) as Page;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateProjectProjectsProjectsProjectUuidPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateProjectProjectsProjectsProjectUuidPut(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
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
            throw new ApiException<InlineResponse403>(404, "Project does not exist", body, response.headers);
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
     * @params response Response returned by the server for a request to updateUsageTypeProjectsUsageTypesUsageTypeKeyPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateUsageTypeProjectsUsageTypesUsageTypeKeyPut(response: ResponseContext): Promise<ProjectsUsageTypeDB > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ProjectsUsageTypeDB = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProjectsUsageTypeDB", ""
            ) as ProjectsUsageTypeDB;
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
            throw new ApiException<InlineResponse403>(404, "UsageType does not exist", body, response.headers);
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
            const body: ProjectsUsageTypeDB = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProjectsUsageTypeDB", ""
            ) as ProjectsUsageTypeDB;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
