# .StaffApi

All URIs are relative to *https://api.prod.ehelply.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createStaffPlacesStaffPost**](StaffApi.md#createStaffPlacesStaffPost) | **POST** /places/staff | Create Staff
[**deleteStaffPlacesStaffStaffUuidDelete**](StaffApi.md#deleteStaffPlacesStaffStaffUuidDelete) | **DELETE** /places/staff/{staff_uuid} | Delete Staff
[**getStaffPlacesStaffStaffUuidGet**](StaffApi.md#getStaffPlacesStaffStaffUuidGet) | **GET** /places/staff/{staff_uuid} | Get Staff
[**searchStaffPlacesStaffGet**](StaffApi.md#searchStaffPlacesStaffGet) | **GET** /places/staff | Search Staff
[**updateStaffPlacesStaffStaffUuidPut**](StaffApi.md#updateStaffPlacesStaffStaffUuidPut) | **PUT** /places/staff/{staff_uuid} | Update Staff


# **createStaffPlacesStaffPost**
> StaffDb createStaffPlacesStaffPost(staffCreate)

Creates a staff member

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .StaffApi(configuration);

let body:.StaffApiCreateStaffPlacesStaffPostRequest = {
  // StaffCreate
  staffCreate: {
    entityUuid: "entity_uuid_1234",
    projectUuid: "project_uuid_1234",
    scheduleUuid: "schedule_uuid_1234",
    catalogUuid: "catalog_uuid_1234",
    reviewGroupUuid: "review_uuid_1234",
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

apiInstance.createStaffPlacesStaffPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **staffCreate** | **StaffCreate**|  |
 **xAccessToken** | [**string**] |  | (optional) defaults to undefined
 **xSecretToken** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined
 **ehelplyActiveParticipant** | [**string**] |  | (optional) defaults to undefined
 **ehelplyProject** | [**string**] |  | (optional) defaults to undefined
 **ehelplyData** | [**string**] |  | (optional) defaults to undefined


### Return type

**StaffDb**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**404** | Route not found - Denied by eHelply |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteStaffPlacesStaffStaffUuidDelete**
> any deleteStaffPlacesStaffStaffUuidDelete()

Deletes the staff member with the given ID and returns True if successful

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .StaffApi(configuration);

let body:.StaffApiDeleteStaffPlacesStaffStaffUuidDeleteRequest = {
  // string
  staffUuid: "staff_uuid_example",
  // boolean (optional)
  softDelete: true,
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

apiInstance.deleteStaffPlacesStaffStaffUuidDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **staffUuid** | [**string**] |  | defaults to undefined
 **softDelete** | [**boolean**] |  | (optional) defaults to undefined
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
**404** | Route not found - Denied by eHelply |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getStaffPlacesStaffStaffUuidGet**
> StaffResponse getStaffPlacesStaffStaffUuidGet()

Gets the staff member information given the staff ID

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .StaffApi(configuration);

let body:.StaffApiGetStaffPlacesStaffStaffUuidGetRequest = {
  // string
  staffUuid: "staff_uuid_example",
  // boolean (optional)
  withPlaces: false,
  // boolean (optional)
  withCompanies: false,
  // boolean (optional)
  withCatalog: false,
  // boolean (optional)
  withSchedule: false,
  // boolean (optional)
  withRoles: false,
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

apiInstance.getStaffPlacesStaffStaffUuidGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **staffUuid** | [**string**] |  | defaults to undefined
 **withPlaces** | [**boolean**] |  | (optional) defaults to undefined
 **withCompanies** | [**boolean**] |  | (optional) defaults to undefined
 **withCatalog** | [**boolean**] |  | (optional) defaults to undefined
 **withSchedule** | [**boolean**] |  | (optional) defaults to undefined
 **withRoles** | [**boolean**] |  | (optional) defaults to undefined
 **xAccessToken** | [**string**] |  | (optional) defaults to undefined
 **xSecretToken** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined
 **ehelplyActiveParticipant** | [**string**] |  | (optional) defaults to undefined
 **ehelplyProject** | [**string**] |  | (optional) defaults to undefined
 **ehelplyData** | [**string**] |  | (optional) defaults to undefined


### Return type

**StaffResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**404** | Route not found - Denied by eHelply |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchStaffPlacesStaffGet**
> Page searchStaffPlacesStaffGet()

TODO Item return format: ``` {     uuid                                **type:** string     project_uuid                        **type:** string or None      entity                              **type:** string or None      place                               **type:** dict or None      company                             **type:** dict or None      schedule                            **type:** dict or None      catalog                             **type:** dict or None      reviews                             **type:** dict or None      created_at                          **type:** string or None      updated_at                          **type:** string or None      deleted_at                          **type:** string or None  } ```

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .StaffApi(configuration);

let body:.StaffApiSearchStaffPlacesStaffGetRequest = {
  // string (optional)
  projectUuid: "project_uuid_example",
  // string (optional)
  firstName: "first_name_example",
  // string (optional)
  lastName: "last_name_example",
  // boolean (optional)
  isDeleted: false,
  // boolean (optional)
  withCompanies: false,
  // boolean (optional)
  withPlaces: false,
  // boolean (optional)
  withSchedule: false,
  // boolean (optional)
  withCatalog: false,
  // boolean (optional)
  withReviews: false,
  // boolean (optional)
  withRoles: false,
  // number (optional)
  page: 1,
  // number (optional)
  pageSize: 25,
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

apiInstance.searchStaffPlacesStaffGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectUuid** | [**string**] |  | (optional) defaults to undefined
 **firstName** | [**string**] |  | (optional) defaults to undefined
 **lastName** | [**string**] |  | (optional) defaults to undefined
 **isDeleted** | [**boolean**] |  | (optional) defaults to undefined
 **withCompanies** | [**boolean**] |  | (optional) defaults to undefined
 **withPlaces** | [**boolean**] |  | (optional) defaults to undefined
 **withSchedule** | [**boolean**] |  | (optional) defaults to undefined
 **withCatalog** | [**boolean**] |  | (optional) defaults to undefined
 **withReviews** | [**boolean**] |  | (optional) defaults to undefined
 **withRoles** | [**boolean**] |  | (optional) defaults to undefined
 **page** | [**number**] |  | (optional) defaults to 1
 **pageSize** | [**number**] |  | (optional) defaults to 25
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
**404** | Route not found - Denied by eHelply |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateStaffPlacesStaffStaffUuidPut**
> StaffResponse updateStaffPlacesStaffStaffUuidPut(staffCreate)

Update staff with given info, only updating the fields supplied. Staff Uuid must be sent however.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .StaffApi(configuration);

let body:.StaffApiUpdateStaffPlacesStaffStaffUuidPutRequest = {
  // string
  staffUuid: "staff_uuid_example",
  // StaffCreate
  staffCreate: {
    entityUuid: "entity_uuid_1234",
    projectUuid: "project_uuid_1234",
    scheduleUuid: "schedule_uuid_1234",
    catalogUuid: "catalog_uuid_1234",
    reviewGroupUuid: "review_uuid_1234",
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

apiInstance.updateStaffPlacesStaffStaffUuidPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **staffCreate** | **StaffCreate**|  |
 **staffUuid** | [**string**] |  | defaults to undefined
 **xAccessToken** | [**string**] |  | (optional) defaults to undefined
 **xSecretToken** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined
 **ehelplyActiveParticipant** | [**string**] |  | (optional) defaults to undefined
 **ehelplyProject** | [**string**] |  | (optional) defaults to undefined
 **ehelplyData** | [**string**] |  | (optional) defaults to undefined


### Return type

**StaffResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**404** | Route not found - Denied by eHelply |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


