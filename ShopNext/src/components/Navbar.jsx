import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import shopNextLogo from '../assets/ShopNext logo img.png'

const links = [
    { label: 'Home', to: '/' },
    { label: 'Collection', to: '/products' },
    { label: 'Cart', to: '/cart' },
]

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const closeMenu = () => setMenuOpen(false)
    const linkClass = ({ isActive }) =>
        `relative rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
            isActive
                ? 'bg-[#e5efdf] text-[#244c3b]'
                : 'text-[#58635a] hover:bg-[#f0f5ed] hover:text-[#244c3b]'
        }`

    return (
        <header className="sticky top-0 z-50 border-b border-[#e1e8dc] bg-[#fbfaf6]/95 shadow-[0_5px_24px_rgba(36,76,59,0.08)] backdrop-blur-lg">
            <nav className="flex min-h-[76px] w-full items-center justify-between px-3 sm:px-5 lg:px-6" aria-label="Main navigation">
                <NavLink to="/" onClick={closeMenu} className="group flex items-center gap-2.5" aria-label="ShopNext home">
                    <img
                        src={shopNextLogo}
                        alt=""
                        aria-hidden="true"
                        className="size-12 rounded-xl object-cover transition-transform duration-200 group-hover:scale-[1.03]"
                    />
                    <span className="flex flex-col leading-tight">
                        <span className="text-xl font-extrabold tracking-tight text-[#573b3d] sm:text-2xl">
                            ShopNext<span className="text-[#6f9364]">.</span>
                        </span>
                        <span className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.16em] text-[#71836a] sm:text-[10px]">
                            Good things, next
                        </span>
                    </span>
                </NavLink>

                <div className="ml-auto hidden items-center gap-1 rounded-full border border-[#e1e8dc] bg-white/85 p-1.5 md:flex">
                    {links.map((link) => (
                        <NavLink key={link.to} to={link.to} className={linkClass}>
                            {link.label}
                            {link.label === 'Cart' && (
                                <span className="ml-2 inline-grid size-5 place-items-center rounded-full bg-[#6f9364] text-[10px] font-bold text-white" aria-hidden="true">
                                    +
                                </span>
                            )}
                        </NavLink>
                    ))}
                </div>

                <button
                    type="button"
                    className="ml-2 inline-flex min-h-11 items-center gap-2 rounded-full border border-[#dfe4d9] bg-white px-4 text-sm font-bold text-[#31563a] shadow-sm transition hover:border-[#547650] hover:bg-[#f0f5ed] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#547650] md:hidden"
                    aria-expanded={menuOpen}
                    aria-controls="mobile-navigation"
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    <span className="text-base" aria-hidden="true">{menuOpen ? '×' : '☰'}</span>
                    {menuOpen ? 'Close' : 'Menu'}
                </button>

                <NavLink to="/register" className="ml-2 hidden rounded-full border border-[#dfe4d9] bg-white px-4 py-2 text-sm font-bold text-[#31563a] transition hover:border-[#547650] hover:bg-[#f0f5ed] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#547650] md:inline-flex">
                    Register / Login
                </NavLink>
            </nav>

            <div
                id="mobile-navigation"
                className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-200 md:hidden ${menuOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                aria-hidden={!menuOpen}
            >
                <div className="min-h-0">
                    <div className="mx-3 mb-4 grid gap-1 rounded-2xl border border-[#e1e8dc] bg-[#fffdf9] p-2 sm:mx-5">
                        {links.map((link) => (
                            <NavLink key={link.to} to={link.to} className={linkClass} onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>
                                {link.label}
                                <span className="float-right text-[#6f9364]" aria-hidden="true">→</span>
                            </NavLink>
                        ))}
                        <NavLink to="/register" className={linkClass} onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>
                            Register / Login
                            <span className="float-right text-[#6f9364]" aria-hidden="true">→</span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar