create table public.profiles (
  id uuid not null references auth.users on delete cascade,
  first_name text,
  last_name text,
  display_name text,
  created_at timestamptz default now(),
  primary key (id)
);

alter table public.profiles enable row level security;

-- inserts a row into public.profiles
create function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = ''
as $$
begin
  insert into public.profiles (id)
  values(new.id);
  return new;
end;
$$;

-- trigger the function every time a user is created
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
