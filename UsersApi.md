# .UsersApi

All URIs are relative to *https://api.prod.ehelply.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**confirmSignup**](UsersApi.md#confirmSignup) | **POST** /sam/users/auth/signup/confirm | Confirmsignup
[**createParticipant**](UsersApi.md#createParticipant) | **POST** /sam/users/participants | Createparticipant
[**createUser**](UsersApi.md#createUser) | **POST** /sam/users | Createuser
[**deleteParticipant**](UsersApi.md#deleteParticipant) | **DELETE** /sam/users/participants/{participant_id} | Deleteparticipant
[**deleteUser**](UsersApi.md#deleteUser) | **DELETE** /sam/users/{user_id} | Deleteuser
[**getParticipant**](UsersApi.md#getParticipant) | **GET** /sam/users/participants/{participant_id} | Getparticipant
[**getUser**](UsersApi.md#getUser) | **GET** /sam/users/{user_id} | Getuser
[**login**](UsersApi.md#login) | **POST** /sam/users/auth/login | Login
[**refreshToken**](UsersApi.md#refreshToken) | **POST** /sam/users/auth/{app_client}/refresh-token | Refreshtoken
[**resetPassword**](UsersApi.md#resetPassword) | **POST** /sam/users/auth/password/reset | Resetpassword
[**resetPasswordConfirmationUsersAuthPasswordResetConfirmPost**](UsersApi.md#resetPasswordConfirmationUsersAuthPasswordResetConfirmPost) | **POST** /sam/users/auth/password/reset/confirm | Reset Password Confirmation
[**searchParticipants**](UsersApi.md#searchParticipants) | **GET** /sam/users/participants | Searchparticipants
[**signup**](UsersApi.md#signup) | **POST** /sam/users/auth/signup | Signup
[**updateParticipant**](UsersApi.md#updateParticipant) | **PUT** /sam/users/participants/{participant_id} | Updateparticipant
[**updateUser**](UsersApi.md#updateUser) | **PUT** /sam/users/{user_id} | Updateuser
[**userValidations**](UsersApi.md#userValidations) | **POST** /sam/users/validations/{field} | Uservalidations


# **confirmSignup**
> any confirmSignup(userConfirmation)

Validates a user signup with a given confirmation

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UsersApi(configuration);

let body:.UsersApiConfirmSignupRequest = {
  // UserConfirmation
  userConfirmation: {
    email: "email_example",
    verificationCode: "verificationCode_example",
  },
};

apiInstance.confirmSignup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userConfirmation** | **UserConfirmation**|  |


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

# **createParticipant**
> ParticipantUserReturn createParticipant(participantCreate)

Creates a participant given the participant info (meta and user_id)

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UsersApi(configuration);

let body:.UsersApiCreateParticipantRequest = {
  // ParticipantCreate
  participantCreate: {
    meta: {},
    userUuid: "userUuid_example",
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

apiInstance.createParticipant(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **participantCreate** | **ParticipantCreate**|  |
 **xAccessToken** | [**string**] |  | (optional) defaults to undefined
 **xSecretToken** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined
 **ehelplyActiveParticipant** | [**string**] |  | (optional) defaults to undefined
 **ehelplyProject** | [**string**] |  | (optional) defaults to undefined
 **ehelplyData** | [**string**] |  | (optional) defaults to undefined


### Return type

**ParticipantUserReturn**

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

# **createUser**
> any createUser()

Usually ran after login and will do the following: - If no user exists (AKA signed in with social media) it will create a new user and default participant - If a user exists, sync Cognito data from Cognito to the user - Determine missing fields that SHOULD be filled

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UsersApi(configuration);

let body:.UsersApiCreateUserRequest = {
  // string (optional)
  authorization: "authorization_example",
};

apiInstance.createUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | [**string**] |  | (optional) defaults to undefined


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

# **deleteParticipant**
> boolean deleteParticipant()

Delete participants related to the given participant_id, returns True if successful

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UsersApi(configuration);

let body:.UsersApiDeleteParticipantRequest = {
  // string
  participantId: "participant_id_example",
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

apiInstance.deleteParticipant(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **participantId** | [**string**] |  | defaults to undefined
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

# **deleteUser**
> boolean deleteUser()

Soft deletes the user with the provided user id, granted the deleter is the same person or an admin. Returns True if successful

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UsersApi(configuration);

let body:.UsersApiDeleteUserRequest = {
  // string
  userId: "user_id_example",
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

apiInstance.deleteUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined
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

# **getParticipant**
> ParticipantUserReturn getParticipant()

Gets a participant given their participant ID

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UsersApi(configuration);

let body:.UsersApiGetParticipantRequest = {
  // string
  participantId: "participant_id_example",
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

apiInstance.getParticipant(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **participantId** | [**string**] |  | defaults to undefined
 **xAccessToken** | [**string**] |  | (optional) defaults to undefined
 **xSecretToken** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined
 **ehelplyActiveParticipant** | [**string**] |  | (optional) defaults to undefined
 **ehelplyProject** | [**string**] |  | (optional) defaults to undefined
 **ehelplyData** | [**string**] |  | (optional) defaults to undefined


### Return type

**ParticipantUserReturn**

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

# **getUser**
> UserResponse getUser()

Gets the user object given user id (uuid) or cognito id (cognito)

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UsersApi(configuration);

let body:.UsersApiGetUserRequest = {
  // string
  userId: "user_id_example",
  // string (optional)
  idType: "cognito OR uuid",
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

apiInstance.getUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined
 **idType** | [**string**] |  | (optional) defaults to undefined
 **xAccessToken** | [**string**] |  | (optional) defaults to undefined
 **xSecretToken** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined
 **ehelplyActiveParticipant** | [**string**] |  | (optional) defaults to undefined
 **ehelplyProject** | [**string**] |  | (optional) defaults to undefined
 **ehelplyData** | [**string**] |  | (optional) defaults to undefined


### Return type

**UserResponse**

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

# **login**
> UserLoginReturn login(userLogin)

Login endpoint, returns tokens. EMAIL NEEDS TO BE VERIFIED (can be done through the email the user received).

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UsersApi(configuration);

let body:.UsersApiLoginRequest = {
  // UserLogin
  userLogin: {
    username: "username_example",
    password: "password_example",
  },
};

apiInstance.login(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userLogin** | **UserLogin**|  |


### Return type

**UserLoginReturn**

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

# **refreshToken**
> UserTokenReturn refreshToken(body)

Refreshes tokens given a refresh token.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UsersApi(configuration);

let body:.UsersApiRefreshTokenRequest = {
  // string
  appClient: "app_client_example",
  // string
  body: "body_example",
};

apiInstance.refreshToken(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string**|  |
 **appClient** | [**string**] |  | defaults to undefined


### Return type

**UserTokenReturn**

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

# **resetPassword**
> any resetPassword(userPasswordReset)

Sends the user an email with a confirmation code so they can reset their password

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UsersApi(configuration);

let body:.UsersApiResetPasswordRequest = {
  // UserPasswordReset
  userPasswordReset: {
    email: "email_example",
  },
};

apiInstance.resetPassword(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userPasswordReset** | **UserPasswordReset**|  |


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

# **resetPasswordConfirmationUsersAuthPasswordResetConfirmPost**
> any resetPasswordConfirmationUsersAuthPasswordResetConfirmPost(userPasswordResetConfirmation)

Resets the given user's password to the given password when the proper code is provided

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UsersApi(configuration);

let body:.UsersApiResetPasswordConfirmationUsersAuthPasswordResetConfirmPostRequest = {
  // UserPasswordResetConfirmation
  userPasswordResetConfirmation: {
    email: "email_example",
    confirmationCode: "confirmationCode_example",
    password: "password_example",
  },
};

apiInstance.resetPasswordConfirmationUsersAuthPasswordResetConfirmPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userPasswordResetConfirmation** | **UserPasswordResetConfirmation**|  |


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

# **searchParticipants**
> Page searchParticipants()

Search participants using a user uuid, returns pagination information and list of `items` (ParticipantUserReturn from GET Participant). Can search on \"user_uuid\", and sort on any field. To search enter search value into \"search\" query param and the field into \"search on\" (currently only \"user\"uuid\"). For sorting fill out \"sort_desc\" field with either true/false and the \"sort_on\" query parameter with column you want to sort on (ex: date_created). Max pagination items per page is 50.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UsersApi(configuration);

let body:.UsersApiSearchParticipantsRequest = {
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

apiInstance.searchParticipants(body).then((data:any) => {
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
**404** | Not found |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **signup**
> UserSignupReturn signup(userSignup)

Signup to eHelply, creates a user and default participant behind the scenes. Does not verify email.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UsersApi(configuration);

let body:.UsersApiSignupRequest = {
  // UserSignup
  userSignup: {
    username: "username_example",
    password: "password_example",
    email: "email_example",
    firstName: "firstName_example",
    lastName: "lastName_example",
    phoneNumber: "phoneNumber_example",
    country: "country_example",
    lat: "lat_example",
    lng: "lng_example",
    verifiedLegalTerms: false,
    picture: "picture_example",
    newsletters: true,
  },
};

apiInstance.signup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userSignup** | **UserSignup**|  |


### Return type

**UserSignupReturn**

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

# **updateParticipant**
> ParticipantUserReturn updateParticipant(participantUpdate)

Update participant data given

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UsersApi(configuration);

let body:.UsersApiUpdateParticipantRequest = {
  // string
  participantId: "participant_id_example",
  // ParticipantUpdate
  participantUpdate: {
    meta: {},
    userUuid: "userUuid_example",
    uuid: "uuid_example",
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

apiInstance.updateParticipant(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **participantUpdate** | **ParticipantUpdate**|  |
 **participantId** | [**string**] |  | defaults to undefined
 **xAccessToken** | [**string**] |  | (optional) defaults to undefined
 **xSecretToken** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined
 **ehelplyActiveParticipant** | [**string**] |  | (optional) defaults to undefined
 **ehelplyProject** | [**string**] |  | (optional) defaults to undefined
 **ehelplyData** | [**string**] |  | (optional) defaults to undefined


### Return type

**ParticipantUserReturn**

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

# **updateUser**
> UserResponse updateUser(user)

Update the given user and sync the cognito data

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UsersApi(configuration);

let body:.UsersApiUpdateUserRequest = {
  // string
  userId: "user_id_example",
  // User
  user: {
    cognitoId: "cognitoId_example",
    cognitoData: {},
    firstName: "firstName_example",
    lastName: "lastName_example",
    email: "email_example",
    phoneNumber: "phoneNumber_example",
    country: "country_example",
    picture: "picture_example",
    gpsLocation: {},
    verifiedLegalTerms: false,
    dateCreated: new Date('1970-01-01T00:00:00.00Z'),
    dateUpdated: new Date('1970-01-01T00:00:00.00Z'),
    dateDeleted: new Date('1970-01-01T00:00:00.00Z'),
    uuid: "uuid_example",
    lastLogin: new Date('1970-01-01T00:00:00.00Z'),
    firstLogin: true,
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

apiInstance.updateUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | **User**|  |
 **userId** | [**string**] |  | defaults to undefined
 **xAccessToken** | [**string**] |  | (optional) defaults to undefined
 **xSecretToken** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined
 **ehelplyActiveParticipant** | [**string**] |  | (optional) defaults to undefined
 **ehelplyProject** | [**string**] |  | (optional) defaults to undefined
 **ehelplyData** | [**string**] |  | (optional) defaults to undefined


### Return type

**UserResponse**

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

# **userValidations**
> boolean userValidations(userValidations)

Validates a certain field.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UsersApi(configuration);

let body:.UsersApiUserValidationsRequest = {
  // string
  field: "email",
  // UserValidations
  userValidations: {
    value: "value_example",
    validationType: "validationType_example",
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

apiInstance.userValidations(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userValidations** | **UserValidations**|  |
 **field** | [**string**] |  | defaults to undefined
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

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**404** | Not found |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


