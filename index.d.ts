export type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  DateTime: any
  /** Represents `true` or `false` values. */
  BooleanType: any
  ItemId: any
  /** Represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  IntType: any
  Date: any
  UploadId: any
  /**
   * Represents signed double-precision fractional values as specified by [IEEE
   * 754](http://en.wikipedia.org/wiki/IEEE_floating_point).
   **/
  FloatType: any
  CustomData: any
  MetaTagAttributes: any
  JsonField: any
}

export type AboutPageModelPageContentField =
  | CalloutSectionRecord
  | HeroSectionRecord
  | PersonListRecord
  | TwoColumnTextSectionRecord

/** Record of type About Page (DEPRECATED) (about_page) */
export type AboutPageRecord = {
  __typename?: "AboutPageRecord"
  _allNameLocales?: Maybe<Array<Maybe<StringMultiLocaleField>>>
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  metadata?: Maybe<SeoField>
  name?: Maybe<Scalars["String"]>
  pageContent: Array<AboutPageModelPageContentField>
  updatedAt: Scalars["DateTime"]
}

/** Record of type About Page (DEPRECATED) (about_page) */
export type AboutPageRecord_AllNameLocalesArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type About Page (DEPRECATED) (about_page) */
export type AboutPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type About Page (DEPRECATED) (about_page) */
export type AboutPageRecordNameArgs = {
  locale?: Maybe<SiteLocale>
}

export type AlertBannerModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  theme?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  text?: Maybe<StringFilter>
  url?: Maybe<StringFilter>
  tag?: Maybe<StringFilter>
  linkText?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<AlertBannerModelFilter>>>
}

export enum AlertBannerModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  ThemeAsc = "theme_ASC",
  ThemeDesc = "theme_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  TextAsc = "text_ASC",
  TextDesc = "text_DESC",
  UrlAsc = "url_ASC",
  UrlDesc = "url_DESC",
  TagAsc = "tag_ASC",
  TagDesc = "tag_DESC",
  LinkTextAsc = "linkText_ASC",
  LinkTextDesc = "linkText_DESC"
}

/** Record of type Alert Banner (alert_banner) */
export type AlertBannerRecord = {
  __typename?: "AlertBannerRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  linkText?: Maybe<Scalars["String"]>
  tag?: Maybe<Scalars["String"]>
  text?: Maybe<Scalars["String"]>
  theme?: Maybe<Scalars["String"]>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
  url?: Maybe<Scalars["String"]>
}

/** Record of type Alert Banner (alert_banner) */
export type AlertBannerRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type AlertModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  url?: Maybe<StringFilter>
  tag?: Maybe<StringFilter>
  tagColor?: Maybe<StringFilter>
  text?: Maybe<StringFilter>
  textColor?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<AlertModelFilter>>>
}

export enum AlertModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  UrlAsc = "url_ASC",
  UrlDesc = "url_DESC",
  TagAsc = "tag_ASC",
  TagDesc = "tag_DESC",
  TagColorAsc = "tagColor_ASC",
  TagColorDesc = "tagColor_DESC",
  TextAsc = "text_ASC",
  TextDesc = "text_DESC",
  TextColorAsc = "textColor_ASC",
  TextColorDesc = "textColor_DESC"
}

/** Record of type Alert (alert) */
export type AlertRecord = {
  __typename?: "AlertRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  tag?: Maybe<Scalars["String"]>
  tagColor?: Maybe<Scalars["String"]>
  text?: Maybe<Scalars["String"]>
  textColor?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
  url?: Maybe<Scalars["String"]>
}

/** Record of type Alert (alert) */
export type AlertRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Automation Bullet (automation_bullet) */
export type AutomationBulletRecord = {
  __typename?: "AutomationBulletRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  bullet?: Maybe<Scalars["String"]>
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  updatedAt: Scalars["DateTime"]
}

/** Record of type Automation Bullet (automation_bullet) */
export type AutomationBulletRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Automation Logo (automation_logo) */
export type AutomationLogoRecord = {
  __typename?: "AutomationLogoRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  logo?: Maybe<FileField>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Automation Logo (automation_logo) */
export type AutomationLogoRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type BasicTableModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  headline?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<BasicTableModelFilter>>>
}

export enum BasicTableModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  HeadlineAsc = "headline_ASC",
  HeadlineDesc = "headline_DESC"
}

/** Record of type Basic Table (basic_table) */
export type BasicTableRecord = {
  __typename?: "BasicTableRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  headline?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  rows?: Maybe<Array<Maybe<RowRecord>>>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Basic Table (basic_table) */
export type BasicTableRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type BecomeAPartnerPageModelContentField =
  | MajorHeadlineSectionRecord
  | TextSectionRecord
  | FeatureTableRecord

/** Record of type Become A Partner Page (become_a_partner_page) */
export type BecomeAPartnerPageRecord = {
  __typename?: "BecomeAPartnerPageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  content: Array<BecomeAPartnerPageModelContentField>
  createdAt: Scalars["DateTime"]
  hero?: Maybe<HeroSectionRecord>
  id: Scalars["ItemId"]
  metadata?: Maybe<SeoField>
  prefooter?: Maybe<HeroSectionRecord>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Become A Partner Page (become_a_partner_page) */
export type BecomeAPartnerPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Blog Image (blog_image) */
export type BlogImageRecord = {
  __typename?: "BlogImageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  image?: Maybe<FileField>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Blog Image (blog_image) */
export type BlogImageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Blog Index Page (blog_index_page) */
export type BlogIndexPageRecord = {
  __typename?: "BlogIndexPageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  hero?: Maybe<HeroSectionRecord>
  id: Scalars["ItemId"]
  metadata?: Maybe<SeoField>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Blog Index Page (blog_index_page) */
export type BlogIndexPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type BlogPostCategoryModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  slug?: Maybe<SlugFilter>
  title?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<BlogPostCategoryModelFilter>>>
}

export enum BlogPostCategoryModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC"
}

/** Record of type Blog Post Category (blog_post_category) */
export type BlogPostCategoryRecord = {
  __typename?: "BlogPostCategoryRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  slug?: Maybe<Scalars["String"]>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Blog Post Category (blog_post_category) */
export type BlogPostCategoryRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type BlogPostModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  showDemoRequest?: Maybe<BooleanFilter>
  previewUrl?: Maybe<StringFilter>
  date?: Maybe<DateFilter>
  slug?: Maybe<SlugFilter>
  title?: Maybe<StringFilter>
  toDoItems?: Maybe<JsonFilter>
  body?: Maybe<TextFilter>
  guestBlog?: Maybe<BooleanFilter>
  categories?: Maybe<LinksFilter>
  image?: Maybe<FileFilter>
  thumbnail?: Maybe<FileFilter>
  metadata?: Maybe<SeoFilter>
  dateTime?: Maybe<DateTimeFilter>
  author?: Maybe<LinkFilter>
  snippet?: Maybe<TextFilter>
  OR?: Maybe<Array<Maybe<BlogPostModelFilter>>>
}

export enum BlogPostModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  ShowDemoRequestAsc = "showDemoRequest_ASC",
  ShowDemoRequestDesc = "showDemoRequest_DESC",
  PreviewUrlAsc = "previewUrl_ASC",
  PreviewUrlDesc = "previewUrl_DESC",
  DateAsc = "date_ASC",
  DateDesc = "date_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  GuestBlogAsc = "guestBlog_ASC",
  GuestBlogDesc = "guestBlog_DESC",
  DateTimeAsc = "dateTime_ASC",
  DateTimeDesc = "dateTime_DESC"
}

/** Record of type Blog Post (blog_post) */
export type BlogPostRecord = {
  __typename?: "BlogPostRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  author?: Maybe<PersonRecord>
  body?: Maybe<Scalars["String"]>
  categories: Array<BlogPostCategoryRecord>
  createdAt: Scalars["DateTime"]
  date?: Maybe<Scalars["Date"]>
  dateTime?: Maybe<Scalars["DateTime"]>
  guestBlog?: Maybe<Scalars["BooleanType"]>
  id: Scalars["ItemId"]
  image?: Maybe<FileField>
  metadata?: Maybe<SeoField>
  previewUrl?: Maybe<Scalars["String"]>
  showDemoRequest?: Maybe<Scalars["BooleanType"]>
  slug?: Maybe<Scalars["String"]>
  snippet?: Maybe<Scalars["String"]>
  thumbnail?: Maybe<FileField>
  title?: Maybe<Scalars["String"]>
  toDoItems?: Maybe<Scalars["JsonField"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Blog Post (blog_post) */
export type BlogPostRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Blog Post (blog_post) */
export type BlogPostRecordBodyArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Blog Post (blog_post) */
export type BlogPostRecordSnippetArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type BlogPostV2ModelContentField = TextRecord | BlogImageRecord

export type BlogPostV2ModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  summary?: Maybe<TextFilter>
  publishDate?: Maybe<DateTimeFilter>
  slug?: Maybe<SlugFilter>
  title?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<BlogPostV2ModelFilter>>>
}

export enum BlogPostV2ModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  PublishDateAsc = "publishDate_ASC",
  PublishDateDesc = "publishDate_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC"
}

/** Record of type Blog Post v2 (blog_post_v2) */
export type BlogPostV2Record = {
  __typename?: "BlogPostV2Record"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  content?: Maybe<Array<Maybe<BlogPostV2ModelContentField>>>
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  publishDate?: Maybe<Scalars["DateTime"]>
  slug?: Maybe<Scalars["String"]>
  summary?: Maybe<Scalars["String"]>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Blog Post v2 (blog_post_v2) */
export type BlogPostV2Record_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Blog Post v2 (blog_post_v2) */
export type BlogPostV2RecordSummaryArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Specifies how to filter Boolean fields */
export type BooleanFilter = {
  /** Search for records with an exact match */
  eq?: Maybe<Scalars["BooleanType"]>
}

/** Record of type Brand Page (brand_page) */
export type BrandPageRecord = {
  __typename?: "BrandPageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  hero?: Maybe<HeroSectionRecord>
  id: Scalars["ItemId"]
  updatedAt: Scalars["DateTime"]
}

/** Record of type Brand Page (brand_page) */
export type BrandPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type Button2ModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  theme?: Maybe<LinkFilter>
  external?: Maybe<BooleanFilter>
  url?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<Button2ModelFilter>>>
}

export enum Button2ModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  ExternalAsc = "external_ASC",
  ExternalDesc = "external_DESC",
  UrlAsc = "url_ASC",
  UrlDesc = "url_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC"
}

/** Record of type Button 2 (deprecated) (button_2) */
export type Button2Record = {
  __typename?: "Button2Record"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  external?: Maybe<Scalars["BooleanType"]>
  id: Scalars["ItemId"]
  theme?: Maybe<ButtonThemeRecord>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
  url?: Maybe<Scalars["String"]>
}

/** Record of type Button 2 (deprecated) (button_2) */
export type Button2Record_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Button (button) */
export type ButtonRecord = {
  __typename?: "ButtonRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  external?: Maybe<Scalars["BooleanType"]>
  id: Scalars["ItemId"]
  theme?: Maybe<ButtonThemeRecord>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
  url?: Maybe<Scalars["String"]>
}

/** Record of type Button (button) */
export type ButtonRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type ButtonThemeModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  position?: Maybe<PositionFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  slug?: Maybe<SlugFilter>
  name?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<ButtonThemeModelFilter>>>
}

export enum ButtonThemeModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PositionAsc = "position_ASC",
  PositionDesc = "position_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC"
}

/** Record of type Button Theme (deprecated) (button_theme) */
export type ButtonThemeRecord = {
  __typename?: "ButtonThemeRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  name?: Maybe<Scalars["String"]>
  position?: Maybe<Scalars["IntType"]>
  slug?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Button Theme (deprecated) (button_theme) */
export type ButtonThemeRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type CalloutItemModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  title?: Maybe<StringFilter>
  image?: Maybe<FileFilter>
  link?: Maybe<LinkFilter>
  description?: Maybe<TextFilter>
  OR?: Maybe<Array<Maybe<CalloutItemModelFilter>>>
}

export enum CalloutItemModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC"
}

/** Record of type Callout Item (deprecated) (callout_item) */
export type CalloutItemRecord = {
  __typename?: "CalloutItemRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  description?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  image?: Maybe<FileField>
  link?: Maybe<LinkRecord>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Callout Item (deprecated) (callout_item) */
export type CalloutItemRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Callout Item (deprecated) (callout_item) */
export type CalloutItemRecordDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Callout (callout) */
export type CalloutRecord = {
  __typename?: "CalloutRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  content?: Maybe<Scalars["String"]>
  createdAt: Scalars["DateTime"]
  heading?: Maybe<Scalars["String"]>
  icon?: Maybe<FileField>
  id: Scalars["ItemId"]
  updatedAt: Scalars["DateTime"]
}

/** Record of type Callout (callout) */
export type CalloutRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Callout (callout) */
export type CalloutRecordContentArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type CalloutSectionModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  companies?: Maybe<LinksFilter>
  items?: Maybe<LinksFilter>
  calloutImage?: Maybe<FileFilter>
  description?: Maybe<TextFilter>
  headline?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<CalloutSectionModelFilter>>>
}

export enum CalloutSectionModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  HeadlineAsc = "headline_ASC",
  HeadlineDesc = "headline_DESC"
}

/** Record of type Callout Section (deprecated) (callout_section) */
export type CalloutSectionRecord = {
  __typename?: "CalloutSectionRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  calloutImage?: Maybe<FileField>
  companies: Array<CompanyRecord>
  createdAt: Scalars["DateTime"]
  description?: Maybe<Scalars["String"]>
  headline?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  items: Array<CalloutItemRecord>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Callout Section (deprecated) (callout_section) */
export type CalloutSectionRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Callout Section (deprecated) (callout_section) */
export type CalloutSectionRecordDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Callouts Section (callouts_section) */
export type CalloutsSectionRecord = {
  __typename?: "CalloutsSectionRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  items: Array<CalloutItemRecord>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Callouts Section (callouts_section) */
export type CalloutsSectionRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type CallToActionModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  content?: Maybe<TextFilter>
  heading?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<CallToActionModelFilter>>>
}

export enum CallToActionModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  HeadingAsc = "heading_ASC",
  HeadingDesc = "heading_DESC"
}

/** Record of type Call To Action (call_to_action) */
export type CallToActionRecord = {
  __typename?: "CallToActionRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  content?: Maybe<Scalars["String"]>
  createdAt: Scalars["DateTime"]
  heading?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  updatedAt: Scalars["DateTime"]
}

/** Record of type Call To Action (call_to_action) */
export type CallToActionRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Call To Action (call_to_action) */
export type CallToActionRecordContentArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type CertificationPageModelContentField =
  | MajorHeadlineSectionRecord
  | TextSectionRecord

/** Record of type Certification Page (certification_page) */
export type CertificationPageRecord = {
  __typename?: "CertificationPageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  content: Array<CertificationPageModelContentField>
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  intro?: Maybe<Scalars["String"]>
  previewUrl?: Maybe<Scalars["String"]>
  seoTags?: Maybe<SeoField>
  signupFormHeading?: Maybe<Scalars["String"]>
  signupFormIntro?: Maybe<Scalars["String"]>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Certification Page (certification_page) */
export type CertificationPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Certification Page (certification_page) */
export type CertificationPageRecordIntroArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Certification Page (certification_page) */
export type CertificationPageRecordSignupFormIntroArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type CloudPartnerPageModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  slug?: Maybe<SlugFilter>
  title?: Maybe<StringFilter>
  metadata?: Maybe<SeoFilter>
  OR?: Maybe<Array<Maybe<CloudPartnerPageModelFilter>>>
}

export enum CloudPartnerPageModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC"
}

/** Record of type Cloud Partner Page (cloud_partner_page) */
export type CloudPartnerPageRecord = {
  __typename?: "CloudPartnerPageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  integrations?: Maybe<Array<Maybe<IntegrationDetailRecord>>>
  metadata?: Maybe<SeoField>
  slug?: Maybe<Scalars["String"]>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Cloud Partner Page (cloud_partner_page) */
export type CloudPartnerPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type CodeblockLanguageModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  position?: Maybe<PositionFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  slug?: Maybe<SlugFilter>
  name?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<CodeblockLanguageModelFilter>>>
}

export enum CodeblockLanguageModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PositionAsc = "position_ASC",
  PositionDesc = "position_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC"
}

/** Record of type Code Block Language (codeblock_language) */
export type CodeblockLanguageRecord = {
  __typename?: "CodeblockLanguageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  name?: Maybe<Scalars["String"]>
  position?: Maybe<Scalars["IntType"]>
  slug?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Code Block Language (codeblock_language) */
export type CodeblockLanguageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type CodeSampleModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  codeBlock?: Maybe<TextFilter>
  description?: Maybe<TextFilter>
  OR?: Maybe<Array<Maybe<CodeSampleModelFilter>>>
}

export enum CodeSampleModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC"
}

/** Record of type Code Sample (code_sample) */
export type CodeSampleRecord = {
  __typename?: "CodeSampleRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  codeBlock?: Maybe<Scalars["String"]>
  createdAt: Scalars["DateTime"]
  description?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  updatedAt: Scalars["DateTime"]
}

/** Record of type Code Sample (code_sample) */
export type CodeSampleRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Code Sample (code_sample) */
export type CodeSampleRecordCodeBlockArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Code Sample (code_sample) */
export type CodeSampleRecordDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type CollectionMetadata = {
  __typename?: "CollectionMetadata"
  count: Scalars["IntType"]
}

export enum ColorBucketType {
  Red = "red",
  Orange = "orange",
  Pink = "pink",
  Cyan = "cyan",
  Purple = "purple",
  Blue = "blue",
  Yellow = "yellow",
  Green = "green",
  Brown = "brown",
  Grey = "grey",
  White = "white",
  Black = "black"
}

export type ColorField = {
  __typename?: "ColorField"
  alpha?: Maybe<Scalars["IntType"]>
  blue?: Maybe<Scalars["IntType"]>
  green?: Maybe<Scalars["IntType"]>
  hex?: Maybe<Scalars["String"]>
  red?: Maybe<Scalars["IntType"]>
}

/** Specifies how to filter Color fields */
export type ColorFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars["BooleanType"]>
}

/** Record of type Community Landing Page (community_landing_page) */
export type CommunityLandingPageRecord = {
  __typename?: "CommunityLandingPageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  alertBanner?: Maybe<AlertBannerRecord>
  conversationSectionHeader?: Maybe<SbcSectionHeaderRecord>
  createdAt: Scalars["DateTime"]
  eventsButton?: Maybe<SbcMultiButtonRecord>
  eventsFeatured: Array<HashiconfRecord>
  eventsSectionHeader?: Maybe<SbcSectionHeaderRecord>
  findYourUserGroupButtons?: Maybe<SbcMultiButtonRecord>
  findYourUserGroupSectionHeader?: Maybe<SbcSectionHeaderRecord>
  gettingStartedSectionHeader?: Maybe<SbcSectionHeaderRecord>
  gettingStartedTools: Array<OpenSourceToolRecord>
  headerAlert?: Maybe<SbcAlertRecord>
  headerButtonCollection?: Maybe<SbcMultiButtonRecord>
  headerCommunityImageRow: Array<FileField>
  headerSectionHeader?: Maybe<SbcSectionHeaderRecord>
  hugCountries?: Maybe<Scalars["IntType"]>
  hugGroups?: Maybe<Scalars["IntType"]>
  hugMembers?: Maybe<Scalars["IntType"]>
  id: Scalars["ItemId"]
  metadata?: Maybe<SeoField>
  resourcesButtons?: Maybe<SbcMultiButtonRecord>
  resourcesSectionHeader?: Maybe<SbcSectionHeaderRecord>
  resourcesSlider?: Maybe<SbcResourcesSliderRecord>
  title?: Maybe<Scalars["String"]>
  twitchButtonCollection?: Maybe<SbcMultiButtonRecord>
  twitchImage?: Maybe<FileField>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Community Landing Page (community_landing_page) */
export type CommunityLandingPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type CompanyModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  integrationPage?: Maybe<LinkFilter>
  companyType?: Maybe<StringFilter>
  blogPostCategorys?: Maybe<LinkFilter>
  link?: Maybe<StringFilter>
  logo?: Maybe<FileFilter>
  name?: Maybe<StringFilter>
  slug?: Maybe<SlugFilter>
  enableProductIntegrations?: Maybe<BooleanFilter>
  description?: Maybe<TextFilter>
  monochromeLogo?: Maybe<FileFilter>
  productIntegrations?: Maybe<LinksFilter>
  whiteLogo?: Maybe<FileFilter>
  OR?: Maybe<Array<Maybe<CompanyModelFilter>>>
}

export enum CompanyModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  CompanyTypeAsc = "companyType_ASC",
  CompanyTypeDesc = "companyType_DESC",
  LinkAsc = "link_ASC",
  LinkDesc = "link_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  EnableProductIntegrationsAsc = "enableProductIntegrations_ASC",
  EnableProductIntegrationsDesc = "enableProductIntegrations_DESC"
}

/** Record of type Company (company) */
export type CompanyRecord = {
  __typename?: "CompanyRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  blogPostCategorys?: Maybe<BlogPostCategoryRecord>
  companyType?: Maybe<Scalars["String"]>
  createdAt: Scalars["DateTime"]
  description?: Maybe<Scalars["String"]>
  enableProductIntegrations?: Maybe<Scalars["BooleanType"]>
  id: Scalars["ItemId"]
  integrationPage?: Maybe<CloudPartnerPageRecord>
  link?: Maybe<Scalars["String"]>
  logo?: Maybe<FileField>
  monochromeLogo?: Maybe<FileField>
  name?: Maybe<Scalars["String"]>
  productIntegrations: Array<OpenSourceToolRecord>
  productIntegrationsV2?: Maybe<Array<Maybe<ProductIntegrationRecord>>>
  slug?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
  whiteLogo?: Maybe<FileField>
}

/** Record of type Company (company) */
export type CompanyRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Company (company) */
export type CompanyRecordDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Consul Field Day Live (consul_field_day_live) */
export type ConsulFieldDayLiveRecord = {
  __typename?: "ConsulFieldDayLiveRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  ctaTagText?: Maybe<Scalars["String"]>
  ctaUrl?: Maybe<Scalars["String"]>
  headerBody?: Maybe<Scalars["String"]>
  headerTitle?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  metadata?: Maybe<SeoField>
  sidebarBody?: Maybe<Scalars["String"]>
  sidebarTitle?: Maybe<Scalars["String"]>
  streamIsLive?: Maybe<Scalars["BooleanType"]>
  streamUrl?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Consul Field Day Live (consul_field_day_live) */
export type ConsulFieldDayLiveRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Consul Field Day Live (consul_field_day_live) */
export type ConsulFieldDayLiveRecordHeaderBodyArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Consul Field Day Live (consul_field_day_live) */
export type ConsulFieldDayLiveRecordSidebarBodyArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type ConsulGraphicSectionModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  mobileImage?: Maybe<FileFilter>
  desktopImage?: Maybe<FileFilter>
  headline?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<ConsulGraphicSectionModelFilter>>>
}

export enum ConsulGraphicSectionModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  HeadlineAsc = "headline_ASC",
  HeadlineDesc = "headline_DESC"
}

/** Record of type Consul Graphic Section (consul_graphic_section) */
export type ConsulGraphicSectionRecord = {
  __typename?: "ConsulGraphicSectionRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  desktopImage?: Maybe<FileField>
  headline?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  mobileImage?: Maybe<FileField>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Consul Graphic Section (consul_graphic_section) */
export type ConsulGraphicSectionRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Consul Product Page (consul_product_page) */
export type ConsulProductPageRecord = {
  __typename?: "ConsulProductPageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  alertBanner?: Maybe<AlertBannerRecord>
  caseStudiesSection?: Maybe<SectionBlockV2Record>
  companiesSection?: Maybe<SectionBlockV2Record>
  createdAt: Scalars["DateTime"]
  enterprisePricingPage?: Maybe<SectionBlockPageRecord>
  featuresSection?: Maybe<SectionBlockV2Record>
  heroSection?: Maybe<HeroSectionRecord>
  howConsulWorksSection?: Maybe<SectionBlockV2Record>
  id: Scalars["ItemId"]
  infrastructureSection?: Maybe<SectionBlockV2Record>
  metadata?: Maybe<SeoField>
  principlesSection?: Maybe<SectionBlockV2Record>
  resourcesSection?: Maybe<SectionBlockV2Record>
  subnav?: Maybe<ProductSubnavRecord>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
  useCasePages: Array<SectionBlockPageRecord>
  useCasesSection?: Maybe<SectionBlockV2Record>
}

/** Record of type Consul Product Page (consul_product_page) */
export type ConsulProductPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type ContactCategoryModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  url?: Maybe<StringFilter>
  formPage?: Maybe<LinkFilter>
  image?: Maybe<FileFilter>
  description?: Maybe<TextFilter>
  title?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<ContactCategoryModelFilter>>>
}

export enum ContactCategoryModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  UrlAsc = "url_ASC",
  UrlDesc = "url_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC"
}

/** Record of type Contact Category (contact_category) */
export type ContactCategoryRecord = {
  __typename?: "ContactCategoryRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  description?: Maybe<Scalars["String"]>
  formPage?: Maybe<ContactFormPageRecord>
  id: Scalars["ItemId"]
  image?: Maybe<FileField>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
  url?: Maybe<Scalars["String"]>
}

/** Record of type Contact Category (contact_category) */
export type ContactCategoryRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Contact Category (contact_category) */
export type ContactCategoryRecordDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type ContactFormPageModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  metadata?: Maybe<SeoFilter>
  slug?: Maybe<SlugFilter>
  description?: Maybe<TextFilter>
  title?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<ContactFormPageModelFilter>>>
}

export type ContactFormPageModelFormFieldsField =
  | FormTextFieldRecord
  | FormTextAreaFieldRecord
  | FormMultiSelectFieldRecord
  | FormHiddenFieldRecord
  | FormEmailFieldRecord

export enum ContactFormPageModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC"
}

/** Record of type Contact Form Page (contact_form_page) */
export type ContactFormPageRecord = {
  __typename?: "ContactFormPageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  description?: Maybe<Scalars["String"]>
  formFields?: Maybe<Array<Maybe<ContactFormPageModelFormFieldsField>>>
  id: Scalars["ItemId"]
  metadata?: Maybe<SeoField>
  slug?: Maybe<Scalars["String"]>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Contact Form Page (contact_form_page) */
export type ContactFormPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Contact Form Page (contact_form_page) */
export type ContactFormPageRecordDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Contact Page (contact_page) */
export type ContactPageRecord = {
  __typename?: "ContactPageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  categories: Array<ContactCategoryRecord>
  createdAt: Scalars["DateTime"]
  description?: Maybe<Scalars["String"]>
  headline?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  metadata?: Maybe<SeoField>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Contact Page (contact_page) */
export type ContactPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Contact Page (contact_page) */
export type ContactPageRecordDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Content Section (content_section) */
export type ContentSectionRecord = {
  __typename?: "ContentSectionRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  imageGrid: Array<FileField>
  lead?: Maybe<Scalars["String"]>
  text?: Maybe<Scalars["String"]>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Content Section (content_section) */
export type ContentSectionRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Content Section (content_section) */
export type ContentSectionRecordLeadArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Content Section (content_section) */
export type ContentSectionRecordTextArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Customer (customer) */
export type CustomerRecord = {
  __typename?: "CustomerRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  link?: Maybe<Scalars["String"]>
  logo?: Maybe<FileField>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Customer (customer) */
export type CustomerRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Specifies how to filter Date fields */
export type DateFilter = {
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: Maybe<Scalars["Date"]>
  /** Filter records with a value that's less than the one specified */
  lt?: Maybe<Scalars["Date"]>
  /** Filter records with a value that's greater than or equal to the one specified */
  gte?: Maybe<Scalars["Date"]>
  /** Filter records with a value that's less or equal than the one specified */
  lte?: Maybe<Scalars["Date"]>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars["BooleanType"]>
  /** Search for records with an exact match */
  eq?: Maybe<Scalars["Date"]>
  /** Exclude records with an exact match */
  neq?: Maybe<Scalars["Date"]>
}

/** Specifies how to filter DateTime fields */
export type DateTimeFilter = {
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: Maybe<Scalars["DateTime"]>
  /** Filter records with a value that's less than the one specified */
  lt?: Maybe<Scalars["DateTime"]>
  /** Filter records with a value that's greater than or equal to than the one specified */
  gte?: Maybe<Scalars["DateTime"]>
  /** Filter records with a value that's less or equal than the one specified */
  lte?: Maybe<Scalars["DateTime"]>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars["BooleanType"]>
  /** Search for records with an exact match (seconds are truncated) */
  eq?: Maybe<Scalars["DateTime"]>
  /** Exclude records with an exact match */
  neq?: Maybe<Scalars["DateTime"]>
}

export type DropdownLinkModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  links?: Maybe<LinksFilter>
  title?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<DropdownLinkModelFilter>>>
}

export enum DropdownLinkModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC"
}

/** Record of type Dropdown Link (dropdown_link) */
export type DropdownLinkRecord = {
  __typename?: "DropdownLinkRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  links: Array<LinkRecord>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Dropdown Link (dropdown_link) */
export type DropdownLinkRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type [UNUSED] Ecosystem - Find a Partner Page (ecosystem_find_a_partner_page) */
export type EcosystemFindAPartnerPageRecord = {
  __typename?: "EcosystemFindAPartnerPageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  content: Array<SectionBlockV2Record>
  createdAt: Scalars["DateTime"]
  description?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  integratorsBronze: Array<CompanyRecord>
  integratorsGold: Array<CompanyRecord>
  integratorsLabel?: Maybe<Scalars["String"]>
  integratorsSilver: Array<CompanyRecord>
  integratorsTooltip?: Maybe<Scalars["String"]>
  metadata?: Maybe<SeoField>
  resellersBronze: Array<CompanyRecord>
  resellersGold: Array<CompanyRecord>
  resellersLabel?: Maybe<Scalars["String"]>
  resellersSilver: Array<CompanyRecord>
  resellersTooltip?: Maybe<Scalars["String"]>
  title?: Maybe<Scalars["String"]>
  trainers: Array<CompanyRecord>
  trainersLabel?: Maybe<Scalars["String"]>
  trainersTooltip?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type [UNUSED] Ecosystem - Find a Partner Page (ecosystem_find_a_partner_page) */
export type EcosystemFindAPartnerPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type [UNUSED] Ecosystem - Find a Partner Page (ecosystem_find_a_partner_page) */
export type EcosystemFindAPartnerPageRecordDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type [UNUSED] Ecosystem - Find a Partner Page (ecosystem_find_a_partner_page) */
export type EcosystemFindAPartnerPageRecordIntegratorsTooltipArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type [UNUSED] Ecosystem - Find a Partner Page (ecosystem_find_a_partner_page) */
export type EcosystemFindAPartnerPageRecordResellersTooltipArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type [UNUSED] Ecosystem - Find a Partner Page (ecosystem_find_a_partner_page) */
export type EcosystemFindAPartnerPageRecordTrainersTooltipArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Ecosystem - Landing Page (ecosystem_landing_page) */
export type EcosystemLandingPageRecord = {
  __typename?: "EcosystemLandingPageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  content: Array<SectionBlockV2Record>
  createdAt: Scalars["DateTime"]
  ctaButtonsTest: Array<SbcButtonRecord>
  ctaHeadlineTest?: Maybe<SbcSectionHeaderRecord>
  hero?: Maybe<HeroSectionRecord>
  id: Scalars["ItemId"]
  infrastructuresInfoTest?: Maybe<SbcTextAndContentRecord>
  metadata?: Maybe<SeoField>
  partnerNetworkInfoTest?: Maybe<SbcTextAndContentRecord>
  technologyIntegrationsInfoTest?: Maybe<SbcTextAndContentRecord>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Ecosystem - Landing Page (ecosystem_landing_page) */
export type EcosystemLandingPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type EmbeddedPodcastSectionModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  googlePlayMusicUrl?: Maybe<StringFilter>
  soundcloudMainUrl?: Maybe<StringFilter>
  itunesPodcastLink?: Maybe<StringFilter>
  subscribeTitle?: Maybe<StringFilter>
  soundcloudId?: Maybe<StringFilter>
  spotifyLink?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<EmbeddedPodcastSectionModelFilter>>>
}

export enum EmbeddedPodcastSectionModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  GooglePlayMusicUrlAsc = "googlePlayMusicUrl_ASC",
  GooglePlayMusicUrlDesc = "googlePlayMusicUrl_DESC",
  SoundcloudMainUrlAsc = "soundcloudMainUrl_ASC",
  SoundcloudMainUrlDesc = "soundcloudMainUrl_DESC",
  ItunesPodcastLinkAsc = "itunesPodcastLink_ASC",
  ItunesPodcastLinkDesc = "itunesPodcastLink_DESC",
  SubscribeTitleAsc = "subscribeTitle_ASC",
  SubscribeTitleDesc = "subscribeTitle_DESC",
  SoundcloudIdAsc = "soundcloudId_ASC",
  SoundcloudIdDesc = "soundcloudId_DESC",
  SpotifyLinkAsc = "spotifyLink_ASC",
  SpotifyLinkDesc = "spotifyLink_DESC"
}

/** Record of type Embedded Audio Section (embedded_podcast_section) */
export type EmbeddedPodcastSectionRecord = {
  __typename?: "EmbeddedPodcastSectionRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  googlePlayMusicUrl?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  itunesPodcastLink?: Maybe<Scalars["String"]>
  soundcloudId?: Maybe<Scalars["String"]>
  soundcloudMainUrl?: Maybe<Scalars["String"]>
  spotifyLink?: Maybe<Scalars["String"]>
  subscribeTitle?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Embedded Audio Section (embedded_podcast_section) */
export type EmbeddedPodcastSectionRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type EmbeddedSlidesSectionModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  slideshareEmbedLink?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<EmbeddedSlidesSectionModelFilter>>>
}

export enum EmbeddedSlidesSectionModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  SlideshareEmbedLinkAsc = "slideshareEmbedLink_ASC",
  SlideshareEmbedLinkDesc = "slideshareEmbedLink_DESC"
}

/** Record of type Embedded Slides Section (embedded_slides_section) */
export type EmbeddedSlidesSectionRecord = {
  __typename?: "EmbeddedSlidesSectionRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  slideshareEmbedLink?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Embedded Slides Section (embedded_slides_section) */
export type EmbeddedSlidesSectionRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Employee Nav Link (employee_nav_link) */
export type EmployeeNavLinkRecord = {
  __typename?: "EmployeeNavLinkRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  external?: Maybe<Scalars["BooleanType"]>
  id: Scalars["ItemId"]
  titleDesktop?: Maybe<Scalars["String"]>
  titleMobile?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
  url?: Maybe<Scalars["String"]>
}

/** Record of type Employee Nav Link (employee_nav_link) */
export type EmployeeNavLinkRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type EmployeePageModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  content?: Maybe<LinksFilter>
  miniHeroDescription?: Maybe<TextFilter>
  miniHeroTitle?: Maybe<StringFilter>
  hero?: Maybe<LinkFilter>
  internalTitle?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<EmployeePageModelFilter>>>
}

export enum EmployeePageModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  MiniHeroTitleAsc = "miniHeroTitle_ASC",
  MiniHeroTitleDesc = "miniHeroTitle_DESC",
  InternalTitleAsc = "internalTitle_ASC",
  InternalTitleDesc = "internalTitle_DESC"
}

/** Record of type Employee Page (employee_page) */
export type EmployeePageRecord = {
  __typename?: "EmployeePageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  content: Array<HashiconfSectionBlockRecord>
  createdAt: Scalars["DateTime"]
  hero?: Maybe<HeroSectionRecord>
  id: Scalars["ItemId"]
  internalTitle?: Maybe<Scalars["String"]>
  miniHeroDescription?: Maybe<Scalars["String"]>
  miniHeroTitle?: Maybe<Scalars["String"]>
  nav?: Maybe<Array<Maybe<EmployeeNavLinkRecord>>>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Employee Page (employee_page) */
export type EmployeePageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Employee Page (employee_page) */
export type EmployeePageRecordMiniHeroDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type EnterpriseFeaturesCategoryModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  title?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<EnterpriseFeaturesCategoryModelFilter>>>
}

export enum EnterpriseFeaturesCategoryModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC"
}

/** Record of type Enterprise Features Category (enterprise_features_category) */
export type EnterpriseFeaturesCategoryRecord = {
  __typename?: "EnterpriseFeaturesCategoryRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  features?: Maybe<Array<Maybe<FeatureRecord>>>
  id: Scalars["ItemId"]
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Enterprise Features Category (enterprise_features_category) */
export type EnterpriseFeaturesCategoryRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type EnterprisePricingSectionModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  packageOptions?: Maybe<LinksFilter>
  internalName?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<EnterprisePricingSectionModelFilter>>>
}

export enum EnterprisePricingSectionModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  InternalNameAsc = "internalName_ASC",
  InternalNameDesc = "internalName_DESC"
}

/** Record of type Enterprise Pricing Section (enterprise_pricing_section) */
export type EnterprisePricingSectionRecord = {
  __typename?: "EnterprisePricingSectionRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  internalName?: Maybe<Scalars["String"]>
  packageOptions: Array<ProductPricingPlanRecord>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Enterprise Pricing Section (enterprise_pricing_section) */
export type EnterprisePricingSectionRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type EnterpriseProductModelEnterpriseProductPageField =
  | VaultProductPageRecord
  | ConsulProductPageRecord
  | TerraformProductPageRecord
  | NomadProductPageRecord

export type EnterpriseProductModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  position?: Maybe<PositionFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  downloadUrl?: Maybe<StringFilter>
  enterpriseProductPage?: Maybe<LinkFilter>
  accentColor?: Maybe<ColorFilter>
  subtitle?: Maybe<StringFilter>
  logo?: Maybe<FileFilter>
  logoDark?: Maybe<FileFilter>
  slug?: Maybe<SlugFilter>
  name?: Maybe<StringFilter>
  siteUrl?: Maybe<StringFilter>
  colorLogo?: Maybe<FileFilter>
  description?: Maybe<TextFilter>
  githubUrl?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<EnterpriseProductModelFilter>>>
}

export enum EnterpriseProductModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PositionAsc = "position_ASC",
  PositionDesc = "position_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  DownloadUrlAsc = "downloadUrl_ASC",
  DownloadUrlDesc = "downloadUrl_DESC",
  SubtitleAsc = "subtitle_ASC",
  SubtitleDesc = "subtitle_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  SiteUrlAsc = "siteUrl_ASC",
  SiteUrlDesc = "siteUrl_DESC",
  GithubUrlAsc = "githubUrl_ASC",
  GithubUrlDesc = "githubUrl_DESC"
}

export type EnterpriseProductPageModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  position?: Maybe<PositionFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  subnav?: Maybe<LinkFilter>
  product?: Maybe<LinkFilter>
  name?: Maybe<StringFilter>
  draft?: Maybe<BooleanFilter>
  metadata?: Maybe<SeoFilter>
  faqsPreFooterCta?: Maybe<LinkFilter>
  faqs?: Maybe<LinksFilter>
  trialForm?: Maybe<LinkFilter>
  useCasePages?: Maybe<LinksFilter>
  pageContent?: Maybe<LinksFilter>
  alertBanner?: Maybe<LinkFilter>
  OR?: Maybe<Array<Maybe<EnterpriseProductPageModelFilter>>>
}

export enum EnterpriseProductPageModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PositionAsc = "position_ASC",
  PositionDesc = "position_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  DraftAsc = "draft_ASC",
  DraftDesc = "draft_DESC"
}

export type EnterpriseProductPageModelPageContentField =
  | CalloutSectionRecord
  | TextImageSectionRecord
  | VideoSectionRecord
  | HeroSectionRecord
  | ConsulGraphicSectionRecord
  | ProductPackageSectionRecord
  | LargeLogoGridSectionRecord
  | TextHeadlineAndGridSectionRecord
  | HtmlSectionRecord
  | VaultIntegrationSectionRecord
  | TerraformGraphSectionRecord
  | SectionBlockRecord
  | MiniCalloutRecord
  | ImageTextCarouselRecord

/** Record of type Enterprise Product Page (deprecated) (enterprise_product_page) */
export type EnterpriseProductPageRecord = {
  __typename?: "EnterpriseProductPageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  alertBanner?: Maybe<AlertBannerRecord>
  createdAt: Scalars["DateTime"]
  draft?: Maybe<Scalars["BooleanType"]>
  faqs: Array<FaqCategoryRecord>
  faqsPreFooterCta?: Maybe<HeroSectionRecord>
  id: Scalars["ItemId"]
  metadata?: Maybe<SeoField>
  name?: Maybe<Scalars["String"]>
  pageContent: Array<EnterpriseProductPageModelPageContentField>
  position?: Maybe<Scalars["IntType"]>
  product?: Maybe<EnterpriseProductRecord>
  subnav?: Maybe<EnterpriseProductSubnavRecord>
  trialForm?: Maybe<TrialFormPageRecord>
  updatedAt: Scalars["DateTime"]
  useCasePages: Array<EnterpriseProductUseCasePageRecord>
}

/** Record of type Enterprise Product Page (deprecated) (enterprise_product_page) */
export type EnterpriseProductPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Enterprise Product (enterprise_product) */
export type EnterpriseProductRecord = {
  __typename?: "EnterpriseProductRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  accentColor?: Maybe<ColorField>
  colorLogo?: Maybe<FileField>
  createdAt: Scalars["DateTime"]
  description?: Maybe<Scalars["String"]>
  downloadUrl?: Maybe<Scalars["String"]>
  enterpriseProductPage?: Maybe<
    EnterpriseProductModelEnterpriseProductPageField
  >
  githubUrl?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  logo?: Maybe<FileField>
  logoDark?: Maybe<FileField>
  name?: Maybe<Scalars["String"]>
  position?: Maybe<Scalars["IntType"]>
  siteUrl?: Maybe<Scalars["String"]>
  slug?: Maybe<Scalars["String"]>
  subtitle?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Enterprise Product (enterprise_product) */
export type EnterpriseProductRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Enterprise Product (enterprise_product) */
export type EnterpriseProductRecordDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type EnterpriseProductSubnavModelEnterpriseLinksField =
  | LinkRecord
  | UseCasePageDropdownRecord

export type EnterpriseProductSubnavModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  links?: Maybe<LinksFilter>
  productLinks?: Maybe<LinksFilter>
  enterpriseLinks?: Maybe<LinksFilter>
  OR?: Maybe<Array<Maybe<EnterpriseProductSubnavModelFilter>>>
}

export type EnterpriseProductSubnavModelLinksField =
  | LinkRecord
  | UseCasePageDropdownRecord

export enum EnterpriseProductSubnavModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC"
}

export type EnterpriseProductSubnavModelProductLinksField =
  | LinkRecord
  | UseCasePageDropdownRecord

/** Record of type Enterprise Product Subnav (deprecated) (enterprise_product_subnav) */
export type EnterpriseProductSubnavRecord = {
  __typename?: "EnterpriseProductSubnavRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  enterpriseLinks: Array<EnterpriseProductSubnavModelEnterpriseLinksField>
  id: Scalars["ItemId"]
  links: Array<EnterpriseProductSubnavModelLinksField>
  productLinks: Array<EnterpriseProductSubnavModelProductLinksField>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Enterprise Product Subnav (deprecated) (enterprise_product_subnav) */
export type EnterpriseProductSubnavRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type EnterpriseProductUseCasePageModelContentField =
  | HeroSectionRecord
  | SectionBlockRecord

export type EnterpriseProductUseCasePageModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  content?: Maybe<LinksFilter>
  slug?: Maybe<SlugFilter>
  title?: Maybe<StringFilter>
  metadata?: Maybe<SeoFilter>
  OR?: Maybe<Array<Maybe<EnterpriseProductUseCasePageModelFilter>>>
}

export enum EnterpriseProductUseCasePageModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC"
}

/** Record of type Enterprise Product Use Case Page (enterprise_product_use_case_page) */
export type EnterpriseProductUseCasePageRecord = {
  __typename?: "EnterpriseProductUseCasePageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  content: Array<EnterpriseProductUseCasePageModelContentField>
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  metadata?: Maybe<SeoField>
  slug?: Maybe<Scalars["String"]>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Enterprise Product Use Case Page (enterprise_product_use_case_page) */
export type EnterpriseProductUseCasePageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Event CTA (event_ctas_item) */
export type EventCtasItemRecord = {
  __typename?: "EventCtasItemRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  description?: Maybe<Scalars["String"]>
  icon?: Maybe<FileField>
  id: Scalars["ItemId"]
  linkLabel?: Maybe<Scalars["String"]>
  linkUrl?: Maybe<Scalars["String"]>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Event CTA (event_ctas_item) */
export type EventCtasItemRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Event CTA (event_ctas_item) */
export type EventCtasItemRecordDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type EventModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  url?: Maybe<StringFilter>
  location?: Maybe<StringFilter>
  image?: Maybe<FileFilter>
  eventType?: Maybe<LinksFilter>
  title?: Maybe<StringFilter>
  date?: Maybe<DateFilter>
  OR?: Maybe<Array<Maybe<EventModelFilter>>>
}

export enum EventModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  UrlAsc = "url_ASC",
  UrlDesc = "url_DESC",
  LocationAsc = "location_ASC",
  LocationDesc = "location_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  DateAsc = "date_ASC",
  DateDesc = "date_DESC"
}

/** Record of type Event (event) */
export type EventRecord = {
  __typename?: "EventRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  date?: Maybe<Scalars["Date"]>
  eventType: Array<EventTypeRecord>
  id: Scalars["ItemId"]
  image?: Maybe<FileField>
  location?: Maybe<Scalars["String"]>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
  url?: Maybe<Scalars["String"]>
}

/** Record of type Event (event) */
export type EventRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Events Page (events_page) */
export type EventsPageRecord = {
  __typename?: "EventsPageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  description?: Maybe<Scalars["String"]>
  eventCtas?: Maybe<Array<Maybe<EventCtasItemRecord>>>
  events: Array<EventRecord>
  featuredEvents?: Maybe<Array<Maybe<FeaturedEventRecord>>>
  hero?: Maybe<HeroSectionRecord>
  id: Scalars["ItemId"]
  metadata?: Maybe<SeoField>
  showDemoRequest?: Maybe<Scalars["BooleanType"]>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Events Page (events_page) */
export type EventsPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Events Page (events_page) */
export type EventsPageRecordDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type EventTypeModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  position?: Maybe<PositionFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  plural?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<EventTypeModelFilter>>>
}

export enum EventTypeModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PositionAsc = "position_ASC",
  PositionDesc = "position_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  PluralAsc = "plural_ASC",
  PluralDesc = "plural_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC"
}

/** Record of type Event Type (event_type) */
export type EventTypeRecord = {
  __typename?: "EventTypeRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  plural?: Maybe<Scalars["String"]>
  position?: Maybe<Scalars["IntType"]>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Event Type (event_type) */
export type EventTypeRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Example (example) */
export type ExampleRecord = {
  __typename?: "ExampleRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  description?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  image?: Maybe<FileField>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Example (example) */
export type ExampleRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Example (example) */
export type ExampleRecordDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Expandable Text with Photo (expandable_text_with_photo) */
export type ExpandableTextWithPhotoRecord = {
  __typename?: "ExpandableTextWithPhotoRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  image?: Maybe<FileField>
  readLessLinkText?: Maybe<Scalars["String"]>
  readMoreLinkText?: Maybe<Scalars["String"]>
  text?: Maybe<Scalars["String"]>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Expandable Text with Photo (expandable_text_with_photo) */
export type ExpandableTextWithPhotoRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Expandable Text with Photo (expandable_text_with_photo) */
export type ExpandableTextWithPhotoRecordTextArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type ExperienceLevelModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  name?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<ExperienceLevelModelFilter>>>
}

export enum ExperienceLevelModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC"
}

/** Record of type Experience Level (experience_level) */
export type ExperienceLevelRecord = {
  __typename?: "ExperienceLevelRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  name?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Experience Level (experience_level) */
export type ExperienceLevelRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type ExternalResourceModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  metadata?: Maybe<SeoFilter>
  events?: Maybe<LinksFilter>
  organizations?: Maybe<LinksFilter>
  people?: Maybe<LinksFilter>
  product?: Maybe<LinksFilter>
  infrastructureProvider?: Maybe<LinksFilter>
  mediaType?: Maybe<LinkFilter>
  image?: Maybe<FileFilter>
  description?: Maybe<TextFilter>
  draft?: Maybe<BooleanFilter>
  title?: Maybe<StringFilter>
  date?: Maybe<DateFilter>
  industry?: Maybe<LinksFilter>
  contentType?: Maybe<LinkFilter>
  link?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<ExternalResourceModelFilter>>>
}

export enum ExternalResourceModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  DraftAsc = "draft_ASC",
  DraftDesc = "draft_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  DateAsc = "date_ASC",
  DateDesc = "date_DESC",
  LinkAsc = "link_ASC",
  LinkDesc = "link_DESC"
}

export type ExternalResourceModelProductField =
  | OpenSourceToolRecord
  | EnterpriseProductRecord

/** Record of type External Resource (external_resource) */
export type ExternalResourceRecord = {
  __typename?: "ExternalResourceRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  contentType?: Maybe<ResourceContentTypeRecord>
  createdAt: Scalars["DateTime"]
  date?: Maybe<Scalars["Date"]>
  description?: Maybe<Scalars["String"]>
  draft?: Maybe<Scalars["BooleanType"]>
  events: Array<EventRecord>
  id: Scalars["ItemId"]
  image?: Maybe<FileField>
  industry: Array<ResourceIndustryRecord>
  infrastructureProvider: Array<ResourceInfrastructureProviderRecord>
  link?: Maybe<Scalars["String"]>
  mediaType?: Maybe<ResourceMediaTypeRecord>
  metadata?: Maybe<SeoField>
  organizations: Array<CompanyRecord>
  people: Array<PersonRecord>
  product: Array<ExternalResourceModelProductField>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type External Resource (external_resource) */
export type ExternalResourceRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type External Resource (external_resource) */
export type ExternalResourceRecordDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type FaqCategoryModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  title?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<FaqCategoryModelFilter>>>
}

export enum FaqCategoryModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC"
}

/** Record of type FAQ Category (faq_category) */
export type FaqCategoryRecord = {
  __typename?: "FaqCategoryRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  faqs?: Maybe<Array<Maybe<FaqItemRecord>>>
  id: Scalars["ItemId"]
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type FAQ Category (faq_category) */
export type FaqCategoryRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type FAQ Item (faq_item) */
export type FaqItemRecord = {
  __typename?: "FaqItemRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  answer?: Maybe<Scalars["String"]>
  createdAt: Scalars["DateTime"]
  external?: Maybe<Scalars["BooleanType"]>
  id: Scalars["ItemId"]
  question?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
  url?: Maybe<Scalars["String"]>
}

/** Record of type FAQ Item (faq_item) */
export type FaqItemRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type FAQ Item (faq_item) */
export type FaqItemRecordAnswerArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type FAQ (faq) */
export type FaqRecord = {
  __typename?: "FaqRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  answer?: Maybe<Scalars["String"]>
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  question?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type FAQ (faq) */
export type FaqRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type FAQ (faq) */
export type FaqRecordAnswerArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export enum FaviconType {
  Icon = "icon",
  AppleTouchIcon = "appleTouchIcon",
  MsApplication = "msApplication"
}

/** Record of type Featured Event (featured_event) */
export type FeaturedEventRecord = {
  __typename?: "FeaturedEventRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  buttonLabel?: Maybe<Scalars["String"]>
  buttonUrl?: Maybe<Scalars["String"]>
  createdAt: Scalars["DateTime"]
  date?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
  eventLogo?: Maybe<FileField>
  id: Scalars["ItemId"]
  location?: Maybe<Scalars["String"]>
  locationImage?: Maybe<FileField>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Featured Event (featured_event) */
export type FeaturedEventRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Featured Event (featured_event) */
export type FeaturedEventRecordDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Feature (feature) */
export type FeatureRecord = {
  __typename?: "FeatureRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  description?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  isAnUpgradeIn: Array<ProductPricingPlanRecord>
  offeredIn: Array<ProductPricingPlanRecord>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Feature (feature) */
export type FeatureRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Feature (feature) */
export type FeatureRecordDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type FeatureTableColumnModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  title?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<FeatureTableColumnModelFilter>>>
}

export enum FeatureTableColumnModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC"
}

/** Record of type Feature Table Column (feature_table_column) */
export type FeatureTableColumnRecord = {
  __typename?: "FeatureTableColumnRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Feature Table Column (feature_table_column) */
export type FeatureTableColumnRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type FeatureTableModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  applyLink?: Maybe<LinkFilter>
  tabs?: Maybe<LinksFilter>
  title?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<FeatureTableModelFilter>>>
}

export enum FeatureTableModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC"
}

/** Record of type Feature Table (feature_table) */
export type FeatureTableRecord = {
  __typename?: "FeatureTableRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  applyLink?: Maybe<LinkRecord>
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  tabs: Array<FeatureTableTabRecord>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Feature Table (feature_table) */
export type FeatureTableRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type FeatureTableRowModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  columnValues?: Maybe<LinksFilter>
  tooltip?: Maybe<TextFilter>
  title?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<FeatureTableRowModelFilter>>>
}

export enum FeatureTableRowModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC"
}

/** Record of type Feature Table Row (feature_table_row) */
export type FeatureTableRowRecord = {
  __typename?: "FeatureTableRowRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  columnValues: Array<FeatureTableRowValueRecord>
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  title?: Maybe<Scalars["String"]>
  tooltip?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Feature Table Row (feature_table_row) */
export type FeatureTableRowRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Feature Table Row (feature_table_row) */
export type FeatureTableRowRecordTooltipArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type FeatureTableRowValueModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  description?: Maybe<StringFilter>
  column?: Maybe<LinkFilter>
  OR?: Maybe<Array<Maybe<FeatureTableRowValueModelFilter>>>
}

export enum FeatureTableRowValueModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC"
}

/** Record of type Feature Table Row Value (feature_table_row_value) */
export type FeatureTableRowValueRecord = {
  __typename?: "FeatureTableRowValueRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  column?: Maybe<FeatureTableColumnRecord>
  createdAt: Scalars["DateTime"]
  description?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  updatedAt: Scalars["DateTime"]
}

/** Record of type Feature Table Row Value (feature_table_row_value) */
export type FeatureTableRowValueRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type FeatureTableTabModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  rows?: Maybe<LinksFilter>
  columns?: Maybe<LinksFilter>
  title?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<FeatureTableTabModelFilter>>>
}

export enum FeatureTableTabModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC"
}

/** Record of type Feature Table Tab (feature_table_tab) */
export type FeatureTableTabRecord = {
  __typename?: "FeatureTableTabRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  columns: Array<FeatureTableColumnRecord>
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  rows: Array<FeatureTableRowRecord>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Feature Table Tab (feature_table_tab) */
export type FeatureTableTabRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type FileField = {
  __typename?: "FileField"
  _createdAt: Scalars["DateTime"]
  _updatedAt: Scalars["DateTime"]
  alt?: Maybe<Scalars["String"]>
  author?: Maybe<Scalars["String"]>
  basename: Scalars["String"]
  blurUpThumb?: Maybe<Scalars["String"]>
  blurhash?: Maybe<Scalars["String"]>
  colors: Array<Maybe<ColorField>>
  copyright?: Maybe<Scalars["String"]>
  customData?: Maybe<Scalars["CustomData"]>
  exifInfo?: Maybe<Scalars["CustomData"]>
  filename: Scalars["String"]
  format: Scalars["String"]
  height?: Maybe<Scalars["IntType"]>
  id: Scalars["UploadId"]
  mimeType: Scalars["String"]
  notes?: Maybe<Scalars["String"]>
  responsiveImage?: Maybe<ResponsiveImage>
  size: Scalars["IntType"]
  smartTags: Array<Maybe<Scalars["String"]>>
  tags: Array<Maybe<Scalars["String"]>>
  title?: Maybe<Scalars["String"]>
  url: Scalars["String"]
  video?: Maybe<UploadVideoField>
  width?: Maybe<Scalars["IntType"]>
}

export type FileFieldAltArgs = {
  locale?: Maybe<SiteLocale>
}

export type FileFieldBlurUpThumbArgs = {
  punch?: Maybe<Scalars["Float"]>
  size?: Maybe<Scalars["Int"]>
  quality?: Maybe<Scalars["Int"]>
  imgixParams?: Maybe<ImgixParams>
}

export type FileFieldCustomDataArgs = {
  locale?: Maybe<SiteLocale>
}

export type FileFieldResponsiveImageArgs = {
  imgixParams?: Maybe<ImgixParams>
  sizes?: Maybe<Scalars["String"]>
}

export type FileFieldTitleArgs = {
  locale?: Maybe<SiteLocale>
}

export type FileFieldUrlArgs = {
  imgixParams?: Maybe<ImgixParams>
}

/** Specifies how to filter Single-file/image fields */
export type FileFilter = {
  /** Search for records with an exact match. The specified value must be an Upload ID */
  eq?: Maybe<Scalars["UploadId"]>
  /** Exclude records with an exact match. The specified value must be an Upload ID */
  neq?: Maybe<Scalars["UploadId"]>
  /** Filter records that have one of the specified uploads */
  in?: Maybe<Array<Maybe<Scalars["UploadId"]>>>
  /** Filter records that do not have one of the specified uploads */
  notIn?: Maybe<Array<Maybe<Scalars["UploadId"]>>>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars["BooleanType"]>
}

/** Specifies how to filter Floating-point fields */
export type FloatFilter = {
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: Maybe<Scalars["FloatType"]>
  /** Filter records with a value that's less than the one specified */
  lt?: Maybe<Scalars["FloatType"]>
  /** Filter records with a value that's greater than or equal to the one specified */
  gte?: Maybe<Scalars["FloatType"]>
  /** Filter records with a value that's less or equal than the one specified */
  lte?: Maybe<Scalars["FloatType"]>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars["BooleanType"]>
  /** Search for records with an exact match */
  eq?: Maybe<Scalars["FloatType"]>
  /** Exclude records with an exact match */
  neq?: Maybe<Scalars["FloatType"]>
}

/** Record of type Form Checkbox Field (form_checkbox_field) */
export type FormCheckboxFieldRecord = {
  __typename?: "FormCheckboxFieldRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  label?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  required?: Maybe<Scalars["BooleanType"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Form Checkbox Field (form_checkbox_field) */
export type FormCheckboxFieldRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type FormContactTypeModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  contactType?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<FormContactTypeModelFilter>>>
}

export enum FormContactTypeModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  ContactTypeAsc = "contactType_ASC",
  ContactTypeDesc = "contactType_DESC"
}

/** Record of type Form Contact Type (form_contact_type) */
export type FormContactTypeRecord = {
  __typename?: "FormContactTypeRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  contactType?: Maybe<Scalars["String"]>
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  updatedAt: Scalars["DateTime"]
}

/** Record of type Form Contact Type (form_contact_type) */
export type FormContactTypeRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type FormContactTypeRecordMultiLocaleField = {
  __typename?: "FormContactTypeRecordMultiLocaleField"
  locale?: Maybe<SiteLocale>
  value?: Maybe<FormContactTypeRecord>
}

/** Record of type Form Email Field (form_email_field) */
export type FormEmailFieldRecord = {
  __typename?: "FormEmailFieldRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  label?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  placeholder?: Maybe<Scalars["String"]>
  required?: Maybe<Scalars["BooleanType"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Form Email Field (form_email_field) */
export type FormEmailFieldRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Form Hidden Field (form_hidden_field) */
export type FormHiddenFieldRecord = {
  __typename?: "FormHiddenFieldRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  name?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
  value?: Maybe<Scalars["String"]>
}

/** Record of type Form Hidden Field (form_hidden_field) */
export type FormHiddenFieldRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Form Multi Select Field (form_multi_select_field) */
export type FormMultiSelectFieldRecord = {
  __typename?: "FormMultiSelectFieldRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  label?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  options: Array<FormMultiSelectOptionRecord>
  required?: Maybe<Scalars["BooleanType"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Form Multi Select Field (form_multi_select_field) */
export type FormMultiSelectFieldRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type FormMultiSelectOptionModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  name?: Maybe<StringFilter>
  label?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<FormMultiSelectOptionModelFilter>>>
}

export enum FormMultiSelectOptionModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  LabelAsc = "label_ASC",
  LabelDesc = "label_DESC"
}

/** Record of type Form Multi Select Option (form_multi_select_option) */
export type FormMultiSelectOptionRecord = {
  __typename?: "FormMultiSelectOptionRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  label?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Form Multi Select Option (form_multi_select_option) */
export type FormMultiSelectOptionRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Form Text Area Field (form_text_area_field) */
export type FormTextAreaFieldRecord = {
  __typename?: "FormTextAreaFieldRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  label?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  placeholder?: Maybe<Scalars["String"]>
  required?: Maybe<Scalars["BooleanType"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Form Text Area Field (form_text_area_field) */
export type FormTextAreaFieldRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Form Text Field (form_text_field) */
export type FormTextFieldRecord = {
  __typename?: "FormTextFieldRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  label?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  placeholder?: Maybe<Scalars["String"]>
  required?: Maybe<Scalars["BooleanType"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Form Text Field (form_text_field) */
export type FormTextFieldRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type 404 Page (fourohfour_page) */
export type FourohfourPageRecord = {
  __typename?: "FourohfourPageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  hero?: Maybe<HeroSectionRecord>
  id: Scalars["ItemId"]
  metadata?: Maybe<SeoField>
  updatedAt: Scalars["DateTime"]
}

/** Record of type 404 Page (fourohfour_page) */
export type FourohfourPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Specifies how to filter Multiple files/images field */
export type GalleryFilter = {
  /** Search for records with an exact match. The specified values must be Upload IDs */
  eq?: Maybe<Array<Maybe<Scalars["UploadId"]>>>
  /** Filter records that have all of the specified uploads. The specified values must be Upload IDs */
  allIn?: Maybe<Array<Maybe<Scalars["UploadId"]>>>
  /** Filter records that have one of the specified uploads. The specified values must be Upload IDs */
  anyIn?: Maybe<Array<Maybe<Scalars["UploadId"]>>>
  /** Filter records that do not have any of the specified uploads. The specified values must be Upload IDs */
  notIn?: Maybe<Array<Maybe<Scalars["UploadId"]>>>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars["BooleanType"]>
}

/** Record of type Global Demo Form (global_demo_form) */
export type GlobalDemoFormRecord = {
  __typename?: "GlobalDemoFormRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  form?: Maybe<SalesFormRecord>
  id: Scalars["ItemId"]
  updatedAt: Scalars["DateTime"]
}

/** Record of type Global Demo Form (global_demo_form) */
export type GlobalDemoFormRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Global Footer (Basic) (global_footer_basic) */
export type GlobalFooterBasicRecord = {
  __typename?: "GlobalFooterBasicRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  links: Array<LinkRecord>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Global Footer (Basic) (global_footer_basic) */
export type GlobalFooterBasicRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Global Footer (global_footer) */
export type GlobalFooterRecord = {
  __typename?: "GlobalFooterRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  allProductLinks: Array<LinkRecord>
  company?: Maybe<Scalars["String"]>
  companyLinks: Array<LinkRecord>
  copyrightText?: Maybe<Scalars["String"]>
  createdAt: Scalars["DateTime"]
  disclaimerLinks: Array<LinkRecord>
  id: Scalars["ItemId"]
  openSourceLinks: Array<OpenSourceToolRecord>
  partnerLinks: Array<LinkRecord>
  partners?: Maybe<Scalars["String"]>
  primaryLogo?: Maybe<FileField>
  productLinks: Array<EnterpriseProductRecord>
  products?: Maybe<Scalars["String"]>
  resources?: Maybe<Scalars["String"]>
  resourcesLinks: Array<LinkRecord>
  socialLinks: Array<SocialNetworkRecord>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Global Footer (global_footer) */
export type GlobalFooterRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Global Navigation (global_navigation) */
export type GlobalNavigationRecord = {
  __typename?: "GlobalNavigationRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  companyImageLockup?: Maybe<ImageLockupRecord>
  companyLinks: Array<IconLinkRecord>
  createdAt: Scalars["DateTime"]
  ctaButton?: Maybe<Button2Record>
  enterpriseProducts: Array<EnterpriseProductRecord>
  id: Scalars["ItemId"]
  navigationLinks: Array<LinkRecord>
  openSourceImageLockup?: Maybe<ImageLockupRecord>
  openSourceTools: Array<OpenSourceToolRecord>
  partnerImageLockup?: Maybe<ImageLockupRecord>
  partnerLinks: Array<IconLinkRecord>
  primaryLogo?: Maybe<FileField>
  productsImageLockup?: Maybe<ImageLockupRecord>
  resourceLinks: Array<IconLinkRecord>
  resourcesImageLockup?: Maybe<ImageLockupRecord>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Global Navigation (global_navigation) */
export type GlobalNavigationRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type GlobalSeoField = {
  __typename?: "GlobalSeoField"
  facebookPageUrl?: Maybe<Scalars["String"]>
  fallbackSeo?: Maybe<SeoField>
  siteName?: Maybe<Scalars["String"]>
  titleSuffix?: Maybe<Scalars["String"]>
  twitterAccount?: Maybe<Scalars["String"]>
}

/** Record of type Guest Blog Text (guest_blog_text) */
export type GuestBlogTextRecord = {
  __typename?: "GuestBlogTextRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  text?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Guest Blog Text (guest_blog_text) */
export type GuestBlogTextRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Guest Blog Text (guest_blog_text) */
export type GuestBlogTextRecordTextArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type HashiconfBasicPageModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  metadata?: Maybe<SeoFilter>
  sidebarContent?: Maybe<TextFilter>
  content?: Maybe<TextFilter>
  leadInContent?: Maybe<TextFilter>
  slug?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  systemTitle?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<HashiconfBasicPageModelFilter>>>
}

export enum HashiconfBasicPageModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  SystemTitleAsc = "systemTitle_ASC",
  SystemTitleDesc = "systemTitle_DESC"
}

/** Record of type HashiConf Basic Page (hashiconf_basic_page) */
export type HashiconfBasicPageRecord = {
  __typename?: "HashiconfBasicPageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  content?: Maybe<Scalars["String"]>
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  leadInContent?: Maybe<Scalars["String"]>
  metadata?: Maybe<SeoField>
  sidebarContent?: Maybe<Scalars["String"]>
  slug?: Maybe<Scalars["String"]>
  systemTitle?: Maybe<Scalars["String"]>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type HashiConf Basic Page (hashiconf_basic_page) */
export type HashiconfBasicPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type HashiConf Basic Page (hashiconf_basic_page) */
export type HashiconfBasicPageRecordContentArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type HashiConf Basic Page (hashiconf_basic_page) */
export type HashiconfBasicPageRecordLeadInContentArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type HashiConf Basic Page (hashiconf_basic_page) */
export type HashiconfBasicPageRecordSidebarContentArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type HashiconfFeaturedSpeakersSectionModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  secondaryText?: Maybe<TextFilter>
  speakers?: Maybe<LinksFilter>
  text?: Maybe<TextFilter>
  OR?: Maybe<Array<Maybe<HashiconfFeaturedSpeakersSectionModelFilter>>>
}

export enum HashiconfFeaturedSpeakersSectionModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC"
}

/** Record of type HashiConf Featured Speakers Section (hashiconf_featured_speakers_section) */
export type HashiconfFeaturedSpeakersSectionRecord = {
  __typename?: "HashiconfFeaturedSpeakersSectionRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  secondaryText?: Maybe<Scalars["String"]>
  speakers: Array<HashiconfSpeakerRecord>
  text?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type HashiConf Featured Speakers Section (hashiconf_featured_speakers_section) */
export type HashiconfFeaturedSpeakersSectionRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type HashiConf Featured Speakers Section (hashiconf_featured_speakers_section) */
export type HashiconfFeaturedSpeakersSectionRecordSecondaryTextArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type HashiConf Featured Speakers Section (hashiconf_featured_speakers_section) */
export type HashiconfFeaturedSpeakersSectionRecordTextArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type HashiconfLandingPageModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  aboutLink?: Maybe<LinkFilter>
  aboutContent?: Maybe<TextFilter>
  aboutHeading?: Maybe<StringFilter>
  heroDescription?: Maybe<TextFilter>
  nav?: Maybe<LinksFilter>
  subPages?: Maybe<LinksFilter>
  title?: Maybe<StringFilter>
  aboutImage?: Maybe<FileFilter>
  aboutImage1?: Maybe<FileFilter>
  aboutImage2?: Maybe<FileFilter>
  aboutImage3?: Maybe<FileFilter>
  content?: Maybe<LinksFilter>
  metadata?: Maybe<SeoFilter>
  preFooterNav?: Maybe<LinksFilter>
  heroHelpText?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<HashiconfLandingPageModelFilter>>>
}

export enum HashiconfLandingPageModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  AboutHeadingAsc = "aboutHeading_ASC",
  AboutHeadingDesc = "aboutHeading_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  HeroHelpTextAsc = "heroHelpText_ASC",
  HeroHelpTextDesc = "heroHelpText_DESC"
}

export type HashiconfLandingPageModelSubPagesField =
  | HashiconfBasicPageRecord
  | HashiconfSectionBlockPageRecord

/** Record of type HashiConf Landing Page (hashiconf_landing_page) */
export type HashiconfLandingPageRecord = {
  __typename?: "HashiconfLandingPageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  aboutContent?: Maybe<Scalars["String"]>
  aboutHeading?: Maybe<Scalars["String"]>
  aboutImage?: Maybe<FileField>
  aboutImage1?: Maybe<FileField>
  aboutImage2?: Maybe<FileField>
  aboutImage3?: Maybe<FileField>
  aboutLink?: Maybe<LinkRecord>
  content: Array<HashiconfSectionBlockRecord>
  createdAt: Scalars["DateTime"]
  heroDescription?: Maybe<Scalars["String"]>
  heroHelpText?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  metadata?: Maybe<SeoField>
  nav: Array<LinkRecord>
  preFooterNav: Array<LinkRecord>
  subPages: Array<HashiconfLandingPageModelSubPagesField>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type HashiConf Landing Page (hashiconf_landing_page) */
export type HashiconfLandingPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type HashiConf Landing Page (hashiconf_landing_page) */
export type HashiconfLandingPageRecordAboutContentArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type HashiConf Landing Page (hashiconf_landing_page) */
export type HashiconfLandingPageRecordHeroDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type HashiconfLiveStreamPageModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  headlineContent?: Maybe<TextFilter>
  metadata?: Maybe<SeoFilter>
  internalTitle?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<HashiconfLiveStreamPageModelFilter>>>
}

export enum HashiconfLiveStreamPageModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  InternalTitleAsc = "internalTitle_ASC",
  InternalTitleDesc = "internalTitle_DESC"
}

/** Record of type HashiConf Live Stream Page (hashiconf_live_stream_page) */
export type HashiconfLiveStreamPageRecord = {
  __typename?: "HashiconfLiveStreamPageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  headlineContent?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  internalTitle?: Maybe<Scalars["String"]>
  metadata?: Maybe<SeoField>
  updatedAt: Scalars["DateTime"]
}

/** Record of type HashiConf Live Stream Page (hashiconf_live_stream_page) */
export type HashiconfLiveStreamPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type HashiConf Live Stream Page (hashiconf_live_stream_page) */
export type HashiconfLiveStreamPageRecordHeadlineContentArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type HashiconfModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  position?: Maybe<PositionFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  trainingCalloutText?: Maybe<TextFilter>
  trainingCalloutButtons?: Maybe<LinksFilter>
  landingPage?: Maybe<LinkFilter>
  title?: Maybe<StringFilter>
  scheduleItems?: Maybe<LinksFilter>
  speakersPage?: Maybe<LinkFilter>
  schedulePage?: Maybe<LinkFilter>
  employeePage?: Maybe<LinkFilter>
  twitterHandle?: Maybe<StringFilter>
  trainingDayPage?: Maybe<LinkFilter>
  landing2020Page?: Maybe<LinkFilter>
  location?: Maybe<StringFilter>
  buyTicketsLink?: Maybe<LinkFilter>
  liveStreamPage?: Maybe<LinkFilter>
  dates?: Maybe<StringFilter>
  logoWhite?: Maybe<FileFilter>
  logo?: Maybe<FileFilter>
  twitterHashtag?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<HashiconfModelFilter>>>
}

export enum HashiconfModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PositionAsc = "position_ASC",
  PositionDesc = "position_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  TwitterHandleAsc = "twitterHandle_ASC",
  TwitterHandleDesc = "twitterHandle_DESC",
  LocationAsc = "location_ASC",
  LocationDesc = "location_DESC",
  DatesAsc = "dates_ASC",
  DatesDesc = "dates_DESC",
  TwitterHashtagAsc = "twitterHashtag_ASC",
  TwitterHashtagDesc = "twitterHashtag_DESC"
}

export type HashiconfModelScheduleItemsField =
  | HashiconfTrainingRecord
  | HashiconfSessionRecord

/** Record of type HashiConf (hashiconf) */
export type HashiconfRecord = {
  __typename?: "HashiconfRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  buyTicketsLink?: Maybe<LinkRecord>
  createdAt: Scalars["DateTime"]
  dates?: Maybe<Scalars["String"]>
  employeePage?: Maybe<EmployeePageRecord>
  id: Scalars["ItemId"]
  landing2020Page?: Maybe<HashiconfLandingPageRecord>
  landingPage?: Maybe<HashiconfLandingPageRecord>
  liveStreamPage?: Maybe<HashiconfLiveStreamPageRecord>
  location?: Maybe<Scalars["String"]>
  logo?: Maybe<FileField>
  logoWhite?: Maybe<FileField>
  position?: Maybe<Scalars["IntType"]>
  scheduleItems: Array<HashiconfModelScheduleItemsField>
  schedulePage?: Maybe<HashiconfSchedulePageRecord>
  speakersPage?: Maybe<HashiconfSpeakersPageRecord>
  title?: Maybe<Scalars["String"]>
  trainingCalloutButtons: Array<SbcButtonRecord>
  trainingCalloutText?: Maybe<Scalars["String"]>
  trainingDayPage?: Maybe<HashiconfTrainingDayRecord>
  twitterHandle?: Maybe<Scalars["String"]>
  twitterHashtag?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type HashiConf (hashiconf) */
export type HashiconfRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type HashiConf (hashiconf) */
export type HashiconfRecordTrainingCalloutTextArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type HashiconfScheduleDayModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  date?: Maybe<DateFilter>
  internalTitle?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<HashiconfScheduleDayModelFilter>>>
}

export enum HashiconfScheduleDayModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  DateAsc = "date_ASC",
  DateDesc = "date_DESC",
  InternalTitleAsc = "internalTitle_ASC",
  InternalTitleDesc = "internalTitle_DESC"
}

/** Record of type HashiConf Schedule Day (hashiconf_schedule_day) */
export type HashiconfScheduleDayRecord = {
  __typename?: "HashiconfScheduleDayRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  date?: Maybe<Scalars["Date"]>
  id: Scalars["ItemId"]
  internalTitle?: Maybe<Scalars["String"]>
  schedule?: Maybe<Array<Maybe<HashiconfScheduleEventRecord>>>
  updatedAt: Scalars["DateTime"]
}

/** Record of type HashiConf Schedule Day (hashiconf_schedule_day) */
export type HashiconfScheduleDayRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type HashiconfScheduleEventModelScheduleItemField =
  | HashiconfTrainingRecord
  | HashiconfSessionRecord

/** Record of type Schedule Event (hashiconf_schedule_event) */
export type HashiconfScheduleEventRecord = {
  __typename?: "HashiconfScheduleEventRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  description?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  room?: Maybe<LocationRoomRecord>
  scheduleItem?: Maybe<HashiconfScheduleEventModelScheduleItemField>
  startTime?: Maybe<Scalars["String"]>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
  venue?: Maybe<LocationVenueRecord>
}

/** Record of type Schedule Event (hashiconf_schedule_event) */
export type HashiconfScheduleEventRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Schedule Event (hashiconf_schedule_event) */
export type HashiconfScheduleEventRecordDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type HashiconfScheduleItemModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  note?: Maybe<TextFilter>
  description?: Maybe<TextFilter>
  location?: Maybe<StringFilter>
  time?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<HashiconfScheduleItemModelFilter>>>
}

export enum HashiconfScheduleItemModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  LocationAsc = "location_ASC",
  LocationDesc = "location_DESC",
  TimeAsc = "time_ASC",
  TimeDesc = "time_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC"
}

/** Record of type HashiConf Schedule Item (hashiconf_schedule_item) */
export type HashiconfScheduleItemRecord = {
  __typename?: "HashiconfScheduleItemRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  description?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  location?: Maybe<Scalars["String"]>
  note?: Maybe<Scalars["String"]>
  time?: Maybe<Scalars["String"]>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type HashiConf Schedule Item (hashiconf_schedule_item) */
export type HashiconfScheduleItemRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type HashiConf Schedule Item (hashiconf_schedule_item) */
export type HashiconfScheduleItemRecordDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type HashiConf Schedule Item (hashiconf_schedule_item) */
export type HashiconfScheduleItemRecordNoteArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type HashiconfScheduleLiteSectionModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  internalName?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<HashiconfScheduleLiteSectionModelFilter>>>
}

export enum HashiconfScheduleLiteSectionModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  InternalNameAsc = "internalName_ASC",
  InternalNameDesc = "internalName_DESC"
}

/** Record of type HashiConf Schedule Lite Section (hashiconf_schedule_lite_section) */
export type HashiconfScheduleLiteSectionRecord = {
  __typename?: "HashiconfScheduleLiteSectionRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  internalName?: Maybe<Scalars["String"]>
  scheduleLiteItems?: Maybe<Array<Maybe<ScheduleLiteItemRecord>>>
  updatedAt: Scalars["DateTime"]
}

/** Record of type HashiConf Schedule Lite Section (hashiconf_schedule_lite_section) */
export type HashiconfScheduleLiteSectionRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type HashiconfSchedulePageModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  days?: Maybe<LinksFilter>
  header?: Maybe<LinkFilter>
  internalTitle?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<HashiconfSchedulePageModelFilter>>>
}

export enum HashiconfSchedulePageModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  InternalTitleAsc = "internalTitle_ASC",
  InternalTitleDesc = "internalTitle_DESC"
}

/** Record of type HashiConf Schedule Page (hashiconf_schedule_page) */
export type HashiconfSchedulePageRecord = {
  __typename?: "HashiconfSchedulePageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  days: Array<HashiconfScheduleDayRecord>
  header?: Maybe<SbcSectionHeaderRecord>
  id: Scalars["ItemId"]
  internalTitle?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type HashiConf Schedule Page (hashiconf_schedule_page) */
export type HashiconfSchedulePageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type HashiconfSectionBlockModelContentField =
  | FaqCategoryRecord
  | SbcSectionHeaderRecord
  | SbcTextRecord
  | SbcMultiButtonRecord
  | SbcTextAndContentRecord
  | HashiconfTextAndFullImageRecord
  | HashiconfSponsorSectionRecord
  | HashiconfFeaturedSpeakersSectionRecord
  | SbcLinkedTextSummaryListRecord
  | HashiconfScheduleLiteSectionRecord

export type HashiconfSectionBlockModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  content?: Maybe<LinksFilter>
  sid?: Maybe<StringFilter>
  name?: Maybe<StringFilter>
  theme?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<HashiconfSectionBlockModelFilter>>>
}

export enum HashiconfSectionBlockModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  SidAsc = "sid_ASC",
  SidDesc = "sid_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  ThemeAsc = "theme_ASC",
  ThemeDesc = "theme_DESC"
}

export type HashiconfSectionBlockPageModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  metadata?: Maybe<SeoFilter>
  content?: Maybe<LinksFilter>
  slug?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<HashiconfSectionBlockPageModelFilter>>>
}

export enum HashiconfSectionBlockPageModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC"
}

/** Record of type HashiConf Section Block Page (hashiconf_section_block_page) */
export type HashiconfSectionBlockPageRecord = {
  __typename?: "HashiconfSectionBlockPageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  content: Array<HashiconfSectionBlockRecord>
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  metadata?: Maybe<SeoField>
  slug?: Maybe<Scalars["String"]>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type HashiConf Section Block Page (hashiconf_section_block_page) */
export type HashiconfSectionBlockPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type HashiConf Section Block (hashiconf_section_block) */
export type HashiconfSectionBlockRecord = {
  __typename?: "HashiconfSectionBlockRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  content: Array<HashiconfSectionBlockModelContentField>
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  name?: Maybe<Scalars["String"]>
  sid?: Maybe<Scalars["String"]>
  theme?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type HashiConf Section Block (hashiconf_section_block) */
export type HashiconfSectionBlockRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type HashiconfSessionModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  experienceLevels?: Maybe<LinksFilter>
  productTypes?: Maybe<LinksFilter>
  products?: Maybe<LinksFilter>
  metadata?: Maybe<SeoFilter>
  content?: Maybe<TextFilter>
  trainer?: Maybe<StringFilter>
  room?: Maybe<LinkFilter>
  endTime?: Maybe<StringFilter>
  startTime?: Maybe<StringFilter>
  date?: Maybe<DateFilter>
  location?: Maybe<StringFilter>
  slug?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  internalTitle?: Maybe<StringFilter>
  venue?: Maybe<LinkFilter>
  speakers?: Maybe<LinksFilter>
  OR?: Maybe<Array<Maybe<HashiconfSessionModelFilter>>>
}

export enum HashiconfSessionModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  TrainerAsc = "trainer_ASC",
  TrainerDesc = "trainer_DESC",
  EndTimeAsc = "endTime_ASC",
  EndTimeDesc = "endTime_DESC",
  StartTimeAsc = "startTime_ASC",
  StartTimeDesc = "startTime_DESC",
  DateAsc = "date_ASC",
  DateDesc = "date_DESC",
  LocationAsc = "location_ASC",
  LocationDesc = "location_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  InternalTitleAsc = "internalTitle_ASC",
  InternalTitleDesc = "internalTitle_DESC"
}

/** Record of type HashiConf Session (hashiconf_session) */
export type HashiconfSessionRecord = {
  __typename?: "HashiconfSessionRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  content?: Maybe<Scalars["String"]>
  createdAt: Scalars["DateTime"]
  date?: Maybe<Scalars["Date"]>
  endTime?: Maybe<Scalars["String"]>
  experienceLevels: Array<ExperienceLevelRecord>
  id: Scalars["ItemId"]
  internalTitle?: Maybe<Scalars["String"]>
  location?: Maybe<Scalars["String"]>
  metadata?: Maybe<SeoField>
  productTypes: Array<ProductTypeRecord>
  products: Array<OpenSourceToolRecord>
  room?: Maybe<LocationRoomRecord>
  slug?: Maybe<Scalars["String"]>
  speakers: Array<HashiconfSpeakerRecord>
  startTime?: Maybe<Scalars["String"]>
  title?: Maybe<Scalars["String"]>
  trainer?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
  venue?: Maybe<LocationVenueRecord>
}

/** Record of type HashiConf Session (hashiconf_session) */
export type HashiconfSessionRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type HashiConf Session (hashiconf_session) */
export type HashiconfSessionRecordContentArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type HashiconfSpeakerModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  metadata?: Maybe<SeoFilter>
  twitter?: Maybe<StringFilter>
  linkedin?: Maybe<StringFilter>
  github?: Maybe<StringFilter>
  bio?: Maybe<TextFilter>
  jobTitle?: Maybe<StringFilter>
  organization?: Maybe<StringFilter>
  portraitEu?: Maybe<FileFilter>
  portrait?: Maybe<FileFilter>
  slug?: Maybe<StringFilter>
  nameTest?: Maybe<StringFilter>
  name?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<HashiconfSpeakerModelFilter>>>
}

export enum HashiconfSpeakerModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  TwitterAsc = "twitter_ASC",
  TwitterDesc = "twitter_DESC",
  LinkedinAsc = "linkedin_ASC",
  LinkedinDesc = "linkedin_DESC",
  GithubAsc = "github_ASC",
  GithubDesc = "github_DESC",
  JobTitleAsc = "jobTitle_ASC",
  JobTitleDesc = "jobTitle_DESC",
  OrganizationAsc = "organization_ASC",
  OrganizationDesc = "organization_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  NameTestAsc = "nameTest_ASC",
  NameTestDesc = "nameTest_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC"
}

/** Record of type HashiConf Speaker (hashiconf_speaker) */
export type HashiconfSpeakerRecord = {
  __typename?: "HashiconfSpeakerRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  bio?: Maybe<Scalars["String"]>
  createdAt: Scalars["DateTime"]
  github?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  jobTitle?: Maybe<Scalars["String"]>
  linkedin?: Maybe<Scalars["String"]>
  metadata?: Maybe<SeoField>
  name?: Maybe<Scalars["String"]>
  nameTest?: Maybe<Scalars["String"]>
  organization?: Maybe<Scalars["String"]>
  portrait?: Maybe<FileField>
  portraitEu?: Maybe<FileField>
  slug?: Maybe<Scalars["String"]>
  twitter?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type HashiConf Speaker (hashiconf_speaker) */
export type HashiconfSpeakerRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type HashiConf Speaker (hashiconf_speaker) */
export type HashiconfSpeakerRecordBioArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type HashiconfSpeakersPageModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  metadata?: Maybe<SeoFilter>
  speakers?: Maybe<LinkFilter>
  internalTitle?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<HashiconfSpeakersPageModelFilter>>>
}

export enum HashiconfSpeakersPageModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  InternalTitleAsc = "internalTitle_ASC",
  InternalTitleDesc = "internalTitle_DESC"
}

/** Record of type HashiConf Speakers Page (hashiconf_speakers_page) */
export type HashiconfSpeakersPageRecord = {
  __typename?: "HashiconfSpeakersPageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  internalTitle?: Maybe<Scalars["String"]>
  metadata?: Maybe<SeoField>
  speakers?: Maybe<HashiconfFeaturedSpeakersSectionRecord>
  updatedAt: Scalars["DateTime"]
}

/** Record of type HashiConf Speakers Page (hashiconf_speakers_page) */
export type HashiconfSpeakersPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type HashiconfSponsorSectionModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  buttons?: Maybe<LinksFilter>
  secondaryText?: Maybe<TextFilter>
  sponsors?: Maybe<LinksFilter>
  platinumSponsors?: Maybe<LinksFilter>
  text?: Maybe<TextFilter>
  OR?: Maybe<Array<Maybe<HashiconfSponsorSectionModelFilter>>>
}

export enum HashiconfSponsorSectionModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC"
}

/** Record of type HashiConf Sponsor Section (hashiconf_sponsor_section) */
export type HashiconfSponsorSectionRecord = {
  __typename?: "HashiconfSponsorSectionRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  buttons: Array<SbcButtonRecord>
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  platinumSponsors: Array<CompanyRecord>
  secondaryText?: Maybe<Scalars["String"]>
  sponsors: Array<CompanyRecord>
  text?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type HashiConf Sponsor Section (hashiconf_sponsor_section) */
export type HashiconfSponsorSectionRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type HashiConf Sponsor Section (hashiconf_sponsor_section) */
export type HashiconfSponsorSectionRecordSecondaryTextArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type HashiConf Sponsor Section (hashiconf_sponsor_section) */
export type HashiconfSponsorSectionRecordTextArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type HashiconfTextAndFullImageModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  image?: Maybe<FileFilter>
  buttons?: Maybe<LinksFilter>
  text?: Maybe<TextFilter>
  reverseDirection?: Maybe<BooleanFilter>
  OR?: Maybe<Array<Maybe<HashiconfTextAndFullImageModelFilter>>>
}

export enum HashiconfTextAndFullImageModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  ReverseDirectionAsc = "reverseDirection_ASC",
  ReverseDirectionDesc = "reverseDirection_DESC"
}

/** Record of type HashiConf Text and Full Image Section (hashiconf_text_and_full_image) */
export type HashiconfTextAndFullImageRecord = {
  __typename?: "HashiconfTextAndFullImageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  buttons: Array<SbcButtonRecord>
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  image?: Maybe<FileField>
  reverseDirection?: Maybe<Scalars["BooleanType"]>
  text?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type HashiConf Text and Full Image Section (hashiconf_text_and_full_image) */
export type HashiconfTextAndFullImageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type HashiConf Text and Full Image Section (hashiconf_text_and_full_image) */
export type HashiconfTextAndFullImageRecordTextArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type HashiconfTrainingDayModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  title?: Maybe<StringFilter>
  trainings?: Maybe<LinksFilter>
  heroImage?: Maybe<FileFilter>
  slug?: Maybe<SlugFilter>
  headline?: Maybe<TextFilter>
  internalTitle?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<HashiconfTrainingDayModelFilter>>>
}

export enum HashiconfTrainingDayModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  InternalTitleAsc = "internalTitle_ASC",
  InternalTitleDesc = "internalTitle_DESC"
}

/** Record of type HashiConf Training Day Page (hashiconf_training_day) */
export type HashiconfTrainingDayRecord = {
  __typename?: "HashiconfTrainingDayRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  headline?: Maybe<Scalars["String"]>
  heroImage?: Maybe<FileField>
  id: Scalars["ItemId"]
  internalTitle?: Maybe<Scalars["String"]>
  slug?: Maybe<Scalars["String"]>
  title?: Maybe<Scalars["String"]>
  trainings: Array<HashiconfTrainingRecord>
  updatedAt: Scalars["DateTime"]
}

/** Record of type HashiConf Training Day Page (hashiconf_training_day) */
export type HashiconfTrainingDayRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type HashiConf Training Day Page (hashiconf_training_day) */
export type HashiconfTrainingDayRecordHeadlineArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type HashiconfTrainingModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  trainer?: Maybe<StringFilter>
  endTime?: Maybe<StringFilter>
  slug?: Maybe<StringFilter>
  shortDescription?: Maybe<StringFilter>
  content?: Maybe<TextFilter>
  startTime?: Maybe<StringFilter>
  location?: Maybe<StringFilter>
  internalTitle?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  productLogo?: Maybe<FileFilter>
  metadata?: Maybe<SeoFilter>
  venue?: Maybe<LinkFilter>
  room?: Maybe<LinkFilter>
  speakers?: Maybe<LinksFilter>
  products?: Maybe<LinksFilter>
  productTypes?: Maybe<LinksFilter>
  experienceLevels?: Maybe<LinksFilter>
  date?: Maybe<DateFilter>
  OR?: Maybe<Array<Maybe<HashiconfTrainingModelFilter>>>
}

export enum HashiconfTrainingModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  TrainerAsc = "trainer_ASC",
  TrainerDesc = "trainer_DESC",
  EndTimeAsc = "endTime_ASC",
  EndTimeDesc = "endTime_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  ShortDescriptionAsc = "shortDescription_ASC",
  ShortDescriptionDesc = "shortDescription_DESC",
  StartTimeAsc = "startTime_ASC",
  StartTimeDesc = "startTime_DESC",
  LocationAsc = "location_ASC",
  LocationDesc = "location_DESC",
  InternalTitleAsc = "internalTitle_ASC",
  InternalTitleDesc = "internalTitle_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  DateAsc = "date_ASC",
  DateDesc = "date_DESC"
}

/** Record of type HashiConf Training (hashiconf_training) */
export type HashiconfTrainingRecord = {
  __typename?: "HashiconfTrainingRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  content?: Maybe<Scalars["String"]>
  createdAt: Scalars["DateTime"]
  date?: Maybe<Scalars["Date"]>
  endTime?: Maybe<Scalars["String"]>
  experienceLevels: Array<ExperienceLevelRecord>
  id: Scalars["ItemId"]
  internalTitle?: Maybe<Scalars["String"]>
  location?: Maybe<Scalars["String"]>
  metadata?: Maybe<SeoField>
  productLogo?: Maybe<FileField>
  productTypes: Array<ProductTypeRecord>
  products: Array<OpenSourceToolRecord>
  room?: Maybe<LocationRoomRecord>
  shortDescription?: Maybe<Scalars["String"]>
  slug?: Maybe<Scalars["String"]>
  speakers: Array<HashiconfSpeakerRecord>
  startTime?: Maybe<Scalars["String"]>
  title?: Maybe<Scalars["String"]>
  trainer?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
  venue?: Maybe<LocationVenueRecord>
}

/** Record of type HashiConf Training (hashiconf_training) */
export type HashiconfTrainingRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type HashiConf Training (hashiconf_training) */
export type HashiconfTrainingRecordContentArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type HashicorpProductModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  product?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<HashicorpProductModelFilter>>>
}

export enum HashicorpProductModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  ProductAsc = "product_ASC",
  ProductDesc = "product_DESC"
}

/** Record of type HashiCorp Product (hashicorp_product) */
export type HashicorpProductRecord = {
  __typename?: "HashicorpProductRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  product?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type HashiCorp Product (hashicorp_product) */
export type HashicorpProductRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type HeroFormLeadModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  buttonText?: Maybe<StringFilter>
  destinationUrl?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<HeroFormLeadModelFilter>>>
}

export enum HeroFormLeadModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  ButtonTextAsc = "buttonText_ASC",
  ButtonTextDesc = "buttonText_DESC",
  DestinationUrlAsc = "destinationUrl_ASC",
  DestinationUrlDesc = "destinationUrl_DESC"
}

/** Record of type Hero Form Lead (hero_form_lead) */
export type HeroFormLeadRecord = {
  __typename?: "HeroFormLeadRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  buttonText?: Maybe<Scalars["String"]>
  createdAt: Scalars["DateTime"]
  destinationUrl?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  updatedAt: Scalars["DateTime"]
}

/** Record of type Hero Form Lead (hero_form_lead) */
export type HeroFormLeadRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Hero (hero) */
export type HeroRecord = {
  __typename?: "HeroRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  backgroundImage?: Maybe<FileField>
  buttons: Array<LinkRecord>
  centered?: Maybe<Scalars["BooleanType"]>
  createdAt: Scalars["DateTime"]
  description?: Maybe<Scalars["String"]>
  helpText?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Hero (hero) */
export type HeroRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Hero (hero) */
export type HeroRecordDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Hero (hero) */
export type HeroRecordHelpTextArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type HeroSectionModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  videos?: Maybe<LinksFilter>
  image?: Maybe<FileFilter>
  formLeadInput?: Maybe<LinkFilter>
  buttons?: Maybe<LinksFilter>
  titleLogo?: Maybe<FileFilter>
  smallTextTag?: Maybe<StringFilter>
  alert?: Maybe<LinkFilter>
  backgroundTheme?: Maybe<StringFilter>
  theme?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  conditionalTesting?: Maybe<BooleanFilter>
  helpText?: Maybe<TextFilter>
  backgroundImage?: Maybe<FileFilter>
  description?: Maybe<TextFilter>
  centered?: Maybe<BooleanFilter>
  OR?: Maybe<Array<Maybe<HeroSectionModelFilter>>>
}

export enum HeroSectionModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  SmallTextTagAsc = "smallTextTag_ASC",
  SmallTextTagDesc = "smallTextTag_DESC",
  BackgroundThemeAsc = "backgroundTheme_ASC",
  BackgroundThemeDesc = "backgroundTheme_DESC",
  ThemeAsc = "theme_ASC",
  ThemeDesc = "theme_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  ConditionalTestingAsc = "conditionalTesting_ASC",
  ConditionalTestingDesc = "conditionalTesting_DESC",
  CenteredAsc = "centered_ASC",
  CenteredDesc = "centered_DESC"
}

/** Record of type Hero Section (hero_section) */
export type HeroSectionRecord = {
  __typename?: "HeroSectionRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  alert?: Maybe<AlertRecord>
  backgroundImage?: Maybe<FileField>
  backgroundTheme?: Maybe<Scalars["String"]>
  buttons: Array<LinkRecord>
  centered?: Maybe<Scalars["BooleanType"]>
  conditionalTesting?: Maybe<Scalars["BooleanType"]>
  createdAt: Scalars["DateTime"]
  description?: Maybe<Scalars["String"]>
  formLeadInput?: Maybe<HeroFormLeadRecord>
  helpText?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  image?: Maybe<FileField>
  smallTextTag?: Maybe<Scalars["String"]>
  theme?: Maybe<Scalars["String"]>
  title?: Maybe<Scalars["String"]>
  titleLogo?: Maybe<FileField>
  updatedAt: Scalars["DateTime"]
  videos: Array<HeroVideoCarouselItemRecord>
}

/** Record of type Hero Section (hero_section) */
export type HeroSectionRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Hero Section (hero_section) */
export type HeroSectionRecordDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Hero Section (hero_section) */
export type HeroSectionRecordHelpTextArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type HeroVideoCarouselItemModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  src?: Maybe<LinksFilter>
  playbackRate?: Maybe<FloatFilter>
  name?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<HeroVideoCarouselItemModelFilter>>>
}

export enum HeroVideoCarouselItemModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  PlaybackRateAsc = "playbackRate_ASC",
  PlaybackRateDesc = "playbackRate_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC"
}

/** Record of type Hero Video Carousel Item (hero_video_carousel_item) */
export type HeroVideoCarouselItemRecord = {
  __typename?: "HeroVideoCarouselItemRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  name?: Maybe<Scalars["String"]>
  playbackRate?: Maybe<Scalars["FloatType"]>
  src: Array<VideoSourceRecord>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Hero Video Carousel Item (hero_video_carousel_item) */
export type HeroVideoCarouselItemRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type HomepageProductTabModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  features?: Maybe<LinksFilter>
  buttonText?: Maybe<StringFilter>
  description?: Maybe<TextFilter>
  badge?: Maybe<FileFilter>
  product?: Maybe<LinkFilter>
  headline?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<HomepageProductTabModelFilter>>>
}

export enum HomepageProductTabModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  ButtonTextAsc = "buttonText_ASC",
  ButtonTextDesc = "buttonText_DESC",
  HeadlineAsc = "headline_ASC",
  HeadlineDesc = "headline_DESC"
}

/** Record of type Homepage Product Tab (homepage_product_tab) */
export type HomepageProductTabRecord = {
  __typename?: "HomepageProductTabRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  badge?: Maybe<FileField>
  buttonText?: Maybe<Scalars["String"]>
  createdAt: Scalars["DateTime"]
  description?: Maybe<Scalars["String"]>
  features: Array<PackageFeatureRecord>
  headline?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  product?: Maybe<EnterpriseProductRecord>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Homepage Product Tab (homepage_product_tab) */
export type HomepageProductTabRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Homepage Product Tab (homepage_product_tab) */
export type HomepageProductTabRecordDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Home Page (home_page) */
export type HomePageRecord = {
  __typename?: "HomePageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  alertBanner?: Maybe<AlertBannerRecord>
  blueprintHeader?: Maybe<TextHeadlineSectionRecord>
  challengesCallouts?: Maybe<CalloutSectionRecord>
  createdAt: Scalars["DateTime"]
  hero?: Maybe<HeroSectionRecord>
  id: Scalars["ItemId"]
  metadata?: Maybe<SeoField>
  newsItems: Array<NewsItemRecord>
  prefooter?: Maybe<HeroSectionRecord>
  productSuite: Array<EnterpriseProductRecord>
  productSuiteHeader?: Maybe<TextHeadlineSectionRecord>
  productTabs: Array<HomepageProductTabRecord>
  salesForm?: Maybe<SalesFormRecord>
  technologyPartners: Array<CompanyRecord>
  technologyPartnersCopy?: Maybe<TextHeadlineSectionRecord>
  testimonials: Array<TestimonialRecord>
  testimonialsHeader?: Maybe<TextHeadlineSectionRecord>
  trustedByCompanies: Array<CompanyRecord>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Home Page (home_page) */
export type HomePageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type HtmlSectionModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  html?: Maybe<TextFilter>
  OR?: Maybe<Array<Maybe<HtmlSectionModelFilter>>>
}

export enum HtmlSectionModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC"
}

/** Record of type HTML Section (Deprecated) (html_section) */
export type HtmlSectionRecord = {
  __typename?: "HtmlSectionRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  html?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  updatedAt: Scalars["DateTime"]
}

/** Record of type HTML Section (Deprecated) (html_section) */
export type HtmlSectionRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type HTML Section (Deprecated) (html_section) */
export type HtmlSectionRecordHtmlArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type IconLinkModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  lightIcon?: Maybe<FileFilter>
  icon?: Maybe<FileFilter>
  title?: Maybe<StringFilter>
  url?: Maybe<StringFilter>
  external?: Maybe<BooleanFilter>
  OR?: Maybe<Array<Maybe<IconLinkModelFilter>>>
}

export enum IconLinkModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  UrlAsc = "url_ASC",
  UrlDesc = "url_DESC",
  ExternalAsc = "external_ASC",
  ExternalDesc = "external_DESC"
}

/** Record of type Icon Link (icon_link) */
export type IconLinkRecord = {
  __typename?: "IconLinkRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  external?: Maybe<Scalars["BooleanType"]>
  icon?: Maybe<FileField>
  id: Scalars["ItemId"]
  lightIcon?: Maybe<FileField>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
  url?: Maybe<Scalars["String"]>
}

/** Record of type Icon Link (icon_link) */
export type IconLinkRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type ImageLockupModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  cta?: Maybe<LinkFilter>
  image?: Maybe<FileFilter>
  title?: Maybe<StringFilter>
  body?: Maybe<TextFilter>
  OR?: Maybe<Array<Maybe<ImageLockupModelFilter>>>
}

export enum ImageLockupModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC"
}

/** Record of type Image Lockup (image_lockup) */
export type ImageLockupRecord = {
  __typename?: "ImageLockupRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  body?: Maybe<Scalars["String"]>
  createdAt: Scalars["DateTime"]
  cta?: Maybe<LinkRecord>
  id: Scalars["ItemId"]
  image?: Maybe<FileField>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Image Lockup (image_lockup) */
export type ImageLockupRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Image Lockup (image_lockup) */
export type ImageLockupRecordBodyArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Image (image) */
export type ImageRecord = {
  __typename?: "ImageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  image?: Maybe<FileField>
  mobileImage?: Maybe<FileField>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Image (image) */
export type ImageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type ImageSectionModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  caption?: Maybe<TextFilter>
  fullPageWidth?: Maybe<BooleanFilter>
  image?: Maybe<FileFilter>
  alignment?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<ImageSectionModelFilter>>>
}

export enum ImageSectionModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  FullPageWidthAsc = "fullPageWidth_ASC",
  FullPageWidthDesc = "fullPageWidth_DESC",
  AlignmentAsc = "alignment_ASC",
  AlignmentDesc = "alignment_DESC"
}

/** Record of type Image Section (image_section) */
export type ImageSectionRecord = {
  __typename?: "ImageSectionRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  alignment?: Maybe<Scalars["String"]>
  caption?: Maybe<Scalars["String"]>
  createdAt: Scalars["DateTime"]
  fullPageWidth?: Maybe<Scalars["BooleanType"]>
  id: Scalars["ItemId"]
  image?: Maybe<FileField>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Image Section (image_section) */
export type ImageSectionRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Image Section (image_section) */
export type ImageSectionRecordCaptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Image with Text Carousel Item (image_text_carousel_item) */
export type ImageTextCarouselItemRecord = {
  __typename?: "ImageTextCarouselItemRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  description?: Maybe<Scalars["String"]>
  headline?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  image?: Maybe<FileField>
  linkLabel?: Maybe<Scalars["String"]>
  linkUrl?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Image with Text Carousel Item (image_text_carousel_item) */
export type ImageTextCarouselItemRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Image with Text Carousel Item (image_text_carousel_item) */
export type ImageTextCarouselItemRecordDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type ImageTextCarouselModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  OR?: Maybe<Array<Maybe<ImageTextCarouselModelFilter>>>
}

export enum ImageTextCarouselModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC"
}

/** Record of type Image with Text Carousel (image_text_carousel) */
export type ImageTextCarouselRecord = {
  __typename?: "ImageTextCarouselRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  items?: Maybe<Array<Maybe<ImageTextCarouselItemRecord>>>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Image with Text Carousel (image_text_carousel) */
export type ImageTextCarouselRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type ImgixParams = {
  /**
   * Aspect Ratio
   *
   * Specifies an aspect ratio to maintain when resizing and cropping the image
   *
   * Depends on: `fit=crop`
   **/
  ar?: Maybe<Scalars["String"]>
  /**
   * Automatic
   *
   * Applies automatic enhancements to images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/auto)
   **/
  auto?: Maybe<Array<ImgixParamsAuto>>
  /**
   * Background Color
   *
   * Colors the background of padded and partially-transparent images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/bg)
   **/
  bg?: Maybe<Scalars["String"]>
  /**
   * Blend Align
   *
   * Changes the blend alignment relative to the parent image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-align)
   **/
  blendAlign?: Maybe<Array<ImgixParamsBlendAlign>>
  /**
   * Blend Alpha
   *
   * Changes the alpha of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-alpha)
   **/
  blendAlpha?: Maybe<Scalars["IntType"]>
  /**
   * Blend Crop
   *
   * Specifies the type of crop for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-crop)
   **/
  blendCrop?: Maybe<Array<ImgixParamsBlendCrop>>
  /**
   * Blend Fit
   *
   * Specifies the fit mode for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-fit)
   **/
  blendFit?: Maybe<ImgixParamsBlendFit>
  /**
   * Blend Height
   *
   * Adjusts the height of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-h)
   **/
  blendH?: Maybe<Scalars["FloatType"]>
  /**
   * Blend Mode
   *
   * Sets the blend mode for a blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-mode)
   **/
  blendMode?: Maybe<ImgixParamsBlendMode>
  /**
   * Blend Padding
   *
   * Applies padding to the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-pad)
   **/
  blendPad?: Maybe<Scalars["IntType"]>
  /**
   * Blend Size
   *
   * Adjusts the size of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-size)
   **/
  blendSize?: Maybe<ImgixParamsBlendSize>
  /**
   * Blend Width
   *
   * Adjusts the width of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-w)
   **/
  blendW?: Maybe<Scalars["FloatType"]>
  /**
   * Blend X Position
   *
   * Adjusts the x-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-x)
   **/
  blendX?: Maybe<Scalars["IntType"]>
  /**
   * Blend Y Position
   *
   * Adjusts the y-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-y)
   **/
  blendY?: Maybe<Scalars["IntType"]>
  /**
   * Blend
   *
   * Specifies the location of the blend image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend)
   **/
  blend?: Maybe<Scalars["String"]>
  /**
   * Gaussian Blur
   *
   * Applies a gaussian blur to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/blur)
   **/
  blur?: Maybe<Scalars["IntType"]>
  /**
   * Inner Border Radius
   *
   * Sets the inner radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner)
   **/
  borderRadiusInner?: Maybe<Scalars["String"]>
  /**
   * Outer Border Radius
   *
   * Sets the outer radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius)
   **/
  borderRadius?: Maybe<Scalars["String"]>
  /**
   * Border Size & Color
   *
   * Applies a border to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border)
   **/
  border?: Maybe<Scalars["String"]>
  /**
   * Brightness
   *
   * Adjusts the brightness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/bri)
   **/
  bri?: Maybe<Scalars["IntType"]>
  /**
   * Client Hints
   *
   * Sets one or more Client-Hints headers
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/ch)
   **/
  ch?: Maybe<Array<ImgixParamsCh>>
  /**
   * Chroma Subsampling
   *
   * Specifies the output chroma subsampling rate.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/chromasub)
   **/
  chromasub?: Maybe<Scalars["IntType"]>
  /**
   * Color Quantization
   *
   * Limits the number of unique colors in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/colorquant)
   **/
  colorquant?: Maybe<Scalars["IntType"]>
  /**
   * Palette Color Count
   *
   * Specifies how many colors to include in a palette-extraction response.
   *
   * Depends on: `palette`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/colors)
   **/
  colors?: Maybe<Scalars["IntType"]>
  /**
   * Contrast
   *
   * Adjusts the contrast of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/con)
   **/
  con?: Maybe<Scalars["IntType"]>
  /**
   * Mask Corner Radius
   *
   * Specifies the radius value for a rounded corner mask.
   *
   * Depends on: `mask=corners`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/corner-radius)
   **/
  cornerRadius?: Maybe<Scalars["String"]>
  /**
   * Crop Mode
   *
   * Specifies how to crop an image.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/crop)
   **/
  crop?: Maybe<Array<ImgixParamsCrop>>
  /**
   * Color Space
   *
   * Specifies the color space of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/cs)
   **/
  cs?: Maybe<ImgixParamsCs>
  /**
   * Download
   *
   * Forces a URL to use send-file in its response.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dl)
   **/
  dl?: Maybe<Scalars["String"]>
  /**
   * Dots Per Inch
   *
   * Sets the DPI value in the EXIF header.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dpi)
   **/
  dpi?: Maybe<Scalars["IntType"]>
  /**
   * Device Pixel Ratio
   *
   * Adjusts the device-pixel ratio of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/dpr)
   **/
  dpr?: Maybe<Scalars["FloatType"]>
  /**
   * Duotone Alpha
   *
   * Changes the alpha of the duotone effect atop the source image.
   *
   * Depends on: `duotone`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone-alpha)
   **/
  duotoneAlpha?: Maybe<Scalars["IntType"]>
  /**
   * Duotone
   *
   * Applies a duotone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone)
   **/
  duotone?: Maybe<Scalars["String"]>
  /**
   * Exposure
   *
   * Adjusts the exposure of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/exp)
   **/
  exp?: Maybe<Scalars["IntType"]>
  /**
   * Url Expiration Timestamp
   *
   * A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/expires)
   **/
  expires?: Maybe<Scalars["IntType"]>
  /**
   * Face Index
   *
   * Selects a face to crop to.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faceindex)
   **/
  faceindex?: Maybe<Scalars["IntType"]>
  /**
   * Face Padding
   *
   * Adjusts padding around a selected face.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/facepad)
   **/
  facepad?: Maybe<Scalars["FloatType"]>
  /**
   * Json Face Data
   *
   * Specifies that face data should be included in output when combined with `fm=json`.
   *
   * Depends on: `fm=json`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faces)
   **/
  faces?: Maybe<Scalars["IntType"]>
  /**
   * Fill Color
   *
   * Sets the fill color for images with additional space created by the fit setting
   *
   * Depends on: `fill=solid`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-color)
   **/
  fillColor?: Maybe<Scalars["String"]>
  /**
   * Fill Mode
   *
   * Determines how to fill in additional space created by the fit setting
   *
   * Depends on: `fit`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill)
   **/
  fill?: Maybe<ImgixParamsFill>
  /**
   * Resize Fit Mode
   *
   * Specifies how to map the source image to the output image dimensions.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/fit)
   **/
  fit?: Maybe<ImgixParamsFit>
  /**
   * Flip Axis
   *
   * Flips an image on a specified axis.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/flip)
   **/
  flip?: Maybe<ImgixParamsFlip>
  /**
   * Output Format
   *
   * Changes the format of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/fm)
   **/
  fm?: Maybe<ImgixParamsFm>
  /**
   * Focal Point Debug
   *
   * Displays crosshairs identifying the location of the set focal point
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug)
   **/
  fpDebug?: Maybe<Scalars["BooleanType"]>
  /**
   * Focal Point X Position
   *
   * Sets the relative horizontal value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-x)
   **/
  fpX?: Maybe<Scalars["FloatType"]>
  /**
   * Focal Point Y Position
   *
   * Sets the relative vertical value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-y)
   **/
  fpY?: Maybe<Scalars["FloatType"]>
  /**
   * Focal Point Zoom
   *
   * Sets the relative zoom value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-z)
   **/
  fpZ?: Maybe<Scalars["IntType"]>
  /**
   * Gamma
   *
   * Adjusts the gamma of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/gam)
   **/
  gam?: Maybe<Scalars["IntType"]>
  /**
   * Image Height
   *
   * Adjusts the height of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/h)
   **/
  h?: Maybe<Scalars["FloatType"]>
  /**
   * Highlight
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/high)
   **/
  high?: Maybe<Scalars["IntType"]>
  /**
   * Halftone
   *
   * Applies a half-tone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/htn)
   **/
  htn?: Maybe<Scalars["IntType"]>
  /**
   * Hue Shift
   *
   * Adjusts the hue of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/hue)
   **/
  hue?: Maybe<Scalars["IntType"]>
  /**
   * Invert
   *
   * Inverts the colors on the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/invert)
   **/
  invert?: Maybe<Scalars["BooleanType"]>
  /**
   * Lossless Compression
   *
   * Specifies that the output image should be a lossless variant.
   *
   * Depends on: `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/lossless)
   **/
  lossless?: Maybe<Scalars["BooleanType"]>
  /**
   * Watermark Alignment Mode
   *
   * Changes the watermark alignment relative to the parent image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-align)
   **/
  markAlign?: Maybe<Array<ImgixParamsMarkAlign>>
  /**
   * Watermark Alpha
   *
   * Changes the alpha of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-alpha)
   **/
  markAlpha?: Maybe<Scalars["IntType"]>
  /**
   * Watermark Base Url
   *
   * Changes base URL of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-base)
   **/
  markBase?: Maybe<Scalars["String"]>
  /**
   * Watermark Fit Mode
   *
   * Specifies the fit mode for watermark images.
   *
   * Depends on: `mark`, `markw`, `markh`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-fit)
   **/
  markFit?: Maybe<ImgixParamsMarkFit>
  /**
   * Watermark Height
   *
   * Adjusts the height of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-h)
   **/
  markH?: Maybe<Scalars["FloatType"]>
  /**
   * Watermark Padding
   *
   * Applies padding to the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-pad)
   **/
  markPad?: Maybe<Scalars["IntType"]>
  /**
   * Watermark Scale
   *
   * Adjusts the scale of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-scale)
   **/
  markScale?: Maybe<Scalars["IntType"]>
  /**
   * Watermark Width
   *
   * Adjusts the width of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-w)
   **/
  markW?: Maybe<Scalars["FloatType"]>
  /**
   * Watermark X Position
   *
   * Adjusts the x-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-x)
   **/
  markX?: Maybe<Scalars["IntType"]>
  /**
   * Watermark Y Position
   *
   * Adjusts the y-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-y)
   **/
  markY?: Maybe<Scalars["IntType"]>
  /**
   * Watermark Image Url
   *
   * Specifies the location of the watermark image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark)
   **/
  mark?: Maybe<Scalars["String"]>
  /**
   * Mask Type
   *
   * Defines the type of mask and specifies the URL if that type is selected.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask)
   **/
  mask?: Maybe<Scalars["String"]>
  /**
   * Mask Background Color
   *
   * Colors the background of the transparent mask area of images
   *
   * Depends on: `mask`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/mask-bg)
   **/
  maskbg?: Maybe<Scalars["String"]>
  /**
   * Maximum Height
   *
   * Specifies the maximum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-height)
   **/
  maxH?: Maybe<Scalars["IntType"]>
  /**
   * Maximum Width
   *
   * Specifies the maximum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-width)
   **/
  maxW?: Maybe<Scalars["IntType"]>
  /**
   * Minimum Height
   *
   * Specifies the minimum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-height)
   **/
  minH?: Maybe<Scalars["IntType"]>
  /**
   * Minimum Width
   *
   * Specifies the minimum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-width)
   **/
  minW?: Maybe<Scalars["IntType"]>
  /**
   * Monochrome
   *
   * Applies a monochrome effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/monochrome)
   **/
  monochrome?: Maybe<Scalars["String"]>
  /**
   * Noise Reduction Bound
   *
   * Reduces the noise in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nr)
   **/
  nr?: Maybe<Scalars["IntType"]>
  /**
   * Noise Reduction Sharpen
   *
   * Provides a threshold by which to sharpen an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nrs)
   **/
  nrs?: Maybe<Scalars["IntType"]>
  /**
   * Orientation
   *
   * Changes the image orientation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/orient)
   **/
  orient?: Maybe<Scalars["IntType"]>
  /**
   * Padding
   *
   * Pads an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad)
   **/
  pad?: Maybe<Scalars["IntType"]>
  /**
   * Pdf Page Number
   *
   * Selects a page from a PDF for display.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf-page-number)
   **/
  page?: Maybe<Scalars["IntType"]>
  /**
   * Color Palette Extraction
   *
   * Specifies an output format for palette-extraction.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/palette)
   **/
  palette?: Maybe<ImgixParamsPalette>
  /**
   * Css Prefix
   *
   * Specifies a CSS prefix for all classes in palette-extraction.
   *
   * Depends on: `palette=css`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/prefix)
   **/
  prefix?: Maybe<Scalars["String"]>
  /**
   * Pixellate
   *
   * Applies a pixelation effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/px)
   **/
  px?: Maybe<Scalars["IntType"]>
  /**
   * Output Quality
   *
   * Adjusts the quality of an output image.
   *
   * Depends on: `fm=jpg`, `fm=pjpg`, `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/q)
   **/
  q?: Maybe<Scalars["IntType"]>
  /**
   * Source Rectangle Region
   *
   * Crops an image to a specified rectangle.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/rect)
   **/
  rect?: Maybe<Scalars["String"]>
  /**
   * Rotation
   *
   * Rotates an image by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/rot)
   **/
  rot?: Maybe<Scalars["FloatType"]>
  /**
   * Saturation
   *
   * Adjusts the saturation of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sat)
   **/
  sat?: Maybe<Scalars["IntType"]>
  /**
   * Sepia Tone
   *
   * Applies a sepia effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/sepia)
   **/
  sepia?: Maybe<Scalars["IntType"]>
  /**
   * Shadow
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/shad)
   **/
  shad?: Maybe<Scalars["FloatType"]>
  /**
   * Sharpen
   *
   * Adjusts the sharpness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sharp)
   **/
  sharp?: Maybe<Scalars["FloatType"]>
  /**
   * Trim Color
   *
   * Specifies a trim color on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-color)
   **/
  trimColor?: Maybe<Scalars["String"]>
  /**
   * Trim Mean Difference
   *
   * Specifies the mean difference on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-md)
   **/
  trimMd?: Maybe<Scalars["FloatType"]>
  /**
   * Trim Padding
   *
   * Pads the area of the source image before trimming.
   *
   * Depends on: `trim`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-pad)
   **/
  trimPad?: Maybe<Scalars["IntType"]>
  /**
   * Trim Standard Deviation
   *
   * Specifies the standard deviation on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-sd)
   **/
  trimSd?: Maybe<Scalars["FloatType"]>
  /**
   * Trim Tolerance
   *
   * Specifies the tolerance on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-tol)
   **/
  trimTol?: Maybe<Scalars["FloatType"]>
  /**
   * Trim Image
   *
   * Trims the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim)
   **/
  trim?: Maybe<ImgixParamsTrim>
  /**
   * Text Align
   *
   * Sets the vertical and horizontal alignment of rendered text relative to the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-align)
   **/
  txtAlign?: Maybe<Array<ImgixParamsTxtAlign>>
  /**
   * Text Clipping Mode
   *
   * Sets the clipping properties of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-clip)
   **/
  txtClip?: Maybe<Array<ImgixParamsTxtClip>>
  /**
   * Text Color
   *
   * Specifies the color of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-color)
   **/
  txtColor?: Maybe<Scalars["String"]>
  /**
   * Text Fit Mode
   *
   * Specifies the fit approach for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-fit)
   **/
  txtFit?: Maybe<ImgixParamsTxtFit>
  /**
   * Text Font
   *
   * Selects a font for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-font)
   **/
  txtFont?: Maybe<Scalars["String"]>
  /**
   * Text Leading
   *
   * Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-lead)
   **/
  txtLead?: Maybe<Scalars["IntType"]>
  /**
   * Text Ligatures
   *
   * Controls the level of ligature substitution
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-lig)
   **/
  txtLig?: Maybe<Scalars["IntType"]>
  /**
   * Text Outline Color
   *
   * Specifies a text outline color.
   *
   * Depends on: `txt`, `txtline`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line-color)
   **/
  txtLineColor?: Maybe<Scalars["String"]>
  /**
   * Text Outline
   *
   * Outlines the rendered text with a specified color.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line)
   **/
  txtLine?: Maybe<Scalars["IntType"]>
  /**
   * Text Padding
   *
   * Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-pad)
   **/
  txtPad?: Maybe<Scalars["IntType"]>
  /**
   * Text Shadow
   *
   * Applies a shadow to rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-shad)
   **/
  txtShad?: Maybe<Scalars["FloatType"]>
  /**
   * Text Font Size
   *
   * Sets the font size of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-size)
   **/
  txtSize?: Maybe<Scalars["IntType"]>
  /**
   * Text Tracking
   *
   * Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-track)
   **/
  txtTrack?: Maybe<Scalars["IntType"]>
  /**
   * Text Width
   *
   * Sets the width of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-width)
   **/
  txtWidth?: Maybe<Scalars["IntType"]>
  /**
   * Text String
   *
   * Sets the text string to render.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt)
   **/
  txt?: Maybe<Scalars["String"]>
  /**
   * Unsharp Mask
   *
   * Sharpens the source image using an unsharp mask.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usm)
   **/
  usm?: Maybe<Scalars["IntType"]>
  /**
   * Unsharp Mask Radius
   *
   * Specifies the radius for an unsharp mask operation.
   *
   * Depends on: `usm`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usmrad)
   **/
  usmrad?: Maybe<Scalars["FloatType"]>
  /**
   * Vibrance
   *
   * Adjusts the vibrance of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/vib)
   **/
  vib?: Maybe<Scalars["IntType"]>
  /**
   * Image Width
   *
   * Adjusts the width of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/w)
   **/
  w?: Maybe<Scalars["FloatType"]>
}

export enum ImgixParamsAuto {
  Enhance = "enhance",
  Format = "format",
  Redeye = "redeye",
  Compress = "compress"
}

export enum ImgixParamsBlendAlign {
  Top = "top",
  Bottom = "bottom",
  Middle = "middle",
  Left = "left",
  Right = "right",
  Center = "center"
}

export enum ImgixParamsBlendCrop {
  Top = "top",
  Bottom = "bottom",
  Left = "left",
  Right = "right",
  Faces = "faces"
}

export enum ImgixParamsBlendFit {
  Clamp = "clamp",
  Clip = "clip",
  Crop = "crop",
  Scale = "scale",
  Max = "max"
}

export enum ImgixParamsBlendMode {
  Color = "color",
  Burn = "burn",
  Dodge = "dodge",
  Darken = "darken",
  Difference = "difference",
  Exclusion = "exclusion",
  Hardlight = "hardlight",
  Hue = "hue",
  Lighten = "lighten",
  Luminosity = "luminosity",
  Multiply = "multiply",
  Overlay = "overlay",
  Saturation = "saturation",
  Screen = "screen",
  Softlight = "softlight",
  Normal = "normal"
}

export enum ImgixParamsBlendSize {
  Inherit = "inherit"
}

export enum ImgixParamsCh {
  Width = "width",
  Dpr = "dpr",
  SaveData = "saveData"
}

export enum ImgixParamsCrop {
  Top = "top",
  Bottom = "bottom",
  Left = "left",
  Right = "right",
  Faces = "faces",
  Entropy = "entropy",
  Edges = "edges",
  Focalpoint = "focalpoint"
}

export enum ImgixParamsCs {
  Srgb = "srgb",
  Adobergb1998 = "adobergb1998",
  Tinysrgb = "tinysrgb",
  Strip = "strip"
}

export enum ImgixParamsFill {
  Solid = "solid",
  Blur = "blur"
}

export enum ImgixParamsFit {
  Clamp = "clamp",
  Clip = "clip",
  Crop = "crop",
  Facearea = "facearea",
  Fill = "fill",
  Fillmax = "fillmax",
  Max = "max",
  Min = "min",
  Scale = "scale"
}

export enum ImgixParamsFlip {
  H = "h",
  V = "v",
  Hv = "hv"
}

export enum ImgixParamsFm {
  Gif = "gif",
  Jpg = "jpg",
  Jp2 = "jp2",
  Json = "json",
  Jxr = "jxr",
  Pjpg = "pjpg",
  Mp4 = "mp4",
  Png = "png",
  Png8 = "png8",
  Png32 = "png32",
  Webp = "webp",
  Webm = "webm"
}

export enum ImgixParamsMarkAlign {
  Top = "top",
  Middle = "middle",
  Bottom = "bottom",
  Left = "left",
  Center = "center",
  Right = "right"
}

export enum ImgixParamsMarkFit {
  Clip = "clip",
  Crop = "crop",
  Fill = "fill",
  Max = "max",
  Scale = "scale"
}

export enum ImgixParamsPalette {
  Css = "css",
  Json = "json"
}

export enum ImgixParamsTrim {
  Auto = "auto",
  Color = "color"
}

export enum ImgixParamsTxtAlign {
  Top = "top",
  Middle = "middle",
  Bottom = "bottom",
  Left = "left",
  Center = "center",
  Right = "right"
}

export enum ImgixParamsTxtClip {
  Start = "start",
  Middle = "middle",
  End = "end",
  Ellipsis = "ellipsis"
}

export enum ImgixParamsTxtFit {
  Max = "max"
}

/** Specifies how to filter Integer fields */
export type IntegerFilter = {
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: Maybe<Scalars["IntType"]>
  /** Filter records with a value that's less than the one specified */
  lt?: Maybe<Scalars["IntType"]>
  /** Filter records with a value that's greater than or equal to the one specified */
  gte?: Maybe<Scalars["IntType"]>
  /** Filter records with a value that's less or equal than the one specified */
  lte?: Maybe<Scalars["IntType"]>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars["BooleanType"]>
  /** Search for records with an exact match */
  eq?: Maybe<Scalars["IntType"]>
  /** Exclude records with an exact match */
  neq?: Maybe<Scalars["IntType"]>
}

/** Record of type Integration Detail (integration_detail) */
export type IntegrationDetailRecord = {
  __typename?: "IntegrationDetailRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  description?: Maybe<Scalars["String"]>
  documentationLink?: Maybe<Scalars["String"]>
  getStartedLink?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  product?: Maybe<OpenSourceToolRecord>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Integration Detail (integration_detail) */
export type IntegrationDetailRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Integration Detail (integration_detail) */
export type IntegrationDetailRecordDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Integrations Page (integrations_page) */
export type IntegrationsPageRecord = {
  __typename?: "IntegrationsPageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  description?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  metadata?: Maybe<SeoField>
  technologyPartners: Array<CompanyRecord>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Integrations Page (integrations_page) */
export type IntegrationsPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Integrations Page (integrations_page) */
export type IntegrationsPageRecordDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type IntegrationTypeCategoryModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  position?: Maybe<PositionFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  product?: Maybe<LinkFilter>
  slug?: Maybe<SlugFilter>
  name?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<IntegrationTypeCategoryModelFilter>>>
}

export enum IntegrationTypeCategoryModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PositionAsc = "position_ASC",
  PositionDesc = "position_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC"
}

/** Record of type Integration Type Category (integration_type_category) */
export type IntegrationTypeCategoryRecord = {
  __typename?: "IntegrationTypeCategoryRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  name?: Maybe<Scalars["String"]>
  position?: Maybe<Scalars["IntType"]>
  product?: Maybe<OpenSourceToolRecord>
  slug?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Integration Type Category (integration_type_category) */
export type IntegrationTypeCategoryRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type IntegrationTypeModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  position?: Maybe<PositionFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  slug?: Maybe<SlugFilter>
  category?: Maybe<LinkFilter>
  name?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<IntegrationTypeModelFilter>>>
}

export enum IntegrationTypeModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PositionAsc = "position_ASC",
  PositionDesc = "position_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC"
}

/** Record of type Integration Type (integration_type) */
export type IntegrationTypeRecord = {
  __typename?: "IntegrationTypeRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  category?: Maybe<IntegrationTypeCategoryRecord>
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  name?: Maybe<Scalars["String"]>
  position?: Maybe<Scalars["IntType"]>
  slug?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Integration Type (integration_type) */
export type IntegrationTypeRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Specifies how to filter by usage */
export type InUseFilter = {
  /** Search uploads that are currently used by some record or not */
  eq?: Maybe<Scalars["BooleanType"]>
}

/** Specifies how to filter by ID */
export type ItemIdFilter = {
  /** Search the record with the specified ID */
  eq?: Maybe<Scalars["ItemId"]>
  /** Exclude the record with the specified ID */
  neq?: Maybe<Scalars["ItemId"]>
  /** Search records with the specified IDs */
  in?: Maybe<Array<Maybe<Scalars["ItemId"]>>>
  /** Search records that do not have the specified IDs */
  notIn?: Maybe<Array<Maybe<Scalars["ItemId"]>>>
}

/** Record of type Item (item) */
export type ItemRecord = {
  __typename?: "ItemRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  description?: Maybe<Scalars["String"]>
  external?: Maybe<Scalars["BooleanType"]>
  id: Scalars["ItemId"]
  link?: Maybe<Scalars["String"]>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Item (item) */
export type ItemRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Item (item) */
export type ItemRecordDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export enum ItemStatus {
  Draft = "draft",
  Updated = "updated",
  Published = "published"
}

export type JobsEmployeeTestimonialModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  person?: Maybe<LinkFilter>
  testimonial?: Maybe<TextFilter>
  OR?: Maybe<Array<Maybe<JobsEmployeeTestimonialModelFilter>>>
}

export enum JobsEmployeeTestimonialModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC"
}

/** Record of type Jobs Employee Testimonial (jobs_employee_testimonial) */
export type JobsEmployeeTestimonialRecord = {
  __typename?: "JobsEmployeeTestimonialRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  person?: Maybe<PersonRecord>
  testimonial?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Jobs Employee Testimonial (jobs_employee_testimonial) */
export type JobsEmployeeTestimonialRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Jobs Employee Testimonial (jobs_employee_testimonial) */
export type JobsEmployeeTestimonialRecordTestimonialArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type JobsPageDepartmentModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  position?: Maybe<PositionFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  mission?: Maybe<TextFilter>
  backgroundImage?: Maybe<FileFilter>
  greenhouseId?: Maybe<IntegerFilter>
  description?: Maybe<TextFilter>
  testimonials?: Maybe<LinksFilter>
  name?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<JobsPageDepartmentModelFilter>>>
}

export enum JobsPageDepartmentModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PositionAsc = "position_ASC",
  PositionDesc = "position_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  GreenhouseIdAsc = "greenhouseId_ASC",
  GreenhouseIdDesc = "greenhouseId_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC"
}

/** Record of type Jobs Page: Department (jobs_page_department) */
export type JobsPageDepartmentRecord = {
  __typename?: "JobsPageDepartmentRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  backgroundImage?: Maybe<FileField>
  createdAt: Scalars["DateTime"]
  description?: Maybe<Scalars["String"]>
  greenhouseId?: Maybe<Scalars["IntType"]>
  id: Scalars["ItemId"]
  mission?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  position?: Maybe<Scalars["IntType"]>
  testimonials: Array<JobsEmployeeTestimonialRecord>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Jobs Page: Department (jobs_page_department) */
export type JobsPageDepartmentRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Jobs Page: Department (jobs_page_department) */
export type JobsPageDepartmentRecordDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Jobs Page: Department (jobs_page_department) */
export type JobsPageDepartmentRecordMissionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type JobsPageModelContentField =
  | CalloutSectionRecord
  | TextImageSectionRecord
  | ImageSectionRecord
  | HeroSectionRecord

/** Record of type Jobs Page (jobs_page) */
export type JobsPageRecord = {
  __typename?: "JobsPageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  content: Array<JobsPageModelContentField>
  createdAt: Scalars["DateTime"]
  headline?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  metadata?: Maybe<SeoField>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Jobs Page (jobs_page) */
export type JobsPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Specifies how to filter JSON fields */
export type JsonFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars["BooleanType"]>
}

export type LargeLogoGridSectionModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  companies?: Maybe<LinksFilter>
  description?: Maybe<TextFilter>
  headline?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<LargeLogoGridSectionModelFilter>>>
}

export enum LargeLogoGridSectionModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  HeadlineAsc = "headline_ASC",
  HeadlineDesc = "headline_DESC"
}

/** Record of type Large Logo Grid Section (large_logo_grid_section) */
export type LargeLogoGridSectionRecord = {
  __typename?: "LargeLogoGridSectionRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  companies: Array<CompanyRecord>
  createdAt: Scalars["DateTime"]
  description?: Maybe<Scalars["String"]>
  headline?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  updatedAt: Scalars["DateTime"]
}

/** Record of type Large Logo Grid Section (large_logo_grid_section) */
export type LargeLogoGridSectionRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Large Logo Grid Section (large_logo_grid_section) */
export type LargeLogoGridSectionRecordDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Learn Landing Page (learn_landing_page) */
export type LearnLandingPageRecord = {
  __typename?: "LearnLandingPageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  alertBanner?: Maybe<AlertBannerRecord>
  body?: Maybe<Scalars["String"]>
  createdAt: Scalars["DateTime"]
  heading?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  items: Array<VerticalTextBlockListItemRecord>
  metadata?: Maybe<SeoField>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Learn Landing Page (learn_landing_page) */
export type LearnLandingPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Learn Landing Page (learn_landing_page) */
export type LearnLandingPageRecordBodyArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Specifies how to filter Single-link fields */
export type LinkFilter = {
  /** Search for records with an exact match. The specified value must be a Record ID */
  eq?: Maybe<Scalars["ItemId"]>
  /** Exclude records with an exact match. The specified value must be a Record ID */
  neq?: Maybe<Scalars["ItemId"]>
  /** Filter records linked to one of the specified records */
  in?: Maybe<Array<Maybe<Scalars["ItemId"]>>>
  /** Filter records not linked to one of the specified records */
  notIn?: Maybe<Array<Maybe<Scalars["ItemId"]>>>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars["BooleanType"]>
}

export type LinkModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  position?: Maybe<PositionFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  external?: Maybe<BooleanFilter>
  url?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<LinkModelFilter>>>
}

export enum LinkModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PositionAsc = "position_ASC",
  PositionDesc = "position_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  ExternalAsc = "external_ASC",
  ExternalDesc = "external_DESC",
  UrlAsc = "url_ASC",
  UrlDesc = "url_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC"
}

/** Record of type Link (link) */
export type LinkRecord = {
  __typename?: "LinkRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  external?: Maybe<Scalars["BooleanType"]>
  id: Scalars["ItemId"]
  position?: Maybe<Scalars["IntType"]>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
  url?: Maybe<Scalars["String"]>
}

/** Record of type Link (link) */
export type LinkRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Specifies how to filter Multiple-links fields */
export type LinksFilter = {
  /** Search for records with an exact match. The specified values must be Record IDs */
  eq?: Maybe<Array<Maybe<Scalars["ItemId"]>>>
  /** Filter records linked to all of the specified records. The specified values must be Record IDs */
  allIn?: Maybe<Array<Maybe<Scalars["ItemId"]>>>
  /** Filter records linked to at least one of the specified records. The specified values must be Record IDs */
  anyIn?: Maybe<Array<Maybe<Scalars["ItemId"]>>>
  /** Filter records not linked to any of the specified records. The specified values must be Record IDs */
  notIn?: Maybe<Array<Maybe<Scalars["ItemId"]>>>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars["BooleanType"]>
}

export type ListItemModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  content?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<ListItemModelFilter>>>
}

export enum ListItemModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  ContentAsc = "content_ASC",
  ContentDesc = "content_DESC"
}

/** Record of type List Item (list_item) */
export type ListItemRecord = {
  __typename?: "ListItemRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  content?: Maybe<Scalars["String"]>
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  updatedAt: Scalars["DateTime"]
}

/** Record of type List Item (list_item) */
export type ListItemRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type LocalPageMetadataSetModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  pageTitle?: Maybe<StringFilter>
  metatags?: Maybe<SeoFilter>
  OR?: Maybe<Array<Maybe<LocalPageMetadataSetModelFilter>>>
}

export enum LocalPageMetadataSetModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  PageTitleAsc = "pageTitle_ASC",
  PageTitleDesc = "pageTitle_DESC"
}

/** Record of type Local Page Metadata Set (local_page_metadata_set) */
export type LocalPageMetadataSetRecord = {
  __typename?: "LocalPageMetadataSetRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  metatags?: Maybe<SeoField>
  pageTitle?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Local Page Metadata Set (local_page_metadata_set) */
export type LocalPageMetadataSetRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type LocationRoomModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  name?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<LocationRoomModelFilter>>>
}

export enum LocationRoomModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC"
}

/** Record of type Location Room (location_room) */
export type LocationRoomRecord = {
  __typename?: "LocationRoomRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  name?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Location Room (location_room) */
export type LocationRoomRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type LocationVenueModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  name?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<LocationVenueModelFilter>>>
}

export enum LocationVenueModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC"
}

/** Record of type Location Venue (location_venue) */
export type LocationVenueRecord = {
  __typename?: "LocationVenueRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  name?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Location Venue (location_venue) */
export type LocationVenueRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Logo Grid (logo_grid) */
export type LogoGridRecord = {
  __typename?: "LogoGridRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  companies: Array<CompanyRecord>
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  size?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Logo Grid (logo_grid) */
export type LogoGridRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type MajorHeadlineSectionModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  displayType?: Maybe<StringFilter>
  slug?: Maybe<SlugFilter>
  headline?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<MajorHeadlineSectionModelFilter>>>
}

export enum MajorHeadlineSectionModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  DisplayTypeAsc = "displayType_ASC",
  DisplayTypeDesc = "displayType_DESC",
  HeadlineAsc = "headline_ASC",
  HeadlineDesc = "headline_DESC"
}

/** Record of type Major Headline Section (major_headline_section) */
export type MajorHeadlineSectionRecord = {
  __typename?: "MajorHeadlineSectionRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  displayType?: Maybe<Scalars["String"]>
  headline?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  slug?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Major Headline Section (major_headline_section) */
export type MajorHeadlineSectionRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Mega Nav (mega_nav) */
export type MegaNavRecord = {
  __typename?: "MegaNavRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  callout?: Maybe<NavCalloutRecord>
  companyLinks: Array<LinkRecord>
  createdAt: Scalars["DateTime"]
  docsLinks: Array<LinkRecord>
  footerLinks: Array<LinkRecord>
  id: Scalars["ItemId"]
  partnersLinks: Array<LinkRecord>
  primaryLogo?: Maybe<FileField>
  primaryLogoWhite?: Maybe<FileField>
  productsLinks: Array<EnterpriseProductRecord>
  resourcesLinks: Array<LinkRecord>
  socialLinks: Array<SocialNetworkRecord>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Mega Nav (mega_nav) */
export type MegaNavRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type MiniCalloutModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  item?: Maybe<LinksFilter>
  OR?: Maybe<Array<Maybe<MiniCalloutModelFilter>>>
}

export enum MiniCalloutModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC"
}

/** Record of type Mini Callouts (mini_callout) */
export type MiniCalloutRecord = {
  __typename?: "MiniCalloutRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  item: Array<CalloutItemRecord>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Mini Callouts (mini_callout) */
export type MiniCalloutRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Multi Button (multi_button) */
export type MultiButtonRecord = {
  __typename?: "MultiButtonRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  buttons: Array<Button2Record>
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  updatedAt: Scalars["DateTime"]
}

/** Record of type Multi Button (multi_button) */
export type MultiButtonRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export enum MuxThumbnailFormatType {
  Jpg = "jpg",
  Png = "png",
  Gif = "gif"
}

export type NavCalloutModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  button?: Maybe<LinkFilter>
  headline?: Maybe<StringFilter>
  body?: Maybe<TextFilter>
  OR?: Maybe<Array<Maybe<NavCalloutModelFilter>>>
}

export enum NavCalloutModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  HeadlineAsc = "headline_ASC",
  HeadlineDesc = "headline_DESC"
}

/** Record of type Nav Callout (nav_callout) */
export type NavCalloutRecord = {
  __typename?: "NavCalloutRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  body?: Maybe<Scalars["String"]>
  button?: Maybe<LinkRecord>
  createdAt: Scalars["DateTime"]
  headline?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  updatedAt: Scalars["DateTime"]
}

/** Record of type Nav Callout (nav_callout) */
export type NavCalloutRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Nav Callout (nav_callout) */
export type NavCalloutRecordBodyArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type NavPromoModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  link?: Maybe<LinkFilter>
  description?: Maybe<TextFilter>
  showCalloutPlayIcon?: Maybe<BooleanFilter>
  primaryLink?: Maybe<LinkFilter>
  theme?: Maybe<StringFilter>
  secondaryLink?: Maybe<LinkFilter>
  eyebrow?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  image?: Maybe<FileFilter>
  layout?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<NavPromoModelFilter>>>
}

export enum NavPromoModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  ShowCalloutPlayIconAsc = "showCalloutPlayIcon_ASC",
  ShowCalloutPlayIconDesc = "showCalloutPlayIcon_DESC",
  ThemeAsc = "theme_ASC",
  ThemeDesc = "theme_DESC",
  EyebrowAsc = "eyebrow_ASC",
  EyebrowDesc = "eyebrow_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  LayoutAsc = "layout_ASC",
  LayoutDesc = "layout_DESC"
}

/** Record of type Nav Promo (nav_promo) */
export type NavPromoRecord = {
  __typename?: "NavPromoRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  description?: Maybe<Scalars["String"]>
  eyebrow?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  image?: Maybe<FileField>
  layout?: Maybe<Scalars["String"]>
  link?: Maybe<LinkRecord>
  primaryLink?: Maybe<LinkRecord>
  secondaryLink?: Maybe<LinkRecord>
  showCalloutPlayIcon?: Maybe<Scalars["BooleanType"]>
  theme?: Maybe<Scalars["String"]>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Nav Promo (nav_promo) */
export type NavPromoRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Nav Promo (nav_promo) */
export type NavPromoRecordDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Nav (nav) */
export type NavRecord = {
  __typename?: "NavRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  companyPromos: Array<NavPromoRecord>
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  learnPromos: Array<NavPromoRecord>
  partnersPromos: Array<NavPromoRecord>
  productsPromos: Array<NavPromoRecord>
  solutionsPromos: Array<NavPromoRecord>
  supportPromos: Array<NavPromoRecord>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Nav (nav) */
export type NavRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type NewsItemModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  callout?: Maybe<StringFilter>
  url?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  external?: Maybe<BooleanFilter>
  eyebrow?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<NewsItemModelFilter>>>
}

export enum NewsItemModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  CalloutAsc = "callout_ASC",
  CalloutDesc = "callout_DESC",
  UrlAsc = "url_ASC",
  UrlDesc = "url_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  ExternalAsc = "external_ASC",
  ExternalDesc = "external_DESC",
  EyebrowAsc = "eyebrow_ASC",
  EyebrowDesc = "eyebrow_DESC"
}

/** Record of type News Item (news_item) */
export type NewsItemRecord = {
  __typename?: "NewsItemRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  callout?: Maybe<Scalars["String"]>
  createdAt: Scalars["DateTime"]
  external?: Maybe<Scalars["BooleanType"]>
  eyebrow?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
  url?: Maybe<Scalars["String"]>
}

/** Record of type News Item (news_item) */
export type NewsItemRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Nomad Product Page (nomad_product_page) */
export type NomadProductPageRecord = {
  __typename?: "NomadProductPageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  alertBanner?: Maybe<AlertBannerRecord>
  caseStudiesSection?: Maybe<SectionBlockV2Record>
  companiesUsingNomad: Array<CompanyRecord>
  createdAt: Scalars["DateTime"]
  ctaSection?: Maybe<SectionBlockV2Record>
  ctaSectionHeader?: Maybe<SbcSectionHeaderRecord>
  enterprisePricingPage?: Maybe<SectionBlockPageRecord>
  enterpriseTrialForm?: Maybe<TrialFormPageRecord>
  heroSection?: Maybe<HeroSectionRecord>
  howNomadWorksSection?: Maybe<SectionBlockV2Record>
  id: Scalars["ItemId"]
  metadata?: Maybe<SeoField>
  nomadPrinciples?: Maybe<SectionBlockV2Record>
  principlesHeadline?: Maybe<Scalars["String"]>
  resourcesSectionHeader?: Maybe<SbcSectionHeaderRecord>
  staticDynamicDiagram?: Maybe<SbcBeforeAfterDiagramRecord>
  staticDynamicHeader?: Maybe<Scalars["String"]>
  subnav?: Maybe<ProductSubnavRecord>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
  useCasePages: Array<SectionBlockPageRecord>
  useCases?: Maybe<SbcUseCasesSectionRecord>
}

/** Record of type Nomad Product Page (nomad_product_page) */
export type NomadProductPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type OfficeHoursSessionCopy1ModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  description?: Maybe<TextFilter>
  meetingLink?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  endTime?: Maybe<DateTimeFilter>
  startTime?: Maybe<DateTimeFilter>
  OR?: Maybe<Array<Maybe<OfficeHoursSessionCopy1ModelFilter>>>
}

export enum OfficeHoursSessionCopy1ModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  MeetingLinkAsc = "meetingLink_ASC",
  MeetingLinkDesc = "meetingLink_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  EndTimeAsc = "endTime_ASC",
  EndTimeDesc = "endTime_DESC",
  StartTimeAsc = "startTime_ASC",
  StartTimeDesc = "startTime_DESC"
}

/** Record of type Office Hours (copy #1) (office_hours_session_copy_1) */
export type OfficeHoursSessionCopy1Record = {
  __typename?: "OfficeHoursSessionCopy1Record"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  description?: Maybe<Scalars["String"]>
  endTime?: Maybe<Scalars["DateTime"]>
  id: Scalars["ItemId"]
  meetingLink?: Maybe<Scalars["String"]>
  startTime?: Maybe<Scalars["DateTime"]>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Office Hours (copy #1) (office_hours_session_copy_1) */
export type OfficeHoursSessionCopy1Record_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Office Hours (copy #1) (office_hours_session_copy_1) */
export type OfficeHoursSessionCopy1RecordDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type OfficeHoursSessionModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  endTime?: Maybe<DateTimeFilter>
  description?: Maybe<TextFilter>
  meetingLink?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  startTime?: Maybe<DateTimeFilter>
  OR?: Maybe<Array<Maybe<OfficeHoursSessionModelFilter>>>
}

export enum OfficeHoursSessionModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  EndTimeAsc = "endTime_ASC",
  EndTimeDesc = "endTime_DESC",
  MeetingLinkAsc = "meetingLink_ASC",
  MeetingLinkDesc = "meetingLink_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  StartTimeAsc = "startTime_ASC",
  StartTimeDesc = "startTime_DESC"
}

/** Record of type Office Hours (office_hours_session) */
export type OfficeHoursSessionRecord = {
  __typename?: "OfficeHoursSessionRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  description?: Maybe<Scalars["String"]>
  endTime?: Maybe<Scalars["DateTime"]>
  id: Scalars["ItemId"]
  meetingLink?: Maybe<Scalars["String"]>
  startTime?: Maybe<Scalars["DateTime"]>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Office Hours (office_hours_session) */
export type OfficeHoursSessionRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Office Hours (office_hours_session) */
export type OfficeHoursSessionRecordDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type OnDemandResourceModelBodyContentField =
  | TextHeadlineSectionRecord
  | TextSectionRecord
  | BasicTableRecord

export type OnDemandResourceModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  awsCampaign?: Maybe<BooleanFilter>
  targetLink?: Maybe<LinkFilter>
  showDemoRequest?: Maybe<BooleanFilter>
  sfdcDescription?: Maybe<StringFilter>
  events?: Maybe<LinksFilter>
  organizations?: Maybe<LinksFilter>
  people?: Maybe<LinksFilter>
  product?: Maybe<LinksFilter>
  bodyContent?: Maybe<LinksFilter>
  heroContent?: Maybe<LinksFilter>
  backgroundImage?: Maybe<FileFilter>
  contentLength?: Maybe<StringFilter>
  buttonCtaText?: Maybe<StringFilter>
  formTitle?: Maybe<StringFilter>
  draft?: Maybe<BooleanFilter>
  slug?: Maybe<SlugFilter>
  description?: Maybe<TextFilter>
  title?: Maybe<StringFilter>
  industry?: Maybe<LinksFilter>
  infrastructureProvider?: Maybe<LinksFilter>
  primaryProduct?: Maybe<LinkFilter>
  OR?: Maybe<Array<Maybe<OnDemandResourceModelFilter>>>
}

export type OnDemandResourceModelHeroContentField =
  | TextHeadlineSectionRecord
  | TextSectionRecord
  | SpeakersSectionRecord

export enum OnDemandResourceModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  AwsCampaignAsc = "awsCampaign_ASC",
  AwsCampaignDesc = "awsCampaign_DESC",
  ShowDemoRequestAsc = "showDemoRequest_ASC",
  ShowDemoRequestDesc = "showDemoRequest_DESC",
  SfdcDescriptionAsc = "sfdcDescription_ASC",
  SfdcDescriptionDesc = "sfdcDescription_DESC",
  ContentLengthAsc = "contentLength_ASC",
  ContentLengthDesc = "contentLength_DESC",
  ButtonCtaTextAsc = "buttonCtaText_ASC",
  ButtonCtaTextDesc = "buttonCtaText_DESC",
  FormTitleAsc = "formTitle_ASC",
  FormTitleDesc = "formTitle_DESC",
  DraftAsc = "draft_ASC",
  DraftDesc = "draft_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC"
}

export type OnDemandResourceModelProductField =
  | OpenSourceToolRecord
  | EnterpriseProductRecord

export type OnDemandResourceModelTargetLinkField =
  | TemplatePageRecord
  | BlogPostRecord
  | ResourceRecord
  | WhitePaperRecord

/** Record of type On Demand Resource (on_demand_resource) */
export type OnDemandResourceRecord = {
  __typename?: "OnDemandResourceRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  awsCampaign?: Maybe<Scalars["BooleanType"]>
  backgroundImage?: Maybe<FileField>
  bodyContent: Array<OnDemandResourceModelBodyContentField>
  buttonCtaText?: Maybe<Scalars["String"]>
  contentLength?: Maybe<Scalars["String"]>
  createdAt: Scalars["DateTime"]
  description?: Maybe<Scalars["String"]>
  draft?: Maybe<Scalars["BooleanType"]>
  events: Array<EventRecord>
  formTitle?: Maybe<Scalars["String"]>
  heroContent: Array<OnDemandResourceModelHeroContentField>
  id: Scalars["ItemId"]
  industry: Array<ResourceIndustryRecord>
  infrastructureProvider: Array<ResourceInfrastructureProviderRecord>
  organizations: Array<CompanyRecord>
  people: Array<PersonRecord>
  primaryProduct?: Maybe<OpenSourceToolRecord>
  product: Array<OnDemandResourceModelProductField>
  sfdcDescription?: Maybe<Scalars["String"]>
  showDemoRequest?: Maybe<Scalars["BooleanType"]>
  slug?: Maybe<Scalars["String"]>
  targetLink?: Maybe<OnDemandResourceModelTargetLinkField>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type On Demand Resource (on_demand_resource) */
export type OnDemandResourceRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type On Demand Resource (on_demand_resource) */
export type OnDemandResourceRecordDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type OpenSourceToolCategoryModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  name?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<OpenSourceToolCategoryModelFilter>>>
}

export enum OpenSourceToolCategoryModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC"
}

/** Record of type Open Source Tool Category (open_source_tool_category) */
export type OpenSourceToolCategoryRecord = {
  __typename?: "OpenSourceToolCategoryRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  name?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Open Source Tool Category (open_source_tool_category) */
export type OpenSourceToolCategoryRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type OpenSourceToolModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  position?: Maybe<PositionFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  category?: Maybe<LinkFilter>
  description?: Maybe<TextFilter>
  logoLight?: Maybe<FileFilter>
  logo?: Maybe<FileFilter>
  name?: Maybe<StringFilter>
  learnUrl?: Maybe<StringFilter>
  logoColor?: Maybe<FileFilter>
  website?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<OpenSourceToolModelFilter>>>
}

export enum OpenSourceToolModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PositionAsc = "position_ASC",
  PositionDesc = "position_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  LearnUrlAsc = "learnUrl_ASC",
  LearnUrlDesc = "learnUrl_DESC",
  WebsiteAsc = "website_ASC",
  WebsiteDesc = "website_DESC"
}

/** Record of type Open Source Tool (open_source_tool) */
export type OpenSourceToolRecord = {
  __typename?: "OpenSourceToolRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  category?: Maybe<OpenSourceToolCategoryRecord>
  createdAt: Scalars["DateTime"]
  description?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  learnUrl?: Maybe<Scalars["String"]>
  logo?: Maybe<FileField>
  logoColor?: Maybe<FileField>
  logoLight?: Maybe<FileField>
  name?: Maybe<Scalars["String"]>
  position?: Maybe<Scalars["IntType"]>
  updatedAt: Scalars["DateTime"]
  website?: Maybe<Scalars["String"]>
}

/** Record of type Open Source Tool (open_source_tool) */
export type OpenSourceToolRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Open Source Tool (open_source_tool) */
export type OpenSourceToolRecordDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Specifies how to filter by image orientation */
export type OrientationFilter = {
  /** Search uploads with the specified orientation */
  eq?: Maybe<UploadOrientation>
  /** Exclude uploads with the specified orientation */
  neq?: Maybe<UploadOrientation>
}

export type PackageFeatureModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  tooltip?: Maybe<StringFilter>
  url?: Maybe<StringFilter>
  text?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<PackageFeatureModelFilter>>>
}

export enum PackageFeatureModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  TooltipAsc = "tooltip_ASC",
  TooltipDesc = "tooltip_DESC",
  UrlAsc = "url_ASC",
  UrlDesc = "url_DESC",
  TextAsc = "text_ASC",
  TextDesc = "text_DESC"
}

/** Record of type Package Feature (package_feature) */
export type PackageFeatureRecord = {
  __typename?: "PackageFeatureRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  text?: Maybe<Scalars["String"]>
  tooltip?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
  url?: Maybe<Scalars["String"]>
}

/** Record of type Package Feature (package_feature) */
export type PackageFeatureRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type PackageOptionModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  packageFeatures?: Maybe<LinksFilter>
  buttonUrl?: Maybe<StringFilter>
  subheading?: Maybe<StringFilter>
  enterprise?: Maybe<BooleanFilter>
  slug?: Maybe<SlugFilter>
  heading?: Maybe<StringFilter>
  product?: Maybe<LinkFilter>
  OR?: Maybe<Array<Maybe<PackageOptionModelFilter>>>
}

export enum PackageOptionModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  ButtonUrlAsc = "buttonUrl_ASC",
  ButtonUrlDesc = "buttonUrl_DESC",
  SubheadingAsc = "subheading_ASC",
  SubheadingDesc = "subheading_DESC",
  EnterpriseAsc = "enterprise_ASC",
  EnterpriseDesc = "enterprise_DESC",
  HeadingAsc = "heading_ASC",
  HeadingDesc = "heading_DESC"
}

/** Record of type Package Option (package_option) */
export type PackageOptionRecord = {
  __typename?: "PackageOptionRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  buttonUrl?: Maybe<Scalars["String"]>
  createdAt: Scalars["DateTime"]
  enterprise?: Maybe<Scalars["BooleanType"]>
  heading?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  packageFeatures: Array<PackageFeatureRecord>
  product?: Maybe<EnterpriseProductRecord>
  slug?: Maybe<Scalars["String"]>
  subheading?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Package Option (package_option) */
export type PackageOptionRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Package Section (package_section) */
export type PackageSectionRecord = {
  __typename?: "PackageSectionRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  packageOptions: Array<PackageOptionRecord>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Package Section (package_section) */
export type PackageSectionRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type PartnersPageModelContentField =
  | HeroSectionRecord
  | LargeLogoGridSectionRecord

/** Record of type Partners Page (deprecated) (partners_page) */
export type PartnersPageRecord = {
  __typename?: "PartnersPageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  cloudPartners: Array<CompanyRecord>
  cloudPartnersDescription?: Maybe<Scalars["String"]>
  content: Array<PartnersPageModelContentField>
  createdAt: Scalars["DateTime"]
  hero?: Maybe<HeroSectionRecord>
  id: Scalars["ItemId"]
  metadata?: Maybe<SeoField>
  resellerPartners: Array<CompanyRecord>
  resellerPartnersDescription?: Maybe<Scalars["String"]>
  resellerPartnersOpen: Array<CompanyRecord>
  resellerPartnersOpenSize?: Maybe<Scalars["String"]>
  resellerPartnersOpenTitle?: Maybe<Scalars["String"]>
  resellerPartnersPremier: Array<CompanyRecord>
  resellerPartnersPremierSize?: Maybe<Scalars["String"]>
  resellerPartnersPremierTitle?: Maybe<Scalars["String"]>
  systemIntegratorPartners: Array<CompanyRecord>
  systemIntegratorPartnersDescription?: Maybe<Scalars["String"]>
  systemIntegratorPartnersMember: Array<CompanyRecord>
  systemIntegratorPartnersMemberSize?: Maybe<Scalars["String"]>
  systemIntegratorPartnersMemberTitle?: Maybe<Scalars["String"]>
  systemIntegratorPartnersOpen: Array<CompanyRecord>
  systemIntegratorPartnersOpenSize?: Maybe<Scalars["String"]>
  systemIntegratorPartnersOpenTitle?: Maybe<Scalars["String"]>
  systemIntegratorPartnersPremier: Array<CompanyRecord>
  systemIntegratorPartnersPremierSize?: Maybe<Scalars["String"]>
  systemIntegratorPartnersPremierTitle?: Maybe<Scalars["String"]>
  technologyPartners: Array<CompanyRecord>
  technologyPartnersDescription?: Maybe<Scalars["String"]>
  trainingPartners: Array<CompanyRecord>
  trainingPartnersDescription?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Partners Page (deprecated) (partners_page) */
export type PartnersPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Partners Page (deprecated) (partners_page) */
export type PartnersPageRecordCloudPartnersDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Partners Page (deprecated) (partners_page) */
export type PartnersPageRecordResellerPartnersDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Partners Page (deprecated) (partners_page) */
export type PartnersPageRecordSystemIntegratorPartnersDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Partners Page (deprecated) (partners_page) */
export type PartnersPageRecordTechnologyPartnersDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Partners Page (deprecated) (partners_page) */
export type PartnersPageRecordTrainingPartnersDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type PersonListModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  people?: Maybe<LinksFilter>
  headline?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<PersonListModelFilter>>>
}

export enum PersonListModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  HeadlineAsc = "headline_ASC",
  HeadlineDesc = "headline_DESC"
}

/** Record of type Person List (person_list) */
export type PersonListRecord = {
  __typename?: "PersonListRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  headline?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  people: Array<PersonRecord>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Person List (person_list) */
export type PersonListRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type PersonModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  position?: Maybe<PositionFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  company?: Maybe<LinkFilter>
  socialProfiles?: Maybe<LinksFilter>
  bio?: Maybe<TextFilter>
  photo?: Maybe<FileFilter>
  jobTitle?: Maybe<StringFilter>
  name?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<PersonModelFilter>>>
}

export enum PersonModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PositionAsc = "position_ASC",
  PositionDesc = "position_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  JobTitleAsc = "jobTitle_ASC",
  JobTitleDesc = "jobTitle_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC"
}

/** Record of type Person (person) */
export type PersonRecord = {
  __typename?: "PersonRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  bio?: Maybe<Scalars["String"]>
  company?: Maybe<CompanyRecord>
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  jobTitle?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  photo?: Maybe<FileField>
  position?: Maybe<Scalars["IntType"]>
  socialProfiles: Array<SocialNetworkRecord>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Person (person) */
export type PersonRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Person (person) */
export type PersonRecordBioArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Specifies how to filter by position (sorted and tree-like collections) */
export type PositionFilter = {
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: Maybe<Scalars["IntType"]>
  /** Filter records with a value that's less than the one specified */
  lt?: Maybe<Scalars["IntType"]>
  /** Filter records with a value that's greater than or equal to the one specified */
  gte?: Maybe<Scalars["IntType"]>
  /** Filter records with a value that's less or equal than the one specified */
  lte?: Maybe<Scalars["IntType"]>
  /** Search for records with an exact match */
  eq?: Maybe<Scalars["IntType"]>
  /** Exclude records with an exact match */
  neq?: Maybe<Scalars["IntType"]>
}

export type PressLinkModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  external?: Maybe<BooleanFilter>
  detail?: Maybe<StringFilter>
  date?: Maybe<DateFilter>
  url?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<PressLinkModelFilter>>>
}

export enum PressLinkModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  ExternalAsc = "external_ASC",
  ExternalDesc = "external_DESC",
  DetailAsc = "detail_ASC",
  DetailDesc = "detail_DESC",
  DateAsc = "date_ASC",
  DateDesc = "date_DESC",
  UrlAsc = "url_ASC",
  UrlDesc = "url_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC"
}

/** Record of type Press Link (press_link) */
export type PressLinkRecord = {
  __typename?: "PressLinkRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  date?: Maybe<Scalars["Date"]>
  detail?: Maybe<Scalars["String"]>
  external?: Maybe<Scalars["BooleanType"]>
  id: Scalars["ItemId"]
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
  url?: Maybe<Scalars["String"]>
}

/** Record of type Press Link (press_link) */
export type PressLinkRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Press Page (press_page) */
export type PressPageRecord = {
  __typename?: "PressPageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  events: Array<PressLinkRecord>
  headline?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  mediaAnalystCoverage: Array<PressLinkRecord>
  metadata?: Maybe<SeoField>
  pressReleases: Array<PressLinkRecord>
  showDemoRequest?: Maybe<Scalars["BooleanType"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Press Page (press_page) */
export type PressPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type PricingPageModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  productOfferings?: Maybe<LinksFilter>
  packages?: Maybe<LinkFilter>
  product?: Maybe<LinkFilter>
  OR?: Maybe<Array<Maybe<PricingPageModelFilter>>>
}

export enum PricingPageModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC"
}

/** Record of type Pricing Page (pricing_page) */
export type PricingPageRecord = {
  __typename?: "PricingPageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  packages?: Maybe<ProductPackageSectionRecord>
  product?: Maybe<HashicorpProductRecord>
  productOfferings: Array<ProductOfferingRecord>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Pricing Page (pricing_page) */
export type PricingPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Principles Page (principles_page) */
export type PrinciplesPageRecord = {
  __typename?: "PrinciplesPageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  content?: Maybe<Array<Maybe<ContentSectionRecord>>>
  createdAt: Scalars["DateTime"]
  footerHero?: Maybe<HeroSectionRecord>
  hero?: Maybe<HeroSectionRecord>
  id: Scalars["ItemId"]
  mainImageGrid: Array<FileField>
  metadata?: Maybe<SeoField>
  name?: Maybe<Scalars["String"]>
  pageContent?: Maybe<Array<Maybe<ExpandableTextWithPhotoRecord>>>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Principles Page (principles_page) */
export type PrinciplesPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type ProductCertificationPageModelContentField =
  | MajorHeadlineSectionRecord
  | TextSectionRecord

export type ProductCertificationPageModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  position?: Maybe<PositionFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  learnUrl?: Maybe<StringFilter>
  registerUrl?: Maybe<StringFilter>
  heroIntro?: Maybe<TextFilter>
  signupFormIntro?: Maybe<TextFilter>
  signupFormHeading?: Maybe<StringFilter>
  slug?: Maybe<SlugFilter>
  overview?: Maybe<TextFilter>
  heading?: Maybe<StringFilter>
  badge?: Maybe<FileFilter>
  product?: Maybe<LinkFilter>
  seoTags?: Maybe<SeoFilter>
  content?: Maybe<LinksFilter>
  title?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<ProductCertificationPageModelFilter>>>
}

export enum ProductCertificationPageModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PositionAsc = "position_ASC",
  PositionDesc = "position_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  LearnUrlAsc = "learnUrl_ASC",
  LearnUrlDesc = "learnUrl_DESC",
  RegisterUrlAsc = "registerUrl_ASC",
  RegisterUrlDesc = "registerUrl_DESC",
  SignupFormHeadingAsc = "signupFormHeading_ASC",
  SignupFormHeadingDesc = "signupFormHeading_DESC",
  HeadingAsc = "heading_ASC",
  HeadingDesc = "heading_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC"
}

/** Record of type Product Certification Page (product_certification_page) */
export type ProductCertificationPageRecord = {
  __typename?: "ProductCertificationPageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  badge?: Maybe<FileField>
  content: Array<ProductCertificationPageModelContentField>
  createdAt: Scalars["DateTime"]
  heading?: Maybe<Scalars["String"]>
  heroIntro?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  learnUrl?: Maybe<Scalars["String"]>
  overview?: Maybe<Scalars["String"]>
  position?: Maybe<Scalars["IntType"]>
  product?: Maybe<HashicorpProductRecord>
  registerUrl?: Maybe<Scalars["String"]>
  seoTags?: Maybe<SeoField>
  signupFormHeading?: Maybe<Scalars["String"]>
  signupFormIntro?: Maybe<Scalars["String"]>
  slug?: Maybe<Scalars["String"]>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Product Certification Page (product_certification_page) */
export type ProductCertificationPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Product Certification Page (product_certification_page) */
export type ProductCertificationPageRecordHeroIntroArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Product Certification Page (product_certification_page) */
export type ProductCertificationPageRecordOverviewArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Product Certification Page (product_certification_page) */
export type ProductCertificationPageRecordSignupFormIntroArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Product Integration (product_integration) */
export type ProductIntegrationRecord = {
  __typename?: "ProductIntegrationRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  diagramLogoPlacement?: Maybe<Scalars["String"]>
  docsLink?: Maybe<Scalars["String"]>
  gettingStartedText?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  integrationType?: Maybe<IntegrationTypeRecord>
  productDiagram?: Maybe<FileField>
  relatedResources: Array<LinkRecord>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Product Integration (product_integration) */
export type ProductIntegrationRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type ProductOfferingModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  enterprise?: Maybe<BooleanFilter>
  workspaces?: Maybe<StringFilter>
  cost?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  support?: Maybe<StringFilter>
  paymentModel?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<ProductOfferingModelFilter>>>
}

export enum ProductOfferingModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  EnterpriseAsc = "enterprise_ASC",
  EnterpriseDesc = "enterprise_DESC",
  WorkspacesAsc = "workspaces_ASC",
  WorkspacesDesc = "workspaces_DESC",
  CostAsc = "cost_ASC",
  CostDesc = "cost_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  SupportAsc = "support_ASC",
  SupportDesc = "support_DESC",
  PaymentModelAsc = "paymentModel_ASC",
  PaymentModelDesc = "paymentModel_DESC"
}

/** Record of type Product Offering (product_offering) */
export type ProductOfferingRecord = {
  __typename?: "ProductOfferingRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  cost?: Maybe<Scalars["String"]>
  createdAt: Scalars["DateTime"]
  enterprise?: Maybe<Scalars["BooleanType"]>
  id: Scalars["ItemId"]
  paymentModel?: Maybe<Scalars["String"]>
  support?: Maybe<Scalars["String"]>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
  workspaces?: Maybe<Scalars["String"]>
}

/** Record of type Product Offering (product_offering) */
export type ProductOfferingRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type ProductPackageSectionModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  packageOptions?: Maybe<LinksFilter>
  headline?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<ProductPackageSectionModelFilter>>>
}

export enum ProductPackageSectionModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  HeadlineAsc = "headline_ASC",
  HeadlineDesc = "headline_DESC"
}

/** Record of type Product Package Section (product_package_section) */
export type ProductPackageSectionRecord = {
  __typename?: "ProductPackageSectionRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  headline?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  packageOptions: Array<PackageOptionRecord>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Product Package Section (product_package_section) */
export type ProductPackageSectionRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type ProductPricingPlanModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  url?: Maybe<StringFilter>
  featureLink?: Maybe<LinkFilter>
  isFreeDownload?: Maybe<BooleanFilter>
  shortDescription?: Maybe<StringFilter>
  description?: Maybe<TextFilter>
  title?: Maybe<StringFilter>
  internalDescriptiveTitle?: Maybe<StringFilter>
  link?: Maybe<LinkFilter>
  target?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<ProductPricingPlanModelFilter>>>
}

export enum ProductPricingPlanModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  UrlAsc = "url_ASC",
  UrlDesc = "url_DESC",
  IsFreeDownloadAsc = "isFreeDownload_ASC",
  IsFreeDownloadDesc = "isFreeDownload_DESC",
  ShortDescriptionAsc = "shortDescription_ASC",
  ShortDescriptionDesc = "shortDescription_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  InternalDescriptiveTitleAsc = "internalDescriptiveTitle_ASC",
  InternalDescriptiveTitleDesc = "internalDescriptiveTitle_DESC",
  TargetAsc = "target_ASC",
  TargetDesc = "target_DESC"
}

/** Record of type · Product Pricing Plan (product_pricing_plan) */
export type ProductPricingPlanRecord = {
  __typename?: "ProductPricingPlanRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  description?: Maybe<Scalars["String"]>
  featureLink?: Maybe<LinkRecord>
  id: Scalars["ItemId"]
  internalDescriptiveTitle?: Maybe<Scalars["String"]>
  isFreeDownload?: Maybe<Scalars["BooleanType"]>
  link?: Maybe<LinkRecord>
  shortDescription?: Maybe<Scalars["String"]>
  target?: Maybe<Scalars["String"]>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
  url?: Maybe<Scalars["String"]>
}

/** Record of type · Product Pricing Plan (product_pricing_plan) */
export type ProductPricingPlanRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type · Product Pricing Plan (product_pricing_plan) */
export type ProductPricingPlanRecordDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type ProductSubnavModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  product?: Maybe<LinkFilter>
  practitionerFocusedLinks?: Maybe<LinksFilter>
  tdmFocusedLinks?: Maybe<LinksFilter>
  name?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<ProductSubnavModelFilter>>>
}

export enum ProductSubnavModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC"
}

export type ProductSubnavModelPractitionerFocusedLinksField =
  | LinkRecord
  | DropdownLinkRecord

export type ProductSubnavModelTdmFocusedLinksField =
  | LinkRecord
  | DropdownLinkRecord

/** Record of type Product Subnav (product_subnav) */
export type ProductSubnavRecord = {
  __typename?: "ProductSubnavRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  name?: Maybe<Scalars["String"]>
  practitionerFocusedLinks: Array<
    ProductSubnavModelPractitionerFocusedLinksField
  >
  product?: Maybe<EnterpriseProductRecord>
  tdmFocusedLinks: Array<ProductSubnavModelTdmFocusedLinksField>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Product Subnav (product_subnav) */
export type ProductSubnavRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type ProductTabFeatureModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  text?: Maybe<TextFilter>
  OR?: Maybe<Array<Maybe<ProductTabFeatureModelFilter>>>
}

export enum ProductTabFeatureModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC"
}

/** Record of type Product Tab Feature (product_tab_feature) */
export type ProductTabFeatureRecord = {
  __typename?: "ProductTabFeatureRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  text?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Product Tab Feature (product_tab_feature) */
export type ProductTabFeatureRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Product Tab Feature (product_tab_feature) */
export type ProductTabFeatureRecordTextArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type ProductTypeModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  name?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<ProductTypeModelFilter>>>
}

export enum ProductTypeModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC"
}

/** Record of type Product Type (product_type) */
export type ProductTypeRecord = {
  __typename?: "ProductTypeRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  name?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Product Type (product_type) */
export type ProductTypeRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type Query = {
  __typename?: "Query"
  /** Returns meta information regarding a record collection */
  _allAlertBannersMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allAlertsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allBasicTablesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allBlogPostCategoriesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allBlogPostV2sMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allBlogPostsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allButton2sMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allButtonThemesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allCallToActionsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allCalloutItemsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allCalloutSectionsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allCloudPartnerPagesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allCodeSamplesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allCodeblockLanguagesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allCompaniesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allConsulGraphicSectionsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allContactCategoriesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allContactFormPagesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allDropdownLinksMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allEmbeddedPodcastSectionsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allEmbeddedSlidesSectionsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allEmployeePagesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allEnterpriseFeaturesCategoriesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allEnterprisePricingSectionsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allEnterpriseProductPagesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allEnterpriseProductSubnavsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allEnterpriseProductUseCasePagesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allEnterpriseProductsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allEventTypesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allEventsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allExperienceLevelsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allExternalResourcesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allFaqCategoriesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allFeatureTableColumnsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allFeatureTableRowValuesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allFeatureTableRowsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allFeatureTableTabsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allFeatureTablesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allFormContactTypesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allFormMultiSelectOptionsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allHashiconfBasicPagesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allHashiconfFeaturedSpeakersSectionsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allHashiconfLandingPagesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allHashiconfLiveStreamPagesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allHashiconfScheduleDaysMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allHashiconfScheduleItemsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allHashiconfScheduleLiteSectionsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allHashiconfSchedulePagesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allHashiconfSectionBlockPagesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allHashiconfSectionBlocksMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allHashiconfSessionsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allHashiconfSpeakersMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allHashiconfSpeakersPagesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allHashiconfSponsorSectionsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allHashiconfTextAndFullImagesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allHashiconfTrainingDaysMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allHashiconfTrainingsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allHashiconfsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allHashicorpProductsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allHeroFormLeadsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allHeroSectionsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allHeroVideoCarouselItemsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allHomepageProductTabsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allHtmlSectionsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allIconLinksMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allImageLockupsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allImageSectionsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allImageTextCarouselsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allIntegrationTypeCategoriesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allIntegrationTypesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allJobsEmployeeTestimonialsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allJobsPageDepartmentsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allLargeLogoGridSectionsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allLinksMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allListItemsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allLocalPageMetadataSetsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allLocationRoomsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allLocationVenuesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allMajorHeadlineSectionsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allMiniCalloutsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allNavCalloutsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allNavPromosMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allNewsItemsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allOfficeHoursSessionCopy1sMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allOfficeHoursSessionsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allOnDemandResourcesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allOpenSourceToolCategoriesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allOpenSourceToolsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allPackageFeaturesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allPackageOptionsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allPeopleMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allPersonListsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allPressLinksMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allPricingPagesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allProductCertificationPagesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allProductOfferingsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allProductPackageSectionsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allProductPricingPlansMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allProductSubnavsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allProductTabFeaturesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allProductTypesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allRelatedItemsSectionsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allResourceContentTypesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allResourceIndustriesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allResourceInfrastructureProvidersMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allResourceMediaTypesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allResourcesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allSalesFormPagesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allSalesFormsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allSbcAlertsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allSbcBeforeAfterDiagramsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allSbcButtonV2sMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allSbcButtonsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allSbcCalloutSectionsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allSbcCalloutsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allSbcCaseStudiesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allSbcCaseStudySlidersMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allSbcCodeBlocksMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allSbcImagesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allSbcLinkedTextSummaryListsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allSbcLogoGridsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allSbcMultiButtonsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allSbcProductFeatureTablesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allSbcProductPricingsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allSbcResourcesSlidersMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allSbcSectionHeadersMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allSbcTextAndContentsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allSbcTextsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allSbcUseCasesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allSbcUseCasesSectionsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allSblHorizontalsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allSblVerticalsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allSectionBlockPagesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allSectionBlockV2sMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allSectionBlocksMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allSectionDividersMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allSectionThemesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allSentinelProductTabsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allSocialNetworkIconsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allSocialNetworksMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allSpeakersSectionsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allSplitCtaItemsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allSplitCtaSectionsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allStaticDynamicSectionsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allTemplatePagesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allTerraformGraphSectionsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allTerraformOfferingCategoriesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allTerraformOfferingTablesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allTerraformOfferingTiersMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allTerraformOfferingsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allTestimonialsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allTextHeadlineAndGridSectionsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allTextHeadlineSectionsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allTextImageSectionsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allTextSectionsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allTmpmodelButtonsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allTmpmodelProductUseCasePagesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allTrainingCoursesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allTrainingPartnerSectionsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allTrialFormPagesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allTwoColumnTextSectionsMeta: CollectionMetadata
  /** Returns meta information regarding an assets collection */
  _allUploadsMeta?: Maybe<CollectionMetadata>
  /** Returns meta information regarding a record collection */
  _allUseCasePageDropdownsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allVaultIntegrationSectionsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allVerticalTextBlockListItemsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allVerticalTextBlockListSectionsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allVideoSectionsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allVideoSourcesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allWebinarsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allWhitePapersMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allWistiaSectionsMeta: CollectionMetadata
  /** Returns the single instance record */
  _site: Site
  /** Returns the single instance record */
  aboutPage?: Maybe<AboutPageRecord>
  /** Returns a specific record */
  alert?: Maybe<AlertRecord>
  /** Returns a specific record */
  alertBanner?: Maybe<AlertBannerRecord>
  /** Returns a collection of records */
  allAlertBanners: Array<AlertBannerRecord>
  /** Returns a collection of records */
  allAlerts: Array<AlertRecord>
  /** Returns a collection of records */
  allBasicTables: Array<BasicTableRecord>
  /** Returns a collection of records */
  allBlogPostCategories: Array<BlogPostCategoryRecord>
  /** Returns a collection of records */
  allBlogPostV2s: Array<BlogPostV2Record>
  /** Returns a collection of records */
  allBlogPosts: Array<BlogPostRecord>
  /** Returns a collection of records */
  allButton2s: Array<Button2Record>
  /** Returns a collection of records */
  allButtonThemes: Array<ButtonThemeRecord>
  /** Returns a collection of records */
  allCallToActions: Array<CallToActionRecord>
  /** Returns a collection of records */
  allCalloutItems: Array<CalloutItemRecord>
  /** Returns a collection of records */
  allCalloutSections: Array<CalloutSectionRecord>
  /** Returns a collection of records */
  allCloudPartnerPages: Array<CloudPartnerPageRecord>
  /** Returns a collection of records */
  allCodeSamples: Array<CodeSampleRecord>
  /** Returns a collection of records */
  allCodeblockLanguages: Array<CodeblockLanguageRecord>
  /** Returns a collection of records */
  allCompanies: Array<CompanyRecord>
  /** Returns a collection of records */
  allConsulGraphicSections: Array<ConsulGraphicSectionRecord>
  /** Returns a collection of records */
  allContactCategories: Array<ContactCategoryRecord>
  /** Returns a collection of records */
  allContactFormPages: Array<ContactFormPageRecord>
  /** Returns a collection of records */
  allDropdownLinks: Array<DropdownLinkRecord>
  /** Returns a collection of records */
  allEmbeddedPodcastSections: Array<EmbeddedPodcastSectionRecord>
  /** Returns a collection of records */
  allEmbeddedSlidesSections: Array<EmbeddedSlidesSectionRecord>
  /** Returns a collection of records */
  allEmployeePages: Array<EmployeePageRecord>
  /** Returns a collection of records */
  allEnterpriseFeaturesCategories: Array<EnterpriseFeaturesCategoryRecord>
  /** Returns a collection of records */
  allEnterprisePricingSections: Array<EnterprisePricingSectionRecord>
  /** Returns a collection of records */
  allEnterpriseProductPages: Array<EnterpriseProductPageRecord>
  /** Returns a collection of records */
  allEnterpriseProductSubnavs: Array<EnterpriseProductSubnavRecord>
  /** Returns a collection of records */
  allEnterpriseProductUseCasePages: Array<EnterpriseProductUseCasePageRecord>
  /** Returns a collection of records */
  allEnterpriseProducts: Array<EnterpriseProductRecord>
  /** Returns a collection of records */
  allEventTypes: Array<EventTypeRecord>
  /** Returns a collection of records */
  allEvents: Array<EventRecord>
  /** Returns a collection of records */
  allExperienceLevels: Array<ExperienceLevelRecord>
  /** Returns a collection of records */
  allExternalResources: Array<ExternalResourceRecord>
  /** Returns a collection of records */
  allFaqCategories: Array<FaqCategoryRecord>
  /** Returns a collection of records */
  allFeatureTableColumns: Array<FeatureTableColumnRecord>
  /** Returns a collection of records */
  allFeatureTableRowValues: Array<FeatureTableRowValueRecord>
  /** Returns a collection of records */
  allFeatureTableRows: Array<FeatureTableRowRecord>
  /** Returns a collection of records */
  allFeatureTableTabs: Array<FeatureTableTabRecord>
  /** Returns a collection of records */
  allFeatureTables: Array<FeatureTableRecord>
  /** Returns a collection of records */
  allFormContactTypes: Array<FormContactTypeRecord>
  /** Returns a collection of records */
  allFormMultiSelectOptions: Array<FormMultiSelectOptionRecord>
  /** Returns a collection of records */
  allHashiconfBasicPages: Array<HashiconfBasicPageRecord>
  /** Returns a collection of records */
  allHashiconfFeaturedSpeakersSections: Array<
    HashiconfFeaturedSpeakersSectionRecord
  >
  /** Returns a collection of records */
  allHashiconfLandingPages: Array<HashiconfLandingPageRecord>
  /** Returns a collection of records */
  allHashiconfLiveStreamPages: Array<HashiconfLiveStreamPageRecord>
  /** Returns a collection of records */
  allHashiconfScheduleDays: Array<HashiconfScheduleDayRecord>
  /** Returns a collection of records */
  allHashiconfScheduleItems: Array<HashiconfScheduleItemRecord>
  /** Returns a collection of records */
  allHashiconfScheduleLiteSections: Array<HashiconfScheduleLiteSectionRecord>
  /** Returns a collection of records */
  allHashiconfSchedulePages: Array<HashiconfSchedulePageRecord>
  /** Returns a collection of records */
  allHashiconfSectionBlockPages: Array<HashiconfSectionBlockPageRecord>
  /** Returns a collection of records */
  allHashiconfSectionBlocks: Array<HashiconfSectionBlockRecord>
  /** Returns a collection of records */
  allHashiconfSessions: Array<HashiconfSessionRecord>
  /** Returns a collection of records */
  allHashiconfSpeakers: Array<HashiconfSpeakerRecord>
  /** Returns a collection of records */
  allHashiconfSpeakersPages: Array<HashiconfSpeakersPageRecord>
  /** Returns a collection of records */
  allHashiconfSponsorSections: Array<HashiconfSponsorSectionRecord>
  /** Returns a collection of records */
  allHashiconfTextAndFullImages: Array<HashiconfTextAndFullImageRecord>
  /** Returns a collection of records */
  allHashiconfTrainingDays: Array<HashiconfTrainingDayRecord>
  /** Returns a collection of records */
  allHashiconfTrainings: Array<HashiconfTrainingRecord>
  /** Returns a collection of records */
  allHashiconfs: Array<HashiconfRecord>
  /** Returns a collection of records */
  allHashicorpProducts: Array<HashicorpProductRecord>
  /** Returns a collection of records */
  allHeroFormLeads: Array<HeroFormLeadRecord>
  /** Returns a collection of records */
  allHeroSections: Array<HeroSectionRecord>
  /** Returns a collection of records */
  allHeroVideoCarouselItems: Array<HeroVideoCarouselItemRecord>
  /** Returns a collection of records */
  allHomepageProductTabs: Array<HomepageProductTabRecord>
  /** Returns a collection of records */
  allHtmlSections: Array<HtmlSectionRecord>
  /** Returns a collection of records */
  allIconLinks: Array<IconLinkRecord>
  /** Returns a collection of records */
  allImageLockups: Array<ImageLockupRecord>
  /** Returns a collection of records */
  allImageSections: Array<ImageSectionRecord>
  /** Returns a collection of records */
  allImageTextCarousels: Array<ImageTextCarouselRecord>
  /** Returns a collection of records */
  allIntegrationTypeCategories: Array<IntegrationTypeCategoryRecord>
  /** Returns a collection of records */
  allIntegrationTypes: Array<IntegrationTypeRecord>
  /** Returns a collection of records */
  allJobsEmployeeTestimonials: Array<JobsEmployeeTestimonialRecord>
  /** Returns a collection of records */
  allJobsPageDepartments: Array<JobsPageDepartmentRecord>
  /** Returns a collection of records */
  allLargeLogoGridSections: Array<LargeLogoGridSectionRecord>
  /** Returns a collection of records */
  allLinks: Array<LinkRecord>
  /** Returns a collection of records */
  allListItems: Array<ListItemRecord>
  /** Returns a collection of records */
  allLocalPageMetadataSets: Array<LocalPageMetadataSetRecord>
  /** Returns a collection of records */
  allLocationRooms: Array<LocationRoomRecord>
  /** Returns a collection of records */
  allLocationVenues: Array<LocationVenueRecord>
  /** Returns a collection of records */
  allMajorHeadlineSections: Array<MajorHeadlineSectionRecord>
  /** Returns a collection of records */
  allMiniCallouts: Array<MiniCalloutRecord>
  /** Returns a collection of records */
  allNavCallouts: Array<NavCalloutRecord>
  /** Returns a collection of records */
  allNavPromos: Array<NavPromoRecord>
  /** Returns a collection of records */
  allNewsItems: Array<NewsItemRecord>
  /** Returns a collection of records */
  allOfficeHoursSessionCopy1s: Array<OfficeHoursSessionCopy1Record>
  /** Returns a collection of records */
  allOfficeHoursSessions: Array<OfficeHoursSessionRecord>
  /** Returns a collection of records */
  allOnDemandResources: Array<OnDemandResourceRecord>
  /** Returns a collection of records */
  allOpenSourceToolCategories: Array<OpenSourceToolCategoryRecord>
  /** Returns a collection of records */
  allOpenSourceTools: Array<OpenSourceToolRecord>
  /** Returns a collection of records */
  allPackageFeatures: Array<PackageFeatureRecord>
  /** Returns a collection of records */
  allPackageOptions: Array<PackageOptionRecord>
  /** Returns a collection of records */
  allPeople: Array<PersonRecord>
  /** Returns a collection of records */
  allPersonLists: Array<PersonListRecord>
  /** Returns a collection of records */
  allPressLinks: Array<PressLinkRecord>
  /** Returns a collection of records */
  allPricingPages: Array<PricingPageRecord>
  /** Returns a collection of records */
  allProductCertificationPages: Array<ProductCertificationPageRecord>
  /** Returns a collection of records */
  allProductOfferings: Array<ProductOfferingRecord>
  /** Returns a collection of records */
  allProductPackageSections: Array<ProductPackageSectionRecord>
  /** Returns a collection of records */
  allProductPricingPlans: Array<ProductPricingPlanRecord>
  /** Returns a collection of records */
  allProductSubnavs: Array<ProductSubnavRecord>
  /** Returns a collection of records */
  allProductTabFeatures: Array<ProductTabFeatureRecord>
  /** Returns a collection of records */
  allProductTypes: Array<ProductTypeRecord>
  /** Returns a collection of records */
  allRelatedItemsSections: Array<RelatedItemsSectionRecord>
  /** Returns a collection of records */
  allResourceContentTypes: Array<ResourceContentTypeRecord>
  /** Returns a collection of records */
  allResourceIndustries: Array<ResourceIndustryRecord>
  /** Returns a collection of records */
  allResourceInfrastructureProviders: Array<
    ResourceInfrastructureProviderRecord
  >
  /** Returns a collection of records */
  allResourceMediaTypes: Array<ResourceMediaTypeRecord>
  /** Returns a collection of records */
  allResources: Array<ResourceRecord>
  /** Returns a collection of records */
  allSalesFormPages: Array<SalesFormPageRecord>
  /** Returns a collection of records */
  allSalesForms: Array<SalesFormRecord>
  /** Returns a collection of records */
  allSbcAlerts: Array<SbcAlertRecord>
  /** Returns a collection of records */
  allSbcBeforeAfterDiagrams: Array<SbcBeforeAfterDiagramRecord>
  /** Returns a collection of records */
  allSbcButtonV2s: Array<SbcButtonV2Record>
  /** Returns a collection of records */
  allSbcButtons: Array<SbcButtonRecord>
  /** Returns a collection of records */
  allSbcCalloutSections: Array<SbcCalloutSectionRecord>
  /** Returns a collection of records */
  allSbcCallouts: Array<SbcCalloutRecord>
  /** Returns a collection of records */
  allSbcCaseStudies: Array<SbcCaseStudyRecord>
  /** Returns a collection of records */
  allSbcCaseStudySliders: Array<SbcCaseStudySliderRecord>
  /** Returns a collection of records */
  allSbcCodeBlocks: Array<SbcCodeBlockRecord>
  /** Returns a collection of records */
  allSbcImages: Array<SbcImageRecord>
  /** Returns a collection of records */
  allSbcLinkedTextSummaryLists: Array<SbcLinkedTextSummaryListRecord>
  /** Returns a collection of records */
  allSbcLogoGrids: Array<SbcLogoGridRecord>
  /** Returns a collection of records */
  allSbcMultiButtons: Array<SbcMultiButtonRecord>
  /** Returns a collection of records */
  allSbcProductFeatureTables: Array<SbcProductFeatureTableRecord>
  /** Returns a collection of records */
  allSbcProductPricings: Array<SbcProductPricingRecord>
  /** Returns a collection of records */
  allSbcResourcesSliders: Array<SbcResourcesSliderRecord>
  /** Returns a collection of records */
  allSbcSectionHeaders: Array<SbcSectionHeaderRecord>
  /** Returns a collection of records */
  allSbcTextAndContents: Array<SbcTextAndContentRecord>
  /** Returns a collection of records */
  allSbcTexts: Array<SbcTextRecord>
  /** Returns a collection of records */
  allSbcUseCases: Array<SbcUseCaseRecord>
  /** Returns a collection of records */
  allSbcUseCasesSections: Array<SbcUseCasesSectionRecord>
  /** Returns a collection of records */
  allSblHorizontals: Array<SblHorizontalRecord>
  /** Returns a collection of records */
  allSblVerticals: Array<SblVerticalRecord>
  /** Returns a collection of records */
  allSectionBlockPages: Array<SectionBlockPageRecord>
  /** Returns a collection of records */
  allSectionBlockV2s: Array<SectionBlockV2Record>
  /** Returns a collection of records */
  allSectionBlocks: Array<SectionBlockRecord>
  /** Returns a collection of records */
  allSectionDividers: Array<SectionDividerRecord>
  /** Returns a collection of records */
  allSectionThemes: Array<SectionThemeRecord>
  /** Returns a collection of records */
  allSentinelProductTabs: Array<SentinelProductTabRecord>
  /** Returns a collection of records */
  allSocialNetworkIcons: Array<SocialNetworkIconRecord>
  /** Returns a collection of records */
  allSocialNetworks: Array<SocialNetworkRecord>
  /** Returns a collection of records */
  allSpeakersSections: Array<SpeakersSectionRecord>
  /** Returns a collection of records */
  allSplitCtaItems: Array<SplitCtaItemRecord>
  /** Returns a collection of records */
  allSplitCtaSections: Array<SplitCtaSectionRecord>
  /** Returns a collection of records */
  allStaticDynamicSections: Array<StaticDynamicSectionRecord>
  /** Returns a collection of records */
  allTemplatePages: Array<TemplatePageRecord>
  /** Returns a collection of records */
  allTerraformGraphSections: Array<TerraformGraphSectionRecord>
  /** Returns a collection of records */
  allTerraformOfferingCategories: Array<TerraformOfferingCategoryRecord>
  /** Returns a collection of records */
  allTerraformOfferingTables: Array<TerraformOfferingTableRecord>
  /** Returns a collection of records */
  allTerraformOfferingTiers: Array<TerraformOfferingTierRecord>
  /** Returns a collection of records */
  allTerraformOfferings: Array<TerraformOfferingRecord>
  /** Returns a collection of records */
  allTestimonials: Array<TestimonialRecord>
  /** Returns a collection of records */
  allTextHeadlineAndGridSections: Array<TextHeadlineAndGridSectionRecord>
  /** Returns a collection of records */
  allTextHeadlineSections: Array<TextHeadlineSectionRecord>
  /** Returns a collection of records */
  allTextImageSections: Array<TextImageSectionRecord>
  /** Returns a collection of records */
  allTextSections: Array<TextSectionRecord>
  /** Returns a collection of records */
  allTmpmodelButtons: Array<TmpmodelButtonRecord>
  /** Returns a collection of records */
  allTmpmodelProductUseCasePages: Array<TmpmodelProductUseCasePageRecord>
  /** Returns a collection of records */
  allTrainingCourses: Array<TrainingCourseRecord>
  /** Returns a collection of records */
  allTrainingPartnerSections: Array<TrainingPartnerSectionRecord>
  /** Returns a collection of records */
  allTrialFormPages: Array<TrialFormPageRecord>
  /** Returns a collection of records */
  allTwoColumnTextSections: Array<TwoColumnTextSectionRecord>
  /** Returns a collection of assets */
  allUploads: Array<FileField>
  /** Returns a collection of records */
  allUseCasePageDropdowns: Array<UseCasePageDropdownRecord>
  /** Returns a collection of records */
  allVaultIntegrationSections: Array<VaultIntegrationSectionRecord>
  /** Returns a collection of records */
  allVerticalTextBlockListItems: Array<VerticalTextBlockListItemRecord>
  /** Returns a collection of records */
  allVerticalTextBlockListSections: Array<VerticalTextBlockListSectionRecord>
  /** Returns a collection of records */
  allVideoSections: Array<VideoSectionRecord>
  /** Returns a collection of records */
  allVideoSources: Array<VideoSourceRecord>
  /** Returns a collection of records */
  allWebinars: Array<WebinarRecord>
  /** Returns a collection of records */
  allWhitePapers: Array<WhitePaperRecord>
  /** Returns a collection of records */
  allWistiaSections: Array<WistiaSectionRecord>
  /** Returns a specific record */
  basicTable?: Maybe<BasicTableRecord>
  /** Returns the single instance record */
  becomeAPartnerPage?: Maybe<BecomeAPartnerPageRecord>
  /** Returns the single instance record */
  blogIndexPage?: Maybe<BlogIndexPageRecord>
  /** Returns a specific record */
  blogPost?: Maybe<BlogPostRecord>
  /** Returns a specific record */
  blogPostCategory?: Maybe<BlogPostCategoryRecord>
  /** Returns a specific record */
  blogPostV2?: Maybe<BlogPostV2Record>
  /** Returns the single instance record */
  brandPage?: Maybe<BrandPageRecord>
  /** Returns a specific record */
  button2?: Maybe<Button2Record>
  /** Returns a specific record */
  buttonTheme?: Maybe<ButtonThemeRecord>
  /** Returns a specific record */
  callToAction?: Maybe<CallToActionRecord>
  /** Returns a specific record */
  calloutItem?: Maybe<CalloutItemRecord>
  /** Returns a specific record */
  calloutSection?: Maybe<CalloutSectionRecord>
  /** Returns the single instance record */
  certificationPage?: Maybe<CertificationPageRecord>
  /** Returns a specific record */
  cloudPartnerPage?: Maybe<CloudPartnerPageRecord>
  /** Returns a specific record */
  codeSample?: Maybe<CodeSampleRecord>
  /** Returns a specific record */
  codeblockLanguage?: Maybe<CodeblockLanguageRecord>
  /** Returns the single instance record */
  communityLandingPage?: Maybe<CommunityLandingPageRecord>
  /** Returns a specific record */
  company?: Maybe<CompanyRecord>
  /** Returns the single instance record */
  consulFieldDayLive?: Maybe<ConsulFieldDayLiveRecord>
  /** Returns a specific record */
  consulGraphicSection?: Maybe<ConsulGraphicSectionRecord>
  /** Returns the single instance record */
  consulProductPage?: Maybe<ConsulProductPageRecord>
  /** Returns a specific record */
  contactCategory?: Maybe<ContactCategoryRecord>
  /** Returns a specific record */
  contactFormPage?: Maybe<ContactFormPageRecord>
  /** Returns the single instance record */
  contactPage?: Maybe<ContactPageRecord>
  /** Returns a specific record */
  dropdownLink?: Maybe<DropdownLinkRecord>
  /** Returns the single instance record */
  ecosystemFindAPartnerPage?: Maybe<EcosystemFindAPartnerPageRecord>
  /** Returns the single instance record */
  ecosystemLandingPage?: Maybe<EcosystemLandingPageRecord>
  /** Returns a specific record */
  embeddedPodcastSection?: Maybe<EmbeddedPodcastSectionRecord>
  /** Returns a specific record */
  embeddedSlidesSection?: Maybe<EmbeddedSlidesSectionRecord>
  /** Returns a specific record */
  employeePage?: Maybe<EmployeePageRecord>
  /** Returns a specific record */
  enterpriseFeaturesCategory?: Maybe<EnterpriseFeaturesCategoryRecord>
  /** Returns a specific record */
  enterprisePricingSection?: Maybe<EnterprisePricingSectionRecord>
  /** Returns a specific record */
  enterpriseProduct?: Maybe<EnterpriseProductRecord>
  /** Returns a specific record */
  enterpriseProductPage?: Maybe<EnterpriseProductPageRecord>
  /** Returns a specific record */
  enterpriseProductSubnav?: Maybe<EnterpriseProductSubnavRecord>
  /** Returns a specific record */
  enterpriseProductUseCasePage?: Maybe<EnterpriseProductUseCasePageRecord>
  /** Returns a specific record */
  event?: Maybe<EventRecord>
  /** Returns a specific record */
  eventType?: Maybe<EventTypeRecord>
  /** Returns the single instance record */
  eventsPage?: Maybe<EventsPageRecord>
  /** Returns a specific record */
  experienceLevel?: Maybe<ExperienceLevelRecord>
  /** Returns a specific record */
  externalResource?: Maybe<ExternalResourceRecord>
  /** Returns a specific record */
  faqCategory?: Maybe<FaqCategoryRecord>
  /** Returns a specific record */
  featureTable?: Maybe<FeatureTableRecord>
  /** Returns a specific record */
  featureTableColumn?: Maybe<FeatureTableColumnRecord>
  /** Returns a specific record */
  featureTableRow?: Maybe<FeatureTableRowRecord>
  /** Returns a specific record */
  featureTableRowValue?: Maybe<FeatureTableRowValueRecord>
  /** Returns a specific record */
  featureTableTab?: Maybe<FeatureTableTabRecord>
  /** Returns a specific record */
  formContactType?: Maybe<FormContactTypeRecord>
  /** Returns a specific record */
  formMultiSelectOption?: Maybe<FormMultiSelectOptionRecord>
  /** Returns the single instance record */
  fourohfourPage?: Maybe<FourohfourPageRecord>
  /** Returns the single instance record */
  globalDemoForm?: Maybe<GlobalDemoFormRecord>
  /** Returns the single instance record */
  globalFooter?: Maybe<GlobalFooterRecord>
  /** Returns the single instance record */
  globalFooterBasic?: Maybe<GlobalFooterBasicRecord>
  /** Returns the single instance record */
  globalNavigation?: Maybe<GlobalNavigationRecord>
  /** Returns the single instance record */
  guestBlogText?: Maybe<GuestBlogTextRecord>
  /** Returns a specific record */
  hashiconf?: Maybe<HashiconfRecord>
  /** Returns a specific record */
  hashiconfBasicPage?: Maybe<HashiconfBasicPageRecord>
  /** Returns a specific record */
  hashiconfFeaturedSpeakersSection?: Maybe<
    HashiconfFeaturedSpeakersSectionRecord
  >
  /** Returns a specific record */
  hashiconfLandingPage?: Maybe<HashiconfLandingPageRecord>
  /** Returns a specific record */
  hashiconfLiveStreamPage?: Maybe<HashiconfLiveStreamPageRecord>
  /** Returns a specific record */
  hashiconfScheduleDay?: Maybe<HashiconfScheduleDayRecord>
  /** Returns a specific record */
  hashiconfScheduleItem?: Maybe<HashiconfScheduleItemRecord>
  /** Returns a specific record */
  hashiconfScheduleLiteSection?: Maybe<HashiconfScheduleLiteSectionRecord>
  /** Returns a specific record */
  hashiconfSchedulePage?: Maybe<HashiconfSchedulePageRecord>
  /** Returns a specific record */
  hashiconfSectionBlock?: Maybe<HashiconfSectionBlockRecord>
  /** Returns a specific record */
  hashiconfSectionBlockPage?: Maybe<HashiconfSectionBlockPageRecord>
  /** Returns a specific record */
  hashiconfSession?: Maybe<HashiconfSessionRecord>
  /** Returns a specific record */
  hashiconfSpeaker?: Maybe<HashiconfSpeakerRecord>
  /** Returns a specific record */
  hashiconfSpeakersPage?: Maybe<HashiconfSpeakersPageRecord>
  /** Returns a specific record */
  hashiconfSponsorSection?: Maybe<HashiconfSponsorSectionRecord>
  /** Returns a specific record */
  hashiconfTextAndFullImage?: Maybe<HashiconfTextAndFullImageRecord>
  /** Returns a specific record */
  hashiconfTraining?: Maybe<HashiconfTrainingRecord>
  /** Returns a specific record */
  hashiconfTrainingDay?: Maybe<HashiconfTrainingDayRecord>
  /** Returns a specific record */
  hashicorpProduct?: Maybe<HashicorpProductRecord>
  /** Returns a specific record */
  heroFormLead?: Maybe<HeroFormLeadRecord>
  /** Returns a specific record */
  heroSection?: Maybe<HeroSectionRecord>
  /** Returns a specific record */
  heroVideoCarouselItem?: Maybe<HeroVideoCarouselItemRecord>
  /** Returns the single instance record */
  homePage?: Maybe<HomePageRecord>
  /** Returns a specific record */
  homepageProductTab?: Maybe<HomepageProductTabRecord>
  /** Returns a specific record */
  htmlSection?: Maybe<HtmlSectionRecord>
  /** Returns a specific record */
  iconLink?: Maybe<IconLinkRecord>
  /** Returns a specific record */
  imageLockup?: Maybe<ImageLockupRecord>
  /** Returns a specific record */
  imageSection?: Maybe<ImageSectionRecord>
  /** Returns a specific record */
  imageTextCarousel?: Maybe<ImageTextCarouselRecord>
  /** Returns a specific record */
  integrationType?: Maybe<IntegrationTypeRecord>
  /** Returns a specific record */
  integrationTypeCategory?: Maybe<IntegrationTypeCategoryRecord>
  /** Returns the single instance record */
  integrationsPage?: Maybe<IntegrationsPageRecord>
  /** Returns a specific record */
  jobsEmployeeTestimonial?: Maybe<JobsEmployeeTestimonialRecord>
  /** Returns the single instance record */
  jobsPage?: Maybe<JobsPageRecord>
  /** Returns a specific record */
  jobsPageDepartment?: Maybe<JobsPageDepartmentRecord>
  /** Returns a specific record */
  largeLogoGridSection?: Maybe<LargeLogoGridSectionRecord>
  /** Returns the single instance record */
  learnLandingPage?: Maybe<LearnLandingPageRecord>
  /** Returns a specific record */
  link?: Maybe<LinkRecord>
  /** Returns a specific record */
  listItem?: Maybe<ListItemRecord>
  /** Returns a specific record */
  localPageMetadataSet?: Maybe<LocalPageMetadataSetRecord>
  /** Returns a specific record */
  locationRoom?: Maybe<LocationRoomRecord>
  /** Returns a specific record */
  locationVenue?: Maybe<LocationVenueRecord>
  /** Returns a specific record */
  majorHeadlineSection?: Maybe<MajorHeadlineSectionRecord>
  /** Returns the single instance record */
  megaNav?: Maybe<MegaNavRecord>
  /** Returns a specific record */
  miniCallout?: Maybe<MiniCalloutRecord>
  /** Returns the single instance record */
  nav?: Maybe<NavRecord>
  /** Returns a specific record */
  navCallout?: Maybe<NavCalloutRecord>
  /** Returns a specific record */
  navPromo?: Maybe<NavPromoRecord>
  /** Returns a specific record */
  newsItem?: Maybe<NewsItemRecord>
  /** Returns the single instance record */
  nomadProductPage?: Maybe<NomadProductPageRecord>
  /** Returns a specific record */
  officeHoursSession?: Maybe<OfficeHoursSessionRecord>
  /** Returns a specific record */
  officeHoursSessionCopy1?: Maybe<OfficeHoursSessionCopy1Record>
  /** Returns a specific record */
  onDemandResource?: Maybe<OnDemandResourceRecord>
  /** Returns a specific record */
  openSourceTool?: Maybe<OpenSourceToolRecord>
  /** Returns a specific record */
  openSourceToolCategory?: Maybe<OpenSourceToolCategoryRecord>
  /** Returns a specific record */
  packageFeature?: Maybe<PackageFeatureRecord>
  /** Returns a specific record */
  packageOption?: Maybe<PackageOptionRecord>
  /** Returns the single instance record */
  partnersPage?: Maybe<PartnersPageRecord>
  /** Returns a specific record */
  person?: Maybe<PersonRecord>
  /** Returns a specific record */
  personList?: Maybe<PersonListRecord>
  /** Returns a specific record */
  pressLink?: Maybe<PressLinkRecord>
  /** Returns the single instance record */
  pressPage?: Maybe<PressPageRecord>
  /** Returns a specific record */
  pricingPage?: Maybe<PricingPageRecord>
  /** Returns the single instance record */
  principlesPage?: Maybe<PrinciplesPageRecord>
  /** Returns a specific record */
  productCertificationPage?: Maybe<ProductCertificationPageRecord>
  /** Returns a specific record */
  productOffering?: Maybe<ProductOfferingRecord>
  /** Returns a specific record */
  productPackageSection?: Maybe<ProductPackageSectionRecord>
  /** Returns a specific record */
  productPricingPlan?: Maybe<ProductPricingPlanRecord>
  /** Returns a specific record */
  productSubnav?: Maybe<ProductSubnavRecord>
  /** Returns a specific record */
  productTabFeature?: Maybe<ProductTabFeatureRecord>
  /** Returns a specific record */
  productType?: Maybe<ProductTypeRecord>
  /** Returns a specific record */
  relatedItemsSection?: Maybe<RelatedItemsSectionRecord>
  /** Returns a specific record */
  resource?: Maybe<ResourceRecord>
  /** Returns a specific record */
  resourceContentType?: Maybe<ResourceContentTypeRecord>
  /** Returns a specific record */
  resourceIndustry?: Maybe<ResourceIndustryRecord>
  /** Returns a specific record */
  resourceInfrastructureProvider?: Maybe<ResourceInfrastructureProviderRecord>
  /** Returns a specific record */
  resourceMediaType?: Maybe<ResourceMediaTypeRecord>
  /** Returns the single instance record */
  resourcesPage?: Maybe<ResourcesPageRecord>
  /** Returns a specific record */
  salesForm?: Maybe<SalesFormRecord>
  /** Returns a specific record */
  salesFormPage?: Maybe<SalesFormPageRecord>
  /** Returns a specific record */
  sbcAlert?: Maybe<SbcAlertRecord>
  /** Returns a specific record */
  sbcBeforeAfterDiagram?: Maybe<SbcBeforeAfterDiagramRecord>
  /** Returns a specific record */
  sbcButton?: Maybe<SbcButtonRecord>
  /** Returns a specific record */
  sbcButtonV2?: Maybe<SbcButtonV2Record>
  /** Returns a specific record */
  sbcCallout?: Maybe<SbcCalloutRecord>
  /** Returns a specific record */
  sbcCalloutSection?: Maybe<SbcCalloutSectionRecord>
  /** Returns a specific record */
  sbcCaseStudy?: Maybe<SbcCaseStudyRecord>
  /** Returns a specific record */
  sbcCaseStudySlider?: Maybe<SbcCaseStudySliderRecord>
  /** Returns a specific record */
  sbcCodeBlock?: Maybe<SbcCodeBlockRecord>
  /** Returns a specific record */
  sbcImage?: Maybe<SbcImageRecord>
  /** Returns a specific record */
  sbcLinkedTextSummaryList?: Maybe<SbcLinkedTextSummaryListRecord>
  /** Returns a specific record */
  sbcLogoGrid?: Maybe<SbcLogoGridRecord>
  /** Returns a specific record */
  sbcMultiButton?: Maybe<SbcMultiButtonRecord>
  /** Returns a specific record */
  sbcProductFeatureTable?: Maybe<SbcProductFeatureTableRecord>
  /** Returns a specific record */
  sbcProductPricing?: Maybe<SbcProductPricingRecord>
  /** Returns a specific record */
  sbcResourcesSlider?: Maybe<SbcResourcesSliderRecord>
  /** Returns a specific record */
  sbcSectionHeader?: Maybe<SbcSectionHeaderRecord>
  /** Returns a specific record */
  sbcText?: Maybe<SbcTextRecord>
  /** Returns a specific record */
  sbcTextAndContent?: Maybe<SbcTextAndContentRecord>
  /** Returns a specific record */
  sbcUseCase?: Maybe<SbcUseCaseRecord>
  /** Returns a specific record */
  sbcUseCasesSection?: Maybe<SbcUseCasesSectionRecord>
  /** Returns a specific record */
  sblHorizontal?: Maybe<SblHorizontalRecord>
  /** Returns a specific record */
  sblVertical?: Maybe<SblVerticalRecord>
  /** Returns a specific record */
  sectionBlock?: Maybe<SectionBlockRecord>
  /** Returns a specific record */
  sectionBlockPage?: Maybe<SectionBlockPageRecord>
  /** Returns a specific record */
  sectionBlockV2?: Maybe<SectionBlockV2Record>
  /** Returns a specific record */
  sectionDivider?: Maybe<SectionDividerRecord>
  /** Returns a specific record */
  sectionTheme?: Maybe<SectionThemeRecord>
  /** Returns the single instance record */
  sentinelPage?: Maybe<SentinelPageRecord>
  /** Returns a specific record */
  sentinelProductTab?: Maybe<SentinelProductTabRecord>
  /** Returns the single instance record */
  shopPage?: Maybe<ShopPageRecord>
  /** Returns a specific record */
  socialNetwork?: Maybe<SocialNetworkRecord>
  /** Returns a specific record */
  socialNetworkIcon?: Maybe<SocialNetworkIconRecord>
  /** Returns the single instance record */
  solutionsInfrastructurePage?: Maybe<SolutionsInfrastructurePageRecord>
  /** Returns the single instance record */
  solutionsNetworkingPage?: Maybe<SolutionsNetworkingPageRecord>
  /** Returns the single instance record */
  solutionsSecurityPage?: Maybe<SolutionsSecurityPageRecord>
  /** Returns a specific record */
  speakersSection?: Maybe<SpeakersSectionRecord>
  /** Returns a specific record */
  splitCtaItem?: Maybe<SplitCtaItemRecord>
  /** Returns a specific record */
  splitCtaSection?: Maybe<SplitCtaSectionRecord>
  /** Returns a specific record */
  staticDynamicSection?: Maybe<StaticDynamicSectionRecord>
  /** Returns the single instance record */
  subscriptionConfirmationPage?: Maybe<SubscriptionConfirmationPageRecord>
  /** Returns the single instance record */
  subscriptionOptOutSuccessPage?: Maybe<SubscriptionOptOutSuccessPageRecord>
  /** Returns a specific record */
  templatePage?: Maybe<TemplatePageRecord>
  /** Returns a specific record */
  terraformGraphSection?: Maybe<TerraformGraphSectionRecord>
  /** Returns a specific record */
  terraformOffering?: Maybe<TerraformOfferingRecord>
  /** Returns a specific record */
  terraformOfferingCategory?: Maybe<TerraformOfferingCategoryRecord>
  /** Returns a specific record */
  terraformOfferingTable?: Maybe<TerraformOfferingTableRecord>
  /** Returns a specific record */
  terraformOfferingTier?: Maybe<TerraformOfferingTierRecord>
  /** Returns the single instance record */
  terraformProductPage?: Maybe<TerraformProductPageRecord>
  /** Returns a specific record */
  testimonial?: Maybe<TestimonialRecord>
  /** Returns a specific record */
  textHeadlineAndGridSection?: Maybe<TextHeadlineAndGridSectionRecord>
  /** Returns a specific record */
  textHeadlineSection?: Maybe<TextHeadlineSectionRecord>
  /** Returns a specific record */
  textImageSection?: Maybe<TextImageSectionRecord>
  /** Returns a specific record */
  textSection?: Maybe<TextSectionRecord>
  /** Returns the single instance record */
  thankYouPage?: Maybe<ThankYouPageRecord>
  /** Returns the single instance record */
  tmpConsolHome?: Maybe<TmpConsolHomeRecord>
  /** Returns the single instance record */
  tmpHomepage?: Maybe<TmpHomepageRecord>
  /** Returns the single instance record */
  tmpmodelAboutPage?: Maybe<TmpmodelAboutPageRecord>
  /** Returns a specific record */
  tmpmodelButton?: Maybe<TmpmodelButtonRecord>
  /** Returns the single instance record */
  tmpmodelConsulEnterprisePage?: Maybe<TmpmodelConsulEnterprisePageRecord>
  /** Returns the single instance record */
  tmpmodelConsulOverviewPage?: Maybe<TmpmodelConsulOverviewPageRecord>
  /** Returns the single instance record */
  tmpmodelConsulServiceOnAzurePage?: Maybe<
    TmpmodelConsulServiceOnAzurePageRecord
  >
  /** Returns the single instance record */
  tmpmodelEcosystemFindAPartnerPage?: Maybe<
    TmpmodelEcosystemFindAPartnerPageRecord
  >
  /** Returns the single instance record */
  tmpmodelEcosystemLandingPage?: Maybe<TmpmodelEcosystemLandingPageRecord>
  /** Returns the single instance record */
  tmpmodelJobsPage?: Maybe<TmpmodelJobsPageRecord>
  /** Returns the single instance record */
  tmpmodelNomadEnterprisePage?: Maybe<TmpmodelNomadEnterprisePageRecord>
  /** Returns the single instance record */
  tmpmodelNomadOverviewPage?: Maybe<TmpmodelNomadOverviewPageRecord>
  /** Returns a specific record */
  tmpmodelProductUseCasePage?: Maybe<TmpmodelProductUseCasePageRecord>
  /** Returns the single instance record */
  tmpmodelTerraformOverviewPage?: Maybe<TmpmodelTerraformOverviewPageRecord>
  /** Returns the single instance record */
  tmpmodelTerraformPricingPage?: Maybe<TmpmodelTerraformPricingPageRecord>
  /** Returns the single instance record */
  tmpmodelTrainingPage?: Maybe<TmpmodelTrainingPageRecord>
  /** Returns the single instance record */
  tmpmodelUserResearchPage?: Maybe<TmpmodelUserResearchPageRecord>
  /** Returns the single instance record */
  tmpmodelVaultAdvancedDataProtectionPage?: Maybe<
    TmpmodelVaultAdvancedDataProtectionPageRecord
  >
  /** Returns the single instance record */
  tmpmodelVaultEnterprisePage?: Maybe<TmpmodelVaultEnterprisePageRecord>
  /** Returns the single instance record */
  tmpmodelVaultOverviewPage?: Maybe<TmpmodelVaultOverviewPageRecord>
  /** Returns a specific record */
  trainingCourse?: Maybe<TrainingCourseRecord>
  /** Returns the single instance record */
  trainingPage?: Maybe<TrainingPageRecord>
  /** Returns a specific record */
  trainingPartnerSection?: Maybe<TrainingPartnerSectionRecord>
  /** Returns a specific record */
  trialFormPage?: Maybe<TrialFormPageRecord>
  /** Returns a specific record */
  twoColumnTextSection?: Maybe<TwoColumnTextSectionRecord>
  /** Returns a specific asset */
  upload?: Maybe<FileField>
  /** Returns a specific record */
  useCasePageDropdown?: Maybe<UseCasePageDropdownRecord>
  /** Returns the single instance record */
  vaultAdvancedDataProtectionPage?: Maybe<VaultAdvancedDataProtectionPageRecord>
  /** Returns a specific record */
  vaultIntegrationSection?: Maybe<VaultIntegrationSectionRecord>
  /** Returns the single instance record */
  vaultOssPage?: Maybe<VaultOssPageRecord>
  /** Returns the single instance record */
  vaultProductPage?: Maybe<VaultProductPageRecord>
  /** Returns a specific record */
  verticalTextBlockListItem?: Maybe<VerticalTextBlockListItemRecord>
  /** Returns a specific record */
  verticalTextBlockListSection?: Maybe<VerticalTextBlockListSectionRecord>
  /** Returns a specific record */
  videoSection?: Maybe<VideoSectionRecord>
  /** Returns a specific record */
  videoSource?: Maybe<VideoSourceRecord>
  /** Returns a specific record */
  webinar?: Maybe<WebinarRecord>
  /** Returns a specific record */
  whitePaper?: Maybe<WhitePaperRecord>
  /** Returns a specific record */
  wistiaSection?: Maybe<WistiaSectionRecord>
}

/** The query root for this schema */
export type Query_AllAlertBannersMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<AlertBannerModelFilter>
}

/** The query root for this schema */
export type Query_AllAlertsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<AlertModelFilter>
}

/** The query root for this schema */
export type Query_AllBasicTablesMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<BasicTableModelFilter>
}

/** The query root for this schema */
export type Query_AllBlogPostCategoriesMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<BlogPostCategoryModelFilter>
}

/** The query root for this schema */
export type Query_AllBlogPostV2sMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<BlogPostV2ModelFilter>
}

/** The query root for this schema */
export type Query_AllBlogPostsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<BlogPostModelFilter>
}

/** The query root for this schema */
export type Query_AllButton2sMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<Button2ModelFilter>
}

/** The query root for this schema */
export type Query_AllButtonThemesMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<ButtonThemeModelFilter>
}

/** The query root for this schema */
export type Query_AllCallToActionsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<CallToActionModelFilter>
}

/** The query root for this schema */
export type Query_AllCalloutItemsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<CalloutItemModelFilter>
}

/** The query root for this schema */
export type Query_AllCalloutSectionsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<CalloutSectionModelFilter>
}

/** The query root for this schema */
export type Query_AllCloudPartnerPagesMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<CloudPartnerPageModelFilter>
}

/** The query root for this schema */
export type Query_AllCodeSamplesMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<CodeSampleModelFilter>
}

/** The query root for this schema */
export type Query_AllCodeblockLanguagesMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<CodeblockLanguageModelFilter>
}

/** The query root for this schema */
export type Query_AllCompaniesMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<CompanyModelFilter>
}

/** The query root for this schema */
export type Query_AllConsulGraphicSectionsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<ConsulGraphicSectionModelFilter>
}

/** The query root for this schema */
export type Query_AllContactCategoriesMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<ContactCategoryModelFilter>
}

/** The query root for this schema */
export type Query_AllContactFormPagesMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<ContactFormPageModelFilter>
}

/** The query root for this schema */
export type Query_AllDropdownLinksMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<DropdownLinkModelFilter>
}

/** The query root for this schema */
export type Query_AllEmbeddedPodcastSectionsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<EmbeddedPodcastSectionModelFilter>
}

/** The query root for this schema */
export type Query_AllEmbeddedSlidesSectionsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<EmbeddedSlidesSectionModelFilter>
}

/** The query root for this schema */
export type Query_AllEmployeePagesMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<EmployeePageModelFilter>
}

/** The query root for this schema */
export type Query_AllEnterpriseFeaturesCategoriesMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<EnterpriseFeaturesCategoryModelFilter>
}

/** The query root for this schema */
export type Query_AllEnterprisePricingSectionsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<EnterprisePricingSectionModelFilter>
}

/** The query root for this schema */
export type Query_AllEnterpriseProductPagesMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<EnterpriseProductPageModelFilter>
}

/** The query root for this schema */
export type Query_AllEnterpriseProductSubnavsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<EnterpriseProductSubnavModelFilter>
}

/** The query root for this schema */
export type Query_AllEnterpriseProductUseCasePagesMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<EnterpriseProductUseCasePageModelFilter>
}

/** The query root for this schema */
export type Query_AllEnterpriseProductsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<EnterpriseProductModelFilter>
}

/** The query root for this schema */
export type Query_AllEventTypesMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<EventTypeModelFilter>
}

/** The query root for this schema */
export type Query_AllEventsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<EventModelFilter>
}

/** The query root for this schema */
export type Query_AllExperienceLevelsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<ExperienceLevelModelFilter>
}

/** The query root for this schema */
export type Query_AllExternalResourcesMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<ExternalResourceModelFilter>
}

/** The query root for this schema */
export type Query_AllFaqCategoriesMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<FaqCategoryModelFilter>
}

/** The query root for this schema */
export type Query_AllFeatureTableColumnsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<FeatureTableColumnModelFilter>
}

/** The query root for this schema */
export type Query_AllFeatureTableRowValuesMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<FeatureTableRowValueModelFilter>
}

/** The query root for this schema */
export type Query_AllFeatureTableRowsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<FeatureTableRowModelFilter>
}

/** The query root for this schema */
export type Query_AllFeatureTableTabsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<FeatureTableTabModelFilter>
}

/** The query root for this schema */
export type Query_AllFeatureTablesMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<FeatureTableModelFilter>
}

/** The query root for this schema */
export type Query_AllFormContactTypesMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<FormContactTypeModelFilter>
}

/** The query root for this schema */
export type Query_AllFormMultiSelectOptionsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<FormMultiSelectOptionModelFilter>
}

/** The query root for this schema */
export type Query_AllHashiconfBasicPagesMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<HashiconfBasicPageModelFilter>
}

/** The query root for this schema */
export type Query_AllHashiconfFeaturedSpeakersSectionsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<HashiconfFeaturedSpeakersSectionModelFilter>
}

/** The query root for this schema */
export type Query_AllHashiconfLandingPagesMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<HashiconfLandingPageModelFilter>
}

/** The query root for this schema */
export type Query_AllHashiconfLiveStreamPagesMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<HashiconfLiveStreamPageModelFilter>
}

/** The query root for this schema */
export type Query_AllHashiconfScheduleDaysMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<HashiconfScheduleDayModelFilter>
}

/** The query root for this schema */
export type Query_AllHashiconfScheduleItemsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<HashiconfScheduleItemModelFilter>
}

/** The query root for this schema */
export type Query_AllHashiconfScheduleLiteSectionsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<HashiconfScheduleLiteSectionModelFilter>
}

/** The query root for this schema */
export type Query_AllHashiconfSchedulePagesMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<HashiconfSchedulePageModelFilter>
}

/** The query root for this schema */
export type Query_AllHashiconfSectionBlockPagesMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<HashiconfSectionBlockPageModelFilter>
}

/** The query root for this schema */
export type Query_AllHashiconfSectionBlocksMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<HashiconfSectionBlockModelFilter>
}

/** The query root for this schema */
export type Query_AllHashiconfSessionsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<HashiconfSessionModelFilter>
}

/** The query root for this schema */
export type Query_AllHashiconfSpeakersMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<HashiconfSpeakerModelFilter>
}

/** The query root for this schema */
export type Query_AllHashiconfSpeakersPagesMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<HashiconfSpeakersPageModelFilter>
}

/** The query root for this schema */
export type Query_AllHashiconfSponsorSectionsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<HashiconfSponsorSectionModelFilter>
}

/** The query root for this schema */
export type Query_AllHashiconfTextAndFullImagesMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<HashiconfTextAndFullImageModelFilter>
}

/** The query root for this schema */
export type Query_AllHashiconfTrainingDaysMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<HashiconfTrainingDayModelFilter>
}

/** The query root for this schema */
export type Query_AllHashiconfTrainingsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<HashiconfTrainingModelFilter>
}

/** The query root for this schema */
export type Query_AllHashiconfsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<HashiconfModelFilter>
}

/** The query root for this schema */
export type Query_AllHashicorpProductsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<HashicorpProductModelFilter>
}

/** The query root for this schema */
export type Query_AllHeroFormLeadsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<HeroFormLeadModelFilter>
}

/** The query root for this schema */
export type Query_AllHeroSectionsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<HeroSectionModelFilter>
}

/** The query root for this schema */
export type Query_AllHeroVideoCarouselItemsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<HeroVideoCarouselItemModelFilter>
}

/** The query root for this schema */
export type Query_AllHomepageProductTabsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<HomepageProductTabModelFilter>
}

/** The query root for this schema */
export type Query_AllHtmlSectionsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<HtmlSectionModelFilter>
}

/** The query root for this schema */
export type Query_AllIconLinksMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<IconLinkModelFilter>
}

/** The query root for this schema */
export type Query_AllImageLockupsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<ImageLockupModelFilter>
}

/** The query root for this schema */
export type Query_AllImageSectionsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<ImageSectionModelFilter>
}

/** The query root for this schema */
export type Query_AllImageTextCarouselsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<ImageTextCarouselModelFilter>
}

/** The query root for this schema */
export type Query_AllIntegrationTypeCategoriesMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<IntegrationTypeCategoryModelFilter>
}

/** The query root for this schema */
export type Query_AllIntegrationTypesMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<IntegrationTypeModelFilter>
}

/** The query root for this schema */
export type Query_AllJobsEmployeeTestimonialsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<JobsEmployeeTestimonialModelFilter>
}

/** The query root for this schema */
export type Query_AllJobsPageDepartmentsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<JobsPageDepartmentModelFilter>
}

/** The query root for this schema */
export type Query_AllLargeLogoGridSectionsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<LargeLogoGridSectionModelFilter>
}

/** The query root for this schema */
export type Query_AllLinksMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<LinkModelFilter>
}

/** The query root for this schema */
export type Query_AllListItemsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<ListItemModelFilter>
}

/** The query root for this schema */
export type Query_AllLocalPageMetadataSetsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<LocalPageMetadataSetModelFilter>
}

/** The query root for this schema */
export type Query_AllLocationRoomsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<LocationRoomModelFilter>
}

/** The query root for this schema */
export type Query_AllLocationVenuesMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<LocationVenueModelFilter>
}

/** The query root for this schema */
export type Query_AllMajorHeadlineSectionsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<MajorHeadlineSectionModelFilter>
}

/** The query root for this schema */
export type Query_AllMiniCalloutsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<MiniCalloutModelFilter>
}

/** The query root for this schema */
export type Query_AllNavCalloutsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<NavCalloutModelFilter>
}

/** The query root for this schema */
export type Query_AllNavPromosMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<NavPromoModelFilter>
}

/** The query root for this schema */
export type Query_AllNewsItemsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<NewsItemModelFilter>
}

/** The query root for this schema */
export type Query_AllOfficeHoursSessionCopy1sMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<OfficeHoursSessionCopy1ModelFilter>
}

/** The query root for this schema */
export type Query_AllOfficeHoursSessionsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<OfficeHoursSessionModelFilter>
}

/** The query root for this schema */
export type Query_AllOnDemandResourcesMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<OnDemandResourceModelFilter>
}

/** The query root for this schema */
export type Query_AllOpenSourceToolCategoriesMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<OpenSourceToolCategoryModelFilter>
}

/** The query root for this schema */
export type Query_AllOpenSourceToolsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<OpenSourceToolModelFilter>
}

/** The query root for this schema */
export type Query_AllPackageFeaturesMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<PackageFeatureModelFilter>
}

/** The query root for this schema */
export type Query_AllPackageOptionsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<PackageOptionModelFilter>
}

/** The query root for this schema */
export type Query_AllPeopleMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<PersonModelFilter>
}

/** The query root for this schema */
export type Query_AllPersonListsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<PersonListModelFilter>
}

/** The query root for this schema */
export type Query_AllPressLinksMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<PressLinkModelFilter>
}

/** The query root for this schema */
export type Query_AllPricingPagesMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<PricingPageModelFilter>
}

/** The query root for this schema */
export type Query_AllProductCertificationPagesMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<ProductCertificationPageModelFilter>
}

/** The query root for this schema */
export type Query_AllProductOfferingsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<ProductOfferingModelFilter>
}

/** The query root for this schema */
export type Query_AllProductPackageSectionsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<ProductPackageSectionModelFilter>
}

/** The query root for this schema */
export type Query_AllProductPricingPlansMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<ProductPricingPlanModelFilter>
}

/** The query root for this schema */
export type Query_AllProductSubnavsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<ProductSubnavModelFilter>
}

/** The query root for this schema */
export type Query_AllProductTabFeaturesMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<ProductTabFeatureModelFilter>
}

/** The query root for this schema */
export type Query_AllProductTypesMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<ProductTypeModelFilter>
}

/** The query root for this schema */
export type Query_AllRelatedItemsSectionsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<RelatedItemsSectionModelFilter>
}

/** The query root for this schema */
export type Query_AllResourceContentTypesMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<ResourceContentTypeModelFilter>
}

/** The query root for this schema */
export type Query_AllResourceIndustriesMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<ResourceIndustryModelFilter>
}

/** The query root for this schema */
export type Query_AllResourceInfrastructureProvidersMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<ResourceInfrastructureProviderModelFilter>
}

/** The query root for this schema */
export type Query_AllResourceMediaTypesMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<ResourceMediaTypeModelFilter>
}

/** The query root for this schema */
export type Query_AllResourcesMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<ResourceModelFilter>
}

/** The query root for this schema */
export type Query_AllSalesFormPagesMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SalesFormPageModelFilter>
}

/** The query root for this schema */
export type Query_AllSalesFormsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SalesFormModelFilter>
}

/** The query root for this schema */
export type Query_AllSbcAlertsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SbcAlertModelFilter>
}

/** The query root for this schema */
export type Query_AllSbcBeforeAfterDiagramsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SbcBeforeAfterDiagramModelFilter>
}

/** The query root for this schema */
export type Query_AllSbcButtonV2sMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SbcButtonV2ModelFilter>
}

/** The query root for this schema */
export type Query_AllSbcButtonsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SbcButtonModelFilter>
}

/** The query root for this schema */
export type Query_AllSbcCalloutSectionsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SbcCalloutSectionModelFilter>
}

/** The query root for this schema */
export type Query_AllSbcCalloutsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SbcCalloutModelFilter>
}

/** The query root for this schema */
export type Query_AllSbcCaseStudiesMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SbcCaseStudyModelFilter>
}

/** The query root for this schema */
export type Query_AllSbcCaseStudySlidersMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SbcCaseStudySliderModelFilter>
}

/** The query root for this schema */
export type Query_AllSbcCodeBlocksMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SbcCodeBlockModelFilter>
}

/** The query root for this schema */
export type Query_AllSbcImagesMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SbcImageModelFilter>
}

/** The query root for this schema */
export type Query_AllSbcLinkedTextSummaryListsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SbcLinkedTextSummaryListModelFilter>
}

/** The query root for this schema */
export type Query_AllSbcLogoGridsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SbcLogoGridModelFilter>
}

/** The query root for this schema */
export type Query_AllSbcMultiButtonsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SbcMultiButtonModelFilter>
}

/** The query root for this schema */
export type Query_AllSbcProductFeatureTablesMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SbcProductFeatureTableModelFilter>
}

/** The query root for this schema */
export type Query_AllSbcProductPricingsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SbcProductPricingModelFilter>
}

/** The query root for this schema */
export type Query_AllSbcResourcesSlidersMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SbcResourcesSliderModelFilter>
}

/** The query root for this schema */
export type Query_AllSbcSectionHeadersMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SbcSectionHeaderModelFilter>
}

/** The query root for this schema */
export type Query_AllSbcTextAndContentsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SbcTextAndContentModelFilter>
}

/** The query root for this schema */
export type Query_AllSbcTextsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SbcTextModelFilter>
}

/** The query root for this schema */
export type Query_AllSbcUseCasesMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SbcUseCaseModelFilter>
}

/** The query root for this schema */
export type Query_AllSbcUseCasesSectionsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SbcUseCasesSectionModelFilter>
}

/** The query root for this schema */
export type Query_AllSblHorizontalsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SblHorizontalModelFilter>
}

/** The query root for this schema */
export type Query_AllSblVerticalsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SblVerticalModelFilter>
}

/** The query root for this schema */
export type Query_AllSectionBlockPagesMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SectionBlockPageModelFilter>
}

/** The query root for this schema */
export type Query_AllSectionBlockV2sMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SectionBlockV2ModelFilter>
}

/** The query root for this schema */
export type Query_AllSectionBlocksMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SectionBlockModelFilter>
}

/** The query root for this schema */
export type Query_AllSectionDividersMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SectionDividerModelFilter>
}

/** The query root for this schema */
export type Query_AllSectionThemesMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SectionThemeModelFilter>
}

/** The query root for this schema */
export type Query_AllSentinelProductTabsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SentinelProductTabModelFilter>
}

/** The query root for this schema */
export type Query_AllSocialNetworkIconsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SocialNetworkIconModelFilter>
}

/** The query root for this schema */
export type Query_AllSocialNetworksMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SocialNetworkModelFilter>
}

/** The query root for this schema */
export type Query_AllSpeakersSectionsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SpeakersSectionModelFilter>
}

/** The query root for this schema */
export type Query_AllSplitCtaItemsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SplitCtaItemModelFilter>
}

/** The query root for this schema */
export type Query_AllSplitCtaSectionsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SplitCtaSectionModelFilter>
}

/** The query root for this schema */
export type Query_AllStaticDynamicSectionsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<StaticDynamicSectionModelFilter>
}

/** The query root for this schema */
export type Query_AllTemplatePagesMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<TemplatePageModelFilter>
}

/** The query root for this schema */
export type Query_AllTerraformGraphSectionsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<TerraformGraphSectionModelFilter>
}

/** The query root for this schema */
export type Query_AllTerraformOfferingCategoriesMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<TerraformOfferingCategoryModelFilter>
}

/** The query root for this schema */
export type Query_AllTerraformOfferingTablesMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<TerraformOfferingTableModelFilter>
}

/** The query root for this schema */
export type Query_AllTerraformOfferingTiersMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<TerraformOfferingTierModelFilter>
}

/** The query root for this schema */
export type Query_AllTerraformOfferingsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<TerraformOfferingModelFilter>
}

/** The query root for this schema */
export type Query_AllTestimonialsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<TestimonialModelFilter>
}

/** The query root for this schema */
export type Query_AllTextHeadlineAndGridSectionsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<TextHeadlineAndGridSectionModelFilter>
}

/** The query root for this schema */
export type Query_AllTextHeadlineSectionsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<TextHeadlineSectionModelFilter>
}

/** The query root for this schema */
export type Query_AllTextImageSectionsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<TextImageSectionModelFilter>
}

/** The query root for this schema */
export type Query_AllTextSectionsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<TextSectionModelFilter>
}

/** The query root for this schema */
export type Query_AllTmpmodelButtonsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<TmpmodelButtonModelFilter>
}

/** The query root for this schema */
export type Query_AllTmpmodelProductUseCasePagesMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<TmpmodelProductUseCasePageModelFilter>
}

/** The query root for this schema */
export type Query_AllTrainingCoursesMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<TrainingCourseModelFilter>
}

/** The query root for this schema */
export type Query_AllTrainingPartnerSectionsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<TrainingPartnerSectionModelFilter>
}

/** The query root for this schema */
export type Query_AllTrialFormPagesMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<TrialFormPageModelFilter>
}

/** The query root for this schema */
export type Query_AllTwoColumnTextSectionsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<TwoColumnTextSectionModelFilter>
}

/** The query root for this schema */
export type Query_AllUploadsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<UploadFilter>
}

/** The query root for this schema */
export type Query_AllUseCasePageDropdownsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<UseCasePageDropdownModelFilter>
}

/** The query root for this schema */
export type Query_AllVaultIntegrationSectionsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<VaultIntegrationSectionModelFilter>
}

/** The query root for this schema */
export type Query_AllVerticalTextBlockListItemsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<VerticalTextBlockListItemModelFilter>
}

/** The query root for this schema */
export type Query_AllVerticalTextBlockListSectionsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<VerticalTextBlockListSectionModelFilter>
}

/** The query root for this schema */
export type Query_AllVideoSectionsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<VideoSectionModelFilter>
}

/** The query root for this schema */
export type Query_AllVideoSourcesMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<VideoSourceModelFilter>
}

/** The query root for this schema */
export type Query_AllWebinarsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<WebinarModelFilter>
}

/** The query root for this schema */
export type Query_AllWhitePapersMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<WhitePaperModelFilter>
}

/** The query root for this schema */
export type Query_AllWistiaSectionsMetaArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<WistiaSectionModelFilter>
}

/** The query root for this schema */
export type Query_SiteArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QueryAboutPageArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QueryAlertArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<AlertModelFilter>
  orderBy?: Maybe<Array<Maybe<AlertModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAlertBannerArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<AlertBannerModelFilter>
  orderBy?: Maybe<Array<Maybe<AlertBannerModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllAlertBannersArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<AlertBannerModelFilter>
  orderBy?: Maybe<Array<Maybe<AlertBannerModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllAlertsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<AlertModelFilter>
  orderBy?: Maybe<Array<Maybe<AlertModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllBasicTablesArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<BasicTableModelFilter>
  orderBy?: Maybe<Array<Maybe<BasicTableModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllBlogPostCategoriesArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<BlogPostCategoryModelFilter>
  orderBy?: Maybe<Array<Maybe<BlogPostCategoryModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllBlogPostV2sArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<BlogPostV2ModelFilter>
  orderBy?: Maybe<Array<Maybe<BlogPostV2ModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllBlogPostsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<BlogPostModelFilter>
  orderBy?: Maybe<Array<Maybe<BlogPostModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllButton2sArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<Button2ModelFilter>
  orderBy?: Maybe<Array<Maybe<Button2ModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllButtonThemesArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<ButtonThemeModelFilter>
  orderBy?: Maybe<Array<Maybe<ButtonThemeModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllCallToActionsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<CallToActionModelFilter>
  orderBy?: Maybe<Array<Maybe<CallToActionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllCalloutItemsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<CalloutItemModelFilter>
  orderBy?: Maybe<Array<Maybe<CalloutItemModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllCalloutSectionsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<CalloutSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<CalloutSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllCloudPartnerPagesArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<CloudPartnerPageModelFilter>
  orderBy?: Maybe<Array<Maybe<CloudPartnerPageModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllCodeSamplesArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<CodeSampleModelFilter>
  orderBy?: Maybe<Array<Maybe<CodeSampleModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllCodeblockLanguagesArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<CodeblockLanguageModelFilter>
  orderBy?: Maybe<Array<Maybe<CodeblockLanguageModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllCompaniesArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<CompanyModelFilter>
  orderBy?: Maybe<Array<Maybe<CompanyModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllConsulGraphicSectionsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<ConsulGraphicSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<ConsulGraphicSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllContactCategoriesArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<ContactCategoryModelFilter>
  orderBy?: Maybe<Array<Maybe<ContactCategoryModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllContactFormPagesArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<ContactFormPageModelFilter>
  orderBy?: Maybe<Array<Maybe<ContactFormPageModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllDropdownLinksArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<DropdownLinkModelFilter>
  orderBy?: Maybe<Array<Maybe<DropdownLinkModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllEmbeddedPodcastSectionsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<EmbeddedPodcastSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<EmbeddedPodcastSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllEmbeddedSlidesSectionsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<EmbeddedSlidesSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<EmbeddedSlidesSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllEmployeePagesArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<EmployeePageModelFilter>
  orderBy?: Maybe<Array<Maybe<EmployeePageModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllEnterpriseFeaturesCategoriesArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<EnterpriseFeaturesCategoryModelFilter>
  orderBy?: Maybe<Array<Maybe<EnterpriseFeaturesCategoryModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllEnterprisePricingSectionsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<EnterprisePricingSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<EnterprisePricingSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllEnterpriseProductPagesArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<EnterpriseProductPageModelFilter>
  orderBy?: Maybe<Array<Maybe<EnterpriseProductPageModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllEnterpriseProductSubnavsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<EnterpriseProductSubnavModelFilter>
  orderBy?: Maybe<Array<Maybe<EnterpriseProductSubnavModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllEnterpriseProductUseCasePagesArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<EnterpriseProductUseCasePageModelFilter>
  orderBy?: Maybe<Array<Maybe<EnterpriseProductUseCasePageModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllEnterpriseProductsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<EnterpriseProductModelFilter>
  orderBy?: Maybe<Array<Maybe<EnterpriseProductModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllEventTypesArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<EventTypeModelFilter>
  orderBy?: Maybe<Array<Maybe<EventTypeModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllEventsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<EventModelFilter>
  orderBy?: Maybe<Array<Maybe<EventModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllExperienceLevelsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<ExperienceLevelModelFilter>
  orderBy?: Maybe<Array<Maybe<ExperienceLevelModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllExternalResourcesArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<ExternalResourceModelFilter>
  orderBy?: Maybe<Array<Maybe<ExternalResourceModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllFaqCategoriesArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<FaqCategoryModelFilter>
  orderBy?: Maybe<Array<Maybe<FaqCategoryModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllFeatureTableColumnsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<FeatureTableColumnModelFilter>
  orderBy?: Maybe<Array<Maybe<FeatureTableColumnModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllFeatureTableRowValuesArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<FeatureTableRowValueModelFilter>
  orderBy?: Maybe<Array<Maybe<FeatureTableRowValueModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllFeatureTableRowsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<FeatureTableRowModelFilter>
  orderBy?: Maybe<Array<Maybe<FeatureTableRowModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllFeatureTableTabsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<FeatureTableTabModelFilter>
  orderBy?: Maybe<Array<Maybe<FeatureTableTabModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllFeatureTablesArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<FeatureTableModelFilter>
  orderBy?: Maybe<Array<Maybe<FeatureTableModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllFormContactTypesArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<FormContactTypeModelFilter>
  orderBy?: Maybe<Array<Maybe<FormContactTypeModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllFormMultiSelectOptionsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<FormMultiSelectOptionModelFilter>
  orderBy?: Maybe<Array<Maybe<FormMultiSelectOptionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllHashiconfBasicPagesArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<HashiconfBasicPageModelFilter>
  orderBy?: Maybe<Array<Maybe<HashiconfBasicPageModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllHashiconfFeaturedSpeakersSectionsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<HashiconfFeaturedSpeakersSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<HashiconfFeaturedSpeakersSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllHashiconfLandingPagesArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<HashiconfLandingPageModelFilter>
  orderBy?: Maybe<Array<Maybe<HashiconfLandingPageModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllHashiconfLiveStreamPagesArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<HashiconfLiveStreamPageModelFilter>
  orderBy?: Maybe<Array<Maybe<HashiconfLiveStreamPageModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllHashiconfScheduleDaysArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<HashiconfScheduleDayModelFilter>
  orderBy?: Maybe<Array<Maybe<HashiconfScheduleDayModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllHashiconfScheduleItemsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<HashiconfScheduleItemModelFilter>
  orderBy?: Maybe<Array<Maybe<HashiconfScheduleItemModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllHashiconfScheduleLiteSectionsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<HashiconfScheduleLiteSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<HashiconfScheduleLiteSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllHashiconfSchedulePagesArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<HashiconfSchedulePageModelFilter>
  orderBy?: Maybe<Array<Maybe<HashiconfSchedulePageModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllHashiconfSectionBlockPagesArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<HashiconfSectionBlockPageModelFilter>
  orderBy?: Maybe<Array<Maybe<HashiconfSectionBlockPageModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllHashiconfSectionBlocksArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<HashiconfSectionBlockModelFilter>
  orderBy?: Maybe<Array<Maybe<HashiconfSectionBlockModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllHashiconfSessionsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<HashiconfSessionModelFilter>
  orderBy?: Maybe<Array<Maybe<HashiconfSessionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllHashiconfSpeakersArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<HashiconfSpeakerModelFilter>
  orderBy?: Maybe<Array<Maybe<HashiconfSpeakerModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllHashiconfSpeakersPagesArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<HashiconfSpeakersPageModelFilter>
  orderBy?: Maybe<Array<Maybe<HashiconfSpeakersPageModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllHashiconfSponsorSectionsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<HashiconfSponsorSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<HashiconfSponsorSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllHashiconfTextAndFullImagesArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<HashiconfTextAndFullImageModelFilter>
  orderBy?: Maybe<Array<Maybe<HashiconfTextAndFullImageModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllHashiconfTrainingDaysArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<HashiconfTrainingDayModelFilter>
  orderBy?: Maybe<Array<Maybe<HashiconfTrainingDayModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllHashiconfTrainingsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<HashiconfTrainingModelFilter>
  orderBy?: Maybe<Array<Maybe<HashiconfTrainingModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllHashiconfsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<HashiconfModelFilter>
  orderBy?: Maybe<Array<Maybe<HashiconfModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllHashicorpProductsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<HashicorpProductModelFilter>
  orderBy?: Maybe<Array<Maybe<HashicorpProductModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllHeroFormLeadsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<HeroFormLeadModelFilter>
  orderBy?: Maybe<Array<Maybe<HeroFormLeadModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllHeroSectionsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<HeroSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<HeroSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllHeroVideoCarouselItemsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<HeroVideoCarouselItemModelFilter>
  orderBy?: Maybe<Array<Maybe<HeroVideoCarouselItemModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllHomepageProductTabsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<HomepageProductTabModelFilter>
  orderBy?: Maybe<Array<Maybe<HomepageProductTabModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllHtmlSectionsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<HtmlSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<HtmlSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllIconLinksArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<IconLinkModelFilter>
  orderBy?: Maybe<Array<Maybe<IconLinkModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllImageLockupsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<ImageLockupModelFilter>
  orderBy?: Maybe<Array<Maybe<ImageLockupModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllImageSectionsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<ImageSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<ImageSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllImageTextCarouselsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<ImageTextCarouselModelFilter>
  orderBy?: Maybe<Array<Maybe<ImageTextCarouselModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllIntegrationTypeCategoriesArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<IntegrationTypeCategoryModelFilter>
  orderBy?: Maybe<Array<Maybe<IntegrationTypeCategoryModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllIntegrationTypesArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<IntegrationTypeModelFilter>
  orderBy?: Maybe<Array<Maybe<IntegrationTypeModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllJobsEmployeeTestimonialsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<JobsEmployeeTestimonialModelFilter>
  orderBy?: Maybe<Array<Maybe<JobsEmployeeTestimonialModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllJobsPageDepartmentsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<JobsPageDepartmentModelFilter>
  orderBy?: Maybe<Array<Maybe<JobsPageDepartmentModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllLargeLogoGridSectionsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<LargeLogoGridSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<LargeLogoGridSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllLinksArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<LinkModelFilter>
  orderBy?: Maybe<Array<Maybe<LinkModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllListItemsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<ListItemModelFilter>
  orderBy?: Maybe<Array<Maybe<ListItemModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllLocalPageMetadataSetsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<LocalPageMetadataSetModelFilter>
  orderBy?: Maybe<Array<Maybe<LocalPageMetadataSetModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllLocationRoomsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<LocationRoomModelFilter>
  orderBy?: Maybe<Array<Maybe<LocationRoomModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllLocationVenuesArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<LocationVenueModelFilter>
  orderBy?: Maybe<Array<Maybe<LocationVenueModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllMajorHeadlineSectionsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<MajorHeadlineSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<MajorHeadlineSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllMiniCalloutsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<MiniCalloutModelFilter>
  orderBy?: Maybe<Array<Maybe<MiniCalloutModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllNavCalloutsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<NavCalloutModelFilter>
  orderBy?: Maybe<Array<Maybe<NavCalloutModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllNavPromosArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<NavPromoModelFilter>
  orderBy?: Maybe<Array<Maybe<NavPromoModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllNewsItemsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<NewsItemModelFilter>
  orderBy?: Maybe<Array<Maybe<NewsItemModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllOfficeHoursSessionCopy1sArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<OfficeHoursSessionCopy1ModelFilter>
  orderBy?: Maybe<Array<Maybe<OfficeHoursSessionCopy1ModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllOfficeHoursSessionsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<OfficeHoursSessionModelFilter>
  orderBy?: Maybe<Array<Maybe<OfficeHoursSessionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllOnDemandResourcesArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<OnDemandResourceModelFilter>
  orderBy?: Maybe<Array<Maybe<OnDemandResourceModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllOpenSourceToolCategoriesArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<OpenSourceToolCategoryModelFilter>
  orderBy?: Maybe<Array<Maybe<OpenSourceToolCategoryModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllOpenSourceToolsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<OpenSourceToolModelFilter>
  orderBy?: Maybe<Array<Maybe<OpenSourceToolModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllPackageFeaturesArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<PackageFeatureModelFilter>
  orderBy?: Maybe<Array<Maybe<PackageFeatureModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllPackageOptionsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<PackageOptionModelFilter>
  orderBy?: Maybe<Array<Maybe<PackageOptionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllPeopleArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<PersonModelFilter>
  orderBy?: Maybe<Array<Maybe<PersonModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllPersonListsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<PersonListModelFilter>
  orderBy?: Maybe<Array<Maybe<PersonListModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllPressLinksArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<PressLinkModelFilter>
  orderBy?: Maybe<Array<Maybe<PressLinkModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllPricingPagesArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<PricingPageModelFilter>
  orderBy?: Maybe<Array<Maybe<PricingPageModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllProductCertificationPagesArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<ProductCertificationPageModelFilter>
  orderBy?: Maybe<Array<Maybe<ProductCertificationPageModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllProductOfferingsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<ProductOfferingModelFilter>
  orderBy?: Maybe<Array<Maybe<ProductOfferingModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllProductPackageSectionsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<ProductPackageSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<ProductPackageSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllProductPricingPlansArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<ProductPricingPlanModelFilter>
  orderBy?: Maybe<Array<Maybe<ProductPricingPlanModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllProductSubnavsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<ProductSubnavModelFilter>
  orderBy?: Maybe<Array<Maybe<ProductSubnavModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllProductTabFeaturesArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<ProductTabFeatureModelFilter>
  orderBy?: Maybe<Array<Maybe<ProductTabFeatureModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllProductTypesArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<ProductTypeModelFilter>
  orderBy?: Maybe<Array<Maybe<ProductTypeModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllRelatedItemsSectionsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<RelatedItemsSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<RelatedItemsSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllResourceContentTypesArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<ResourceContentTypeModelFilter>
  orderBy?: Maybe<Array<Maybe<ResourceContentTypeModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllResourceIndustriesArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<ResourceIndustryModelFilter>
  orderBy?: Maybe<Array<Maybe<ResourceIndustryModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllResourceInfrastructureProvidersArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<ResourceInfrastructureProviderModelFilter>
  orderBy?: Maybe<Array<Maybe<ResourceInfrastructureProviderModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllResourceMediaTypesArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<ResourceMediaTypeModelFilter>
  orderBy?: Maybe<Array<Maybe<ResourceMediaTypeModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllResourcesArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<ResourceModelFilter>
  orderBy?: Maybe<Array<Maybe<ResourceModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllSalesFormPagesArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<SalesFormPageModelFilter>
  orderBy?: Maybe<Array<Maybe<SalesFormPageModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllSalesFormsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<SalesFormModelFilter>
  orderBy?: Maybe<Array<Maybe<SalesFormModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllSbcAlertsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<SbcAlertModelFilter>
  orderBy?: Maybe<Array<Maybe<SbcAlertModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllSbcBeforeAfterDiagramsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<SbcBeforeAfterDiagramModelFilter>
  orderBy?: Maybe<Array<Maybe<SbcBeforeAfterDiagramModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllSbcButtonV2sArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<SbcButtonV2ModelFilter>
  orderBy?: Maybe<Array<Maybe<SbcButtonV2ModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllSbcButtonsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<SbcButtonModelFilter>
  orderBy?: Maybe<Array<Maybe<SbcButtonModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllSbcCalloutSectionsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<SbcCalloutSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<SbcCalloutSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllSbcCalloutsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<SbcCalloutModelFilter>
  orderBy?: Maybe<Array<Maybe<SbcCalloutModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllSbcCaseStudiesArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<SbcCaseStudyModelFilter>
  orderBy?: Maybe<Array<Maybe<SbcCaseStudyModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllSbcCaseStudySlidersArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<SbcCaseStudySliderModelFilter>
  orderBy?: Maybe<Array<Maybe<SbcCaseStudySliderModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllSbcCodeBlocksArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<SbcCodeBlockModelFilter>
  orderBy?: Maybe<Array<Maybe<SbcCodeBlockModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllSbcImagesArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<SbcImageModelFilter>
  orderBy?: Maybe<Array<Maybe<SbcImageModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllSbcLinkedTextSummaryListsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<SbcLinkedTextSummaryListModelFilter>
  orderBy?: Maybe<Array<Maybe<SbcLinkedTextSummaryListModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllSbcLogoGridsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<SbcLogoGridModelFilter>
  orderBy?: Maybe<Array<Maybe<SbcLogoGridModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllSbcMultiButtonsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<SbcMultiButtonModelFilter>
  orderBy?: Maybe<Array<Maybe<SbcMultiButtonModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllSbcProductFeatureTablesArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<SbcProductFeatureTableModelFilter>
  orderBy?: Maybe<Array<Maybe<SbcProductFeatureTableModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllSbcProductPricingsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<SbcProductPricingModelFilter>
  orderBy?: Maybe<Array<Maybe<SbcProductPricingModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllSbcResourcesSlidersArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<SbcResourcesSliderModelFilter>
  orderBy?: Maybe<Array<Maybe<SbcResourcesSliderModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllSbcSectionHeadersArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<SbcSectionHeaderModelFilter>
  orderBy?: Maybe<Array<Maybe<SbcSectionHeaderModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllSbcTextAndContentsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<SbcTextAndContentModelFilter>
  orderBy?: Maybe<Array<Maybe<SbcTextAndContentModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllSbcTextsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<SbcTextModelFilter>
  orderBy?: Maybe<Array<Maybe<SbcTextModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllSbcUseCasesArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<SbcUseCaseModelFilter>
  orderBy?: Maybe<Array<Maybe<SbcUseCaseModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllSbcUseCasesSectionsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<SbcUseCasesSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<SbcUseCasesSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllSblHorizontalsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<SblHorizontalModelFilter>
  orderBy?: Maybe<Array<Maybe<SblHorizontalModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllSblVerticalsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<SblVerticalModelFilter>
  orderBy?: Maybe<Array<Maybe<SblVerticalModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllSectionBlockPagesArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<SectionBlockPageModelFilter>
  orderBy?: Maybe<Array<Maybe<SectionBlockPageModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllSectionBlockV2sArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<SectionBlockV2ModelFilter>
  orderBy?: Maybe<Array<Maybe<SectionBlockV2ModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllSectionBlocksArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<SectionBlockModelFilter>
  orderBy?: Maybe<Array<Maybe<SectionBlockModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllSectionDividersArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<SectionDividerModelFilter>
  orderBy?: Maybe<Array<Maybe<SectionDividerModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllSectionThemesArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<SectionThemeModelFilter>
  orderBy?: Maybe<Array<Maybe<SectionThemeModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllSentinelProductTabsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<SentinelProductTabModelFilter>
  orderBy?: Maybe<Array<Maybe<SentinelProductTabModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllSocialNetworkIconsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<SocialNetworkIconModelFilter>
  orderBy?: Maybe<Array<Maybe<SocialNetworkIconModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllSocialNetworksArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<SocialNetworkModelFilter>
  orderBy?: Maybe<Array<Maybe<SocialNetworkModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllSpeakersSectionsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<SpeakersSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<SpeakersSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllSplitCtaItemsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<SplitCtaItemModelFilter>
  orderBy?: Maybe<Array<Maybe<SplitCtaItemModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllSplitCtaSectionsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<SplitCtaSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<SplitCtaSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllStaticDynamicSectionsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<StaticDynamicSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<StaticDynamicSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllTemplatePagesArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<TemplatePageModelFilter>
  orderBy?: Maybe<Array<Maybe<TemplatePageModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllTerraformGraphSectionsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<TerraformGraphSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<TerraformGraphSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllTerraformOfferingCategoriesArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<TerraformOfferingCategoryModelFilter>
  orderBy?: Maybe<Array<Maybe<TerraformOfferingCategoryModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllTerraformOfferingTablesArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<TerraformOfferingTableModelFilter>
  orderBy?: Maybe<Array<Maybe<TerraformOfferingTableModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllTerraformOfferingTiersArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<TerraformOfferingTierModelFilter>
  orderBy?: Maybe<Array<Maybe<TerraformOfferingTierModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllTerraformOfferingsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<TerraformOfferingModelFilter>
  orderBy?: Maybe<Array<Maybe<TerraformOfferingModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllTestimonialsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<TestimonialModelFilter>
  orderBy?: Maybe<Array<Maybe<TestimonialModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllTextHeadlineAndGridSectionsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<TextHeadlineAndGridSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<TextHeadlineAndGridSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllTextHeadlineSectionsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<TextHeadlineSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<TextHeadlineSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllTextImageSectionsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<TextImageSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<TextImageSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllTextSectionsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<TextSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<TextSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllTmpmodelButtonsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<TmpmodelButtonModelFilter>
  orderBy?: Maybe<Array<Maybe<TmpmodelButtonModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllTmpmodelProductUseCasePagesArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<TmpmodelProductUseCasePageModelFilter>
  orderBy?: Maybe<Array<Maybe<TmpmodelProductUseCasePageModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllTrainingCoursesArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<TrainingCourseModelFilter>
  orderBy?: Maybe<Array<Maybe<TrainingCourseModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllTrainingPartnerSectionsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<TrainingPartnerSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<TrainingPartnerSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllTrialFormPagesArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<TrialFormPageModelFilter>
  orderBy?: Maybe<Array<Maybe<TrialFormPageModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllTwoColumnTextSectionsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<TwoColumnTextSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<TwoColumnTextSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllUploadsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<UploadFilter>
  orderBy?: Maybe<Array<Maybe<UploadOrderBy>>>
}

/** The query root for this schema */
export type QueryAllUseCasePageDropdownsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<UseCasePageDropdownModelFilter>
  orderBy?: Maybe<Array<Maybe<UseCasePageDropdownModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllVaultIntegrationSectionsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<VaultIntegrationSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<VaultIntegrationSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllVerticalTextBlockListItemsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<VerticalTextBlockListItemModelFilter>
  orderBy?: Maybe<Array<Maybe<VerticalTextBlockListItemModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllVerticalTextBlockListSectionsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<VerticalTextBlockListSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<VerticalTextBlockListSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllVideoSectionsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<VideoSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<VideoSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllVideoSourcesArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<VideoSourceModelFilter>
  orderBy?: Maybe<Array<Maybe<VideoSourceModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllWebinarsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<WebinarModelFilter>
  orderBy?: Maybe<Array<Maybe<WebinarModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllWhitePapersArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<WhitePaperModelFilter>
  orderBy?: Maybe<Array<Maybe<WhitePaperModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllWistiaSectionsArgs = {
  locale?: Maybe<SiteLocale>
  skip?: Maybe<Scalars["IntType"]>
  first?: Maybe<Scalars["IntType"]>
  filter?: Maybe<WistiaSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<WistiaSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryBasicTableArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<BasicTableModelFilter>
  orderBy?: Maybe<Array<Maybe<BasicTableModelOrderBy>>>
}

/** The query root for this schema */
export type QueryBecomeAPartnerPageArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QueryBlogIndexPageArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QueryBlogPostArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<BlogPostModelFilter>
  orderBy?: Maybe<Array<Maybe<BlogPostModelOrderBy>>>
}

/** The query root for this schema */
export type QueryBlogPostCategoryArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<BlogPostCategoryModelFilter>
  orderBy?: Maybe<Array<Maybe<BlogPostCategoryModelOrderBy>>>
}

/** The query root for this schema */
export type QueryBlogPostV2Args = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<BlogPostV2ModelFilter>
  orderBy?: Maybe<Array<Maybe<BlogPostV2ModelOrderBy>>>
}

/** The query root for this schema */
export type QueryBrandPageArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QueryButton2Args = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<Button2ModelFilter>
  orderBy?: Maybe<Array<Maybe<Button2ModelOrderBy>>>
}

/** The query root for this schema */
export type QueryButtonThemeArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<ButtonThemeModelFilter>
  orderBy?: Maybe<Array<Maybe<ButtonThemeModelOrderBy>>>
}

/** The query root for this schema */
export type QueryCallToActionArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<CallToActionModelFilter>
  orderBy?: Maybe<Array<Maybe<CallToActionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryCalloutItemArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<CalloutItemModelFilter>
  orderBy?: Maybe<Array<Maybe<CalloutItemModelOrderBy>>>
}

/** The query root for this schema */
export type QueryCalloutSectionArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<CalloutSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<CalloutSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryCertificationPageArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QueryCloudPartnerPageArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<CloudPartnerPageModelFilter>
  orderBy?: Maybe<Array<Maybe<CloudPartnerPageModelOrderBy>>>
}

/** The query root for this schema */
export type QueryCodeSampleArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<CodeSampleModelFilter>
  orderBy?: Maybe<Array<Maybe<CodeSampleModelOrderBy>>>
}

/** The query root for this schema */
export type QueryCodeblockLanguageArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<CodeblockLanguageModelFilter>
  orderBy?: Maybe<Array<Maybe<CodeblockLanguageModelOrderBy>>>
}

/** The query root for this schema */
export type QueryCommunityLandingPageArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QueryCompanyArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<CompanyModelFilter>
  orderBy?: Maybe<Array<Maybe<CompanyModelOrderBy>>>
}

/** The query root for this schema */
export type QueryConsulFieldDayLiveArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QueryConsulGraphicSectionArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<ConsulGraphicSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<ConsulGraphicSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryConsulProductPageArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QueryContactCategoryArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<ContactCategoryModelFilter>
  orderBy?: Maybe<Array<Maybe<ContactCategoryModelOrderBy>>>
}

/** The query root for this schema */
export type QueryContactFormPageArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<ContactFormPageModelFilter>
  orderBy?: Maybe<Array<Maybe<ContactFormPageModelOrderBy>>>
}

/** The query root for this schema */
export type QueryContactPageArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QueryDropdownLinkArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<DropdownLinkModelFilter>
  orderBy?: Maybe<Array<Maybe<DropdownLinkModelOrderBy>>>
}

/** The query root for this schema */
export type QueryEcosystemFindAPartnerPageArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QueryEcosystemLandingPageArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QueryEmbeddedPodcastSectionArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<EmbeddedPodcastSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<EmbeddedPodcastSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryEmbeddedSlidesSectionArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<EmbeddedSlidesSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<EmbeddedSlidesSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryEmployeePageArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<EmployeePageModelFilter>
  orderBy?: Maybe<Array<Maybe<EmployeePageModelOrderBy>>>
}

/** The query root for this schema */
export type QueryEnterpriseFeaturesCategoryArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<EnterpriseFeaturesCategoryModelFilter>
  orderBy?: Maybe<Array<Maybe<EnterpriseFeaturesCategoryModelOrderBy>>>
}

/** The query root for this schema */
export type QueryEnterprisePricingSectionArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<EnterprisePricingSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<EnterprisePricingSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryEnterpriseProductArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<EnterpriseProductModelFilter>
  orderBy?: Maybe<Array<Maybe<EnterpriseProductModelOrderBy>>>
}

/** The query root for this schema */
export type QueryEnterpriseProductPageArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<EnterpriseProductPageModelFilter>
  orderBy?: Maybe<Array<Maybe<EnterpriseProductPageModelOrderBy>>>
}

/** The query root for this schema */
export type QueryEnterpriseProductSubnavArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<EnterpriseProductSubnavModelFilter>
  orderBy?: Maybe<Array<Maybe<EnterpriseProductSubnavModelOrderBy>>>
}

/** The query root for this schema */
export type QueryEnterpriseProductUseCasePageArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<EnterpriseProductUseCasePageModelFilter>
  orderBy?: Maybe<Array<Maybe<EnterpriseProductUseCasePageModelOrderBy>>>
}

/** The query root for this schema */
export type QueryEventArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<EventModelFilter>
  orderBy?: Maybe<Array<Maybe<EventModelOrderBy>>>
}

/** The query root for this schema */
export type QueryEventTypeArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<EventTypeModelFilter>
  orderBy?: Maybe<Array<Maybe<EventTypeModelOrderBy>>>
}

/** The query root for this schema */
export type QueryEventsPageArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QueryExperienceLevelArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<ExperienceLevelModelFilter>
  orderBy?: Maybe<Array<Maybe<ExperienceLevelModelOrderBy>>>
}

/** The query root for this schema */
export type QueryExternalResourceArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<ExternalResourceModelFilter>
  orderBy?: Maybe<Array<Maybe<ExternalResourceModelOrderBy>>>
}

/** The query root for this schema */
export type QueryFaqCategoryArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<FaqCategoryModelFilter>
  orderBy?: Maybe<Array<Maybe<FaqCategoryModelOrderBy>>>
}

/** The query root for this schema */
export type QueryFeatureTableArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<FeatureTableModelFilter>
  orderBy?: Maybe<Array<Maybe<FeatureTableModelOrderBy>>>
}

/** The query root for this schema */
export type QueryFeatureTableColumnArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<FeatureTableColumnModelFilter>
  orderBy?: Maybe<Array<Maybe<FeatureTableColumnModelOrderBy>>>
}

/** The query root for this schema */
export type QueryFeatureTableRowArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<FeatureTableRowModelFilter>
  orderBy?: Maybe<Array<Maybe<FeatureTableRowModelOrderBy>>>
}

/** The query root for this schema */
export type QueryFeatureTableRowValueArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<FeatureTableRowValueModelFilter>
  orderBy?: Maybe<Array<Maybe<FeatureTableRowValueModelOrderBy>>>
}

/** The query root for this schema */
export type QueryFeatureTableTabArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<FeatureTableTabModelFilter>
  orderBy?: Maybe<Array<Maybe<FeatureTableTabModelOrderBy>>>
}

/** The query root for this schema */
export type QueryFormContactTypeArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<FormContactTypeModelFilter>
  orderBy?: Maybe<Array<Maybe<FormContactTypeModelOrderBy>>>
}

/** The query root for this schema */
export type QueryFormMultiSelectOptionArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<FormMultiSelectOptionModelFilter>
  orderBy?: Maybe<Array<Maybe<FormMultiSelectOptionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryFourohfourPageArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QueryGlobalDemoFormArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QueryGlobalFooterArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QueryGlobalFooterBasicArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QueryGlobalNavigationArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QueryGuestBlogTextArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QueryHashiconfArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<HashiconfModelFilter>
  orderBy?: Maybe<Array<Maybe<HashiconfModelOrderBy>>>
}

/** The query root for this schema */
export type QueryHashiconfBasicPageArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<HashiconfBasicPageModelFilter>
  orderBy?: Maybe<Array<Maybe<HashiconfBasicPageModelOrderBy>>>
}

/** The query root for this schema */
export type QueryHashiconfFeaturedSpeakersSectionArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<HashiconfFeaturedSpeakersSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<HashiconfFeaturedSpeakersSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryHashiconfLandingPageArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<HashiconfLandingPageModelFilter>
  orderBy?: Maybe<Array<Maybe<HashiconfLandingPageModelOrderBy>>>
}

/** The query root for this schema */
export type QueryHashiconfLiveStreamPageArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<HashiconfLiveStreamPageModelFilter>
  orderBy?: Maybe<Array<Maybe<HashiconfLiveStreamPageModelOrderBy>>>
}

/** The query root for this schema */
export type QueryHashiconfScheduleDayArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<HashiconfScheduleDayModelFilter>
  orderBy?: Maybe<Array<Maybe<HashiconfScheduleDayModelOrderBy>>>
}

/** The query root for this schema */
export type QueryHashiconfScheduleItemArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<HashiconfScheduleItemModelFilter>
  orderBy?: Maybe<Array<Maybe<HashiconfScheduleItemModelOrderBy>>>
}

/** The query root for this schema */
export type QueryHashiconfScheduleLiteSectionArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<HashiconfScheduleLiteSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<HashiconfScheduleLiteSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryHashiconfSchedulePageArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<HashiconfSchedulePageModelFilter>
  orderBy?: Maybe<Array<Maybe<HashiconfSchedulePageModelOrderBy>>>
}

/** The query root for this schema */
export type QueryHashiconfSectionBlockArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<HashiconfSectionBlockModelFilter>
  orderBy?: Maybe<Array<Maybe<HashiconfSectionBlockModelOrderBy>>>
}

/** The query root for this schema */
export type QueryHashiconfSectionBlockPageArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<HashiconfSectionBlockPageModelFilter>
  orderBy?: Maybe<Array<Maybe<HashiconfSectionBlockPageModelOrderBy>>>
}

/** The query root for this schema */
export type QueryHashiconfSessionArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<HashiconfSessionModelFilter>
  orderBy?: Maybe<Array<Maybe<HashiconfSessionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryHashiconfSpeakerArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<HashiconfSpeakerModelFilter>
  orderBy?: Maybe<Array<Maybe<HashiconfSpeakerModelOrderBy>>>
}

/** The query root for this schema */
export type QueryHashiconfSpeakersPageArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<HashiconfSpeakersPageModelFilter>
  orderBy?: Maybe<Array<Maybe<HashiconfSpeakersPageModelOrderBy>>>
}

/** The query root for this schema */
export type QueryHashiconfSponsorSectionArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<HashiconfSponsorSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<HashiconfSponsorSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryHashiconfTextAndFullImageArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<HashiconfTextAndFullImageModelFilter>
  orderBy?: Maybe<Array<Maybe<HashiconfTextAndFullImageModelOrderBy>>>
}

/** The query root for this schema */
export type QueryHashiconfTrainingArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<HashiconfTrainingModelFilter>
  orderBy?: Maybe<Array<Maybe<HashiconfTrainingModelOrderBy>>>
}

/** The query root for this schema */
export type QueryHashiconfTrainingDayArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<HashiconfTrainingDayModelFilter>
  orderBy?: Maybe<Array<Maybe<HashiconfTrainingDayModelOrderBy>>>
}

/** The query root for this schema */
export type QueryHashicorpProductArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<HashicorpProductModelFilter>
  orderBy?: Maybe<Array<Maybe<HashicorpProductModelOrderBy>>>
}

/** The query root for this schema */
export type QueryHeroFormLeadArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<HeroFormLeadModelFilter>
  orderBy?: Maybe<Array<Maybe<HeroFormLeadModelOrderBy>>>
}

/** The query root for this schema */
export type QueryHeroSectionArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<HeroSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<HeroSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryHeroVideoCarouselItemArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<HeroVideoCarouselItemModelFilter>
  orderBy?: Maybe<Array<Maybe<HeroVideoCarouselItemModelOrderBy>>>
}

/** The query root for this schema */
export type QueryHomePageArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QueryHomepageProductTabArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<HomepageProductTabModelFilter>
  orderBy?: Maybe<Array<Maybe<HomepageProductTabModelOrderBy>>>
}

/** The query root for this schema */
export type QueryHtmlSectionArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<HtmlSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<HtmlSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryIconLinkArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<IconLinkModelFilter>
  orderBy?: Maybe<Array<Maybe<IconLinkModelOrderBy>>>
}

/** The query root for this schema */
export type QueryImageLockupArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<ImageLockupModelFilter>
  orderBy?: Maybe<Array<Maybe<ImageLockupModelOrderBy>>>
}

/** The query root for this schema */
export type QueryImageSectionArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<ImageSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<ImageSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryImageTextCarouselArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<ImageTextCarouselModelFilter>
  orderBy?: Maybe<Array<Maybe<ImageTextCarouselModelOrderBy>>>
}

/** The query root for this schema */
export type QueryIntegrationTypeArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<IntegrationTypeModelFilter>
  orderBy?: Maybe<Array<Maybe<IntegrationTypeModelOrderBy>>>
}

/** The query root for this schema */
export type QueryIntegrationTypeCategoryArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<IntegrationTypeCategoryModelFilter>
  orderBy?: Maybe<Array<Maybe<IntegrationTypeCategoryModelOrderBy>>>
}

/** The query root for this schema */
export type QueryIntegrationsPageArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QueryJobsEmployeeTestimonialArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<JobsEmployeeTestimonialModelFilter>
  orderBy?: Maybe<Array<Maybe<JobsEmployeeTestimonialModelOrderBy>>>
}

/** The query root for this schema */
export type QueryJobsPageArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QueryJobsPageDepartmentArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<JobsPageDepartmentModelFilter>
  orderBy?: Maybe<Array<Maybe<JobsPageDepartmentModelOrderBy>>>
}

/** The query root for this schema */
export type QueryLargeLogoGridSectionArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<LargeLogoGridSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<LargeLogoGridSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryLearnLandingPageArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QueryLinkArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<LinkModelFilter>
  orderBy?: Maybe<Array<Maybe<LinkModelOrderBy>>>
}

/** The query root for this schema */
export type QueryListItemArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<ListItemModelFilter>
  orderBy?: Maybe<Array<Maybe<ListItemModelOrderBy>>>
}

/** The query root for this schema */
export type QueryLocalPageMetadataSetArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<LocalPageMetadataSetModelFilter>
  orderBy?: Maybe<Array<Maybe<LocalPageMetadataSetModelOrderBy>>>
}

/** The query root for this schema */
export type QueryLocationRoomArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<LocationRoomModelFilter>
  orderBy?: Maybe<Array<Maybe<LocationRoomModelOrderBy>>>
}

/** The query root for this schema */
export type QueryLocationVenueArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<LocationVenueModelFilter>
  orderBy?: Maybe<Array<Maybe<LocationVenueModelOrderBy>>>
}

/** The query root for this schema */
export type QueryMajorHeadlineSectionArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<MajorHeadlineSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<MajorHeadlineSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryMegaNavArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QueryMiniCalloutArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<MiniCalloutModelFilter>
  orderBy?: Maybe<Array<Maybe<MiniCalloutModelOrderBy>>>
}

/** The query root for this schema */
export type QueryNavArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QueryNavCalloutArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<NavCalloutModelFilter>
  orderBy?: Maybe<Array<Maybe<NavCalloutModelOrderBy>>>
}

/** The query root for this schema */
export type QueryNavPromoArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<NavPromoModelFilter>
  orderBy?: Maybe<Array<Maybe<NavPromoModelOrderBy>>>
}

/** The query root for this schema */
export type QueryNewsItemArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<NewsItemModelFilter>
  orderBy?: Maybe<Array<Maybe<NewsItemModelOrderBy>>>
}

/** The query root for this schema */
export type QueryNomadProductPageArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QueryOfficeHoursSessionArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<OfficeHoursSessionModelFilter>
  orderBy?: Maybe<Array<Maybe<OfficeHoursSessionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryOfficeHoursSessionCopy1Args = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<OfficeHoursSessionCopy1ModelFilter>
  orderBy?: Maybe<Array<Maybe<OfficeHoursSessionCopy1ModelOrderBy>>>
}

/** The query root for this schema */
export type QueryOnDemandResourceArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<OnDemandResourceModelFilter>
  orderBy?: Maybe<Array<Maybe<OnDemandResourceModelOrderBy>>>
}

/** The query root for this schema */
export type QueryOpenSourceToolArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<OpenSourceToolModelFilter>
  orderBy?: Maybe<Array<Maybe<OpenSourceToolModelOrderBy>>>
}

/** The query root for this schema */
export type QueryOpenSourceToolCategoryArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<OpenSourceToolCategoryModelFilter>
  orderBy?: Maybe<Array<Maybe<OpenSourceToolCategoryModelOrderBy>>>
}

/** The query root for this schema */
export type QueryPackageFeatureArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<PackageFeatureModelFilter>
  orderBy?: Maybe<Array<Maybe<PackageFeatureModelOrderBy>>>
}

/** The query root for this schema */
export type QueryPackageOptionArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<PackageOptionModelFilter>
  orderBy?: Maybe<Array<Maybe<PackageOptionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryPartnersPageArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QueryPersonArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<PersonModelFilter>
  orderBy?: Maybe<Array<Maybe<PersonModelOrderBy>>>
}

/** The query root for this schema */
export type QueryPersonListArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<PersonListModelFilter>
  orderBy?: Maybe<Array<Maybe<PersonListModelOrderBy>>>
}

/** The query root for this schema */
export type QueryPressLinkArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<PressLinkModelFilter>
  orderBy?: Maybe<Array<Maybe<PressLinkModelOrderBy>>>
}

/** The query root for this schema */
export type QueryPressPageArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QueryPricingPageArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<PricingPageModelFilter>
  orderBy?: Maybe<Array<Maybe<PricingPageModelOrderBy>>>
}

/** The query root for this schema */
export type QueryPrinciplesPageArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QueryProductCertificationPageArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<ProductCertificationPageModelFilter>
  orderBy?: Maybe<Array<Maybe<ProductCertificationPageModelOrderBy>>>
}

/** The query root for this schema */
export type QueryProductOfferingArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<ProductOfferingModelFilter>
  orderBy?: Maybe<Array<Maybe<ProductOfferingModelOrderBy>>>
}

/** The query root for this schema */
export type QueryProductPackageSectionArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<ProductPackageSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<ProductPackageSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryProductPricingPlanArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<ProductPricingPlanModelFilter>
  orderBy?: Maybe<Array<Maybe<ProductPricingPlanModelOrderBy>>>
}

/** The query root for this schema */
export type QueryProductSubnavArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<ProductSubnavModelFilter>
  orderBy?: Maybe<Array<Maybe<ProductSubnavModelOrderBy>>>
}

/** The query root for this schema */
export type QueryProductTabFeatureArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<ProductTabFeatureModelFilter>
  orderBy?: Maybe<Array<Maybe<ProductTabFeatureModelOrderBy>>>
}

/** The query root for this schema */
export type QueryProductTypeArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<ProductTypeModelFilter>
  orderBy?: Maybe<Array<Maybe<ProductTypeModelOrderBy>>>
}

/** The query root for this schema */
export type QueryRelatedItemsSectionArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<RelatedItemsSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<RelatedItemsSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryResourceArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<ResourceModelFilter>
  orderBy?: Maybe<Array<Maybe<ResourceModelOrderBy>>>
}

/** The query root for this schema */
export type QueryResourceContentTypeArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<ResourceContentTypeModelFilter>
  orderBy?: Maybe<Array<Maybe<ResourceContentTypeModelOrderBy>>>
}

/** The query root for this schema */
export type QueryResourceIndustryArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<ResourceIndustryModelFilter>
  orderBy?: Maybe<Array<Maybe<ResourceIndustryModelOrderBy>>>
}

/** The query root for this schema */
export type QueryResourceInfrastructureProviderArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<ResourceInfrastructureProviderModelFilter>
  orderBy?: Maybe<Array<Maybe<ResourceInfrastructureProviderModelOrderBy>>>
}

/** The query root for this schema */
export type QueryResourceMediaTypeArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<ResourceMediaTypeModelFilter>
  orderBy?: Maybe<Array<Maybe<ResourceMediaTypeModelOrderBy>>>
}

/** The query root for this schema */
export type QueryResourcesPageArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QuerySalesFormArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SalesFormModelFilter>
  orderBy?: Maybe<Array<Maybe<SalesFormModelOrderBy>>>
}

/** The query root for this schema */
export type QuerySalesFormPageArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SalesFormPageModelFilter>
  orderBy?: Maybe<Array<Maybe<SalesFormPageModelOrderBy>>>
}

/** The query root for this schema */
export type QuerySbcAlertArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SbcAlertModelFilter>
  orderBy?: Maybe<Array<Maybe<SbcAlertModelOrderBy>>>
}

/** The query root for this schema */
export type QuerySbcBeforeAfterDiagramArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SbcBeforeAfterDiagramModelFilter>
  orderBy?: Maybe<Array<Maybe<SbcBeforeAfterDiagramModelOrderBy>>>
}

/** The query root for this schema */
export type QuerySbcButtonArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SbcButtonModelFilter>
  orderBy?: Maybe<Array<Maybe<SbcButtonModelOrderBy>>>
}

/** The query root for this schema */
export type QuerySbcButtonV2Args = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SbcButtonV2ModelFilter>
  orderBy?: Maybe<Array<Maybe<SbcButtonV2ModelOrderBy>>>
}

/** The query root for this schema */
export type QuerySbcCalloutArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SbcCalloutModelFilter>
  orderBy?: Maybe<Array<Maybe<SbcCalloutModelOrderBy>>>
}

/** The query root for this schema */
export type QuerySbcCalloutSectionArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SbcCalloutSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<SbcCalloutSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QuerySbcCaseStudyArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SbcCaseStudyModelFilter>
  orderBy?: Maybe<Array<Maybe<SbcCaseStudyModelOrderBy>>>
}

/** The query root for this schema */
export type QuerySbcCaseStudySliderArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SbcCaseStudySliderModelFilter>
  orderBy?: Maybe<Array<Maybe<SbcCaseStudySliderModelOrderBy>>>
}

/** The query root for this schema */
export type QuerySbcCodeBlockArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SbcCodeBlockModelFilter>
  orderBy?: Maybe<Array<Maybe<SbcCodeBlockModelOrderBy>>>
}

/** The query root for this schema */
export type QuerySbcImageArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SbcImageModelFilter>
  orderBy?: Maybe<Array<Maybe<SbcImageModelOrderBy>>>
}

/** The query root for this schema */
export type QuerySbcLinkedTextSummaryListArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SbcLinkedTextSummaryListModelFilter>
  orderBy?: Maybe<Array<Maybe<SbcLinkedTextSummaryListModelOrderBy>>>
}

/** The query root for this schema */
export type QuerySbcLogoGridArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SbcLogoGridModelFilter>
  orderBy?: Maybe<Array<Maybe<SbcLogoGridModelOrderBy>>>
}

/** The query root for this schema */
export type QuerySbcMultiButtonArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SbcMultiButtonModelFilter>
  orderBy?: Maybe<Array<Maybe<SbcMultiButtonModelOrderBy>>>
}

/** The query root for this schema */
export type QuerySbcProductFeatureTableArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SbcProductFeatureTableModelFilter>
  orderBy?: Maybe<Array<Maybe<SbcProductFeatureTableModelOrderBy>>>
}

/** The query root for this schema */
export type QuerySbcProductPricingArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SbcProductPricingModelFilter>
  orderBy?: Maybe<Array<Maybe<SbcProductPricingModelOrderBy>>>
}

/** The query root for this schema */
export type QuerySbcResourcesSliderArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SbcResourcesSliderModelFilter>
  orderBy?: Maybe<Array<Maybe<SbcResourcesSliderModelOrderBy>>>
}

/** The query root for this schema */
export type QuerySbcSectionHeaderArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SbcSectionHeaderModelFilter>
  orderBy?: Maybe<Array<Maybe<SbcSectionHeaderModelOrderBy>>>
}

/** The query root for this schema */
export type QuerySbcTextArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SbcTextModelFilter>
  orderBy?: Maybe<Array<Maybe<SbcTextModelOrderBy>>>
}

/** The query root for this schema */
export type QuerySbcTextAndContentArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SbcTextAndContentModelFilter>
  orderBy?: Maybe<Array<Maybe<SbcTextAndContentModelOrderBy>>>
}

/** The query root for this schema */
export type QuerySbcUseCaseArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SbcUseCaseModelFilter>
  orderBy?: Maybe<Array<Maybe<SbcUseCaseModelOrderBy>>>
}

/** The query root for this schema */
export type QuerySbcUseCasesSectionArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SbcUseCasesSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<SbcUseCasesSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QuerySblHorizontalArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SblHorizontalModelFilter>
  orderBy?: Maybe<Array<Maybe<SblHorizontalModelOrderBy>>>
}

/** The query root for this schema */
export type QuerySblVerticalArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SblVerticalModelFilter>
  orderBy?: Maybe<Array<Maybe<SblVerticalModelOrderBy>>>
}

/** The query root for this schema */
export type QuerySectionBlockArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SectionBlockModelFilter>
  orderBy?: Maybe<Array<Maybe<SectionBlockModelOrderBy>>>
}

/** The query root for this schema */
export type QuerySectionBlockPageArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SectionBlockPageModelFilter>
  orderBy?: Maybe<Array<Maybe<SectionBlockPageModelOrderBy>>>
}

/** The query root for this schema */
export type QuerySectionBlockV2Args = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SectionBlockV2ModelFilter>
  orderBy?: Maybe<Array<Maybe<SectionBlockV2ModelOrderBy>>>
}

/** The query root for this schema */
export type QuerySectionDividerArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SectionDividerModelFilter>
  orderBy?: Maybe<Array<Maybe<SectionDividerModelOrderBy>>>
}

/** The query root for this schema */
export type QuerySectionThemeArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SectionThemeModelFilter>
  orderBy?: Maybe<Array<Maybe<SectionThemeModelOrderBy>>>
}

/** The query root for this schema */
export type QuerySentinelPageArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QuerySentinelProductTabArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SentinelProductTabModelFilter>
  orderBy?: Maybe<Array<Maybe<SentinelProductTabModelOrderBy>>>
}

/** The query root for this schema */
export type QueryShopPageArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QuerySocialNetworkArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SocialNetworkModelFilter>
  orderBy?: Maybe<Array<Maybe<SocialNetworkModelOrderBy>>>
}

/** The query root for this schema */
export type QuerySocialNetworkIconArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SocialNetworkIconModelFilter>
  orderBy?: Maybe<Array<Maybe<SocialNetworkIconModelOrderBy>>>
}

/** The query root for this schema */
export type QuerySolutionsInfrastructurePageArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QuerySolutionsNetworkingPageArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QuerySolutionsSecurityPageArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QuerySpeakersSectionArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SpeakersSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<SpeakersSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QuerySplitCtaItemArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SplitCtaItemModelFilter>
  orderBy?: Maybe<Array<Maybe<SplitCtaItemModelOrderBy>>>
}

/** The query root for this schema */
export type QuerySplitCtaSectionArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<SplitCtaSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<SplitCtaSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryStaticDynamicSectionArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<StaticDynamicSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<StaticDynamicSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QuerySubscriptionConfirmationPageArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QuerySubscriptionOptOutSuccessPageArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QueryTemplatePageArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<TemplatePageModelFilter>
  orderBy?: Maybe<Array<Maybe<TemplatePageModelOrderBy>>>
}

/** The query root for this schema */
export type QueryTerraformGraphSectionArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<TerraformGraphSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<TerraformGraphSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryTerraformOfferingArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<TerraformOfferingModelFilter>
  orderBy?: Maybe<Array<Maybe<TerraformOfferingModelOrderBy>>>
}

/** The query root for this schema */
export type QueryTerraformOfferingCategoryArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<TerraformOfferingCategoryModelFilter>
  orderBy?: Maybe<Array<Maybe<TerraformOfferingCategoryModelOrderBy>>>
}

/** The query root for this schema */
export type QueryTerraformOfferingTableArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<TerraformOfferingTableModelFilter>
  orderBy?: Maybe<Array<Maybe<TerraformOfferingTableModelOrderBy>>>
}

/** The query root for this schema */
export type QueryTerraformOfferingTierArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<TerraformOfferingTierModelFilter>
  orderBy?: Maybe<Array<Maybe<TerraformOfferingTierModelOrderBy>>>
}

/** The query root for this schema */
export type QueryTerraformProductPageArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QueryTestimonialArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<TestimonialModelFilter>
  orderBy?: Maybe<Array<Maybe<TestimonialModelOrderBy>>>
}

/** The query root for this schema */
export type QueryTextHeadlineAndGridSectionArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<TextHeadlineAndGridSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<TextHeadlineAndGridSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryTextHeadlineSectionArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<TextHeadlineSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<TextHeadlineSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryTextImageSectionArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<TextImageSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<TextImageSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryTextSectionArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<TextSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<TextSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryThankYouPageArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QueryTmpConsolHomeArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QueryTmpHomepageArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QueryTmpmodelAboutPageArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QueryTmpmodelButtonArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<TmpmodelButtonModelFilter>
  orderBy?: Maybe<Array<Maybe<TmpmodelButtonModelOrderBy>>>
}

/** The query root for this schema */
export type QueryTmpmodelConsulEnterprisePageArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QueryTmpmodelConsulOverviewPageArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QueryTmpmodelConsulServiceOnAzurePageArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QueryTmpmodelEcosystemFindAPartnerPageArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QueryTmpmodelEcosystemLandingPageArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QueryTmpmodelJobsPageArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QueryTmpmodelNomadEnterprisePageArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QueryTmpmodelNomadOverviewPageArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QueryTmpmodelProductUseCasePageArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<TmpmodelProductUseCasePageModelFilter>
  orderBy?: Maybe<Array<Maybe<TmpmodelProductUseCasePageModelOrderBy>>>
}

/** The query root for this schema */
export type QueryTmpmodelTerraformOverviewPageArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QueryTmpmodelTerraformPricingPageArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QueryTmpmodelTrainingPageArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QueryTmpmodelUserResearchPageArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QueryTmpmodelVaultAdvancedDataProtectionPageArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QueryTmpmodelVaultEnterprisePageArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QueryTmpmodelVaultOverviewPageArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QueryTrainingCourseArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<TrainingCourseModelFilter>
  orderBy?: Maybe<Array<Maybe<TrainingCourseModelOrderBy>>>
}

/** The query root for this schema */
export type QueryTrainingPageArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QueryTrainingPartnerSectionArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<TrainingPartnerSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<TrainingPartnerSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryTrialFormPageArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<TrialFormPageModelFilter>
  orderBy?: Maybe<Array<Maybe<TrialFormPageModelOrderBy>>>
}

/** The query root for this schema */
export type QueryTwoColumnTextSectionArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<TwoColumnTextSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<TwoColumnTextSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryUploadArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<UploadFilter>
  orderBy?: Maybe<Array<Maybe<UploadOrderBy>>>
}

/** The query root for this schema */
export type QueryUseCasePageDropdownArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<UseCasePageDropdownModelFilter>
  orderBy?: Maybe<Array<Maybe<UseCasePageDropdownModelOrderBy>>>
}

/** The query root for this schema */
export type QueryVaultAdvancedDataProtectionPageArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QueryVaultIntegrationSectionArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<VaultIntegrationSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<VaultIntegrationSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryVaultOssPageArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QueryVaultProductPageArgs = {
  locale?: Maybe<SiteLocale>
}

/** The query root for this schema */
export type QueryVerticalTextBlockListItemArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<VerticalTextBlockListItemModelFilter>
  orderBy?: Maybe<Array<Maybe<VerticalTextBlockListItemModelOrderBy>>>
}

/** The query root for this schema */
export type QueryVerticalTextBlockListSectionArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<VerticalTextBlockListSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<VerticalTextBlockListSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryVideoSectionArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<VideoSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<VideoSectionModelOrderBy>>>
}

/** The query root for this schema */
export type QueryVideoSourceArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<VideoSourceModelFilter>
  orderBy?: Maybe<Array<Maybe<VideoSourceModelOrderBy>>>
}

/** The query root for this schema */
export type QueryWebinarArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<WebinarModelFilter>
  orderBy?: Maybe<Array<Maybe<WebinarModelOrderBy>>>
}

/** The query root for this schema */
export type QueryWhitePaperArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<WhitePaperModelFilter>
  orderBy?: Maybe<Array<Maybe<WhitePaperModelOrderBy>>>
}

/** The query root for this schema */
export type QueryWistiaSectionArgs = {
  locale?: Maybe<SiteLocale>
  filter?: Maybe<WistiaSectionModelFilter>
  orderBy?: Maybe<Array<Maybe<WistiaSectionModelOrderBy>>>
}

/** Record of type Reason (reason) */
export type ReasonRecord = {
  __typename?: "ReasonRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  icon?: Maybe<FileField>
  id: Scalars["ItemId"]
  text?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Reason (reason) */
export type ReasonRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type RelatedItemsSectionModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  transcript?: Maybe<StringFilter>
  github?: Maybe<StringFilter>
  slides?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<RelatedItemsSectionModelFilter>>>
}

export enum RelatedItemsSectionModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  TranscriptAsc = "transcript_ASC",
  TranscriptDesc = "transcript_DESC",
  GithubAsc = "github_ASC",
  GithubDesc = "github_DESC",
  SlidesAsc = "slides_ASC",
  SlidesDesc = "slides_DESC"
}

/** Record of type Related Items Section (related_items_section) */
export type RelatedItemsSectionRecord = {
  __typename?: "RelatedItemsSectionRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  github?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  slides?: Maybe<Scalars["String"]>
  transcript?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Related Items Section (related_items_section) */
export type RelatedItemsSectionRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Specifies how to filter by upload type */
export type ResolutionFilter = {
  /** Search uploads with the specified type */
  eq?: Maybe<ResolutionType>
  /** Exclude uploads with the specified type */
  neq?: Maybe<ResolutionType>
  /** Search uploads with the specified types */
  in?: Maybe<Array<Maybe<ResolutionType>>>
  /** Search uploads without the specified types */
  notIn?: Maybe<Array<Maybe<ResolutionType>>>
}

export enum ResolutionType {
  Icon = "icon",
  Small = "small",
  Medium = "medium",
  Large = "large"
}

export type ResourceContentTypeModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  name?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<ResourceContentTypeModelFilter>>>
}

export enum ResourceContentTypeModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC"
}

/** Record of type Resource Content Type (resource_content_type) */
export type ResourceContentTypeRecord = {
  __typename?: "ResourceContentTypeRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  name?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Resource Content Type (resource_content_type) */
export type ResourceContentTypeRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type ResourceIndustryModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  name?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<ResourceIndustryModelFilter>>>
}

export enum ResourceIndustryModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC"
}

/** Record of type Resource Industry (resource_industry) */
export type ResourceIndustryRecord = {
  __typename?: "ResourceIndustryRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  name?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Resource Industry (resource_industry) */
export type ResourceIndustryRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type ResourceInfrastructureProviderModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  company?: Maybe<LinkFilter>
  name?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<ResourceInfrastructureProviderModelFilter>>>
}

export enum ResourceInfrastructureProviderModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC"
}

/** Record of type Resource Infrastructure Provider (resource_infrastructure_provider) */
export type ResourceInfrastructureProviderRecord = {
  __typename?: "ResourceInfrastructureProviderRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  company?: Maybe<CompanyRecord>
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  name?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Resource Infrastructure Provider (resource_infrastructure_provider) */
export type ResourceInfrastructureProviderRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type ResourceMediaTypeModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  icon?: Maybe<FileFilter>
  name?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<ResourceMediaTypeModelFilter>>>
}

export enum ResourceMediaTypeModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC"
}

/** Record of type Resource Media Type (resource_media_type) */
export type ResourceMediaTypeRecord = {
  __typename?: "ResourceMediaTypeRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  icon?: Maybe<FileField>
  id: Scalars["ItemId"]
  name?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Resource Media Type (resource_media_type) */
export type ResourceMediaTypeRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type ResourceModelContentField =
  | CalloutSectionRecord
  | TextImageSectionRecord
  | VideoSectionRecord
  | ImageSectionRecord
  | MajorHeadlineSectionRecord
  | EmbeddedSlidesSectionRecord
  | TextSectionRecord
  | SpeakersSectionRecord
  | EmbeddedPodcastSectionRecord
  | WistiaSectionRecord

export type ResourceModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  draft?: Maybe<BooleanFilter>
  showDemoRequest?: Maybe<BooleanFilter>
  metadata?: Maybe<SeoFilter>
  content?: Maybe<LinksFilter>
  events?: Maybe<LinksFilter>
  organizations?: Maybe<LinksFilter>
  people?: Maybe<LinksFilter>
  industry?: Maybe<LinksFilter>
  infrastructureProvider?: Maybe<LinksFilter>
  contentType?: Maybe<LinkFilter>
  image?: Maybe<FileFilter>
  date?: Maybe<DateFilter>
  slug?: Maybe<SlugFilter>
  title?: Maybe<StringFilter>
  product?: Maybe<LinksFilter>
  mediaType?: Maybe<LinkFilter>
  description?: Maybe<TextFilter>
  OR?: Maybe<Array<Maybe<ResourceModelFilter>>>
}

export enum ResourceModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  DraftAsc = "draft_ASC",
  DraftDesc = "draft_DESC",
  ShowDemoRequestAsc = "showDemoRequest_ASC",
  ShowDemoRequestDesc = "showDemoRequest_DESC",
  DateAsc = "date_ASC",
  DateDesc = "date_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC"
}

export type ResourceModelProductField =
  | OpenSourceToolRecord
  | EnterpriseProductRecord

/** Record of type Resource (resource) */
export type ResourceRecord = {
  __typename?: "ResourceRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  content: Array<ResourceModelContentField>
  contentType?: Maybe<ResourceContentTypeRecord>
  createdAt: Scalars["DateTime"]
  date?: Maybe<Scalars["Date"]>
  description?: Maybe<Scalars["String"]>
  draft?: Maybe<Scalars["BooleanType"]>
  events: Array<EventRecord>
  id: Scalars["ItemId"]
  image?: Maybe<FileField>
  industry: Array<ResourceIndustryRecord>
  infrastructureProvider: Array<ResourceInfrastructureProviderRecord>
  mediaType?: Maybe<ResourceMediaTypeRecord>
  metadata?: Maybe<SeoField>
  organizations: Array<CompanyRecord>
  people: Array<PersonRecord>
  product: Array<ResourceModelProductField>
  showDemoRequest?: Maybe<Scalars["BooleanType"]>
  slug?: Maybe<Scalars["String"]>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Resource (resource) */
export type ResourceRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Resource (resource) */
export type ResourceRecordDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Resources Page (resources_page) */
export type ResourcesPageRecord = {
  __typename?: "ResourcesPageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  description?: Maybe<Scalars["String"]>
  headline?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  metadata?: Maybe<SeoField>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Resources Page (resources_page) */
export type ResourcesPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Resources Page (resources_page) */
export type ResourcesPageRecordDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type ResponsiveImage = {
  __typename?: "ResponsiveImage"
  alt?: Maybe<Scalars["String"]>
  aspectRatio: Scalars["FloatType"]
  base64?: Maybe<Scalars["String"]>
  bgColor?: Maybe<Scalars["String"]>
  height: Scalars["IntType"]
  sizes: Scalars["String"]
  src: Scalars["String"]
  srcSet: Scalars["String"]
  title?: Maybe<Scalars["String"]>
  webpSrcSet: Scalars["String"]
  width: Scalars["IntType"]
}

/** Record of type Row (row) */
export type RowRecord = {
  __typename?: "RowRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  description?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  timeSlot?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Row (row) */
export type RowRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type SalesFormModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  position?: Maybe<PositionFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  slug?: Maybe<SlugFilter>
  headline?: Maybe<StringFilter>
  contactType?: Maybe<LinkFilter>
  product?: Maybe<LinkFilter>
  description?: Maybe<TextFilter>
  OR?: Maybe<Array<Maybe<SalesFormModelFilter>>>
}

export type SalesFormModelFormFieldsField =
  | FormTextFieldRecord
  | FormTextAreaFieldRecord
  | FormMultiSelectFieldRecord
  | FormHiddenFieldRecord
  | FormEmailFieldRecord

export enum SalesFormModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PositionAsc = "position_ASC",
  PositionDesc = "position_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  HeadlineAsc = "headline_ASC",
  HeadlineDesc = "headline_DESC"
}

export type SalesFormPageModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  thankYouPageText?: Maybe<TextFilter>
  slug?: Maybe<SlugFilter>
  headline?: Maybe<StringFilter>
  description?: Maybe<TextFilter>
  product?: Maybe<LinkFilter>
  metadata?: Maybe<SeoFilter>
  contactType?: Maybe<LinkFilter>
  OR?: Maybe<Array<Maybe<SalesFormPageModelFilter>>>
}

export type SalesFormPageModelFormFieldsField =
  | FormTextFieldRecord
  | FormTextAreaFieldRecord
  | FormMultiSelectFieldRecord
  | FormHiddenFieldRecord
  | FormEmailFieldRecord

export enum SalesFormPageModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  HeadlineAsc = "headline_ASC",
  HeadlineDesc = "headline_DESC"
}

/** Record of type Sales Form Page (sales_form_page) */
export type SalesFormPageRecord = {
  __typename?: "SalesFormPageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  contactType?: Maybe<FormContactTypeRecord>
  createdAt: Scalars["DateTime"]
  description?: Maybe<Scalars["String"]>
  formFields?: Maybe<Array<Maybe<SalesFormPageModelFormFieldsField>>>
  headline?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  metadata?: Maybe<SeoField>
  product?: Maybe<HashicorpProductRecord>
  slug?: Maybe<Scalars["String"]>
  thankYouPageText?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Sales Form Page (sales_form_page) */
export type SalesFormPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Sales Form Page (sales_form_page) */
export type SalesFormPageRecordDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Sales Form Page (sales_form_page) */
export type SalesFormPageRecordThankYouPageTextArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Sales Form (sales_form) */
export type SalesFormRecord = {
  __typename?: "SalesFormRecord"
  _allContactTypeLocales?: Maybe<
    Array<Maybe<FormContactTypeRecordMultiLocaleField>>
  >
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  contactType?: Maybe<FormContactTypeRecord>
  createdAt: Scalars["DateTime"]
  description?: Maybe<Scalars["String"]>
  formFields?: Maybe<Array<Maybe<SalesFormModelFormFieldsField>>>
  headline?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  position?: Maybe<Scalars["IntType"]>
  product?: Maybe<HashicorpProductRecord>
  slug?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Sales Form (sales_form) */
export type SalesFormRecord_AllContactTypeLocalesArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Sales Form (sales_form) */
export type SalesFormRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Sales Form (sales_form) */
export type SalesFormRecordContactTypeArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Sales Form (sales_form) */
export type SalesFormRecordDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type SbcAlertModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  textColor?: Maybe<StringFilter>
  tagColor?: Maybe<StringFilter>
  tag?: Maybe<StringFilter>
  text?: Maybe<StringFilter>
  url?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<SbcAlertModelFilter>>>
}

export enum SbcAlertModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  TextColorAsc = "textColor_ASC",
  TextColorDesc = "textColor_DESC",
  TagColorAsc = "tagColor_ASC",
  TagColorDesc = "tagColor_DESC",
  TagAsc = "tag_ASC",
  TagDesc = "tag_DESC",
  TextAsc = "text_ASC",
  TextDesc = "text_DESC",
  UrlAsc = "url_ASC",
  UrlDesc = "url_DESC"
}

/** Record of type ༶ Alert (deprecated) (sbc_alert) */
export type SbcAlertRecord = {
  __typename?: "SbcAlertRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  tag?: Maybe<Scalars["String"]>
  tagColor?: Maybe<Scalars["String"]>
  text?: Maybe<Scalars["String"]>
  textColor?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
  url?: Maybe<Scalars["String"]>
}

/** Record of type ༶ Alert (deprecated) (sbc_alert) */
export type SbcAlertRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type SbcBeforeAfterDiagramModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  afterContent?: Maybe<TextFilter>
  beforeHeadline?: Maybe<StringFilter>
  beforeImage?: Maybe<FileFilter>
  theme?: Maybe<StringFilter>
  afterHeadline?: Maybe<StringFilter>
  afterImage?: Maybe<FileFilter>
  beforeContent?: Maybe<TextFilter>
  OR?: Maybe<Array<Maybe<SbcBeforeAfterDiagramModelFilter>>>
}

export enum SbcBeforeAfterDiagramModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  BeforeHeadlineAsc = "beforeHeadline_ASC",
  BeforeHeadlineDesc = "beforeHeadline_DESC",
  ThemeAsc = "theme_ASC",
  ThemeDesc = "theme_DESC",
  AfterHeadlineAsc = "afterHeadline_ASC",
  AfterHeadlineDesc = "afterHeadline_DESC"
}

/** Record of type ༶ Before-After Diagrams (sbc_before_after_diagram) */
export type SbcBeforeAfterDiagramRecord = {
  __typename?: "SbcBeforeAfterDiagramRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  afterContent?: Maybe<Scalars["String"]>
  afterHeadline?: Maybe<Scalars["String"]>
  afterImage?: Maybe<FileField>
  beforeContent?: Maybe<Scalars["String"]>
  beforeHeadline?: Maybe<Scalars["String"]>
  beforeImage?: Maybe<FileField>
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  theme?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type ༶ Before-After Diagrams (sbc_before_after_diagram) */
export type SbcBeforeAfterDiagramRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type ༶ Before-After Diagrams (sbc_before_after_diagram) */
export type SbcBeforeAfterDiagramRecordAfterContentArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type ༶ Before-After Diagrams (sbc_before_after_diagram) */
export type SbcBeforeAfterDiagramRecordBeforeContentArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type SbcButtonModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  appearance?: Maybe<LinkFilter>
  external?: Maybe<BooleanFilter>
  text?: Maybe<StringFilter>
  url?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<SbcButtonModelFilter>>>
}

export enum SbcButtonModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  ExternalAsc = "external_ASC",
  ExternalDesc = "external_DESC",
  TextAsc = "text_ASC",
  TextDesc = "text_DESC",
  UrlAsc = "url_ASC",
  UrlDesc = "url_DESC"
}

/** Record of type · Button (deprecated) (sbc_button) */
export type SbcButtonRecord = {
  __typename?: "SbcButtonRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  appearance?: Maybe<ButtonThemeRecord>
  createdAt: Scalars["DateTime"]
  external?: Maybe<Scalars["BooleanType"]>
  id: Scalars["ItemId"]
  text?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
  url?: Maybe<Scalars["String"]>
}

/** Record of type · Button (deprecated) (sbc_button) */
export type SbcButtonRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type SbcButtonV2ModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  brand?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  url?: Maybe<StringFilter>
  external?: Maybe<BooleanFilter>
  OR?: Maybe<Array<Maybe<SbcButtonV2ModelFilter>>>
}

export enum SbcButtonV2ModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  BrandAsc = "brand_ASC",
  BrandDesc = "brand_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  UrlAsc = "url_ASC",
  UrlDesc = "url_DESC",
  ExternalAsc = "external_ASC",
  ExternalDesc = "external_DESC"
}

/** Record of type · Button v2 (sbc_button_v2) */
export type SbcButtonV2Record = {
  __typename?: "SbcButtonV2Record"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  brand?: Maybe<Scalars["String"]>
  createdAt: Scalars["DateTime"]
  external?: Maybe<Scalars["BooleanType"]>
  id: Scalars["ItemId"]
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
  url?: Maybe<Scalars["String"]>
}

/** Record of type · Button v2 (sbc_button_v2) */
export type SbcButtonV2Record_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type SbcCalloutModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  link?: Maybe<LinkFilter>
  description?: Maybe<TextFilter>
  title?: Maybe<StringFilter>
  image?: Maybe<FileFilter>
  OR?: Maybe<Array<Maybe<SbcCalloutModelFilter>>>
}

export enum SbcCalloutModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC"
}

/** Record of type · Callout (sbc_callout) */
export type SbcCalloutRecord = {
  __typename?: "SbcCalloutRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  description?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  image?: Maybe<FileField>
  link?: Maybe<LinkRecord>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type · Callout (sbc_callout) */
export type SbcCalloutRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type · Callout (sbc_callout) */
export type SbcCalloutRecordDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type SbcCalloutSectionModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  items?: Maybe<LinksFilter>
  theme?: Maybe<StringFilter>
  columnCount?: Maybe<IntegerFilter>
  OR?: Maybe<Array<Maybe<SbcCalloutSectionModelFilter>>>
}

export enum SbcCalloutSectionModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  ThemeAsc = "theme_ASC",
  ThemeDesc = "theme_DESC",
  ColumnCountAsc = "columnCount_ASC",
  ColumnCountDesc = "columnCount_DESC"
}

/** Record of type ༶ Callouts (sbc_callout_section) */
export type SbcCalloutSectionRecord = {
  __typename?: "SbcCalloutSectionRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  columnCount?: Maybe<Scalars["IntType"]>
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  items: Array<SbcCalloutRecord>
  theme?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type ༶ Callouts (sbc_callout_section) */
export type SbcCalloutSectionRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type SbcCaseStudyModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  caseStudyLink?: Maybe<StringFilter>
  caseStudyResource?: Maybe<LinkFilter>
  description?: Maybe<TextFilter>
  headline?: Maybe<StringFilter>
  company?: Maybe<LinkFilter>
  caseStudyImage?: Maybe<FileFilter>
  buttonLabel?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<SbcCaseStudyModelFilter>>>
}

export enum SbcCaseStudyModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  CaseStudyLinkAsc = "caseStudyLink_ASC",
  CaseStudyLinkDesc = "caseStudyLink_DESC",
  HeadlineAsc = "headline_ASC",
  HeadlineDesc = "headline_DESC",
  ButtonLabelAsc = "buttonLabel_ASC",
  ButtonLabelDesc = "buttonLabel_DESC"
}

/** Record of type · Case Study (sbc_case_study) */
export type SbcCaseStudyRecord = {
  __typename?: "SbcCaseStudyRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  buttonLabel?: Maybe<Scalars["String"]>
  caseStudyImage?: Maybe<FileField>
  caseStudyLink?: Maybe<Scalars["String"]>
  caseStudyResource?: Maybe<ResourceRecord>
  company?: Maybe<CompanyRecord>
  createdAt: Scalars["DateTime"]
  description?: Maybe<Scalars["String"]>
  headline?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  updatedAt: Scalars["DateTime"]
}

/** Record of type · Case Study (sbc_case_study) */
export type SbcCaseStudyRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type · Case Study (sbc_case_study) */
export type SbcCaseStudyRecordDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type SbcCaseStudySliderModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  caseStudies?: Maybe<LinksFilter>
  OR?: Maybe<Array<Maybe<SbcCaseStudySliderModelFilter>>>
}

export enum SbcCaseStudySliderModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC"
}

/** Record of type ༶ Case Study Slider (sbc_case_study_slider) */
export type SbcCaseStudySliderRecord = {
  __typename?: "SbcCaseStudySliderRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  caseStudies: Array<SbcCaseStudyRecord>
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  updatedAt: Scalars["DateTime"]
}

/** Record of type ༶ Case Study Slider (sbc_case_study_slider) */
export type SbcCaseStudySliderRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type SbcCodeBlockModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  code?: Maybe<TextFilter>
  language?: Maybe<LinkFilter>
  chrome?: Maybe<BooleanFilter>
  OR?: Maybe<Array<Maybe<SbcCodeBlockModelFilter>>>
}

export enum SbcCodeBlockModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  ChromeAsc = "chrome_ASC",
  ChromeDesc = "chrome_DESC"
}

/** Record of type · Code Block (sbc_code_block) */
export type SbcCodeBlockRecord = {
  __typename?: "SbcCodeBlockRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  chrome?: Maybe<Scalars["BooleanType"]>
  code?: Maybe<Scalars["String"]>
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  language?: Maybe<CodeblockLanguageRecord>
  updatedAt: Scalars["DateTime"]
}

/** Record of type · Code Block (sbc_code_block) */
export type SbcCodeBlockRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type · Code Block (sbc_code_block) */
export type SbcCodeBlockRecordCodeArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type SbcImageModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  mobile?: Maybe<FileFilter>
  image?: Maybe<FileFilter>
  OR?: Maybe<Array<Maybe<SbcImageModelFilter>>>
}

export enum SbcImageModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC"
}

/** Record of type ༶ Image (sbc_image) */
export type SbcImageRecord = {
  __typename?: "SbcImageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  image?: Maybe<FileField>
  mobile?: Maybe<FileField>
  updatedAt: Scalars["DateTime"]
}

/** Record of type ༶ Image (sbc_image) */
export type SbcImageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type SbcLinkedTextSummaryListModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  internalName?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<SbcLinkedTextSummaryListModelFilter>>>
}

export enum SbcLinkedTextSummaryListModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  InternalNameAsc = "internalName_ASC",
  InternalNameDesc = "internalName_DESC"
}

/** Record of type ༶ Linked Text Summary List (sbc_linked_text_summary_list) */
export type SbcLinkedTextSummaryListRecord = {
  __typename?: "SbcLinkedTextSummaryListRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  internalName?: Maybe<Scalars["String"]>
  items?: Maybe<Array<Maybe<ItemRecord>>>
  updatedAt: Scalars["DateTime"]
}

/** Record of type ༶ Linked Text Summary List (sbc_linked_text_summary_list) */
export type SbcLinkedTextSummaryListRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type SbcLogoGridModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  removeBorders?: Maybe<BooleanFilter>
  size?: Maybe<StringFilter>
  companies?: Maybe<LinksFilter>
  OR?: Maybe<Array<Maybe<SbcLogoGridModelFilter>>>
}

export enum SbcLogoGridModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  RemoveBordersAsc = "removeBorders_ASC",
  RemoveBordersDesc = "removeBorders_DESC",
  SizeAsc = "size_ASC",
  SizeDesc = "size_DESC"
}

/** Record of type ༶ Logo Grid (sbc_logo_grid) */
export type SbcLogoGridRecord = {
  __typename?: "SbcLogoGridRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  companies: Array<CompanyRecord>
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  removeBorders?: Maybe<Scalars["BooleanType"]>
  size?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type ༶ Logo Grid (sbc_logo_grid) */
export type SbcLogoGridRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type SbcMultiButtonModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  buttons?: Maybe<LinksFilter>
  internalName?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<SbcMultiButtonModelFilter>>>
}

export enum SbcMultiButtonModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  InternalNameAsc = "internalName_ASC",
  InternalNameDesc = "internalName_DESC"
}

/** Record of type ༶ Multi Button (sbc_multi_button) */
export type SbcMultiButtonRecord = {
  __typename?: "SbcMultiButtonRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  buttons: Array<SbcButtonRecord>
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  internalName?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type ༶ Multi Button (sbc_multi_button) */
export type SbcMultiButtonRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type SbcProductFeatureTableModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  offerings?: Maybe<LinksFilter>
  productLogo?: Maybe<FileFilter>
  productName?: Maybe<StringFilter>
  themeBackground?: Maybe<StringFilter>
  featureCategories?: Maybe<LinksFilter>
  higherTierPlansIncludeLowerTierFeatures?: Maybe<BooleanFilter>
  OR?: Maybe<Array<Maybe<SbcProductFeatureTableModelFilter>>>
}

export enum SbcProductFeatureTableModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  ProductNameAsc = "productName_ASC",
  ProductNameDesc = "productName_DESC",
  ThemeBackgroundAsc = "themeBackground_ASC",
  ThemeBackgroundDesc = "themeBackground_DESC",
  HigherTierPlansIncludeLowerTierFeaturesAsc = "higherTierPlansIncludeLowerTierFeatures_ASC",
  HigherTierPlansIncludeLowerTierFeaturesDesc = "higherTierPlansIncludeLowerTierFeatures_DESC"
}

/** Record of type ༶ Product Features Table (sbc_product_feature_table) */
export type SbcProductFeatureTableRecord = {
  __typename?: "SbcProductFeatureTableRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  featureCategories: Array<EnterpriseFeaturesCategoryRecord>
  higherTierPlansIncludeLowerTierFeatures?: Maybe<Scalars["BooleanType"]>
  id: Scalars["ItemId"]
  offerings: Array<ProductPricingPlanRecord>
  productLogo?: Maybe<FileField>
  productName?: Maybe<Scalars["String"]>
  themeBackground?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type ༶ Product Features Table (sbc_product_feature_table) */
export type SbcProductFeatureTableRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type SbcProductPricingModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  plans?: Maybe<LinksFilter>
  product?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<SbcProductPricingModelFilter>>>
}

export enum SbcProductPricingModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  ProductAsc = "product_ASC",
  ProductDesc = "product_DESC"
}

/** Record of type ༶ Product Pricing Plans (sbc_product_pricing) */
export type SbcProductPricingRecord = {
  __typename?: "SbcProductPricingRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  plans: Array<ProductPricingPlanRecord>
  product?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type ༶ Product Pricing Plans (sbc_product_pricing) */
export type SbcProductPricingRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type SbcResourcesSliderModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  filterBy?: Maybe<LinksFilter>
  OR?: Maybe<Array<Maybe<SbcResourcesSliderModelFilter>>>
}

export type SbcResourcesSliderModelFilterByField =
  | OpenSourceToolRecord
  | EnterpriseProductRecord
  | CompanyRecord
  | PersonRecord
  | EventRecord
  | ResourceContentTypeRecord
  | ResourceInfrastructureProviderRecord
  | ResourceIndustryRecord
  | ResourceMediaTypeRecord

export enum SbcResourcesSliderModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC"
}

/** Record of type ༶ Resources Slider (sbc_resources_slider) */
export type SbcResourcesSliderRecord = {
  __typename?: "SbcResourcesSliderRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  filterBy: Array<SbcResourcesSliderModelFilterByField>
  id: Scalars["ItemId"]
  updatedAt: Scalars["DateTime"]
}

/** Record of type ༶ Resources Slider (sbc_resources_slider) */
export type SbcResourcesSliderRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type SbcSectionHeaderModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  useH1?: Maybe<BooleanFilter>
  headline?: Maybe<StringFilter>
  description?: Maybe<TextFilter>
  OR?: Maybe<Array<Maybe<SbcSectionHeaderModelFilter>>>
}

export enum SbcSectionHeaderModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  UseH1Asc = "useH1_ASC",
  UseH1Desc = "useH1_DESC",
  HeadlineAsc = "headline_ASC",
  HeadlineDesc = "headline_DESC"
}

/** Record of type ༶ Section Header (sbc_section_header) */
export type SbcSectionHeaderRecord = {
  __typename?: "SbcSectionHeaderRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  description?: Maybe<Scalars["String"]>
  headline?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  updatedAt: Scalars["DateTime"]
  useH1?: Maybe<Scalars["BooleanType"]>
}

/** Record of type ༶ Section Header (sbc_section_header) */
export type SbcSectionHeaderRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type ༶ Section Header (sbc_section_header) */
export type SbcSectionHeaderRecordDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type SbcTextAndContentModelContentField =
  | SbcImageRecord
  | SbcLogoGridRecord
  | SbcCodeBlockRecord

export type SbcTextAndContentModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  hasShadow?: Maybe<BooleanFilter>
  hasBorder?: Maybe<BooleanFilter>
  reverseDirection?: Maybe<BooleanFilter>
  links?: Maybe<LinksFilter>
  content?: Maybe<LinkFilter>
  buttons?: Maybe<LinksFilter>
  text?: Maybe<TextFilter>
  OR?: Maybe<Array<Maybe<SbcTextAndContentModelFilter>>>
}

export enum SbcTextAndContentModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  HasShadowAsc = "hasShadow_ASC",
  HasShadowDesc = "hasShadow_DESC",
  HasBorderAsc = "hasBorder_ASC",
  HasBorderDesc = "hasBorder_DESC",
  ReverseDirectionAsc = "reverseDirection_ASC",
  ReverseDirectionDesc = "reverseDirection_DESC"
}

/** Record of type ༶ Text & Content (sbc_text_and_content) */
export type SbcTextAndContentRecord = {
  __typename?: "SbcTextAndContentRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  buttons: Array<SbcButtonRecord>
  content?: Maybe<SbcTextAndContentModelContentField>
  createdAt: Scalars["DateTime"]
  hasBorder?: Maybe<Scalars["BooleanType"]>
  hasShadow?: Maybe<Scalars["BooleanType"]>
  id: Scalars["ItemId"]
  links: Array<LinkRecord>
  reverseDirection?: Maybe<Scalars["BooleanType"]>
  text?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type ༶ Text & Content (sbc_text_and_content) */
export type SbcTextAndContentRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type ༶ Text & Content (sbc_text_and_content) */
export type SbcTextAndContentRecordTextArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type SbcTextModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  text?: Maybe<TextFilter>
  OR?: Maybe<Array<Maybe<SbcTextModelFilter>>>
}

export enum SbcTextModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC"
}

/** Record of type ༶ Text (sbc_text) */
export type SbcTextRecord = {
  __typename?: "SbcTextRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  text?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type ༶ Text (sbc_text) */
export type SbcTextRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type ༶ Text (sbc_text) */
export type SbcTextRecordTextArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type SbcUseCaseModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  link?: Maybe<LinkFilter>
  title?: Maybe<StringFilter>
  image?: Maybe<FileFilter>
  description?: Maybe<TextFilter>
  OR?: Maybe<Array<Maybe<SbcUseCaseModelFilter>>>
}

export enum SbcUseCaseModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC"
}

/** Record of type · Use Case (sbc_use_case) */
export type SbcUseCaseRecord = {
  __typename?: "SbcUseCaseRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  description?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  image?: Maybe<FileField>
  link?: Maybe<LinkRecord>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type · Use Case (sbc_use_case) */
export type SbcUseCaseRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type · Use Case (sbc_use_case) */
export type SbcUseCaseRecordDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type SbcUseCasesSectionModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  theme?: Maybe<StringFilter>
  items?: Maybe<LinksFilter>
  internalTitle?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<SbcUseCasesSectionModelFilter>>>
}

export enum SbcUseCasesSectionModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  ThemeAsc = "theme_ASC",
  ThemeDesc = "theme_DESC",
  InternalTitleAsc = "internalTitle_ASC",
  InternalTitleDesc = "internalTitle_DESC"
}

/** Record of type ༶ Use Cases (sbc_use_cases_section) */
export type SbcUseCasesSectionRecord = {
  __typename?: "SbcUseCasesSectionRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  internalTitle?: Maybe<Scalars["String"]>
  items: Array<SbcUseCaseRecord>
  theme?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type ༶ Use Cases (sbc_use_cases_section) */
export type SbcUseCasesSectionRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type SblHorizontalModelContentField =
  | SblVerticalRecord
  | SblHorizontalRecord
  | SbcSectionHeaderRecord
  | SbcBeforeAfterDiagramRecord
  | SbcCalloutSectionRecord
  | SbcTextRecord
  | SbcImageRecord
  | SbcCaseStudySliderRecord
  | SbcLogoGridRecord
  | SbcMultiButtonRecord
  | SbcResourcesSliderRecord
  | SbcTextAndContentRecord
  | SbcAlertRecord

export type SblHorizontalModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  content?: Maybe<LinksFilter>
  OR?: Maybe<Array<Maybe<SblHorizontalModelFilter>>>
}

export enum SblHorizontalModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC"
}

/** Record of type ྿ Horizontal (sbl_horizontal) */
export type SblHorizontalRecord = {
  __typename?: "SblHorizontalRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  content: Array<SblHorizontalModelContentField>
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  updatedAt: Scalars["DateTime"]
}

/** Record of type ྿ Horizontal (sbl_horizontal) */
export type SblHorizontalRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type SblVerticalModelContentField =
  | TerraformOfferingTableRecord
  | SbcUseCasesSectionRecord
  | FaqCategoryRecord
  | SbcProductFeatureTableRecord
  | SblVerticalRecord
  | SblHorizontalRecord
  | SbcSectionHeaderRecord
  | SbcBeforeAfterDiagramRecord
  | SbcCalloutSectionRecord
  | SbcTextRecord
  | SbcImageRecord
  | SbcCaseStudySliderRecord
  | SbcLogoGridRecord
  | SbcMultiButtonRecord
  | SbcResourcesSliderRecord
  | SbcTextAndContentRecord
  | SbcProductPricingRecord
  | SbcAlertRecord

export type SblVerticalModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  content?: Maybe<LinksFilter>
  OR?: Maybe<Array<Maybe<SblVerticalModelFilter>>>
}

export enum SblVerticalModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC"
}

/** Record of type ྿ Vertical (sbl_vertical) */
export type SblVerticalRecord = {
  __typename?: "SblVerticalRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  content: Array<SblVerticalModelContentField>
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  updatedAt: Scalars["DateTime"]
}

/** Record of type ྿ Vertical (sbl_vertical) */
export type SblVerticalRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Schedule Lite item (schedule_lite_item) */
export type ScheduleLiteItemRecord = {
  __typename?: "ScheduleLiteItemRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  scheduleItems: Array<HashiconfScheduleItemRecord>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Schedule Lite item (schedule_lite_item) */
export type ScheduleLiteItemRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type SectionBlockModelComponentsField =
  | SectionHeaderRecord
  | VideoRecord
  | TextImageRecord
  | ButtonRecord
  | ImageRecord
  | LogoGridRecord
  | TestimonialSliderRecord
  | PackageSectionRecord
  | MultiButtonRecord
  | TaggedResourceRecord
  | TwoColumnTextRecord
  | TwoColumnTextBlockRecord
  | HeroRecord
  | CalloutsSectionRecord
  | SmallTextTagRecord

export type SectionBlockModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  sid?: Maybe<StringFilter>
  divider?: Maybe<LinkFilter>
  theme?: Maybe<LinkFilter>
  name?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<SectionBlockModelFilter>>>
}

export enum SectionBlockModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  SidAsc = "sid_ASC",
  SidDesc = "sid_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC"
}

export type SectionBlockPageModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  url?: Maybe<SlugFilter>
  title?: Maybe<StringFilter>
  metatag?: Maybe<SeoFilter>
  content?: Maybe<LinksFilter>
  alertBanner?: Maybe<LinkFilter>
  OR?: Maybe<Array<Maybe<SectionBlockPageModelFilter>>>
}

export enum SectionBlockPageModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC"
}

/** Record of type Section Block Page (section_block_page) */
export type SectionBlockPageRecord = {
  __typename?: "SectionBlockPageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  alertBanner?: Maybe<AlertBannerRecord>
  content: Array<SectionBlockV2Record>
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  metatag?: Maybe<SeoField>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
  url?: Maybe<Scalars["String"]>
}

/** Record of type Section Block Page (section_block_page) */
export type SectionBlockPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Section Block (deprecated) (section_block) */
export type SectionBlockRecord = {
  __typename?: "SectionBlockRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  components?: Maybe<Array<Maybe<SectionBlockModelComponentsField>>>
  createdAt: Scalars["DateTime"]
  divider?: Maybe<SectionDividerRecord>
  id: Scalars["ItemId"]
  name?: Maybe<Scalars["String"]>
  sid?: Maybe<Scalars["String"]>
  theme?: Maybe<SectionThemeRecord>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Section Block (deprecated) (section_block) */
export type SectionBlockRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type SectionBlockV2ModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  sid?: Maybe<StringFilter>
  divider?: Maybe<LinkFilter>
  theme?: Maybe<LinkFilter>
  layout?: Maybe<LinkFilter>
  name?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<SectionBlockV2ModelFilter>>>
}

export type SectionBlockV2ModelLayoutField =
  | SblVerticalRecord
  | SblHorizontalRecord

export enum SectionBlockV2ModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  SidAsc = "sid_ASC",
  SidDesc = "sid_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC"
}

/** Record of type ࿇ Section Block (section_block_v2) */
export type SectionBlockV2Record = {
  __typename?: "SectionBlockV2Record"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  divider?: Maybe<SectionDividerRecord>
  id: Scalars["ItemId"]
  layout?: Maybe<SectionBlockV2ModelLayoutField>
  name?: Maybe<Scalars["String"]>
  sid?: Maybe<Scalars["String"]>
  theme?: Maybe<SectionThemeRecord>
  updatedAt: Scalars["DateTime"]
}

/** Record of type ࿇ Section Block (section_block_v2) */
export type SectionBlockV2Record_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type SectionDividerModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  slug?: Maybe<SlugFilter>
  name?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<SectionDividerModelFilter>>>
}

export enum SectionDividerModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC"
}

/** Record of type Section Divider (section_divider) */
export type SectionDividerRecord = {
  __typename?: "SectionDividerRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  name?: Maybe<Scalars["String"]>
  slug?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Section Divider (section_divider) */
export type SectionDividerRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Section Header (section_header) */
export type SectionHeaderRecord = {
  __typename?: "SectionHeaderRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  description?: Maybe<Scalars["String"]>
  headline?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  updatedAt: Scalars["DateTime"]
}

/** Record of type Section Header (section_header) */
export type SectionHeaderRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Section Header (section_header) */
export type SectionHeaderRecordDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type SectionThemeModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  slug?: Maybe<SlugFilter>
  name?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<SectionThemeModelFilter>>>
}

export enum SectionThemeModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC"
}

/** Record of type Section Theme (section_theme) */
export type SectionThemeRecord = {
  __typename?: "SectionThemeRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  name?: Maybe<Scalars["String"]>
  slug?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Section Theme (section_theme) */
export type SectionThemeRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type SentinelPageModelPageContentField =
  | CalloutSectionRecord
  | HeroSectionRecord

/** Record of type Sentinel Page (sentinel_page) */
export type SentinelPageRecord = {
  __typename?: "SentinelPageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  calloutsSection?: Maybe<SbcCalloutSectionRecord>
  calloutsSectionHeader?: Maybe<SbcSectionHeaderRecord>
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  metadata?: Maybe<SeoField>
  pageContent: Array<SentinelPageModelPageContentField>
  policyAsCode?: Maybe<HeroSectionRecord>
  prefooter?: Maybe<HeroSectionRecord>
  productIntegrationsHeader?: Maybe<SbcSectionHeaderRecord>
  productTabs: Array<SentinelProductTabRecord>
  salesForm?: Maybe<SalesFormRecord>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Sentinel Page (sentinel_page) */
export type SentinelPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type SentinelProductTabModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  docsLink?: Maybe<LinkFilter>
  features?: Maybe<LinksFilter>
  codeSamples?: Maybe<LinksFilter>
  colorLogo?: Maybe<FileFilter>
  enterpriseLogo?: Maybe<FileFilter>
  product?: Maybe<LinkFilter>
  OR?: Maybe<Array<Maybe<SentinelProductTabModelFilter>>>
}

export enum SentinelProductTabModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC"
}

/** Record of type Sentinel Product Tab (sentinel_product_tab) */
export type SentinelProductTabRecord = {
  __typename?: "SentinelProductTabRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  codeSamples: Array<CodeSampleRecord>
  colorLogo?: Maybe<FileField>
  createdAt: Scalars["DateTime"]
  docsLink?: Maybe<LinkRecord>
  enterpriseLogo?: Maybe<FileField>
  features: Array<ProductTabFeatureRecord>
  id: Scalars["ItemId"]
  product?: Maybe<EnterpriseProductRecord>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Sentinel Product Tab (sentinel_product_tab) */
export type SentinelProductTabRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type SeoField = {
  __typename?: "SeoField"
  description?: Maybe<Scalars["String"]>
  image?: Maybe<FileField>
  title?: Maybe<Scalars["String"]>
  twitterCard?: Maybe<Scalars["String"]>
}

/** Specifies how to filter SEO meta tags fields */
export type SeoFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars["BooleanType"]>
}

/** Record of type Shop page (shop_page) */
export type ShopPageRecord = {
  __typename?: "ShopPageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  confirmation?: Maybe<Scalars["String"]>
  createdAt: Scalars["DateTime"]
  hero?: Maybe<HeroSectionRecord>
  id: Scalars["ItemId"]
  intro?: Maybe<Scalars["String"]>
  metadata?: Maybe<SeoField>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Shop page (shop_page) */
export type ShopPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Shop page (shop_page) */
export type ShopPageRecordIntroArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type Site = {
  __typename?: "Site"
  favicon?: Maybe<FileField>
  faviconMetaTags: Array<Tag>
  globalSeo?: Maybe<GlobalSeoField>
}

export type SiteFaviconMetaTagsArgs = {
  variants?: Maybe<Array<Maybe<FaviconType>>>
}

export type SiteGlobalSeoArgs = {
  locale?: Maybe<SiteLocale>
}

export enum SiteLocale {
  En = "en",
  Ja = "ja"
}

/** Specifies how to filter Slug fields */
export type SlugFilter = {
  /** Search for records with an exact match */
  eq?: Maybe<Scalars["String"]>
  /** Exclude records with an exact match */
  neq?: Maybe<Scalars["String"]>
  /** Filter records that have one of the specified slugs */
  in?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Filter records that do have one of the specified slugs */
  notIn?: Maybe<Array<Maybe<Scalars["String"]>>>
}

/** Record of type Small Text Tag (small_text_tag) */
export type SmallTextTagRecord = {
  __typename?: "SmallTextTagRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  text?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Small Text Tag (small_text_tag) */
export type SmallTextTagRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type SocialNetworkIconModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  icon?: Maybe<FileFilter>
  name?: Maybe<StringFilter>
  iconDark?: Maybe<FileFilter>
  OR?: Maybe<Array<Maybe<SocialNetworkIconModelFilter>>>
}

export enum SocialNetworkIconModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC"
}

/** Record of type Social Network Icon (social_network_icon) */
export type SocialNetworkIconRecord = {
  __typename?: "SocialNetworkIconRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  icon?: Maybe<FileField>
  iconDark?: Maybe<FileField>
  id: Scalars["ItemId"]
  name?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Social Network Icon (social_network_icon) */
export type SocialNetworkIconRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type SocialNetworkModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  url?: Maybe<StringFilter>
  network?: Maybe<LinkFilter>
  OR?: Maybe<Array<Maybe<SocialNetworkModelFilter>>>
}

export enum SocialNetworkModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  UrlAsc = "url_ASC",
  UrlDesc = "url_DESC"
}

/** Record of type Social Network (social_network) */
export type SocialNetworkRecord = {
  __typename?: "SocialNetworkRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  network?: Maybe<SocialNetworkIconRecord>
  updatedAt: Scalars["DateTime"]
  url?: Maybe<Scalars["String"]>
}

/** Record of type Social Network (social_network) */
export type SocialNetworkRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Solutions Content Group (solutions_content_group) */
export type SolutionsContentGroupRecord = {
  __typename?: "SolutionsContentGroupRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  description?: Maybe<Scalars["String"]>
  icon?: Maybe<FileField>
  id: Scalars["ItemId"]
  linkText?: Maybe<Scalars["String"]>
  linkUrl?: Maybe<Scalars["String"]>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Solutions Content Group (solutions_content_group) */
export type SolutionsContentGroupRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Solutions Content Group (solutions_content_group) */
export type SolutionsContentGroupRecordDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Solutions Infrastructure Page (solutions_infrastructure_page) */
export type SolutionsInfrastructurePageRecord = {
  __typename?: "SolutionsInfrastructurePageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  challengesByline?: Maybe<Scalars["String"]>
  challengesContentGroups?: Maybe<Array<Maybe<SolutionsContentGroupRecord>>>
  challengesDiagram?: Maybe<FileField>
  challengesHeading?: Maybe<Scalars["String"]>
  createdAt: Scalars["DateTime"]
  customerEyebrow?: Maybe<Scalars["String"]>
  customers?: Maybe<Array<Maybe<CustomerRecord>>>
  ecosystemContent?: Maybe<Scalars["String"]>
  ecosystemDiagram?: Maybe<FileField>
  ecosystemHeading?: Maybe<Scalars["String"]>
  enablingByline?: Maybe<Scalars["String"]>
  enablingContent?: Maybe<Scalars["String"]>
  enablingHeading?: Maybe<Scalars["String"]>
  heroEyebrow?: Maybe<Scalars["String"]>
  heroHeading?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  impactByline?: Maybe<Scalars["String"]>
  impactContentGroups?: Maybe<Array<Maybe<SolutionsContentGroupRecord>>>
  impactDescription?: Maybe<Scalars["String"]>
  impactHeading?: Maybe<Scalars["String"]>
  metadata?: Maybe<SeoField>
  openingDescription?: Maybe<Scalars["String"]>
  pullQuote?: Maybe<Scalars["String"]>
  pullQuoteAttribution?: Maybe<Scalars["String"]>
  pullQuoteAttributionLink?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
  whitepaperHeading?: Maybe<Scalars["String"]>
}

/** Record of type Solutions Infrastructure Page (solutions_infrastructure_page) */
export type SolutionsInfrastructurePageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Solutions Infrastructure Page (solutions_infrastructure_page) */
export type SolutionsInfrastructurePageRecordEcosystemContentArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Solutions Infrastructure Page (solutions_infrastructure_page) */
export type SolutionsInfrastructurePageRecordEnablingContentArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Solutions Infrastructure Page (solutions_infrastructure_page) */
export type SolutionsInfrastructurePageRecordImpactDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Solutions Infrastructure Page (solutions_infrastructure_page) */
export type SolutionsInfrastructurePageRecordOpeningDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Solutions Infrastructure Page (solutions_infrastructure_page) */
export type SolutionsInfrastructurePageRecordPullQuoteArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Solutions Networking Page (solutions_networking_page) */
export type SolutionsNetworkingPageRecord = {
  __typename?: "SolutionsNetworkingPageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  automationBullets?: Maybe<Array<Maybe<AutomationBulletRecord>>>
  automationContent?: Maybe<Scalars["String"]>
  automationHeading?: Maybe<Scalars["String"]>
  automationLogos?: Maybe<Array<Maybe<AutomationLogoRecord>>>
  automationSubheading?: Maybe<Scalars["String"]>
  challengesByline?: Maybe<Scalars["String"]>
  challengesContentGroups?: Maybe<Array<Maybe<SolutionsContentGroupRecord>>>
  challengesDiagram?: Maybe<FileField>
  challengesHeading?: Maybe<Scalars["String"]>
  createdAt: Scalars["DateTime"]
  customerEyebrow?: Maybe<Scalars["String"]>
  customers?: Maybe<Array<Maybe<CustomerRecord>>>
  ecosystemContent?: Maybe<Scalars["String"]>
  ecosystemDiagram?: Maybe<FileField>
  ecosystemHeading?: Maybe<Scalars["String"]>
  enablingByline?: Maybe<Scalars["String"]>
  enablingContent?: Maybe<Scalars["String"]>
  enablingHeading?: Maybe<Scalars["String"]>
  heroEyebrow?: Maybe<Scalars["String"]>
  heroHeading?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  impactByline?: Maybe<Scalars["String"]>
  impactContentGroups?: Maybe<Array<Maybe<SolutionsContentGroupRecord>>>
  impactDescription?: Maybe<Scalars["String"]>
  impactHeading?: Maybe<Scalars["String"]>
  metadata?: Maybe<SeoField>
  openingDescription?: Maybe<Scalars["String"]>
  pullQuote?: Maybe<Scalars["String"]>
  pullQuoteAttribution?: Maybe<Scalars["String"]>
  pullQuoteAttributionLink?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
  whitepaperHeading?: Maybe<Scalars["String"]>
}

/** Record of type Solutions Networking Page (solutions_networking_page) */
export type SolutionsNetworkingPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Solutions Networking Page (solutions_networking_page) */
export type SolutionsNetworkingPageRecordAutomationContentArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Solutions Networking Page (solutions_networking_page) */
export type SolutionsNetworkingPageRecordEcosystemContentArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Solutions Networking Page (solutions_networking_page) */
export type SolutionsNetworkingPageRecordEnablingContentArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Solutions Networking Page (solutions_networking_page) */
export type SolutionsNetworkingPageRecordImpactDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Solutions Networking Page (solutions_networking_page) */
export type SolutionsNetworkingPageRecordOpeningDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Solutions Networking Page (solutions_networking_page) */
export type SolutionsNetworkingPageRecordPullQuoteArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Solutions Security Page (solutions_security_page) */
export type SolutionsSecurityPageRecord = {
  __typename?: "SolutionsSecurityPageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  challengesByline?: Maybe<Scalars["String"]>
  challengesContentGroups?: Maybe<Array<Maybe<SolutionsContentGroupRecord>>>
  challengesDiagram?: Maybe<FileField>
  challengesHeading?: Maybe<Scalars["String"]>
  createdAt: Scalars["DateTime"]
  customerEyebrow?: Maybe<Scalars["String"]>
  customers?: Maybe<Array<Maybe<CustomerRecord>>>
  ecosystemContent?: Maybe<Scalars["String"]>
  ecosystemDiagram?: Maybe<FileField>
  ecosystemHeading?: Maybe<Scalars["String"]>
  enablingByline?: Maybe<Scalars["String"]>
  enablingContent?: Maybe<Scalars["String"]>
  enablingHeading?: Maybe<Scalars["String"]>
  heroEyebrow?: Maybe<Scalars["String"]>
  heroHeading?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  impactByline?: Maybe<Scalars["String"]>
  impactContentGroups?: Maybe<Array<Maybe<SolutionsContentGroupRecord>>>
  impactDescription?: Maybe<Scalars["String"]>
  impactHeading?: Maybe<Scalars["String"]>
  metadata?: Maybe<SeoField>
  openingDescription?: Maybe<Scalars["String"]>
  pullQuote?: Maybe<Scalars["String"]>
  pullQuoteAttribution?: Maybe<Scalars["String"]>
  pullQuoteAttributionLink?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
  whitepaperHeading?: Maybe<Scalars["String"]>
}

/** Record of type Solutions Security Page (solutions_security_page) */
export type SolutionsSecurityPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Solutions Security Page (solutions_security_page) */
export type SolutionsSecurityPageRecordEcosystemContentArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Solutions Security Page (solutions_security_page) */
export type SolutionsSecurityPageRecordEnablingContentArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Solutions Security Page (solutions_security_page) */
export type SolutionsSecurityPageRecordImpactDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Solutions Security Page (solutions_security_page) */
export type SolutionsSecurityPageRecordOpeningDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Solutions Security Page (solutions_security_page) */
export type SolutionsSecurityPageRecordPullQuoteArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type SpeakersSectionModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  speakers?: Maybe<LinksFilter>
  title?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<SpeakersSectionModelFilter>>>
}

export enum SpeakersSectionModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC"
}

/** Record of type Speakers Section (speakers_section) */
export type SpeakersSectionRecord = {
  __typename?: "SpeakersSectionRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  speakers: Array<PersonRecord>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Speakers Section (speakers_section) */
export type SpeakersSectionRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type SplitCtaItemModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  backgroundColor?: Maybe<ColorFilter>
  backgroundImage?: Maybe<FileFilter>
  description?: Maybe<TextFilter>
  title?: Maybe<StringFilter>
  titleLogo?: Maybe<FileFilter>
  OR?: Maybe<Array<Maybe<SplitCtaItemModelFilter>>>
}

export enum SplitCtaItemModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC"
}

/** Record of type Split CTA Item (split_cta_item) */
export type SplitCtaItemRecord = {
  __typename?: "SplitCtaItemRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  backgroundColor?: Maybe<ColorField>
  backgroundImage?: Maybe<FileField>
  buttons?: Maybe<Array<Maybe<ButtonRecord>>>
  createdAt: Scalars["DateTime"]
  description?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  title?: Maybe<Scalars["String"]>
  titleLogo?: Maybe<FileField>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Split CTA Item (split_cta_item) */
export type SplitCtaItemRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Split CTA Item (split_cta_item) */
export type SplitCtaItemRecordDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type SplitCtaSectionModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  items?: Maybe<LinksFilter>
  OR?: Maybe<Array<Maybe<SplitCtaSectionModelFilter>>>
}

export enum SplitCtaSectionModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC"
}

/** Record of type Split CTA Section (split_cta_section) */
export type SplitCtaSectionRecord = {
  __typename?: "SplitCtaSectionRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  items: Array<SplitCtaItemRecord>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Split CTA Section (split_cta_section) */
export type SplitCtaSectionRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type StaticDynamicSectionModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  dynamicDescription?: Maybe<TextFilter>
  dynamicImage?: Maybe<FileFilter>
  staticDescription?: Maybe<TextFilter>
  staticImage?: Maybe<FileFilter>
  OR?: Maybe<Array<Maybe<StaticDynamicSectionModelFilter>>>
}

export enum StaticDynamicSectionModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC"
}

/** Record of type Static-Dynamic Section (static_dynamic_section) */
export type StaticDynamicSectionRecord = {
  __typename?: "StaticDynamicSectionRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  dynamicDescription?: Maybe<Scalars["String"]>
  dynamicImage?: Maybe<FileField>
  id: Scalars["ItemId"]
  staticDescription?: Maybe<Scalars["String"]>
  staticImage?: Maybe<FileField>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Static-Dynamic Section (static_dynamic_section) */
export type StaticDynamicSectionRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Static-Dynamic Section (static_dynamic_section) */
export type StaticDynamicSectionRecordDynamicDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Static-Dynamic Section (static_dynamic_section) */
export type StaticDynamicSectionRecordStaticDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Specifies how to filter by status */
export type StatusFilter = {
  /** Search the record with the specified status */
  eq?: Maybe<ItemStatus>
  /** Exclude the record with the specified status */
  neq?: Maybe<ItemStatus>
  /** Search records with the specified statuses */
  in?: Maybe<Array<Maybe<ItemStatus>>>
  /** Search records without the specified statuses */
  notIn?: Maybe<Array<Maybe<ItemStatus>>>
}

/** Specifies how to filter Single-line string fields */
export type StringFilter = {
  /** Filter records based on a regular expression */
  matches?: Maybe<StringMatchesFilter>
  /** Exclude records based on a regular expression */
  notMatches?: Maybe<StringMatchesFilter>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars["BooleanType"]>
  /** Search for records with an exact match */
  eq?: Maybe<Scalars["String"]>
  /** Exclude records with an exact match */
  neq?: Maybe<Scalars["String"]>
  /** Filter records that equal one of the specified values */
  in?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Filter records that do not equal one of the specified values */
  notIn?: Maybe<Array<Maybe<Scalars["String"]>>>
}

export type StringMatchesFilter = {
  pattern: Scalars["String"]
  caseSensitive?: Maybe<Scalars["BooleanType"]>
  regexp?: Maybe<Scalars["BooleanType"]>
}

export type StringMultiLocaleField = {
  __typename?: "StringMultiLocaleField"
  locale?: Maybe<SiteLocale>
  value?: Maybe<Scalars["String"]>
}

/** Record of type Subscription Confirmation Page (subscription_confirmation_page) */
export type SubscriptionConfirmationPageRecord = {
  __typename?: "SubscriptionConfirmationPageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  description?: Maybe<Scalars["String"]>
  headline?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  metadata?: Maybe<SeoField>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Subscription Confirmation Page (subscription_confirmation_page) */
export type SubscriptionConfirmationPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Subscription Confirmation Page (subscription_confirmation_page) */
export type SubscriptionConfirmationPageRecordDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Subscription Opt-out Success Page (subscription_opt_out_success_page) */
export type SubscriptionOptOutSuccessPageRecord = {
  __typename?: "SubscriptionOptOutSuccessPageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  message?: Maybe<Scalars["String"]>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Subscription Opt-out Success Page (subscription_opt_out_success_page) */
export type SubscriptionOptOutSuccessPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Subscription Opt-out Success Page (subscription_opt_out_success_page) */
export type SubscriptionOptOutSuccessPageRecordMessageArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type Tag = {
  __typename?: "Tag"
  attributes?: Maybe<Scalars["MetaTagAttributes"]>
  content?: Maybe<Scalars["String"]>
  tag: Scalars["String"]
}

export type TaggedResourceModelResourceFiltersField =
  | OpenSourceToolRecord
  | EnterpriseProductRecord
  | ResourceContentTypeRecord
  | ResourceInfrastructureProviderRecord
  | ResourceIndustryRecord
  | ResourceMediaTypeRecord

/** Record of type Tagged Resources (tagged_resource) */
export type TaggedResourceRecord = {
  __typename?: "TaggedResourceRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  resourceFilters: Array<TaggedResourceModelResourceFiltersField>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Tagged Resources (tagged_resource) */
export type TaggedResourceRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type TemplatePageModelContentField =
  | CalloutSectionRecord
  | TextImageSectionRecord
  | VideoSectionRecord
  | ImageSectionRecord
  | MajorHeadlineSectionRecord
  | TextSectionRecord
  | HeroSectionRecord
  | HtmlSectionRecord

export type TemplatePageModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  position?: Maybe<PositionFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  darkSubnav?: Maybe<BooleanFilter>
  draft?: Maybe<BooleanFilter>
  subnav?: Maybe<StringFilter>
  metadata?: Maybe<SeoFilter>
  preFooterCta?: Maybe<LinkFilter>
  content?: Maybe<LinksFilter>
  hero?: Maybe<LinkFilter>
  slug?: Maybe<SlugFilter>
  hidden?: Maybe<BooleanFilter>
  showDemoRequest?: Maybe<BooleanFilter>
  title?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<TemplatePageModelFilter>>>
}

export enum TemplatePageModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PositionAsc = "position_ASC",
  PositionDesc = "position_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  DarkSubnavAsc = "darkSubnav_ASC",
  DarkSubnavDesc = "darkSubnav_DESC",
  DraftAsc = "draft_ASC",
  DraftDesc = "draft_DESC",
  SubnavAsc = "subnav_ASC",
  SubnavDesc = "subnav_DESC",
  HiddenAsc = "hidden_ASC",
  HiddenDesc = "hidden_DESC",
  ShowDemoRequestAsc = "showDemoRequest_ASC",
  ShowDemoRequestDesc = "showDemoRequest_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC"
}

/** Record of type Template Page (template_page) */
export type TemplatePageRecord = {
  __typename?: "TemplatePageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  content: Array<TemplatePageModelContentField>
  createdAt: Scalars["DateTime"]
  darkSubnav?: Maybe<Scalars["BooleanType"]>
  draft?: Maybe<Scalars["BooleanType"]>
  hero?: Maybe<HeroSectionRecord>
  hidden?: Maybe<Scalars["BooleanType"]>
  id: Scalars["ItemId"]
  metadata?: Maybe<SeoField>
  position?: Maybe<Scalars["IntType"]>
  preFooterCta?: Maybe<HeroSectionRecord>
  showDemoRequest?: Maybe<Scalars["BooleanType"]>
  slug?: Maybe<Scalars["String"]>
  subnav?: Maybe<Scalars["String"]>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Template Page (template_page) */
export type TemplatePageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type TerraformGraphSectionModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  serviceImages?: Maybe<GalleryFilter>
  stackImages?: Maybe<GalleryFilter>
  headline?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<TerraformGraphSectionModelFilter>>>
}

export enum TerraformGraphSectionModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  HeadlineAsc = "headline_ASC",
  HeadlineDesc = "headline_DESC"
}

/** Record of type Terraform Graph Section (terraform_graph_section) */
export type TerraformGraphSectionRecord = {
  __typename?: "TerraformGraphSectionRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  headline?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  serviceImages: Array<FileField>
  stackImages: Array<FileField>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Terraform Graph Section (terraform_graph_section) */
export type TerraformGraphSectionRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type TerraformOfferingCategoryModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  tier?: Maybe<LinksFilter>
  name?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<TerraformOfferingCategoryModelFilter>>>
}

export enum TerraformOfferingCategoryModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC"
}

/** Record of type Terraform Offering Category (terraform_offering_category) */
export type TerraformOfferingCategoryRecord = {
  __typename?: "TerraformOfferingCategoryRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  name?: Maybe<Scalars["String"]>
  tier: Array<TerraformOfferingTierRecord>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Terraform Offering Category (terraform_offering_category) */
export type TerraformOfferingCategoryRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type TerraformOfferingModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  position?: Maybe<PositionFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  description?: Maybe<StringFilter>
  link?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<TerraformOfferingModelFilter>>>
}

export enum TerraformOfferingModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PositionAsc = "position_ASC",
  PositionDesc = "position_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
  LinkAsc = "link_ASC",
  LinkDesc = "link_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC"
}

/** Record of type Terraform Offering (terraform_offering) */
export type TerraformOfferingRecord = {
  __typename?: "TerraformOfferingRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  description?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  link?: Maybe<Scalars["String"]>
  position?: Maybe<Scalars["IntType"]>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Terraform Offering (terraform_offering) */
export type TerraformOfferingRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type TerraformOfferingTableModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  categories?: Maybe<LinksFilter>
  OR?: Maybe<Array<Maybe<TerraformOfferingTableModelFilter>>>
}

export enum TerraformOfferingTableModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC"
}

/** Record of type Terraform Offering Table (terraform_offering_table) */
export type TerraformOfferingTableRecord = {
  __typename?: "TerraformOfferingTableRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  categories: Array<TerraformOfferingCategoryRecord>
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  updatedAt: Scalars["DateTime"]
}

/** Record of type Terraform Offering Table (terraform_offering_table) */
export type TerraformOfferingTableRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type TerraformOfferingTierModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  callouts?: Maybe<TextFilter>
  headline?: Maybe<StringFilter>
  name?: Maybe<StringFilter>
  subheading?: Maybe<StringFilter>
  offerings?: Maybe<LinksFilter>
  ctaLink?: Maybe<LinkFilter>
  OR?: Maybe<Array<Maybe<TerraformOfferingTierModelFilter>>>
}

export enum TerraformOfferingTierModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  HeadlineAsc = "headline_ASC",
  HeadlineDesc = "headline_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  SubheadingAsc = "subheading_ASC",
  SubheadingDesc = "subheading_DESC"
}

/** Record of type Terraform Offering Tier (terraform_offering_tier) */
export type TerraformOfferingTierRecord = {
  __typename?: "TerraformOfferingTierRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  callouts?: Maybe<Scalars["String"]>
  createdAt: Scalars["DateTime"]
  ctaLink?: Maybe<LinkRecord>
  headline?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  name?: Maybe<Scalars["String"]>
  offerings: Array<TerraformOfferingRecord>
  subheading?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Terraform Offering Tier (terraform_offering_tier) */
export type TerraformOfferingTierRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Terraform Offering Tier (terraform_offering_tier) */
export type TerraformOfferingTierRecordCalloutsArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Terraform Product Page (terraform_product_page) */
export type TerraformProductPageRecord = {
  __typename?: "TerraformProductPageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  alertBanner?: Maybe<AlertBannerRecord>
  caseStudiesSection?: Maybe<SectionBlockV2Record>
  companiesSection?: Maybe<SectionBlockV2Record>
  createdAt: Scalars["DateTime"]
  enterprisePricingPage?: Maybe<SectionBlockPageRecord>
  enterpriseTrialForm?: Maybe<TrialFormPageRecord>
  featuresSection?: Maybe<SectionBlockV2Record>
  heroSection?: Maybe<HeroSectionRecord>
  howTerraformWorksSection?: Maybe<SectionBlockV2Record>
  id: Scalars["ItemId"]
  metadata?: Maybe<SeoField>
  principlesSection?: Maybe<SectionBlockV2Record>
  resourcesSection?: Maybe<SectionBlockV2Record>
  staticDynamicSection?: Maybe<SectionBlockV2Record>
  subnav?: Maybe<ProductSubnavRecord>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
  useCasePages: Array<SectionBlockPageRecord>
  useCasesSection?: Maybe<SectionBlockV2Record>
}

/** Record of type Terraform Product Page (terraform_product_page) */
export type TerraformProductPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type TestimonialModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  authorTitle?: Maybe<StringFilter>
  author?: Maybe<StringFilter>
  company?: Maybe<LinkFilter>
  text?: Maybe<TextFilter>
  OR?: Maybe<Array<Maybe<TestimonialModelFilter>>>
}

export enum TestimonialModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  AuthorTitleAsc = "authorTitle_ASC",
  AuthorTitleDesc = "authorTitle_DESC",
  AuthorAsc = "author_ASC",
  AuthorDesc = "author_DESC"
}

/** Record of type Testimonial (testimonial) */
export type TestimonialRecord = {
  __typename?: "TestimonialRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  author?: Maybe<Scalars["String"]>
  authorTitle?: Maybe<Scalars["String"]>
  company?: Maybe<CompanyRecord>
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  text?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Testimonial (testimonial) */
export type TestimonialRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Testimonial (testimonial) */
export type TestimonialRecordTextArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Testimonial Slider (testimonial_slider) */
export type TestimonialSliderRecord = {
  __typename?: "TestimonialSliderRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  testimonials: Array<TestimonialRecord>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Testimonial Slider (testimonial_slider) */
export type TestimonialSliderRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Specifies how to filter text fields */
export type TextFilter = {
  /** Filter records based on a regular expression */
  matches?: Maybe<StringMatchesFilter>
  /** Exclude records based on a regular expression */
  notMatches?: Maybe<StringMatchesFilter>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars["BooleanType"]>
}

export type TextHeadlineAndGridSectionModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  includeCompanyPopups?: Maybe<BooleanFilter>
  companies?: Maybe<LinksFilter>
  headline?: Maybe<StringFilter>
  description?: Maybe<TextFilter>
  OR?: Maybe<Array<Maybe<TextHeadlineAndGridSectionModelFilter>>>
}

export enum TextHeadlineAndGridSectionModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  IncludeCompanyPopupsAsc = "includeCompanyPopups_ASC",
  IncludeCompanyPopupsDesc = "includeCompanyPopups_DESC",
  HeadlineAsc = "headline_ASC",
  HeadlineDesc = "headline_DESC"
}

/** Record of type Text, Headline and Grid Section (text_headline_and_grid_section) */
export type TextHeadlineAndGridSectionRecord = {
  __typename?: "TextHeadlineAndGridSectionRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  companies: Array<CompanyRecord>
  createdAt: Scalars["DateTime"]
  description?: Maybe<Scalars["String"]>
  headline?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  includeCompanyPopups?: Maybe<Scalars["BooleanType"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Text, Headline and Grid Section (text_headline_and_grid_section) */
export type TextHeadlineAndGridSectionRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Text, Headline and Grid Section (text_headline_and_grid_section) */
export type TextHeadlineAndGridSectionRecordDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type TextHeadlineSectionModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  headline?: Maybe<StringFilter>
  text?: Maybe<TextFilter>
  OR?: Maybe<Array<Maybe<TextHeadlineSectionModelFilter>>>
}

export enum TextHeadlineSectionModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  HeadlineAsc = "headline_ASC",
  HeadlineDesc = "headline_DESC"
}

/** Record of type Text with Headline Section (text_headline_section) */
export type TextHeadlineSectionRecord = {
  __typename?: "TextHeadlineSectionRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  headline?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  text?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Text with Headline Section (text_headline_section) */
export type TextHeadlineSectionRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Text with Headline Section (text_headline_section) */
export type TextHeadlineSectionRecordTextArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Text and Image (text_image) */
export type TextImageRecord = {
  __typename?: "TextImageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  headline?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  image?: Maybe<FileField>
  reverseDirection?: Maybe<Scalars["BooleanType"]>
  text?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Text and Image (text_image) */
export type TextImageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Text and Image (text_image) */
export type TextImageRecordTextArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type TextImageSectionModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  reverseDirection?: Maybe<BooleanFilter>
  image?: Maybe<FileFilter>
  headline?: Maybe<StringFilter>
  text?: Maybe<TextFilter>
  anchorLink?: Maybe<BooleanFilter>
  OR?: Maybe<Array<Maybe<TextImageSectionModelFilter>>>
}

export enum TextImageSectionModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  ReverseDirectionAsc = "reverseDirection_ASC",
  ReverseDirectionDesc = "reverseDirection_DESC",
  HeadlineAsc = "headline_ASC",
  HeadlineDesc = "headline_DESC",
  AnchorLinkAsc = "anchorLink_ASC",
  AnchorLinkDesc = "anchorLink_DESC"
}

/** Record of type Text & Image Section (text_image_section) */
export type TextImageSectionRecord = {
  __typename?: "TextImageSectionRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  anchorLink?: Maybe<Scalars["BooleanType"]>
  createdAt: Scalars["DateTime"]
  headline?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  image?: Maybe<FileField>
  reverseDirection?: Maybe<Scalars["BooleanType"]>
  text?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Text & Image Section (text_image_section) */
export type TextImageSectionRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Text & Image Section (text_image_section) */
export type TextImageSectionRecordTextArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Text (text) */
export type TextRecord = {
  __typename?: "TextRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  text?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Text (text) */
export type TextRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Text (text) */
export type TextRecordTextArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type TextSectionModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  content?: Maybe<TextFilter>
  OR?: Maybe<Array<Maybe<TextSectionModelFilter>>>
}

export enum TextSectionModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC"
}

/** Record of type Text Section (text_section) */
export type TextSectionRecord = {
  __typename?: "TextSectionRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  content?: Maybe<Scalars["String"]>
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  updatedAt: Scalars["DateTime"]
}

/** Record of type Text Section (text_section) */
export type TextSectionRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Text Section (text_section) */
export type TextSectionRecordContentArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Thank You Page (thank_you_page) */
export type ThankYouPageRecord = {
  __typename?: "ThankYouPageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  description?: Maybe<Scalars["String"]>
  headline?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  metadata?: Maybe<SeoField>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Thank You Page (thank_you_page) */
export type ThankYouPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Thank You Page (thank_you_page) */
export type ThankYouPageRecordDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type TMP: Consol Home (tmp_consol_home) */
export type TmpConsolHomeRecord = {
  __typename?: "TmpConsolHomeRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  seo?: Maybe<SeoField>
  updatedAt: Scalars["DateTime"]
}

/** Record of type TMP: Consol Home (tmp_consol_home) */
export type TmpConsolHomeRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type TMP: Homepage (tmp_homepage) */
export type TmpHomepageRecord = {
  __typename?: "TmpHomepageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  tmpHeadline?: Maybe<Scalars["String"]>
  tmpHomepageNews: Array<NewsItemRecord>
  tmpSeo?: Maybe<SeoField>
  updatedAt: Scalars["DateTime"]
}

/** Record of type TMP: Homepage (tmp_homepage) */
export type TmpHomepageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type TMP: About Page (tmpmodel_about_page) */
export type TmpmodelAboutPageRecord = {
  __typename?: "TmpmodelAboutPageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  heroSectionHeader?: Maybe<SbcSectionHeaderRecord>
  id: Scalars["ItemId"]
  metadata?: Maybe<SeoField>
  people: Array<PersonRecord>
  peopleSectionHeader?: Maybe<SbcSectionHeaderRecord>
  preFooterButton?: Maybe<SbcButtonV2Record>
  preFooterSectionHeader?: Maybe<SbcSectionHeaderRecord>
  previewUrl?: Maybe<Scalars["String"]>
  taoCtaButton?: Maybe<SbcButtonV2Record>
  taoSectionHeader?: Maybe<SbcSectionHeaderRecord>
  updatedAt: Scalars["DateTime"]
  whoWeAreDescription?: Maybe<Scalars["String"]>
  whoWeAreSectionHeader?: Maybe<SbcSectionHeaderRecord>
}

/** Record of type TMP: About Page (tmpmodel_about_page) */
export type TmpmodelAboutPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type TMP: About Page (tmpmodel_about_page) */
export type TmpmodelAboutPageRecordWhoWeAreDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type TmpmodelButtonModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  url?: Maybe<StringFilter>
  external?: Maybe<BooleanFilter>
  buttonText?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<TmpmodelButtonModelFilter>>>
}

export enum TmpmodelButtonModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  UrlAsc = "url_ASC",
  UrlDesc = "url_DESC",
  ExternalAsc = "external_ASC",
  ExternalDesc = "external_DESC",
  ButtonTextAsc = "buttonText_ASC",
  ButtonTextDesc = "buttonText_DESC"
}

/** Record of type TMP: Button (tmpmodel_button) */
export type TmpmodelButtonRecord = {
  __typename?: "TmpmodelButtonRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  buttonText?: Maybe<Scalars["String"]>
  createdAt: Scalars["DateTime"]
  external?: Maybe<Scalars["BooleanType"]>
  id: Scalars["ItemId"]
  updatedAt: Scalars["DateTime"]
  url?: Maybe<Scalars["String"]>
}

/** Record of type TMP: Button (tmpmodel_button) */
export type TmpmodelButtonRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type TMP: Consul Enterprise Page (tmpmodel_consul_enterprise_page) */
export type TmpmodelConsulEnterprisePageRecord = {
  __typename?: "TmpmodelConsulEnterprisePageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  alertBanner?: Maybe<AlertBannerRecord>
  createdAt: Scalars["DateTime"]
  enterpriseFeaturesSection?: Maybe<SbcProductFeatureTableRecord>
  enterpriseFeaturesSectionHeader?: Maybe<SbcSectionHeaderRecord>
  enterprisePackagesSection?: Maybe<SbcProductPricingRecord>
  enterprisePackagesSectionHeader?: Maybe<SbcSectionHeaderRecord>
  id: Scalars["ItemId"]
  metadata?: Maybe<SeoField>
  openSourceVsEnterpriseSection?: Maybe<SbcTextAndContentRecord>
  openSourceVsEnterpriseSectionHeader?: Maybe<SbcSectionHeaderRecord>
  subnav?: Maybe<ProductSubnavRecord>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type TMP: Consul Enterprise Page (tmpmodel_consul_enterprise_page) */
export type TmpmodelConsulEnterprisePageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type TmpmodelConsulOverviewPageModelUseCasesSectionField =
  | CalloutSectionRecord
  | SbcUseCasesSectionRecord
  | SbcCalloutSectionRecord

/** Record of type TMP: Consul Overview (tmpmodel_consul_overview_page) */
export type TmpmodelConsulOverviewPageRecord = {
  __typename?: "TmpmodelConsulOverviewPageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  alertBanner?: Maybe<AlertBannerRecord>
  caseStudiesSection: Array<SbcCaseStudyRecord>
  caseStudiesSectionHeader?: Maybe<SbcSectionHeaderRecord>
  companiesSection?: Maybe<SbcLogoGridRecord>
  createdAt: Scalars["DateTime"]
  featuresSectionButtons: Array<TmpmodelButtonRecord>
  featuresSectionHeader?: Maybe<SbcSectionHeaderRecord>
  heroSection?: Maybe<HeroSectionRecord>
  howConsulWorksSection?: Maybe<SbcTextAndContentRecord>
  howConsulWorksSectionHeader?: Maybe<SbcSectionHeaderRecord>
  id: Scalars["ItemId"]
  infrastructureSection?: Maybe<SbcBeforeAfterDiagramRecord>
  metadata?: Maybe<SeoField>
  principlesSection: Array<SbcTextAndContentRecord>
  principlesSectionHeader?: Maybe<SbcSectionHeaderRecord>
  resourcesSectionHeader?: Maybe<SbcSectionHeaderRecord>
  staticDynamicSectionHeader?: Maybe<SbcSectionHeaderRecord>
  subnav?: Maybe<ProductSubnavRecord>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
  useCasesSection?: Maybe<TmpmodelConsulOverviewPageModelUseCasesSectionField>
  useCasesSectionHeader?: Maybe<SbcSectionHeaderRecord>
}

/** Record of type TMP: Consul Overview (tmpmodel_consul_overview_page) */
export type TmpmodelConsulOverviewPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type TMP: Consul Service on Azure (tmpmodel_consul_service_on_azure_page) */
export type TmpmodelConsulServiceOnAzurePageRecord = {
  __typename?: "TmpmodelConsulServiceOnAzurePageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  hero?: Maybe<HeroSectionRecord>
  id: Scalars["ItemId"]
  readMoreButton?: Maybe<SbcButtonV2Record>
  readMoreImage?: Maybe<FileField>
  seo?: Maybe<SeoField>
  updatedAt: Scalars["DateTime"]
  useCases?: Maybe<SbcUseCasesSectionRecord>
  useCasesCallouts?: Maybe<SbcCalloutSectionRecord>
}

/** Record of type TMP: Consul Service on Azure (tmpmodel_consul_service_on_azure_page) */
export type TmpmodelConsulServiceOnAzurePageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type TMP: Ecosystem - Find a Partner Page (tmpmodel_ecosystem_find_a_partner_page) */
export type TmpmodelEcosystemFindAPartnerPageRecord = {
  __typename?: "TmpmodelEcosystemFindAPartnerPageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  ctaSectionButtons: Array<TmpmodelButtonRecord>
  ctaSectionHeader?: Maybe<SbcSectionHeaderRecord>
  description?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  metadata?: Maybe<SeoField>
  resellersIntegratorsCompaniesHyperSpecialized: Array<CompanyRecord>
  resellersIntegratorsCompaniesSpecialized: Array<CompanyRecord>
  resellersIntegratorsLabel?: Maybe<Scalars["String"]>
  resellersIntegratorsTooltip?: Maybe<Scalars["String"]>
  title?: Maybe<Scalars["String"]>
  trainingPartnersCompanies: Array<CompanyRecord>
  trainingPartnersLabel?: Maybe<Scalars["String"]>
  trainingPartnersTooltip?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type TMP: Ecosystem - Find a Partner Page (tmpmodel_ecosystem_find_a_partner_page) */
export type TmpmodelEcosystemFindAPartnerPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type TMP: Ecosystem - Find a Partner Page (tmpmodel_ecosystem_find_a_partner_page) */
export type TmpmodelEcosystemFindAPartnerPageRecordDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type TMP: Ecosystem - Find a Partner Page (tmpmodel_ecosystem_find_a_partner_page) */
export type TmpmodelEcosystemFindAPartnerPageRecordResellersIntegratorsTooltipArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type TMP: Ecosystem - Find a Partner Page (tmpmodel_ecosystem_find_a_partner_page) */
export type TmpmodelEcosystemFindAPartnerPageRecordTrainingPartnersTooltipArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type TMP: Ecosystem - Landing Page (tmpmodel_ecosystem_landing_page) */
export type TmpmodelEcosystemLandingPageRecord = {
  __typename?: "TmpmodelEcosystemLandingPageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  content: Array<SbcTextAndContentRecord>
  createdAt: Scalars["DateTime"]
  ctaSectionButtons: Array<TmpmodelButtonRecord>
  ctaSectionHeader?: Maybe<SbcSectionHeaderRecord>
  hero?: Maybe<HeroSectionRecord>
  id: Scalars["ItemId"]
  metadata?: Maybe<SeoField>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type TMP: Ecosystem - Landing Page (tmpmodel_ecosystem_landing_page) */
export type TmpmodelEcosystemLandingPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type TMP: Jobs Page (tmpmodel_jobs_page) */
export type TmpmodelJobsPageRecord = {
  __typename?: "TmpmodelJobsPageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  benefitsCallouts?: Maybe<Array<Maybe<CalloutRecord>>>
  benefitsHeading?: Maybe<Scalars["String"]>
  benefitsSummary?: Maybe<Scalars["String"]>
  createdAt: Scalars["DateTime"]
  departments: Array<JobsPageDepartmentRecord>
  faqHeading?: Maybe<Scalars["String"]>
  faqItems?: Maybe<Array<Maybe<FaqRecord>>>
  id: Scalars["ItemId"]
  metadata?: Maybe<SeoField>
  updatedAt: Scalars["DateTime"]
}

/** Record of type TMP: Jobs Page (tmpmodel_jobs_page) */
export type TmpmodelJobsPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type TMP: Jobs Page (tmpmodel_jobs_page) */
export type TmpmodelJobsPageRecordBenefitsSummaryArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type TMP: Nomad Enterprise Page (tmpmodel_nomad_enterprise_page) */
export type TmpmodelNomadEnterprisePageRecord = {
  __typename?: "TmpmodelNomadEnterprisePageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  alertBanner?: Maybe<AlertBannerRecord>
  createdAt: Scalars["DateTime"]
  enterpriseFeaturesSection?: Maybe<SbcProductFeatureTableRecord>
  enterpriseFeaturesSectionHeader?: Maybe<SbcSectionHeaderRecord>
  enterprisePackagesSection?: Maybe<SbcProductPricingRecord>
  enterprisePackagesSectionHeader?: Maybe<SbcSectionHeaderRecord>
  id: Scalars["ItemId"]
  metadata?: Maybe<SeoField>
  openSourceVsEnterpriseSection?: Maybe<SbcTextAndContentRecord>
  openSourceVsEnterpriseSectionHeader?: Maybe<SbcSectionHeaderRecord>
  subnav?: Maybe<ProductSubnavRecord>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type TMP: Nomad Enterprise Page (tmpmodel_nomad_enterprise_page) */
export type TmpmodelNomadEnterprisePageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type TMP: Nomad Overview Page (tmpmodel_nomad_overview_page) */
export type TmpmodelNomadOverviewPageRecord = {
  __typename?: "TmpmodelNomadOverviewPageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  alertBanner?: Maybe<AlertBannerRecord>
  caseStudiesSection: Array<SbcCaseStudyRecord>
  caseStudiesSectionHeader?: Maybe<SbcSectionHeaderRecord>
  companiesSection?: Maybe<SbcLogoGridRecord>
  createdAt: Scalars["DateTime"]
  featuresSectionButtons: Array<TmpmodelButtonRecord>
  featuresSectionHeader?: Maybe<SbcSectionHeaderRecord>
  heroSection?: Maybe<HeroSectionRecord>
  howNomadWorksSection?: Maybe<SbcTextAndContentRecord>
  howNomadWorksSectionHeader?: Maybe<SbcSectionHeaderRecord>
  id: Scalars["ItemId"]
  infrastructureSection?: Maybe<SbcBeforeAfterDiagramRecord>
  metadata?: Maybe<SeoField>
  principlesSection: Array<SbcTextAndContentRecord>
  principlesSectionHeader?: Maybe<SbcSectionHeaderRecord>
  resourcesSectionHeader?: Maybe<SbcSectionHeaderRecord>
  staticDynamicSectionHeader?: Maybe<SbcSectionHeaderRecord>
  subnav?: Maybe<ProductSubnavRecord>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
  useCasesSection?: Maybe<SbcUseCasesSectionRecord>
  useCasesSectionHeader?: Maybe<SbcSectionHeaderRecord>
}

/** Record of type TMP: Nomad Overview Page (tmpmodel_nomad_overview_page) */
export type TmpmodelNomadOverviewPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type TmpmodelProductUseCasePageModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  architectureSection?: Maybe<LinkFilter>
  featuresSectionHeader?: Maybe<LinkFilter>
  product?: Maybe<StringFilter>
  caseStudiesSection?: Maybe<LinksFilter>
  featuresSection?: Maybe<LinksFilter>
  challengeSolutionSection?: Maybe<LinkFilter>
  challengeSolutionSectionHeader?: Maybe<LinkFilter>
  title?: Maybe<StringFilter>
  subnav?: Maybe<LinkFilter>
  alertBanner?: Maybe<LinkFilter>
  introSectionHeader?: Maybe<LinkFilter>
  metadata?: Maybe<SeoFilter>
  ctaSectionHeader?: Maybe<LinkFilter>
  OR?: Maybe<Array<Maybe<TmpmodelProductUseCasePageModelFilter>>>
}

export enum TmpmodelProductUseCasePageModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  ProductAsc = "product_ASC",
  ProductDesc = "product_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC"
}

/** Record of type TMP: Product Use Case Page (tmpmodel_product_use_case_page) */
export type TmpmodelProductUseCasePageRecord = {
  __typename?: "TmpmodelProductUseCasePageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  alertBanner?: Maybe<AlertBannerRecord>
  architectureSection?: Maybe<SbcTextAndContentRecord>
  caseStudiesSection: Array<SbcCaseStudyRecord>
  challengeSolutionSection?: Maybe<SbcBeforeAfterDiagramRecord>
  challengeSolutionSectionHeader?: Maybe<SbcSectionHeaderRecord>
  createdAt: Scalars["DateTime"]
  ctaSectionHeader?: Maybe<SbcSectionHeaderRecord>
  featuresSection: Array<SbcTextAndContentRecord>
  featuresSectionHeader?: Maybe<SbcSectionHeaderRecord>
  id: Scalars["ItemId"]
  introSectionHeader?: Maybe<SbcSectionHeaderRecord>
  metadata?: Maybe<SeoField>
  product?: Maybe<Scalars["String"]>
  subnav?: Maybe<ProductSubnavRecord>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type TMP: Product Use Case Page (tmpmodel_product_use_case_page) */
export type TmpmodelProductUseCasePageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type TMP: Terraform Overview Page (tmpmodel_terraform_overview_page) */
export type TmpmodelTerraformOverviewPageRecord = {
  __typename?: "TmpmodelTerraformOverviewPageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  alertBanner?: Maybe<AlertBannerRecord>
  caseStudiesSection: Array<SbcCaseStudyRecord>
  caseStudiesSectionHeader?: Maybe<SbcSectionHeaderRecord>
  companiesSection?: Maybe<SbcLogoGridRecord>
  createdAt: Scalars["DateTime"]
  featuresSectionButtons: Array<TmpmodelButtonRecord>
  featuresSectionHeader?: Maybe<SbcSectionHeaderRecord>
  heroSection?: Maybe<HeroSectionRecord>
  howTerraformWorksSection: Array<SbcTextAndContentRecord>
  howTerraformWorksSectionHeader?: Maybe<SbcSectionHeaderRecord>
  id: Scalars["ItemId"]
  infrastructureSection?: Maybe<SbcBeforeAfterDiagramRecord>
  metadata?: Maybe<SeoField>
  principlesSection: Array<SbcTextAndContentRecord>
  principlesSectionHeader?: Maybe<SbcSectionHeaderRecord>
  resourcesSectionHeader?: Maybe<SbcSectionHeaderRecord>
  staticDynamicSectionHeader?: Maybe<SbcSectionHeaderRecord>
  subnav?: Maybe<ProductSubnavRecord>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
  useCasesSection?: Maybe<SbcUseCasesSectionRecord>
  useCasesSectionHeader?: Maybe<SbcSectionHeaderRecord>
}

/** Record of type TMP: Terraform Overview Page (tmpmodel_terraform_overview_page) */
export type TmpmodelTerraformOverviewPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type TMP: Terraform Pricing Page (tmpmodel_terraform_pricing_page) */
export type TmpmodelTerraformPricingPageRecord = {
  __typename?: "TmpmodelTerraformPricingPageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  alertBanner?: Maybe<AlertBannerRecord>
  createdAt: Scalars["DateTime"]
  enterpriseFeaturesSection?: Maybe<TerraformOfferingTableRecord>
  enterpriseFeaturesSectionHeader?: Maybe<SbcSectionHeaderRecord>
  enterprisePackagesSection?: Maybe<SbcProductPricingRecord>
  enterprisePackagesSectionHeader?: Maybe<SbcSectionHeaderRecord>
  faqs?: Maybe<FaqCategoryRecord>
  id: Scalars["ItemId"]
  metadata?: Maybe<SeoField>
  subnav?: Maybe<ProductSubnavRecord>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type TMP: Terraform Pricing Page (tmpmodel_terraform_pricing_page) */
export type TmpmodelTerraformPricingPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type TMP: Training Page (tmpmodel_training_page) */
export type TmpmodelTrainingPageRecord = {
  __typename?: "TmpmodelTrainingPageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  heroSection?: Maybe<SbcSectionHeaderRecord>
  id: Scalars["ItemId"]
  privateTrainingSection?: Maybe<SbcSectionHeaderRecord>
  publicTrainingSection?: Maybe<SbcSectionHeaderRecord>
  trainingCourses: Array<TrainingCourseRecord>
  trainingDescription?: Maybe<Scalars["String"]>
  trainingHeadline?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
  whyHashicorpDescription?: Maybe<Scalars["String"]>
  whyHashicorpTitle?: Maybe<Scalars["String"]>
}

/** Record of type TMP: Training Page (tmpmodel_training_page) */
export type TmpmodelTrainingPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type TMP: Training Page (tmpmodel_training_page) */
export type TmpmodelTrainingPageRecordTrainingDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type TMP: Training Page (tmpmodel_training_page) */
export type TmpmodelTrainingPageRecordWhyHashicorpDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type TMP: User Research Page (tmpmodel_user_research_page) */
export type TmpmodelUserResearchPageRecord = {
  __typename?: "TmpmodelUserResearchPageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  ctaHero?: Maybe<HeroSectionRecord>
  faqs?: Maybe<Array<Maybe<FaqRecord>>>
  headlineHero?: Maybe<HeroSectionRecord>
  id: Scalars["ItemId"]
  previewUrl?: Maybe<Scalars["String"]>
  reasonsToUseUr?: Maybe<Array<Maybe<ReasonRecord>>>
  researchExamples?: Maybe<Array<Maybe<ExampleRecord>>>
  seo?: Maybe<SeoField>
  updatedAt: Scalars["DateTime"]
}

/** Record of type TMP: User Research Page (tmpmodel_user_research_page) */
export type TmpmodelUserResearchPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type TMP: Vault Advanced Data Protection Page (tmpmodel_vault_advanced_data_protection_page) */
export type TmpmodelVaultAdvancedDataProtectionPageRecord = {
  __typename?: "TmpmodelVaultAdvancedDataProtectionPageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  alertBanner?: Maybe<AlertBannerRecord>
  architectureDescription?: Maybe<SbcSectionHeaderRecord>
  createdAt: Scalars["DateTime"]
  ctaText?: Maybe<Scalars["String"]>
  diagramOneImage?: Maybe<FileField>
  diagramOneText?: Maybe<Scalars["String"]>
  diagramTwoImage?: Maybe<FileField>
  diagramTwoText?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  integrations?: Maybe<SbcTextAndContentRecord>
  introSectionHeader?: Maybe<SbcSectionHeaderRecord>
  metatag?: Maybe<SeoField>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type TMP: Vault Advanced Data Protection Page (tmpmodel_vault_advanced_data_protection_page) */
export type TmpmodelVaultAdvancedDataProtectionPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type TMP: Vault Advanced Data Protection Page (tmpmodel_vault_advanced_data_protection_page) */
export type TmpmodelVaultAdvancedDataProtectionPageRecordDiagramOneTextArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type TMP: Vault Advanced Data Protection Page (tmpmodel_vault_advanced_data_protection_page) */
export type TmpmodelVaultAdvancedDataProtectionPageRecordDiagramTwoTextArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type TMP: Vault Enterprise Page (tmpmodel_vault_enterprise_page) */
export type TmpmodelVaultEnterprisePageRecord = {
  __typename?: "TmpmodelVaultEnterprisePageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  alertBanner?: Maybe<AlertBannerRecord>
  createdAt: Scalars["DateTime"]
  enterpriseFeaturesSection?: Maybe<SbcProductFeatureTableRecord>
  enterpriseFeaturesSectionHeader?: Maybe<SbcSectionHeaderRecord>
  enterprisePackagesSection?: Maybe<SbcProductPricingRecord>
  enterprisePackagesSectionHeader?: Maybe<SbcSectionHeaderRecord>
  id: Scalars["ItemId"]
  metadata?: Maybe<SeoField>
  openSourceVsEnterpriseSection?: Maybe<SbcTextAndContentRecord>
  openSourceVsEnterpriseSectionHeader?: Maybe<SbcSectionHeaderRecord>
  subnav?: Maybe<ProductSubnavRecord>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type TMP: Vault Enterprise Page (tmpmodel_vault_enterprise_page) */
export type TmpmodelVaultEnterprisePageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type TmpmodelVaultOverviewPageModelHowVaultWorksSectionField =
  | SbcTextRecord
  | SbcImageRecord

/** Record of type TMP: Vault Overview Page (tmpmodel_vault_overview_page) */
export type TmpmodelVaultOverviewPageRecord = {
  __typename?: "TmpmodelVaultOverviewPageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  alertBanner?: Maybe<AlertBannerRecord>
  caseStudiesSection: Array<SbcCaseStudyRecord>
  caseStudiesSectionHeader?: Maybe<SbcSectionHeaderRecord>
  companiesSection?: Maybe<SbcLogoGridRecord>
  createdAt: Scalars["DateTime"]
  featuresSectionButtons: Array<TmpmodelButtonRecord>
  featuresSectionHeader?: Maybe<SbcSectionHeaderRecord>
  heroSection?: Maybe<HeroSectionRecord>
  howVaultWorksSection: Array<
    TmpmodelVaultOverviewPageModelHowVaultWorksSectionField
  >
  howVaultWorksSectionHeader?: Maybe<SbcSectionHeaderRecord>
  id: Scalars["ItemId"]
  infrastructureSection?: Maybe<SbcBeforeAfterDiagramRecord>
  metadata?: Maybe<SeoField>
  principlesSection: Array<SbcTextAndContentRecord>
  principlesSectionHeader?: Maybe<SbcSectionHeaderRecord>
  resourcesSectionHeader?: Maybe<SbcSectionHeaderRecord>
  staticDynamicSectionHeader?: Maybe<SbcSectionHeaderRecord>
  subnav?: Maybe<ProductSubnavRecord>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
  useCasesSection?: Maybe<SbcUseCasesSectionRecord>
  useCasesSectionHeader?: Maybe<SbcSectionHeaderRecord>
}

/** Record of type TMP: Vault Overview Page (tmpmodel_vault_overview_page) */
export type TmpmodelVaultOverviewPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type TrainingCourseModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  location?: Maybe<StringFilter>
  url?: Maybe<StringFilter>
  date?: Maybe<DateFilter>
  title?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<TrainingCourseModelFilter>>>
}

export enum TrainingCourseModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  LocationAsc = "location_ASC",
  LocationDesc = "location_DESC",
  UrlAsc = "url_ASC",
  UrlDesc = "url_DESC",
  DateAsc = "date_ASC",
  DateDesc = "date_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC"
}

/** Record of type Training Course (training_course) */
export type TrainingCourseRecord = {
  __typename?: "TrainingCourseRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  date?: Maybe<Scalars["Date"]>
  id: Scalars["ItemId"]
  location?: Maybe<Scalars["String"]>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
  url?: Maybe<Scalars["String"]>
}

/** Record of type Training Course (training_course) */
export type TrainingCourseRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type TrainingPageModelExtraContentField =
  | HeroSectionRecord
  | TwoColumnTextSectionRecord

/** Record of type Training Page (training_page) */
export type TrainingPageRecord = {
  __typename?: "TrainingPageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  extraContent: Array<TrainingPageModelExtraContentField>
  hero?: Maybe<HeroSectionRecord>
  id: Scalars["ItemId"]
  metadata?: Maybe<SeoField>
  showDemoRequest?: Maybe<Scalars["BooleanType"]>
  trainingCourses: Array<TrainingCourseRecord>
  trainingDescription?: Maybe<Scalars["String"]>
  trainingHeadline?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Training Page (training_page) */
export type TrainingPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Training Page (training_page) */
export type TrainingPageRecordTrainingDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type TrainingPartnerSectionModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  contactLink?: Maybe<StringFilter>
  description?: Maybe<TextFilter>
  company?: Maybe<LinkFilter>
  OR?: Maybe<Array<Maybe<TrainingPartnerSectionModelFilter>>>
}

export enum TrainingPartnerSectionModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  ContactLinkAsc = "contactLink_ASC",
  ContactLinkDesc = "contactLink_DESC"
}

/** Record of type Training Partner Section (training_partner_section) */
export type TrainingPartnerSectionRecord = {
  __typename?: "TrainingPartnerSectionRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  company?: Maybe<CompanyRecord>
  contactLink?: Maybe<Scalars["String"]>
  createdAt: Scalars["DateTime"]
  description?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  updatedAt: Scalars["DateTime"]
}

/** Record of type Training Partner Section (training_partner_section) */
export type TrainingPartnerSectionRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Training Partner Section (training_partner_section) */
export type TrainingPartnerSectionRecordDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type TrialFormPageModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  sidebarCompanyLogos?: Maybe<LinksFilter>
  sidebarText?: Maybe<TextFilter>
  sidebarLogo?: Maybe<FileFilter>
  productVersion?: Maybe<StringFilter>
  enterpriseFeaturesLink?: Maybe<StringFilter>
  nextStepLink?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  productId?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<TrialFormPageModelFilter>>>
}

export type TrialFormPageModelFormFieldsField =
  | FormTextFieldRecord
  | FormTextAreaFieldRecord
  | FormMultiSelectFieldRecord
  | FormHiddenFieldRecord
  | FormEmailFieldRecord
  | FormCheckboxFieldRecord

export enum TrialFormPageModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  ProductVersionAsc = "productVersion_ASC",
  ProductVersionDesc = "productVersion_DESC",
  EnterpriseFeaturesLinkAsc = "enterpriseFeaturesLink_ASC",
  EnterpriseFeaturesLinkDesc = "enterpriseFeaturesLink_DESC",
  NextStepLinkAsc = "nextStepLink_ASC",
  NextStepLinkDesc = "nextStepLink_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  ProductIdAsc = "productId_ASC",
  ProductIdDesc = "productId_DESC"
}

/** Record of type Trial Form Page (trial_form_page) */
export type TrialFormPageRecord = {
  __typename?: "TrialFormPageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  enterpriseFeaturesLink?: Maybe<Scalars["String"]>
  formFields?: Maybe<Array<Maybe<TrialFormPageModelFormFieldsField>>>
  id: Scalars["ItemId"]
  nextStepLink?: Maybe<Scalars["String"]>
  productId?: Maybe<Scalars["String"]>
  productVersion?: Maybe<Scalars["String"]>
  sidebarCompanyLogos: Array<CompanyRecord>
  sidebarLogo?: Maybe<FileField>
  sidebarText?: Maybe<Scalars["String"]>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Trial Form Page (trial_form_page) */
export type TrialFormPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Trial Form Page (trial_form_page) */
export type TrialFormPageRecordSidebarTextArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Two-Column Text (two_column_text_block) */
export type TwoColumnTextBlockRecord = {
  __typename?: "TwoColumnTextBlockRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  leftColumn?: Maybe<Scalars["String"]>
  rightColumn?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Two-Column Text (two_column_text_block) */
export type TwoColumnTextBlockRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Two-Column Text (two_column_text_block) */
export type TwoColumnTextBlockRecordLeftColumnArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Two-Column Text (two_column_text_block) */
export type TwoColumnTextBlockRecordRightColumnArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Two Column Text (two_column_text) */
export type TwoColumnTextRecord = {
  __typename?: "TwoColumnTextRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  leftColumn?: Maybe<Scalars["String"]>
  rightColumn?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Two Column Text (two_column_text) */
export type TwoColumnTextRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Two Column Text (two_column_text) */
export type TwoColumnTextRecordLeftColumnArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Two Column Text (two_column_text) */
export type TwoColumnTextRecordRightColumnArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type TwoColumnTextSectionModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  headline?: Maybe<StringFilter>
  content?: Maybe<TextFilter>
  OR?: Maybe<Array<Maybe<TwoColumnTextSectionModelFilter>>>
}

export enum TwoColumnTextSectionModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  HeadlineAsc = "headline_ASC",
  HeadlineDesc = "headline_DESC"
}

/** Record of type Two Column Text Section (two_column_text_section) */
export type TwoColumnTextSectionRecord = {
  __typename?: "TwoColumnTextSectionRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  content?: Maybe<Scalars["String"]>
  createdAt: Scalars["DateTime"]
  headline?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  updatedAt: Scalars["DateTime"]
}

/** Record of type Two Column Text Section (two_column_text_section) */
export type TwoColumnTextSectionRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Two Column Text Section (two_column_text_section) */
export type TwoColumnTextSectionRecordContentArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Specifies how to filter by upload type */
export type TypeFilter = {
  /** Search uploads with the specified type */
  eq?: Maybe<UploadType>
  /** Exclude uploads with the specified type */
  neq?: Maybe<UploadType>
  /** Search uploads with the specified types */
  in?: Maybe<Array<Maybe<UploadType>>>
  /** Search uploads without the specified types */
  notIn?: Maybe<Array<Maybe<UploadType>>>
}

/** Specifies how to filter by default alt */
export type UploadAltFilter = {
  /** Filter uploads based on a regular expression */
  matches?: Maybe<StringMatchesFilter>
  /** Exclude uploads based on a regular expression */
  notMatches?: Maybe<StringMatchesFilter>
  /** Search the asset with the specified alt */
  eq?: Maybe<Scalars["String"]>
  /** Exclude the asset with the specified alt */
  neq?: Maybe<Scalars["String"]>
  /** Search assets with the specified values as default alt */
  in?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Search assets that do not have the specified values as default alt */
  notIn?: Maybe<Array<Maybe<Scalars["String"]>>>
}

/** Specifies how to filter by auhtor */
export type UploadAuthorFilter = {
  /** Filter uploads based on a regular expression */
  matches?: Maybe<StringMatchesFilter>
  /** Exclude uploads based on a regular expression */
  notMatches?: Maybe<StringMatchesFilter>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars["BooleanType"]>
}

/** Specifies how to filter by basename */
export type UploadBasenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: Maybe<StringMatchesFilter>
  /** Exclude uploads based on a regular expression */
  notMatches?: Maybe<StringMatchesFilter>
}

/** Specifies how to filter by colors */
export type UploadColorsFilter = {
  /** Filter uploads that have the specified colors */
  contains?: Maybe<ColorBucketType>
  /** Filter uploads that have all of the specified colors */
  allIn?: Maybe<Array<Maybe<ColorBucketType>>>
  /** Filter uploads that have at least one of the specified colors */
  anyIn?: Maybe<Array<Maybe<ColorBucketType>>>
  /** Filter uploads that do not have any of the specified colors */
  notIn?: Maybe<Array<Maybe<ColorBucketType>>>
  /** Search for uploads with an exact match */
  eq?: Maybe<Array<Maybe<ColorBucketType>>>
}

/** Specifies how to filter by copyright */
export type UploadCopyrightFilter = {
  /** Filter uploads based on a regular expression */
  matches?: Maybe<StringMatchesFilter>
  /** Exclude uploads based on a regular expression */
  notMatches?: Maybe<StringMatchesFilter>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars["BooleanType"]>
}

/** Specifies how to filter for date of creation */
export type UploadCreatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: Maybe<Scalars["DateTime"]>
  /** Exclude uploads with an exact match */
  neq?: Maybe<Scalars["DateTime"]>
  /** Filter uploads with a value that's less than the one specified */
  lt?: Maybe<Scalars["DateTime"]>
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: Maybe<Scalars["DateTime"]>
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: Maybe<Scalars["DateTime"]>
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: Maybe<Scalars["DateTime"]>
}

/** Specifies how to filter by filename */
export type UploadFilenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: Maybe<StringMatchesFilter>
  /** Exclude uploads based on a regular expression */
  notMatches?: Maybe<StringMatchesFilter>
}

export type UploadFilter = {
  type?: Maybe<TypeFilter>
  inUse?: Maybe<InUseFilter>
  resolution?: Maybe<ResolutionFilter>
  size?: Maybe<UploadSizeFilter>
  tags?: Maybe<UploadTagsFilter>
  smartTags?: Maybe<UploadTagsFilter>
  colors?: Maybe<UploadColorsFilter>
  orientation?: Maybe<OrientationFilter>
  id?: Maybe<UploadIdFilter>
  mimeType?: Maybe<UploadMimeTypeFilter>
  format?: Maybe<UploadFormatFilter>
  height?: Maybe<UploadHeightFilter>
  width?: Maybe<UploadWidthFilter>
  alt?: Maybe<UploadAltFilter>
  title?: Maybe<UploadTitleFilter>
  notes?: Maybe<UploadNotesFilter>
  author?: Maybe<UploadAuthorFilter>
  copyright?: Maybe<UploadCopyrightFilter>
  basename?: Maybe<UploadBasenameFilter>
  filename?: Maybe<UploadFilenameFilter>
  _createdAt?: Maybe<UploadCreatedAtFilter>
  _updatedAt?: Maybe<UploadUpdatedAtFilter>
  OR?: Maybe<Array<Maybe<UploadFilter>>>
}

/** Specifies how to filter by format */
export type UploadFormatFilter = {
  /** Search the asset with the specified format */
  eq?: Maybe<Scalars["String"]>
  /** Exclude the asset with the specified format */
  neq?: Maybe<Scalars["String"]>
  /** Search assets with the specified formats */
  in?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Search assets that do not have the specified formats */
  notIn?: Maybe<Array<Maybe<Scalars["String"]>>>
}

/** Specifies how to filter by height */
export type UploadHeightFilter = {
  /** Search all assets larger than the specified height */
  gt?: Maybe<Scalars["IntType"]>
  /** Search all assets smaller than the specified height */
  lt?: Maybe<Scalars["IntType"]>
  /** Search all assets larger or equal to the specified height */
  gte?: Maybe<Array<Maybe<Scalars["IntType"]>>>
  /** Search all assets larger or equal to the specified height */
  lte?: Maybe<Array<Maybe<Scalars["IntType"]>>>
  /** Search assets with the specified height */
  eq?: Maybe<Scalars["IntType"]>
  /** Search assets that do not have the specified height */
  neq?: Maybe<Scalars["IntType"]>
}

/** Specifies how to filter by ID */
export type UploadIdFilter = {
  /** Search the asset with the specified ID */
  eq?: Maybe<Scalars["UploadId"]>
  /** Exclude the asset with the specified ID */
  neq?: Maybe<Scalars["UploadId"]>
  /** Search assets with the specified IDs */
  in?: Maybe<Array<Maybe<Scalars["UploadId"]>>>
  /** Search assets that do not have the specified IDs */
  notIn?: Maybe<Array<Maybe<Scalars["UploadId"]>>>
}

/** Specifies how to filter by mime type */
export type UploadMimeTypeFilter = {
  /** Filter uploads based on a regular expression */
  matches?: Maybe<StringMatchesFilter>
  /** Exclude uploads based on a regular expression */
  notMatches?: Maybe<StringMatchesFilter>
  /** Search the asset with the specified mime type */
  eq?: Maybe<Scalars["String"]>
  /** Exclude the asset with the specified mime type */
  neq?: Maybe<Scalars["String"]>
  /** Search assets with the specified mime types */
  in?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Search assets that do not have the specified mime types */
  notIn?: Maybe<Array<Maybe<Scalars["String"]>>>
}

/** Specifies how to filter by notes */
export type UploadNotesFilter = {
  /** Filter uploads based on a regular expression */
  matches?: Maybe<StringMatchesFilter>
  /** Exclude uploads based on a regular expression */
  notMatches?: Maybe<StringMatchesFilter>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars["BooleanType"]>
}

export enum UploadOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  SizeAsc = "size_ASC",
  SizeDesc = "size_DESC",
  ResolutionAsc = "resolution_ASC",
  ResolutionDesc = "resolution_DESC",
  FilenameAsc = "filename_ASC",
  FilenameDesc = "filename_DESC",
  BasenameAsc = "basename_ASC",
  BasenameDesc = "basename_DESC",
  MimeTypeAsc = "mimeType_ASC",
  MimeTypeDesc = "mimeType_DESC",
  FormatAsc = "format_ASC",
  FormatDesc = "format_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC"
}

export enum UploadOrientation {
  Landscape = "landscape",
  Portrait = "portrait",
  Square = "square"
}

/** Specifies how to filter by size */
export type UploadSizeFilter = {
  /** Search all assets larger than the specified size */
  gt?: Maybe<Scalars["IntType"]>
  /** Search all assets smaller than the specified size */
  lt?: Maybe<Scalars["IntType"]>
  /** Search all assets larger or equal to the specified size */
  gte?: Maybe<Array<Maybe<Scalars["IntType"]>>>
  /** Search all assets larger or equal to the specified size */
  lte?: Maybe<Array<Maybe<Scalars["IntType"]>>>
  /** Search assets with the specified size */
  eq?: Maybe<Scalars["IntType"]>
  /** Search assets that do not have the specified size */
  neq?: Maybe<Scalars["IntType"]>
}

/** Specifies how to filter by tags */
export type UploadTagsFilter = {
  /** Filter uploads linked to the specified tag */
  contains?: Maybe<Scalars["String"]>
  /** Filter uploads linked to all of the specified tags */
  allIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Filter uploads linked to at least one of the specified tags */
  anyIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Filter uploads not linked to any of the specified tags */
  notIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Search for uploads with an exact match */
  eq?: Maybe<Array<Maybe<Scalars["String"]>>>
}

/** Specifies how to filter by default title */
export type UploadTitleFilter = {
  /** Filter uploads based on a regular expression */
  matches?: Maybe<StringMatchesFilter>
  /** Exclude uploads based on a regular expression */
  notMatches?: Maybe<StringMatchesFilter>
  /** Search the asset with the specified title */
  eq?: Maybe<Scalars["String"]>
  /** Exclude the asset with the specified title */
  neq?: Maybe<Scalars["String"]>
  /** Search assets with the specified as default title */
  in?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Search assets that do not have the specified as default title */
  notIn?: Maybe<Array<Maybe<Scalars["String"]>>>
}

export enum UploadType {
  Image = "image",
  Audio = "audio",
  Video = "video",
  Richtext = "richtext",
  Presentation = "presentation",
  Spreadsheet = "spreadsheet",
  Pdfdocument = "pdfdocument",
  Archive = "archive"
}

/** Specifies how to filter for date of creation */
export type UploadUpdatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: Maybe<Scalars["DateTime"]>
  /** Exclude uploads with an exact match */
  neq?: Maybe<Scalars["DateTime"]>
  /** Filter uploads with a value that's less than the one specified */
  lt?: Maybe<Scalars["DateTime"]>
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: Maybe<Scalars["DateTime"]>
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: Maybe<Scalars["DateTime"]>
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: Maybe<Scalars["DateTime"]>
}

export type UploadVideoField = {
  __typename?: "UploadVideoField"
  duration: Scalars["Int"]
  framerate: Scalars["Int"]
  mp4Url?: Maybe<Scalars["String"]>
  muxAssetId: Scalars["String"]
  muxPlaybackId: Scalars["String"]
  streamingUrl: Scalars["String"]
  thumbnailUrl: Scalars["String"]
}

export type UploadVideoFieldMp4UrlArgs = {
  res?: Maybe<VideoMp4Res>
  exactRes?: Maybe<VideoMp4Res>
}

export type UploadVideoFieldThumbnailUrlArgs = {
  format?: Maybe<MuxThumbnailFormatType>
}

/** Specifies how to filter by width */
export type UploadWidthFilter = {
  /** Search all assets larger than the specified width */
  gt?: Maybe<Scalars["IntType"]>
  /** Search all assets smaller than the specified width */
  lt?: Maybe<Scalars["IntType"]>
  /** Search all assets larger or equal to the specified width */
  gte?: Maybe<Array<Maybe<Scalars["IntType"]>>>
  /** Search all assets larger or equal to the specified width */
  lte?: Maybe<Array<Maybe<Scalars["IntType"]>>>
  /** Search assets with the specified width */
  eq?: Maybe<Scalars["IntType"]>
  /** Search assets that do not have the specified width */
  neq?: Maybe<Scalars["IntType"]>
}

export type UseCasePageDropdownModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  title?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<UseCasePageDropdownModelFilter>>>
}

export enum UseCasePageDropdownModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC"
}

/** Record of type Use Case Page Dropdown (use_case_page_dropdown) */
export type UseCasePageDropdownRecord = {
  __typename?: "UseCasePageDropdownRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Use Case Page Dropdown (use_case_page_dropdown) */
export type UseCasePageDropdownRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Vault Advanced Data Protection Page (vault_advanced_data_protection_page) */
export type VaultAdvancedDataProtectionPageRecord = {
  __typename?: "VaultAdvancedDataProtectionPageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  alertBanner?: Maybe<AlertBannerRecord>
  architectureDescription?: Maybe<SectionBlockV2Record>
  createdAt: Scalars["DateTime"]
  ctaText?: Maybe<Scalars["String"]>
  diagramOneImage?: Maybe<FileField>
  diagramOneText?: Maybe<Scalars["String"]>
  diagramTwoImage?: Maybe<FileField>
  diagramTwoText?: Maybe<Scalars["String"]>
  headline?: Maybe<SectionBlockV2Record>
  id: Scalars["ItemId"]
  integrations?: Maybe<SectionBlockV2Record>
  metatag?: Maybe<SeoField>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Vault Advanced Data Protection Page (vault_advanced_data_protection_page) */
export type VaultAdvancedDataProtectionPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Vault Advanced Data Protection Page (vault_advanced_data_protection_page) */
export type VaultAdvancedDataProtectionPageRecordDiagramOneTextArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

/** Record of type Vault Advanced Data Protection Page (vault_advanced_data_protection_page) */
export type VaultAdvancedDataProtectionPageRecordDiagramTwoTextArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type VaultIntegrationSectionModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  authLink?: Maybe<LinkFilter>
  authBackends?: Maybe<LinkFilter>
  secretsLink?: Maybe<LinkFilter>
  secretBackends?: Maybe<LinkFilter>
  headline?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<VaultIntegrationSectionModelFilter>>>
}

export enum VaultIntegrationSectionModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  HeadlineAsc = "headline_ASC",
  HeadlineDesc = "headline_DESC"
}

/** Record of type Vault Integration Section (deprecated) (vault_integration_section) */
export type VaultIntegrationSectionRecord = {
  __typename?: "VaultIntegrationSectionRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  authBackends?: Maybe<LargeLogoGridSectionRecord>
  authLink?: Maybe<LinkRecord>
  createdAt: Scalars["DateTime"]
  headline?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  secretBackends?: Maybe<LargeLogoGridSectionRecord>
  secretsLink?: Maybe<LinkRecord>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Vault Integration Section (deprecated) (vault_integration_section) */
export type VaultIntegrationSectionRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Vault OSS Page (vault_oss_page) */
export type VaultOssPageRecord = {
  __typename?: "VaultOssPageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  hero?: Maybe<HeroSectionRecord>
  id: Scalars["ItemId"]
  infrastructureDiagram?: Maybe<SbcBeforeAfterDiagramRecord>
  infrastructureHeadline?: Maybe<SbcSectionHeaderRecord>
  metadata?: Maybe<SeoField>
  openSourceCta?: Maybe<TmpmodelButtonRecord>
  openSourceHeadline?: Maybe<SbcSectionHeaderRecord>
  principles: Array<SbcTextAndContentRecord>
  principlesHeadline?: Maybe<SbcSectionHeaderRecord>
  updatedAt: Scalars["DateTime"]
  useCases?: Maybe<SbcUseCasesSectionRecord>
}

/** Record of type Vault OSS Page (vault_oss_page) */
export type VaultOssPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Vault Product Page (vault_product_page) */
export type VaultProductPageRecord = {
  __typename?: "VaultProductPageRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  alertBanner?: Maybe<AlertBannerRecord>
  caseStudiesSection?: Maybe<SectionBlockV2Record>
  companiesSection?: Maybe<SectionBlockV2Record>
  createdAt: Scalars["DateTime"]
  enterprisePricingPage?: Maybe<SectionBlockPageRecord>
  enterpriseTrialForm?: Maybe<TrialFormPageRecord>
  featuresSection?: Maybe<SectionBlockV2Record>
  heroSection?: Maybe<HeroSectionRecord>
  howVaultWorksSection?: Maybe<SectionBlockV2Record>
  id: Scalars["ItemId"]
  metadata?: Maybe<SeoField>
  principlesSection?: Maybe<SectionBlockV2Record>
  resourcesSection?: Maybe<SectionBlockV2Record>
  staticDynamicSection?: Maybe<SectionBlockV2Record>
  subnav?: Maybe<ProductSubnavRecord>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
  useCasePages: Array<SectionBlockPageRecord>
  useCasesSection?: Maybe<SectionBlockV2Record>
}

/** Record of type Vault Product Page (vault_product_page) */
export type VaultProductPageRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type VerticalTextBlockListItemModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  body?: Maybe<TextFilter>
  header?: Maybe<StringFilter>
  logo?: Maybe<FileFilter>
  linkUrl?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<VerticalTextBlockListItemModelFilter>>>
}

export enum VerticalTextBlockListItemModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  HeaderAsc = "header_ASC",
  HeaderDesc = "header_DESC",
  LinkUrlAsc = "linkUrl_ASC",
  LinkUrlDesc = "linkUrl_DESC"
}

/** Record of type Vertical Text Block List Item (vertical_text_block_list_item) */
export type VerticalTextBlockListItemRecord = {
  __typename?: "VerticalTextBlockListItemRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  body?: Maybe<Scalars["String"]>
  createdAt: Scalars["DateTime"]
  header?: Maybe<Scalars["String"]>
  id: Scalars["ItemId"]
  linkUrl?: Maybe<Scalars["String"]>
  logo?: Maybe<FileField>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Vertical Text Block List Item (vertical_text_block_list_item) */
export type VerticalTextBlockListItemRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Vertical Text Block List Item (vertical_text_block_list_item) */
export type VerticalTextBlockListItemRecordBodyArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type VerticalTextBlockListSectionModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  items?: Maybe<LinksFilter>
  title?: Maybe<StringFilter>
  centerText?: Maybe<BooleanFilter>
  OR?: Maybe<Array<Maybe<VerticalTextBlockListSectionModelFilter>>>
}

export enum VerticalTextBlockListSectionModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  CenterTextAsc = "centerText_ASC",
  CenterTextDesc = "centerText_DESC"
}

/** Record of type Vertical Text Block List Section (vertical_text_block_list_section) */
export type VerticalTextBlockListSectionRecord = {
  __typename?: "VerticalTextBlockListSectionRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  centerText?: Maybe<Scalars["BooleanType"]>
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  items: Array<VerticalTextBlockListItemRecord>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type Vertical Text Block List Section (vertical_text_block_list_section) */
export type VerticalTextBlockListSectionRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type VideoField = {
  __typename?: "VideoField"
  height?: Maybe<Scalars["IntType"]>
  provider?: Maybe<Scalars["String"]>
  providerUid?: Maybe<Scalars["String"]>
  thumbnailUrl?: Maybe<Scalars["String"]>
  title?: Maybe<Scalars["String"]>
  url?: Maybe<Scalars["String"]>
  width?: Maybe<Scalars["IntType"]>
}

/** Specifies how to filter Video fields */
export type VideoFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: Maybe<Scalars["BooleanType"]>
}

export enum VideoMp4Res {
  Low = "low",
  Medium = "medium",
  High = "high"
}

/** Record of type Video (video) */
export type VideoRecord = {
  __typename?: "VideoRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  thumbnail?: Maybe<FileField>
  updatedAt: Scalars["DateTime"]
  video?: Maybe<VideoField>
}

/** Record of type Video (video) */
export type VideoRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type VideoSectionModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  videoUrl?: Maybe<VideoFilter>
  OR?: Maybe<Array<Maybe<VideoSectionModelFilter>>>
}

export enum VideoSectionModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC"
}

/** Record of type Video Section (video_section) */
export type VideoSectionRecord = {
  __typename?: "VideoSectionRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  updatedAt: Scalars["DateTime"]
  videoUrl?: Maybe<VideoField>
}

/** Record of type Video Section (video_section) */
export type VideoSectionRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type VideoSourceModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  url?: Maybe<StringFilter>
  srcType?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<VideoSourceModelFilter>>>
}

export enum VideoSourceModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  UrlAsc = "url_ASC",
  UrlDesc = "url_DESC",
  SrcTypeAsc = "srcType_ASC",
  SrcTypeDesc = "srcType_DESC"
}

/** Record of type Video Source (video_source) */
export type VideoSourceRecord = {
  __typename?: "VideoSourceRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  srcType?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
  url?: Maybe<Scalars["String"]>
}

/** Record of type Video Source (video_source) */
export type VideoSourceRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type WebinarModelBodyContentField =
  | TextHeadlineSectionRecord
  | TextSectionRecord
  | BasicTableRecord

export type WebinarModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  primaryProduct?: Maybe<LinkFilter>
  isAnnouncement?: Maybe<BooleanFilter>
  backgroundImage?: Maybe<FileFilter>
  product?: Maybe<LinksFilter>
  infrastructureProvider?: Maybe<LinksFilter>
  industry?: Maybe<LinksFilter>
  webinarId?: Maybe<StringFilter>
  language?: Maybe<StringFilter>
  hidden?: Maybe<BooleanFilter>
  slug?: Maybe<SlugFilter>
  draft?: Maybe<BooleanFilter>
  description?: Maybe<TextFilter>
  title?: Maybe<StringFilter>
  people?: Maybe<LinksFilter>
  organizations?: Maybe<LinksFilter>
  events?: Maybe<LinksFilter>
  metadata?: Maybe<SeoFilter>
  showDemoRequest?: Maybe<BooleanFilter>
  primaryInfrastructureProvider?: Maybe<LinkFilter>
  bodyContent?: Maybe<LinksFilter>
  heroContent?: Maybe<LinksFilter>
  date?: Maybe<DateFilter>
  OR?: Maybe<Array<Maybe<WebinarModelFilter>>>
}

export type WebinarModelHeroContentField =
  | TextHeadlineSectionRecord
  | SpeakersSectionRecord

export enum WebinarModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  IsAnnouncementAsc = "isAnnouncement_ASC",
  IsAnnouncementDesc = "isAnnouncement_DESC",
  WebinarIdAsc = "webinarId_ASC",
  WebinarIdDesc = "webinarId_DESC",
  LanguageAsc = "language_ASC",
  LanguageDesc = "language_DESC",
  HiddenAsc = "hidden_ASC",
  HiddenDesc = "hidden_DESC",
  DraftAsc = "draft_ASC",
  DraftDesc = "draft_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  ShowDemoRequestAsc = "showDemoRequest_ASC",
  ShowDemoRequestDesc = "showDemoRequest_DESC",
  DateAsc = "date_ASC",
  DateDesc = "date_DESC"
}

export type WebinarModelProductField =
  | OpenSourceToolRecord
  | EnterpriseProductRecord

/** Record of type Webinar (webinar) */
export type WebinarRecord = {
  __typename?: "WebinarRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  backgroundImage?: Maybe<FileField>
  bodyContent: Array<WebinarModelBodyContentField>
  createdAt: Scalars["DateTime"]
  date?: Maybe<Scalars["Date"]>
  description?: Maybe<Scalars["String"]>
  draft?: Maybe<Scalars["BooleanType"]>
  events: Array<EventRecord>
  heroContent: Array<WebinarModelHeroContentField>
  hidden?: Maybe<Scalars["BooleanType"]>
  id: Scalars["ItemId"]
  industry: Array<ResourceIndustryRecord>
  infrastructureProvider: Array<ResourceInfrastructureProviderRecord>
  isAnnouncement?: Maybe<Scalars["BooleanType"]>
  language?: Maybe<Scalars["String"]>
  metadata?: Maybe<SeoField>
  organizations: Array<CompanyRecord>
  people: Array<PersonRecord>
  primaryInfrastructureProvider?: Maybe<ResourceInfrastructureProviderRecord>
  primaryProduct?: Maybe<OpenSourceToolRecord>
  product: Array<WebinarModelProductField>
  showDemoRequest?: Maybe<Scalars["BooleanType"]>
  slug?: Maybe<Scalars["String"]>
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
  webinarId?: Maybe<Scalars["String"]>
}

/** Record of type Webinar (webinar) */
export type WebinarRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

/** Record of type Webinar (webinar) */
export type WebinarRecordDescriptionArgs = {
  markdown?: Maybe<Scalars["Boolean"]>
}

export type WhitePaperModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  file?: Maybe<FileFilter>
  title?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<WhitePaperModelFilter>>>
}

export enum WhitePaperModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC"
}

/** Record of type White Paper (white_paper) */
export type WhitePaperRecord = {
  __typename?: "WhitePaperRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  file?: Maybe<FileField>
  id: Scalars["ItemId"]
  title?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
}

/** Record of type White Paper (white_paper) */
export type WhitePaperRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}

export type WistiaSectionModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<ItemIdFilter>
  _firstPublishedAt?: Maybe<DateTimeFilter>
  _publicationScheduledAt?: Maybe<DateTimeFilter>
  _publishedAt?: Maybe<DateTimeFilter>
  _status?: Maybe<StatusFilter>
  _updatedAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  _isValid?: Maybe<BooleanFilter>
  videoId?: Maybe<StringFilter>
  internalTitle?: Maybe<StringFilter>
  OR?: Maybe<Array<Maybe<WistiaSectionModelFilter>>>
}

export enum WistiaSectionModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  VideoIdAsc = "videoId_ASC",
  VideoIdDesc = "videoId_DESC",
  InternalTitleAsc = "internalTitle_ASC",
  InternalTitleDesc = "internalTitle_DESC"
}

/** Record of type Wistia Section (wistia_section) */
export type WistiaSectionRecord = {
  __typename?: "WistiaSectionRecord"
  _createdAt: Scalars["DateTime"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>
  _isValid: Scalars["BooleanType"]
  _modelApiKey: Scalars["String"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>
  _publishedAt?: Maybe<Scalars["DateTime"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _updatedAt: Scalars["DateTime"]
  createdAt: Scalars["DateTime"]
  id: Scalars["ItemId"]
  internalTitle?: Maybe<Scalars["String"]>
  updatedAt: Scalars["DateTime"]
  videoId?: Maybe<Scalars["String"]>
}

/** Record of type Wistia Section (wistia_section) */
export type WistiaSectionRecord_SeoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>
}
