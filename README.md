# appundo.in / ആപ്പ് ഉണ്ടോ.in — Kerala App Directory

A curated directory of hyper-local web utilities and community-built tools across Kerala - നാട്ടിലെ ആപ്പുകൾ ഒരൊറ്റ പേജിൽ.

**Live at:** [appundo.in](https://appundo.in)

---

## Contributing

This is an open-source, community-driven project. Anyone can add an app.

### Option 1: Pull Request (Preferred)

1. Fork this repo
2. Edit `/data/apps.json` and add your entry:
   ```json
   {
     "id": "my-app",
     "name": "My App",
     "description": "One or two sentences about what it does.",
     "url": "https://myapp.example.com",
     "category": "Utilities",
     "tags": ["kerala", "tag1", "tag2"],
     "addedBy": "your-github-username"
   }
   ```
3. Open a Pull Request

### Option 2: GitHub Issue

Open an Issue using the **New App Submission** template and a maintainer will add it for you.

## JSON Field Reference

| Field | Required | Description |
|-------|----------|-------------|
| `id` | ✅ | Unique, lowercase, hyphenated identifier |
| `name` | ✅ | Display name of the app |
| `description` | ✅ | 1–2 sentence description |
| `url` | ✅ | Full URL with `https://` |
| `category` | ✅ | One of: `Weather`, `Utilities`, `Govt`, `Transport`, `News`, `Tools`, `Health`, `Education`, `Fun` |
| `tags` | ✅ | Array of lowercase strings |
| `addedBy` | ❌ | Your GitHub username |
| `addedAt` | ❌ | Date added (`YYYY-MM-DD`) |
| `icon` | ❌ | Emoji to use as icon |

## Tech Stack

- **Next.js** (App Router) — Static export
- **TypeScript** — Type-safe data
- **Tailwind CSS** — Styling
- **Vercel** — Hosting

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## License

MIT — free to fork, remix, and deploy your own version.
