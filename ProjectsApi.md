# .ProjectsApi

All URIs are relative to *https://api.prod.ehelply.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addMemberToProjectProjectsProjectsProjectUuidMembersEntityUuidPost**](ProjectsApi.md#addMemberToProjectProjectsProjectsProjectUuidMembersEntityUuidPost) | **POST** /sam/projects/projects/{project_uuid}/members/{entity_uuid} | Add Member To Project
[**archiveProjectProjectsProjectsProjectUuidDelete**](ProjectsApi.md#archiveProjectProjectsProjectsProjectUuidDelete) | **DELETE** /sam/projects/projects/{project_uuid} | Archive Project
[**createProjectKeyProjectsProjectsProjectUuidKeysPost**](ProjectsApi.md#createProjectKeyProjectsProjectsProjectUuidKeysPost) | **POST** /sam/projects/projects/{project_uuid}/keys | Create Project Key
[**createProjectProjectsProjectsPost**](ProjectsApi.md#createProjectProjectsProjectsPost) | **POST** /sam/projects/projects | Create Project
[**createUsageTypeProjectsUsageTypesPost**](ProjectsApi.md#createUsageTypeProjectsUsageTypesPost) | **POST** /sam/projects/usage/types | Create Usage Type
[**deleteUsageTypeProjectsUsageTypesUsageTypeKeyDelete**](ProjectsApi.md#deleteUsageTypeProjectsUsageTypesUsageTypeKeyDelete) | **DELETE** /sam/projects/usage/types/{usage_type_key} | Delete Usage Type
[**getAllProjectUsageProjectsProjectsProjectUuidUsageGet**](ProjectsApi.md#getAllProjectUsageProjectsProjectsProjectUuidUsageGet) | **GET** /sam/projects/projects/{project_uuid}/usage | Get All Project Usage
[**getMemberProjectsProjectsMembersEntityUuidProjectsGet**](ProjectsApi.md#getMemberProjectsProjectsMembersEntityUuidProjectsGet) | **GET** /sam/projects/members/{entity_uuid}/projects | Get Member Projects
[**getProjectKeysProjectsProjectsProjectUuidKeysGet**](ProjectsApi.md#getProjectKeysProjectsProjectsProjectUuidKeysGet) | **GET** /sam/projects/projects/{project_uuid}/keys | Get Project Keys
[**getProjectMembersProjectsProjectsProjectUuidMembersGet**](ProjectsApi.md#getProjectMembersProjectsProjectsProjectUuidMembersGet) | **GET** /sam/projects/projects/{project_uuid}/members | Get Project Members
[**getProjectProjectsProjectsProjectUuidGet**](ProjectsApi.md#getProjectProjectsProjectsProjectUuidGet) | **GET** /sam/projects/projects/{project_uuid} | Get Project
[**getSpecificProjectUsageProjectsProjectsProjectUuidUsageUsageTypeKeyGet**](ProjectsApi.md#getSpecificProjectUsageProjectsProjectsProjectUuidUsageUsageTypeKeyGet) | **GET** /sam/projects/projects/{project_uuid}/usage/{usage_type_key} | Get Specific Project Usage
[**getUsageTypeProjectsUsageTypesUsageTypeKeyGet**](ProjectsApi.md#getUsageTypeProjectsUsageTypesUsageTypeKeyGet) | **GET** /sam/projects/usage/types/{usage_type_key} | Get Usage Type
[**removeMemberFromProjectProjectsProjectsProjectUuidMembersEntityUuidDelete**](ProjectsApi.md#removeMemberFromProjectProjectsProjectsProjectUuidMembersEntityUuidDelete) | **DELETE** /sam/projects/projects/{project_uuid}/members/{entity_uuid} | Remove Member From Project
[**removeProjectKeyProjectsProjectsProjectUuidKeysDelete**](ProjectsApi.md#removeProjectKeyProjectsProjectsProjectUuidKeysDelete) | **DELETE** /sam/projects/projects/{project_uuid}/keys | Remove Project Key
[**sandboxProjectsSandboxGet**](ProjectsApi.md#sandboxProjectsSandboxGet) | **GET** /sam/projects/sandbox | Sandbox
[**searchProjectsProjectsProjectsGet**](ProjectsApi.md#searchProjectsProjectsProjectsGet) | **GET** /sam/projects/projects | Search Projects
[**searchUsageTypeProjectsUsageTypesGet**](ProjectsApi.md#searchUsageTypeProjectsUsageTypesGet) | **GET** /sam/projects/usage/types | Search Usage Type
[**updateProjectProjectsProjectsProjectUuidPut**](ProjectsApi.md#updateProjectProjectsProjectsProjectUuidPut) | **PUT** /sam/projects/projects/{project_uuid} | Update Project
[**updateUsageTypeProjectsUsageTypesUsageTypeKeyPut**](ProjectsApi.md#updateUsageTypeProjectsUsageTypesUsageTypeKeyPut) | **PUT** /sam/projects/usage/types/{usage_type_key} | Update Usage Type


# **addMemberToProjectProjectsProjectsProjectUuidMembersEntityUuidPost**
> InlineResponse2005 addMemberToProjectProjectsProjectsProjectUuidMembersEntityUuidPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectsApi(configuration);

let body:.ProjectsApiAddMemberToProjectProjectsProjectsProjectUuidMembersEntityUuidPostRequest = {
  // string
  projectUuid: "project_uuid_example",
  // string
  entityUuid: "entity_uuid_example",
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

apiInstance.addMemberToProjectProjectsProjectsProjectUuidMembersEntityUuidPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectUuid** | [**string**] |  | defaults to undefined
 **entityUuid** | [**string**] |  | defaults to undefined
 **xAccessToken** | [**string**] |  | (optional) defaults to undefined
 **xSecretToken** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined
 **ehelplyActiveParticipant** | [**string**] |  | (optional) defaults to undefined
 **ehelplyProject** | [**string**] |  | (optional) defaults to undefined
 **ehelplyData** | [**string**] |  | (optional) defaults to undefined


### Return type

**InlineResponse2005**

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
**404** | Project does not exist |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **archiveProjectProjectsProjectsProjectUuidDelete**
> InlineResponse2003 archiveProjectProjectsProjectsProjectUuidDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectsApi(configuration);

let body:.ProjectsApiArchiveProjectProjectsProjectsProjectUuidDeleteRequest = {
  // string
  projectUuid: "project_uuid_example",
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

apiInstance.archiveProjectProjectsProjectsProjectUuidDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectUuid** | [**string**] |  | defaults to undefined
 **xAccessToken** | [**string**] |  | (optional) defaults to undefined
 **xSecretToken** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined
 **ehelplyActiveParticipant** | [**string**] |  | (optional) defaults to undefined
 **ehelplyProject** | [**string**] |  | (optional) defaults to undefined
 **ehelplyData** | [**string**] |  | (optional) defaults to undefined


### Return type

**InlineResponse2003**

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

# **createProjectKeyProjectsProjectsProjectUuidKeysPost**
> CreateKeyResponse createProjectKeyProjectsProjectsProjectUuidKeysPost(securityKeyCreate)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectsApi(configuration);

let body:.ProjectsApiCreateProjectKeyProjectsProjectsProjectUuidKeysPostRequest = {
  // string
  projectUuid: "project_uuid_example",
  // SecurityKeyCreate
  securityKeyCreate: {
    name: "name_example",
    summary: "summary_example",
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

apiInstance.createProjectKeyProjectsProjectsProjectUuidKeysPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **securityKeyCreate** | **SecurityKeyCreate**|  |
 **projectUuid** | [**string**] |  | defaults to undefined
 **xAccessToken** | [**string**] |  | (optional) defaults to undefined
 **xSecretToken** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined
 **ehelplyActiveParticipant** | [**string**] |  | (optional) defaults to undefined
 **ehelplyProject** | [**string**] |  | (optional) defaults to undefined
 **ehelplyData** | [**string**] |  | (optional) defaults to undefined


### Return type

**CreateKeyResponse**

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
**404** | Project or Entity does not exist |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createProjectProjectsProjectsPost**
> any createProjectProjectsProjectsPost(projectsProjectCreate)

Create a new Project

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectsApi(configuration);

let body:.ProjectsApiCreateProjectProjectsProjectsPostRequest = {
  // ProjectsProjectCreate
  projectsProjectCreate: {
    name: "name_example",
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

apiInstance.createProjectProjectsProjectsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsProjectCreate** | **ProjectsProjectCreate**|  |
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

# **createUsageTypeProjectsUsageTypesPost**
> ProjectsUsageTypeDB createUsageTypeProjectsUsageTypesPost(projectsUsageTypeCreate)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectsApi(configuration);

let body:.ProjectsApiCreateUsageTypeProjectsUsageTypesPostRequest = {
  // ProjectsUsageTypeCreate
  projectsUsageTypeCreate: {
    key: "key_example",
    name: "name_example",
    summary: "summary_example",
    category: "category_example",
    service: "service_example",
    unitPrices: [
      {
        minQuantity: 1,
        maxQuantity: 1,
        unitPrice: 1,
      },
    ],
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

apiInstance.createUsageTypeProjectsUsageTypesPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsUsageTypeCreate** | **ProjectsUsageTypeCreate**|  |
 **xAccessToken** | [**string**] |  | (optional) defaults to undefined
 **xSecretToken** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined
 **ehelplyActiveParticipant** | [**string**] |  | (optional) defaults to undefined
 **ehelplyProject** | [**string**] |  | (optional) defaults to undefined
 **ehelplyData** | [**string**] |  | (optional) defaults to undefined


### Return type

**ProjectsUsageTypeDB**

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

# **deleteUsageTypeProjectsUsageTypesUsageTypeKeyDelete**
> InlineResponse2004 deleteUsageTypeProjectsUsageTypesUsageTypeKeyDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectsApi(configuration);

let body:.ProjectsApiDeleteUsageTypeProjectsUsageTypesUsageTypeKeyDeleteRequest = {
  // string
  usageTypeKey: "usage_type_key_example",
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

apiInstance.deleteUsageTypeProjectsUsageTypesUsageTypeKeyDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **usageTypeKey** | [**string**] |  | defaults to undefined
 **xAccessToken** | [**string**] |  | (optional) defaults to undefined
 **xSecretToken** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined
 **ehelplyActiveParticipant** | [**string**] |  | (optional) defaults to undefined
 **ehelplyProject** | [**string**] |  | (optional) defaults to undefined
 **ehelplyData** | [**string**] |  | (optional) defaults to undefined


### Return type

**InlineResponse2004**

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

# **getAllProjectUsageProjectsProjectsProjectUuidUsageGet**
> Array<ProjectsProjectUsageDB> getAllProjectUsageProjectsProjectsProjectUuidUsageGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectsApi(configuration);

let body:.ProjectsApiGetAllProjectUsageProjectsProjectsProjectUuidUsageGetRequest = {
  // string
  projectUuid: "project_uuid_example",
  // number (optional)
  year: 1,
  // number (optional)
  month: 1,
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

apiInstance.getAllProjectUsageProjectsProjectsProjectUuidUsageGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectUuid** | [**string**] |  | defaults to undefined
 **year** | [**number**] |  | (optional) defaults to undefined
 **month** | [**number**] |  | (optional) defaults to undefined
 **xAccessToken** | [**string**] |  | (optional) defaults to undefined
 **xSecretToken** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined
 **ehelplyActiveParticipant** | [**string**] |  | (optional) defaults to undefined
 **ehelplyProject** | [**string**] |  | (optional) defaults to undefined
 **ehelplyData** | [**string**] |  | (optional) defaults to undefined


### Return type

**Array<ProjectsProjectUsageDB>**

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
**404** | Project does not exist |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getMemberProjectsProjectsMembersEntityUuidProjectsGet**
> Array<ProjectsProjectGet> getMemberProjectsProjectsMembersEntityUuidProjectsGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectsApi(configuration);

let body:.ProjectsApiGetMemberProjectsProjectsMembersEntityUuidProjectsGetRequest = {
  // string
  entityUuid: "entity_uuid_example",
  // string (optional)
  role: "role_example",
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

apiInstance.getMemberProjectsProjectsMembersEntityUuidProjectsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entityUuid** | [**string**] |  | defaults to undefined
 **role** | [**string**] |  | (optional) defaults to undefined
 **xAccessToken** | [**string**] |  | (optional) defaults to undefined
 **xSecretToken** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined
 **ehelplyActiveParticipant** | [**string**] |  | (optional) defaults to undefined
 **ehelplyProject** | [**string**] |  | (optional) defaults to undefined
 **ehelplyData** | [**string**] |  | (optional) defaults to undefined


### Return type

**Array<ProjectsProjectGet>**

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
**404** | Member does not exist |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getProjectKeysProjectsProjectsProjectUuidKeysGet**
> Array<ProjectsProjectMemberDB> getProjectKeysProjectsProjectsProjectUuidKeysGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectsApi(configuration);

let body:.ProjectsApiGetProjectKeysProjectsProjectsProjectUuidKeysGetRequest = {
  // string
  projectUuid: "project_uuid_example",
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

apiInstance.getProjectKeysProjectsProjectsProjectUuidKeysGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectUuid** | [**string**] |  | defaults to undefined
 **xAccessToken** | [**string**] |  | (optional) defaults to undefined
 **xSecretToken** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined
 **ehelplyActiveParticipant** | [**string**] |  | (optional) defaults to undefined
 **ehelplyProject** | [**string**] |  | (optional) defaults to undefined
 **ehelplyData** | [**string**] |  | (optional) defaults to undefined


### Return type

**Array<ProjectsProjectMemberDB>**

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
**404** | Project or Entity does not exist |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getProjectMembersProjectsProjectsProjectUuidMembersGet**
> Array<ProjectsProjectMemberDB> getProjectMembersProjectsProjectsProjectUuidMembersGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectsApi(configuration);

let body:.ProjectsApiGetProjectMembersProjectsProjectsProjectUuidMembersGetRequest = {
  // string
  projectUuid: "project_uuid_example",
  // string (optional)
  role: "role_example",
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

apiInstance.getProjectMembersProjectsProjectsProjectUuidMembersGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectUuid** | [**string**] |  | defaults to undefined
 **role** | [**string**] |  | (optional) defaults to undefined
 **xAccessToken** | [**string**] |  | (optional) defaults to undefined
 **xSecretToken** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined
 **ehelplyActiveParticipant** | [**string**] |  | (optional) defaults to undefined
 **ehelplyProject** | [**string**] |  | (optional) defaults to undefined
 **ehelplyData** | [**string**] |  | (optional) defaults to undefined


### Return type

**Array<ProjectsProjectMemberDB>**

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
**404** | Project does not exist |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getProjectProjectsProjectsProjectUuidGet**
> any getProjectProjectsProjectsProjectUuidGet()

Get a Project

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectsApi(configuration);

let body:.ProjectsApiGetProjectProjectsProjectsProjectUuidGetRequest = {
  // string
  projectUuid: "project_uuid_example",
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

apiInstance.getProjectProjectsProjectsProjectUuidGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectUuid** | [**string**] |  | defaults to undefined
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
**403** | Unauthorized - Denied by eHelply |  -  |
**404** | Project does not exist |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSpecificProjectUsageProjectsProjectsProjectUuidUsageUsageTypeKeyGet**
> ProjectsProjectUsageDB getSpecificProjectUsageProjectsProjectsProjectUuidUsageUsageTypeKeyGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectsApi(configuration);

let body:.ProjectsApiGetSpecificProjectUsageProjectsProjectsProjectUuidUsageUsageTypeKeyGetRequest = {
  // string
  usageTypeKey: "usage_type_key_example",
  // string
  projectUuid: "project_uuid_example",
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

apiInstance.getSpecificProjectUsageProjectsProjectsProjectUuidUsageUsageTypeKeyGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **usageTypeKey** | [**string**] |  | defaults to undefined
 **projectUuid** | [**string**] |  | defaults to undefined
 **xAccessToken** | [**string**] |  | (optional) defaults to undefined
 **xSecretToken** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined
 **ehelplyActiveParticipant** | [**string**] |  | (optional) defaults to undefined
 **ehelplyProject** | [**string**] |  | (optional) defaults to undefined
 **ehelplyData** | [**string**] |  | (optional) defaults to undefined


### Return type

**ProjectsProjectUsageDB**

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
**404** | Project, Usage does not exist |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getUsageTypeProjectsUsageTypesUsageTypeKeyGet**
> ProjectsUsageTypeGet getUsageTypeProjectsUsageTypesUsageTypeKeyGet()

Get a UsageType  No auth because we may want to use this on pricing/docs pages

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectsApi(configuration);

let body:.ProjectsApiGetUsageTypeProjectsUsageTypesUsageTypeKeyGetRequest = {
  // string
  usageTypeKey: "usage_type_key_example",
};

apiInstance.getUsageTypeProjectsUsageTypesUsageTypeKeyGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **usageTypeKey** | [**string**] |  | defaults to undefined


### Return type

**ProjectsUsageTypeGet**

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
**404** | UsageType does not exist |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **removeMemberFromProjectProjectsProjectsProjectUuidMembersEntityUuidDelete**
> InlineResponse2005 removeMemberFromProjectProjectsProjectsProjectUuidMembersEntityUuidDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectsApi(configuration);

let body:.ProjectsApiRemoveMemberFromProjectProjectsProjectsProjectUuidMembersEntityUuidDeleteRequest = {
  // string
  projectUuid: "project_uuid_example",
  // string
  entityUuid: "entity_uuid_example",
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

apiInstance.removeMemberFromProjectProjectsProjectsProjectUuidMembersEntityUuidDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectUuid** | [**string**] |  | defaults to undefined
 **entityUuid** | [**string**] |  | defaults to undefined
 **xAccessToken** | [**string**] |  | (optional) defaults to undefined
 **xSecretToken** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined
 **ehelplyActiveParticipant** | [**string**] |  | (optional) defaults to undefined
 **ehelplyProject** | [**string**] |  | (optional) defaults to undefined
 **ehelplyData** | [**string**] |  | (optional) defaults to undefined


### Return type

**InlineResponse2005**

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
**404** | Project does not exist |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **removeProjectKeyProjectsProjectsProjectUuidKeysDelete**
> any removeProjectKeyProjectsProjectsProjectUuidKeysDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectsApi(configuration);

let body:.ProjectsApiRemoveProjectKeyProjectsProjectsProjectUuidKeysDeleteRequest = {
  // string
  projectUuid: "project_uuid_example",
  // string (optional)
  accessToken: "access_token_example",
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

apiInstance.removeProjectKeyProjectsProjectsProjectUuidKeysDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectUuid** | [**string**] |  | defaults to undefined
 **accessToken** | [**string**] |  | (optional) defaults to undefined
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
**403** | Unauthorized - Denied by eHelply |  -  |
**404** | Project, Entity, or Key does not exist |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **sandboxProjectsSandboxGet**
> any sandboxProjectsSandboxGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectsApi(configuration);

let body:.ProjectsApiSandboxProjectsSandboxGetRequest = {
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

apiInstance.sandboxProjectsSandboxGet(body).then((data:any) => {
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

# **searchProjectsProjectsProjectsGet**
> Page searchProjectsProjectsProjectsGet()

Search projects

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectsApi(configuration);

let body:.ProjectsApiSearchProjectsProjectsProjectsGetRequest = {
  // number (optional)
  page: 1,
  // number (optional)
  pageSize: 25,
  // string (optional)
  search: "search_example",
  // string (optional)
  searchOn: "search_on_example",
  // string (optional)
  sortOn: "sort_on_example",
  // boolean (optional)
  sortDesc: false,
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

apiInstance.searchProjectsProjectsProjectsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] |  | (optional) defaults to 1
 **pageSize** | [**number**] |  | (optional) defaults to 25
 **search** | [**string**] |  | (optional) defaults to undefined
 **searchOn** | [**string**] |  | (optional) defaults to undefined
 **sortOn** | [**string**] |  | (optional) defaults to undefined
 **sortDesc** | [**boolean**] |  | (optional) defaults to undefined
 **xAccessToken** | [**string**] |  | (optional) defaults to undefined
 **xSecretToken** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined
 **ehelplyActiveParticipant** | [**string**] |  | (optional) defaults to undefined
 **ehelplyProject** | [**string**] |  | (optional) defaults to undefined
 **ehelplyData** | [**string**] |  | (optional) defaults to undefined


### Return type

**Page**

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

# **searchUsageTypeProjectsUsageTypesGet**
> Page searchUsageTypeProjectsUsageTypesGet()

Get a UsageType  No auth because we may want to use this on pricing/docs pages

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectsApi(configuration);

let body:.ProjectsApiSearchUsageTypeProjectsUsageTypesGetRequest = {
  // number (optional)
  page: 1,
  // number (optional)
  pageSize: 25,
  // string (optional)
  search: "search_example",
  // string (optional)
  searchOn: "search_on_example",
  // string (optional)
  sortOn: "sort_on_example",
  // boolean (optional)
  sortDesc: false,
};

apiInstance.searchUsageTypeProjectsUsageTypesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] |  | (optional) defaults to 1
 **pageSize** | [**number**] |  | (optional) defaults to 25
 **search** | [**string**] |  | (optional) defaults to undefined
 **searchOn** | [**string**] |  | (optional) defaults to undefined
 **sortOn** | [**string**] |  | (optional) defaults to undefined
 **sortDesc** | [**boolean**] |  | (optional) defaults to undefined


### Return type

**Page**

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

# **updateProjectProjectsProjectsProjectUuidPut**
> any updateProjectProjectsProjectsProjectUuidPut(projectsProjectUpdate)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectsApi(configuration);

let body:.ProjectsApiUpdateProjectProjectsProjectsProjectUuidPutRequest = {
  // string
  projectUuid: "project_uuid_example",
  // ProjectsProjectUpdate
  projectsProjectUpdate: {
    maxSpend: 1,
    status: "status_example",
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

apiInstance.updateProjectProjectsProjectsProjectUuidPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsProjectUpdate** | **ProjectsProjectUpdate**|  |
 **projectUuid** | [**string**] |  | defaults to undefined
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

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**403** | Unauthorized - Denied by eHelply |  -  |
**404** | Project does not exist |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateUsageTypeProjectsUsageTypesUsageTypeKeyPut**
> ProjectsUsageTypeDB updateUsageTypeProjectsUsageTypesUsageTypeKeyPut(projectsUsageTypeUpdate)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectsApi(configuration);

let body:.ProjectsApiUpdateUsageTypeProjectsUsageTypesUsageTypeKeyPutRequest = {
  // string
  usageTypeKey: "usage_type_key_example",
  // ProjectsUsageTypeUpdate
  projectsUsageTypeUpdate: {
    name: "name_example",
    summary: "summary_example",
    category: "category_example",
    service: "service_example",
    unitPrices: [
      {
        minQuantity: 1,
        maxQuantity: 1,
        unitPrice: 1,
      },
    ],
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

apiInstance.updateUsageTypeProjectsUsageTypesUsageTypeKeyPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsUsageTypeUpdate** | **ProjectsUsageTypeUpdate**|  |
 **usageTypeKey** | [**string**] |  | defaults to undefined
 **xAccessToken** | [**string**] |  | (optional) defaults to undefined
 **xSecretToken** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined
 **ehelplyActiveParticipant** | [**string**] |  | (optional) defaults to undefined
 **ehelplyProject** | [**string**] |  | (optional) defaults to undefined
 **ehelplyData** | [**string**] |  | (optional) defaults to undefined


### Return type

**ProjectsUsageTypeDB**

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
**404** | UsageType does not exist |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


