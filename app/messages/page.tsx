import { collection, getDocs, orderBy, query } from "firebase/firestore";
import Link from "next/link";
import { db } from "@/lib/firebase";

type Message = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  createdAt?: { seconds: number; nanoseconds: number };
};

export default async function MessagesPage() {
  const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);

  const messages = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Message, "id">),
  }));

  return (
    <main className="min-h-screen bg-background px-6 py-16 text-foreground">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
              Messages
            </p>
            <h1 className="text-3xl font-semibold">All portfolio inquiries</h1>
          </div>
          <Link
            href="/"
            className="rounded-md border border-border px-4 py-2 text-sm hover:border-accent hover:text-accent"
          >
            Back home
          </Link>
        </div>

        {messages.length === 0 ? (
          <div className="rounded-xl border border-border bg-card p-8 text-sm text-muted-foreground">
            No messages yet.
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((message) => (
              <article key={message.id} className="rounded-xl border border-border bg-card p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h2 className="text-lg font-semibold">{message.name}</h2>
                    <p className="text-sm text-muted-foreground">{message.email}</p>
                  </div>
                  {message.phone ? (
                    <p className="text-sm text-muted-foreground">{message.phone}</p>
                  ) : null}
                </div>
                <p className="mt-4 whitespace-pre-wrap text-sm leading-7">{message.message}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
