export * from './AddressBase';
export * from './AlarmAcknowledge';
export * from './AlarmAssign';
export * from './AlarmCreate';
export * from './AlarmIgnore';
export * from './AlarmNote';
export * from './AlarmTerminate';
export * from './AlarmTicket';
export * from './AttachPaymentToProject';
export * from './BasicMeta';
export * from './BasicMetaCreate';
export * from './BodyAckAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAcknowledgePost';
export * from './BodyAssignAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAssignPost';
export * from './BodyAttachAlarmNoteMonitorServicesServiceStagesStageAlarmsAlarmUuidNotePost';
export * from './BodyAttachAlarmTicketMonitorServicesServiceStagesStageAlarmsAlarmUuidTicketPost';
export * from './BodyAttachPaymentToProjectBillingAttachPaymentToProjectPost';
export * from './BodyCreateKeySecurityKeysPost';
export * from './BodyGenerateTokenSecurityTokensPost';
export * from './BodyIgnoreAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidIgnorePost';
export * from './BodyProcessPaymentBillingProcessPaymentPost';
export * from './BodyRegisterServiceMonitorServicesPost';
export * from './BodyTerminateAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidTerminatePost';
export * from './BodyTriggerAlarmMonitorServicesServiceStagesStageAlarmsPost';
export * from './BodyVerifyKeySecurityKeysVerifyPost';
export * from './CatalogBase';
export * from './CatalogReturn';
export * from './CategoryBase';
export * from './CategoryDb';
export * from './CompanyBase';
export * from './CompanyResponse';
export * from './Contact';
export * from './ContactBase';
export * from './ContactResponse';
export * from './CreateKeyResponse';
export * from './CreateReview';
export * from './CreateTicket';
export * from './CustomList';
export * from './DatesMeta';
export * from './DetailedMeta';
export * from './DetailedMetaCreate';
export * from './Field';
export * from './FieldDynamo';
export * from './HTTPValidationError';
export * from './InlineResponse200';
export * from './InlineResponse2001';
export * from './InlineResponse2002';
export * from './InlineResponse2003';
export * from './InlineResponse2004';
export * from './InlineResponse2005';
export * from './InlineResponse2006';
export * from './InlineResponse2007';
export * from './InlineResponse2008';
export * from './InlineResponse403';
export * from './MetaChildren';
export * from './MetaCreate';
export * from './MetaCustom';
export * from './MetaDynamo';
export * from './MetaSlugger';
export * from './NoteBase';
export * from './NoteDynamo';
export * from './NoteDynamoHistory';
export * from './NoteMeta';
export * from './NotesHTTPValidationError';
export * from './NotesValidationError';
export * from './OptionGroup';
export * from './Options';
export * from './Page';
export * from './Pagination';
export * from './ParticipantCreate';
export * from './ParticipantUpdate';
export * from './ParticipantUserReturn';
export * from './Payment';
export * from './PaymentMethodResponse';
export * from './PlaceBase';
export * from './PlaceResponse';
export * from './ProductBase';
export * from './ProductReturn';
export * from './ProjectsProjectCreate';
export * from './ProjectsProjectGet';
export * from './ProjectsProjectMemberDB';
export * from './ProjectsProjectUpdate';
export * from './ProjectsProjectUsageDB';
export * from './ProjectsUsageTypeCreate';
export * from './ProjectsUsageTypeDB';
export * from './ProjectsUsageTypeGet';
export * from './ProjectsUsageTypeUnitPrice';
export * from './ProjectsUsageTypeUpdate';
export * from './SecurityCreateToken';
export * from './SecurityEncryptionKeyGet';
export * from './SecurityKeyCreate';
export * from './SecurityKeyGet';
export * from './SecurityKeyVerify';
export * from './Selection';
export * from './ServiceCreate';
export * from './StaffCreate';
export * from './StaffDb';
export * from './StaffResponse';
export * from './StripeAccountResponse';
export * from './TagBase';
export * from './TagDb';
export * from './TicketResponse';
export * from './TicketsResponse';
export * from './UpdateReview';
export * from './User';
export * from './UserConfirmation';
export * from './UserEmail';
export * from './UserFlags';
export * from './UserLogin';
export * from './UserLoginReturn';
export * from './UserPasswordReset';
export * from './UserPasswordResetConfirmation';
export * from './UserResponse';
export * from './UserSignup';
export * from './UserSignupReturn';
export * from './UserTokenReturn';
export * from './UserValidations';
export * from './ValidationError';
export * from './Validations';

import { AddressBase } from './AddressBase';
import { AlarmAcknowledge } from './AlarmAcknowledge';
import { AlarmAssign } from './AlarmAssign';
import { AlarmCreate } from './AlarmCreate';
import { AlarmIgnore } from './AlarmIgnore';
import { AlarmNote } from './AlarmNote';
import { AlarmTerminate } from './AlarmTerminate';
import { AlarmTicket } from './AlarmTicket';
import { AttachPaymentToProject } from './AttachPaymentToProject';
import { BasicMeta } from './BasicMeta';
import { BasicMetaCreate } from './BasicMetaCreate';
import { BodyAckAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAcknowledgePost } from './BodyAckAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAcknowledgePost';
import { BodyAssignAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAssignPost } from './BodyAssignAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAssignPost';
import { BodyAttachAlarmNoteMonitorServicesServiceStagesStageAlarmsAlarmUuidNotePost } from './BodyAttachAlarmNoteMonitorServicesServiceStagesStageAlarmsAlarmUuidNotePost';
import { BodyAttachAlarmTicketMonitorServicesServiceStagesStageAlarmsAlarmUuidTicketPost } from './BodyAttachAlarmTicketMonitorServicesServiceStagesStageAlarmsAlarmUuidTicketPost';
import { BodyAttachPaymentToProjectBillingAttachPaymentToProjectPost } from './BodyAttachPaymentToProjectBillingAttachPaymentToProjectPost';
import { BodyCreateKeySecurityKeysPost } from './BodyCreateKeySecurityKeysPost';
import { BodyGenerateTokenSecurityTokensPost } from './BodyGenerateTokenSecurityTokensPost';
import { BodyIgnoreAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidIgnorePost } from './BodyIgnoreAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidIgnorePost';
import { BodyProcessPaymentBillingProcessPaymentPost } from './BodyProcessPaymentBillingProcessPaymentPost';
import { BodyRegisterServiceMonitorServicesPost } from './BodyRegisterServiceMonitorServicesPost';
import { BodyTerminateAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidTerminatePost } from './BodyTerminateAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidTerminatePost';
import { BodyTriggerAlarmMonitorServicesServiceStagesStageAlarmsPost } from './BodyTriggerAlarmMonitorServicesServiceStagesStageAlarmsPost';
import { BodyVerifyKeySecurityKeysVerifyPost } from './BodyVerifyKeySecurityKeysVerifyPost';
import { CatalogBase } from './CatalogBase';
import { CatalogReturn } from './CatalogReturn';
import { CategoryBase } from './CategoryBase';
import { CategoryDb } from './CategoryDb';
import { CompanyBase } from './CompanyBase';
import { CompanyResponse } from './CompanyResponse';
import { Contact } from './Contact';
import { ContactBase } from './ContactBase';
import { ContactResponse } from './ContactResponse';
import { CreateKeyResponse } from './CreateKeyResponse';
import { CreateReview } from './CreateReview';
import { CreateTicket } from './CreateTicket';
import { CustomList } from './CustomList';
import { DatesMeta } from './DatesMeta';
import { DetailedMeta } from './DetailedMeta';
import { DetailedMetaCreate } from './DetailedMetaCreate';
import { Field } from './Field';
import { FieldDynamo } from './FieldDynamo';
import { HTTPValidationError } from './HTTPValidationError';
import { InlineResponse200 } from './InlineResponse200';
import { InlineResponse2001 } from './InlineResponse2001';
import { InlineResponse2002 } from './InlineResponse2002';
import { InlineResponse2003 } from './InlineResponse2003';
import { InlineResponse2004 } from './InlineResponse2004';
import { InlineResponse2005 } from './InlineResponse2005';
import { InlineResponse2006 } from './InlineResponse2006';
import { InlineResponse2007 } from './InlineResponse2007';
import { InlineResponse2008 } from './InlineResponse2008';
import { InlineResponse403 } from './InlineResponse403';
import { MetaChildren } from './MetaChildren';
import { MetaCreate } from './MetaCreate';
import { MetaCustom } from './MetaCustom';
import { MetaDynamo } from './MetaDynamo';
import { MetaSlugger } from './MetaSlugger';
import { NoteBase } from './NoteBase';
import { NoteDynamo } from './NoteDynamo';
import { NoteDynamoHistory } from './NoteDynamoHistory';
import { NoteMeta } from './NoteMeta';
import { NotesHTTPValidationError } from './NotesHTTPValidationError';
import { NotesValidationError } from './NotesValidationError';
import { OptionGroup } from './OptionGroup';
import { Options } from './Options';
import { Page } from './Page';
import { Pagination } from './Pagination';
import { ParticipantCreate } from './ParticipantCreate';
import { ParticipantUpdate } from './ParticipantUpdate';
import { ParticipantUserReturn } from './ParticipantUserReturn';
import { Payment } from './Payment';
import { PaymentMethodResponse } from './PaymentMethodResponse';
import { PlaceBase } from './PlaceBase';
import { PlaceResponse } from './PlaceResponse';
import { ProductBase } from './ProductBase';
import { ProductReturn } from './ProductReturn';
import { ProjectsProjectCreate } from './ProjectsProjectCreate';
import { ProjectsProjectGet } from './ProjectsProjectGet';
import { ProjectsProjectMemberDB } from './ProjectsProjectMemberDB';
import { ProjectsProjectUpdate } from './ProjectsProjectUpdate';
import { ProjectsProjectUsageDB } from './ProjectsProjectUsageDB';
import { ProjectsUsageTypeCreate } from './ProjectsUsageTypeCreate';
import { ProjectsUsageTypeDB } from './ProjectsUsageTypeDB';
import { ProjectsUsageTypeGet } from './ProjectsUsageTypeGet';
import { ProjectsUsageTypeUnitPrice } from './ProjectsUsageTypeUnitPrice';
import { ProjectsUsageTypeUpdate } from './ProjectsUsageTypeUpdate';
import { SecurityCreateToken } from './SecurityCreateToken';
import { SecurityEncryptionKeyGet } from './SecurityEncryptionKeyGet';
import { SecurityKeyCreate } from './SecurityKeyCreate';
import { SecurityKeyGet } from './SecurityKeyGet';
import { SecurityKeyVerify } from './SecurityKeyVerify';
import { Selection } from './Selection';
import { ServiceCreate } from './ServiceCreate';
import { StaffCreate } from './StaffCreate';
import { StaffDb } from './StaffDb';
import { StaffResponse } from './StaffResponse';
import { StripeAccountResponse } from './StripeAccountResponse';
import { TagBase } from './TagBase';
import { TagDb } from './TagDb';
import { TicketResponse } from './TicketResponse';
import { TicketsResponse } from './TicketsResponse';
import { UpdateReview } from './UpdateReview';
import { User } from './User';
import { UserConfirmation } from './UserConfirmation';
import { UserEmail } from './UserEmail';
import { UserFlags } from './UserFlags';
import { UserLogin } from './UserLogin';
import { UserLoginReturn } from './UserLoginReturn';
import { UserPasswordReset } from './UserPasswordReset';
import { UserPasswordResetConfirmation } from './UserPasswordResetConfirmation';
import { UserResponse } from './UserResponse';
import { UserSignup } from './UserSignup';
import { UserSignupReturn } from './UserSignupReturn';
import { UserTokenReturn } from './UserTokenReturn';
import { UserValidations } from './UserValidations';
import { ValidationError } from './ValidationError';
import { Validations } from './Validations';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

const supportedMediaTypes: { [mediaType: string]: number } = {
  "application/json": Infinity,
  "application/octet-stream": 0,
  "application/x-www-form-urlencoded": 0
}


let enumsMap: Set<string> = new Set<string>([
]);

let typeMap: {[index: string]: any} = {
    "AddressBase": AddressBase,
    "AlarmAcknowledge": AlarmAcknowledge,
    "AlarmAssign": AlarmAssign,
    "AlarmCreate": AlarmCreate,
    "AlarmIgnore": AlarmIgnore,
    "AlarmNote": AlarmNote,
    "AlarmTerminate": AlarmTerminate,
    "AlarmTicket": AlarmTicket,
    "AttachPaymentToProject": AttachPaymentToProject,
    "BasicMeta": BasicMeta,
    "BasicMetaCreate": BasicMetaCreate,
    "BodyAckAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAcknowledgePost": BodyAckAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAcknowledgePost,
    "BodyAssignAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAssignPost": BodyAssignAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAssignPost,
    "BodyAttachAlarmNoteMonitorServicesServiceStagesStageAlarmsAlarmUuidNotePost": BodyAttachAlarmNoteMonitorServicesServiceStagesStageAlarmsAlarmUuidNotePost,
    "BodyAttachAlarmTicketMonitorServicesServiceStagesStageAlarmsAlarmUuidTicketPost": BodyAttachAlarmTicketMonitorServicesServiceStagesStageAlarmsAlarmUuidTicketPost,
    "BodyAttachPaymentToProjectBillingAttachPaymentToProjectPost": BodyAttachPaymentToProjectBillingAttachPaymentToProjectPost,
    "BodyCreateKeySecurityKeysPost": BodyCreateKeySecurityKeysPost,
    "BodyGenerateTokenSecurityTokensPost": BodyGenerateTokenSecurityTokensPost,
    "BodyIgnoreAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidIgnorePost": BodyIgnoreAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidIgnorePost,
    "BodyProcessPaymentBillingProcessPaymentPost": BodyProcessPaymentBillingProcessPaymentPost,
    "BodyRegisterServiceMonitorServicesPost": BodyRegisterServiceMonitorServicesPost,
    "BodyTerminateAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidTerminatePost": BodyTerminateAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidTerminatePost,
    "BodyTriggerAlarmMonitorServicesServiceStagesStageAlarmsPost": BodyTriggerAlarmMonitorServicesServiceStagesStageAlarmsPost,
    "BodyVerifyKeySecurityKeysVerifyPost": BodyVerifyKeySecurityKeysVerifyPost,
    "CatalogBase": CatalogBase,
    "CatalogReturn": CatalogReturn,
    "CategoryBase": CategoryBase,
    "CategoryDb": CategoryDb,
    "CompanyBase": CompanyBase,
    "CompanyResponse": CompanyResponse,
    "Contact": Contact,
    "ContactBase": ContactBase,
    "ContactResponse": ContactResponse,
    "CreateKeyResponse": CreateKeyResponse,
    "CreateReview": CreateReview,
    "CreateTicket": CreateTicket,
    "CustomList": CustomList,
    "DatesMeta": DatesMeta,
    "DetailedMeta": DetailedMeta,
    "DetailedMetaCreate": DetailedMetaCreate,
    "Field": Field,
    "FieldDynamo": FieldDynamo,
    "HTTPValidationError": HTTPValidationError,
    "InlineResponse200": InlineResponse200,
    "InlineResponse2001": InlineResponse2001,
    "InlineResponse2002": InlineResponse2002,
    "InlineResponse2003": InlineResponse2003,
    "InlineResponse2004": InlineResponse2004,
    "InlineResponse2005": InlineResponse2005,
    "InlineResponse2006": InlineResponse2006,
    "InlineResponse2007": InlineResponse2007,
    "InlineResponse2008": InlineResponse2008,
    "InlineResponse403": InlineResponse403,
    "MetaChildren": MetaChildren,
    "MetaCreate": MetaCreate,
    "MetaCustom": MetaCustom,
    "MetaDynamo": MetaDynamo,
    "MetaSlugger": MetaSlugger,
    "NoteBase": NoteBase,
    "NoteDynamo": NoteDynamo,
    "NoteDynamoHistory": NoteDynamoHistory,
    "NoteMeta": NoteMeta,
    "NotesHTTPValidationError": NotesHTTPValidationError,
    "NotesValidationError": NotesValidationError,
    "OptionGroup": OptionGroup,
    "Options": Options,
    "Page": Page,
    "Pagination": Pagination,
    "ParticipantCreate": ParticipantCreate,
    "ParticipantUpdate": ParticipantUpdate,
    "ParticipantUserReturn": ParticipantUserReturn,
    "Payment": Payment,
    "PaymentMethodResponse": PaymentMethodResponse,
    "PlaceBase": PlaceBase,
    "PlaceResponse": PlaceResponse,
    "ProductBase": ProductBase,
    "ProductReturn": ProductReturn,
    "ProjectsProjectCreate": ProjectsProjectCreate,
    "ProjectsProjectGet": ProjectsProjectGet,
    "ProjectsProjectMemberDB": ProjectsProjectMemberDB,
    "ProjectsProjectUpdate": ProjectsProjectUpdate,
    "ProjectsProjectUsageDB": ProjectsProjectUsageDB,
    "ProjectsUsageTypeCreate": ProjectsUsageTypeCreate,
    "ProjectsUsageTypeDB": ProjectsUsageTypeDB,
    "ProjectsUsageTypeGet": ProjectsUsageTypeGet,
    "ProjectsUsageTypeUnitPrice": ProjectsUsageTypeUnitPrice,
    "ProjectsUsageTypeUpdate": ProjectsUsageTypeUpdate,
    "SecurityCreateToken": SecurityCreateToken,
    "SecurityEncryptionKeyGet": SecurityEncryptionKeyGet,
    "SecurityKeyCreate": SecurityKeyCreate,
    "SecurityKeyGet": SecurityKeyGet,
    "SecurityKeyVerify": SecurityKeyVerify,
    "Selection": Selection,
    "ServiceCreate": ServiceCreate,
    "StaffCreate": StaffCreate,
    "StaffDb": StaffDb,
    "StaffResponse": StaffResponse,
    "StripeAccountResponse": StripeAccountResponse,
    "TagBase": TagBase,
    "TagDb": TagDb,
    "TicketResponse": TicketResponse,
    "TicketsResponse": TicketsResponse,
    "UpdateReview": UpdateReview,
    "User": User,
    "UserConfirmation": UserConfirmation,
    "UserEmail": UserEmail,
    "UserFlags": UserFlags,
    "UserLogin": UserLogin,
    "UserLoginReturn": UserLoginReturn,
    "UserPasswordReset": UserPasswordReset,
    "UserPasswordResetConfirmation": UserPasswordResetConfirmation,
    "UserResponse": UserResponse,
    "UserSignup": UserSignup,
    "UserSignupReturn": UserSignupReturn,
    "UserTokenReturn": UserTokenReturn,
    "UserValidations": UserValidations,
    "ValidationError": ValidationError,
    "Validations": Validations,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (!mediaTypes) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        let selectedMediaType: string | undefined = undefined;
        let selectedRank: number = -Infinity;
        for (const mediaType of normalMediaTypes) {
            if (supportedMediaTypes[mediaType!] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType!];
            }
        }

        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }

        return selectedMediaType!;
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (mediaType === "application/json") {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (mediaType === "application/json") {
            return JSON.parse(rawData);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
