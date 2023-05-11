/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CommentEntity } from './CommentEntity';
import type { DocumentEntity } from './DocumentEntity';
import type { Otp } from './Otp';

export type User = {
    id: string;
    phone: string;
    firstName: string;
    lastName: string;
    email: string;
    otpCodes: Array<Otp>;
    docs: Array<DocumentEntity>;
    role: User.role;
    comments: Array<CommentEntity>;
};

export namespace User {

    export enum role {
        REGULAR = 'regular',
        ADMIN = 'admin',
    }


}

