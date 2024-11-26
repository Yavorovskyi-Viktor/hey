import { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  AccessToken: { input: any; output: any; }
  AdvancedContractConditionValue: { input: any; output: any; }
  BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  BlockchainData: { input: any; output: any; }
  ChainId: { input: any; output: any; }
  Cursor: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  Encryptable: { input: any; output: any; }
  EvmAddress: { input: any; output: any; }
  GeneratedNotificationId: { input: any; output: any; }
  IdToken: { input: any; output: any; }
  LegacyProfileId: { input: any; output: any; }
  LegacyPublicationId: { input: any; output: any; }
  LegacyRefreshToken: { input: any; output: any; }
  Locale: { input: any; output: any; }
  MetadataId: { input: any; output: any; }
  PostId: { input: any; output: any; }
  RefreshToken: { input: any; output: any; }
  Signature: { input: any; output: any; }
  Tag: { input: any; output: any; }
  TxHash: { input: any; output: any; }
  URI: { input: any; output: any; }
  URL: { input: any; output: any; }
  UUID: { input: any; output: any; }
  UsernameValue: { input: any; output: any; }
  Void: { input: any; output: any; }
};

/** The comparison operator to use. In case of boolean functions you can only use EQUAL or NOT_EQUAL */
export enum AccessConditionComparison {
  Equal = 'EQUAL',
  GreaterThan = 'GREATER_THAN',
  GreaterThanOrEqual = 'GREATER_THAN_OR_EQUAL',
  LessThan = 'LESS_THAN',
  LessThanOrEqual = 'LESS_THAN_OR_EQUAL',
  NotEqual = 'NOT_EQUAL'
}

/** AccessConditionType */
export type AccessConditionType = AdvancedContractCondition | CollectCondition | EoaOwnershipCondition | Erc20OwnershipCondition | FollowCondition | NftOwnershipCondition | ProfileOwnershipCondition;

export type Account = {
  __typename?: 'Account';
  address: Scalars['EvmAddress']['output'];
  /** The metadata of the account. */
  metadata?: Maybe<AccountMetadata>;
  /** The operations for the account. */
  operations?: Maybe<LoggedInAccountOperations>;
  /**
   * The owner of the account - note if the Account is not a lens account this will return the
   * address of the account itself.
   */
  owner: Scalars['EvmAddress']['output'];
  /** The score of the account. */
  score: Scalars['Int']['output'];
  /** The username linked to the account. */
  username?: Maybe<Username>;
};


export type AccountUsernameArgs = {
  request?: InputMaybe<AccountUsernameRequest>;
};

export type AccountAvailable = AccountManaged | AccountOwned;

export type AccountBlocked = {
  __typename?: 'AccountBlocked';
  account: Account;
  blockedAt: Scalars['DateTime']['output'];
};

export type AccountFeedsStats = {
  __typename?: 'AccountFeedsStats';
  /** The total number of collects. */
  collects: Scalars['Int']['output'];
  /** The total number of comments. */
  comments: Scalars['Int']['output'];
  /** The total number of posts. */
  posts: Scalars['Int']['output'];
  /** The total number of quotes. */
  quotes: Scalars['Int']['output'];
  /** The total number of times the account has reacted. */
  reacted: Scalars['Int']['output'];
  /** The total number of reactions. */
  reactions: Scalars['Int']['output'];
  /** The total number of reposts. */
  reposts: Scalars['Int']['output'];
};

export type AccountFeedsStatsRequest = {
  /** The account to get stats for. */
  account: Scalars['EvmAddress']['input'];
  /** The feeds to get stats for. */
  forFeeds?: Array<Scalars['EvmAddress']['input']>;
};

export type AccountGraphsFollowStats = {
  __typename?: 'AccountGraphsFollowStats';
  /** The total number of followers. */
  followers: Scalars['Int']['output'];
  /** The total number of following. */
  following: Scalars['Int']['output'];
};

export type AccountGraphsStatsRequest = {
  /** The account to get stats for. */
  account: Scalars['EvmAddress']['input'];
  /** The graphs to get stats for. */
  forGraphs?: Array<Scalars['EvmAddress']['input']>;
};

export type AccountManaged = {
  __typename?: 'AccountManaged';
  /** The account you are managing. */
  account: Account;
  /** The date the account management was added. */
  addedAt: Scalars['DateTime']['output'];
  /** The permissions you have on the account. */
  permissions: AccountManagerPermissions;
};

export type AccountManager = {
  __typename?: 'AccountManager';
  /** The date the account manager was added. */
  addedAt: Scalars['DateTime']['output'];
  /** Whether the account manager is a Lens manager. */
  isLensManager: Scalars['Boolean']['output'];
  /** The address of the account manager. */
  manager: Scalars['EvmAddress']['output'];
  /** The permissions the account manager has. */
  permissions: AccountManagerPermissions;
};

export type AccountManagerChallengeRequest = {
  /** The address of the Lens Account. */
  account: Scalars['EvmAddress']['input'];
  /**
   * The App you intend to authenticate with.
   *
   * It MUST be a valid App address.
   * Note: On the testnet, it will default to `0x90C8C68D0ABFB40D4FCD72316A65E42161520BC3`, the
   * playground app. This is to make it easier if you forget to set it. This may change in the
   * future.
   */
  app?: Scalars['EvmAddress']['input'];
  /** The address of the Account Manager. */
  manager: Scalars['EvmAddress']['input'];
};

export type AccountManagerPermissions = {
  __typename?: 'AccountManagerPermissions';
  /** Whether the account can execute transactions. */
  canExecuteTransactions: Scalars['Boolean']['output'];
  /** Whether the account can set the metadata URI. */
  canSetMetadataUri: Scalars['Boolean']['output'];
  /** Whether the account can transfer native tokens. */
  canTransferNative: Scalars['Boolean']['output'];
  /** Whether the account can transfer tokens. */
  canTransferTokens: Scalars['Boolean']['output'];
};

export type AccountManagerPermissionsInput = {
  /** Whether the account can execute transactions. */
  canExecuteTransactions: Scalars['Boolean']['input'];
  /** Whether the account can set the metadata URI. */
  canSetMetadataUri: Scalars['Boolean']['input'];
  /** Whether the account can transfer native tokens. */
  canTransferNative: Scalars['Boolean']['input'];
  /** Whether the account can transfer tokens. */
  canTransferTokens: Scalars['Boolean']['input'];
};

export type AccountManagersRequest = {
  /** The cursor. */
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  /** The page size. */
  pageSize?: PageSize;
};

export type AccountMention = {
  __typename?: 'AccountMention';
  /** The account that was mentioned. */
  account: Scalars['EvmAddress']['output'];
  /** The namespace that was used in a mention. */
  namespace: Scalars['EvmAddress']['output'];
  /**
   * The replacement information.
   * Use to replace mentions in the post content.
   */
  replace: AccountMentionReplace;
};

export type AccountMentionReplace = {
  __typename?: 'AccountMentionReplace';
  from: Scalars['String']['output'];
  to: Scalars['String']['output'];
};

export type AccountMetadata = {
  __typename?: 'AccountMetadata';
  /**
   * A bag of attributes that can be used to store any kind of metadata that is not currently
   * supported by the standard. Over time, common attributes will be added to the standard and
   * their usage as arbitrary attributes will be discouraged.
   */
  attributes: Array<MetadataAttribute>;
  /** The Account bio as markdown. */
  bio?: Maybe<Scalars['String']['output']>;
  /** The Account cover picture. */
  coverPicture?: Maybe<Scalars['URI']['output']>;
  /**
   * A unique identifier that in storages like IPFS ensures the uniqueness of the metadata URI.
   * Use a UUID if unsure.
   */
  id: Scalars['String']['output'];
  /** The Account display name. */
  name?: Maybe<Scalars['String']['output']>;
  /** The Account picture. */
  picture?: Maybe<Scalars['URI']['output']>;
};

export type AccountOwned = {
  __typename?: 'AccountOwned';
  /** The account you own. */
  account: Account;
  /** The date the account was created. */
  addedAt: Scalars['DateTime']['output'];
};

export type AccountOwnerChallengeRequest = {
  /** The address of the Lens Account. */
  account: Scalars['EvmAddress']['input'];
  /**
   * The App you intend to authenticate with.
   *
   * It MUST be a valid App address.
   * Note: On the testnet, it will default to `0x90C8C68D0ABFB40D4FCD72316A65E42161520BC3`, the
   * playground app. This is to make it easier if you forget to set it. This may change in the
   * future.
   */
  app?: Scalars['EvmAddress']['input'];
  /** The address of the Account Owner. */
  owner: Scalars['EvmAddress']['input'];
};

export type AccountPostReaction = {
  __typename?: 'AccountPostReaction';
  account: Account;
  reactions: Array<PostReaction>;
};

export enum AccountReportReason {
  Impersonation = 'IMPERSONATION',
  Other = 'OTHER',
  RepetitiveSpam = 'REPETITIVE_SPAM'
}

export type AccountRequest = {
  /** The account address. */
  address?: InputMaybe<Scalars['EvmAddress']['input']>;
  /** The legacy profile ID. */
  legacyProfileId?: InputMaybe<Scalars['LegacyProfileId']['input']>;
  /** The transaction hash you created the account with. */
  txHash?: InputMaybe<Scalars['TxHash']['input']>;
  /** The username. */
  username?: InputMaybe<UsernameInput>;
};

export enum AccountSearchOrderBy {
  AccountScore = 'ACCOUNT_SCORE',
  Default = 'DEFAULT'
}

export type AccountSearchRequest = {
  /** The cursor. */
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  /** The local name to search for. */
  localName: Scalars['String']['input'];
  /** Optional. The username prefix to search for. */
  namespace?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The order by. */
  orderBy?: AccountSearchOrderBy;
  /** The page size. */
  pageSize?: PageSize;
};

export type AccountStats = {
  __typename?: 'AccountStats';
  /** The stats for the feeds. */
  feedStats: AccountFeedsStats;
  /** The stats for the graphs. */
  graphFollowStats: AccountGraphsFollowStats;
};

export type AccountStatsRequest = {
  /** The account to get stats for. */
  account: Scalars['EvmAddress']['input'];
  /** The feeds to get stats for. */
  forFeeds?: Array<Scalars['EvmAddress']['input']>;
  /** The graphs to get stats for. */
  forGraphs?: Array<Scalars['EvmAddress']['input']>;
};

export type AccountUsernameRequest = {
  /** The namespace to get account assigned username */
  namespace?: Scalars['EvmAddress']['input'];
};

export type AccountsAvailableRequest = {
  /** The cursor. */
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  /** The visibility of hidden accounts. */
  hiddenFilter?: ManagedAccountsVisibility;
  /** Whether to include owned accounts. Defaults to true. */
  includeOwned?: Scalars['Boolean']['input'];
  /** The account to get managed by. */
  managedBy: Scalars['EvmAddress']['input'];
  /** The page size. */
  pageSize?: PageSize;
};

export type AccountsBlockedRequest = {
  /** The cursor. */
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  /** The page size. */
  pageSize?: PageSize;
};

export type AccountsRequest = {
  /** The addresses to get. */
  addresses?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  /** The legacy profile IDs to get. */
  legacyProfileIds?: InputMaybe<Array<Scalars['LegacyProfileId']['input']>>;
  /** The usernames to get. */
  usernames?: InputMaybe<Array<UsernameInput>>;
};

export type ActionFilter = {
  actionType?: InputMaybe<PostActionType>;
  address?: InputMaybe<Scalars['EvmAddress']['input']>;
  category?: InputMaybe<PostActionCategoryType>;
};

export type ActionInfo = KnownAction | UnknownAction;

export type ActionInputInfo = {
  __typename?: 'ActionInputInfo';
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type AddAccountManagerRequest = {
  /** The address to add as a manager. */
  address: Scalars['EvmAddress']['input'];
  /** The permissions to give the account manager. */
  permissions: AccountManagerPermissionsInput;
};

export type AddAccountManagerResult = SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type AddAppAuthorizationEndpointRequest = {
  /** The app. */
  app: Scalars['EvmAddress']['input'];
  /** The app authorization endpoint. */
  endpoint: Scalars['URL']['input'];
};

export type AddReactionFailure = {
  __typename?: 'AddReactionFailure';
  reason: Scalars['String']['output'];
};

export type AddReactionRequest = {
  /** The post to react to. */
  post: Scalars['PostId']['input'];
  /** The reaction to add. */
  reaction: PostReactionType;
};

export type AddReactionResponse = {
  __typename?: 'AddReactionResponse';
  success: Scalars['Boolean']['output'];
};

export type AddReactionResult = AddReactionFailure | AddReactionResponse;

export type AdvancedContractCondition = {
  __typename?: 'AdvancedContractCondition';
  /** The contract ABI. Has to be in human readable single string format containing the signature of the function you want to call. See https://docs.ethers.org/v5/api/utils/abi/formats/#abi-formats--human-readable-abi for more info */
  abi: Scalars['String']['output'];
  /**
   * The comparison operator to use. In case of boolean functions you can only use EQUAL or
   * NOT_EQUAL
   */
  comparison: AccessConditionComparison;
  contract: NetworkAddress;
  /** The name of the function you want to call */
  functionName: Scalars['String']['output'];
  /**
   * The parameters to pass to the function. Must be exactly matching the function arguments.
   * You *must* pass in the `:userAddress` parameter to represent the decrypter address. Any
   * array or tuple arguments, must be stringified JSON arrays.
   */
  params: Array<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  /** The comparison value. Accepts 'true', 'false' or a number */
  value: Scalars['AdvancedContractConditionValue']['output'];
};

export type Amount = {
  __typename?: 'Amount';
  asset: Asset;
  /**
   * Token value in its main unit (e.g., 1.5 DAI), not in the smallest fraction (e.g.,
   * wei).
   */
  value: Scalars['BigDecimal']['output'];
};

export type AmountInput = {
  /**
   * The token address. To represent the native token, use the
   * 0x000000000000000000000000000000000000800a.
   */
  currency: Scalars['EvmAddress']['input'];
  /**
   * Token value in its main unit (e.g., 1.5 DAI), not in the smallest fraction (e.g.,
   * wei).
   */
  value: Scalars['BigDecimal']['input'];
};

/** AccessConditionCriteriaItem */
export type AnyAccessCondition = AdvancedContractCondition | BooleanAndCondition | BooleanOrCondition | CollectCondition | EoaOwnershipCondition | Erc20OwnershipCondition | FollowCondition | NftOwnershipCondition | ProfileOwnershipCondition;

/**
 * AnyMedia
 *
 * <details><summary>JSON schema</summary>
 *
 * ```json
 * {
 * "anyOf": [
 * {
 * "$ref": "#/$defs/MediaAudio"
 * },
 * {
 * "$ref": "#/$defs/MediaImage"
 * },
 * {
 * "$ref": "#/$defs/MediaVideo"
 * }
 * ]
 * }
 * ```
 * </details>
 */
export type AnyMedia = MediaAudio | MediaImage | MediaVideo;

export type AnyPost = Post | Repost;

export type App = {
  __typename?: 'App';
  address: Scalars['EvmAddress']['output'];
  createdAt: Scalars['DateTime']['output'];
  defaultFeedAddress?: Maybe<Scalars['EvmAddress']['output']>;
  graphAddress?: Maybe<Scalars['EvmAddress']['output']>;
  metadata?: Maybe<AppMetadata>;
  namespaceAddress?: Maybe<Scalars['EvmAddress']['output']>;
  sponsorshipAddress?: Maybe<Scalars['EvmAddress']['output']>;
  treasuryAddress?: Maybe<Scalars['EvmAddress']['output']>;
};

export type AppMetadata = {
  __typename?: 'AppMetadata';
  /** An optional short and detailed description of the app, explaining its features and purpose. */
  description?: Maybe<Scalars['String']['output']>;
  /** The Developer of the app. */
  developer: Scalars['String']['output'];
  /** The Logo icon for the app. */
  logo?: Maybe<Scalars['URI']['output']>;
  /** The name of the app. */
  name: Scalars['String']['output'];
  /** The platforms supported by the app. */
  platforms: Array<AppMetadataLensPlatformsItem>;
  /** The privacy policy for the app. */
  privacyPolicy?: Maybe<Scalars['URI']['output']>;
  /** The terms of service for the app. */
  termsOfService?: Maybe<Scalars['URI']['output']>;
  /** The url of the app. */
  url: Scalars['URI']['output'];
};

export enum AppMetadataLensPlatformsItem {
  Android = 'ANDROID',
  Ios = 'IOS',
  Web = 'WEB'
}

export type AppRequest = {
  /** The app */
  app?: InputMaybe<Scalars['EvmAddress']['input']>;
  /** The transaction hash you created the app with. */
  txHash?: InputMaybe<Scalars['TxHash']['input']>;
};

export enum AppsOrderBy {
  Alphabetical = 'ALPHABETICAL',
  LatestFirst = 'LATEST_FIRST',
  OldestFirst = 'OLDEST_FIRST'
}

export type AppsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  orderBy?: AppsOrderBy;
  pageSize?: PageSize;
};

export type ArticleMetadata = {
  __typename?: 'ArticleMetadata';
  /** Any attachment you want to include with it. */
  attachments: Array<AnyMedia>;
  /**
   * A bag of attributes that can be used to store any kind of metadata that is not currently
   * supported by the standard. Over time, common attributes will be added to the standard and
   * their usage as arbitrary attributes will be discouraged.
   */
  attributes: Array<MetadataAttribute>;
  content: Scalars['Encryptable']['output'];
  /** Specify a content warning. */
  contentWarning?: Maybe<ContentWarning>;
  encryptedWith?: Maybe<EncryptionStrategy>;
  id: Scalars['MetadataId']['output'];
  locale: Scalars['Locale']['output'];
  /** The main focus of the post. */
  mainContentFocus: MainContentFocus;
  /** An arbitrary list of tags. */
  tags?: Maybe<Array<Scalars['Tag']['output']>>;
  /** The optional article title. */
  title?: Maybe<Scalars['String']['output']>;
};

export type Asset = Erc20;

export type AssignUsernameResponse = {
  __typename?: 'AssignUsernameResponse';
  hash: Scalars['TxHash']['output'];
};

export type AssignUsernameToAccountRequest = {
  username: UsernameInput;
};

export type AssignUsernameToAccountResult = AssignUsernameResponse | SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type AudioMetadata = {
  __typename?: 'AudioMetadata';
  /** The other attachments you want to include with it. */
  attachments: Array<AnyMedia>;
  /**
   * A bag of attributes that can be used to store any kind of metadata that is not currently
   * supported by the standard. Over time, common attributes will be added to the standard and
   * their usage as arbitrary attributes will be discouraged.
   */
  attributes: Array<MetadataAttribute>;
  audio: MediaAudio;
  content: Scalars['Encryptable']['output'];
  /** Specify a content warning. */
  contentWarning?: Maybe<ContentWarning>;
  encryptedWith?: Maybe<EncryptionStrategy>;
  id: Scalars['MetadataId']['output'];
  locale: Scalars['Locale']['output'];
  /** The main focus of the post. */
  mainContentFocus: MainContentFocus;
  /** An arbitrary list of tags. */
  tags?: Maybe<Array<Scalars['Tag']['output']>>;
  /** The optional audio title. */
  title?: Maybe<Scalars['String']['output']>;
};

export type AuthenticatedSession = {
  __typename?: 'AuthenticatedSession';
  app: Scalars['EvmAddress']['output'];
  authenticationId: Scalars['UUID']['output'];
  browser?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  device?: Maybe<Scalars['String']['output']>;
  origin?: Maybe<Scalars['URL']['output']>;
  os?: Maybe<Scalars['String']['output']>;
  signer: Scalars['EvmAddress']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type AuthenticatedSessionsRequest = {
  /** You can optionally filter the authentications by the app that created them. */
  app?: InputMaybe<Scalars['EvmAddress']['input']>;
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  pageSize?: PageSize;
};

export type AuthenticationChallenge = {
  __typename?: 'AuthenticationChallenge';
  id: Scalars['UUID']['output'];
  text: Scalars['String']['output'];
};

export type AuthenticationResult = AuthenticationTokens | ExpiredChallengeError | ForbiddenError | WrongSignerError;

export type AuthenticationTokens = {
  __typename?: 'AuthenticationTokens';
  /** The Access Token to use as a Bearer token in authenticated Lens API requests. */
  accessToken: Scalars['AccessToken']['output'];
  idToken: Scalars['IdToken']['output'];
  /** The Refresh Token to use to obtain a new tokens triplet without re-authenticating. */
  refreshToken: Scalars['RefreshToken']['output'];
};

export type BlockError = {
  __typename?: 'BlockError';
  error: BlockErrorType;
};

export enum BlockErrorType {
  AlreadyBlocked = 'ALREADY_BLOCKED',
  Unauthorized = 'UNAUTHORIZED',
  Unknown = 'UNKNOWN'
}

export type BlockRequest = {
  /** The account to block. */
  account: Scalars['EvmAddress']['input'];
};

export type BlockResponse = {
  __typename?: 'BlockResponse';
  hash: Scalars['TxHash']['output'];
};

export type BlockResult = BlockError | BlockResponse | SelfFundedTransactionRequest | SponsoredTransactionRequest;

export type BookmarkPostRequest = {
  post: Scalars['PostId']['input'];
};

export type BooleanAndCondition = {
  __typename?: 'BooleanAndCondition';
  criteria: Array<AccessConditionType>;
  type: Scalars['String']['output'];
};

export type BooleanOrCondition = {
  __typename?: 'BooleanOrCondition';
  criteria: Array<AccessConditionType>;
  type: Scalars['String']['output'];
};

export type BooleanValue = {
  __typename?: 'BooleanValue';
  onChain: Scalars['Boolean']['output'];
  optimistic: Scalars['Boolean']['output'];
};

export type BuilderChallengeRequest = {
  /** The builder's address. Most typically the EOA of their wallet. */
  address: Scalars['EvmAddress']['input'];
};

export type CanFollowRequest = {
  graph: Scalars['EvmAddress']['input'];
};

export type CanUnfollowRequest = {
  graph: Scalars['EvmAddress']['input'];
};

/**
 * The request to generate a new authentication challenge.
 *
 * The optional fields are used to specify the role you are authenticating as.
 * You can only specify one role at a time.
 */
export type ChallengeRequest = {
  /** Use this to authenticate as an Account Manager. */
  accountManager?: InputMaybe<AccountManagerChallengeRequest>;
  /** Use this to authenticate as an Account Owner. */
  accountOwner?: InputMaybe<AccountOwnerChallengeRequest>;
  /** Use this to authenticate as a Builder. */
  builder?: InputMaybe<BuilderChallengeRequest>;
  /** Use this to authenticate as an Onboarding User. */
  onboardingUser?: InputMaybe<OnboardingUserChallengeRequest>;
};

export type CheckingInMetadata = {
  __typename?: 'CheckingInMetadata';
  /** The optional address of the location. */
  address?: Maybe<PhysicalAddress>;
  /** The other attachments you want to include with it. */
  attachments: Array<AnyMedia>;
  /**
   * A bag of attributes that can be used to store any kind of metadata that is not currently
   * supported by the standard. Over time, common attributes will be added to the standard and
   * their usage as arbitrary attributes will be discouraged.
   */
  attributes: Array<MetadataAttribute>;
  content: Scalars['Encryptable']['output'];
  /** Specify a content warning. */
  contentWarning?: Maybe<ContentWarning>;
  encryptedWith?: Maybe<EncryptionStrategy>;
  id: Scalars['MetadataId']['output'];
  locale: Scalars['Locale']['output'];
  /** Where you're checking in from (free form text). */
  location: Scalars['Encryptable']['output'];
  /** The main focus of the post. */
  mainContentFocus: MainContentFocus;
  /** The optional geographic position of the location. */
  position?: Maybe<Scalars['Encryptable']['output']>;
  /** An arbitrary list of tags. */
  tags?: Maybe<Array<Scalars['Tag']['output']>>;
};

export type CollectActionInput = {
  simpleCollectAction?: InputMaybe<SimpleCollectActionInput>;
};

/** CollectCondition */
export type CollectCondition = {
  __typename?: 'CollectCondition';
  publicationId: Scalars['LegacyPublicationId']['output'];
  thisPublication: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
};

export type CommentNotification = {
  __typename?: 'CommentNotification';
  comment: Post;
  id: Scalars['GeneratedNotificationId']['output'];
};

export enum ContentWarning {
  Nsfw = 'NSFW',
  Sensitive = 'SENSITIVE',
  Spoiler = 'SPOILER'
}

export type CreateAccountResponse = {
  __typename?: 'CreateAccountResponse';
  hash: Scalars['TxHash']['output'];
};

export type CreateAccountWithUsernameRequest = {
  /** Any account managers you wish to add to the account */
  accountManager?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  /** The account metadata uri */
  metadataUri: Scalars['URI']['input'];
  /** The username you wish to mint with the account */
  username: UsernameInput;
};

export type CreateAccountWithUsernameResult = CreateAccountResponse | InvalidUsername | SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type CreateAppRequest = {
  /** Any admins who need to manage this app also */
  admins?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  /** The default feed defaults to use the global feed */
  defaultFeed?: Scalars['EvmAddress']['input'];
  /** The app feeds defaults to use the global feed */
  feeds?: Array<Scalars['EvmAddress']['input']>;
  /** The app graph defaults to use the global graph */
  graph?: Scalars['EvmAddress']['input'];
  /** The app groups leave empty if none */
  groups?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  /** The app metadata uri */
  metadataUri?: InputMaybe<Scalars['URI']['input']>;
  /** The app username leave empty to use the lens username */
  namespace?: Scalars['EvmAddress']['input'];
  /** The app paymaster leave empty if none */
  paymaster?: InputMaybe<Scalars['EvmAddress']['input']>;
  /** The app signers leave empty if none */
  signers?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  /** The app treasury leave empty if none */
  treasury?: InputMaybe<Scalars['EvmAddress']['input']>;
};

export type CreateAppResponse = {
  __typename?: 'CreateAppResponse';
  hash: Scalars['TxHash']['output'];
};

export type CreateAppResult = CreateAppResponse | SelfFundedTransactionRequest | TransactionWillFail;

export type CreateFeedRequest = {
  /** Any admins who need to manage this feed */
  admins?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  /** The feed metadata uri */
  metadataUri?: InputMaybe<Scalars['URI']['input']>;
};

export type CreateFeedResponse = {
  __typename?: 'CreateFeedResponse';
  hash: Scalars['TxHash']['output'];
};

export type CreateFeedResult = CreateFeedResponse | SelfFundedTransactionRequest | TransactionWillFail;

export type CreateFollowRequest = {
  /** The account to follow. */
  account: Scalars['EvmAddress']['input'];
  /** The data required by any follow rules associated with the account being followed. */
  followRule?: InputMaybe<FollowRulesInput>;
  /** The graph to follow the account on. If not provided, the global graph is used. */
  graph?: Scalars['EvmAddress']['input'];
  /** The data required by the graph rules associated with the specified graph. */
  graphRule?: InputMaybe<GraphRulesInput>;
};

export type CreateGraphRequest = {
  /** Any admins who need to manage this graph */
  admins?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  /** The graph metadata uri */
  metadataUri?: InputMaybe<Scalars['URI']['input']>;
};

export type CreateGraphResponse = {
  __typename?: 'CreateGraphResponse';
  hash: Scalars['TxHash']['output'];
};

export type CreateGraphResult = CreateGraphResponse | SelfFundedTransactionRequest | TransactionWillFail;

export type CreateGroupRequest = {
  /** Any admins who need to manage this group */
  admins?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  /** The group metadata uri */
  metadataUri?: InputMaybe<Scalars['URI']['input']>;
};

export type CreateGroupResponse = {
  __typename?: 'CreateGroupResponse';
  hash: Scalars['TxHash']['output'];
};

export type CreateGroupResult = CreateGroupResponse | SelfFundedTransactionRequest | TransactionWillFail;

export type CreateNamespaceResponse = {
  __typename?: 'CreateNamespaceResponse';
  hash: Scalars['TxHash']['output'];
};

export type CreatePostRequest = {
  /** The actions to attach to the post. */
  actions?: InputMaybe<Array<PostActionInput>>;
  /** The post to comment on, if any. */
  commentOn?: InputMaybe<ReferencingPostInput>;
  /** The URI of the post metadata. */
  contentUri: Scalars['URI']['input'];
  /** The feed to post to. If not provided, the global feed is used. */
  feed?: Scalars['EvmAddress']['input'];
  /** The post to quote, if any. */
  quoteOf?: InputMaybe<ReferencingPostInput>;
};

export type CreateRepostRequest = {
  /** The feed to repost to. If not provided, the global feed is used. */
  feed?: Scalars['EvmAddress']['input'];
  /** The post to reference. */
  post: Scalars['PostId']['input'];
};

export type CreateUnfollowRequest = {
  /** The account to unfollow. */
  account: Scalars['EvmAddress']['input'];
  /**
   * The graph where the account is followed and should be unfollowed.
   * If not provided, the global graph is used.
   */
  graph?: Scalars['EvmAddress']['input'];
  /** The data required by the graph rules associated with the specified graph. */
  graphRule?: InputMaybe<GraphRulesInput>;
};

export type CreateUsernameNamespaceRequest = {
  /** Any admins who need to manage this feed */
  admins?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  /** The feed metadata uri */
  metadataUri?: InputMaybe<Scalars['URI']['input']>;
  /**
   * The namespace for example for lens this would be lens, and it means that the usernames will
   * be like lens/username
   */
  namespace: Scalars['String']['input'];
  /** The symbol for the namespace as usernames minted under the namespace are NFTs */
  symbol: Scalars['String']['input'];
};

export type CreateUsernameNamespaceResult = CreateNamespaceResponse | SelfFundedTransactionRequest | TransactionWillFail;

export type CreateUsernameRequest = {
  /** If you want to auto assign the username to the account default is true */
  autoAssign?: Scalars['Boolean']['input'];
  username: UsernameInput;
};

export type CreateUsernameResponse = {
  __typename?: 'CreateUsernameResponse';
  hash: Scalars['TxHash']['output'];
};

export type CreateUsernameResult = CreateUsernameResponse | SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type DebugPostMetadataRequest = {
  json?: InputMaybe<Scalars['String']['input']>;
  rawUri?: InputMaybe<Scalars['URI']['input']>;
  source: EntityType;
};

export type DebugPostMetadataResult = {
  __typename?: 'DebugPostMetadataResult';
  reason?: Maybe<Scalars['String']['output']>;
  valid: Scalars['Boolean']['output'];
};

export type DebugTransactionStatusRequest = {
  txHash: Scalars['TxHash']['input'];
};

export type DebugTransactionStatusResult = {
  __typename?: 'DebugTransactionStatusResult';
  blockExplorer?: Maybe<Scalars['URI']['output']>;
  reason: Scalars['String']['output'];
};

export type DeletePostRequest = {
  /** If needed, the feed rule data required to accomplish the deletion. */
  feedRules?: InputMaybe<FeedRulesInput>;
  /** The post to delete. */
  post: Scalars['PostId']['input'];
};

export type DeletePostResponse = {
  __typename?: 'DeletePostResponse';
  hash: Scalars['TxHash']['output'];
};

export type DeletePostResult = DeletePostResponse | SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type EditPostRequest = {
  contentUri: Scalars['URI']['input'];
  post: Scalars['PostId']['input'];
};

/** Contains EIP-712 transaction metadata. */
export type Eip712Meta = {
  __typename?: 'Eip712Meta';
  /** Custom signature used for cases where the signer's account is not an EOA. */
  customSignature?: Maybe<Scalars['BlockchainData']['output']>;
  /**
   * An array of bytes containing the bytecode of the contract being deployed and any related
   * contracts it can deploy.
   */
  factoryDeps: Array<Scalars['BlockchainData']['output']>;
  /** The maximum amount of gas the user is willing to pay for a single byte of pubdata. */
  gasPerPubdata: Scalars['BigInt']['output'];
  /** Parameters for configuring the custom paymaster for the transaction. */
  paymasterParams?: Maybe<PaymasterParams>;
};

export type Eip712TransactionRequest = {
  __typename?: 'Eip712TransactionRequest';
  /** The chain ID for the network this transaction is valid on. */
  chainId: Scalars['Int']['output'];
  /** The custom data for EIP-712 transaction metadata. */
  customData: Eip712Meta;
  /** The transaction data. */
  data: Scalars['BlockchainData']['output'];
  /** The sender of the transaction. */
  from: Scalars['EvmAddress']['output'];
  /** The maximum amount of gas to allow this transaction to consume. */
  gasLimit: Scalars['Int']['output'];
  /** The gas price to use. */
  gasPrice: Scalars['BigInt']['output'];
  /** The nonce of the transaction, used to prevent replay attacks. */
  nonce: Scalars['Int']['output'];
  /** The target of the transaction. */
  to: Scalars['EvmAddress']['output'];
  /** The transaction type: 113 for EIP-712 transactions. */
  type: Scalars['Int']['output'];
  /** The transaction value (in wei). */
  value?: Maybe<Scalars['BigInt']['output']>;
};

export type Eip1559TransactionRequest = {
  __typename?: 'Eip1559TransactionRequest';
  /** The chain ID for the network this transaction is valid on. */
  chainId: Scalars['Int']['output'];
  /** The transaction data. */
  data: Scalars['BlockchainData']['output'];
  /** The sender of the transaction. */
  from: Scalars['EvmAddress']['output'];
  /** The maximum amount of gas to allow this transaction to consume. */
  gasLimit: Scalars['Int']['output'];
  /**
   * The EIP_1559 maximum total fee to pay per gas. The actual
   * value used is protocol enforced to be the block's base fee.
   */
  maxFeePerGas: Scalars['BigInt']['output'];
  /** The EIP_1559 maximum priority fee to pay per gas. */
  maxPriorityFeePerGas: Scalars['BigInt']['output'];
  /** The nonce of the transaction, used to prevent replay attacks. */
  nonce: Scalars['Int']['output'];
  /** The target of the transaction. */
  to: Scalars['EvmAddress']['output'];
  /** The transaction type: 2 for EIP-1559 transactions. */
  type: Scalars['Int']['output'];
  /** The transaction value (in wei). */
  value?: Maybe<Scalars['BigInt']['output']>;
};

export type EmbedMetadata = {
  __typename?: 'EmbedMetadata';
  /** The other attachments you want to include with it. */
  attachments: Array<AnyMedia>;
  /**
   * A bag of attributes that can be used to store any kind of metadata that is not currently
   * supported by the standard. Over time, common attributes will be added to the standard and
   * their usage as arbitrary attributes will be discouraged.
   */
  attributes: Array<MetadataAttribute>;
  content: Scalars['Encryptable']['output'];
  /** Specify a content warning. */
  contentWarning?: Maybe<ContentWarning>;
  /** The embed URL. */
  embed: Scalars['Encryptable']['output'];
  encryptedWith?: Maybe<EncryptionStrategy>;
  id: Scalars['MetadataId']['output'];
  locale: Scalars['Locale']['output'];
  /** The main focus of the post. */
  mainContentFocus: MainContentFocus;
  /** An arbitrary list of tags. */
  tags?: Maybe<Array<Scalars['Tag']['output']>>;
};

export type EnableSignlessResult = SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type EncryptionStrategy = LitProtocolEncryptionStrategy;

export enum EntityType {
  Account = 'ACCOUNT',
  App = 'APP',
  Feed = 'FEED',
  Graph = 'GRAPH',
  Group = 'GROUP',
  Post = 'POST',
  Sponsorship = 'SPONSORSHIP',
  UsernameNamespace = 'USERNAME_NAMESPACE'
}

/** EoaOwnershipCondition */
export type EoaOwnershipCondition = {
  __typename?: 'EoaOwnershipCondition';
  address: Scalars['EvmAddress']['output'];
  type: Scalars['String']['output'];
};

export type Erc20 = {
  __typename?: 'Erc20';
  contract: NetworkAddress;
  decimals: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
};

/** Erc20OwnershipCondition */
export type Erc20OwnershipCondition = {
  __typename?: 'Erc20OwnershipCondition';
  amount: Amount;
  condition: AccessConditionComparison;
  type: Scalars['String']['output'];
};

export type EventMetadata = {
  __typename?: 'EventMetadata';
  /** The address of the event. */
  address?: Maybe<PhysicalAddress>;
  /** The other attachments you want to include with it. */
  attachments: Array<AnyMedia>;
  /**
   * A bag of attributes that can be used to store any kind of metadata that is not currently
   * supported by the standard. Over time, common attributes will be added to the standard and
   * their usage as arbitrary attributes will be discouraged.
   */
  attributes: Array<MetadataAttribute>;
  content: Scalars['Encryptable']['output'];
  /** Specify a content warning. */
  contentWarning?: Maybe<ContentWarning>;
  encryptedWith?: Maybe<EncryptionStrategy>;
  /** The event end time (ISO 8601 `YYYY-MM-DDTHH:mm:ss.sssZ`). */
  endsAt: Scalars['Encryptable']['output'];
  id: Scalars['MetadataId']['output'];
  /** The links you want to include with it. */
  links: Array<Scalars['Encryptable']['output']>;
  locale: Scalars['Locale']['output'];
  /** The location of the event. */
  location: EventMetadataLensLocation;
  /** The main focus of the post. */
  mainContentFocus: MainContentFocus;
  /** The geographic position of the event. */
  position?: Maybe<Scalars['Encryptable']['output']>;
  schedulingAdjustments?: Maybe<EventMetadataLensSchedulingAdjustments>;
  /** The event start time (ISO 8601 `YYYY-MM-DDTHH:mm:ss.sssZ`). */
  startsAt: Scalars['Encryptable']['output'];
  /** An arbitrary list of tags. */
  tags?: Maybe<Array<Scalars['Tag']['output']>>;
  /** The title of the event. */
  title?: Maybe<Scalars['String']['output']>;
};

export type EventMetadataLensLocation = {
  __typename?: 'EventMetadataLensLocation';
  physical?: Maybe<Scalars['Encryptable']['output']>;
  virtual?: Maybe<Scalars['URI']['output']>;
};

export type EventMetadataLensSchedulingAdjustments = {
  __typename?: 'EventMetadataLensSchedulingAdjustments';
  /**
   * Indicates a reference timezone for the event start and end times. If physical event, you
   * could use the timezone of the event location. If virtual event, the timezone of the event
   * organizer.
   */
  timezoneId: EventMetadataLensSchedulingAdjustmentsTimezoneId;
  timezoneOffset: Scalars['Float']['output'];
};

export enum EventMetadataLensSchedulingAdjustmentsTimezoneId {
  AfricaAbidjan = 'AFRICA_ABIDJAN',
  AfricaAccra = 'AFRICA_ACCRA',
  AfricaAddisAbaba = 'AFRICA_ADDIS_ABABA',
  AfricaAlgiers = 'AFRICA_ALGIERS',
  AfricaAsmera = 'AFRICA_ASMERA',
  AfricaBamako = 'AFRICA_BAMAKO',
  AfricaBangui = 'AFRICA_BANGUI',
  AfricaBanjul = 'AFRICA_BANJUL',
  AfricaBissau = 'AFRICA_BISSAU',
  AfricaBlantyre = 'AFRICA_BLANTYRE',
  AfricaBrazzaville = 'AFRICA_BRAZZAVILLE',
  AfricaBujumbura = 'AFRICA_BUJUMBURA',
  AfricaCairo = 'AFRICA_CAIRO',
  AfricaCasablanca = 'AFRICA_CASABLANCA',
  AfricaCeuta = 'AFRICA_CEUTA',
  AfricaConakry = 'AFRICA_CONAKRY',
  AfricaDakar = 'AFRICA_DAKAR',
  AfricaDarEsSalaam = 'AFRICA_DAR_ES_SALAAM',
  AfricaDjibouti = 'AFRICA_DJIBOUTI',
  AfricaDouala = 'AFRICA_DOUALA',
  AfricaElAaiun = 'AFRICA_EL_AAIUN',
  AfricaFreetown = 'AFRICA_FREETOWN',
  AfricaGaborone = 'AFRICA_GABORONE',
  AfricaHarare = 'AFRICA_HARARE',
  AfricaJohannesburg = 'AFRICA_JOHANNESBURG',
  AfricaJuba = 'AFRICA_JUBA',
  AfricaKampala = 'AFRICA_KAMPALA',
  AfricaKhartoum = 'AFRICA_KHARTOUM',
  AfricaKigali = 'AFRICA_KIGALI',
  AfricaKinshasa = 'AFRICA_KINSHASA',
  AfricaLagos = 'AFRICA_LAGOS',
  AfricaLibreville = 'AFRICA_LIBREVILLE',
  AfricaLome = 'AFRICA_LOME',
  AfricaLuanda = 'AFRICA_LUANDA',
  AfricaLubumbashi = 'AFRICA_LUBUMBASHI',
  AfricaLusaka = 'AFRICA_LUSAKA',
  AfricaMalabo = 'AFRICA_MALABO',
  AfricaMaputo = 'AFRICA_MAPUTO',
  AfricaMaseru = 'AFRICA_MASERU',
  AfricaMbabane = 'AFRICA_MBABANE',
  AfricaMogadishu = 'AFRICA_MOGADISHU',
  AfricaMonrovia = 'AFRICA_MONROVIA',
  AfricaNairobi = 'AFRICA_NAIROBI',
  AfricaNdjamena = 'AFRICA_NDJAMENA',
  AfricaNiamey = 'AFRICA_NIAMEY',
  AfricaNouakchott = 'AFRICA_NOUAKCHOTT',
  AfricaOuagadougou = 'AFRICA_OUAGADOUGOU',
  AfricaPortoNovo = 'AFRICA_PORTO_NOVO',
  AfricaSaoTome = 'AFRICA_SAO_TOME',
  AfricaTripoli = 'AFRICA_TRIPOLI',
  AfricaTunis = 'AFRICA_TUNIS',
  AfricaWindhoek = 'AFRICA_WINDHOEK',
  AmericaAdak = 'AMERICA_ADAK',
  AmericaAnchorage = 'AMERICA_ANCHORAGE',
  AmericaAnguilla = 'AMERICA_ANGUILLA',
  AmericaAntigua = 'AMERICA_ANTIGUA',
  AmericaAraguaina = 'AMERICA_ARAGUAINA',
  AmericaArgentinaLaRioja = 'AMERICA_ARGENTINA_LA_RIOJA',
  AmericaArgentinaRioGallegos = 'AMERICA_ARGENTINA_RIO_GALLEGOS',
  AmericaArgentinaSalta = 'AMERICA_ARGENTINA_SALTA',
  AmericaArgentinaSanJuan = 'AMERICA_ARGENTINA_SAN_JUAN',
  AmericaArgentinaSanLuis = 'AMERICA_ARGENTINA_SAN_LUIS',
  AmericaArgentinaTucuman = 'AMERICA_ARGENTINA_TUCUMAN',
  AmericaArgentinaUshuaia = 'AMERICA_ARGENTINA_USHUAIA',
  AmericaAruba = 'AMERICA_ARUBA',
  AmericaAsuncion = 'AMERICA_ASUNCION',
  AmericaBahia = 'AMERICA_BAHIA',
  AmericaBahiaBanderas = 'AMERICA_BAHIA_BANDERAS',
  AmericaBarbados = 'AMERICA_BARBADOS',
  AmericaBelem = 'AMERICA_BELEM',
  AmericaBelize = 'AMERICA_BELIZE',
  AmericaBlancSablon = 'AMERICA_BLANC_SABLON',
  AmericaBoaVista = 'AMERICA_BOA_VISTA',
  AmericaBogota = 'AMERICA_BOGOTA',
  AmericaBoise = 'AMERICA_BOISE',
  AmericaBuenosAires = 'AMERICA_BUENOS_AIRES',
  AmericaCambridgeBay = 'AMERICA_CAMBRIDGE_BAY',
  AmericaCampoGrande = 'AMERICA_CAMPO_GRANDE',
  AmericaCancun = 'AMERICA_CANCUN',
  AmericaCaracas = 'AMERICA_CARACAS',
  AmericaCatamarca = 'AMERICA_CATAMARCA',
  AmericaCayenne = 'AMERICA_CAYENNE',
  AmericaCayman = 'AMERICA_CAYMAN',
  AmericaChicago = 'AMERICA_CHICAGO',
  AmericaChihuahua = 'AMERICA_CHIHUAHUA',
  AmericaCiudadJuarez = 'AMERICA_CIUDAD_JUAREZ',
  AmericaCoralHarbour = 'AMERICA_CORAL_HARBOUR',
  AmericaCordoba = 'AMERICA_CORDOBA',
  AmericaCostaRica = 'AMERICA_COSTA_RICA',
  AmericaCreston = 'AMERICA_CRESTON',
  AmericaCuiaba = 'AMERICA_CUIABA',
  AmericaCuracao = 'AMERICA_CURACAO',
  AmericaDanmarkshavn = 'AMERICA_DANMARKSHAVN',
  AmericaDawson = 'AMERICA_DAWSON',
  AmericaDawsonCreek = 'AMERICA_DAWSON_CREEK',
  AmericaDenver = 'AMERICA_DENVER',
  AmericaDetroit = 'AMERICA_DETROIT',
  AmericaDominica = 'AMERICA_DOMINICA',
  AmericaEdmonton = 'AMERICA_EDMONTON',
  AmericaEirunepe = 'AMERICA_EIRUNEPE',
  AmericaElSalvador = 'AMERICA_EL_SALVADOR',
  AmericaFortaleza = 'AMERICA_FORTALEZA',
  AmericaFortNelson = 'AMERICA_FORT_NELSON',
  AmericaGlaceBay = 'AMERICA_GLACE_BAY',
  AmericaGodthab = 'AMERICA_GODTHAB',
  AmericaGooseBay = 'AMERICA_GOOSE_BAY',
  AmericaGrandTurk = 'AMERICA_GRAND_TURK',
  AmericaGrenada = 'AMERICA_GRENADA',
  AmericaGuadeloupe = 'AMERICA_GUADELOUPE',
  AmericaGuatemala = 'AMERICA_GUATEMALA',
  AmericaGuayaquil = 'AMERICA_GUAYAQUIL',
  AmericaGuyana = 'AMERICA_GUYANA',
  AmericaHalifax = 'AMERICA_HALIFAX',
  AmericaHavana = 'AMERICA_HAVANA',
  AmericaHermosillo = 'AMERICA_HERMOSILLO',
  AmericaIndianapolis = 'AMERICA_INDIANAPOLIS',
  AmericaIndianaKnox = 'AMERICA_INDIANA_KNOX',
  AmericaIndianaMarengo = 'AMERICA_INDIANA_MARENGO',
  AmericaIndianaPetersburg = 'AMERICA_INDIANA_PETERSBURG',
  AmericaIndianaTellCity = 'AMERICA_INDIANA_TELL_CITY',
  AmericaIndianaVevay = 'AMERICA_INDIANA_VEVAY',
  AmericaIndianaVincennes = 'AMERICA_INDIANA_VINCENNES',
  AmericaIndianaWinamac = 'AMERICA_INDIANA_WINAMAC',
  AmericaInuvik = 'AMERICA_INUVIK',
  AmericaIqaluit = 'AMERICA_IQALUIT',
  AmericaJamaica = 'AMERICA_JAMAICA',
  AmericaJujuy = 'AMERICA_JUJUY',
  AmericaJuneau = 'AMERICA_JUNEAU',
  AmericaKentuckyMonticello = 'AMERICA_KENTUCKY_MONTICELLO',
  AmericaKralendijk = 'AMERICA_KRALENDIJK',
  AmericaLaPaz = 'AMERICA_LA_PAZ',
  AmericaLima = 'AMERICA_LIMA',
  AmericaLosAngeles = 'AMERICA_LOS_ANGELES',
  AmericaLouisville = 'AMERICA_LOUISVILLE',
  AmericaLowerPrinces = 'AMERICA_LOWER_PRINCES',
  AmericaMaceio = 'AMERICA_MACEIO',
  AmericaManagua = 'AMERICA_MANAGUA',
  AmericaManaus = 'AMERICA_MANAUS',
  AmericaMarigot = 'AMERICA_MARIGOT',
  AmericaMartinique = 'AMERICA_MARTINIQUE',
  AmericaMatamoros = 'AMERICA_MATAMOROS',
  AmericaMazatlan = 'AMERICA_MAZATLAN',
  AmericaMendoza = 'AMERICA_MENDOZA',
  AmericaMenominee = 'AMERICA_MENOMINEE',
  AmericaMerida = 'AMERICA_MERIDA',
  AmericaMetlakatla = 'AMERICA_METLAKATLA',
  AmericaMexicoCity = 'AMERICA_MEXICO_CITY',
  AmericaMiquelon = 'AMERICA_MIQUELON',
  AmericaMoncton = 'AMERICA_MONCTON',
  AmericaMonterrey = 'AMERICA_MONTERREY',
  AmericaMontevideo = 'AMERICA_MONTEVIDEO',
  AmericaMontserrat = 'AMERICA_MONTSERRAT',
  AmericaNassau = 'AMERICA_NASSAU',
  AmericaNewYork = 'AMERICA_NEW_YORK',
  AmericaNipigon = 'AMERICA_NIPIGON',
  AmericaNome = 'AMERICA_NOME',
  AmericaNoronha = 'AMERICA_NORONHA',
  AmericaNorthDakotaBeulah = 'AMERICA_NORTH_DAKOTA_BEULAH',
  AmericaNorthDakotaCenter = 'AMERICA_NORTH_DAKOTA_CENTER',
  AmericaNorthDakotaNewSalem = 'AMERICA_NORTH_DAKOTA_NEW_SALEM',
  AmericaOjinaga = 'AMERICA_OJINAGA',
  AmericaPanama = 'AMERICA_PANAMA',
  AmericaPangnirtung = 'AMERICA_PANGNIRTUNG',
  AmericaParamaribo = 'AMERICA_PARAMARIBO',
  AmericaPhoenix = 'AMERICA_PHOENIX',
  AmericaPortoVelho = 'AMERICA_PORTO_VELHO',
  AmericaPortAuPrince = 'AMERICA_PORT_AU_PRINCE',
  AmericaPortOfSpain = 'AMERICA_PORT_OF_SPAIN',
  AmericaPuertoRico = 'AMERICA_PUERTO_RICO',
  AmericaPuntaArenas = 'AMERICA_PUNTA_ARENAS',
  AmericaRainyRiver = 'AMERICA_RAINY_RIVER',
  AmericaRankinInlet = 'AMERICA_RANKIN_INLET',
  AmericaRecife = 'AMERICA_RECIFE',
  AmericaRegina = 'AMERICA_REGINA',
  AmericaResolute = 'AMERICA_RESOLUTE',
  AmericaRioBranco = 'AMERICA_RIO_BRANCO',
  AmericaSantarem = 'AMERICA_SANTAREM',
  AmericaSantaIsabel = 'AMERICA_SANTA_ISABEL',
  AmericaSantiago = 'AMERICA_SANTIAGO',
  AmericaSantoDomingo = 'AMERICA_SANTO_DOMINGO',
  AmericaSaoPaulo = 'AMERICA_SAO_PAULO',
  AmericaScoresbysund = 'AMERICA_SCORESBYSUND',
  AmericaSitka = 'AMERICA_SITKA',
  AmericaStBarthelemy = 'AMERICA_ST_BARTHELEMY',
  AmericaStJohns = 'AMERICA_ST_JOHNS',
  AmericaStKitts = 'AMERICA_ST_KITTS',
  AmericaStLucia = 'AMERICA_ST_LUCIA',
  AmericaStThomas = 'AMERICA_ST_THOMAS',
  AmericaStVincent = 'AMERICA_ST_VINCENT',
  AmericaSwiftCurrent = 'AMERICA_SWIFT_CURRENT',
  AmericaTegucigalpa = 'AMERICA_TEGUCIGALPA',
  AmericaThule = 'AMERICA_THULE',
  AmericaThunderBay = 'AMERICA_THUNDER_BAY',
  AmericaTijuana = 'AMERICA_TIJUANA',
  AmericaToronto = 'AMERICA_TORONTO',
  AmericaTortola = 'AMERICA_TORTOLA',
  AmericaVancouver = 'AMERICA_VANCOUVER',
  AmericaWhitehorse = 'AMERICA_WHITEHORSE',
  AmericaWinnipeg = 'AMERICA_WINNIPEG',
  AmericaYakutat = 'AMERICA_YAKUTAT',
  AmericaYellowknife = 'AMERICA_YELLOWKNIFE',
  AntarcticaCasey = 'ANTARCTICA_CASEY',
  AntarcticaDavis = 'ANTARCTICA_DAVIS',
  AntarcticaDumontDUrville = 'ANTARCTICA_DUMONT_D_URVILLE',
  AntarcticaMacquarie = 'ANTARCTICA_MACQUARIE',
  AntarcticaMawson = 'ANTARCTICA_MAWSON',
  AntarcticaMcMurdo = 'ANTARCTICA_MC_MURDO',
  AntarcticaPalmer = 'ANTARCTICA_PALMER',
  AntarcticaRothera = 'ANTARCTICA_ROTHERA',
  AntarcticaSyowa = 'ANTARCTICA_SYOWA',
  AntarcticaTroll = 'ANTARCTICA_TROLL',
  AntarcticaVostok = 'ANTARCTICA_VOSTOK',
  ArcticLongyearbyen = 'ARCTIC_LONGYEARBYEN',
  AsiaAden = 'ASIA_ADEN',
  AsiaAlmaty = 'ASIA_ALMATY',
  AsiaAmman = 'ASIA_AMMAN',
  AsiaAnadyr = 'ASIA_ANADYR',
  AsiaAqtau = 'ASIA_AQTAU',
  AsiaAqtobe = 'ASIA_AQTOBE',
  AsiaAshgabat = 'ASIA_ASHGABAT',
  AsiaAtyrau = 'ASIA_ATYRAU',
  AsiaBaghdad = 'ASIA_BAGHDAD',
  AsiaBahrain = 'ASIA_BAHRAIN',
  AsiaBaku = 'ASIA_BAKU',
  AsiaBangkok = 'ASIA_BANGKOK',
  AsiaBarnaul = 'ASIA_BARNAUL',
  AsiaBeirut = 'ASIA_BEIRUT',
  AsiaBishkek = 'ASIA_BISHKEK',
  AsiaBrunei = 'ASIA_BRUNEI',
  AsiaCalcutta = 'ASIA_CALCUTTA',
  AsiaChita = 'ASIA_CHITA',
  AsiaChoibalsan = 'ASIA_CHOIBALSAN',
  AsiaColombo = 'ASIA_COLOMBO',
  AsiaDamascus = 'ASIA_DAMASCUS',
  AsiaDhaka = 'ASIA_DHAKA',
  AsiaDili = 'ASIA_DILI',
  AsiaDubai = 'ASIA_DUBAI',
  AsiaDushanbe = 'ASIA_DUSHANBE',
  AsiaFamagusta = 'ASIA_FAMAGUSTA',
  AsiaGaza = 'ASIA_GAZA',
  AsiaHebron = 'ASIA_HEBRON',
  AsiaHongKong = 'ASIA_HONG_KONG',
  AsiaHovd = 'ASIA_HOVD',
  AsiaIrkutsk = 'ASIA_IRKUTSK',
  AsiaJakarta = 'ASIA_JAKARTA',
  AsiaJayapura = 'ASIA_JAYAPURA',
  AsiaJerusalem = 'ASIA_JERUSALEM',
  AsiaKabul = 'ASIA_KABUL',
  AsiaKamchatka = 'ASIA_KAMCHATKA',
  AsiaKarachi = 'ASIA_KARACHI',
  AsiaKatmandu = 'ASIA_KATMANDU',
  AsiaKhandyga = 'ASIA_KHANDYGA',
  AsiaKrasnoyarsk = 'ASIA_KRASNOYARSK',
  AsiaKualaLumpur = 'ASIA_KUALA_LUMPUR',
  AsiaKuching = 'ASIA_KUCHING',
  AsiaKuwait = 'ASIA_KUWAIT',
  AsiaMacau = 'ASIA_MACAU',
  AsiaMagadan = 'ASIA_MAGADAN',
  AsiaMakassar = 'ASIA_MAKASSAR',
  AsiaManila = 'ASIA_MANILA',
  AsiaMuscat = 'ASIA_MUSCAT',
  AsiaNicosia = 'ASIA_NICOSIA',
  AsiaNovokuznetsk = 'ASIA_NOVOKUZNETSK',
  AsiaNovosibirsk = 'ASIA_NOVOSIBIRSK',
  AsiaOmsk = 'ASIA_OMSK',
  AsiaOral = 'ASIA_ORAL',
  AsiaPhnomPenh = 'ASIA_PHNOM_PENH',
  AsiaPontianak = 'ASIA_PONTIANAK',
  AsiaPyongyang = 'ASIA_PYONGYANG',
  AsiaQatar = 'ASIA_QATAR',
  AsiaQostanay = 'ASIA_QOSTANAY',
  AsiaQyzylorda = 'ASIA_QYZYLORDA',
  AsiaRangoon = 'ASIA_RANGOON',
  AsiaRiyadh = 'ASIA_RIYADH',
  AsiaSaigon = 'ASIA_SAIGON',
  AsiaSakhalin = 'ASIA_SAKHALIN',
  AsiaSamarkand = 'ASIA_SAMARKAND',
  AsiaSeoul = 'ASIA_SEOUL',
  AsiaShanghai = 'ASIA_SHANGHAI',
  AsiaSingapore = 'ASIA_SINGAPORE',
  AsiaSrednekolymsk = 'ASIA_SREDNEKOLYMSK',
  AsiaTaipei = 'ASIA_TAIPEI',
  AsiaTashkent = 'ASIA_TASHKENT',
  AsiaTbilisi = 'ASIA_TBILISI',
  AsiaTehran = 'ASIA_TEHRAN',
  AsiaThimphu = 'ASIA_THIMPHU',
  AsiaTokyo = 'ASIA_TOKYO',
  AsiaTomsk = 'ASIA_TOMSK',
  AsiaUlaanbaatar = 'ASIA_ULAANBAATAR',
  AsiaUrumqi = 'ASIA_URUMQI',
  AsiaUstNera = 'ASIA_UST_NERA',
  AsiaVientiane = 'ASIA_VIENTIANE',
  AsiaVladivostok = 'ASIA_VLADIVOSTOK',
  AsiaYakutsk = 'ASIA_YAKUTSK',
  AsiaYekaterinburg = 'ASIA_YEKATERINBURG',
  AsiaYerevan = 'ASIA_YEREVAN',
  AtlanticAzores = 'ATLANTIC_AZORES',
  AtlanticBermuda = 'ATLANTIC_BERMUDA',
  AtlanticCanary = 'ATLANTIC_CANARY',
  AtlanticCapeVerde = 'ATLANTIC_CAPE_VERDE',
  AtlanticFaeroe = 'ATLANTIC_FAEROE',
  AtlanticMadeira = 'ATLANTIC_MADEIRA',
  AtlanticReykjavik = 'ATLANTIC_REYKJAVIK',
  AtlanticSouthGeorgia = 'ATLANTIC_SOUTH_GEORGIA',
  AtlanticStanley = 'ATLANTIC_STANLEY',
  AtlanticStHelena = 'ATLANTIC_ST_HELENA',
  AustraliaAdelaide = 'AUSTRALIA_ADELAIDE',
  AustraliaBrisbane = 'AUSTRALIA_BRISBANE',
  AustraliaBrokenHill = 'AUSTRALIA_BROKEN_HILL',
  AustraliaCurrie = 'AUSTRALIA_CURRIE',
  AustraliaDarwin = 'AUSTRALIA_DARWIN',
  AustraliaEucla = 'AUSTRALIA_EUCLA',
  AustraliaHobart = 'AUSTRALIA_HOBART',
  AustraliaLindeman = 'AUSTRALIA_LINDEMAN',
  AustraliaLordHowe = 'AUSTRALIA_LORD_HOWE',
  AustraliaMelbourne = 'AUSTRALIA_MELBOURNE',
  AustraliaPerth = 'AUSTRALIA_PERTH',
  AustraliaSydney = 'AUSTRALIA_SYDNEY',
  EuropeAmsterdam = 'EUROPE_AMSTERDAM',
  EuropeAndorra = 'EUROPE_ANDORRA',
  EuropeAstrakhan = 'EUROPE_ASTRAKHAN',
  EuropeAthens = 'EUROPE_ATHENS',
  EuropeBelgrade = 'EUROPE_BELGRADE',
  EuropeBerlin = 'EUROPE_BERLIN',
  EuropeBratislava = 'EUROPE_BRATISLAVA',
  EuropeBrussels = 'EUROPE_BRUSSELS',
  EuropeBucharest = 'EUROPE_BUCHAREST',
  EuropeBudapest = 'EUROPE_BUDAPEST',
  EuropeBusingen = 'EUROPE_BUSINGEN',
  EuropeChisinau = 'EUROPE_CHISINAU',
  EuropeCopenhagen = 'EUROPE_COPENHAGEN',
  EuropeDublin = 'EUROPE_DUBLIN',
  EuropeGibraltar = 'EUROPE_GIBRALTAR',
  EuropeGuernsey = 'EUROPE_GUERNSEY',
  EuropeHelsinki = 'EUROPE_HELSINKI',
  EuropeIsleOfMan = 'EUROPE_ISLE_OF_MAN',
  EuropeIstanbul = 'EUROPE_ISTANBUL',
  EuropeJersey = 'EUROPE_JERSEY',
  EuropeKaliningrad = 'EUROPE_KALININGRAD',
  EuropeKiev = 'EUROPE_KIEV',
  EuropeKirov = 'EUROPE_KIROV',
  EuropeLisbon = 'EUROPE_LISBON',
  EuropeLjubljana = 'EUROPE_LJUBLJANA',
  EuropeLondon = 'EUROPE_LONDON',
  EuropeLuxembourg = 'EUROPE_LUXEMBOURG',
  EuropeMadrid = 'EUROPE_MADRID',
  EuropeMalta = 'EUROPE_MALTA',
  EuropeMariehamn = 'EUROPE_MARIEHAMN',
  EuropeMinsk = 'EUROPE_MINSK',
  EuropeMonaco = 'EUROPE_MONACO',
  EuropeMoscow = 'EUROPE_MOSCOW',
  EuropeOslo = 'EUROPE_OSLO',
  EuropeParis = 'EUROPE_PARIS',
  EuropePodgorica = 'EUROPE_PODGORICA',
  EuropePrague = 'EUROPE_PRAGUE',
  EuropeRiga = 'EUROPE_RIGA',
  EuropeRome = 'EUROPE_ROME',
  EuropeSamara = 'EUROPE_SAMARA',
  EuropeSanMarino = 'EUROPE_SAN_MARINO',
  EuropeSarajevo = 'EUROPE_SARAJEVO',
  EuropeSaratov = 'EUROPE_SARATOV',
  EuropeSimferopol = 'EUROPE_SIMFEROPOL',
  EuropeSkopje = 'EUROPE_SKOPJE',
  EuropeSofia = 'EUROPE_SOFIA',
  EuropeStockholm = 'EUROPE_STOCKHOLM',
  EuropeTallinn = 'EUROPE_TALLINN',
  EuropeTirane = 'EUROPE_TIRANE',
  EuropeUlyanovsk = 'EUROPE_ULYANOVSK',
  EuropeUzhgorod = 'EUROPE_UZHGOROD',
  EuropeVaduz = 'EUROPE_VADUZ',
  EuropeVatican = 'EUROPE_VATICAN',
  EuropeVienna = 'EUROPE_VIENNA',
  EuropeVilnius = 'EUROPE_VILNIUS',
  EuropeVolgograd = 'EUROPE_VOLGOGRAD',
  EuropeWarsaw = 'EUROPE_WARSAW',
  EuropeZagreb = 'EUROPE_ZAGREB',
  EuropeZaporozhye = 'EUROPE_ZAPOROZHYE',
  EuropeZurich = 'EUROPE_ZURICH',
  IndianAntananarivo = 'INDIAN_ANTANANARIVO',
  IndianChagos = 'INDIAN_CHAGOS',
  IndianChristmas = 'INDIAN_CHRISTMAS',
  IndianCocos = 'INDIAN_COCOS',
  IndianComoro = 'INDIAN_COMORO',
  IndianKerguelen = 'INDIAN_KERGUELEN',
  IndianMahe = 'INDIAN_MAHE',
  IndianMaldives = 'INDIAN_MALDIVES',
  IndianMauritius = 'INDIAN_MAURITIUS',
  IndianMayotte = 'INDIAN_MAYOTTE',
  IndianReunion = 'INDIAN_REUNION',
  PacificApia = 'PACIFIC_APIA',
  PacificAuckland = 'PACIFIC_AUCKLAND',
  PacificBougainville = 'PACIFIC_BOUGAINVILLE',
  PacificChatham = 'PACIFIC_CHATHAM',
  PacificEaster = 'PACIFIC_EASTER',
  PacificEfate = 'PACIFIC_EFATE',
  PacificEnderbury = 'PACIFIC_ENDERBURY',
  PacificFakaofo = 'PACIFIC_FAKAOFO',
  PacificFiji = 'PACIFIC_FIJI',
  PacificFunafuti = 'PACIFIC_FUNAFUTI',
  PacificGalapagos = 'PACIFIC_GALAPAGOS',
  PacificGambier = 'PACIFIC_GAMBIER',
  PacificGuadalcanal = 'PACIFIC_GUADALCANAL',
  PacificGuam = 'PACIFIC_GUAM',
  PacificHonolulu = 'PACIFIC_HONOLULU',
  PacificJohnston = 'PACIFIC_JOHNSTON',
  PacificKiritimati = 'PACIFIC_KIRITIMATI',
  PacificKosrae = 'PACIFIC_KOSRAE',
  PacificKwajalein = 'PACIFIC_KWAJALEIN',
  PacificMajuro = 'PACIFIC_MAJURO',
  PacificMarquesas = 'PACIFIC_MARQUESAS',
  PacificMidway = 'PACIFIC_MIDWAY',
  PacificNauru = 'PACIFIC_NAURU',
  PacificNiue = 'PACIFIC_NIUE',
  PacificNorfolk = 'PACIFIC_NORFOLK',
  PacificNoumea = 'PACIFIC_NOUMEA',
  PacificPagoPago = 'PACIFIC_PAGO_PAGO',
  PacificPalau = 'PACIFIC_PALAU',
  PacificPitcairn = 'PACIFIC_PITCAIRN',
  PacificPonape = 'PACIFIC_PONAPE',
  PacificPortMoresby = 'PACIFIC_PORT_MORESBY',
  PacificRarotonga = 'PACIFIC_RAROTONGA',
  PacificSaipan = 'PACIFIC_SAIPAN',
  PacificTahiti = 'PACIFIC_TAHITI',
  PacificTarawa = 'PACIFIC_TARAWA',
  PacificTongatapu = 'PACIFIC_TONGATAPU',
  PacificTruk = 'PACIFIC_TRUK',
  PacificWake = 'PACIFIC_WAKE',
  PacificWallis = 'PACIFIC_WALLIS'
}

/** The challenge has expired or was not found. */
export type ExpiredChallengeError = {
  __typename?: 'ExpiredChallengeError';
  reason: Scalars['String']['output'];
};

/**
 * The transaction has failed to be mined or indexed.
 *
 * The reason for the failure is provided.
 */
export type FailedTransactionStatus = {
  __typename?: 'FailedTransactionStatus';
  blockTimestamp: Scalars['DateTime']['output'];
  reason: Scalars['String']['output'];
};

export type FeeFollowRuleInput = {
  amount: AmountInput;
};

export type Feed = {
  __typename?: 'Feed';
  address: Scalars['EvmAddress']['output'];
  metadata?: Maybe<FeedMetadata>;
};

export type FeedMetadata = {
  __typename?: 'FeedMetadata';
  /** Optional markdown formatted description of the Feed. */
  description?: Maybe<Scalars['String']['output']>;
  /**
   * A unique identifier that in storages like IPFS ensures the uniqueness of the metadata URI.
   * Use a UUID if unsure.
   */
  id: Scalars['String']['output'];
  /** The name of the Feed. */
  name: Scalars['String']['output'];
  /** The human-friendly title for the Feed. */
  title: Scalars['String']['output'];
};

export type FeedRequest = {
  /** The feed */
  feed?: InputMaybe<Scalars['EvmAddress']['input']>;
  /** The transaction hash you created the feed with. */
  txHash?: InputMaybe<Scalars['TxHash']['input']>;
};

export type FeedRulesInput = {
  unknownFeedRule?: InputMaybe<UnknownFeedRuleInput>;
};

/**
 * The transaction has been mined and indexed correctly.
 *
 * If the transaction involves any metadata, the metadata has been snapshotted and indexed.
 */
export type FinishedTransactionStatus = {
  __typename?: 'FinishedTransactionStatus';
  blockTimestamp: Scalars['DateTime']['output'];
};

/** FollowCondition */
export type FollowCondition = {
  __typename?: 'FollowCondition';
  follow: Scalars['LegacyProfileId']['output'];
  type: Scalars['String']['output'];
};

export type FollowNotification = {
  __typename?: 'FollowNotification';
  followers: Array<NotificationAccountFollow>;
  id: Scalars['GeneratedNotificationId']['output'];
};

export type FollowPair = {
  /** The account being followed. */
  account: Scalars['EvmAddress']['input'];
  /** The follower. */
  follower: Scalars['EvmAddress']['input'];
  /** The graph you are checking defaults to global graph. */
  graph?: Scalars['EvmAddress']['input'];
};

export type FollowResponse = {
  __typename?: 'FollowResponse';
  hash: Scalars['TxHash']['output'];
};

export type FollowResult = FollowResponse | SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type FollowRulesInput = {
  feeFollowRule?: InputMaybe<FeeFollowRuleInput>;
  unknownFollowRule?: InputMaybe<UnknownFollowRuleInput>;
};

export type FollowStatusRequest = {
  pairs: Array<FollowPair>;
};

export type FollowStatusResult = {
  __typename?: 'FollowStatusResult';
  account: Scalars['EvmAddress']['output'];
  follower: Scalars['EvmAddress']['output'];
  graph: Scalars['EvmAddress']['output'];
  isFollowing: BooleanValue;
};

export type Follower = {
  __typename?: 'Follower';
  /** The timestamp when the follower was followed */
  followedOn: Scalars['DateTime']['output'];
  /** The account which is following */
  follower: Account;
};

export enum FollowersOrderBy {
  AccountScore = 'ACCOUNT_SCORE',
  Asc = 'ASC',
  Desc = 'DESC'
}

export type FollowersRequest = {
  /** The account to get followers for. */
  account: Scalars['EvmAddress']['input'];
  /** The cursor. */
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  /**
   * The graphs to get followers for
   * The result will come back if they follow on ANY of the supplied graphs
   */
  forGraphs?: Array<Scalars['EvmAddress']['input']>;
  /** The order by. */
  orderBy?: FollowersOrderBy;
  /** The page size. */
  pageSize?: PageSize;
};

export enum FollowersYouKnowOrderBy {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type FollowersYouKnowRequest = {
  /** The cursor. */
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  /**
   * The graphs to get followers you know for
   * The result will come back if they follow on ANY of the supplied graphs
   */
  forGraphs?: Array<Scalars['EvmAddress']['input']>;
  /** The account you are looking from. */
  observer: Scalars['EvmAddress']['input'];
  /** The order by. */
  orderBy?: FollowersYouKnowOrderBy;
  /** The page size. */
  pageSize?: PageSize;
  /** The account to check followers you know. */
  target: Scalars['EvmAddress']['input'];
};

export type Following = {
  __typename?: 'Following';
  /** The timestamp when the following happened */
  followedOn: Scalars['DateTime']['output'];
  /** The account which is following */
  following: Account;
};

export enum FollowingOrderBy {
  AccountScore = 'ACCOUNT_SCORE',
  Asc = 'ASC',
  Desc = 'DESC'
}

export type FollowingRequest = {
  /** The account to get following for. */
  account: Scalars['EvmAddress']['input'];
  /** The cursor. */
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  /**
   * The graphs to get following for.
   * The result will come back if they are following on ANY of the supplied graphs
   */
  forGraphs?: Array<Scalars['EvmAddress']['input']>;
  /** The order by. */
  orderBy?: FollowingOrderBy;
  /** The page size. */
  pageSize?: PageSize;
};

export type ForbiddenError = {
  __typename?: 'ForbiddenError';
  reason: Scalars['String']['output'];
};

export type Graph = {
  __typename?: 'Graph';
  address: Scalars['EvmAddress']['output'];
  metadata?: Maybe<GraphMetadata>;
};

export type GraphMetadata = {
  __typename?: 'GraphMetadata';
  /** Optional markdown formatted description of the graph. */
  description?: Maybe<Scalars['String']['output']>;
  /**
   * A unique identifier that in storages like IPFS ensures the uniqueness of the metadata URI.
   * Use a UUID if unsure.
   */
  id: Scalars['String']['output'];
  /** The name of the graph. */
  name: Scalars['String']['output'];
  /** The human-friendly title for the graph. */
  title: Scalars['String']['output'];
};

export type GraphRequest = {
  /** The graph */
  graph?: InputMaybe<Scalars['EvmAddress']['input']>;
  /** The transaction hash you created the graph with. */
  txHash?: InputMaybe<Scalars['TxHash']['input']>;
};

export type GraphRulesInput = {
  unknownGraphRule?: InputMaybe<UnknownGraphRuleInput>;
};

export type Group = {
  __typename?: 'Group';
  address: Scalars['EvmAddress']['output'];
  metadata?: Maybe<GroupMetadata>;
  timestamp: Scalars['DateTime']['output'];
};

export enum GroupMembersOrderBy {
  AccountScore = 'ACCOUNT_SCORE',
  FirstJoined = 'FIRST_JOINED',
  LastJoined = 'LAST_JOINED'
}

export type GroupMembersRequest = {
  /** The cursor. */
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  /** The group */
  group: Scalars['EvmAddress']['input'];
  /** The order by. */
  orderBy?: GroupMembersOrderBy;
  /** The page size. */
  pageSize?: PageSize;
};

export type GroupMetadata = {
  __typename?: 'GroupMetadata';
  /** Optional markdown formatted description of the Community. */
  description?: Maybe<Scalars['String']['output']>;
  /** Optional uri of the Community's icon. */
  icon?: Maybe<Scalars['URI']['output']>;
  /**
   * A unique identifier that in storages like IPFS ensures the uniqueness of the metadata URI.
   * Use a UUID if unsure.
   */
  id: Scalars['String']['output'];
  /** The name of the Community. */
  name: Scalars['String']['output'];
  /** The slug for the Community. */
  slug: Scalars['String']['output'];
};

export type GroupRequest = {
  /** The group */
  group?: InputMaybe<Scalars['EvmAddress']['input']>;
  /** The transaction hash you created the group with. */
  txHash?: InputMaybe<Scalars['TxHash']['input']>;
};

export type GroupsFilter = {
  /** The name of the group */
  name?: InputMaybe<Scalars['String']['input']>;
};

export enum GroupsOrderBy {
  LatestJoined = 'LATEST_JOINED',
  Name = 'NAME'
}

export type GroupsRequest = {
  /** The cursor. */
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  /** The filter */
  filter?: InputMaybe<GroupsFilter>;
  /** Get the groups this account is a member of */
  member: Scalars['EvmAddress']['input'];
  /** The order by. */
  orderBy?: GroupsOrderBy;
  /** The page size. */
  pageSize?: PageSize;
};

export type HasReactedRequest = {
  type?: InputMaybe<PostReactionType>;
};

export type HideManagedAccountRequest = {
  /** The account to hide. */
  account: Scalars['EvmAddress']['input'];
};

export type HideReplyRequest = {
  post: Scalars['PostId']['input'];
};

export type ImageMetadata = {
  __typename?: 'ImageMetadata';
  /** The other attachments you want to include with it. */
  attachments: Array<AnyMedia>;
  /**
   * A bag of attributes that can be used to store any kind of metadata that is not currently
   * supported by the standard. Over time, common attributes will be added to the standard and
   * their usage as arbitrary attributes will be discouraged.
   */
  attributes: Array<MetadataAttribute>;
  content: Scalars['Encryptable']['output'];
  /** Specify a content warning. */
  contentWarning?: Maybe<ContentWarning>;
  encryptedWith?: Maybe<EncryptionStrategy>;
  id: Scalars['MetadataId']['output'];
  image: MediaImage;
  locale: Scalars['Locale']['output'];
  /** The main focus of the post. */
  mainContentFocus: MainContentFocus;
  /** An arbitrary list of tags. */
  tags?: Maybe<Array<Scalars['Tag']['output']>>;
  /** The optional image title. */
  title?: Maybe<Scalars['String']['output']>;
};

export type InvalidUsername = {
  __typename?: 'InvalidUsername';
  reason: Scalars['String']['output'];
};

export type IsFollowedByMeRequest = {
  graph: Scalars['EvmAddress']['input'];
};

export type IsFollowingMeRequest = {
  graph: Scalars['EvmAddress']['input'];
};

export type JoinGroupRequest = {
  /** The group you want to join */
  group: Scalars['EvmAddress']['input'];
};

export type JoinGroupResponse = {
  __typename?: 'JoinGroupResponse';
  hash: Scalars['TxHash']['output'];
};

export type JoinGroupResult = JoinGroupResponse | SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type KnownAction = {
  __typename?: 'KnownAction';
  actionInput: Array<ActionInputInfo>;
  contract: NetworkAddress;
  name: Scalars['String']['output'];
  returnSetupInput: Array<ActionInputInfo>;
  setupInput: Array<ActionInputInfo>;
};

export type LastLoggedInAccountRequest = {
  /** The address to get the last logged in account for. */
  address: Scalars['EvmAddress']['input'];
  /** The app to get the last logged in account for. */
  app?: InputMaybe<Scalars['EvmAddress']['input']>;
};

export type LeaveGroupRequest = {
  /** The group you want to leave */
  group: Scalars['EvmAddress']['input'];
};

export type LeaveGroupResponse = {
  __typename?: 'LeaveGroupResponse';
  hash: Scalars['TxHash']['output'];
};

export type LeaveGroupResult = LeaveGroupResponse | SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type LinkMetadata = {
  __typename?: 'LinkMetadata';
  /** The other attachments you want to include with it. */
  attachments: Array<AnyMedia>;
  /**
   * A bag of attributes that can be used to store any kind of metadata that is not currently
   * supported by the standard. Over time, common attributes will be added to the standard and
   * their usage as arbitrary attributes will be discouraged.
   */
  attributes: Array<MetadataAttribute>;
  content: Scalars['Encryptable']['output'];
  /** Specify a content warning. */
  contentWarning?: Maybe<ContentWarning>;
  encryptedWith?: Maybe<EncryptionStrategy>;
  id: Scalars['MetadataId']['output'];
  locale: Scalars['Locale']['output'];
  /** The main focus of the post. */
  mainContentFocus: MainContentFocus;
  /** The sharing link url. */
  sharingLink: Scalars['Encryptable']['output'];
  /** An arbitrary list of tags. */
  tags?: Maybe<Array<Scalars['Tag']['output']>>;
};

export type LitProtocolEncryptionStrategy = {
  __typename?: 'LitProtocolEncryptionStrategy';
  accessCondition: TopLevelAccessCondition;
  encryptedPaths: Array<Scalars['String']['output']>;
  encryptionKey: Scalars['String']['output'];
};

export type LivestreamMetadata = {
  __typename?: 'LivestreamMetadata';
  /** The other attachments you want to include with it. */
  attachments: Array<AnyMedia>;
  /**
   * A bag of attributes that can be used to store any kind of metadata that is not currently
   * supported by the standard. Over time, common attributes will be added to the standard and
   * their usage as arbitrary attributes will be discouraged.
   */
  attributes: Array<MetadataAttribute>;
  /**
   * The data cannot be changed so you can put in an API endpoint to know if it is still live or
   * not for clients to be able to check.
   */
  checkLiveApi?: Maybe<Scalars['Encryptable']['output']>;
  content: Scalars['Encryptable']['output'];
  /** Specify a content warning. */
  contentWarning?: Maybe<ContentWarning>;
  encryptedWith?: Maybe<EncryptionStrategy>;
  /** The optional stream end time (ISO 8601 `YYYY-MM-DDTHH:mm:ss.sssZ`) */
  endsAt?: Maybe<Scalars['Encryptable']['output']>;
  id: Scalars['MetadataId']['output'];
  /**
   * Some livestream platforms have the live url as a separate url. If not your case make sure
   * `liveUrl` and `playbackUrl` are the same.
   */
  liveUrl: Scalars['Encryptable']['output'];
  locale: Scalars['Locale']['output'];
  /** The main focus of the post. */
  mainContentFocus: MainContentFocus;
  /**
   * Some livestream platforms have the playback url as a separate url. If not your case make
   * sure `liveUrl` and `playbackUrl` are the same.
   */
  playbackUrl: Scalars['Encryptable']['output'];
  /** The stream start time (ISO 8601 `YYYY-MM-DDTHH:mm:ss.sssZ`). */
  startsAt: Scalars['Encryptable']['output'];
  /** An arbitrary list of tags. */
  tags?: Maybe<Array<Scalars['Tag']['output']>>;
  /** The livestream title. */
  title?: Maybe<Scalars['String']['output']>;
};

export type LoggedInAccountOperations = {
  __typename?: 'LoggedInAccountOperations';
  canBlock: Scalars['Boolean']['output'];
  /**
   * Check if the authenticated account can follow the target account.
   *
   * If a graph is not specified:
   * - It first checks for a Graph address specified within the query scope.
   * - If no Graph address is found, it defaults to using the Global Graph.
   */
  canFollow: TriStateValue;
  canUnblock: Scalars['Boolean']['output'];
  /**
   * Check if the authenticated account can unfollow the target account.
   *
   * If a graph is not specified:
   * - It first checks for a Graph address specified within the query scope.
   * - If no Graph address is found, it defaults to using the Global Graph.
   */
  canUnfollow: Scalars['Boolean']['output'];
  hasBlockedMe: Scalars['Boolean']['output'];
  hasReported: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  isBlockedByMe: Scalars['Boolean']['output'];
  /**
   * Check if the target account is followed by the authenticated account.
   *
   * If a graph is not specified:
   * - It first checks for a Graph address specified within the query scope.
   * - If no Graph address is found, it defaults to using the Global Graph.
   */
  isFollowedByMe: Scalars['Boolean']['output'];
  /**
   * Check if the authenticated account is following the target account.
   *
   * If a graph is not specified:
   * - It first checks for a Graph address specified within the query scope.
   * - If no Graph address is found, it defaults to using the Global Graph.
   */
  isFollowingMe: Scalars['Boolean']['output'];
  isMutedByMe: Scalars['Boolean']['output'];
};


export type LoggedInAccountOperationsCanFollowArgs = {
  request?: InputMaybe<CanFollowRequest>;
};


export type LoggedInAccountOperationsCanUnfollowArgs = {
  request?: InputMaybe<CanUnfollowRequest>;
};


export type LoggedInAccountOperationsIsFollowedByMeArgs = {
  request?: InputMaybe<IsFollowedByMeRequest>;
};


export type LoggedInAccountOperationsIsFollowingMeArgs = {
  request?: InputMaybe<IsFollowingMeRequest>;
};

export type LoggedInPostOperations = {
  __typename?: 'LoggedInPostOperations';
  canComment: TriStateValue;
  canQuote: TriStateValue;
  canRepost: TriStateValue;
  hasBookmarked: Scalars['Boolean']['output'];
  hasCommented: BooleanValue;
  hasQuoted: BooleanValue;
  hasReacted: Scalars['Boolean']['output'];
  hasReported: Scalars['Boolean']['output'];
  hasReposted: BooleanValue;
  id: Scalars['ID']['output'];
  isNotInterested: Scalars['Boolean']['output'];
};


export type LoggedInPostOperationsHasReactedArgs = {
  request?: InputMaybe<HasReactedRequest>;
};

export enum MainContentFocus {
  Article = 'ARTICLE',
  Audio = 'AUDIO',
  CheckingIn = 'CHECKING_IN',
  Embed = 'EMBED',
  Event = 'EVENT',
  Image = 'IMAGE',
  Link = 'LINK',
  Livestream = 'LIVESTREAM',
  Mint = 'MINT',
  ShortVideo = 'SHORT_VIDEO',
  Space = 'SPACE',
  Story = 'STORY',
  TextOnly = 'TEXT_ONLY',
  ThreeD = 'THREE_D',
  Transaction = 'TRANSACTION',
  Video = 'VIDEO'
}

export enum ManagedAccountsVisibility {
  All = 'ALL',
  HiddenOnly = 'HIDDEN_ONLY',
  NoneHidden = 'NONE_HIDDEN'
}

export type MeResult = {
  __typename?: 'MeResult';
  /** The logged in account. */
  account: AccountAvailable;
  /** The app the account is logged in to. */
  appLoggedIn: Scalars['EvmAddress']['output'];
  /** Whether the account is signless. */
  isSignless: Scalars['Boolean']['output'];
  /** Whether the account is sponsored. */
  isSponsored: Scalars['Boolean']['output'];
  /** The sponsorship allowance for the account. */
  limit: SponsorshipAllowance;
};

/**
 * MediaAudio
 *
 * <details><summary>JSON schema</summary>
 *
 * ```json
 * {
 * "type": "object",
 * "required": [
 * "item",
 * "type"
 * ],
 * "properties": {
 * "artist": {
 * "description": "The name of the artist.",
 * "$ref": "#/$defs/EncryptableString"
 * },
 * "attributes": {
 * "description": "A bag of attributes that can be used to store any kind of metadata that is not currently supported by the standard.",
 * "type": "array",
 * "items": {
 * "$ref": "#/$defs/MetadataAttribute"
 * },
 * "minItems": 1
 * },
 * "cover": {
 * "$ref": "#/$defs/EncryptableUri"
 * },
 * "credits": {
 * "description": "The credits for the audio.",
 * "$ref": "#/$defs/EncryptableString"
 * },
 * "duration": {
 * "description": "How long the the audio is in seconds.",
 * "type": "integer",
 * "exclusiveMinimum": 0.0
 * },
 * "genre": {
 * "description": "The genre of the audio",
 * "$ref": "#/$defs/EncryptableString"
 * },
 * "item": {
 * "$ref": "#/$defs/EncryptableUri"
 * },
 * "kind": {
 * "description": "The type of audio.",
 * "type": "string",
 * "enum": [
 * "MUSIC",
 * "PODCAST",
 * "AUDIOBOOK",
 * "VOICE_NOTE",
 * "SOUND",
 * "OTHER"
 * ]
 * },
 * "license": {
 * "description": "The license for the audio.",
 * "$ref": "#/$defs/MetadataLicenseType"
 * },
 * "lyrics": {
 * "$ref": "#/$defs/EncryptableUri"
 * },
 * "recordLabel": {
 * "description": "The record label for the audio.",
 * "$ref": "#/$defs/EncryptableString"
 * },
 * "type": {
 * "description": "The mime type of the audio file.",
 * "type": "string",
 * "enum": [
 * "audio/wav",
 * "audio/vnd.wave",
 * "audio/mpeg",
 * "audio/ogg",
 * "audio/mp4",
 * "audio/aac",
 * "audio/webm",
 * "audio/flac"
 * ]
 * }
 * },
 * "additionalProperties": false
 * }
 * ```
 * </details>
 */
export type MediaAudio = {
  __typename?: 'MediaAudio';
  /** The name of the artist. */
  artist?: Maybe<Scalars['Encryptable']['output']>;
  /**
   * A bag of attributes that can be used to store any kind of metadata that is not currently
   * supported by the standard.
   */
  attributes: Array<MetadataAttribute>;
  cover?: Maybe<Scalars['Encryptable']['output']>;
  /** The credits for the audio. */
  credits?: Maybe<Scalars['Encryptable']['output']>;
  /** How long the the audio is in seconds. */
  duration?: Maybe<Scalars['Int']['output']>;
  /** The genre of the audio */
  genre?: Maybe<Scalars['Encryptable']['output']>;
  item: Scalars['Encryptable']['output'];
  /** The type of audio. */
  kind?: Maybe<MediaAudioKind>;
  /** The license for the audio. */
  license?: Maybe<MetadataLicenseType>;
  lyrics?: Maybe<Scalars['Encryptable']['output']>;
  /** The record label for the audio. */
  recordLabel?: Maybe<Scalars['Encryptable']['output']>;
  /** The mime type of the audio file. */
  type: MediaAudioType;
};

/**
 * The type of audio.
 *
 * <details><summary>JSON schema</summary>
 *
 * ```json
 * {
 * "description": "The type of audio.",
 * "type": "string",
 * "enum": [
 * "MUSIC",
 * "PODCAST",
 * "AUDIOBOOK",
 * "VOICE_NOTE",
 * "SOUND",
 * "OTHER"
 * ]
 * }
 * ```
 * </details>
 */
export enum MediaAudioKind {
  Audiobook = 'AUDIOBOOK',
  Music = 'MUSIC',
  Other = 'OTHER',
  Podcast = 'PODCAST',
  Sound = 'SOUND',
  VoiceNote = 'VOICE_NOTE'
}

/**
 * The mime type of the audio file.
 *
 * <details><summary>JSON schema</summary>
 *
 * ```json
 * {
 * "description": "The mime type of the audio file.",
 * "type": "string",
 * "enum": [
 * "audio/wav",
 * "audio/vnd.wave",
 * "audio/mpeg",
 * "audio/ogg",
 * "audio/mp4",
 * "audio/aac",
 * "audio/webm",
 * "audio/flac"
 * ]
 * }
 * ```
 * </details>
 */
export enum MediaAudioType {
  AudioAac = 'AUDIO_AAC',
  AudioFlac = 'AUDIO_FLAC',
  AudioMpeg = 'AUDIO_MPEG',
  AudioMp_4 = 'AUDIO_MP_4',
  AudioOgg = 'AUDIO_OGG',
  AudioVndWave = 'AUDIO_VND_WAVE',
  AudioWav = 'AUDIO_WAV',
  AudioWebm = 'AUDIO_WEBM'
}

/**
 * MediaImage
 *
 * <details><summary>JSON schema</summary>
 *
 * ```json
 * {
 * "type": "object",
 * "required": [
 * "item",
 * "type"
 * ],
 * "properties": {
 * "altTag": {
 * "description": "The alt tag for accessibility",
 * "$ref": "#/$defs/EncryptableString"
 * },
 * "attributes": {
 * "description": "A bag of attributes that can be used to store any kind of metadata that is not currently supported by the standard.",
 * "type": "array",
 * "items": {
 * "$ref": "#/$defs/MetadataAttribute"
 * },
 * "minItems": 1
 * },
 * "item": {
 * "$ref": "#/$defs/EncryptableUri"
 * },
 * "license": {
 * "description": "The license for the image",
 * "$ref": "#/$defs/MetadataLicenseType"
 * },
 * "type": {
 * "description": "The mime type of the image",
 * "type": "string",
 * "enum": [
 * "image/bmp",
 * "image/gif",
 * "image/heic",
 * "image/jpeg",
 * "image/png",
 * "image/svg+xml",
 * "image/tiff",
 * "image/webp",
 * "image/x-ms-bmp"
 * ]
 * }
 * },
 * "additionalProperties": false
 * }
 * ```
 * </details>
 */
export type MediaImage = {
  __typename?: 'MediaImage';
  /** The alt tag for accessibility */
  altTag?: Maybe<Scalars['Encryptable']['output']>;
  /**
   * A bag of attributes that can be used to store any kind of metadata that is not currently
   * supported by the standard.
   */
  attributes: Array<MetadataAttribute>;
  item: Scalars['Encryptable']['output'];
  /** The license for the image */
  license?: Maybe<MetadataLicenseType>;
  /** The mime type of the image */
  type: MediaImageType;
};

/**
 * The mime type of the image
 *
 * <details><summary>JSON schema</summary>
 *
 * ```json
 * {
 * "description": "The mime type of the image",
 * "type": "string",
 * "enum": [
 * "image/bmp",
 * "image/gif",
 * "image/heic",
 * "image/jpeg",
 * "image/png",
 * "image/svg+xml",
 * "image/tiff",
 * "image/webp",
 * "image/x-ms-bmp"
 * ]
 * }
 * ```
 * </details>
 */
export enum MediaImageType {
  Bmp = 'BMP',
  Gif = 'GIF',
  Heic = 'HEIC',
  Jpeg = 'JPEG',
  Png = 'PNG',
  SvgXml = 'SVG_XML',
  Tiff = 'TIFF',
  Webp = 'WEBP',
  XMsBmp = 'X_MS_BMP'
}

/**
 * MediaVideo
 *
 * <details><summary>JSON schema</summary>
 *
 * ```json
 * {
 * "type": "object",
 * "required": [
 * "item",
 * "type"
 * ],
 * "properties": {
 * "altTag": {
 * "description": "The alt tag for accessibility",
 * "$ref": "#/$defs/EncryptableString"
 * },
 * "attributes": {
 * "description": "A bag of attributes that can be used to store any kind of metadata that is not currently supported by the standard.",
 * "type": "array",
 * "items": {
 * "$ref": "#/$defs/MetadataAttribute"
 * },
 * "minItems": 1
 * },
 * "cover": {
 * "$ref": "#/$defs/EncryptableUri"
 * },
 * "duration": {
 * "description": "How long the the video is in seconds",
 * "type": "integer",
 * "exclusiveMinimum": 0.0
 * },
 * "item": {
 * "$ref": "#/$defs/EncryptableUri"
 * },
 * "license": {
 * "description": "The license for the video",
 * "$ref": "#/$defs/MetadataLicenseType"
 * },
 * "type": {
 * "description": "The mime type of the video",
 * "type": "string",
 * "enum": [
 * "model/gltf+json",
 * "model/gltf-binary",
 * "video/x-m4v",
 * "video/mov",
 * "video/mp4",
 * "video/mpeg",
 * "video/ogg",
 * "video/ogv",
 * "video/quicktime",
 * "video/webm"
 * ]
 * }
 * },
 * "additionalProperties": false
 * }
 * ```
 * </details>
 */
export type MediaVideo = {
  __typename?: 'MediaVideo';
  /** The alt tag for accessibility */
  altTag?: Maybe<Scalars['Encryptable']['output']>;
  /**
   * A bag of attributes that can be used to store any kind of metadata that is not currently
   * supported by the standard.
   */
  attributes: Array<MetadataAttribute>;
  cover?: Maybe<Scalars['Encryptable']['output']>;
  /** How long the the video is in seconds */
  duration?: Maybe<Scalars['Int']['output']>;
  item: Scalars['Encryptable']['output'];
  /** The license for the video */
  license?: Maybe<MetadataLicenseType>;
  /** The mime type of the video */
  type: MediaVideoType;
};

/**
 * The mime type of the video
 *
 * <details><summary>JSON schema</summary>
 *
 * ```json
 * {
 * "description": "The mime type of the video",
 * "type": "string",
 * "enum": [
 * "model/gltf+json",
 * "model/gltf-binary",
 * "video/x-m4v",
 * "video/mov",
 * "video/mp4",
 * "video/mpeg",
 * "video/ogg",
 * "video/ogv",
 * "video/quicktime",
 * "video/webm"
 * ]
 * }
 * ```
 * </details>
 */
export enum MediaVideoType {
  ModelGltfBinary = 'MODEL_GLTF_BINARY',
  ModelGltfJson = 'MODEL_GLTF_JSON',
  VideoMov = 'VIDEO_MOV',
  VideoMpeg = 'VIDEO_MPEG',
  VideoMp_4 = 'VIDEO_MP_4',
  VideoOgg = 'VIDEO_OGG',
  VideoOgv = 'VIDEO_OGV',
  VideoQuicktime = 'VIDEO_QUICKTIME',
  VideoWebm = 'VIDEO_WEBM',
  VideoXm_4V = 'VIDEO_XM_4V'
}

export type MentionNotification = {
  __typename?: 'MentionNotification';
  id: Scalars['GeneratedNotificationId']['output'];
  post: Post;
};

export type MetadataAttribute = {
  __typename?: 'MetadataAttribute';
  key: Scalars['String']['output'];
  type: MetadataAttributeType;
  value: Scalars['String']['output'];
};

export enum MetadataAttributeType {
  Boolean = 'BOOLEAN',
  Date = 'DATE',
  Json = 'JSON',
  Number = 'NUMBER',
  String = 'STRING'
}

export enum MetadataLicenseType {
  Cco = 'CCO',
  CcBy = 'CC_BY',
  CcByNc = 'CC_BY_NC',
  CcByNd = 'CC_BY_ND',
  TbnlCdNplLedger = 'TBNL_CD_NPL_LEDGER',
  TbnlCdNplLegal = 'TBNL_CD_NPL_LEGAL',
  TbnlCdPlLedger = 'TBNL_CD_PL_LEDGER',
  TbnlCdPlLegal = 'TBNL_CD_PL_LEGAL',
  TbnlCDtsaNplLedger = 'TBNL_C_DTSA_NPL_LEDGER',
  TbnlCDtsaNplLegal = 'TBNL_C_DTSA_NPL_LEGAL',
  TbnlCDtsaPlLedger = 'TBNL_C_DTSA_PL_LEDGER',
  TbnlCDtsaPlLegal = 'TBNL_C_DTSA_PL_LEGAL',
  TbnlCDtNplLedger = 'TBNL_C_DT_NPL_LEDGER',
  TbnlCDtNplLegal = 'TBNL_C_DT_NPL_LEGAL',
  TbnlCDtPlLedger = 'TBNL_C_DT_PL_LEDGER',
  TbnlCDtPlLegal = 'TBNL_C_DT_PL_LEGAL',
  TbnlCNdNplLedger = 'TBNL_C_ND_NPL_LEDGER',
  TbnlCNdNplLegal = 'TBNL_C_ND_NPL_LEGAL',
  TbnlCNdPlLedger = 'TBNL_C_ND_PL_LEDGER',
  TbnlCNdPlLegal = 'TBNL_C_ND_PL_LEGAL',
  TbnlNcDtsaNplLedger = 'TBNL_NC_DTSA_NPL_LEDGER',
  TbnlNcDtsaNplLegal = 'TBNL_NC_DTSA_NPL_LEGAL',
  TbnlNcDtsaPlLedger = 'TBNL_NC_DTSA_PL_LEDGER',
  TbnlNcDtsaPlLegal = 'TBNL_NC_DTSA_PL_LEGAL',
  TbnlNcDtNplLedger = 'TBNL_NC_DT_NPL_LEDGER',
  TbnlNcDtNplLegal = 'TBNL_NC_DT_NPL_LEGAL',
  TbnlNcDtPlLedger = 'TBNL_NC_DT_PL_LEDGER',
  TbnlNcDtPlLegal = 'TBNL_NC_DT_PL_LEGAL',
  TbnlNcDNplLedger = 'TBNL_NC_D_NPL_LEDGER',
  TbnlNcDNplLegal = 'TBNL_NC_D_NPL_LEGAL',
  TbnlNcDPlLedger = 'TBNL_NC_D_PL_LEDGER',
  TbnlNcDPlLegal = 'TBNL_NC_D_PL_LEGAL',
  TbnlNcNdNplLedger = 'TBNL_NC_ND_NPL_LEDGER',
  TbnlNcNdNplLegal = 'TBNL_NC_ND_NPL_LEGAL',
  TbnlNcNdPlLedger = 'TBNL_NC_ND_PL_LEDGER',
  TbnlNcNdPlLegal = 'TBNL_NC_ND_PL_LEGAL'
}

export type MintMetadata = {
  __typename?: 'MintMetadata';
  /** The other attachments you want to include with it. */
  attachments: Array<AnyMedia>;
  /**
   * A bag of attributes that can be used to store any kind of metadata that is not currently
   * supported by the standard. Over time, common attributes will be added to the standard and
   * their usage as arbitrary attributes will be discouraged.
   */
  attributes: Array<MetadataAttribute>;
  content: Scalars['Encryptable']['output'];
  /** Specify a content warning. */
  contentWarning?: Maybe<ContentWarning>;
  encryptedWith?: Maybe<EncryptionStrategy>;
  id: Scalars['MetadataId']['output'];
  locale: Scalars['Locale']['output'];
  /** The main focus of the post. */
  mainContentFocus: MainContentFocus;
  /** The mint item it can be a URL of the known provider like opensea https://opensea.io/assets/ethereum/0xfaa2471e93bd1cee3b0ab381c242ada8e1d1a759/299 or https://zora.co/collect/0x9d90669665607f08005cae4a7098143f554c59ef/39626. The Lens API has an allow list of providers and if the domain does not match it will mark it as failed metadata */
  mintLink: Scalars['Encryptable']['output'];
  /** An arbitrary list of tags. */
  tags?: Maybe<Array<Scalars['Tag']['output']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Add an account manager to the authenticated account.
   *
   * You MUST be authenticated as Account Owner to use this mutation.
   */
  addAccountManager: AddAccountManagerResult;
  /**
   * Add an app authorization endpoint.
   *
   * You MUST be authenticated as a builder to use this mutation.
   */
  addAppAuthorizationEndpoint: Scalars['Void']['output'];
  /**
   * React to a post.
   *
   * You MUST be authenticated as Account Owner or Account Manager to use this mutation.
   */
  addReaction: AddReactionResult;
  /**
   * Assign a username to an account.
   *
   * You MUST be authenticated as Account Owner or Account Manager to use this mutation.
   */
  assignUsernameToAccount: AssignUsernameToAccountResult;
  /** Authenticate the user with the signed authentication challenge. */
  authenticate: AuthenticationResult;
  /**
   * Block an account with the authenticated account.
   *
   * You MUST be authenticated as Account Owner or Account Manager to use this mutation.
   */
  block: BlockResult;
  /**
   * Bookmark a post.
   *
   * You MUST be authenticated as Account Owner or Account Manager to use this mutation.
   */
  bookmarkPost: Scalars['Void']['output'];
  /**
   * Generates a new authentication challenge for the specified address and app.
   *
   * Users must sign the challenge to authenticate.
   *
   * The issued challenge can be for authentication credentials for different roles:
   * - AccountOwner: The `address` is a Lens Account, and the `signed_by` is the Account Owner.
   * - AccountManager: The `address` is a Lens Account, and the `signed_by` is an Account Manager
   * for it.
   * - OnboardingUser: The `address` is an EOA that needs to create their Lens Account.
   * - Builder: The `address` is the EOA of a Builder that needs to use configuration and
   * management features.
   *
   * The HTTP Origin header MUST be present and match the app's domain.
   */
  challenge: AuthenticationChallenge;
  /**
   * Create an account with a given username.
   *
   * You MUST be authenticated as Onboarding User to use this mutation.
   */
  createAccountWithUsername: CreateAccountWithUsernameResult;
  /**
   * Create a new app
   *
   * You MUST be authenticated as a builder to use this mutation.
   */
  createApp: CreateAppResult;
  /**
   * Create a new feed
   *
   * You MUST be authenticated as a builder to use this mutation.
   */
  createFeed: CreateFeedResult;
  /**
   * Create a new graph
   *
   * You MUST be authenticated as a builder to use this mutation.
   */
  createGraph: CreateGraphResult;
  /**
   * Create a new group
   *
   * You MUST be authenticated as a builder to use this mutation.
   */
  createGroup: CreateGroupResult;
  /**
   * Create a username.
   *
   * You MUST be authenticated as Account Owner or Account Manager to use this mutation.
   */
  createUsername: CreateUsernameResult;
  /**
   * Create a new username namespace aka deploying a new username contract
   *
   * You MUST be authenticated as a builder to use this mutation.
   */
  createUsernameNamespace: CreateUsernameNamespaceResult;
  /**
   * Delete a post.
   *
   * You MUST be authenticated as Account Owner or Account Manager to use this mutation.
   */
  deletePost: DeletePostResult;
  /**
   * Edit a post.
   *
   * You MUST be authenticated as Account Owner or Account Manager to use this mutation.
   */
  editPost: PostResult;
  /**
   * Enables Signless experience for the authenticated account.
   *
   * You MUST be authenticated as Account Owner to use this mutation.
   */
  enableSignless: EnableSignlessResult;
  /**
   * Follow an Account on the global Graph or a specific Graph.
   *
   * You MUST be authenticated as Account Owner or Account Manager to use this mutation.
   */
  follow: FollowResult;
  /**
   * Hides an account from the manager list of managed accounts.
   *
   * You MUST be authenticated as Account Manager to use this mutation.
   */
  hideManagedAccount: Scalars['Void']['output'];
  hideReply: Scalars['Void']['output'];
  /**
   * Join a group
   *
   * You MUST be authenticated as Account Owner or Account Manager to use this mutation.
   */
  joinGroup: JoinGroupResult;
  /**
   * Leave a group
   *
   * You MUST be authenticated as Account Owner or Account Manager to use this mutation.
   */
  leaveGroup: LeaveGroupResult;
  /**
   * Issue new authentication tokens from a valid Lens API v2 refresh token.
   *
   * Use this to seamlessly transition your users from Lens API v2 to Lens API v3 without
   * requiring them to re-authenticate.
   *
   * The HTTP Origin header MUST be present and match the app's domain.
   */
  legacyRolloverRefresh: RefreshResult;
  /**
   * Mute an account for the authenticated account.
   *
   * You MUST be authenticated as Account Owner or Account Manager to use this mutation.
   */
  mute: Scalars['Void']['output'];
  /**
   * Create a new post.
   *
   * You MUST be authenticated as Account Owner or Account Manager to use this mutation.
   */
  post: PostResult;
  /**
   * Recommend an account from the authenticated account.
   *
   * You MUST be authenticated as Account Owner or Account Manager to use this mutation.
   */
  recommendAccount: Scalars['Void']['output'];
  /** Refreshes the authentication tokens. */
  refresh: RefreshResult;
  /**
   * Remove an account manager to the authenticated account.
   *
   * You MUST be authenticated as Account Owner to use this mutation.
   */
  removeAccountManager: RemoveAccountManagerResult;
  /**
   * Remove Signless experience for the authenticated account.
   *
   * You MUST be authenticated as Account Owner to use this mutation.
   */
  removeSignless: RemoveSignlessResult;
  /**
   * Report an account.
   *
   * You MUST be authenticated as Account Owner or Account Manager to use this mutation.
   */
  reportAccount: Scalars['Void']['output'];
  /**
   * Report a post.
   *
   * You MUST be authenticated as Account Owner or Account Manager to use this mutation.
   */
  reportPost: Scalars['Void']['output'];
  /**
   * Repost a post.
   *
   * You MUST be authenticated as Account Owner or Account Manager to use this mutation.
   */
  repost: PostResult;
  /**
   * Revoke an authentication.
   *
   * You MUST be authenticated to use this mutation.
   */
  revokeAuthentication: Scalars['Void']['output'];
  /**
   * Set the metadata for the authenticated account.
   *
   * You MUST be authenticated as Account Owner or Account Manager to use this mutation.
   */
  setAccountMetadata: SetAccountMetadataResult;
  /** You MUST be authenticated as Account Owner or Account Manager to use this mutation. */
  switchAccount: SwitchAccountResult;
  /**
   * Unassign a username from the logged-in user's Account.
   *
   * Defaults to the Lens namespace if no request is provided.
   *
   * You MUST be authenticated as Account Owner or Account Manager to use this mutation.
   */
  unassignUsernameFromAccount: UnassignUsernameToAccountResult;
  /**
   * Unblock an account with the authenticated account.
   *
   * You MUST be authenticated as Account Owner or Account Manager to use this mutation.
   */
  unblock: UnblockResult;
  /**
   * Undo bookmark.
   *
   * You MUST be authenticated as Account Owner or Account Manager to use this mutation.
   */
  undoBookmarkPost: Scalars['Void']['output'];
  /**
   * Undo reaction to a post.
   *
   * You MUST be authenticated as Account Owner or Account Manager to use this mutation.
   */
  undoReaction: UndoReactionResult;
  /**
   * Undo recommended account from the authenticated account.
   *
   * You MUST be authenticated as Account Owner or Account Manager to use this mutation.
   */
  undoRecommendedAccount: Scalars['Void']['output'];
  /**
   * Unfollow an Account on the global Graph or a specific Graph.
   *
   * You MUST be authenticated as Account Owner or Account Manager to use this mutation.
   */
  unfollow: UnfollowResult;
  /**
   * Undo the hiding of an account from the manager list of managed accounts.
   *
   * You MUST be authenticated as Account Manager to use this mutation.
   */
  unhideManagedAccount: Scalars['Void']['output'];
  unhideReply: Scalars['Void']['output'];
  /**
   * Unmute an account for the authenticated account.
   *
   * You MUST be authenticated as Account Owner or Account Manager to use this mutation.
   */
  unmute: Scalars['Void']['output'];
  /**
   * Update the Account Manager Permissions for a given Account Manager.
   *
   * You MUST be authenticated as Account Owner to use this mutation.
   */
  updateAccountManager: UpdateAccountManagerResult;
};


export type MutationAddAccountManagerArgs = {
  request: AddAccountManagerRequest;
};


export type MutationAddAppAuthorizationEndpointArgs = {
  request: AddAppAuthorizationEndpointRequest;
};


export type MutationAddReactionArgs = {
  request: AddReactionRequest;
};


export type MutationAssignUsernameToAccountArgs = {
  request: AssignUsernameToAccountRequest;
};


export type MutationAuthenticateArgs = {
  request: SignedAuthChallenge;
};


export type MutationBlockArgs = {
  request: BlockRequest;
};


export type MutationBookmarkPostArgs = {
  request: BookmarkPostRequest;
};


export type MutationChallengeArgs = {
  request: ChallengeRequest;
};


export type MutationCreateAccountWithUsernameArgs = {
  request: CreateAccountWithUsernameRequest;
};


export type MutationCreateAppArgs = {
  request: CreateAppRequest;
};


export type MutationCreateFeedArgs = {
  request: CreateFeedRequest;
};


export type MutationCreateGraphArgs = {
  request: CreateGraphRequest;
};


export type MutationCreateGroupArgs = {
  request: CreateGroupRequest;
};


export type MutationCreateUsernameArgs = {
  request: CreateUsernameRequest;
};


export type MutationCreateUsernameNamespaceArgs = {
  request: CreateUsernameNamespaceRequest;
};


export type MutationDeletePostArgs = {
  request: DeletePostRequest;
};


export type MutationEditPostArgs = {
  request: EditPostRequest;
};


export type MutationFollowArgs = {
  request: CreateFollowRequest;
};


export type MutationHideManagedAccountArgs = {
  request: HideManagedAccountRequest;
};


export type MutationHideReplyArgs = {
  request: HideReplyRequest;
};


export type MutationJoinGroupArgs = {
  request: JoinGroupRequest;
};


export type MutationLeaveGroupArgs = {
  request: LeaveGroupRequest;
};


export type MutationLegacyRolloverRefreshArgs = {
  request: RolloverRefreshRequest;
};


export type MutationMuteArgs = {
  request: MuteRequest;
};


export type MutationPostArgs = {
  request: CreatePostRequest;
};


export type MutationRecommendAccountArgs = {
  request: RecommendAccount;
};


export type MutationRefreshArgs = {
  request: RefreshRequest;
};


export type MutationRemoveAccountManagerArgs = {
  request: RemoveAccountManagerRequest;
};


export type MutationReportAccountArgs = {
  request: ReportAccountRequest;
};


export type MutationReportPostArgs = {
  request: ReportPostRequest;
};


export type MutationRepostArgs = {
  request: CreateRepostRequest;
};


export type MutationRevokeAuthenticationArgs = {
  request: RevokeAuthenticationRequest;
};


export type MutationSetAccountMetadataArgs = {
  request: SetAccountMetadataRequest;
};


export type MutationSwitchAccountArgs = {
  request: SwitchAccountRequest;
};


export type MutationUnassignUsernameFromAccountArgs = {
  request: UnassignUsernameFromAccountRequest;
};


export type MutationUnblockArgs = {
  request: UnblockRequest;
};


export type MutationUndoBookmarkPostArgs = {
  request: BookmarkPostRequest;
};


export type MutationUndoReactionArgs = {
  request: UndoReactionRequest;
};


export type MutationUndoRecommendedAccountArgs = {
  request: UndoRecommendedAccount;
};


export type MutationUnfollowArgs = {
  request: CreateUnfollowRequest;
};


export type MutationUnhideManagedAccountArgs = {
  request: UnhideManagedAccountRequest;
};


export type MutationUnhideReplyArgs = {
  request: UnhideReplyRequest;
};


export type MutationUnmuteArgs = {
  request: MuteRequest;
};


export type MutationUpdateAccountManagerArgs = {
  request: UpdateAccountManagerRequest;
};

export type MuteRequest = {
  /** The account to mute. */
  account: Scalars['EvmAddress']['input'];
};

export type NestedPost = Post | PostReference;

export type NetworkAddress = {
  __typename?: 'NetworkAddress';
  address: Scalars['EvmAddress']['output'];
  chainId: Scalars['Int']['output'];
};

export enum NftContractType {
  Erc_721 = 'ERC_721',
  Erc_1155 = 'ERC_1155'
}

export type NftOwnershipCondition = {
  __typename?: 'NftOwnershipCondition';
  contract: NetworkAddress;
  contractType: NftContractType;
  /**
   * A list of token IDs you want to check ownership of. The list is optional for ERC721, you
   * MUST provide a list of token IDs for ERC1155.
   */
  tokenIds: Array<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

/** The existence of the transaction is not yet indexed. Keep trying. */
export type NotIndexedYetStatus = {
  __typename?: 'NotIndexedYetStatus';
  reason: Scalars['String']['output'];
  /** True if the transaction has been mined. */
  txHasMined: Scalars['Boolean']['output'];
};

export type Notification = CommentNotification | FollowNotification | MentionNotification | QuoteNotification | ReactionNotification | RepostNotification;

export type NotificationAccountFollow = {
  __typename?: 'NotificationAccountFollow';
  account: Account;
  followedAt: Scalars['DateTime']['output'];
};

export type NotificationAccountPostReaction = {
  __typename?: 'NotificationAccountPostReaction';
  account: Account;
  reactions: Array<PostReaction>;
};

export type NotificationAccountRepost = {
  __typename?: 'NotificationAccountRepost';
  account: Account;
  repostId: Scalars['PostId']['output'];
  repostedAt: Scalars['DateTime']['output'];
};

export type NotificationFilter = {
  /** The apps to filter by. */
  apps?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  /** Include notification from accounts with low score */
  includeLowScore?: Scalars['Boolean']['input'];
  /** The notification types to filter by. */
  notificationTypes?: InputMaybe<Array<NotificationType>>;
  /** Aggregate notifications by time */
  timeBasedAggregation?: Scalars['Boolean']['input'];
};

export enum NotificationOrderBy {
  AccountScore = 'ACCOUNT_SCORE',
  Default = 'DEFAULT'
}

export type NotificationRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  /** An optional filter to narrow down the notifications result. */
  filter?: InputMaybe<NotificationFilter>;
  /** The feeds to get notifications for. */
  forFeeds?: Array<Scalars['EvmAddress']['input']>;
  /** The graphs to get notifications for. */
  forGraphs?: Array<Scalars['EvmAddress']['input']>;
  /** An optional order to sort the notifications result. */
  orderBy?: NotificationOrderBy;
};

export enum NotificationType {
  Commented = 'COMMENTED',
  Followed = 'FOLLOWED',
  Mentioned = 'MENTIONED',
  Quoted = 'QUOTED',
  Reacted = 'REACTED',
  Reposted = 'REPOSTED'
}

export type OnboardingUserChallengeRequest = {
  /**
   * The App you intend to authenticate with.
   *
   * It MUST be a valid App address.
   * Note: On the testnet, it will default to `0x90C8C68D0ABFB40D4FCD72316A65E42161520BC3`, the
   * playground app. This is to make it easier if you forget to set it. This may change in the
   * future.
   */
  app?: Scalars['EvmAddress']['input'];
  /** The address of the EOA that needs to create their Lens Account. */
  wallet: Scalars['EvmAddress']['input'];
};

export enum PageSize {
  Fifty = 'FIFTY',
  Ten = 'TEN'
}

export type PaginatedAccountManagersResult = {
  __typename?: 'PaginatedAccountManagersResult';
  /** The account managers. */
  items: Array<AccountManager>;
  /** The pagination information for the given request. */
  pageInfo: PaginatedResultInfo;
};

export type PaginatedAccountsAvailableResult = {
  __typename?: 'PaginatedAccountsAvailableResult';
  /** The accounts available to use for the given address */
  items: Array<AccountAvailable>;
  /** The pagination information for the given request. */
  pageInfo: PaginatedResultInfo;
};

export type PaginatedAccountsBlockedResult = {
  __typename?: 'PaginatedAccountsBlockedResult';
  items: Array<AccountBlocked>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedAccountsResult = {
  __typename?: 'PaginatedAccountsResult';
  items: Array<Account>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedActions = {
  __typename?: 'PaginatedActions';
  items: Array<ActionInfo>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedActiveAuthenticationsResult = {
  __typename?: 'PaginatedActiveAuthenticationsResult';
  items: Array<AuthenticatedSession>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedAnyPostsResult = {
  __typename?: 'PaginatedAnyPostsResult';
  items: Array<AnyPost>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedAppsResult = {
  __typename?: 'PaginatedAppsResult';
  items: Array<App>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedFollowersResult = {
  __typename?: 'PaginatedFollowersResult';
  items: Array<Follower>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedFollowingResult = {
  __typename?: 'PaginatedFollowingResult';
  items: Array<Following>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedGroupsResult = {
  __typename?: 'PaginatedGroupsResult';
  /** The groups */
  items: Array<Group>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedNotificationResult = {
  __typename?: 'PaginatedNotificationResult';
  items: Array<Notification>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedPostReactionsResult = {
  __typename?: 'PaginatedPostReactionsResult';
  items: Array<AccountPostReaction>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedPostTagsResult = {
  __typename?: 'PaginatedPostTagsResult';
  items: Array<Scalars['Tag']['output']>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedPostsResult = {
  __typename?: 'PaginatedPostsResult';
  items: Array<Post>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedResultInfo = {
  __typename?: 'PaginatedResultInfo';
  /** The cursor to the next page of results, if any. */
  next?: Maybe<Scalars['Cursor']['output']>;
  /** The cursor to the previous page of results, if any. */
  prev?: Maybe<Scalars['Cursor']['output']>;
};

export type PaginatedTimelineResult = {
  __typename?: 'PaginatedTimelineResult';
  items: Array<TimelineItem>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedUsernamesResult = {
  __typename?: 'PaginatedUsernamesResult';
  items: Array<Username>;
  pageInfo: PaginatedResultInfo;
};

export type PaymasterParams = {
  __typename?: 'PaymasterParams';
  /** The address of the paymaster. */
  paymaster: Scalars['EvmAddress']['output'];
  /** The bytestream input for the paymaster. */
  paymasterInput: Scalars['BlockchainData']['output'];
};

/**
 * The existence of the transaction is known, but its status is not yet known.
 *
 * The transaction could be:
 * - waiting to be included in a block
 * - waiting for a block to be mined
 * - waiting to be indexed by the Lens Indexer
 * - waiting for any associated metadata to be snapshotted and indexed
 */
export type PendingTransactionStatus = {
  __typename?: 'PendingTransactionStatus';
  blockTimestamp: Scalars['DateTime']['output'];
};

/** PhysicalAddress */
export type PhysicalAddress = {
  __typename?: 'PhysicalAddress';
  /** The country name component. */
  country: Scalars['Encryptable']['output'];
  /** The full mailing address formatted for display. */
  formatted?: Maybe<Scalars['Encryptable']['output']>;
  /** The city or locality. */
  locality: Scalars['Encryptable']['output'];
  /** The zip or postal code. */
  postalCode?: Maybe<Scalars['Encryptable']['output']>;
  /** The state or region. */
  region?: Maybe<Scalars['Encryptable']['output']>;
  /**
   * The street address including house number, street name, P.O. Box, apartment or unit number
   * and extended multi-line address information.
   */
  streetAddress?: Maybe<Scalars['Encryptable']['output']>;
};

export type Post = {
  __typename?: 'Post';
  actions: Array<PostAction>;
  app?: Maybe<App>;
  author: Account;
  commentOn?: Maybe<NestedPost>;
  feed: Feed;
  id: Scalars['PostId']['output'];
  isDeleted: Scalars['Boolean']['output'];
  isEdited: Scalars['Boolean']['output'];
  mentions: Array<AccountMention>;
  metadata: PostMetadata;
  operations?: Maybe<LoggedInPostOperations>;
  quoteOf?: Maybe<NestedPost>;
  root?: Maybe<NestedPost>;
  stats: PostStats;
  timestamp: Scalars['DateTime']['output'];
};

export type PostAccountPair = {
  account: Scalars['EvmAddress']['input'];
  post: Scalars['PostId']['input'];
};

export type PostAction = SimpleCollectActionSettings | UnknownActionSettings;

export enum PostActionCategoryType {
  Collect = 'COLLECT'
}

export type PostActionInput = {
  collectAction: CollectActionInput;
  unknownAction: UnknownActionInput;
};

export enum PostActionType {
  SimpleCollectAction = 'SIMPLE_COLLECT_ACTION',
  UnknownAction = 'UNKNOWN_ACTION'
}

export type PostActionsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  includeOnlyCollectActions?: InputMaybe<Scalars['Boolean']['input']>;
  includeUnknown?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  onlyVerified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PostBookmarksFilter = {
  metadata?: InputMaybe<PostMetadataFilter>;
};

export type PostBookmarksRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PostBookmarksFilter>;
  /** The feeds to get bookmarks for. */
  forFeeds?: Array<Scalars['EvmAddress']['input']>;
  pageSize?: PageSize;
};

export type PostMetadata = ArticleMetadata | AudioMetadata | CheckingInMetadata | EmbedMetadata | EventMetadata | ImageMetadata | LinkMetadata | LivestreamMetadata | MintMetadata | SpaceMetadata | StoryMetadata | TextOnlyMetadata | ThreeDMetadata | TransactionMetadata | VideoMetadata;

export type PostMetadataContentWarningFilter = {
  oneOf: Array<ContentWarning>;
};

export type PostMetadataFilter = {
  /** The content warning to filter by. */
  contentWarning?: InputMaybe<PostMetadataContentWarningFilter>;
  /** The main focus of the post. */
  mainContentFocus?: InputMaybe<Array<MainContentFocus>>;
  /** The tags to filter by. */
  tags?: InputMaybe<PostMetadataTagsFilter>;
};

export type PostMetadataTagsFilter = {
  all?: InputMaybe<Array<Scalars['String']['input']>>;
  oneOf?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type PostReaction = {
  __typename?: 'PostReaction';
  reactedAt: Scalars['DateTime']['output'];
  reaction: PostReactionType;
};

export enum PostReactionOrderBy {
  AccountScore = 'ACCOUNT_SCORE',
  Default = 'DEFAULT'
}

export type PostReactionStatus = {
  __typename?: 'PostReactionStatus';
  account: Scalars['EvmAddress']['output'];
  postId: Scalars['PostId']['output'];
  result: Scalars['Boolean']['output'];
};

export type PostReactionStatusRequest = {
  filter?: InputMaybe<PostReactionsFilter>;
  pairs: Array<PostAccountPair>;
};

export enum PostReactionType {
  Downvote = 'DOWNVOTE',
  Upvote = 'UPVOTE'
}

export type PostReactionsFilter = {
  /** The types of reactions to filter by. */
  anyOf?: InputMaybe<Array<PostReactionType>>;
};

export type PostReactionsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  /** An optional filter to narrow down the result. */
  filter?: InputMaybe<PostReactionsFilter>;
  /** The order in which to return the results. */
  orderBy?: InputMaybe<PostReactionOrderBy>;
  pageSize?: PageSize;
  /** The ID of the post to get reactions for. */
  post: Scalars['PostId']['input'];
};

export type PostReference = {
  __typename?: 'PostReference';
  id: Scalars['PostId']['output'];
};

export enum PostReferenceType {
  CommentOn = 'COMMENT_ON',
  QuoteOf = 'QUOTE_OF',
  RepostOf = 'REPOST_OF'
}

export type PostReferencesRequest = {
  /** The cursor. */
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  /** The page size. */
  pageSize?: PageSize;
  /** The types of references to get. */
  referenceTypes: Array<PostReferenceType>;
  /** The post to get references for. */
  referencedPost: Scalars['PostId']['input'];
  /** The visibility filter to apply by default it will honour the visibility of the post. */
  visibilityFilter?: PostVisibilityFilter;
};

export enum PostReportReason {
  AnimalAbuse = 'ANIMAL_ABUSE',
  DirectThreat = 'DIRECT_THREAT',
  FakeEngagement = 'FAKE_ENGAGEMENT',
  Harassment = 'HARASSMENT',
  HateSpeech = 'HATE_SPEECH',
  Impersonation = 'IMPERSONATION',
  ManipulationAlgo = 'MANIPULATION_ALGO',
  Misleading = 'MISLEADING',
  MisuseHashtags = 'MISUSE_HASHTAGS',
  Nudity = 'NUDITY',
  Offensive = 'OFFENSIVE',
  Repetitive = 'REPETITIVE',
  Scam = 'SCAM',
  SelfHarm = 'SELF_HARM',
  SomethingElse = 'SOMETHING_ELSE',
  UnauthorizedSale = 'UNAUTHORIZED_SALE',
  Unrelated = 'UNRELATED',
  Violence = 'VIOLENCE'
}

/** You must provide either a txHash or a postId, not both. */
export type PostRequest = {
  /** The post ID. */
  post?: InputMaybe<Scalars['PostId']['input']>;
  /** The transaction hash you sent the post with. */
  txHash?: InputMaybe<Scalars['TxHash']['input']>;
};

export type PostResponse = {
  __typename?: 'PostResponse';
  hash: Scalars['TxHash']['output'];
};

export type PostResult = PostResponse | SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type PostStats = {
  __typename?: 'PostStats';
  /** The total number of bookmarks. */
  bookmarks: Scalars['Int']['output'];
  /** The total number of collects. */
  collects: Scalars['Int']['output'];
  /** The total number of comments. */
  comments: Scalars['Int']['output'];
  /** The total number of quotes. */
  quotes: Scalars['Int']['output'];
  /** Get the number of reactions for the post. */
  reactions: Scalars['Int']['output'];
  /** The total number of reposts. */
  reposts: Scalars['Int']['output'];
};


export type PostStatsReactionsArgs = {
  request?: StatsReactionRequest;
};

export enum PostTagsOrderBy {
  Alphabetical = 'ALPHABETICAL',
  MostPopular = 'MOST_POPULAR'
}

export type PostTagsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  /** The feeds to get tags for. */
  forFeeds: Array<Scalars['EvmAddress']['input']>;
  orderBy?: PostTagsOrderBy;
  pageSize?: PageSize;
};

export enum PostType {
  Comment = 'COMMENT',
  Quote = 'QUOTE',
  Repost = 'REPOST',
  Root = 'ROOT'
}

export enum PostVisibilityFilter {
  /** All posts even if they have been hidden */
  All = 'ALL',
  /** Only the posts that are hidden */
  Hidden = 'HIDDEN',
  /** Only the posts that are visible */
  Visible = 'VISIBLE'
}

export type PostsFilterRequest = {
  apps?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  authors?: InputMaybe<Array<Scalars['EvmAddress']['input']>>;
  metadata?: InputMaybe<PostMetadataFilter>;
  postTypes?: InputMaybe<Array<PostType>>;
};

export type PostsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PostsFilterRequest>;
  forFeeds?: Array<Scalars['EvmAddress']['input']>;
  pageSize?: PageSize;
};

/** ProfileOwnershipCondition */
export type ProfileOwnershipCondition = {
  __typename?: 'ProfileOwnershipCondition';
  profileId: Scalars['LegacyProfileId']['output'];
  type: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  _service: _Service;
  /** Get an account by address, username, or legacy profile ID. */
  account?: Maybe<Account>;
  /** Get the account stats for the feeds. */
  accountFeedsStats: AccountFeedsStats;
  /** Get the account stats for the graphs. */
  accountGraphsStats: AccountGraphsFollowStats;
  /**
   * Account manager for the authenticated account.
   *
   * You MUST be authenticated to use this query.
   */
  accountManagers: PaginatedAccountManagersResult;
  /** Get the stats for an account. */
  accountStats: AccountStats;
  /** Get accounts by address, username, or legacy profile ID. */
  accounts: Array<Account>;
  /** Get the accounts which are available to use for the given address */
  accountsAvailable: PaginatedAccountsAvailableResult;
  /**
   * Accounts blocked for the authenticated account.
   *
   * You MUST be authenticated to use this query.
   */
  accountsBlocked: PaginatedAccountsBlockedResult;
  app?: Maybe<App>;
  apps: PaginatedAppsResult;
  /**
   * List all active authenticated sessions for the current account.
   *
   * You MUST be authenticated to use this query.
   */
  authenticatedSessions: PaginatedActiveAuthenticationsResult;
  /**
   * Get the current authenticated session for the current account.
   *
   * You MUST be authenticated to use this query.
   */
  currentSession: AuthenticatedSession;
  debugMetadata: DebugPostMetadataResult;
  debugTransactionStatusFailed?: Maybe<DebugTransactionStatusResult>;
  feed?: Maybe<Feed>;
  followStatus: Array<FollowStatusResult>;
  followers: PaginatedFollowersResult;
  followersYouKnow: PaginatedFollowersResult;
  following: PaginatedFollowingResult;
  graph?: Maybe<Graph>;
  group?: Maybe<Group>;
  /** Get the members of the group */
  groupMembers: PaginatedAccountsResult;
  /** Get the groups this account is a member of */
  groups: PaginatedGroupsResult;
  health: Scalars['Boolean']['output'];
  /** Get the last logged in account for the given address and app if specified. */
  lastLoggedInAccount?: Maybe<Account>;
  /**
   * Account information for the authenticated account.
   *
   * You MUST be authenticated to use this query.
   */
  me: MeResult;
  /**
   * Get account notifications.
   *
   * You MUST be authenticated to use this query.
   */
  notifications: PaginatedNotificationResult;
  post?: Maybe<AnyPost>;
  postActions: PaginatedActions;
  postBookmarks: PaginatedAnyPostsResult;
  postReactionStatus: Array<PostReactionStatus>;
  /** Get the reactions added to a post. */
  postReactions: PaginatedPostReactionsResult;
  postReferences: PaginatedAnyPostsResult;
  postTags: PaginatedPostTagsResult;
  posts: PaginatedAnyPostsResult;
  /** Search for accounts by usernames. */
  searchAccounts: PaginatedAccountsResult;
  /** Search for groups */
  searchGroups: PaginatedGroupsResult;
  searchPosts: PaginatedAnyPostsResult;
  /**
   * Get account timeline.
   *
   * You MUST be authenticated to use this query.
   */
  timeline: PaginatedTimelineResult;
  /** Get most engaged posts for the given account timeline. */
  timelineHighlights: PaginatedPostsResult;
  /** Get the status of a transaction by its hash. */
  transactionStatus: TransactionStatusResult;
  username?: Maybe<Username>;
  usernameNamespace?: Maybe<UsernameNamespace>;
  /** Get the usernames for the account/owner. */
  usernames: PaginatedUsernamesResult;
  whoActedOnPost: PaginatedAccountsResult;
  /** Get accounts who referenced a post */
  whoReferencedPost: PaginatedAccountsResult;
};


export type QueryAccountArgs = {
  request: AccountRequest;
};


export type QueryAccountFeedsStatsArgs = {
  request: AccountFeedsStatsRequest;
};


export type QueryAccountGraphsStatsArgs = {
  request: AccountGraphsStatsRequest;
};


export type QueryAccountManagersArgs = {
  request: AccountManagersRequest;
};


export type QueryAccountStatsArgs = {
  request: AccountStatsRequest;
};


export type QueryAccountsArgs = {
  request: AccountsRequest;
};


export type QueryAccountsAvailableArgs = {
  request: AccountsAvailableRequest;
};


export type QueryAccountsBlockedArgs = {
  request: AccountsBlockedRequest;
};


export type QueryAppArgs = {
  request: AppRequest;
};


export type QueryAppsArgs = {
  request: AppsRequest;
};


export type QueryAuthenticatedSessionsArgs = {
  request: AuthenticatedSessionsRequest;
};


export type QueryDebugMetadataArgs = {
  request: DebugPostMetadataRequest;
};


export type QueryDebugTransactionStatusFailedArgs = {
  request: DebugTransactionStatusRequest;
};


export type QueryFeedArgs = {
  request: FeedRequest;
};


export type QueryFollowStatusArgs = {
  request: FollowStatusRequest;
};


export type QueryFollowersArgs = {
  request: FollowersRequest;
};


export type QueryFollowersYouKnowArgs = {
  request: FollowersYouKnowRequest;
};


export type QueryFollowingArgs = {
  request: FollowingRequest;
};


export type QueryGraphArgs = {
  request: GraphRequest;
};


export type QueryGroupArgs = {
  request: GroupRequest;
};


export type QueryGroupMembersArgs = {
  request: GroupMembersRequest;
};


export type QueryGroupsArgs = {
  request: GroupsRequest;
};


export type QueryLastLoggedInAccountArgs = {
  request: LastLoggedInAccountRequest;
};


export type QueryNotificationsArgs = {
  request: NotificationRequest;
};


export type QueryPostArgs = {
  request: PostRequest;
};


export type QueryPostActionsArgs = {
  request: PostActionsRequest;
};


export type QueryPostBookmarksArgs = {
  request: PostBookmarksRequest;
};


export type QueryPostReactionStatusArgs = {
  request: PostReactionStatusRequest;
};


export type QueryPostReactionsArgs = {
  request: PostReactionsRequest;
};


export type QueryPostReferencesArgs = {
  request: PostReferencesRequest;
};


export type QueryPostTagsArgs = {
  request: PostTagsRequest;
};


export type QueryPostsArgs = {
  request: PostsRequest;
};


export type QuerySearchAccountsArgs = {
  request: AccountSearchRequest;
};


export type QuerySearchGroupsArgs = {
  request: SearchGroupsRequest;
};


export type QuerySearchPostsArgs = {
  request: SearchPostsRequest;
};


export type QueryTimelineArgs = {
  request: TimelineRequest;
};


export type QueryTimelineHighlightsArgs = {
  request: TimelineHighlightsRequest;
};


export type QueryTransactionStatusArgs = {
  request: TransactionStatusRequest;
};


export type QueryUsernameArgs = {
  request: UsernameRequest;
};


export type QueryUsernameNamespaceArgs = {
  request: UsernameNamespaceRequest;
};


export type QueryUsernamesArgs = {
  request: UsernamesRequest;
};


export type QueryWhoActedOnPostArgs = {
  request: WhoActedOnPostRequest;
};


export type QueryWhoReferencedPostArgs = {
  request: WhoReferencedPostRequest;
};

export type QuoteNotification = {
  __typename?: 'QuoteNotification';
  id: Scalars['GeneratedNotificationId']['output'];
  quote: Post;
};

export type ReactionNotification = {
  __typename?: 'ReactionNotification';
  id: Scalars['GeneratedNotificationId']['output'];
  post: Post;
  reactions: Array<NotificationAccountPostReaction>;
};

export type RecipientDataInput = {
  recipient: Scalars['EvmAddress']['input'];
  split: Scalars['Float']['input'];
};

export type RecipientDataOutput = {
  __typename?: 'RecipientDataOutput';
  recipient: Scalars['EvmAddress']['output'];
  split: Scalars['Float']['output'];
};

export type RecommendAccount = {
  /** The account to recommend. */
  account: Scalars['EvmAddress']['input'];
};

export type ReferencingPostInput = {
  /** The post to reference. */
  post: Scalars['PostId']['input'];
};

export type RefreshRequest = {
  refreshToken: Scalars['RefreshToken']['input'];
};

export type RefreshResult = AuthenticationTokens | ForbiddenError;

export type RemoveAccountManagerRequest = {
  /** The address to remove as a manager. */
  manager: Scalars['EvmAddress']['input'];
};

export type RemoveAccountManagerResult = SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type RemoveSignlessResult = SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type ReportAccountRequest = {
  /** The account to report. */
  account: Scalars['EvmAddress']['input'];
  /** An optional comment to add to the report. */
  additionalComment?: InputMaybe<Scalars['String']['input']>;
  /** The reason for the report. */
  reason: AccountReportReason;
  /** An optional list of posts to reference in the report. */
  referencePosts?: InputMaybe<Array<Scalars['PostId']['input']>>;
};

export type ReportPostRequest = {
  additionalComment?: InputMaybe<Scalars['String']['input']>;
  post: Scalars['PostId']['input'];
  reason: PostReportReason;
};

export type Repost = {
  __typename?: 'Repost';
  app?: Maybe<App>;
  author: Account;
  id: Scalars['PostId']['output'];
  isDeleted: Scalars['Boolean']['output'];
  repostOf: Post;
  timestamp: Scalars['DateTime']['output'];
};

export type RepostNotification = {
  __typename?: 'RepostNotification';
  id: Scalars['GeneratedNotificationId']['output'];
  post: Post;
  reposts: Array<NotificationAccountRepost>;
};

export type RevokeAuthenticationRequest = {
  authenticationId: Scalars['UUID']['input'];
};

export type RolloverRefreshRequest = {
  /** The app that new tokens will be issued for. */
  app: Scalars['EvmAddress']['input'];
  /** A valid Lens API v2 refresh token for a Profile session. */
  refreshToken: Scalars['LegacyRefreshToken']['input'];
};

export type SearchGroupsRequest = {
  /** The cursor. */
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  /** The page size. */
  pageSize?: PageSize;
  /** The search query */
  query: Scalars['String']['input'];
};

export type SearchPostsFilter = {
  /** The optional metadata filter. */
  metadata?: InputMaybe<PostMetadataFilter>;
  /** The post types to filter by. */
  postTypes?: InputMaybe<Array<PostType>>;
};

export type SearchPostsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  /** The optional post types to filter by. */
  filter?: InputMaybe<SearchPostsFilter>;
  /** The feeds to search in. */
  forFeeds?: Array<Scalars['EvmAddress']['input']>;
  pageSize?: PageSize;
  /**
   * The query text to search for in the post content or metadata tags.
   * The passed strings supports web search syntax similar to the search engines:
   * - individual words match independently.
   * - double-quoted phrases match as a single unit.
   * - the word or (case-insensitive) specifies an “or” condition between two words or phrases
   * - a "-" prefix specifies to not match the following word or phrase.
   */
  query: Scalars['String']['input'];
};

export enum SelfFundedFallbackReason {
  CannotSponsor = 'CANNOT_SPONSOR',
  NotSponsored = 'NOT_SPONSORED'
}

export type SelfFundedTransactionRequest = {
  __typename?: 'SelfFundedTransactionRequest';
  /**
   * The raw transaction request object.
   *
   * Use this object if your library does not have a parser for the encoded transaction data.
   */
  raw: Eip1559TransactionRequest;
  /** The reason for the fallback. */
  reason?: Maybe<SelfFundedFallbackReason>;
};

export type SetAccountMetadataRequest = {
  /** The metadata URI to set. */
  metadataUri: Scalars['URI']['input'];
};

export type SetAccountMetadataResponse = {
  __typename?: 'SetAccountMetadataResponse';
  hash: Scalars['TxHash']['output'];
};

export type SetAccountMetadataResult = SelfFundedTransactionRequest | SetAccountMetadataResponse | SponsoredTransactionRequest | TransactionWillFail;

export type SignedAuthChallenge = {
  id: Scalars['UUID']['input'];
  signature: Scalars['Signature']['input'];
};

export type SimpleCollectActionInput = {
  amount?: InputMaybe<AmountInput>;
  collectLimit?: InputMaybe<Scalars['String']['input']>;
  endsAt?: InputMaybe<Scalars['DateTime']['input']>;
  followerOnly: Scalars['Boolean']['input'];
  recipient?: InputMaybe<Scalars['EvmAddress']['input']>;
  recipients?: InputMaybe<Array<RecipientDataInput>>;
  referralFee?: InputMaybe<Scalars['Float']['input']>;
};

export type SimpleCollectActionSettings = {
  __typename?: 'SimpleCollectActionSettings';
  amount: Amount;
  collectLimit?: Maybe<Scalars['String']['output']>;
  collectNft?: Maybe<Scalars['EvmAddress']['output']>;
  contract: NetworkAddress;
  endsAt?: Maybe<Scalars['DateTime']['output']>;
  followerOnly: Scalars['Boolean']['output'];
  recipient: Scalars['EvmAddress']['output'];
  recipients: Array<RecipientDataOutput>;
  referralFee: Scalars['Float']['output'];
};

export type SpaceMetadata = {
  __typename?: 'SpaceMetadata';
  /** The other attachments you want to include with it. */
  attachments: Array<AnyMedia>;
  /**
   * A bag of attributes that can be used to store any kind of metadata that is not currently
   * supported by the standard. Over time, common attributes will be added to the standard and
   * their usage as arbitrary attributes will be discouraged.
   */
  attributes: Array<MetadataAttribute>;
  content: Scalars['Encryptable']['output'];
  /** Specify a content warning. */
  contentWarning?: Maybe<ContentWarning>;
  encryptedWith?: Maybe<EncryptionStrategy>;
  id: Scalars['MetadataId']['output'];
  /** The space join link. */
  link: Scalars['Encryptable']['output'];
  locale: Scalars['Locale']['output'];
  /** The main focus of the post. */
  mainContentFocus: MainContentFocus;
  /** The space start time (ISO 8601 `YYYY-MM-DDTHH:mm:ss.sssZ`). */
  startsAt: Scalars['Encryptable']['output'];
  /** An arbitrary list of tags. */
  tags?: Maybe<Array<Scalars['Tag']['output']>>;
  /** The space title. */
  title: Scalars['String']['output'];
};

export enum SponsorLimitType {
  Day = 'DAY',
  Hour = 'HOUR',
  Month = 'MONTH',
  Week = 'WEEK'
}

export enum SponsoredFallbackReason {
  SignlessDisabled = 'SIGNLESS_DISABLED',
  SignlessFailed = 'SIGNLESS_FAILED'
}

export type SponsoredTransactionRequest = {
  __typename?: 'SponsoredTransactionRequest';
  /**
   * The raw transaction request object.
   *
   * Use this object if your library does not have a parser for the encoded transaction data.
   */
  raw: Eip712TransactionRequest;
  /** The reason for the fallback. */
  reason?: Maybe<SponsoredFallbackReason>;
};

export type SponsorshipAllowance = {
  __typename?: 'SponsorshipAllowance';
  /** The total sponsorship allowance. */
  allowance: Scalars['Int']['output'];
  /** The number of remaining sponsorship allowance. */
  allowanceLeft: Scalars['Int']['output'];
  /** The number of sponsorship allowance used. */
  allowanceUsed: Scalars['Int']['output'];
  /** The sponsorship window type. */
  window: SponsorLimitType;
};

export type StatsReactionRequest = {
  type: PostReactionType;
};

export type StoryMetadata = {
  __typename?: 'StoryMetadata';
  /** The story asset. */
  asset: AnyMedia;
  /**
   * A bag of attributes that can be used to store any kind of metadata that is not currently
   * supported by the standard. Over time, common attributes will be added to the standard and
   * their usage as arbitrary attributes will be discouraged.
   */
  attributes: Array<MetadataAttribute>;
  content: Scalars['Encryptable']['output'];
  /** Specify a content warning. */
  contentWarning?: Maybe<ContentWarning>;
  encryptedWith?: Maybe<EncryptionStrategy>;
  id: Scalars['MetadataId']['output'];
  locale: Scalars['Locale']['output'];
  /** The main focus of the post. */
  mainContentFocus: MainContentFocus;
  /** An arbitrary list of tags. */
  tags?: Maybe<Array<Scalars['Tag']['output']>>;
};

export type SwitchAccountRequest = {
  account: Scalars['EvmAddress']['input'];
};

export type SwitchAccountResult = AuthenticationTokens | ForbiddenError;

export type TextOnlyMetadata = {
  __typename?: 'TextOnlyMetadata';
  /**
   * A bag of attributes that can be used to store any kind of metadata that is not currently
   * supported by the standard. Over time, common attributes will be added to the standard and
   * their usage as arbitrary attributes will be discouraged.
   */
  attributes: Array<MetadataAttribute>;
  content: Scalars['Encryptable']['output'];
  /** Specify a content warning. */
  contentWarning?: Maybe<ContentWarning>;
  encryptedWith?: Maybe<EncryptionStrategy>;
  id: Scalars['MetadataId']['output'];
  locale: Scalars['Locale']['output'];
  /** The main focus of the post. */
  mainContentFocus: MainContentFocus;
  /** An arbitrary list of tags. */
  tags?: Maybe<Array<Scalars['Tag']['output']>>;
};

export type ThreeDAsset = {
  __typename?: 'ThreeDAsset';
  /** The 3D format of the asset. */
  format: ThreeDAssetFormat;
  /** The license regulating the use of the 3D asset. */
  license?: Maybe<MetadataLicenseType>;
  /** The URL of the recommended web based 3D player to use to view the 3D asset. */
  playerUrl: Scalars['URI']['output'];
  /** The URI of the 3D asset zip file. */
  uri: Scalars['URI']['output'];
  /** Path in extracted zip. Relative. 3D start point, MUST be 3D file type. */
  zipPath?: Maybe<Scalars['String']['output']>;
};

export enum ThreeDAssetFormat {
  Fbx = 'FBX',
  GLtfGlb = 'G_LTF_GLB',
  Obj = 'OBJ',
  Vrm = 'VRM'
}

export type ThreeDMetadata = {
  __typename?: 'ThreeDMetadata';
  /** The 3D items for the post */
  assets: Array<ThreeDAsset>;
  /** The other attachments you want to include with it. */
  attachments: Array<AnyMedia>;
  /**
   * A bag of attributes that can be used to store any kind of metadata that is not currently
   * supported by the standard. Over time, common attributes will be added to the standard and
   * their usage as arbitrary attributes will be discouraged.
   */
  attributes: Array<MetadataAttribute>;
  content: Scalars['Encryptable']['output'];
  /** Specify a content warning. */
  contentWarning?: Maybe<ContentWarning>;
  encryptedWith?: Maybe<EncryptionStrategy>;
  id: Scalars['MetadataId']['output'];
  locale: Scalars['Locale']['output'];
  /** The main focus of the post. */
  mainContentFocus: MainContentFocus;
  /** An arbitrary list of tags. */
  tags?: Maybe<Array<Scalars['Tag']['output']>>;
};

export enum TimelineEventItemType {
  Comment = 'COMMENT',
  Post = 'POST',
  Quote = 'QUOTE',
  Repost = 'REPOST'
}

export type TimelineFilter = {
  /** The post event types to filter by. */
  eventType?: InputMaybe<Array<TimelineEventItemType>>;
  /** The optional metadata filter. */
  metadata?: InputMaybe<PostMetadataFilter>;
};

export type TimelineHighlightsFilter = {
  metadata?: InputMaybe<PostMetadataFilter>;
};

export type TimelineHighlightsRequest = {
  /** The account to get timeline highlights for. */
  account: Scalars['EvmAddress']['input'];
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  /** An optional filter to apply to the timeline. */
  filter?: InputMaybe<TimelineHighlightsFilter>;
  /** The feeds to get timeline for. */
  forFeeds?: Array<Scalars['EvmAddress']['input']>;
  pageSize?: PageSize;
};

export type TimelineItem = {
  __typename?: 'TimelineItem';
  comments: Array<Post>;
  id: Scalars['UUID']['output'];
  primary: Post;
  reposts: Array<Post>;
};

export type TimelineRequest = {
  /** The account to get timeline for. */
  account: Scalars['EvmAddress']['input'];
  /** The cursor. */
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  /** An optional filter to apply to the timeline. */
  filter?: InputMaybe<TimelineFilter>;
  /** The feeds to get timeline for. */
  forFeeds?: Array<Scalars['EvmAddress']['input']>;
};

/** AccessCondition */
export type TopLevelAccessCondition = {
  __typename?: 'TopLevelAccessCondition';
  criteria: Array<AnyAccessCondition>;
  type: Scalars['String']['output'];
};

export type TransactionMetadata = {
  __typename?: 'TransactionMetadata';
  /** The other attachments you want to include with it. */
  attachments: Array<AnyMedia>;
  /**
   * A bag of attributes that can be used to store any kind of metadata that is not currently
   * supported by the standard. Over time, common attributes will be added to the standard and
   * their usage as arbitrary attributes will be discouraged.
   */
  attributes: Array<MetadataAttribute>;
  /** The Chain Id. */
  chainId: Scalars['ChainId']['output'];
  content: Scalars['Encryptable']['output'];
  /** Specify a content warning. */
  contentWarning?: Maybe<ContentWarning>;
  encryptedWith?: Maybe<EncryptionStrategy>;
  id: Scalars['MetadataId']['output'];
  locale: Scalars['Locale']['output'];
  /** The main focus of the post. */
  mainContentFocus: MainContentFocus;
  /** An arbitrary list of tags. */
  tags?: Maybe<Array<Scalars['Tag']['output']>>;
  /** The transaction hash. */
  txHash: Scalars['Encryptable']['output'];
  /** The type of transaction. */
  type: TransactionType;
};

export type TransactionStatusRequest = {
  txHash: Scalars['TxHash']['input'];
};

export type TransactionStatusResult = FailedTransactionStatus | FinishedTransactionStatus | NotIndexedYetStatus | PendingTransactionStatus;

export enum TransactionType {
  Erc_20 = 'ERC_20',
  Erc_721 = 'ERC_721',
  Other = 'OTHER'
}

export type TransactionWillFail = {
  __typename?: 'TransactionWillFail';
  reason: Scalars['String']['output'];
};

export enum TriStateValue {
  No = 'NO',
  Unknown = 'UNKNOWN',
  Yes = 'YES'
}

export type UnassignUsernameFromAccountRequest = {
  namespace?: Scalars['EvmAddress']['input'];
};

export type UnassignUsernameResponse = {
  __typename?: 'UnassignUsernameResponse';
  hash: Scalars['TxHash']['output'];
};

export type UnassignUsernameToAccountResult = SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail | UnassignUsernameResponse;

export type UnblockError = {
  __typename?: 'UnblockError';
  error: UnblockErrorType;
};

export enum UnblockErrorType {
  NotBlocked = 'NOT_BLOCKED',
  Unauthorized = 'UNAUTHORIZED',
  Unknown = 'UNKNOWN'
}

export type UnblockRequest = {
  /** The account to unblock. */
  account: Scalars['EvmAddress']['input'];
};

export type UnblockResponse = {
  __typename?: 'UnblockResponse';
  hash: Scalars['TxHash']['output'];
};

export type UnblockResult = SelfFundedTransactionRequest | SponsoredTransactionRequest | UnblockError | UnblockResponse;

export type UndoReactionFailure = {
  __typename?: 'UndoReactionFailure';
  reason: Scalars['String']['output'];
};

export type UndoReactionRequest = {
  /** The post to react to. */
  post: Scalars['PostId']['input'];
  /** The reaction to add. */
  reaction: PostReactionType;
};

export type UndoReactionResponse = {
  __typename?: 'UndoReactionResponse';
  success: Scalars['Boolean']['output'];
};

export type UndoReactionResult = UndoReactionFailure | UndoReactionResponse;

export type UndoRecommendedAccount = {
  /** The account to remove as a recommendation. */
  account: Scalars['EvmAddress']['input'];
};

export type UnfollowResponse = {
  __typename?: 'UnfollowResponse';
  hash: Scalars['TxHash']['output'];
};

export type UnfollowResult = SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail | UnfollowResponse;

export type UnhideManagedAccountRequest = {
  /** The account to unhide. */
  account: Scalars['EvmAddress']['input'];
};

export type UnhideReplyRequest = {
  post: Scalars['PostId']['input'];
};

export type UnknownAction = {
  __typename?: 'UnknownAction';
  contract: NetworkAddress;
  name: Scalars['String']['output'];
};

export type UnknownActionInput = {
  address: Scalars['EvmAddress']['input'];
  data: Scalars['String']['input'];
};

export type UnknownActionSettings = {
  __typename?: 'UnknownActionSettings';
  collectNft?: Maybe<Scalars['EvmAddress']['output']>;
  contract: NetworkAddress;
  initializeCalldata?: Maybe<Scalars['BlockchainData']['output']>;
  initializeResultData?: Maybe<Scalars['BlockchainData']['output']>;
  verified: Scalars['Boolean']['output'];
};

export type UnknownFeedRuleInput = {
  /** The rule contract address. */
  address: Scalars['EvmAddress']['input'];
  /** The encoded rule execution data. */
  data: Scalars['BlockchainData']['input'];
};

export type UnknownFollowRuleInput = {
  /** The rule contract address. */
  address: Scalars['EvmAddress']['input'];
  /** The encoded rule execution data. */
  data: Scalars['BlockchainData']['input'];
};

export type UnknownGraphRuleInput = {
  /** The rule contract address. */
  address: Scalars['EvmAddress']['input'];
  /** The encoded rule execution data. */
  data: Scalars['BlockchainData']['input'];
};

export type UpdateAccountManagerRequest = {
  /** The address to update as a manager. */
  manager: Scalars['EvmAddress']['input'];
  /** The permissions to update for the account manager. */
  permissions: AccountManagerPermissionsInput;
};

export type UpdateAccountManagerResult = SelfFundedTransactionRequest | SponsoredTransactionRequest | TransactionWillFail;

export type Username = {
  __typename?: 'Username';
  /** A unique identifier for the username entry. */
  id: Scalars['ID']['output'];
  /** The address that the username is linked to, if any. */
  linkedTo?: Maybe<Scalars['EvmAddress']['output']>;
  /** The local name of the username (e.g., bob). */
  localName: Scalars['String']['output'];
  /** The namespace of the username */
  namespace: UsernameNamespace;
  /** The address that owns the username entry. */
  ownedBy: Scalars['EvmAddress']['output'];
  /** The timestamp when the username was created. */
  timestamp: Scalars['DateTime']['output'];
  /** The username value (e.g., lens/bob). */
  value: Scalars['UsernameValue']['output'];
};

export type UsernameInput = {
  /** The local name to create - should not include the namespace */
  localName: Scalars['String']['input'];
  /** The namespace. Defaults to lens namespace */
  namespace?: Scalars['EvmAddress']['input'];
};

export type UsernameNamespace = {
  __typename?: 'UsernameNamespace';
  /** The address of the namespace. */
  address: Scalars['EvmAddress']['output'];
  metadata?: Maybe<UsernameNamespaceMetadata>;
  /** The namespace for example `lens` */
  namespace: Scalars['String']['output'];
};

export type UsernameNamespaceMetadata = {
  __typename?: 'UsernameNamespaceMetadata';
  /** An optional description of the Username collection. */
  description?: Maybe<Scalars['String']['output']>;
  /**
   * A unique identifier that in storages like IPFS ensures the uniqueness of the metadata URI.
   * Use a UUID if unsure.
   */
  id: Scalars['String']['output'];
};

export type UsernameNamespaceRequest = {
  /** The namespace */
  namespace?: InputMaybe<Scalars['EvmAddress']['input']>;
  /** The transaction hash you created the namespace with. */
  txHash?: InputMaybe<Scalars['TxHash']['input']>;
};

/** You must provide either an id or a username, not both. */
export type UsernameRequest = {
  /** The username ID. */
  id?: InputMaybe<Scalars['ID']['input']>;
  /** The username namespace and local name. */
  username?: InputMaybe<UsernameInput>;
};

export type UsernamesRequest = {
  /** The cursor. */
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  /** The account or address to get owned usernames for. */
  owner: Scalars['EvmAddress']['input'];
  /** The page size. */
  pageSize?: PageSize;
};

export type VideoMetadata = {
  __typename?: 'VideoMetadata';
  /** The other attachments you want to include with it. */
  attachments: Array<AnyMedia>;
  /**
   * A bag of attributes that can be used to store any kind of metadata that is not currently
   * supported by the standard. Over time, common attributes will be added to the standard and
   * their usage as arbitrary attributes will be discouraged.
   */
  attributes: Array<MetadataAttribute>;
  content: Scalars['Encryptable']['output'];
  /** Specify a content warning. */
  contentWarning?: Maybe<ContentWarning>;
  encryptedWith?: Maybe<EncryptionStrategy>;
  id: Scalars['MetadataId']['output'];
  locale: Scalars['Locale']['output'];
  /** The main focus of the post. */
  mainContentFocus: MainContentFocus;
  /** An arbitrary list of tags. */
  tags?: Maybe<Array<Scalars['Tag']['output']>>;
  /** The optional video title. */
  title?: Maybe<Scalars['String']['output']>;
  video: MediaVideo;
};

export type WhoActedOnPostFilter = {
  anyOf: Array<ActionFilter>;
};

export enum WhoActedOnPostOrderBy {
  AccountScore = 'ACCOUNT_SCORE',
  FirstActioned = 'FIRST_ACTIONED',
  LastActioned = 'LAST_ACTIONED'
}

export type WhoActedOnPostRequest = {
  /** The cursor. */
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<WhoActedOnPostFilter>;
  orderBy?: InputMaybe<WhoActedOnPostOrderBy>;
  /** The page size. */
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  /** The post id to get who acted on. */
  post: Scalars['PostId']['input'];
};

export enum WhoReferencedPostOrderBy {
  AccountScore = 'ACCOUNT_SCORE',
  MostRecent = 'MOST_RECENT',
  Oldest = 'OLDEST'
}

export type WhoReferencedPostRequest = {
  /** The cursor. */
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  orderBy?: WhoReferencedPostOrderBy;
  /** The page size. */
  pageSize?: PageSize;
  /** The post id to get who referenced. */
  post: Scalars['PostId']['input'];
  /** The types of references to get. */
  referenceTypes: Array<PostReferenceType>;
};

/** The signature was not signed by the expected signer. */
export type WrongSignerError = {
  __typename?: 'WrongSignerError';
  reason: Scalars['String']['output'];
};

export type _Service = {
  __typename?: '_Service';
  sdl?: Maybe<Scalars['String']['output']>;
};

export type AccountFieldsFragment = { __typename?: 'Account', address: any, score: number, metadata?: { __typename?: 'AccountMetadata', bio?: string | null, coverPicture?: any | null, id: string, name?: string | null, picture?: any | null, attributes: Array<{ __typename?: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string }> } | null, username?: (
    { __typename?: 'Username' }
    & UsernameFieldsFragment
  ) | null, operations?: { __typename?: 'LoggedInAccountOperations', id: string, isFollowedByMe: boolean, isFollowingMe: boolean, canFollow: TriStateValue, canUnfollow: boolean, isMutedByMe: boolean, isBlockedByMe: boolean, hasBlockedMe: boolean, canBlock: boolean, canUnblock: boolean, hasReported: boolean } | null };

export type AppFieldsFragment = { __typename?: 'App', metadata?: { __typename?: 'AppMetadata', name: string, logo?: any | null } | null };

export type PostFieldsFragment = { __typename?: 'Post', id: any, isDeleted: boolean, isEdited: boolean, timestamp: any, stats: (
    { __typename?: 'PostStats' }
    & PostStatsFieldsFragment
  ), author: (
    { __typename?: 'Account' }
    & AccountFieldsFragment
  ), metadata: (
    { __typename?: 'ArticleMetadata' }
    & PostMetadataFields_ArticleMetadata_Fragment
  ) | (
    { __typename?: 'AudioMetadata' }
    & PostMetadataFields_AudioMetadata_Fragment
  ) | (
    { __typename?: 'CheckingInMetadata' }
    & PostMetadataFields_CheckingInMetadata_Fragment
  ) | (
    { __typename?: 'EmbedMetadata' }
    & PostMetadataFields_EmbedMetadata_Fragment
  ) | (
    { __typename?: 'EventMetadata' }
    & PostMetadataFields_EventMetadata_Fragment
  ) | (
    { __typename?: 'ImageMetadata' }
    & PostMetadataFields_ImageMetadata_Fragment
  ) | (
    { __typename?: 'LinkMetadata' }
    & PostMetadataFields_LinkMetadata_Fragment
  ) | (
    { __typename?: 'LivestreamMetadata' }
    & PostMetadataFields_LivestreamMetadata_Fragment
  ) | (
    { __typename?: 'MintMetadata' }
    & PostMetadataFields_MintMetadata_Fragment
  ) | (
    { __typename?: 'SpaceMetadata' }
    & PostMetadataFields_SpaceMetadata_Fragment
  ) | (
    { __typename?: 'StoryMetadata' }
    & PostMetadataFields_StoryMetadata_Fragment
  ) | (
    { __typename?: 'TextOnlyMetadata' }
    & PostMetadataFields_TextOnlyMetadata_Fragment
  ) | (
    { __typename?: 'ThreeDMetadata' }
    & PostMetadataFields_ThreeDMetadata_Fragment
  ) | (
    { __typename?: 'TransactionMetadata' }
    & PostMetadataFields_TransactionMetadata_Fragment
  ) | (
    { __typename?: 'VideoMetadata' }
    & PostMetadataFields_VideoMetadata_Fragment
  ) };

type PostMetadataFields_ArticleMetadata_Fragment = (
  { __typename?: 'ArticleMetadata' }
  & ArticleMetadataFieldsFragment
);

type PostMetadataFields_AudioMetadata_Fragment = (
  { __typename?: 'AudioMetadata' }
  & AudioMetadataFieldsFragment
);

type PostMetadataFields_CheckingInMetadata_Fragment = (
  { __typename?: 'CheckingInMetadata' }
  & CheckingInMetadataFieldsFragment
);

type PostMetadataFields_EmbedMetadata_Fragment = { __typename?: 'EmbedMetadata' };

type PostMetadataFields_EventMetadata_Fragment = { __typename?: 'EventMetadata' };

type PostMetadataFields_ImageMetadata_Fragment = (
  { __typename?: 'ImageMetadata' }
  & ImageMetadataFieldsFragment
);

type PostMetadataFields_LinkMetadata_Fragment = (
  { __typename?: 'LinkMetadata' }
  & LinkMetadataFieldsFragment
);

type PostMetadataFields_LivestreamMetadata_Fragment = (
  { __typename?: 'LivestreamMetadata' }
  & LivestreamMetadataFieldsFragment
);

type PostMetadataFields_MintMetadata_Fragment = (
  { __typename?: 'MintMetadata' }
  & MintMetadataFieldsFragment
);

type PostMetadataFields_SpaceMetadata_Fragment = { __typename?: 'SpaceMetadata' };

type PostMetadataFields_StoryMetadata_Fragment = { __typename?: 'StoryMetadata' };

type PostMetadataFields_TextOnlyMetadata_Fragment = (
  { __typename?: 'TextOnlyMetadata' }
  & TextOnlyMetadataFieldsFragment
);

type PostMetadataFields_ThreeDMetadata_Fragment = { __typename?: 'ThreeDMetadata' };

type PostMetadataFields_TransactionMetadata_Fragment = { __typename?: 'TransactionMetadata' };

type PostMetadataFields_VideoMetadata_Fragment = (
  { __typename?: 'VideoMetadata' }
  & VideoMetadataFieldsFragment
);

export type PostMetadataFieldsFragment = PostMetadataFields_ArticleMetadata_Fragment | PostMetadataFields_AudioMetadata_Fragment | PostMetadataFields_CheckingInMetadata_Fragment | PostMetadataFields_EmbedMetadata_Fragment | PostMetadataFields_EventMetadata_Fragment | PostMetadataFields_ImageMetadata_Fragment | PostMetadataFields_LinkMetadata_Fragment | PostMetadataFields_LivestreamMetadata_Fragment | PostMetadataFields_MintMetadata_Fragment | PostMetadataFields_SpaceMetadata_Fragment | PostMetadataFields_StoryMetadata_Fragment | PostMetadataFields_TextOnlyMetadata_Fragment | PostMetadataFields_ThreeDMetadata_Fragment | PostMetadataFields_TransactionMetadata_Fragment | PostMetadataFields_VideoMetadata_Fragment;

export type PostStatsFieldsFragment = { __typename?: 'PostStats', bookmarks: number, collects: number, comments: number, quotes: number, reactions: number, reposts: number };

export type UsernameFieldsFragment = { __typename?: 'Username', localName: string, linkedTo?: any | null, ownedBy: any };

export type ArticleMetadataFieldsFragment = { __typename?: 'ArticleMetadata', id: any, content: any, tags?: Array<any> | null, attributes: Array<(
    { __typename?: 'MetadataAttribute' }
    & MetadataAttributeFieldsFragment
  )>, attachments: Array<(
    { __typename?: 'MediaAudio' }
    & MediaFields_MediaAudio_Fragment
  ) | (
    { __typename?: 'MediaImage' }
    & MediaFields_MediaImage_Fragment
  ) | (
    { __typename?: 'MediaVideo' }
    & MediaFields_MediaVideo_Fragment
  )> };

export type AudioMetadataFieldsFragment = { __typename?: 'AudioMetadata', id: any, title?: string | null, content: any, tags?: Array<any> | null, attributes: Array<(
    { __typename?: 'MetadataAttribute' }
    & MetadataAttributeFieldsFragment
  )>, audio: (
    { __typename?: 'MediaAudio' }
    & MediaAudioFieldsFragment
  ), attachments: Array<(
    { __typename?: 'MediaAudio' }
    & MediaFields_MediaAudio_Fragment
  ) | (
    { __typename?: 'MediaImage' }
    & MediaFields_MediaImage_Fragment
  ) | (
    { __typename?: 'MediaVideo' }
    & MediaFields_MediaVideo_Fragment
  )> };

export type CheckingInMetadataFieldsFragment = { __typename?: 'CheckingInMetadata', id: any, content: any, tags?: Array<any> | null, location: any, position?: any | null, address?: { __typename?: 'PhysicalAddress', country: any, locality: any, postalCode?: any | null } | null, attributes: Array<(
    { __typename?: 'MetadataAttribute' }
    & MetadataAttributeFieldsFragment
  )>, attachments: Array<(
    { __typename?: 'MediaAudio' }
    & MediaFields_MediaAudio_Fragment
  ) | (
    { __typename?: 'MediaImage' }
    & MediaFields_MediaImage_Fragment
  ) | (
    { __typename?: 'MediaVideo' }
    & MediaFields_MediaVideo_Fragment
  )> };

export type ImageMetadataFieldsFragment = { __typename?: 'ImageMetadata', id: any, content: any, tags?: Array<any> | null, attributes: Array<(
    { __typename?: 'MetadataAttribute' }
    & MetadataAttributeFieldsFragment
  )>, attachments: Array<(
    { __typename?: 'MediaAudio' }
    & MediaFields_MediaAudio_Fragment
  ) | (
    { __typename?: 'MediaImage' }
    & MediaFields_MediaImage_Fragment
  ) | (
    { __typename?: 'MediaVideo' }
    & MediaFields_MediaVideo_Fragment
  )>, image: (
    { __typename?: 'MediaImage' }
    & MediaImageFieldsFragment
  ) };

export type LinkMetadataFieldsFragment = { __typename?: 'LinkMetadata', id: any, content: any, sharingLink: any, tags?: Array<any> | null, attributes: Array<(
    { __typename?: 'MetadataAttribute' }
    & MetadataAttributeFieldsFragment
  )>, attachments: Array<(
    { __typename?: 'MediaAudio' }
    & MediaFields_MediaAudio_Fragment
  ) | (
    { __typename?: 'MediaImage' }
    & MediaFields_MediaImage_Fragment
  ) | (
    { __typename?: 'MediaVideo' }
    & MediaFields_MediaVideo_Fragment
  )> };

export type LivestreamMetadataFieldsFragment = { __typename?: 'LivestreamMetadata', id: any, playbackUrl: any, liveUrl: any, content: any, tags?: Array<any> | null, attributes: Array<(
    { __typename?: 'MetadataAttribute' }
    & MetadataAttributeFieldsFragment
  )>, attachments: Array<(
    { __typename?: 'MediaAudio' }
    & MediaFields_MediaAudio_Fragment
  ) | (
    { __typename?: 'MediaImage' }
    & MediaFields_MediaImage_Fragment
  ) | (
    { __typename?: 'MediaVideo' }
    & MediaFields_MediaVideo_Fragment
  )> };

export type MetadataAttributeFieldsFragment = { __typename?: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string };

export type MintMetadataFieldsFragment = { __typename?: 'MintMetadata', id: any, content: any, tags?: Array<any> | null, attributes: Array<(
    { __typename?: 'MetadataAttribute' }
    & MetadataAttributeFieldsFragment
  )>, attachments: Array<(
    { __typename?: 'MediaAudio' }
    & MediaFields_MediaAudio_Fragment
  ) | (
    { __typename?: 'MediaImage' }
    & MediaFields_MediaImage_Fragment
  ) | (
    { __typename?: 'MediaVideo' }
    & MediaFields_MediaVideo_Fragment
  )> };

export type TextOnlyMetadataFieldsFragment = { __typename?: 'TextOnlyMetadata', id: any, content: any, tags?: Array<any> | null, attributes: Array<(
    { __typename?: 'MetadataAttribute' }
    & MetadataAttributeFieldsFragment
  )> };

export type VideoMetadataFieldsFragment = { __typename?: 'VideoMetadata', id: any, content: any, tags?: Array<any> | null, attributes: Array<(
    { __typename?: 'MetadataAttribute' }
    & MetadataAttributeFieldsFragment
  )>, video: (
    { __typename?: 'MediaVideo' }
    & MediaVideoFieldsFragment
  ), attachments: Array<(
    { __typename?: 'MediaAudio' }
    & MediaFields_MediaAudio_Fragment
  ) | (
    { __typename?: 'MediaImage' }
    & MediaFields_MediaImage_Fragment
  ) | (
    { __typename?: 'MediaVideo' }
    & MediaFields_MediaVideo_Fragment
  )> };

export type MediaAudioFieldsFragment = { __typename?: 'MediaAudio', artist?: any | null, item: any, cover?: any | null, license?: MetadataLicenseType | null };

type MediaFields_MediaAudio_Fragment = (
  { __typename?: 'MediaAudio' }
  & MediaAudioFieldsFragment
);

type MediaFields_MediaImage_Fragment = (
  { __typename?: 'MediaImage' }
  & MediaImageFieldsFragment
);

type MediaFields_MediaVideo_Fragment = (
  { __typename?: 'MediaVideo' }
  & MediaVideoFieldsFragment
);

export type MediaFieldsFragment = MediaFields_MediaAudio_Fragment | MediaFields_MediaImage_Fragment | MediaFields_MediaVideo_Fragment;

export type MediaImageFieldsFragment = { __typename?: 'MediaImage', item: any };

export type MediaVideoFieldsFragment = { __typename?: 'MediaVideo', item: any, cover?: any | null, license?: MetadataLicenseType | null };

export type AauthenticateMutationVariables = Exact<{
  request: SignedAuthChallenge;
}>;


export type AauthenticateMutation = { __typename?: 'Mutation', authenticate: { __typename?: 'AuthenticationTokens', accessToken: any, refreshToken: any, idToken: any } | { __typename?: 'ExpiredChallengeError' } | { __typename?: 'ForbiddenError' } | { __typename?: 'WrongSignerError' } };

export type AccountQueryVariables = Exact<{
  request: AccountRequest;
}>;


export type AccountQuery = { __typename?: 'Query', account?: (
    { __typename?: 'Account' }
    & AccountFieldsFragment
  ) | null };

export type AccountManagersQueryVariables = Exact<{
  request: AccountManagersRequest;
}>;


export type AccountManagersQuery = { __typename?: 'Query', accountManagers: { __typename?: 'PaginatedAccountManagersResult', items: Array<{ __typename?: 'AccountManager', manager: any, isLensManager: boolean, addedAt: any, permissions: { __typename?: 'AccountManagerPermissions', canExecuteTransactions: boolean, canTransferTokens: boolean, canTransferNative: boolean, canSetMetadataUri: boolean } }>, pageInfo: { __typename?: 'PaginatedResultInfo', next?: any | null } } };

export type AccountStatsQueryVariables = Exact<{
  request: AccountStatsRequest;
}>;


export type AccountStatsQuery = { __typename?: 'Query', accountStats: { __typename?: 'AccountStats', feedStats: { __typename?: 'AccountFeedsStats', posts: number, comments: number, reposts: number, quotes: number, reacted: number, reactions: number, collects: number }, graphFollowStats: { __typename?: 'AccountGraphsFollowStats', followers: number, following: number } } };

export type AccountsQueryVariables = Exact<{
  request: AccountsRequest;
}>;


export type AccountsQuery = { __typename?: 'Query', accounts: Array<(
    { __typename?: 'Account' }
    & AccountFieldsFragment
  )> };

export type AccountsBlockedQueryVariables = Exact<{
  request: AccountsBlockedRequest;
}>;


export type AccountsBlockedQuery = { __typename?: 'Query', accountsBlocked: { __typename?: 'PaginatedAccountsBlockedResult', items: Array<{ __typename?: 'AccountBlocked', blockedAt: any, account: (
        { __typename?: 'Account' }
        & AccountFieldsFragment
      ) }>, pageInfo: { __typename?: 'PaginatedResultInfo', next?: any | null } } };

export type AuthenticatedSessionsQueryVariables = Exact<{
  request: AuthenticatedSessionsRequest;
}>;


export type AuthenticatedSessionsQuery = { __typename?: 'Query', authenticatedSessions: { __typename?: 'PaginatedActiveAuthenticationsResult', items: Array<{ __typename?: 'AuthenticatedSession', authenticationId: any, app: any, browser?: string | null, device?: string | null, os?: string | null, origin?: any | null, signer: any, createdAt: any, updatedAt: any }>, pageInfo: { __typename?: 'PaginatedResultInfo', next?: any | null } } };

export type FeedQueryVariables = Exact<{
  request: FeedRequest;
}>;


export type FeedQuery = { __typename?: 'Query', feed?: { __typename?: 'Feed', address: any } | null };

export type FollowersQueryVariables = Exact<{
  request: FollowersRequest;
}>;


export type FollowersQuery = { __typename?: 'Query', followers: { __typename?: 'PaginatedFollowersResult', items: Array<{ __typename?: 'Follower', follower: (
        { __typename?: 'Account' }
        & AccountFieldsFragment
      ) }>, pageInfo: { __typename?: 'PaginatedResultInfo', next?: any | null } } };

export type FollowersYouKnowQueryVariables = Exact<{
  request: FollowersYouKnowRequest;
}>;


export type FollowersYouKnowQuery = { __typename?: 'Query', followersYouKnow: { __typename?: 'PaginatedFollowersResult', items: Array<{ __typename?: 'Follower', follower: (
        { __typename?: 'Account' }
        & AccountFieldsFragment
      ) }>, pageInfo: { __typename?: 'PaginatedResultInfo', next?: any | null } } };

export type FollowingQueryVariables = Exact<{
  request: FollowingRequest;
}>;


export type FollowingQuery = { __typename?: 'Query', following: { __typename?: 'PaginatedFollowingResult', items: Array<{ __typename?: 'Following', following: (
        { __typename?: 'Account' }
        & AccountFieldsFragment
      ) }>, pageInfo: { __typename?: 'PaginatedResultInfo', next?: any | null } } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'MeResult', isSignless: boolean, isSponsored: boolean, appLoggedIn: any, account: { __typename?: 'AccountManaged', account: (
        { __typename?: 'Account' }
        & AccountFieldsFragment
      ) } | { __typename?: 'AccountOwned', account: (
        { __typename?: 'Account' }
        & AccountFieldsFragment
      ) }, limit: { __typename?: 'SponsorshipAllowance', window: SponsorLimitType, allowanceLeft: number, allowanceUsed: number, allowance: number } } };

export const AppFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AppFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"App"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"logo"}}]}}]}}]} as unknown as DocumentNode;
export const PostStatsFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostStatsFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostStats"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bookmarks"}},{"kind":"Field","name":{"kind":"Name","value":"collects"}},{"kind":"Field","name":{"kind":"Name","value":"comments"}},{"kind":"Field","name":{"kind":"Name","value":"quotes"}},{"kind":"Field","name":{"kind":"Name","value":"reactions"}},{"kind":"Field","name":{"kind":"Name","value":"reposts"}}]}}]} as unknown as DocumentNode;
export const UsernameFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UsernameFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Username"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"localName"}},{"kind":"Field","name":{"kind":"Name","value":"linkedTo"}},{"kind":"Field","name":{"kind":"Name","value":"ownedBy"}}]}}]} as unknown as DocumentNode;
export const AccountFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccountFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Account"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"coverPicture"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}}]}},{"kind":"Field","name":{"kind":"Name","value":"username"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UsernameFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"operations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isFollowedByMe"}},{"kind":"Field","name":{"kind":"Name","value":"isFollowingMe"}},{"kind":"Field","name":{"kind":"Name","value":"canFollow"}},{"kind":"Field","name":{"kind":"Name","value":"canUnfollow"}},{"kind":"Field","name":{"kind":"Name","value":"isMutedByMe"}},{"kind":"Field","name":{"kind":"Name","value":"isBlockedByMe"}},{"kind":"Field","name":{"kind":"Name","value":"hasBlockedMe"}},{"kind":"Field","name":{"kind":"Name","value":"canBlock"}},{"kind":"Field","name":{"kind":"Name","value":"canUnblock"}},{"kind":"Field","name":{"kind":"Name","value":"hasReported"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UsernameFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Username"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"localName"}},{"kind":"Field","name":{"kind":"Name","value":"linkedTo"}},{"kind":"Field","name":{"kind":"Name","value":"ownedBy"}}]}}]} as unknown as DocumentNode;
export const MetadataAttributeFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MetadataAttributeFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MetadataAttribute"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]} as unknown as DocumentNode;
export const MediaVideoFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaVideoFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaVideo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"item"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"license"}}]}}]} as unknown as DocumentNode;
export const MediaImageFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaImageFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"item"}}]}}]} as unknown as DocumentNode;
export const MediaAudioFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaAudioFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaAudio"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"artist"}},{"kind":"Field","name":{"kind":"Name","value":"item"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"license"}}]}}]} as unknown as DocumentNode;
export const MediaFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AnyMedia"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaVideo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaVideoFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaImageFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaAudio"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaAudioFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaAudioFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaAudio"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"artist"}},{"kind":"Field","name":{"kind":"Name","value":"item"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"license"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaImageFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"item"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaVideoFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaVideo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"item"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"license"}}]}}]} as unknown as DocumentNode;
export const VideoMetadataFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VideoMetadataFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MetadataAttributeFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaVideoFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MetadataAttributeFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MetadataAttribute"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaAudioFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaAudio"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"artist"}},{"kind":"Field","name":{"kind":"Name","value":"item"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"license"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AnyMedia"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaVideo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaVideoFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaImageFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaAudio"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaAudioFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaImageFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"item"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaVideoFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaVideo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"item"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"license"}}]}}]} as unknown as DocumentNode;
export const ArticleMetadataFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArticleMetadataFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ArticleMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MetadataAttributeFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MetadataAttributeFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MetadataAttribute"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaAudioFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaAudio"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"artist"}},{"kind":"Field","name":{"kind":"Name","value":"item"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"license"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AnyMedia"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaVideo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaVideoFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaImageFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaAudio"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaAudioFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaImageFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"item"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaVideoFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaVideo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"item"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"license"}}]}}]} as unknown as DocumentNode;
export const AudioMetadataFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AudioMetadataFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AudioMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MetadataAttributeFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"audio"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaAudioFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MetadataAttributeFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MetadataAttribute"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaAudioFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaAudio"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"artist"}},{"kind":"Field","name":{"kind":"Name","value":"item"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"license"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AnyMedia"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaVideo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaVideoFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaImageFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaAudio"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaAudioFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaImageFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"item"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaVideoFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaVideo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"item"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"license"}}]}}]} as unknown as DocumentNode;
export const ImageMetadataFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageMetadataFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MetadataAttributeFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaImageFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MetadataAttributeFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MetadataAttribute"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaAudioFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaAudio"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"artist"}},{"kind":"Field","name":{"kind":"Name","value":"item"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"license"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AnyMedia"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaVideo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaVideoFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaImageFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaAudio"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaAudioFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaImageFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"item"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaVideoFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaVideo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"item"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"license"}}]}}]} as unknown as DocumentNode;
export const LinkMetadataFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkMetadataFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LinkMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"sharingLink"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MetadataAttributeFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MetadataAttributeFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MetadataAttribute"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaAudioFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaAudio"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"artist"}},{"kind":"Field","name":{"kind":"Name","value":"item"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"license"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AnyMedia"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaVideo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaVideoFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaImageFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaAudio"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaAudioFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaImageFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"item"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaVideoFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaVideo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"item"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"license"}}]}}]} as unknown as DocumentNode;
export const LivestreamMetadataFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LivestreamMetadataFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LivestreamMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"playbackUrl"}},{"kind":"Field","name":{"kind":"Name","value":"liveUrl"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MetadataAttributeFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MetadataAttributeFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MetadataAttribute"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaAudioFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaAudio"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"artist"}},{"kind":"Field","name":{"kind":"Name","value":"item"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"license"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AnyMedia"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaVideo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaVideoFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaImageFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaAudio"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaAudioFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaImageFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"item"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaVideoFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaVideo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"item"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"license"}}]}}]} as unknown as DocumentNode;
export const MintMetadataFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MintMetadataFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MintMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MetadataAttributeFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MetadataAttributeFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MetadataAttribute"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaAudioFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaAudio"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"artist"}},{"kind":"Field","name":{"kind":"Name","value":"item"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"license"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AnyMedia"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaVideo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaVideoFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaImageFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaAudio"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaAudioFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaImageFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"item"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaVideoFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaVideo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"item"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"license"}}]}}]} as unknown as DocumentNode;
export const TextOnlyMetadataFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TextOnlyMetadataFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextOnlyMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MetadataAttributeFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MetadataAttributeFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MetadataAttribute"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]} as unknown as DocumentNode;
export const CheckingInMetadataFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CheckingInMetadataFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CheckingInMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"address"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"locality"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MetadataAttributeFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MetadataAttributeFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MetadataAttribute"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaAudioFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaAudio"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"artist"}},{"kind":"Field","name":{"kind":"Name","value":"item"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"license"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AnyMedia"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaVideo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaVideoFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaImageFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaAudio"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaAudioFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaImageFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"item"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaVideoFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaVideo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"item"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"license"}}]}}]} as unknown as DocumentNode;
export const PostMetadataFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostMetadataFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"VideoMetadataFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ArticleMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArticleMetadataFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AudioMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AudioMetadataFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageMetadataFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LinkMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkMetadataFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LivestreamMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LivestreamMetadataFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MintMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MintMetadataFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextOnlyMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOnlyMetadataFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CheckingInMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CheckingInMetadataFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArticleMetadataFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ArticleMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MetadataAttributeFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AudioMetadataFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AudioMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MetadataAttributeFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"audio"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaAudioFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CheckingInMetadataFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CheckingInMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"address"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"locality"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MetadataAttributeFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageMetadataFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MetadataAttributeFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaImageFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkMetadataFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LinkMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"sharingLink"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MetadataAttributeFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LivestreamMetadataFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LivestreamMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"playbackUrl"}},{"kind":"Field","name":{"kind":"Name","value":"liveUrl"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MetadataAttributeFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MetadataAttributeFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MetadataAttribute"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MintMetadataFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MintMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MetadataAttributeFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TextOnlyMetadataFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextOnlyMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MetadataAttributeFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VideoMetadataFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MetadataAttributeFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaVideoFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaAudioFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaAudio"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"artist"}},{"kind":"Field","name":{"kind":"Name","value":"item"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"license"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AnyMedia"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaVideo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaVideoFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaImageFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaAudio"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaAudioFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaImageFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"item"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaVideoFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaVideo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"item"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"license"}}]}}]} as unknown as DocumentNode;
export const PostFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isDeleted"}},{"kind":"Field","name":{"kind":"Name","value":"isEdited"}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostStatsFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccountFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostMetadataFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccountFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Account"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"coverPicture"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}}]}},{"kind":"Field","name":{"kind":"Name","value":"username"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UsernameFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"operations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isFollowedByMe"}},{"kind":"Field","name":{"kind":"Name","value":"isFollowingMe"}},{"kind":"Field","name":{"kind":"Name","value":"canFollow"}},{"kind":"Field","name":{"kind":"Name","value":"canUnfollow"}},{"kind":"Field","name":{"kind":"Name","value":"isMutedByMe"}},{"kind":"Field","name":{"kind":"Name","value":"isBlockedByMe"}},{"kind":"Field","name":{"kind":"Name","value":"hasBlockedMe"}},{"kind":"Field","name":{"kind":"Name","value":"canBlock"}},{"kind":"Field","name":{"kind":"Name","value":"canUnblock"}},{"kind":"Field","name":{"kind":"Name","value":"hasReported"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostMetadataFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"VideoMetadataFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ArticleMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArticleMetadataFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AudioMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AudioMetadataFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageMetadataFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LinkMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkMetadataFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LivestreamMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LivestreamMetadataFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MintMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MintMetadataFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextOnlyMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOnlyMetadataFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CheckingInMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CheckingInMetadataFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostStatsFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostStats"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bookmarks"}},{"kind":"Field","name":{"kind":"Name","value":"collects"}},{"kind":"Field","name":{"kind":"Name","value":"comments"}},{"kind":"Field","name":{"kind":"Name","value":"quotes"}},{"kind":"Field","name":{"kind":"Name","value":"reactions"}},{"kind":"Field","name":{"kind":"Name","value":"reposts"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UsernameFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Username"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"localName"}},{"kind":"Field","name":{"kind":"Name","value":"linkedTo"}},{"kind":"Field","name":{"kind":"Name","value":"ownedBy"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArticleMetadataFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ArticleMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MetadataAttributeFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AudioMetadataFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AudioMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MetadataAttributeFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"audio"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaAudioFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CheckingInMetadataFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CheckingInMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"address"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"locality"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MetadataAttributeFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageMetadataFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MetadataAttributeFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaImageFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkMetadataFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LinkMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"sharingLink"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MetadataAttributeFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LivestreamMetadataFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LivestreamMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"playbackUrl"}},{"kind":"Field","name":{"kind":"Name","value":"liveUrl"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MetadataAttributeFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MetadataAttributeFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MetadataAttribute"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MintMetadataFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MintMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MetadataAttributeFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TextOnlyMetadataFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextOnlyMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MetadataAttributeFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VideoMetadataFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MetadataAttributeFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaVideoFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaAudioFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaAudio"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"artist"}},{"kind":"Field","name":{"kind":"Name","value":"item"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"license"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AnyMedia"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaVideo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaVideoFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaImageFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaAudio"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaAudioFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaImageFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"item"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaVideoFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaVideo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"item"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"license"}}]}}]} as unknown as DocumentNode;
export const AauthenticateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Aauthenticate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignedAuthChallenge"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authenticate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AuthenticationTokens"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}},{"kind":"Field","name":{"kind":"Name","value":"idToken"}}]}}]}}]}}]} as unknown as DocumentNode;
export type AauthenticateMutationFn = Apollo.MutationFunction<AauthenticateMutation, AauthenticateMutationVariables>;

/**
 * __useAauthenticateMutation__
 *
 * To run a mutation, you first call `useAauthenticateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAauthenticateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [aauthenticateMutation, { data, loading, error }] = useAauthenticateMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useAauthenticateMutation(baseOptions?: Apollo.MutationHookOptions<AauthenticateMutation, AauthenticateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AauthenticateMutation, AauthenticateMutationVariables>(AauthenticateDocument, options);
      }
export type AauthenticateMutationHookResult = ReturnType<typeof useAauthenticateMutation>;
export type AauthenticateMutationResult = Apollo.MutationResult<AauthenticateMutation>;
export type AauthenticateMutationOptions = Apollo.BaseMutationOptions<AauthenticateMutation, AauthenticateMutationVariables>;
export const AccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Account"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AccountRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"account"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccountFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccountFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Account"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"coverPicture"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}}]}},{"kind":"Field","name":{"kind":"Name","value":"username"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UsernameFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"operations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isFollowedByMe"}},{"kind":"Field","name":{"kind":"Name","value":"isFollowingMe"}},{"kind":"Field","name":{"kind":"Name","value":"canFollow"}},{"kind":"Field","name":{"kind":"Name","value":"canUnfollow"}},{"kind":"Field","name":{"kind":"Name","value":"isMutedByMe"}},{"kind":"Field","name":{"kind":"Name","value":"isBlockedByMe"}},{"kind":"Field","name":{"kind":"Name","value":"hasBlockedMe"}},{"kind":"Field","name":{"kind":"Name","value":"canBlock"}},{"kind":"Field","name":{"kind":"Name","value":"canUnblock"}},{"kind":"Field","name":{"kind":"Name","value":"hasReported"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UsernameFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Username"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"localName"}},{"kind":"Field","name":{"kind":"Name","value":"linkedTo"}},{"kind":"Field","name":{"kind":"Name","value":"ownedBy"}}]}}]} as unknown as DocumentNode;

/**
 * __useAccountQuery__
 *
 * To run a query within a React component, call `useAccountQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccountQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useAccountQuery(baseOptions: Apollo.QueryHookOptions<AccountQuery, AccountQueryVariables> & ({ variables: AccountQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AccountQuery, AccountQueryVariables>(AccountDocument, options);
      }
export function useAccountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AccountQuery, AccountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AccountQuery, AccountQueryVariables>(AccountDocument, options);
        }
export function useAccountSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AccountQuery, AccountQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AccountQuery, AccountQueryVariables>(AccountDocument, options);
        }
export type AccountQueryHookResult = ReturnType<typeof useAccountQuery>;
export type AccountLazyQueryHookResult = ReturnType<typeof useAccountLazyQuery>;
export type AccountSuspenseQueryHookResult = ReturnType<typeof useAccountSuspenseQuery>;
export type AccountQueryResult = Apollo.QueryResult<AccountQuery, AccountQueryVariables>;
export const AccountManagersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AccountManagers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AccountManagersRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accountManagers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"manager"}},{"kind":"Field","name":{"kind":"Name","value":"isLensManager"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"canExecuteTransactions"}},{"kind":"Field","name":{"kind":"Name","value":"canTransferTokens"}},{"kind":"Field","name":{"kind":"Name","value":"canTransferNative"}},{"kind":"Field","name":{"kind":"Name","value":"canSetMetadataUri"}}]}},{"kind":"Field","name":{"kind":"Name","value":"addedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"next"}}]}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useAccountManagersQuery__
 *
 * To run a query within a React component, call `useAccountManagersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccountManagersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccountManagersQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useAccountManagersQuery(baseOptions: Apollo.QueryHookOptions<AccountManagersQuery, AccountManagersQueryVariables> & ({ variables: AccountManagersQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AccountManagersQuery, AccountManagersQueryVariables>(AccountManagersDocument, options);
      }
export function useAccountManagersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AccountManagersQuery, AccountManagersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AccountManagersQuery, AccountManagersQueryVariables>(AccountManagersDocument, options);
        }
export function useAccountManagersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AccountManagersQuery, AccountManagersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AccountManagersQuery, AccountManagersQueryVariables>(AccountManagersDocument, options);
        }
export type AccountManagersQueryHookResult = ReturnType<typeof useAccountManagersQuery>;
export type AccountManagersLazyQueryHookResult = ReturnType<typeof useAccountManagersLazyQuery>;
export type AccountManagersSuspenseQueryHookResult = ReturnType<typeof useAccountManagersSuspenseQuery>;
export type AccountManagersQueryResult = Apollo.QueryResult<AccountManagersQuery, AccountManagersQueryVariables>;
export const AccountStatsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AccountStats"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AccountStatsRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accountStats"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"feedStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"posts"}},{"kind":"Field","name":{"kind":"Name","value":"comments"}},{"kind":"Field","name":{"kind":"Name","value":"reposts"}},{"kind":"Field","name":{"kind":"Name","value":"quotes"}},{"kind":"Field","name":{"kind":"Name","value":"reacted"}},{"kind":"Field","name":{"kind":"Name","value":"reactions"}},{"kind":"Field","name":{"kind":"Name","value":"collects"}}]}},{"kind":"Field","name":{"kind":"Name","value":"graphFollowStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"followers"}},{"kind":"Field","name":{"kind":"Name","value":"following"}}]}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useAccountStatsQuery__
 *
 * To run a query within a React component, call `useAccountStatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccountStatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccountStatsQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useAccountStatsQuery(baseOptions: Apollo.QueryHookOptions<AccountStatsQuery, AccountStatsQueryVariables> & ({ variables: AccountStatsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AccountStatsQuery, AccountStatsQueryVariables>(AccountStatsDocument, options);
      }
export function useAccountStatsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AccountStatsQuery, AccountStatsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AccountStatsQuery, AccountStatsQueryVariables>(AccountStatsDocument, options);
        }
export function useAccountStatsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AccountStatsQuery, AccountStatsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AccountStatsQuery, AccountStatsQueryVariables>(AccountStatsDocument, options);
        }
export type AccountStatsQueryHookResult = ReturnType<typeof useAccountStatsQuery>;
export type AccountStatsLazyQueryHookResult = ReturnType<typeof useAccountStatsLazyQuery>;
export type AccountStatsSuspenseQueryHookResult = ReturnType<typeof useAccountStatsSuspenseQuery>;
export type AccountStatsQueryResult = Apollo.QueryResult<AccountStatsQuery, AccountStatsQueryVariables>;
export const AccountsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Accounts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AccountsRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accounts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccountFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccountFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Account"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"coverPicture"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}}]}},{"kind":"Field","name":{"kind":"Name","value":"username"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UsernameFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"operations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isFollowedByMe"}},{"kind":"Field","name":{"kind":"Name","value":"isFollowingMe"}},{"kind":"Field","name":{"kind":"Name","value":"canFollow"}},{"kind":"Field","name":{"kind":"Name","value":"canUnfollow"}},{"kind":"Field","name":{"kind":"Name","value":"isMutedByMe"}},{"kind":"Field","name":{"kind":"Name","value":"isBlockedByMe"}},{"kind":"Field","name":{"kind":"Name","value":"hasBlockedMe"}},{"kind":"Field","name":{"kind":"Name","value":"canBlock"}},{"kind":"Field","name":{"kind":"Name","value":"canUnblock"}},{"kind":"Field","name":{"kind":"Name","value":"hasReported"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UsernameFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Username"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"localName"}},{"kind":"Field","name":{"kind":"Name","value":"linkedTo"}},{"kind":"Field","name":{"kind":"Name","value":"ownedBy"}}]}}]} as unknown as DocumentNode;

/**
 * __useAccountsQuery__
 *
 * To run a query within a React component, call `useAccountsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccountsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccountsQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useAccountsQuery(baseOptions: Apollo.QueryHookOptions<AccountsQuery, AccountsQueryVariables> & ({ variables: AccountsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AccountsQuery, AccountsQueryVariables>(AccountsDocument, options);
      }
export function useAccountsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AccountsQuery, AccountsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AccountsQuery, AccountsQueryVariables>(AccountsDocument, options);
        }
export function useAccountsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AccountsQuery, AccountsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AccountsQuery, AccountsQueryVariables>(AccountsDocument, options);
        }
export type AccountsQueryHookResult = ReturnType<typeof useAccountsQuery>;
export type AccountsLazyQueryHookResult = ReturnType<typeof useAccountsLazyQuery>;
export type AccountsSuspenseQueryHookResult = ReturnType<typeof useAccountsSuspenseQuery>;
export type AccountsQueryResult = Apollo.QueryResult<AccountsQuery, AccountsQueryVariables>;
export const AccountsBlockedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AccountsBlocked"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AccountsBlockedRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accountsBlocked"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"account"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccountFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"blockedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"next"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccountFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Account"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"coverPicture"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}}]}},{"kind":"Field","name":{"kind":"Name","value":"username"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UsernameFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"operations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isFollowedByMe"}},{"kind":"Field","name":{"kind":"Name","value":"isFollowingMe"}},{"kind":"Field","name":{"kind":"Name","value":"canFollow"}},{"kind":"Field","name":{"kind":"Name","value":"canUnfollow"}},{"kind":"Field","name":{"kind":"Name","value":"isMutedByMe"}},{"kind":"Field","name":{"kind":"Name","value":"isBlockedByMe"}},{"kind":"Field","name":{"kind":"Name","value":"hasBlockedMe"}},{"kind":"Field","name":{"kind":"Name","value":"canBlock"}},{"kind":"Field","name":{"kind":"Name","value":"canUnblock"}},{"kind":"Field","name":{"kind":"Name","value":"hasReported"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UsernameFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Username"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"localName"}},{"kind":"Field","name":{"kind":"Name","value":"linkedTo"}},{"kind":"Field","name":{"kind":"Name","value":"ownedBy"}}]}}]} as unknown as DocumentNode;

/**
 * __useAccountsBlockedQuery__
 *
 * To run a query within a React component, call `useAccountsBlockedQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccountsBlockedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccountsBlockedQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useAccountsBlockedQuery(baseOptions: Apollo.QueryHookOptions<AccountsBlockedQuery, AccountsBlockedQueryVariables> & ({ variables: AccountsBlockedQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AccountsBlockedQuery, AccountsBlockedQueryVariables>(AccountsBlockedDocument, options);
      }
export function useAccountsBlockedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AccountsBlockedQuery, AccountsBlockedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AccountsBlockedQuery, AccountsBlockedQueryVariables>(AccountsBlockedDocument, options);
        }
export function useAccountsBlockedSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AccountsBlockedQuery, AccountsBlockedQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AccountsBlockedQuery, AccountsBlockedQueryVariables>(AccountsBlockedDocument, options);
        }
export type AccountsBlockedQueryHookResult = ReturnType<typeof useAccountsBlockedQuery>;
export type AccountsBlockedLazyQueryHookResult = ReturnType<typeof useAccountsBlockedLazyQuery>;
export type AccountsBlockedSuspenseQueryHookResult = ReturnType<typeof useAccountsBlockedSuspenseQuery>;
export type AccountsBlockedQueryResult = Apollo.QueryResult<AccountsBlockedQuery, AccountsBlockedQueryVariables>;
export const AuthenticatedSessionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AuthenticatedSessions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AuthenticatedSessionsRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authenticatedSessions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authenticationId"}},{"kind":"Field","name":{"kind":"Name","value":"app"}},{"kind":"Field","name":{"kind":"Name","value":"browser"}},{"kind":"Field","name":{"kind":"Name","value":"device"}},{"kind":"Field","name":{"kind":"Name","value":"os"}},{"kind":"Field","name":{"kind":"Name","value":"origin"}},{"kind":"Field","name":{"kind":"Name","value":"signer"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"next"}}]}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useAuthenticatedSessionsQuery__
 *
 * To run a query within a React component, call `useAuthenticatedSessionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthenticatedSessionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthenticatedSessionsQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useAuthenticatedSessionsQuery(baseOptions: Apollo.QueryHookOptions<AuthenticatedSessionsQuery, AuthenticatedSessionsQueryVariables> & ({ variables: AuthenticatedSessionsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AuthenticatedSessionsQuery, AuthenticatedSessionsQueryVariables>(AuthenticatedSessionsDocument, options);
      }
export function useAuthenticatedSessionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AuthenticatedSessionsQuery, AuthenticatedSessionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AuthenticatedSessionsQuery, AuthenticatedSessionsQueryVariables>(AuthenticatedSessionsDocument, options);
        }
export function useAuthenticatedSessionsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AuthenticatedSessionsQuery, AuthenticatedSessionsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AuthenticatedSessionsQuery, AuthenticatedSessionsQueryVariables>(AuthenticatedSessionsDocument, options);
        }
export type AuthenticatedSessionsQueryHookResult = ReturnType<typeof useAuthenticatedSessionsQuery>;
export type AuthenticatedSessionsLazyQueryHookResult = ReturnType<typeof useAuthenticatedSessionsLazyQuery>;
export type AuthenticatedSessionsSuspenseQueryHookResult = ReturnType<typeof useAuthenticatedSessionsSuspenseQuery>;
export type AuthenticatedSessionsQueryResult = Apollo.QueryResult<AuthenticatedSessionsQuery, AuthenticatedSessionsQueryVariables>;
export const FeedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Feed"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FeedRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"feed"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useFeedQuery__
 *
 * To run a query within a React component, call `useFeedQuery` and pass it any options that fit your needs.
 * When your component renders, `useFeedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFeedQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useFeedQuery(baseOptions: Apollo.QueryHookOptions<FeedQuery, FeedQueryVariables> & ({ variables: FeedQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FeedQuery, FeedQueryVariables>(FeedDocument, options);
      }
export function useFeedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FeedQuery, FeedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FeedQuery, FeedQueryVariables>(FeedDocument, options);
        }
export function useFeedSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FeedQuery, FeedQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FeedQuery, FeedQueryVariables>(FeedDocument, options);
        }
export type FeedQueryHookResult = ReturnType<typeof useFeedQuery>;
export type FeedLazyQueryHookResult = ReturnType<typeof useFeedLazyQuery>;
export type FeedSuspenseQueryHookResult = ReturnType<typeof useFeedSuspenseQuery>;
export type FeedQueryResult = Apollo.QueryResult<FeedQuery, FeedQueryVariables>;
export const FollowersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Followers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FollowersRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"followers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"follower"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccountFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"next"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccountFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Account"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"coverPicture"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}}]}},{"kind":"Field","name":{"kind":"Name","value":"username"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UsernameFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"operations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isFollowedByMe"}},{"kind":"Field","name":{"kind":"Name","value":"isFollowingMe"}},{"kind":"Field","name":{"kind":"Name","value":"canFollow"}},{"kind":"Field","name":{"kind":"Name","value":"canUnfollow"}},{"kind":"Field","name":{"kind":"Name","value":"isMutedByMe"}},{"kind":"Field","name":{"kind":"Name","value":"isBlockedByMe"}},{"kind":"Field","name":{"kind":"Name","value":"hasBlockedMe"}},{"kind":"Field","name":{"kind":"Name","value":"canBlock"}},{"kind":"Field","name":{"kind":"Name","value":"canUnblock"}},{"kind":"Field","name":{"kind":"Name","value":"hasReported"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UsernameFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Username"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"localName"}},{"kind":"Field","name":{"kind":"Name","value":"linkedTo"}},{"kind":"Field","name":{"kind":"Name","value":"ownedBy"}}]}}]} as unknown as DocumentNode;

/**
 * __useFollowersQuery__
 *
 * To run a query within a React component, call `useFollowersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFollowersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFollowersQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useFollowersQuery(baseOptions: Apollo.QueryHookOptions<FollowersQuery, FollowersQueryVariables> & ({ variables: FollowersQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FollowersQuery, FollowersQueryVariables>(FollowersDocument, options);
      }
export function useFollowersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FollowersQuery, FollowersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FollowersQuery, FollowersQueryVariables>(FollowersDocument, options);
        }
export function useFollowersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FollowersQuery, FollowersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FollowersQuery, FollowersQueryVariables>(FollowersDocument, options);
        }
export type FollowersQueryHookResult = ReturnType<typeof useFollowersQuery>;
export type FollowersLazyQueryHookResult = ReturnType<typeof useFollowersLazyQuery>;
export type FollowersSuspenseQueryHookResult = ReturnType<typeof useFollowersSuspenseQuery>;
export type FollowersQueryResult = Apollo.QueryResult<FollowersQuery, FollowersQueryVariables>;
export const FollowersYouKnowDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FollowersYouKnow"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FollowersYouKnowRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"followersYouKnow"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"follower"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccountFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"next"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccountFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Account"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"coverPicture"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}}]}},{"kind":"Field","name":{"kind":"Name","value":"username"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UsernameFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"operations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isFollowedByMe"}},{"kind":"Field","name":{"kind":"Name","value":"isFollowingMe"}},{"kind":"Field","name":{"kind":"Name","value":"canFollow"}},{"kind":"Field","name":{"kind":"Name","value":"canUnfollow"}},{"kind":"Field","name":{"kind":"Name","value":"isMutedByMe"}},{"kind":"Field","name":{"kind":"Name","value":"isBlockedByMe"}},{"kind":"Field","name":{"kind":"Name","value":"hasBlockedMe"}},{"kind":"Field","name":{"kind":"Name","value":"canBlock"}},{"kind":"Field","name":{"kind":"Name","value":"canUnblock"}},{"kind":"Field","name":{"kind":"Name","value":"hasReported"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UsernameFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Username"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"localName"}},{"kind":"Field","name":{"kind":"Name","value":"linkedTo"}},{"kind":"Field","name":{"kind":"Name","value":"ownedBy"}}]}}]} as unknown as DocumentNode;

/**
 * __useFollowersYouKnowQuery__
 *
 * To run a query within a React component, call `useFollowersYouKnowQuery` and pass it any options that fit your needs.
 * When your component renders, `useFollowersYouKnowQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFollowersYouKnowQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useFollowersYouKnowQuery(baseOptions: Apollo.QueryHookOptions<FollowersYouKnowQuery, FollowersYouKnowQueryVariables> & ({ variables: FollowersYouKnowQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FollowersYouKnowQuery, FollowersYouKnowQueryVariables>(FollowersYouKnowDocument, options);
      }
export function useFollowersYouKnowLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FollowersYouKnowQuery, FollowersYouKnowQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FollowersYouKnowQuery, FollowersYouKnowQueryVariables>(FollowersYouKnowDocument, options);
        }
export function useFollowersYouKnowSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FollowersYouKnowQuery, FollowersYouKnowQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FollowersYouKnowQuery, FollowersYouKnowQueryVariables>(FollowersYouKnowDocument, options);
        }
export type FollowersYouKnowQueryHookResult = ReturnType<typeof useFollowersYouKnowQuery>;
export type FollowersYouKnowLazyQueryHookResult = ReturnType<typeof useFollowersYouKnowLazyQuery>;
export type FollowersYouKnowSuspenseQueryHookResult = ReturnType<typeof useFollowersYouKnowSuspenseQuery>;
export type FollowersYouKnowQueryResult = Apollo.QueryResult<FollowersYouKnowQuery, FollowersYouKnowQueryVariables>;
export const FollowingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Following"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FollowingRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"following"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"following"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccountFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"next"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccountFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Account"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"coverPicture"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}}]}},{"kind":"Field","name":{"kind":"Name","value":"username"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UsernameFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"operations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isFollowedByMe"}},{"kind":"Field","name":{"kind":"Name","value":"isFollowingMe"}},{"kind":"Field","name":{"kind":"Name","value":"canFollow"}},{"kind":"Field","name":{"kind":"Name","value":"canUnfollow"}},{"kind":"Field","name":{"kind":"Name","value":"isMutedByMe"}},{"kind":"Field","name":{"kind":"Name","value":"isBlockedByMe"}},{"kind":"Field","name":{"kind":"Name","value":"hasBlockedMe"}},{"kind":"Field","name":{"kind":"Name","value":"canBlock"}},{"kind":"Field","name":{"kind":"Name","value":"canUnblock"}},{"kind":"Field","name":{"kind":"Name","value":"hasReported"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UsernameFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Username"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"localName"}},{"kind":"Field","name":{"kind":"Name","value":"linkedTo"}},{"kind":"Field","name":{"kind":"Name","value":"ownedBy"}}]}}]} as unknown as DocumentNode;

/**
 * __useFollowingQuery__
 *
 * To run a query within a React component, call `useFollowingQuery` and pass it any options that fit your needs.
 * When your component renders, `useFollowingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFollowingQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useFollowingQuery(baseOptions: Apollo.QueryHookOptions<FollowingQuery, FollowingQueryVariables> & ({ variables: FollowingQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FollowingQuery, FollowingQueryVariables>(FollowingDocument, options);
      }
export function useFollowingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FollowingQuery, FollowingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FollowingQuery, FollowingQueryVariables>(FollowingDocument, options);
        }
export function useFollowingSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FollowingQuery, FollowingQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FollowingQuery, FollowingQueryVariables>(FollowingDocument, options);
        }
export type FollowingQueryHookResult = ReturnType<typeof useFollowingQuery>;
export type FollowingLazyQueryHookResult = ReturnType<typeof useFollowingLazyQuery>;
export type FollowingSuspenseQueryHookResult = ReturnType<typeof useFollowingSuspenseQuery>;
export type FollowingQueryResult = Apollo.QueryResult<FollowingQuery, FollowingQueryVariables>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"account"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AccountManaged"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"account"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccountFields"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AccountOwned"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"account"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccountFields"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"isSignless"}},{"kind":"Field","name":{"kind":"Name","value":"isSponsored"}},{"kind":"Field","name":{"kind":"Name","value":"appLoggedIn"}},{"kind":"Field","name":{"kind":"Name","value":"limit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"window"}},{"kind":"Field","name":{"kind":"Name","value":"allowanceLeft"}},{"kind":"Field","name":{"kind":"Name","value":"allowanceUsed"}},{"kind":"Field","name":{"kind":"Name","value":"allowance"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccountFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Account"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"coverPicture"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}}]}},{"kind":"Field","name":{"kind":"Name","value":"username"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UsernameFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"operations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isFollowedByMe"}},{"kind":"Field","name":{"kind":"Name","value":"isFollowingMe"}},{"kind":"Field","name":{"kind":"Name","value":"canFollow"}},{"kind":"Field","name":{"kind":"Name","value":"canUnfollow"}},{"kind":"Field","name":{"kind":"Name","value":"isMutedByMe"}},{"kind":"Field","name":{"kind":"Name","value":"isBlockedByMe"}},{"kind":"Field","name":{"kind":"Name","value":"hasBlockedMe"}},{"kind":"Field","name":{"kind":"Name","value":"canBlock"}},{"kind":"Field","name":{"kind":"Name","value":"canUnblock"}},{"kind":"Field","name":{"kind":"Name","value":"hasReported"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UsernameFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Username"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"localName"}},{"kind":"Field","name":{"kind":"Name","value":"linkedTo"}},{"kind":"Field","name":{"kind":"Name","value":"ownedBy"}}]}}]} as unknown as DocumentNode;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export function useMeSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeSuspenseQueryHookResult = ReturnType<typeof useMeSuspenseQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "AccessConditionType": [
      "AdvancedContractCondition",
      "CollectCondition",
      "EoaOwnershipCondition",
      "Erc20OwnershipCondition",
      "FollowCondition",
      "NftOwnershipCondition",
      "ProfileOwnershipCondition"
    ],
    "AccountAvailable": [
      "AccountManaged",
      "AccountOwned"
    ],
    "ActionInfo": [
      "KnownAction",
      "UnknownAction"
    ],
    "AddAccountManagerResult": [
      "SelfFundedTransactionRequest",
      "SponsoredTransactionRequest",
      "TransactionWillFail"
    ],
    "AddReactionResult": [
      "AddReactionFailure",
      "AddReactionResponse"
    ],
    "AnyAccessCondition": [
      "AdvancedContractCondition",
      "BooleanAndCondition",
      "BooleanOrCondition",
      "CollectCondition",
      "EoaOwnershipCondition",
      "Erc20OwnershipCondition",
      "FollowCondition",
      "NftOwnershipCondition",
      "ProfileOwnershipCondition"
    ],
    "AnyMedia": [
      "MediaAudio",
      "MediaImage",
      "MediaVideo"
    ],
    "AnyPost": [
      "Post",
      "Repost"
    ],
    "Asset": [
      "Erc20"
    ],
    "AssignUsernameToAccountResult": [
      "AssignUsernameResponse",
      "SelfFundedTransactionRequest",
      "SponsoredTransactionRequest",
      "TransactionWillFail"
    ],
    "AuthenticationResult": [
      "AuthenticationTokens",
      "ExpiredChallengeError",
      "ForbiddenError",
      "WrongSignerError"
    ],
    "BlockResult": [
      "BlockError",
      "BlockResponse",
      "SelfFundedTransactionRequest",
      "SponsoredTransactionRequest"
    ],
    "CreateAccountWithUsernameResult": [
      "CreateAccountResponse",
      "InvalidUsername",
      "SelfFundedTransactionRequest",
      "SponsoredTransactionRequest",
      "TransactionWillFail"
    ],
    "CreateAppResult": [
      "CreateAppResponse",
      "SelfFundedTransactionRequest",
      "TransactionWillFail"
    ],
    "CreateFeedResult": [
      "CreateFeedResponse",
      "SelfFundedTransactionRequest",
      "TransactionWillFail"
    ],
    "CreateGraphResult": [
      "CreateGraphResponse",
      "SelfFundedTransactionRequest",
      "TransactionWillFail"
    ],
    "CreateGroupResult": [
      "CreateGroupResponse",
      "SelfFundedTransactionRequest",
      "TransactionWillFail"
    ],
    "CreateUsernameNamespaceResult": [
      "CreateNamespaceResponse",
      "SelfFundedTransactionRequest",
      "TransactionWillFail"
    ],
    "CreateUsernameResult": [
      "CreateUsernameResponse",
      "SelfFundedTransactionRequest",
      "SponsoredTransactionRequest",
      "TransactionWillFail"
    ],
    "DeletePostResult": [
      "DeletePostResponse",
      "SelfFundedTransactionRequest",
      "SponsoredTransactionRequest",
      "TransactionWillFail"
    ],
    "EnableSignlessResult": [
      "SelfFundedTransactionRequest",
      "SponsoredTransactionRequest",
      "TransactionWillFail"
    ],
    "EncryptionStrategy": [
      "LitProtocolEncryptionStrategy"
    ],
    "FollowResult": [
      "FollowResponse",
      "SelfFundedTransactionRequest",
      "SponsoredTransactionRequest",
      "TransactionWillFail"
    ],
    "JoinGroupResult": [
      "JoinGroupResponse",
      "SelfFundedTransactionRequest",
      "SponsoredTransactionRequest",
      "TransactionWillFail"
    ],
    "LeaveGroupResult": [
      "LeaveGroupResponse",
      "SelfFundedTransactionRequest",
      "SponsoredTransactionRequest",
      "TransactionWillFail"
    ],
    "NestedPost": [
      "Post",
      "PostReference"
    ],
    "Notification": [
      "CommentNotification",
      "FollowNotification",
      "MentionNotification",
      "QuoteNotification",
      "ReactionNotification",
      "RepostNotification"
    ],
    "PostAction": [
      "SimpleCollectActionSettings",
      "UnknownActionSettings"
    ],
    "PostMetadata": [
      "ArticleMetadata",
      "AudioMetadata",
      "CheckingInMetadata",
      "EmbedMetadata",
      "EventMetadata",
      "ImageMetadata",
      "LinkMetadata",
      "LivestreamMetadata",
      "MintMetadata",
      "SpaceMetadata",
      "StoryMetadata",
      "TextOnlyMetadata",
      "ThreeDMetadata",
      "TransactionMetadata",
      "VideoMetadata"
    ],
    "PostResult": [
      "PostResponse",
      "SelfFundedTransactionRequest",
      "SponsoredTransactionRequest",
      "TransactionWillFail"
    ],
    "RefreshResult": [
      "AuthenticationTokens",
      "ForbiddenError"
    ],
    "RemoveAccountManagerResult": [
      "SelfFundedTransactionRequest",
      "SponsoredTransactionRequest",
      "TransactionWillFail"
    ],
    "RemoveSignlessResult": [
      "SelfFundedTransactionRequest",
      "SponsoredTransactionRequest",
      "TransactionWillFail"
    ],
    "SetAccountMetadataResult": [
      "SelfFundedTransactionRequest",
      "SetAccountMetadataResponse",
      "SponsoredTransactionRequest",
      "TransactionWillFail"
    ],
    "SwitchAccountResult": [
      "AuthenticationTokens",
      "ForbiddenError"
    ],
    "TransactionStatusResult": [
      "FailedTransactionStatus",
      "FinishedTransactionStatus",
      "NotIndexedYetStatus",
      "PendingTransactionStatus"
    ],
    "UnassignUsernameToAccountResult": [
      "SelfFundedTransactionRequest",
      "SponsoredTransactionRequest",
      "TransactionWillFail",
      "UnassignUsernameResponse"
    ],
    "UnblockResult": [
      "SelfFundedTransactionRequest",
      "SponsoredTransactionRequest",
      "UnblockError",
      "UnblockResponse"
    ],
    "UndoReactionResult": [
      "UndoReactionFailure",
      "UndoReactionResponse"
    ],
    "UnfollowResult": [
      "SelfFundedTransactionRequest",
      "SponsoredTransactionRequest",
      "TransactionWillFail",
      "UnfollowResponse"
    ],
    "UpdateAccountManagerResult": [
      "SelfFundedTransactionRequest",
      "SponsoredTransactionRequest",
      "TransactionWillFail"
    ]
  }
};
      export default result;
    