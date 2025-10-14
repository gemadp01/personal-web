import { AlertTriangle } from "lucide-react";

const NotFoundPage = () => {
  return (
    <main className="min-h-screen bg-light dark:bg-black">
      <section className="mx-auto flex justify-center items-center -mt-14 max-w-7xl h-screen bg-white dark:bg-dark dark:border-x dark:border-x-border-dark">
        <div className="px-4 sm:px-6 lg:px-12 text-center">
          <AlertTriangle size={64} className="text-red-500 mb-4 mx-auto" />
          <h1 className="text-h2 mb-2">404 - Not Found</h1>
          <p className="text-lg text-description dark:text-inverse mb-6">
            The page you are looking for does not exist.
          </p>
        </div>
      </section>
    </main>
  );
};
export default NotFoundPage;
