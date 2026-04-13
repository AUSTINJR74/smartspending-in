export default function Loader() {
  return (
    <div className="container-wide px-6 md:px-10 py-20">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
        <p className="mt-4 text-muted-foreground">Fetching Details...</p>
      </div>
    </div>
  );
}