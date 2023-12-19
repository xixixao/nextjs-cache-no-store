// Uncomment to fix the build
// export const dynamic = 'force-dynamic'

export default async function Home() {
  // This fetch will always fail, but it should not prevent
  // static build.
  const data = await fetch("https://does.not.exist.foo.bar.boom", {
    cache: "no-store",
  });
  const foo = await data.json();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {foo.bar}
    </main>
  );
}
