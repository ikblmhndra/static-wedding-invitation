-- RSVP and wishes table for wedding invitation
create table if not exists public.rsvps (
  id uuid primary key default gen_random_uuid(),
  guest_name text not null,
  attendance text not null,
  guest_count integer not null check (guest_count >= 1 and guest_count <= 10),
  message text,
  created_at timestamptz not null default now()
);

alter table public.rsvps enable row level security;

-- Allow anonymous users to submit RSVP
create policy "Allow anonymous insert"
  on public.rsvps
  for insert
  to anon
  with check (true);

-- Allow anonymous users to read wishes (rows with a message)
create policy "Allow anonymous read wishes"
  on public.rsvps
  for select
  to anon
  using (message is not null and btrim(message) <> '');
