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
import { ObservableAuthApi } from './ObservableAPI';

import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";
export class PromiseAuthApi {
    private api: ObservableAuthApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthApiRequestFactory,
        responseProcessor?: AuthApiResponseProcessor
    ) {
        this.api = new ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Resets the given user's password to the given password when the proper code is provided
     * Reset Password Confirmation
     * @param userPasswordResetConfirmation 
     */
    public resetPasswordConfirmationUsersAuthPasswordResetConfirmPost(userPasswordResetConfirmation: UserPasswordResetConfirmation, _options?: Configuration): Promise<any> {
        const result = this.api.resetPasswordConfirmationUsersAuthPasswordResetConfirmPost(userPasswordResetConfirmation, _options);
        return result.toPromise();
    }


}



import { ObservableBillingApi } from './ObservableAPI';

import { BillingApiRequestFactory, BillingApiResponseProcessor} from "../apis/BillingApi";
export class PromiseBillingApi {
    private api: ObservableBillingApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BillingApiRequestFactory,
        responseProcessor?: BillingApiResponseProcessor
    ) {
        this.api = new ObservableBillingApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Attach Payment To Project
     * @param bodyAttachPaymentToProjectBillingAttachPaymentToProjectPost 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public attachPaymentToProjectBillingAttachPaymentToProjectPost(bodyAttachPaymentToProjectBillingAttachPaymentToProjectPost: BodyAttachPaymentToProjectBillingAttachPaymentToProjectPost, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<any> {
        const result = this.api.attachPaymentToProjectBillingAttachPaymentToProjectPost(bodyAttachPaymentToProjectBillingAttachPaymentToProjectPost, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Attach Payment To Project
     * @param bodyAttachPaymentToProjectBillingAttachPaymentToProjectPost 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public attachPaymentToProjectBillingAttachPaymentToProjectPost_1(bodyAttachPaymentToProjectBillingAttachPaymentToProjectPost: BodyAttachPaymentToProjectBillingAttachPaymentToProjectPost, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<any> {
        const result = this.api.attachPaymentToProjectBillingAttachPaymentToProjectPost_1(bodyAttachPaymentToProjectBillingAttachPaymentToProjectPost, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Create Billing Account
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public createBillingAccountBillingCreateBillingAccountPost(xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<StripeAccountResponse> {
        const result = this.api.createBillingAccountBillingCreateBillingAccountPost(xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Create Billing Account
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public createBillingAccountBillingCreateBillingAccountPost_2(xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<StripeAccountResponse> {
        const result = this.api.createBillingAccountBillingCreateBillingAccountPost_2(xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Delete Billing Account
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public deleteBillingAccountBillingDeleteBillingAccountDelete(xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteBillingAccountBillingDeleteBillingAccountDelete(xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Delete Billing Account
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public deleteBillingAccountBillingDeleteBillingAccountDelete_3(xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteBillingAccountBillingDeleteBillingAccountDelete_3(xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Get Client Secret
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public getClientSecretBillingRetrieveSecretGet(xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<any> {
        const result = this.api.getClientSecretBillingRetrieveSecretGet(xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Get Client Secret
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public getClientSecretBillingRetrieveSecretGet_4(xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<any> {
        const result = this.api.getClientSecretBillingRetrieveSecretGet_4(xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Has Payment
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public hasPaymentBillingHasPaymentGet(xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<any> {
        const result = this.api.hasPaymentBillingHasPaymentGet(xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Has Payment
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public hasPaymentBillingHasPaymentGet_5(xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<any> {
        const result = this.api.hasPaymentBillingHasPaymentGet_5(xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Process Payment
     * @param bodyProcessPaymentBillingProcessPaymentPost 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public processPaymentBillingProcessPaymentPost(bodyProcessPaymentBillingProcessPaymentPost: BodyProcessPaymentBillingProcessPaymentPost, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<any> {
        const result = this.api.processPaymentBillingProcessPaymentPost(bodyProcessPaymentBillingProcessPaymentPost, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Process Payment
     * @param bodyProcessPaymentBillingProcessPaymentPost 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public processPaymentBillingProcessPaymentPost_6(bodyProcessPaymentBillingProcessPaymentPost: BodyProcessPaymentBillingProcessPaymentPost, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<any> {
        const result = this.api.processPaymentBillingProcessPaymentPost_6(bodyProcessPaymentBillingProcessPaymentPost, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Reconcile Payment Methods
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public reconcilePaymentMethodsBillingReconcilePaymentGet(xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<boolean> {
        const result = this.api.reconcilePaymentMethodsBillingReconcilePaymentGet(xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Remove Payment Method
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public removePaymentMethodBillingRemovePaymentMethodDelete(xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<any> {
        const result = this.api.removePaymentMethodBillingRemovePaymentMethodDelete(xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Remove Payment Method
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public removePaymentMethodBillingRemovePaymentMethodDelete_7(xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<any> {
        const result = this.api.removePaymentMethodBillingRemovePaymentMethodDelete_7(xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * View Payment Method
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public viewPaymentMethodBillingViewPaymentMethodGet(xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<Array<PaymentMethodResponse>> {
        const result = this.api.viewPaymentMethodBillingViewPaymentMethodGet(xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * View Payment Method
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public viewPaymentMethodBillingViewPaymentMethodGet_8(xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<Array<PaymentMethodResponse>> {
        const result = this.api.viewPaymentMethodBillingViewPaymentMethodGet_8(xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }


}



import { ObservableCategoryApi } from './ObservableAPI';

import { CategoryApiRequestFactory, CategoryApiResponseProcessor} from "../apis/CategoryApi";
export class PromiseCategoryApi {
    private api: ObservableCategoryApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CategoryApiRequestFactory,
        responseProcessor?: CategoryApiResponseProcessor
    ) {
        this.api = new ObservableCategoryApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a category
     * Create Category
     * @param categoryBase 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public createCategoryPlacesCategoriesPost(categoryBase: CategoryBase, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<CategoryDb> {
        const result = this.api.createCategoryPlacesCategoriesPost(categoryBase, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Deletes the category with the given ID and returns True if successful
     * Delete Category
     * @param categoryUuid 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public deleteCategoryPlacesCategoriesCategoryUuidDelete(categoryUuid: string, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteCategoryPlacesCategoriesCategoryUuidDelete(categoryUuid, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Gets the category information given the category ID
     * Get Category
     * @param categoryUuid 
     * @param withMeta 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public getCategoryPlacesCategoriesCategoryUuidGet(categoryUuid: string, withMeta?: boolean, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<CategoryBase> {
        const result = this.api.getCategoryPlacesCategoriesCategoryUuidGet(categoryUuid, withMeta, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * TODO Item return format: ``` {     uuid                                **type:** string     project_uuid                        **type:** string or None      name                                **type:** string or None      meta                                **type:** dict or None      created_at                          **type:** string or None      updated_at                          **type:** string or None      deleted_at                          **type:** string or None  } ```
     * Search Categories
     * @param projectUuid 
     * @param name 
     * @param withMeta 
     * @param page 
     * @param pageSize 
     * @param sortOn 
     * @param sortDesc 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public searchCategoriesPlacesCategoriesGet(projectUuid?: string, name?: string, withMeta?: boolean, page?: number, pageSize?: number, sortOn?: string, sortDesc?: boolean, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<Page> {
        const result = this.api.searchCategoriesPlacesCategoriesGet(projectUuid, name, withMeta, page, pageSize, sortOn, sortDesc, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Update category with given info, only updating the fields supplied. Category Uuid must be sent however.
     * Update Category
     * @param categoryUuid 
     * @param categoryBase 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public updateCategoryPlacesCategoriesCategoryUuidPut(categoryUuid: string, categoryBase: CategoryBase, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<CategoryBase> {
        const result = this.api.updateCategoryPlacesCategoriesCategoryUuidPut(categoryUuid, categoryBase, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }


}



import { ObservableCompaniesApi } from './ObservableAPI';

import { CompaniesApiRequestFactory, CompaniesApiResponseProcessor} from "../apis/CompaniesApi";
export class PromiseCompaniesApi {
    private api: ObservableCompaniesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CompaniesApiRequestFactory,
        responseProcessor?: CompaniesApiResponseProcessor
    ) {
        this.api = new ObservableCompaniesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a company
     * Create Company
     * @param companyBase 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public createCompanyPlacesCompaniesPost(companyBase: CompanyBase, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<CompanyResponse> {
        const result = this.api.createCompanyPlacesCompaniesPost(companyBase, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Deletes the company with the given ID and returns True if successful
     * Delete Place
     * @param companyUuid 
     * @param softDelete 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public deletePlacePlacesCompaniesCompanyUuidDelete(companyUuid: string, softDelete?: boolean, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<any> {
        const result = this.api.deletePlacePlacesCompaniesCompanyUuidDelete(companyUuid, softDelete, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Gets the company information given the Place ID
     * Get Company
     * @param companyUuid 
     * @param withMeta 
     * @param withCatalog 
     * @param withReviews 
     * @param withSchedule 
     * @param withBlog 
     * @param withTags 
     * @param withCategories 
     * @param withPlaces 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public getCompanyPlacesCompaniesCompanyUuidGet(companyUuid: string, withMeta?: boolean, withCatalog?: boolean, withReviews?: boolean, withSchedule?: boolean, withBlog?: boolean, withTags?: boolean, withCategories?: boolean, withPlaces?: boolean, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<CompanyResponse> {
        const result = this.api.getCompanyPlacesCompaniesCompanyUuidGet(companyUuid, withMeta, withCatalog, withReviews, withSchedule, withBlog, withTags, withCategories, withPlaces, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Search all companies and returns paginated results with Companies being stored in items field. Can search by `project_uuid, name, email` string fields or the `is_public and is_deleted` boolean fields. To search with these fields use query params with string values. For sorting fill out \"sort_desc\" field with either true/false and the \"sort_on\" query parameter with column you want to sort on (ex: name). Max pagination items per page is 50. Item return format: ``` {     uuid                                **type:** string     project_uuid                        **type:** string or None      meta_uuid                           **type:** string or None      catalog_data                        **type:** dict or None      review_group_data                   **type:** dict or None      schedule_data                       **type:** dict or None      blog_data                           **type:** dict or None      tags                                **type:** [TagBase] or None      categories                          **type:** [CategoryBase] or None      places                              **type:** PlaceBase or None      created_at                          **type:** string or None      updated_at                          **type:** string or None      deleted_at                          **type:** string or None  } ```
     * Search Companies
     * @param projectUuid 
     * @param name 
     * @param email 
     * @param isPublic 
     * @param isDeleted 
     * @param withPlaces 
     * @param withMeta 
     * @param withCatalog 
     * @param withReviews 
     * @param withSchedule 
     * @param withBlog 
     * @param withTags 
     * @param withCategories 
     * @param page 
     * @param pageSize 
     * @param sortOn 
     * @param sortDesc 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public searchCompaniesPlacesCompaniesGet(projectUuid?: string, name?: string, email?: string, isPublic?: boolean, isDeleted?: boolean, withPlaces?: boolean, withMeta?: boolean, withCatalog?: boolean, withReviews?: boolean, withSchedule?: boolean, withBlog?: boolean, withTags?: boolean, withCategories?: boolean, page?: number, pageSize?: number, sortOn?: string, sortDesc?: boolean, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<Page> {
        const result = this.api.searchCompaniesPlacesCompaniesGet(projectUuid, name, email, isPublic, isDeleted, withPlaces, withMeta, withCatalog, withReviews, withSchedule, withBlog, withTags, withCategories, page, pageSize, sortOn, sortDesc, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Update company with given info, only updating the fields supplied. Company Uuid must be sent however.
     * Update Company
     * @param companyUuid 
     * @param companyBase 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public updateCompanyPlacesCompaniesCompanyUuidPut(companyUuid: string, companyBase: CompanyBase, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<CompanyResponse> {
        const result = this.api.updateCompanyPlacesCompaniesCompanyUuidPut(companyUuid, companyBase, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }


}



import { ObservableDefaultApi } from './ObservableAPI';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Attach Product To Catalog
     * @param catalogUuid 
     * @param productUuid 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public attachProductToCatalog(catalogUuid: string, productUuid: string, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<any> {
        const result = this.api.attachProductToCatalog(catalogUuid, productUuid, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Create Catalog
     * @param catalogBase 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public createCatalog(catalogBase: CatalogBase, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<CatalogReturn> {
        const result = this.api.createCatalog(catalogBase, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Create Product
     * @param productBase 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public createProduct(productBase: ProductBase, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<ProductReturn> {
        const result = this.api.createProduct(productBase, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Create Review
     * @param entityType 
     * @param entityUuid 
     * @param createReview 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public createReview(entityType: string, entityUuid: string, createReview: CreateReview, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<any> {
        const result = this.api.createReview(entityType, entityUuid, createReview, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Delete Catalog
     * @param catalogUuid 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public deleteCatalog(catalogUuid: string, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<boolean> {
        const result = this.api.deleteCatalog(catalogUuid, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Delete Product
     * @param productUuid 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public deleteProduct(productUuid: string, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<boolean> {
        const result = this.api.deleteProduct(productUuid, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Delete Review
     * @param entityType 
     * @param entityUuid 
     * @param reviewUuid 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public deleteReview(entityType: string, entityUuid: string, reviewUuid: string, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteReview(entityType, entityUuid, reviewUuid, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Detach Product From Catalog
     * @param catalogUuid 
     * @param productUuid 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public detachProductFromCatalog(catalogUuid: string, productUuid: string, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<any> {
        const result = this.api.detachProductFromCatalog(catalogUuid, productUuid, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Get Catalog
     * @param catalogUuid 
     * @param withMeta 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public getCatalog(catalogUuid: string, withMeta?: boolean, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<CatalogReturn> {
        const result = this.api.getCatalog(catalogUuid, withMeta, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Get Product
     * @param productUuid 
     * @param withAddons 
     * @param withMeta 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public getProduct(productUuid: string, withAddons?: boolean, withMeta?: boolean, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<ProductReturn> {
        const result = this.api.getProduct(productUuid, withAddons, withMeta, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Get Review
     * @param entityType 
     * @param entityUuid 
     * @param reviewUuid 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public getReview(entityType: string, entityUuid: string, reviewUuid: string, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<any> {
        const result = this.api.getReview(entityType, entityUuid, reviewUuid, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Search Catalog Products
     * @param catalogUuid 
     * @param withMeta 
     * @param page 
     * @param pageSize 
     * @param sortOn 
     * @param sortDesc 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public searchCatalogProducts(catalogUuid: string, withMeta?: boolean, page?: number, pageSize?: number, sortOn?: string, sortDesc?: boolean, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<Page> {
        const result = this.api.searchCatalogProducts(catalogUuid, withMeta, page, pageSize, sortOn, sortDesc, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Search Catalogs
     * @param withMeta 
     * @param name 
     * @param page 
     * @param pageSize 
     * @param sortOn 
     * @param sortDesc 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public searchCatalogs(withMeta?: boolean, name?: string, page?: number, pageSize?: number, sortOn?: string, sortDesc?: boolean, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<Page> {
        const result = this.api.searchCatalogs(withMeta, name, page, pageSize, sortOn, sortDesc, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Search Products
     * @param withMeta 
     * @param name 
     * @param addons 
     * @param priceMax 
     * @param priceMin 
     * @param quantityAvailable 
     * @param isDeleted 
     * @param page 
     * @param pageSize 
     * @param sortOn 
     * @param sortDesc 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public searchProduct(withMeta?: boolean, name?: string, addons?: Array<string>, priceMax?: number, priceMin?: number, quantityAvailable?: boolean, isDeleted?: boolean, page?: number, pageSize?: number, sortOn?: string, sortDesc?: boolean, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<Page> {
        const result = this.api.searchProduct(withMeta, name, addons, priceMax, priceMin, quantityAvailable, isDeleted, page, pageSize, sortOn, sortDesc, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Search Product Catalogs
     * @param productUuid 
     * @param withMeta 
     * @param page 
     * @param pageSize 
     * @param sortOn 
     * @param sortDesc 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public searchProductCatalog(productUuid: string, withMeta?: boolean, page?: number, pageSize?: number, sortOn?: string, sortDesc?: boolean, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<Page> {
        const result = this.api.searchProductCatalog(productUuid, withMeta, page, pageSize, sortOn, sortDesc, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Search Review
     * @param entityType 
     * @param entityUuid 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public searchReviews(entityType: string, entityUuid: string, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<any> {
        const result = this.api.searchReviews(entityType, entityUuid, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Update Catalog
     * @param catalogUuid 
     * @param catalogBase 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public updateCatalog(catalogUuid: string, catalogBase: CatalogBase, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<CatalogReturn> {
        const result = this.api.updateCatalog(catalogUuid, catalogBase, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Update Product
     * @param productUuid 
     * @param productBase 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public updateProduct(productUuid: string, productBase: ProductBase, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<ProductReturn> {
        const result = this.api.updateProduct(productUuid, productBase, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Update Review
     * @param entityType 
     * @param entityUuid 
     * @param reviewUuid 
     * @param updateReview 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public updateReview(entityType: string, entityUuid: string, reviewUuid: string, updateReview: UpdateReview, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<any> {
        const result = this.api.updateReview(entityType, entityUuid, reviewUuid, updateReview, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }


}



import { ObservableLoggingApi } from './ObservableAPI';

import { LoggingApiRequestFactory, LoggingApiResponseProcessor} from "../apis/LoggingApi";
export class PromiseLoggingApi {
    private api: ObservableLoggingApi

    public constructor(
        configuration: Configuration,
        requestFactory?: LoggingApiRequestFactory,
        responseProcessor?: LoggingApiResponseProcessor
    ) {
        this.api = new ObservableLoggingApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get Logs
     * @param service 
     * @param dateStart 
     * @param dateEnd 
     * @param desc 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public getLogsLoggingLogsGet(service?: string, dateStart?: string, dateEnd?: string, desc?: boolean, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<any> {
        const result = this.api.getLogsLoggingLogsGet(service, dateStart, dateEnd, desc, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Get Service Logs
     * @param service 
     * @param dateStart 
     * @param dateEnd 
     * @param desc 
     * @param limit 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public getServiceLogsLoggingLogsServicesServiceGet(service: string, dateStart?: string, dateEnd?: string, desc?: boolean, limit?: number, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<any> {
        const result = this.api.getServiceLogsLoggingLogsServicesServiceGet(service, dateStart, dateEnd, desc, limit, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Get Subject Logs
     * @param service 
     * @param subject 
     * @param dateStart 
     * @param dateEnd 
     * @param desc 
     * @param limit 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public getSubjectLogsLoggingLogsServicesServiceSubjectsSubjectGet(service: string, subject: string, dateStart?: string, dateEnd?: string, desc?: boolean, limit?: number, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<any> {
        const result = this.api.getSubjectLogsLoggingLogsServicesServiceSubjectsSubjectGet(service, subject, dateStart, dateEnd, desc, limit, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }


}



import { ObservableMetaApi } from './ObservableAPI';

import { MetaApiRequestFactory, MetaApiResponseProcessor} from "../apis/MetaApi";
export class PromiseMetaApi {
    private api: ObservableMetaApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MetaApiRequestFactory,
        responseProcessor?: MetaApiResponseProcessor
    ) {
        this.api = new ObservableMetaApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create Field
     * @param field 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public createField(field: Field, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<FieldDynamo> {
        const result = this.api.createField(field, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Create Meta
     * @param service 
     * @param typeStr 
     * @param entityUuid 
     * @param metaCreate 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public createMeta(service: string, typeStr: string, entityUuid: string, metaCreate: MetaCreate, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<MetaDynamo> {
        const result = this.api.createMeta(service, typeStr, entityUuid, metaCreate, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Delete Field
     * @param fieldUuid 
     * @param softDelete 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public deleteField(fieldUuid: string, softDelete?: boolean, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteField(fieldUuid, softDelete, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Delete Meta
     * @param service 
     * @param typeStr 
     * @param entityUuid 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public deleteMeta(service: string, typeStr: string, entityUuid: string, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteMeta(service, typeStr, entityUuid, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Delete Meta From Uuid
     * @param metaUuid 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public deleteMetaFromUuid(metaUuid: string, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteMetaFromUuid(metaUuid, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Get Field
     * @param fieldUuid 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public getField(fieldUuid: string, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<FieldDynamo> {
        const result = this.api.getField(fieldUuid, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Get Meta
     * @param service 
     * @param typeStr 
     * @param entityUuid 
     * @param detailed 
     * @param custom 
     * @param dates 
     * @param history 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public getMeta(service: string, typeStr: string, entityUuid: string, detailed?: boolean, custom?: boolean, dates?: boolean, history?: number, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<MetaDynamo> {
        const result = this.api.getMeta(service, typeStr, entityUuid, detailed, custom, dates, history, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Get Meta From Uuid
     * @param metaUuid 
     * @param detailed 
     * @param custom 
     * @param dates 
     * @param history 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public getMetaFromUuid(metaUuid: string, detailed?: boolean, custom?: boolean, dates?: boolean, history?: number, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<MetaDynamo> {
        const result = this.api.getMetaFromUuid(metaUuid, detailed, custom, dates, history, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Make Slug
     * @param metaSlugger 
     */
    public makeSlug(metaSlugger: MetaSlugger, _options?: Configuration): Promise<any> {
        const result = this.api.makeSlug(metaSlugger, _options);
        return result.toPromise();
    }

    /**
     * Touch Meta
     * @param service 
     * @param typeStr 
     * @param entityUuid 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public touchMeta(service: string, typeStr: string, entityUuid: string, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<MetaDynamo> {
        const result = this.api.touchMeta(service, typeStr, entityUuid, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Update Field
     * @param fieldUuid 
     * @param field 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public updateField(fieldUuid: string, field: Field, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<any> {
        const result = this.api.updateField(fieldUuid, field, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Update Meta
     * @param service 
     * @param typeStr 
     * @param entityUuid 
     * @param metaCreate 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public updateMeta(service: string, typeStr: string, entityUuid: string, metaCreate: MetaCreate, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<MetaDynamo> {
        const result = this.api.updateMeta(service, typeStr, entityUuid, metaCreate, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Update Meta From Uuid
     * @param metaUuid 
     * @param metaCreate 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public updateMetaFromUuid(metaUuid: string, metaCreate: MetaCreate, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<MetaDynamo> {
        const result = this.api.updateMetaFromUuid(metaUuid, metaCreate, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }


}



import { ObservableMonitorApi } from './ObservableAPI';

import { MonitorApiRequestFactory, MonitorApiResponseProcessor} from "../apis/MonitorApi";
export class PromiseMonitorApi {
    private api: ObservableMonitorApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MonitorApiRequestFactory,
        responseProcessor?: MonitorApiResponseProcessor
    ) {
        this.api = new ObservableMonitorApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Ack Alarm
     * @param service 
     * @param stage 
     * @param alarmUuid 
     * @param bodyAckAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAcknowledgePost 
     */
    public ackAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAcknowledgePost(service: string, stage: string, alarmUuid: string, bodyAckAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAcknowledgePost: BodyAckAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAcknowledgePost, _options?: Configuration): Promise<any> {
        const result = this.api.ackAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAcknowledgePost(service, stage, alarmUuid, bodyAckAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAcknowledgePost, _options);
        return result.toPromise();
    }

    /**
     * Assign Alarm
     * @param service 
     * @param stage 
     * @param alarmUuid 
     * @param bodyAssignAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAssignPost 
     */
    public assignAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAssignPost(service: string, stage: string, alarmUuid: string, bodyAssignAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAssignPost: BodyAssignAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAssignPost, _options?: Configuration): Promise<any> {
        const result = this.api.assignAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAssignPost(service, stage, alarmUuid, bodyAssignAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAssignPost, _options);
        return result.toPromise();
    }

    /**
     * Attach Alarm Note
     * @param service 
     * @param stage 
     * @param alarmUuid 
     * @param bodyAttachAlarmNoteMonitorServicesServiceStagesStageAlarmsAlarmUuidNotePost 
     */
    public attachAlarmNoteMonitorServicesServiceStagesStageAlarmsAlarmUuidNotePost(service: string, stage: string, alarmUuid: string, bodyAttachAlarmNoteMonitorServicesServiceStagesStageAlarmsAlarmUuidNotePost: BodyAttachAlarmNoteMonitorServicesServiceStagesStageAlarmsAlarmUuidNotePost, _options?: Configuration): Promise<any> {
        const result = this.api.attachAlarmNoteMonitorServicesServiceStagesStageAlarmsAlarmUuidNotePost(service, stage, alarmUuid, bodyAttachAlarmNoteMonitorServicesServiceStagesStageAlarmsAlarmUuidNotePost, _options);
        return result.toPromise();
    }

    /**
     * Attach Alarm Ticket
     * @param service 
     * @param stage 
     * @param alarmUuid 
     * @param bodyAttachAlarmTicketMonitorServicesServiceStagesStageAlarmsAlarmUuidTicketPost 
     */
    public attachAlarmTicketMonitorServicesServiceStagesStageAlarmsAlarmUuidTicketPost(service: string, stage: string, alarmUuid: string, bodyAttachAlarmTicketMonitorServicesServiceStagesStageAlarmsAlarmUuidTicketPost: BodyAttachAlarmTicketMonitorServicesServiceStagesStageAlarmsAlarmUuidTicketPost, _options?: Configuration): Promise<any> {
        const result = this.api.attachAlarmTicketMonitorServicesServiceStagesStageAlarmsAlarmUuidTicketPost(service, stage, alarmUuid, bodyAttachAlarmTicketMonitorServicesServiceStagesStageAlarmsAlarmUuidTicketPost, _options);
        return result.toPromise();
    }

    /**
     * Clear Alarm
     * @param service 
     * @param stage 
     * @param alarmUuid 
     */
    public clearAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidClearPost(service: string, stage: string, alarmUuid: string, _options?: Configuration): Promise<any> {
        const result = this.api.clearAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidClearPost(service, stage, alarmUuid, _options);
        return result.toPromise();
    }

    /**
     * Get Service Alarm
     * @param service 
     * @param stage 
     * @param alarmUuid 
     */
    public getServiceAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidGet(service: string, stage: string, alarmUuid: string, _options?: Configuration): Promise<any> {
        const result = this.api.getServiceAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidGet(service, stage, alarmUuid, _options);
        return result.toPromise();
    }

    /**
     * Get Service Alarms
     * @param service 
     * @param stage 
     * @param history 
     * @param includeTerminated 
     * @param includeCleared 
     */
    public getServiceAlarmsMonitorServicesServiceStagesStageAlarmsGet(service: string, stage: string, history?: number, includeTerminated?: boolean, includeCleared?: boolean, _options?: Configuration): Promise<any> {
        const result = this.api.getServiceAlarmsMonitorServicesServiceStagesStageAlarmsGet(service, stage, history, includeTerminated, includeCleared, _options);
        return result.toPromise();
    }

    /**
     * Get Service Heartbeats
     * @param service 
     * @param stage 
     * @param history 
     */
    public getServiceHeartbeatsMonitorServicesServiceStagesStageHeartbeatsGet(service: string, stage: string, history?: number, _options?: Configuration): Promise<any> {
        const result = this.api.getServiceHeartbeatsMonitorServicesServiceStagesStageHeartbeatsGet(service, stage, history, _options);
        return result.toPromise();
    }

    /**
     * Get Service Kpis
     * @param service 
     * @param history 
     */
    public getServiceKpisMonitorServicesServiceKpisGet(service: string, history?: number, _options?: Configuration): Promise<any> {
        const result = this.api.getServiceKpisMonitorServicesServiceKpisGet(service, history, _options);
        return result.toPromise();
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
    public getServiceMonitorServicesServiceGet(service: string, heartbeats?: boolean, heartbeatLimit?: number, alarms?: boolean, alarmLimit?: number, stage?: string, _options?: Configuration): Promise<any> {
        const result = this.api.getServiceMonitorServicesServiceGet(service, heartbeats, heartbeatLimit, alarms, alarmLimit, stage, _options);
        return result.toPromise();
    }

    /**
     * Getservicespec
     * @param service 
     * @param spec 
     * @param asJson 
     */
    public getServiceSpec(service: string, spec: string, asJson?: boolean, _options?: Configuration): Promise<InlineResponse2002> {
        const result = this.api.getServiceSpec(service, spec, asJson, _options);
        return result.toPromise();
    }

    /**
     * Getservicespecs
     * @param service 
     */
    public getServiceSpecs(service: string, _options?: Configuration): Promise<InlineResponse2001> {
        const result = this.api.getServiceSpecs(service, _options);
        return result.toPromise();
    }

    /**
     * Get Service Vitals
     * @param service 
     * @param stage 
     * @param history 
     */
    public getServiceVitalsMonitorServicesServiceStagesStageVitalsGet(service: string, stage: string, history?: number, _options?: Configuration): Promise<any> {
        const result = this.api.getServiceVitalsMonitorServicesServiceStagesStageVitalsGet(service, stage, history, _options);
        return result.toPromise();
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
    public getServicesMonitorServicesGet(heartbeats?: boolean, heartbeatLimit?: number, alarms?: boolean, alarmLimit?: number, includeHidden?: boolean, stage?: string, key?: string, _options?: Configuration): Promise<any> {
        const result = this.api.getServicesMonitorServicesGet(heartbeats, heartbeatLimit, alarms, alarmLimit, includeHidden, stage, key, _options);
        return result.toPromise();
    }

    /**
     * Getserviceswithspecs
     */
    public getServicesWithSpecs(_options?: Configuration): Promise<InlineResponse200> {
        const result = this.api.getServicesWithSpecs(_options);
        return result.toPromise();
    }

    /**
     * Hide Service
     * @param service 
     * @param stage 
     */
    public hideServiceMonitorServicesServiceStagesStageHidePost(service: string, stage: string, _options?: Configuration): Promise<any> {
        const result = this.api.hideServiceMonitorServicesServiceStagesStageHidePost(service, stage, _options);
        return result.toPromise();
    }

    /**
     * Ignore Alarm
     * @param service 
     * @param stage 
     * @param alarmUuid 
     * @param bodyIgnoreAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidIgnorePost 
     */
    public ignoreAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidIgnorePost(service: string, stage: string, alarmUuid: string, bodyIgnoreAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidIgnorePost: BodyIgnoreAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidIgnorePost, _options?: Configuration): Promise<any> {
        const result = this.api.ignoreAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidIgnorePost(service, stage, alarmUuid, bodyIgnoreAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidIgnorePost, _options);
        return result.toPromise();
    }

    /**
     * Register Service
     * @param bodyRegisterServiceMonitorServicesPost 
     */
    public registerServiceMonitorServicesPost(bodyRegisterServiceMonitorServicesPost: BodyRegisterServiceMonitorServicesPost, _options?: Configuration): Promise<any> {
        const result = this.api.registerServiceMonitorServicesPost(bodyRegisterServiceMonitorServicesPost, _options);
        return result.toPromise();
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
    public searchAlarmsMonitorServicesServiceAlarmsGet(service: string, page?: number, pageSize?: number, search?: string, searchOn?: string, sortOn?: string, sortDesc?: boolean, _options?: Configuration): Promise<any> {
        const result = this.api.searchAlarmsMonitorServicesServiceAlarmsGet(service, page, pageSize, search, searchOn, sortOn, sortDesc, _options);
        return result.toPromise();
    }

    /**
     * Show Service
     * @param service 
     * @param stage 
     */
    public showServiceMonitorServicesServiceStagesStageShowPost(service: string, stage: string, _options?: Configuration): Promise<any> {
        const result = this.api.showServiceMonitorServicesServiceStagesStageShowPost(service, stage, _options);
        return result.toPromise();
    }

    /**
     * Terminate Alarm
     * @param service 
     * @param stage 
     * @param alarmUuid 
     * @param bodyTerminateAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidTerminatePost 
     */
    public terminateAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidTerminatePost(service: string, stage: string, alarmUuid: string, bodyTerminateAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidTerminatePost: BodyTerminateAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidTerminatePost, _options?: Configuration): Promise<any> {
        const result = this.api.terminateAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidTerminatePost(service, stage, alarmUuid, bodyTerminateAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidTerminatePost, _options);
        return result.toPromise();
    }

    /**
     * Trigger Alarm
     * @param service 
     * @param stage 
     * @param bodyTriggerAlarmMonitorServicesServiceStagesStageAlarmsPost 
     */
    public triggerAlarmMonitorServicesServiceStagesStageAlarmsPost(service: string, stage: string, bodyTriggerAlarmMonitorServicesServiceStagesStageAlarmsPost: BodyTriggerAlarmMonitorServicesServiceStagesStageAlarmsPost, _options?: Configuration): Promise<any> {
        const result = this.api.triggerAlarmMonitorServicesServiceStagesStageAlarmsPost(service, stage, bodyTriggerAlarmMonitorServicesServiceStagesStageAlarmsPost, _options);
        return result.toPromise();
    }


}



import { ObservableNotesApi } from './ObservableAPI';

import { NotesApiRequestFactory, NotesApiResponseProcessor} from "../apis/NotesApi";
export class PromiseNotesApi {
    private api: ObservableNotesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: NotesApiRequestFactory,
        responseProcessor?: NotesApiResponseProcessor
    ) {
        this.api = new ObservableNotesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create Note
     * @param noteBase 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public createNote(noteBase: NoteBase, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<NoteDynamo> {
        const result = this.api.createNote(noteBase, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Delete Note
     * @param noteId 
     * @param method 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public deleteNote(noteId: string, method?: string, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteNote(noteId, method, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Get Note
     * @param noteId 
     * @param history 
     * @param historyContent 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public getNote(noteId: string, history?: number, historyContent?: boolean, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<NoteDynamoHistory> {
        const result = this.api.getNote(noteId, history, historyContent, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Update Note
     * @param noteId 
     * @param noteBase 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public updateNote(noteId: string, noteBase: NoteBase, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<NoteDynamo> {
        const result = this.api.updateNote(noteId, noteBase, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }


}



import { ObservablePlacesApi } from './ObservableAPI';

import { PlacesApiRequestFactory, PlacesApiResponseProcessor} from "../apis/PlacesApi";
export class PromisePlacesApi {
    private api: ObservablePlacesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PlacesApiRequestFactory,
        responseProcessor?: PlacesApiResponseProcessor
    ) {
        this.api = new ObservablePlacesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a Place.
     * Create Place
     * @param placeBase 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public createPlacePlacesPlacesPost(placeBase: PlaceBase, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<PlaceResponse> {
        const result = this.api.createPlacePlacesPlacesPost(placeBase, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Deletes the place with the given ID and returns True if successful
     * Delete Place
     * @param placeUuid 
     * @param softDelete 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public deletePlacePlacesPlacesPlaceUuidDelete(placeUuid: string, softDelete?: boolean, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<any> {
        const result = this.api.deletePlacePlacesPlacesPlaceUuidDelete(placeUuid, softDelete, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Forward Geocoding
     * @param searchingPlace 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public forwardGeocodingPlacesGeocodingForwardGet(searchingPlace: string, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<any> {
        const result = this.api.forwardGeocodingPlacesGeocodingForwardGet(searchingPlace, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Gets the place information given the Place ID
     * Get Place
     * @param placeUuid 
     * @param withMeta 
     * @param withCatalog 
     * @param withReviews 
     * @param withSchedule 
     * @param withCollection 
     * @param withBlog 
     * @param withTags 
     * @param withCategories 
     * @param withCompany 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public getPlacePlacesPlacesPlaceUuidGet(placeUuid: string, withMeta?: boolean, withCatalog?: boolean, withReviews?: boolean, withSchedule?: boolean, withCollection?: boolean, withBlog?: boolean, withTags?: boolean, withCategories?: boolean, withCompany?: boolean, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<PlaceResponse> {
        const result = this.api.getPlacePlacesPlacesPlaceUuidGet(placeUuid, withMeta, withCatalog, withReviews, withSchedule, withCollection, withBlog, withTags, withCategories, withCompany, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Reverse Geocoding
     * @param _long 
     * @param lat 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public reverseGeocodingPlacesGeocodingReverseGet(_long: number, lat: number, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<any> {
        const result = this.api.reverseGeocodingPlacesGeocodingReverseGet(_long, lat, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Search places by a search string
     * Search Places By Search String
     * @param searchString 
     * @param page 
     * @param pageSize 
     * @param sortOn 
     * @param sortDesc 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public searchPlacesBySearchStringPlacesSearchPlacesStringGet(searchString?: string, page?: number, pageSize?: number, sortOn?: string, sortDesc?: boolean, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<Page> {
        const result = this.api.searchPlacesBySearchStringPlacesSearchPlacesStringGet(searchString, page, pageSize, sortOn, sortDesc, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Search all places and returns paginated results with Places being stored in items field. Can search by `project_uuid, name, address, address_line_2, city, province_state, country, postal_zip_code, lat, lng email` string fields or the `is_public and is_deleted` boolean fields. To search with these fields use query params with string values. For sorting fill out \"sort_desc\" field with either true/false and the \"sort_on\" query parameter with column you want to sort on (ex: name). Max pagination items per page is 50. Item return format: ``` {     uuid                                **type:** string     project_uuid                        **type:** string or None      meta_uuid                           **type:** string or None      catalog_data                        **type:** dict or None      review_group_data                   **type:** dict or None      schedule_data                       **type:** dict or None      collection_data                     **type:** dict or None      blog_data                           **type:** dict or None      tags                                **type:** [TagBase] or None      categories                          **type:** [CategoryBase] or None      company                             **type:** CompanyBase or None      created_at                          **type:** string or None      updated_at                          **type:** string or None      deleted_at                          **type:** string or None  } ```
     * Search Places
     * @param projectUuid 
     * @param name 
     * @param addressLine1 
     * @param addressLine2 
     * @param city 
     * @param provinceState 
     * @param country 
     * @param postalZipCode 
     * @param lat 
     * @param lng 
     * @param email 
     * @param isPublic 
     * @param isDeleted 
     * @param withCompany 
     * @param withMeta 
     * @param withCatalog 
     * @param withReviews 
     * @param withSchedule 
     * @param withCollection 
     * @param withBlog 
     * @param withTags 
     * @param withCategories 
     * @param page 
     * @param pageSize 
     * @param sortOn 
     * @param sortDesc 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public searchPlacesPlacesPlacesGet(projectUuid?: string, name?: string, addressLine1?: string, addressLine2?: string, city?: string, provinceState?: string, country?: string, postalZipCode?: string, lat?: string, lng?: string, email?: string, isPublic?: boolean, isDeleted?: boolean, withCompany?: boolean, withMeta?: boolean, withCatalog?: boolean, withReviews?: boolean, withSchedule?: boolean, withCollection?: boolean, withBlog?: boolean, withTags?: boolean, withCategories?: boolean, page?: number, pageSize?: number, sortOn?: string, sortDesc?: boolean, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<Page> {
        const result = this.api.searchPlacesPlacesPlacesGet(projectUuid, name, addressLine1, addressLine2, city, provinceState, country, postalZipCode, lat, lng, email, isPublic, isDeleted, withCompany, withMeta, withCatalog, withReviews, withSchedule, withCollection, withBlog, withTags, withCategories, page, pageSize, sortOn, sortDesc, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Update Place with given info, only updating the fields supplied. Place Uuid must be sent however.
     * Update Place
     * @param placeUuid 
     * @param placeBase 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public updatePlacePlacesPlacesPlaceUuidPut(placeUuid: string, placeBase: PlaceBase, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<PlaceResponse> {
        const result = this.api.updatePlacePlacesPlacesPlaceUuidPut(placeUuid, placeBase, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }


}



import { ObservableProjectsApi } from './ObservableAPI';

import { ProjectsApiRequestFactory, ProjectsApiResponseProcessor} from "../apis/ProjectsApi";
export class PromiseProjectsApi {
    private api: ObservableProjectsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProjectsApiRequestFactory,
        responseProcessor?: ProjectsApiResponseProcessor
    ) {
        this.api = new ObservableProjectsApi(configuration, requestFactory, responseProcessor);
    }

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
    public addMemberToProjectProjectsProjectsProjectUuidMembersEntityUuidPost(projectUuid: string, entityUuid: string, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<InlineResponse2005> {
        const result = this.api.addMemberToProjectProjectsProjectsProjectUuidMembersEntityUuidPost(projectUuid, entityUuid, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
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
    public archiveProjectProjectsProjectsProjectUuidDelete(projectUuid: string, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<InlineResponse2003> {
        const result = this.api.archiveProjectProjectsProjectsProjectUuidDelete(projectUuid, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
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
    public createProjectKeyProjectsProjectsProjectUuidKeysPost(projectUuid: string, securityKeyCreate: SecurityKeyCreate, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<CreateKeyResponse> {
        const result = this.api.createProjectKeyProjectsProjectsProjectUuidKeysPost(projectUuid, securityKeyCreate, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
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
    public createProjectProjectsProjectsPost(projectsProjectCreate: ProjectsProjectCreate, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<any> {
        const result = this.api.createProjectProjectsProjectsPost(projectsProjectCreate, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
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
    public createUsageTypeProjectsUsageTypesPost(projectsUsageTypeCreate: ProjectsUsageTypeCreate, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<ProjectsUsageTypeDB> {
        const result = this.api.createUsageTypeProjectsUsageTypesPost(projectsUsageTypeCreate, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
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
    public deleteUsageTypeProjectsUsageTypesUsageTypeKeyDelete(usageTypeKey: string, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<InlineResponse2004> {
        const result = this.api.deleteUsageTypeProjectsUsageTypesUsageTypeKeyDelete(usageTypeKey, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
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
    public getAllProjectUsageProjectsProjectsProjectUuidUsageGet(projectUuid: string, year?: number, month?: number, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<Array<ProjectsProjectUsageDB>> {
        const result = this.api.getAllProjectUsageProjectsProjectsProjectUuidUsageGet(projectUuid, year, month, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
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
    public getMemberProjectsProjectsMembersEntityUuidProjectsGet(entityUuid: string, role?: string, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<Array<ProjectsProjectGet>> {
        const result = this.api.getMemberProjectsProjectsMembersEntityUuidProjectsGet(entityUuid, role, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
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
    public getProjectKeysProjectsProjectsProjectUuidKeysGet(projectUuid: string, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<Array<ProjectsProjectMemberDB>> {
        const result = this.api.getProjectKeysProjectsProjectsProjectUuidKeysGet(projectUuid, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
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
    public getProjectMembersProjectsProjectsProjectUuidMembersGet(projectUuid: string, role?: string, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<Array<ProjectsProjectMemberDB>> {
        const result = this.api.getProjectMembersProjectsProjectsProjectUuidMembersGet(projectUuid, role, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
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
    public getProjectProjectsProjectsProjectUuidGet(projectUuid: string, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<any> {
        const result = this.api.getProjectProjectsProjectsProjectUuidGet(projectUuid, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
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
    public getSpecificProjectUsageProjectsProjectsProjectUuidUsageUsageTypeKeyGet(usageTypeKey: string, projectUuid: string, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<ProjectsProjectUsageDB> {
        const result = this.api.getSpecificProjectUsageProjectsProjectsProjectUuidUsageUsageTypeKeyGet(usageTypeKey, projectUuid, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Get a UsageType  No auth because we may want to use this on pricing/docs pages
     * Get Usage Type
     * @param usageTypeKey 
     */
    public getUsageTypeProjectsUsageTypesUsageTypeKeyGet(usageTypeKey: string, _options?: Configuration): Promise<ProjectsUsageTypeGet> {
        const result = this.api.getUsageTypeProjectsUsageTypesUsageTypeKeyGet(usageTypeKey, _options);
        return result.toPromise();
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
    public removeMemberFromProjectProjectsProjectsProjectUuidMembersEntityUuidDelete(projectUuid: string, entityUuid: string, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<InlineResponse2005> {
        const result = this.api.removeMemberFromProjectProjectsProjectsProjectUuidMembersEntityUuidDelete(projectUuid, entityUuid, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
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
    public removeProjectKeyProjectsProjectsProjectUuidKeysDelete(projectUuid: string, accessToken?: string, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<any> {
        const result = this.api.removeProjectKeyProjectsProjectsProjectUuidKeysDelete(projectUuid, accessToken, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
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
    public sandboxProjectsSandboxGet(xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<any> {
        const result = this.api.sandboxProjectsSandboxGet(xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
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
    public searchProjectsProjectsProjectsGet(page?: number, pageSize?: number, search?: string, searchOn?: string, sortOn?: string, sortDesc?: boolean, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<Page> {
        const result = this.api.searchProjectsProjectsProjectsGet(page, pageSize, search, searchOn, sortOn, sortDesc, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
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
    public searchUsageTypeProjectsUsageTypesGet(page?: number, pageSize?: number, search?: string, searchOn?: string, sortOn?: string, sortDesc?: boolean, _options?: Configuration): Promise<Page> {
        const result = this.api.searchUsageTypeProjectsUsageTypesGet(page, pageSize, search, searchOn, sortOn, sortDesc, _options);
        return result.toPromise();
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
    public updateProjectProjectsProjectsProjectUuidPut(projectUuid: string, projectsProjectUpdate: ProjectsProjectUpdate, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<any> {
        const result = this.api.updateProjectProjectsProjectsProjectUuidPut(projectUuid, projectsProjectUpdate, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
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
    public updateUsageTypeProjectsUsageTypesUsageTypeKeyPut(usageTypeKey: string, projectsUsageTypeUpdate: ProjectsUsageTypeUpdate, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<ProjectsUsageTypeDB> {
        const result = this.api.updateUsageTypeProjectsUsageTypesUsageTypeKeyPut(usageTypeKey, projectsUsageTypeUpdate, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }


}



import { ObservableSecurityApi } from './ObservableAPI';

import { SecurityApiRequestFactory, SecurityApiResponseProcessor} from "../apis/SecurityApi";
export class PromiseSecurityApi {
    private api: ObservableSecurityApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SecurityApiRequestFactory,
        responseProcessor?: SecurityApiResponseProcessor
    ) {
        this.api = new ObservableSecurityApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create Encryption Key
     * @param category 
     * @param ehelplySecuritySecretKey 
     */
    public createEncryptionKeySecurityEncryptionCategoriesCategoryKeysPost(category: string, ehelplySecuritySecretKey?: string, _options?: Configuration): Promise<any> {
        const result = this.api.createEncryptionKeySecurityEncryptionCategoriesCategoryKeysPost(category, ehelplySecuritySecretKey, _options);
        return result.toPromise();
    }

    /**
     * Create Key
     * @param bodyCreateKeySecurityKeysPost 
     * @param accessLength 
     * @param secretLength 
     */
    public createKeySecurityKeysPost(bodyCreateKeySecurityKeysPost: BodyCreateKeySecurityKeysPost, accessLength?: number, secretLength?: number, _options?: Configuration): Promise<InlineResponse2007> {
        const result = this.api.createKeySecurityKeysPost(bodyCreateKeySecurityKeysPost, accessLength, secretLength, _options);
        return result.toPromise();
    }

    /**
     * Delete Key
     * @param keyUuid 
     */
    public deleteKeySecurityKeysKeyUuidDelete(keyUuid: string, _options?: Configuration): Promise<InlineResponse2008> {
        const result = this.api.deleteKeySecurityKeysKeyUuidDelete(keyUuid, _options);
        return result.toPromise();
    }

    /**
     * Generate Token
     * @param bodyGenerateTokenSecurityTokensPost 
     */
    public generateTokenSecurityTokensPost(bodyGenerateTokenSecurityTokensPost: BodyGenerateTokenSecurityTokensPost, _options?: Configuration): Promise<InlineResponse2006> {
        const result = this.api.generateTokenSecurityTokensPost(bodyGenerateTokenSecurityTokensPost, _options);
        return result.toPromise();
    }

    /**
     * Get Encryption Key
     * @param category 
     * @param ehelplySecuritySecretKey 
     */
    public getEncryptionKeySecurityEncryptionCategoriesCategoryKeysGet(category: string, ehelplySecuritySecretKey?: string, _options?: Configuration): Promise<Array<SecurityEncryptionKeyGet>> {
        const result = this.api.getEncryptionKeySecurityEncryptionCategoriesCategoryKeysGet(category, ehelplySecuritySecretKey, _options);
        return result.toPromise();
    }

    /**
     * Get Key
     * @param keyUuid 
     */
    public getKeySecurityKeysKeyUuidGet(keyUuid: string, _options?: Configuration): Promise<SecurityKeyGet> {
        const result = this.api.getKeySecurityKeysKeyUuidGet(keyUuid, _options);
        return result.toPromise();
    }

    /**
     * Search Keys
     */
    public searchKeysSecurityKeysGet(_options?: Configuration): Promise<Array<SecurityKeyGet>> {
        const result = this.api.searchKeysSecurityKeysGet(_options);
        return result.toPromise();
    }

    /**
     * Verify Key
     * @param bodyVerifyKeySecurityKeysVerifyPost 
     */
    public verifyKeySecurityKeysVerifyPost(bodyVerifyKeySecurityKeysVerifyPost: BodyVerifyKeySecurityKeysVerifyPost, _options?: Configuration): Promise<SecurityKeyGet> {
        const result = this.api.verifyKeySecurityKeysVerifyPost(bodyVerifyKeySecurityKeysVerifyPost, _options);
        return result.toPromise();
    }


}



import { ObservableStaffApi } from './ObservableAPI';

import { StaffApiRequestFactory, StaffApiResponseProcessor} from "../apis/StaffApi";
export class PromiseStaffApi {
    private api: ObservableStaffApi

    public constructor(
        configuration: Configuration,
        requestFactory?: StaffApiRequestFactory,
        responseProcessor?: StaffApiResponseProcessor
    ) {
        this.api = new ObservableStaffApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a staff member
     * Create Staff
     * @param staffCreate 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public createStaffPlacesStaffPost(staffCreate: StaffCreate, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<StaffDb> {
        const result = this.api.createStaffPlacesStaffPost(staffCreate, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Deletes the staff member with the given ID and returns True if successful
     * Delete Staff
     * @param staffUuid 
     * @param softDelete 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public deleteStaffPlacesStaffStaffUuidDelete(staffUuid: string, softDelete?: boolean, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteStaffPlacesStaffStaffUuidDelete(staffUuid, softDelete, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Gets the staff member information given the staff ID
     * Get Staff
     * @param staffUuid 
     * @param withPlaces 
     * @param withCompanies 
     * @param withCatalog 
     * @param withSchedule 
     * @param withRoles 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public getStaffPlacesStaffStaffUuidGet(staffUuid: string, withPlaces?: boolean, withCompanies?: boolean, withCatalog?: boolean, withSchedule?: boolean, withRoles?: boolean, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<StaffResponse> {
        const result = this.api.getStaffPlacesStaffStaffUuidGet(staffUuid, withPlaces, withCompanies, withCatalog, withSchedule, withRoles, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * TODO Item return format: ``` {     uuid                                **type:** string     project_uuid                        **type:** string or None      entity                              **type:** string or None      place                               **type:** dict or None      company                             **type:** dict or None      schedule                            **type:** dict or None      catalog                             **type:** dict or None      reviews                             **type:** dict or None      created_at                          **type:** string or None      updated_at                          **type:** string or None      deleted_at                          **type:** string or None  } ```
     * Search Staff
     * @param projectUuid 
     * @param firstName 
     * @param lastName 
     * @param isDeleted 
     * @param withCompanies 
     * @param withPlaces 
     * @param withSchedule 
     * @param withCatalog 
     * @param withReviews 
     * @param withRoles 
     * @param page 
     * @param pageSize 
     * @param sortOn 
     * @param sortDesc 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public searchStaffPlacesStaffGet(projectUuid?: string, firstName?: string, lastName?: string, isDeleted?: boolean, withCompanies?: boolean, withPlaces?: boolean, withSchedule?: boolean, withCatalog?: boolean, withReviews?: boolean, withRoles?: boolean, page?: number, pageSize?: number, sortOn?: string, sortDesc?: boolean, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<Page> {
        const result = this.api.searchStaffPlacesStaffGet(projectUuid, firstName, lastName, isDeleted, withCompanies, withPlaces, withSchedule, withCatalog, withReviews, withRoles, page, pageSize, sortOn, sortDesc, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Update staff with given info, only updating the fields supplied. Staff Uuid must be sent however.
     * Update Staff
     * @param staffUuid 
     * @param staffCreate 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public updateStaffPlacesStaffStaffUuidPut(staffUuid: string, staffCreate: StaffCreate, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<StaffResponse> {
        const result = this.api.updateStaffPlacesStaffStaffUuidPut(staffUuid, staffCreate, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }


}



import { ObservableSupportApi } from './ObservableAPI';

import { SupportApiRequestFactory, SupportApiResponseProcessor} from "../apis/SupportApi";
export class PromiseSupportApi {
    private api: ObservableSupportApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SupportApiRequestFactory,
        responseProcessor?: SupportApiResponseProcessor
    ) {
        this.api = new ObservableSupportApi(configuration, requestFactory, responseProcessor);
    }

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
    public createContactSupportContactPost(contact: Contact, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<ContactResponse> {
        const result = this.api.createContactSupportContactPost(contact, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
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
    public createTicketSupportProjectsProjectUuidMembersMemberUuidTicketsPost(projectUuid: string, memberUuid: string, createTicket: CreateTicket, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<TicketResponse> {
        const result = this.api.createTicketSupportProjectsProjectUuidMembersMemberUuidTicketsPost(projectUuid, memberUuid, createTicket, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
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
    public deleteContactSupportContactDelete(xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteContactSupportContactDelete(xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
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
    public listTicketsSupportProjectsProjectUuidMembersMemberUuidTicketsGet(projectUuid: string, memberUuid: string, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<Array<TicketsResponse>> {
        const result = this.api.listTicketsSupportProjectsProjectUuidMembersMemberUuidTicketsGet(projectUuid, memberUuid, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
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
    public updateTicketSupportProjectsProjectUuidMembersMemberUuidTicketsTicketIdPut(projectUuid: string, memberUuid: string, ticketId: string, createTicket: CreateTicket, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<TicketResponse> {
        const result = this.api.updateTicketSupportProjectsProjectUuidMembersMemberUuidTicketsTicketIdPut(projectUuid, memberUuid, ticketId, createTicket, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
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
    public viewTicketSupportProjectsProjectUuidMembersMemberUuidTicketsTicketIdGet(projectUuid: string, memberUuid: string, ticketId: string, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<TicketResponse> {
        const result = this.api.viewTicketSupportProjectsProjectUuidMembersMemberUuidTicketsTicketIdGet(projectUuid, memberUuid, ticketId, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }


}



import { ObservableTagApi } from './ObservableAPI';

import { TagApiRequestFactory, TagApiResponseProcessor} from "../apis/TagApi";
export class PromiseTagApi {
    private api: ObservableTagApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TagApiRequestFactory,
        responseProcessor?: TagApiResponseProcessor
    ) {
        this.api = new ObservableTagApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a tag
     * Create Tag
     * @param tagBase 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public createTagPlacesTagsPost(tagBase: TagBase, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<TagDb> {
        const result = this.api.createTagPlacesTagsPost(tagBase, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Deletes the tag member with the given ID and returns True if successful
     * Delete Tag
     * @param tagUuid 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public deleteTagPlacesTagsTagUuidDelete(tagUuid: string, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteTagPlacesTagsTagUuidDelete(tagUuid, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Gets the tag member information given the tag ID
     * Get Tag
     * @param tagUuid 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public getTagPlacesTagsTagUuidGet(tagUuid: string, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<TagBase> {
        const result = this.api.getTagPlacesTagsTagUuidGet(tagUuid, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * TODO Item return format: ``` {     uuid                                **type:** string     project_uuid                        **type:** string or None      name                                **type:** string or None      meta                                **type:** dict or None      created_at                          **type:** string or None      updated_at                          **type:** string or None      deleted_at                          **type:** string or None  } ```
     * Search Tags
     * @param projectUuid 
     * @param name 
     * @param page 
     * @param pageSize 
     * @param sortOn 
     * @param sortDesc 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public searchTagsPlacesTagsGet(projectUuid?: string, name?: string, page?: number, pageSize?: number, sortOn?: string, sortDesc?: boolean, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<Page> {
        const result = this.api.searchTagsPlacesTagsGet(projectUuid, name, page, pageSize, sortOn, sortDesc, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Update tag with given info, only updating the fields supplied. Tag Uuid must be sent however.
     * Update Tag
     * @param tagUuid 
     * @param tagBase 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public updateTagPlacesTagsTagUuidPut(tagUuid: string, tagBase: TagBase, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<TagBase> {
        const result = this.api.updateTagPlacesTagsTagUuidPut(tagUuid, tagBase, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }


}



import { ObservableUsersApi } from './ObservableAPI';

import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";
export class PromiseUsersApi {
    private api: ObservableUsersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UsersApiRequestFactory,
        responseProcessor?: UsersApiResponseProcessor
    ) {
        this.api = new ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Validates a user signup with a given confirmation
     * Confirmsignup
     * @param userConfirmation 
     */
    public confirmSignup(userConfirmation: UserConfirmation, _options?: Configuration): Promise<any> {
        const result = this.api.confirmSignup(userConfirmation, _options);
        return result.toPromise();
    }

    /**
     * Creates a participant given the participant info (meta and user_id)
     * Createparticipant
     * @param participantCreate 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public createParticipant(participantCreate: ParticipantCreate, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<ParticipantUserReturn> {
        const result = this.api.createParticipant(participantCreate, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Usually ran after login and will do the following: - If no user exists (AKA signed in with social media) it will create a new user and default participant - If a user exists, sync Cognito data from Cognito to the user - Determine missing fields that SHOULD be filled
     * Createuser
     * @param authorization 
     */
    public createUser(authorization?: string, _options?: Configuration): Promise<any> {
        const result = this.api.createUser(authorization, _options);
        return result.toPromise();
    }

    /**
     * Delete participants related to the given participant_id, returns True if successful
     * Deleteparticipant
     * @param participantId 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public deleteParticipant(participantId: string, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<boolean> {
        const result = this.api.deleteParticipant(participantId, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Soft deletes the user with the provided user id, granted the deleter is the same person or an admin. Returns True if successful
     * Deleteuser
     * @param userId 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public deleteUser(userId: string, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<boolean> {
        const result = this.api.deleteUser(userId, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Gets a participant given their participant ID
     * Getparticipant
     * @param participantId 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public getParticipant(participantId: string, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<ParticipantUserReturn> {
        const result = this.api.getParticipant(participantId, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Gets the user object given user id (uuid) or cognito id (cognito)
     * Getuser
     * @param userId 
     * @param idType 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public getUser(userId: string, idType?: string, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<UserResponse> {
        const result = this.api.getUser(userId, idType, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Login endpoint, returns tokens. EMAIL NEEDS TO BE VERIFIED (can be done through the email the user received).
     * Login
     * @param userLogin 
     */
    public login(userLogin: UserLogin, _options?: Configuration): Promise<UserLoginReturn> {
        const result = this.api.login(userLogin, _options);
        return result.toPromise();
    }

    /**
     * Refreshes tokens given a refresh token.
     * Refreshtoken
     * @param appClient 
     * @param body 
     */
    public refreshToken(appClient: string, body: string, _options?: Configuration): Promise<UserTokenReturn> {
        const result = this.api.refreshToken(appClient, body, _options);
        return result.toPromise();
    }

    /**
     * Sends the user an email with a confirmation code so they can reset their password
     * Resetpassword
     * @param userPasswordReset 
     */
    public resetPassword(userPasswordReset: UserPasswordReset, _options?: Configuration): Promise<any> {
        const result = this.api.resetPassword(userPasswordReset, _options);
        return result.toPromise();
    }

    /**
     * Resets the given user's password to the given password when the proper code is provided
     * Reset Password Confirmation
     * @param userPasswordResetConfirmation 
     */
    public resetPasswordConfirmationUsersAuthPasswordResetConfirmPost(userPasswordResetConfirmation: UserPasswordResetConfirmation, _options?: Configuration): Promise<any> {
        const result = this.api.resetPasswordConfirmationUsersAuthPasswordResetConfirmPost(userPasswordResetConfirmation, _options);
        return result.toPromise();
    }

    /**
     * Search participants using a user uuid, returns pagination information and list of `items` (ParticipantUserReturn from GET Participant). Can search on \"user_uuid\", and sort on any field. To search enter search value into \"search\" query param and the field into \"search on\" (currently only \"user\"uuid\"). For sorting fill out \"sort_desc\" field with either true/false and the \"sort_on\" query parameter with column you want to sort on (ex: date_created). Max pagination items per page is 50.
     * Searchparticipants
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
    public searchParticipants(page?: number, pageSize?: number, search?: string, searchOn?: string, sortOn?: string, sortDesc?: boolean, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<Page> {
        const result = this.api.searchParticipants(page, pageSize, search, searchOn, sortOn, sortDesc, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Signup to eHelply, creates a user and default participant behind the scenes. Does not verify email.
     * Signup
     * @param userSignup 
     */
    public signup(userSignup: UserSignup, _options?: Configuration): Promise<UserSignupReturn> {
        const result = this.api.signup(userSignup, _options);
        return result.toPromise();
    }

    /**
     * Update participant data given
     * Updateparticipant
     * @param participantId 
     * @param participantUpdate 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public updateParticipant(participantId: string, participantUpdate: ParticipantUpdate, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<ParticipantUserReturn> {
        const result = this.api.updateParticipant(participantId, participantUpdate, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Update the given user and sync the cognito data
     * Updateuser
     * @param userId 
     * @param user 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public updateUser(userId: string, user: User, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<UserResponse> {
        const result = this.api.updateUser(userId, user, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }

    /**
     * Validates a certain field.
     * Uservalidations
     * @param field 
     * @param userValidations 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public userValidations(field: string, userValidations: UserValidations, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<boolean> {
        const result = this.api.userValidations(field, userValidations, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, _options);
        return result.toPromise();
    }


}



