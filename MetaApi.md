# .MetaApi

All URIs are relative to *https://api.prod.ehelply.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createField**](MetaApi.md#createField) | **POST** /meta/field | Create Field
[**createMeta**](MetaApi.md#createMeta) | **POST** /meta/meta/service/{service}/type/{type_str}/entity/{entity_uuid} | Create Meta
[**deleteField**](MetaApi.md#deleteField) | **DELETE** /meta/field/{field_uuid} | Delete Field
[**deleteMeta**](MetaApi.md#deleteMeta) | **DELETE** /meta/meta/service/{service}/type/{type_str}/entity/{entity_uuid} | Delete Meta
[**deleteMetaFromUuid**](MetaApi.md#deleteMetaFromUuid) | **DELETE** /meta/meta/{meta_uuid} | Delete Meta From Uuid
[**getField**](MetaApi.md#getField) | **GET** /meta/field/{field_uuid} | Get Field
[**getMeta**](MetaApi.md#getMeta) | **GET** /meta/meta/service/{service}/type/{type_str}/entity/{entity_uuid} | Get Meta
[**getMetaFromUuid**](MetaApi.md#getMetaFromUuid) | **GET** /meta/meta/{meta_uuid} | Get Meta From Uuid
[**makeSlug**](MetaApi.md#makeSlug) | **POST** /meta/meta/slug | Make Slug
[**touchMeta**](MetaApi.md#touchMeta) | **POST** /meta/meta/service/{service}/type/{type_str}/entity/{entity_uuid}/touch | Touch Meta
[**updateField**](MetaApi.md#updateField) | **PUT** /meta/field/{field_uuid} | Update Field
[**updateMeta**](MetaApi.md#updateMeta) | **PUT** /meta/meta/service/{service}/type/{type_str}/entity/{entity_uuid} | Update Meta
[**updateMetaFromUuid**](MetaApi.md#updateMetaFromUuid) | **PUT** /meta/meta/{meta_uuid} | Update Meta From Uuid


# **createField**
> FieldDynamo createField(field)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MetaApi(configuration);

let body:.MetaApiCreateFieldRequest = {
  // Field
  field: {
    uuid: "uuid_example",
    type: 1,
    placeholder: "placeholder_example",
    validations: {
      value: [
        "value_example",
      ],
    },
    hint: "hint_example",
    icon: "icon_example",
    label: "label_example",
    options: {
      required: true,
      label: "label_example",
      insetLabel: "insetLabel_example",
      placeholder: "placeholder_example",
      hint: "hint_example",
      icon: "icon_example",
      maxLength: 3.14,
      counter: true,
      caption: "caption_example",
      color: "color_example",
      size: "size_example",
      type: "type_example",
      iconPosition: "iconPosition_example",
      selections: [
        {
          name: "name_example",
          type: "type_example",
          selections: [
            {
              name: "name_example",
              value: 3.14,
              icon: "icon_example",
            },
          ],
        },
      ],
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

apiInstance.createField(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **field** | **Field**|  |
 **xAccessToken** | [**string**] |  | (optional) defaults to undefined
 **xSecretToken** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined
 **ehelplyActiveParticipant** | [**string**] |  | (optional) defaults to undefined
 **ehelplyProject** | [**string**] |  | (optional) defaults to undefined
 **ehelplyData** | [**string**] |  | (optional) defaults to undefined


### Return type

**FieldDynamo**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**404** | Not found |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createMeta**
> MetaDynamo createMeta(metaCreate)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MetaApi(configuration);

let body:.MetaApiCreateMetaRequest = {
  // string
  service: "service_example",
  // string
  typeStr: "type_str_example",
  // string
  entityUuid: "entity_uuid_example",
  // MetaCreate
  metaCreate: {
    basic: {
      name: "name_example",
      slug: true,
    },
    detailed: {
      summary: "summary_example",
      description: "description_example",
    },
    custom: {
      name: "name_example",
      description: "description_example",
      list: [
        {
          name: "name_example",
          description: "description_example",
        },
      ],
    },
    fields: [
      {
        uuid: "uuid_example",
        type: 1,
        placeholder: "placeholder_example",
        validations: {
          value: [
            "value_example",
          ],
        },
        hint: "hint_example",
        icon: "icon_example",
        label: "label_example",
        options: {
          required: true,
          label: "label_example",
          insetLabel: "insetLabel_example",
          placeholder: "placeholder_example",
          hint: "hint_example",
          icon: "icon_example",
          maxLength: 3.14,
          counter: true,
          caption: "caption_example",
          color: "color_example",
          size: "size_example",
          type: "type_example",
          iconPosition: "iconPosition_example",
          selections: [
            {
              name: "name_example",
              type: "type_example",
              selections: [
                {
                  name: "name_example",
                  value: 3.14,
                  icon: "icon_example",
                },
              ],
            },
          ],
        },
      },
    ],
    children: [
      {
        childName: "childName_example",
        childDescription: "childDescription_example",
        childUuid: "childUuid_example",
      },
    ],
    parentUuid: "parentUuid_example",
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

apiInstance.createMeta(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **metaCreate** | **MetaCreate**|  |
 **service** | [**string**] |  | defaults to undefined
 **typeStr** | [**string**] |  | defaults to undefined
 **entityUuid** | [**string**] |  | defaults to undefined
 **xAccessToken** | [**string**] |  | (optional) defaults to undefined
 **xSecretToken** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined
 **ehelplyActiveParticipant** | [**string**] |  | (optional) defaults to undefined
 **ehelplyProject** | [**string**] |  | (optional) defaults to undefined
 **ehelplyData** | [**string**] |  | (optional) defaults to undefined


### Return type

**MetaDynamo**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**404** | Not found |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteField**
> any deleteField()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MetaApi(configuration);

let body:.MetaApiDeleteFieldRequest = {
  // string
  fieldUuid: "field_uuid_example",
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

apiInstance.deleteField(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fieldUuid** | [**string**] |  | defaults to undefined
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
**404** | Not found |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteMeta**
> any deleteMeta()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MetaApi(configuration);

let body:.MetaApiDeleteMetaRequest = {
  // string
  service: "service_example",
  // string
  typeStr: "type_str_example",
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

apiInstance.deleteMeta(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service** | [**string**] |  | defaults to undefined
 **typeStr** | [**string**] |  | defaults to undefined
 **entityUuid** | [**string**] |  | defaults to undefined
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

# **deleteMetaFromUuid**
> any deleteMetaFromUuid()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MetaApi(configuration);

let body:.MetaApiDeleteMetaFromUuidRequest = {
  // string
  metaUuid: "meta_uuid_example",
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

apiInstance.deleteMetaFromUuid(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **metaUuid** | [**string**] |  | defaults to undefined
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

# **getField**
> FieldDynamo getField()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MetaApi(configuration);

let body:.MetaApiGetFieldRequest = {
  // string
  fieldUuid: "field_uuid_example",
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

apiInstance.getField(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fieldUuid** | [**string**] |  | defaults to undefined
 **xAccessToken** | [**string**] |  | (optional) defaults to undefined
 **xSecretToken** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined
 **ehelplyActiveParticipant** | [**string**] |  | (optional) defaults to undefined
 **ehelplyProject** | [**string**] |  | (optional) defaults to undefined
 **ehelplyData** | [**string**] |  | (optional) defaults to undefined


### Return type

**FieldDynamo**

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

# **getMeta**
> MetaDynamo getMeta()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MetaApi(configuration);

let body:.MetaApiGetMetaRequest = {
  // string
  service: "service_example",
  // string
  typeStr: "type_str_example",
  // string
  entityUuid: "entity_uuid_example",
  // boolean (optional)
  detailed: false,
  // boolean (optional)
  custom: false,
  // boolean (optional)
  dates: false,
  // number (optional)
  history: 0,
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

apiInstance.getMeta(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service** | [**string**] |  | defaults to undefined
 **typeStr** | [**string**] |  | defaults to undefined
 **entityUuid** | [**string**] |  | defaults to undefined
 **detailed** | [**boolean**] |  | (optional) defaults to undefined
 **custom** | [**boolean**] |  | (optional) defaults to undefined
 **dates** | [**boolean**] |  | (optional) defaults to undefined
 **history** | [**number**] |  | (optional) defaults to 0
 **xAccessToken** | [**string**] |  | (optional) defaults to undefined
 **xSecretToken** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined
 **ehelplyActiveParticipant** | [**string**] |  | (optional) defaults to undefined
 **ehelplyProject** | [**string**] |  | (optional) defaults to undefined
 **ehelplyData** | [**string**] |  | (optional) defaults to undefined


### Return type

**MetaDynamo**

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

# **getMetaFromUuid**
> MetaDynamo getMetaFromUuid()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MetaApi(configuration);

let body:.MetaApiGetMetaFromUuidRequest = {
  // string
  metaUuid: "meta_uuid_example",
  // boolean (optional)
  detailed: false,
  // boolean (optional)
  custom: false,
  // boolean (optional)
  dates: false,
  // number (optional)
  history: 0,
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

apiInstance.getMetaFromUuid(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **metaUuid** | [**string**] |  | defaults to undefined
 **detailed** | [**boolean**] |  | (optional) defaults to undefined
 **custom** | [**boolean**] |  | (optional) defaults to undefined
 **dates** | [**boolean**] |  | (optional) defaults to undefined
 **history** | [**number**] |  | (optional) defaults to 0
 **xAccessToken** | [**string**] |  | (optional) defaults to undefined
 **xSecretToken** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined
 **ehelplyActiveParticipant** | [**string**] |  | (optional) defaults to undefined
 **ehelplyProject** | [**string**] |  | (optional) defaults to undefined
 **ehelplyData** | [**string**] |  | (optional) defaults to undefined


### Return type

**MetaDynamo**

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

# **makeSlug**
> any makeSlug(metaSlugger)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MetaApi(configuration);

let body:.MetaApiMakeSlugRequest = {
  // MetaSlugger
  metaSlugger: {
    name: "name_example",
  },
};

apiInstance.makeSlug(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **metaSlugger** | **MetaSlugger**|  |


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
**404** | Not found |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **touchMeta**
> MetaDynamo touchMeta()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MetaApi(configuration);

let body:.MetaApiTouchMetaRequest = {
  // string
  service: "service_example",
  // string
  typeStr: "type_str_example",
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

apiInstance.touchMeta(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service** | [**string**] |  | defaults to undefined
 **typeStr** | [**string**] |  | defaults to undefined
 **entityUuid** | [**string**] |  | defaults to undefined
 **xAccessToken** | [**string**] |  | (optional) defaults to undefined
 **xSecretToken** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined
 **ehelplyActiveParticipant** | [**string**] |  | (optional) defaults to undefined
 **ehelplyProject** | [**string**] |  | (optional) defaults to undefined
 **ehelplyData** | [**string**] |  | (optional) defaults to undefined


### Return type

**MetaDynamo**

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

# **updateField**
> any updateField(field)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MetaApi(configuration);

let body:.MetaApiUpdateFieldRequest = {
  // string
  fieldUuid: "field_uuid_example",
  // Field
  field: {
    uuid: "uuid_example",
    type: 1,
    placeholder: "placeholder_example",
    validations: {
      value: [
        "value_example",
      ],
    },
    hint: "hint_example",
    icon: "icon_example",
    label: "label_example",
    options: {
      required: true,
      label: "label_example",
      insetLabel: "insetLabel_example",
      placeholder: "placeholder_example",
      hint: "hint_example",
      icon: "icon_example",
      maxLength: 3.14,
      counter: true,
      caption: "caption_example",
      color: "color_example",
      size: "size_example",
      type: "type_example",
      iconPosition: "iconPosition_example",
      selections: [
        {
          name: "name_example",
          type: "type_example",
          selections: [
            {
              name: "name_example",
              value: 3.14,
              icon: "icon_example",
            },
          ],
        },
      ],
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

apiInstance.updateField(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **field** | **Field**|  |
 **fieldUuid** | [**string**] |  | defaults to undefined
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
**404** | Not found |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateMeta**
> MetaDynamo updateMeta(metaCreate)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MetaApi(configuration);

let body:.MetaApiUpdateMetaRequest = {
  // string
  service: "service_example",
  // string
  typeStr: "type_str_example",
  // string
  entityUuid: "entity_uuid_example",
  // MetaCreate
  metaCreate: {
    basic: {
      name: "name_example",
      slug: true,
    },
    detailed: {
      summary: "summary_example",
      description: "description_example",
    },
    custom: {
      name: "name_example",
      description: "description_example",
      list: [
        {
          name: "name_example",
          description: "description_example",
        },
      ],
    },
    fields: [
      {
        uuid: "uuid_example",
        type: 1,
        placeholder: "placeholder_example",
        validations: {
          value: [
            "value_example",
          ],
        },
        hint: "hint_example",
        icon: "icon_example",
        label: "label_example",
        options: {
          required: true,
          label: "label_example",
          insetLabel: "insetLabel_example",
          placeholder: "placeholder_example",
          hint: "hint_example",
          icon: "icon_example",
          maxLength: 3.14,
          counter: true,
          caption: "caption_example",
          color: "color_example",
          size: "size_example",
          type: "type_example",
          iconPosition: "iconPosition_example",
          selections: [
            {
              name: "name_example",
              type: "type_example",
              selections: [
                {
                  name: "name_example",
                  value: 3.14,
                  icon: "icon_example",
                },
              ],
            },
          ],
        },
      },
    ],
    children: [
      {
        childName: "childName_example",
        childDescription: "childDescription_example",
        childUuid: "childUuid_example",
      },
    ],
    parentUuid: "parentUuid_example",
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

apiInstance.updateMeta(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **metaCreate** | **MetaCreate**|  |
 **service** | [**string**] |  | defaults to undefined
 **typeStr** | [**string**] |  | defaults to undefined
 **entityUuid** | [**string**] |  | defaults to undefined
 **xAccessToken** | [**string**] |  | (optional) defaults to undefined
 **xSecretToken** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined
 **ehelplyActiveParticipant** | [**string**] |  | (optional) defaults to undefined
 **ehelplyProject** | [**string**] |  | (optional) defaults to undefined
 **ehelplyData** | [**string**] |  | (optional) defaults to undefined


### Return type

**MetaDynamo**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**404** | Not found |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateMetaFromUuid**
> MetaDynamo updateMetaFromUuid(metaCreate)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MetaApi(configuration);

let body:.MetaApiUpdateMetaFromUuidRequest = {
  // string
  metaUuid: "meta_uuid_example",
  // MetaCreate
  metaCreate: {
    basic: {
      name: "name_example",
      slug: true,
    },
    detailed: {
      summary: "summary_example",
      description: "description_example",
    },
    custom: {
      name: "name_example",
      description: "description_example",
      list: [
        {
          name: "name_example",
          description: "description_example",
        },
      ],
    },
    fields: [
      {
        uuid: "uuid_example",
        type: 1,
        placeholder: "placeholder_example",
        validations: {
          value: [
            "value_example",
          ],
        },
        hint: "hint_example",
        icon: "icon_example",
        label: "label_example",
        options: {
          required: true,
          label: "label_example",
          insetLabel: "insetLabel_example",
          placeholder: "placeholder_example",
          hint: "hint_example",
          icon: "icon_example",
          maxLength: 3.14,
          counter: true,
          caption: "caption_example",
          color: "color_example",
          size: "size_example",
          type: "type_example",
          iconPosition: "iconPosition_example",
          selections: [
            {
              name: "name_example",
              type: "type_example",
              selections: [
                {
                  name: "name_example",
                  value: 3.14,
                  icon: "icon_example",
                },
              ],
            },
          ],
        },
      },
    ],
    children: [
      {
        childName: "childName_example",
        childDescription: "childDescription_example",
        childUuid: "childUuid_example",
      },
    ],
    parentUuid: "parentUuid_example",
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

apiInstance.updateMetaFromUuid(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **metaCreate** | **MetaCreate**|  |
 **metaUuid** | [**string**] |  | defaults to undefined
 **xAccessToken** | [**string**] |  | (optional) defaults to undefined
 **xSecretToken** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined
 **ehelplyActiveParticipant** | [**string**] |  | (optional) defaults to undefined
 **ehelplyProject** | [**string**] |  | (optional) defaults to undefined
 **ehelplyData** | [**string**] |  | (optional) defaults to undefined


### Return type

**MetaDynamo**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**404** | Not found |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


