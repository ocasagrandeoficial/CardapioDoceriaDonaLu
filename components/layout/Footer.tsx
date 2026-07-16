import { Cake, Instagram } from "lucide-react";

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/de.minascafe/",
    Icon: Instagram,
  },
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-200 bg-white">
      <div className="container flex flex-col items-center gap-6 py-10 text-center">
        <div className="flex items-center gap-2">
          <Cake className="h-6 w-6 text-pink-600" />
          <span className="font-serif text-lg font-semibold text-zinc-800">
            Doceria Dona Lu
          </span>
        </div>

        <p className="text-sm text-zinc-500">
          Doces artesanais — sabor e carinho em cada detalhe.
        </p>

        <div className="flex items-center gap-4">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-colors hover:border-pink-300 hover:bg-pink-50 hover:text-pink-700"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        <p className="text-xs text-zinc-400">
          © {new Date().getFullYear()} Doceria Dona Lu. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
