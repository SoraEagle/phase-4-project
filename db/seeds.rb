puts "🌱 Seeding hotels..."
hotel = Hotel.create(name: 'La Quinta', city: 'Dallas', country: 'United States', company: 'La Quinta Inc.')
hotel = Hotel.create(name: 'La Doce', city: 'San Diego', country: 'United States', company: 'La Quinta Inc.')
puts "✅ Done seeding!"