import { AlertTriangle } from "lucide-react";

const NotFoundPage = () => {
  return (
    <main className="min-h-[80vh] flex flex-col justify-center items-center text-center">
      <AlertTriangle size={64} className="text-yellow-500 mb-4" />
      <h1 className="text-4xl font-bold mb-2">404 - Not Found</h1>
      <p className="text-lg text-gray-600 mb-6">
        Halaman yang kamu cari nggak ditemukan.
      </p>
    </main>
  );
};
export default NotFoundPage;
