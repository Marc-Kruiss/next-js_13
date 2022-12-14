import TodosList from "./TodosList";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex">
        <div>
            {/*@ts-ignore */}
            <TodosList/>
        </div>

        <div className="flex-1">{children}</div>
    </main>
  );
}
