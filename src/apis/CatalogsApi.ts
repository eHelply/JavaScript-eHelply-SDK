/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.106
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.106
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    CatalogBase,
    CatalogBaseFromJSON,
    CatalogBaseToJSON,
    CatalogReturn,
    CatalogReturnFromJSON,
    CatalogReturnToJSON,
    HTTPValidationError,
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
    Page,
    PageFromJSON,
    PageToJSON,
} from '../models';

export interface AttachProductToCatalogRequest {
    catalogUuid: string;
    productUuid: string;
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

export interface CreateCatalogRequest {
    catalogBase: CatalogBase;
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

export interface DeleteCatalogRequest {
    catalogUuid: string;
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

export interface DetachProductFromCatalogRequest {
    catalogUuid: string;
    productUuid: string;
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

export interface GetCatalogRequest {
    catalogUuid: string;
    withMeta?: boolean;
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

export interface SearchCatalogProductsRequest {
    catalogUuid: string;
    withMeta?: boolean;
    page?: number;
    pageSize?: number;
    sortOn?: string;
    sortDesc?: boolean;
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

export interface SearchCatalogsRequest {
    withMeta?: boolean;
    name?: string;
    page?: number;
    pageSize?: number;
    sortOn?: string;
    sortDesc?: boolean;
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

export interface UpdateCatalogRequest {
    catalogUuid: string;
    catalogBase: CatalogBase;
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

/**
 * CatalogsApi - interface
 * 
 * @export
 * @interface CatalogsApiInterface
 */
export interface CatalogsApiInterface {
    /**
     * 
     * @summary Addproducttocatalog
     * @param {string} catalogUuid 
     * @param {string} productUuid 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CatalogsApiInterface
     */
    attachProductToCatalogRaw(requestParameters: AttachProductToCatalogRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<boolean>>;

    /**
     * Addproducttocatalog
     */
    attachProductToCatalog(requestParameters: AttachProductToCatalogRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<boolean>;

    /**
     * 
     * @summary Createcatalog
     * @param {CatalogBase} catalogBase 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CatalogsApiInterface
     */
    createCatalogRaw(requestParameters: CreateCatalogRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CatalogReturn>>;

    /**
     * Createcatalog
     */
    createCatalog(requestParameters: CreateCatalogRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CatalogReturn>;

    /**
     * 
     * @summary Deletecatalog
     * @param {string} catalogUuid 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CatalogsApiInterface
     */
    deleteCatalogRaw(requestParameters: DeleteCatalogRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<boolean>>;

    /**
     * Deletecatalog
     */
    deleteCatalog(requestParameters: DeleteCatalogRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<boolean>;

    /**
     * 
     * @summary Removeproductfromcatalog
     * @param {string} catalogUuid 
     * @param {string} productUuid 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CatalogsApiInterface
     */
    detachProductFromCatalogRaw(requestParameters: DetachProductFromCatalogRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<boolean>>;

    /**
     * Removeproductfromcatalog
     */
    detachProductFromCatalog(requestParameters: DetachProductFromCatalogRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<boolean>;

    /**
     * 
     * @summary Getcatalog
     * @param {string} catalogUuid 
     * @param {boolean} [withMeta] 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CatalogsApiInterface
     */
    getCatalogRaw(requestParameters: GetCatalogRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CatalogReturn>>;

    /**
     * Getcatalog
     */
    getCatalog(requestParameters: GetCatalogRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CatalogReturn>;

    /**
     * 
     * @summary Searchcatalogproducts
     * @param {string} catalogUuid 
     * @param {boolean} [withMeta] 
     * @param {number} [page] 
     * @param {number} [pageSize] 
     * @param {string} [sortOn] 
     * @param {boolean} [sortDesc] 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CatalogsApiInterface
     */
    searchCatalogProductsRaw(requestParameters: SearchCatalogProductsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Page>>;

    /**
     * Searchcatalogproducts
     */
    searchCatalogProducts(requestParameters: SearchCatalogProductsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Page>;

    /**
     * 
     * @summary Searchcatalogs
     * @param {boolean} [withMeta] 
     * @param {string} [name] 
     * @param {number} [page] 
     * @param {number} [pageSize] 
     * @param {string} [sortOn] 
     * @param {boolean} [sortDesc] 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CatalogsApiInterface
     */
    searchCatalogsRaw(requestParameters: SearchCatalogsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Page>>;

    /**
     * Searchcatalogs
     */
    searchCatalogs(requestParameters: SearchCatalogsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Page>;

    /**
     * 
     * @summary Updatecatalog
     * @param {string} catalogUuid 
     * @param {CatalogBase} catalogBase 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CatalogsApiInterface
     */
    updateCatalogRaw(requestParameters: UpdateCatalogRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CatalogReturn>>;

    /**
     * Updatecatalog
     */
    updateCatalog(requestParameters: UpdateCatalogRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CatalogReturn>;

}

/**
 * 
 */
export class CatalogsApi extends runtime.BaseAPI implements CatalogsApiInterface {

    /**
     * Addproducttocatalog
     */
    async attachProductToCatalogRaw(requestParameters: AttachProductToCatalogRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<boolean>> {
        if (requestParameters.catalogUuid === null || requestParameters.catalogUuid === undefined) {
            throw new runtime.RequiredError('catalogUuid','Required parameter requestParameters.catalogUuid was null or undefined when calling attachProductToCatalog.');
        }

        if (requestParameters.productUuid === null || requestParameters.productUuid === undefined) {
            throw new runtime.RequiredError('productUuid','Required parameter requestParameters.productUuid was null or undefined when calling attachProductToCatalog.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xAccessToken !== undefined && requestParameters.xAccessToken !== null) {
            headerParameters['x-access-token'] = String(requestParameters.xAccessToken);
        }

        if (requestParameters.xSecretToken !== undefined && requestParameters.xSecretToken !== null) {
            headerParameters['x-secret-token'] = String(requestParameters.xSecretToken);
        }

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['authorization'] = String(requestParameters.authorization);
        }

        if (requestParameters.ehelplyActiveParticipant !== undefined && requestParameters.ehelplyActiveParticipant !== null) {
            headerParameters['ehelply-active-participant'] = String(requestParameters.ehelplyActiveParticipant);
        }

        if (requestParameters.ehelplyProject !== undefined && requestParameters.ehelplyProject !== null) {
            headerParameters['ehelply-project'] = String(requestParameters.ehelplyProject);
        }

        if (requestParameters.ehelplyData !== undefined && requestParameters.ehelplyData !== null) {
            headerParameters['ehelply-data'] = String(requestParameters.ehelplyData);
        }

        const response = await this.request({
            path: `/products/catalogs/{catalog_uuid}/products/{product_uuid}`.replace(`{${"catalog_uuid"}}`, encodeURIComponent(String(requestParameters.catalogUuid))).replace(`{${"product_uuid"}}`, encodeURIComponent(String(requestParameters.productUuid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Addproducttocatalog
     */
    async attachProductToCatalog(requestParameters: AttachProductToCatalogRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<boolean> {
        const response = await this.attachProductToCatalogRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Createcatalog
     */
    async createCatalogRaw(requestParameters: CreateCatalogRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CatalogReturn>> {
        if (requestParameters.catalogBase === null || requestParameters.catalogBase === undefined) {
            throw new runtime.RequiredError('catalogBase','Required parameter requestParameters.catalogBase was null or undefined when calling createCatalog.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xAccessToken !== undefined && requestParameters.xAccessToken !== null) {
            headerParameters['x-access-token'] = String(requestParameters.xAccessToken);
        }

        if (requestParameters.xSecretToken !== undefined && requestParameters.xSecretToken !== null) {
            headerParameters['x-secret-token'] = String(requestParameters.xSecretToken);
        }

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['authorization'] = String(requestParameters.authorization);
        }

        if (requestParameters.ehelplyActiveParticipant !== undefined && requestParameters.ehelplyActiveParticipant !== null) {
            headerParameters['ehelply-active-participant'] = String(requestParameters.ehelplyActiveParticipant);
        }

        if (requestParameters.ehelplyProject !== undefined && requestParameters.ehelplyProject !== null) {
            headerParameters['ehelply-project'] = String(requestParameters.ehelplyProject);
        }

        if (requestParameters.ehelplyData !== undefined && requestParameters.ehelplyData !== null) {
            headerParameters['ehelply-data'] = String(requestParameters.ehelplyData);
        }

        const response = await this.request({
            path: `/products/catalogs`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CatalogBaseToJSON(requestParameters.catalogBase),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CatalogReturnFromJSON(jsonValue));
    }

    /**
     * Createcatalog
     */
    async createCatalog(requestParameters: CreateCatalogRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CatalogReturn> {
        const response = await this.createCatalogRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletecatalog
     */
    async deleteCatalogRaw(requestParameters: DeleteCatalogRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<boolean>> {
        if (requestParameters.catalogUuid === null || requestParameters.catalogUuid === undefined) {
            throw new runtime.RequiredError('catalogUuid','Required parameter requestParameters.catalogUuid was null or undefined when calling deleteCatalog.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xAccessToken !== undefined && requestParameters.xAccessToken !== null) {
            headerParameters['x-access-token'] = String(requestParameters.xAccessToken);
        }

        if (requestParameters.xSecretToken !== undefined && requestParameters.xSecretToken !== null) {
            headerParameters['x-secret-token'] = String(requestParameters.xSecretToken);
        }

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['authorization'] = String(requestParameters.authorization);
        }

        if (requestParameters.ehelplyActiveParticipant !== undefined && requestParameters.ehelplyActiveParticipant !== null) {
            headerParameters['ehelply-active-participant'] = String(requestParameters.ehelplyActiveParticipant);
        }

        if (requestParameters.ehelplyProject !== undefined && requestParameters.ehelplyProject !== null) {
            headerParameters['ehelply-project'] = String(requestParameters.ehelplyProject);
        }

        if (requestParameters.ehelplyData !== undefined && requestParameters.ehelplyData !== null) {
            headerParameters['ehelply-data'] = String(requestParameters.ehelplyData);
        }

        const response = await this.request({
            path: `/products/catalogs/{catalog_uuid}`.replace(`{${"catalog_uuid"}}`, encodeURIComponent(String(requestParameters.catalogUuid))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Deletecatalog
     */
    async deleteCatalog(requestParameters: DeleteCatalogRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<boolean> {
        const response = await this.deleteCatalogRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Removeproductfromcatalog
     */
    async detachProductFromCatalogRaw(requestParameters: DetachProductFromCatalogRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<boolean>> {
        if (requestParameters.catalogUuid === null || requestParameters.catalogUuid === undefined) {
            throw new runtime.RequiredError('catalogUuid','Required parameter requestParameters.catalogUuid was null or undefined when calling detachProductFromCatalog.');
        }

        if (requestParameters.productUuid === null || requestParameters.productUuid === undefined) {
            throw new runtime.RequiredError('productUuid','Required parameter requestParameters.productUuid was null or undefined when calling detachProductFromCatalog.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xAccessToken !== undefined && requestParameters.xAccessToken !== null) {
            headerParameters['x-access-token'] = String(requestParameters.xAccessToken);
        }

        if (requestParameters.xSecretToken !== undefined && requestParameters.xSecretToken !== null) {
            headerParameters['x-secret-token'] = String(requestParameters.xSecretToken);
        }

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['authorization'] = String(requestParameters.authorization);
        }

        if (requestParameters.ehelplyActiveParticipant !== undefined && requestParameters.ehelplyActiveParticipant !== null) {
            headerParameters['ehelply-active-participant'] = String(requestParameters.ehelplyActiveParticipant);
        }

        if (requestParameters.ehelplyProject !== undefined && requestParameters.ehelplyProject !== null) {
            headerParameters['ehelply-project'] = String(requestParameters.ehelplyProject);
        }

        if (requestParameters.ehelplyData !== undefined && requestParameters.ehelplyData !== null) {
            headerParameters['ehelply-data'] = String(requestParameters.ehelplyData);
        }

        const response = await this.request({
            path: `/products/catalogs/{catalog_uuid}/products/{product_uuid}`.replace(`{${"catalog_uuid"}}`, encodeURIComponent(String(requestParameters.catalogUuid))).replace(`{${"product_uuid"}}`, encodeURIComponent(String(requestParameters.productUuid))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Removeproductfromcatalog
     */
    async detachProductFromCatalog(requestParameters: DetachProductFromCatalogRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<boolean> {
        const response = await this.detachProductFromCatalogRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Getcatalog
     */
    async getCatalogRaw(requestParameters: GetCatalogRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CatalogReturn>> {
        if (requestParameters.catalogUuid === null || requestParameters.catalogUuid === undefined) {
            throw new runtime.RequiredError('catalogUuid','Required parameter requestParameters.catalogUuid was null or undefined when calling getCatalog.');
        }

        const queryParameters: any = {};

        if (requestParameters.withMeta !== undefined) {
            queryParameters['with_meta'] = requestParameters.withMeta;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xAccessToken !== undefined && requestParameters.xAccessToken !== null) {
            headerParameters['x-access-token'] = String(requestParameters.xAccessToken);
        }

        if (requestParameters.xSecretToken !== undefined && requestParameters.xSecretToken !== null) {
            headerParameters['x-secret-token'] = String(requestParameters.xSecretToken);
        }

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['authorization'] = String(requestParameters.authorization);
        }

        if (requestParameters.ehelplyActiveParticipant !== undefined && requestParameters.ehelplyActiveParticipant !== null) {
            headerParameters['ehelply-active-participant'] = String(requestParameters.ehelplyActiveParticipant);
        }

        if (requestParameters.ehelplyProject !== undefined && requestParameters.ehelplyProject !== null) {
            headerParameters['ehelply-project'] = String(requestParameters.ehelplyProject);
        }

        if (requestParameters.ehelplyData !== undefined && requestParameters.ehelplyData !== null) {
            headerParameters['ehelply-data'] = String(requestParameters.ehelplyData);
        }

        const response = await this.request({
            path: `/products/catalogs/{catalog_uuid}`.replace(`{${"catalog_uuid"}}`, encodeURIComponent(String(requestParameters.catalogUuid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CatalogReturnFromJSON(jsonValue));
    }

    /**
     * Getcatalog
     */
    async getCatalog(requestParameters: GetCatalogRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CatalogReturn> {
        const response = await this.getCatalogRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Searchcatalogproducts
     */
    async searchCatalogProductsRaw(requestParameters: SearchCatalogProductsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Page>> {
        if (requestParameters.catalogUuid === null || requestParameters.catalogUuid === undefined) {
            throw new runtime.RequiredError('catalogUuid','Required parameter requestParameters.catalogUuid was null or undefined when calling searchCatalogProducts.');
        }

        const queryParameters: any = {};

        if (requestParameters.withMeta !== undefined) {
            queryParameters['with_meta'] = requestParameters.withMeta;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['page_size'] = requestParameters.pageSize;
        }

        if (requestParameters.sortOn !== undefined) {
            queryParameters['sort_on'] = requestParameters.sortOn;
        }

        if (requestParameters.sortDesc !== undefined) {
            queryParameters['sort_desc'] = requestParameters.sortDesc;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xAccessToken !== undefined && requestParameters.xAccessToken !== null) {
            headerParameters['x-access-token'] = String(requestParameters.xAccessToken);
        }

        if (requestParameters.xSecretToken !== undefined && requestParameters.xSecretToken !== null) {
            headerParameters['x-secret-token'] = String(requestParameters.xSecretToken);
        }

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['authorization'] = String(requestParameters.authorization);
        }

        if (requestParameters.ehelplyActiveParticipant !== undefined && requestParameters.ehelplyActiveParticipant !== null) {
            headerParameters['ehelply-active-participant'] = String(requestParameters.ehelplyActiveParticipant);
        }

        if (requestParameters.ehelplyProject !== undefined && requestParameters.ehelplyProject !== null) {
            headerParameters['ehelply-project'] = String(requestParameters.ehelplyProject);
        }

        if (requestParameters.ehelplyData !== undefined && requestParameters.ehelplyData !== null) {
            headerParameters['ehelply-data'] = String(requestParameters.ehelplyData);
        }

        const response = await this.request({
            path: `/products/catalogs/{catalog_uuid}/products`.replace(`{${"catalog_uuid"}}`, encodeURIComponent(String(requestParameters.catalogUuid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PageFromJSON(jsonValue));
    }

    /**
     * Searchcatalogproducts
     */
    async searchCatalogProducts(requestParameters: SearchCatalogProductsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Page> {
        const response = await this.searchCatalogProductsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Searchcatalogs
     */
    async searchCatalogsRaw(requestParameters: SearchCatalogsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Page>> {
        const queryParameters: any = {};

        if (requestParameters.withMeta !== undefined) {
            queryParameters['with_meta'] = requestParameters.withMeta;
        }

        if (requestParameters.name !== undefined) {
            queryParameters['name'] = requestParameters.name;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['page_size'] = requestParameters.pageSize;
        }

        if (requestParameters.sortOn !== undefined) {
            queryParameters['sort_on'] = requestParameters.sortOn;
        }

        if (requestParameters.sortDesc !== undefined) {
            queryParameters['sort_desc'] = requestParameters.sortDesc;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xAccessToken !== undefined && requestParameters.xAccessToken !== null) {
            headerParameters['x-access-token'] = String(requestParameters.xAccessToken);
        }

        if (requestParameters.xSecretToken !== undefined && requestParameters.xSecretToken !== null) {
            headerParameters['x-secret-token'] = String(requestParameters.xSecretToken);
        }

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['authorization'] = String(requestParameters.authorization);
        }

        if (requestParameters.ehelplyActiveParticipant !== undefined && requestParameters.ehelplyActiveParticipant !== null) {
            headerParameters['ehelply-active-participant'] = String(requestParameters.ehelplyActiveParticipant);
        }

        if (requestParameters.ehelplyProject !== undefined && requestParameters.ehelplyProject !== null) {
            headerParameters['ehelply-project'] = String(requestParameters.ehelplyProject);
        }

        if (requestParameters.ehelplyData !== undefined && requestParameters.ehelplyData !== null) {
            headerParameters['ehelply-data'] = String(requestParameters.ehelplyData);
        }

        const response = await this.request({
            path: `/products/catalogs`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PageFromJSON(jsonValue));
    }

    /**
     * Searchcatalogs
     */
    async searchCatalogs(requestParameters: SearchCatalogsRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Page> {
        const response = await this.searchCatalogsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updatecatalog
     */
    async updateCatalogRaw(requestParameters: UpdateCatalogRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CatalogReturn>> {
        if (requestParameters.catalogUuid === null || requestParameters.catalogUuid === undefined) {
            throw new runtime.RequiredError('catalogUuid','Required parameter requestParameters.catalogUuid was null or undefined when calling updateCatalog.');
        }

        if (requestParameters.catalogBase === null || requestParameters.catalogBase === undefined) {
            throw new runtime.RequiredError('catalogBase','Required parameter requestParameters.catalogBase was null or undefined when calling updateCatalog.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xAccessToken !== undefined && requestParameters.xAccessToken !== null) {
            headerParameters['x-access-token'] = String(requestParameters.xAccessToken);
        }

        if (requestParameters.xSecretToken !== undefined && requestParameters.xSecretToken !== null) {
            headerParameters['x-secret-token'] = String(requestParameters.xSecretToken);
        }

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['authorization'] = String(requestParameters.authorization);
        }

        if (requestParameters.ehelplyActiveParticipant !== undefined && requestParameters.ehelplyActiveParticipant !== null) {
            headerParameters['ehelply-active-participant'] = String(requestParameters.ehelplyActiveParticipant);
        }

        if (requestParameters.ehelplyProject !== undefined && requestParameters.ehelplyProject !== null) {
            headerParameters['ehelply-project'] = String(requestParameters.ehelplyProject);
        }

        if (requestParameters.ehelplyData !== undefined && requestParameters.ehelplyData !== null) {
            headerParameters['ehelply-data'] = String(requestParameters.ehelplyData);
        }

        const response = await this.request({
            path: `/products/catalogs/{catalog_uuid}`.replace(`{${"catalog_uuid"}}`, encodeURIComponent(String(requestParameters.catalogUuid))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CatalogBaseToJSON(requestParameters.catalogBase),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CatalogReturnFromJSON(jsonValue));
    }

    /**
     * Updatecatalog
     */
    async updateCatalog(requestParameters: UpdateCatalogRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CatalogReturn> {
        const response = await this.updateCatalogRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
