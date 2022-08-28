/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.112
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.112
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    HTTPValidationError,
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
    Page,
    PageFromJSON,
    PageToJSON,
    ProductBase,
    ProductBaseFromJSON,
    ProductBaseToJSON,
    ProductReturn,
    ProductReturnFromJSON,
    ProductReturnToJSON,
} from '../models';

export interface CreateProductRequest {
    productBase: ProductBase;
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

export interface DeleteProductRequest {
    productUuid: string;
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

export interface GetProductRequest {
    productUuid: string;
    withAddons?: boolean;
    withMeta?: boolean;
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

export interface SearchProductCatalogRequest {
    productUuid: string;
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

export interface SearchProductsRequest {
    withMeta?: boolean;
    name?: string;
    addons?: Array<string>;
    priceMax?: number;
    priceMin?: number;
    quantityAvailable?: boolean;
    isDeleted?: boolean;
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

export interface UpdateProductRequest {
    productUuid: string;
    productBase: ProductBase;
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

/**
 * ProductsApi - interface
 * 
 * @export
 * @interface ProductsApiInterface
 */
export interface ProductsApiInterface {
    /**
     * 
     * @summary Createproduct
     * @param {ProductBase} productBase 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductsApiInterface
     */
    createProductRaw(requestParameters: CreateProductRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ProductReturn>>;

    /**
     * Createproduct
     */
    createProduct(requestParameters: CreateProductRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ProductReturn>;

    /**
     * 
     * @summary Deleteproduct
     * @param {string} productUuid 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductsApiInterface
     */
    deleteProductRaw(requestParameters: DeleteProductRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<boolean>>;

    /**
     * Deleteproduct
     */
    deleteProduct(requestParameters: DeleteProductRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<boolean>;

    /**
     * 
     * @summary Getproduct
     * @param {string} productUuid 
     * @param {boolean} [withAddons] 
     * @param {boolean} [withMeta] 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductsApiInterface
     */
    getProductRaw(requestParameters: GetProductRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ProductReturn>>;

    /**
     * Getproduct
     */
    getProduct(requestParameters: GetProductRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ProductReturn>;

    /**
     * 
     * @summary Searchproductcatalog
     * @param {string} productUuid 
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
     * @memberof ProductsApiInterface
     */
    searchProductCatalogRaw(requestParameters: SearchProductCatalogRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Page>>;

    /**
     * Searchproductcatalog
     */
    searchProductCatalog(requestParameters: SearchProductCatalogRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Page>;

    /**
     * 
     * @summary Searchproducts
     * @param {boolean} [withMeta] 
     * @param {string} [name] 
     * @param {Array<string>} [addons] 
     * @param {number} [priceMax] 
     * @param {number} [priceMin] 
     * @param {boolean} [quantityAvailable] 
     * @param {boolean} [isDeleted] 
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
     * @memberof ProductsApiInterface
     */
    searchProductsRaw(requestParameters: SearchProductsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Page>>;

    /**
     * Searchproducts
     */
    searchProducts(requestParameters: SearchProductsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Page>;

    /**
     * 
     * @summary Updateproduct
     * @param {string} productUuid 
     * @param {ProductBase} productBase 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductsApiInterface
     */
    updateProductRaw(requestParameters: UpdateProductRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ProductReturn>>;

    /**
     * Updateproduct
     */
    updateProduct(requestParameters: UpdateProductRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ProductReturn>;

}

/**
 * 
 */
export class ProductsApi extends runtime.BaseAPI implements ProductsApiInterface {

    /**
     * Createproduct
     */
    async createProductRaw(requestParameters: CreateProductRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ProductReturn>> {
        if (requestParameters.productBase === null || requestParameters.productBase === undefined) {
            throw new runtime.RequiredError('productBase','Required parameter requestParameters.productBase was null or undefined when calling createProduct.');
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
            path: `/products/products`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ProductBaseToJSON(requestParameters.productBase),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductReturnFromJSON(jsonValue));
    }

    /**
     * Createproduct
     */
    async createProduct(requestParameters: CreateProductRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ProductReturn> {
        const response = await this.createProductRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deleteproduct
     */
    async deleteProductRaw(requestParameters: DeleteProductRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<boolean>> {
        if (requestParameters.productUuid === null || requestParameters.productUuid === undefined) {
            throw new runtime.RequiredError('productUuid','Required parameter requestParameters.productUuid was null or undefined when calling deleteProduct.');
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
            path: `/products/products/{product_uuid}`.replace(`{${"product_uuid"}}`, encodeURIComponent(String(requestParameters.productUuid))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Deleteproduct
     */
    async deleteProduct(requestParameters: DeleteProductRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<boolean> {
        const response = await this.deleteProductRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Getproduct
     */
    async getProductRaw(requestParameters: GetProductRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ProductReturn>> {
        if (requestParameters.productUuid === null || requestParameters.productUuid === undefined) {
            throw new runtime.RequiredError('productUuid','Required parameter requestParameters.productUuid was null or undefined when calling getProduct.');
        }

        const queryParameters: any = {};

        if (requestParameters.withAddons !== undefined) {
            queryParameters['with_addons'] = requestParameters.withAddons;
        }

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
            path: `/products/products/{product_uuid}`.replace(`{${"product_uuid"}}`, encodeURIComponent(String(requestParameters.productUuid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductReturnFromJSON(jsonValue));
    }

    /**
     * Getproduct
     */
    async getProduct(requestParameters: GetProductRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ProductReturn> {
        const response = await this.getProductRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Searchproductcatalog
     */
    async searchProductCatalogRaw(requestParameters: SearchProductCatalogRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Page>> {
        if (requestParameters.productUuid === null || requestParameters.productUuid === undefined) {
            throw new runtime.RequiredError('productUuid','Required parameter requestParameters.productUuid was null or undefined when calling searchProductCatalog.');
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
            path: `/products/products/{product_uuid}/catalogs`.replace(`{${"product_uuid"}}`, encodeURIComponent(String(requestParameters.productUuid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PageFromJSON(jsonValue));
    }

    /**
     * Searchproductcatalog
     */
    async searchProductCatalog(requestParameters: SearchProductCatalogRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Page> {
        const response = await this.searchProductCatalogRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Searchproducts
     */
    async searchProductsRaw(requestParameters: SearchProductsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Page>> {
        const queryParameters: any = {};

        if (requestParameters.withMeta !== undefined) {
            queryParameters['with_meta'] = requestParameters.withMeta;
        }

        if (requestParameters.name !== undefined) {
            queryParameters['name'] = requestParameters.name;
        }

        if (requestParameters.addons) {
            queryParameters['addons'] = requestParameters.addons;
        }

        if (requestParameters.priceMax !== undefined) {
            queryParameters['price_max'] = requestParameters.priceMax;
        }

        if (requestParameters.priceMin !== undefined) {
            queryParameters['price_min'] = requestParameters.priceMin;
        }

        if (requestParameters.quantityAvailable !== undefined) {
            queryParameters['quantity_available'] = requestParameters.quantityAvailable;
        }

        if (requestParameters.isDeleted !== undefined) {
            queryParameters['is_deleted'] = requestParameters.isDeleted;
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
            path: `/products/products`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PageFromJSON(jsonValue));
    }

    /**
     * Searchproducts
     */
    async searchProducts(requestParameters: SearchProductsRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Page> {
        const response = await this.searchProductsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updateproduct
     */
    async updateProductRaw(requestParameters: UpdateProductRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ProductReturn>> {
        if (requestParameters.productUuid === null || requestParameters.productUuid === undefined) {
            throw new runtime.RequiredError('productUuid','Required parameter requestParameters.productUuid was null or undefined when calling updateProduct.');
        }

        if (requestParameters.productBase === null || requestParameters.productBase === undefined) {
            throw new runtime.RequiredError('productBase','Required parameter requestParameters.productBase was null or undefined when calling updateProduct.');
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
            path: `/products/products/{product_uuid}`.replace(`{${"product_uuid"}}`, encodeURIComponent(String(requestParameters.productUuid))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ProductBaseToJSON(requestParameters.productBase),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductReturnFromJSON(jsonValue));
    }

    /**
     * Updateproduct
     */
    async updateProduct(requestParameters: UpdateProductRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ProductReturn> {
        const response = await this.updateProductRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
