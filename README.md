# FORM — Apartment gym workout tracker

A dependency-free, responsive workout log for the three-day A/B/C full-body routine.

## Run

Requires Node.js 20 or later. From this checkout:

```sh
npm start
```

The HTTP server listens on port 3000 (override with `PORT`). Run `npm test` for routine and session-model tests. No installation, database, API keys, or external services are required.

## Tracking

Choose a day, enter weight and reps (seconds for planks), and tick completed sets. Drafts save as you go, separately for each day. Finish a workout to add it to history; unfinished sets are not counted. The third push-up set is optional. For unilateral exercises log reps per leg; use weight per dumbbell consistently. Switching kg/lb changes the session label; it does not convert entered values.

Session history includes each completed set and notes. Export backup downloads history and drafts as JSON. Data is local to this browser and origin; clearing browser storage removes it. Backups currently support export only, not import or cross-device sync. Keep the same server port to retain access to existing browser data.
