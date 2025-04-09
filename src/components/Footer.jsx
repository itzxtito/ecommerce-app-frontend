export default function Footer() {
  return (
    <footer className="bg-black text-white text-center py-6 mt-20">
      <p className="text-sm font-sans">
        © {new Date().getFullYear()}{' '}
        <span className="font-serif">Tito’s E-Commerce Site</span>. All rights reserved.
      </p>
    </footer>
  );
}
