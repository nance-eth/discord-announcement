import dotenv from "dotenv";

dotenv.config();

const discord_webhook = process.env.DISCORD_WEBHOOK_URL;

const body = JSON.stringify({
  // Tag "Announcements" role
  content: '<@&1090066409696002048>',
  // See https://discord.com/developers/docs/resources/channel#embed-object
  embeds: [
    {
      title: "Nance Update",
      description:
        "Nance has a Discord server now.",
      color: 13428223,
    },
  ],
});

// Publish announcement
fetch(discord_webhook, {
  headers: { "Content-Type": "application/json" },
  method: "POST",
  body,
})
  .then((res) => res.text())
  .then((json) => console.log(JSON.stringify(json)));
