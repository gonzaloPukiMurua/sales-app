// app/(commerce)/page.tsx

export default function CommerceHome() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Bienvenido a nuestra tienda</h2>
      <p className="mb-4">Explorá los productos, gestioná tu perfil o revisá tu carrito de compras.</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Acá podrías renderizar tarjetas de productos destacados */}
        <div className="p-4 bg-white shadow rounded">Producto 1</div>
        <div className="p-4 bg-white shadow rounded">Producto 2</div>
        <div className="p-4 bg-white shadow rounded">Producto 3</div>
        <div className="p-4 bg-white shadow rounded">Producto 4</div>
      </div>
    </div>
  );
}
