# Next 15 + Supabase + Google Auth + Tailwind 4 Boilerplate Starter

This is a fork of https://github.com/vercel/next.js/tree/canary/examples/with-supabase with added:

- Sign-in with Google capability (turn on in Supabase, sign-up in Google Cloud console)
- Tailwind v4
- Basic AI Chat capabilities using Vercel's AI package

---

### How to get started:

1. Setup a Supabase project by going to: [database.new](https://database.new)
2. Copy the environment variables template: `cp .env.example .env.local`
3. Update the environment variables in `.env.local` with your values
4. Run `npm i`
5. Run `npm run dev`

---

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

Finally, I added the following mods:

- Simplified the UI and made the navigation easier
- Added some code for signing in with Google authentication. You can easily add other providers
- Added AI chat so you can see an example of API routes and streaming chat
- Added a cursor rules file that explains the tech stack

---

### AI Integration

The starter includes a basic AI chat implementation using Vercel's AI package using OpenAI ChatGPT (you can change):

- Server-side API route for handling chat requests
- Basic chat interface

---

### Environment Variables:

The `.env.local` file should contain the following variables:

1. Both `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` can be found in [your Supabase project's API settings](https://app.supabase.com/project/_/settings/api)

2. You'll need an OpenAI API key to use the AI chat functionality. Get one at [platform.openai.com](https://platform.openai.com).
