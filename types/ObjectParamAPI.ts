import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { AddressBase } from '../models/AddressBase';
import { AlarmAcknowledge } from '../models/AlarmAcknowledge';
import { AlarmAssign } from '../models/AlarmAssign';
import { AlarmCreate } from '../models/AlarmCreate';
import { AlarmIgnore } from '../models/AlarmIgnore';
import { AlarmNote } from '../models/AlarmNote';
import { AlarmTerminate } from '../models/AlarmTerminate';
import { AlarmTicket } from '../models/AlarmTicket';
import { AttachPaymentToProject } from '../models/AttachPaymentToProject';
import { BasicMeta } from '../models/BasicMeta';
import { BasicMetaCreate } from '../models/BasicMetaCreate';
import { BodyAckAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAcknowledgePost } from '../models/BodyAckAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAcknowledgePost';
import { BodyAssignAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAssignPost } from '../models/BodyAssignAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAssignPost';
import { BodyAttachAlarmNoteMonitorServicesServiceStagesStageAlarmsAlarmUuidNotePost } from '../models/BodyAttachAlarmNoteMonitorServicesServiceStagesStageAlarmsAlarmUuidNotePost';
import { BodyAttachAlarmTicketMonitorServicesServiceStagesStageAlarmsAlarmUuidTicketPost } from '../models/BodyAttachAlarmTicketMonitorServicesServiceStagesStageAlarmsAlarmUuidTicketPost';
import { BodyAttachPaymentToProjectBillingAttachPaymentToProjectPost } from '../models/BodyAttachPaymentToProjectBillingAttachPaymentToProjectPost';
import { BodyCreateKeySecurityKeysPost } from '../models/BodyCreateKeySecurityKeysPost';
import { BodyGenerateTokenSecurityTokensPost } from '../models/BodyGenerateTokenSecurityTokensPost';
import { BodyIgnoreAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidIgnorePost } from '../models/BodyIgnoreAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidIgnorePost';
import { BodyProcessPaymentBillingProcessPaymentPost } from '../models/BodyProcessPaymentBillingProcessPaymentPost';
import { BodyRegisterServiceMonitorServicesPost } from '../models/BodyRegisterServiceMonitorServicesPost';
import { BodyTerminateAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidTerminatePost } from '../models/BodyTerminateAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidTerminatePost';
import { BodyTriggerAlarmMonitorServicesServiceStagesStageAlarmsPost } from '../models/BodyTriggerAlarmMonitorServicesServiceStagesStageAlarmsPost';
import { BodyVerifyKeySecurityKeysVerifyPost } from '../models/BodyVerifyKeySecurityKeysVerifyPost';
import { CatalogBase } from '../models/CatalogBase';
import { CatalogReturn } from '../models/CatalogReturn';
import { CategoryBase } from '../models/CategoryBase';
import { CategoryDb } from '../models/CategoryDb';
import { CompanyBase } from '../models/CompanyBase';
import { CompanyResponse } from '../models/CompanyResponse';
import { Contact } from '../models/Contact';
import { ContactBase } from '../models/ContactBase';
import { ContactResponse } from '../models/ContactResponse';
import { CreateKeyResponse } from '../models/CreateKeyResponse';
import { CreateReview } from '../models/CreateReview';
import { CreateTicket } from '../models/CreateTicket';
import { CustomList } from '../models/CustomList';
import { DatesMeta } from '../models/DatesMeta';
import { DetailedMeta } from '../models/DetailedMeta';
import { DetailedMetaCreate } from '../models/DetailedMetaCreate';
import { Field } from '../models/Field';
import { FieldDynamo } from '../models/FieldDynamo';
import { HTTPValidationError } from '../models/HTTPValidationError';
import { InlineResponse200 } from '../models/InlineResponse200';
import { InlineResponse2001 } from '../models/InlineResponse2001';
import { InlineResponse2002 } from '../models/InlineResponse2002';
import { InlineResponse2003 } from '../models/InlineResponse2003';
import { InlineResponse2004 } from '../models/InlineResponse2004';
import { InlineResponse2005 } from '../models/InlineResponse2005';
import { InlineResponse2006 } from '../models/InlineResponse2006';
import { InlineResponse2007 } from '../models/InlineResponse2007';
import { InlineResponse2008 } from '../models/InlineResponse2008';
import { InlineResponse403 } from '../models/InlineResponse403';
import { MetaChildren } from '../models/MetaChildren';
import { MetaCreate } from '../models/MetaCreate';
import { MetaCustom } from '../models/MetaCustom';
import { MetaDynamo } from '../models/MetaDynamo';
import { MetaSlugger } from '../models/MetaSlugger';
import { NoteBase } from '../models/NoteBase';
import { NoteDynamo } from '../models/NoteDynamo';
import { NoteDynamoHistory } from '../models/NoteDynamoHistory';
import { NoteMeta } from '../models/NoteMeta';
import { NotesHTTPValidationError } from '../models/NotesHTTPValidationError';
import { NotesValidationError } from '../models/NotesValidationError';
import { OptionGroup } from '../models/OptionGroup';
import { Options } from '../models/Options';
import { Page } from '../models/Page';
import { Pagination } from '../models/Pagination';
import { ParticipantCreate } from '../models/ParticipantCreate';
import { ParticipantUpdate } from '../models/ParticipantUpdate';
import { ParticipantUserReturn } from '../models/ParticipantUserReturn';
import { Payment } from '../models/Payment';
import { PaymentMethodResponse } from '../models/PaymentMethodResponse';
import { PlaceBase } from '../models/PlaceBase';
import { PlaceResponse } from '../models/PlaceResponse';
import { ProductBase } from '../models/ProductBase';
import { ProductReturn } from '../models/ProductReturn';
import { ProjectsProjectCreate } from '../models/ProjectsProjectCreate';
import { ProjectsProjectGet } from '../models/ProjectsProjectGet';
import { ProjectsProjectMemberDB } from '../models/ProjectsProjectMemberDB';
import { ProjectsProjectUpdate } from '../models/ProjectsProjectUpdate';
import { ProjectsProjectUsageDB } from '../models/ProjectsProjectUsageDB';
import { ProjectsUsageTypeCreate } from '../models/ProjectsUsageTypeCreate';
import { ProjectsUsageTypeDB } from '../models/ProjectsUsageTypeDB';
import { ProjectsUsageTypeGet } from '../models/ProjectsUsageTypeGet';
import { ProjectsUsageTypeUnitPrice } from '../models/ProjectsUsageTypeUnitPrice';
import { ProjectsUsageTypeUpdate } from '../models/ProjectsUsageTypeUpdate';
import { SecurityCreateToken } from '../models/SecurityCreateToken';
import { SecurityEncryptionKeyGet } from '../models/SecurityEncryptionKeyGet';
import { SecurityKeyCreate } from '../models/SecurityKeyCreate';
import { SecurityKeyGet } from '../models/SecurityKeyGet';
import { SecurityKeyVerify } from '../models/SecurityKeyVerify';
import { Selection } from '../models/Selection';
import { ServiceCreate } from '../models/ServiceCreate';
import { StaffCreate } from '../models/StaffCreate';
import { StaffDb } from '../models/StaffDb';
import { StaffResponse } from '../models/StaffResponse';
import { StripeAccountResponse } from '../models/StripeAccountResponse';
import { TagBase } from '../models/TagBase';
import { TagDb } from '../models/TagDb';
import { TicketResponse } from '../models/TicketResponse';
import { TicketsResponse } from '../models/TicketsResponse';
import { UpdateReview } from '../models/UpdateReview';
import { User } from '../models/User';
import { UserConfirmation } from '../models/UserConfirmation';
import { UserEmail } from '../models/UserEmail';
import { UserFlags } from '../models/UserFlags';
import { UserLogin } from '../models/UserLogin';
import { UserLoginReturn } from '../models/UserLoginReturn';
import { UserPasswordReset } from '../models/UserPasswordReset';
import { UserPasswordResetConfirmation } from '../models/UserPasswordResetConfirmation';
import { UserResponse } from '../models/UserResponse';
import { UserSignup } from '../models/UserSignup';
import { UserSignupReturn } from '../models/UserSignupReturn';
import { UserTokenReturn } from '../models/UserTokenReturn';
import { UserValidations } from '../models/UserValidations';
import { ValidationError } from '../models/ValidationError';
import { Validations } from '../models/Validations';

import { ObservableAuthApi } from "./ObservableAPI";
import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";

export interface AuthApiResetPasswordConfirmationUsersAuthPasswordResetConfirmPostRequest {
    /**
     * 
     * @type UserPasswordResetConfirmation
     * @memberof AuthApiresetPasswordConfirmationUsersAuthPasswordResetConfirmPost
     */
    userPasswordResetConfirmation: UserPasswordResetConfirmation
}

export class ObjectAuthApi {
    private api: ObservableAuthApi

    public constructor(configuration: Configuration, requestFactory?: AuthApiRequestFactory, responseProcessor?: AuthApiResponseProcessor) {
        this.api = new ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Resets the given user's password to the given password when the proper code is provided
     * Reset Password Confirmation
     * @param param the request object
     */
    public resetPasswordConfirmationUsersAuthPasswordResetConfirmPost(param: AuthApiResetPasswordConfirmationUsersAuthPasswordResetConfirmPostRequest, options?: Configuration): Promise<any> {
        return this.api.resetPasswordConfirmationUsersAuthPasswordResetConfirmPost(param.userPasswordResetConfirmation,  options).toPromise();
    }

}

import { ObservableBillingApi } from "./ObservableAPI";
import { BillingApiRequestFactory, BillingApiResponseProcessor} from "../apis/BillingApi";

export interface BillingApiAttachPaymentToProjectBillingAttachPaymentToProjectPostRequest {
    /**
     * 
     * @type BodyAttachPaymentToProjectBillingAttachPaymentToProjectPost
     * @memberof BillingApiattachPaymentToProjectBillingAttachPaymentToProjectPost
     */
    bodyAttachPaymentToProjectBillingAttachPaymentToProjectPost: BodyAttachPaymentToProjectBillingAttachPaymentToProjectPost
    /**
     * 
     * @type string
     * @memberof BillingApiattachPaymentToProjectBillingAttachPaymentToProjectPost
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof BillingApiattachPaymentToProjectBillingAttachPaymentToProjectPost
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof BillingApiattachPaymentToProjectBillingAttachPaymentToProjectPost
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof BillingApiattachPaymentToProjectBillingAttachPaymentToProjectPost
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof BillingApiattachPaymentToProjectBillingAttachPaymentToProjectPost
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof BillingApiattachPaymentToProjectBillingAttachPaymentToProjectPost
     */
    ehelplyData?: string
}

export interface BillingApiAttachPaymentToProjectBillingAttachPaymentToProjectPost0Request {
    /**
     * 
     * @type BodyAttachPaymentToProjectBillingAttachPaymentToProjectPost
     * @memberof BillingApiattachPaymentToProjectBillingAttachPaymentToProjectPost_1
     */
    bodyAttachPaymentToProjectBillingAttachPaymentToProjectPost: BodyAttachPaymentToProjectBillingAttachPaymentToProjectPost
    /**
     * 
     * @type string
     * @memberof BillingApiattachPaymentToProjectBillingAttachPaymentToProjectPost_1
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof BillingApiattachPaymentToProjectBillingAttachPaymentToProjectPost_1
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof BillingApiattachPaymentToProjectBillingAttachPaymentToProjectPost_1
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof BillingApiattachPaymentToProjectBillingAttachPaymentToProjectPost_1
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof BillingApiattachPaymentToProjectBillingAttachPaymentToProjectPost_1
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof BillingApiattachPaymentToProjectBillingAttachPaymentToProjectPost_1
     */
    ehelplyData?: string
}

export interface BillingApiCreateBillingAccountBillingCreateBillingAccountPostRequest {
    /**
     * 
     * @type string
     * @memberof BillingApicreateBillingAccountBillingCreateBillingAccountPost
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof BillingApicreateBillingAccountBillingCreateBillingAccountPost
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof BillingApicreateBillingAccountBillingCreateBillingAccountPost
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof BillingApicreateBillingAccountBillingCreateBillingAccountPost
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof BillingApicreateBillingAccountBillingCreateBillingAccountPost
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof BillingApicreateBillingAccountBillingCreateBillingAccountPost
     */
    ehelplyData?: string
}

export interface BillingApiCreateBillingAccountBillingCreateBillingAccountPost0Request {
    /**
     * 
     * @type string
     * @memberof BillingApicreateBillingAccountBillingCreateBillingAccountPost_2
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof BillingApicreateBillingAccountBillingCreateBillingAccountPost_2
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof BillingApicreateBillingAccountBillingCreateBillingAccountPost_2
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof BillingApicreateBillingAccountBillingCreateBillingAccountPost_2
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof BillingApicreateBillingAccountBillingCreateBillingAccountPost_2
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof BillingApicreateBillingAccountBillingCreateBillingAccountPost_2
     */
    ehelplyData?: string
}

export interface BillingApiDeleteBillingAccountBillingDeleteBillingAccountDeleteRequest {
    /**
     * 
     * @type string
     * @memberof BillingApideleteBillingAccountBillingDeleteBillingAccountDelete
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof BillingApideleteBillingAccountBillingDeleteBillingAccountDelete
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof BillingApideleteBillingAccountBillingDeleteBillingAccountDelete
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof BillingApideleteBillingAccountBillingDeleteBillingAccountDelete
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof BillingApideleteBillingAccountBillingDeleteBillingAccountDelete
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof BillingApideleteBillingAccountBillingDeleteBillingAccountDelete
     */
    ehelplyData?: string
}

export interface BillingApiDeleteBillingAccountBillingDeleteBillingAccountDelete0Request {
    /**
     * 
     * @type string
     * @memberof BillingApideleteBillingAccountBillingDeleteBillingAccountDelete_3
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof BillingApideleteBillingAccountBillingDeleteBillingAccountDelete_3
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof BillingApideleteBillingAccountBillingDeleteBillingAccountDelete_3
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof BillingApideleteBillingAccountBillingDeleteBillingAccountDelete_3
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof BillingApideleteBillingAccountBillingDeleteBillingAccountDelete_3
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof BillingApideleteBillingAccountBillingDeleteBillingAccountDelete_3
     */
    ehelplyData?: string
}

export interface BillingApiGetClientSecretBillingRetrieveSecretGetRequest {
    /**
     * 
     * @type string
     * @memberof BillingApigetClientSecretBillingRetrieveSecretGet
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof BillingApigetClientSecretBillingRetrieveSecretGet
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof BillingApigetClientSecretBillingRetrieveSecretGet
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof BillingApigetClientSecretBillingRetrieveSecretGet
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof BillingApigetClientSecretBillingRetrieveSecretGet
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof BillingApigetClientSecretBillingRetrieveSecretGet
     */
    ehelplyData?: string
}

export interface BillingApiGetClientSecretBillingRetrieveSecretGet0Request {
    /**
     * 
     * @type string
     * @memberof BillingApigetClientSecretBillingRetrieveSecretGet_4
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof BillingApigetClientSecretBillingRetrieveSecretGet_4
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof BillingApigetClientSecretBillingRetrieveSecretGet_4
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof BillingApigetClientSecretBillingRetrieveSecretGet_4
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof BillingApigetClientSecretBillingRetrieveSecretGet_4
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof BillingApigetClientSecretBillingRetrieveSecretGet_4
     */
    ehelplyData?: string
}

export interface BillingApiHasPaymentBillingHasPaymentGetRequest {
    /**
     * 
     * @type string
     * @memberof BillingApihasPaymentBillingHasPaymentGet
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof BillingApihasPaymentBillingHasPaymentGet
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof BillingApihasPaymentBillingHasPaymentGet
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof BillingApihasPaymentBillingHasPaymentGet
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof BillingApihasPaymentBillingHasPaymentGet
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof BillingApihasPaymentBillingHasPaymentGet
     */
    ehelplyData?: string
}

export interface BillingApiHasPaymentBillingHasPaymentGet0Request {
    /**
     * 
     * @type string
     * @memberof BillingApihasPaymentBillingHasPaymentGet_5
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof BillingApihasPaymentBillingHasPaymentGet_5
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof BillingApihasPaymentBillingHasPaymentGet_5
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof BillingApihasPaymentBillingHasPaymentGet_5
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof BillingApihasPaymentBillingHasPaymentGet_5
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof BillingApihasPaymentBillingHasPaymentGet_5
     */
    ehelplyData?: string
}

export interface BillingApiProcessPaymentBillingProcessPaymentPostRequest {
    /**
     * 
     * @type BodyProcessPaymentBillingProcessPaymentPost
     * @memberof BillingApiprocessPaymentBillingProcessPaymentPost
     */
    bodyProcessPaymentBillingProcessPaymentPost: BodyProcessPaymentBillingProcessPaymentPost
    /**
     * 
     * @type string
     * @memberof BillingApiprocessPaymentBillingProcessPaymentPost
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof BillingApiprocessPaymentBillingProcessPaymentPost
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof BillingApiprocessPaymentBillingProcessPaymentPost
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof BillingApiprocessPaymentBillingProcessPaymentPost
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof BillingApiprocessPaymentBillingProcessPaymentPost
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof BillingApiprocessPaymentBillingProcessPaymentPost
     */
    ehelplyData?: string
}

export interface BillingApiProcessPaymentBillingProcessPaymentPost0Request {
    /**
     * 
     * @type BodyProcessPaymentBillingProcessPaymentPost
     * @memberof BillingApiprocessPaymentBillingProcessPaymentPost_6
     */
    bodyProcessPaymentBillingProcessPaymentPost: BodyProcessPaymentBillingProcessPaymentPost
    /**
     * 
     * @type string
     * @memberof BillingApiprocessPaymentBillingProcessPaymentPost_6
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof BillingApiprocessPaymentBillingProcessPaymentPost_6
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof BillingApiprocessPaymentBillingProcessPaymentPost_6
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof BillingApiprocessPaymentBillingProcessPaymentPost_6
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof BillingApiprocessPaymentBillingProcessPaymentPost_6
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof BillingApiprocessPaymentBillingProcessPaymentPost_6
     */
    ehelplyData?: string
}

export interface BillingApiReconcilePaymentMethodsBillingReconcilePaymentGetRequest {
    /**
     * 
     * @type string
     * @memberof BillingApireconcilePaymentMethodsBillingReconcilePaymentGet
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof BillingApireconcilePaymentMethodsBillingReconcilePaymentGet
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof BillingApireconcilePaymentMethodsBillingReconcilePaymentGet
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof BillingApireconcilePaymentMethodsBillingReconcilePaymentGet
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof BillingApireconcilePaymentMethodsBillingReconcilePaymentGet
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof BillingApireconcilePaymentMethodsBillingReconcilePaymentGet
     */
    ehelplyData?: string
}

export interface BillingApiRemovePaymentMethodBillingRemovePaymentMethodDeleteRequest {
    /**
     * 
     * @type string
     * @memberof BillingApiremovePaymentMethodBillingRemovePaymentMethodDelete
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof BillingApiremovePaymentMethodBillingRemovePaymentMethodDelete
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof BillingApiremovePaymentMethodBillingRemovePaymentMethodDelete
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof BillingApiremovePaymentMethodBillingRemovePaymentMethodDelete
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof BillingApiremovePaymentMethodBillingRemovePaymentMethodDelete
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof BillingApiremovePaymentMethodBillingRemovePaymentMethodDelete
     */
    ehelplyData?: string
}

export interface BillingApiRemovePaymentMethodBillingRemovePaymentMethodDelete0Request {
    /**
     * 
     * @type string
     * @memberof BillingApiremovePaymentMethodBillingRemovePaymentMethodDelete_7
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof BillingApiremovePaymentMethodBillingRemovePaymentMethodDelete_7
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof BillingApiremovePaymentMethodBillingRemovePaymentMethodDelete_7
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof BillingApiremovePaymentMethodBillingRemovePaymentMethodDelete_7
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof BillingApiremovePaymentMethodBillingRemovePaymentMethodDelete_7
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof BillingApiremovePaymentMethodBillingRemovePaymentMethodDelete_7
     */
    ehelplyData?: string
}

export interface BillingApiViewPaymentMethodBillingViewPaymentMethodGetRequest {
    /**
     * 
     * @type string
     * @memberof BillingApiviewPaymentMethodBillingViewPaymentMethodGet
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof BillingApiviewPaymentMethodBillingViewPaymentMethodGet
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof BillingApiviewPaymentMethodBillingViewPaymentMethodGet
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof BillingApiviewPaymentMethodBillingViewPaymentMethodGet
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof BillingApiviewPaymentMethodBillingViewPaymentMethodGet
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof BillingApiviewPaymentMethodBillingViewPaymentMethodGet
     */
    ehelplyData?: string
}

export interface BillingApiViewPaymentMethodBillingViewPaymentMethodGet0Request {
    /**
     * 
     * @type string
     * @memberof BillingApiviewPaymentMethodBillingViewPaymentMethodGet_8
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof BillingApiviewPaymentMethodBillingViewPaymentMethodGet_8
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof BillingApiviewPaymentMethodBillingViewPaymentMethodGet_8
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof BillingApiviewPaymentMethodBillingViewPaymentMethodGet_8
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof BillingApiviewPaymentMethodBillingViewPaymentMethodGet_8
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof BillingApiviewPaymentMethodBillingViewPaymentMethodGet_8
     */
    ehelplyData?: string
}

export class ObjectBillingApi {
    private api: ObservableBillingApi

    public constructor(configuration: Configuration, requestFactory?: BillingApiRequestFactory, responseProcessor?: BillingApiResponseProcessor) {
        this.api = new ObservableBillingApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Attach Payment To Project
     * @param param the request object
     */
    public attachPaymentToProjectBillingAttachPaymentToProjectPost(param: BillingApiAttachPaymentToProjectBillingAttachPaymentToProjectPostRequest, options?: Configuration): Promise<any> {
        return this.api.attachPaymentToProjectBillingAttachPaymentToProjectPost(param.bodyAttachPaymentToProjectBillingAttachPaymentToProjectPost, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Attach Payment To Project
     * @param param the request object
     */
    public attachPaymentToProjectBillingAttachPaymentToProjectPost_1(param: BillingApiAttachPaymentToProjectBillingAttachPaymentToProjectPost0Request, options?: Configuration): Promise<any> {
        return this.api.attachPaymentToProjectBillingAttachPaymentToProjectPost_1(param.bodyAttachPaymentToProjectBillingAttachPaymentToProjectPost, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Create Billing Account
     * @param param the request object
     */
    public createBillingAccountBillingCreateBillingAccountPost(param: BillingApiCreateBillingAccountBillingCreateBillingAccountPostRequest = {}, options?: Configuration): Promise<StripeAccountResponse> {
        return this.api.createBillingAccountBillingCreateBillingAccountPost(param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Create Billing Account
     * @param param the request object
     */
    public createBillingAccountBillingCreateBillingAccountPost_2(param: BillingApiCreateBillingAccountBillingCreateBillingAccountPost0Request = {}, options?: Configuration): Promise<StripeAccountResponse> {
        return this.api.createBillingAccountBillingCreateBillingAccountPost_2(param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Delete Billing Account
     * @param param the request object
     */
    public deleteBillingAccountBillingDeleteBillingAccountDelete(param: BillingApiDeleteBillingAccountBillingDeleteBillingAccountDeleteRequest = {}, options?: Configuration): Promise<any> {
        return this.api.deleteBillingAccountBillingDeleteBillingAccountDelete(param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Delete Billing Account
     * @param param the request object
     */
    public deleteBillingAccountBillingDeleteBillingAccountDelete_3(param: BillingApiDeleteBillingAccountBillingDeleteBillingAccountDelete0Request = {}, options?: Configuration): Promise<any> {
        return this.api.deleteBillingAccountBillingDeleteBillingAccountDelete_3(param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Get Client Secret
     * @param param the request object
     */
    public getClientSecretBillingRetrieveSecretGet(param: BillingApiGetClientSecretBillingRetrieveSecretGetRequest = {}, options?: Configuration): Promise<any> {
        return this.api.getClientSecretBillingRetrieveSecretGet(param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Get Client Secret
     * @param param the request object
     */
    public getClientSecretBillingRetrieveSecretGet_4(param: BillingApiGetClientSecretBillingRetrieveSecretGet0Request = {}, options?: Configuration): Promise<any> {
        return this.api.getClientSecretBillingRetrieveSecretGet_4(param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Has Payment
     * @param param the request object
     */
    public hasPaymentBillingHasPaymentGet(param: BillingApiHasPaymentBillingHasPaymentGetRequest = {}, options?: Configuration): Promise<any> {
        return this.api.hasPaymentBillingHasPaymentGet(param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Has Payment
     * @param param the request object
     */
    public hasPaymentBillingHasPaymentGet_5(param: BillingApiHasPaymentBillingHasPaymentGet0Request = {}, options?: Configuration): Promise<any> {
        return this.api.hasPaymentBillingHasPaymentGet_5(param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Process Payment
     * @param param the request object
     */
    public processPaymentBillingProcessPaymentPost(param: BillingApiProcessPaymentBillingProcessPaymentPostRequest, options?: Configuration): Promise<any> {
        return this.api.processPaymentBillingProcessPaymentPost(param.bodyProcessPaymentBillingProcessPaymentPost, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Process Payment
     * @param param the request object
     */
    public processPaymentBillingProcessPaymentPost_6(param: BillingApiProcessPaymentBillingProcessPaymentPost0Request, options?: Configuration): Promise<any> {
        return this.api.processPaymentBillingProcessPaymentPost_6(param.bodyProcessPaymentBillingProcessPaymentPost, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Reconcile Payment Methods
     * @param param the request object
     */
    public reconcilePaymentMethodsBillingReconcilePaymentGet(param: BillingApiReconcilePaymentMethodsBillingReconcilePaymentGetRequest = {}, options?: Configuration): Promise<boolean> {
        return this.api.reconcilePaymentMethodsBillingReconcilePaymentGet(param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Remove Payment Method
     * @param param the request object
     */
    public removePaymentMethodBillingRemovePaymentMethodDelete(param: BillingApiRemovePaymentMethodBillingRemovePaymentMethodDeleteRequest = {}, options?: Configuration): Promise<any> {
        return this.api.removePaymentMethodBillingRemovePaymentMethodDelete(param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Remove Payment Method
     * @param param the request object
     */
    public removePaymentMethodBillingRemovePaymentMethodDelete_7(param: BillingApiRemovePaymentMethodBillingRemovePaymentMethodDelete0Request = {}, options?: Configuration): Promise<any> {
        return this.api.removePaymentMethodBillingRemovePaymentMethodDelete_7(param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * View Payment Method
     * @param param the request object
     */
    public viewPaymentMethodBillingViewPaymentMethodGet(param: BillingApiViewPaymentMethodBillingViewPaymentMethodGetRequest = {}, options?: Configuration): Promise<Array<PaymentMethodResponse>> {
        return this.api.viewPaymentMethodBillingViewPaymentMethodGet(param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * View Payment Method
     * @param param the request object
     */
    public viewPaymentMethodBillingViewPaymentMethodGet_8(param: BillingApiViewPaymentMethodBillingViewPaymentMethodGet0Request = {}, options?: Configuration): Promise<Array<PaymentMethodResponse>> {
        return this.api.viewPaymentMethodBillingViewPaymentMethodGet_8(param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

}

import { ObservableCategoryApi } from "./ObservableAPI";
import { CategoryApiRequestFactory, CategoryApiResponseProcessor} from "../apis/CategoryApi";

export interface CategoryApiCreateCategoryPlacesCategoriesPostRequest {
    /**
     * 
     * @type CategoryBase
     * @memberof CategoryApicreateCategoryPlacesCategoriesPost
     */
    categoryBase: CategoryBase
    /**
     * 
     * @type string
     * @memberof CategoryApicreateCategoryPlacesCategoriesPost
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof CategoryApicreateCategoryPlacesCategoriesPost
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof CategoryApicreateCategoryPlacesCategoriesPost
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof CategoryApicreateCategoryPlacesCategoriesPost
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof CategoryApicreateCategoryPlacesCategoriesPost
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof CategoryApicreateCategoryPlacesCategoriesPost
     */
    ehelplyData?: string
}

export interface CategoryApiDeleteCategoryPlacesCategoriesCategoryUuidDeleteRequest {
    /**
     * 
     * @type string
     * @memberof CategoryApideleteCategoryPlacesCategoriesCategoryUuidDelete
     */
    categoryUuid: string
    /**
     * 
     * @type string
     * @memberof CategoryApideleteCategoryPlacesCategoriesCategoryUuidDelete
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof CategoryApideleteCategoryPlacesCategoriesCategoryUuidDelete
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof CategoryApideleteCategoryPlacesCategoriesCategoryUuidDelete
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof CategoryApideleteCategoryPlacesCategoriesCategoryUuidDelete
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof CategoryApideleteCategoryPlacesCategoriesCategoryUuidDelete
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof CategoryApideleteCategoryPlacesCategoriesCategoryUuidDelete
     */
    ehelplyData?: string
}

export interface CategoryApiGetCategoryPlacesCategoriesCategoryUuidGetRequest {
    /**
     * 
     * @type string
     * @memberof CategoryApigetCategoryPlacesCategoriesCategoryUuidGet
     */
    categoryUuid: string
    /**
     * 
     * @type boolean
     * @memberof CategoryApigetCategoryPlacesCategoriesCategoryUuidGet
     */
    withMeta?: boolean
    /**
     * 
     * @type string
     * @memberof CategoryApigetCategoryPlacesCategoriesCategoryUuidGet
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof CategoryApigetCategoryPlacesCategoriesCategoryUuidGet
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof CategoryApigetCategoryPlacesCategoriesCategoryUuidGet
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof CategoryApigetCategoryPlacesCategoriesCategoryUuidGet
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof CategoryApigetCategoryPlacesCategoriesCategoryUuidGet
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof CategoryApigetCategoryPlacesCategoriesCategoryUuidGet
     */
    ehelplyData?: string
}

export interface CategoryApiSearchCategoriesPlacesCategoriesGetRequest {
    /**
     * 
     * @type string
     * @memberof CategoryApisearchCategoriesPlacesCategoriesGet
     */
    projectUuid?: string
    /**
     * 
     * @type string
     * @memberof CategoryApisearchCategoriesPlacesCategoriesGet
     */
    name?: string
    /**
     * 
     * @type boolean
     * @memberof CategoryApisearchCategoriesPlacesCategoriesGet
     */
    withMeta?: boolean
    /**
     * 
     * @type number
     * @memberof CategoryApisearchCategoriesPlacesCategoriesGet
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof CategoryApisearchCategoriesPlacesCategoriesGet
     */
    pageSize?: number
    /**
     * 
     * @type string
     * @memberof CategoryApisearchCategoriesPlacesCategoriesGet
     */
    sortOn?: string
    /**
     * 
     * @type boolean
     * @memberof CategoryApisearchCategoriesPlacesCategoriesGet
     */
    sortDesc?: boolean
    /**
     * 
     * @type string
     * @memberof CategoryApisearchCategoriesPlacesCategoriesGet
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof CategoryApisearchCategoriesPlacesCategoriesGet
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof CategoryApisearchCategoriesPlacesCategoriesGet
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof CategoryApisearchCategoriesPlacesCategoriesGet
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof CategoryApisearchCategoriesPlacesCategoriesGet
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof CategoryApisearchCategoriesPlacesCategoriesGet
     */
    ehelplyData?: string
}

export interface CategoryApiUpdateCategoryPlacesCategoriesCategoryUuidPutRequest {
    /**
     * 
     * @type string
     * @memberof CategoryApiupdateCategoryPlacesCategoriesCategoryUuidPut
     */
    categoryUuid: string
    /**
     * 
     * @type CategoryBase
     * @memberof CategoryApiupdateCategoryPlacesCategoriesCategoryUuidPut
     */
    categoryBase: CategoryBase
    /**
     * 
     * @type string
     * @memberof CategoryApiupdateCategoryPlacesCategoriesCategoryUuidPut
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof CategoryApiupdateCategoryPlacesCategoriesCategoryUuidPut
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof CategoryApiupdateCategoryPlacesCategoriesCategoryUuidPut
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof CategoryApiupdateCategoryPlacesCategoriesCategoryUuidPut
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof CategoryApiupdateCategoryPlacesCategoriesCategoryUuidPut
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof CategoryApiupdateCategoryPlacesCategoriesCategoryUuidPut
     */
    ehelplyData?: string
}

export class ObjectCategoryApi {
    private api: ObservableCategoryApi

    public constructor(configuration: Configuration, requestFactory?: CategoryApiRequestFactory, responseProcessor?: CategoryApiResponseProcessor) {
        this.api = new ObservableCategoryApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a category
     * Create Category
     * @param param the request object
     */
    public createCategoryPlacesCategoriesPost(param: CategoryApiCreateCategoryPlacesCategoriesPostRequest, options?: Configuration): Promise<CategoryDb> {
        return this.api.createCategoryPlacesCategoriesPost(param.categoryBase, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Deletes the category with the given ID and returns True if successful
     * Delete Category
     * @param param the request object
     */
    public deleteCategoryPlacesCategoriesCategoryUuidDelete(param: CategoryApiDeleteCategoryPlacesCategoriesCategoryUuidDeleteRequest, options?: Configuration): Promise<any> {
        return this.api.deleteCategoryPlacesCategoriesCategoryUuidDelete(param.categoryUuid, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Gets the category information given the category ID
     * Get Category
     * @param param the request object
     */
    public getCategoryPlacesCategoriesCategoryUuidGet(param: CategoryApiGetCategoryPlacesCategoriesCategoryUuidGetRequest, options?: Configuration): Promise<CategoryBase> {
        return this.api.getCategoryPlacesCategoriesCategoryUuidGet(param.categoryUuid, param.withMeta, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * TODO Item return format: ``` {     uuid                                **type:** string     project_uuid                        **type:** string or None      name                                **type:** string or None      meta                                **type:** dict or None      created_at                          **type:** string or None      updated_at                          **type:** string or None      deleted_at                          **type:** string or None  } ```
     * Search Categories
     * @param param the request object
     */
    public searchCategoriesPlacesCategoriesGet(param: CategoryApiSearchCategoriesPlacesCategoriesGetRequest = {}, options?: Configuration): Promise<Page> {
        return this.api.searchCategoriesPlacesCategoriesGet(param.projectUuid, param.name, param.withMeta, param.page, param.pageSize, param.sortOn, param.sortDesc, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Update category with given info, only updating the fields supplied. Category Uuid must be sent however.
     * Update Category
     * @param param the request object
     */
    public updateCategoryPlacesCategoriesCategoryUuidPut(param: CategoryApiUpdateCategoryPlacesCategoriesCategoryUuidPutRequest, options?: Configuration): Promise<CategoryBase> {
        return this.api.updateCategoryPlacesCategoriesCategoryUuidPut(param.categoryUuid, param.categoryBase, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

}

import { ObservableCompaniesApi } from "./ObservableAPI";
import { CompaniesApiRequestFactory, CompaniesApiResponseProcessor} from "../apis/CompaniesApi";

export interface CompaniesApiCreateCompanyPlacesCompaniesPostRequest {
    /**
     * 
     * @type CompanyBase
     * @memberof CompaniesApicreateCompanyPlacesCompaniesPost
     */
    companyBase: CompanyBase
    /**
     * 
     * @type string
     * @memberof CompaniesApicreateCompanyPlacesCompaniesPost
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof CompaniesApicreateCompanyPlacesCompaniesPost
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof CompaniesApicreateCompanyPlacesCompaniesPost
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof CompaniesApicreateCompanyPlacesCompaniesPost
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof CompaniesApicreateCompanyPlacesCompaniesPost
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof CompaniesApicreateCompanyPlacesCompaniesPost
     */
    ehelplyData?: string
}

export interface CompaniesApiDeletePlacePlacesCompaniesCompanyUuidDeleteRequest {
    /**
     * 
     * @type string
     * @memberof CompaniesApideletePlacePlacesCompaniesCompanyUuidDelete
     */
    companyUuid: string
    /**
     * 
     * @type boolean
     * @memberof CompaniesApideletePlacePlacesCompaniesCompanyUuidDelete
     */
    softDelete?: boolean
    /**
     * 
     * @type string
     * @memberof CompaniesApideletePlacePlacesCompaniesCompanyUuidDelete
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof CompaniesApideletePlacePlacesCompaniesCompanyUuidDelete
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof CompaniesApideletePlacePlacesCompaniesCompanyUuidDelete
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof CompaniesApideletePlacePlacesCompaniesCompanyUuidDelete
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof CompaniesApideletePlacePlacesCompaniesCompanyUuidDelete
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof CompaniesApideletePlacePlacesCompaniesCompanyUuidDelete
     */
    ehelplyData?: string
}

export interface CompaniesApiGetCompanyPlacesCompaniesCompanyUuidGetRequest {
    /**
     * 
     * @type string
     * @memberof CompaniesApigetCompanyPlacesCompaniesCompanyUuidGet
     */
    companyUuid: string
    /**
     * 
     * @type boolean
     * @memberof CompaniesApigetCompanyPlacesCompaniesCompanyUuidGet
     */
    withMeta?: boolean
    /**
     * 
     * @type boolean
     * @memberof CompaniesApigetCompanyPlacesCompaniesCompanyUuidGet
     */
    withCatalog?: boolean
    /**
     * 
     * @type boolean
     * @memberof CompaniesApigetCompanyPlacesCompaniesCompanyUuidGet
     */
    withReviews?: boolean
    /**
     * 
     * @type boolean
     * @memberof CompaniesApigetCompanyPlacesCompaniesCompanyUuidGet
     */
    withSchedule?: boolean
    /**
     * 
     * @type boolean
     * @memberof CompaniesApigetCompanyPlacesCompaniesCompanyUuidGet
     */
    withBlog?: boolean
    /**
     * 
     * @type boolean
     * @memberof CompaniesApigetCompanyPlacesCompaniesCompanyUuidGet
     */
    withTags?: boolean
    /**
     * 
     * @type boolean
     * @memberof CompaniesApigetCompanyPlacesCompaniesCompanyUuidGet
     */
    withCategories?: boolean
    /**
     * 
     * @type boolean
     * @memberof CompaniesApigetCompanyPlacesCompaniesCompanyUuidGet
     */
    withPlaces?: boolean
    /**
     * 
     * @type string
     * @memberof CompaniesApigetCompanyPlacesCompaniesCompanyUuidGet
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof CompaniesApigetCompanyPlacesCompaniesCompanyUuidGet
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof CompaniesApigetCompanyPlacesCompaniesCompanyUuidGet
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof CompaniesApigetCompanyPlacesCompaniesCompanyUuidGet
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof CompaniesApigetCompanyPlacesCompaniesCompanyUuidGet
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof CompaniesApigetCompanyPlacesCompaniesCompanyUuidGet
     */
    ehelplyData?: string
}

export interface CompaniesApiSearchCompaniesPlacesCompaniesGetRequest {
    /**
     * 
     * @type string
     * @memberof CompaniesApisearchCompaniesPlacesCompaniesGet
     */
    projectUuid?: string
    /**
     * 
     * @type string
     * @memberof CompaniesApisearchCompaniesPlacesCompaniesGet
     */
    name?: string
    /**
     * 
     * @type string
     * @memberof CompaniesApisearchCompaniesPlacesCompaniesGet
     */
    email?: string
    /**
     * 
     * @type boolean
     * @memberof CompaniesApisearchCompaniesPlacesCompaniesGet
     */
    isPublic?: boolean
    /**
     * 
     * @type boolean
     * @memberof CompaniesApisearchCompaniesPlacesCompaniesGet
     */
    isDeleted?: boolean
    /**
     * 
     * @type boolean
     * @memberof CompaniesApisearchCompaniesPlacesCompaniesGet
     */
    withPlaces?: boolean
    /**
     * 
     * @type boolean
     * @memberof CompaniesApisearchCompaniesPlacesCompaniesGet
     */
    withMeta?: boolean
    /**
     * 
     * @type boolean
     * @memberof CompaniesApisearchCompaniesPlacesCompaniesGet
     */
    withCatalog?: boolean
    /**
     * 
     * @type boolean
     * @memberof CompaniesApisearchCompaniesPlacesCompaniesGet
     */
    withReviews?: boolean
    /**
     * 
     * @type boolean
     * @memberof CompaniesApisearchCompaniesPlacesCompaniesGet
     */
    withSchedule?: boolean
    /**
     * 
     * @type boolean
     * @memberof CompaniesApisearchCompaniesPlacesCompaniesGet
     */
    withBlog?: boolean
    /**
     * 
     * @type boolean
     * @memberof CompaniesApisearchCompaniesPlacesCompaniesGet
     */
    withTags?: boolean
    /**
     * 
     * @type boolean
     * @memberof CompaniesApisearchCompaniesPlacesCompaniesGet
     */
    withCategories?: boolean
    /**
     * 
     * @type number
     * @memberof CompaniesApisearchCompaniesPlacesCompaniesGet
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof CompaniesApisearchCompaniesPlacesCompaniesGet
     */
    pageSize?: number
    /**
     * 
     * @type string
     * @memberof CompaniesApisearchCompaniesPlacesCompaniesGet
     */
    sortOn?: string
    /**
     * 
     * @type boolean
     * @memberof CompaniesApisearchCompaniesPlacesCompaniesGet
     */
    sortDesc?: boolean
    /**
     * 
     * @type string
     * @memberof CompaniesApisearchCompaniesPlacesCompaniesGet
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof CompaniesApisearchCompaniesPlacesCompaniesGet
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof CompaniesApisearchCompaniesPlacesCompaniesGet
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof CompaniesApisearchCompaniesPlacesCompaniesGet
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof CompaniesApisearchCompaniesPlacesCompaniesGet
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof CompaniesApisearchCompaniesPlacesCompaniesGet
     */
    ehelplyData?: string
}

export interface CompaniesApiUpdateCompanyPlacesCompaniesCompanyUuidPutRequest {
    /**
     * 
     * @type string
     * @memberof CompaniesApiupdateCompanyPlacesCompaniesCompanyUuidPut
     */
    companyUuid: string
    /**
     * 
     * @type CompanyBase
     * @memberof CompaniesApiupdateCompanyPlacesCompaniesCompanyUuidPut
     */
    companyBase: CompanyBase
    /**
     * 
     * @type string
     * @memberof CompaniesApiupdateCompanyPlacesCompaniesCompanyUuidPut
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof CompaniesApiupdateCompanyPlacesCompaniesCompanyUuidPut
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof CompaniesApiupdateCompanyPlacesCompaniesCompanyUuidPut
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof CompaniesApiupdateCompanyPlacesCompaniesCompanyUuidPut
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof CompaniesApiupdateCompanyPlacesCompaniesCompanyUuidPut
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof CompaniesApiupdateCompanyPlacesCompaniesCompanyUuidPut
     */
    ehelplyData?: string
}

export class ObjectCompaniesApi {
    private api: ObservableCompaniesApi

    public constructor(configuration: Configuration, requestFactory?: CompaniesApiRequestFactory, responseProcessor?: CompaniesApiResponseProcessor) {
        this.api = new ObservableCompaniesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a company
     * Create Company
     * @param param the request object
     */
    public createCompanyPlacesCompaniesPost(param: CompaniesApiCreateCompanyPlacesCompaniesPostRequest, options?: Configuration): Promise<CompanyResponse> {
        return this.api.createCompanyPlacesCompaniesPost(param.companyBase, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Deletes the company with the given ID and returns True if successful
     * Delete Place
     * @param param the request object
     */
    public deletePlacePlacesCompaniesCompanyUuidDelete(param: CompaniesApiDeletePlacePlacesCompaniesCompanyUuidDeleteRequest, options?: Configuration): Promise<any> {
        return this.api.deletePlacePlacesCompaniesCompanyUuidDelete(param.companyUuid, param.softDelete, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Gets the company information given the Place ID
     * Get Company
     * @param param the request object
     */
    public getCompanyPlacesCompaniesCompanyUuidGet(param: CompaniesApiGetCompanyPlacesCompaniesCompanyUuidGetRequest, options?: Configuration): Promise<CompanyResponse> {
        return this.api.getCompanyPlacesCompaniesCompanyUuidGet(param.companyUuid, param.withMeta, param.withCatalog, param.withReviews, param.withSchedule, param.withBlog, param.withTags, param.withCategories, param.withPlaces, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Search all companies and returns paginated results with Companies being stored in items field. Can search by `project_uuid, name, email` string fields or the `is_public and is_deleted` boolean fields. To search with these fields use query params with string values. For sorting fill out \"sort_desc\" field with either true/false and the \"sort_on\" query parameter with column you want to sort on (ex: name). Max pagination items per page is 50. Item return format: ``` {     uuid                                **type:** string     project_uuid                        **type:** string or None      meta_uuid                           **type:** string or None      catalog_data                        **type:** dict or None      review_group_data                   **type:** dict or None      schedule_data                       **type:** dict or None      blog_data                           **type:** dict or None      tags                                **type:** [TagBase] or None      categories                          **type:** [CategoryBase] or None      places                              **type:** PlaceBase or None      created_at                          **type:** string or None      updated_at                          **type:** string or None      deleted_at                          **type:** string or None  } ```
     * Search Companies
     * @param param the request object
     */
    public searchCompaniesPlacesCompaniesGet(param: CompaniesApiSearchCompaniesPlacesCompaniesGetRequest = {}, options?: Configuration): Promise<Page> {
        return this.api.searchCompaniesPlacesCompaniesGet(param.projectUuid, param.name, param.email, param.isPublic, param.isDeleted, param.withPlaces, param.withMeta, param.withCatalog, param.withReviews, param.withSchedule, param.withBlog, param.withTags, param.withCategories, param.page, param.pageSize, param.sortOn, param.sortDesc, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Update company with given info, only updating the fields supplied. Company Uuid must be sent however.
     * Update Company
     * @param param the request object
     */
    public updateCompanyPlacesCompaniesCompanyUuidPut(param: CompaniesApiUpdateCompanyPlacesCompaniesCompanyUuidPutRequest, options?: Configuration): Promise<CompanyResponse> {
        return this.api.updateCompanyPlacesCompaniesCompanyUuidPut(param.companyUuid, param.companyBase, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

}

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiAttachProductToCatalogRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApiattachProductToCatalog
     */
    catalogUuid: string
    /**
     * 
     * @type string
     * @memberof DefaultApiattachProductToCatalog
     */
    productUuid: string
    /**
     * 
     * @type string
     * @memberof DefaultApiattachProductToCatalog
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof DefaultApiattachProductToCatalog
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof DefaultApiattachProductToCatalog
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof DefaultApiattachProductToCatalog
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof DefaultApiattachProductToCatalog
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof DefaultApiattachProductToCatalog
     */
    ehelplyData?: string
}

export interface DefaultApiCreateCatalogRequest {
    /**
     * 
     * @type CatalogBase
     * @memberof DefaultApicreateCatalog
     */
    catalogBase: CatalogBase
    /**
     * 
     * @type string
     * @memberof DefaultApicreateCatalog
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof DefaultApicreateCatalog
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof DefaultApicreateCatalog
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof DefaultApicreateCatalog
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof DefaultApicreateCatalog
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof DefaultApicreateCatalog
     */
    ehelplyData?: string
}

export interface DefaultApiCreateProductRequest {
    /**
     * 
     * @type ProductBase
     * @memberof DefaultApicreateProduct
     */
    productBase: ProductBase
    /**
     * 
     * @type string
     * @memberof DefaultApicreateProduct
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof DefaultApicreateProduct
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof DefaultApicreateProduct
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof DefaultApicreateProduct
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof DefaultApicreateProduct
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof DefaultApicreateProduct
     */
    ehelplyData?: string
}

export interface DefaultApiCreateReviewRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApicreateReview
     */
    entityType: string
    /**
     * 
     * @type string
     * @memberof DefaultApicreateReview
     */
    entityUuid: string
    /**
     * 
     * @type CreateReview
     * @memberof DefaultApicreateReview
     */
    createReview: CreateReview
    /**
     * 
     * @type string
     * @memberof DefaultApicreateReview
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof DefaultApicreateReview
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof DefaultApicreateReview
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof DefaultApicreateReview
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof DefaultApicreateReview
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof DefaultApicreateReview
     */
    ehelplyData?: string
}

export interface DefaultApiDeleteCatalogRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApideleteCatalog
     */
    catalogUuid: string
    /**
     * 
     * @type string
     * @memberof DefaultApideleteCatalog
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof DefaultApideleteCatalog
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof DefaultApideleteCatalog
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof DefaultApideleteCatalog
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof DefaultApideleteCatalog
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof DefaultApideleteCatalog
     */
    ehelplyData?: string
}

export interface DefaultApiDeleteProductRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApideleteProduct
     */
    productUuid: string
    /**
     * 
     * @type string
     * @memberof DefaultApideleteProduct
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof DefaultApideleteProduct
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof DefaultApideleteProduct
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof DefaultApideleteProduct
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof DefaultApideleteProduct
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof DefaultApideleteProduct
     */
    ehelplyData?: string
}

export interface DefaultApiDeleteReviewRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApideleteReview
     */
    entityType: string
    /**
     * 
     * @type string
     * @memberof DefaultApideleteReview
     */
    entityUuid: string
    /**
     * 
     * @type string
     * @memberof DefaultApideleteReview
     */
    reviewUuid: string
    /**
     * 
     * @type string
     * @memberof DefaultApideleteReview
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof DefaultApideleteReview
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof DefaultApideleteReview
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof DefaultApideleteReview
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof DefaultApideleteReview
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof DefaultApideleteReview
     */
    ehelplyData?: string
}

export interface DefaultApiDetachProductFromCatalogRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApidetachProductFromCatalog
     */
    catalogUuid: string
    /**
     * 
     * @type string
     * @memberof DefaultApidetachProductFromCatalog
     */
    productUuid: string
    /**
     * 
     * @type string
     * @memberof DefaultApidetachProductFromCatalog
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof DefaultApidetachProductFromCatalog
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof DefaultApidetachProductFromCatalog
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof DefaultApidetachProductFromCatalog
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof DefaultApidetachProductFromCatalog
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof DefaultApidetachProductFromCatalog
     */
    ehelplyData?: string
}

export interface DefaultApiGetCatalogRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetCatalog
     */
    catalogUuid: string
    /**
     * 
     * @type boolean
     * @memberof DefaultApigetCatalog
     */
    withMeta?: boolean
    /**
     * 
     * @type string
     * @memberof DefaultApigetCatalog
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof DefaultApigetCatalog
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof DefaultApigetCatalog
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof DefaultApigetCatalog
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof DefaultApigetCatalog
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof DefaultApigetCatalog
     */
    ehelplyData?: string
}

export interface DefaultApiGetProductRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetProduct
     */
    productUuid: string
    /**
     * 
     * @type boolean
     * @memberof DefaultApigetProduct
     */
    withAddons?: boolean
    /**
     * 
     * @type boolean
     * @memberof DefaultApigetProduct
     */
    withMeta?: boolean
    /**
     * 
     * @type string
     * @memberof DefaultApigetProduct
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof DefaultApigetProduct
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof DefaultApigetProduct
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof DefaultApigetProduct
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof DefaultApigetProduct
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof DefaultApigetProduct
     */
    ehelplyData?: string
}

export interface DefaultApiGetReviewRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetReview
     */
    entityType: string
    /**
     * 
     * @type string
     * @memberof DefaultApigetReview
     */
    entityUuid: string
    /**
     * 
     * @type string
     * @memberof DefaultApigetReview
     */
    reviewUuid: string
    /**
     * 
     * @type string
     * @memberof DefaultApigetReview
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof DefaultApigetReview
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof DefaultApigetReview
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof DefaultApigetReview
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof DefaultApigetReview
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof DefaultApigetReview
     */
    ehelplyData?: string
}

export interface DefaultApiSearchCatalogProductsRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApisearchCatalogProducts
     */
    catalogUuid: string
    /**
     * 
     * @type boolean
     * @memberof DefaultApisearchCatalogProducts
     */
    withMeta?: boolean
    /**
     * 
     * @type number
     * @memberof DefaultApisearchCatalogProducts
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof DefaultApisearchCatalogProducts
     */
    pageSize?: number
    /**
     * 
     * @type string
     * @memberof DefaultApisearchCatalogProducts
     */
    sortOn?: string
    /**
     * 
     * @type boolean
     * @memberof DefaultApisearchCatalogProducts
     */
    sortDesc?: boolean
    /**
     * 
     * @type string
     * @memberof DefaultApisearchCatalogProducts
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof DefaultApisearchCatalogProducts
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof DefaultApisearchCatalogProducts
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof DefaultApisearchCatalogProducts
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof DefaultApisearchCatalogProducts
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof DefaultApisearchCatalogProducts
     */
    ehelplyData?: string
}

export interface DefaultApiSearchCatalogsRequest {
    /**
     * 
     * @type boolean
     * @memberof DefaultApisearchCatalogs
     */
    withMeta?: boolean
    /**
     * 
     * @type string
     * @memberof DefaultApisearchCatalogs
     */
    name?: string
    /**
     * 
     * @type number
     * @memberof DefaultApisearchCatalogs
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof DefaultApisearchCatalogs
     */
    pageSize?: number
    /**
     * 
     * @type string
     * @memberof DefaultApisearchCatalogs
     */
    sortOn?: string
    /**
     * 
     * @type boolean
     * @memberof DefaultApisearchCatalogs
     */
    sortDesc?: boolean
    /**
     * 
     * @type string
     * @memberof DefaultApisearchCatalogs
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof DefaultApisearchCatalogs
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof DefaultApisearchCatalogs
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof DefaultApisearchCatalogs
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof DefaultApisearchCatalogs
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof DefaultApisearchCatalogs
     */
    ehelplyData?: string
}

export interface DefaultApiSearchProductRequest {
    /**
     * 
     * @type boolean
     * @memberof DefaultApisearchProduct
     */
    withMeta?: boolean
    /**
     * 
     * @type string
     * @memberof DefaultApisearchProduct
     */
    name?: string
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof DefaultApisearchProduct
     */
    addons?: Array<string>
    /**
     * 
     * @type number
     * @memberof DefaultApisearchProduct
     */
    priceMax?: number
    /**
     * 
     * @type number
     * @memberof DefaultApisearchProduct
     */
    priceMin?: number
    /**
     * 
     * @type boolean
     * @memberof DefaultApisearchProduct
     */
    quantityAvailable?: boolean
    /**
     * 
     * @type boolean
     * @memberof DefaultApisearchProduct
     */
    isDeleted?: boolean
    /**
     * 
     * @type number
     * @memberof DefaultApisearchProduct
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof DefaultApisearchProduct
     */
    pageSize?: number
    /**
     * 
     * @type string
     * @memberof DefaultApisearchProduct
     */
    sortOn?: string
    /**
     * 
     * @type boolean
     * @memberof DefaultApisearchProduct
     */
    sortDesc?: boolean
    /**
     * 
     * @type string
     * @memberof DefaultApisearchProduct
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof DefaultApisearchProduct
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof DefaultApisearchProduct
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof DefaultApisearchProduct
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof DefaultApisearchProduct
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof DefaultApisearchProduct
     */
    ehelplyData?: string
}

export interface DefaultApiSearchProductCatalogRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApisearchProductCatalog
     */
    productUuid: string
    /**
     * 
     * @type boolean
     * @memberof DefaultApisearchProductCatalog
     */
    withMeta?: boolean
    /**
     * 
     * @type number
     * @memberof DefaultApisearchProductCatalog
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof DefaultApisearchProductCatalog
     */
    pageSize?: number
    /**
     * 
     * @type string
     * @memberof DefaultApisearchProductCatalog
     */
    sortOn?: string
    /**
     * 
     * @type boolean
     * @memberof DefaultApisearchProductCatalog
     */
    sortDesc?: boolean
    /**
     * 
     * @type string
     * @memberof DefaultApisearchProductCatalog
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof DefaultApisearchProductCatalog
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof DefaultApisearchProductCatalog
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof DefaultApisearchProductCatalog
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof DefaultApisearchProductCatalog
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof DefaultApisearchProductCatalog
     */
    ehelplyData?: string
}

export interface DefaultApiSearchReviewsRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApisearchReviews
     */
    entityType: string
    /**
     * 
     * @type string
     * @memberof DefaultApisearchReviews
     */
    entityUuid: string
    /**
     * 
     * @type string
     * @memberof DefaultApisearchReviews
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof DefaultApisearchReviews
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof DefaultApisearchReviews
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof DefaultApisearchReviews
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof DefaultApisearchReviews
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof DefaultApisearchReviews
     */
    ehelplyData?: string
}

export interface DefaultApiUpdateCatalogRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApiupdateCatalog
     */
    catalogUuid: string
    /**
     * 
     * @type CatalogBase
     * @memberof DefaultApiupdateCatalog
     */
    catalogBase: CatalogBase
    /**
     * 
     * @type string
     * @memberof DefaultApiupdateCatalog
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof DefaultApiupdateCatalog
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof DefaultApiupdateCatalog
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof DefaultApiupdateCatalog
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof DefaultApiupdateCatalog
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof DefaultApiupdateCatalog
     */
    ehelplyData?: string
}

export interface DefaultApiUpdateProductRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApiupdateProduct
     */
    productUuid: string
    /**
     * 
     * @type ProductBase
     * @memberof DefaultApiupdateProduct
     */
    productBase: ProductBase
    /**
     * 
     * @type string
     * @memberof DefaultApiupdateProduct
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof DefaultApiupdateProduct
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof DefaultApiupdateProduct
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof DefaultApiupdateProduct
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof DefaultApiupdateProduct
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof DefaultApiupdateProduct
     */
    ehelplyData?: string
}

export interface DefaultApiUpdateReviewRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApiupdateReview
     */
    entityType: string
    /**
     * 
     * @type string
     * @memberof DefaultApiupdateReview
     */
    entityUuid: string
    /**
     * 
     * @type string
     * @memberof DefaultApiupdateReview
     */
    reviewUuid: string
    /**
     * 
     * @type UpdateReview
     * @memberof DefaultApiupdateReview
     */
    updateReview: UpdateReview
    /**
     * 
     * @type string
     * @memberof DefaultApiupdateReview
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof DefaultApiupdateReview
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof DefaultApiupdateReview
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof DefaultApiupdateReview
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof DefaultApiupdateReview
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof DefaultApiupdateReview
     */
    ehelplyData?: string
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Attach Product To Catalog
     * @param param the request object
     */
    public attachProductToCatalog(param: DefaultApiAttachProductToCatalogRequest, options?: Configuration): Promise<any> {
        return this.api.attachProductToCatalog(param.catalogUuid, param.productUuid, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Create Catalog
     * @param param the request object
     */
    public createCatalog(param: DefaultApiCreateCatalogRequest, options?: Configuration): Promise<CatalogReturn> {
        return this.api.createCatalog(param.catalogBase, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Create Product
     * @param param the request object
     */
    public createProduct(param: DefaultApiCreateProductRequest, options?: Configuration): Promise<ProductReturn> {
        return this.api.createProduct(param.productBase, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Create Review
     * @param param the request object
     */
    public createReview(param: DefaultApiCreateReviewRequest, options?: Configuration): Promise<any> {
        return this.api.createReview(param.entityType, param.entityUuid, param.createReview, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Delete Catalog
     * @param param the request object
     */
    public deleteCatalog(param: DefaultApiDeleteCatalogRequest, options?: Configuration): Promise<boolean> {
        return this.api.deleteCatalog(param.catalogUuid, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Delete Product
     * @param param the request object
     */
    public deleteProduct(param: DefaultApiDeleteProductRequest, options?: Configuration): Promise<boolean> {
        return this.api.deleteProduct(param.productUuid, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Delete Review
     * @param param the request object
     */
    public deleteReview(param: DefaultApiDeleteReviewRequest, options?: Configuration): Promise<any> {
        return this.api.deleteReview(param.entityType, param.entityUuid, param.reviewUuid, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Detach Product From Catalog
     * @param param the request object
     */
    public detachProductFromCatalog(param: DefaultApiDetachProductFromCatalogRequest, options?: Configuration): Promise<any> {
        return this.api.detachProductFromCatalog(param.catalogUuid, param.productUuid, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Get Catalog
     * @param param the request object
     */
    public getCatalog(param: DefaultApiGetCatalogRequest, options?: Configuration): Promise<CatalogReturn> {
        return this.api.getCatalog(param.catalogUuid, param.withMeta, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Get Product
     * @param param the request object
     */
    public getProduct(param: DefaultApiGetProductRequest, options?: Configuration): Promise<ProductReturn> {
        return this.api.getProduct(param.productUuid, param.withAddons, param.withMeta, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Get Review
     * @param param the request object
     */
    public getReview(param: DefaultApiGetReviewRequest, options?: Configuration): Promise<any> {
        return this.api.getReview(param.entityType, param.entityUuid, param.reviewUuid, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Search Catalog Products
     * @param param the request object
     */
    public searchCatalogProducts(param: DefaultApiSearchCatalogProductsRequest, options?: Configuration): Promise<Page> {
        return this.api.searchCatalogProducts(param.catalogUuid, param.withMeta, param.page, param.pageSize, param.sortOn, param.sortDesc, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Search Catalogs
     * @param param the request object
     */
    public searchCatalogs(param: DefaultApiSearchCatalogsRequest = {}, options?: Configuration): Promise<Page> {
        return this.api.searchCatalogs(param.withMeta, param.name, param.page, param.pageSize, param.sortOn, param.sortDesc, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Search Products
     * @param param the request object
     */
    public searchProduct(param: DefaultApiSearchProductRequest = {}, options?: Configuration): Promise<Page> {
        return this.api.searchProduct(param.withMeta, param.name, param.addons, param.priceMax, param.priceMin, param.quantityAvailable, param.isDeleted, param.page, param.pageSize, param.sortOn, param.sortDesc, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Search Product Catalogs
     * @param param the request object
     */
    public searchProductCatalog(param: DefaultApiSearchProductCatalogRequest, options?: Configuration): Promise<Page> {
        return this.api.searchProductCatalog(param.productUuid, param.withMeta, param.page, param.pageSize, param.sortOn, param.sortDesc, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Search Review
     * @param param the request object
     */
    public searchReviews(param: DefaultApiSearchReviewsRequest, options?: Configuration): Promise<any> {
        return this.api.searchReviews(param.entityType, param.entityUuid, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Update Catalog
     * @param param the request object
     */
    public updateCatalog(param: DefaultApiUpdateCatalogRequest, options?: Configuration): Promise<CatalogReturn> {
        return this.api.updateCatalog(param.catalogUuid, param.catalogBase, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Update Product
     * @param param the request object
     */
    public updateProduct(param: DefaultApiUpdateProductRequest, options?: Configuration): Promise<ProductReturn> {
        return this.api.updateProduct(param.productUuid, param.productBase, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Update Review
     * @param param the request object
     */
    public updateReview(param: DefaultApiUpdateReviewRequest, options?: Configuration): Promise<any> {
        return this.api.updateReview(param.entityType, param.entityUuid, param.reviewUuid, param.updateReview, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

}

import { ObservableLoggingApi } from "./ObservableAPI";
import { LoggingApiRequestFactory, LoggingApiResponseProcessor} from "../apis/LoggingApi";

export interface LoggingApiGetLogsLoggingLogsGetRequest {
    /**
     * 
     * @type string
     * @memberof LoggingApigetLogsLoggingLogsGet
     */
    service?: string
    /**
     * 
     * @type string
     * @memberof LoggingApigetLogsLoggingLogsGet
     */
    dateStart?: string
    /**
     * 
     * @type string
     * @memberof LoggingApigetLogsLoggingLogsGet
     */
    dateEnd?: string
    /**
     * 
     * @type boolean
     * @memberof LoggingApigetLogsLoggingLogsGet
     */
    desc?: boolean
    /**
     * 
     * @type string
     * @memberof LoggingApigetLogsLoggingLogsGet
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof LoggingApigetLogsLoggingLogsGet
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof LoggingApigetLogsLoggingLogsGet
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof LoggingApigetLogsLoggingLogsGet
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof LoggingApigetLogsLoggingLogsGet
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof LoggingApigetLogsLoggingLogsGet
     */
    ehelplyData?: string
}

export interface LoggingApiGetServiceLogsLoggingLogsServicesServiceGetRequest {
    /**
     * 
     * @type string
     * @memberof LoggingApigetServiceLogsLoggingLogsServicesServiceGet
     */
    service: string
    /**
     * 
     * @type string
     * @memberof LoggingApigetServiceLogsLoggingLogsServicesServiceGet
     */
    dateStart?: string
    /**
     * 
     * @type string
     * @memberof LoggingApigetServiceLogsLoggingLogsServicesServiceGet
     */
    dateEnd?: string
    /**
     * 
     * @type boolean
     * @memberof LoggingApigetServiceLogsLoggingLogsServicesServiceGet
     */
    desc?: boolean
    /**
     * 
     * @type number
     * @memberof LoggingApigetServiceLogsLoggingLogsServicesServiceGet
     */
    limit?: number
    /**
     * 
     * @type string
     * @memberof LoggingApigetServiceLogsLoggingLogsServicesServiceGet
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof LoggingApigetServiceLogsLoggingLogsServicesServiceGet
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof LoggingApigetServiceLogsLoggingLogsServicesServiceGet
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof LoggingApigetServiceLogsLoggingLogsServicesServiceGet
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof LoggingApigetServiceLogsLoggingLogsServicesServiceGet
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof LoggingApigetServiceLogsLoggingLogsServicesServiceGet
     */
    ehelplyData?: string
}

export interface LoggingApiGetSubjectLogsLoggingLogsServicesServiceSubjectsSubjectGetRequest {
    /**
     * 
     * @type string
     * @memberof LoggingApigetSubjectLogsLoggingLogsServicesServiceSubjectsSubjectGet
     */
    service: string
    /**
     * 
     * @type string
     * @memberof LoggingApigetSubjectLogsLoggingLogsServicesServiceSubjectsSubjectGet
     */
    subject: string
    /**
     * 
     * @type string
     * @memberof LoggingApigetSubjectLogsLoggingLogsServicesServiceSubjectsSubjectGet
     */
    dateStart?: string
    /**
     * 
     * @type string
     * @memberof LoggingApigetSubjectLogsLoggingLogsServicesServiceSubjectsSubjectGet
     */
    dateEnd?: string
    /**
     * 
     * @type boolean
     * @memberof LoggingApigetSubjectLogsLoggingLogsServicesServiceSubjectsSubjectGet
     */
    desc?: boolean
    /**
     * 
     * @type number
     * @memberof LoggingApigetSubjectLogsLoggingLogsServicesServiceSubjectsSubjectGet
     */
    limit?: number
    /**
     * 
     * @type string
     * @memberof LoggingApigetSubjectLogsLoggingLogsServicesServiceSubjectsSubjectGet
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof LoggingApigetSubjectLogsLoggingLogsServicesServiceSubjectsSubjectGet
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof LoggingApigetSubjectLogsLoggingLogsServicesServiceSubjectsSubjectGet
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof LoggingApigetSubjectLogsLoggingLogsServicesServiceSubjectsSubjectGet
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof LoggingApigetSubjectLogsLoggingLogsServicesServiceSubjectsSubjectGet
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof LoggingApigetSubjectLogsLoggingLogsServicesServiceSubjectsSubjectGet
     */
    ehelplyData?: string
}

export class ObjectLoggingApi {
    private api: ObservableLoggingApi

    public constructor(configuration: Configuration, requestFactory?: LoggingApiRequestFactory, responseProcessor?: LoggingApiResponseProcessor) {
        this.api = new ObservableLoggingApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get Logs
     * @param param the request object
     */
    public getLogsLoggingLogsGet(param: LoggingApiGetLogsLoggingLogsGetRequest = {}, options?: Configuration): Promise<any> {
        return this.api.getLogsLoggingLogsGet(param.service, param.dateStart, param.dateEnd, param.desc, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Get Service Logs
     * @param param the request object
     */
    public getServiceLogsLoggingLogsServicesServiceGet(param: LoggingApiGetServiceLogsLoggingLogsServicesServiceGetRequest, options?: Configuration): Promise<any> {
        return this.api.getServiceLogsLoggingLogsServicesServiceGet(param.service, param.dateStart, param.dateEnd, param.desc, param.limit, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Get Subject Logs
     * @param param the request object
     */
    public getSubjectLogsLoggingLogsServicesServiceSubjectsSubjectGet(param: LoggingApiGetSubjectLogsLoggingLogsServicesServiceSubjectsSubjectGetRequest, options?: Configuration): Promise<any> {
        return this.api.getSubjectLogsLoggingLogsServicesServiceSubjectsSubjectGet(param.service, param.subject, param.dateStart, param.dateEnd, param.desc, param.limit, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

}

import { ObservableMetaApi } from "./ObservableAPI";
import { MetaApiRequestFactory, MetaApiResponseProcessor} from "../apis/MetaApi";

export interface MetaApiCreateFieldRequest {
    /**
     * 
     * @type Field
     * @memberof MetaApicreateField
     */
    field: Field
    /**
     * 
     * @type string
     * @memberof MetaApicreateField
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof MetaApicreateField
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof MetaApicreateField
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof MetaApicreateField
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof MetaApicreateField
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof MetaApicreateField
     */
    ehelplyData?: string
}

export interface MetaApiCreateMetaRequest {
    /**
     * 
     * @type string
     * @memberof MetaApicreateMeta
     */
    service: string
    /**
     * 
     * @type string
     * @memberof MetaApicreateMeta
     */
    typeStr: string
    /**
     * 
     * @type string
     * @memberof MetaApicreateMeta
     */
    entityUuid: string
    /**
     * 
     * @type MetaCreate
     * @memberof MetaApicreateMeta
     */
    metaCreate: MetaCreate
    /**
     * 
     * @type string
     * @memberof MetaApicreateMeta
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof MetaApicreateMeta
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof MetaApicreateMeta
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof MetaApicreateMeta
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof MetaApicreateMeta
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof MetaApicreateMeta
     */
    ehelplyData?: string
}

export interface MetaApiDeleteFieldRequest {
    /**
     * 
     * @type string
     * @memberof MetaApideleteField
     */
    fieldUuid: string
    /**
     * 
     * @type boolean
     * @memberof MetaApideleteField
     */
    softDelete?: boolean
    /**
     * 
     * @type string
     * @memberof MetaApideleteField
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof MetaApideleteField
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof MetaApideleteField
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof MetaApideleteField
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof MetaApideleteField
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof MetaApideleteField
     */
    ehelplyData?: string
}

export interface MetaApiDeleteMetaRequest {
    /**
     * 
     * @type string
     * @memberof MetaApideleteMeta
     */
    service: string
    /**
     * 
     * @type string
     * @memberof MetaApideleteMeta
     */
    typeStr: string
    /**
     * 
     * @type string
     * @memberof MetaApideleteMeta
     */
    entityUuid: string
    /**
     * 
     * @type string
     * @memberof MetaApideleteMeta
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof MetaApideleteMeta
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof MetaApideleteMeta
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof MetaApideleteMeta
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof MetaApideleteMeta
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof MetaApideleteMeta
     */
    ehelplyData?: string
}

export interface MetaApiDeleteMetaFromUuidRequest {
    /**
     * 
     * @type string
     * @memberof MetaApideleteMetaFromUuid
     */
    metaUuid: string
    /**
     * 
     * @type string
     * @memberof MetaApideleteMetaFromUuid
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof MetaApideleteMetaFromUuid
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof MetaApideleteMetaFromUuid
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof MetaApideleteMetaFromUuid
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof MetaApideleteMetaFromUuid
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof MetaApideleteMetaFromUuid
     */
    ehelplyData?: string
}

export interface MetaApiGetFieldRequest {
    /**
     * 
     * @type string
     * @memberof MetaApigetField
     */
    fieldUuid: string
    /**
     * 
     * @type string
     * @memberof MetaApigetField
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof MetaApigetField
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof MetaApigetField
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof MetaApigetField
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof MetaApigetField
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof MetaApigetField
     */
    ehelplyData?: string
}

export interface MetaApiGetMetaRequest {
    /**
     * 
     * @type string
     * @memberof MetaApigetMeta
     */
    service: string
    /**
     * 
     * @type string
     * @memberof MetaApigetMeta
     */
    typeStr: string
    /**
     * 
     * @type string
     * @memberof MetaApigetMeta
     */
    entityUuid: string
    /**
     * 
     * @type boolean
     * @memberof MetaApigetMeta
     */
    detailed?: boolean
    /**
     * 
     * @type boolean
     * @memberof MetaApigetMeta
     */
    custom?: boolean
    /**
     * 
     * @type boolean
     * @memberof MetaApigetMeta
     */
    dates?: boolean
    /**
     * 
     * @type number
     * @memberof MetaApigetMeta
     */
    history?: number
    /**
     * 
     * @type string
     * @memberof MetaApigetMeta
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof MetaApigetMeta
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof MetaApigetMeta
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof MetaApigetMeta
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof MetaApigetMeta
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof MetaApigetMeta
     */
    ehelplyData?: string
}

export interface MetaApiGetMetaFromUuidRequest {
    /**
     * 
     * @type string
     * @memberof MetaApigetMetaFromUuid
     */
    metaUuid: string
    /**
     * 
     * @type boolean
     * @memberof MetaApigetMetaFromUuid
     */
    detailed?: boolean
    /**
     * 
     * @type boolean
     * @memberof MetaApigetMetaFromUuid
     */
    custom?: boolean
    /**
     * 
     * @type boolean
     * @memberof MetaApigetMetaFromUuid
     */
    dates?: boolean
    /**
     * 
     * @type number
     * @memberof MetaApigetMetaFromUuid
     */
    history?: number
    /**
     * 
     * @type string
     * @memberof MetaApigetMetaFromUuid
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof MetaApigetMetaFromUuid
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof MetaApigetMetaFromUuid
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof MetaApigetMetaFromUuid
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof MetaApigetMetaFromUuid
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof MetaApigetMetaFromUuid
     */
    ehelplyData?: string
}

export interface MetaApiMakeSlugRequest {
    /**
     * 
     * @type MetaSlugger
     * @memberof MetaApimakeSlug
     */
    metaSlugger: MetaSlugger
}

export interface MetaApiTouchMetaRequest {
    /**
     * 
     * @type string
     * @memberof MetaApitouchMeta
     */
    service: string
    /**
     * 
     * @type string
     * @memberof MetaApitouchMeta
     */
    typeStr: string
    /**
     * 
     * @type string
     * @memberof MetaApitouchMeta
     */
    entityUuid: string
    /**
     * 
     * @type string
     * @memberof MetaApitouchMeta
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof MetaApitouchMeta
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof MetaApitouchMeta
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof MetaApitouchMeta
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof MetaApitouchMeta
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof MetaApitouchMeta
     */
    ehelplyData?: string
}

export interface MetaApiUpdateFieldRequest {
    /**
     * 
     * @type string
     * @memberof MetaApiupdateField
     */
    fieldUuid: string
    /**
     * 
     * @type Field
     * @memberof MetaApiupdateField
     */
    field: Field
    /**
     * 
     * @type string
     * @memberof MetaApiupdateField
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof MetaApiupdateField
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof MetaApiupdateField
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof MetaApiupdateField
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof MetaApiupdateField
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof MetaApiupdateField
     */
    ehelplyData?: string
}

export interface MetaApiUpdateMetaRequest {
    /**
     * 
     * @type string
     * @memberof MetaApiupdateMeta
     */
    service: string
    /**
     * 
     * @type string
     * @memberof MetaApiupdateMeta
     */
    typeStr: string
    /**
     * 
     * @type string
     * @memberof MetaApiupdateMeta
     */
    entityUuid: string
    /**
     * 
     * @type MetaCreate
     * @memberof MetaApiupdateMeta
     */
    metaCreate: MetaCreate
    /**
     * 
     * @type string
     * @memberof MetaApiupdateMeta
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof MetaApiupdateMeta
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof MetaApiupdateMeta
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof MetaApiupdateMeta
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof MetaApiupdateMeta
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof MetaApiupdateMeta
     */
    ehelplyData?: string
}

export interface MetaApiUpdateMetaFromUuidRequest {
    /**
     * 
     * @type string
     * @memberof MetaApiupdateMetaFromUuid
     */
    metaUuid: string
    /**
     * 
     * @type MetaCreate
     * @memberof MetaApiupdateMetaFromUuid
     */
    metaCreate: MetaCreate
    /**
     * 
     * @type string
     * @memberof MetaApiupdateMetaFromUuid
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof MetaApiupdateMetaFromUuid
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof MetaApiupdateMetaFromUuid
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof MetaApiupdateMetaFromUuid
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof MetaApiupdateMetaFromUuid
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof MetaApiupdateMetaFromUuid
     */
    ehelplyData?: string
}

export class ObjectMetaApi {
    private api: ObservableMetaApi

    public constructor(configuration: Configuration, requestFactory?: MetaApiRequestFactory, responseProcessor?: MetaApiResponseProcessor) {
        this.api = new ObservableMetaApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create Field
     * @param param the request object
     */
    public createField(param: MetaApiCreateFieldRequest, options?: Configuration): Promise<FieldDynamo> {
        return this.api.createField(param.field, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Create Meta
     * @param param the request object
     */
    public createMeta(param: MetaApiCreateMetaRequest, options?: Configuration): Promise<MetaDynamo> {
        return this.api.createMeta(param.service, param.typeStr, param.entityUuid, param.metaCreate, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Delete Field
     * @param param the request object
     */
    public deleteField(param: MetaApiDeleteFieldRequest, options?: Configuration): Promise<any> {
        return this.api.deleteField(param.fieldUuid, param.softDelete, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Delete Meta
     * @param param the request object
     */
    public deleteMeta(param: MetaApiDeleteMetaRequest, options?: Configuration): Promise<any> {
        return this.api.deleteMeta(param.service, param.typeStr, param.entityUuid, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Delete Meta From Uuid
     * @param param the request object
     */
    public deleteMetaFromUuid(param: MetaApiDeleteMetaFromUuidRequest, options?: Configuration): Promise<any> {
        return this.api.deleteMetaFromUuid(param.metaUuid, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Get Field
     * @param param the request object
     */
    public getField(param: MetaApiGetFieldRequest, options?: Configuration): Promise<FieldDynamo> {
        return this.api.getField(param.fieldUuid, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Get Meta
     * @param param the request object
     */
    public getMeta(param: MetaApiGetMetaRequest, options?: Configuration): Promise<MetaDynamo> {
        return this.api.getMeta(param.service, param.typeStr, param.entityUuid, param.detailed, param.custom, param.dates, param.history, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Get Meta From Uuid
     * @param param the request object
     */
    public getMetaFromUuid(param: MetaApiGetMetaFromUuidRequest, options?: Configuration): Promise<MetaDynamo> {
        return this.api.getMetaFromUuid(param.metaUuid, param.detailed, param.custom, param.dates, param.history, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Make Slug
     * @param param the request object
     */
    public makeSlug(param: MetaApiMakeSlugRequest, options?: Configuration): Promise<any> {
        return this.api.makeSlug(param.metaSlugger,  options).toPromise();
    }

    /**
     * Touch Meta
     * @param param the request object
     */
    public touchMeta(param: MetaApiTouchMetaRequest, options?: Configuration): Promise<MetaDynamo> {
        return this.api.touchMeta(param.service, param.typeStr, param.entityUuid, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Update Field
     * @param param the request object
     */
    public updateField(param: MetaApiUpdateFieldRequest, options?: Configuration): Promise<any> {
        return this.api.updateField(param.fieldUuid, param.field, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Update Meta
     * @param param the request object
     */
    public updateMeta(param: MetaApiUpdateMetaRequest, options?: Configuration): Promise<MetaDynamo> {
        return this.api.updateMeta(param.service, param.typeStr, param.entityUuid, param.metaCreate, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Update Meta From Uuid
     * @param param the request object
     */
    public updateMetaFromUuid(param: MetaApiUpdateMetaFromUuidRequest, options?: Configuration): Promise<MetaDynamo> {
        return this.api.updateMetaFromUuid(param.metaUuid, param.metaCreate, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

}

import { ObservableMonitorApi } from "./ObservableAPI";
import { MonitorApiRequestFactory, MonitorApiResponseProcessor} from "../apis/MonitorApi";

export interface MonitorApiAckAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAcknowledgePostRequest {
    /**
     * 
     * @type string
     * @memberof MonitorApiackAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAcknowledgePost
     */
    service: string
    /**
     * 
     * @type string
     * @memberof MonitorApiackAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAcknowledgePost
     */
    stage: string
    /**
     * 
     * @type string
     * @memberof MonitorApiackAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAcknowledgePost
     */
    alarmUuid: string
    /**
     * 
     * @type BodyAckAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAcknowledgePost
     * @memberof MonitorApiackAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAcknowledgePost
     */
    bodyAckAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAcknowledgePost: BodyAckAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAcknowledgePost
}

export interface MonitorApiAssignAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAssignPostRequest {
    /**
     * 
     * @type string
     * @memberof MonitorApiassignAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAssignPost
     */
    service: string
    /**
     * 
     * @type string
     * @memberof MonitorApiassignAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAssignPost
     */
    stage: string
    /**
     * 
     * @type string
     * @memberof MonitorApiassignAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAssignPost
     */
    alarmUuid: string
    /**
     * 
     * @type BodyAssignAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAssignPost
     * @memberof MonitorApiassignAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAssignPost
     */
    bodyAssignAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAssignPost: BodyAssignAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAssignPost
}

export interface MonitorApiAttachAlarmNoteMonitorServicesServiceStagesStageAlarmsAlarmUuidNotePostRequest {
    /**
     * 
     * @type string
     * @memberof MonitorApiattachAlarmNoteMonitorServicesServiceStagesStageAlarmsAlarmUuidNotePost
     */
    service: string
    /**
     * 
     * @type string
     * @memberof MonitorApiattachAlarmNoteMonitorServicesServiceStagesStageAlarmsAlarmUuidNotePost
     */
    stage: string
    /**
     * 
     * @type string
     * @memberof MonitorApiattachAlarmNoteMonitorServicesServiceStagesStageAlarmsAlarmUuidNotePost
     */
    alarmUuid: string
    /**
     * 
     * @type BodyAttachAlarmNoteMonitorServicesServiceStagesStageAlarmsAlarmUuidNotePost
     * @memberof MonitorApiattachAlarmNoteMonitorServicesServiceStagesStageAlarmsAlarmUuidNotePost
     */
    bodyAttachAlarmNoteMonitorServicesServiceStagesStageAlarmsAlarmUuidNotePost: BodyAttachAlarmNoteMonitorServicesServiceStagesStageAlarmsAlarmUuidNotePost
}

export interface MonitorApiAttachAlarmTicketMonitorServicesServiceStagesStageAlarmsAlarmUuidTicketPostRequest {
    /**
     * 
     * @type string
     * @memberof MonitorApiattachAlarmTicketMonitorServicesServiceStagesStageAlarmsAlarmUuidTicketPost
     */
    service: string
    /**
     * 
     * @type string
     * @memberof MonitorApiattachAlarmTicketMonitorServicesServiceStagesStageAlarmsAlarmUuidTicketPost
     */
    stage: string
    /**
     * 
     * @type string
     * @memberof MonitorApiattachAlarmTicketMonitorServicesServiceStagesStageAlarmsAlarmUuidTicketPost
     */
    alarmUuid: string
    /**
     * 
     * @type BodyAttachAlarmTicketMonitorServicesServiceStagesStageAlarmsAlarmUuidTicketPost
     * @memberof MonitorApiattachAlarmTicketMonitorServicesServiceStagesStageAlarmsAlarmUuidTicketPost
     */
    bodyAttachAlarmTicketMonitorServicesServiceStagesStageAlarmsAlarmUuidTicketPost: BodyAttachAlarmTicketMonitorServicesServiceStagesStageAlarmsAlarmUuidTicketPost
}

export interface MonitorApiClearAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidClearPostRequest {
    /**
     * 
     * @type string
     * @memberof MonitorApiclearAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidClearPost
     */
    service: string
    /**
     * 
     * @type string
     * @memberof MonitorApiclearAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidClearPost
     */
    stage: string
    /**
     * 
     * @type string
     * @memberof MonitorApiclearAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidClearPost
     */
    alarmUuid: string
}

export interface MonitorApiGetServiceAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidGetRequest {
    /**
     * 
     * @type string
     * @memberof MonitorApigetServiceAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidGet
     */
    service: string
    /**
     * 
     * @type string
     * @memberof MonitorApigetServiceAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidGet
     */
    stage: string
    /**
     * 
     * @type string
     * @memberof MonitorApigetServiceAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidGet
     */
    alarmUuid: string
}

export interface MonitorApiGetServiceAlarmsMonitorServicesServiceStagesStageAlarmsGetRequest {
    /**
     * 
     * @type string
     * @memberof MonitorApigetServiceAlarmsMonitorServicesServiceStagesStageAlarmsGet
     */
    service: string
    /**
     * 
     * @type string
     * @memberof MonitorApigetServiceAlarmsMonitorServicesServiceStagesStageAlarmsGet
     */
    stage: string
    /**
     * 
     * @type number
     * @memberof MonitorApigetServiceAlarmsMonitorServicesServiceStagesStageAlarmsGet
     */
    history?: number
    /**
     * 
     * @type boolean
     * @memberof MonitorApigetServiceAlarmsMonitorServicesServiceStagesStageAlarmsGet
     */
    includeTerminated?: boolean
    /**
     * 
     * @type boolean
     * @memberof MonitorApigetServiceAlarmsMonitorServicesServiceStagesStageAlarmsGet
     */
    includeCleared?: boolean
}

export interface MonitorApiGetServiceHeartbeatsMonitorServicesServiceStagesStageHeartbeatsGetRequest {
    /**
     * 
     * @type string
     * @memberof MonitorApigetServiceHeartbeatsMonitorServicesServiceStagesStageHeartbeatsGet
     */
    service: string
    /**
     * 
     * @type string
     * @memberof MonitorApigetServiceHeartbeatsMonitorServicesServiceStagesStageHeartbeatsGet
     */
    stage: string
    /**
     * 
     * @type number
     * @memberof MonitorApigetServiceHeartbeatsMonitorServicesServiceStagesStageHeartbeatsGet
     */
    history?: number
}

export interface MonitorApiGetServiceKpisMonitorServicesServiceKpisGetRequest {
    /**
     * 
     * @type string
     * @memberof MonitorApigetServiceKpisMonitorServicesServiceKpisGet
     */
    service: string
    /**
     * 
     * @type number
     * @memberof MonitorApigetServiceKpisMonitorServicesServiceKpisGet
     */
    history?: number
}

export interface MonitorApiGetServiceMonitorServicesServiceGetRequest {
    /**
     * 
     * @type string
     * @memberof MonitorApigetServiceMonitorServicesServiceGet
     */
    service: string
    /**
     * 
     * @type boolean
     * @memberof MonitorApigetServiceMonitorServicesServiceGet
     */
    heartbeats?: boolean
    /**
     * 
     * @type number
     * @memberof MonitorApigetServiceMonitorServicesServiceGet
     */
    heartbeatLimit?: number
    /**
     * 
     * @type boolean
     * @memberof MonitorApigetServiceMonitorServicesServiceGet
     */
    alarms?: boolean
    /**
     * 
     * @type number
     * @memberof MonitorApigetServiceMonitorServicesServiceGet
     */
    alarmLimit?: number
    /**
     * 
     * @type string
     * @memberof MonitorApigetServiceMonitorServicesServiceGet
     */
    stage?: string
}

export interface MonitorApiGetServiceSpecRequest {
    /**
     * 
     * @type string
     * @memberof MonitorApigetServiceSpec
     */
    service: string
    /**
     * 
     * @type string
     * @memberof MonitorApigetServiceSpec
     */
    spec: string
    /**
     * 
     * @type boolean
     * @memberof MonitorApigetServiceSpec
     */
    asJson?: boolean
}

export interface MonitorApiGetServiceSpecsRequest {
    /**
     * 
     * @type string
     * @memberof MonitorApigetServiceSpecs
     */
    service: string
}

export interface MonitorApiGetServiceVitalsMonitorServicesServiceStagesStageVitalsGetRequest {
    /**
     * 
     * @type string
     * @memberof MonitorApigetServiceVitalsMonitorServicesServiceStagesStageVitalsGet
     */
    service: string
    /**
     * 
     * @type string
     * @memberof MonitorApigetServiceVitalsMonitorServicesServiceStagesStageVitalsGet
     */
    stage: string
    /**
     * 
     * @type number
     * @memberof MonitorApigetServiceVitalsMonitorServicesServiceStagesStageVitalsGet
     */
    history?: number
}

export interface MonitorApiGetServicesMonitorServicesGetRequest {
    /**
     * 
     * @type boolean
     * @memberof MonitorApigetServicesMonitorServicesGet
     */
    heartbeats?: boolean
    /**
     * 
     * @type number
     * @memberof MonitorApigetServicesMonitorServicesGet
     */
    heartbeatLimit?: number
    /**
     * 
     * @type boolean
     * @memberof MonitorApigetServicesMonitorServicesGet
     */
    alarms?: boolean
    /**
     * 
     * @type number
     * @memberof MonitorApigetServicesMonitorServicesGet
     */
    alarmLimit?: number
    /**
     * 
     * @type boolean
     * @memberof MonitorApigetServicesMonitorServicesGet
     */
    includeHidden?: boolean
    /**
     * 
     * @type string
     * @memberof MonitorApigetServicesMonitorServicesGet
     */
    stage?: string
    /**
     * 
     * @type string
     * @memberof MonitorApigetServicesMonitorServicesGet
     */
    key?: string
}

export interface MonitorApiGetServicesWithSpecsRequest {
}

export interface MonitorApiHideServiceMonitorServicesServiceStagesStageHidePostRequest {
    /**
     * 
     * @type string
     * @memberof MonitorApihideServiceMonitorServicesServiceStagesStageHidePost
     */
    service: string
    /**
     * 
     * @type string
     * @memberof MonitorApihideServiceMonitorServicesServiceStagesStageHidePost
     */
    stage: string
}

export interface MonitorApiIgnoreAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidIgnorePostRequest {
    /**
     * 
     * @type string
     * @memberof MonitorApiignoreAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidIgnorePost
     */
    service: string
    /**
     * 
     * @type string
     * @memberof MonitorApiignoreAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidIgnorePost
     */
    stage: string
    /**
     * 
     * @type string
     * @memberof MonitorApiignoreAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidIgnorePost
     */
    alarmUuid: string
    /**
     * 
     * @type BodyIgnoreAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidIgnorePost
     * @memberof MonitorApiignoreAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidIgnorePost
     */
    bodyIgnoreAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidIgnorePost: BodyIgnoreAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidIgnorePost
}

export interface MonitorApiRegisterServiceMonitorServicesPostRequest {
    /**
     * 
     * @type BodyRegisterServiceMonitorServicesPost
     * @memberof MonitorApiregisterServiceMonitorServicesPost
     */
    bodyRegisterServiceMonitorServicesPost: BodyRegisterServiceMonitorServicesPost
}

export interface MonitorApiSearchAlarmsMonitorServicesServiceAlarmsGetRequest {
    /**
     * 
     * @type string
     * @memberof MonitorApisearchAlarmsMonitorServicesServiceAlarmsGet
     */
    service: string
    /**
     * 
     * @type number
     * @memberof MonitorApisearchAlarmsMonitorServicesServiceAlarmsGet
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof MonitorApisearchAlarmsMonitorServicesServiceAlarmsGet
     */
    pageSize?: number
    /**
     * 
     * @type string
     * @memberof MonitorApisearchAlarmsMonitorServicesServiceAlarmsGet
     */
    search?: string
    /**
     * 
     * @type string
     * @memberof MonitorApisearchAlarmsMonitorServicesServiceAlarmsGet
     */
    searchOn?: string
    /**
     * 
     * @type string
     * @memberof MonitorApisearchAlarmsMonitorServicesServiceAlarmsGet
     */
    sortOn?: string
    /**
     * 
     * @type boolean
     * @memberof MonitorApisearchAlarmsMonitorServicesServiceAlarmsGet
     */
    sortDesc?: boolean
}

export interface MonitorApiShowServiceMonitorServicesServiceStagesStageShowPostRequest {
    /**
     * 
     * @type string
     * @memberof MonitorApishowServiceMonitorServicesServiceStagesStageShowPost
     */
    service: string
    /**
     * 
     * @type string
     * @memberof MonitorApishowServiceMonitorServicesServiceStagesStageShowPost
     */
    stage: string
}

export interface MonitorApiTerminateAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidTerminatePostRequest {
    /**
     * 
     * @type string
     * @memberof MonitorApiterminateAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidTerminatePost
     */
    service: string
    /**
     * 
     * @type string
     * @memberof MonitorApiterminateAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidTerminatePost
     */
    stage: string
    /**
     * 
     * @type string
     * @memberof MonitorApiterminateAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidTerminatePost
     */
    alarmUuid: string
    /**
     * 
     * @type BodyTerminateAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidTerminatePost
     * @memberof MonitorApiterminateAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidTerminatePost
     */
    bodyTerminateAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidTerminatePost: BodyTerminateAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidTerminatePost
}

export interface MonitorApiTriggerAlarmMonitorServicesServiceStagesStageAlarmsPostRequest {
    /**
     * 
     * @type string
     * @memberof MonitorApitriggerAlarmMonitorServicesServiceStagesStageAlarmsPost
     */
    service: string
    /**
     * 
     * @type string
     * @memberof MonitorApitriggerAlarmMonitorServicesServiceStagesStageAlarmsPost
     */
    stage: string
    /**
     * 
     * @type BodyTriggerAlarmMonitorServicesServiceStagesStageAlarmsPost
     * @memberof MonitorApitriggerAlarmMonitorServicesServiceStagesStageAlarmsPost
     */
    bodyTriggerAlarmMonitorServicesServiceStagesStageAlarmsPost: BodyTriggerAlarmMonitorServicesServiceStagesStageAlarmsPost
}

export class ObjectMonitorApi {
    private api: ObservableMonitorApi

    public constructor(configuration: Configuration, requestFactory?: MonitorApiRequestFactory, responseProcessor?: MonitorApiResponseProcessor) {
        this.api = new ObservableMonitorApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Ack Alarm
     * @param param the request object
     */
    public ackAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAcknowledgePost(param: MonitorApiAckAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAcknowledgePostRequest, options?: Configuration): Promise<any> {
        return this.api.ackAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAcknowledgePost(param.service, param.stage, param.alarmUuid, param.bodyAckAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAcknowledgePost,  options).toPromise();
    }

    /**
     * Assign Alarm
     * @param param the request object
     */
    public assignAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAssignPost(param: MonitorApiAssignAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAssignPostRequest, options?: Configuration): Promise<any> {
        return this.api.assignAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAssignPost(param.service, param.stage, param.alarmUuid, param.bodyAssignAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAssignPost,  options).toPromise();
    }

    /**
     * Attach Alarm Note
     * @param param the request object
     */
    public attachAlarmNoteMonitorServicesServiceStagesStageAlarmsAlarmUuidNotePost(param: MonitorApiAttachAlarmNoteMonitorServicesServiceStagesStageAlarmsAlarmUuidNotePostRequest, options?: Configuration): Promise<any> {
        return this.api.attachAlarmNoteMonitorServicesServiceStagesStageAlarmsAlarmUuidNotePost(param.service, param.stage, param.alarmUuid, param.bodyAttachAlarmNoteMonitorServicesServiceStagesStageAlarmsAlarmUuidNotePost,  options).toPromise();
    }

    /**
     * Attach Alarm Ticket
     * @param param the request object
     */
    public attachAlarmTicketMonitorServicesServiceStagesStageAlarmsAlarmUuidTicketPost(param: MonitorApiAttachAlarmTicketMonitorServicesServiceStagesStageAlarmsAlarmUuidTicketPostRequest, options?: Configuration): Promise<any> {
        return this.api.attachAlarmTicketMonitorServicesServiceStagesStageAlarmsAlarmUuidTicketPost(param.service, param.stage, param.alarmUuid, param.bodyAttachAlarmTicketMonitorServicesServiceStagesStageAlarmsAlarmUuidTicketPost,  options).toPromise();
    }

    /**
     * Clear Alarm
     * @param param the request object
     */
    public clearAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidClearPost(param: MonitorApiClearAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidClearPostRequest, options?: Configuration): Promise<any> {
        return this.api.clearAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidClearPost(param.service, param.stage, param.alarmUuid,  options).toPromise();
    }

    /**
     * Get Service Alarm
     * @param param the request object
     */
    public getServiceAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidGet(param: MonitorApiGetServiceAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidGetRequest, options?: Configuration): Promise<any> {
        return this.api.getServiceAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidGet(param.service, param.stage, param.alarmUuid,  options).toPromise();
    }

    /**
     * Get Service Alarms
     * @param param the request object
     */
    public getServiceAlarmsMonitorServicesServiceStagesStageAlarmsGet(param: MonitorApiGetServiceAlarmsMonitorServicesServiceStagesStageAlarmsGetRequest, options?: Configuration): Promise<any> {
        return this.api.getServiceAlarmsMonitorServicesServiceStagesStageAlarmsGet(param.service, param.stage, param.history, param.includeTerminated, param.includeCleared,  options).toPromise();
    }

    /**
     * Get Service Heartbeats
     * @param param the request object
     */
    public getServiceHeartbeatsMonitorServicesServiceStagesStageHeartbeatsGet(param: MonitorApiGetServiceHeartbeatsMonitorServicesServiceStagesStageHeartbeatsGetRequest, options?: Configuration): Promise<any> {
        return this.api.getServiceHeartbeatsMonitorServicesServiceStagesStageHeartbeatsGet(param.service, param.stage, param.history,  options).toPromise();
    }

    /**
     * Get Service Kpis
     * @param param the request object
     */
    public getServiceKpisMonitorServicesServiceKpisGet(param: MonitorApiGetServiceKpisMonitorServicesServiceKpisGetRequest, options?: Configuration): Promise<any> {
        return this.api.getServiceKpisMonitorServicesServiceKpisGet(param.service, param.history,  options).toPromise();
    }

    /**
     * Get Service
     * @param param the request object
     */
    public getServiceMonitorServicesServiceGet(param: MonitorApiGetServiceMonitorServicesServiceGetRequest, options?: Configuration): Promise<any> {
        return this.api.getServiceMonitorServicesServiceGet(param.service, param.heartbeats, param.heartbeatLimit, param.alarms, param.alarmLimit, param.stage,  options).toPromise();
    }

    /**
     * Getservicespec
     * @param param the request object
     */
    public getServiceSpec(param: MonitorApiGetServiceSpecRequest, options?: Configuration): Promise<InlineResponse2002> {
        return this.api.getServiceSpec(param.service, param.spec, param.asJson,  options).toPromise();
    }

    /**
     * Getservicespecs
     * @param param the request object
     */
    public getServiceSpecs(param: MonitorApiGetServiceSpecsRequest, options?: Configuration): Promise<InlineResponse2001> {
        return this.api.getServiceSpecs(param.service,  options).toPromise();
    }

    /**
     * Get Service Vitals
     * @param param the request object
     */
    public getServiceVitalsMonitorServicesServiceStagesStageVitalsGet(param: MonitorApiGetServiceVitalsMonitorServicesServiceStagesStageVitalsGetRequest, options?: Configuration): Promise<any> {
        return this.api.getServiceVitalsMonitorServicesServiceStagesStageVitalsGet(param.service, param.stage, param.history,  options).toPromise();
    }

    /**
     * Get Services
     * @param param the request object
     */
    public getServicesMonitorServicesGet(param: MonitorApiGetServicesMonitorServicesGetRequest = {}, options?: Configuration): Promise<any> {
        return this.api.getServicesMonitorServicesGet(param.heartbeats, param.heartbeatLimit, param.alarms, param.alarmLimit, param.includeHidden, param.stage, param.key,  options).toPromise();
    }

    /**
     * Getserviceswithspecs
     * @param param the request object
     */
    public getServicesWithSpecs(param: MonitorApiGetServicesWithSpecsRequest = {}, options?: Configuration): Promise<InlineResponse200> {
        return this.api.getServicesWithSpecs( options).toPromise();
    }

    /**
     * Hide Service
     * @param param the request object
     */
    public hideServiceMonitorServicesServiceStagesStageHidePost(param: MonitorApiHideServiceMonitorServicesServiceStagesStageHidePostRequest, options?: Configuration): Promise<any> {
        return this.api.hideServiceMonitorServicesServiceStagesStageHidePost(param.service, param.stage,  options).toPromise();
    }

    /**
     * Ignore Alarm
     * @param param the request object
     */
    public ignoreAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidIgnorePost(param: MonitorApiIgnoreAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidIgnorePostRequest, options?: Configuration): Promise<any> {
        return this.api.ignoreAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidIgnorePost(param.service, param.stage, param.alarmUuid, param.bodyIgnoreAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidIgnorePost,  options).toPromise();
    }

    /**
     * Register Service
     * @param param the request object
     */
    public registerServiceMonitorServicesPost(param: MonitorApiRegisterServiceMonitorServicesPostRequest, options?: Configuration): Promise<any> {
        return this.api.registerServiceMonitorServicesPost(param.bodyRegisterServiceMonitorServicesPost,  options).toPromise();
    }

    /**
     * Search Alarms
     * @param param the request object
     */
    public searchAlarmsMonitorServicesServiceAlarmsGet(param: MonitorApiSearchAlarmsMonitorServicesServiceAlarmsGetRequest, options?: Configuration): Promise<any> {
        return this.api.searchAlarmsMonitorServicesServiceAlarmsGet(param.service, param.page, param.pageSize, param.search, param.searchOn, param.sortOn, param.sortDesc,  options).toPromise();
    }

    /**
     * Show Service
     * @param param the request object
     */
    public showServiceMonitorServicesServiceStagesStageShowPost(param: MonitorApiShowServiceMonitorServicesServiceStagesStageShowPostRequest, options?: Configuration): Promise<any> {
        return this.api.showServiceMonitorServicesServiceStagesStageShowPost(param.service, param.stage,  options).toPromise();
    }

    /**
     * Terminate Alarm
     * @param param the request object
     */
    public terminateAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidTerminatePost(param: MonitorApiTerminateAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidTerminatePostRequest, options?: Configuration): Promise<any> {
        return this.api.terminateAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidTerminatePost(param.service, param.stage, param.alarmUuid, param.bodyTerminateAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidTerminatePost,  options).toPromise();
    }

    /**
     * Trigger Alarm
     * @param param the request object
     */
    public triggerAlarmMonitorServicesServiceStagesStageAlarmsPost(param: MonitorApiTriggerAlarmMonitorServicesServiceStagesStageAlarmsPostRequest, options?: Configuration): Promise<any> {
        return this.api.triggerAlarmMonitorServicesServiceStagesStageAlarmsPost(param.service, param.stage, param.bodyTriggerAlarmMonitorServicesServiceStagesStageAlarmsPost,  options).toPromise();
    }

}

import { ObservableNotesApi } from "./ObservableAPI";
import { NotesApiRequestFactory, NotesApiResponseProcessor} from "../apis/NotesApi";

export interface NotesApiCreateNoteRequest {
    /**
     * 
     * @type NoteBase
     * @memberof NotesApicreateNote
     */
    noteBase: NoteBase
    /**
     * 
     * @type string
     * @memberof NotesApicreateNote
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof NotesApicreateNote
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof NotesApicreateNote
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof NotesApicreateNote
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof NotesApicreateNote
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof NotesApicreateNote
     */
    ehelplyData?: string
}

export interface NotesApiDeleteNoteRequest {
    /**
     * 
     * @type string
     * @memberof NotesApideleteNote
     */
    noteId: string
    /**
     * 
     * @type string
     * @memberof NotesApideleteNote
     */
    method?: string
    /**
     * 
     * @type string
     * @memberof NotesApideleteNote
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof NotesApideleteNote
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof NotesApideleteNote
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof NotesApideleteNote
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof NotesApideleteNote
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof NotesApideleteNote
     */
    ehelplyData?: string
}

export interface NotesApiGetNoteRequest {
    /**
     * 
     * @type string
     * @memberof NotesApigetNote
     */
    noteId: string
    /**
     * 
     * @type number
     * @memberof NotesApigetNote
     */
    history?: number
    /**
     * 
     * @type boolean
     * @memberof NotesApigetNote
     */
    historyContent?: boolean
    /**
     * 
     * @type string
     * @memberof NotesApigetNote
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof NotesApigetNote
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof NotesApigetNote
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof NotesApigetNote
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof NotesApigetNote
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof NotesApigetNote
     */
    ehelplyData?: string
}

export interface NotesApiUpdateNoteRequest {
    /**
     * 
     * @type string
     * @memberof NotesApiupdateNote
     */
    noteId: string
    /**
     * 
     * @type NoteBase
     * @memberof NotesApiupdateNote
     */
    noteBase: NoteBase
    /**
     * 
     * @type string
     * @memberof NotesApiupdateNote
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof NotesApiupdateNote
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof NotesApiupdateNote
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof NotesApiupdateNote
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof NotesApiupdateNote
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof NotesApiupdateNote
     */
    ehelplyData?: string
}

export class ObjectNotesApi {
    private api: ObservableNotesApi

    public constructor(configuration: Configuration, requestFactory?: NotesApiRequestFactory, responseProcessor?: NotesApiResponseProcessor) {
        this.api = new ObservableNotesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create Note
     * @param param the request object
     */
    public createNote(param: NotesApiCreateNoteRequest, options?: Configuration): Promise<NoteDynamo> {
        return this.api.createNote(param.noteBase, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Delete Note
     * @param param the request object
     */
    public deleteNote(param: NotesApiDeleteNoteRequest, options?: Configuration): Promise<any> {
        return this.api.deleteNote(param.noteId, param.method, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Get Note
     * @param param the request object
     */
    public getNote(param: NotesApiGetNoteRequest, options?: Configuration): Promise<NoteDynamoHistory> {
        return this.api.getNote(param.noteId, param.history, param.historyContent, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Update Note
     * @param param the request object
     */
    public updateNote(param: NotesApiUpdateNoteRequest, options?: Configuration): Promise<NoteDynamo> {
        return this.api.updateNote(param.noteId, param.noteBase, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

}

import { ObservablePlacesApi } from "./ObservableAPI";
import { PlacesApiRequestFactory, PlacesApiResponseProcessor} from "../apis/PlacesApi";

export interface PlacesApiCreatePlacePlacesPlacesPostRequest {
    /**
     * 
     * @type PlaceBase
     * @memberof PlacesApicreatePlacePlacesPlacesPost
     */
    placeBase: PlaceBase
    /**
     * 
     * @type string
     * @memberof PlacesApicreatePlacePlacesPlacesPost
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof PlacesApicreatePlacePlacesPlacesPost
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof PlacesApicreatePlacePlacesPlacesPost
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof PlacesApicreatePlacePlacesPlacesPost
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof PlacesApicreatePlacePlacesPlacesPost
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof PlacesApicreatePlacePlacesPlacesPost
     */
    ehelplyData?: string
}

export interface PlacesApiDeletePlacePlacesPlacesPlaceUuidDeleteRequest {
    /**
     * 
     * @type string
     * @memberof PlacesApideletePlacePlacesPlacesPlaceUuidDelete
     */
    placeUuid: string
    /**
     * 
     * @type boolean
     * @memberof PlacesApideletePlacePlacesPlacesPlaceUuidDelete
     */
    softDelete?: boolean
    /**
     * 
     * @type string
     * @memberof PlacesApideletePlacePlacesPlacesPlaceUuidDelete
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof PlacesApideletePlacePlacesPlacesPlaceUuidDelete
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof PlacesApideletePlacePlacesPlacesPlaceUuidDelete
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof PlacesApideletePlacePlacesPlacesPlaceUuidDelete
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof PlacesApideletePlacePlacesPlacesPlaceUuidDelete
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof PlacesApideletePlacePlacesPlacesPlaceUuidDelete
     */
    ehelplyData?: string
}

export interface PlacesApiForwardGeocodingPlacesGeocodingForwardGetRequest {
    /**
     * 
     * @type string
     * @memberof PlacesApiforwardGeocodingPlacesGeocodingForwardGet
     */
    searchingPlace: string
    /**
     * 
     * @type string
     * @memberof PlacesApiforwardGeocodingPlacesGeocodingForwardGet
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof PlacesApiforwardGeocodingPlacesGeocodingForwardGet
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof PlacesApiforwardGeocodingPlacesGeocodingForwardGet
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof PlacesApiforwardGeocodingPlacesGeocodingForwardGet
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof PlacesApiforwardGeocodingPlacesGeocodingForwardGet
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof PlacesApiforwardGeocodingPlacesGeocodingForwardGet
     */
    ehelplyData?: string
}

export interface PlacesApiGetPlacePlacesPlacesPlaceUuidGetRequest {
    /**
     * 
     * @type string
     * @memberof PlacesApigetPlacePlacesPlacesPlaceUuidGet
     */
    placeUuid: string
    /**
     * 
     * @type boolean
     * @memberof PlacesApigetPlacePlacesPlacesPlaceUuidGet
     */
    withMeta?: boolean
    /**
     * 
     * @type boolean
     * @memberof PlacesApigetPlacePlacesPlacesPlaceUuidGet
     */
    withCatalog?: boolean
    /**
     * 
     * @type boolean
     * @memberof PlacesApigetPlacePlacesPlacesPlaceUuidGet
     */
    withReviews?: boolean
    /**
     * 
     * @type boolean
     * @memberof PlacesApigetPlacePlacesPlacesPlaceUuidGet
     */
    withSchedule?: boolean
    /**
     * 
     * @type boolean
     * @memberof PlacesApigetPlacePlacesPlacesPlaceUuidGet
     */
    withCollection?: boolean
    /**
     * 
     * @type boolean
     * @memberof PlacesApigetPlacePlacesPlacesPlaceUuidGet
     */
    withBlog?: boolean
    /**
     * 
     * @type boolean
     * @memberof PlacesApigetPlacePlacesPlacesPlaceUuidGet
     */
    withTags?: boolean
    /**
     * 
     * @type boolean
     * @memberof PlacesApigetPlacePlacesPlacesPlaceUuidGet
     */
    withCategories?: boolean
    /**
     * 
     * @type boolean
     * @memberof PlacesApigetPlacePlacesPlacesPlaceUuidGet
     */
    withCompany?: boolean
    /**
     * 
     * @type string
     * @memberof PlacesApigetPlacePlacesPlacesPlaceUuidGet
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof PlacesApigetPlacePlacesPlacesPlaceUuidGet
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof PlacesApigetPlacePlacesPlacesPlaceUuidGet
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof PlacesApigetPlacePlacesPlacesPlaceUuidGet
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof PlacesApigetPlacePlacesPlacesPlaceUuidGet
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof PlacesApigetPlacePlacesPlacesPlaceUuidGet
     */
    ehelplyData?: string
}

export interface PlacesApiReverseGeocodingPlacesGeocodingReverseGetRequest {
    /**
     * 
     * @type number
     * @memberof PlacesApireverseGeocodingPlacesGeocodingReverseGet
     */
    _long: number
    /**
     * 
     * @type number
     * @memberof PlacesApireverseGeocodingPlacesGeocodingReverseGet
     */
    lat: number
    /**
     * 
     * @type string
     * @memberof PlacesApireverseGeocodingPlacesGeocodingReverseGet
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof PlacesApireverseGeocodingPlacesGeocodingReverseGet
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof PlacesApireverseGeocodingPlacesGeocodingReverseGet
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof PlacesApireverseGeocodingPlacesGeocodingReverseGet
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof PlacesApireverseGeocodingPlacesGeocodingReverseGet
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof PlacesApireverseGeocodingPlacesGeocodingReverseGet
     */
    ehelplyData?: string
}

export interface PlacesApiSearchPlacesBySearchStringPlacesSearchPlacesStringGetRequest {
    /**
     * 
     * @type string
     * @memberof PlacesApisearchPlacesBySearchStringPlacesSearchPlacesStringGet
     */
    searchString?: string
    /**
     * 
     * @type number
     * @memberof PlacesApisearchPlacesBySearchStringPlacesSearchPlacesStringGet
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof PlacesApisearchPlacesBySearchStringPlacesSearchPlacesStringGet
     */
    pageSize?: number
    /**
     * 
     * @type string
     * @memberof PlacesApisearchPlacesBySearchStringPlacesSearchPlacesStringGet
     */
    sortOn?: string
    /**
     * 
     * @type boolean
     * @memberof PlacesApisearchPlacesBySearchStringPlacesSearchPlacesStringGet
     */
    sortDesc?: boolean
    /**
     * 
     * @type string
     * @memberof PlacesApisearchPlacesBySearchStringPlacesSearchPlacesStringGet
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof PlacesApisearchPlacesBySearchStringPlacesSearchPlacesStringGet
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof PlacesApisearchPlacesBySearchStringPlacesSearchPlacesStringGet
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof PlacesApisearchPlacesBySearchStringPlacesSearchPlacesStringGet
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof PlacesApisearchPlacesBySearchStringPlacesSearchPlacesStringGet
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof PlacesApisearchPlacesBySearchStringPlacesSearchPlacesStringGet
     */
    ehelplyData?: string
}

export interface PlacesApiSearchPlacesPlacesPlacesGetRequest {
    /**
     * 
     * @type string
     * @memberof PlacesApisearchPlacesPlacesPlacesGet
     */
    projectUuid?: string
    /**
     * 
     * @type string
     * @memberof PlacesApisearchPlacesPlacesPlacesGet
     */
    name?: string
    /**
     * 
     * @type string
     * @memberof PlacesApisearchPlacesPlacesPlacesGet
     */
    addressLine1?: string
    /**
     * 
     * @type string
     * @memberof PlacesApisearchPlacesPlacesPlacesGet
     */
    addressLine2?: string
    /**
     * 
     * @type string
     * @memberof PlacesApisearchPlacesPlacesPlacesGet
     */
    city?: string
    /**
     * 
     * @type string
     * @memberof PlacesApisearchPlacesPlacesPlacesGet
     */
    provinceState?: string
    /**
     * 
     * @type string
     * @memberof PlacesApisearchPlacesPlacesPlacesGet
     */
    country?: string
    /**
     * 
     * @type string
     * @memberof PlacesApisearchPlacesPlacesPlacesGet
     */
    postalZipCode?: string
    /**
     * 
     * @type string
     * @memberof PlacesApisearchPlacesPlacesPlacesGet
     */
    lat?: string
    /**
     * 
     * @type string
     * @memberof PlacesApisearchPlacesPlacesPlacesGet
     */
    lng?: string
    /**
     * 
     * @type string
     * @memberof PlacesApisearchPlacesPlacesPlacesGet
     */
    email?: string
    /**
     * 
     * @type boolean
     * @memberof PlacesApisearchPlacesPlacesPlacesGet
     */
    isPublic?: boolean
    /**
     * 
     * @type boolean
     * @memberof PlacesApisearchPlacesPlacesPlacesGet
     */
    isDeleted?: boolean
    /**
     * 
     * @type boolean
     * @memberof PlacesApisearchPlacesPlacesPlacesGet
     */
    withCompany?: boolean
    /**
     * 
     * @type boolean
     * @memberof PlacesApisearchPlacesPlacesPlacesGet
     */
    withMeta?: boolean
    /**
     * 
     * @type boolean
     * @memberof PlacesApisearchPlacesPlacesPlacesGet
     */
    withCatalog?: boolean
    /**
     * 
     * @type boolean
     * @memberof PlacesApisearchPlacesPlacesPlacesGet
     */
    withReviews?: boolean
    /**
     * 
     * @type boolean
     * @memberof PlacesApisearchPlacesPlacesPlacesGet
     */
    withSchedule?: boolean
    /**
     * 
     * @type boolean
     * @memberof PlacesApisearchPlacesPlacesPlacesGet
     */
    withCollection?: boolean
    /**
     * 
     * @type boolean
     * @memberof PlacesApisearchPlacesPlacesPlacesGet
     */
    withBlog?: boolean
    /**
     * 
     * @type boolean
     * @memberof PlacesApisearchPlacesPlacesPlacesGet
     */
    withTags?: boolean
    /**
     * 
     * @type boolean
     * @memberof PlacesApisearchPlacesPlacesPlacesGet
     */
    withCategories?: boolean
    /**
     * 
     * @type number
     * @memberof PlacesApisearchPlacesPlacesPlacesGet
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof PlacesApisearchPlacesPlacesPlacesGet
     */
    pageSize?: number
    /**
     * 
     * @type string
     * @memberof PlacesApisearchPlacesPlacesPlacesGet
     */
    sortOn?: string
    /**
     * 
     * @type boolean
     * @memberof PlacesApisearchPlacesPlacesPlacesGet
     */
    sortDesc?: boolean
    /**
     * 
     * @type string
     * @memberof PlacesApisearchPlacesPlacesPlacesGet
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof PlacesApisearchPlacesPlacesPlacesGet
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof PlacesApisearchPlacesPlacesPlacesGet
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof PlacesApisearchPlacesPlacesPlacesGet
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof PlacesApisearchPlacesPlacesPlacesGet
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof PlacesApisearchPlacesPlacesPlacesGet
     */
    ehelplyData?: string
}

export interface PlacesApiUpdatePlacePlacesPlacesPlaceUuidPutRequest {
    /**
     * 
     * @type string
     * @memberof PlacesApiupdatePlacePlacesPlacesPlaceUuidPut
     */
    placeUuid: string
    /**
     * 
     * @type PlaceBase
     * @memberof PlacesApiupdatePlacePlacesPlacesPlaceUuidPut
     */
    placeBase: PlaceBase
    /**
     * 
     * @type string
     * @memberof PlacesApiupdatePlacePlacesPlacesPlaceUuidPut
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof PlacesApiupdatePlacePlacesPlacesPlaceUuidPut
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof PlacesApiupdatePlacePlacesPlacesPlaceUuidPut
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof PlacesApiupdatePlacePlacesPlacesPlaceUuidPut
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof PlacesApiupdatePlacePlacesPlacesPlaceUuidPut
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof PlacesApiupdatePlacePlacesPlacesPlaceUuidPut
     */
    ehelplyData?: string
}

export class ObjectPlacesApi {
    private api: ObservablePlacesApi

    public constructor(configuration: Configuration, requestFactory?: PlacesApiRequestFactory, responseProcessor?: PlacesApiResponseProcessor) {
        this.api = new ObservablePlacesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a Place.
     * Create Place
     * @param param the request object
     */
    public createPlacePlacesPlacesPost(param: PlacesApiCreatePlacePlacesPlacesPostRequest, options?: Configuration): Promise<PlaceResponse> {
        return this.api.createPlacePlacesPlacesPost(param.placeBase, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Deletes the place with the given ID and returns True if successful
     * Delete Place
     * @param param the request object
     */
    public deletePlacePlacesPlacesPlaceUuidDelete(param: PlacesApiDeletePlacePlacesPlacesPlaceUuidDeleteRequest, options?: Configuration): Promise<any> {
        return this.api.deletePlacePlacesPlacesPlaceUuidDelete(param.placeUuid, param.softDelete, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Forward Geocoding
     * @param param the request object
     */
    public forwardGeocodingPlacesGeocodingForwardGet(param: PlacesApiForwardGeocodingPlacesGeocodingForwardGetRequest, options?: Configuration): Promise<any> {
        return this.api.forwardGeocodingPlacesGeocodingForwardGet(param.searchingPlace, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Gets the place information given the Place ID
     * Get Place
     * @param param the request object
     */
    public getPlacePlacesPlacesPlaceUuidGet(param: PlacesApiGetPlacePlacesPlacesPlaceUuidGetRequest, options?: Configuration): Promise<PlaceResponse> {
        return this.api.getPlacePlacesPlacesPlaceUuidGet(param.placeUuid, param.withMeta, param.withCatalog, param.withReviews, param.withSchedule, param.withCollection, param.withBlog, param.withTags, param.withCategories, param.withCompany, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Reverse Geocoding
     * @param param the request object
     */
    public reverseGeocodingPlacesGeocodingReverseGet(param: PlacesApiReverseGeocodingPlacesGeocodingReverseGetRequest, options?: Configuration): Promise<any> {
        return this.api.reverseGeocodingPlacesGeocodingReverseGet(param._long, param.lat, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Search places by a search string
     * Search Places By Search String
     * @param param the request object
     */
    public searchPlacesBySearchStringPlacesSearchPlacesStringGet(param: PlacesApiSearchPlacesBySearchStringPlacesSearchPlacesStringGetRequest = {}, options?: Configuration): Promise<Page> {
        return this.api.searchPlacesBySearchStringPlacesSearchPlacesStringGet(param.searchString, param.page, param.pageSize, param.sortOn, param.sortDesc, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Search all places and returns paginated results with Places being stored in items field. Can search by `project_uuid, name, address, address_line_2, city, province_state, country, postal_zip_code, lat, lng email` string fields or the `is_public and is_deleted` boolean fields. To search with these fields use query params with string values. For sorting fill out \"sort_desc\" field with either true/false and the \"sort_on\" query parameter with column you want to sort on (ex: name). Max pagination items per page is 50. Item return format: ``` {     uuid                                **type:** string     project_uuid                        **type:** string or None      meta_uuid                           **type:** string or None      catalog_data                        **type:** dict or None      review_group_data                   **type:** dict or None      schedule_data                       **type:** dict or None      collection_data                     **type:** dict or None      blog_data                           **type:** dict or None      tags                                **type:** [TagBase] or None      categories                          **type:** [CategoryBase] or None      company                             **type:** CompanyBase or None      created_at                          **type:** string or None      updated_at                          **type:** string or None      deleted_at                          **type:** string or None  } ```
     * Search Places
     * @param param the request object
     */
    public searchPlacesPlacesPlacesGet(param: PlacesApiSearchPlacesPlacesPlacesGetRequest = {}, options?: Configuration): Promise<Page> {
        return this.api.searchPlacesPlacesPlacesGet(param.projectUuid, param.name, param.addressLine1, param.addressLine2, param.city, param.provinceState, param.country, param.postalZipCode, param.lat, param.lng, param.email, param.isPublic, param.isDeleted, param.withCompany, param.withMeta, param.withCatalog, param.withReviews, param.withSchedule, param.withCollection, param.withBlog, param.withTags, param.withCategories, param.page, param.pageSize, param.sortOn, param.sortDesc, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Update Place with given info, only updating the fields supplied. Place Uuid must be sent however.
     * Update Place
     * @param param the request object
     */
    public updatePlacePlacesPlacesPlaceUuidPut(param: PlacesApiUpdatePlacePlacesPlacesPlaceUuidPutRequest, options?: Configuration): Promise<PlaceResponse> {
        return this.api.updatePlacePlacesPlacesPlaceUuidPut(param.placeUuid, param.placeBase, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

}

import { ObservableProjectsApi } from "./ObservableAPI";
import { ProjectsApiRequestFactory, ProjectsApiResponseProcessor} from "../apis/ProjectsApi";

export interface ProjectsApiAddMemberToProjectProjectsProjectsProjectUuidMembersEntityUuidPostRequest {
    /**
     * 
     * @type string
     * @memberof ProjectsApiaddMemberToProjectProjectsProjectsProjectUuidMembersEntityUuidPost
     */
    projectUuid: string
    /**
     * 
     * @type string
     * @memberof ProjectsApiaddMemberToProjectProjectsProjectsProjectUuidMembersEntityUuidPost
     */
    entityUuid: string
    /**
     * 
     * @type string
     * @memberof ProjectsApiaddMemberToProjectProjectsProjectsProjectUuidMembersEntityUuidPost
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApiaddMemberToProjectProjectsProjectsProjectUuidMembersEntityUuidPost
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApiaddMemberToProjectProjectsProjectsProjectUuidMembersEntityUuidPost
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApiaddMemberToProjectProjectsProjectsProjectUuidMembersEntityUuidPost
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApiaddMemberToProjectProjectsProjectsProjectUuidMembersEntityUuidPost
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApiaddMemberToProjectProjectsProjectsProjectUuidMembersEntityUuidPost
     */
    ehelplyData?: string
}

export interface ProjectsApiArchiveProjectProjectsProjectsProjectUuidDeleteRequest {
    /**
     * 
     * @type string
     * @memberof ProjectsApiarchiveProjectProjectsProjectsProjectUuidDelete
     */
    projectUuid: string
    /**
     * 
     * @type string
     * @memberof ProjectsApiarchiveProjectProjectsProjectsProjectUuidDelete
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApiarchiveProjectProjectsProjectsProjectUuidDelete
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApiarchiveProjectProjectsProjectsProjectUuidDelete
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApiarchiveProjectProjectsProjectsProjectUuidDelete
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApiarchiveProjectProjectsProjectsProjectUuidDelete
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApiarchiveProjectProjectsProjectsProjectUuidDelete
     */
    ehelplyData?: string
}

export interface ProjectsApiCreateProjectKeyProjectsProjectsProjectUuidKeysPostRequest {
    /**
     * 
     * @type string
     * @memberof ProjectsApicreateProjectKeyProjectsProjectsProjectUuidKeysPost
     */
    projectUuid: string
    /**
     * 
     * @type SecurityKeyCreate
     * @memberof ProjectsApicreateProjectKeyProjectsProjectsProjectUuidKeysPost
     */
    securityKeyCreate: SecurityKeyCreate
    /**
     * 
     * @type string
     * @memberof ProjectsApicreateProjectKeyProjectsProjectsProjectUuidKeysPost
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApicreateProjectKeyProjectsProjectsProjectUuidKeysPost
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApicreateProjectKeyProjectsProjectsProjectUuidKeysPost
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApicreateProjectKeyProjectsProjectsProjectUuidKeysPost
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApicreateProjectKeyProjectsProjectsProjectUuidKeysPost
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApicreateProjectKeyProjectsProjectsProjectUuidKeysPost
     */
    ehelplyData?: string
}

export interface ProjectsApiCreateProjectProjectsProjectsPostRequest {
    /**
     * 
     * @type ProjectsProjectCreate
     * @memberof ProjectsApicreateProjectProjectsProjectsPost
     */
    projectsProjectCreate: ProjectsProjectCreate
    /**
     * 
     * @type string
     * @memberof ProjectsApicreateProjectProjectsProjectsPost
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApicreateProjectProjectsProjectsPost
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApicreateProjectProjectsProjectsPost
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApicreateProjectProjectsProjectsPost
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApicreateProjectProjectsProjectsPost
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApicreateProjectProjectsProjectsPost
     */
    ehelplyData?: string
}

export interface ProjectsApiCreateUsageTypeProjectsUsageTypesPostRequest {
    /**
     * 
     * @type ProjectsUsageTypeCreate
     * @memberof ProjectsApicreateUsageTypeProjectsUsageTypesPost
     */
    projectsUsageTypeCreate: ProjectsUsageTypeCreate
    /**
     * 
     * @type string
     * @memberof ProjectsApicreateUsageTypeProjectsUsageTypesPost
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApicreateUsageTypeProjectsUsageTypesPost
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApicreateUsageTypeProjectsUsageTypesPost
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApicreateUsageTypeProjectsUsageTypesPost
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApicreateUsageTypeProjectsUsageTypesPost
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApicreateUsageTypeProjectsUsageTypesPost
     */
    ehelplyData?: string
}

export interface ProjectsApiDeleteUsageTypeProjectsUsageTypesUsageTypeKeyDeleteRequest {
    /**
     * 
     * @type string
     * @memberof ProjectsApideleteUsageTypeProjectsUsageTypesUsageTypeKeyDelete
     */
    usageTypeKey: string
    /**
     * 
     * @type string
     * @memberof ProjectsApideleteUsageTypeProjectsUsageTypesUsageTypeKeyDelete
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApideleteUsageTypeProjectsUsageTypesUsageTypeKeyDelete
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApideleteUsageTypeProjectsUsageTypesUsageTypeKeyDelete
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApideleteUsageTypeProjectsUsageTypesUsageTypeKeyDelete
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApideleteUsageTypeProjectsUsageTypesUsageTypeKeyDelete
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApideleteUsageTypeProjectsUsageTypesUsageTypeKeyDelete
     */
    ehelplyData?: string
}

export interface ProjectsApiGetAllProjectUsageProjectsProjectsProjectUuidUsageGetRequest {
    /**
     * 
     * @type string
     * @memberof ProjectsApigetAllProjectUsageProjectsProjectsProjectUuidUsageGet
     */
    projectUuid: string
    /**
     * 
     * @type number
     * @memberof ProjectsApigetAllProjectUsageProjectsProjectsProjectUuidUsageGet
     */
    year?: number
    /**
     * 
     * @type number
     * @memberof ProjectsApigetAllProjectUsageProjectsProjectsProjectUuidUsageGet
     */
    month?: number
    /**
     * 
     * @type string
     * @memberof ProjectsApigetAllProjectUsageProjectsProjectsProjectUuidUsageGet
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApigetAllProjectUsageProjectsProjectsProjectUuidUsageGet
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApigetAllProjectUsageProjectsProjectsProjectUuidUsageGet
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApigetAllProjectUsageProjectsProjectsProjectUuidUsageGet
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApigetAllProjectUsageProjectsProjectsProjectUuidUsageGet
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApigetAllProjectUsageProjectsProjectsProjectUuidUsageGet
     */
    ehelplyData?: string
}

export interface ProjectsApiGetMemberProjectsProjectsMembersEntityUuidProjectsGetRequest {
    /**
     * 
     * @type string
     * @memberof ProjectsApigetMemberProjectsProjectsMembersEntityUuidProjectsGet
     */
    entityUuid: string
    /**
     * 
     * @type string
     * @memberof ProjectsApigetMemberProjectsProjectsMembersEntityUuidProjectsGet
     */
    role?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApigetMemberProjectsProjectsMembersEntityUuidProjectsGet
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApigetMemberProjectsProjectsMembersEntityUuidProjectsGet
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApigetMemberProjectsProjectsMembersEntityUuidProjectsGet
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApigetMemberProjectsProjectsMembersEntityUuidProjectsGet
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApigetMemberProjectsProjectsMembersEntityUuidProjectsGet
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApigetMemberProjectsProjectsMembersEntityUuidProjectsGet
     */
    ehelplyData?: string
}

export interface ProjectsApiGetProjectKeysProjectsProjectsProjectUuidKeysGetRequest {
    /**
     * 
     * @type string
     * @memberof ProjectsApigetProjectKeysProjectsProjectsProjectUuidKeysGet
     */
    projectUuid: string
    /**
     * 
     * @type string
     * @memberof ProjectsApigetProjectKeysProjectsProjectsProjectUuidKeysGet
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApigetProjectKeysProjectsProjectsProjectUuidKeysGet
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApigetProjectKeysProjectsProjectsProjectUuidKeysGet
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApigetProjectKeysProjectsProjectsProjectUuidKeysGet
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApigetProjectKeysProjectsProjectsProjectUuidKeysGet
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApigetProjectKeysProjectsProjectsProjectUuidKeysGet
     */
    ehelplyData?: string
}

export interface ProjectsApiGetProjectMembersProjectsProjectsProjectUuidMembersGetRequest {
    /**
     * 
     * @type string
     * @memberof ProjectsApigetProjectMembersProjectsProjectsProjectUuidMembersGet
     */
    projectUuid: string
    /**
     * 
     * @type string
     * @memberof ProjectsApigetProjectMembersProjectsProjectsProjectUuidMembersGet
     */
    role?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApigetProjectMembersProjectsProjectsProjectUuidMembersGet
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApigetProjectMembersProjectsProjectsProjectUuidMembersGet
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApigetProjectMembersProjectsProjectsProjectUuidMembersGet
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApigetProjectMembersProjectsProjectsProjectUuidMembersGet
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApigetProjectMembersProjectsProjectsProjectUuidMembersGet
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApigetProjectMembersProjectsProjectsProjectUuidMembersGet
     */
    ehelplyData?: string
}

export interface ProjectsApiGetProjectProjectsProjectsProjectUuidGetRequest {
    /**
     * 
     * @type string
     * @memberof ProjectsApigetProjectProjectsProjectsProjectUuidGet
     */
    projectUuid: string
    /**
     * 
     * @type string
     * @memberof ProjectsApigetProjectProjectsProjectsProjectUuidGet
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApigetProjectProjectsProjectsProjectUuidGet
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApigetProjectProjectsProjectsProjectUuidGet
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApigetProjectProjectsProjectsProjectUuidGet
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApigetProjectProjectsProjectsProjectUuidGet
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApigetProjectProjectsProjectsProjectUuidGet
     */
    ehelplyData?: string
}

export interface ProjectsApiGetSpecificProjectUsageProjectsProjectsProjectUuidUsageUsageTypeKeyGetRequest {
    /**
     * 
     * @type string
     * @memberof ProjectsApigetSpecificProjectUsageProjectsProjectsProjectUuidUsageUsageTypeKeyGet
     */
    usageTypeKey: string
    /**
     * 
     * @type string
     * @memberof ProjectsApigetSpecificProjectUsageProjectsProjectsProjectUuidUsageUsageTypeKeyGet
     */
    projectUuid: string
    /**
     * 
     * @type string
     * @memberof ProjectsApigetSpecificProjectUsageProjectsProjectsProjectUuidUsageUsageTypeKeyGet
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApigetSpecificProjectUsageProjectsProjectsProjectUuidUsageUsageTypeKeyGet
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApigetSpecificProjectUsageProjectsProjectsProjectUuidUsageUsageTypeKeyGet
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApigetSpecificProjectUsageProjectsProjectsProjectUuidUsageUsageTypeKeyGet
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApigetSpecificProjectUsageProjectsProjectsProjectUuidUsageUsageTypeKeyGet
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApigetSpecificProjectUsageProjectsProjectsProjectUuidUsageUsageTypeKeyGet
     */
    ehelplyData?: string
}

export interface ProjectsApiGetUsageTypeProjectsUsageTypesUsageTypeKeyGetRequest {
    /**
     * 
     * @type string
     * @memberof ProjectsApigetUsageTypeProjectsUsageTypesUsageTypeKeyGet
     */
    usageTypeKey: string
}

export interface ProjectsApiRemoveMemberFromProjectProjectsProjectsProjectUuidMembersEntityUuidDeleteRequest {
    /**
     * 
     * @type string
     * @memberof ProjectsApiremoveMemberFromProjectProjectsProjectsProjectUuidMembersEntityUuidDelete
     */
    projectUuid: string
    /**
     * 
     * @type string
     * @memberof ProjectsApiremoveMemberFromProjectProjectsProjectsProjectUuidMembersEntityUuidDelete
     */
    entityUuid: string
    /**
     * 
     * @type string
     * @memberof ProjectsApiremoveMemberFromProjectProjectsProjectsProjectUuidMembersEntityUuidDelete
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApiremoveMemberFromProjectProjectsProjectsProjectUuidMembersEntityUuidDelete
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApiremoveMemberFromProjectProjectsProjectsProjectUuidMembersEntityUuidDelete
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApiremoveMemberFromProjectProjectsProjectsProjectUuidMembersEntityUuidDelete
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApiremoveMemberFromProjectProjectsProjectsProjectUuidMembersEntityUuidDelete
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApiremoveMemberFromProjectProjectsProjectsProjectUuidMembersEntityUuidDelete
     */
    ehelplyData?: string
}

export interface ProjectsApiRemoveProjectKeyProjectsProjectsProjectUuidKeysDeleteRequest {
    /**
     * 
     * @type string
     * @memberof ProjectsApiremoveProjectKeyProjectsProjectsProjectUuidKeysDelete
     */
    projectUuid: string
    /**
     * 
     * @type string
     * @memberof ProjectsApiremoveProjectKeyProjectsProjectsProjectUuidKeysDelete
     */
    accessToken?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApiremoveProjectKeyProjectsProjectsProjectUuidKeysDelete
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApiremoveProjectKeyProjectsProjectsProjectUuidKeysDelete
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApiremoveProjectKeyProjectsProjectsProjectUuidKeysDelete
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApiremoveProjectKeyProjectsProjectsProjectUuidKeysDelete
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApiremoveProjectKeyProjectsProjectsProjectUuidKeysDelete
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApiremoveProjectKeyProjectsProjectsProjectUuidKeysDelete
     */
    ehelplyData?: string
}

export interface ProjectsApiSandboxProjectsSandboxGetRequest {
    /**
     * 
     * @type string
     * @memberof ProjectsApisandboxProjectsSandboxGet
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApisandboxProjectsSandboxGet
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApisandboxProjectsSandboxGet
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApisandboxProjectsSandboxGet
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApisandboxProjectsSandboxGet
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApisandboxProjectsSandboxGet
     */
    ehelplyData?: string
}

export interface ProjectsApiSearchProjectsProjectsProjectsGetRequest {
    /**
     * 
     * @type number
     * @memberof ProjectsApisearchProjectsProjectsProjectsGet
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof ProjectsApisearchProjectsProjectsProjectsGet
     */
    pageSize?: number
    /**
     * 
     * @type string
     * @memberof ProjectsApisearchProjectsProjectsProjectsGet
     */
    search?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApisearchProjectsProjectsProjectsGet
     */
    searchOn?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApisearchProjectsProjectsProjectsGet
     */
    sortOn?: string
    /**
     * 
     * @type boolean
     * @memberof ProjectsApisearchProjectsProjectsProjectsGet
     */
    sortDesc?: boolean
    /**
     * 
     * @type string
     * @memberof ProjectsApisearchProjectsProjectsProjectsGet
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApisearchProjectsProjectsProjectsGet
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApisearchProjectsProjectsProjectsGet
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApisearchProjectsProjectsProjectsGet
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApisearchProjectsProjectsProjectsGet
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApisearchProjectsProjectsProjectsGet
     */
    ehelplyData?: string
}

export interface ProjectsApiSearchUsageTypeProjectsUsageTypesGetRequest {
    /**
     * 
     * @type number
     * @memberof ProjectsApisearchUsageTypeProjectsUsageTypesGet
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof ProjectsApisearchUsageTypeProjectsUsageTypesGet
     */
    pageSize?: number
    /**
     * 
     * @type string
     * @memberof ProjectsApisearchUsageTypeProjectsUsageTypesGet
     */
    search?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApisearchUsageTypeProjectsUsageTypesGet
     */
    searchOn?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApisearchUsageTypeProjectsUsageTypesGet
     */
    sortOn?: string
    /**
     * 
     * @type boolean
     * @memberof ProjectsApisearchUsageTypeProjectsUsageTypesGet
     */
    sortDesc?: boolean
}

export interface ProjectsApiUpdateProjectProjectsProjectsProjectUuidPutRequest {
    /**
     * 
     * @type string
     * @memberof ProjectsApiupdateProjectProjectsProjectsProjectUuidPut
     */
    projectUuid: string
    /**
     * 
     * @type ProjectsProjectUpdate
     * @memberof ProjectsApiupdateProjectProjectsProjectsProjectUuidPut
     */
    projectsProjectUpdate: ProjectsProjectUpdate
    /**
     * 
     * @type string
     * @memberof ProjectsApiupdateProjectProjectsProjectsProjectUuidPut
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApiupdateProjectProjectsProjectsProjectUuidPut
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApiupdateProjectProjectsProjectsProjectUuidPut
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApiupdateProjectProjectsProjectsProjectUuidPut
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApiupdateProjectProjectsProjectsProjectUuidPut
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApiupdateProjectProjectsProjectsProjectUuidPut
     */
    ehelplyData?: string
}

export interface ProjectsApiUpdateUsageTypeProjectsUsageTypesUsageTypeKeyPutRequest {
    /**
     * 
     * @type string
     * @memberof ProjectsApiupdateUsageTypeProjectsUsageTypesUsageTypeKeyPut
     */
    usageTypeKey: string
    /**
     * 
     * @type ProjectsUsageTypeUpdate
     * @memberof ProjectsApiupdateUsageTypeProjectsUsageTypesUsageTypeKeyPut
     */
    projectsUsageTypeUpdate: ProjectsUsageTypeUpdate
    /**
     * 
     * @type string
     * @memberof ProjectsApiupdateUsageTypeProjectsUsageTypesUsageTypeKeyPut
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApiupdateUsageTypeProjectsUsageTypesUsageTypeKeyPut
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApiupdateUsageTypeProjectsUsageTypesUsageTypeKeyPut
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApiupdateUsageTypeProjectsUsageTypesUsageTypeKeyPut
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApiupdateUsageTypeProjectsUsageTypesUsageTypeKeyPut
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof ProjectsApiupdateUsageTypeProjectsUsageTypesUsageTypeKeyPut
     */
    ehelplyData?: string
}

export class ObjectProjectsApi {
    private api: ObservableProjectsApi

    public constructor(configuration: Configuration, requestFactory?: ProjectsApiRequestFactory, responseProcessor?: ProjectsApiResponseProcessor) {
        this.api = new ObservableProjectsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add Member To Project
     * @param param the request object
     */
    public addMemberToProjectProjectsProjectsProjectUuidMembersEntityUuidPost(param: ProjectsApiAddMemberToProjectProjectsProjectsProjectUuidMembersEntityUuidPostRequest, options?: Configuration): Promise<InlineResponse2005> {
        return this.api.addMemberToProjectProjectsProjectsProjectUuidMembersEntityUuidPost(param.projectUuid, param.entityUuid, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Archive Project
     * @param param the request object
     */
    public archiveProjectProjectsProjectsProjectUuidDelete(param: ProjectsApiArchiveProjectProjectsProjectsProjectUuidDeleteRequest, options?: Configuration): Promise<InlineResponse2003> {
        return this.api.archiveProjectProjectsProjectsProjectUuidDelete(param.projectUuid, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Create Project Key
     * @param param the request object
     */
    public createProjectKeyProjectsProjectsProjectUuidKeysPost(param: ProjectsApiCreateProjectKeyProjectsProjectsProjectUuidKeysPostRequest, options?: Configuration): Promise<CreateKeyResponse> {
        return this.api.createProjectKeyProjectsProjectsProjectUuidKeysPost(param.projectUuid, param.securityKeyCreate, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Create a new Project
     * Create Project
     * @param param the request object
     */
    public createProjectProjectsProjectsPost(param: ProjectsApiCreateProjectProjectsProjectsPostRequest, options?: Configuration): Promise<any> {
        return this.api.createProjectProjectsProjectsPost(param.projectsProjectCreate, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Create Usage Type
     * @param param the request object
     */
    public createUsageTypeProjectsUsageTypesPost(param: ProjectsApiCreateUsageTypeProjectsUsageTypesPostRequest, options?: Configuration): Promise<ProjectsUsageTypeDB> {
        return this.api.createUsageTypeProjectsUsageTypesPost(param.projectsUsageTypeCreate, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Delete Usage Type
     * @param param the request object
     */
    public deleteUsageTypeProjectsUsageTypesUsageTypeKeyDelete(param: ProjectsApiDeleteUsageTypeProjectsUsageTypesUsageTypeKeyDeleteRequest, options?: Configuration): Promise<InlineResponse2004> {
        return this.api.deleteUsageTypeProjectsUsageTypesUsageTypeKeyDelete(param.usageTypeKey, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Get All Project Usage
     * @param param the request object
     */
    public getAllProjectUsageProjectsProjectsProjectUuidUsageGet(param: ProjectsApiGetAllProjectUsageProjectsProjectsProjectUuidUsageGetRequest, options?: Configuration): Promise<Array<ProjectsProjectUsageDB>> {
        return this.api.getAllProjectUsageProjectsProjectsProjectUuidUsageGet(param.projectUuid, param.year, param.month, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Get Member Projects
     * @param param the request object
     */
    public getMemberProjectsProjectsMembersEntityUuidProjectsGet(param: ProjectsApiGetMemberProjectsProjectsMembersEntityUuidProjectsGetRequest, options?: Configuration): Promise<Array<ProjectsProjectGet>> {
        return this.api.getMemberProjectsProjectsMembersEntityUuidProjectsGet(param.entityUuid, param.role, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Get Project Keys
     * @param param the request object
     */
    public getProjectKeysProjectsProjectsProjectUuidKeysGet(param: ProjectsApiGetProjectKeysProjectsProjectsProjectUuidKeysGetRequest, options?: Configuration): Promise<Array<ProjectsProjectMemberDB>> {
        return this.api.getProjectKeysProjectsProjectsProjectUuidKeysGet(param.projectUuid, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Get Project Members
     * @param param the request object
     */
    public getProjectMembersProjectsProjectsProjectUuidMembersGet(param: ProjectsApiGetProjectMembersProjectsProjectsProjectUuidMembersGetRequest, options?: Configuration): Promise<Array<ProjectsProjectMemberDB>> {
        return this.api.getProjectMembersProjectsProjectsProjectUuidMembersGet(param.projectUuid, param.role, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Get a Project
     * Get Project
     * @param param the request object
     */
    public getProjectProjectsProjectsProjectUuidGet(param: ProjectsApiGetProjectProjectsProjectsProjectUuidGetRequest, options?: Configuration): Promise<any> {
        return this.api.getProjectProjectsProjectsProjectUuidGet(param.projectUuid, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Get Specific Project Usage
     * @param param the request object
     */
    public getSpecificProjectUsageProjectsProjectsProjectUuidUsageUsageTypeKeyGet(param: ProjectsApiGetSpecificProjectUsageProjectsProjectsProjectUuidUsageUsageTypeKeyGetRequest, options?: Configuration): Promise<ProjectsProjectUsageDB> {
        return this.api.getSpecificProjectUsageProjectsProjectsProjectUuidUsageUsageTypeKeyGet(param.usageTypeKey, param.projectUuid, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Get a UsageType  No auth because we may want to use this on pricing/docs pages
     * Get Usage Type
     * @param param the request object
     */
    public getUsageTypeProjectsUsageTypesUsageTypeKeyGet(param: ProjectsApiGetUsageTypeProjectsUsageTypesUsageTypeKeyGetRequest, options?: Configuration): Promise<ProjectsUsageTypeGet> {
        return this.api.getUsageTypeProjectsUsageTypesUsageTypeKeyGet(param.usageTypeKey,  options).toPromise();
    }

    /**
     * Remove Member From Project
     * @param param the request object
     */
    public removeMemberFromProjectProjectsProjectsProjectUuidMembersEntityUuidDelete(param: ProjectsApiRemoveMemberFromProjectProjectsProjectsProjectUuidMembersEntityUuidDeleteRequest, options?: Configuration): Promise<InlineResponse2005> {
        return this.api.removeMemberFromProjectProjectsProjectsProjectUuidMembersEntityUuidDelete(param.projectUuid, param.entityUuid, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Remove Project Key
     * @param param the request object
     */
    public removeProjectKeyProjectsProjectsProjectUuidKeysDelete(param: ProjectsApiRemoveProjectKeyProjectsProjectsProjectUuidKeysDeleteRequest, options?: Configuration): Promise<any> {
        return this.api.removeProjectKeyProjectsProjectsProjectUuidKeysDelete(param.projectUuid, param.accessToken, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Sandbox
     * @param param the request object
     */
    public sandboxProjectsSandboxGet(param: ProjectsApiSandboxProjectsSandboxGetRequest = {}, options?: Configuration): Promise<any> {
        return this.api.sandboxProjectsSandboxGet(param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Search projects
     * Search Projects
     * @param param the request object
     */
    public searchProjectsProjectsProjectsGet(param: ProjectsApiSearchProjectsProjectsProjectsGetRequest = {}, options?: Configuration): Promise<Page> {
        return this.api.searchProjectsProjectsProjectsGet(param.page, param.pageSize, param.search, param.searchOn, param.sortOn, param.sortDesc, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Get a UsageType  No auth because we may want to use this on pricing/docs pages
     * Search Usage Type
     * @param param the request object
     */
    public searchUsageTypeProjectsUsageTypesGet(param: ProjectsApiSearchUsageTypeProjectsUsageTypesGetRequest = {}, options?: Configuration): Promise<Page> {
        return this.api.searchUsageTypeProjectsUsageTypesGet(param.page, param.pageSize, param.search, param.searchOn, param.sortOn, param.sortDesc,  options).toPromise();
    }

    /**
     * Update Project
     * @param param the request object
     */
    public updateProjectProjectsProjectsProjectUuidPut(param: ProjectsApiUpdateProjectProjectsProjectsProjectUuidPutRequest, options?: Configuration): Promise<any> {
        return this.api.updateProjectProjectsProjectsProjectUuidPut(param.projectUuid, param.projectsProjectUpdate, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Update Usage Type
     * @param param the request object
     */
    public updateUsageTypeProjectsUsageTypesUsageTypeKeyPut(param: ProjectsApiUpdateUsageTypeProjectsUsageTypesUsageTypeKeyPutRequest, options?: Configuration): Promise<ProjectsUsageTypeDB> {
        return this.api.updateUsageTypeProjectsUsageTypesUsageTypeKeyPut(param.usageTypeKey, param.projectsUsageTypeUpdate, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

}

import { ObservableSecurityApi } from "./ObservableAPI";
import { SecurityApiRequestFactory, SecurityApiResponseProcessor} from "../apis/SecurityApi";

export interface SecurityApiCreateEncryptionKeySecurityEncryptionCategoriesCategoryKeysPostRequest {
    /**
     * 
     * @type string
     * @memberof SecurityApicreateEncryptionKeySecurityEncryptionCategoriesCategoryKeysPost
     */
    category: string
    /**
     * 
     * @type string
     * @memberof SecurityApicreateEncryptionKeySecurityEncryptionCategoriesCategoryKeysPost
     */
    ehelplySecuritySecretKey?: string
}

export interface SecurityApiCreateKeySecurityKeysPostRequest {
    /**
     * 
     * @type BodyCreateKeySecurityKeysPost
     * @memberof SecurityApicreateKeySecurityKeysPost
     */
    bodyCreateKeySecurityKeysPost: BodyCreateKeySecurityKeysPost
    /**
     * 
     * @type number
     * @memberof SecurityApicreateKeySecurityKeysPost
     */
    accessLength?: number
    /**
     * 
     * @type number
     * @memberof SecurityApicreateKeySecurityKeysPost
     */
    secretLength?: number
}

export interface SecurityApiDeleteKeySecurityKeysKeyUuidDeleteRequest {
    /**
     * 
     * @type string
     * @memberof SecurityApideleteKeySecurityKeysKeyUuidDelete
     */
    keyUuid: string
}

export interface SecurityApiGenerateTokenSecurityTokensPostRequest {
    /**
     * 
     * @type BodyGenerateTokenSecurityTokensPost
     * @memberof SecurityApigenerateTokenSecurityTokensPost
     */
    bodyGenerateTokenSecurityTokensPost: BodyGenerateTokenSecurityTokensPost
}

export interface SecurityApiGetEncryptionKeySecurityEncryptionCategoriesCategoryKeysGetRequest {
    /**
     * 
     * @type string
     * @memberof SecurityApigetEncryptionKeySecurityEncryptionCategoriesCategoryKeysGet
     */
    category: string
    /**
     * 
     * @type string
     * @memberof SecurityApigetEncryptionKeySecurityEncryptionCategoriesCategoryKeysGet
     */
    ehelplySecuritySecretKey?: string
}

export interface SecurityApiGetKeySecurityKeysKeyUuidGetRequest {
    /**
     * 
     * @type string
     * @memberof SecurityApigetKeySecurityKeysKeyUuidGet
     */
    keyUuid: string
}

export interface SecurityApiSearchKeysSecurityKeysGetRequest {
}

export interface SecurityApiVerifyKeySecurityKeysVerifyPostRequest {
    /**
     * 
     * @type BodyVerifyKeySecurityKeysVerifyPost
     * @memberof SecurityApiverifyKeySecurityKeysVerifyPost
     */
    bodyVerifyKeySecurityKeysVerifyPost: BodyVerifyKeySecurityKeysVerifyPost
}

export class ObjectSecurityApi {
    private api: ObservableSecurityApi

    public constructor(configuration: Configuration, requestFactory?: SecurityApiRequestFactory, responseProcessor?: SecurityApiResponseProcessor) {
        this.api = new ObservableSecurityApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create Encryption Key
     * @param param the request object
     */
    public createEncryptionKeySecurityEncryptionCategoriesCategoryKeysPost(param: SecurityApiCreateEncryptionKeySecurityEncryptionCategoriesCategoryKeysPostRequest, options?: Configuration): Promise<any> {
        return this.api.createEncryptionKeySecurityEncryptionCategoriesCategoryKeysPost(param.category, param.ehelplySecuritySecretKey,  options).toPromise();
    }

    /**
     * Create Key
     * @param param the request object
     */
    public createKeySecurityKeysPost(param: SecurityApiCreateKeySecurityKeysPostRequest, options?: Configuration): Promise<InlineResponse2007> {
        return this.api.createKeySecurityKeysPost(param.bodyCreateKeySecurityKeysPost, param.accessLength, param.secretLength,  options).toPromise();
    }

    /**
     * Delete Key
     * @param param the request object
     */
    public deleteKeySecurityKeysKeyUuidDelete(param: SecurityApiDeleteKeySecurityKeysKeyUuidDeleteRequest, options?: Configuration): Promise<InlineResponse2008> {
        return this.api.deleteKeySecurityKeysKeyUuidDelete(param.keyUuid,  options).toPromise();
    }

    /**
     * Generate Token
     * @param param the request object
     */
    public generateTokenSecurityTokensPost(param: SecurityApiGenerateTokenSecurityTokensPostRequest, options?: Configuration): Promise<InlineResponse2006> {
        return this.api.generateTokenSecurityTokensPost(param.bodyGenerateTokenSecurityTokensPost,  options).toPromise();
    }

    /**
     * Get Encryption Key
     * @param param the request object
     */
    public getEncryptionKeySecurityEncryptionCategoriesCategoryKeysGet(param: SecurityApiGetEncryptionKeySecurityEncryptionCategoriesCategoryKeysGetRequest, options?: Configuration): Promise<Array<SecurityEncryptionKeyGet>> {
        return this.api.getEncryptionKeySecurityEncryptionCategoriesCategoryKeysGet(param.category, param.ehelplySecuritySecretKey,  options).toPromise();
    }

    /**
     * Get Key
     * @param param the request object
     */
    public getKeySecurityKeysKeyUuidGet(param: SecurityApiGetKeySecurityKeysKeyUuidGetRequest, options?: Configuration): Promise<SecurityKeyGet> {
        return this.api.getKeySecurityKeysKeyUuidGet(param.keyUuid,  options).toPromise();
    }

    /**
     * Search Keys
     * @param param the request object
     */
    public searchKeysSecurityKeysGet(param: SecurityApiSearchKeysSecurityKeysGetRequest = {}, options?: Configuration): Promise<Array<SecurityKeyGet>> {
        return this.api.searchKeysSecurityKeysGet( options).toPromise();
    }

    /**
     * Verify Key
     * @param param the request object
     */
    public verifyKeySecurityKeysVerifyPost(param: SecurityApiVerifyKeySecurityKeysVerifyPostRequest, options?: Configuration): Promise<SecurityKeyGet> {
        return this.api.verifyKeySecurityKeysVerifyPost(param.bodyVerifyKeySecurityKeysVerifyPost,  options).toPromise();
    }

}

import { ObservableStaffApi } from "./ObservableAPI";
import { StaffApiRequestFactory, StaffApiResponseProcessor} from "../apis/StaffApi";

export interface StaffApiCreateStaffPlacesStaffPostRequest {
    /**
     * 
     * @type StaffCreate
     * @memberof StaffApicreateStaffPlacesStaffPost
     */
    staffCreate: StaffCreate
    /**
     * 
     * @type string
     * @memberof StaffApicreateStaffPlacesStaffPost
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof StaffApicreateStaffPlacesStaffPost
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof StaffApicreateStaffPlacesStaffPost
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof StaffApicreateStaffPlacesStaffPost
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof StaffApicreateStaffPlacesStaffPost
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof StaffApicreateStaffPlacesStaffPost
     */
    ehelplyData?: string
}

export interface StaffApiDeleteStaffPlacesStaffStaffUuidDeleteRequest {
    /**
     * 
     * @type string
     * @memberof StaffApideleteStaffPlacesStaffStaffUuidDelete
     */
    staffUuid: string
    /**
     * 
     * @type boolean
     * @memberof StaffApideleteStaffPlacesStaffStaffUuidDelete
     */
    softDelete?: boolean
    /**
     * 
     * @type string
     * @memberof StaffApideleteStaffPlacesStaffStaffUuidDelete
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof StaffApideleteStaffPlacesStaffStaffUuidDelete
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof StaffApideleteStaffPlacesStaffStaffUuidDelete
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof StaffApideleteStaffPlacesStaffStaffUuidDelete
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof StaffApideleteStaffPlacesStaffStaffUuidDelete
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof StaffApideleteStaffPlacesStaffStaffUuidDelete
     */
    ehelplyData?: string
}

export interface StaffApiGetStaffPlacesStaffStaffUuidGetRequest {
    /**
     * 
     * @type string
     * @memberof StaffApigetStaffPlacesStaffStaffUuidGet
     */
    staffUuid: string
    /**
     * 
     * @type boolean
     * @memberof StaffApigetStaffPlacesStaffStaffUuidGet
     */
    withPlaces?: boolean
    /**
     * 
     * @type boolean
     * @memberof StaffApigetStaffPlacesStaffStaffUuidGet
     */
    withCompanies?: boolean
    /**
     * 
     * @type boolean
     * @memberof StaffApigetStaffPlacesStaffStaffUuidGet
     */
    withCatalog?: boolean
    /**
     * 
     * @type boolean
     * @memberof StaffApigetStaffPlacesStaffStaffUuidGet
     */
    withSchedule?: boolean
    /**
     * 
     * @type boolean
     * @memberof StaffApigetStaffPlacesStaffStaffUuidGet
     */
    withRoles?: boolean
    /**
     * 
     * @type string
     * @memberof StaffApigetStaffPlacesStaffStaffUuidGet
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof StaffApigetStaffPlacesStaffStaffUuidGet
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof StaffApigetStaffPlacesStaffStaffUuidGet
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof StaffApigetStaffPlacesStaffStaffUuidGet
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof StaffApigetStaffPlacesStaffStaffUuidGet
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof StaffApigetStaffPlacesStaffStaffUuidGet
     */
    ehelplyData?: string
}

export interface StaffApiSearchStaffPlacesStaffGetRequest {
    /**
     * 
     * @type string
     * @memberof StaffApisearchStaffPlacesStaffGet
     */
    projectUuid?: string
    /**
     * 
     * @type string
     * @memberof StaffApisearchStaffPlacesStaffGet
     */
    firstName?: string
    /**
     * 
     * @type string
     * @memberof StaffApisearchStaffPlacesStaffGet
     */
    lastName?: string
    /**
     * 
     * @type boolean
     * @memberof StaffApisearchStaffPlacesStaffGet
     */
    isDeleted?: boolean
    /**
     * 
     * @type boolean
     * @memberof StaffApisearchStaffPlacesStaffGet
     */
    withCompanies?: boolean
    /**
     * 
     * @type boolean
     * @memberof StaffApisearchStaffPlacesStaffGet
     */
    withPlaces?: boolean
    /**
     * 
     * @type boolean
     * @memberof StaffApisearchStaffPlacesStaffGet
     */
    withSchedule?: boolean
    /**
     * 
     * @type boolean
     * @memberof StaffApisearchStaffPlacesStaffGet
     */
    withCatalog?: boolean
    /**
     * 
     * @type boolean
     * @memberof StaffApisearchStaffPlacesStaffGet
     */
    withReviews?: boolean
    /**
     * 
     * @type boolean
     * @memberof StaffApisearchStaffPlacesStaffGet
     */
    withRoles?: boolean
    /**
     * 
     * @type number
     * @memberof StaffApisearchStaffPlacesStaffGet
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof StaffApisearchStaffPlacesStaffGet
     */
    pageSize?: number
    /**
     * 
     * @type string
     * @memberof StaffApisearchStaffPlacesStaffGet
     */
    sortOn?: string
    /**
     * 
     * @type boolean
     * @memberof StaffApisearchStaffPlacesStaffGet
     */
    sortDesc?: boolean
    /**
     * 
     * @type string
     * @memberof StaffApisearchStaffPlacesStaffGet
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof StaffApisearchStaffPlacesStaffGet
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof StaffApisearchStaffPlacesStaffGet
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof StaffApisearchStaffPlacesStaffGet
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof StaffApisearchStaffPlacesStaffGet
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof StaffApisearchStaffPlacesStaffGet
     */
    ehelplyData?: string
}

export interface StaffApiUpdateStaffPlacesStaffStaffUuidPutRequest {
    /**
     * 
     * @type string
     * @memberof StaffApiupdateStaffPlacesStaffStaffUuidPut
     */
    staffUuid: string
    /**
     * 
     * @type StaffCreate
     * @memberof StaffApiupdateStaffPlacesStaffStaffUuidPut
     */
    staffCreate: StaffCreate
    /**
     * 
     * @type string
     * @memberof StaffApiupdateStaffPlacesStaffStaffUuidPut
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof StaffApiupdateStaffPlacesStaffStaffUuidPut
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof StaffApiupdateStaffPlacesStaffStaffUuidPut
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof StaffApiupdateStaffPlacesStaffStaffUuidPut
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof StaffApiupdateStaffPlacesStaffStaffUuidPut
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof StaffApiupdateStaffPlacesStaffStaffUuidPut
     */
    ehelplyData?: string
}

export class ObjectStaffApi {
    private api: ObservableStaffApi

    public constructor(configuration: Configuration, requestFactory?: StaffApiRequestFactory, responseProcessor?: StaffApiResponseProcessor) {
        this.api = new ObservableStaffApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a staff member
     * Create Staff
     * @param param the request object
     */
    public createStaffPlacesStaffPost(param: StaffApiCreateStaffPlacesStaffPostRequest, options?: Configuration): Promise<StaffDb> {
        return this.api.createStaffPlacesStaffPost(param.staffCreate, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Deletes the staff member with the given ID and returns True if successful
     * Delete Staff
     * @param param the request object
     */
    public deleteStaffPlacesStaffStaffUuidDelete(param: StaffApiDeleteStaffPlacesStaffStaffUuidDeleteRequest, options?: Configuration): Promise<any> {
        return this.api.deleteStaffPlacesStaffStaffUuidDelete(param.staffUuid, param.softDelete, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Gets the staff member information given the staff ID
     * Get Staff
     * @param param the request object
     */
    public getStaffPlacesStaffStaffUuidGet(param: StaffApiGetStaffPlacesStaffStaffUuidGetRequest, options?: Configuration): Promise<StaffResponse> {
        return this.api.getStaffPlacesStaffStaffUuidGet(param.staffUuid, param.withPlaces, param.withCompanies, param.withCatalog, param.withSchedule, param.withRoles, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * TODO Item return format: ``` {     uuid                                **type:** string     project_uuid                        **type:** string or None      entity                              **type:** string or None      place                               **type:** dict or None      company                             **type:** dict or None      schedule                            **type:** dict or None      catalog                             **type:** dict or None      reviews                             **type:** dict or None      created_at                          **type:** string or None      updated_at                          **type:** string or None      deleted_at                          **type:** string or None  } ```
     * Search Staff
     * @param param the request object
     */
    public searchStaffPlacesStaffGet(param: StaffApiSearchStaffPlacesStaffGetRequest = {}, options?: Configuration): Promise<Page> {
        return this.api.searchStaffPlacesStaffGet(param.projectUuid, param.firstName, param.lastName, param.isDeleted, param.withCompanies, param.withPlaces, param.withSchedule, param.withCatalog, param.withReviews, param.withRoles, param.page, param.pageSize, param.sortOn, param.sortDesc, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Update staff with given info, only updating the fields supplied. Staff Uuid must be sent however.
     * Update Staff
     * @param param the request object
     */
    public updateStaffPlacesStaffStaffUuidPut(param: StaffApiUpdateStaffPlacesStaffStaffUuidPutRequest, options?: Configuration): Promise<StaffResponse> {
        return this.api.updateStaffPlacesStaffStaffUuidPut(param.staffUuid, param.staffCreate, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

}

import { ObservableSupportApi } from "./ObservableAPI";
import { SupportApiRequestFactory, SupportApiResponseProcessor} from "../apis/SupportApi";

export interface SupportApiCreateContactSupportContactPostRequest {
    /**
     * 
     * @type Contact
     * @memberof SupportApicreateContactSupportContactPost
     */
    contact: Contact
    /**
     * 
     * @type string
     * @memberof SupportApicreateContactSupportContactPost
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof SupportApicreateContactSupportContactPost
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof SupportApicreateContactSupportContactPost
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof SupportApicreateContactSupportContactPost
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof SupportApicreateContactSupportContactPost
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof SupportApicreateContactSupportContactPost
     */
    ehelplyData?: string
}

export interface SupportApiCreateTicketSupportProjectsProjectUuidMembersMemberUuidTicketsPostRequest {
    /**
     * 
     * @type string
     * @memberof SupportApicreateTicketSupportProjectsProjectUuidMembersMemberUuidTicketsPost
     */
    projectUuid: string
    /**
     * 
     * @type string
     * @memberof SupportApicreateTicketSupportProjectsProjectUuidMembersMemberUuidTicketsPost
     */
    memberUuid: string
    /**
     * 
     * @type CreateTicket
     * @memberof SupportApicreateTicketSupportProjectsProjectUuidMembersMemberUuidTicketsPost
     */
    createTicket: CreateTicket
    /**
     * 
     * @type string
     * @memberof SupportApicreateTicketSupportProjectsProjectUuidMembersMemberUuidTicketsPost
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof SupportApicreateTicketSupportProjectsProjectUuidMembersMemberUuidTicketsPost
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof SupportApicreateTicketSupportProjectsProjectUuidMembersMemberUuidTicketsPost
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof SupportApicreateTicketSupportProjectsProjectUuidMembersMemberUuidTicketsPost
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof SupportApicreateTicketSupportProjectsProjectUuidMembersMemberUuidTicketsPost
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof SupportApicreateTicketSupportProjectsProjectUuidMembersMemberUuidTicketsPost
     */
    ehelplyData?: string
}

export interface SupportApiDeleteContactSupportContactDeleteRequest {
    /**
     * 
     * @type string
     * @memberof SupportApideleteContactSupportContactDelete
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof SupportApideleteContactSupportContactDelete
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof SupportApideleteContactSupportContactDelete
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof SupportApideleteContactSupportContactDelete
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof SupportApideleteContactSupportContactDelete
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof SupportApideleteContactSupportContactDelete
     */
    ehelplyData?: string
}

export interface SupportApiListTicketsSupportProjectsProjectUuidMembersMemberUuidTicketsGetRequest {
    /**
     * 
     * @type string
     * @memberof SupportApilistTicketsSupportProjectsProjectUuidMembersMemberUuidTicketsGet
     */
    projectUuid: string
    /**
     * 
     * @type string
     * @memberof SupportApilistTicketsSupportProjectsProjectUuidMembersMemberUuidTicketsGet
     */
    memberUuid: string
    /**
     * 
     * @type string
     * @memberof SupportApilistTicketsSupportProjectsProjectUuidMembersMemberUuidTicketsGet
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof SupportApilistTicketsSupportProjectsProjectUuidMembersMemberUuidTicketsGet
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof SupportApilistTicketsSupportProjectsProjectUuidMembersMemberUuidTicketsGet
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof SupportApilistTicketsSupportProjectsProjectUuidMembersMemberUuidTicketsGet
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof SupportApilistTicketsSupportProjectsProjectUuidMembersMemberUuidTicketsGet
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof SupportApilistTicketsSupportProjectsProjectUuidMembersMemberUuidTicketsGet
     */
    ehelplyData?: string
}

export interface SupportApiUpdateTicketSupportProjectsProjectUuidMembersMemberUuidTicketsTicketIdPutRequest {
    /**
     * 
     * @type string
     * @memberof SupportApiupdateTicketSupportProjectsProjectUuidMembersMemberUuidTicketsTicketIdPut
     */
    projectUuid: string
    /**
     * 
     * @type string
     * @memberof SupportApiupdateTicketSupportProjectsProjectUuidMembersMemberUuidTicketsTicketIdPut
     */
    memberUuid: string
    /**
     * 
     * @type string
     * @memberof SupportApiupdateTicketSupportProjectsProjectUuidMembersMemberUuidTicketsTicketIdPut
     */
    ticketId: string
    /**
     * 
     * @type CreateTicket
     * @memberof SupportApiupdateTicketSupportProjectsProjectUuidMembersMemberUuidTicketsTicketIdPut
     */
    createTicket: CreateTicket
    /**
     * 
     * @type string
     * @memberof SupportApiupdateTicketSupportProjectsProjectUuidMembersMemberUuidTicketsTicketIdPut
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof SupportApiupdateTicketSupportProjectsProjectUuidMembersMemberUuidTicketsTicketIdPut
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof SupportApiupdateTicketSupportProjectsProjectUuidMembersMemberUuidTicketsTicketIdPut
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof SupportApiupdateTicketSupportProjectsProjectUuidMembersMemberUuidTicketsTicketIdPut
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof SupportApiupdateTicketSupportProjectsProjectUuidMembersMemberUuidTicketsTicketIdPut
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof SupportApiupdateTicketSupportProjectsProjectUuidMembersMemberUuidTicketsTicketIdPut
     */
    ehelplyData?: string
}

export interface SupportApiViewTicketSupportProjectsProjectUuidMembersMemberUuidTicketsTicketIdGetRequest {
    /**
     * 
     * @type string
     * @memberof SupportApiviewTicketSupportProjectsProjectUuidMembersMemberUuidTicketsTicketIdGet
     */
    projectUuid: string
    /**
     * 
     * @type string
     * @memberof SupportApiviewTicketSupportProjectsProjectUuidMembersMemberUuidTicketsTicketIdGet
     */
    memberUuid: string
    /**
     * 
     * @type string
     * @memberof SupportApiviewTicketSupportProjectsProjectUuidMembersMemberUuidTicketsTicketIdGet
     */
    ticketId: string
    /**
     * 
     * @type string
     * @memberof SupportApiviewTicketSupportProjectsProjectUuidMembersMemberUuidTicketsTicketIdGet
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof SupportApiviewTicketSupportProjectsProjectUuidMembersMemberUuidTicketsTicketIdGet
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof SupportApiviewTicketSupportProjectsProjectUuidMembersMemberUuidTicketsTicketIdGet
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof SupportApiviewTicketSupportProjectsProjectUuidMembersMemberUuidTicketsTicketIdGet
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof SupportApiviewTicketSupportProjectsProjectUuidMembersMemberUuidTicketsTicketIdGet
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof SupportApiviewTicketSupportProjectsProjectUuidMembersMemberUuidTicketsTicketIdGet
     */
    ehelplyData?: string
}

export class ObjectSupportApi {
    private api: ObservableSupportApi

    public constructor(configuration: Configuration, requestFactory?: SupportApiRequestFactory, responseProcessor?: SupportApiResponseProcessor) {
        this.api = new ObservableSupportApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create Contact
     * @param param the request object
     */
    public createContactSupportContactPost(param: SupportApiCreateContactSupportContactPostRequest, options?: Configuration): Promise<ContactResponse> {
        return this.api.createContactSupportContactPost(param.contact, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Create Ticket
     * @param param the request object
     */
    public createTicketSupportProjectsProjectUuidMembersMemberUuidTicketsPost(param: SupportApiCreateTicketSupportProjectsProjectUuidMembersMemberUuidTicketsPostRequest, options?: Configuration): Promise<TicketResponse> {
        return this.api.createTicketSupportProjectsProjectUuidMembersMemberUuidTicketsPost(param.projectUuid, param.memberUuid, param.createTicket, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Delete Contact
     * @param param the request object
     */
    public deleteContactSupportContactDelete(param: SupportApiDeleteContactSupportContactDeleteRequest = {}, options?: Configuration): Promise<any> {
        return this.api.deleteContactSupportContactDelete(param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * List Tickets
     * @param param the request object
     */
    public listTicketsSupportProjectsProjectUuidMembersMemberUuidTicketsGet(param: SupportApiListTicketsSupportProjectsProjectUuidMembersMemberUuidTicketsGetRequest, options?: Configuration): Promise<Array<TicketsResponse>> {
        return this.api.listTicketsSupportProjectsProjectUuidMembersMemberUuidTicketsGet(param.projectUuid, param.memberUuid, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Update Ticket
     * @param param the request object
     */
    public updateTicketSupportProjectsProjectUuidMembersMemberUuidTicketsTicketIdPut(param: SupportApiUpdateTicketSupportProjectsProjectUuidMembersMemberUuidTicketsTicketIdPutRequest, options?: Configuration): Promise<TicketResponse> {
        return this.api.updateTicketSupportProjectsProjectUuidMembersMemberUuidTicketsTicketIdPut(param.projectUuid, param.memberUuid, param.ticketId, param.createTicket, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * View Ticket
     * @param param the request object
     */
    public viewTicketSupportProjectsProjectUuidMembersMemberUuidTicketsTicketIdGet(param: SupportApiViewTicketSupportProjectsProjectUuidMembersMemberUuidTicketsTicketIdGetRequest, options?: Configuration): Promise<TicketResponse> {
        return this.api.viewTicketSupportProjectsProjectUuidMembersMemberUuidTicketsTicketIdGet(param.projectUuid, param.memberUuid, param.ticketId, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

}

import { ObservableTagApi } from "./ObservableAPI";
import { TagApiRequestFactory, TagApiResponseProcessor} from "../apis/TagApi";

export interface TagApiCreateTagPlacesTagsPostRequest {
    /**
     * 
     * @type TagBase
     * @memberof TagApicreateTagPlacesTagsPost
     */
    tagBase: TagBase
    /**
     * 
     * @type string
     * @memberof TagApicreateTagPlacesTagsPost
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof TagApicreateTagPlacesTagsPost
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof TagApicreateTagPlacesTagsPost
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof TagApicreateTagPlacesTagsPost
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof TagApicreateTagPlacesTagsPost
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof TagApicreateTagPlacesTagsPost
     */
    ehelplyData?: string
}

export interface TagApiDeleteTagPlacesTagsTagUuidDeleteRequest {
    /**
     * 
     * @type string
     * @memberof TagApideleteTagPlacesTagsTagUuidDelete
     */
    tagUuid: string
    /**
     * 
     * @type string
     * @memberof TagApideleteTagPlacesTagsTagUuidDelete
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof TagApideleteTagPlacesTagsTagUuidDelete
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof TagApideleteTagPlacesTagsTagUuidDelete
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof TagApideleteTagPlacesTagsTagUuidDelete
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof TagApideleteTagPlacesTagsTagUuidDelete
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof TagApideleteTagPlacesTagsTagUuidDelete
     */
    ehelplyData?: string
}

export interface TagApiGetTagPlacesTagsTagUuidGetRequest {
    /**
     * 
     * @type string
     * @memberof TagApigetTagPlacesTagsTagUuidGet
     */
    tagUuid: string
    /**
     * 
     * @type string
     * @memberof TagApigetTagPlacesTagsTagUuidGet
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof TagApigetTagPlacesTagsTagUuidGet
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof TagApigetTagPlacesTagsTagUuidGet
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof TagApigetTagPlacesTagsTagUuidGet
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof TagApigetTagPlacesTagsTagUuidGet
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof TagApigetTagPlacesTagsTagUuidGet
     */
    ehelplyData?: string
}

export interface TagApiSearchTagsPlacesTagsGetRequest {
    /**
     * 
     * @type string
     * @memberof TagApisearchTagsPlacesTagsGet
     */
    projectUuid?: string
    /**
     * 
     * @type string
     * @memberof TagApisearchTagsPlacesTagsGet
     */
    name?: string
    /**
     * 
     * @type number
     * @memberof TagApisearchTagsPlacesTagsGet
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof TagApisearchTagsPlacesTagsGet
     */
    pageSize?: number
    /**
     * 
     * @type string
     * @memberof TagApisearchTagsPlacesTagsGet
     */
    sortOn?: string
    /**
     * 
     * @type boolean
     * @memberof TagApisearchTagsPlacesTagsGet
     */
    sortDesc?: boolean
    /**
     * 
     * @type string
     * @memberof TagApisearchTagsPlacesTagsGet
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof TagApisearchTagsPlacesTagsGet
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof TagApisearchTagsPlacesTagsGet
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof TagApisearchTagsPlacesTagsGet
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof TagApisearchTagsPlacesTagsGet
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof TagApisearchTagsPlacesTagsGet
     */
    ehelplyData?: string
}

export interface TagApiUpdateTagPlacesTagsTagUuidPutRequest {
    /**
     * 
     * @type string
     * @memberof TagApiupdateTagPlacesTagsTagUuidPut
     */
    tagUuid: string
    /**
     * 
     * @type TagBase
     * @memberof TagApiupdateTagPlacesTagsTagUuidPut
     */
    tagBase: TagBase
    /**
     * 
     * @type string
     * @memberof TagApiupdateTagPlacesTagsTagUuidPut
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof TagApiupdateTagPlacesTagsTagUuidPut
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof TagApiupdateTagPlacesTagsTagUuidPut
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof TagApiupdateTagPlacesTagsTagUuidPut
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof TagApiupdateTagPlacesTagsTagUuidPut
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof TagApiupdateTagPlacesTagsTagUuidPut
     */
    ehelplyData?: string
}

export class ObjectTagApi {
    private api: ObservableTagApi

    public constructor(configuration: Configuration, requestFactory?: TagApiRequestFactory, responseProcessor?: TagApiResponseProcessor) {
        this.api = new ObservableTagApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a tag
     * Create Tag
     * @param param the request object
     */
    public createTagPlacesTagsPost(param: TagApiCreateTagPlacesTagsPostRequest, options?: Configuration): Promise<TagDb> {
        return this.api.createTagPlacesTagsPost(param.tagBase, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Deletes the tag member with the given ID and returns True if successful
     * Delete Tag
     * @param param the request object
     */
    public deleteTagPlacesTagsTagUuidDelete(param: TagApiDeleteTagPlacesTagsTagUuidDeleteRequest, options?: Configuration): Promise<any> {
        return this.api.deleteTagPlacesTagsTagUuidDelete(param.tagUuid, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Gets the tag member information given the tag ID
     * Get Tag
     * @param param the request object
     */
    public getTagPlacesTagsTagUuidGet(param: TagApiGetTagPlacesTagsTagUuidGetRequest, options?: Configuration): Promise<TagBase> {
        return this.api.getTagPlacesTagsTagUuidGet(param.tagUuid, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * TODO Item return format: ``` {     uuid                                **type:** string     project_uuid                        **type:** string or None      name                                **type:** string or None      meta                                **type:** dict or None      created_at                          **type:** string or None      updated_at                          **type:** string or None      deleted_at                          **type:** string or None  } ```
     * Search Tags
     * @param param the request object
     */
    public searchTagsPlacesTagsGet(param: TagApiSearchTagsPlacesTagsGetRequest = {}, options?: Configuration): Promise<Page> {
        return this.api.searchTagsPlacesTagsGet(param.projectUuid, param.name, param.page, param.pageSize, param.sortOn, param.sortDesc, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Update tag with given info, only updating the fields supplied. Tag Uuid must be sent however.
     * Update Tag
     * @param param the request object
     */
    public updateTagPlacesTagsTagUuidPut(param: TagApiUpdateTagPlacesTagsTagUuidPutRequest, options?: Configuration): Promise<TagBase> {
        return this.api.updateTagPlacesTagsTagUuidPut(param.tagUuid, param.tagBase, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

}

import { ObservableUsersApi } from "./ObservableAPI";
import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";

export interface UsersApiConfirmSignupRequest {
    /**
     * 
     * @type UserConfirmation
     * @memberof UsersApiconfirmSignup
     */
    userConfirmation: UserConfirmation
}

export interface UsersApiCreateParticipantRequest {
    /**
     * 
     * @type ParticipantCreate
     * @memberof UsersApicreateParticipant
     */
    participantCreate: ParticipantCreate
    /**
     * 
     * @type string
     * @memberof UsersApicreateParticipant
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof UsersApicreateParticipant
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof UsersApicreateParticipant
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof UsersApicreateParticipant
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof UsersApicreateParticipant
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof UsersApicreateParticipant
     */
    ehelplyData?: string
}

export interface UsersApiCreateUserRequest {
    /**
     * 
     * @type string
     * @memberof UsersApicreateUser
     */
    authorization?: string
}

export interface UsersApiDeleteParticipantRequest {
    /**
     * 
     * @type string
     * @memberof UsersApideleteParticipant
     */
    participantId: string
    /**
     * 
     * @type string
     * @memberof UsersApideleteParticipant
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof UsersApideleteParticipant
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof UsersApideleteParticipant
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof UsersApideleteParticipant
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof UsersApideleteParticipant
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof UsersApideleteParticipant
     */
    ehelplyData?: string
}

export interface UsersApiDeleteUserRequest {
    /**
     * 
     * @type string
     * @memberof UsersApideleteUser
     */
    userId: string
    /**
     * 
     * @type string
     * @memberof UsersApideleteUser
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof UsersApideleteUser
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof UsersApideleteUser
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof UsersApideleteUser
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof UsersApideleteUser
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof UsersApideleteUser
     */
    ehelplyData?: string
}

export interface UsersApiGetParticipantRequest {
    /**
     * 
     * @type string
     * @memberof UsersApigetParticipant
     */
    participantId: string
    /**
     * 
     * @type string
     * @memberof UsersApigetParticipant
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof UsersApigetParticipant
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof UsersApigetParticipant
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof UsersApigetParticipant
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof UsersApigetParticipant
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof UsersApigetParticipant
     */
    ehelplyData?: string
}

export interface UsersApiGetUserRequest {
    /**
     * 
     * @type string
     * @memberof UsersApigetUser
     */
    userId: string
    /**
     * 
     * @type string
     * @memberof UsersApigetUser
     */
    idType?: string
    /**
     * 
     * @type string
     * @memberof UsersApigetUser
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof UsersApigetUser
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof UsersApigetUser
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof UsersApigetUser
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof UsersApigetUser
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof UsersApigetUser
     */
    ehelplyData?: string
}

export interface UsersApiLoginRequest {
    /**
     * 
     * @type UserLogin
     * @memberof UsersApilogin
     */
    userLogin: UserLogin
}

export interface UsersApiRefreshTokenRequest {
    /**
     * 
     * @type string
     * @memberof UsersApirefreshToken
     */
    appClient: string
    /**
     * 
     * @type string
     * @memberof UsersApirefreshToken
     */
    body: string
}

export interface UsersApiResetPasswordRequest {
    /**
     * 
     * @type UserPasswordReset
     * @memberof UsersApiresetPassword
     */
    userPasswordReset: UserPasswordReset
}

export interface UsersApiResetPasswordConfirmationUsersAuthPasswordResetConfirmPostRequest {
    /**
     * 
     * @type UserPasswordResetConfirmation
     * @memberof UsersApiresetPasswordConfirmationUsersAuthPasswordResetConfirmPost
     */
    userPasswordResetConfirmation: UserPasswordResetConfirmation
}

export interface UsersApiSearchParticipantsRequest {
    /**
     * 
     * @type number
     * @memberof UsersApisearchParticipants
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof UsersApisearchParticipants
     */
    pageSize?: number
    /**
     * 
     * @type string
     * @memberof UsersApisearchParticipants
     */
    search?: string
    /**
     * 
     * @type string
     * @memberof UsersApisearchParticipants
     */
    searchOn?: string
    /**
     * 
     * @type string
     * @memberof UsersApisearchParticipants
     */
    sortOn?: string
    /**
     * 
     * @type boolean
     * @memberof UsersApisearchParticipants
     */
    sortDesc?: boolean
    /**
     * 
     * @type string
     * @memberof UsersApisearchParticipants
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof UsersApisearchParticipants
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof UsersApisearchParticipants
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof UsersApisearchParticipants
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof UsersApisearchParticipants
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof UsersApisearchParticipants
     */
    ehelplyData?: string
}

export interface UsersApiSignupRequest {
    /**
     * 
     * @type UserSignup
     * @memberof UsersApisignup
     */
    userSignup: UserSignup
}

export interface UsersApiUpdateParticipantRequest {
    /**
     * 
     * @type string
     * @memberof UsersApiupdateParticipant
     */
    participantId: string
    /**
     * 
     * @type ParticipantUpdate
     * @memberof UsersApiupdateParticipant
     */
    participantUpdate: ParticipantUpdate
    /**
     * 
     * @type string
     * @memberof UsersApiupdateParticipant
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof UsersApiupdateParticipant
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof UsersApiupdateParticipant
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof UsersApiupdateParticipant
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof UsersApiupdateParticipant
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof UsersApiupdateParticipant
     */
    ehelplyData?: string
}

export interface UsersApiUpdateUserRequest {
    /**
     * 
     * @type string
     * @memberof UsersApiupdateUser
     */
    userId: string
    /**
     * 
     * @type User
     * @memberof UsersApiupdateUser
     */
    user: User
    /**
     * 
     * @type string
     * @memberof UsersApiupdateUser
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof UsersApiupdateUser
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof UsersApiupdateUser
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof UsersApiupdateUser
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof UsersApiupdateUser
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof UsersApiupdateUser
     */
    ehelplyData?: string
}

export interface UsersApiUserValidationsRequest {
    /**
     * 
     * @type string
     * @memberof UsersApiuserValidations
     */
    field: string
    /**
     * 
     * @type UserValidations
     * @memberof UsersApiuserValidations
     */
    userValidations: UserValidations
    /**
     * 
     * @type string
     * @memberof UsersApiuserValidations
     */
    xAccessToken?: string
    /**
     * 
     * @type string
     * @memberof UsersApiuserValidations
     */
    xSecretToken?: string
    /**
     * 
     * @type string
     * @memberof UsersApiuserValidations
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof UsersApiuserValidations
     */
    ehelplyActiveParticipant?: string
    /**
     * 
     * @type string
     * @memberof UsersApiuserValidations
     */
    ehelplyProject?: string
    /**
     * 
     * @type string
     * @memberof UsersApiuserValidations
     */
    ehelplyData?: string
}

export class ObjectUsersApi {
    private api: ObservableUsersApi

    public constructor(configuration: Configuration, requestFactory?: UsersApiRequestFactory, responseProcessor?: UsersApiResponseProcessor) {
        this.api = new ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Validates a user signup with a given confirmation
     * Confirmsignup
     * @param param the request object
     */
    public confirmSignup(param: UsersApiConfirmSignupRequest, options?: Configuration): Promise<any> {
        return this.api.confirmSignup(param.userConfirmation,  options).toPromise();
    }

    /**
     * Creates a participant given the participant info (meta and user_id)
     * Createparticipant
     * @param param the request object
     */
    public createParticipant(param: UsersApiCreateParticipantRequest, options?: Configuration): Promise<ParticipantUserReturn> {
        return this.api.createParticipant(param.participantCreate, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Usually ran after login and will do the following: - If no user exists (AKA signed in with social media) it will create a new user and default participant - If a user exists, sync Cognito data from Cognito to the user - Determine missing fields that SHOULD be filled
     * Createuser
     * @param param the request object
     */
    public createUser(param: UsersApiCreateUserRequest = {}, options?: Configuration): Promise<any> {
        return this.api.createUser(param.authorization,  options).toPromise();
    }

    /**
     * Delete participants related to the given participant_id, returns True if successful
     * Deleteparticipant
     * @param param the request object
     */
    public deleteParticipant(param: UsersApiDeleteParticipantRequest, options?: Configuration): Promise<boolean> {
        return this.api.deleteParticipant(param.participantId, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Soft deletes the user with the provided user id, granted the deleter is the same person or an admin. Returns True if successful
     * Deleteuser
     * @param param the request object
     */
    public deleteUser(param: UsersApiDeleteUserRequest, options?: Configuration): Promise<boolean> {
        return this.api.deleteUser(param.userId, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Gets a participant given their participant ID
     * Getparticipant
     * @param param the request object
     */
    public getParticipant(param: UsersApiGetParticipantRequest, options?: Configuration): Promise<ParticipantUserReturn> {
        return this.api.getParticipant(param.participantId, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Gets the user object given user id (uuid) or cognito id (cognito)
     * Getuser
     * @param param the request object
     */
    public getUser(param: UsersApiGetUserRequest, options?: Configuration): Promise<UserResponse> {
        return this.api.getUser(param.userId, param.idType, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Login endpoint, returns tokens. EMAIL NEEDS TO BE VERIFIED (can be done through the email the user received).
     * Login
     * @param param the request object
     */
    public login(param: UsersApiLoginRequest, options?: Configuration): Promise<UserLoginReturn> {
        return this.api.login(param.userLogin,  options).toPromise();
    }

    /**
     * Refreshes tokens given a refresh token.
     * Refreshtoken
     * @param param the request object
     */
    public refreshToken(param: UsersApiRefreshTokenRequest, options?: Configuration): Promise<UserTokenReturn> {
        return this.api.refreshToken(param.appClient, param.body,  options).toPromise();
    }

    /**
     * Sends the user an email with a confirmation code so they can reset their password
     * Resetpassword
     * @param param the request object
     */
    public resetPassword(param: UsersApiResetPasswordRequest, options?: Configuration): Promise<any> {
        return this.api.resetPassword(param.userPasswordReset,  options).toPromise();
    }

    /**
     * Resets the given user's password to the given password when the proper code is provided
     * Reset Password Confirmation
     * @param param the request object
     */
    public resetPasswordConfirmationUsersAuthPasswordResetConfirmPost(param: UsersApiResetPasswordConfirmationUsersAuthPasswordResetConfirmPostRequest, options?: Configuration): Promise<any> {
        return this.api.resetPasswordConfirmationUsersAuthPasswordResetConfirmPost(param.userPasswordResetConfirmation,  options).toPromise();
    }

    /**
     * Search participants using a user uuid, returns pagination information and list of `items` (ParticipantUserReturn from GET Participant). Can search on \"user_uuid\", and sort on any field. To search enter search value into \"search\" query param and the field into \"search on\" (currently only \"user\"uuid\"). For sorting fill out \"sort_desc\" field with either true/false and the \"sort_on\" query parameter with column you want to sort on (ex: date_created). Max pagination items per page is 50.
     * Searchparticipants
     * @param param the request object
     */
    public searchParticipants(param: UsersApiSearchParticipantsRequest = {}, options?: Configuration): Promise<Page> {
        return this.api.searchParticipants(param.page, param.pageSize, param.search, param.searchOn, param.sortOn, param.sortDesc, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Signup to eHelply, creates a user and default participant behind the scenes. Does not verify email.
     * Signup
     * @param param the request object
     */
    public signup(param: UsersApiSignupRequest, options?: Configuration): Promise<UserSignupReturn> {
        return this.api.signup(param.userSignup,  options).toPromise();
    }

    /**
     * Update participant data given
     * Updateparticipant
     * @param param the request object
     */
    public updateParticipant(param: UsersApiUpdateParticipantRequest, options?: Configuration): Promise<ParticipantUserReturn> {
        return this.api.updateParticipant(param.participantId, param.participantUpdate, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Update the given user and sync the cognito data
     * Updateuser
     * @param param the request object
     */
    public updateUser(param: UsersApiUpdateUserRequest, options?: Configuration): Promise<UserResponse> {
        return this.api.updateUser(param.userId, param.user, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

    /**
     * Validates a certain field.
     * Uservalidations
     * @param param the request object
     */
    public userValidations(param: UsersApiUserValidationsRequest, options?: Configuration): Promise<boolean> {
        return this.api.userValidations(param.field, param.userValidations, param.xAccessToken, param.xSecretToken, param.authorization, param.ehelplyActiveParticipant, param.ehelplyProject, param.ehelplyData,  options).toPromise();
    }

}
