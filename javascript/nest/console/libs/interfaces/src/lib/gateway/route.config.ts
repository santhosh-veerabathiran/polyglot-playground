import { IResponse } from './response';

export interface IRouteConfig {
    header: string;
    paths: IRoutePath[];
    active?: boolean;
    inputTransformer?: (payload: any) => any;
    outputTransformer?: (payload: any) => IParentResponses;
}

export interface IRoutePath {
    pattern: string;
    key: string;
    sync: boolean;
    executeOnCondition?: (payload: any, parentResponses: IParentResponses) => boolean;
    inputTransformer?: (payload: any, parentResponses: IParentResponses) => any;
    outputTransformer?: (payload: any, parentResponses: IParentResponses) => IResponse<unknown>;
    executeAfterKeys?: string[];
}

export interface ICompletedPaths {
    [key: string]: { config: IRoutePath; response?: Promise<IResponse<unknown>> };
}

export interface IParentResponses {
    [key: string]: IResponse<unknown>;
}
