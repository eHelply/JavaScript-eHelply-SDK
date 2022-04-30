# .SupportApi

All URIs are relative to *https://api.prod.ehelply.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createContactSupportContactPost**](SupportApi.md#createContactSupportContactPost) | **POST** /sam/support/contact | Create Contact
[**createTicketSupportProjectsProjectUuidMembersMemberUuidTicketsPost**](SupportApi.md#createTicketSupportProjectsProjectUuidMembersMemberUuidTicketsPost) | **POST** /sam/support/projects/{project_uuid}/members/{member_uuid}/tickets | Create Ticket
[**deleteContactSupportContactDelete**](SupportApi.md#deleteContactSupportContactDelete) | **DELETE** /sam/support/contact | Delete Contact
[**listTicketsSupportProjectsProjectUuidMembersMemberUuidTicketsGet**](SupportApi.md#listTicketsSupportProjectsProjectUuidMembersMemberUuidTicketsGet) | **GET** /sam/support/projects/{project_uuid}/members/{member_uuid}/tickets | List Tickets
[**updateTicketSupportProjectsProjectUuidMembersMemberUuidTicketsTicketIdPut**](SupportApi.md#updateTicketSupportProjectsProjectUuidMembersMemberUuidTicketsTicketIdPut) | **PUT** /sam/support/projects/{project_uuid}/members/{member_uuid}/tickets/{ticket_id} | Update Ticket
[**viewTicketSupportProjectsProjectUuidMembersMemberUuidTicketsTicketIdGet**](SupportApi.md#viewTicketSupportProjectsProjectUuidMembersMemberUuidTicketsTicketIdGet) | **GET** /sam/support/projects/{project_uuid}/members/{member_uuid}/tickets/{ticket_id} | View Ticket


# **createContactSupportContactPost**
> ContactResponse createContactSupportContactPost(contact)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SupportApi(configuration);

let body:.SupportApiCreateContactSupportContactPostRequest = {
  // Contact
  contact: {
    firstName: "firstName_example",
    lastName: "lastName_example",
    email: "email_example",
    phone: "phone_example",
  },
  // string (optional)
  xAccessToken: "x-access-token_example",
  // string (optional)
  xSecretToken: "x-secret-token_example",
  // string (optional)
  authorization: "authorization_example",
  // string (optional)
  ehelplyActiveParticipant: "ehelply-active-participant_example",
  // string (optional)
  ehelplyProject: "ehelply-project_example",
  // string (optional)
  ehelplyData: "ehelply-data_example",
};

apiInstance.createContactSupportContactPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contact** | **Contact**|  |
 **xAccessToken** | [**string**] |  | (optional) defaults to undefined
 **xSecretToken** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined
 **ehelplyActiveParticipant** | [**string**] |  | (optional) defaults to undefined
 **ehelplyProject** | [**string**] |  | (optional) defaults to undefined
 **ehelplyData** | [**string**] |  | (optional) defaults to undefined


### Return type

**ContactResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**403** | Unauthorized - Denied by eHelply |  -  |
**404** | Not found |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createTicketSupportProjectsProjectUuidMembersMemberUuidTicketsPost**
> TicketResponse createTicketSupportProjectsProjectUuidMembersMemberUuidTicketsPost(createTicket)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SupportApi(configuration);

let body:.SupportApiCreateTicketSupportProjectsProjectUuidMembersMemberUuidTicketsPostRequest = {
  // string
  projectUuid: "project_uuid_example",
  // string
  memberUuid: "member_uuid_example",
  // CreateTicket
  createTicket: {
    priority: "priority_example",
    subject: "subject_example",
  },
  // string (optional)
  xAccessToken: "x-access-token_example",
  // string (optional)
  xSecretToken: "x-secret-token_example",
  // string (optional)
  authorization: "authorization_example",
  // string (optional)
  ehelplyActiveParticipant: "ehelply-active-participant_example",
  // string (optional)
  ehelplyProject: "ehelply-project_example",
  // string (optional)
  ehelplyData: "ehelply-data_example",
};

apiInstance.createTicketSupportProjectsProjectUuidMembersMemberUuidTicketsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTicket** | **CreateTicket**|  |
 **projectUuid** | [**string**] |  | defaults to undefined
 **memberUuid** | [**string**] |  | defaults to undefined
 **xAccessToken** | [**string**] |  | (optional) defaults to undefined
 **xSecretToken** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined
 **ehelplyActiveParticipant** | [**string**] |  | (optional) defaults to undefined
 **ehelplyProject** | [**string**] |  | (optional) defaults to undefined
 **ehelplyData** | [**string**] |  | (optional) defaults to undefined


### Return type

**TicketResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**403** | Unauthorized - Denied by eHelply |  -  |
**404** | Not found |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteContactSupportContactDelete**
> any deleteContactSupportContactDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SupportApi(configuration);

let body:.SupportApiDeleteContactSupportContactDeleteRequest = {
  // string (optional)
  xAccessToken: "x-access-token_example",
  // string (optional)
  xSecretToken: "x-secret-token_example",
  // string (optional)
  authorization: "authorization_example",
  // string (optional)
  ehelplyActiveParticipant: "ehelply-active-participant_example",
  // string (optional)
  ehelplyProject: "ehelply-project_example",
  // string (optional)
  ehelplyData: "ehelply-data_example",
};

apiInstance.deleteContactSupportContactDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccessToken** | [**string**] |  | (optional) defaults to undefined
 **xSecretToken** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined
 **ehelplyActiveParticipant** | [**string**] |  | (optional) defaults to undefined
 **ehelplyProject** | [**string**] |  | (optional) defaults to undefined
 **ehelplyData** | [**string**] |  | (optional) defaults to undefined


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**404** | Not found |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listTicketsSupportProjectsProjectUuidMembersMemberUuidTicketsGet**
> Array<TicketsResponse> listTicketsSupportProjectsProjectUuidMembersMemberUuidTicketsGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SupportApi(configuration);

let body:.SupportApiListTicketsSupportProjectsProjectUuidMembersMemberUuidTicketsGetRequest = {
  // string
  projectUuid: "project_uuid_example",
  // string
  memberUuid: "member_uuid_example",
  // string (optional)
  xAccessToken: "x-access-token_example",
  // string (optional)
  xSecretToken: "x-secret-token_example",
  // string (optional)
  authorization: "authorization_example",
  // string (optional)
  ehelplyActiveParticipant: "ehelply-active-participant_example",
  // string (optional)
  ehelplyProject: "ehelply-project_example",
  // string (optional)
  ehelplyData: "ehelply-data_example",
};

apiInstance.listTicketsSupportProjectsProjectUuidMembersMemberUuidTicketsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectUuid** | [**string**] |  | defaults to undefined
 **memberUuid** | [**string**] |  | defaults to undefined
 **xAccessToken** | [**string**] |  | (optional) defaults to undefined
 **xSecretToken** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined
 **ehelplyActiveParticipant** | [**string**] |  | (optional) defaults to undefined
 **ehelplyProject** | [**string**] |  | (optional) defaults to undefined
 **ehelplyData** | [**string**] |  | (optional) defaults to undefined


### Return type

**Array<TicketsResponse>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**403** | Unauthorized - Denied by eHelply |  -  |
**404** | Record does not exist |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateTicketSupportProjectsProjectUuidMembersMemberUuidTicketsTicketIdPut**
> TicketResponse updateTicketSupportProjectsProjectUuidMembersMemberUuidTicketsTicketIdPut(createTicket)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SupportApi(configuration);

let body:.SupportApiUpdateTicketSupportProjectsProjectUuidMembersMemberUuidTicketsTicketIdPutRequest = {
  // string
  projectUuid: "project_uuid_example",
  // string
  memberUuid: "member_uuid_example",
  // string
  ticketId: "ticket_id_example",
  // CreateTicket
  createTicket: {
    priority: "priority_example",
    subject: "subject_example",
  },
  // string (optional)
  xAccessToken: "x-access-token_example",
  // string (optional)
  xSecretToken: "x-secret-token_example",
  // string (optional)
  authorization: "authorization_example",
  // string (optional)
  ehelplyActiveParticipant: "ehelply-active-participant_example",
  // string (optional)
  ehelplyProject: "ehelply-project_example",
  // string (optional)
  ehelplyData: "ehelply-data_example",
};

apiInstance.updateTicketSupportProjectsProjectUuidMembersMemberUuidTicketsTicketIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTicket** | **CreateTicket**|  |
 **projectUuid** | [**string**] |  | defaults to undefined
 **memberUuid** | [**string**] |  | defaults to undefined
 **ticketId** | [**string**] |  | defaults to undefined
 **xAccessToken** | [**string**] |  | (optional) defaults to undefined
 **xSecretToken** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined
 **ehelplyActiveParticipant** | [**string**] |  | (optional) defaults to undefined
 **ehelplyProject** | [**string**] |  | (optional) defaults to undefined
 **ehelplyData** | [**string**] |  | (optional) defaults to undefined


### Return type

**TicketResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**403** | Unauthorized - Denied by eHelply |  -  |
**404** | Not found |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **viewTicketSupportProjectsProjectUuidMembersMemberUuidTicketsTicketIdGet**
> TicketResponse viewTicketSupportProjectsProjectUuidMembersMemberUuidTicketsTicketIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SupportApi(configuration);

let body:.SupportApiViewTicketSupportProjectsProjectUuidMembersMemberUuidTicketsTicketIdGetRequest = {
  // string
  projectUuid: "project_uuid_example",
  // string
  memberUuid: "member_uuid_example",
  // string
  ticketId: "ticket_id_example",
  // string (optional)
  xAccessToken: "x-access-token_example",
  // string (optional)
  xSecretToken: "x-secret-token_example",
  // string (optional)
  authorization: "authorization_example",
  // string (optional)
  ehelplyActiveParticipant: "ehelply-active-participant_example",
  // string (optional)
  ehelplyProject: "ehelply-project_example",
  // string (optional)
  ehelplyData: "ehelply-data_example",
};

apiInstance.viewTicketSupportProjectsProjectUuidMembersMemberUuidTicketsTicketIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectUuid** | [**string**] |  | defaults to undefined
 **memberUuid** | [**string**] |  | defaults to undefined
 **ticketId** | [**string**] |  | defaults to undefined
 **xAccessToken** | [**string**] |  | (optional) defaults to undefined
 **xSecretToken** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined
 **ehelplyActiveParticipant** | [**string**] |  | (optional) defaults to undefined
 **ehelplyProject** | [**string**] |  | (optional) defaults to undefined
 **ehelplyData** | [**string**] |  | (optional) defaults to undefined


### Return type

**TicketResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**403** | Unauthorized - Denied by eHelply |  -  |
**404** | Not found |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


