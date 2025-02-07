# Next 15 + Supabase + Google Auth + Tailwind 4

This is a fork of https://github.com/vercel/next.js/tree/canary/examples/with-supabase with added:

- Sign-in with Google capability
- Tailwind v4

I created this project by running:

```bash
npx create-next-app -e with-supabase --tailwind --eslint --app --use-npm --ts
```

Then I updated some outdated packages (minus Tailwind):

```bash
npm outdated && npm update
```

Then I upgraded Tailwind to v4:

```bash
npx @tailwindcss/upgrade@next
```

### Note

Rename `.env.example` to `.env.local` and update the following:

```
NEXT_PUBLIC_SUPABASE_URL=[INSERT SUPABASE PROJECT URL]
NEXT_PUBLIC_SUPABASE_ANON_KEY=[INSERT SUPABASE PROJECT API ANON KEY]
```

Both `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` can be found in [your Supabase project's API settings](https://app.supabase.com/project/_/settings/api)
