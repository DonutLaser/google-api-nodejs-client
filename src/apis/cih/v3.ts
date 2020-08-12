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

export namespace cih_v3 {
  export interface Options extends GlobalOptions {
    version: 'v3';
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
   * Customer Interaction History API
   *
   * Retrieving customer interactions API.
   *
   * @example
   * const {google} = require('googleapis');
   * const cih = google.cih('v3');
   *
   * @namespace cih
   * @type {Function}
   * @version v3
   * @variation v3
   * @param {object=} options Options for Cih
   */
  export class Cih {
    context: APIRequestContext;
    associatedEmails: Resource$Associatedemails;
    userInteractions: Resource$Userinteractions;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.associatedEmails = new Resource$Associatedemails(this.context);
      this.userInteractions = new Resource$Userinteractions(this.context);
    }
  }

  /**
   * Contains the Adoption specific data for UserInteractions of type ADOPTION.
   */
  export interface Schema$AdoptionInteraction {
    /**
     * The timestamp, in microseconds since Epoch, of the latest treatment interaction that contributed to this adoption event.
     */
    latestTreatmentInstanceTimestamp?: string | null;
  }
  /**
   * Contains the Adoption specific data for UserInteractions of type ADOPTION from ADVERTISER_EXPERIENCE source.
   */
  export interface Schema$AdvertiserExperienceData {
    /**
     * A list of adopted treatment instance ids. Will use for adoption event.
     */
    treatmentInstanceId?: string[] | null;
  }
  /**
   * Contains AssociatedEmail structure fields.
   */
  export interface Schema$AssociatedEmail {
    /**
     * The email address.
     */
    emailAddress?: string | null;
    /**
     * Represents associated email structure data.
     */
    kind?: string | null;
    /**
     * The program or person who initiated the operation.
     */
    operator?: string | null;
  }
  /**
   * Contains Cases Specific data stored in UserInteractions.
   */
  export interface Schema$CasesData {
    /**
     * The agent who initiated this interaction.
     */
    agent?: Schema$CasesInteractionSource;
    /**
     * The agent (Gaia ID) this case was assigned to at the point of this action.
     */
    assignedGaia?: string | null;
    /**
     * The type of the email. Only available for the user interaction of email type. Possible values: SUPPORT_EMAIL, MARKETING_EMAIL, SYSTEM_EMAIL, GRM_EMAIL, BOB_EMAIL.
     */
    emailType?: string | null;
    /**
     * This ID will be globally unique even between different cases.
     */
    messageId?: string | null;
    /**
     * The state of the case at the point when the interaction occurs. Possible values: NEW, ASSIGNED, UNASSIGNED, IN_CONSULT, NEED_INFO, SOLUTION_OFFERED, FINISHED, MERGED, DELETED, BLOCKED_BY.
     */
    state?: string | null;
    /**
     * The user id which is involved in the interaction.
     */
    userId?: Schema$UserId;
  }
  /**
   * Container for the entity responsible for adding or modifying a label, an attribute, or a message.
   */
  export interface Schema$CasesInteractionSource {
    /**
     * Only routing rule can have multiple values. For systems like UDS this field is empty. Note: The id should be the gaia id if type == USER. If so, it is stored as contact_gaia_id in the enclosing UserInteraction proto.
     */
    id?: string[] | null;
    /**
     * Type of the source. Possible values: ROUTING_RULE, USER, API, EMAIL_PROC, CHAT_SUPPORT_BOT, OUTBOX_SENDER, UDS, MEDLEY, FINISHER, OUT_OF_OFFICE, ATLAS, CUF. For more info see //customer_support/cih/proto/cases_data.proto.
     */
    type?: string | null;
  }
  /**
   * Contains the Chat specific data for UserInteractions of type GOAL.
   */
  export interface Schema$ChatInteraction {}
  /**
   * Contains the Email specific data for UserInteractions of type GOAL.
   */
  export interface Schema$EmailInteraction {}
  /**
   * Contains Entity structure fields.
   */
  export interface Schema$Entity {
    /**
     * Child entities of the Entity.
     */
    childEntity?: Schema$Entity[];
    /**
     * Indicates the entity opt out of the chief company bigtable
     */
    deprecated?: boolean | null;
    /**
     * The identifier associated with thie Entity. For ADWORDS_CID it is the customer id. For PARENT_COMPANY, CHILD_COMPANY, DIVISION or COMPANY it is the company id. For EMAIL it is the email address. For ADDRESS_DIGEST it is the SHA-1 digest of the email address.
     */
    entityId?: string | null;
    /**
     * The type of the entity. Possible values: PARENT_COMPANY, CHILD_COMPANY, DIVISION, ADWORDS_CID, EMAIL, COMPANY, ADDRESS_DIGEST. For more info see: //customer_support/cih/proto/entity.proto.
     */
    entityType?: string | null;
    /**
     * Represents entity structure data.
     */
    kind?: string | null;
    /**
     * This flag is only available for any parent AdWords account entity of an email entity or any child email entity of an AdWords account entity. If the flag is true, the linkage of the AdWords account and the email is from the AdsDb. If the flag is false, it is from other sources such as gCases. Note, for either an AdWords account or an email, there is at most one linkage from AdsDb.
     */
    linkedByAdsdb?: boolean | null;
    /**
     * Parent entities of the Entity.
     */
    parentEntity?: Schema$Entity[];
  }
  /**
   * Contains the Gama specific data for UserInteractions from Gamma source.
   */
  export interface Schema$GammaData {
    /**
     * Campaign id is the primary identifier for an email blast.
     */
    campaignId?: number | null;
    /**
     * A dispatch is a particular mailing of a campaign.
     */
    dispatchId?: string | null;
    /**
     * Experiment id is a controlled variation on a particular dispatch of a campaign. It is being deprecated in favor of node id.
     */
    experimentId?: number | null;
    /**
     * GAMMA Product ID. For more info please see java/com/google/ads/crm/gamma/common/domain/Product.java
     */
    gammaProductId?: number | null;
    /**
     * A node is a controlled variation on a particular dispatch of a campaign.
     */
    nodeId?: number | null;
    /**
     * UAID of the recipient of the email, if available.
     */
    uaid?: Schema$Uaid;
  }
  /**
   * Contains Genie specific data for UserInteractions of from Genie source.
   */
  export interface Schema$GenieData {
    /**
     * If type = REQUEST_RECOMMENDATION, store the user signals.
     */
    enteredText?: string | null;
    /**
     * A join key for interactions, used to follow the user through multiple Genie interactions.
     */
    sessionId?: string | null;
    /**
     * Type of the Genie interaction. Possible values: REQUEST_RECOMMENDATION, SELECT_RECOMMENDATION, ENTER_TEXT, DISMISS_GENIE. For more info see: //customer_support/cih/proto/genie_data.proto.
     */
    type?: string | null;
    /**
     * User agent.
     */
    userAgent?: string | null;
    /**
     * The IP address of the user.
     */
    userIp?: string | null;
  }
  /**
   * Contains the Goal specific data for UserInteractions of type GOAL.
   */
  export interface Schema$GoalInteraction {
    /**
     * The status of goal interaction. Possible values: OPEN, WON, LOST, ABANDONED.
     */
    status?: string | null;
  }
  /**
   * Contains all the specific fields for UserInteractions from GreenTea source.
   */
  export interface Schema$GreenTeaData {
    /**
     * Additional information about the the meeting method (e.g. phone number, email address, hangout link). This is a copy of meeting_method_detail field in MeetingPB proto. The source of this field is a free-form text.
     */
    meetingMethodDetail?: string | null;
    /**
     * PKs of Opportunity table.
     */
    opportunityId?: string[] | null;
  }
  /**
   * Contains all the specific fields for UserInteractions from GRM source.
   */
  export interface Schema$GrmData {
    /**
     * Some company ids represent real-world agencies to GRM. If the interaction applies to an agency this value will be set.
     */
    agencyId?: string | null;
    /**
     * The LDAP of the internal Google owner of this interaction.
     */
    contactLdap?: string | null;
    /**
     * This field indicates the Interaction Intent. The intents are stored externally.
     */
    intentId?: string[] | null;
  }
  /**
   * Contains the Phone specific data for UserInteractions of type HANGOUT.
   */
  export interface Schema$HangoutInteraction {}
  /**
   * Contains the Helpcenter specific data for UserInteractions from Helpcenter source.
   */
  export interface Schema$HelpcenterData {
    /**
     * Internal name is unique and maps to gKMS.
     */
    internalHelpCenterName?: string | null;
    /**
     * Was purely API or from UI?
     */
    isApiClient?: boolean | null;
    /**
     * Referrer (http) for request.
     */
    referer?: string | null;
  }
  /**
   * Contains the Incentive specific data for UserInteractions of type INCENTIVE.
   */
  export interface Schema$IncentiveInteraction {
    /**
     * The data of monetary reward of coupon code
     */
    monetaryReward?: {amountMicros?: string; currencyCode?: string} | null;
    /**
     * The type of the Incentive Interaction. Possible values: COUPON_CODE_REDEEMED, REWARD_GRANTED, COUPON_CODE_REDEEMED_REWARD_GRANTED.
     */
    type?: string | null;
  }
  /**
   * Contains IncentivesData structure fields.
   */
  export interface Schema$IncentivesData {
    /**
     * Foreign keys of related objects within go/Incentives system. (Coupon code is sent as source_system_primary_key field).
     */
    campaignId?: string | null;
    /**
     * The Id of the coupon.
     */
    couponId?: string | null;
    /**
     * The batch Id of the incentive.
     */
    incentiveBatchId?: string | null;
    /**
     * the Id of the incentive.
     */
    incentiveId?: string | null;
  }
  /**
   * Contains Marketing data specific for marketing email UserInteractions.
   */
  export interface Schema$MarketingEmailInteraction {
    /**
     * If false, the mail was delivered. If true, mail delivery may have been re-attempted but it is possible the mail never made it to the intended recipient.
     */
    bounced?: boolean | null;
    /**
     * If true, one or more non-opt-out links in the email have been clicked and the opt-out link click has not been clicked.
     */
    clicked?: boolean | null;
    /**
     * SHA-1 Digest of the normalized destination (To:) email address. We don&#39;t store the raw address.
     */
    emailAddressDigest?: string | null;
    /**
     * The from address of the email.
     */
    fromAddress?: string | null;
    /**
     * If true, the email has been opened and the opt-out link click has not been clicked.
     */
    opened?: boolean | null;
    /**
     * If true, the user clicked on the opt-out link in the email some time after the email was sent.
     */
    optoutClicked?: boolean | null;
    /**
     * Possible values: SENT, BOUNCED, OPENED, CLICKED, OPTOUT_CLICKED. For types other than SENT, the optional boolean field will be set to true, and the interaction timestamp will indicate the time of the post-send event. For SENT, the optional boolean fields reflect a summary of all post-send events and more than one may be true. Note: we might not have OPEN event even if the interaction is already opened and and clicked.
     */
    type?: string | null;
  }
  /**
   * Contains the Meeting specific data to the Meeting UserInteractions.
   */
  export interface Schema$MeetingInteraction {
    /**
     * Meeting status. Possible values: CREATED, MODIFIED, DELETED.
     */
    status?: string | null;
  }
  /**
   * Contains Note specific data for the Note UserInteractions.
   */
  export interface Schema$NoteInteraction {
    /**
     * Note status. Possible values: CREATED, MODIFIED, DELETED.
     */
    status?: string | null;
  }
  /**
   * Contains the Participant data.
   */
  export interface Schema$Participant {
    /**
     * GreenTea contact id if the participant is a GreenTea contact.
     */
    contactId?: string | null;
    /**
     * Participant&#39;s email. If the interaction included email address, e.g email message, this field contains the sanitized address used in this interaction. If the interaction did not have email address, this field will contain the email address for the first Profile returned by Focus Backend Service
     */
    email?: string | null;
    familyName?: string | null;
    /**
     * GAIA id of the participant.
     */
    gaiaId?: string | null;
    givenName?: string | null;
    /**
     * Name of the participant. Depending on the source of interaction, the name may be either in unstructured or structured form.
     */
    name?: string | null;
  }
  /**
   * Contains partner search specific data for UserInteractions.
   */
  export interface Schema$PartnerSearchData {}
  /**
   * Contains the Phone specific data for UserInteractions of type GOAL.
   */
  export interface Schema$PhoneInteraction {}
  /**
   * Contains Task specific data for UserInteractions of type TASK.
   */
  export interface Schema$TaskInteraction {
    /**
     * Task status. Possible values: OPEN, CLOSED.
     */
    status?: string | null;
  }
  /**
   * Contains the specific data for Trax Agent.
   */
  export interface Schema$TraxAgent {
    /**
     * The agent&#39;s email.
     */
    email?: string | null;
    /**
     * The agent&#39;s gaia Id. It is an unobfuscated GaiaID.
     */
    gaiaId?: string | null;
    /**
     * The agent&#39;s name.
     */
    name?: string | null;
  }
  /**
   * Contains Trax specific data to the UserInteractions of type TRAX.
   */
  export interface Schema$TraxData {
    /**
     * The type of action that occurred. Possible values: NONE, INJECT, CLOSE, ASSIGN, ROUTE, EXPIRE, DELETE, OUTGOING_CONSULT, INCOMING_CONSULT, REPLY, REOPEN, BULK, UNBULK, BOUNCE, STIFLED_ACKNOWLEDGE, STIFLED_AUTO_RESPOND, CANCEL, MOVE, POSTPONE, SURVEY_SCHEDULED, SURVEY_SENT, CONSULT_INJECTED, MSG_SENT, LBL_APPLY, LBL_REMOVE, MOVE_IN. For more information see //customer_support/cih/proto/trax_data.proto.
     */
    actionType?: string | null;
    /**
     * Data of the agent that performed the action.
     */
    agent?: Schema$TraxAgent;
    /**
     * For a reassign action, this is the agent that the ticket was assigned to.
     */
    assignedAgent?: Schema$TraxAgent;
    /**
     * The message Id.
     */
    messageId?: string | null;
    /**
     * Trax state. Possible values: OPEN, CLOSED, PENDING, REOPENED, POSTPONED, BULKED, DELETED, DELAYED, WAITING, BROKEN, NEW, ASSIGNED, UNASSIGNED, IN_CONSULT, NEED_INFO, SOLUTION_OFFERED, FINISHED, MERGED. For more info see //customer_support/cih/proto/trax_data.proto.
     */
    state?: string | null;
    /**
     * The user Id of the ticket. It should contain email address for the TraxData.
     */
    userId?: Schema$UserId;
  }
  /**
   * Contains the Trax specific data for UserInteractions.
   */
  export interface Schema$TraxInteraction {
    /**
     * The type of the Trax interaction. Possible values: EMAIL, PHONE, NOTE, CHAT, STUB.
     */
    type?: string | null;
  }
  /**
   * CIH copy of the UAID proto. We don&#39;t store UAIDs as a 64-bit number instead we store them into two different fields: Product and Account Id. Account Id is string so it can be anything, for example in +Pages it&#39;s a Gaia Id.
   */
  export interface Schema$Uaid {
    /**
     * Account id.
     */
    account_id?: string | null;
    /**
     * Product ID component of the UAID.
     */
    product?: string | null;
  }
  /**
   * Contains UserComm specific data for UserInteractions.
   */
  export interface Schema$UserCommData {}
  /**
   * The user Id of the user interaction. At least one of the following three fields gaia_id, email, customer_id exists.
   */
  export interface Schema$UserId {
    /**
     * customer id.
     */
    customerId?: string | null;
    /**
     * email address.
     */
    email?: string | null;
    /**
     * The unobfuscated Gaia id.
     */
    gaiaId?: string | null;
    /**
     * The name.
     */
    name?: string | null;
  }
  /**
   * The structure of UserInteractions.
   */
  export interface Schema$UserInteraction {
    /**
     * available if the interaction is an ADOPTION type interaction.
     */
    adoptionInteraction?: Schema$AdoptionInteraction;
    /**
     * Contains Advertiser Experience data for interactions from ADVERTISER_EXPERIENCE origin.
     */
    advertiserExperienceData?: Schema$AdvertiserExperienceData;
    /**
     * Contains Cases data for interactions from CASES origin.
     */
    casesData?: Schema$CasesData;
    /**
     * Available if the interaction is a CHAT type interaction.
     */
    chatInteraction?: Schema$ChatInteraction;
    /**
     * The Gaia ID of the primary Google Contact/CSR involved in this interaction. Only certain types of interactions and origin systems provide this information. It is a string of digits in base 10.
     */
    contactGaiaId?: string | null;
    /**
     * Google user or customer participant.
     */
    customer?: Schema$Participant[];
    /**
     * For detailed_description, only the first 512 characters are stored. If truncation was necessary, detailed_description_truncated will be true. Use the source_system_primarykey if necessary to refer back to the original object for more information rather than duplicating it.
     */
    detailedDescription?: string | null;
    /**
     * Indicates if the detailedDescription is truncated.
     */
    detailedDescriptionTruncated?: boolean | null;
    /**
     * Available if the interaction is an EMAIL type interaction.
     */
    emailInteraction?: Schema$EmailInteraction;
    /**
     * Only entity_id and entity_type of the following field is set. parent_entity and child_entities are not used here.
     */
    entity?: Schema$Entity;
    /**
     * Contains Gamma data for interactions from GAMMA origin.
     */
    gammaData?: Schema$GammaData;
    /**
     * Contains Genie data for interactions from GENIE origin.
     */
    genieData?: Schema$GenieData;
    /**
     * Available if the interaction is a GOAL type interaction.
     */
    goalInteraction?: Schema$GoalInteraction;
    /**
     * Google participants. Can be full-time Googlers, interns, TVCs.
     */
    googler?: Schema$Participant[];
    /**
     * Contains Green Tea data for interactions from GREENTEA origin.
     */
    greenTeaData?: Schema$GreenTeaData;
    /**
     * Contains GRM data for interactions from GRM origin.
     */
    grmData?: Schema$GrmData;
    /**
     * available if the interaction is an HANGOUT type interaction.
     */
    hangoutInteraction?: Schema$HangoutInteraction;
    /**
     * Contains Helpcenter data for interactions from HELPCENTER origin.
     */
    helpcenterData?: Schema$HelpcenterData;
    /**
     * available if the interaction is an INCENTIVE type interaction.
     */
    incentiveInteraction?: Schema$IncentiveInteraction;
    /**
     * Contains Incentive data for interactions from INCENTIVES origin.
     */
    incentivesData?: Schema$IncentivesData;
    /**
     * Initiator of the interaction.
     */
    initiator?: Schema$Participant;
    /**
     * The origin of the interaction. This field with source_system_primary_key uniquely determines the foreign key. Possible values: GENIE_SOURCE, GRM_SOURCE, CASES_SOURCE, GAMMA_SOURCE, TRAX_SOURCE, HELPCENTER_SOURCE.
     */
    interactionOrigin?: string | null;
    /**
     * The type of the interaction. Possible values: STUB, PHONE, CHAT, EMAIL GOAL, TASK, NOTE, MEETING, MARKETING_EMAIL, TRAX, SUMMARY, HELPCENTER.
     */
    interactionType?: string | null;
    /**
     * Kind of this resource.
     */
    kind?: string | null;
    /**
     * This stores a canonical language code as specified in go/iii. Use one of the converter classes (e.g. LanguageCode.forString()) to convert this to an enum.
     */
    language?: string | null;
    /**
     * Available if the interaction is a MARKETING_EMAIL type interaction.
     */
    marketingEmailInteraction?: Schema$MarketingEmailInteraction;
    /**
     * Available if the interaction is a MEETING type interaction.
     */
    meetingInteraction?: Schema$MeetingInteraction;
    /**
     * Interaction classification for CRM use cases. See http://go/cih-gt-api for details.
     */
    metaType?: string | null;
    /**
     * Available if the interaction is a NOTE type interaction.
     */
    noteInteraction?: Schema$NoteInteraction;
    /**
     * Other participant, such as maillist, GAIA group. May contain participants for which CIH was not able to determine if they are either Googler or Customer.
     */
    otherParticipant?: Schema$Participant[];
    /**
     * Contains Partner Search data for interactions from PARTNERSEARCH origin.
     */
    partnerSearchData?: Schema$PartnerSearchData;
    /**
     * Available if the interaction is a PHONE type interaction.
     */
    phoneInteraction?: Schema$PhoneInteraction;
    /**
     * Primary key of the interaction.
     */
    sourceSystemPrimaryKey?: string | null;
    /**
     * If the interaction has one description, use summary. If it has a subject or summary and a longer description, use detailed_descripton for the body. For summary, only the first 128 characters are stored. If truncation was necessary, summary_truncated will be true.
     */
    summary?: string | null;
    /**
     * Indicates if the summary is truncated.
     */
    summaryTruncated?: boolean | null;
    /**
     * Available if the interaction is a TASK type interaction.
     */
    taskInteraction?: Schema$TaskInteraction;
    /**
     * Timestamp of the interaction as the number of microseconds since the Epoch.
     */
    timestamp?: string | null;
    /**
     * Contains Trax data for interactions from TRAX origin.
     */
    traxData?: Schema$TraxData;
    /**
     * Available if the interaction is a TRAX type interaction.
     */
    traxInteraction?: Schema$TraxInteraction;
    /**
     * Contains UserComm data for interactions from USERCOMM origin.
     */
    userCommData?: Schema$UserCommData;
  }
  /**
   * Response to UserInteractions.list. Contains Entity and UserInteraction data
   */
  export interface Schema$UserInteractionsListResponse {
    /**
     * Entity structures to be returned.
     */
    entity?: Schema$Entity[];
    /**
     * UserInteractions.
     */
    items?: Schema$UserInteraction[];
    /**
     * Kind of this resource.
     */
    kind?: string | null;
    /**
     * Token to pass in for pagination for the next page. Token is present only if more interactions are available.
     */
    nextPageToken?: string | null;
  }

  export class Resource$Associatedemails {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * cih.associatedEmails.create
     * @desc Associates an AdWords customer id to an email address.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cih.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cih = google.cih('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cih.associatedEmails.create({
     *     // The AdWords customer Id the email will be associated to.
     *     customerId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "emailAddress": "my_emailAddress",
     *       //   "kind": "my_kind",
     *       //   "operator": "my_operator"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "emailAddress": "my_emailAddress",
     *   //   "kind": "my_kind",
     *   //   "operator": "my_operator"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias cih.associatedEmails.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.customerId The AdWords customer Id the email will be associated to.
     * @param {().AssociatedEmail} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params: Params$Resource$Associatedemails$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Associatedemails$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AssociatedEmail>;
    create(
      params: Params$Resource$Associatedemails$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Associatedemails$Create,
      options: MethodOptions | BodyResponseCallback<Schema$AssociatedEmail>,
      callback: BodyResponseCallback<Schema$AssociatedEmail>
    ): void;
    create(
      params: Params$Resource$Associatedemails$Create,
      callback: BodyResponseCallback<Schema$AssociatedEmail>
    ): void;
    create(callback: BodyResponseCallback<Schema$AssociatedEmail>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Associatedemails$Create
        | BodyResponseCallback<Schema$AssociatedEmail>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AssociatedEmail>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AssociatedEmail>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AssociatedEmail> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Associatedemails$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Associatedemails$Create;
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
              rootUrl + '/cih/v3/associatedEmails/insert/{customerId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['customerId'],
        pathParams: ['customerId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AssociatedEmail>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$AssociatedEmail>(parameters);
      }
    }

    /**
     * cih.associatedEmails.delete
     * @desc Dissociates an AdWords customer id from an email address.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cih.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cih = google.cih('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cih.associatedEmails.delete({
     *     // The AdWords customer Id the email will be dissociated from.
     *     customerId: 'placeholder-value',
     *     // The email address.
     *     emailAddress: 'placeholder-value',
     *     // The program or person who initiated the operation.
     *     operator: 'placeholder-value',
     *   });
     *   console.log(res.data);
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias cih.associatedEmails.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.customerId The AdWords customer Id the email will be dissociated from.
     * @param {string} params.emailAddress The email address.
     * @param {string} params.operator The program or person who initiated the operation.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params: Params$Resource$Associatedemails$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Associatedemails$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Associatedemails$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Associatedemails$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Associatedemails$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Associatedemails$Delete
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
        {}) as Params$Resource$Associatedemails$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Associatedemails$Delete;
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
              rootUrl + '/cih/v3/associatedEmails/delete/{customerId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['customerId', 'emailAddress', 'operator'],
        pathParams: ['customerId'],
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

  export interface Params$Resource$Associatedemails$Create
    extends StandardParameters {
    /**
     * The AdWords customer Id the email will be associated to.
     */
    customerId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AssociatedEmail;
  }
  export interface Params$Resource$Associatedemails$Delete
    extends StandardParameters {
    /**
     * The AdWords customer Id the email will be dissociated from.
     */
    customerId?: string;
    /**
     * The email address.
     */
    emailAddress?: string;
    /**
     * The program or person who initiated the operation.
     */
    operator?: string;
  }

  export class Resource$Userinteractions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * cih.userInteractions.get
     * @desc Gets an interaction.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cih.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cih = google.cih('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cih.userInteractions.get({
     *     // Represents the Id of the Entity whose interaction will be returned.
     *     entityId: 'placeholder-value',
     *     // Represents the Type of the entity whose interaction will be returned. Possible Values: COMPANY, ADWORDS_CID, EMAIL, ADDRESS_DIGEST, GAIA_ID.
     *     entityType: 'placeholder-value',
     *     // The type of the interaction to be returned.
     *     interactionType: 'placeholder-value',
     *     // the timestamp of the interaction to be returned. It is measured as the number of microseconds since the Epoch.
     *     timestamp: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adoptionInteraction": {},
     *   //   "advertiserExperienceData": {},
     *   //   "casesData": {},
     *   //   "chatInteraction": {},
     *   //   "contactGaiaId": "my_contactGaiaId",
     *   //   "customer": [],
     *   //   "detailedDescription": "my_detailedDescription",
     *   //   "detailedDescriptionTruncated": false,
     *   //   "emailInteraction": {},
     *   //   "entity": {},
     *   //   "gammaData": {},
     *   //   "genieData": {},
     *   //   "goalInteraction": {},
     *   //   "googler": [],
     *   //   "greenTeaData": {},
     *   //   "grmData": {},
     *   //   "hangoutInteraction": {},
     *   //   "helpcenterData": {},
     *   //   "incentiveInteraction": {},
     *   //   "incentivesData": {},
     *   //   "initiator": {},
     *   //   "interactionOrigin": "my_interactionOrigin",
     *   //   "interactionType": "my_interactionType",
     *   //   "kind": "my_kind",
     *   //   "language": "my_language",
     *   //   "marketingEmailInteraction": {},
     *   //   "meetingInteraction": {},
     *   //   "metaType": "my_metaType",
     *   //   "noteInteraction": {},
     *   //   "otherParticipant": [],
     *   //   "partnerSearchData": {},
     *   //   "phoneInteraction": {},
     *   //   "sourceSystemPrimaryKey": "my_sourceSystemPrimaryKey",
     *   //   "summary": "my_summary",
     *   //   "summaryTruncated": false,
     *   //   "taskInteraction": {},
     *   //   "timestamp": "my_timestamp",
     *   //   "traxData": {},
     *   //   "traxInteraction": {},
     *   //   "userCommData": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias cih.userInteractions.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.entityId Represents the Id of the Entity whose interaction will be returned.
     * @param {string} params.entityType Represents the Type of the entity whose interaction will be returned. Possible Values: COMPANY, ADWORDS_CID, EMAIL, ADDRESS_DIGEST, GAIA_ID.
     * @param {string} params.interactionType The type of the interaction to be returned.
     * @param {string} params.timestamp the timestamp of the interaction to be returned. It is measured as the number of microseconds since the Epoch.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Userinteractions$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Userinteractions$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UserInteraction>;
    get(
      params: Params$Resource$Userinteractions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Userinteractions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$UserInteraction>,
      callback: BodyResponseCallback<Schema$UserInteraction>
    ): void;
    get(
      params: Params$Resource$Userinteractions$Get,
      callback: BodyResponseCallback<Schema$UserInteraction>
    ): void;
    get(callback: BodyResponseCallback<Schema$UserInteraction>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Userinteractions$Get
        | BodyResponseCallback<Schema$UserInteraction>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UserInteraction>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UserInteraction>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$UserInteraction> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Userinteractions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Userinteractions$Get;
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
              '/cih/v3/userInteractions/{entityType}/{entityId}/{timestamp}/{interactionType}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [
          'entityType',
          'entityId',
          'timestamp',
          'interactionType',
        ],
        pathParams: ['entityId', 'entityType', 'interactionType', 'timestamp'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$UserInteraction>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$UserInteraction>(parameters);
      }
    }

    /**
     * cih.userInteractions.insert
     * @desc Inserts a new interaction to CIH.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cih.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cih = google.cih('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cih.userInteractions.insert({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "adoptionInteraction": {},
     *       //   "advertiserExperienceData": {},
     *       //   "casesData": {},
     *       //   "chatInteraction": {},
     *       //   "contactGaiaId": "my_contactGaiaId",
     *       //   "customer": [],
     *       //   "detailedDescription": "my_detailedDescription",
     *       //   "detailedDescriptionTruncated": false,
     *       //   "emailInteraction": {},
     *       //   "entity": {},
     *       //   "gammaData": {},
     *       //   "genieData": {},
     *       //   "goalInteraction": {},
     *       //   "googler": [],
     *       //   "greenTeaData": {},
     *       //   "grmData": {},
     *       //   "hangoutInteraction": {},
     *       //   "helpcenterData": {},
     *       //   "incentiveInteraction": {},
     *       //   "incentivesData": {},
     *       //   "initiator": {},
     *       //   "interactionOrigin": "my_interactionOrigin",
     *       //   "interactionType": "my_interactionType",
     *       //   "kind": "my_kind",
     *       //   "language": "my_language",
     *       //   "marketingEmailInteraction": {},
     *       //   "meetingInteraction": {},
     *       //   "metaType": "my_metaType",
     *       //   "noteInteraction": {},
     *       //   "otherParticipant": [],
     *       //   "partnerSearchData": {},
     *       //   "phoneInteraction": {},
     *       //   "sourceSystemPrimaryKey": "my_sourceSystemPrimaryKey",
     *       //   "summary": "my_summary",
     *       //   "summaryTruncated": false,
     *       //   "taskInteraction": {},
     *       //   "timestamp": "my_timestamp",
     *       //   "traxData": {},
     *       //   "traxInteraction": {},
     *       //   "userCommData": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adoptionInteraction": {},
     *   //   "advertiserExperienceData": {},
     *   //   "casesData": {},
     *   //   "chatInteraction": {},
     *   //   "contactGaiaId": "my_contactGaiaId",
     *   //   "customer": [],
     *   //   "detailedDescription": "my_detailedDescription",
     *   //   "detailedDescriptionTruncated": false,
     *   //   "emailInteraction": {},
     *   //   "entity": {},
     *   //   "gammaData": {},
     *   //   "genieData": {},
     *   //   "goalInteraction": {},
     *   //   "googler": [],
     *   //   "greenTeaData": {},
     *   //   "grmData": {},
     *   //   "hangoutInteraction": {},
     *   //   "helpcenterData": {},
     *   //   "incentiveInteraction": {},
     *   //   "incentivesData": {},
     *   //   "initiator": {},
     *   //   "interactionOrigin": "my_interactionOrigin",
     *   //   "interactionType": "my_interactionType",
     *   //   "kind": "my_kind",
     *   //   "language": "my_language",
     *   //   "marketingEmailInteraction": {},
     *   //   "meetingInteraction": {},
     *   //   "metaType": "my_metaType",
     *   //   "noteInteraction": {},
     *   //   "otherParticipant": [],
     *   //   "partnerSearchData": {},
     *   //   "phoneInteraction": {},
     *   //   "sourceSystemPrimaryKey": "my_sourceSystemPrimaryKey",
     *   //   "summary": "my_summary",
     *   //   "summaryTruncated": false,
     *   //   "taskInteraction": {},
     *   //   "timestamp": "my_timestamp",
     *   //   "traxData": {},
     *   //   "traxInteraction": {},
     *   //   "userCommData": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias cih.userInteractions.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().UserInteraction} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params: Params$Resource$Userinteractions$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Userinteractions$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UserInteraction>;
    insert(
      params: Params$Resource$Userinteractions$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Userinteractions$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$UserInteraction>,
      callback: BodyResponseCallback<Schema$UserInteraction>
    ): void;
    insert(
      params: Params$Resource$Userinteractions$Insert,
      callback: BodyResponseCallback<Schema$UserInteraction>
    ): void;
    insert(callback: BodyResponseCallback<Schema$UserInteraction>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Userinteractions$Insert
        | BodyResponseCallback<Schema$UserInteraction>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UserInteraction>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UserInteraction>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$UserInteraction> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Userinteractions$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Userinteractions$Insert;
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
            url: (rootUrl + '/cih/v3/userInteractions/insert').replace(
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
        createAPIRequest<Schema$UserInteraction>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$UserInteraction>(parameters);
      }
    }

    /**
     * cih.userInteractions.list
     * @desc Get a list of interactions for the given entity and its relatives if requested. The returned list is sorted by timestamp in descending order.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cih.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cih = google.cih('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cih.userInteractions.list({
     *     // List of entities to retrieve. At least one item must be present. Each item must be in 'ENTITY_TYPE:ENTITY_ID' format which ENTITY_TYPE is COMPANY, ADWORDS_CID, EMAIL, ADDRESS_DIGEST or GAIA_ID.
     *     entity: 'placeholder-value',
     *     // Primary or secondary entities, if available only interactions whose primary or secondary entities are given are returned. For info about the format of this field see the comments of UserInteractionsApiaryFilter proto.
     *     entityFilter: 'placeholder-value',
     *     // Indicates the inclusive or exclusive behavior of interactionOrigin field. See the description of interactionOrigin.
     *     excludePassedInteractionOrigin: 'placeholder-value',
     *     // Indicates the inclusive or exclusive behavior of interactionType field. See the description of interactionType.
     *     excludePassedInteractionType: 'placeholder-value',
     *     // By default, all interactions which apply to any member of the entity structure which contains the provided entity are returned. If include_related_interactions is false, then only the interactions which are associated directly with this entity are returned, and neither parent_entity nor child_entities in the Entity object returned by this operation are populated.
     *     includeRelatedInteractions: 'placeholder-value',
     *     // This limit is ignored if absent and all interactions regardless of their origin will be returned. Otherwise the meaning of this field depends on the include_interaction_origin field. 1. exclude_passed_interaction_origin is true: Only interactions whose Origin is contained in interaction_origin will be returned. 2. exclude_passed_interaction_origin is false: Only interactions whose Origin isn't contained in interaction_origin will be returned.
     *     interactionOrigin: 'placeholder-value',
     *     // This limit is ignored if absent and all interactions regardless of their type will be returned. Otherwise the meaning of this field depends on the exclude_passed_interaction_type field. 1. exclude_passed_interaction_type is true: Only interactions whose Type is contained in interaction_type will be returned. 2. exclude_passed_interaction_type is false: Only interactions whose Type isn't contained in interaction_type will be returned.
     *     interactionType: 'placeholder-value',
     *     // Request to get additional information about interaction participants, such as names, email addresses. May increase latency of this call.
     *     lookup_participant_info: 'placeholder-value',
     *     // The limit on the number of returned interactions. This is the maximum number of interactions which will be returned, starting with the most recent. Thie default value is 100. If it is equal to zero then only the entity structure is returned.
     *     maxInteractionsPerPage: 'placeholder-value',
     *     // The maximum number of results per page.
     *     maxResults: 'placeholder-value',
     *     // Represents the interaction's classification. Possible values: SALES, SUPPORT, MARKETING. For more info see http://go/cih-gt-api
     *     metaTypeFilter: 'placeholder-value',
     *     // Attempt to read at least this many main entity interactions. The default value is set to 0. Pagination is disabled if a positive value is set.
     *     minMainEntityInteractions: 'placeholder-value',
     *     // The pagination token.
     *     pageToken: 'placeholder-value',
     *     // If available only interactions whose phone number is given are returned. For info about the format of this field see the comments of UserInteractionsApiaryFilter proto.
     *     phoneMatcher: 'placeholder-value',
     *     // Upper limit on the timestamp for the returned interactions. It is measured as the number of microseconds since the Epoch.
     *     timestampEnd: 'placeholder-value',
     *     // Lower limit on the timestamp for the returned interactions. It is measured as the number of microseconds since the Epoch.
     *     timestampStart: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "entity": [],
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias cih.userInteractions.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.entity List of entities to retrieve. At least one item must be present. Each item must be in 'ENTITY_TYPE:ENTITY_ID' format which ENTITY_TYPE is COMPANY, ADWORDS_CID, EMAIL, ADDRESS_DIGEST or GAIA_ID.
     * @param {string=} params.entityFilter Primary or secondary entities, if available only interactions whose primary or secondary entities are given are returned. For info about the format of this field see the comments of UserInteractionsApiaryFilter proto.
     * @param {boolean=} params.excludePassedInteractionOrigin Indicates the inclusive or exclusive behavior of interactionOrigin field. See the description of interactionOrigin.
     * @param {boolean=} params.excludePassedInteractionType Indicates the inclusive or exclusive behavior of interactionType field. See the description of interactionType.
     * @param {boolean=} params.includeRelatedInteractions By default, all interactions which apply to any member of the entity structure which contains the provided entity are returned. If include_related_interactions is false, then only the interactions which are associated directly with this entity are returned, and neither parent_entity nor child_entities in the Entity object returned by this operation are populated.
     * @param {string=} params.interactionOrigin This limit is ignored if absent and all interactions regardless of their origin will be returned. Otherwise the meaning of this field depends on the include_interaction_origin field. 1. exclude_passed_interaction_origin is true: Only interactions whose Origin is contained in interaction_origin will be returned. 2. exclude_passed_interaction_origin is false: Only interactions whose Origin isn't contained in interaction_origin will be returned.
     * @param {string=} params.interactionType This limit is ignored if absent and all interactions regardless of their type will be returned. Otherwise the meaning of this field depends on the exclude_passed_interaction_type field. 1. exclude_passed_interaction_type is true: Only interactions whose Type is contained in interaction_type will be returned. 2. exclude_passed_interaction_type is false: Only interactions whose Type isn't contained in interaction_type will be returned.
     * @param {boolean=} params.lookup_participant_info Request to get additional information about interaction participants, such as names, email addresses. May increase latency of this call.
     * @param {integer=} params.maxInteractionsPerPage The limit on the number of returned interactions. This is the maximum number of interactions which will be returned, starting with the most recent. Thie default value is 100. If it is equal to zero then only the entity structure is returned.
     * @param {integer=} params.maxResults The maximum number of results per page.
     * @param {string=} params.metaTypeFilter Represents the interaction's classification. Possible values: SALES, SUPPORT, MARKETING. For more info see http://go/cih-gt-api
     * @param {integer=} params.minMainEntityInteractions Attempt to read at least this many main entity interactions. The default value is set to 0. Pagination is disabled if a positive value is set.
     * @param {string=} params.pageToken The pagination token.
     * @param {string=} params.phoneMatcher If available only interactions whose phone number is given are returned. For info about the format of this field see the comments of UserInteractionsApiaryFilter proto.
     * @param {string=} params.timestampEnd Upper limit on the timestamp for the returned interactions. It is measured as the number of microseconds since the Epoch.
     * @param {string=} params.timestampStart Lower limit on the timestamp for the returned interactions. It is measured as the number of microseconds since the Epoch.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Userinteractions$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Userinteractions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UserInteractionsListResponse>;
    list(
      params: Params$Resource$Userinteractions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Userinteractions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$UserInteractionsListResponse>,
      callback: BodyResponseCallback<Schema$UserInteractionsListResponse>
    ): void;
    list(
      params: Params$Resource$Userinteractions$List,
      callback: BodyResponseCallback<Schema$UserInteractionsListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$UserInteractionsListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Userinteractions$List
        | BodyResponseCallback<Schema$UserInteractionsListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UserInteractionsListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UserInteractionsListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$UserInteractionsListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Userinteractions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Userinteractions$List;
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
            url: (rootUrl + '/cih/v3/userInteractions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['entity'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$UserInteractionsListResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$UserInteractionsListResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Userinteractions$Get
    extends StandardParameters {
    /**
     * Represents the Id of the Entity whose interaction will be returned.
     */
    entityId?: string;
    /**
     * Represents the Type of the entity whose interaction will be returned. Possible Values: COMPANY, ADWORDS_CID, EMAIL, ADDRESS_DIGEST, GAIA_ID.
     */
    entityType?: string;
    /**
     * The type of the interaction to be returned.
     */
    interactionType?: string;
    /**
     * the timestamp of the interaction to be returned. It is measured as the number of microseconds since the Epoch.
     */
    timestamp?: string;
  }
  export interface Params$Resource$Userinteractions$Insert
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$UserInteraction;
  }
  export interface Params$Resource$Userinteractions$List
    extends StandardParameters {
    /**
     * List of entities to retrieve. At least one item must be present. Each item must be in 'ENTITY_TYPE:ENTITY_ID' format which ENTITY_TYPE is COMPANY, ADWORDS_CID, EMAIL, ADDRESS_DIGEST or GAIA_ID.
     */
    entity?: string[];
    /**
     * Primary or secondary entities, if available only interactions whose primary or secondary entities are given are returned. For info about the format of this field see the comments of UserInteractionsApiaryFilter proto.
     */
    entityFilter?: string[];
    /**
     * Indicates the inclusive or exclusive behavior of interactionOrigin field. See the description of interactionOrigin.
     */
    excludePassedInteractionOrigin?: boolean;
    /**
     * Indicates the inclusive or exclusive behavior of interactionType field. See the description of interactionType.
     */
    excludePassedInteractionType?: boolean;
    /**
     * By default, all interactions which apply to any member of the entity structure which contains the provided entity are returned. If include_related_interactions is false, then only the interactions which are associated directly with this entity are returned, and neither parent_entity nor child_entities in the Entity object returned by this operation are populated.
     */
    includeRelatedInteractions?: boolean;
    /**
     * This limit is ignored if absent and all interactions regardless of their origin will be returned. Otherwise the meaning of this field depends on the include_interaction_origin field. 1. exclude_passed_interaction_origin is true: Only interactions whose Origin is contained in interaction_origin will be returned. 2. exclude_passed_interaction_origin is false: Only interactions whose Origin isn't contained in interaction_origin will be returned.
     */
    interactionOrigin?: string[];
    /**
     * This limit is ignored if absent and all interactions regardless of their type will be returned. Otherwise the meaning of this field depends on the exclude_passed_interaction_type field. 1. exclude_passed_interaction_type is true: Only interactions whose Type is contained in interaction_type will be returned. 2. exclude_passed_interaction_type is false: Only interactions whose Type isn't contained in interaction_type will be returned.
     */
    interactionType?: string[];
    /**
     * Request to get additional information about interaction participants, such as names, email addresses. May increase latency of this call.
     */
    lookup_participant_info?: boolean;
    /**
     * The limit on the number of returned interactions. This is the maximum number of interactions which will be returned, starting with the most recent. Thie default value is 100. If it is equal to zero then only the entity structure is returned.
     */
    maxInteractionsPerPage?: number;
    /**
     * The maximum number of results per page.
     */
    maxResults?: number;
    /**
     * Represents the interaction's classification. Possible values: SALES, SUPPORT, MARKETING. For more info see http://go/cih-gt-api
     */
    metaTypeFilter?: string[];
    /**
     * Attempt to read at least this many main entity interactions. The default value is set to 0. Pagination is disabled if a positive value is set.
     */
    minMainEntityInteractions?: number;
    /**
     * The pagination token.
     */
    pageToken?: string;
    /**
     * If available only interactions whose phone number is given are returned. For info about the format of this field see the comments of UserInteractionsApiaryFilter proto.
     */
    phoneMatcher?: string[];
    /**
     * Upper limit on the timestamp for the returned interactions. It is measured as the number of microseconds since the Epoch.
     */
    timestampEnd?: string;
    /**
     * Lower limit on the timestamp for the returned interactions. It is measured as the number of microseconds since the Epoch.
     */
    timestampStart?: string;
  }
}
