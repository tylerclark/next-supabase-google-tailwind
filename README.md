# Next 15 + Supabase + Google Auth + Tailwind 4 Boilerplate Starter

This is a fork of https://github.com/vercel/next.js/tree/canary/examples/with-supabase with added:

- Sign-in with Google capability (turn on in Supabase, sign-up in Google Cloud console)
- Tailwind v4

Setup a Supabase project by going to: [database.new](https://database.new)

### How I made his boilerplate:

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

I simplified the UI and made the navigation easier.

Finally, I added some code for signing in with Google authentication. You can easily add other providers.

### Note:

Rename `.env.example` to `.env.local` and update the following:

```
NEXT_PUBLIC_SUPABASE_URL=[INSERT SUPABASE PROJECT URL]
NEXT_PUBLIC_SUPABASE_ANON_KEY=[INSERT SUPABASE PROJECT API ANON KEY]
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Both `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` can be found in [your Supabase project's API settings](https://app.supabase.com/project/_/settings/api)
