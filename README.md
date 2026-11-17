# LUSZ STUDIOS website

The new luszstudios.com. Built with Next.js, TypeScript and Tailwind CSS.

## Change the content

All text and lists live in `src/content/`. You never need to touch the page files to update them.

| File | What it holds |
|---|---|
| `site.ts` | Contact details, navigation, client names, the recommendation quote, credentials |
| `projects.ts` | Every project and case study, including The Coffee Party Stockholm |
| `services.ts` | Think, Make, Gather and the list under each |
| `store.ts` | Store items. Empty for now: add items and the store page fills itself |

Photos go in `public/images/`. Keep them under about 2000 px on the long side.

A project with `draft: true` shows a short "full story on its way" note. Remove the line when its text is written.

## Add a video

1. Export the film as .mp4, under about 20 MB. Put it in `public/videos/`.
2. In `projects.ts`, add this line to the project: `video: { src: "/videos/your-film.mp4", poster: "/images/a-still.jpg" },`
3. For longer films, upload to Vimeo or YouTube and link to it from the project text.

## Run it on your computer

1. Install Node.js 20 or newer from nodejs.org.
2. In this folder, run `npm install`.
3. Run `npm run dev` and open http://localhost:3000.

## Put it online (Vercel)

1. Create a free account at github.com and at vercel.com.
2. Upload this folder to a new GitHub repository.
3. In Vercel, choose "Add New Project", pick the repository and press Deploy. You get a test address in a few minutes.
4. In Vercel, open Settings, then Domains, add `luszstudios.com` and follow the DNS values it shows. Change them where the domain is registered. Keep the old Squarespace site running until the new one is live.

## Make the contact form send email

The form sends through Resend (resend.com). Until this is set up, the form tells visitors to email you directly, so no message is lost.

1. Create a Resend account and verify the domain `luszstudios.com` there.
2. Create an API key.
3. In Vercel, open Settings, then Environment Variables, and add:
   - `RESEND_API_KEY`: the key from Resend
   - `CONTACT_FROM`: for example `LUSZ site <hello@luszstudios.com>`
   - `CONTACT_TO` (optional): where messages should arrive. Defaults to contact@luszstudios.com.
4. Redeploy.

## Before launch

- Confirm the Lotta Onajin quote with her, or set `quote` to `null` in `site.ts`.
- Confirm photo permission and full credit names for the Coffee Party photos.
- Write the full text for the draft projects (VSCO, Dometic, Xbox, Malibu Rum, Urbanears).
- Add store items to `store.ts`.
