import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Coffee, Leaf, Award, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Coffee className="h-8 w-8 text-amber-600" />
              <span className="text-2xl font-bold text-gray-900">Highland Harvest Coffee</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="#about" className="text-gray-600 hover:text-amber-600 transition-colors">
                About
              </Link>
              <Link href="#products" className="text-gray-600 hover:text-amber-600 transition-colors">
                Coffee
              </Link>
              <Link href="#process" className="text-gray-600 hover:text-amber-600 transition-colors">
                Our Process
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-amber-600 transition-colors">
                Contact
              </Link>
              <Link href="/admin" className="text-gray-600 hover:text-amber-600 transition-colors">
                Admin
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">
                <Leaf className="w-3 h-3 mr-1" />
                Sustainably Grown
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">From Our Farm to Your Cup</h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Experience the rich, authentic flavors of premium coffee beans grown at 1,800 meters above sea level in
                the Kenyan Highlands. Three generations of passionate farmers in every bean.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                  Shop Our Coffee
                </Button>
                <Button size="lg" variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                  Learn Our Story
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/farmers-picking-coffee.jpg"
                alt="Coffee farmers picking ripe coffee cherries in the highlands"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Award className="h-8 w-8 text-amber-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Award Winning</p>
                    <p className="text-sm text-gray-600">Specialty Coffee Association</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Family Legacy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For over 60 years, the Mwangi family has been cultivating exceptional coffee in the heart of Kenya's
              Central Province.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <CardTitle>Family Tradition</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Three generations of coffee farmers, each passing down knowledge and passion for growing the perfect
                  bean.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader className="text-center">
                <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Sustainable Farming</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  We practice organic farming methods that protect our environment and produce healthier, more flavorful
                  coffee.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader className="text-center">
                <Award className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <CardTitle>Premium Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Hand-picked at peak ripeness and processed with care to ensure every cup delivers exceptional flavor.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Farmers Section */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Meet Our Farmers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our dedicated team of skilled farmers work year-round to bring you the finest coffee beans from our
              highland farms.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <Image
                src="/images/helena-coffee.jpg"
                alt="Farmer with traditional basket collecting coffee cherries"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Traditional Harvesting Methods</h3>
              <p className="text-gray-600 leading-relaxed">
                Our farmers use traditional methods passed down through generations. Each coffee cherry is carefully
                hand-picked at the perfect moment of ripeness, ensuring only the highest quality beans make it to your
                cup.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">50+ Farmers</h4>
                  <p className="text-sm text-gray-600">Skilled workers in our community</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Fair Trade</h4>
                  <p className="text-sm text-gray-600">Ensuring fair wages for all</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden shadow-lg">
              <div className="relative h-48">
                <Image
                  src="/images/coffee-harvest-workers.jpg"
                  alt="Team of coffee harvest workers"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Harvest Season</CardTitle>
                <CardDescription>
                  During peak harvest season, our entire community comes together to pick the ripest coffee cherries.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden shadow-lg">
              <div className="relative h-48">
                <Image
                  src="/images/farmer-sorting-beans.jpg"
                  alt="Farmer carefully sorting coffee beans"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Quality Control</CardTitle>
                <CardDescription>
                  Every batch is carefully sorted by hand to ensure only the finest beans proceed to processing.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden shadow-lg">
              <div className="relative h-48">
                <Image
                  src="/images/community-farmers.jpg"
                  alt="Community of coffee farmers working together"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Community Spirit</CardTitle>
                <CardDescription>
                  Our farming community works together, sharing knowledge and supporting each other's families.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Coffee Varieties</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our carefully curated selection of single-origin coffees, each with its own unique character and
              flavor profile.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/images/coffee.jpg"
                  alt="Colombian Supremo coffee beans"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-amber-600">Best Seller</Badge>
              </div>
              <CardHeader>
                <CardTitle>Colombian Supremo</CardTitle>
                <CardDescription>Rich, full-bodied with notes of chocolate and caramel</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-600">$24.99</span>
                  <Button className="bg-amber-600 hover:bg-amber-700">Add to Cart</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/images/roasted-beans.jpg"
                  alt="High Altitude Blend coffee beans"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-green-600">Organic</Badge>
              </div>
              <CardHeader>
                <CardTitle>High Altitude Blend</CardTitle>
                <CardDescription>Bright acidity with floral and citrus undertones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-600">$28.99</span>
                  <Button className="bg-amber-600 hover:bg-amber-700">Add to Cart</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image src="/images/dark-roast.jpg" alt="Dark Roast coffee beans" fill className="object-cover" />
                <Badge className="absolute top-4 left-4 bg-red-600">Limited Edition</Badge>
              </div>
              <CardHeader>
                <CardTitle>Volcanic Dark Roast</CardTitle>
                <CardDescription>Bold and smoky with hints of dark chocolate</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-600">$32.99</span>
                  <Button className="bg-amber-600 hover:bg-amber-700">Add to Cart</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">From Seed to Cup</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow the journey of our coffee beans through our meticulous growing and processing methods.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <span className="text-amber-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Planting & Growing</h3>
                  <p className="text-gray-600">
                    Coffee plants are carefully cultivated at high altitude in the fertile volcanic soils of the Kenyan
                    Highlands, where cooler temperatures create ideal growing conditions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <span className="text-amber-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Hand Picking</h3>
                  <p className="text-gray-600">
                    Only the ripest cherries are hand-selected by experienced pickers who know exactly when each cherry
                    reaches peak flavor.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <span className="text-amber-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Processing</h3>
                  <p className="text-gray-600">
                    Cherries are processed using traditional washed methods, then dried on raised beds under the
                    Colombian sun.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <span className="text-amber-600 font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Roasting & Packaging</h3>
                  <p className="text-gray-600">
                    Beans are expertly roasted in small batches and immediately packaged to preserve freshness and
                    flavor.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/coffee-harvest-workers.jpg"
                alt="Coffee farmers working during harvest season"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about our coffee or want to visit our farm? We'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Reach out to us through any of these channels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-amber-600" />
                  <div>
                    <p className="font-semibold">Farm Location</p>
                    <p className="text-gray-600">Kiambu County, Kenya</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-amber-600" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-600">+254 712 345 678</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-amber-600" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">info@highlandharvest.co.ke</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>We'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  ></textarea>
                </div>

                <Button className="w-full bg-amber-600 hover:bg-amber-700">Send Message</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Coffee className="h-8 w-8 text-amber-600" />
                <span className="text-2xl font-bold">Highland Harvest Coffee</span>
              </div>
              <p className="text-gray-400">
                Premium Kenyan coffee from our family farm to your cup. Three generations of passion and tradition.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#about" className="hover:text-amber-600 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#products" className="hover:text-amber-600 transition-colors">
                    Our Coffee
                  </Link>
                </li>
                <li>
                  <Link href="#process" className="hover:text-amber-600 transition-colors">
                    Our Process
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-amber-600 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <p className="text-gray-400 mb-4">Stay updated with our latest harvests and coffee news.</p>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-600 text-gray-400 hover:bg-amber-600 hover:border-amber-600"
                >
                  Facebook
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-600 text-gray-400 hover:bg-amber-600 hover:border-amber-600"
                >
                  Instagram
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Highland Harvest Coffee. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
