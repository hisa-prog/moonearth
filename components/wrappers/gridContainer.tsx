export default function Contsiner({ children }: any) {
  return (
    <div
      className={`h-full w-full xl:max-w-6xl px-4 md:px-12 lg:px-16 xl:px-0 mx-auto grid gap-4 grid-cols-4 md:grid-cols-8 lg:grid-cols-12`}
    >
      {children}
    </div>
  );
}
