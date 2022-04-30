# .LoggingApi

All URIs are relative to *https://api.prod.ehelply.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLogsLoggingLogsGet**](LoggingApi.md#getLogsLoggingLogsGet) | **GET** /sam/logging/logs | Get Logs
[**getServiceLogsLoggingLogsServicesServiceGet**](LoggingApi.md#getServiceLogsLoggingLogsServicesServiceGet) | **GET** /sam/logging/logs/services/{service} | Get Service Logs
[**getSubjectLogsLoggingLogsServicesServiceSubjectsSubjectGet**](LoggingApi.md#getSubjectLogsLoggingLogsServicesServiceSubjectsSubjectGet) | **GET** /sam/logging/logs/services/{service}/subjects/{subject} | Get Subject Logs


# **getLogsLoggingLogsGet**
> any getLogsLoggingLogsGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LoggingApi(configuration);

let body:.LoggingApiGetLogsLoggingLogsGetRequest = {
  // string (optional)
  service: "service_example",
  // string (optional)
  dateStart: "date_start_example",
  // string (optional)
  dateEnd: "date_end_example",
  // boolean (optional)
  desc: true,
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

apiInstance.getLogsLoggingLogsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service** | [**string**] |  | (optional) defaults to undefined
 **dateStart** | [**string**] |  | (optional) defaults to undefined
 **dateEnd** | [**string**] |  | (optional) defaults to undefined
 **desc** | [**boolean**] |  | (optional) defaults to undefined
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

# **getServiceLogsLoggingLogsServicesServiceGet**
> any getServiceLogsLoggingLogsServicesServiceGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LoggingApi(configuration);

let body:.LoggingApiGetServiceLogsLoggingLogsServicesServiceGetRequest = {
  // string
  service: "service_example",
  // string (optional)
  dateStart: "date_start_example",
  // string (optional)
  dateEnd: "date_end_example",
  // boolean (optional)
  desc: true,
  // number (optional)
  limit: 50,
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

apiInstance.getServiceLogsLoggingLogsServicesServiceGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service** | [**string**] |  | defaults to undefined
 **dateStart** | [**string**] |  | (optional) defaults to undefined
 **dateEnd** | [**string**] |  | (optional) defaults to undefined
 **desc** | [**boolean**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to 50
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

# **getSubjectLogsLoggingLogsServicesServiceSubjectsSubjectGet**
> any getSubjectLogsLoggingLogsServicesServiceSubjectsSubjectGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LoggingApi(configuration);

let body:.LoggingApiGetSubjectLogsLoggingLogsServicesServiceSubjectsSubjectGetRequest = {
  // string
  service: "service_example",
  // string
  subject: "subject_example",
  // string (optional)
  dateStart: "date_start_example",
  // string (optional)
  dateEnd: "date_end_example",
  // boolean (optional)
  desc: true,
  // number (optional)
  limit: 50,
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

apiInstance.getSubjectLogsLoggingLogsServicesServiceSubjectsSubjectGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service** | [**string**] |  | defaults to undefined
 **subject** | [**string**] |  | defaults to undefined
 **dateStart** | [**string**] |  | (optional) defaults to undefined
 **dateEnd** | [**string**] |  | (optional) defaults to undefined
 **desc** | [**boolean**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to 50
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


