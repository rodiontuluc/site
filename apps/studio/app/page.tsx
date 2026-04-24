import { Button } from "@repo/ui/components/button";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-4xl font-bold tracking-tight">Studio</h1>
      <p className="text-muted-foreground">Closed app — backed by Supabase.</p>
      <Button variant="outline">Sign in</Button>
    </main>
  );
}
