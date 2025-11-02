import { auth } from "@clerk/nextjs/server";
import ProfileForm from "@/components/ProfileForm";

export default async function DashboardPage() {
  const { userId } = await auth(); //
  if (!userId) {
    return <div className="text-center mt-20">Please log in to continue.</div>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">AI Profile Builder</h1>
      <ProfileForm userId={userId} />
    </div>
  );
}
