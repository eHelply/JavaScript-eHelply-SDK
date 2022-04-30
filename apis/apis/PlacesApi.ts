// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { HTTPValidationError } from '..models/models/HTTPValidationError';
import { Page } from '..models/models/Page';
import { PlaceBase } from '..models/models/PlaceBase';
import { PlaceResponse } from '..models/models/PlaceResponse';

/**
 * no description
 */
export class PlacesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Creates a Place.
     * Create Place
     * @param placeBase 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public async createPlacePlacesPlacesPost(placeBase: PlaceBase, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'placeBase' is not null or undefined
        if (placeBase === null || placeBase === undefined) {
            throw new RequiredError("PlacesApi", "createPlacePlacesPlacesPost", "placeBase");
        }








        // Path Params
        const localVarPath = '/places/places';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("x-access-token", ObjectSerializer.serialize(xAccessToken, "string", ""));

        // Header Params
        requestContext.setHeaderParam("x-secret-token", ObjectSerializer.serialize(xSecretToken, "string", ""));

        // Header Params
        requestContext.setHeaderParam("authorization", ObjectSerializer.serialize(authorization, "string", ""));

        // Header Params
        requestContext.setHeaderParam("ehelply-active-participant", ObjectSerializer.serialize(ehelplyActiveParticipant, "string", ""));

        // Header Params
        requestContext.setHeaderParam("ehelply-project", ObjectSerializer.serialize(ehelplyProject, "string", ""));

        // Header Params
        requestContext.setHeaderParam("ehelply-data", ObjectSerializer.serialize(ehelplyData, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(placeBase, "PlaceBase", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Deletes the place with the given ID and returns True if successful
     * Delete Place
     * @param placeUuid 
     * @param softDelete 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public async deletePlacePlacesPlacesPlaceUuidDelete(placeUuid: string, softDelete?: boolean, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'placeUuid' is not null or undefined
        if (placeUuid === null || placeUuid === undefined) {
            throw new RequiredError("PlacesApi", "deletePlacePlacesPlacesPlaceUuidDelete", "placeUuid");
        }









        // Path Params
        const localVarPath = '/places/places/{place_uuid}'
            .replace('{' + 'place_uuid' + '}', encodeURIComponent(String(placeUuid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (softDelete !== undefined) {
            requestContext.setQueryParam("soft_delete", ObjectSerializer.serialize(softDelete, "boolean", ""));
        }

        // Header Params
        requestContext.setHeaderParam("x-access-token", ObjectSerializer.serialize(xAccessToken, "string", ""));

        // Header Params
        requestContext.setHeaderParam("x-secret-token", ObjectSerializer.serialize(xSecretToken, "string", ""));

        // Header Params
        requestContext.setHeaderParam("authorization", ObjectSerializer.serialize(authorization, "string", ""));

        // Header Params
        requestContext.setHeaderParam("ehelply-active-participant", ObjectSerializer.serialize(ehelplyActiveParticipant, "string", ""));

        // Header Params
        requestContext.setHeaderParam("ehelply-project", ObjectSerializer.serialize(ehelplyProject, "string", ""));

        // Header Params
        requestContext.setHeaderParam("ehelply-data", ObjectSerializer.serialize(ehelplyData, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Forward Geocoding
     * @param searchingPlace 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public async forwardGeocodingPlacesGeocodingForwardGet(searchingPlace: string, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'searchingPlace' is not null or undefined
        if (searchingPlace === null || searchingPlace === undefined) {
            throw new RequiredError("PlacesApi", "forwardGeocodingPlacesGeocodingForwardGet", "searchingPlace");
        }








        // Path Params
        const localVarPath = '/places/geocoding/forward';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (searchingPlace !== undefined) {
            requestContext.setQueryParam("searching_place", ObjectSerializer.serialize(searchingPlace, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("x-access-token", ObjectSerializer.serialize(xAccessToken, "string", ""));

        // Header Params
        requestContext.setHeaderParam("x-secret-token", ObjectSerializer.serialize(xSecretToken, "string", ""));

        // Header Params
        requestContext.setHeaderParam("authorization", ObjectSerializer.serialize(authorization, "string", ""));

        // Header Params
        requestContext.setHeaderParam("ehelply-active-participant", ObjectSerializer.serialize(ehelplyActiveParticipant, "string", ""));

        // Header Params
        requestContext.setHeaderParam("ehelply-project", ObjectSerializer.serialize(ehelplyProject, "string", ""));

        // Header Params
        requestContext.setHeaderParam("ehelply-data", ObjectSerializer.serialize(ehelplyData, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets the place information given the Place ID
     * Get Place
     * @param placeUuid 
     * @param withMeta 
     * @param withCatalog 
     * @param withReviews 
     * @param withSchedule 
     * @param withCollection 
     * @param withBlog 
     * @param withTags 
     * @param withCategories 
     * @param withCompany 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public async getPlacePlacesPlacesPlaceUuidGet(placeUuid: string, withMeta?: boolean, withCatalog?: boolean, withReviews?: boolean, withSchedule?: boolean, withCollection?: boolean, withBlog?: boolean, withTags?: boolean, withCategories?: boolean, withCompany?: boolean, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'placeUuid' is not null or undefined
        if (placeUuid === null || placeUuid === undefined) {
            throw new RequiredError("PlacesApi", "getPlacePlacesPlacesPlaceUuidGet", "placeUuid");
        }

















        // Path Params
        const localVarPath = '/places/places/{place_uuid}'
            .replace('{' + 'place_uuid' + '}', encodeURIComponent(String(placeUuid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (withMeta !== undefined) {
            requestContext.setQueryParam("with_meta", ObjectSerializer.serialize(withMeta, "boolean", ""));
        }

        // Query Params
        if (withCatalog !== undefined) {
            requestContext.setQueryParam("with_catalog", ObjectSerializer.serialize(withCatalog, "boolean", ""));
        }

        // Query Params
        if (withReviews !== undefined) {
            requestContext.setQueryParam("with_reviews", ObjectSerializer.serialize(withReviews, "boolean", ""));
        }

        // Query Params
        if (withSchedule !== undefined) {
            requestContext.setQueryParam("with_schedule", ObjectSerializer.serialize(withSchedule, "boolean", ""));
        }

        // Query Params
        if (withCollection !== undefined) {
            requestContext.setQueryParam("with_collection", ObjectSerializer.serialize(withCollection, "boolean", ""));
        }

        // Query Params
        if (withBlog !== undefined) {
            requestContext.setQueryParam("with_blog", ObjectSerializer.serialize(withBlog, "boolean", ""));
        }

        // Query Params
        if (withTags !== undefined) {
            requestContext.setQueryParam("with_tags", ObjectSerializer.serialize(withTags, "boolean", ""));
        }

        // Query Params
        if (withCategories !== undefined) {
            requestContext.setQueryParam("with_categories", ObjectSerializer.serialize(withCategories, "boolean", ""));
        }

        // Query Params
        if (withCompany !== undefined) {
            requestContext.setQueryParam("with_company", ObjectSerializer.serialize(withCompany, "boolean", ""));
        }

        // Header Params
        requestContext.setHeaderParam("x-access-token", ObjectSerializer.serialize(xAccessToken, "string", ""));

        // Header Params
        requestContext.setHeaderParam("x-secret-token", ObjectSerializer.serialize(xSecretToken, "string", ""));

        // Header Params
        requestContext.setHeaderParam("authorization", ObjectSerializer.serialize(authorization, "string", ""));

        // Header Params
        requestContext.setHeaderParam("ehelply-active-participant", ObjectSerializer.serialize(ehelplyActiveParticipant, "string", ""));

        // Header Params
        requestContext.setHeaderParam("ehelply-project", ObjectSerializer.serialize(ehelplyProject, "string", ""));

        // Header Params
        requestContext.setHeaderParam("ehelply-data", ObjectSerializer.serialize(ehelplyData, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Reverse Geocoding
     * @param _long 
     * @param lat 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public async reverseGeocodingPlacesGeocodingReverseGet(_long: number, lat: number, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter '_long' is not null or undefined
        if (_long === null || _long === undefined) {
            throw new RequiredError("PlacesApi", "reverseGeocodingPlacesGeocodingReverseGet", "_long");
        }


        // verify required parameter 'lat' is not null or undefined
        if (lat === null || lat === undefined) {
            throw new RequiredError("PlacesApi", "reverseGeocodingPlacesGeocodingReverseGet", "lat");
        }








        // Path Params
        const localVarPath = '/places/geocoding/reverse';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (_long !== undefined) {
            requestContext.setQueryParam("long", ObjectSerializer.serialize(_long, "number", ""));
        }

        // Query Params
        if (lat !== undefined) {
            requestContext.setQueryParam("lat", ObjectSerializer.serialize(lat, "number", ""));
        }

        // Header Params
        requestContext.setHeaderParam("x-access-token", ObjectSerializer.serialize(xAccessToken, "string", ""));

        // Header Params
        requestContext.setHeaderParam("x-secret-token", ObjectSerializer.serialize(xSecretToken, "string", ""));

        // Header Params
        requestContext.setHeaderParam("authorization", ObjectSerializer.serialize(authorization, "string", ""));

        // Header Params
        requestContext.setHeaderParam("ehelply-active-participant", ObjectSerializer.serialize(ehelplyActiveParticipant, "string", ""));

        // Header Params
        requestContext.setHeaderParam("ehelply-project", ObjectSerializer.serialize(ehelplyProject, "string", ""));

        // Header Params
        requestContext.setHeaderParam("ehelply-data", ObjectSerializer.serialize(ehelplyData, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Search places by a search string
     * Search Places By Search String
     * @param searchString 
     * @param page 
     * @param pageSize 
     * @param sortOn 
     * @param sortDesc 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public async searchPlacesBySearchStringPlacesSearchPlacesStringGet(searchString?: string, page?: number, pageSize?: number, sortOn?: string, sortDesc?: boolean, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;












        // Path Params
        const localVarPath = '/places/search/places/string';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (searchString !== undefined) {
            requestContext.setQueryParam("search_string", ObjectSerializer.serialize(searchString, "string", ""));
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
        }

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("page_size", ObjectSerializer.serialize(pageSize, "number", ""));
        }

        // Query Params
        if (sortOn !== undefined) {
            requestContext.setQueryParam("sort_on", ObjectSerializer.serialize(sortOn, "string", ""));
        }

        // Query Params
        if (sortDesc !== undefined) {
            requestContext.setQueryParam("sort_desc", ObjectSerializer.serialize(sortDesc, "boolean", ""));
        }

        // Header Params
        requestContext.setHeaderParam("x-access-token", ObjectSerializer.serialize(xAccessToken, "string", ""));

        // Header Params
        requestContext.setHeaderParam("x-secret-token", ObjectSerializer.serialize(xSecretToken, "string", ""));

        // Header Params
        requestContext.setHeaderParam("authorization", ObjectSerializer.serialize(authorization, "string", ""));

        // Header Params
        requestContext.setHeaderParam("ehelply-active-participant", ObjectSerializer.serialize(ehelplyActiveParticipant, "string", ""));

        // Header Params
        requestContext.setHeaderParam("ehelply-project", ObjectSerializer.serialize(ehelplyProject, "string", ""));

        // Header Params
        requestContext.setHeaderParam("ehelply-data", ObjectSerializer.serialize(ehelplyData, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Search all places and returns paginated results with Places being stored in items field. Can search by `project_uuid, name, address, address_line_2, city, province_state, country, postal_zip_code, lat, lng email` string fields or the `is_public and is_deleted` boolean fields. To search with these fields use query params with string values. For sorting fill out \"sort_desc\" field with either true/false and the \"sort_on\" query parameter with column you want to sort on (ex: name). Max pagination items per page is 50. Item return format: ``` {     uuid                                **type:** string     project_uuid                        **type:** string or None      meta_uuid                           **type:** string or None      catalog_data                        **type:** dict or None      review_group_data                   **type:** dict or None      schedule_data                       **type:** dict or None      collection_data                     **type:** dict or None      blog_data                           **type:** dict or None      tags                                **type:** [TagBase] or None      categories                          **type:** [CategoryBase] or None      company                             **type:** CompanyBase or None      created_at                          **type:** string or None      updated_at                          **type:** string or None      deleted_at                          **type:** string or None  } ```
     * Search Places
     * @param projectUuid 
     * @param name 
     * @param addressLine1 
     * @param addressLine2 
     * @param city 
     * @param provinceState 
     * @param country 
     * @param postalZipCode 
     * @param lat 
     * @param lng 
     * @param email 
     * @param isPublic 
     * @param isDeleted 
     * @param withCompany 
     * @param withMeta 
     * @param withCatalog 
     * @param withReviews 
     * @param withSchedule 
     * @param withCollection 
     * @param withBlog 
     * @param withTags 
     * @param withCategories 
     * @param page 
     * @param pageSize 
     * @param sortOn 
     * @param sortDesc 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public async searchPlacesPlacesPlacesGet(projectUuid?: string, name?: string, addressLine1?: string, addressLine2?: string, city?: string, provinceState?: string, country?: string, postalZipCode?: string, lat?: string, lng?: string, email?: string, isPublic?: boolean, isDeleted?: boolean, withCompany?: boolean, withMeta?: boolean, withCatalog?: boolean, withReviews?: boolean, withSchedule?: boolean, withCollection?: boolean, withBlog?: boolean, withTags?: boolean, withCategories?: boolean, page?: number, pageSize?: number, sortOn?: string, sortDesc?: boolean, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

































        // Path Params
        const localVarPath = '/places/places';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (projectUuid !== undefined) {
            requestContext.setQueryParam("project_uuid", ObjectSerializer.serialize(projectUuid, "string", ""));
        }

        // Query Params
        if (name !== undefined) {
            requestContext.setQueryParam("name", ObjectSerializer.serialize(name, "string", ""));
        }

        // Query Params
        if (addressLine1 !== undefined) {
            requestContext.setQueryParam("address_line_1", ObjectSerializer.serialize(addressLine1, "string", ""));
        }

        // Query Params
        if (addressLine2 !== undefined) {
            requestContext.setQueryParam("address_line_2", ObjectSerializer.serialize(addressLine2, "string", ""));
        }

        // Query Params
        if (city !== undefined) {
            requestContext.setQueryParam("city", ObjectSerializer.serialize(city, "string", ""));
        }

        // Query Params
        if (provinceState !== undefined) {
            requestContext.setQueryParam("province_state", ObjectSerializer.serialize(provinceState, "string", ""));
        }

        // Query Params
        if (country !== undefined) {
            requestContext.setQueryParam("country", ObjectSerializer.serialize(country, "string", ""));
        }

        // Query Params
        if (postalZipCode !== undefined) {
            requestContext.setQueryParam("postal_zip_code", ObjectSerializer.serialize(postalZipCode, "string", ""));
        }

        // Query Params
        if (lat !== undefined) {
            requestContext.setQueryParam("lat", ObjectSerializer.serialize(lat, "string", ""));
        }

        // Query Params
        if (lng !== undefined) {
            requestContext.setQueryParam("lng", ObjectSerializer.serialize(lng, "string", ""));
        }

        // Query Params
        if (email !== undefined) {
            requestContext.setQueryParam("email", ObjectSerializer.serialize(email, "string", ""));
        }

        // Query Params
        if (isPublic !== undefined) {
            requestContext.setQueryParam("is_public", ObjectSerializer.serialize(isPublic, "boolean", ""));
        }

        // Query Params
        if (isDeleted !== undefined) {
            requestContext.setQueryParam("is_deleted", ObjectSerializer.serialize(isDeleted, "boolean", ""));
        }

        // Query Params
        if (withCompany !== undefined) {
            requestContext.setQueryParam("with_company", ObjectSerializer.serialize(withCompany, "boolean", ""));
        }

        // Query Params
        if (withMeta !== undefined) {
            requestContext.setQueryParam("with_meta", ObjectSerializer.serialize(withMeta, "boolean", ""));
        }

        // Query Params
        if (withCatalog !== undefined) {
            requestContext.setQueryParam("with_catalog", ObjectSerializer.serialize(withCatalog, "boolean", ""));
        }

        // Query Params
        if (withReviews !== undefined) {
            requestContext.setQueryParam("with_reviews", ObjectSerializer.serialize(withReviews, "boolean", ""));
        }

        // Query Params
        if (withSchedule !== undefined) {
            requestContext.setQueryParam("with_schedule", ObjectSerializer.serialize(withSchedule, "boolean", ""));
        }

        // Query Params
        if (withCollection !== undefined) {
            requestContext.setQueryParam("with_collection", ObjectSerializer.serialize(withCollection, "boolean", ""));
        }

        // Query Params
        if (withBlog !== undefined) {
            requestContext.setQueryParam("with_blog", ObjectSerializer.serialize(withBlog, "boolean", ""));
        }

        // Query Params
        if (withTags !== undefined) {
            requestContext.setQueryParam("with_tags", ObjectSerializer.serialize(withTags, "boolean", ""));
        }

        // Query Params
        if (withCategories !== undefined) {
            requestContext.setQueryParam("with_categories", ObjectSerializer.serialize(withCategories, "boolean", ""));
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
        }

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("page_size", ObjectSerializer.serialize(pageSize, "number", ""));
        }

        // Query Params
        if (sortOn !== undefined) {
            requestContext.setQueryParam("sort_on", ObjectSerializer.serialize(sortOn, "string", ""));
        }

        // Query Params
        if (sortDesc !== undefined) {
            requestContext.setQueryParam("sort_desc", ObjectSerializer.serialize(sortDesc, "boolean", ""));
        }

        // Header Params
        requestContext.setHeaderParam("x-access-token", ObjectSerializer.serialize(xAccessToken, "string", ""));

        // Header Params
        requestContext.setHeaderParam("x-secret-token", ObjectSerializer.serialize(xSecretToken, "string", ""));

        // Header Params
        requestContext.setHeaderParam("authorization", ObjectSerializer.serialize(authorization, "string", ""));

        // Header Params
        requestContext.setHeaderParam("ehelply-active-participant", ObjectSerializer.serialize(ehelplyActiveParticipant, "string", ""));

        // Header Params
        requestContext.setHeaderParam("ehelply-project", ObjectSerializer.serialize(ehelplyProject, "string", ""));

        // Header Params
        requestContext.setHeaderParam("ehelply-data", ObjectSerializer.serialize(ehelplyData, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update Place with given info, only updating the fields supplied. Place Uuid must be sent however.
     * Update Place
     * @param placeUuid 
     * @param placeBase 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public async updatePlacePlacesPlacesPlaceUuidPut(placeUuid: string, placeBase: PlaceBase, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'placeUuid' is not null or undefined
        if (placeUuid === null || placeUuid === undefined) {
            throw new RequiredError("PlacesApi", "updatePlacePlacesPlacesPlaceUuidPut", "placeUuid");
        }


        // verify required parameter 'placeBase' is not null or undefined
        if (placeBase === null || placeBase === undefined) {
            throw new RequiredError("PlacesApi", "updatePlacePlacesPlacesPlaceUuidPut", "placeBase");
        }








        // Path Params
        const localVarPath = '/places/places/{place_uuid}'
            .replace('{' + 'place_uuid' + '}', encodeURIComponent(String(placeUuid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("x-access-token", ObjectSerializer.serialize(xAccessToken, "string", ""));

        // Header Params
        requestContext.setHeaderParam("x-secret-token", ObjectSerializer.serialize(xSecretToken, "string", ""));

        // Header Params
        requestContext.setHeaderParam("authorization", ObjectSerializer.serialize(authorization, "string", ""));

        // Header Params
        requestContext.setHeaderParam("ehelply-active-participant", ObjectSerializer.serialize(ehelplyActiveParticipant, "string", ""));

        // Header Params
        requestContext.setHeaderParam("ehelply-project", ObjectSerializer.serialize(ehelplyProject, "string", ""));

        // Header Params
        requestContext.setHeaderParam("ehelply-data", ObjectSerializer.serialize(ehelplyData, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(placeBase, "PlaceBase", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class PlacesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createPlacePlacesPlacesPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createPlacePlacesPlacesPost(response: ResponseContext): Promise<PlaceResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PlaceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PlaceResponse", ""
            ) as PlaceResponse;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Route not found - Denied by eHelply", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(422, "Validation Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PlaceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PlaceResponse", ""
            ) as PlaceResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deletePlacePlacesPlacesPlaceUuidDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deletePlacePlacesPlacesPlaceUuidDelete(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Route not found - Denied by eHelply", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(422, "Validation Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to forwardGeocodingPlacesGeocodingForwardGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async forwardGeocodingPlacesGeocodingForwardGet(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Route not found - Denied by eHelply", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(422, "Validation Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPlacePlacesPlacesPlaceUuidGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPlacePlacesPlacesPlaceUuidGet(response: ResponseContext): Promise<PlaceResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PlaceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PlaceResponse", ""
            ) as PlaceResponse;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Route not found - Denied by eHelply", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(422, "Validation Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PlaceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PlaceResponse", ""
            ) as PlaceResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to reverseGeocodingPlacesGeocodingReverseGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async reverseGeocodingPlacesGeocodingReverseGet(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Route not found - Denied by eHelply", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(422, "Validation Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to searchPlacesBySearchStringPlacesSearchPlacesStringGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async searchPlacesBySearchStringPlacesSearchPlacesStringGet(response: ResponseContext): Promise<Page > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Page = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Page", ""
            ) as Page;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Route not found - Denied by eHelply", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(422, "Validation Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Page = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Page", ""
            ) as Page;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to searchPlacesPlacesPlacesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async searchPlacesPlacesPlacesGet(response: ResponseContext): Promise<Page > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Page = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Page", ""
            ) as Page;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Route not found - Denied by eHelply", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(422, "Validation Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Page = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Page", ""
            ) as Page;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updatePlacePlacesPlacesPlaceUuidPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updatePlacePlacesPlacesPlaceUuidPut(response: ResponseContext): Promise<PlaceResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PlaceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PlaceResponse", ""
            ) as PlaceResponse;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Route not found - Denied by eHelply", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(422, "Validation Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PlaceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PlaceResponse", ""
            ) as PlaceResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
