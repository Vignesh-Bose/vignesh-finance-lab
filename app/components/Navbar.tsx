export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6">
      <h1 className="text-xl font-bold">
        Vignesh Finance Lab
      </h1>

      <div className="flex gap-6">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Tools</a>
        <a href="#">Templates</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}