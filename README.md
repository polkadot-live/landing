# Polkadot Live Landing

Landing page built with TypeScript, Vite, React and Tailwind.

## Local Development

```bash
yarn install
yarn dev
```

Open `http://localhost:5173`

## Docker Development

```bash
yarn docker:dev
yarn docker:dev --build  # (re)build image before starting
```

Open `http://localhost:5173`

To view logs:
```bash
docker compose logs -f app-dev
```

Stop:
```bash
docker compose --profile dev down
```

## Docker Production

```bash
yarn docker:prod
yarn docker:prod --build # (re)build image before starting
```

Open `http://localhost:3000`

Stop:
```bash
docker compose --profile prod down
```

## Scripts

- `yarn dev` — Local dev server
- `yarn build` — Build for production
- `yarn preview` — Preview production build locally
- `yarn docker:dev` — Start dev container
- `yarn docker:prod` — Start production container
- `yarn format:file <file>` — Format with Biome
- `yarn lint:check` — Check formatting
