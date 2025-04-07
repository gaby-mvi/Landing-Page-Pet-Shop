import royal from '../../../public/royal.png'
import golden from '../../../public/golden.png'
import primier from '../../../public/primier.png'
import natural from '../../../public/natural.png'
import whiskas from '../../../public/whiskas.png'
import Image from 'next/image'
import { FacebookLogo, InstagramLogo, TiktokLogo } from '@phosphor-icons/react/dist/ssr'
import { Mail, Phone, MapPin } from 'lucide-react'

const brands = [
    { name: "Royal Canin", logo: royal },
    { name: "Golden", logo: golden },
    { name: "Primier", logo: primier },
    { name: "Formula Natural", logo: natural },
    { name: "Whiskas", logo: whiskas },
    { name: "Golden", logo: golden },
]

export function Footer() {
    return (
        <section className="w-full bg-[#e84c3d] py-16 text-white">
            <div className="container mx-auto px-4">
                <div className="border-b border-white/20 pb-8">
                    <h4 className="text-3xl font-semibold mb-8 text-center">Marcas que trabalhamos</h4>
                    <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
                        {brands.map((item, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg flex items-center justify-center"
                                data-aos="fade-up" data-aos-delay={index * 150}>
                                <Image
                                    src={item.logo}
                                    alt={item.name}
                                    width={100}
                                    height={50}
                                    quality={100}
                                    style={{
                                        width: "auto",
                                        height: "auto",
                                    }}
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                <footer className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-8 mt-5 text-center md:text-left">
                    <div className="flex flex-col items-center md:items-start gap-3">
                        <h3 className="text-2xl font-semibold mb-2">🐾 Pet Shop</h3>
                        <p className="max-w-xs">Cuidando do seu melhor amigo com amor e dedicação.</p>
                        <a href={`https://wa.me/5548900008800?text=Olá vim pelo site e gostaria de mais informações`}
                            target="_blank"
                            className="bg-green-500 px-4 py-2 rounded-md text-white hover:bg-green-600 transition">
                            Contato via Whatsapp
                        </a>
                    </div>
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <h3 className="text-2xl font-semibold mb-2">📞 Contatos</h3>
                        <p className="flex items-center gap-2"><Mail className="w-4 h-4" />Email: texte@teste.com</p>
                        <p className="flex items-center gap-2"><Phone className="w-4 h-4" />Telefone: (XX) 912345678</p>
                        <p className="flex items-center gap-2"><MapPin className="w-4 h-4" />Rua, X, Centro, Tubarão | SC</p>
                    </div>
                    <div className="flex flex-col items-center md:items-start gap-3">
                        <h3 className="text-2xl font-semibold mb-2">🌐 Redes Sociais</h3>
                        <div className="flex gap-4 justify-center md:justify-start">
                            <a href="#" target="_blank" className="hover:scale-110 transition">
                                <FacebookLogo className="w-8 h-8" />
                            </a>
                            <a href="#" target="_blank" className="hover:scale-110 transition">
                                <InstagramLogo className="w-8 h-8" />
                            </a>
                            <a href="#" target="_blank" className="hover:scale-110 transition">
                                <TiktokLogo className="w-8 h-8" />
                            </a>
                        </div>
                    </div>
                </footer>
                </div>
                <div className="flex flex-col items-center justify-center gap-1.5 text-center">
                    <p>Copyright© 2025 | Pet Shop - Todos os direitos reservados.</p>
                    <p>Desenvolvido por <a href="https://www.linkedin.com/in/gabriela-srosa/" target="_blank" className="font-semibold"> Gabriela Rosa</a></p>
                </div>
            </div>
        </section>
    )
}