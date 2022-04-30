# .MonitorApi

All URIs are relative to *https://api.prod.ehelply.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ackAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAcknowledgePost**](MonitorApi.md#ackAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAcknowledgePost) | **POST** /sam/monitor/services/{service}/stages/{stage}/alarms/{alarm_uuid}/acknowledge | Ack Alarm
[**assignAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAssignPost**](MonitorApi.md#assignAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAssignPost) | **POST** /sam/monitor/services/{service}/stages/{stage}/alarms/{alarm_uuid}/assign | Assign Alarm
[**attachAlarmNoteMonitorServicesServiceStagesStageAlarmsAlarmUuidNotePost**](MonitorApi.md#attachAlarmNoteMonitorServicesServiceStagesStageAlarmsAlarmUuidNotePost) | **POST** /sam/monitor/services/{service}/stages/{stage}/alarms/{alarm_uuid}/note | Attach Alarm Note
[**attachAlarmTicketMonitorServicesServiceStagesStageAlarmsAlarmUuidTicketPost**](MonitorApi.md#attachAlarmTicketMonitorServicesServiceStagesStageAlarmsAlarmUuidTicketPost) | **POST** /sam/monitor/services/{service}/stages/{stage}/alarms/{alarm_uuid}/ticket | Attach Alarm Ticket
[**clearAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidClearPost**](MonitorApi.md#clearAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidClearPost) | **POST** /sam/monitor/services/{service}/stages/{stage}/alarms/{alarm_uuid}/clear | Clear Alarm
[**getServiceAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidGet**](MonitorApi.md#getServiceAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidGet) | **GET** /sam/monitor/services/{service}/stages/{stage}/alarms/{alarm_uuid} | Get Service Alarm
[**getServiceAlarmsMonitorServicesServiceStagesStageAlarmsGet**](MonitorApi.md#getServiceAlarmsMonitorServicesServiceStagesStageAlarmsGet) | **GET** /sam/monitor/services/{service}/stages/{stage}/alarms | Get Service Alarms
[**getServiceHeartbeatsMonitorServicesServiceStagesStageHeartbeatsGet**](MonitorApi.md#getServiceHeartbeatsMonitorServicesServiceStagesStageHeartbeatsGet) | **GET** /sam/monitor/services/{service}/stages/{stage}/heartbeats | Get Service Heartbeats
[**getServiceKpisMonitorServicesServiceKpisGet**](MonitorApi.md#getServiceKpisMonitorServicesServiceKpisGet) | **GET** /sam/monitor/services/{service}/kpis | Get Service Kpis
[**getServiceMonitorServicesServiceGet**](MonitorApi.md#getServiceMonitorServicesServiceGet) | **GET** /sam/monitor/services/{service} | Get Service
[**getServiceSpec**](MonitorApi.md#getServiceSpec) | **GET** /sam/monitor/services/{service}/specs/{spec} | Getservicespec
[**getServiceSpecs**](MonitorApi.md#getServiceSpecs) | **GET** /sam/monitor/services/{service}/specs | Getservicespecs
[**getServiceVitalsMonitorServicesServiceStagesStageVitalsGet**](MonitorApi.md#getServiceVitalsMonitorServicesServiceStagesStageVitalsGet) | **GET** /sam/monitor/services/{service}/stages/{stage}/vitals | Get Service Vitals
[**getServicesMonitorServicesGet**](MonitorApi.md#getServicesMonitorServicesGet) | **GET** /sam/monitor/services | Get Services
[**getServicesWithSpecs**](MonitorApi.md#getServicesWithSpecs) | **GET** /sam/monitor/specs/services | Getserviceswithspecs
[**hideServiceMonitorServicesServiceStagesStageHidePost**](MonitorApi.md#hideServiceMonitorServicesServiceStagesStageHidePost) | **POST** /sam/monitor/services/{service}/stages/{stage}/hide | Hide Service
[**ignoreAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidIgnorePost**](MonitorApi.md#ignoreAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidIgnorePost) | **POST** /sam/monitor/services/{service}/stages/{stage}/alarms/{alarm_uuid}/ignore | Ignore Alarm
[**registerServiceMonitorServicesPost**](MonitorApi.md#registerServiceMonitorServicesPost) | **POST** /sam/monitor/services | Register Service
[**searchAlarmsMonitorServicesServiceAlarmsGet**](MonitorApi.md#searchAlarmsMonitorServicesServiceAlarmsGet) | **GET** /sam/monitor/services/{service}/alarms | Search Alarms
[**showServiceMonitorServicesServiceStagesStageShowPost**](MonitorApi.md#showServiceMonitorServicesServiceStagesStageShowPost) | **POST** /sam/monitor/services/{service}/stages/{stage}/show | Show Service
[**terminateAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidTerminatePost**](MonitorApi.md#terminateAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidTerminatePost) | **POST** /sam/monitor/services/{service}/stages/{stage}/alarms/{alarm_uuid}/terminate | Terminate Alarm
[**triggerAlarmMonitorServicesServiceStagesStageAlarmsPost**](MonitorApi.md#triggerAlarmMonitorServicesServiceStagesStageAlarmsPost) | **POST** /sam/monitor/services/{service}/stages/{stage}/alarms | Trigger Alarm


# **ackAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAcknowledgePost**
> any ackAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAcknowledgePost(bodyAckAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAcknowledgePost)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MonitorApi(configuration);

let body:.MonitorApiAckAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAcknowledgePostRequest = {
  // string
  service: "service_example",
  // string
  stage: "stage_example",
  // string
  alarmUuid: "alarm_uuid_example",
  // BodyAckAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAcknowledgePost
  bodyAckAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAcknowledgePost: {
    acknowledge: {
      acknowledgerUuid: "acknowledgerUuid_example",
    },
  },
};

apiInstance.ackAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAcknowledgePost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bodyAckAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAcknowledgePost** | **BodyAckAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAcknowledgePost**|  |
 **service** | [**string**] |  | defaults to undefined
 **stage** | [**string**] |  | defaults to undefined
 **alarmUuid** | [**string**] |  | defaults to undefined


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

# **assignAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAssignPost**
> any assignAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAssignPost(bodyAssignAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAssignPost)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MonitorApi(configuration);

let body:.MonitorApiAssignAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAssignPostRequest = {
  // string
  service: "service_example",
  // string
  stage: "stage_example",
  // string
  alarmUuid: "alarm_uuid_example",
  // BodyAssignAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAssignPost
  bodyAssignAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAssignPost: {
    assignee: {
      assigneeUuid: "assigneeUuid_example",
    },
  },
};

apiInstance.assignAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAssignPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bodyAssignAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAssignPost** | **BodyAssignAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidAssignPost**|  |
 **service** | [**string**] |  | defaults to undefined
 **stage** | [**string**] |  | defaults to undefined
 **alarmUuid** | [**string**] |  | defaults to undefined


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

# **attachAlarmNoteMonitorServicesServiceStagesStageAlarmsAlarmUuidNotePost**
> any attachAlarmNoteMonitorServicesServiceStagesStageAlarmsAlarmUuidNotePost(bodyAttachAlarmNoteMonitorServicesServiceStagesStageAlarmsAlarmUuidNotePost)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MonitorApi(configuration);

let body:.MonitorApiAttachAlarmNoteMonitorServicesServiceStagesStageAlarmsAlarmUuidNotePostRequest = {
  // string
  service: "service_example",
  // string
  stage: "stage_example",
  // string
  alarmUuid: "alarm_uuid_example",
  // BodyAttachAlarmNoteMonitorServicesServiceStagesStageAlarmsAlarmUuidNotePost
  bodyAttachAlarmNoteMonitorServicesServiceStagesStageAlarmsAlarmUuidNotePost: {
    note: {
      authorUuid: "authorUuid_example",
      message: "message_example",
    },
  },
};

apiInstance.attachAlarmNoteMonitorServicesServiceStagesStageAlarmsAlarmUuidNotePost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bodyAttachAlarmNoteMonitorServicesServiceStagesStageAlarmsAlarmUuidNotePost** | **BodyAttachAlarmNoteMonitorServicesServiceStagesStageAlarmsAlarmUuidNotePost**|  |
 **service** | [**string**] |  | defaults to undefined
 **stage** | [**string**] |  | defaults to undefined
 **alarmUuid** | [**string**] |  | defaults to undefined


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

# **attachAlarmTicketMonitorServicesServiceStagesStageAlarmsAlarmUuidTicketPost**
> any attachAlarmTicketMonitorServicesServiceStagesStageAlarmsAlarmUuidTicketPost(bodyAttachAlarmTicketMonitorServicesServiceStagesStageAlarmsAlarmUuidTicketPost)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MonitorApi(configuration);

let body:.MonitorApiAttachAlarmTicketMonitorServicesServiceStagesStageAlarmsAlarmUuidTicketPostRequest = {
  // string
  service: "service_example",
  // string
  stage: "stage_example",
  // string
  alarmUuid: "alarm_uuid_example",
  // BodyAttachAlarmTicketMonitorServicesServiceStagesStageAlarmsAlarmUuidTicketPost
  bodyAttachAlarmTicketMonitorServicesServiceStagesStageAlarmsAlarmUuidTicketPost: {
    ticket: {
      ticketUuid: "ticketUuid_example",
    },
  },
};

apiInstance.attachAlarmTicketMonitorServicesServiceStagesStageAlarmsAlarmUuidTicketPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bodyAttachAlarmTicketMonitorServicesServiceStagesStageAlarmsAlarmUuidTicketPost** | **BodyAttachAlarmTicketMonitorServicesServiceStagesStageAlarmsAlarmUuidTicketPost**|  |
 **service** | [**string**] |  | defaults to undefined
 **stage** | [**string**] |  | defaults to undefined
 **alarmUuid** | [**string**] |  | defaults to undefined


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

# **clearAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidClearPost**
> any clearAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidClearPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MonitorApi(configuration);

let body:.MonitorApiClearAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidClearPostRequest = {
  // string
  service: "service_example",
  // string
  stage: "stage_example",
  // string
  alarmUuid: "alarm_uuid_example",
};

apiInstance.clearAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidClearPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service** | [**string**] |  | defaults to undefined
 **stage** | [**string**] |  | defaults to undefined
 **alarmUuid** | [**string**] |  | defaults to undefined


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

# **getServiceAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidGet**
> any getServiceAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MonitorApi(configuration);

let body:.MonitorApiGetServiceAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidGetRequest = {
  // string
  service: "service_example",
  // string
  stage: "stage_example",
  // string
  alarmUuid: "alarm_uuid_example",
};

apiInstance.getServiceAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service** | [**string**] |  | defaults to undefined
 **stage** | [**string**] |  | defaults to undefined
 **alarmUuid** | [**string**] |  | defaults to undefined


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

# **getServiceAlarmsMonitorServicesServiceStagesStageAlarmsGet**
> any getServiceAlarmsMonitorServicesServiceStagesStageAlarmsGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MonitorApi(configuration);

let body:.MonitorApiGetServiceAlarmsMonitorServicesServiceStagesStageAlarmsGetRequest = {
  // string
  service: "service_example",
  // string
  stage: "stage_example",
  // number (optional)
  history: 5,
  // boolean (optional)
  includeTerminated: false,
  // boolean (optional)
  includeCleared: false,
};

apiInstance.getServiceAlarmsMonitorServicesServiceStagesStageAlarmsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service** | [**string**] |  | defaults to undefined
 **stage** | [**string**] |  | defaults to undefined
 **history** | [**number**] |  | (optional) defaults to 5
 **includeTerminated** | [**boolean**] |  | (optional) defaults to undefined
 **includeCleared** | [**boolean**] |  | (optional) defaults to undefined


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

# **getServiceHeartbeatsMonitorServicesServiceStagesStageHeartbeatsGet**
> any getServiceHeartbeatsMonitorServicesServiceStagesStageHeartbeatsGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MonitorApi(configuration);

let body:.MonitorApiGetServiceHeartbeatsMonitorServicesServiceStagesStageHeartbeatsGetRequest = {
  // string
  service: "service_example",
  // string
  stage: "stage_example",
  // number (optional)
  history: 5,
};

apiInstance.getServiceHeartbeatsMonitorServicesServiceStagesStageHeartbeatsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service** | [**string**] |  | defaults to undefined
 **stage** | [**string**] |  | defaults to undefined
 **history** | [**number**] |  | (optional) defaults to 5


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

# **getServiceKpisMonitorServicesServiceKpisGet**
> any getServiceKpisMonitorServicesServiceKpisGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MonitorApi(configuration);

let body:.MonitorApiGetServiceKpisMonitorServicesServiceKpisGetRequest = {
  // string
  service: "service_example",
  // number (optional)
  history: 5,
};

apiInstance.getServiceKpisMonitorServicesServiceKpisGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service** | [**string**] |  | defaults to undefined
 **history** | [**number**] |  | (optional) defaults to 5


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

# **getServiceMonitorServicesServiceGet**
> any getServiceMonitorServicesServiceGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MonitorApi(configuration);

let body:.MonitorApiGetServiceMonitorServicesServiceGetRequest = {
  // string
  service: "service_example",
  // boolean (optional)
  heartbeats: false,
  // number (optional)
  heartbeatLimit: 5,
  // boolean (optional)
  alarms: false,
  // number (optional)
  alarmLimit: 5,
  // string (optional)
  stage: "stage_example",
};

apiInstance.getServiceMonitorServicesServiceGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service** | [**string**] |  | defaults to undefined
 **heartbeats** | [**boolean**] |  | (optional) defaults to undefined
 **heartbeatLimit** | [**number**] |  | (optional) defaults to 5
 **alarms** | [**boolean**] |  | (optional) defaults to undefined
 **alarmLimit** | [**number**] |  | (optional) defaults to 5
 **stage** | [**string**] |  | (optional) defaults to undefined


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

# **getServiceSpec**
> InlineResponse2002 getServiceSpec()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MonitorApi(configuration);

let body:.MonitorApiGetServiceSpecRequest = {
  // string
  service: "service_example",
  // string
  spec: "spec_example",
  // boolean (optional)
  asJson: false,
};

apiInstance.getServiceSpec(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service** | [**string**] |  | defaults to undefined
 **spec** | [**string**] |  | defaults to undefined
 **asJson** | [**boolean**] |  | (optional) defaults to undefined


### Return type

**InlineResponse2002**

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

# **getServiceSpecs**
> InlineResponse2001 getServiceSpecs()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MonitorApi(configuration);

let body:.MonitorApiGetServiceSpecsRequest = {
  // string
  service: "service_example",
};

apiInstance.getServiceSpecs(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service** | [**string**] |  | defaults to undefined


### Return type

**InlineResponse2001**

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

# **getServiceVitalsMonitorServicesServiceStagesStageVitalsGet**
> any getServiceVitalsMonitorServicesServiceStagesStageVitalsGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MonitorApi(configuration);

let body:.MonitorApiGetServiceVitalsMonitorServicesServiceStagesStageVitalsGetRequest = {
  // string
  service: "service_example",
  // string
  stage: "stage_example",
  // number (optional)
  history: 5,
};

apiInstance.getServiceVitalsMonitorServicesServiceStagesStageVitalsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service** | [**string**] |  | defaults to undefined
 **stage** | [**string**] |  | defaults to undefined
 **history** | [**number**] |  | (optional) defaults to 5


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

# **getServicesMonitorServicesGet**
> any getServicesMonitorServicesGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MonitorApi(configuration);

let body:.MonitorApiGetServicesMonitorServicesGetRequest = {
  // boolean (optional)
  heartbeats: false,
  // number (optional)
  heartbeatLimit: 5,
  // boolean (optional)
  alarms: false,
  // number (optional)
  alarmLimit: 5,
  // boolean (optional)
  includeHidden: false,
  // string (optional)
  stage: "stage_example",
  // string (optional)
  key: "key_example",
};

apiInstance.getServicesMonitorServicesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **heartbeats** | [**boolean**] |  | (optional) defaults to undefined
 **heartbeatLimit** | [**number**] |  | (optional) defaults to 5
 **alarms** | [**boolean**] |  | (optional) defaults to undefined
 **alarmLimit** | [**number**] |  | (optional) defaults to 5
 **includeHidden** | [**boolean**] |  | (optional) defaults to undefined
 **stage** | [**string**] |  | (optional) defaults to undefined
 **key** | [**string**] |  | (optional) defaults to undefined


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

# **getServicesWithSpecs**
> InlineResponse200 getServicesWithSpecs()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MonitorApi(configuration);

let body:any = {};

apiInstance.getServicesWithSpecs(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**InlineResponse200**

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

# **hideServiceMonitorServicesServiceStagesStageHidePost**
> any hideServiceMonitorServicesServiceStagesStageHidePost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MonitorApi(configuration);

let body:.MonitorApiHideServiceMonitorServicesServiceStagesStageHidePostRequest = {
  // string
  service: "service_example",
  // string
  stage: "stage_example",
};

apiInstance.hideServiceMonitorServicesServiceStagesStageHidePost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service** | [**string**] |  | defaults to undefined
 **stage** | [**string**] |  | defaults to undefined


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

# **ignoreAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidIgnorePost**
> any ignoreAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidIgnorePost(bodyIgnoreAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidIgnorePost)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MonitorApi(configuration);

let body:.MonitorApiIgnoreAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidIgnorePostRequest = {
  // string
  service: "service_example",
  // string
  stage: "stage_example",
  // string
  alarmUuid: "alarm_uuid_example",
  // BodyIgnoreAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidIgnorePost
  bodyIgnoreAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidIgnorePost: {
    ignore: {
      ignorerUuid: "ignorerUuid_example",
    },
  },
};

apiInstance.ignoreAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidIgnorePost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bodyIgnoreAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidIgnorePost** | **BodyIgnoreAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidIgnorePost**|  |
 **service** | [**string**] |  | defaults to undefined
 **stage** | [**string**] |  | defaults to undefined
 **alarmUuid** | [**string**] |  | defaults to undefined


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

# **registerServiceMonitorServicesPost**
> any registerServiceMonitorServicesPost(bodyRegisterServiceMonitorServicesPost)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MonitorApi(configuration);

let body:.MonitorApiRegisterServiceMonitorServicesPostRequest = {
  // BodyRegisterServiceMonitorServicesPost
  bodyRegisterServiceMonitorServicesPost: {
    service: {
      name: "name_example",
      key: "key_example",
      version: "version_example",
      summary: "summary_example",
      authors: [
        "authors_example",
      ],
      authorEmails: [
        "authorEmails_example",
      ],
    },
  },
};

apiInstance.registerServiceMonitorServicesPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bodyRegisterServiceMonitorServicesPost** | **BodyRegisterServiceMonitorServicesPost**|  |


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

# **searchAlarmsMonitorServicesServiceAlarmsGet**
> any searchAlarmsMonitorServicesServiceAlarmsGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MonitorApi(configuration);

let body:.MonitorApiSearchAlarmsMonitorServicesServiceAlarmsGetRequest = {
  // string
  service: "service_example",
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

apiInstance.searchAlarmsMonitorServicesServiceAlarmsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service** | [**string**] |  | defaults to undefined
 **page** | [**number**] |  | (optional) defaults to 1
 **pageSize** | [**number**] |  | (optional) defaults to 25
 **search** | [**string**] |  | (optional) defaults to undefined
 **searchOn** | [**string**] |  | (optional) defaults to undefined
 **sortOn** | [**string**] |  | (optional) defaults to undefined
 **sortDesc** | [**boolean**] |  | (optional) defaults to undefined


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

# **showServiceMonitorServicesServiceStagesStageShowPost**
> any showServiceMonitorServicesServiceStagesStageShowPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MonitorApi(configuration);

let body:.MonitorApiShowServiceMonitorServicesServiceStagesStageShowPostRequest = {
  // string
  service: "service_example",
  // string
  stage: "stage_example",
};

apiInstance.showServiceMonitorServicesServiceStagesStageShowPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service** | [**string**] |  | defaults to undefined
 **stage** | [**string**] |  | defaults to undefined


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

# **terminateAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidTerminatePost**
> any terminateAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidTerminatePost(bodyTerminateAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidTerminatePost)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MonitorApi(configuration);

let body:.MonitorApiTerminateAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidTerminatePostRequest = {
  // string
  service: "service_example",
  // string
  stage: "stage_example",
  // string
  alarmUuid: "alarm_uuid_example",
  // BodyTerminateAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidTerminatePost
  bodyTerminateAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidTerminatePost: {
    terminate: {
      terminaterUuid: "terminaterUuid_example",
    },
  },
};

apiInstance.terminateAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidTerminatePost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bodyTerminateAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidTerminatePost** | **BodyTerminateAlarmMonitorServicesServiceStagesStageAlarmsAlarmUuidTerminatePost**|  |
 **service** | [**string**] |  | defaults to undefined
 **stage** | [**string**] |  | defaults to undefined
 **alarmUuid** | [**string**] |  | defaults to undefined


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

# **triggerAlarmMonitorServicesServiceStagesStageAlarmsPost**
> any triggerAlarmMonitorServicesServiceStagesStageAlarmsPost(bodyTriggerAlarmMonitorServicesServiceStagesStageAlarmsPost)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MonitorApi(configuration);

let body:.MonitorApiTriggerAlarmMonitorServicesServiceStagesStageAlarmsPostRequest = {
  // string
  service: "service_example",
  // string
  stage: "stage_example",
  // BodyTriggerAlarmMonitorServicesServiceStagesStageAlarmsPost
  bodyTriggerAlarmMonitorServicesServiceStagesStageAlarmsPost: {
    alarm: {
      process: "process_example",
      severity: "severity_example",
      name: "name_example",
      summary: "summary_example",
      description: "description_example",
    },
  },
};

apiInstance.triggerAlarmMonitorServicesServiceStagesStageAlarmsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bodyTriggerAlarmMonitorServicesServiceStagesStageAlarmsPost** | **BodyTriggerAlarmMonitorServicesServiceStagesStageAlarmsPost**|  |
 **service** | [**string**] |  | defaults to undefined
 **stage** | [**string**] |  | defaults to undefined


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


