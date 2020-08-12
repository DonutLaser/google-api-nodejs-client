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

export namespace adexchangebuyer_internal {
  export interface Options extends GlobalOptions {
    version: 'internal';
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
   * Ad Exchange Buyer API
   *
   * Accesses your bidding-account information, submits creatives for validation, finds available direct deals, and retrieves performance reports.
   *
   * @example
   * const {google} = require('googleapis');
   * const adexchangebuyer = google.adexchangebuyer('internal');
   *
   * @namespace adexchangebuyer
   * @type {Function}
   * @version internal
   * @variation internal
   * @param {object=} options Options for Adexchangebuyer
   */
  export class Adexchangebuyer {
    context: APIRequestContext;
    creatives: Resource$Creatives;
    deals: Resource$Deals;
    negotiationrounds: Resource$Negotiationrounds;
    negotiations: Resource$Negotiations;
    offers: Resource$Offers;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.creatives = new Resource$Creatives(this.context);
      this.deals = new Resource$Deals(this.context);
      this.negotiationrounds = new Resource$Negotiationrounds(this.context);
      this.negotiations = new Resource$Negotiations(this.context);
      this.offers = new Resource$Offers(this.context);
    }
  }

  export interface Schema$AdSize {
    height?: number | null;
    width?: number | null;
  }
  export interface Schema$AdSlotDto {
    channelCode?: string | null;
    channelId?: number | null;
    description?: string | null;
    name?: string | null;
    size?: string | null;
    webPropertyId?: number | null;
  }
  export interface Schema$AdvertiserDto {
    brands?: Schema$BrandDto[];
    id?: string | null;
    name?: string | null;
    status?: string | null;
  }
  export interface Schema$AudienceSegment {
    description?: string | null;
    id?: string | null;
    name?: string | null;
    numCookies?: string | null;
  }
  export interface Schema$BrandDto {
    advertiserId?: string | null;
    id?: string | null;
    name?: string | null;
  }
  export interface Schema$BuyerDto {
    accountId?: number | null;
    clientAbaName?: string | null;
    customerId?: number | null;
    displayName?: string | null;
    enabledForInterestTargetingDeals?: boolean | null;
    enabledForPng?: boolean | null;
    enabledForPreferredDeals?: boolean | null;
    enabledToReceiveProposals?: boolean | null;
    id?: number | null;
    isFromDbm?: boolean | null;
    isViolatingProgrammaticGuaranteedSla?: boolean | null;
    isVisibleToSellers?: boolean | null;
    partnerClientId?: string | null;
    programmaticGuaranteedIntegrationStatus?: string | null;
    sponsorAccountId?: number | null;
  }
  /**
   * The external deal ids associated with a creative.
   */
  export interface Schema$CreativeDealId {
    /**
     * An external deal id.
     */
    dealId?: string | null;
    /**
     * Resource type.
     */
    kind?: string | null;
  }
  /**
   * The external deal ids associated with a creative.
   */
  export interface Schema$CreativeDealIds {
    /**
     * A list of external deal ids and ARC approval status.
     */
    dealStatuses?: Array<{
      arcStatus?: string;
      dealId?: string;
      webPropertyId?: number;
    }> | null;
    /**
     * Resource type.
     */
    kind?: string | null;
  }
  /**
   * The minimum keep active for a creative.
   */
  export interface Schema$CreativeMinActive {
    /**
     * End time for when this creative stops being active (maximum 30 days from current time). In seconds since the epoch.
     */
    endTime?: string | null;
    /**
     * Resource type.
     */
    kind?: string | null;
    /**
     * Start time for when this creative becomes active. If not set then this creative is active immediately upon creation. In seconds since the epoch.
     */
    startTime?: string | null;
  }
  export interface Schema$DateTime {
    day?: number | null;
    hour?: number | null;
    minute?: number | null;
    month?: number | null;
    second?: number | null;
    timeZoneId?: string | null;
    year?: number | null;
  }
  export interface Schema$DealPartyDto {
    buyer?: Schema$BuyerDto;
    buyerSellerRole?: string | null;
    customerId?: number | null;
    name?: string | null;
    webProperty?: Schema$WebPropertyDto;
  }
  export interface Schema$EditHistoryDto {
    createdByLoginName?: string | null;
    createdTimeStamp?: string | null;
    lastUpdatedByLoginName?: string | null;
    lastUpdateTimeStamp?: string | null;
  }
  export interface Schema$GetFinalizedNegotiationByExternalDealIdRequest {
    includePrivateAuctions?: boolean | null;
  }
  export interface Schema$GetNegotiationByIdRequest {
    includePrivateAuctions?: boolean | null;
  }
  export interface Schema$GetNegotiationsRequest {
    finalized?: boolean | null;
    includePrivateAuctions?: boolean | null;
    sinceTimestampMillis?: string | null;
  }
  export interface Schema$GetNegotiationsResponse {
    kind?: string | null;
    negotiations?: Schema$NegotiationDto[];
  }
  export interface Schema$InventorySegmentTargeting {
    negativeAdSizes?: Schema$AdSize[];
    negativeAdTypeSegments?: string[] | null;
    negativeAudienceSegments?: string[] | null;
    negativeDeviceCategories?: string[] | null;
    negativeIcmBrands?: string[] | null;
    negativeIcmInterests?: string[] | null;
    negativeInventorySlots?: string[] | null;
    negativeKeyValues?: Schema$RuleKeyValuePair[];
    negativeLocations?: string[] | null;
    negativeMobileApps?: string[] | null;
    negativeOperatingSystems?: string[] | null;
    negativeOperatingSystemVersions?: string[] | null;
    negativeSiteUrls?: string[] | null;
    negativeSizes?: string[] | null;
    negativeVideoAdPositionSegments?: string[] | null;
    negativeVideoDurationSegments?: string[] | null;
    negativeXfpAdSlots?: string[] | null;
    negativeXfpPlacements?: string[] | null;
    positiveAdSizes?: Schema$AdSize[];
    positiveAdTypeSegments?: string[] | null;
    positiveAudienceSegments?: string[] | null;
    positiveDeviceCategories?: string[] | null;
    positiveIcmBrands?: string[] | null;
    positiveIcmInterests?: string[] | null;
    positiveInventorySlots?: string[] | null;
    positiveKeyValues?: Schema$RuleKeyValuePair[];
    positiveLocations?: string[] | null;
    positiveMobileApps?: string[] | null;
    positiveOperatingSystems?: string[] | null;
    positiveOperatingSystemVersions?: string[] | null;
    positiveSiteUrls?: string[] | null;
    positiveSizes?: string[] | null;
    positiveVideoAdPositionSegments?: string[] | null;
    positiveVideoDurationSegments?: string[] | null;
    positiveXfpAdSlots?: string[] | null;
    positiveXfpPlacements?: string[] | null;
  }
  export interface Schema$ListOffersRequest {
    sinceTimestampMillis?: string | null;
  }
  export interface Schema$ListOffersResponse {
    kind?: string | null;
    offers?: Schema$OfferDto[];
  }
  export interface Schema$MoneyDto {
    currencyCode?: string | null;
    micros?: string | null;
  }
  export interface Schema$NegotiationDto {
    /**
     * The billed buyer; Specified by a buyer buying through an intermediary.
     */
    billedBuyer?: Schema$DealPartyDto;
    /**
     * Details of the buyer party in this negotiation.
     */
    buyer?: Schema$DealPartyDto;
    /**
     * The buyer party&#39;s contact email.
     */
    buyerEmailContacts?: string[] | null;
    /**
     * The type of this deal.
     */
    dealType?: string | null;
    /**
     * For finalized negotiations, the ID of the finalized deal.
     */
    externalDealId?: string | null;
    kind?: string | null;
    /**
     * A list of label names applicable to this negotiation.
     */
    labelNames?: string[] | null;
    /**
     * The unique ID of this negotiation.
     */
    negotiationId?: string | null;
    /**
     * The series of negotiation rounds for this negotiation.
     */
    negotiationRounds?: Schema$NegotiationRoundDto[];
    /**
     * The state of this negotiation.
     */
    negotiationState?: string | null;
    /**
     * The ID of this negotiation&#39;s original offer.
     */
    offerId?: string | null;
    /**
     * Details of the seller party in this negotiation.
     */
    seller?: Schema$DealPartyDto;
    /**
     * The seller party&#39;s contact email.
     */
    sellerEmailContacts?: string[] | null;
    /**
     * The stats for this negotiation.
     */
    stats?: Schema$StatsDto;
    /**
     * The status of this negotiation.
     */
    status?: string | null;
  }
  export interface Schema$NegotiationRoundDto {
    /**
     * The action performed by this negotiation round.
     */
    action?: string | null;
    /**
     * DBM advertiser IDs permission to access this negotiation.
     */
    dbmAdvertiserIds?: string[] | null;
    /**
     * Stores DBM partner ID for use by DBM
     */
    dbmPartnerId?: string | null;
    /**
     * The edit history of this negotiation round.
     */
    editHistory?: Schema$EditHistoryDto;
    kind?: string | null;
    /**
     * The ID of the negotiation to which this negotiation round applies.
     */
    negotiationId?: string | null;
    /**
     * Notes regarding this negotiation round.
     */
    notes?: string | null;
    /**
     * The role, either buyer or seller, initiating this negotiation round.
     */
    originatorRole?: string | null;
    /**
     * The number of this negotiation round, in sequence.
     */
    roundNumber?: string | null;
    /**
     * The detailed terms proposed in this negotiation round.
     */
    terms?: Schema$TermsDto;
  }
  export interface Schema$OfferDto {
    /**
     * Whether this offer is anonymous.
     */
    anonymous?: boolean | null;
    /**
     * The billed buyer; For buyer initiated offers, buying through an intermediary.
     */
    billedBuyer?: Schema$DealPartyDto;
    /**
     * The creator of this offer.
     */
    creator?: Schema$DealPartyDto;
    /**
     * The list of email contacts for this offer.
     */
    emailContacts?: string[] | null;
    /**
     * Whether this offer is open.
     */
    isOpen?: boolean | null;
    kind?: string | null;
    /**
     * The list of label names applicable to this offer.
     */
    labelNames?: string[] | null;
    /**
     * The unique ID of this offer.
     */
    offerId?: string | null;
    /**
     * The state of this offer.
     */
    offerState?: string | null;
    /**
     * The list of buyer or seller parties this offer is open to.
     */
    openToDealParties?: Schema$DealPartyDto[];
    /**
     * The status of this offer.
     */
    status?: string | null;
    /**
     * The terms of this offer.
     */
    terms?: Schema$TermsDto;
  }
  export interface Schema$RuleKeyValuePair {
    keyName?: string | null;
    value?: string | null;
  }
  export interface Schema$StatsDto {
    bids?: string | null;
    goodBids?: string | null;
    impressions?: string | null;
    requests?: string | null;
    revenue?: Schema$MoneyDto;
    spend?: Schema$MoneyDto;
  }
  export interface Schema$TermsDto {
    /**
     * The particular ad slots targeted by the offer.
     */
    adSlots?: Schema$AdSlotDto[];
    /**
     * A list of advertisers for this offer.
     */
    advertisers?: Schema$AdvertiserDto[];
    /**
     * The audience segment for the offer.
     */
    audienceSegment?: Schema$AudienceSegment;
    /**
     * A description of the audience segment for the offer.
     */
    audienceSegmentDescription?: string | null;
    /**
     * The billing terms.
     */
    billingTerms?: string | null;
    /**
     * The buyer billing type.
     */
    buyerBillingType?: string | null;
    /**
     * The cpm terms.
     */
    cpm?: Schema$MoneyDto;
    /**
     * Whether to use or ignore publisher blocking rules.
     */
    creativeBlockingLevel?: string | null;
    /**
     * Whether to use publisher review policy or AdX review policy.
     */
    creativeReviewPolicy?: string | null;
    /**
     * The premium terms.
     */
    dealPremium?: Schema$MoneyDto;
    /**
     * A description for these terms.
     */
    description?: string | null;
    /**
     * A descriptive name for these terms.
     */
    descriptiveName?: string | null;
    /**
     * The end date for the offer.
     */
    endDate?: Schema$DateTime;
    /**
     * The estimated daily impressions for the offer.
     */
    estimatedImpressionsPerDay?: string | null;
    /**
     * The estimated spend for the offer.
     */
    estimatedSpend?: Schema$MoneyDto;
    /**
     * If true, the offer will finalize automatically when accepted.
     */
    finalizeAutomatically?: boolean | null;
    /**
     * The inventory segment targeting for the offer.
     */
    inventorySegmentTargeting?: Schema$InventorySegmentTargeting;
    /**
     * Whether the offer is a reservation.
     */
    isReservation?: boolean | null;
    /**
     * The minimum spend for the offer.
     */
    minimumSpendMicros?: string | null;
    /**
     * The minimum true looks for the offer.
     */
    minimumTrueLooks?: string | null;
    /**
     * The monetizer type.
     */
    monetizerType?: string | null;
    /**
     * Whether this offer is semi-transparent.
     */
    semiTransparent?: boolean | null;
    /**
     * The start date for the offer.
     */
    startDate?: Schema$DateTime;
    /**
     * Whether to target by deal id.
     */
    targetByDealId?: boolean | null;
    /**
     * If true, the offer targets all ad slots.
     */
    targetingAllAdSlots?: boolean | null;
    /**
     * A list of terms attributes.
     */
    termsAttributes?: string[] | null;
  }
  export interface Schema$WebPropertyDto {
    allowInterestTargetedAds?: boolean | null;
    enabledForPreferredDeals?: boolean | null;
    id?: number | null;
    name?: string | null;
    propertyCode?: string | null;
    siteUrls?: string[] | null;
    syndicationProduct?: string | null;
  }

  export class Resource$Creatives {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * adexchangebuyer.creatives.deleteExternalDealId
     * @desc Remove an external deal ids associated with the creative.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adexchangebuyer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adexchangebuyer = google.adexchangebuyer('internal');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/adexchange.buyer'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adexchangebuyer.creatives.deleteExternalDealId({
     *     // The id for the account that will serve this creative.
     *     accountId: 'placeholder-value',
     *     // The buyer-specific id for this creative.
     *     buyerCreativeId: 'placeholder-value',
     *     // The id of the deal id to disassociate with this creative.
     *     externalDealId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias adexchangebuyer.creatives.deleteExternalDealId
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer} params.accountId The id for the account that will serve this creative.
     * @param {string} params.buyerCreativeId The buyer-specific id for this creative.
     * @param {string} params.externalDealId The id of the deal id to disassociate with this creative.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    deleteExternalDealId(
      params: Params$Resource$Creatives$Deleteexternaldealid,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    deleteExternalDealId(
      params?: Params$Resource$Creatives$Deleteexternaldealid,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    deleteExternalDealId(
      params: Params$Resource$Creatives$Deleteexternaldealid,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    deleteExternalDealId(
      params: Params$Resource$Creatives$Deleteexternaldealid,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    deleteExternalDealId(
      params: Params$Resource$Creatives$Deleteexternaldealid,
      callback: BodyResponseCallback<void>
    ): void;
    deleteExternalDealId(callback: BodyResponseCallback<void>): void;
    deleteExternalDealId(
      paramsOrCallback?:
        | Params$Resource$Creatives$Deleteexternaldealid
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
        {}) as Params$Resource$Creatives$Deleteexternaldealid;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Creatives$Deleteexternaldealid;
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
              '/adexchangebuyer/internal/creatives/{accountId}/{buyerCreativeId}/externalDealIds/{externalDealId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'buyerCreativeId', 'externalDealId'],
        pathParams: ['accountId', 'buyerCreativeId', 'externalDealId'],
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

    /**
     * adexchangebuyer.creatives.getMinActive
     * @desc Get the minimum time the creative should be active for.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adexchangebuyer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adexchangebuyer = google.adexchangebuyer('internal');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/adexchange.buyer'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adexchangebuyer.creatives.getMinActive({
     *     // The id for the account that will serve this creative.
     *     accountId: 'placeholder-value',
     *     // The buyer-specific id for this creative.
     *     buyerCreativeId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "endTime": "my_endTime",
     *   //   "kind": "my_kind",
     *   //   "startTime": "my_startTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias adexchangebuyer.creatives.getMinActive
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer} params.accountId The id for the account that will serve this creative.
     * @param {string} params.buyerCreativeId The buyer-specific id for this creative.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getMinActive(
      params: Params$Resource$Creatives$Getminactive,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getMinActive(
      params?: Params$Resource$Creatives$Getminactive,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CreativeMinActive>;
    getMinActive(
      params: Params$Resource$Creatives$Getminactive,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getMinActive(
      params: Params$Resource$Creatives$Getminactive,
      options: MethodOptions | BodyResponseCallback<Schema$CreativeMinActive>,
      callback: BodyResponseCallback<Schema$CreativeMinActive>
    ): void;
    getMinActive(
      params: Params$Resource$Creatives$Getminactive,
      callback: BodyResponseCallback<Schema$CreativeMinActive>
    ): void;
    getMinActive(
      callback: BodyResponseCallback<Schema$CreativeMinActive>
    ): void;
    getMinActive(
      paramsOrCallback?:
        | Params$Resource$Creatives$Getminactive
        | BodyResponseCallback<Schema$CreativeMinActive>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CreativeMinActive>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CreativeMinActive>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$CreativeMinActive>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Creatives$Getminactive;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Creatives$Getminactive;
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
              '/adexchangebuyer/internal/creatives/{accountId}/{buyerCreativeId}/minkeepactive'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'buyerCreativeId'],
        pathParams: ['accountId', 'buyerCreativeId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CreativeMinActive>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$CreativeMinActive>(parameters);
      }
    }

    /**
     * adexchangebuyer.creatives.insertExternalDealId
     * @desc Add external deal ids associated with the creative.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adexchangebuyer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adexchangebuyer = google.adexchangebuyer('internal');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/adexchange.buyer'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adexchangebuyer.creatives.insertExternalDealId({
     *     // The id for the account that will serve this creative.
     *     accountId: 'placeholder-value',
     *     // The buyer-specific id for this creative.
     *     buyerCreativeId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "dealId": "my_dealId",
     *       //   "kind": "my_kind"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias adexchangebuyer.creatives.insertExternalDealId
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer} params.accountId The id for the account that will serve this creative.
     * @param {string} params.buyerCreativeId The buyer-specific id for this creative.
     * @param {().CreativeDealId} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insertExternalDealId(
      params: Params$Resource$Creatives$Insertexternaldealid,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insertExternalDealId(
      params?: Params$Resource$Creatives$Insertexternaldealid,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    insertExternalDealId(
      params: Params$Resource$Creatives$Insertexternaldealid,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insertExternalDealId(
      params: Params$Resource$Creatives$Insertexternaldealid,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    insertExternalDealId(
      params: Params$Resource$Creatives$Insertexternaldealid,
      callback: BodyResponseCallback<void>
    ): void;
    insertExternalDealId(callback: BodyResponseCallback<void>): void;
    insertExternalDealId(
      paramsOrCallback?:
        | Params$Resource$Creatives$Insertexternaldealid
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
        {}) as Params$Resource$Creatives$Insertexternaldealid;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Creatives$Insertexternaldealid;
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
              '/adexchangebuyer/internal/creatives/{accountId}/{buyerCreativeId}/externalDealIds'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'buyerCreativeId'],
        pathParams: ['accountId', 'buyerCreativeId'],
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

    /**
     * adexchangebuyer.creatives.listExternalDealIds
     * @desc Lists the external deal ids associated with the creative.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adexchangebuyer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adexchangebuyer = google.adexchangebuyer('internal');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/adexchange.buyer'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adexchangebuyer.creatives.listExternalDealIds({
     *     // The id for the account that will serve this creative.
     *     accountId: 'placeholder-value',
     *     // The buyer-specific id for this creative.
     *     buyerCreativeId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dealStatuses": [],
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias adexchangebuyer.creatives.listExternalDealIds
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer} params.accountId The id for the account that will serve this creative.
     * @param {string} params.buyerCreativeId The buyer-specific id for this creative.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listExternalDealIds(
      params: Params$Resource$Creatives$Listexternaldealids,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    listExternalDealIds(
      params?: Params$Resource$Creatives$Listexternaldealids,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CreativeDealIds>;
    listExternalDealIds(
      params: Params$Resource$Creatives$Listexternaldealids,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    listExternalDealIds(
      params: Params$Resource$Creatives$Listexternaldealids,
      options: MethodOptions | BodyResponseCallback<Schema$CreativeDealIds>,
      callback: BodyResponseCallback<Schema$CreativeDealIds>
    ): void;
    listExternalDealIds(
      params: Params$Resource$Creatives$Listexternaldealids,
      callback: BodyResponseCallback<Schema$CreativeDealIds>
    ): void;
    listExternalDealIds(
      callback: BodyResponseCallback<Schema$CreativeDealIds>
    ): void;
    listExternalDealIds(
      paramsOrCallback?:
        | Params$Resource$Creatives$Listexternaldealids
        | BodyResponseCallback<Schema$CreativeDealIds>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CreativeDealIds>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CreativeDealIds>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$CreativeDealIds> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Creatives$Listexternaldealids;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Creatives$Listexternaldealids;
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
              '/adexchangebuyer/internal/creatives/{accountId}/{buyerCreativeId}/externalDealIds'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'buyerCreativeId'],
        pathParams: ['accountId', 'buyerCreativeId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CreativeDealIds>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$CreativeDealIds>(parameters);
      }
    }

    /**
     * adexchangebuyer.creatives.setMinActive
     * @desc Set the minimum time the creative should be active for.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adexchangebuyer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adexchangebuyer = google.adexchangebuyer('internal');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/adexchange.buyer'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adexchangebuyer.creatives.setMinActive({
     *     // The id for the account that will serve this creative.
     *     accountId: 'placeholder-value',
     *     // The buyer-specific id for this creative.
     *     buyerCreativeId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "endTime": "my_endTime",
     *       //   "kind": "my_kind",
     *       //   "startTime": "my_startTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias adexchangebuyer.creatives.setMinActive
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer} params.accountId The id for the account that will serve this creative.
     * @param {string} params.buyerCreativeId The buyer-specific id for this creative.
     * @param {().CreativeMinActive} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setMinActive(
      params: Params$Resource$Creatives$Setminactive,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setMinActive(
      params?: Params$Resource$Creatives$Setminactive,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    setMinActive(
      params: Params$Resource$Creatives$Setminactive,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setMinActive(
      params: Params$Resource$Creatives$Setminactive,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    setMinActive(
      params: Params$Resource$Creatives$Setminactive,
      callback: BodyResponseCallback<void>
    ): void;
    setMinActive(callback: BodyResponseCallback<void>): void;
    setMinActive(
      paramsOrCallback?:
        | Params$Resource$Creatives$Setminactive
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
        {}) as Params$Resource$Creatives$Setminactive;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Creatives$Setminactive;
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
              '/adexchangebuyer/internal/creatives/{accountId}/{buyerCreativeId}/minkeepactive'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'buyerCreativeId'],
        pathParams: ['accountId', 'buyerCreativeId'],
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

  export interface Params$Resource$Creatives$Deleteexternaldealid
    extends StandardParameters {
    /**
     * The id for the account that will serve this creative.
     */
    accountId?: number;
    /**
     * The buyer-specific id for this creative.
     */
    buyerCreativeId?: string;
    /**
     * The id of the deal id to disassociate with this creative.
     */
    externalDealId?: string;
  }
  export interface Params$Resource$Creatives$Getminactive
    extends StandardParameters {
    /**
     * The id for the account that will serve this creative.
     */
    accountId?: number;
    /**
     * The buyer-specific id for this creative.
     */
    buyerCreativeId?: string;
  }
  export interface Params$Resource$Creatives$Insertexternaldealid
    extends StandardParameters {
    /**
     * The id for the account that will serve this creative.
     */
    accountId?: number;
    /**
     * The buyer-specific id for this creative.
     */
    buyerCreativeId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CreativeDealId;
  }
  export interface Params$Resource$Creatives$Listexternaldealids
    extends StandardParameters {
    /**
     * The id for the account that will serve this creative.
     */
    accountId?: number;
    /**
     * The buyer-specific id for this creative.
     */
    buyerCreativeId?: string;
  }
  export interface Params$Resource$Creatives$Setminactive
    extends StandardParameters {
    /**
     * The id for the account that will serve this creative.
     */
    accountId?: number;
    /**
     * The buyer-specific id for this creative.
     */
    buyerCreativeId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CreativeMinActive;
  }

  export class Resource$Deals {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * adexchangebuyer.deals.get
     * @desc Gets the requested deal.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adexchangebuyer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adexchangebuyer = google.adexchangebuyer('internal');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/adexchange.buyer'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adexchangebuyer.deals.get({
     *     dealId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "includePrivateAuctions": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "billedBuyer": {},
     *   //   "buyer": {},
     *   //   "buyerEmailContacts": [],
     *   //   "dealType": "my_dealType",
     *   //   "externalDealId": "my_externalDealId",
     *   //   "kind": "my_kind",
     *   //   "labelNames": [],
     *   //   "negotiationId": "my_negotiationId",
     *   //   "negotiationRounds": [],
     *   //   "negotiationState": "my_negotiationState",
     *   //   "offerId": "my_offerId",
     *   //   "seller": {},
     *   //   "sellerEmailContacts": [],
     *   //   "stats": {},
     *   //   "status": "my_status"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias adexchangebuyer.deals.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.dealId
     * @param {().GetFinalizedNegotiationByExternalDealIdRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Deals$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Deals$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$NegotiationDto>;
    get(
      params: Params$Resource$Deals$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Deals$Get,
      options: MethodOptions | BodyResponseCallback<Schema$NegotiationDto>,
      callback: BodyResponseCallback<Schema$NegotiationDto>
    ): void;
    get(
      params: Params$Resource$Deals$Get,
      callback: BodyResponseCallback<Schema$NegotiationDto>
    ): void;
    get(callback: BodyResponseCallback<Schema$NegotiationDto>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Deals$Get
        | BodyResponseCallback<Schema$NegotiationDto>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$NegotiationDto>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$NegotiationDto>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$NegotiationDto> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Deals$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Deals$Get;
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
            url: (rootUrl + '/adexchangebuyer/internal/deals/{dealId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['dealId'],
        pathParams: ['dealId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$NegotiationDto>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$NegotiationDto>(parameters);
      }
    }
  }

  export interface Params$Resource$Deals$Get extends StandardParameters {
    /**
     *
     */
    dealId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GetFinalizedNegotiationByExternalDealIdRequest;
  }

  export class Resource$Negotiationrounds {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * adexchangebuyer.negotiationrounds.insert
     * @desc Adds the requested negotiationRound to the requested negotiation.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adexchangebuyer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adexchangebuyer = google.adexchangebuyer('internal');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/adexchange.buyer'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adexchangebuyer.negotiationrounds.insert({
     *     negotiationId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "action": "my_action",
     *       //   "dbmAdvertiserIds": [],
     *       //   "dbmPartnerId": "my_dbmPartnerId",
     *       //   "editHistory": {},
     *       //   "kind": "my_kind",
     *       //   "negotiationId": "my_negotiationId",
     *       //   "notes": "my_notes",
     *       //   "originatorRole": "my_originatorRole",
     *       //   "roundNumber": "my_roundNumber",
     *       //   "terms": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "action": "my_action",
     *   //   "dbmAdvertiserIds": [],
     *   //   "dbmPartnerId": "my_dbmPartnerId",
     *   //   "editHistory": {},
     *   //   "kind": "my_kind",
     *   //   "negotiationId": "my_negotiationId",
     *   //   "notes": "my_notes",
     *   //   "originatorRole": "my_originatorRole",
     *   //   "roundNumber": "my_roundNumber",
     *   //   "terms": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias adexchangebuyer.negotiationrounds.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.negotiationId
     * @param {().NegotiationRoundDto} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params: Params$Resource$Negotiationrounds$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Negotiationrounds$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$NegotiationRoundDto>;
    insert(
      params: Params$Resource$Negotiationrounds$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Negotiationrounds$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$NegotiationRoundDto>,
      callback: BodyResponseCallback<Schema$NegotiationRoundDto>
    ): void;
    insert(
      params: Params$Resource$Negotiationrounds$Insert,
      callback: BodyResponseCallback<Schema$NegotiationRoundDto>
    ): void;
    insert(callback: BodyResponseCallback<Schema$NegotiationRoundDto>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Negotiationrounds$Insert
        | BodyResponseCallback<Schema$NegotiationRoundDto>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$NegotiationRoundDto>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$NegotiationRoundDto>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$NegotiationRoundDto>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Negotiationrounds$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Negotiationrounds$Insert;
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
              '/adexchangebuyer/internal/negotiations/{negotiationId}/negotiationrounds'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['negotiationId'],
        pathParams: ['negotiationId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$NegotiationRoundDto>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$NegotiationRoundDto>(parameters);
      }
    }
  }

  export interface Params$Resource$Negotiationrounds$Insert
    extends StandardParameters {
    /**
     *
     */
    negotiationId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$NegotiationRoundDto;
  }

  export class Resource$Negotiations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * adexchangebuyer.negotiations.get
     * @desc Gets the requested negotiation.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adexchangebuyer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adexchangebuyer = google.adexchangebuyer('internal');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/adexchange.buyer'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adexchangebuyer.negotiations.get({
     *     negotiationId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "includePrivateAuctions": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "billedBuyer": {},
     *   //   "buyer": {},
     *   //   "buyerEmailContacts": [],
     *   //   "dealType": "my_dealType",
     *   //   "externalDealId": "my_externalDealId",
     *   //   "kind": "my_kind",
     *   //   "labelNames": [],
     *   //   "negotiationId": "my_negotiationId",
     *   //   "negotiationRounds": [],
     *   //   "negotiationState": "my_negotiationState",
     *   //   "offerId": "my_offerId",
     *   //   "seller": {},
     *   //   "sellerEmailContacts": [],
     *   //   "stats": {},
     *   //   "status": "my_status"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias adexchangebuyer.negotiations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.negotiationId
     * @param {().GetNegotiationByIdRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Negotiations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Negotiations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$NegotiationDto>;
    get(
      params: Params$Resource$Negotiations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Negotiations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$NegotiationDto>,
      callback: BodyResponseCallback<Schema$NegotiationDto>
    ): void;
    get(
      params: Params$Resource$Negotiations$Get,
      callback: BodyResponseCallback<Schema$NegotiationDto>
    ): void;
    get(callback: BodyResponseCallback<Schema$NegotiationDto>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Negotiations$Get
        | BodyResponseCallback<Schema$NegotiationDto>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$NegotiationDto>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$NegotiationDto>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$NegotiationDto> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Negotiations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Negotiations$Get;
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
              rootUrl + '/adexchangebuyer/internal/negotiations/{negotiationId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['negotiationId'],
        pathParams: ['negotiationId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$NegotiationDto>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$NegotiationDto>(parameters);
      }
    }

    /**
     * adexchangebuyer.negotiations.insert
     * @desc Creates or updates the requested negotiation.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adexchangebuyer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adexchangebuyer = google.adexchangebuyer('internal');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/adexchange.buyer'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adexchangebuyer.negotiations.insert({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "billedBuyer": {},
     *       //   "buyer": {},
     *       //   "buyerEmailContacts": [],
     *       //   "dealType": "my_dealType",
     *       //   "externalDealId": "my_externalDealId",
     *       //   "kind": "my_kind",
     *       //   "labelNames": [],
     *       //   "negotiationId": "my_negotiationId",
     *       //   "negotiationRounds": [],
     *       //   "negotiationState": "my_negotiationState",
     *       //   "offerId": "my_offerId",
     *       //   "seller": {},
     *       //   "sellerEmailContacts": [],
     *       //   "stats": {},
     *       //   "status": "my_status"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "billedBuyer": {},
     *   //   "buyer": {},
     *   //   "buyerEmailContacts": [],
     *   //   "dealType": "my_dealType",
     *   //   "externalDealId": "my_externalDealId",
     *   //   "kind": "my_kind",
     *   //   "labelNames": [],
     *   //   "negotiationId": "my_negotiationId",
     *   //   "negotiationRounds": [],
     *   //   "negotiationState": "my_negotiationState",
     *   //   "offerId": "my_offerId",
     *   //   "seller": {},
     *   //   "sellerEmailContacts": [],
     *   //   "stats": {},
     *   //   "status": "my_status"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias adexchangebuyer.negotiations.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().NegotiationDto} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params: Params$Resource$Negotiations$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Negotiations$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$NegotiationDto>;
    insert(
      params: Params$Resource$Negotiations$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Negotiations$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$NegotiationDto>,
      callback: BodyResponseCallback<Schema$NegotiationDto>
    ): void;
    insert(
      params: Params$Resource$Negotiations$Insert,
      callback: BodyResponseCallback<Schema$NegotiationDto>
    ): void;
    insert(callback: BodyResponseCallback<Schema$NegotiationDto>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Negotiations$Insert
        | BodyResponseCallback<Schema$NegotiationDto>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$NegotiationDto>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$NegotiationDto>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$NegotiationDto> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Negotiations$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Negotiations$Insert;
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
            url: (rootUrl + '/adexchangebuyer/internal/negotiations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$NegotiationDto>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$NegotiationDto>(parameters);
      }
    }

    /**
     * adexchangebuyer.negotiations.list
     * @desc Lists all negotiations the authenticated user has access to.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adexchangebuyer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adexchangebuyer = google.adexchangebuyer('internal');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/adexchange.buyer'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adexchangebuyer.negotiations.list({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "finalized": false,
     *       //   "includePrivateAuctions": false,
     *       //   "sinceTimestampMillis": "my_sinceTimestampMillis"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind",
     *   //   "negotiations": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias adexchangebuyer.negotiations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().GetNegotiationsRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Negotiations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Negotiations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GetNegotiationsResponse>;
    list(
      params: Params$Resource$Negotiations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Negotiations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GetNegotiationsResponse>,
      callback: BodyResponseCallback<Schema$GetNegotiationsResponse>
    ): void;
    list(
      params: Params$Resource$Negotiations$List,
      callback: BodyResponseCallback<Schema$GetNegotiationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$GetNegotiationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Negotiations$List
        | BodyResponseCallback<Schema$GetNegotiationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GetNegotiationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GetNegotiationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GetNegotiationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Negotiations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Negotiations$List;
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
            url: (rootUrl + '/adexchangebuyer/internal/negotiations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$GetNegotiationsResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GetNegotiationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Negotiations$Get extends StandardParameters {
    /**
     *
     */
    negotiationId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GetNegotiationByIdRequest;
  }
  export interface Params$Resource$Negotiations$Insert
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$NegotiationDto;
  }
  export interface Params$Resource$Negotiations$List
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$GetNegotiationsRequest;
  }

  export class Resource$Offers {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * adexchangebuyer.offers.get
     * @desc Gets the requested offer.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adexchangebuyer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adexchangebuyer = google.adexchangebuyer('internal');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/adexchange.buyer'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adexchangebuyer.offers.get({
     *     offerId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "anonymous": false,
     *   //   "billedBuyer": {},
     *   //   "creator": {},
     *   //   "emailContacts": [],
     *   //   "isOpen": false,
     *   //   "kind": "my_kind",
     *   //   "labelNames": [],
     *   //   "offerId": "my_offerId",
     *   //   "offerState": "my_offerState",
     *   //   "openToDealParties": [],
     *   //   "status": "my_status",
     *   //   "terms": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias adexchangebuyer.offers.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.offerId
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Offers$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Offers$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OfferDto>;
    get(
      params: Params$Resource$Offers$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Offers$Get,
      options: MethodOptions | BodyResponseCallback<Schema$OfferDto>,
      callback: BodyResponseCallback<Schema$OfferDto>
    ): void;
    get(
      params: Params$Resource$Offers$Get,
      callback: BodyResponseCallback<Schema$OfferDto>
    ): void;
    get(callback: BodyResponseCallback<Schema$OfferDto>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Offers$Get
        | BodyResponseCallback<Schema$OfferDto>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OfferDto>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OfferDto>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$OfferDto> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Offers$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Offers$Get;
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
              rootUrl + '/adexchangebuyer/internal/offers/{offerId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['offerId'],
        pathParams: ['offerId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$OfferDto>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$OfferDto>(parameters);
      }
    }

    /**
     * adexchangebuyer.offers.insert
     * @desc Creates or updates the requested offer.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adexchangebuyer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adexchangebuyer = google.adexchangebuyer('internal');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/adexchange.buyer'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adexchangebuyer.offers.insert({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "anonymous": false,
     *       //   "billedBuyer": {},
     *       //   "creator": {},
     *       //   "emailContacts": [],
     *       //   "isOpen": false,
     *       //   "kind": "my_kind",
     *       //   "labelNames": [],
     *       //   "offerId": "my_offerId",
     *       //   "offerState": "my_offerState",
     *       //   "openToDealParties": [],
     *       //   "status": "my_status",
     *       //   "terms": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "anonymous": false,
     *   //   "billedBuyer": {},
     *   //   "creator": {},
     *   //   "emailContacts": [],
     *   //   "isOpen": false,
     *   //   "kind": "my_kind",
     *   //   "labelNames": [],
     *   //   "offerId": "my_offerId",
     *   //   "offerState": "my_offerState",
     *   //   "openToDealParties": [],
     *   //   "status": "my_status",
     *   //   "terms": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias adexchangebuyer.offers.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().OfferDto} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params: Params$Resource$Offers$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Offers$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OfferDto>;
    insert(
      params: Params$Resource$Offers$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Offers$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$OfferDto>,
      callback: BodyResponseCallback<Schema$OfferDto>
    ): void;
    insert(
      params: Params$Resource$Offers$Insert,
      callback: BodyResponseCallback<Schema$OfferDto>
    ): void;
    insert(callback: BodyResponseCallback<Schema$OfferDto>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Offers$Insert
        | BodyResponseCallback<Schema$OfferDto>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OfferDto>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OfferDto>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$OfferDto> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Offers$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Offers$Insert;
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
            url: (rootUrl + '/adexchangebuyer/internal/offers').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$OfferDto>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$OfferDto>(parameters);
      }
    }

    /**
     * adexchangebuyer.offers.list
     * @desc Lists all offers the authenticated user has access to.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/adexchangebuyer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const adexchangebuyer = google.adexchangebuyer('internal');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/adexchange.buyer'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await adexchangebuyer.offers.list({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "sinceTimestampMillis": "my_sinceTimestampMillis"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind",
     *   //   "offers": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias adexchangebuyer.offers.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().ListOffersRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Offers$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Offers$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListOffersResponse>;
    list(
      params: Params$Resource$Offers$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Offers$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListOffersResponse>,
      callback: BodyResponseCallback<Schema$ListOffersResponse>
    ): void;
    list(
      params: Params$Resource$Offers$List,
      callback: BodyResponseCallback<Schema$ListOffersResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListOffersResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Offers$List
        | BodyResponseCallback<Schema$ListOffersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListOffersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListOffersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListOffersResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Offers$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Offers$List;
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
            url: (rootUrl + '/adexchangebuyer/internal/offers').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$ListOffersResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ListOffersResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Offers$Get extends StandardParameters {
    /**
     *
     */
    offerId?: string;
  }
  export interface Params$Resource$Offers$Insert extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$OfferDto;
  }
  export interface Params$Resource$Offers$List extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$ListOffersRequest;
  }
}
