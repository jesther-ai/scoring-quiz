create table quiz_results (
  id         uuid primary key default gen_random_uuid(),
  session_id uuid not null,
  answers    jsonb not null,
  total_score smallint not null check (total_score between 20 and 80),
  result_band text not null check (
    result_band in (
      'Strong Growth Mindset',
      'Growth Mindset with some Fixed ideas',
      'Fixed Mindset with some Growth ideas',
      'Strong Fixed Mindset'
    )
  ),
  created_at timestamptz not null default now()
);

create index idx_quiz_results_session_id on quiz_results (session_id);
create index idx_quiz_results_created_at on quiz_results (created_at);

alter table quiz_results enable row level security;

create policy "Allow anonymous inserts"
  on quiz_results
  for insert
  to anon
  with check (true);
