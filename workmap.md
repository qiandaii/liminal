# 30-Day Feed-Based Social App Roadmap (Create T3 Stack)

## 🎯 Goal by Day 30

A working feed-based social app with: - Authentication - Create post -
Feed with cursor pagination - Likes - Comments - Profile pages -
Deployed live - 5--20 real users testing it

Depth \> breadth.

------------------------------------------------------------------------

# 🔥 WEEK 1 --- Foundations (Days 1--7)

## Day 1--2: Project Setup

-   Create T3 app x
-   Set up Postgres (local or Neon) x
-   Set up Prisma x
-   Configure NextAuth (Google or email login) x

You must be able to: - Sign in - Persist user in DB - Access session on
frontend x

## Day 3--4: Database Design

### Extend User

-   username x
-   bio x
-   image x

### Post

-   id x
-   userId x
-   content x
-   createdAt x

### Like

-   id x
-   userId x
-   postId x

### Comment

-   id x
-   userId x
-   postId x
-   content x

Run migrations and seed test data. x

## Day 5--6: Create Post

-   Post form
-   tRPC mutation
-   Save to DB
-   Update feed

Keep it simple.

## Day 7: Basic Feed

-   getFeed query
-   Order by createdAt DESC
-   Display author info

------------------------------------------------------------------------

# ⚡ WEEK 2 --- Engagement Layer (Days 8--14)

## Day 8--9: Likes

-   Like mutation
-   Unique constraint to prevent duplicates
-   Like count
-   Toggle like
-   Implement optimistic UI

## Day 10--11: Comments

-   Comment mutation
-   Fetch comments per post
-   Render collapsible comment section

## Day 12--13: Profile Pages

Route: /u/\[username\]

Display: - User info - Their posts

## Day 14: Refactor

-   Clean up messy code
-   Improve loading states
-   Fix type issues
-   Add error handling

------------------------------------------------------------------------

# 🚀 WEEK 3 --- Real Engineering (Days 15--21)

## Day 15--16: Cursor-Based Pagination

Replace offset pagination with: - cursor - take - orderBy

Implement infinite scroll.

## Day 17--18: Follow System

Follow Model: - followerId - followingId

Display: - Follower count - Following count

## Day 19--20: Feed Filtering

Option A: - Show posts from followed users

Option B: - "For You" vs "Following" tabs

## Day 21: UI Polish

-   Improve layout
-   Refine post cards
-   Clean spacing

------------------------------------------------------------------------

# 🧠 WEEK 4 --- Production Mode (Days 22--30)

## Day 22--23: Deployment

-   Deploy to Vercel
-   Configure production database
-   Fix environment variables
-   Set auth callback URLs

## Day 24--25: Edge Case Testing

Test: - Deleting posts - Empty posts - Concurrent likes - Spam behavior

## Day 26--27: Rate Limiting

-   Limit posts per minute
-   Prevent like spam

## Day 28: Invite 5 Friends

Send them the app and ask them to break it.

## Day 29: Fix Issues

Only fix pain points. No new features.

## Day 30: Reflection

Ask: - Is this interesting? - Are users engaging? - Do I want to expand
or pivot?
