import prisma from "@/lib/prisma";

async function main() {
  const james = await prisma.user.upsert({
    where: { email: "james@fullstacktechnyc.com" },
    update: {},
    create: {
      email: "james@fullstacktechnyc.com",
      name: "James Washington",
      username: "jbwashington",
      gh_username: "jbwashignton",
      image: "https://avatars.githubusercontent.com/u/3478078?v=4",
      posts: {
        create: [
          {
            title: "Top Serverless Database Providers for 2024",
            content:
              "https://fullstacktechnyc.com/posts/top-serverless-db-providers-for-2024",
            published: true,
          },
          {
            title: "Local LLMs Are All You Need",
            content: "https://fullstacktechnyc.com/posts/local-llms",
            published: true,
          },
        ],
      },
      projects: {
        create: [
          {
            title: "Turnstile Tracker",
            description: "Know where NYPD is at every transit station in NYC",
            content:
              "Find out which trains the black people ride and the work is 80% done.",
            slug: "turnstile-tracker",
          },
          {
            title: "Compensatory Compute",
            description: "A revolutionary AI reparations robocaller.",
            content:
              "Calls living descendants of American slave owners every 15 minutes.",
            slug: "compensatory-compute",
          },
        ],
      },
    },
  });

  console.log({ james });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
