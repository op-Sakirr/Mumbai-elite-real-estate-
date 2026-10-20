import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Outright Building Sale in Dadar, Mumbai | Property Listings',
  description: 'Explore outright building sale opportunities in Dadar, Mumbai. Enquire about available properties, building details, pricing and site visits.',
};

export default function DadarBuildingSale() {
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
            "url": process.env.APP_URL
          })
        }}
      />
      
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            <Link href="/">Mumbai Elite Real Estate</Link>
          </h1>
        </nav>
      </header>

      <article className="py-16 px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Outright Building Sale in Dadar, Mumbai</h1>
        
        <p className="text-lg text-gray-700 mb-6">Looking for an outright building sale in Dadar? Explore building purchase opportunities in Dadar, Mumbai, for investment, commercial use, redevelopment assessment, or other permitted purposes.</p>
        
        <p className="text-lg text-gray-700 mb-6">Dadar is an established Mumbai locality with residential and commercial property options. The suitability of a building depends on its exact location, ownership, current occupancy, permitted use, condition, and legal documentation.</p>

        <p className="text-lg text-gray-700 mb-6">If you are searching for an entire building for outright purchase, share your requirements to enquire about available properties, pricing, building specifications, and site visits.</p>

        <a href="#contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition mb-12">Enquire About Building Availability</a>

        <h2 className="text-3xl font-bold text-gray-900 mb-6">Explore Buildings for Outright Sale in Dadar</h2>
        <p className="text-lg text-gray-700 mb-6">An outright building purchase involves acquiring a property as a whole, subject to the ownership structure and terms of the transaction.</p>
        <p className="text-lg text-gray-700 mb-4">When evaluating buildings in Dadar, consider:</p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
          <li>Property Location: Confirm whether the property is in Dadar West, Dadar East, or another nearby area.</li>
          <li>Building Type: Identify whether the property is residential, commercial, mixed-use, or intended for another permitted purpose.</li>
          <li>Building Details: Review the land area, built-up area, floor configuration, age, and physical condition.</li>
          <li>Occupancy Status: Confirm whether the building is vacant, occupied, tenanted, or subject to existing agreements.</li>
          <li>Legal Due Diligence: Verify title, ownership, approvals, encumbrances, and applicable restrictions.</li>
          <li>Asking Price: Compare the quoted price with relevant properties and assess the total acquisition cost.</li>
        </ul>
        <p className="text-lg text-gray-700 mb-8">Actual availability, property specifications, and transaction terms must be confirmed with the seller.</p>

        <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Consider Dadar for a Building Purchase?</h2>
        <p className="text-lg text-gray-700 mb-8">Dadar is a well-established locality in Mumbai, with residential neighbourhoods, commercial activity, and rail connectivity.</p>
        
        <h3 className="text-xl font-semibold mb-2">Established Urban Location</h3>
        <p className="text-lg text-gray-700 mb-6">Evaluate the surrounding residential and commercial areas, local amenities, and the property&apos;s suitability for your intended use.</p>
        
        <h3 className="text-xl font-semibold mb-2">Connectivity and Accessibility</h3>
        <p className="text-lg text-gray-700 mb-6">Review access to Dadar railway station, public transport, main roads, and nearby business districts based on the property&apos;s exact location.</p>
        
        <h3 className="text-xl font-semibold mb-2">Multiple Property Use Cases</h3>
        <p className="text-lg text-gray-700 mb-6">Depending on zoning, permissions, occupancy, and the building&apos;s legal status, a property may be suitable for residential ownership, commercial use, or redevelopment assessment.</p>
        
        <h3 className="text-xl font-semibold mb-2">Property-Specific Investment Analysis</h3>
        <p className="text-lg text-gray-700 mb-8">Assess acquisition cost, current rental income if applicable, maintenance expenses, legal obligations, and potential future costs. Do not assume future appreciation or returns.</p>

        <h2 className="text-3xl font-bold text-gray-900 mb-6">Commercial and Residential Buildings for Sale in Dadar</h2>
        <p className="text-lg text-gray-700 mb-6">Buyers looking for an entire building should first identify the type of property they want to acquire.</p>

        <h3 className="text-xl font-semibold mb-2">Commercial Buildings</h3>
        <p className="text-lg text-gray-700 mb-6">Commercial buildings may be considered by businesses or investors, subject to permitted use, occupancy requirements, applicable approvals, and property-specific conditions.</p>

        <h3 className="text-xl font-semibold mb-2">Residential Buildings</h3>
        <p className="text-lg text-gray-700 mb-6">Residential buildings may interest buyers looking to acquire an entire residential property. Existing tenancy arrangements, occupant rights, building condition, and redevelopment restrictions should be reviewed carefully.</p>

        <h3 className="text-xl font-semibold mb-2">Buildings for Redevelopment</h3>
        <p className="text-lg text-gray-700 mb-8">Some buyers evaluate properties for potential redevelopment. Feasibility depends on title, planning regulations, development control rules, building permissions, and other applicable legal requirements.</p>

        <h2 className="text-3xl font-bold text-gray-900 mb-6">Documents to Verify Before Buying an Entire Building</h2>
        <p className="text-lg text-gray-700 mb-4">Before proceeding with an outright building purchase in Dadar, arrange an independent legal and technical review.</p>
        <p className="text-lg text-gray-700 mb-4">Important checks may include:</p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
          <li>Ownership and title documents.</li>
          <li>Property registration and relevant land records.</li>
          <li>Approved building plans and applicable permissions.</li>
          <li>Occupancy certificate or other relevant compliance documents, where applicable.</li>
          <li>Existing leases, tenancy agreements, and occupant details.</li>
          <li>Outstanding property taxes, dues, mortgages, or encumbrances.</li>
          <li>Applicable redevelopment, zoning, and development restrictions.</li>
        </ul>
        <p className="text-lg text-gray-700 mb-8">The exact documents required depend on the property and transaction. Consult a qualified property lawyer and relevant professionals before signing or paying an advance.</p>

        <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Enquire About an Outright Building Sale in Dadar</h2>
        <p className="text-lg text-gray-700 mb-4">To identify suitable building opportunities, provide your requirements clearly.</p>
        <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-6">
          <li>Specify your preferred area: Dadar West, Dadar East, or nearby locations.</li>
          <li>Share your approximate purchase budget.</li>
          <li>Mention whether you prefer a residential, commercial, or mixed-use building.</li>
          <li>State your intended use and preferred property size.</li>
          <li>Request verified property details, asking price, documentation, and a site visit.</li>
        </ol>
        <p className="text-lg text-gray-700 mb-6">Our team can help you enquire about relevant opportunities based on your requirements and current property availability.</p>
        <a href="#contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition mb-12">Request Building Details</a>

        <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <h3 className="text-xl font-semibold mb-2">What does outright building sale mean?</h3>
        <p className="text-lg text-gray-700 mb-4">An outright building sale generally refers to the purchase of an entire building rather than an individual flat or unit. The exact ownership rights depend on the legal structure and transaction documents.</p>
        
        <h3 className="text-xl font-semibold mb-2">Are entire buildings available for sale in Dadar?</h3>
        <p className="text-lg text-gray-700 mb-4">Availability changes over time. Contact property consultants or sellers to confirm current listings, ownership details, asking prices, and transaction terms.</p>
        
        <h3 className="text-xl font-semibold mb-2">What is the price of an outright building in Dadar?</h3>
        <p className="text-lg text-gray-700 mb-4">Prices vary according to location, plot area, built-up area, building condition, occupancy, permitted use, and legal status. Request a current quotation for the specific property.</p>
        
        <h3 className="text-xl font-semibold mb-2">Can I buy a building in Dadar for redevelopment?</h3>
        <p className="text-lg text-gray-700 mb-4">Potentially, but redevelopment feasibility must be established through title verification, planning regulations, development rights, existing occupant arrangements, and applicable approvals.</p>
        
        <h3 className="text-xl font-semibold mb-2">What should investors check before purchasing a building?</h3>
        <p className="text-lg text-gray-700 mb-4">Investors should review title, legal permissions, occupancy, rental agreements, liabilities, property condition, acquisition costs, and any restrictions affecting the proposed use.</p>
        
        <h3 className="text-xl font-semibold mb-2">How can I arrange a site visit?</h3>
        <p className="text-lg text-gray-700 mb-8">Submit an enquiry with your preferred location and property requirements. A site visit can be arranged subject to seller confirmation, availability, and access permissions.</p>

        <h2 className="text-3xl font-bold text-gray-900 mb-6">Explore More Mumbai Property Opportunities</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
          <li>Land for Sale in Mumbai</li>
          <li>Commercial Property for Sale in Mumbai</li>
          <li>Land for Joint Venture in Mumbai</li>
          <li>Plots for Sale in Mumbai</li>
          <li>Buildings for Sale in Mumbai</li>
        </ul>
        <p className="text-lg text-gray-700 mb-8">Contact our team to discuss your requirements and enquire about suitable available properties.</p>
      </article>

      <section id="contact" className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Enquire About Outright Building Sales in Dadar</h3>
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
              <span>Dadar, Mumbai, India</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
