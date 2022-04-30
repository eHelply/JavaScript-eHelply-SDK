# .CompaniesApi

All URIs are relative to *https://api.prod.ehelply.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCompanyPlacesCompaniesPost**](CompaniesApi.md#createCompanyPlacesCompaniesPost) | **POST** /places/companies | Create Company
[**deletePlacePlacesCompaniesCompanyUuidDelete**](CompaniesApi.md#deletePlacePlacesCompaniesCompanyUuidDelete) | **DELETE** /places/companies/{company_uuid} | Delete Place
[**getCompanyPlacesCompaniesCompanyUuidGet**](CompaniesApi.md#getCompanyPlacesCompaniesCompanyUuidGet) | **GET** /places/companies/{company_uuid} | Get Company
[**searchCompaniesPlacesCompaniesGet**](CompaniesApi.md#searchCompaniesPlacesCompaniesGet) | **GET** /places/companies | Search Companies
[**updateCompanyPlacesCompaniesCompanyUuidPut**](CompaniesApi.md#updateCompanyPlacesCompaniesCompanyUuidPut) | **PUT** /places/companies/{company_uuid} | Update Company


# **createCompanyPlacesCompaniesPost**
> CompanyResponse createCompanyPlacesCompaniesPost(companyBase)

Creates a company

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CompaniesApi(configuration);

let body:.CompaniesApiCreateCompanyPlacesCompaniesPostRequest = {
  // CompanyBase
  companyBase: {
    name: "Example Company",
    summary: "Summary of the company",
    _public: true,
    meta: {},
    contact: {
      phones: {},
      email: "test@example.com",
      website: "www.ehelply.com",
      socials: {},
    },
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

apiInstance.createCompanyPlacesCompaniesPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyBase** | **CompanyBase**|  |
 **xAccessToken** | [**string**] |  | (optional) defaults to undefined
 **xSecretToken** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined
 **ehelplyActiveParticipant** | [**string**] |  | (optional) defaults to undefined
 **ehelplyProject** | [**string**] |  | (optional) defaults to undefined
 **ehelplyData** | [**string**] |  | (optional) defaults to undefined


### Return type

**CompanyResponse**

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

# **deletePlacePlacesCompaniesCompanyUuidDelete**
> any deletePlacePlacesCompaniesCompanyUuidDelete()

Deletes the company with the given ID and returns True if successful

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CompaniesApi(configuration);

let body:.CompaniesApiDeletePlacePlacesCompaniesCompanyUuidDeleteRequest = {
  // string
  companyUuid: "company_uuid_example",
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

apiInstance.deletePlacePlacesCompaniesCompanyUuidDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyUuid** | [**string**] |  | defaults to undefined
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

# **getCompanyPlacesCompaniesCompanyUuidGet**
> CompanyResponse getCompanyPlacesCompaniesCompanyUuidGet()

Gets the company information given the Place ID

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CompaniesApi(configuration);

let body:.CompaniesApiGetCompanyPlacesCompaniesCompanyUuidGetRequest = {
  // string
  companyUuid: "company_uuid_example",
  // boolean (optional)
  withMeta: false,
  // boolean (optional)
  withCatalog: false,
  // boolean (optional)
  withReviews: false,
  // boolean (optional)
  withSchedule: false,
  // boolean (optional)
  withBlog: false,
  // boolean (optional)
  withTags: false,
  // boolean (optional)
  withCategories: false,
  // boolean (optional)
  withPlaces: false,
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

apiInstance.getCompanyPlacesCompaniesCompanyUuidGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyUuid** | [**string**] |  | defaults to undefined
 **withMeta** | [**boolean**] |  | (optional) defaults to undefined
 **withCatalog** | [**boolean**] |  | (optional) defaults to undefined
 **withReviews** | [**boolean**] |  | (optional) defaults to undefined
 **withSchedule** | [**boolean**] |  | (optional) defaults to undefined
 **withBlog** | [**boolean**] |  | (optional) defaults to undefined
 **withTags** | [**boolean**] |  | (optional) defaults to undefined
 **withCategories** | [**boolean**] |  | (optional) defaults to undefined
 **withPlaces** | [**boolean**] |  | (optional) defaults to undefined
 **xAccessToken** | [**string**] |  | (optional) defaults to undefined
 **xSecretToken** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined
 **ehelplyActiveParticipant** | [**string**] |  | (optional) defaults to undefined
 **ehelplyProject** | [**string**] |  | (optional) defaults to undefined
 **ehelplyData** | [**string**] |  | (optional) defaults to undefined


### Return type

**CompanyResponse**

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

# **searchCompaniesPlacesCompaniesGet**
> Page searchCompaniesPlacesCompaniesGet()

Search all companies and returns paginated results with Companies being stored in items field. Can search by `project_uuid, name, email` string fields or the `is_public and is_deleted` boolean fields. To search with these fields use query params with string values. For sorting fill out \"sort_desc\" field with either true/false and the \"sort_on\" query parameter with column you want to sort on (ex: name). Max pagination items per page is 50. Item return format: ``` {     uuid                                **type:** string     project_uuid                        **type:** string or None      meta_uuid                           **type:** string or None      catalog_data                        **type:** dict or None      review_group_data                   **type:** dict or None      schedule_data                       **type:** dict or None      blog_data                           **type:** dict or None      tags                                **type:** [TagBase] or None      categories                          **type:** [CategoryBase] or None      places                              **type:** PlaceBase or None      created_at                          **type:** string or None      updated_at                          **type:** string or None      deleted_at                          **type:** string or None  } ```

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CompaniesApi(configuration);

let body:.CompaniesApiSearchCompaniesPlacesCompaniesGetRequest = {
  // string (optional)
  projectUuid: "project_uuid_example",
  // string (optional)
  name: "name_example",
  // string (optional)
  email: "email_example",
  // boolean (optional)
  isPublic: true,
  // boolean (optional)
  isDeleted: false,
  // boolean (optional)
  withPlaces: false,
  // boolean (optional)
  withMeta: false,
  // boolean (optional)
  withCatalog: false,
  // boolean (optional)
  withReviews: false,
  // boolean (optional)
  withSchedule: false,
  // boolean (optional)
  withBlog: false,
  // boolean (optional)
  withTags: false,
  // boolean (optional)
  withCategories: false,
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

apiInstance.searchCompaniesPlacesCompaniesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectUuid** | [**string**] |  | (optional) defaults to undefined
 **name** | [**string**] |  | (optional) defaults to undefined
 **email** | [**string**] |  | (optional) defaults to undefined
 **isPublic** | [**boolean**] |  | (optional) defaults to undefined
 **isDeleted** | [**boolean**] |  | (optional) defaults to undefined
 **withPlaces** | [**boolean**] |  | (optional) defaults to undefined
 **withMeta** | [**boolean**] |  | (optional) defaults to undefined
 **withCatalog** | [**boolean**] |  | (optional) defaults to undefined
 **withReviews** | [**boolean**] |  | (optional) defaults to undefined
 **withSchedule** | [**boolean**] |  | (optional) defaults to undefined
 **withBlog** | [**boolean**] |  | (optional) defaults to undefined
 **withTags** | [**boolean**] |  | (optional) defaults to undefined
 **withCategories** | [**boolean**] |  | (optional) defaults to undefined
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

# **updateCompanyPlacesCompaniesCompanyUuidPut**
> CompanyResponse updateCompanyPlacesCompaniesCompanyUuidPut(companyBase)

Update company with given info, only updating the fields supplied. Company Uuid must be sent however.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CompaniesApi(configuration);

let body:.CompaniesApiUpdateCompanyPlacesCompaniesCompanyUuidPutRequest = {
  // string
  companyUuid: "company_uuid_example",
  // CompanyBase
  companyBase: {
    name: "Example Company",
    summary: "Summary of the company",
    _public: true,
    meta: {},
    contact: {
      phones: {},
      email: "test@example.com",
      website: "www.ehelply.com",
      socials: {},
    },
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

apiInstance.updateCompanyPlacesCompaniesCompanyUuidPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyBase** | **CompanyBase**|  |
 **companyUuid** | [**string**] |  | defaults to undefined
 **xAccessToken** | [**string**] |  | (optional) defaults to undefined
 **xSecretToken** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined
 **ehelplyActiveParticipant** | [**string**] |  | (optional) defaults to undefined
 **ehelplyProject** | [**string**] |  | (optional) defaults to undefined
 **ehelplyData** | [**string**] |  | (optional) defaults to undefined


### Return type

**CompanyResponse**

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


