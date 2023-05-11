/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Subcategory } from './Subcategory';
import type { User } from './User';

export type CommentEntity = {
    id: string;
    text: string;
    commentableId: string;
    commentableType: CommentEntity.commentableType;
    firstName: string;
    likes: number;
    dislikes: number;
    createdAt: string;
    user: User;
    subcategory: Subcategory;
};

export namespace CommentEntity {

    export enum commentableType {
        SUB_CATEGORY = 'subCategory',
    }


}

