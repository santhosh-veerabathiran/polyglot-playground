import { IRouteConfig } from '@workspace/interfaces';

export enum DatabasePattern {
    GetUsers = 'GET_USERS',
    GetUser = 'GET_USER',
    CreateUser = 'CREATE_USER',
    UpdateUser = 'UPDATE_USER',
    DeleteUser = 'DELETE_USER',
    TypeORMGetUsers = 'TYPEORM_GET_USERS',
    TypeORMGetUser = 'TYPEORM_GET_USER',
    TypeORMCreateUser = 'TYPEORM_CREATE_USER',
    TypeORMUpdateUser = 'TYPEORM_UPDATE_USER',
    TypeORMDeleteUser = 'TYPEORM_DELETE_USER',
}

export const databaseRouteConfigs: IRouteConfig[] = [
    {
        header: 'DATABASE_GET_USERS',
        paths: [
            {
                pattern: DatabasePattern.GetUsers,
                key: 'users',
                sync: true,
            },
        ],
    },
    {
        header: 'DATABASE_GET_USER',
        paths: [
            {
                pattern: DatabasePattern.GetUser,
                key: 'user',
                sync: true,
            },
        ],
    },
    {
        header: 'DATABASE_CREATE_USER',
        paths: [
            {
                pattern: DatabasePattern.CreateUser,
                key: 'user',
                sync: true,
            },
        ],
    },
    {
        header: 'DATABASE_UPDATE_USER',
        paths: [
            {
                pattern: DatabasePattern.UpdateUser,
                key: 'user',
                sync: true,
            },
        ],
    },
    {
        header: 'DATABASE_DELETE_USER',
        paths: [
            {
                pattern: DatabasePattern.DeleteUser,
                key: 'user',
                sync: true,
            },
        ],
    },
    {
        header: 'DATABASE_TYPEORM_GET_USERS',
        paths: [
            {
                pattern: DatabasePattern.TypeORMGetUsers,
                key: 'users',
                sync: true,
            },
        ],
    },
    {
        header: 'DATABASE_TYPEORM_GET_USER',
        paths: [
            {
                pattern: DatabasePattern.TypeORMGetUser,
                key: 'user',
                sync: true,
            },
        ],
    },
    {
        header: 'DATABASE_TYPEORM_CREATE_USER',
        paths: [
            {
                pattern: DatabasePattern.TypeORMCreateUser,
                key: 'user',
                sync: true,
            },
        ],
    },
    {
        header: 'DATABASE_TYPEORM_UPDATE_USER',
        paths: [
            {
                pattern: DatabasePattern.TypeORMUpdateUser,
                key: 'user',
                sync: true,
            },
        ],
    },
    {
        header: 'DATABASE_TYPEORM_DELETE_USER',
        paths: [
            {
                pattern: DatabasePattern.TypeORMDeleteUser,
                key: 'user',
                sync: true,
            },
        ],
    },
];
