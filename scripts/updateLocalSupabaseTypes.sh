#!/bin/bash

# get access to any environment variables we need
source .env.local
# generate types from the local and running Supabase instance
pnpm dlx supabase gen types typescript --local --schema public > types/supabase.ts
