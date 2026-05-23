# Contributing to appundo.in

Thanks for wanting to help! Here's everything you need to know.

## Adding a New App

### Step 1 — Fork and clone

```bash
git clone https://github.com/YOUR_USERNAME/appundo.in
cd appundo.in
npm install
```

### Step 2 — Add your entry

Open `/data/apps.json` and add a new object to the array:

```json
{
  "id": "unique-app-id",
  "name": "App Name",
  "description": "What this app does, in one or two sentences.",
  "url": "https://app-url.com",
  "category": "Utilities",
  "tags": ["kerala", "relevant-tag"],
  "addedBy": "your-github-username",
  "addedAt": "2024-06-01"
}
```

**Rules:**
- `id` must be unique across the file — use lowercase and hyphens, e.g. `my-kerala-app`
- `url` must start with `https://`
- `category` must be one of: `Weather`, `Utilities`, `Govt`, `Transport`, `News`, `Tools`, `Health`, `Education`, `Fun`
- `tags` should be lowercase, no spaces (use hyphens for multi-word tags)
- Don't add duplicate apps — check the existing list first

### Step 3 — Test locally

```bash
npm run dev
```

Make sure your app card renders correctly and the JSON has no syntax errors.

### Step 4 — Submit a Pull Request

```bash
git checkout -b add-my-app
git add data/apps.json
git commit -m "feat: add My App"
git push origin add-my-app
```

Open a PR on GitHub. Fill out the PR template checklist.

---

## Not comfortable with Git?

[Open a GitHub Issue](https://github.com/your-org/appundo.in/issues/new?template=add-app.yml) using the **New App Submission** template. A maintainer will add it for you.

---

## What makes a good submission?

- The app is publicly accessible (no login required to use core features)
- It's actually useful for people in or related to Kerala
- It's not already listed
- The URL works

## What we don't accept

- Paid apps that require a subscription to use
- Apps under construction or not publicly accessible
- Spam, adult content, or anything illegal
