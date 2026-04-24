import { Button } from "@repo/ui/components/button";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-5xl font-bold tracking-tight">Hello, World.</h1>
      <p className="text-muted-foreground">Built with ♥ and deployed on Cloudflare Pages.</p>
      <Button>Get started</Button>
    </main>
  );
}
