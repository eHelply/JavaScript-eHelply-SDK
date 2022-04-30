# .CategoryApi

All URIs are relative to *https://api.prod.ehelply.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCategoryPlacesCategoriesPost**](CategoryApi.md#createCategoryPlacesCategoriesPost) | **POST** /places/categories | Create Category
[**deleteCategoryPlacesCategoriesCategoryUuidDelete**](CategoryApi.md#deleteCategoryPlacesCategoriesCategoryUuidDelete) | **DELETE** /places/categories/{category_uuid} | Delete Category
[**getCategoryPlacesCategoriesCategoryUuidGet**](CategoryApi.md#getCategoryPlacesCategoriesCategoryUuidGet) | **GET** /places/categories/{category_uuid} | Get Category
[**searchCategoriesPlacesCategoriesGet**](CategoryApi.md#searchCategoriesPlacesCategoriesGet) | **GET** /places/categories | Search Categories
[**updateCategoryPlacesCategoriesCategoryUuidPut**](CategoryApi.md#updateCategoryPlacesCategoriesCategoryUuidPut) | **PUT** /places/categories/{category_uuid} | Update Category


# **createCategoryPlacesCategoriesPost**
> CategoryDb createCategoryPlacesCategoriesPost(categoryBase)

Creates a category

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CategoryApi(configuration);

let body:.CategoryApiCreateCategoryPlacesCategoriesPostRequest = {
  // CategoryBase
  categoryBase: {
    name: "Example Company",
    metaUuid: "meta_uuid_1234",
    meta: {},
    projectUuid: "project_uuid_1234",
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

apiInstance.createCategoryPlacesCategoriesPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryBase** | **CategoryBase**|  |
 **xAccessToken** | [**string**] |  | (optional) defaults to undefined
 **xSecretToken** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined
 **ehelplyActiveParticipant** | [**string**] |  | (optional) defaults to undefined
 **ehelplyProject** | [**string**] |  | (optional) defaults to undefined
 **ehelplyData** | [**string**] |  | (optional) defaults to undefined


### Return type

**CategoryDb**

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

# **deleteCategoryPlacesCategoriesCategoryUuidDelete**
> any deleteCategoryPlacesCategoriesCategoryUuidDelete()

Deletes the category with the given ID and returns True if successful

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CategoryApi(configuration);

let body:.CategoryApiDeleteCategoryPlacesCategoriesCategoryUuidDeleteRequest = {
  // string
  categoryUuid: "category_uuid_example",
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

apiInstance.deleteCategoryPlacesCategoriesCategoryUuidDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryUuid** | [**string**] |  | defaults to undefined
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

# **getCategoryPlacesCategoriesCategoryUuidGet**
> CategoryBase getCategoryPlacesCategoriesCategoryUuidGet()

Gets the category information given the category ID

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CategoryApi(configuration);

let body:.CategoryApiGetCategoryPlacesCategoriesCategoryUuidGetRequest = {
  // string
  categoryUuid: "category_uuid_example",
  // boolean (optional)
  withMeta: false,
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

apiInstance.getCategoryPlacesCategoriesCategoryUuidGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryUuid** | [**string**] |  | defaults to undefined
 **withMeta** | [**boolean**] |  | (optional) defaults to undefined
 **xAccessToken** | [**string**] |  | (optional) defaults to undefined
 **xSecretToken** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined
 **ehelplyActiveParticipant** | [**string**] |  | (optional) defaults to undefined
 **ehelplyProject** | [**string**] |  | (optional) defaults to undefined
 **ehelplyData** | [**string**] |  | (optional) defaults to undefined


### Return type

**CategoryBase**

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

# **searchCategoriesPlacesCategoriesGet**
> Page searchCategoriesPlacesCategoriesGet()

TODO Item return format: ``` {     uuid                                **type:** string     project_uuid                        **type:** string or None      name                                **type:** string or None      meta                                **type:** dict or None      created_at                          **type:** string or None      updated_at                          **type:** string or None      deleted_at                          **type:** string or None  } ```

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CategoryApi(configuration);

let body:.CategoryApiSearchCategoriesPlacesCategoriesGetRequest = {
  // string (optional)
  projectUuid: "project_uuid_example",
  // string (optional)
  name: "name_example",
  // boolean (optional)
  withMeta: false,
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

apiInstance.searchCategoriesPlacesCategoriesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectUuid** | [**string**] |  | (optional) defaults to undefined
 **name** | [**string**] |  | (optional) defaults to undefined
 **withMeta** | [**boolean**] |  | (optional) defaults to undefined
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

# **updateCategoryPlacesCategoriesCategoryUuidPut**
> CategoryBase updateCategoryPlacesCategoriesCategoryUuidPut(categoryBase)

Update category with given info, only updating the fields supplied. Category Uuid must be sent however.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CategoryApi(configuration);

let body:.CategoryApiUpdateCategoryPlacesCategoriesCategoryUuidPutRequest = {
  // string
  categoryUuid: "category_uuid_example",
  // CategoryBase
  categoryBase: {
    name: "Example Company",
    metaUuid: "meta_uuid_1234",
    meta: {},
    projectUuid: "project_uuid_1234",
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

apiInstance.updateCategoryPlacesCategoriesCategoryUuidPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryBase** | **CategoryBase**|  |
 **categoryUuid** | [**string**] |  | defaults to undefined
 **xAccessToken** | [**string**] |  | (optional) defaults to undefined
 **xSecretToken** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined
 **ehelplyActiveParticipant** | [**string**] |  | (optional) defaults to undefined
 **ehelplyProject** | [**string**] |  | (optional) defaults to undefined
 **ehelplyData** | [**string**] |  | (optional) defaults to undefined


### Return type

**CategoryBase**

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


