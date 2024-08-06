// This file was generated by basehub. Do not edit directly. Read more: https://basehub.com/docs/api-reference/basehub-sdk

/* eslint-disable */
/* eslint-disable eslint-comments/no-restricted-disable */
/* tslint:disable */
// @ts-nocheck

import * as React from "react";
import { basehub, type QueryGenqlSelection as PumpQuery, type QueryResult } from "../index";
export { PumpQuery };
export type PumpProps<Queries extends Array<PumpQuery>> = {
    children: (data: QueryResults<Queries>) => React.ReactNode | Promise<React.ReactNode>;
    queries: [...Queries];
} & Parameters<typeof basehub>[0];
export type QueryResults<Queries extends Array<PumpQuery>> = {
    [K in keyof Queries]: QueryResult<Queries[K]>;
};
export declare const Pump: <Queries extends PumpQuery[]>({ children, queries, ...basehubProps }: PumpProps<Queries>) => Promise<import("react/jsx-runtime").JSX.Element>;
/**
 * Create a Pump with a bound query. Accepts either a query object or a function that returns a query object.
 * Useful for reusing the same query across multiple components.
 */
export declare const createPump: <Query extends PumpQuery[], Params extends void | Record<string, unknown>>(queries: Query | ((params: Params) => Query)) => (props: Omit<PumpProps<Query>, "queries"> & (Params extends void ? unknown : {
    params: Params;
})) => import("react/jsx-runtime").JSX.Element;
