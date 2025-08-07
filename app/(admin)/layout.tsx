import type { ReactNode } from 'react';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-50 text-gray-900">
        <header className="p-4 bg-white shadow-md">
          <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Admin Dashboard</h1>
            <ul className="flex gap-4">
              <li><a href="/(admin)/">Inicio</a></li>
              <li><a href="/(admin)/sales">Ventas</a></li>
              <li><a href="/(admin)/products">Productos</a></li>
              <li><a href="/(admin)/users">Usuarios</a></li>
            </ul>
          </nav>
        </header>

        <main className="container mx-auto py-8">
          {children}
        </main>

        <footer className="p-4 mt-8 bg-gray-100 text-center">
          <p>&copy; 2025 Mi Tienda. Todos los derechos reservados.</p>
        </footer>
      </body>
    </html>
  );
}