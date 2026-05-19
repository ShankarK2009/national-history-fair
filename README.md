# Terror's Turning Point

APUSH History Fair project about the Ku Klux Klan, Radical Reconstruction, organized reaction, federal reform, and the collapse of Reconstruction-era civil rights protections.

The repository contains the research packet/guide materials at the root and a Next.js website in [`history-site`](./history-site).

## Project Focus

**Theme:** Revolution, Reaction, and Reform

**Central argument:** Radical Reconstruction attempted to redefine citizenship and protect Black civil and political rights through constitutional amendments and federal enforcement. The Ku Klux Klan and other white supremacist groups answered those reforms with organized terror, and the eventual retreat of federal enforcement helped dismantle Reconstruction's protections for generations.

## Repository Contents

- [`history-site`](./history-site) - Next.js site for the final History Fair presentation.
- [`APUSH History Fair - Packet.md`](./APUSH%20History%20Fair%20-%20Packet.md) - assignment packet and project requirements.
- [`APUSH History Fair - Project Guide.md`](./APUSH%20History%20Fair%20-%20Project%20Guide.md) - planning and research guide.

## Run the Website

```bash
cd history-site
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

Useful commands:

```bash
npm run lint
npm run build
npm run start
```

## Website Sections

- **Home** - project overview and timeline framing.
- **Thesis** - core historical claim.
- **Context** - Reconstruction background and constitutional change.
- **Details** - Klan violence, political intimidation, and federal response.
- **Legacy** - court decisions and long-term civil rights impact.
- **Bibliography** - primary sources, secondary sources, and image credits.

## Website Structure

```text
history-site/
  app/                  Next.js App Router pages and shared layout
  components/           Reusable React components
  public/               Static assets
  package.json          App dependencies and scripts
```

Most page content is written directly in the route files under `history-site/app/`. Image citations use the shared `ImageBlock` component, and full source lists are collected on the bibliography page.
