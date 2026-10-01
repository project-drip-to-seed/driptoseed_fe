// Shapes returned by the Drip portal API (drip_backend/drip/portal).

export type Role = "creator" | "editor" | "admin";
export type ApplicationStatus = "pending" | "approved" | "rejected";
export type ContentStatus = "open" | "closed";
export type ClipStatus = "pending" | "approved" | "rejected";

export interface User {
  id: string;
  email: string;
  full_name: string;
  phone: string;
  role: Role;
  is_active: boolean;
  created_at: string | null;
  last_login_at: string | null;
}

export interface ReviewInfo {
  note: string;
  reviewed_by: string;
  reviewed_at: string | null;
}

export interface HistoryEntry {
  status: ApplicationStatus;
  at: string;
  by: string;
  note: string;
}

export interface Application {
  id: string;
  user_id: string;
  type: "creator" | "editor";
  status: ApplicationStatus;
  data: Record<string, unknown>;
  review: ReviewInfo | null;
  history: HistoryEntry[];
  created_at: string | null;
  updated_at: string | null;
  applicant?: {
    id: string;
    full_name: string;
    email: string;
    phone: string;
    is_active: boolean;
  };
}

export interface Session {
  user: User;
  application: Application | null;
}

export interface Option {
  value: string;
  label: string;
}

export interface Meta {
  creator_types: Option[];
  niches: Option[];
  platforms: Option[];
  audience_sizes: Option[];
  publish_frequencies: Option[];
  content_types: Option[];
  editing_tools: Option[];
  experience_levels: Option[];
  weekly_availability: Option[];
  payout: { per_clip_inr: number; views_threshold: number };
  limits: {
    max_editors_per_content: number;
    max_active_claims_per_editor: number;
    max_open_content_per_creator: number;
  };
}

export interface Page<T> {
  items: T[];
  total: number;
  limit: number;
  offset: number;
}

/** Public channels an editor can open to check a creator's views. No contact details. */
export interface CreatorProfile {
  socials: Record<string, string>;
  audience_size: string;
}

export interface ContentItem {
  id: string;
  creator_id: string;
  title: string;
  video_url: string;
  niche: string;
  description: string;
  status: ContentStatus;
  claim_count: number;
  created_at: string | null;
  updated_at: string | null;
  // added by some endpoints
  clips?: number;
  approved_clips?: number;
  views?: number;
  creator_name?: string;
  creator_profile?: CreatorProfile | null;
  slots_left?: number;
  my_clips?: number;
  my_approved_clips?: number;
}

/** Whether a submitted video was matched to a channel the editor gave when applying. */
export interface ChannelCheck {
  /** "verified": confirmed automatically. "unverified": the admin has to confirm it by eye. */
  status: "verified" | "unverified";
  method: "url" | "oembed" | null;
  /** The approved channel link it was checked against. */
  channel: string;
  detail: string;
}

export interface Clip {
  id: string;
  content_id: string;
  creator_id: string;
  editor_id: string;
  clip_url: string;
  platform: string;
  title: string;
  notes: string;
  status: ClipStatus;
  views: number;
  views_updated_at: string | null;
  review: ReviewInfo | null;
  eligible: boolean;
  payout: number;
  paid: boolean;
  paid_at: string | null;
  created_at: string | null;
  channel_check?: ChannelCheck | null;
  /** The editor confirmed the video is on their own approved channel. */
  own_channel?: boolean;
  // added by some endpoints
  editor_channels?: Record<string, string>;
  content_title?: string;
  editor_name?: string;
  editor_email?: string;
  source_url?: string;
}

export interface CreatorOverview {
  application: Application | null;
  stats: {
    content_total: number;
    content_by_status: Record<ContentStatus, number>;
    clips_by_status: Record<ClipStatus, number>;
    clips_total: number;
    total_views: number;
  };
}

export interface EditorOverview {
  application: Application | null;
  stats: {
    active_jobs: number;
    clips_by_status: Record<ClipStatus, number>;
    total_views: number;
    eligible_clips: number;
    total_earned: number;
    paid_amount: number;
    pending_amount: number;
  };
}

export interface EditorEarnings {
  rule: { per_clip_inr: number; views_threshold: number };
  eligible_clips: number;
  total_earned: number;
  paid_amount: number;
  pending_amount: number;
  clips: Clip[];
}

export interface AdminOverview {
  users: { creators: number; editors: number };
  applications: {
    by_status: Record<ApplicationStatus, number>;
    pending_creators: number;
    pending_editors: number;
  };
  content: { total: number };
  clips: { by_status: Record<ClipStatus, number> };
  payouts: { clips_due: number; amount_due: number; editors_due: number };
  recent_pending: Application[];
}

export interface PayoutRow {
  editor_id: string;
  editor_name: string;
  editor_email: string;
  clips: number;
  amount: number;
}

export interface Payouts {
  per_clip_inr: number;
  views_threshold: number;
  total_amount: number;
  items: PayoutRow[];
}

export interface AdminUser extends User {
  application_status: ApplicationStatus | null;
}
