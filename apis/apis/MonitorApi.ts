// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BodyAckAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAcknowledgePost } from '..models/models/BodyAckAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAcknowledgePost';
import { BodyAssignAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAssignPost } from '..models/models/BodyAssignAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAssignPost';
import { BodyAttachAlarmNoteMonitorServicesServiceStagesStageAlarmsAlarmUuidNotePost } from '..models/models/BodyAttachAlarmNoteMonitorServicesServiceStagesStageAlarmsAlarmUuidNotePost';
import { BodyAttachAlarmTicketMonitorServicesServiceStagesStageAlarmsAlarmUuidTicketPost } from '..models/models/BodyAttachAlarmTicketMonitorServicesServiceStagesStageAlarmsAlarmUuidTicketPost';
import { BodyIgnoreAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidIgnorePost } from '..models/models/BodyIgnoreAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidIgnorePost';
import { BodyRegisterServiceMonitorServicesPost } from '..models/models/BodyRegisterServiceMonitorServicesPost';
import { BodyTerminateAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidTerminatePost } from '..models/models/BodyTerminateAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidTerminatePost';
import { BodyTriggerAlarmMonitorServicesServiceStagesStageAlarmsPost } from '..models/models/BodyTriggerAlarmMonitorServicesServiceStagesStageAlarmsPost';
import { HTTPValidationError } from '..models/models/HTTPValidationError';
import { InlineResponse200 } from '..models/models/InlineResponse200';
import { InlineResponse2001 } from '..models/models/InlineResponse2001';
import { InlineResponse2002 } from '..models/models/InlineResponse2002';
import { InlineResponse403 } from '..models/models/InlineResponse403';

/**
 * no description
 */
export class MonitorApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Ack Alarm
     * @param service 
     * @param stage 
     * @param alarmUuid 
     * @param bodyAckAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAcknowledgePost 
     */
    public async ackAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAcknowledgePost(service: string, stage: string, alarmUuid: string, bodyAckAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAcknowledgePost: BodyAckAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAcknowledgePost, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'service' is not null or undefined
        if (service === null || service === undefined) {
            throw new RequiredError("MonitorApi", "ackAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAcknowledgePost", "service");
        }


        // verify required parameter 'stage' is not null or undefined
        if (stage === null || stage === undefined) {
            throw new RequiredError("MonitorApi", "ackAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAcknowledgePost", "stage");
        }


        // verify required parameter 'alarmUuid' is not null or undefined
        if (alarmUuid === null || alarmUuid === undefined) {
            throw new RequiredError("MonitorApi", "ackAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAcknowledgePost", "alarmUuid");
        }


        // verify required parameter 'bodyAckAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAcknowledgePost' is not null or undefined
        if (bodyAckAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAcknowledgePost === null || bodyAckAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAcknowledgePost === undefined) {
            throw new RequiredError("MonitorApi", "ackAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAcknowledgePost", "bodyAckAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAcknowledgePost");
        }


        // Path Params
        const localVarPath = '/sam/monitor/services/{service}/stages/{stage}/alarms/{alarm_uuid}/acknowledge'
            .replace('{' + 'service' + '}', encodeURIComponent(String(service)))
            .replace('{' + 'stage' + '}', encodeURIComponent(String(stage)))
            .replace('{' + 'alarm_uuid' + '}', encodeURIComponent(String(alarmUuid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bodyAckAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAcknowledgePost, "BodyAckAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAcknowledgePost", ""),
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
     * Assign Alarm
     * @param service 
     * @param stage 
     * @param alarmUuid 
     * @param bodyAssignAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAssignPost 
     */
    public async assignAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAssignPost(service: string, stage: string, alarmUuid: string, bodyAssignAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAssignPost: BodyAssignAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAssignPost, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'service' is not null or undefined
        if (service === null || service === undefined) {
            throw new RequiredError("MonitorApi", "assignAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAssignPost", "service");
        }


        // verify required parameter 'stage' is not null or undefined
        if (stage === null || stage === undefined) {
            throw new RequiredError("MonitorApi", "assignAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAssignPost", "stage");
        }


        // verify required parameter 'alarmUuid' is not null or undefined
        if (alarmUuid === null || alarmUuid === undefined) {
            throw new RequiredError("MonitorApi", "assignAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAssignPost", "alarmUuid");
        }


        // verify required parameter 'bodyAssignAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAssignPost' is not null or undefined
        if (bodyAssignAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAssignPost === null || bodyAssignAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAssignPost === undefined) {
            throw new RequiredError("MonitorApi", "assignAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAssignPost", "bodyAssignAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAssignPost");
        }


        // Path Params
        const localVarPath = '/sam/monitor/services/{service}/stages/{stage}/alarms/{alarm_uuid}/assign'
            .replace('{' + 'service' + '}', encodeURIComponent(String(service)))
            .replace('{' + 'stage' + '}', encodeURIComponent(String(stage)))
            .replace('{' + 'alarm_uuid' + '}', encodeURIComponent(String(alarmUuid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bodyAssignAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAssignPost, "BodyAssignAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAssignPost", ""),
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
     * Attach Alarm Note
     * @param service 
     * @param stage 
     * @param alarmUuid 
     * @param bodyAttachAlarmNoteMonitorServicesServiceStagesStageAlarmsAlarmUuidNotePost 
     */
    public async attachAlarmNoteMonitorServicesServiceStagesStageAlarmsAlarmUuidNotePost(service: string, stage: string, alarmUuid: string, bodyAttachAlarmNoteMonitorServicesServiceStagesStageAlarmsAlarmUuidNotePost: BodyAttachAlarmNoteMonitorServicesServiceStagesStageAlarmsAlarmUuidNotePost, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'service' is not null or undefined
        if (service === null || service === undefined) {
            throw new RequiredError("MonitorApi", "attachAlarmNoteMonitorServicesServiceStagesStageAlarmsAlarmUuidNotePost", "service");
        }


        // verify required parameter 'stage' is not null or undefined
        if (stage === null || stage === undefined) {
            throw new RequiredError("MonitorApi", "attachAlarmNoteMonitorServicesServiceStagesStageAlarmsAlarmUuidNotePost", "stage");
        }


        // verify required parameter 'alarmUuid' is not null or undefined
        if (alarmUuid === null || alarmUuid === undefined) {
            throw new RequiredError("MonitorApi", "attachAlarmNoteMonitorServicesServiceStagesStageAlarmsAlarmUuidNotePost", "alarmUuid");
        }


        // verify required parameter 'bodyAttachAlarmNoteMonitorServicesServiceStagesStageAlarmsAlarmUuidNotePost' is not null or undefined
        if (bodyAttachAlarmNoteMonitorServicesServiceStagesStageAlarmsAlarmUuidNotePost === null || bodyAttachAlarmNoteMonitorServicesServiceStagesStageAlarmsAlarmUuidNotePost === undefined) {
            throw new RequiredError("MonitorApi", "attachAlarmNoteMonitorServicesServiceStagesStageAlarmsAlarmUuidNotePost", "bodyAttachAlarmNoteMonitorServicesServiceStagesStageAlarmsAlarmUuidNotePost");
        }


        // Path Params
        const localVarPath = '/sam/monitor/services/{service}/stages/{stage}/alarms/{alarm_uuid}/note'
            .replace('{' + 'service' + '}', encodeURIComponent(String(service)))
            .replace('{' + 'stage' + '}', encodeURIComponent(String(stage)))
            .replace('{' + 'alarm_uuid' + '}', encodeURIComponent(String(alarmUuid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bodyAttachAlarmNoteMonitorServicesServiceStagesStageAlarmsAlarmUuidNotePost, "BodyAttachAlarmNoteMonitorServicesServiceStagesStageAlarmsAlarmUuidNotePost", ""),
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
     * Attach Alarm Ticket
     * @param service 
     * @param stage 
     * @param alarmUuid 
     * @param bodyAttachAlarmTicketMonitorServicesServiceStagesStageAlarmsAlarmUuidTicketPost 
     */
    public async attachAlarmTicketMonitorServicesServiceStagesStageAlarmsAlarmUuidTicketPost(service: string, stage: string, alarmUuid: string, bodyAttachAlarmTicketMonitorServicesServiceStagesStageAlarmsAlarmUuidTicketPost: BodyAttachAlarmTicketMonitorServicesServiceStagesStageAlarmsAlarmUuidTicketPost, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'service' is not null or undefined
        if (service === null || service === undefined) {
            throw new RequiredError("MonitorApi", "attachAlarmTicketMonitorServicesServiceStagesStageAlarmsAlarmUuidTicketPost", "service");
        }


        // verify required parameter 'stage' is not null or undefined
        if (stage === null || stage === undefined) {
            throw new RequiredError("MonitorApi", "attachAlarmTicketMonitorServicesServiceStagesStageAlarmsAlarmUuidTicketPost", "stage");
        }


        // verify required parameter 'alarmUuid' is not null or undefined
        if (alarmUuid === null || alarmUuid === undefined) {
            throw new RequiredError("MonitorApi", "attachAlarmTicketMonitorServicesServiceStagesStageAlarmsAlarmUuidTicketPost", "alarmUuid");
        }


        // verify required parameter 'bodyAttachAlarmTicketMonitorServicesServiceStagesStageAlarmsAlarmUuidTicketPost' is not null or undefined
        if (bodyAttachAlarmTicketMonitorServicesServiceStagesStageAlarmsAlarmUuidTicketPost === null || bodyAttachAlarmTicketMonitorServicesServiceStagesStageAlarmsAlarmUuidTicketPost === undefined) {
            throw new RequiredError("MonitorApi", "attachAlarmTicketMonitorServicesServiceStagesStageAlarmsAlarmUuidTicketPost", "bodyAttachAlarmTicketMonitorServicesServiceStagesStageAlarmsAlarmUuidTicketPost");
        }


        // Path Params
        const localVarPath = '/sam/monitor/services/{service}/stages/{stage}/alarms/{alarm_uuid}/ticket'
            .replace('{' + 'service' + '}', encodeURIComponent(String(service)))
            .replace('{' + 'stage' + '}', encodeURIComponent(String(stage)))
            .replace('{' + 'alarm_uuid' + '}', encodeURIComponent(String(alarmUuid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bodyAttachAlarmTicketMonitorServicesServiceStagesStageAlarmsAlarmUuidTicketPost, "BodyAttachAlarmTicketMonitorServicesServiceStagesStageAlarmsAlarmUuidTicketPost", ""),
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
     * Clear Alarm
     * @param service 
     * @param stage 
     * @param alarmUuid 
     */
    public async clearAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidClearPost(service: string, stage: string, alarmUuid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'service' is not null or undefined
        if (service === null || service === undefined) {
            throw new RequiredError("MonitorApi", "clearAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidClearPost", "service");
        }


        // verify required parameter 'stage' is not null or undefined
        if (stage === null || stage === undefined) {
            throw new RequiredError("MonitorApi", "clearAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidClearPost", "stage");
        }


        // verify required parameter 'alarmUuid' is not null or undefined
        if (alarmUuid === null || alarmUuid === undefined) {
            throw new RequiredError("MonitorApi", "clearAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidClearPost", "alarmUuid");
        }


        // Path Params
        const localVarPath = '/sam/monitor/services/{service}/stages/{stage}/alarms/{alarm_uuid}/clear'
            .replace('{' + 'service' + '}', encodeURIComponent(String(service)))
            .replace('{' + 'stage' + '}', encodeURIComponent(String(stage)))
            .replace('{' + 'alarm_uuid' + '}', encodeURIComponent(String(alarmUuid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get Service Alarm
     * @param service 
     * @param stage 
     * @param alarmUuid 
     */
    public async getServiceAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidGet(service: string, stage: string, alarmUuid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'service' is not null or undefined
        if (service === null || service === undefined) {
            throw new RequiredError("MonitorApi", "getServiceAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidGet", "service");
        }


        // verify required parameter 'stage' is not null or undefined
        if (stage === null || stage === undefined) {
            throw new RequiredError("MonitorApi", "getServiceAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidGet", "stage");
        }


        // verify required parameter 'alarmUuid' is not null or undefined
        if (alarmUuid === null || alarmUuid === undefined) {
            throw new RequiredError("MonitorApi", "getServiceAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidGet", "alarmUuid");
        }


        // Path Params
        const localVarPath = '/sam/monitor/services/{service}/stages/{stage}/alarms/{alarm_uuid}'
            .replace('{' + 'service' + '}', encodeURIComponent(String(service)))
            .replace('{' + 'stage' + '}', encodeURIComponent(String(stage)))
            .replace('{' + 'alarm_uuid' + '}', encodeURIComponent(String(alarmUuid)));

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
     * Get Service Alarms
     * @param service 
     * @param stage 
     * @param history 
     * @param includeTerminated 
     * @param includeCleared 
     */
    public async getServiceAlarmsMonitorServicesServiceStagesStageAlarmsGet(service: string, stage: string, history?: number, includeTerminated?: boolean, includeCleared?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'service' is not null or undefined
        if (service === null || service === undefined) {
            throw new RequiredError("MonitorApi", "getServiceAlarmsMonitorServicesServiceStagesStageAlarmsGet", "service");
        }


        // verify required parameter 'stage' is not null or undefined
        if (stage === null || stage === undefined) {
            throw new RequiredError("MonitorApi", "getServiceAlarmsMonitorServicesServiceStagesStageAlarmsGet", "stage");
        }





        // Path Params
        const localVarPath = '/sam/monitor/services/{service}/stages/{stage}/alarms'
            .replace('{' + 'service' + '}', encodeURIComponent(String(service)))
            .replace('{' + 'stage' + '}', encodeURIComponent(String(stage)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (history !== undefined) {
            requestContext.setQueryParam("history", ObjectSerializer.serialize(history, "number", ""));
        }

        // Query Params
        if (includeTerminated !== undefined) {
            requestContext.setQueryParam("include_terminated", ObjectSerializer.serialize(includeTerminated, "boolean", ""));
        }

        // Query Params
        if (includeCleared !== undefined) {
            requestContext.setQueryParam("include_cleared", ObjectSerializer.serialize(includeCleared, "boolean", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get Service Heartbeats
     * @param service 
     * @param stage 
     * @param history 
     */
    public async getServiceHeartbeatsMonitorServicesServiceStagesStageHeartbeatsGet(service: string, stage: string, history?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'service' is not null or undefined
        if (service === null || service === undefined) {
            throw new RequiredError("MonitorApi", "getServiceHeartbeatsMonitorServicesServiceStagesStageHeartbeatsGet", "service");
        }


        // verify required parameter 'stage' is not null or undefined
        if (stage === null || stage === undefined) {
            throw new RequiredError("MonitorApi", "getServiceHeartbeatsMonitorServicesServiceStagesStageHeartbeatsGet", "stage");
        }



        // Path Params
        const localVarPath = '/sam/monitor/services/{service}/stages/{stage}/heartbeats'
            .replace('{' + 'service' + '}', encodeURIComponent(String(service)))
            .replace('{' + 'stage' + '}', encodeURIComponent(String(stage)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (history !== undefined) {
            requestContext.setQueryParam("history", ObjectSerializer.serialize(history, "number", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get Service Kpis
     * @param service 
     * @param history 
     */
    public async getServiceKpisMonitorServicesServiceKpisGet(service: string, history?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'service' is not null or undefined
        if (service === null || service === undefined) {
            throw new RequiredError("MonitorApi", "getServiceKpisMonitorServicesServiceKpisGet", "service");
        }



        // Path Params
        const localVarPath = '/sam/monitor/services/{service}/kpis'
            .replace('{' + 'service' + '}', encodeURIComponent(String(service)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (history !== undefined) {
            requestContext.setQueryParam("history", ObjectSerializer.serialize(history, "number", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get Service
     * @param service 
     * @param heartbeats 
     * @param heartbeatLimit 
     * @param alarms 
     * @param alarmLimit 
     * @param stage 
     */
    public async getServiceMonitorServicesServiceGet(service: string, heartbeats?: boolean, heartbeatLimit?: number, alarms?: boolean, alarmLimit?: number, stage?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'service' is not null or undefined
        if (service === null || service === undefined) {
            throw new RequiredError("MonitorApi", "getServiceMonitorServicesServiceGet", "service");
        }







        // Path Params
        const localVarPath = '/sam/monitor/services/{service}'
            .replace('{' + 'service' + '}', encodeURIComponent(String(service)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (heartbeats !== undefined) {
            requestContext.setQueryParam("heartbeats", ObjectSerializer.serialize(heartbeats, "boolean", ""));
        }

        // Query Params
        if (heartbeatLimit !== undefined) {
            requestContext.setQueryParam("heartbeat_limit", ObjectSerializer.serialize(heartbeatLimit, "number", ""));
        }

        // Query Params
        if (alarms !== undefined) {
            requestContext.setQueryParam("alarms", ObjectSerializer.serialize(alarms, "boolean", ""));
        }

        // Query Params
        if (alarmLimit !== undefined) {
            requestContext.setQueryParam("alarm_limit", ObjectSerializer.serialize(alarmLimit, "number", ""));
        }

        // Query Params
        if (stage !== undefined) {
            requestContext.setQueryParam("stage", ObjectSerializer.serialize(stage, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Getservicespec
     * @param service 
     * @param spec 
     * @param asJson 
     */
    public async getServiceSpec(service: string, spec: string, asJson?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'service' is not null or undefined
        if (service === null || service === undefined) {
            throw new RequiredError("MonitorApi", "getServiceSpec", "service");
        }


        // verify required parameter 'spec' is not null or undefined
        if (spec === null || spec === undefined) {
            throw new RequiredError("MonitorApi", "getServiceSpec", "spec");
        }



        // Path Params
        const localVarPath = '/sam/monitor/services/{service}/specs/{spec}'
            .replace('{' + 'service' + '}', encodeURIComponent(String(service)))
            .replace('{' + 'spec' + '}', encodeURIComponent(String(spec)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (asJson !== undefined) {
            requestContext.setQueryParam("as_json", ObjectSerializer.serialize(asJson, "boolean", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Getservicespecs
     * @param service 
     */
    public async getServiceSpecs(service: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'service' is not null or undefined
        if (service === null || service === undefined) {
            throw new RequiredError("MonitorApi", "getServiceSpecs", "service");
        }


        // Path Params
        const localVarPath = '/sam/monitor/services/{service}/specs'
            .replace('{' + 'service' + '}', encodeURIComponent(String(service)));

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
     * Get Service Vitals
     * @param service 
     * @param stage 
     * @param history 
     */
    public async getServiceVitalsMonitorServicesServiceStagesStageVitalsGet(service: string, stage: string, history?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'service' is not null or undefined
        if (service === null || service === undefined) {
            throw new RequiredError("MonitorApi", "getServiceVitalsMonitorServicesServiceStagesStageVitalsGet", "service");
        }


        // verify required parameter 'stage' is not null or undefined
        if (stage === null || stage === undefined) {
            throw new RequiredError("MonitorApi", "getServiceVitalsMonitorServicesServiceStagesStageVitalsGet", "stage");
        }



        // Path Params
        const localVarPath = '/sam/monitor/services/{service}/stages/{stage}/vitals'
            .replace('{' + 'service' + '}', encodeURIComponent(String(service)))
            .replace('{' + 'stage' + '}', encodeURIComponent(String(stage)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (history !== undefined) {
            requestContext.setQueryParam("history", ObjectSerializer.serialize(history, "number", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get Services
     * @param heartbeats 
     * @param heartbeatLimit 
     * @param alarms 
     * @param alarmLimit 
     * @param includeHidden 
     * @param stage 
     * @param key 
     */
    public async getServicesMonitorServicesGet(heartbeats?: boolean, heartbeatLimit?: number, alarms?: boolean, alarmLimit?: number, includeHidden?: boolean, stage?: string, key?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;








        // Path Params
        const localVarPath = '/sam/monitor/services';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (heartbeats !== undefined) {
            requestContext.setQueryParam("heartbeats", ObjectSerializer.serialize(heartbeats, "boolean", ""));
        }

        // Query Params
        if (heartbeatLimit !== undefined) {
            requestContext.setQueryParam("heartbeat_limit", ObjectSerializer.serialize(heartbeatLimit, "number", ""));
        }

        // Query Params
        if (alarms !== undefined) {
            requestContext.setQueryParam("alarms", ObjectSerializer.serialize(alarms, "boolean", ""));
        }

        // Query Params
        if (alarmLimit !== undefined) {
            requestContext.setQueryParam("alarm_limit", ObjectSerializer.serialize(alarmLimit, "number", ""));
        }

        // Query Params
        if (includeHidden !== undefined) {
            requestContext.setQueryParam("include_hidden", ObjectSerializer.serialize(includeHidden, "boolean", ""));
        }

        // Query Params
        if (stage !== undefined) {
            requestContext.setQueryParam("stage", ObjectSerializer.serialize(stage, "string", ""));
        }

        // Query Params
        if (key !== undefined) {
            requestContext.setQueryParam("key", ObjectSerializer.serialize(key, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Getserviceswithspecs
     */
    public async getServicesWithSpecs(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/sam/monitor/specs/services';

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
     * Hide Service
     * @param service 
     * @param stage 
     */
    public async hideServiceMonitorServicesServiceStagesStageHidePost(service: string, stage: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'service' is not null or undefined
        if (service === null || service === undefined) {
            throw new RequiredError("MonitorApi", "hideServiceMonitorServicesServiceStagesStageHidePost", "service");
        }


        // verify required parameter 'stage' is not null or undefined
        if (stage === null || stage === undefined) {
            throw new RequiredError("MonitorApi", "hideServiceMonitorServicesServiceStagesStageHidePost", "stage");
        }


        // Path Params
        const localVarPath = '/sam/monitor/services/{service}/stages/{stage}/hide'
            .replace('{' + 'service' + '}', encodeURIComponent(String(service)))
            .replace('{' + 'stage' + '}', encodeURIComponent(String(stage)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Ignore Alarm
     * @param service 
     * @param stage 
     * @param alarmUuid 
     * @param bodyIgnoreAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidIgnorePost 
     */
    public async ignoreAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidIgnorePost(service: string, stage: string, alarmUuid: string, bodyIgnoreAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidIgnorePost: BodyIgnoreAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidIgnorePost, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'service' is not null or undefined
        if (service === null || service === undefined) {
            throw new RequiredError("MonitorApi", "ignoreAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidIgnorePost", "service");
        }


        // verify required parameter 'stage' is not null or undefined
        if (stage === null || stage === undefined) {
            throw new RequiredError("MonitorApi", "ignoreAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidIgnorePost", "stage");
        }


        // verify required parameter 'alarmUuid' is not null or undefined
        if (alarmUuid === null || alarmUuid === undefined) {
            throw new RequiredError("MonitorApi", "ignoreAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidIgnorePost", "alarmUuid");
        }


        // verify required parameter 'bodyIgnoreAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidIgnorePost' is not null or undefined
        if (bodyIgnoreAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidIgnorePost === null || bodyIgnoreAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidIgnorePost === undefined) {
            throw new RequiredError("MonitorApi", "ignoreAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidIgnorePost", "bodyIgnoreAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidIgnorePost");
        }


        // Path Params
        const localVarPath = '/sam/monitor/services/{service}/stages/{stage}/alarms/{alarm_uuid}/ignore'
            .replace('{' + 'service' + '}', encodeURIComponent(String(service)))
            .replace('{' + 'stage' + '}', encodeURIComponent(String(stage)))
            .replace('{' + 'alarm_uuid' + '}', encodeURIComponent(String(alarmUuid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bodyIgnoreAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidIgnorePost, "BodyIgnoreAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidIgnorePost", ""),
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
     * Register Service
     * @param bodyRegisterServiceMonitorServicesPost 
     */
    public async registerServiceMonitorServicesPost(bodyRegisterServiceMonitorServicesPost: BodyRegisterServiceMonitorServicesPost, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'bodyRegisterServiceMonitorServicesPost' is not null or undefined
        if (bodyRegisterServiceMonitorServicesPost === null || bodyRegisterServiceMonitorServicesPost === undefined) {
            throw new RequiredError("MonitorApi", "registerServiceMonitorServicesPost", "bodyRegisterServiceMonitorServicesPost");
        }


        // Path Params
        const localVarPath = '/sam/monitor/services';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bodyRegisterServiceMonitorServicesPost, "BodyRegisterServiceMonitorServicesPost", ""),
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
     * Search Alarms
     * @param service 
     * @param page 
     * @param pageSize 
     * @param search 
     * @param searchOn 
     * @param sortOn 
     * @param sortDesc 
     */
    public async searchAlarmsMonitorServicesServiceAlarmsGet(service: string, page?: number, pageSize?: number, search?: string, searchOn?: string, sortOn?: string, sortDesc?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'service' is not null or undefined
        if (service === null || service === undefined) {
            throw new RequiredError("MonitorApi", "searchAlarmsMonitorServicesServiceAlarmsGet", "service");
        }








        // Path Params
        const localVarPath = '/sam/monitor/services/{service}/alarms'
            .replace('{' + 'service' + '}', encodeURIComponent(String(service)));

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
     * Show Service
     * @param service 
     * @param stage 
     */
    public async showServiceMonitorServicesServiceStagesStageShowPost(service: string, stage: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'service' is not null or undefined
        if (service === null || service === undefined) {
            throw new RequiredError("MonitorApi", "showServiceMonitorServicesServiceStagesStageShowPost", "service");
        }


        // verify required parameter 'stage' is not null or undefined
        if (stage === null || stage === undefined) {
            throw new RequiredError("MonitorApi", "showServiceMonitorServicesServiceStagesStageShowPost", "stage");
        }


        // Path Params
        const localVarPath = '/sam/monitor/services/{service}/stages/{stage}/show'
            .replace('{' + 'service' + '}', encodeURIComponent(String(service)))
            .replace('{' + 'stage' + '}', encodeURIComponent(String(stage)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Terminate Alarm
     * @param service 
     * @param stage 
     * @param alarmUuid 
     * @param bodyTerminateAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidTerminatePost 
     */
    public async terminateAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidTerminatePost(service: string, stage: string, alarmUuid: string, bodyTerminateAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidTerminatePost: BodyTerminateAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidTerminatePost, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'service' is not null or undefined
        if (service === null || service === undefined) {
            throw new RequiredError("MonitorApi", "terminateAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidTerminatePost", "service");
        }


        // verify required parameter 'stage' is not null or undefined
        if (stage === null || stage === undefined) {
            throw new RequiredError("MonitorApi", "terminateAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidTerminatePost", "stage");
        }


        // verify required parameter 'alarmUuid' is not null or undefined
        if (alarmUuid === null || alarmUuid === undefined) {
            throw new RequiredError("MonitorApi", "terminateAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidTerminatePost", "alarmUuid");
        }


        // verify required parameter 'bodyTerminateAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidTerminatePost' is not null or undefined
        if (bodyTerminateAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidTerminatePost === null || bodyTerminateAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidTerminatePost === undefined) {
            throw new RequiredError("MonitorApi", "terminateAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidTerminatePost", "bodyTerminateAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidTerminatePost");
        }


        // Path Params
        const localVarPath = '/sam/monitor/services/{service}/stages/{stage}/alarms/{alarm_uuid}/terminate'
            .replace('{' + 'service' + '}', encodeURIComponent(String(service)))
            .replace('{' + 'stage' + '}', encodeURIComponent(String(stage)))
            .replace('{' + 'alarm_uuid' + '}', encodeURIComponent(String(alarmUuid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bodyTerminateAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidTerminatePost, "BodyTerminateAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidTerminatePost", ""),
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
     * Trigger Alarm
     * @param service 
     * @param stage 
     * @param bodyTriggerAlarmMonitorServicesServiceStagesStageAlarmsPost 
     */
    public async triggerAlarmMonitorServicesServiceStagesStageAlarmsPost(service: string, stage: string, bodyTriggerAlarmMonitorServicesServiceStagesStageAlarmsPost: BodyTriggerAlarmMonitorServicesServiceStagesStageAlarmsPost, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'service' is not null or undefined
        if (service === null || service === undefined) {
            throw new RequiredError("MonitorApi", "triggerAlarmMonitorServicesServiceStagesStageAlarmsPost", "service");
        }


        // verify required parameter 'stage' is not null or undefined
        if (stage === null || stage === undefined) {
            throw new RequiredError("MonitorApi", "triggerAlarmMonitorServicesServiceStagesStageAlarmsPost", "stage");
        }


        // verify required parameter 'bodyTriggerAlarmMonitorServicesServiceStagesStageAlarmsPost' is not null or undefined
        if (bodyTriggerAlarmMonitorServicesServiceStagesStageAlarmsPost === null || bodyTriggerAlarmMonitorServicesServiceStagesStageAlarmsPost === undefined) {
            throw new RequiredError("MonitorApi", "triggerAlarmMonitorServicesServiceStagesStageAlarmsPost", "bodyTriggerAlarmMonitorServicesServiceStagesStageAlarmsPost");
        }


        // Path Params
        const localVarPath = '/sam/monitor/services/{service}/stages/{stage}/alarms'
            .replace('{' + 'service' + '}', encodeURIComponent(String(service)))
            .replace('{' + 'stage' + '}', encodeURIComponent(String(stage)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bodyTriggerAlarmMonitorServicesServiceStagesStageAlarmsPost, "BodyTriggerAlarmMonitorServicesServiceStagesStageAlarmsPost", ""),
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

export class MonitorApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to ackAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAcknowledgePost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async ackAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAcknowledgePost(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to assignAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAssignPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assignAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAssignPost(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to attachAlarmNoteMonitorServicesServiceStagesStageAlarmsAlarmUuidNotePost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async attachAlarmNoteMonitorServicesServiceStagesStageAlarmsAlarmUuidNotePost(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to attachAlarmTicketMonitorServicesServiceStagesStageAlarmsAlarmUuidTicketPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async attachAlarmTicketMonitorServicesServiceStagesStageAlarmsAlarmUuidTicketPost(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to clearAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidClearPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async clearAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidClearPost(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to getServiceAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getServiceAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidGet(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to getServiceAlarmsMonitorServicesServiceStagesStageAlarmsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getServiceAlarmsMonitorServicesServiceStagesStageAlarmsGet(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to getServiceHeartbeatsMonitorServicesServiceStagesStageHeartbeatsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getServiceHeartbeatsMonitorServicesServiceStagesStageHeartbeatsGet(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to getServiceKpisMonitorServicesServiceKpisGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getServiceKpisMonitorServicesServiceKpisGet(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to getServiceMonitorServicesServiceGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getServiceMonitorServicesServiceGet(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to getServiceSpec
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getServiceSpec(response: ResponseContext): Promise<InlineResponse2002 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse2002 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2002", ""
            ) as InlineResponse2002;
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
            const body: InlineResponse2002 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2002", ""
            ) as InlineResponse2002;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getServiceSpecs
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getServiceSpecs(response: ResponseContext): Promise<InlineResponse2001 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse2001 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2001", ""
            ) as InlineResponse2001;
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
            const body: InlineResponse2001 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2001", ""
            ) as InlineResponse2001;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getServiceVitalsMonitorServicesServiceStagesStageVitalsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getServiceVitalsMonitorServicesServiceStagesStageVitalsGet(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to getServicesMonitorServicesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getServicesMonitorServicesGet(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to getServicesWithSpecs
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getServicesWithSpecs(response: ResponseContext): Promise<InlineResponse200 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse200 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse200", ""
            ) as InlineResponse200;
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

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InlineResponse200 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse200", ""
            ) as InlineResponse200;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to hideServiceMonitorServicesServiceStagesStageHidePost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async hideServiceMonitorServicesServiceStagesStageHidePost(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to ignoreAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidIgnorePost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async ignoreAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidIgnorePost(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to registerServiceMonitorServicesPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async registerServiceMonitorServicesPost(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to searchAlarmsMonitorServicesServiceAlarmsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async searchAlarmsMonitorServicesServiceAlarmsGet(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to showServiceMonitorServicesServiceStagesStageShowPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async showServiceMonitorServicesServiceStagesStageShowPost(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to terminateAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidTerminatePost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async terminateAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidTerminatePost(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to triggerAlarmMonitorServicesServiceStagesStageAlarmsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async triggerAlarmMonitorServicesServiceStagesStageAlarmsPost(response: ResponseContext): Promise<any > {
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

}
