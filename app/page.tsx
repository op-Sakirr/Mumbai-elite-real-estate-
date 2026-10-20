import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';
import bandraImage from '@/src/assets/images/bandra_apartment_1792508444084.jpg';
import juhuImage from '@/src/assets/images/juhu_villa_1792508444846.jpg';
import bkcImage from '@/src/assets/images/bkc_office_1792508444114.jpg';

const featuredProperties = [
  { id: 1, title: 'Luxury Apartment in Bandra West', price: '₹5.5 Cr', image: bandraImage },
  { id: 2, title: 'Sea View Villa in Juhu', price: '₹12 Cr', image: juhuImage },
  { id: 3, title: 'Modern Office in BKC', price: '₹8 Cr', image: bkcImage },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "name": "Mumbai Elite Real Estate",
            "description": "Premium real estate agency in Mumbai offering luxury residential and commercial properties.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Mumbai",
              "addressCountry": "IN"
            },
            "url": process.env.APP_URL
          })
        }}
      />
      
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Mumbai Elite Real Estate</h1>
          <div className="space-x-4 text-gray-600">
            <a href="#properties">Properties</a>
          </div>
        </nav>
      </header>

      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Find Your Dream Property in Mumbai</h2>
          <p className="text-xl text-gray-600 mb-8">Expert guidance for luxury residential and commercial real estate across Mumbai.</p>
          <a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">Contact Us Today</a>
        </div>
      </section>

      <section id="properties" className="py-16 px-4 max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold text-gray-900 mb-10">Featured Properties</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image 
                src={property.image} 
                alt={property.title} 
                width={600} 
                height={400} 
                className="w-full h-48 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold mb-2">{property.title}</h4>
                <p className="text-blue-600 font-bold">{property.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Get in Touch</h3>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="flex items-center gap-3">
              <Phone className="text-blue-500" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-blue-500" />
              <span>contact@mumbaielite.re</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-blue-500" />
              <span>Mumbai, India</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
