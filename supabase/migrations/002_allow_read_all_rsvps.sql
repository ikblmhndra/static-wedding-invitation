-- Allow anonymous users to read all RSVP rows, including those without a message
drop policy if exists "Allow anonymous read wishes" on public.rsvps;

create policy "Allow anonymous read rsvps"
  on public.rsvps
  for select
  to anon
  using (true);
