// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/class-name-casing */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-irregular-whitespace */

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
  GaxiosPromise,
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  StreamMethodOptions,
  GlobalOptions,
  GoogleAuth,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {Readable} from 'stream';

export namespace analytics_v2_4preprod {
  export interface Options extends GlobalOptions {
    version: 'v2.4preprod';
  }

  interface StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?:
      | string
      | OAuth2Client
      | JWT
      | Compute
      | UserRefreshClient
      | GoogleAuth;

    /**
     * Data format for the response.
     */
    alt?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauth_token?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
  }

  /**
   * Google Analytics API
   *
   * Views and manages your Google Analytics data.
   *
   * @example
   * const {google} = require('googleapis');
   * const analytics = google.analytics('v2.4preprod');
   *
   * @namespace analytics
   * @type {Function}
   * @version v2.4preprod
   * @variation v2.4preprod
   * @param {object=} options Options for Analytics
   */
  export class Analytics {
    context: APIRequestContext;
    data: Resource$Data;
    management: Resource$Management;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.data = new Resource$Data(this.context);
      this.management = new Resource$Management(this.context);
    }
  }

  export class Resource$Data {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * analytics.data.get
     * @desc Returns Analytics report data for a view (profile).
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v2.4preprod');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.data.get({
     *     // A comma-separated list of Analytics dimensions. E.g., 'ga:browser,ga:city'.
     *     dimensions: '(ga:.+)?',
     *     // End date for fetching report data. All requests should specify an end date formatted as YYYY-MM-DD.
     *     'end-date': '[0-9]{4}-[0-9]{2}-[0-9]{2}',
     *     // A comma-separated list of dimension or metric filters to be applied to the report data.
     *     filters: 'ga:.+',
     *     // Unique table ID for retrieving report data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.
     *     ids: 'ga:[0-9]+',
     *     // The maximum number of entries to include in this feed.
     *     'max-results': 'placeholder-value',
     *     // A comma-separated list of Analytics metrics. E.g., 'ga:sessions,ga:pageviews'. At least one metric must be specified to retrieve a valid Analytics report.
     *     metrics: 'ga:.+',
     *     // An Analytics advanced segment to be applied to the report data.
     *     segment: 'placeholder-value',
     *     // A comma-separated list of dimensions or metrics that determine the sort order for the report data.
     *     sort: '(-)?ga:.+',
     *     // Start date for fetching report data. All requests should specify a start date formatted as YYYY-MM-DD.
     *     'start-date': '[0-9]{4}-[0-9]{2}-[0-9]{2}',
     *     // An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     *     'start-index': 'placeholder-value',
     *   });
     *   console.log(res.data);
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias analytics.data.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.dimensions A comma-separated list of Analytics dimensions. E.g., 'ga:browser,ga:city'.
     * @param {string} params.end-date End date for fetching report data. All requests should specify an end date formatted as YYYY-MM-DD.
     * @param {string=} params.filters A comma-separated list of dimension or metric filters to be applied to the report data.
     * @param {string} params.ids Unique table ID for retrieving report data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.
     * @param {integer=} params.max-results The maximum number of entries to include in this feed.
     * @param {string} params.metrics A comma-separated list of Analytics metrics. E.g., 'ga:sessions,ga:pageviews'. At least one metric must be specified to retrieve a valid Analytics report.
     * @param {string=} params.segment An Analytics advanced segment to be applied to the report data.
     * @param {string=} params.sort A comma-separated list of dimensions or metrics that determine the sort order for the report data.
     * @param {string} params.start-date Start date for fetching report data. All requests should specify a start date formatted as YYYY-MM-DD.
     * @param {integer=} params.start-index An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Data$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Data$Get,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    get(
      params: Params$Resource$Data$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Data$Get,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    get(
      params: Params$Resource$Data$Get,
      callback: BodyResponseCallback<void>
    ): void;
    get(callback: BodyResponseCallback<void>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Data$Get
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Data$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Data$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/analytics/v2.4preprod/data').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['ids', 'start-date', 'end-date', 'metrics'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }
  }

  export interface Params$Resource$Data$Get extends StandardParameters {
    /**
     * A comma-separated list of Analytics dimensions. E.g., 'ga:browser,ga:city'.
     */
    dimensions?: string;
    /**
     * End date for fetching report data. All requests should specify an end date formatted as YYYY-MM-DD.
     */
    'end-date'?: string;
    /**
     * A comma-separated list of dimension or metric filters to be applied to the report data.
     */
    filters?: string;
    /**
     * Unique table ID for retrieving report data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.
     */
    ids?: string;
    /**
     * The maximum number of entries to include in this feed.
     */
    'max-results'?: number;
    /**
     * A comma-separated list of Analytics metrics. E.g., 'ga:sessions,ga:pageviews'. At least one metric must be specified to retrieve a valid Analytics report.
     */
    metrics?: string;
    /**
     * An Analytics advanced segment to be applied to the report data.
     */
    segment?: string;
    /**
     * A comma-separated list of dimensions or metrics that determine the sort order for the report data.
     */
    sort?: string;
    /**
     * Start date for fetching report data. All requests should specify a start date formatted as YYYY-MM-DD.
     */
    'start-date'?: string;
    /**
     * An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     */
    'start-index'?: number;
  }

  export class Resource$Management {
    context: APIRequestContext;
    accounts: Resource$Management$Accounts;
    goals: Resource$Management$Goals;
    profiles: Resource$Management$Profiles;
    segments: Resource$Management$Segments;
    webproperties: Resource$Management$Webproperties;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.accounts = new Resource$Management$Accounts(this.context);
      this.goals = new Resource$Management$Goals(this.context);
      this.profiles = new Resource$Management$Profiles(this.context);
      this.segments = new Resource$Management$Segments(this.context);
      this.webproperties = new Resource$Management$Webproperties(this.context);
    }
  }

  export class Resource$Management$Accounts {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * analytics.management.accounts.list
     * @desc Lists all accounts to which the user has access.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v2.4preprod');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.accounts.list({
     *     // The maximum number of accounts to include in this response.
     *     'max-results': 'placeholder-value',
     *     // An index of the first account to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     *     'start-index': 'placeholder-value',
     *   });
     *   console.log(res.data);
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias analytics.management.accounts.list
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {integer=} params.max-results The maximum number of accounts to include in this response.
     * @param {integer=} params.start-index An index of the first account to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Management$Accounts$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Management$Accounts$List,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    list(
      params: Params$Resource$Management$Accounts$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Management$Accounts$List,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    list(
      params: Params$Resource$Management$Accounts$List,
      callback: BodyResponseCallback<void>
    ): void;
    list(callback: BodyResponseCallback<void>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Management$Accounts$List
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Accounts$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Accounts$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/analytics/v2.4preprod/management/accounts'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }
  }

  export interface Params$Resource$Management$Accounts$List
    extends StandardParameters {
    /**
     * The maximum number of accounts to include in this response.
     */
    'max-results'?: number;
    /**
     * An index of the first account to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     */
    'start-index'?: number;
  }

  export class Resource$Management$Goals {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * analytics.management.goals.list
     * @desc Lists goals to which the user has access.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v2.4preprod');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.goals.list({
     *     // Account ID to retrieve goals for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to.
     *     accountId: 'placeholder-value',
     *     // The maximum number of goals to include in this response.
     *     'max-results': 'placeholder-value',
     *     // View (Profile) ID to retrieve goals for. Can either be a specific view (profile) ID or '~all', which refers to all the views (profiles) that user has access to.
     *     profileId: 'placeholder-value',
     *     // An index of the first goal to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     *     'start-index': 'placeholder-value',
     *     // Web property ID to retrieve goals for. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
     *     webPropertyId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias analytics.management.goals.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId Account ID to retrieve goals for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to.
     * @param {integer=} params.max-results The maximum number of goals to include in this response.
     * @param {string} params.profileId View (Profile) ID to retrieve goals for. Can either be a specific view (profile) ID or '~all', which refers to all the views (profiles) that user has access to.
     * @param {integer=} params.start-index An index of the first goal to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     * @param {string} params.webPropertyId Web property ID to retrieve goals for. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Management$Goals$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Management$Goals$List,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    list(
      params: Params$Resource$Management$Goals$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Management$Goals$List,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    list(
      params: Params$Resource$Management$Goals$List,
      callback: BodyResponseCallback<void>
    ): void;
    list(callback: BodyResponseCallback<void>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Management$Goals$List
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Goals$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Goals$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v2.4preprod/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'webPropertyId', 'profileId'],
        pathParams: ['accountId', 'profileId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }
  }

  export interface Params$Resource$Management$Goals$List
    extends StandardParameters {
    /**
     * Account ID to retrieve goals for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to.
     */
    accountId?: string;
    /**
     * The maximum number of goals to include in this response.
     */
    'max-results'?: number;
    /**
     * View (Profile) ID to retrieve goals for. Can either be a specific view (profile) ID or '~all', which refers to all the views (profiles) that user has access to.
     */
    profileId?: string;
    /**
     * An index of the first goal to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     */
    'start-index'?: number;
    /**
     * Web property ID to retrieve goals for. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
     */
    webPropertyId?: string;
  }

  export class Resource$Management$Profiles {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * analytics.management.profiles.list
     * @desc Lists views (profiles) to which the user has access.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v2.4preprod');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.profiles.list({
     *     // Account ID for the views (profiles) to retrieve. Can either be a specific account ID or '~all', which refers to all the accounts to which the user has access.
     *     accountId: 'placeholder-value',
     *     // The maximum number of views (profiles) to include in this response.
     *     'max-results': 'placeholder-value',
     *     // An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     *     'start-index': 'placeholder-value',
     *     // Web property ID for the views (profiles) to retrieve. Can either be a specific web property ID or '~all', which refers to all the web properties to which the user has access.
     *     webPropertyId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias analytics.management.profiles.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId Account ID for the views (profiles) to retrieve. Can either be a specific account ID or '~all', which refers to all the accounts to which the user has access.
     * @param {integer=} params.max-results The maximum number of views (profiles) to include in this response.
     * @param {integer=} params.start-index An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     * @param {string} params.webPropertyId Web property ID for the views (profiles) to retrieve. Can either be a specific web property ID or '~all', which refers to all the web properties to which the user has access.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Management$Profiles$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Management$Profiles$List,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    list(
      params: Params$Resource$Management$Profiles$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Management$Profiles$List,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    list(
      params: Params$Resource$Management$Profiles$List,
      callback: BodyResponseCallback<void>
    ): void;
    list(callback: BodyResponseCallback<void>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Management$Profiles$List
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Profiles$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Profiles$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v2.4preprod/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'webPropertyId'],
        pathParams: ['accountId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }
  }

  export interface Params$Resource$Management$Profiles$List
    extends StandardParameters {
    /**
     * Account ID for the views (profiles) to retrieve. Can either be a specific account ID or '~all', which refers to all the accounts to which the user has access.
     */
    accountId?: string;
    /**
     * The maximum number of views (profiles) to include in this response.
     */
    'max-results'?: number;
    /**
     * An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     */
    'start-index'?: number;
    /**
     * Web property ID for the views (profiles) to retrieve. Can either be a specific web property ID or '~all', which refers to all the web properties to which the user has access.
     */
    webPropertyId?: string;
  }

  export class Resource$Management$Segments {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * analytics.management.segments.list
     * @desc Lists advanced segments to which the user has access.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v2.4preprod');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.segments.list({
     *     // The maximum number of advanced segments to include in this response.
     *     'max-results': 'placeholder-value',
     *     // An index of the first advanced segment to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     *     'start-index': 'placeholder-value',
     *   });
     *   console.log(res.data);
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias analytics.management.segments.list
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {integer=} params.max-results The maximum number of advanced segments to include in this response.
     * @param {integer=} params.start-index An index of the first advanced segment to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Management$Segments$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Management$Segments$List,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    list(
      params: Params$Resource$Management$Segments$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Management$Segments$List,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    list(
      params: Params$Resource$Management$Segments$List,
      callback: BodyResponseCallback<void>
    ): void;
    list(callback: BodyResponseCallback<void>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Management$Segments$List
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Segments$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Segments$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/analytics/v2.4preprod/management/segments'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }
  }

  export interface Params$Resource$Management$Segments$List
    extends StandardParameters {
    /**
     * The maximum number of advanced segments to include in this response.
     */
    'max-results'?: number;
    /**
     * An index of the first advanced segment to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     */
    'start-index'?: number;
  }

  export class Resource$Management$Webproperties {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * analytics.management.webproperties.list
     * @desc Lists web properties to which the user has access.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v2.4preprod');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.webproperties.list({
     *     // Account ID to retrieve web properties for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to.
     *     accountId: 'placeholder-value',
     *     // The maximum number of web properties to include in this response.
     *     'max-results': 'placeholder-value',
     *     // An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     *     'start-index': 'placeholder-value',
     *   });
     *   console.log(res.data);
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias analytics.management.webproperties.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId Account ID to retrieve web properties for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to.
     * @param {integer=} params.max-results The maximum number of web properties to include in this response.
     * @param {integer=} params.start-index An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Management$Webproperties$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Management$Webproperties$List,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    list(
      params: Params$Resource$Management$Webproperties$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Management$Webproperties$List,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    list(
      params: Params$Resource$Management$Webproperties$List,
      callback: BodyResponseCallback<void>
    ): void;
    list(callback: BodyResponseCallback<void>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Management$Webproperties$List
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Webproperties$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Webproperties$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v2.4preprod/management/accounts/{accountId}/webproperties'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['accountId'],
        pathParams: ['accountId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }
  }

  export interface Params$Resource$Management$Webproperties$List
    extends StandardParameters {
    /**
     * Account ID to retrieve web properties for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to.
     */
    accountId?: string;
    /**
     * The maximum number of web properties to include in this response.
     */
    'max-results'?: number;
    /**
     * An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     */
    'start-index'?: number;
  }
}
