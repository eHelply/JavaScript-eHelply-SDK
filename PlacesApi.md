# .PlacesApi

All URIs are relative to *https://api.prod.ehelply.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPlacePlacesPlacesPost**](PlacesApi.md#createPlacePlacesPlacesPost) | **POST** /places/places | Create Place
[**deletePlacePlacesPlacesPlaceUuidDelete**](PlacesApi.md#deletePlacePlacesPlacesPlaceUuidDelete) | **DELETE** /places/places/{place_uuid} | Delete Place
[**forwardGeocodingPlacesGeocodingForwardGet**](PlacesApi.md#forwardGeocodingPlacesGeocodingForwardGet) | **GET** /places/geocoding/forward | Forward Geocoding
[**getPlacePlacesPlacesPlaceUuidGet**](PlacesApi.md#getPlacePlacesPlacesPlaceUuidGet) | **GET** /places/places/{place_uuid} | Get Place
[**reverseGeocodingPlacesGeocodingReverseGet**](PlacesApi.md#reverseGeocodingPlacesGeocodingReverseGet) | **GET** /places/geocoding/reverse | Reverse Geocoding
[**searchPlacesBySearchStringPlacesSearchPlacesStringGet**](PlacesApi.md#searchPlacesBySearchStringPlacesSearchPlacesStringGet) | **GET** /places/search/places/string | Search Places By Search String
[**searchPlacesPlacesPlacesGet**](PlacesApi.md#searchPlacesPlacesPlacesGet) | **GET** /places/places | Search Places
[**updatePlacePlacesPlacesPlaceUuidPut**](PlacesApi.md#updatePlacePlacesPlacesPlaceUuidPut) | **PUT** /places/places/{place_uuid} | Update Place


# **createPlacePlacesPlacesPost**
> PlaceResponse createPlacePlacesPlacesPost(placeBase)

Creates a Place.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PlacesApi(configuration);

let body:.PlacesApiCreatePlacePlacesPlacesPostRequest = {
  // PlaceBase
  placeBase: {
    name: "Example Clinic",
    summary: "Summary of the clinic",
    _public: true,
    meta: {},
    addresses: [
      {
        addressType: "Mailing",
        addressLine1: "1234 Street Name",
        addressLine2: "Unit #2",
        postalZipCode: "123 456",
        city: "city name",
        provinceState: "province",
        country: "Canada",
        lat: "123",
        lng: "-123",
      },
    ],
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

apiInstance.createPlacePlacesPlacesPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **placeBase** | **PlaceBase**|  |
 **xAccessToken** | [**string**] |  | (optional) defaults to undefined
 **xSecretToken** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined
 **ehelplyActiveParticipant** | [**string**] |  | (optional) defaults to undefined
 **ehelplyProject** | [**string**] |  | (optional) defaults to undefined
 **ehelplyData** | [**string**] |  | (optional) defaults to undefined


### Return type

**PlaceResponse**

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

# **deletePlacePlacesPlacesPlaceUuidDelete**
> any deletePlacePlacesPlacesPlaceUuidDelete()

Deletes the place with the given ID and returns True if successful

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PlacesApi(configuration);

let body:.PlacesApiDeletePlacePlacesPlacesPlaceUuidDeleteRequest = {
  // string
  placeUuid: "place_uuid_example",
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

apiInstance.deletePlacePlacesPlacesPlaceUuidDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **placeUuid** | [**string**] |  | defaults to undefined
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

# **forwardGeocodingPlacesGeocodingForwardGet**
> any forwardGeocodingPlacesGeocodingForwardGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PlacesApi(configuration);

let body:.PlacesApiForwardGeocodingPlacesGeocodingForwardGetRequest = {
  // string
  searchingPlace: "searching_place_example",
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

apiInstance.forwardGeocodingPlacesGeocodingForwardGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchingPlace** | [**string**] |  | defaults to undefined
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

# **getPlacePlacesPlacesPlaceUuidGet**
> PlaceResponse getPlacePlacesPlacesPlaceUuidGet()

Gets the place information given the Place ID

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PlacesApi(configuration);

let body:.PlacesApiGetPlacePlacesPlacesPlaceUuidGetRequest = {
  // string
  placeUuid: "place_uuid_example",
  // boolean (optional)
  withMeta: false,
  // boolean (optional)
  withCatalog: false,
  // boolean (optional)
  withReviews: false,
  // boolean (optional)
  withSchedule: false,
  // boolean (optional)
  withCollection: false,
  // boolean (optional)
  withBlog: false,
  // boolean (optional)
  withTags: false,
  // boolean (optional)
  withCategories: false,
  // boolean (optional)
  withCompany: false,
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

apiInstance.getPlacePlacesPlacesPlaceUuidGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **placeUuid** | [**string**] |  | defaults to undefined
 **withMeta** | [**boolean**] |  | (optional) defaults to undefined
 **withCatalog** | [**boolean**] |  | (optional) defaults to undefined
 **withReviews** | [**boolean**] |  | (optional) defaults to undefined
 **withSchedule** | [**boolean**] |  | (optional) defaults to undefined
 **withCollection** | [**boolean**] |  | (optional) defaults to undefined
 **withBlog** | [**boolean**] |  | (optional) defaults to undefined
 **withTags** | [**boolean**] |  | (optional) defaults to undefined
 **withCategories** | [**boolean**] |  | (optional) defaults to undefined
 **withCompany** | [**boolean**] |  | (optional) defaults to undefined
 **xAccessToken** | [**string**] |  | (optional) defaults to undefined
 **xSecretToken** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined
 **ehelplyActiveParticipant** | [**string**] |  | (optional) defaults to undefined
 **ehelplyProject** | [**string**] |  | (optional) defaults to undefined
 **ehelplyData** | [**string**] |  | (optional) defaults to undefined


### Return type

**PlaceResponse**

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

# **reverseGeocodingPlacesGeocodingReverseGet**
> any reverseGeocodingPlacesGeocodingReverseGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PlacesApi(configuration);

let body:.PlacesApiReverseGeocodingPlacesGeocodingReverseGetRequest = {
  // number
  _long: 3.14,
  // number
  lat: 3.14,
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

apiInstance.reverseGeocodingPlacesGeocodingReverseGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_long** | [**number**] |  | defaults to undefined
 **lat** | [**number**] |  | defaults to undefined
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

# **searchPlacesBySearchStringPlacesSearchPlacesStringGet**
> Page searchPlacesBySearchStringPlacesSearchPlacesStringGet()

Search places by a search string

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PlacesApi(configuration);

let body:.PlacesApiSearchPlacesBySearchStringPlacesSearchPlacesStringGetRequest = {
  // string (optional)
  searchString: "",
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

apiInstance.searchPlacesBySearchStringPlacesSearchPlacesStringGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchString** | [**string**] |  | (optional) defaults to ''
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

# **searchPlacesPlacesPlacesGet**
> Page searchPlacesPlacesPlacesGet()

Search all places and returns paginated results with Places being stored in items field. Can search by `project_uuid, name, address, address_line_2, city, province_state, country, postal_zip_code, lat, lng email` string fields or the `is_public and is_deleted` boolean fields. To search with these fields use query params with string values. For sorting fill out \"sort_desc\" field with either true/false and the \"sort_on\" query parameter with column you want to sort on (ex: name). Max pagination items per page is 50. Item return format: ``` {     uuid                                **type:** string     project_uuid                        **type:** string or None      meta_uuid                           **type:** string or None      catalog_data                        **type:** dict or None      review_group_data                   **type:** dict or None      schedule_data                       **type:** dict or None      collection_data                     **type:** dict or None      blog_data                           **type:** dict or None      tags                                **type:** [TagBase] or None      categories                          **type:** [CategoryBase] or None      company                             **type:** CompanyBase or None      created_at                          **type:** string or None      updated_at                          **type:** string or None      deleted_at                          **type:** string or None  } ```

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PlacesApi(configuration);

let body:.PlacesApiSearchPlacesPlacesPlacesGetRequest = {
  // string (optional)
  projectUuid: "project_uuid_example",
  // string (optional)
  name: "name_example",
  // string (optional)
  addressLine1: "address_line_1_example",
  // string (optional)
  addressLine2: "address_line_2_example",
  // string (optional)
  city: "city_example",
  // string (optional)
  provinceState: "province_state_example",
  // string (optional)
  country: "country_example",
  // string (optional)
  postalZipCode: "postal_zip_code_example",
  // string (optional)
  lat: "lat_example",
  // string (optional)
  lng: "lng_example",
  // string (optional)
  email: "email_example",
  // boolean (optional)
  isPublic: true,
  // boolean (optional)
  isDeleted: false,
  // boolean (optional)
  withCompany: false,
  // boolean (optional)
  withMeta: false,
  // boolean (optional)
  withCatalog: false,
  // boolean (optional)
  withReviews: false,
  // boolean (optional)
  withSchedule: false,
  // boolean (optional)
  withCollection: false,
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

apiInstance.searchPlacesPlacesPlacesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectUuid** | [**string**] |  | (optional) defaults to undefined
 **name** | [**string**] |  | (optional) defaults to undefined
 **addressLine1** | [**string**] |  | (optional) defaults to undefined
 **addressLine2** | [**string**] |  | (optional) defaults to undefined
 **city** | [**string**] |  | (optional) defaults to undefined
 **provinceState** | [**string**] |  | (optional) defaults to undefined
 **country** | [**string**] |  | (optional) defaults to undefined
 **postalZipCode** | [**string**] |  | (optional) defaults to undefined
 **lat** | [**string**] |  | (optional) defaults to undefined
 **lng** | [**string**] |  | (optional) defaults to undefined
 **email** | [**string**] |  | (optional) defaults to undefined
 **isPublic** | [**boolean**] |  | (optional) defaults to undefined
 **isDeleted** | [**boolean**] |  | (optional) defaults to undefined
 **withCompany** | [**boolean**] |  | (optional) defaults to undefined
 **withMeta** | [**boolean**] |  | (optional) defaults to undefined
 **withCatalog** | [**boolean**] |  | (optional) defaults to undefined
 **withReviews** | [**boolean**] |  | (optional) defaults to undefined
 **withSchedule** | [**boolean**] |  | (optional) defaults to undefined
 **withCollection** | [**boolean**] |  | (optional) defaults to undefined
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

# **updatePlacePlacesPlacesPlaceUuidPut**
> PlaceResponse updatePlacePlacesPlacesPlaceUuidPut(placeBase)

Update Place with given info, only updating the fields supplied. Place Uuid must be sent however.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PlacesApi(configuration);

let body:.PlacesApiUpdatePlacePlacesPlacesPlaceUuidPutRequest = {
  // string
  placeUuid: "place_uuid_example",
  // PlaceBase
  placeBase: {
    name: "Example Clinic",
    summary: "Summary of the clinic",
    _public: true,
    meta: {},
    addresses: [
      {
        addressType: "Mailing",
        addressLine1: "1234 Street Name",
        addressLine2: "Unit #2",
        postalZipCode: "123 456",
        city: "city name",
        provinceState: "province",
        country: "Canada",
        lat: "123",
        lng: "-123",
      },
    ],
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

apiInstance.updatePlacePlacesPlacesPlaceUuidPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **placeBase** | **PlaceBase**|  |
 **placeUuid** | [**string**] |  | defaults to undefined
 **xAccessToken** | [**string**] |  | (optional) defaults to undefined
 **xSecretToken** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined
 **ehelplyActiveParticipant** | [**string**] |  | (optional) defaults to undefined
 **ehelplyProject** | [**string**] |  | (optional) defaults to undefined
 **ehelplyData** | [**string**] |  | (optional) defaults to undefined


### Return type

**PlaceResponse**

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


