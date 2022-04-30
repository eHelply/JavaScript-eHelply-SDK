# .BillingApi

All URIs are relative to *https://api.prod.ehelply.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**attachPaymentToProjectBillingAttachPaymentToProjectPost**](BillingApi.md#attachPaymentToProjectBillingAttachPaymentToProjectPost) | **POST** /sam/billing/attach_payment_to_project | Attach Payment To Project
[**attachPaymentToProjectBillingAttachPaymentToProjectPost_0**](BillingApi.md#attachPaymentToProjectBillingAttachPaymentToProjectPost_0) | **POST** /sam/billing/attach_payment_to_project | Attach Payment To Project
[**createBillingAccountBillingCreateBillingAccountPost**](BillingApi.md#createBillingAccountBillingCreateBillingAccountPost) | **POST** /sam/billing/create_billing_account | Create Billing Account
[**createBillingAccountBillingCreateBillingAccountPost_0**](BillingApi.md#createBillingAccountBillingCreateBillingAccountPost_0) | **POST** /sam/billing/create_billing_account | Create Billing Account
[**deleteBillingAccountBillingDeleteBillingAccountDelete**](BillingApi.md#deleteBillingAccountBillingDeleteBillingAccountDelete) | **DELETE** /sam/billing/delete_billing_account | Delete Billing Account
[**deleteBillingAccountBillingDeleteBillingAccountDelete_0**](BillingApi.md#deleteBillingAccountBillingDeleteBillingAccountDelete_0) | **DELETE** /sam/billing/delete_billing_account | Delete Billing Account
[**getClientSecretBillingRetrieveSecretGet**](BillingApi.md#getClientSecretBillingRetrieveSecretGet) | **GET** /sam/billing/retrieve_secret | Get Client Secret
[**getClientSecretBillingRetrieveSecretGet_0**](BillingApi.md#getClientSecretBillingRetrieveSecretGet_0) | **GET** /sam/billing/retrieve_secret | Get Client Secret
[**hasPaymentBillingHasPaymentGet**](BillingApi.md#hasPaymentBillingHasPaymentGet) | **GET** /sam/billing/has_payment | Has Payment
[**hasPaymentBillingHasPaymentGet_0**](BillingApi.md#hasPaymentBillingHasPaymentGet_0) | **GET** /sam/billing/has_payment | Has Payment
[**processPaymentBillingProcessPaymentPost**](BillingApi.md#processPaymentBillingProcessPaymentPost) | **POST** /sam/billing/process_payment | Process Payment
[**processPaymentBillingProcessPaymentPost_0**](BillingApi.md#processPaymentBillingProcessPaymentPost_0) | **POST** /sam/billing/process_payment | Process Payment
[**reconcilePaymentMethodsBillingReconcilePaymentGet**](BillingApi.md#reconcilePaymentMethodsBillingReconcilePaymentGet) | **GET** /sam/billing/reconcile_payment | Reconcile Payment Methods
[**removePaymentMethodBillingRemovePaymentMethodDelete**](BillingApi.md#removePaymentMethodBillingRemovePaymentMethodDelete) | **DELETE** /sam/billing/remove_payment_method | Remove Payment Method
[**removePaymentMethodBillingRemovePaymentMethodDelete_0**](BillingApi.md#removePaymentMethodBillingRemovePaymentMethodDelete_0) | **DELETE** /sam/billing/remove_payment_method | Remove Payment Method
[**viewPaymentMethodBillingViewPaymentMethodGet**](BillingApi.md#viewPaymentMethodBillingViewPaymentMethodGet) | **GET** /sam/billing/view_payment_method | View Payment Method
[**viewPaymentMethodBillingViewPaymentMethodGet_0**](BillingApi.md#viewPaymentMethodBillingViewPaymentMethodGet_0) | **GET** /sam/billing/view_payment_method | View Payment Method


# **attachPaymentToProjectBillingAttachPaymentToProjectPost**
> any attachPaymentToProjectBillingAttachPaymentToProjectPost(bodyAttachPaymentToProjectBillingAttachPaymentToProjectPost)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BillingApi(configuration);

let body:.BillingApiAttachPaymentToProjectBillingAttachPaymentToProjectPostRequest = {
  // BodyAttachPaymentToProjectBillingAttachPaymentToProjectPost
  bodyAttachPaymentToProjectBillingAttachPaymentToProjectPost: {
    attachmentDetails: {
      paymentType: "paymentType_example",
      number: "number_example",
      expMonth: 1,
      expYear: 1,
      cvc: "cvc_example",
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

apiInstance.attachPaymentToProjectBillingAttachPaymentToProjectPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bodyAttachPaymentToProjectBillingAttachPaymentToProjectPost** | **BodyAttachPaymentToProjectBillingAttachPaymentToProjectPost**|  |
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

# **attachPaymentToProjectBillingAttachPaymentToProjectPost_0**
> any attachPaymentToProjectBillingAttachPaymentToProjectPost_0(bodyAttachPaymentToProjectBillingAttachPaymentToProjectPost)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BillingApi(configuration);

let body:.BillingApiAttachPaymentToProjectBillingAttachPaymentToProjectPost0Request = {
  // BodyAttachPaymentToProjectBillingAttachPaymentToProjectPost
  bodyAttachPaymentToProjectBillingAttachPaymentToProjectPost: {
    attachmentDetails: {
      paymentType: "paymentType_example",
      number: "number_example",
      expMonth: 1,
      expYear: 1,
      cvc: "cvc_example",
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

apiInstance.attachPaymentToProjectBillingAttachPaymentToProjectPost_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bodyAttachPaymentToProjectBillingAttachPaymentToProjectPost** | **BodyAttachPaymentToProjectBillingAttachPaymentToProjectPost**|  |
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

# **createBillingAccountBillingCreateBillingAccountPost**
> StripeAccountResponse createBillingAccountBillingCreateBillingAccountPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BillingApi(configuration);

let body:.BillingApiCreateBillingAccountBillingCreateBillingAccountPostRequest = {
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

apiInstance.createBillingAccountBillingCreateBillingAccountPost(body).then((data:any) => {
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

**StripeAccountResponse**

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

# **createBillingAccountBillingCreateBillingAccountPost_0**
> StripeAccountResponse createBillingAccountBillingCreateBillingAccountPost_0()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BillingApi(configuration);

let body:.BillingApiCreateBillingAccountBillingCreateBillingAccountPost0Request = {
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

apiInstance.createBillingAccountBillingCreateBillingAccountPost_0(body).then((data:any) => {
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

**StripeAccountResponse**

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

# **deleteBillingAccountBillingDeleteBillingAccountDelete**
> any deleteBillingAccountBillingDeleteBillingAccountDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BillingApi(configuration);

let body:.BillingApiDeleteBillingAccountBillingDeleteBillingAccountDeleteRequest = {
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

apiInstance.deleteBillingAccountBillingDeleteBillingAccountDelete(body).then((data:any) => {
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

# **deleteBillingAccountBillingDeleteBillingAccountDelete_0**
> any deleteBillingAccountBillingDeleteBillingAccountDelete_0()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BillingApi(configuration);

let body:.BillingApiDeleteBillingAccountBillingDeleteBillingAccountDelete0Request = {
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

apiInstance.deleteBillingAccountBillingDeleteBillingAccountDelete_0(body).then((data:any) => {
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

# **getClientSecretBillingRetrieveSecretGet**
> any getClientSecretBillingRetrieveSecretGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BillingApi(configuration);

let body:.BillingApiGetClientSecretBillingRetrieveSecretGetRequest = {
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

apiInstance.getClientSecretBillingRetrieveSecretGet(body).then((data:any) => {
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

# **getClientSecretBillingRetrieveSecretGet_0**
> any getClientSecretBillingRetrieveSecretGet_0()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BillingApi(configuration);

let body:.BillingApiGetClientSecretBillingRetrieveSecretGet0Request = {
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

apiInstance.getClientSecretBillingRetrieveSecretGet_0(body).then((data:any) => {
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

# **hasPaymentBillingHasPaymentGet**
> any hasPaymentBillingHasPaymentGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BillingApi(configuration);

let body:.BillingApiHasPaymentBillingHasPaymentGetRequest = {
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

apiInstance.hasPaymentBillingHasPaymentGet(body).then((data:any) => {
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

# **hasPaymentBillingHasPaymentGet_0**
> any hasPaymentBillingHasPaymentGet_0()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BillingApi(configuration);

let body:.BillingApiHasPaymentBillingHasPaymentGet0Request = {
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

apiInstance.hasPaymentBillingHasPaymentGet_0(body).then((data:any) => {
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

# **processPaymentBillingProcessPaymentPost**
> any processPaymentBillingProcessPaymentPost(bodyProcessPaymentBillingProcessPaymentPost)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BillingApi(configuration);

let body:.BillingApiProcessPaymentBillingProcessPaymentPostRequest = {
  // BodyProcessPaymentBillingProcessPaymentPost
  bodyProcessPaymentBillingProcessPaymentPost: {
    paymentSchema: {
      amount: 1,
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

apiInstance.processPaymentBillingProcessPaymentPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bodyProcessPaymentBillingProcessPaymentPost** | **BodyProcessPaymentBillingProcessPaymentPost**|  |
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

# **processPaymentBillingProcessPaymentPost_0**
> any processPaymentBillingProcessPaymentPost_0(bodyProcessPaymentBillingProcessPaymentPost)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BillingApi(configuration);

let body:.BillingApiProcessPaymentBillingProcessPaymentPost0Request = {
  // BodyProcessPaymentBillingProcessPaymentPost
  bodyProcessPaymentBillingProcessPaymentPost: {
    paymentSchema: {
      amount: 1,
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

apiInstance.processPaymentBillingProcessPaymentPost_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bodyProcessPaymentBillingProcessPaymentPost** | **BodyProcessPaymentBillingProcessPaymentPost**|  |
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

# **reconcilePaymentMethodsBillingReconcilePaymentGet**
> boolean reconcilePaymentMethodsBillingReconcilePaymentGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BillingApi(configuration);

let body:.BillingApiReconcilePaymentMethodsBillingReconcilePaymentGetRequest = {
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

apiInstance.reconcilePaymentMethodsBillingReconcilePaymentGet(body).then((data:any) => {
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

**boolean**

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

# **removePaymentMethodBillingRemovePaymentMethodDelete**
> any removePaymentMethodBillingRemovePaymentMethodDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BillingApi(configuration);

let body:.BillingApiRemovePaymentMethodBillingRemovePaymentMethodDeleteRequest = {
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

apiInstance.removePaymentMethodBillingRemovePaymentMethodDelete(body).then((data:any) => {
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

# **removePaymentMethodBillingRemovePaymentMethodDelete_0**
> any removePaymentMethodBillingRemovePaymentMethodDelete_0()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BillingApi(configuration);

let body:.BillingApiRemovePaymentMethodBillingRemovePaymentMethodDelete0Request = {
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

apiInstance.removePaymentMethodBillingRemovePaymentMethodDelete_0(body).then((data:any) => {
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

# **viewPaymentMethodBillingViewPaymentMethodGet**
> Array<PaymentMethodResponse> viewPaymentMethodBillingViewPaymentMethodGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BillingApi(configuration);

let body:.BillingApiViewPaymentMethodBillingViewPaymentMethodGetRequest = {
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

apiInstance.viewPaymentMethodBillingViewPaymentMethodGet(body).then((data:any) => {
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

**Array<PaymentMethodResponse>**

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

# **viewPaymentMethodBillingViewPaymentMethodGet_0**
> Array<PaymentMethodResponse> viewPaymentMethodBillingViewPaymentMethodGet_0()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BillingApi(configuration);

let body:.BillingApiViewPaymentMethodBillingViewPaymentMethodGet0Request = {
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

apiInstance.viewPaymentMethodBillingViewPaymentMethodGet_0(body).then((data:any) => {
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

**Array<PaymentMethodResponse>**

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


