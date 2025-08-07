// app/(commerce)/layout.tsx

import type { ReactNode } from 'react';

export default function CommerceLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-50 text-gray-900">
        <header className="p-4 bg-white shadow-md">
          <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Mi Tienda</h1>
            <ul className="flex gap-4">
              <li><a href="/(commerce)/">Inicio</a></li>
              <li><a href="/(commerce)/products">Productos</a></li>
              <li><a href="/(commerce)/profile">Mi Perfil</a></li>
              <li><a href="/login">Iniciar sesión</a></li>
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