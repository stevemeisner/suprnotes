# Supabase Next.js Starter

This exploratory project uses Supabase and Next.js to create a simple app. It features (or _will_ feature ...) database migration, authentication, and dynamic user roles managed by an admin. Access to content and functionality varies based on user roles.

## Getting Started

Kick off a local instance of Supabase, and then fire up the dev server.

1. Make sure you're signed into Supabase in your browser with an account that has access to the project you're working with.
2. Ensure that [Docker Desktop](https://www.docker.com/products/docker-desktop/) is running on your machine
   - [Supabase docs](https://supabase.com/docs/guides/cli/local-development#start-supabase-services)
3. create a `.env.local` file in the root of the project with the following content:

```bash
NEXT_PUBLIC_SUPABASE_URL=http://127.0.0.1:54321
NEXT_PUBLIC_SUPABASE_ANON_KEY=public_anon_key
SUPABASE_PROJECT_ID='default'
```

> 📝 You can find the public anon key in the Supabase settings page of your project (see screenshot below).
> 
> <img width="1445" alt="Screenshot 2024-08-19 at 8 51 39 PM" src="https://github.com/user-attachments/assets/ea7c4b07-9ae7-4322-89d1-cc826af2cec5">

4. Run the following commands in your terminal:

```bash
# [first run]  install the dependencies
pnpm install

# [first run] sign in to supabase
pnpm supabase login

# [first run] link the project you're working on
pnpm supabase link

# start the local supabase instance
pnpm supabase start

# start the dev server
pnpm dev
```

## Database Development & Migration

We can develop our database schema locally and then generate migrations from the changes we've made. This is useful for keeping track of changes to the database schema over time, and for sharing those changes with other developers.

📝 DB migrations will be run in the production environment when there is a push into the `main` branch (like when a PR is merged or when commits are pushed directly to `main`)

### New Blank Migration

To create a blank new migration, run the following command:

```bash
pnpm supabase migration new <migration__name>
```

You can then write SQL in the newly created migration file in the `migrations` directory.

### New Generated Migration from GUI Changes

You can alter your database locally in the Studio UI, and then generate a migration from the changes you've made. To do this, run the following command:

```bash
pnpn supabase db diff --use-migra -f <migration__name>
```

> 📹 https://www.youtube.com/watch?v=Kx5nHBmIxyQ
>
> 📝 https://supabase.com/docs/guides/cli/local-development#database-migrations

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
