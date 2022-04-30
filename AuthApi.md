# .AuthApi

All URIs are relative to *https://api.prod.ehelply.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**resetPasswordConfirmationUsersAuthPasswordResetConfirmPost**](AuthApi.md#resetPasswordConfirmationUsersAuthPasswordResetConfirmPost) | **POST** /sam/users/auth/password/reset/confirm | Reset Password Confirmation


# **resetPasswordConfirmationUsersAuthPasswordResetConfirmPost**
> any resetPasswordConfirmationUsersAuthPasswordResetConfirmPost(userPasswordResetConfirmation)

Resets the given user's password to the given password when the proper code is provided

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiResetPasswordConfirmationUsersAuthPasswordResetConfirmPostRequest = {
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


