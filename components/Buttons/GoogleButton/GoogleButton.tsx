export const GoogleButton = () => {
  const handleLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google`;
  };

  return (
    <button
      onClick={handleLogin}
      className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
    >
      Iniciar sesión con Google
    </button>
  );
};