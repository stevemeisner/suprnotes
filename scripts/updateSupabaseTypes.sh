#!/bin/bash

# get access to any environment variables we need
source .env
# generate types for this project using the Supabase Project ID that's present in the environment variables
pnpm dlx supabase gen types typescript --project-id $SUPABASE_PROJECT_ID --schema public > types/supabase.ts
