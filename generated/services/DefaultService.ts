/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Category } from '../models/Category';
import type { CommentEntity } from '../models/CommentEntity';
import type { CreateCommentDto } from '../models/CreateCommentDto';
import type { CreateDocumentDto } from '../models/CreateDocumentDto';
import type { DocumentEntity } from '../models/DocumentEntity';
import type { RefreshTokenDto } from '../models/RefreshTokenDto';
import type { SendCodeDto } from '../models/SendCodeDto';
import type { SignInUserDto } from '../models/SignInUserDto';
import type { Subcategory } from '../models/Subcategory';
import type { UpdateUserDto } from '../models/UpdateUserDto';
import type { User } from '../models/User';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {

    /**
     * @returns string
     * @throws ApiError
     */
    public static appControllerGetHello(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/',
        });
    }

    /**
     * @returns string
     * @throws ApiError
     */
    public static coffeesControllerFindAll(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/coffees',
        });
    }

    /**
     * @param id
     * @returns string
     * @throws ApiError
     */
    public static coffeesControllerFindOne(
        id: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/coffees/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @returns Subcategory
     * @throws ApiError
     */
    public static subcategoriesControllerFindAll(): CancelablePromise<Array<Subcategory>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subcategories',
        });
    }

    /**
     * @param categoryId
     * @returns Subcategory
     * @throws ApiError
     */
    public static subcategoriesControllerFindByCategoryId(
        categoryId: string,
    ): CancelablePromise<Array<Subcategory>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subcategories/byCategory/{categoryId}',
            path: {
                'categoryId': categoryId,
            },
        });
    }

    /**
     * @param categoryName
     * @returns string
     * @throws ApiError
     */
    public static subcategoriesControllerFindIdByName(
        categoryName: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subcategories/idByName/{categoryName}',
            path: {
                'categoryName': categoryName,
            },
        });
    }

    /**
     * @param slug
     * @returns Subcategory
     * @throws ApiError
     */
    public static subcategoriesControllerFindBySlug(
        slug: string,
    ): CancelablePromise<Subcategory> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subcategories/bySlug/{slug}',
            path: {
                'slug': slug,
            },
        });
    }

    /**
     * @param id
     * @returns Subcategory
     * @throws ApiError
     */
    public static subcategoriesControllerFindById(
        id: string,
    ): CancelablePromise<Subcategory> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subcategories/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param requestBody
     * @returns boolean
     * @throws ApiError
     */
    public static authControllerSendCode(
        requestBody: SendCodeDto,
    ): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/signup',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static authControllerLogin(
        requestBody: SignInUserDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static authControllerRefreshTokens(
        requestBody: RefreshTokenDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/refresh-token',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns DocumentEntity
     * @throws ApiError
     */
    public static documentsControllerFindAll(): CancelablePromise<Array<DocumentEntity>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/documents',
        });
    }

    /**
     * @param requestBody
     * @returns DocumentEntity
     * @throws ApiError
     */
    public static documentsControllerCreate(
        requestBody: CreateDocumentDto,
    ): CancelablePromise<DocumentEntity> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/documents',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id
     * @returns DocumentEntity
     * @throws ApiError
     */
    public static documentsControllerFindOne(
        id: string,
    ): CancelablePromise<Array<DocumentEntity>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/documents/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id
     * @returns DocumentEntity
     * @throws ApiError
     */
    public static documentsControllerUpdate(
        id: string,
    ): CancelablePromise<DocumentEntity> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/documents/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id
     * @returns DocumentEntity
     * @throws ApiError
     */
    public static documentsControllerRemove(
        id: string,
    ): CancelablePromise<DocumentEntity> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/documents/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @returns Category
     * @throws ApiError
     */
    public static categoriesControllerFindAll(): CancelablePromise<Array<Category>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/categories',
        });
    }

    /**
     * @param id
     * @returns Category
     * @throws ApiError
     */
    public static categoriesControllerFindOne(
        id: string,
    ): CancelablePromise<Category> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/categories/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param categoryName
     * @returns Subcategory
     * @throws ApiError
     */
    public static categoriesControllerFindIdByName(
        categoryName: string,
    ): CancelablePromise<Array<Subcategory>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/categories/idByName/{categoryName}',
            path: {
                'categoryName': categoryName,
            },
        });
    }

    /**
     * @param slug
     * @returns Category
     * @throws ApiError
     */
    public static categoriesControllerFindBySlug(
        slug: string,
    ): CancelablePromise<Category> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/categories/byCategorySlug/{slug}',
            path: {
                'slug': slug,
            },
        });
    }

    /**
     * @param requestBody
     * @returns User
     * @throws ApiError
     */
    public static usersControllerCreate(
        requestBody: string,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns string
     * @throws ApiError
     */
    public static usersControllerFindAll(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users',
        });
    }

    /**
     * @param id
     * @returns string
     * @throws ApiError
     */
    public static usersControllerFindOne(
        id: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id
     * @param requestBody
     * @returns string
     * @throws ApiError
     */
    public static usersControllerUpdate(
        id: string,
        requestBody: UpdateUserDto,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/users/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id
     * @returns string
     * @throws ApiError
     */
    public static usersControllerRemove(
        id: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/users/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @returns CommentEntity
     * @throws ApiError
     */
    public static commentControllerGetComments(): CancelablePromise<Array<CommentEntity>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/comment',
        });
    }

    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static commentControllerCreateComment(
        requestBody: CreateCommentDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/comment',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id
     * @returns CommentEntity
     * @throws ApiError
     */
    public static commentControllerGetCommentById(
        id: string,
    ): CancelablePromise<Array<CommentEntity>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/comment/subcategory/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id
     * @returns CommentEntity
     * @throws ApiError
     */
    public static commentControllerAddLikeToComment(
        id: string,
    ): CancelablePromise<CommentEntity> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/comment/{id}/like',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id
     * @returns CommentEntity
     * @throws ApiError
     */
    public static commentControllerRemoveLikeFromComment(
        id: string,
    ): CancelablePromise<CommentEntity> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/comment/{id}/unlike',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id
     * @returns number
     * @throws ApiError
     */
    public static commentControllerGetLikesCount(
        id: string,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/comment/{id}/likes',
            path: {
                'id': id,
            },
        });
    }

}
