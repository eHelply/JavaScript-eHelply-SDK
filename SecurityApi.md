# .SecurityApi

All URIs are relative to *https://api.prod.ehelply.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createEncryptionKeySecurityEncryptionCategoriesCategoryKeysPost**](SecurityApi.md#createEncryptionKeySecurityEncryptionCategoriesCategoryKeysPost) | **POST** /sam/security/encryption/categories/{category}/keys | Create Encryption Key
[**createKeySecurityKeysPost**](SecurityApi.md#createKeySecurityKeysPost) | **POST** /sam/security/keys | Create Key
[**deleteKeySecurityKeysKeyUuidDelete**](SecurityApi.md#deleteKeySecurityKeysKeyUuidDelete) | **DELETE** /sam/security/keys/{key_uuid} | Delete Key
[**generateTokenSecurityTokensPost**](SecurityApi.md#generateTokenSecurityTokensPost) | **POST** /sam/security/tokens | Generate Token
[**getEncryptionKeySecurityEncryptionCategoriesCategoryKeysGet**](SecurityApi.md#getEncryptionKeySecurityEncryptionCategoriesCategoryKeysGet) | **GET** /sam/security/encryption/categories/{category}/keys | Get Encryption Key
[**getKeySecurityKeysKeyUuidGet**](SecurityApi.md#getKeySecurityKeysKeyUuidGet) | **GET** /sam/security/keys/{key_uuid} | Get Key
[**searchKeysSecurityKeysGet**](SecurityApi.md#searchKeysSecurityKeysGet) | **GET** /sam/security/keys | Search Keys
[**verifyKeySecurityKeysVerifyPost**](SecurityApi.md#verifyKeySecurityKeysVerifyPost) | **POST** /sam/security/keys/verify | Verify Key


# **createEncryptionKeySecurityEncryptionCategoriesCategoryKeysPost**
> any createEncryptionKeySecurityEncryptionCategoriesCategoryKeysPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SecurityApi(configuration);

let body:.SecurityApiCreateEncryptionKeySecurityEncryptionCategoriesCategoryKeysPostRequest = {
  // string
  category: "category_example",
  // string (optional)
  ehelplySecuritySecretKey: "ehelply-security-secret-key_example",
};

apiInstance.createEncryptionKeySecurityEncryptionCategoriesCategoryKeysPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category** | [**string**] |  | defaults to undefined
 **ehelplySecuritySecretKey** | [**string**] |  | (optional) defaults to undefined


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

# **createKeySecurityKeysPost**
> InlineResponse2007 createKeySecurityKeysPost(bodyCreateKeySecurityKeysPost)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SecurityApi(configuration);

let body:.SecurityApiCreateKeySecurityKeysPostRequest = {
  // BodyCreateKeySecurityKeysPost
  bodyCreateKeySecurityKeysPost: {
    key: {
      name: "name_example",
      summary: "summary_example",
    },
  },
  // number (optional)
  accessLength: 64,
  // number (optional)
  secretLength: 64,
};

apiInstance.createKeySecurityKeysPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bodyCreateKeySecurityKeysPost** | **BodyCreateKeySecurityKeysPost**|  |
 **accessLength** | [**number**] |  | (optional) defaults to 64
 **secretLength** | [**number**] |  | (optional) defaults to 64


### Return type

**InlineResponse2007**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**400** | Access token and secret token lengths must be greater than 48 characters and less than 1024 characters to guarantee adequate security.  |  -  |
**403** | Unauthorized - Denied by eHelply |  -  |
**404** | Not found |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteKeySecurityKeysKeyUuidDelete**
> InlineResponse2008 deleteKeySecurityKeysKeyUuidDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SecurityApi(configuration);

let body:.SecurityApiDeleteKeySecurityKeysKeyUuidDeleteRequest = {
  // string
  keyUuid: "key_uuid_example",
};

apiInstance.deleteKeySecurityKeysKeyUuidDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **keyUuid** | [**string**] |  | defaults to undefined


### Return type

**InlineResponse2008**

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

# **generateTokenSecurityTokensPost**
> InlineResponse2006 generateTokenSecurityTokensPost(bodyGenerateTokenSecurityTokensPost)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SecurityApi(configuration);

let body:.SecurityApiGenerateTokenSecurityTokensPostRequest = {
  // BodyGenerateTokenSecurityTokensPost
  bodyGenerateTokenSecurityTokensPost: {
    token: {
      length: 64,
    },
  },
};

apiInstance.generateTokenSecurityTokensPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bodyGenerateTokenSecurityTokensPost** | **BodyGenerateTokenSecurityTokensPost**|  |


### Return type

**InlineResponse2006**

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

# **getEncryptionKeySecurityEncryptionCategoriesCategoryKeysGet**
> Array<SecurityEncryptionKeyGet> getEncryptionKeySecurityEncryptionCategoriesCategoryKeysGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SecurityApi(configuration);

let body:.SecurityApiGetEncryptionKeySecurityEncryptionCategoriesCategoryKeysGetRequest = {
  // string
  category: "category_example",
  // string (optional)
  ehelplySecuritySecretKey: "ehelply-security-secret-key_example",
};

apiInstance.getEncryptionKeySecurityEncryptionCategoriesCategoryKeysGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category** | [**string**] |  | defaults to undefined
 **ehelplySecuritySecretKey** | [**string**] |  | (optional) defaults to undefined


### Return type

**Array<SecurityEncryptionKeyGet>**

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

# **getKeySecurityKeysKeyUuidGet**
> SecurityKeyGet getKeySecurityKeysKeyUuidGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SecurityApi(configuration);

let body:.SecurityApiGetKeySecurityKeysKeyUuidGetRequest = {
  // string
  keyUuid: "key_uuid_example",
};

apiInstance.getKeySecurityKeysKeyUuidGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **keyUuid** | [**string**] |  | defaults to undefined


### Return type

**SecurityKeyGet**

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
**404** | Key does not exist |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchKeysSecurityKeysGet**
> Array<SecurityKeyGet> searchKeysSecurityKeysGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SecurityApi(configuration);

let body:any = {};

apiInstance.searchKeysSecurityKeysGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<SecurityKeyGet>**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **verifyKeySecurityKeysVerifyPost**
> SecurityKeyGet verifyKeySecurityKeysVerifyPost(bodyVerifyKeySecurityKeysVerifyPost)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SecurityApi(configuration);

let body:.SecurityApiVerifyKeySecurityKeysVerifyPostRequest = {
  // BodyVerifyKeySecurityKeysVerifyPost
  bodyVerifyKeySecurityKeysVerifyPost: {
    key: {
      access: "access_example",
      secret: "secret_example",
    },
  },
};

apiInstance.verifyKeySecurityKeysVerifyPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bodyVerifyKeySecurityKeysVerifyPost** | **BodyVerifyKeySecurityKeysVerifyPost**|  |


### Return type

**SecurityKeyGet**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**400** | Access token and secret token lengths must be greater than 48 characters and less than 1024 characters to guarantee adequate security.  |  -  |
**403** | Key |  -  |
**404** | Not found |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


