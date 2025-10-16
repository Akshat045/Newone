import Image from 'next/image';
import {
  SparklesIcon,
  HeartIcon,
  ShieldCheckIcon,
  GlobeAsiaAustraliaIcon,
  UserGroupIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';

export default function About() {
  const values = [
    {
      icon: HeartIcon,
      title: 'Handcrafted with Love',
      description: 'Every piece is carefully crafted by skilled artisans in India, carrying forward centuries-old traditions.',
      color: 'text-rose-500'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Quality Assurance',
      description: 'We use only the finest materials and rigorous quality checks to ensure lasting beauty.',
      color: 'text-amber-500'
    },
    {
      icon: GlobeAsiaAustraliaIcon,
      title: 'Indian Heritage',
      description: 'Rooted in the rich jewelry-making traditions of India, blending ancient techniques with modern designs.',
      color: 'text-purple-500'
    },
    {
      icon: UserGroupIcon,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We build lasting relationships, not just transactions.',
      color: 'text-green-500'
    }
  ];

  const stats = [
    { number: '15+', label: 'Years of Experience' },
    { number: '5000+', label: 'Happy Customers' },
    { number: '500+', label: 'Unique Designs' },
    { number: '50+', label: 'Master Craftsmen' }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 bg-amber-100 rounded-full px-6 py-3 mb-8">
            <SparklesIcon className="h-5 w-5 text-amber-600" />
            <span className="text-sm font-medium text-amber-800">Our Story</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 font-playfair">
            Crafting Dreams Into
            <span className="bg-gradient-to-r from-amber-600 via-rose-600 to-purple-600 bg-clip-text text-transparent"> Reality</span>
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed font-crimson">
            Born from a passion for exquisite craftsmanship and inspired by India's rich jewelry heritage,
            Elegant Gems has been creating timeless pieces that celebrate life's most precious moments since 2024.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6 font-playfair">
                A Legacy of Excellence
              </h3>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Founded in the heart of Delhi's vibrant Karol Bagh, our journey began with a simple belief:
                  jewelry should be more than an accessory—it should be a celebration of your unique story.
                </p>
                <p>
                  Drawing inspiration from India's centuries-old traditions of jewelry making, we combine
                  time-honored techniques with contemporary designs. Each piece in our collection reflects
                  the skill of master craftsmen who have inherited their art through generations.
                </p>
                <p>
                  From the bustling markets of Jaipur to the diamond cutting centers of Surat, we source
                  the finest materials and work with the most skilled artisans to bring you jewelry that
                  embodies both tradition and innovation.
                </p>
              </div>
            </div>

            {/* Awards */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-amber-100 rounded-full">
                  <TrophyIcon className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Award-Winning Designs</h4>
                  <p className="text-sm text-gray-600">Recognized by Indian Jewelry Association 2024</p>
                </div>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {/* Main craftsman image */}
              <div className="col-span-2 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop&crop=center"
                  alt="Master jewelry craftsman at work"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Master Craftsman</p>
                  <p className="text-sm opacity-90">Creating perfection since 1995</p>
                </div>
              </div>

              {/* Workshop images */}
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop&crop=center"
                  alt="Traditional jewelry workshop tools"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1603561596112-db532d74dcb9?w=400&h=400&fit=crop&crop=center"
                  alt="Precious gemstones collection"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-6 -right-6 bg-white rounded-full p-4 shadow-xl border-2 border-amber-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600 font-playfair">15+</div>
                <div className="text-xs text-gray-600">Years</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12 font-playfair">
            Our Core Values
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <div className={`inline-flex p-4 rounded-full bg-gray-50 mb-6`}>
                    <IconComponent className={`h-8 w-8 ${value.color}`} />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 font-playfair">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-amber-500 via-rose-500 to-purple-500 rounded-3xl p-8 lg:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4 font-playfair">
              Trusted by Thousands
            </h3>
            <p className="text-lg opacity-90">
              Building relationships, one precious piece at a time
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2 font-playfair">
                  {stat.number}
                </div>
                <div className="text-sm lg:text-base opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Craftmanship Process */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12 font-playfair">
            Our Craftsmanship Process
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Design & Concept',
                description: 'Every piece begins with a vision, carefully sketched and refined by our design team.',
                image: 'https://images.unsplash.com/photo-1583292651514-3a3b36e05b23?w=400&h=300&fit=crop&crop=center'
              },
              {
                step: '02',
                title: 'Handcrafting',
                description: 'Master artisans bring the design to life using traditional techniques passed down through generations.',
                image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop&crop=center'
              },
              {
                step: '03',
                title: 'Quality Assurance',
                description: 'Each piece undergoes rigorous quality checks to ensure it meets our exacting standards.',
                image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=300&fit=crop&crop=center'
              }
            ].map((process, index) => (
              <div key={index} className="group">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg mb-6 group-hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src={process.image}
                    alt={process.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center">
                      <span className="text-lg font-bold text-amber-600 font-playfair">{process.step}</span>
                    </div>
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3 font-playfair">
                  {process.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}